import React from "react";
import { useFormik } from "formik";
import { useState, useEffect, createContext, useMemo, useCallback } from "react";
import {
  getRecord,
  saveRecord,
  deleteRecord
} from "../Grid/crud-helper";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import FormLayout from "./field-mapper";
import { useSnackbar } from "../SnackBar";
import { DialogComponent } from "../Dialog";
import { useStateContext, useRouter } from "../useRouter/StateProvider";
import { useFramework } from "../FrameworkProvider";
import actionsStateProvider from "../useRouter/actions";
import PageTitle from "../PageTitle";
import utils, { getPermissions } from "../utils";
import Relations from "./relations";
export const ActiveStepContext = createContext(1);
const defaultFieldConfigs = {};
const consts = {
  object: "object",
  function: "function",
  baseData: "baseData",
  string: "string",
  create: "Create",
  copy: "Copy",
  edit: "Edit",
  number: "number",
  loadIdIndex: 1,
  editIdIndex: 0
};

const Form = ({
  model,
  api,
  models,
  relationFilters = {},
  permissions = {},
  Layout = FormLayout,
  baseSaveData = {},
  sx,
  readOnly,
  beforeSubmit,
  deletePromptText,
  detailPanelId = null, // Grid Row Detail Panel Id
  onCancel,
  onSaveSuccess
}) => {
  const formTitle = model.formTitle || model.title;
  const { navigate, getParams, useParams, pathname } = useRouter();
  const { relations = [] } = model;
  const { dispatchData, stateData, buildUrl } = useStateContext();
  const params = useParams() || getParams;
  const { id: idWithOptions = "" } = params;
  const id = detailPanelId || idWithOptions.split("-")[consts.editIdIndex];
  const searchParams = new URLSearchParams(window.location.search);
  const baseDataFromParams = searchParams.has(consts.baseData) && searchParams.get(consts.baseData);
  if (baseDataFromParams) {
    const parsedData = JSON.parse(baseDataFromParams);
    if (typeof parsedData === consts.object && parsedData !== null) {
      baseSaveData = { ...baseSaveData, ...parsedData };
    }
  }
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [lookups, setLookups] = useState({});
  const [isDeleting, setIsDeleting] = useState(false);
  const snackbar = useSnackbar();
  const [validationSchema, setValidationSchema] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isDiscardDialogOpen, setIsDiscardDialogOpen] = useState(false);
  const [deleteError, setDeleteError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const fieldConfigs = typeof model.applyFieldConfig === consts.function
    ? model.applyFieldConfig({ data, lookups })
    : defaultFieldConfigs;
  const gridApi = buildUrl(model.controllerType, model.api);
  const { mode } = stateData.dataForm;
  const userData = stateData.getUserData || {};
  const userDefinedPermissions = {
    add: true,
    edit: true,
    delete: true,
    ...model.permissions,
    ...permissions
  };
  const { canEdit } = getPermissions({
    userData,
    model,
    userDefinedPermissions
  });
  const { hideBreadcrumb = false, navigateBack } = model;
  const recordEditable = !("canEdit" in data) || data.canEdit;

  const handleNavigation = useCallback(() => {
    let navigatePath;
    switch (typeof navigateBack) {
      case consts.function:
        navigatePath = navigateBack({ params, searchParams, data });
        break;
      case consts.number:
      case consts.string:
        navigatePath = navigateBack;
        break;
      default:
        navigatePath = pathname.substring(0, pathname.lastIndexOf("/"));
        break;
    }
    navigate(navigatePath);
  }, [navigateBack, navigate, params, searchParams, data, pathname]);

  const isNew = useMemo(() => utils.emptyIdValues.includes(id), [id]);

  const initialValues = useMemo(() => isNew
    ? { ...model.initialValues, ...data, ...baseSaveData }
    : { ...baseSaveData, ...model.initialValues, ...data }, [model.initialValues, data, id]);

  useEffect(() => {
    const formApi = api || gridApi;
    if (!formApi) return;
    setIsLoading(true);
    setValidationSchema(model.getValidationSchema({ id, snackbar }));
    const options = idWithOptions.split("-");
    const params = {
      api: formApi,
      model,
      setError: errorOnLoad
    };
    getRecord({
      ...params,
      id: detailPanelId || (options.length > 1 ? options[consts.loadIdIndex] : id),
      setActiveRecord
    });

  }, [id, idWithOptions, model, api, gridApi, detailPanelId]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    onSubmit: async (values, { resetForm }) => {
      Object.keys(values).forEach(key => {
        if (typeof values[key] === consts.string) {
          values[key] = values[key].trim();
        }
      });
      setIsLoading(true);
      saveRecord({
        id,
        api: gridApi,
        values: values,
        setError: snackbar.showError,
        model
      })
        .then((success) => {
          if (!success) return;
          if (model.reloadOnSave) {
            return window.location.reload();
          }
          if (typeof onSaveSuccess === consts.function) {
            onSaveSuccess();
          }
          const message = success.info ? success.info : `Record ${id === 0 ? "Added" : "Updated"} Successfully.`;
          snackbar.showMessage(message);
          /**
          * Handle navigation after form operations
          * By default, the form navigates back to the grid after save/cancel operations.
          * This behavior can be controlled by setting navigateBack "false" / false in model config which disables navigation completely.
          */
          navigateBack !== false && handleNavigation();
          resetForm({ values: formik.values});
        })
        .catch((err) => {
          snackbar.showError(
            "An error occured.",
            err
          );
          if (model.reloadOnSave) {
            resetForm();
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  });

  const handleDiscardChanges = useCallback(() => {
    formik.resetForm();
    setIsDiscardDialogOpen(false);
    if (typeof onCancel === consts.function) {
      onCancel();
    }
    navigateBack !== false && handleNavigation();
  }, [formik, onCancel, navigateBack, handleNavigation]);

  const errorOnLoad = useCallback((title, error) => {
    setIsLoading(false);
    snackbar.showError(title, error);
    handleNavigation();
  }, [snackbar, handleNavigation]);

  const setActiveRecord = function ({ id, title, record, lookups }) {
    const isCopy = idWithOptions.indexOf("-") > -1;
    const isNew = !id || id === "0";
    const pageTitle = isNew ? consts.create : isCopy ? consts.copy : consts.edit;
    const linkColumn = isNew ? "" : record[model.linkColumn];
    const breadcrumbs = [{ text: model.breadCrumbs }, { text: pageTitle }];
    if (isCopy) {
      record[model.linkColumn] = "";
    }
    model.columns.forEach((item) => {
      if (item.skipCopy && isCopy) {
        record[item.field] = "";
      }
    });
    setData(record);
    setLookups(lookups);
    setIsLoading(false);
    if (linkColumn !== "") {
      breadcrumbs.push({ text: linkColumn });
    }
    dispatchData({
      type: actionsStateProvider.PAGE_TITLE_DETAILS,
      payload: {
        showBreadcrumbs: true,
        breadcrumbs: breadcrumbs
      }
    });
  };
  const handleFormCancel = useCallback((event) => {
    if (formik.dirty && recordEditable) {
      setIsDiscardDialogOpen(true);
    } else {
      if (typeof onCancel === consts.function) {
        onCancel();
      }
      navigateBack !== false && handleNavigation();
    }
    event.preventDefault();
  }, [formik.dirty, recordEditable, onCancel, navigateBack, handleNavigation]);
  const handleDelete = useCallback(async () => {
    try {
      setIsDeleting(true);
      const response = await deleteRecord({
        id,
        api: api || model.api,
        setError: snackbar.showError,
        setErrorMessage,
        model
      });
      if (response === true) {
        snackbar.showMessage("Record Deleted Successfully.");
        navigateBack !== false && handleNavigation();
      }
    } catch (error) {
      snackbar.showError("An error occurred, please try after some time.");
    } finally {
      setIsDeleting(false);
    }
  }, [id, api, model.api, snackbar, setErrorMessage, model, navigateBack, handleNavigation]);
  const clearError = () => {
    setErrorMessage(null)
    setIsDeleting(false);
  };
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }, [data]);

  const handleSubmit = useCallback(async (e) => {
    if (e) e.preventDefault();
    if (typeof beforeSubmit === consts.function) {
      await beforeSubmit({ formik , model });
    }
    const { errors } = formik;
    formik.handleSubmit();
    const fieldName = Object.keys(errors)[0];
    const errorMessage = errors[fieldName];
    if (errorMessage) {
      snackbar.showError(errorMessage, null, "error");
    }
    const fieldConfig = model.columns.find(
      (column) => column.field === fieldName
    ) || {};
    if (fieldConfig.tab) {
      setActiveStep(Object.keys(model.tabs).indexOf(fieldConfig.tab));
    }
  }, [beforeSubmit, formik, model, snackbar, setActiveStep]);

  const breadcrumbs = [
    { text: formTitle },
    { text: id === "0" ? "New" : "Update" }
  ];
  const showRelations = Number(id) !== 0 && Boolean(relations.length);
  const showSaveButton = searchParams.has("showRelation");
  const readOnlyRelations = !recordEditable || data.readOnlyRelations;
  deletePromptText = deletePromptText || "Are you sure you want to delete ?";
  const { showPageTitle = true } = model;
  return (
    <>
      {showPageTitle && (
        <PageTitle
          navigate={navigate}
          title={formTitle}
          showBreadcrumbs={!hideBreadcrumb}
          breadcrumbs={breadcrumbs}
          model={model}
        />
      )}
      <ActiveStepContext.Provider value={{ activeStep, setActiveStep }}>
        <Paper sx={{ padding: 2, ...sx }}>
          {isLoading ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
          <form>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-end"
              mb={1}
            >
              {canEdit && recordEditable && !showSaveButton && !readOnly && (
                <Button
                  variant="contained"
                  type="submit"
                  color="success"
                  onClick={handleSubmit}
                >{`${"Save"}`}</Button>
              )}
              <Button
                variant="contained"
                type="cancel"
                color="error"
                onClick={handleFormCancel}
              >{`${"Cancel"}`}</Button>
              {permissions.delete && (
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => setIsDeleting(true)}
                >{`${"Delete"}`}</Button>
              )}
            </Stack>
            <Layout
              model={model}
              formik={formik}
              data={data}
              fieldConfigs={fieldConfigs}
              onChange={handleChange}
              lookups={lookups}
              id={id}
              handleSubmit={handleSubmit}
              mode={mode}
            />
          </form>
          )}
          {errorMessage && (
            <DialogComponent
              open={!!errorMessage}
              onConfirm={clearError}
              onCancel={clearError}
              title="Info"
              hideCancelButton={true}
            >
              {" "}
              {errorMessage}
            </DialogComponent>
          )}
          <DialogComponent
            open={isDiscardDialogOpen}
            onConfirm={handleDiscardChanges}
            onCancel={() => setIsDiscardDialogOpen(false)}
            title="Changes not saved"
            okText="Discard"
            cancelText="Continue"
          >
            {"Would you like to continue to edit or discard changes?"}
          </DialogComponent>
          <DialogComponent
            open={isDeleting}
            onConfirm={handleDelete}
            onCancel={() => {
              setIsDeleting(false);
              setDeleteError(null);
            }}
            title={deleteError ? "Error Deleting Record" : "Confirm Delete"}
          >{deletePromptText}</DialogComponent>
          {showRelations ? (
            <Relations
              readOnly={readOnlyRelations}
              models={models}
              relationFilters={relationFilters}
              relations={relations}
              parent={model.name || model.title || ""}
            />
          ) : null}
        </Paper>
      </ActiveStepContext.Provider>
    </>
  );
};
export default Form;
