import React, { useState } from "react";
import { Box, RadioGroup, FormControlLabel, Radio, TextField, Button, Typography } from "@mui/material";
import { useRouter, useStateContext } from "../../useRouter/StateProvider";
import { transport } from "../../Grid/httpRequest";
import { useSnackbar } from "../../SnackBar";
import utils from "../../utils";

const { errorMapping } = utils;

function Document({ column, field, fieldLabel, formik, lookups, data, otherProps, model, fieldConfigs, mode }) {
    let inputValue = formik.values[field] || "";
    const { stateData } = useStateContext();
    const { uploadApi, mediaApi, Url } = stateData?.gridSettings?.permissions;
    const [formState, setFormState] = useState({
        isExternal: "no",
        selectedFile: null,
    });
    const snackbar = useSnackbar();
    const { getParams, useParams } = useRouter();
    const { associationId } = useParams() || getParams;
    const id = associationId?.split("-")[0] || 1;
    const handleRadioChange = (event) => {
        const isExternal = event.target.value;
        setFormState({
            ...formState,
            isExternal,
            selectedFile: null,
        });
        formik.setFieldValue(field, formik.values[field]); // Reset form field value
    };

    const handleInputChange = (value) => {
        formik.setFieldValue(field, value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFormState((prev) => ({ ...prev, selectedFile: file }));
        }
    };

    function extractStatusCode(message) {
         // Return the status code if found, otherwise null
    }

    const handleFileUpload = async () => {
        if (!formState.selectedFile) return;
        try {
            const formData = new FormData();
            formData.append("file", formState.selectedFile);
            formData.append("DocumentGroupId", formik.values.DocumentGroupId); // Doc group ID
            formData.append("AssociationId", id); // Association ID
            const response = await transport({
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'multipart/form-data' },
                url: uploadApi,
                data: formData
            });
            const data = response.data || {};
            if (!data.success) {
                snackbar.showError(data.message || "Upload failed");
                return;
            }
            const fileUrl = mediaApi + '/' + data.filePath;
            formik.setFieldValue(field, fileUrl);
        } catch (error) {
            const statusCode = (error.message.match(/status code (\d{3})/) || [])[1];
            snackbar.showError(errorMapping[statusCode]);
            console.error("Error uploading file: ",error);
        }
    };

    const host = new URL(Url).hostname;
    React.useEffect(() => {
        setFormState({
            ...formState,
            isExternal: !inputValue.includes(host) ? "yes" : "no",
        });
    }, [inputValue]);

    const isLengthExceded = formik.values[field]?.length > (column.max || 500);
    const colorScheme = isLengthExceded ? 'red' : '';

    return (
        <Box>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                <Typography variant="body1" sx={{ width: "150px", marginRight: 2 }}>
                    External Link?
                </Typography>
                <RadioGroup
                    row
                    value={formState.isExternal}
                    onChange={handleRadioChange}
                    aria-label="is-external-link"
                    name="is-external-link"
                >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                <Typography variant="body1" sx={{ width: "150px", marginRight: 2 }}>
                    Document Link
                </Typography>
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    {formState.isExternal === "yes" ? (
                        <TextField
                            fullWidth
                            value={inputValue}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: colorScheme // Default border color
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: colorScheme // Focused state
                                    },
                                    "&:hover fieldset": {
                                        borderColor: colorScheme // Hover state
                                    }
                                }
                            }}
                            onChange={(e) => handleInputChange(e.target.value)}
                            placeholder="Enter external link"
                        />

                    ) : (
                        <TextField
                            fullWidth
                            value={inputValue}
                            placeholder="Link autopopulated once uploaded"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    )}
                    {isLengthExceded && <Typography sx={{ color: 'red' }}>Maximum allowed length for the document link is {column.max} characters.</Typography>}
                </Box>
            </Box>

            {formState.isExternal === "no" && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Button
                        variant="outlined"
                        component="label"
                    >
                        Choose File
                        <input type="file" hidden onChange={handleFileChange} />
                    </Button>
                    {formState.selectedFile && (
                        <Typography variant="body2">{formState.selectedFile.name}</Typography>
                    )}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleFileUpload}
                        disabled={!formState.selectedFile}
                    >
                        Upload File
                    </Button>
                </Box>
            )}
        </Box>
    );
}

export default Document;
