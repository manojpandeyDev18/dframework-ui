import { jsx as n, jsxs as v, Fragment as me } from "react/jsx-runtime";
import * as Ge from "react";
import bt, { createContext as Gt, useContext as fr, useState as F, useEffect as ue, useReducer as ao, useMemo as be, useCallback as Ft, memo as Vr, useRef as Sr, createElement as mr } from "react";
import io from "@mui/material/Snackbar";
import so from "@mui/material/Alert";
import Se from "@mui/material/Button";
import lo from "@mui/material/Dialog";
import co from "@mui/material/DialogActions";
import uo from "@mui/material/DialogContent";
import po from "@mui/material/DialogContentText";
import fo from "@mui/material/DialogTitle";
import * as nt from "@mui/x-data-grid-premium";
import { GridFooterContainer as mo, GridFooter as ho, getGridDateOperators as Ur, useGridApiRef as zr, useGridSelector as cr, gridFilterModelSelector as Gr, gridSortModelSelector as go, DataGridPremium as jr, GridActionsCellItem as ze, GridToolbarExportContainer as yo, Toolbar as bo, GRID_CHECKBOX_SELECTION_COL_DEF as Co, getGridStringOperators as Eo, getGridBooleanOperators as vo, ColumnsPanelTrigger as xo, FilterPanelTrigger as Do } from "@mui/x-data-grid-premium";
import Hr from "@mui/icons-material/Delete";
import Or from "@mui/icons-material/FileCopy";
import wo from "@mui/icons-material/Article";
import dr from "@mui/icons-material/Edit";
import To from "@mui/icons-material/FilterListOff";
import Ar from "@mui/icons-material/Add";
import So from "@mui/icons-material/Remove";
import At from "@mui/material/Typography";
import ut from "@mui/material/Box";
import jt from "@mui/material/TextField";
import { useTranslation as hr, withTranslation as Oo } from "react-i18next";
import { Typography as Ne, Dialog as Ao, DialogTitle as Po, Grid as fe, DialogContent as Fo, Card as Io, CardContent as Mo, Breadcrumbs as Ro, Link as No, Button as lt, IconButton as Wr, Box as Re, Menu as Bo, List as Lo, MenuItem as $t, ListItemButton as Pr, ListItemIcon as ko, ListItem as _o, ListItemText as $o, TextField as Vt, FormControlLabel as ct, Checkbox as Vo, Stack as ir, Tooltip as Ie, FormControl as gr, Select as Uo, Badge as zo, FormHelperText as Ct, useTheme as Et, InputAdornment as Go, FormLabel as jo, RadioGroup as yr, Radio as yt, styled as Ho, Avatar as Wo, CircularProgress as qo, Divider as Ko } from "@mui/material";
import Yo from "@mui/icons-material/Check";
import ur from "@mui/icons-material/Close";
import Jo from "@mui/icons-material/Help";
import { Replay as Zo, Close as Qo } from "@mui/icons-material";
import ie from "dayjs";
import Xo from "dayjs/plugin/utc";
import ea from "dayjs/plugin/timezone";
import { DatePicker as qr } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as pr } from "@mui/x-date-pickers/DateTimePicker";
import ta from "dayjs/plugin/utc.js";
import { LocalizationProvider as ra } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as na } from "@mui/x-date-pickers/AdapterDayjs";
import oa from "@mui/icons-material/Save";
import Fr from "@mui/icons-material/Settings";
import { useFormik as Kr } from "formik";
import * as ce from "yup";
import aa from "@mui/icons-material/History";
import ia from "@mui/icons-material/FileDownload";
import Yr from "@mui/material/Checkbox";
import Jr from "@mui/material/MenuItem";
import { styled as Ht } from "@mui/material/styles";
import sa from "@mui/icons-material/ViewColumn";
import la from "@mui/icons-material/FilterList";
import ca from "@mui/material/Paper";
import da from "@mui/material/Stack";
import ua from "@mui/material/CircularProgress";
import pa from "@mui/material/FormControlLabel";
import fa from "@mui/icons-material/VisibilityOff";
import ma from "@mui/icons-material/Visibility";
import { TimePicker as ha } from "@mui/x-date-pickers/TimePicker";
import ga from "@mui/icons-material/KeyboardArrowDown";
import Wt from "@mui/material/FormControl";
import ya from "@mui/material/InputLabel";
import ba from "@mui/material/Select";
import sr from "@mui/material/Grid";
import Zr from "@mui/material/Autocomplete";
import Ca from "@mui/material/Stepper";
import Ea from "@mui/material/Step";
import va from "@mui/material/StepLabel";
import { grey as xa } from "@mui/material/colors";
import Da from "@emotion/styled";
import wa from "@mui/material/Chip";
import { SimpleTreeView as Ta } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as Ir } from "@mui/x-tree-view/TreeItem";
import Sa from "@mui/material/Input";
import Oa from "@mui/material/Tab";
import Aa from "@mui/material/Tabs";
const Qr = Gt(null), Pa = "bottom", Fa = "center", Ia = bt.forwardRef(function(t, r) {
  return /* @__PURE__ */ n(so, { elevation: 6, ref: r, variant: "filled", ...t });
}), Bl = ({ children: e }) => {
  const [t, r] = F(null), [o, a] = F(!1), [s, i] = F(null), [d, h] = F(null), C = function(l, y, c = "info", f) {
    typeof l != "string" && (l = l.toString()), y && typeof y != "string" && (y = y.toString()), r(y ? `${l}: ${y}` : l), i(c), a(!0), h(f);
  }, u = function(l, y, c = "error", f) {
    C(l, y, c, f);
  }, p = function() {
    a(!1), h(null), d && d();
  };
  return /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ n(
      Qr.Provider,
      {
        value: { showMessage: C, showError: u },
        children: e
      }
    ),
    /* @__PURE__ */ n(io, { open: o, autoHideDuration: 6e3, onClose: p, anchorOrigin: { vertical: Pa, horizontal: Fa }, children: /* @__PURE__ */ n(Ia, { severity: s, children: t }) })
  ] });
}, qt = function() {
  return fr(Qr);
}, je = ({ open: e, onConfirm: t, title: r = "Confirm", onCancel: o, okText: a, cancelText: s, yesNo: i = !1, children: d, maxWidth: h = "sm", fullWidth: C = !0, ...u }) => (a = a || (i ? "Yes" : "Ok"), s = s || (i ? "No" : "Cancel"), /* @__PURE__ */ v(
  lo,
  {
    ...u,
    open: e,
    onClose: o,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    maxWidth: h,
    fullWidth: C,
    children: [
      /* @__PURE__ */ n(fo, { id: "alert-dialog-title", sx: { fontSize: d ? "inherit" : "1.25rem" }, children: r }),
      d && /* @__PURE__ */ n(uo, { dividers: !0, children: /* @__PURE__ */ n(po, { children: d }) }),
      (o || t) && /* @__PURE__ */ v(co, { children: [
        o && /* @__PURE__ */ n(Se, { onClick: o, children: s }),
        t && /* @__PURE__ */ n(Se, { onClick: t, autoFocus: !0, children: a })
      ] })
    ]
  }
)), z = {
  UPDATE_FORM_MODE: "UPDATE_FORM_MODE",
  UPDATE_DATE_TIME: "UPDATE_DATE_TIME",
  UPDATE_LOCALIZATION: "UPDATE_LOCALIZATION",
  PAGE_TITLE_DETAILS: "PAGE_TITLE_DETAILS",
  OPEN_MODAL: "OPEN_MODAL",
  SET_PAGE_BACK_BUTTON: "SET_PAGE_BACK_BUTTON",
  SET_GRID_SETTINGS: "SET_GRID_SETTINGS",
  SET_LOCAL_LOCALIZATION: "SET_LOCAL_LOCALIZATION",
  USER_DATA: "USER_DATA",
  UDPATE_PREFERENCES: "UDPATE_PREFERENCES",
  TOTAL_PREFERENCES: "TOTAL_PREFERENCES",
  SET_CURRENT_PREFERENCE_NAME: "SET_CURRENT_PREFERENCE_NAME",
  UPDATE_LOADER_STATE: "UPDATE_LOADER_STATE",
  PASS_FILTERS_TO_HEADER: "PASS_FILTERS_TO_HEADER",
  SET_TIMEZONE: "SET_TIMEZONE"
};
let Ot = 0;
const He = {
  OK: 200,
  SESSION_EXPIRED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, Xr = (e) => {
  const t = new FormData();
  for (const r in e)
    typeof e[r] == "object" ? t.append(r, JSON.stringify(e[r])) : t.append(r, e[r]);
  return t;
}, Ma = (e, t) => {
  const r = new URL(e);
  for (const o in t) {
    const a = typeof t[o] == "object" ? JSON.stringify(t[o]) : t[o];
    r.searchParams.append(o, a);
  }
  window.open(r, "_blank").focus();
}, vt = async (e) => {
  const {
    method: t = "GET",
    url: r,
    data: o,
    headers: a = {},
    credentials: s = "include",
    ...i
  } = e, d = {
    method: t,
    credentials: s,
    headers: {
      ...a
    },
    ...i
  };
  o && (a["Content-Type"] === "multipart/form-data" ? (delete d.headers["Content-Type"], d.body = o instanceof FormData ? o : Xr(o)) : (d.headers["Content-Type"] = a["Content-Type"] || "application/json", d.body = typeof o == "string" ? o : JSON.stringify(o)));
  const h = await fetch(r, d), C = h.headers.get("content-type") || {};
  return {
    status: h.status,
    data: C.includes("application/json") ? await h.json() : await h.text(),
    headers: Object.fromEntries(h.headers.entries())
  };
}, Pt = async ({ url: e, params: t = {}, history: r, jsonPayload: o = !1, additionalParams: a = {}, additionalHeaders: s = {}, disableLoader: i = !1, dispatchData: d }) => {
  if (t.exportData)
    return Ma(e, t);
  i || d({ type: z.UPDATE_LOADER_STATE, payload: !0 }), Ot++;
  const h = {
    method: "POST",
    credentials: "include",
    url: e,
    headers: o ? { ...s } : { "Content-Type": "multipart/form-data", ...s },
    ...a
  };
  t && (h.data = o ? t : Xr(t));
  try {
    const C = await vt(h);
    Ot--;
    const u = C.data;
    if (Ot === 0 && !i && d({ type: "UPDATE_LOADER_STATE", loaderOpen: !1 }), C.status === He.SESSION_EXPIRED) {
      r("/login");
      return;
    }
    return C.status !== He.OK ? { data: { message: u.message || "An error occurred" } } : u;
  } catch (C) {
    return Ot--, Ot === 0 && d({ type: "UPDATE_LOADER_STATE", loaderOpen: !1 }), { data: { message: C.message || "Network error" } };
  }
}, dt = {
  fixedFilterFormat: {
    date: "YYYY-MM-DD",
    datetime: "YYYY-MM-DD hh:mm:ss a",
    dateTimeLocal: "YYYY-MM-DD hh:mm:ss a",
    OverrideDateFormat: "DD-MMM-YYYY"
  },
  errorMapping: {
    413: "Upload failed: The file exceeds the 30 MB size limit. Please select a smaller file."
  },
  permissionsMapper: {
    add: "Permission2",
    edit: "Permission3",
    delete: "Permission4"
  },
  emptyIdValues: [null, void 0, "", "0", 0]
}, en = ({ userData: e = {}, model: t, userDefinedPermissions: r }) => {
  const { permissions: o = [] } = e;
  r = r || { add: !0, edit: !0, delete: !0 };
  const a = o.find((s) => s.Module === t.module);
  return a ? {
    canAdd: r.add && !!a[dt.permissionsMapper.add],
    canEdit: r.edit && !!a[dt.permissionsMapper.edit],
    canDelete: r.delete && !!a[[dt.permissionsMapper.delete]]
  } : { canAdd: r.add, canEdit: r.edit, canDelete: r.delete };
}, Ra = ["date", "dateTime"], Na = ["singleSelect"], Mr = 200, Ba = (e) => (/* @__PURE__ */ new Date()).getTimezoneOffset() === new Date(e).getTimezoneOffset(), rt = (e, t) => e.status === He.SESSION_EXPIRED ? (t("Session Expired!"), setTimeout(() => {
  window.location.href = "/";
}, Mr), !0) : e.status === He.FORBIDDEN ? (t("Access Denied!"), setTimeout(() => {
  window.location.href = "/";
}, Mr), !0) : (e.status === He.INTERNAL_SERVER_ERROR && t("Internal Server Error"), !1);
function La(e) {
  const { operator: t, value: r, type: o } = e, a = ["isEmpty", "isNotEmpty"].includes(t), s = r != null && (r !== "" || o === "number" && r === 0 || o === "boolean" && r === !1);
  return a || s;
}
const ka = async ({ gridColumns: e, setIsLoading: t, setData: r, page: o, pageSize: a, sortModel: s, filterModel: i, api: d, parentFilters: h, action: C = "list", setError: u, extraParams: p, contentType: l, columns: y, controllerType: c = "node", template: f = null, configFileName: E = null, dispatchData: x, showFullScreenLoader: D = !1, model: w, baseFilters: P = null, isElasticExport: L }) => {
  l || D && x({ type: z.UPDATE_LOADER_STATE, payload: !0 });
  const J = [], j = [], ee = [];
  e.forEach(({ lookup: R, type: Y, field: H, keepLocal: I = !1, keepLocalDate: K, filterable: Q = !0, dependsOn: X }) => {
    Ra.includes(Y) && ee.push({ field: H, keepLocal: I, keepLocalDate: K }), R && !J.includes(R) && Na.includes(Y) && Q && (J.push(R), j.push({ lookup: R, dependsOn: X }));
  });
  const oe = [];
  i?.items?.length && i.items.forEach((R) => {
    if (La(R)) {
      const { field: Y, operator: H, filterField: I } = R;
      let { value: K } = R;
      const X = e.filter((Ce) => Ce?.field === R.field)[0]?.type;
      X === "boolean" ? K = K === "true" || K === !0 ? 1 : 0 : X === "number" && (K = Array.isArray(K) ? K.filter((Ce) => Ce) : K), K = R.filterValues || K, oe.push({
        field: I || Y,
        operator: H,
        value: K,
        type: X
      });
    }
  }), h && oe.push(...h), P && oe.push(...P);
  const B = {
    start: o * a,
    limit: L ? w.exportSize : a,
    ...p,
    logicalOperator: i.logicOperator,
    sort: s.map((R) => (R.filterField || R.field) + " " + R.sort).join(","),
    where: oe,
    isElasticExport: L,
    model: w.module,
    fileName: w.overrideFileName
  };
  J.length && (B.lookups = J.join(",")), j.length && (B.lookupWithDeps = JSON.stringify(j)), w?.limitToSurveyed && (B.limitToSurveyed = w?.limitToSurveyed);
  const te = {};
  let Z = c === "cs" ? `${d}?action=${C}&asArray=0` : `${d}/${C}`;
  if (f !== null && (Z += `&template=${f}`), E !== null && (Z += `&configFileName=${E}`), l) {
    const R = document.createElement("form");
    if (B.responseType = l, B.columns = y, B.userTimezoneOffset = -(/* @__PURE__ */ new Date()).getTimezoneOffset(), R.setAttribute("method", "POST"), R.setAttribute("id", "exportForm"), R.setAttribute("target", "_blank"), f === null)
      for (const Y in B) {
        let H = B[Y];
        if (H == null)
          continue;
        typeof H != "string" && (H = JSON.stringify(H));
        const I = document.createElement("input");
        I.type = "hidden", I.name = Y, I.value = H, R.append(I);
      }
    R.setAttribute("action", Z), document.body.appendChild(R), R.submit(), setTimeout(() => {
      document.getElementById("exportForm").remove();
    }, 3e3);
    return;
  }
  try {
    t(!0);
    const R = {
      url: Z,
      method: "POST",
      data: B,
      headers: {
        "Content-Type": "application/json",
        ...te
      },
      credentials: "include"
    };
    r((H) => ({
      ...H,
      records: []
      // reset records to empty array before fetching new data
    }));
    const Y = await vt(R);
    if (Y.status === He.OK) {
      const { records: H } = Y.data;
      H && H.forEach((I) => {
        ee.forEach((K) => {
          const { field: Q, keepLocal: X, keepLocalDate: Ce } = K;
          if (I[Q]) {
            if (I[Q] = new Date(I[Q]), Ce) {
              const re = I[Q].getTimezoneOffset() * 6e4;
              I[Q] = new Date(I[Q].getTime() + re);
            }
            if (X && !Ba(I[Q])) {
              const re = I[Q].getTimezoneOffset() * 6e4;
              I[Q] = new Date(I[Q].getTime() + re);
            }
          }
        }), w.columns.forEach(({ field: K, displayIndex: Q }) => {
          Q && (I[K] = I[Q]);
        });
      }), r(Y.data);
    } else rt(Y, u) || u(Y.statusText);
  } catch (R) {
    R.response && !rt(R.response, u) ? u("Could not list record", R.message || R.toString()) : u("Network failure or server unreachable. Please try again.");
  } finally {
    t(!1), !l && D && x({ type: z.UPDATE_LOADER_STATE, payload: !1 });
  }
}, tn = async ({ api: e, id: t, setIsLoading: r, setActiveRecord: o, model: a, parentFilters: s, where: i = {}, setError: d }) => {
  e = e || a.api, r(!0);
  const h = new URLSearchParams(), C = `${e}/${t ?? "-"}`, u = [];
  (a.formDef || a.columns)?.forEach((l) => {
    l.lookup && !u.includes(l.lookup) && !l.dependsOn && u.push(l.lookup);
  }), h.set("lookups", u), i && Object.keys(i)?.length && h.set("where", JSON.stringify(i));
  try {
    const l = await vt({
      url: `${C}?${h.toString()}`,
      method: "GET",
      credentials: "include"
    });
    if (l.status === He.OK) {
      const { data: y, lookups: c } = l.data;
      let f = y[a.linkColumn];
      const E = a.columns.find((D) => D.field === a.linkColumn);
      if (E && E.lookup && c && c[E.lookup] && c[E.lookup]?.length) {
        const D = c[E.lookup].find((w) => w.value === f);
        D && (f = D.label);
      }
      const x = { ...a.defaultValues };
      o({ id: t, title: f, record: { ...x, ...y, ...s }, lookups: c });
    } else rt(l, d) || d("Could not load record", l.body.toString());
  } catch (l) {
    l.response && rt(l.response, d) && d("Could not load record", l.message || l.toString());
  } finally {
    r(!1);
  }
}, rn = async function({ id: e, api: t, setIsLoading: r, setError: o }) {
  const a = { success: !1, error: "" };
  if (!e) {
    o("Deleted failed. No active record.");
    return;
  }
  r(!0);
  try {
    const s = await vt({
      url: `${t}/${e}`,
      method: "DELETE",
      credentials: "include"
    });
    if (s.status === He.OK)
      return s.data && !s.data.success ? (a.success = !1, o("Delete failed", s.data.message), !1) : (a.success = !0, !0);
    rt(s, o) || o("Delete failed", s.body);
  } catch (s) {
    s.response && !rt(s.response, o) && o("Could not delete record", s.message || s.toString());
  } finally {
    r(!1);
  }
  return a;
}, nn = async function({ id: e, api: t, values: r, setIsLoading: o, setError: a }) {
  let s, i;
  e !== 0 ? (s = `${t}/${e}`, i = "PUT") : (s = t, i = "POST");
  try {
    o(!0);
    const d = await vt({
      url: s,
      method: i,
      data: r,
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (d.status === He.OK) {
      const h = d.data;
      if (h.success)
        return h;
      a("Save failed", h.err || h.message);
    } else rt(d, a) || a("Save failed", d.body);
  } catch (d) {
    d.response && !rt(d.response, a) && a("Could not save record", d.message || d.toString());
  } finally {
    o(!1);
  }
  return !1;
}, _a = ({ pagination: e, apiRef: t, tTranslate: r = (o) => o }) => {
  const o = t.current.state.pagination.paginationModel.page, a = t.current.state.pagination.paginationModel.pageSize, s = t.current.state.rows.totalRowCount, i = Math.ceil(s / a), { t: d, i18n: h } = hr(), C = { t: d, i18n: h }, [u, p] = F(o + 1), l = function(f) {
    let E = f.target?.value;
    E === "" ? p("") : (E = parseInt(E), E = isNaN(E) || E < 1 ? 1 : E, p(E));
  };
  ue(() => {
    p(o + 1);
  }, [o, a]);
  const y = function() {
    let f = u === "" ? 1 : u;
    f = Math.max(f, 1), f = Math.min(f, i), t.current.setPage(f - 1), p(f), u === "" && p(1);
  }, c = (f) => {
    const E = f.which || f.keyCode, x = String.fromCharCode(E);
    /\d/.test(x) || f.preventDefault();
  };
  return /* @__PURE__ */ v(mo, { children: [
    /* @__PURE__ */ n(ut, { sx: { pl: 5 }, children: e && /* @__PURE__ */ v(me, { children: [
      /* @__PURE__ */ v(At, { variant: "p", children: [
        r("Jump to page", C),
        ":"
      ] }),
      /* @__PURE__ */ n(
        jt,
        {
          sx: {
            width: 70,
            pl: 1,
            "& input[type=number]::-webkit-inner-spin-button": {
              cursor: "pointer"
            },
            "& input[type=number]::-webkit-outer-spin-button": {
              cursor: "pointer"
            }
          },
          variant: "standard",
          type: "number",
          min: 1,
          value: u,
          onChange: l,
          onKeyPress: c,
          disabled: !s
        }
      ),
      /* @__PURE__ */ n(Se, { disabled: !s, size: "small", onClick: y, children: r("Go", C) })
    ] }) }),
    /* @__PURE__ */ n(ho, {})
  ] });
}, $a = /\${((\w+)\.)?(\w+)}/g, Va = function(e, t, { template: r = $a, keepMissingTags: o = !1 } = {}) {
  return !e || !t ? e : e.replace(r, function(a, s, i, d) {
    const h = i ? t[i] || {} : t;
    return h[d] === void 0 ? o ? a : "" : h[d];
  });
}, lr = {
  replaceTags: Va
};
function Rr({ variant: e = "h2", component: t = "h2", text: r = "", name: o = null, ...a }) {
  return /* @__PURE__ */ v(Ne, { variant: e, component: t, ...a, children: [
    r,
    o && ` ${o}`
  ] });
}
function Ua(e = !1) {
  const t = s(), [r, o] = F(t);
  function a() {
    setTimeout(() => {
      o(s());
    }, 10);
  }
  ue(() => (window.addEventListener("resize", a), () => {
    window.removeEventListener("resize", a);
  }), []);
  function s() {
    let i = typeof window.navigator > "u" ? "" : navigator.userAgent;
    const d = !!i.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    i = i.toLowerCase();
    const h = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(i);
    let C = null;
    return window.innerWidth <= window.innerHeight ? C = "portrait" : C = "landscape", { mobile: d, tablet: h, portrait: C === "portrait", landscape: C === "landscape" };
  }
  return e ? r.mobile : r;
}
const za = (e, t) => {
  switch (t.type) {
    case z.UPDATE_LOCALIZATION:
      return { ...e, dataLocalization: t.payload };
    case z.UPDATE_DATE_TIME:
      return { ...e, dateTime: t.payload };
    case z.UPDATE_FORM_MODE:
      return { ...e, dataForm: t.payload };
    case z.PAGE_TITLE_DETAILS:
      return { ...e, pageTitleDetails: t.payload };
    case z.OPEN_MODAL:
      return { ...e, modal: t.payload };
    case z.SET_PAGE_BACK_BUTTON:
      return { ...e, pageBackButton: t.payload };
    case z.SET_GRID_SETTINGS:
      return { ...e, gridSettings: t.payload };
    case z.SET_LOCAL_LOCALIZATION:
      return { ...e, getLocal: t.payload };
    case z.USER_DATA:
      return { ...e, getUserData: t.payload };
    case z.UDPATE_PREFERENCES:
      return { ...e, preferences: t.payload };
    case z.SET_CURRENT_PREFERENCE_NAME:
      return { ...e, currentPreference: t.payload };
    case z.TOTAL_PREFERENCES:
      return { ...e, totalPreferences: t.payload };
    case z.UPDATE_LOADER_STATE:
      return { ...e, loaderOpen: t.payload };
    case z.PASS_FILTERS_TO_HEADER:
      return { ...e, filtersInHeader: t.payload };
    case z.SET_TIMEZONE:
      return { ...e, timeZone: t.payload };
    default:
      return e;
  }
}, Ga = {
  dataLocalization: "en",
  dateTime: "MM/DD/YYYY hh:mm:ss A",
  dataForm: "",
  pageTitleDetails: null,
  modal: null,
  pageBackButton: null,
  gridSettings: {},
  getLocal: {},
  getUserData: null,
  preferences: [],
  currentPreference: null,
  totalPreferences: null,
  loaderOpen: !1,
  filtersInHeader: {},
  timeZone: ""
}, ja = {
  Jumptopage: "Gå til side",
  Go: "Gå",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "I dette rum vil vi snart bringe dig et dashboard med hovedoversigt KPIer for nem adgang",
  Pages: "sider",
  MuiTablePagination: {
    labelRowsPerPage: "Rækker pr. side"
  }
}, Ha = {
  ...nt.daDK,
  ...ja
}, Wa = {
  Jumptopage: "Zur Seite springen",
  Go: "Gehen",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In diesem Bereich werden wir Ihnen in Kürze ein Dashboard mit den wichtigsten Übersichts-KPIs für einen einfachen Zugriff bereitstellen",
  Pages: "Seiten",
  MuiTablePagination: {
    labelRowsPerPage: "Zeilen pro Seite"
  }
}, qa = {
  ...nt.deDE,
  ...Wa
}, Ka = {
  Jumptopage: "Μετάβαση στη σελίδα",
  Go: "Πηγαίνω",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Σε αυτόν τον χώρο θα σας φέρουμε σύντομα έναν πίνακα ελέγχου βασικών επισκόπησης KPI για εύκολη πρόσβαση",
  Pages: "Σελίδες",
  MuiTablePagination: {
    labelRowsPerPage: "Σειρές ανά σελίδα"
  }
}, Ya = {
  ...nt.elGR,
  ...Ka
}, Ja = {
  Jumptopage: "Saltar a la página",
  Go: "Ir",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "En este espacio pronto le ofreceremos un panel con los principales KPI generales para un fácil acceso.",
  Pages: "paginas",
  MuiTablePagination: {
    labelRowsPerPage: "Filas por página"
  }
}, Za = {
  ...nt.esES,
  ...Ja
}, Qa = {
  Jumptopage: "Aller à la page",
  Go: "Aller",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Dans cet espace, nous vous proposerons bientôt un tableau de bord des principaux KPI pour un accès facile.",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Lignes par page"
  }
}, Xa = {
  ...nt.frFR,
  ...Qa
}, ei = {
  Jumptopage: "Vai alla pagina",
  Go: "Andare",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In questo spazio presto ti forniremo una dashboard con i principali KPI generali per un facile accesso",
  Pages: "Pagine",
  MuiTablePagination: {
    labelRowsPerPage: "Righe per pagina"
  }
}, ti = {
  ...nt.itIT,
  ...ei
}, ri = {
  Jumptopage: "Sayfaya atla",
  Go: "Gitmek",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
  Pages: "Sayfalar",
  MuiTablePagination: {
    labelRowsPerPage: "Sayfa başına satır"
  }
}, ni = {
  ...nt.trTR,
  ...ri
}, oi = {
  components: {
    MuiDataGrid: {
      defaultProps: {
        localeText: {
          Add: "createew",
          noRowsLabel: "Sem resultados",
          noResultsOverlayLabel: "Nenhum resultado encontrado.",
          // Density selector toolbar button text
          toolbarDensity: "Densidade",
          toolbarDensityLabel: "Densidade",
          toolbarDensityCompact: "Compacto",
          toolbarDensityStandard: "Padrão",
          toolbarDensityComfortable: "Confortável",
          // Columns selector toolbar button text
          toolbarColumns: "Colunas",
          toolbarColumnsLabel: "Selecionar colunas",
          // Filters toolbar button text
          toolbarFilters: "Filtros",
          toolbarFiltersLabel: "Mostrar filtros",
          toolbarFiltersTooltipHide: "Esconder filtros",
          toolbarFiltersTooltipShow: "Mostrar filtros",
          toolbarFiltersTooltipActive: (e) => e !== 1 ? `${e} filtros ativos` : `${e} filtro ativo`,
          // Quick filter toolbar field
          toolbarQuickFilterPlaceholder: "Pesquisar...",
          toolbarQuickFilterLabel: "Pesquisar",
          toolbarQuickFilterDeleteIconLabel: "Limpar",
          // Export selector toolbar button text
          toolbarExport: "Exportar",
          toolbarExportLabel: "Exportar",
          toolbarExportCSV: "Baixar como CSV",
          toolbarExportPrint: "Imprimir",
          toolbarExportExcel: "Baixar como Excel",
          // Columns panel text
          columnsPanelTextFieldLabel: "Encontrar coluna",
          columnsPanelTextFieldPlaceholder: "Título da coluna",
          columnsPanelDragIconLabel: "Reorganizar coluna",
          columnsPanelShowAllButton: "Mostrar todas",
          columnsPanelHideAllButton: "Esconder todas",
          // Filter panel text
          filterPanelAddFilter: "Adicionar filtro",
          filterPanelRemoveAll: "Remover todos",
          filterPanelDeleteIconLabel: "Excluir",
          filterPanelLogicOperator: "Operador lógico",
          filterPanelOperator: "Operador",
          filterPanelOperatorAnd: "E",
          filterPanelOperatorOr: "Ou",
          filterPanelColumns: "Colunas",
          filterPanelInputLabel: "Valor",
          filterPanelInputPlaceholder: "Valor do filtro",
          // Filter operators text
          filterOperatorContains: "contém",
          filterOperatorEquals: "é igual a",
          filterOperatorStartsWith: "começa com",
          filterOperatorEndsWith: "termina com",
          filterOperatorIs: "é",
          filterOperatorNot: "não é",
          filterOperatorAfter: "é posterior a",
          filterOperatorOnOrAfter: "é em ou depois de",
          filterOperatorBefore: "é anterior a",
          filterOperatorOnOrBefore: "é em ou antes de",
          filterOperatorIsEmpty: "está vazio",
          filterOperatorIsNotEmpty: "não está vazio",
          filterOperatorIsAnyOf: "é algum de",
          "filterOperator=": "=",
          "filterOperator!=": "!=",
          "filterOperator>": ">",
          "filterOperator>=": ">=",
          "filterOperator<": "<",
          "filterOperator<=": "<=",
          // Header filter operators text
          headerFilterOperatorContains: "Contém",
          headerFilterOperatorEquals: "É igual a",
          headerFilterOperatorStartsWith: "Começa com",
          headerFilterOperatorEndsWith: "Termina com",
          headerFilterOperatorIs: "É",
          headerFilterOperatorNot: "Não é",
          headerFilterOperatorAfter: "É depois de",
          headerFilterOperatorOnOrAfter: "É em ou depois de",
          headerFilterOperatorBefore: "É antes de",
          headerFilterOperatorOnOrBefore: "É em ou antes de",
          headerFilterOperatorIsEmpty: "Está vazio",
          headerFilterOperatorIsNotEmpty: "Não está vazio",
          headerFilterOperatorIsAnyOf: "É algum de",
          "headerFilterOperator=": "É igual a",
          "headerFilterOperator!=": "Não é igual a",
          "headerFilterOperator>": "Maior que",
          "headerFilterOperator>=": "Maior ou igual a",
          "headerFilterOperator<": "Menor que",
          "headerFilterOperator<=": "Menor ou igual a",
          // Filter values text
          filterValueAny: "qualquer",
          filterValueTrue: "verdadeiro",
          filterValueFalse: "falso",
          // Column menu text
          columnMenuLabel: "Menu",
          columnMenuShowColumns: "Mostrar colunas",
          columnMenuManageColumns: "Gerenciar colunas",
          columnMenuFilter: "Filtro",
          columnMenuHideColumn: "Esconder coluna",
          columnMenuUnsort: "Desfazer ordenação",
          columnMenuSortAsc: "Ordenar por ASC",
          columnMenuSortDesc: "Ordenar por DESC",
          // Column header text
          columnHeaderFiltersTooltipActive: (e) => e !== 1 ? `${e} filtros ativos` : `${e} filtro ativo`,
          columnHeaderFiltersLabel: "Mostrar filtros",
          columnHeaderSortIconLabel: "Ordenar",
          // Rows selected footer text
          footerRowSelected: (e) => e !== 1 ? `${e.toLocaleString()} linhas selecionadas` : `${e.toLocaleString()} linha selecionada`,
          // Total row amount footer text
          footerTotalRows: "Total de linhas:",
          // Total visible row amount footer text
          footerTotalVisibleRows: (e, t) => `${e.toLocaleString()} de ${t.toLocaleString()}`,
          // Checkbox selection text
          checkboxSelectionHeaderName: "Seleção de caixa de seleção",
          checkboxSelectionSelectAllRows: "Selecionar todas as linhas",
          checkboxSelectionUnselectAllRows: "Desselecionar todas as linhas",
          checkboxSelectionSelectRow: "Selecionar linha",
          checkboxSelectionUnselectRow: "Desselecionar linha",
          // Boolean cell text
          booleanCellTrueLabel: "sim",
          booleanCellFalseLabel: "não",
          // Actions cell more text
          actionsCellMore: "mais",
          // Column pinning text
          pinToLeft: "Fixar à esquerda",
          pinToRight: "Fixar à direita",
          unpin: "Desafixar",
          // Tree Data
          treeDataGroupingHeaderName: "Agrupar",
          treeDataExpand: "ver filhos",
          treeDataCollapse: "esconder filhos",
          // Grouping columns
          groupingColumnHeaderName: "Agrupar",
          groupColumn: (e) => `Agrupar por ${e}`,
          unGroupColumn: (e) => `Parar de agrupar por ${e}`,
          // Master/detail
          detailPanelToggle: "Alternar painel de detalhes",
          expandDetailPanel: "Expandir",
          collapseDetailPanel: "Recolher",
          // Used core components translation keys
          MuiTablePagination: {},
          // Row reordering text
          rowReorderingHeaderName: "Reorganização de linhas",
          // Aggregation
          aggregationMenuItemHeader: "Agregação",
          aggregationFunctionLabelSum: "soma",
          aggregationFunctionLabelAvg: "média",
          aggregationFunctionLabelMin: "mínimo",
          aggregationFunctionLabelMax: "máximo",
          aggregationFunctionLabelSize: "tamanho",
          //footer
          Jumptopage: "Ir para a página",
          Go: "Ir",
          InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Neste espaço em breve traremos para você um dashboard com os principais KPIs de visão geral para fácil acesso",
          Pages: "Páginas",
          MuiTablePagination: {
            labelRowsPerPage: "Linhas por página"
          }
        }
      }
    }
  }
}, ai = {
  Jumptopage: "Jump to page",
  Go: "Go",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In this space we will soon bring you a dashboard of main overview KPIs for easy access",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Rows per page"
  }
}, ii = {
  ...nt.enUS,
  ...ai
}, si = {
  en: ii,
  "tr-TR": ni,
  "es-ES": Za,
  "da-DK": Ha,
  "de-DE": qa,
  "el-GR": Ya,
  "fr-FR": Xa,
  "pt-PT": oi,
  "it-IT": ti
};
ie.extend(Xo);
ie.extend(ea);
const on = Gt(), an = Gt(null), Ll = ({ children: e }) => {
  const [t, r] = ao(za, Ga);
  function o(u, p, l) {
    if (l != null) {
      const y = l;
      let c = u ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
      return y && (c = y.split(" "), c[0] = c[0].toUpperCase(), u ? c = c[0] : p ? c = c[0].toUpperCase() : (c[1] += c[1].includes(":ss") ? "" : ":ss", c = c.join(" "))), c;
    }
    return u ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
  }
  async function a({ preferenceName: u, Username: p, history: l, dispatchData: y, preferenceApi: c, defaultPreferenceEnums: f = {}, addDefaultPreference: E = !1 }) {
    const x = await Pt({ url: c, params: { action: "list", id: u, Username: p }, history: l, dispatchData: y }) || {};
    let D = {};
    if (typeof x == "string")
      try {
        D = JSON.parse(x);
      } catch (P) {
        console.error("Failed to parse preferences response as JSON:", P), D = {};
      }
    else x && typeof x == "object" && (D = x);
    const w = D.preferences || [];
    return E && w.unshift({
      prefName: "Default",
      prefId: 0,
      GridId: u,
      GridPreferenceId: 0,
      prefValue: f[u]
    }), y({ type: z.UDPATE_PREFERENCES, payload: w }), y({ type: z.TOTAL_PREFERENCES, payload: w.length }), w;
  }
  const s = ({ gridRef: u, data: p }) => p.filter((l) => u.current.getColumnIndex(l.field) !== -1);
  async function i({ preferences: u = [], gridRef: p, dispatchData: l, preferenceName: y, setIsGridPreferenceFetched: c, defaultPreferenceEnums: f = {} }) {
    const E = u.find((D) => D.isDefault && D.GridId === y), x = E ? JSON.parse(E.prefValue) : f[y];
    x && Object.keys(x).length && (x.gridColumn = s({ gridRef: p, data: x.gridColumn }), x.sortModel = s({ gridRef: p, data: x.sortModel }), x.filterModel.items = s({ gridRef: p, data: x.filterModel.items }), p.current.setColumnVisibilityModel(x.columnVisibilityModel), p.current.setPinnedColumns(x.pinnedColumns), p.current.setSortModel(x.sortModel || []), p.current.setFilterModel(x?.filterModel), l({ type: z.SET_CURRENT_PREFERENCE_NAME, payload: E ? E.prefName : "Default" })), c && c(!0);
  }
  function d({ dispatchData: u }) {
    u({ type: z.SET_CURRENT_PREFERENCE_NAME, payload: null });
  }
  function h({ value: u, useSystemFormat: p, showOnlyDate: l = !1, state: y, timeZone: c }) {
    if (!u) return "-";
    const f = o(p, l, y);
    return c ? ie(u).tz(c).format(f) : ie(u).format(f);
  }
  function C() {
    const u = t.dataLocalization, p = si[u];
    function l(y) {
      return u === "pt-PT" || u === "ptPT" ? p.components.MuiDataGrid.defaultProps.localeText[y] || y : p[y] || y;
    }
    return { getLocalizedString: l };
  }
  return /* @__PURE__ */ n(on.Provider, { value: { stateData: t, dispatchData: r, systemDateTimeFormat: o, formatDate: h, removeCurrentPreferenceName: d, getAllSavedPreferences: a, applyDefaultPreferenceIfExists: i, useLocalization: C }, children: e });
}, kl = an.Provider, Kt = () => fr(an), We = () => {
  const e = fr(on);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, li = () => {
  const [e, t] = F(), [r, o] = F(!1), { stateData: a, dispatchData: s } = We(), i = a.modal, d = 16 / 9;
  let h = (window.outerWidth - 10) / window.innerWidth * 100;
  const C = () => {
    let p = document.getElementById("tutorial-iframe");
    p ? (p = p.offsetWidth, p = p / window.innerWidth) : p = 0.9;
    const l = window.innerWidth * p * (1 / d), y = window.innerHeight - 180;
    t(Math.min(l, y));
  };
  ue(() => {
    i?.status && (o(!0), C());
  }, [i, h]), ue(() => (window.addEventListener("resize", C), () => {
    window.removeEventListener("resize", C);
  }), []);
  function u() {
    const p = document.getElementById("tutorial-iframe");
    p.src = i?.data?.url;
  }
  return /* @__PURE__ */ n("div", { children: i?.status && /* @__PURE__ */ v(Ao, { fullWidth: !0, maxWidth: "lg", open: i.status, onClose: () => {
    s({
      type: z.OPEN_MODAL,
      payload: { status: !1, data: {} }
    });
  }, children: [
    /* @__PURE__ */ n(Po, { className: "pt-2 pb-0", children: /* @__PURE__ */ v(fe, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ v(fe, { size: 11, children: [
        /* @__PURE__ */ v(Ne, { variant: "h7", component: "div", children: [
          " ",
          i?.data?.title || ""
        ] }),
        /* @__PURE__ */ n(Ne, { variant: "caption", component: "div", children: i?.data?.subTitle || /* @__PURE__ */ n(me, { children: " " }) })
      ] }),
      /* @__PURE__ */ v(fe, { className: "text-right", size: 1, children: [
        /* @__PURE__ */ n(Zo, { className: "cursor_pointer mt-2 mr-2", onClick: u }),
        /* @__PURE__ */ n(Qo, { className: "cursor_pointer mt-2", onClick: () => {
          s({
            type: z.OPEN_MODAL,
            payload: { status: !1, data: {} }
          });
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ v(Fo, { dividers: !0, children: [
      r && /* @__PURE__ */ n("div", { children: "Loading..." }),
      i?.data?.url && /* @__PURE__ */ n(
        "iframe",
        {
          id: "tutorial-iframe",
          style: { width: "100%", height: `${e}px` },
          title: i?.data?.title || "",
          src: i?.data?.url,
          allowfullscreen: !0,
          frameborder: "0",
          loading: "lazy",
          onLoad: () => o(!1)
        }
      )
    ] })
  ] }) });
};
function ci({
  titleHeading: e,
  navigate: t,
  name: r = null,
  RightComponent: o = null,
  mobileRightComponent: a,
  title: s = "",
  titleClass: i = "text-theme-blue text-max-width",
  showBreadcrumbs: d,
  breadcrumbs: h = [],
  enableBackButton: C = !1,
  breadcrumbColor: u,
  showHelpButton: p = !1
}) {
  const l = Ua(!0), y = h.length - 1, c = d && h.length, f = () => {
    t(-1);
  };
  return ue(() => {
    s && (document.title = s);
  }, [s]), /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ n(Rr, { className: "print-only", text: e }),
    c && /* @__PURE__ */ v(me, { children: [
      /* @__PURE__ */ n(Io, { sx: { mb: 3 }, children: /* @__PURE__ */ v(Mo, { sx: { backgroundColor: u || "#fff" }, children: [
        /* @__PURE__ */ v(fe, { container: !0, children: [
          /* @__PURE__ */ n(fe, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ n(Ro, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${i} breadcrumbs-text-title text-max-width`, children: h.map((E, x) => x < y ? /* @__PURE__ */ n(No, { onClick: f, className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: E.text }, x) : /* @__PURE__ */ n(Ne, { className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", children: E.text }, x)) }) }),
          (h.length > 1 || C) && /* @__PURE__ */ n(fe, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(lt, { variant: "contained", onClick: f, children: "Back" }) }),
          p && /* @__PURE__ */ n(fe, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(Wr, { color: "primary", title: "Help", size: "large", children: /* @__PURE__ */ n(Jo, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ n(Re, { className: "app-page-title--first", children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("div", { style: { display: l ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ n("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ n(
          Rr,
          {
            className: `${i} page-text-title`,
            variant: "p",
            text: e,
            name: r
          }
        ) }) }) }) }),
        !l && /* @__PURE__ */ v(me, { children: [
          /* @__PURE__ */ v(Re, { children: [
            " ",
            o && /* @__PURE__ */ n(o, {}),
            " "
          ] }),
          /* @__PURE__ */ v(Re, { children: [
            " ",
            a,
            " "
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ n(li, {})
    ] })
  ] });
}
const sn = Oo()(ci);
ie.extend(ta);
const di = {
  date: qr,
  datetime: pr,
  dateTimeLocal: pr
}, ui = "-10px", pi = "-16px", fi = (e) => {
  const { fixedFilterFormat: t } = dt, { item: r, applyValue: o, convert: a } = e, { systemDateTimeFormat: s, stateData: i } = We(), d = e?.type || "date", h = t[d], C = (f) => {
    const E = ie(f);
    return E.isValid() && E.year() > 1900;
  }, u = s(i.dateTime), p = (f) => {
    if (!(d !== "date" && d !== "datetime" && d !== "dateTimeLocal" || ((x) => typeof x != "string" ? !1 : !ie(x, u, !0).isValid())(f))) {
      if (a) {
        f = ie(f).utc(), o({ ...r, value: f });
        return;
      }
      if (!C(f)) {
        o({ ...r, value: null });
        return;
      }
      o({ ...r, value: f.format(h) });
    }
  }, l = (f) => {
    if (f && f === t.OverrideDateFormat) {
      const E = f.split("-");
      return E.length === 3 ? E[1] : null;
    }
  }, y = di[d], c = d === "dateTimeLocal" ? r?.value ? ie(r?.value.$d) : null : r?.value ? ie(r.value) : null;
  return /* @__PURE__ */ n(ra, { dateAdapter: na, children: /* @__PURE__ */ n(
    y,
    {
      fullWidth: !0,
      format: u,
      value: c,
      onChange: p,
      slotProps: {
        textField: {
          variant: "standard",
          label: e.label,
          sx: {
            marginTop: ui,
            marginBottom: pi
          }
        }
      },
      localeText: {
        fieldMonthPlaceholder: () => l(u) === "MMM" ? "MMM" : "MM"
      }
    }
  ) });
}, Lt = (e) => Ur().map((t) => ({
  ...t,
  InputComponent: t.InputComponent ? (r) => /* @__PURE__ */ n(fi, { ...r, ...e }) : void 0
})), Me = {
  Edit: "Edit",
  Delete: "Delete"
}, st = {
  Add: "Add",
  Manage: "Manage"
}, mi = [
  { field: "prefName", type: "string", width: 300, headerName: "Preference Name", sortable: !1, filterable: !1 },
  { field: "prefDesc", type: "string", width: 300, headerName: "Preference Description", sortable: !1, filterable: !1 },
  { field: "isDefault", type: "boolean", width: 100, headerName: "Default", sortable: !1, filterable: !1 },
  { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(ze, { icon: /* @__PURE__ */ v(Ie, { title: Me.Edit, children: [
    "   ",
    /* @__PURE__ */ n(dr, {})
  ] }), tabIndex: 1, "data-action": Me.Edit, label: "Edit", color: "primary" }, 1)] },
  { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(ze, { icon: /* @__PURE__ */ v(Ie, { title: Me.Delete, children: [
    /* @__PURE__ */ n(Hr, {}),
    " "
  ] }), tabIndex: 2, "data-action": Me.Delete, label: "Delete", color: "error" }, 2)] }
], hi = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, gi = [5, 10, 20, 50, 100], yi = ({ tTranslate: e = (s) => s, preferenceName: t, gridRef: r, columns: o = [], setIsGridPreferenceFetched: a }) => {
  const { stateData: s, dispatchData: i, removeCurrentPreferenceName: d, getAllSavedPreferences: h } = We(), { navigate: C } = Kt(), u = zr(), p = qt(), { t: l, i18n: y } = hr(), c = { t: l, i18n: y }, [f, E] = F(!1), [x, D] = F(!1), [w, P] = F([]), [L, J] = F(), [j, ee] = F(), [oe, B] = F(!1), [te, Z] = F({}), { Username: R } = s?.getUserData ? s.getUserData : {}, Y = s?.preferences, H = s?.currentPreference, I = s?.gridSettings?.permissions?.preferenceApi, K = s?.gridSettings?.permissions?.defaultPreferenceEnums, Q = cr(r, Gr), X = cr(r, go), Ce = be(() => ce.object({
    prefName: ce.string().trim(!0).required("Preference Name is Required").max(20, "Maximum Length is 20"),
    prefDesc: ce.string().max(100, "Description maximum length is 100")
  }), []);
  ue(() => {
    P(Y?.filter((M) => M.prefId !== 0));
  }, [Y]);
  const re = Kr({
    initialValues: hi,
    validationSchema: Ce,
    onSubmit: async (M) => {
      await _e(M);
    },
    mode: "onBlur"
  }), Ee = (M) => {
    ee(M?.currentTarget);
  }, Oe = () => {
    ee(null);
  }, ot = () => {
    J(), Oe(), E(!1);
  }, Le = async (M, $) => {
    const m = await Pt({ url: I, params: {
      action: "delete",
      id: t,
      Username: R,
      prefIdArray: M
    }, history: C, dispatchData: i });
    let se = m;
    if (typeof m == "string")
      try {
        se = JSON.parse(m);
      } catch (Be) {
        typeof console < "u" && typeof console.error == "function" && console.error("Failed to parse deletePreference response:", Be, m), p.showMessage("An error occurred while processing the server response.");
        return;
      }
    (se === !0 || se?.success) && ($ === H && d({ dispatchData: i }), p.showMessage("Preference Deleted Successfully."));
  }, ke = async (M) => {
    a && a(!1), await $e(M);
  }, _e = async (M) => {
    const $ = M.prefName.trim(), ve = Y.findIndex((xe) => xe.prefName === $);
    if (ve > -1 && (L === st.Add || Y[ve].prefId !== M.prefId)) {
      B(!0);
      return;
    }
    const { pinnedColumns: m } = r.current.state, { orderedFields: se, columnVisibilityModel: Be, lookup: Pe } = r.current.state.columns, qe = [];
    se?.forEach((xe) => {
      const { field: Ke } = Pe[xe], Ye = o.find((Je) => Je.field === Ke) || Pe[xe];
      Ye.width = Pe[xe].width, qe.push(Ye);
    });
    const ye = Q?.items?.map((xe) => {
      const { field: Ke, operator: Ye, value: Je } = xe;
      return { field: Ke, operator: Ye, value: Je };
    });
    Q.items = ye;
    const de = {
      action: "save",
      id: t,
      prefName: $,
      prefDesc: M.prefDesc,
      prefValue: { sortModel: X, filterModel: Q, columnVisibilityModel: Be, gridColumn: qe, pinnedColumns: m },
      isDefault: M.isDefault
    };
    M.prefId && (de.prefId = M.prefId);
    const ae = await Pt({ url: I, params: de, history: C, dispatchData: i }), le = typeof ae == "string" ? JSON.parse(ae) : ae, Dt = L === st.Add ? "Added" : "Saved";
    (le === !0 || le?.success === !0) && (p.showMessage(`Preference ${Dt} Successfully.`), ot()), h({ preferenceName: t, Username: R, history: C, dispatchData: i, preferenceApi: I, defaultPreferenceEnums: K });
  }, $e = async (M) => {
    let $, ve = "Default";
    if (M === 0)
      $ = K[t] || null;
    else {
      const de = await Pt({ url: I, params: {
        action: "load",
        id: t,
        Username: R,
        prefId: M
      }, history: C, dispatchData: i }) || {};
      let ae = de;
      if (typeof de == "string")
        try {
          ae = JSON.parse(de);
        } catch (le) {
          console.error("Failed to parse preference response JSON", { error: le, rawResponse: de });
          return;
        }
      if (ae && ae.prefValue)
        try {
          $ = JSON.parse(ae.prefValue);
        } catch (le) {
          console.error("Failed to parse preference value JSON", { error: le, prefValue: ae.prefValue });
          return;
        }
      else
        $ = null;
      ae && ae.prefName && (ve = ae.prefName);
    }
    if (!$) return;
    const { gridColumn: m, columnVisibilityModel: se, pinnedColumns: Be, sortModel: Pe, filterModel: qe } = $;
    m.forEach(({ field: ye, width: de }) => {
      r.current.getColumnIndex(ye) !== -1 && r.current.setColumnWidth(ye, de);
    }), r.current.setColumnVisibilityModel(se), r.current.state.columns.orderedFields = m.map(({ field: ye }) => ye), r.current.setPinnedColumns(Be), r.current.setSortModel(Pe || []), r.current.setFilterModel(qe), i({ type: z.SET_CURRENT_PREFERENCE_NAME, payload: ve }), a(!0);
  }, Ae = (M) => M.GridPreferenceId, pt = (M, $ = !0) => {
    J(M), Oe(), E(!0), D($), $ && re.resetForm();
  }, xt = async () => {
    const { prefId: M, preferenceName: $ } = te;
    await Le(M, $), h({ preferenceName: t, history: C, dispatchData: i, Username: R, preferenceApi: I, defaultPreferenceEnums: K }), Z({});
  }, ft = async (M) => {
    const $ = M.field === "editAction" ? Me.Edit : M.field === "deleteAction" ? Me.Delete : null;
    if (M.id === 0 && ($ === Me.Edit || $ === Me.Delete)) {
      p.showMessage(`Default Preference Can Not Be ${$ === Me.Edit ? "Edited" : "Deleted"}`);
      return;
    }
    $ === Me.Edit && (J("Modify"), re.setValues(M?.row), D(!0)), $ === Me.Delete && Z({
      prefId: M.id,
      preferenceName: M.row.prefName
    });
  }, at = re.values.prefName.trim(), he = L === st.Manage;
  return /* @__PURE__ */ v(Re, { children: [
    /* @__PURE__ */ v(
      lt,
      {
        id: "grid-preferences-btn",
        "aria-controls": j ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": j ? "true" : void 0,
        onClick: Ee,
        title: e("Preference", c),
        startIcon: /* @__PURE__ */ n(Fr, {}),
        children: [
          e("Preferences", c),
          " ",
          H && `(${H})`
        ]
      }
    ),
    /* @__PURE__ */ v(
      Bo,
      {
        id: "grid-preference-menu",
        anchorEl: j,
        open: !!j,
        onClose: Oe,
        component: Lo,
        dense: !0,
        MenuListProps: {
          "aria-labelledby": "grid-preferences-btn"
        },
        sx: {
          "& .MuiMenu-paper": { minWidth: 240, maxHeight: 320 },
          "& .MuiListItemSecondaryAction-root": {
            display: "flex"
          },
          "& .Mui-selected": {
            color: "text.primary",
            "&:hover": {
              backgroundColor: "success.main"
            }
          }
        },
        children: [
          /* @__PURE__ */ n($t, { component: Pr, dense: !0, onClick: () => pt(st.Add), children: e("Add Preference", c) }),
          /* @__PURE__ */ v($t, { component: Pr, dense: !0, divider: Y?.length > 0, onClick: () => pt(st.Manage, !1), children: [
            /* @__PURE__ */ n(ko, { children: /* @__PURE__ */ n(Fr, {}) }),
            e("Manage Preferences", c)
          ] }),
          Y?.length > 0 && Y?.map((M) => {
            const { prefName: $, prefDesc: ve, prefId: m } = M;
            return /* @__PURE__ */ n(
              $t,
              {
                onClick: () => ke(m),
                component: _o,
                selected: H === $,
                title: e(ve, c),
                dense: !0,
                children: /* @__PURE__ */ n($o, { primary: e($, c) })
              },
              `pref-item-${m}`
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ v(
      je,
      {
        open: f,
        disableRestoreFocus: !0,
        title: /* @__PURE__ */ n(ir, { direction: "row", columnGap: 2, children: /* @__PURE__ */ v(Ne, { variant: "h5", children: [
          L,
          " ",
          e(`Preference${L === st.Manage ? "s" : ""}`, c)
        ] }) }),
        maxWidth: he ? "md" : "sm",
        fullWidth: !0,
        children: [
          x && /* @__PURE__ */ v(
            fe,
            {
              component: "form",
              onSubmit: re.handleSubmit,
              rowGap: 2,
              container: !0,
              sx: {
                "& .MuiFormLabel-root:not(.MuiTypography-root)": {
                  fontWeight: 400,
                  display: "table",
                  whiteSpace: "pre-wrap",
                  wordWrap: "break-word"
                  /* Internet Explorer 5.5+ */
                }
              },
              children: [
                /* @__PURE__ */ n(fe, { size: 12, children: /* @__PURE__ */ n(
                  Vt,
                  {
                    defaultValue: e(re.values.prefName, c),
                    variant: "outlined",
                    size: "small",
                    margin: "dense",
                    label: /* @__PURE__ */ v("span", { children: [
                      e("Preference Name", c),
                      " ",
                      /* @__PURE__ */ n("span", { style: { color: "red" }, children: "*" })
                    ] }),
                    autoFocus: !0,
                    name: "prefName",
                    onChange: re.handleChange,
                    error: !!re.errors.prefName,
                    helperText: re.errors.prefName,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ n(fe, { size: 12, children: /* @__PURE__ */ n(
                  Vt,
                  {
                    defaultValue: e(re.values.prefDesc, c),
                    variant: "outlined",
                    multiline: !0,
                    rows: 2,
                    size: "small",
                    margin: "dense",
                    label: e("Preference Description", c),
                    name: "prefDesc",
                    onChange: re.handleChange,
                    error: !!re.errors.prefDesc,
                    helperText: re.errors.prefDesc,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ n(fe, { size: 12, children: /* @__PURE__ */ n(
                  ct,
                  {
                    control: /* @__PURE__ */ n(
                      Vo,
                      {
                        checked: re.values.isDefault,
                        name: "isDefault",
                        onChange: re.handleChange
                      }
                    ),
                    label: e("Default", c)
                  }
                ) }),
                /* @__PURE__ */ n(fe, { size: 12, children: /* @__PURE__ */ v(ir, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
                  /* @__PURE__ */ n(
                    lt,
                    {
                      type: "submit",
                      size: "small",
                      startIcon: /* @__PURE__ */ n(oa, {}),
                      color: "primary",
                      variant: "contained",
                      disableElevation: !0,
                      children: e("Save", c)
                    }
                  ),
                  /* @__PURE__ */ n(
                    lt,
                    {
                      type: "button",
                      startIcon: /* @__PURE__ */ n(ur, {}),
                      color: "error",
                      variant: "contained",
                      size: "small",
                      onClick: ot,
                      disableElevation: !0,
                      children: e("Close", c)
                    }
                  )
                ] }) })
              ]
            }
          ),
          f && L === st.Manage && /* @__PURE__ */ v(fe, { container: !0, rowGap: 2, children: [
            /* @__PURE__ */ n(fe, { size: 12, children: /* @__PURE__ */ n(
              jr,
              {
                sx: {
                  "& .MuiTablePagination-selectLabel": {
                    marginTop: 2
                  },
                  "& .MuiTablePagination-displayedRows": {
                    marginTop: 2
                  },
                  "& .MuiDataGrid-columnHeader .MuiInputLabel-shrink": {
                    display: "none"
                  }
                },
                className: "pagination-fix",
                onCellClick: ft,
                columns: mi,
                pageSizeOptions: gi,
                pagination: !0,
                rowCount: w.length,
                rows: w,
                getRowId: Ae,
                slots: {
                  headerFilterMenu: !1
                },
                density: "compact",
                disableDensitySelector: !0,
                apiRef: u,
                disableAggregation: !0,
                disableRowGrouping: !0,
                disableRowSelectionOnClick: !0,
                autoHeight: !0
              }
            ) }),
            /* @__PURE__ */ n(fe, { size: 12, children: /* @__PURE__ */ n(ir, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ n(
              lt,
              {
                type: "button",
                startIcon: /* @__PURE__ */ n(ur, {}),
                color: "error",
                variant: "contained",
                size: "small",
                onClick: ot,
                disableElevation: !0,
                children: e("Close", c)
              }
            ) }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ v(
      je,
      {
        open: oe,
        onConfirm: () => B(!1),
        title: "",
        okText: e("Ok", c),
        cancelText: "",
        children: [
          '"',
          at,
          '" ',
          e("name already in use, please use another name.", c)
        ]
      }
    ),
    /* @__PURE__ */ v(
      je,
      {
        open: te.preferenceName,
        onConfirm: xt,
        onCancel: () => Z({}),
        title: "Confirm delete",
        yesNo: !0,
        children: [
          'Are you sure you wish to delete "',
          te.preferenceName,
          '"'
        ]
      }
    )
  ] });
}, bi = {
  IsAnyOf: "isAnyOf"
}, Ci = (e) => {
  const { column: t, item: r, applyValue: o, apiRef: a } = e, s = t?.dataRef?.current?.lookups;
  let i = t.customLookup || s[t.lookup] || [];
  typeof t.lookup == "string" && (i = i.map(({ label: p, value: l }) => ({
    label: p,
    value: l
  })));
  const d = cr(a, Gr), h = be(
    () => d.items?.filter((p) => p.field === t.field),
    [t.field, d.items]
  ), C = Ft(
    (p) => {
      let l = p.target.value;
      if (d.items.length >= 1) {
        l = l.length === 1 ? l[0] : l;
        for (const f of d.items)
          f.field === r.field && (f.operator === bi.IsAnyOf ? l = Array.isArray(l) ? l : [l] : l = l === 0 ? "0" : l);
      }
      if (l.length === 0 && h[0]) {
        a.current.deleteFilterItem(h[0]);
        return;
      }
      const y = l, c = h[0] ? h[0] : r;
      o({ ...c, value: y });
    },
    [a, t.applyZeroFilter, h, r, o]
  ), u = h[0]?.value ?? "";
  return /* @__PURE__ */ n(gr, { variant: "standard", className: "w-100", children: /* @__PURE__ */ n(
    Uo,
    {
      label: t.field,
      variant: "standard",
      value: u,
      onChange: (p) => C(p),
      multiple: Array.isArray(u),
      MenuProps: {
        PaperProps: {
          style: {
            height: "fit-content",
            overflow: "hidden"
          }
        }
      },
      children: i?.map((p, l) => /* @__PURE__ */ n($t, { value: p.value, children: p.label }, l))
    }
  ) });
}, Ei = (e, t, r) => typeof e !== t.string ? [] : e.split(",").map((o) => {
  r.lastIndex = 0;
  const a = r.exec(o);
  if (!a) return null;
  const [, s, i = "ASC"] = a;
  return {
    field: s.trim(),
    sort: i.trim().toLowerCase()
  };
}).filter(Boolean), gt = ({ tTranslate: e, tOpts: t, handleExport: r, contentType: o, type: a, isPivotExport: s = !1 }) => /* @__PURE__ */ v(
  Jr,
  {
    onClick: r,
    "data-type": a,
    "data-content-type": o,
    "data-is-pivot-export": s,
    children: [
      e("Export", t),
      " ",
      a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
    ]
  }
), vi = ({ exportFormats: e, ...t }) => /* @__PURE__ */ v(yo, { ...t, children: [
  e.csv !== !1 && /* @__PURE__ */ n(gt, { ...t, type: "csv", contentType: "text/csv" }),
  e.excel !== !1 && /* @__PURE__ */ n(gt, { ...t, type: "excel", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
  t.showPivotExportBtn && /* @__PURE__ */ n(gt, { ...t, type: "excel With Pivot", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", isPivotExport: !0 }),
  e.xml !== !1 && /* @__PURE__ */ n(gt, { ...t, type: "xml", contentType: "text/xml" }),
  e.html !== !1 && /* @__PURE__ */ n(gt, { ...t, type: "html", contentType: "text/html" }),
  e.json !== !1 && /* @__PURE__ */ n(gt, { ...t, type: "json", contentType: "application/json" })
] }), xi = (e = {}, t = {}) => {
  let r = !0;
  for (const o in e)
    e[o] !== t[o] && (r = !1);
  for (const o in t)
    o in e || (r = !1);
  return r;
}, Di = 10, wi = /(\w+)( ASC| DESC)?/i, Ti = 6e4, we = {
  Copy: "Copy",
  Edit: "Edit",
  Delete: "Delete",
  History: "History",
  Download: "Download"
}, Si = {
  article: /* @__PURE__ */ n(wo, {})
}, U = {
  gridFilterModel: { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" },
  permissions: { edit: !0, add: !0, export: !0, delete: !0, showColumnsOrder: !0, filter: !0 },
  client: "client",
  server: "server",
  object: "object",
  startDate: "startDate",
  endDate: "endDate",
  oneToMany: "oneToMany",
  lookup: "lookup",
  string: "string",
  boolean: "boolean",
  right: "right",
  left: "left",
  dateTime: "dateTime",
  actions: "actions",
  function: "function",
  pageSizeOptions: [5, 10, 20, 50, 100]
}, Oi = [
  { key: "addCreatedOnColumn", field: "CreatedOn", type: "dateTime", header: "Created On" },
  { key: "addCreatedByColumn", field: "CreatedByUser", type: "string", header: "Created By" },
  { key: "addModifiedOnColumn", field: "ModifiedOn", type: "dateTime", header: "Modified On" },
  { key: "addModifiedByColumn", field: "ModifiedByUser", type: "string", header: "Modified By" }
], Ai = (e) => e.value ? /* @__PURE__ */ n(Yo, { style: { color: "green" } }) : /* @__PURE__ */ n(ur, { style: { color: "gray" } }), Nr = Ht("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), kt = Ht(Se)({
  margin: "6px"
}), Pi = Ht(bo)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  minHeight: "auto",
  borderBottom: "none"
}), Fi = function(e) {
  const {
    model: t,
    data: r,
    currentPreference: o,
    isReadOnly: a,
    canAdd: s,
    forAssignment: i,
    showAddIcon: d,
    onAdd: h,
    selectionApi: C,
    selectedSet: u,
    selectAll: p,
    available: l,
    onAssign: y,
    assigned: c,
    onUnassign: f,
    effectivePermissions: E,
    clearFilters: x,
    handleExport: D,
    preferenceName: w,
    apiRef: P,
    gridColumns: L,
    setIsGridPreferenceFetched: J,
    tTranslate: j,
    tOpts: ee,
    filterModel: oe
  } = e, B = t.customAddText || (t.title ? `Add ${t.title}` : "Add"), te = oe?.items?.length || 0;
  return /* @__PURE__ */ v(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px"
      },
      children: [
        /* @__PURE__ */ v("div", { children: [
          t.gridSubTitle && /* @__PURE__ */ v(At, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
            " ",
            j(t.gridSubTitle, ee)
          ] }),
          o && t.showPreferenceInHeader && /* @__PURE__ */ v(At, { className: "preference-name-text", variant: "h6", component: "h6", textAlign: "center", sx: { ml: 1 }, children: [
            j("Applied Preference", ee),
            " - ",
            o
          ] }),
          (a || !s && !i) && /* @__PURE__ */ v(At, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
            " ",
            !s || a ? "" : t.title
          ] }),
          !i && s && !a && /* @__PURE__ */ n(kt, { startIcon: d ? /* @__PURE__ */ n(Ar, {}) : null, onClick: h, size: "medium", variant: "contained", children: B }),
          C.length && r.records.length ? /* @__PURE__ */ n(
            kt,
            {
              onClick: p,
              size: "medium",
              variant: "contained",
              children: u.current.size === r.records.length ? j("Deselect All", ee) : j("Select All", ee)
            }
          ) : /* @__PURE__ */ n(me, {}),
          l && /* @__PURE__ */ n(kt, { startIcon: d ? /* @__PURE__ */ n(Ar, {}) : null, onClick: y, size: "medium", variant: "contained", children: j("Assign", ee) }),
          c && /* @__PURE__ */ n(kt, { startIcon: d ? /* @__PURE__ */ n(So, {}) : null, onClick: f, size: "medium", variant: "contained", children: j("Remove", ee) })
        ] }),
        /* @__PURE__ */ v(Pi, { ...e, children: [
          E.showColumnsOrder && /* @__PURE__ */ n(
            xo,
            {
              render: (Z) => /* @__PURE__ */ n(
                Se,
                {
                  ...Z,
                  startIcon: /* @__PURE__ */ n(sa, {}),
                  size: "small",
                  variant: "text",
                  children: j("COLUMNS", ee)
                }
              )
            }
          ),
          E.filter && /* @__PURE__ */ v(me, { children: [
            /* @__PURE__ */ n(
              Do,
              {
                render: (Z) => /* @__PURE__ */ n(
                  Se,
                  {
                    ...Z,
                    startIcon: /* @__PURE__ */ n(zo, { badgeContent: te, color: "primary", children: /* @__PURE__ */ n(la, {}) }),
                    size: "small",
                    variant: "text",
                    children: j("FILTERS", ee)
                  }
                )
              }
            ),
            /* @__PURE__ */ n(Se, { startIcon: /* @__PURE__ */ n(To, {}), onClick: x, size: "small", children: j("CLEAR FILTER", ee) })
          ] }),
          E.export && /* @__PURE__ */ n(vi, { handleExport: D, showPivotExportBtn: t.pivotApi, exportFormats: t.exportFormats || {}, tTranslate: j, tOpts: ee }),
          w && /* @__PURE__ */ n(yi, { preferenceName: w, gridRef: P, columns: L, setIsGridPreferenceFetched: J })
        ] })
      ]
    }
  );
}, Br = Vr(({
  model: e,
  columns: t,
  api: r,
  defaultSort: o,
  setActiveRecord: a,
  parentFilters: s,
  parent: i,
  where: d,
  title: h,
  permissions: C,
  selected: u,
  assigned: p,
  available: l,
  disableCellRedirect: y = !1,
  onAssignChange: c,
  customStyle: f,
  onCellClick: E,
  showRowsSelected: x,
  chartFilters: D,
  clearChartFilter: w,
  showFullScreenLoader: P,
  customFilters: L,
  onRowDoubleClick: J,
  onRowClick: j = () => {
  },
  gridStyle: ee,
  reRenderKey: oe,
  additionalFilters: B,
  onCellDoubleClickOverride: te,
  onAddOverride: Z,
  dynamicColumns: R,
  readOnly: Y = !1,
  baseFilters: H = [],
  ...I
}) => {
  const [K, Q] = F({ pageSize: Di, page: 0 }), [X, Ce] = F({ recordCount: 0, records: [], lookups: {} }), [re, Ee] = F(!0), Oe = !!c, ot = x, [Le, ke] = F([]), [_e, $e] = F(!1), [Ae, pt] = F(null), xt = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [ft, at] = F(!1), he = qt(), M = e.paginationMode === U.client ? U.client : U.server, { t: $, i18n: ve } = hr(), m = { t: $, i18n: ve }, [se, Be] = F(""), [Pe, qe] = F(Ei(o || e.defaultSort, U, wi)), ye = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (ye.items = [], e.defaultFilters.forEach((g) => {
    ye.items.push(g);
  }));
  const [de, ae] = F({ ...ye }), { navigate: le, getParams: Dt, useParams: xe, pathname: Ke } = Kt(), { id: Ye } = xe() || Dt, Je = Ye?.split("-")[0], Ze = zr(), { idProperty: ge = "id", showHeaderFilters: k = !0, disableRowSelectionOnClick: De = !0, hideBackButton: ne = !1, hideTopFilters: Qe = !0, updatePageTitle: Xe = !0, isElasticScreen: et = !1, navigateBack: Yt = !1, selectionApi: mt = {} } = e, Ve = e.readOnly === !0 || Y, It = e.allowDoubleClick === !1, Jt = Sr(X), pn = e.showAddIcon === !0, fn = e.columns.filter(({ link: g }) => !!g).map((g) => g.link), [br, Cr] = F(!1), { stateData: Ue, dispatchData: Fe, formatDate: Zt, removeCurrentPreferenceName: mn, getAllSavedPreferences: hn, applyDefaultPreferenceIfExists: gn } = We(), { timeZone: Qt } = Ue, wt = { ...U.permissions, ...Ue.gridSettings.permissions, ...e.permissions, ...C }, { Username: yn } = Ue?.getUserData ? Ue.getUserData : {}, {
    gridSettings: {
      permissions: {
        routesWithNoChildRoute: bn = [],
        Url: Tt,
        withControllersUrl: Xt,
        defaultPreferenceEnums: Cn,
        preferenceApi: er,
        historyScreenName: En = "historyScreen",
        showPageTitle: vn = !0
      } = {}
    } = {},
    currentPreference: xn
  } = Ue, Dn = ["isEmpty", "isNotEmpty", "isAnyOf"], wn = Ue.getUserData || {}, Er = e.columns.find((g) => g.type === "fileUpload")?.field || "", Tn = { add: wt.add, edit: wt.edit, delete: wt.delete }, { canAdd: Sn, canEdit: vr, canDelete: On } = en({ userData: wn, model: e, userDefinedPermissions: Tn }), b = e.tTranslate ?? ((g) => g), { addUrlParamKey: tr, searchParamKey: Mt, hideBreadcrumb: An = !1, tableName: Pn, showHistory: Fn = !0, hideBreadcrumbInGrid: In = !1, breadcrumbColor: Mn, disablePivoting: Rn = !1, columnHeaderHeight: Nn = 70 } = e, Bn = e.gridTitle || e.title, Rt = e.preferenceId || e.module?.preferenceId, ht = new URLSearchParams(window.location.search), xr = ht.has("baseData") && ht.get("baseData"), Ln = (() => {
    if (xr) {
      const g = JSON.parse(xr);
      if (typeof g === U.object && g !== null)
        return g;
    }
    return {};
  })(), pe = Sr(/* @__PURE__ */ new Set()), kn = ({ row: g }) => {
    const S = g[ge];
    pe.current.has(S) ? pe.current.delete(S) : pe.current.add(S), ke(Array.from(pe.current));
  }, _n = (g) => {
    const S = g.row[ge], [O, T] = F(pe.current.has(S));
    return ue(() => {
      T(pe.current.has(S));
    }, [g.row, pe.current.size]), /* @__PURE__ */ n(
      Yr,
      {
        onClick: (V) => {
          V.stopPropagation(), kn(g);
        },
        checked: O,
        color: "primary",
        inputProps: { "aria-label": "checkbox" }
      }
    );
  }, rr = {
    radio: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    date: {
      valueFormatter: (g) => Zt({ value: g, useSystemFormat: !0, showOnlyDate: !1, state: Ue.dateTime, timeZone: Qt }),
      filterOperators: Lt({ columnType: "date", label: b("Value", m) })
    },
    dateTime: {
      valueFormatter: (g) => Zt({ value: g, useSystemFormat: !1, showOnlyDate: !1, state: Ue.dateTime, timeZone: Qt }),
      filterOperators: Lt({ columnType: "datetime", label: b("Value", m) })
    },
    dateTimeLocal: {
      valueFormatter: (g) => Zt({ value: g, useSystemFormat: !1, showOnlyDate: !1, state: Ue.dateTime, timeZone: Qt }),
      filterOperators: Lt({ type: "dateTimeLocal", convert: !0 })
    },
    boolean: {
      renderCell: Ai
    },
    select: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    selection: {
      renderCell: (g) => /* @__PURE__ */ n(_n, { ...g })
    }
  };
  ue(() => {
    Jt.current = X;
  }, [X]), ue(() => {
    if (!L || !Object.keys(L).length) return;
    if (L.clear) {
      ae({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
      return;
    }
    const g = Object.entries(L).reduce((S, [O, T]) => (O === U.startDate || O === U.endDate ? S.push(T) : O in L && S.push({ field: O, value: T, operator: "equals", type: "string" }), S), []);
    ae({ items: g, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [L]);
  const $n = ({ field: g }) => (Jt.current.lookups || {})[or[g].lookup] || [];
  ue(() => {
    I.isChildGrid || !Qe || Fe({
      type: z.PASS_FILTERS_TO_HEADER,
      payload: {
        filterButton: null,
        hidden: { search: !0, operation: !0, export: !0, print: !0, filter: !0 }
      }
    });
  }, []);
  const { customActions: nr = [] } = e, { gridColumns: tt, pinnedColumns: Vn, lookupMap: or } = be(() => {
    let g = t || e.gridColumns || e.columns;
    R && (g = [...R, ...g]);
    const S = { left: [Co.field], right: [] }, O = [], T = {};
    for (const N of g) {
      if (N.gridLabel === null || i && N.lookup === i || N.type === U.oneToMany && N.countInList === !1) continue;
      const W = {};
      if (N.type === U.oneToMany && (W.type = "number", W.field = N.field.replace(/s$/, "Count")), rr[N.type] && Object.assign(W, rr[N.type]), W.valueOptions === U.lookup || N.type === U.boolean) {
        let G = [];
        W.valueOptions === U.lookup && (W.valueOptions = $n, G = [...Ur(), ...Eo()].filter((St) => ["is", "not", "isAnyOf"].includes(St.value))), N.type === U.boolean && (G = vo()), W.filterOperators = G.map((_) => ({
          ..._,
          InputComponent: _.InputComponent ? (St) => /* @__PURE__ */ n(
            Ci,
            {
              column: {
                ...N,
                ...N.type === U.boolean ? {
                  customLookup: [
                    { value: !0, label: "Yes" },
                    { value: !1, label: "No" }
                  ]
                } : {},
                dataRef: Jt
              },
              ...St,
              autoHighlight: !0
            }
          ) : void 0
        }));
      }
      (N.linkTo || N.link) && (W.cellClassName = "mui-grid-linkColumn");
      const q = b(N.gridLabel || N.label, m);
      O.push({ headerName: q, description: q, ...N, ...W }), N.pinned && S[N.pinned === U.right ? U.right : U.left].push(N.field), T[N.field] = N;
    }
    let A = e.standard;
    A === !0 && (A = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), A && typeof A === U.object && Oi.forEach(({ key: N, field: W, type: q, header: G }) => {
      if (A[N] === !0) {
        const _ = { field: W, type: q, headerName: G, width: 200 };
        q === U.dateTime && (_.filterOperators = Lt({ columnType: "date" }), _.valueFormatter = rr.dateTime.valueFormatter, _.keepLocal = !0), O.push(_);
      }
    });
    const V = [];
    return !Oe && !Ve && (vr && V.push(/* @__PURE__ */ n(ze, { icon: /* @__PURE__ */ n(Ie, { title: "Edit", children: /* @__PURE__ */ n(dr, {}) }), "data-action": we.Edit, label: "Edit", color: "primary" })), wt.copy && V.push(/* @__PURE__ */ n(ze, { icon: /* @__PURE__ */ v(Ie, { title: "Copy", children: [
      /* @__PURE__ */ n(Or, {}),
      " "
    ] }), "data-action": we.Copy, label: "Copy", color: "primary" })), On && V.push(/* @__PURE__ */ n(ze, { icon: /* @__PURE__ */ v(Ie, { title: "Delete", children: [
      /* @__PURE__ */ n(Hr, {}),
      " "
    ] }), "data-action": we.Delete, label: "Delete", color: "error" })), Fn && V.push(/* @__PURE__ */ n(ze, { icon: /* @__PURE__ */ v(Ie, { title: "History", children: [
      /* @__PURE__ */ n(aa, {}),
      " "
    ] }), "data-action": we.History, label: "History", color: "primary" })), nr.length && nr.forEach(({ icon: N, action: W, color: q }) => {
      V.push(
        /* @__PURE__ */ n(
          ze,
          {
            icon: /* @__PURE__ */ n(Ie, { title: W, children: Si[N] || /* @__PURE__ */ n(Or, {}) }),
            "data-action": W,
            label: W,
            color: q || "primary"
          }
        )
      );
    })), Er.length && V.push(/* @__PURE__ */ n(ze, { icon: /* @__PURE__ */ v(Ie, { title: "Download document", children: [
      /* @__PURE__ */ n(ia, {}),
      " "
    ] }), "data-action": we.Download, label: "Download document", color: "primary" })), V.length && O.push({
      field: "actions",
      type: "actions",
      label: "",
      width: V.length * 50,
      hidable: !1,
      getActions: (N) => {
        const W = [...V];
        if (vr && !Ve) {
          const q = N.row.canEdit === !1;
          W[0] = /* @__PURE__ */ n(
            ze,
            {
              icon: /* @__PURE__ */ n(Ie, { title: "Edit", children: /* @__PURE__ */ n(dr, {}) }),
              "data-action": we.Edit,
              label: "Edit",
              color: "primary",
              disabled: q
            }
          );
        }
        return W;
      }
    }), S.right.push("actions"), { gridColumns: O, pinnedColumns: S, lookupMap: T };
  }, [t, e, i, C, Oe, R]), Nt = (g = "list", S = {}, O, T, A, V) => {
    const { pageSize: N, page: W } = K;
    let q = e.controllerType, G = `${q === "cs" ? Xt : Tt || ""}${e.api || r}`;
    A && (G = `${Xt}${e.pivotApi}`, q = "cs"), (p || l) && (S[p ? "include" : "exclude"] = Array.isArray(u) ? u.join(",") : u);
    const _ = { ...de };
    if (D?.items?.length > 0) {
      const { columnField: it, operatorValue: ar } = D.items[0] || {}, oo = U.chartFilterFields[it];
      _.items = [{ field: oo, operator: ar, isChartFilter: !1 }], JSON.stringify(de) !== JSON.stringify(_) && (ae({ ..._ }), D.items.length = 0);
    }
    e.joinColumn && Je && H.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(Je) }), B && (_.items = [..._.items || [], ...B]), S = { ...S, ...I.extraParams }, (!_.items.length || _.items.every((it) => "value" in it && it.value !== void 0)) && ka({
      action: g,
      page: O ? 0 : W,
      pageSize: O ? 1e6 : N,
      sortModel: Pe,
      filterModel: _,
      controllerType: q,
      api: G,
      setIsLoading: Ee,
      setData: Ce,
      gridColumns: tt,
      model: e,
      parentFilters: s,
      extraParams: S,
      setError: he.showError,
      contentType: O,
      columns: T,
      template: A ? e.exportTemplate : null,
      configFileName: A ? e.configFileName : null,
      dispatchData: Fe,
      showFullScreenLoader: P,
      history: le,
      baseFilters: H,
      isElasticExport: V
    });
  }, Bt = ({ id: g, record: S = {}, mode: O }) => {
    if (a) {
      tn({ id: g, api: r || e.api, setIsLoading: Ee, setActiveRecord: a, model: e, parentFilters: s, where: d });
      return;
    }
    let T = Ke;
    T.endsWith("/") || (T += "/"), O === "copy" ? (T += "0-" + g, Fe({ type: "UPDATE_FORM_MODE", payload: "copy" })) : (T += g, Fe({ type: "UPDATE_FORM_MODE", payload: "" })), tr && (ht.set(tr, S[tr]), T += `?${ht.toString()}`), le(T);
  }, Un = async ({ documentLink: g, fileName: S }) => {
    if (g)
      try {
        const O = await fetch(g);
        if (!O.ok)
          throw new Error(`Failed to fetch the file: ${O.statusText}`);
        const T = await O.blob(), A = window.URL.createObjectURL(T), V = document.createElement("a");
        V.href = A;
        const N = g.split("/").pop() || `downloaded-file.${T.type.split("/")[1] || "txt"}`;
        V.download = S || N, document.body.appendChild(V), V.click(), document.body.removeChild(V), window.URL.revokeObjectURL(A);
      } catch {
        window.open(g);
      }
  }, zn = async (g, S, O) => {
    let T = g.field === e.linkColumn ? we.Edit : null;
    if (!T && g.field === U.actions && (T = O?.action, !T)) {
      const q = S.target.closest("button");
      q && (T = q.dataset.action);
    }
    const { row: A } = g;
    if (!Ve) {
      if (E && typeof await E({ cellParams: g, event: S, details: O }) !== U.boolean)
        return;
      const q = or[g.field] || {};
      if (q.linkTo) {
        le({
          pathname: lr.replaceTags(q.linkTo, A)
        });
        return;
      }
      switch (T) {
        case we.Edit:
          return Bt({ id: A[ge], record: A });
        case we.Copy:
          return Bt({ id: A[ge], mode: "copy" });
        case we.Delete:
          $e(!0), pt({ name: A[e.linkColumn], id: A[ge] });
          break;
        case we.History:
          return le(`${En}?tableName=${Pn}&id=${A[ge]}&breadCrumb=${Mt ? ht.get(Mt) : Bn}`);
        default:
          const G = nr.find((_) => _.action === T && typeof _.onClick === U.function);
          if (G) {
            G.onClick({ row: A, navigate: le });
            return;
          }
          break;
      }
    }
    if (T === we.Download && Un({ documentLink: A[Er], fileName: A.FileName }), !fn.length)
      return;
    const { row: V } = g, N = or[g.field] || {}, W = {
      pathname: lr.replaceTags(N.linkTo, V)
    };
    e.addRecordToState && (W.state = V), le(W);
  }, Gn = async function() {
    await rn({ id: Ae.id, api: `${e.controllerType === "cs" ? Xt : Tt}${e.api || r}`, setIsLoading: Ee, setError: he.showError, setErrorMessage: Be }) === !0 ? ($e(!1), he.showMessage("Record Deleted Successfully."), Nt()) : $e(!1);
  }, Dr = () => {
    Be(null), $e(!1);
  }, jn = (g) => (typeof I.processRowUpdate == "function" && I.processRowUpdate(g, X), g), Hn = (g) => {
    if (g.row.canEdit === !1)
      return;
    const { row: S } = g;
    if (typeof te === U.function) {
      te(g);
      return;
    }
    if (!Ve && !It && !y && Bt({ id: S[ge], record: S }), Ve && e.rowRedirectLink) {
      const O = {
        pathname: lr.replaceTags(e.rowRedirectLink, S)
      };
      e.addRecordToState && (O.state = S), le(O);
    }
    typeof J === U.function && J(g);
  }, Wn = async () => {
    if (pe.current.size < 1) {
      he.showError("Please select at least one record to proceed");
      return;
    }
    const g = Array.from(pe.current), S = new Map(X.records.map((T) => [T[ge], T]));
    let O = g.map((T) => ({ ...Ln, ...S.get(T) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (O = O.map(
      (T) => Object.fromEntries(e.selectionUpdateKeys.map((A) => [A, T[A]]))
    ));
    try {
      const T = await nn({
        id: 0,
        api: `${Tt}${mt || r}/updateMany`,
        values: { items: O },
        setIsLoading: Ee,
        setError: he.showError
      });
      if (T) {
        Nt();
        const A = T.info ? T.info : "Record Added Successfully.";
        he.showMessage(A);
      }
    } catch (T) {
      he.showError(T.message || "An error occurred, please try again later.");
    } finally {
      pe.current.clear(), Ee(!1), at(!1);
    }
  }, qn = () => {
    if (mt.length > 0) {
      if (pe.current.size) {
        at(!0);
        return;
      }
      he.showError(
        "Please select at least one record to proceed"
      ), Ee(!1);
      return;
    }
    typeof Z === U.function ? Z() : Bt({ id: 0 });
  }, Kn = () => {
    if (!de?.items?.length) return;
    const g = JSON.parse(JSON.stringify(U.gridFilterModel));
    ae(g), w && w();
  }, wr = ({ unassign: g, assign: S }) => {
    const O = Array.isArray(u) ? u : u.length ? u.split(",") : [], T = g ? O.filter((A) => !g.includes(parseInt(A))) : [...O, ...S];
    c(typeof u === U.string ? T.join(",") : T);
  }, Yn = () => {
    wr({ assign: Le });
  }, Jn = () => {
    wr({ unassign: Le });
  }, Zn = () => {
    pe.current.size === X.records.length ? (pe.current.clear(), ke([])) : (X.records.forEach((g) => {
      pe.current.add(g[ge]);
    }), ke(X.records.map((g) => g[ge])));
  }, Qn = async ({ preferenceName: g, Username: S, preferenceApi: O, defaultPreferenceEnums: T }) => {
    mn({ dispatchData: Fe });
    const A = await hn({ preferenceName: g, history: le, dispatchData: Fe, Username: S, preferenceApi: O, defaultPreferenceEnums: T });
    gn({ preferenceName: g, dispatchData: Fe, gridRef: Ze, setIsGridPreferenceFetched: Cr, defaultPreferenceEnums: T, preferences: A });
  };
  ue(() => {
    !Rt || !er || Qn({ preferenceName: Rt, Username: yn, preferenceApi: er, defaultPreferenceEnums: Cn });
  }, [er]);
  const Xn = (g) => g[ge], eo = (g) => {
    if (X?.recordCount > Ti) {
      he.showMessage("Cannot export more than 60k records, please apply filters or reduce your results using filters");
      return;
    }
    const { orderedFields: S, columnVisibilityModel: O, lookup: T } = Ze.current.state.columns, A = g.target.dataset.isPivotExport === "true", V = Object.keys(O).filter((G) => O[G] === !1), N = new Set(tt.filter((G) => G.exportable === !1).map((G) => G.field)), W = S.filter(
      (G) => !N.has(G) && !V.includes(G) && G !== "__check__" && G !== "actions"
    );
    if (W.length === 0) {
      he.showMessage("You cannot export while all columns are hidden... please show at least 1 column before exporting");
      return;
    }
    const q = {};
    W.forEach((G) => {
      const _ = T[G];
      q[G] = { field: G, width: _.width, headerName: _.headerName || _.field, type: _.type, keepLocal: _.keepLocal === !0, isParsable: _.isParsable, lookup: _.lookup };
    }), Nt(
      A ? "export" : void 0,
      void 0,
      g.target.dataset.contentType,
      q,
      A,
      et
    );
  };
  ue(() => {
    !Tt || Rt && !br || Nt();
  }, [K, Pe, de, r, tt, e, s, p, u, l, D, br, oe, Tt]), ue(() => {
    if (!(I.isChildGrid || Oe || !Xe))
      return Fe({ type: z.PAGE_TITLE_DETAILS, payload: { icon: "", titleHeading: e.pageTitle || e.title, title: e.title } }), () => {
        Fe({
          type: z.PAGE_TITLE_DETAILS,
          payload: null
        });
      };
  }, []), ue(() => {
    if (I.isChildGrid)
      return;
    let g = Ke;
    if (ne || bn.includes(g)) {
      Fe({
        type: z.SET_PAGE_BACK_BUTTON,
        payload: { status: !1, backRoute: "" }
      });
      return;
    }
    g = g.split("/"), g.pop(), g = g.join("/"), Fe({
      type: z.SET_PAGE_BACK_BUTTON,
      payload: { status: !0, backRoute: g }
    });
  }, [re]);
  const to = (g) => {
    const { items: S } = g, O = S.map((A) => {
      const { field: V, operator: N, type: W, value: q } = A, G = tt.find((it) => it.field === V) || {}, _ = G.type === U.number;
      return _ && q < 0 ? { ...A, value: null } : Dn.includes(N) || _ && !isNaN(q) || !_ ? (et && tt.filter((ar) => ar.field === V)[0]?.isKeywordField && (A.filterField = `${A.field}.keyword`), A.value = ["isEmpty", "isNotEmpty"].includes(N) ? null : q, { ...A, type: G.type }) : { field: V, operator: N, type: W, value: _ ? null : q };
    });
    g.items = O, ae(g), (g.items.findIndex((A) => A.isChartFilter && !["isEmpty", "isNotEmpty"].includes(A.operator)) === -1 || D?.items?.length && (!g.items.length || D.items.findIndex((A) => A.columnField === g.items[0]?.field) > -1)) && w && w();
  }, ro = (g) => {
    const S = g.map((O) => {
      const T = tt.filter((N) => N.field === O.field)[0] || {}, A = et && T.isKeywordField, V = { ...O, filterField: A ? `${O.field}.keyword` : O.field };
      return T.dataIndex && (V.filterField = T.dataIndex), V;
    });
    qe(S);
  }, Tr = h || e.gridTitle || e.title, no = Mt ? [{ text: ht.get(Mt) || Tr }] : [{ text: Tr }];
  return /* @__PURE__ */ v(me, { children: [
    vn && /* @__PURE__ */ n(
      sn,
      {
        navigate: le,
        showBreadcrumbs: !An && !In,
        breadcrumbs: no,
        enableBackButton: Yt,
        breadcrumbColor: Mn
      }
    ),
    /* @__PURE__ */ v(Re, { style: ee || f, children: [
      /* @__PURE__ */ n(Re, { sx: { display: "flex", maxHeight: "80vh", flexDirection: "column" }, children: /* @__PURE__ */ n(
        jr,
        {
          sx: {
            "& .MuiTablePagination-selectLabel": {
              marginTop: 2
            },
            "& .MuiTablePagination-displayedRows": {
              marginTop: 2
            },
            "& .MuiDataGrid-virtualScroller ": {
              zIndex: 2
            }
          },
          headerFilters: k,
          unstable_headerFilters: k,
          checkboxSelection: Oe,
          loading: re,
          className: "pagination-fix",
          onCellClick: zn,
          onCellDoubleClick: Hn,
          columns: tt,
          paginationModel: K,
          pageSizeOptions: U.pageSizeOptions,
          onPaginationModelChange: Q,
          pagination: !0,
          rowCount: X.recordCount,
          rows: X.records,
          sortModel: Pe,
          paginationMode: M,
          sortingMode: M,
          filterMode: M,
          processRowUpdate: jn,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: ro,
          onFilterModelChange: to,
          rowSelection: Le,
          onRowSelectionModelChange: ke,
          filterModel: de,
          getRowId: Xn,
          onRowClick: j,
          slots: {
            headerFilterMenu: !1,
            toolbar: Fi,
            footer: _a
          },
          slotProps: {
            toolbar: {
              model: e,
              data: X,
              currentPreference: xn,
              isReadOnly: Ve,
              canAdd: Sn,
              forAssignment: Oe,
              showAddIcon: pn,
              onAdd: qn,
              selectionApi: mt,
              selectedSet: pe,
              selectAll: Zn,
              available: l,
              onAssign: Yn,
              assigned: p,
              onUnassign: Jn,
              effectivePermissions: wt,
              clearFilters: Kn,
              handleExport: eo,
              preferenceName: Rt,
              apiRef: Ze,
              gridColumns: tt,
              setIsGridPreferenceFetched: Cr,
              tTranslate: b,
              tOpts: m,
              idProperty: ge,
              filterModel: de
            },
            footer: {
              pagination: !0,
              apiRef: Ze
            },
            panel: {
              placement: "bottom-end"
            }
          },
          hideFooterSelectedRowCount: ot,
          density: "compact",
          disableDensitySelector: !0,
          apiRef: Ze,
          disableAggregation: !0,
          disableRowGrouping: !0,
          disableRowSelectionOnClick: De,
          disablePivoting: Rn,
          initialState: {
            columns: {
              columnVisibilityModel: xt
            },
            pinnedColumns: Vn
          },
          localeText: {
            filterValueTrue: b("Yes", m),
            filterValueFalse: b("No", m),
            noRowsLabel: b("No data", m),
            footerTotalRows: `${b("Total rows", m)}:`,
            MuiTablePagination: {
              labelRowsPerPage: b("Rows per page", m),
              labelDisplayedRows: ({ from: g, to: S, count: O }) => `${g}–${S} ${b("of", m)} ${O}`
            },
            toolbarQuickFilterPlaceholder: b(e?.searchPlaceholder || "Search...", m),
            toolbarColumns: b("Columns", m),
            toolbarFilters: b("Filters", m),
            toolbarExport: b("Export", m),
            filterPanelAddFilter: b("Add filter", m),
            filterPanelRemoveAll: b("Remove all", m),
            filterPanelDeleteIconLabel: b("Delete", m),
            filterPanelColumns: b("Columns", m),
            filterPanelOperator: b("Operator", m),
            filterPanelValue: b("Value", m),
            filterPanelInputLabel: b("Value", m),
            filterPanelInputPlaceholder: b("Filter value", m),
            columnMenuLabel: b("Menu", m),
            columnMenuShowColumns: b("Show columns", m),
            columnMenuManageColumns: b("Manage columns", m),
            columnMenuFilter: b("Filter", m),
            columnMenuHideColumn: b("Hide column", m),
            columnMenuManagePivot: b("Manage pivot", m),
            toolbarColumnsLabel: b("Select columns", m),
            toolbarExportLabel: b("Export", m),
            pivotDragToColumns: b("Drag here to pivot by", m),
            pivotDragToRows: b("Drag here to group by", m),
            pivotDragToValues: b("Drag here to create values", m),
            pivotColumns: b("Pivot columns", m),
            pivotRows: b("Row groups", m),
            pivotValues: b("Values", m),
            pivotMenuRows: b("Rows", m),
            pivotMenuColumns: b("Columns", m),
            pivotMenuValues: b("Values", m),
            pivotToggleLabel: b("Pivot", m),
            pivotSearchControlPlaceholder: b("Search pivot columns", m),
            columnMenuUnsort: b("Unsort", m),
            columnMenuSortAsc: b("Sort by ascending", m),
            columnMenuSortDesc: b("Sort by descending", m),
            columnMenuUnpin: b("Unpin", m),
            columnsPanelTextFieldLabel: b("Find column", m),
            columnsPanelTextFieldPlaceholder: b("Column title", m),
            columnsPanelHideAllButton: b("Hide all", m),
            columnsPanelShowAllButton: b("Show all", m),
            pinToLeft: b("Pin to left", m),
            pinToRight: b("Pin to right", m),
            unpin: b("Unpin", m),
            filterValueAny: b("any", m),
            filterOperatorIs: b("is", m),
            filterOperatorNot: b("is not", m),
            filterOperatorIsAnyOf: b("is any of", m),
            filterOperatorContains: b("contains", m),
            filterOperatorDoesNotContain: b("does not contain", m),
            filterOperatorEquals: b("equals", m),
            filterOperatorDoesNotEqual: b("does not equal", m),
            filterOperatorStartsWith: b("starts with", m),
            filterOperatorEndsWith: b("ends with", m),
            filterOperatorIsEmpty: b("is empty", m),
            filterOperatorIsNotEmpty: b("is not empty", m),
            filterOperatorAfter: b("is after", m),
            filterOperatorOnOrAfter: b("is on or after", m),
            filterOperatorBefore: b("is before", m),
            filterOperatorOnOrBefore: b("is on or before", m),
            toolbarFiltersTooltipHide: b("Hide filters", m),
            toolbarFiltersTooltipShow: b("Show filters", m),
            //filter textfield labels
            headerFilterOperatorContains: b("contains", m),
            headerFilterOperatorEquals: b("equals", m),
            headerFilterOperatorStartsWith: b("starts with", m),
            headerFilterOperatorEndsWith: b("ends with", m),
            headerFilterOperatorIsEmpty: b("is empty", m),
            headerFilterOperatorIsNotEmpty: b("is not empty", m),
            headerFilterOperatorAfter: b("is after", m),
            headerFilterOperatorOnOrAfter: b("is on or after", m),
            headerFilterOperatorBefore: b("is before", m),
            headerFilterOperatorOnOrBefore: b("is on or before", m),
            headerFilterOperatorIs: b("is", m),
            "headerFilterOperator=": b("equals", m),
            "headerFilterOperator!=": b("does not equal", m),
            "headerFilterOperator>": b("greater than", m),
            "headerFilterOperator>=": b("greater than or equal to", m),
            "headerFilterOperator<": b("less than", m),
            "headerFilterOperator<=": b("less than or equal to", m),
            columnsManagementSearchTitle: b("Search", m),
            columnsManagementNoColumns: b("No columns", m),
            paginationRowsPerPage: b("Rows per page", m),
            paginationDisplayedRows: ({ from: g, to: S, count: O }) => `${g}–${S} ${b("of", m)} ${O}`,
            toolbarQuickFilterLabel: b("Search", m),
            toolbarFiltersTooltipActive: (g) => `${g} ${b(g === 1 ? "active filter" : "active filters", m)}`,
            columnHeaderSortIconLabel: b("Sort", m),
            filterPanelOperatorAnd: b("And", m),
            filterPanelOperatorOr: b("Or", m),
            noResultsOverlayLabel: b("No results found", m),
            columnHeaderFiltersTooltipActive: (g) => `${g} ${b(g === 1 ? "active filter" : "active filters", m)}`,
            detailPanelToggle: b("Detail panel toggle", m),
            checkboxSelectionHeaderName: b("Checkbox selection", m),
            columnsManagementShowHideAllText: b("Show/Hide all", m),
            noColumnsOverlayLabel: b("No columns", m),
            noColumnsOverlayManageColumns: b("Manage columns", m),
            columnsManagementReset: b("Reset", m),
            groupColumn: (g) => `${b("Group by", m)} ${g}`,
            unGroupColumn: (g) => `${b("Ungroup", m)} ${g}`,
            footerRowSelected: (g) => {
              const S = g === 1 ? "item selected" : "items selected";
              return `${g.toLocaleString()} ${b(S, m)}`;
            }
          },
          showToolbar: !0,
          columnHeaderHeight: Nn
        }
      ) }),
      se && /* @__PURE__ */ v(je, { open: !!se, onConfirm: Dr, onCancel: Dr, title: "Info", hideCancelButton: !0, children: [
        " ",
        se
      ] }),
      _e && !se && /* @__PURE__ */ n(je, { open: _e, onConfirm: Gn, onCancel: () => $e(!1), title: "Confirm Delete", children: /* @__PURE__ */ v(Nr, { children: [
        b("Are you sure you want to delete", m),
        " ",
        Ae.name && /* @__PURE__ */ n(Ie, { style: { display: "inline" }, title: Ae.name, arrow: !0, children: Ae.name.length > 30 ? `${Ae.name.slice(0, 30)}...` : Ae.name }),
        " ?"
      ] }) }),
      ft && /* @__PURE__ */ n(
        je,
        {
          open: ft,
          onConfirm: Wn,
          onCancel: () => at(!1),
          title: "Confirm Add",
          children: /* @__PURE__ */ v(Nr, { children: [
            b("Are you sure you want to add", m),
            " ",
            pe.current.size,
            " ",
            b("records", { count: pe.current.size, ...m }),
            "?"
          ] })
        }
      )
    ] })
  ] });
}, xi), Ii = ({ column: e, field: t, formik: r, otherProps: o }) => {
  const a = (d) => {
    r.setFieldValue(t, d.target.checked);
  }, s = be(() => r.values[t] ?? !!e.defaultValue, [r, e]), i = typeof e.readOnly == "function" ? e.readOnly(r) : e.readOnly;
  return /* @__PURE__ */ v("div", { children: [
    /* @__PURE__ */ n(
      pa,
      {
        control: /* @__PURE__ */ n(
          Yr,
          {
            ...o,
            name: t,
            disabled: i || e.disabled === !0,
            checked: s,
            onChange: a,
            onBlur: r.handleBlur,
            defaultChecked: e.defaultValue
          }
        )
      }
    ),
    /* @__PURE__ */ n(Ct, { error: r.touched[t] && !!r.errors[t], children: r.touched[t] && r.errors[t] })
  ] }, t);
}, Ut = ({ column: e, field: t, formik: r, otherProps: o }) => {
  const a = Et(), s = e.rows || (e.multiline ? 5 : 1);
  return /* @__PURE__ */ n(
    jt,
    {
      type: "text",
      variant: e.variant || "standard",
      InputProps: {
        readOnly: e.readOnly === !0,
        sx: e.readOnly ? { backgroundColor: a.palette?.action?.disabled } : void 0
      },
      required: e.required,
      multiline: e.multiline,
      rows: s,
      fullWidth: !0,
      name: t,
      value: r.values[t],
      onChange: r.handleChange,
      onBlur: r.handleBlur,
      error: r.touched[t] && !!r.errors[t],
      helperText: r.touched[t] && r.errors[t],
      autoComplete: e.autoComplete,
      ...o,
      defaultValue: e.defaultValue
    },
    t
  );
};
function ln(e, t) {
  const [r, o] = F(e);
  return ue(() => {
    const a = setTimeout(() => {
      o(e);
    }, t);
    return () => {
      clearTimeout(a);
    };
  }, [e, t]), r;
}
const Mi = 47, Ri = 58, Ni = 37, Bi = 40, Li = [8, 46, 9, 27, 13], Lr = ({ value: e, state: t }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const r = e.slice(1, -1);
    return t[r] !== void 0 ? t[r] : e;
  }
  return e;
}, ki = ({ column: e, otherProps: t, formik: r, field: o, ...a }) => {
  const { min: s, max: i } = e, d = Et(), [h, C] = F(r.values[o]), u = ln(h, 400), p = be(
    () => Math.max(0, Lr({ value: s, state: r.values })),
    [s, r.values]
  ), l = be(
    () => Lr({ value: i, state: r.values }),
    [i, r.values]
  );
  ue(() => {
    if (u !== r.values[o]) {
      const c = Number(u);
      c < p ? r.setFieldValue(o, p) : l && c > l ? r.setFieldValue(o, l) : r.setFieldValue(o, c);
    }
  }, [u, o, p, l]);
  const { onBlur: y } = a;
  return t = {
    InputProps: {
      inputProps: {
        min: p,
        max: l,
        readOnly: e.readOnly === !0,
        onKeyDown: (c) => {
          const f = c.which ? c.which : c.keyCode;
          Li.includes(f) || f >= Ni && f <= Bi || f > Mi && f < Ri || c.preventDefault();
        },
        sx: e.readOnly ? { backgroundColor: d.palette?.action?.disabled } : void 0
      }
    },
    type: "number",
    ...t,
    onChange: (c) => {
      C(c.target.value), typeof y == "function" && y(c);
    }
  }, /* @__PURE__ */ n(Ut, { column: e, otherProps: t, formik: r, field: o, ...a });
}, _i = ({ otherProps: e, ...t }) => {
  const [r, o] = bt.useState(!1), a = () => o((h) => !h), s = (h) => {
    h.preventDefault();
  }, { readOnly: i = !1, disabled: d = !1 } = t.column || {};
  return e = {
    type: r ? "text" : "password",
    InputProps: {
      readOnly: i,
      disabled: d,
      endAdornment: /* @__PURE__ */ n(Go, { position: "end", children: /* @__PURE__ */ n(
        Wr,
        {
          "aria-label": "toggle password visibility",
          onClick: a,
          onMouseDown: s,
          edge: "end",
          disabled: d,
          readOnly: i,
          size: "large",
          children: r ? /* @__PURE__ */ n(fa, {}) : /* @__PURE__ */ n(ma, {})
        }
      ) })
    },
    ...e
  }, /* @__PURE__ */ n(Ut, { otherProps: e, ...t });
}, $i = ({ column: e, field: t, formik: r, otherProps: o, fieldConfigs: a = {}, mode: s }) => {
  const i = s !== "copy" && a.disabled, { systemDateTimeFormat: d, stateData: h } = We();
  return /* @__PURE__ */ mr(
    qr,
    {
      ...o,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: t,
      fullWidth: !0,
      format: d(!0, !1, h.dateTime),
      name: t,
      value: ie(r.values[t]),
      onChange: (C) => {
        const p = ie(C).hour(12).toISOString();
        r.setFieldValue(t, p);
      },
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      minDate: e.min ? ie(e.min) : null,
      maxDate: e.max ? ie(e.max) : null,
      disabled: i,
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, Vi = ({ column: e, field: t, formik: r, otherProps: o }) => {
  const { systemDateTimeFormat: a, stateData: s } = We();
  return /* @__PURE__ */ mr(
    pr,
    {
      ...o,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: t,
      fullWidth: !0,
      format: a(!1, !1, s.dateTime),
      name: t,
      value: ie(r.values[t]),
      onChange: (i) => r.setFieldValue(t, i),
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      minDateTime: e.min ? ie(e.min) : null,
      maxDateTime: e.max ? ie(e.max) : null,
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, Ui = ({ column: e, field: t, formik: r, otherProps: o }) => {
  let a = r.values[t];
  return e.isUtc && (a = ie.utc(a).utcOffset(ie().utcOffset(), !0).format()), /* @__PURE__ */ mr(
    ha,
    {
      ...o,
      variant: "standard",
      readOnly: e.readOnly === !0,
      key: t,
      fullWidth: !0,
      name: t,
      value: ie(a),
      onChange: (s) => (e.isUtc && (s = s && s.isValid() ? s.format("YYYY-MM-DDTHH:mm:ss") + ".000Z" : null), r.setFieldValue(t, s)),
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, zi = [null, void 0, ""];
function cn({ column: e, formik: t, lookups: r, dependsOn: o = [], isAutoComplete: a = !1, userSelected: s, model: i }) {
  const [d, h] = F([]), { stateData: C } = We(), u = C?.gridSettings?.permissions?.Url || "", p = be(() => `${u}${i?.api || ""}`, [u, i?.api]), l = be(() => {
    const f = {};
    if (!o.length) return f;
    for (const E of o)
      f[E] = t.values[E];
    return f;
  }, o.map((f) => t.values[f])), y = be(() => o.length ? [] : typeof e.lookup == "string" ? r[e.lookup] : e.lookup, [e.lookup, r, o]), c = async () => {
    if (!e.lookup) return;
    if (!Object.values(l).every(
      (D) => !zi.includes(D)
    )) {
      h([]);
      return;
    }
    let E = [];
    const x = {
      lookups: [{ lookup: e.lookup, where: l }]
    };
    try {
      const D = await Pt({ url: `${p}/combo`, params: x, disableLoader: !0, jsonPayload: !0 });
      D && D.success && D.lookups ? E = D.lookups[e.lookup] || [] : E = [];
    } catch {
      E = [];
    } finally {
      h(E);
    }
  };
  return ue(() => {
    o.length ? c() : (a || !s.current) && h(y);
  }, [l, y, p, e.lookup]), d;
}
const Gi = bt.memo(({ column: e, field: t, formik: r, lookups: o, dependsOn: a = [], model: s, ...i }) => {
  const d = bt.useRef(!1), { placeHolder: h } = e, C = cn({ column: e, formik: r, lookups: o, dependsOn: a, userSelected: d, model: s }), u = Et(), p = be(() => {
    let y = r.values[t];
    if (C?.length && !y && !e.multiSelect && "IsDefault" in C[0]) {
      const c = C.find((f) => f.IsDefault);
      c && (y = c.value, r.setFieldValue(t, c.value));
    }
    return e.multiSelect && (!y || y.length === 0 ? y = [] : Array.isArray(y) || (y = y.split(",").map((c) => parseInt(c)))), y;
  }, [r.values[t], C, e.multiSelect, t]), l = Ft((y) => {
    r.handleChange(y), d.current = !0;
  }, [r]);
  return /* @__PURE__ */ v(
    Wt,
    {
      fullWidth: !0,
      error: r.touched[t] && r.errors[t],
      variant: "standard",
      children: [
        /* @__PURE__ */ n(ya, { children: h || "" }),
        /* @__PURE__ */ n(
          ba,
          {
            IconComponent: ga,
            ...i,
            name: t,
            multiple: e.multiSelect === !0,
            readOnly: e.readOnly === !0,
            value: `${p}`,
            onChange: l,
            onBlur: r.handleBlur,
            sx: {
              backgroundColor: e.readOnly ? u.palette?.action?.disabled : ""
            },
            children: Array.isArray(C) && C.map((y) => /* @__PURE__ */ n(Jr, { value: y.value, disabled: y.isDisabled, children: y.label }, y.value))
          }
        ),
        /* @__PURE__ */ n(Ct, { children: r.touched[t] && r.errors[t] })
      ]
    },
    t
  );
}), kr = Ht("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), ji = ({ component: e, name: t, formik: r, field: o, column: a }) => {
  const { value: s } = r.getFieldProps(t || o), { setFieldValue: i } = r, d = e || a.relation, h = Ft((C) => {
    i(t || o, C);
  }, [i, t, o]);
  return /* @__PURE__ */ v("div", { children: [
    /* @__PURE__ */ n(kr, { children: `Available ${a.label}` }),
    /* @__PURE__ */ n(d, { selected: s, available: !0, onAssignChange: h, disableCellRedirect: a.disableCellRedirect, readOnly: a.readOnly }),
    /* @__PURE__ */ n(kr, { children: `Assigned ${a.label}` }),
    /* @__PURE__ */ n(d, { selected: s, assigned: !0, onAssignChange: h, disableCellRedirect: a.disableCellRedirect, readOnly: a.readOnly })
  ] });
}, Hi = ({ field: e, formik: t, orientation: r = "row", label: o, lookups: a, fieldConfigs: s = {}, mode: i, ...d }) => {
  const h = (y) => {
    t.setFieldValue(e, y.target.value);
  }, C = a ? a[d.column.lookup] : [], u = Et(), p = t.touched[e] && !!t.errors[e], l = i !== "copy" && s.disabled;
  return /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ v(gr, { component: "fieldset", error: p, children: [
      /* @__PURE__ */ n(jo, { component: "legend", children: o }),
      /* @__PURE__ */ n(
        yr,
        {
          row: r === "row",
          "aria-label": o,
          name: e,
          value: t.values[e],
          onChange: h,
          children: C?.map((y, c) => /* @__PURE__ */ n(
            ct,
            {
              value: y.value,
              control: /* @__PURE__ */ n(yt, {}),
              label: y.label,
              disabled: l
            },
            c
          ))
        }
      )
    ] }),
    p && /* @__PURE__ */ n(Ct, { style: { color: u.palette.error.main }, children: t.errors[e] })
  ] });
}, Wi = {
  limitTags: 5
}, qi = Ge.memo(({ column: e, field: t, formik: r, lookups: o, dependsOn: a = [], fieldConfigs: s = {}, mode: i, model: d, ...h }) => {
  const C = cn({ column: e, formik: r, lookups: o, dependsOn: a, model: d, isAutoComplete: !0 });
  let u = r.values[t] || [];
  Array.isArray(u) || (u = u.split(", ").map(Number));
  const p = C.filter((c) => u.includes(c.value)) || [], l = i !== "copy" && s.disabled, y = (c, f) => {
    let E = f?.map((x) => x.value) || [];
    e.dataFormat !== "array" && (E = E.length ? E.join(", ") : ""), r.setFieldValue(t, E);
  };
  return /* @__PURE__ */ v(
    Wt,
    {
      fullWidth: !0,
      variant: "standard",
      error: r.touched[t] && !!r.errors[t],
      children: [
        /* @__PURE__ */ n(
          Zr,
          {
            ...h,
            multiple: !0,
            id: t,
            limitTags: e.limitTags || Wi.limitTags,
            options: C || [],
            getOptionLabel: (c) => c.label || "",
            defaultValue: p,
            renderInput: (c) => /* @__PURE__ */ n(jt, { ...c, variant: "standard" }),
            onChange: y,
            value: p,
            size: "small",
            disabled: l
          }
        ),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ n(Ct, { children: r.errors[t] })
      ]
    },
    t
  );
}), Ki = "#182eb5", Yi = [
  { label: "Sunday", value: 0, display: "S" },
  { label: "Monday", value: 1, display: "M" },
  { label: "Tuesday", value: 2, display: "T" },
  { label: "Wednesday", value: 3, display: "W" },
  { label: "Thursday", value: 4, display: "T" },
  { label: "Friday", value: 5, display: "F" },
  { label: "Saturday", value: 6, display: "S" }
], Ji = Ho(Wo)(({ theme: e, isSelected: t }) => ({
  width: 34,
  height: 34,
  padding: 1,
  margin: 1,
  backgroundColor: t ? Ki : "#ffffff",
  border: `1px solid ${xa[500]}`,
  color: t ? "white" : "black"
})), Zi = ({ day: e, onClick: t, isSelected: r }) => /* @__PURE__ */ n(
  Ji,
  {
    onClick: () => t(e.value),
    isSelected: r,
    style: { margin: "4px" },
    children: e.display
  },
  e.value
), Qi = ({ name: e, field: t, formik: r, expired: o }) => {
  const { setFieldValue: a } = r, { value: s } = r.getFieldProps(e || t), i = "1000001", d = "0111110", h = "0".repeat(7), [C, u] = F(s || h), [p, l] = F(() => s ? s === i ? i : s === d ? d : "Custom" : ""), [y, c] = F(!1), f = Ft((D) => {
    if (Array.isArray(D)) {
      let w = h;
      for (const P of D)
        w = w.substring(0, P) + "1" + w.substring(P + 1);
      u(w), a(e || t, w), c(!0);
    } else {
      let w = y ? h : C;
      const P = w.slice(0, D) + (w[D] === "1" ? "0" : "1") + w.slice(D + 1);
      u(P), a(e || t, P), l("Custom"), c(!1);
    }
  }, [y, h, C, e, t, a]), E = Et(), x = r.touched[t] && !!r.errors[t];
  return /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ n(gr, { component: "fieldset", error: x, children: /* @__PURE__ */ v(
      yr,
      {
        row: !0,
        name: e || t,
        value: p,
        onChange: (D) => {
          const w = D.target.value;
          l(w), w !== "Custom" ? (u(w), a(e || t, w), c(!0)) : (u(h), a(e || t, h), c(!1));
        },
        children: [
          /* @__PURE__ */ n(ct, { value: i, control: /* @__PURE__ */ n(yt, {}), label: "Weekends (Sat - Sun)", onClick: () => f([0, 6]) }),
          /* @__PURE__ */ n(ct, { value: d, control: /* @__PURE__ */ n(yt, {}), label: "Weekdays (Mon - Fri)", onClick: () => f([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ n(ct, { value: "Custom", control: /* @__PURE__ */ n(yt, {}), label: "Specific days" }),
          Yi.map((D, w) => /* @__PURE__ */ n(
            Zi,
            {
              day: D,
              onClick: () => f(w),
              isSelected: p === "Custom" && C[w] === "1",
              disabled: o
            },
            D.value
          ))
        ]
      }
    ) }),
    x && /* @__PURE__ */ n(Ct, { style: { color: E.palette.error.main }, children: r.errors[t] })
  ] });
}, Xi = ({ isAdd: e, column: t, field: r, formik: o, otherProps: a, fieldConfigs: s = {}, mode: i }) => {
  const d = Et();
  let h = o.values[r] || [];
  Array.isArray(h) || (h = h.split(",").map((l) => l.trim()));
  const C = Ge.useMemo(() => i === "copy" ? !0 : typeof s.disabled < "u" ? s.disabled : typeof t.disabled == "function" ? t.disabled({ isAdd: e, formik: o }) : !!t.disabled, [i, s.disabled, t.disabled]), u = t.hasDefault && !e ? [h[0]] : [], p = Ft((l, y, c, f = {}) => {
    const E = y.pop()?.trim();
    y.includes(E) || y.push(E), u && u.includes(f.option) && c === "removeOption" && (y = [f.option]), t.dataFormat !== "array" && (y = y.length ? y.join(",") : ""), o.setFieldValue(r, y);
  }, [o, r]);
  return /* @__PURE__ */ v(
    Wt,
    {
      fullWidth: !0,
      variant: "standard",
      error: o.touched[r] && !!o.errors[r],
      children: [
        /* @__PURE__ */ n(
          Zr,
          {
            ...a,
            multiple: !0,
            id: r,
            freeSolo: !0,
            value: h,
            options: [],
            renderInput: (l) => /* @__PURE__ */ n(
              jt,
              {
                ...l,
                variant: "standard",
                InputProps: {
                  ...l.InputProps,
                  sx: {
                    ...l.InputProps?.sx,
                    ...C && { backgroundColor: d.palette?.action?.disabled }
                  }
                }
              }
            ),
            onChange: p,
            size: "small",
            renderTags: (l, y) => l.map((c, f) => {
              const { key: E, ...x } = y({ index: f });
              return /* @__PURE__ */ n(
                wa,
                {
                  label: c,
                  ...x,
                  disabled: u.includes(c)
                },
                E
              );
            }),
            disabled: C
          }
        ),
        o.touched[r] && o.errors[r] && /* @__PURE__ */ n(Ct, { children: o.errors[r] })
      ]
    },
    r
  );
}, es = (e = []) => {
  const t = {};
  return e.forEach((r) => {
    r.ParentId && t[r.ParentId] ? t[r.ParentId].children.push({
      value: r.value?.toString(),
      label: r.label
    }) : t[r.ParentId] = {
      label: r.ParentName,
      value: "Parent" + r.ParentId.toString(),
      children: [{
        value: r.value?.toString(),
        label: r.label
      }]
    };
  }), Object.values(t);
};
function ts({ column: e, field: t, formik: r, lookups: o, fieldConfigs: a, mode: s }) {
  const i = o ? o[e.lookup] : [], d = es(i), h = r.values[t]?.length ? r.values[t].split(", ") : [];
  let C;
  return s !== "copy" && (C = a?.disabled), /* @__PURE__ */ n(ut, { sx: { minHeight: 350 }, children: /* @__PURE__ */ n(
    Ta,
    {
      selectedItems: h,
      onSelectedItemsChange: (p, l) => {
        r.setFieldValue(t, l?.join(", ") || "");
      },
      disabled: C,
      multiSelect: !0,
      checkboxSelection: !0,
      children: d.map((p) => /* @__PURE__ */ n(Ir, { itemId: p.value, label: p.label, children: p.children.map((l) => /* @__PURE__ */ n(Ir, { itemId: l.value, label: l.label }, l.value)) }, p.value))
    }
  ) });
}
const rs = { maxLength: 500 }, { errorMapping: ns } = dt, os = 1024 * 1024;
function as({ column: e, field: t, formik: r }) {
  const o = r.values[t] || "", { stateData: a } = We(), { maxSize: s, formats: i } = e, { uploadApi: d, mediaApi: h, Url: C } = a?.gridSettings?.permissions, [u, p] = F({
    isExternal: "no",
    selectedFile: null
  }), [l, y] = F(!1), c = qt(), { getParams: f, useParams: E } = Kt(), { associationId: x } = E() || f, D = x?.split("-")[0] || 1, w = (B) => {
    const te = B.target.value;
    p({
      ...u,
      isExternal: te,
      selectedFile: null
    }), r.setFieldValue(t, r.values[t]);
  }, P = (B) => {
    r.setFieldValue(t, B.target.value);
  }, L = (B) => {
    const te = B.target.files[0];
    if (te) {
      if (s && te.size > s * os) {
        c.showError(`File size exceeds the maximum limit of ${s} MB.`);
        return;
      }
      if (Array.isArray(i) && !i.includes(te.type)) {
        c.showError(`Invalid file format. Allowed formats: ${i.join(", ")}.`);
        return;
      }
      p((Z) => ({ ...Z, selectedFile: te }));
    }
  }, J = async () => {
    if (u.selectedFile) {
      y(!0);
      try {
        const B = new FormData();
        B.append("file", u.selectedFile), B.append("DocumentGroupId", r.values.DocumentGroupId), B.append("AssociationId", D);
        const Z = (await vt({
          method: "POST",
          url: d,
          data: B,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!Z.success) {
          c.showError(Z.message || "Upload failed");
          return;
        }
        const R = h + "/" + Z.filePath;
        r.setFieldValue(t, R);
      } catch (B) {
        const te = (B.message.match(/status code (\d{3})/) || [])[1];
        c.showError(ns[te]);
      } finally {
        y(!1);
      }
    }
  }, j = new URL(C, window.location.origin).hostname.toLowerCase();
  bt.useEffect(() => {
    p({
      ...u,
      isExternal: o.toLowerCase().includes(j) ? "no" : "yes"
    });
  }, [o, p]);
  const ee = r.values[t]?.length > (e.max || rs.maxLength), oe = ee ? "red" : "";
  return /* @__PURE__ */ v(Re, { children: [
    /* @__PURE__ */ v(Re, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(Ne, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
      /* @__PURE__ */ v(
        yr,
        {
          row: !0,
          value: u.isExternal,
          onChange: w,
          "aria-label": "is-external-link",
          name: "is-external-link",
          children: [
            /* @__PURE__ */ n(ct, { value: "yes", control: /* @__PURE__ */ n(yt, {}), label: "Yes" }),
            /* @__PURE__ */ n(ct, { value: "no", control: /* @__PURE__ */ n(yt, {}), label: "No" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ v(Re, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(Ne, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ v(Re, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        u.isExternal === "yes" ? /* @__PURE__ */ n(
          Vt,
          {
            fullWidth: !0,
            value: o,
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: oe },
                "&.Mui-focused fieldset": { borderColor: oe },
                "&:hover fieldset": { borderColor: oe }
              }
            },
            onChange: P,
            placeholder: "Enter external link"
          }
        ) : /* @__PURE__ */ n(
          Vt,
          {
            fullWidth: !0,
            value: o,
            placeholder: "Link autopopulated once uploaded",
            InputProps: { readOnly: !0 }
          }
        ),
        ee && /* @__PURE__ */ v(Ne, { sx: { color: "red" }, children: [
          "Maximum allowed length for the document link is ",
          e.max,
          " characters."
        ] })
      ] })
    ] }),
    u.isExternal === "no" && /* @__PURE__ */ v(Re, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ v(
        lt,
        {
          variant: "outlined",
          component: "label",
          disabled: l,
          children: [
            "Choose File",
            /* @__PURE__ */ n("input", { type: "file", hidden: !0, onChange: L })
          ]
        }
      ),
      u.selectedFile && /* @__PURE__ */ n(Ie, { title: u.selectedFile.name, arrow: !0, children: /* @__PURE__ */ n(Ne, { variant: "body2", children: u.selectedFile.name.length > 20 ? `${u.selectedFile.name.substring(0, 20)}...` : u.selectedFile.name }) }),
      /* @__PURE__ */ n(
        lt,
        {
          variant: "contained",
          color: "primary",
          onClick: J,
          disabled: !u.selectedFile || l,
          children: l ? /* @__PURE__ */ n(qo, { size: 24, color: "inherit" }) : "Upload File"
        }
      )
    ] })
  ] });
}
const is = ({ field: e, formik: t }) => {
  const [r, o] = Ge.useState({}), a = ln(r, 300);
  Ge.useEffect(() => {
    if (t.values[e])
      try {
        const i = JSON.parse(t.values[e]);
        o(i);
      } catch {
        o({});
      }
  }, [t.values[e]]), Ge.useEffect(() => {
    const i = JSON.stringify(a);
    t.values[e] !== i && t.setFieldValue(e, i);
  }, [a, e, t, t.values[e]]);
  const s = (i, d) => {
    const h = { ...r, [i]: d };
    o(h);
  };
  return /* @__PURE__ */ n(
    Wt,
    {
      fullWidth: !0,
      variant: "standard",
      error: t.touched[e] && !!t.errors[e],
      style: { marginBottom: "1rem" },
      children: Object.keys(r).map((i) => /* @__PURE__ */ v(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.5rem"
          },
          children: [
            /* @__PURE__ */ v(At, { variant: "body1", sx: { width: "180px", marginRight: 2 }, children: [
              i,
              ":"
            ] }),
            /* @__PURE__ */ n(
              Sa,
              {
                id: i,
                name: i,
                value: r[i],
                onChange: (d) => s(i, d.target.value),
                fullWidth: !0,
                style: { flex: 2 }
              }
            )
          ]
        },
        i
      ))
    },
    e
  );
}, ss = {
  boolean: Ii,
  select: Gi,
  string: Ut,
  number: ki,
  password: _i,
  date: $i,
  dateTime: Vi,
  time: Ui,
  oneToMany: ji,
  radio: Hi,
  autocomplete: qi,
  dayRadio: Qi,
  email: Ut,
  chipInput: Xi,
  treeCheckbox: ts,
  fileUpload: as,
  json: is
}, _r = { paddingTop: "2.5px", paddingBottom: "2.5px" }, ls = Da("span")({
  color: "red !important"
}), cs = ({ tabColumns: e, model: t, formik: r, data: o, onChange: a, combos: s, lookups: i, fieldConfigs: d, mode: h, handleSubmit: C }) => {
  const [u, p] = Ge.useState(/* @__PURE__ */ new Set()), { activeStep: l, setActiveStep: y } = Ge.useContext(un), c = {};
  for (let P = 0, L = t.columns.length; P < L; P++) {
    const { field: J, skip: j } = t.columns[P];
    j && (c[j.step] = r.values[J]);
  }
  const f = (P) => u.has(P) || c[P], E = () => {
    for (let P = l + 1; P < e.length; P++)
      if (!f(P))
        return !1;
    return !0;
  }, x = () => {
    let P = l + 1;
    for (; c[P]; )
      P++;
    p((L) => new Set(L).add(l)), P >= e.length || E() ? C() : y(P);
  }, D = () => {
    let P = l - 1;
    for (; c[P] && P > 0; )
      P--;
    y(P);
  };
  if (!e?.length)
    return null;
  const w = e[l];
  return /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ n(Ca, { activeStep: l, sx: { marginBottom: "20px" }, children: e.map(({ title: P, key: L }, J) => /* @__PURE__ */ n(Ea, { completed: f(J), children: /* @__PURE__ */ n(va, { children: /* @__PURE__ */ n(Ne, { sx: { fontSize: "20px" }, children: P }) }) }, L)) }),
    /* @__PURE__ */ v(Ge.Fragment, { children: [
      /* @__PURE__ */ n(dn, { formElements: w.items, model: t, formik: r, data: o, onChange: a, combos: s, lookups: i, fieldConfigs: d, mode: h }),
      /* @__PURE__ */ v(ut, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        l !== 0 ? /* @__PURE__ */ v(Se, { color: "inherit", disabled: l === 0, onClick: D, variant: "contained", sx: { mr: 2 }, children: [
          " ",
          "Back"
        ] }) : null,
        /* @__PURE__ */ n(Se, { onClick: x, variant: "contained", children: E() ? "Finish" : "Next" })
      ] })
    ] })
  ] });
}, dn = ({ formElements: e, model: t, formik: r, data: o, onChange: a, combos: s, lookups: i, fieldConfigs: d, mode: h, isAdd: C }) => e?.length ? /* @__PURE__ */ n(me, { children: e.map(({ Component: u, column: p, field: l, label: y, otherProps: c }, f) => {
  const E = typeof p.relation == "function";
  return /* @__PURE__ */ v(sr, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: E ? "flex-start" : "center", children: [
    p?.showLabel !== !1 ? /* @__PURE__ */ n(sr, { size: { xs: 3 }, sx: _r, children: /* @__PURE__ */ v(Ne, { sx: { fontSize: "16px", fontWeight: "bold" }, children: [
      p.label || l,
      ": ",
      p.required && /* @__PURE__ */ n(ls, { children: "*" })
    ] }) }) : null,
    /* @__PURE__ */ n(sr, { size: { xs: E ? 12 : 9 }, sx: _r, children: /* @__PURE__ */ n(u, { isAdd: C, model: t, fieldConfigs: d[l], mode: h, column: p, field: l, label: y, formik: r, data: o, onChange: a, combos: s, lookups: i, ...c }) })
  ] }, f);
}) }) : null, ds = function({ columns: e, tabs: t = {}, id: r, searchParams: o }) {
  const a = [], s = {};
  for (const d in t)
    s[d] = [];
  for (const d of e) {
    const h = d.type;
    if (d.label === null)
      continue;
    const { field: C, label: u, tab: p } = d, l = {};
    d.options && (l.options = d.options), d.dependsOn && (l.dependsOn = d.dependsOn);
    const y = ss[h];
    if (!y || d.hideInAddGrid && r === "0")
      continue;
    (p && t[p] ? s[p] : a).push({ Component: y, field: C, label: u, column: { ...d, readOnly: o.has("showRelation") || d.readOnly }, otherProps: l });
  }
  const i = [];
  for (const d in s)
    i.push({ key: d, title: t[d], items: s[d] });
  return { formElements: a, tabColumns: i };
}, us = ({ model: e, formik: t, data: r, combos: o, onChange: a, lookups: s, id: i, fieldConfigs: d, mode: h, handleSubmit: C }) => {
  const u = dt.emptyIdValues.includes(i), { formElements: p, tabColumns: l } = Ge.useMemo(() => {
    const y = e.formConfig?.showTabbed, c = new URLSearchParams(window.location.search), { formElements: f, tabColumns: E } = ds({ columns: e.columns, tabs: y ? e.tabs : {}, id: i, searchParams: c });
    return { formElements: f, tabColumns: E, showTabs: y && E.length > 0 };
  }, [e]);
  return /* @__PURE__ */ v("div", { children: [
    /* @__PURE__ */ n(dn, { isAdd: u, formElements: p, model: e, formik: t, data: r, onChange: a, combos: o, lookups: s, fieldConfigs: d, mode: h }),
    /* @__PURE__ */ n("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ n(cs, { tabColumns: l, model: e, formik: t, data: r, onChange: a, combos: o, lookups: s, fieldConfigs: d, mode: h, handleSubmit: C }) })
  ] });
};
function ps(e) {
  const { children: t, value: r, index: o, ...a } = e;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "tabpanel",
      hidden: r !== o,
      id: `simple-tabpanel-${o}`,
      "aria-labelledby": `simple-tab-${o}`,
      ...a,
      children: r === o && /* @__PURE__ */ n(ut, { sx: { p: 3 }, children: t })
    }
  );
}
function fs(e) {
  return {
    id: `simple-tab-${e}`,
    "aria-controls": `simple-tabpanel-${e}`
  };
}
const ms = Vr(({ relation: e, parentFilters: t, parent: r, where: o, models: a, readOnly: s }) => {
  const i = a.find(({ name: C }) => C === e);
  if (!i) return null;
  const d = { ...i, hideBreadcrumb: !0 }, h = d instanceof zt ? d : new zt(d);
  return h ? /* @__PURE__ */ n(
    h.ChildGrid,
    {
      readOnly: s,
      parentFilters: t,
      parent: r,
      model: d,
      where: o,
      isChildGrid: !0
    }
  ) : null;
}), hs = bt.memo(({ relations: e, parent: t, where: r = [], models: o, relationFilters: a, readOnly: s }) => {
  const [i, d] = F(0);
  return /* @__PURE__ */ v(ut, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ n(ut, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ n(Aa, { value: i, onChange: (C, u) => {
      d(u);
    }, "aria-label": "relations tabs", children: e.map((C, u) => {
      const p = o.find(({ name: y }) => y === C) || {}, l = p.listTitle || p.title || C;
      return /* @__PURE__ */ n(
        Oa,
        {
          label: l,
          ...fs(u)
        },
        C
      );
    }) }) }),
    e.map((C, u) => /* @__PURE__ */ n(ps, { value: i, index: u, children: /* @__PURE__ */ n(
      ms,
      {
        readOnly: s,
        relation: C,
        models: o,
        parentFilters: a[C] || [],
        parent: t,
        where: r
      },
      C
    ) }, C))
  ] });
}), un = Gt(1), gs = {}, Te = {
  object: "object",
  function: "function",
  baseData: "baseData",
  string: "string",
  create: "Create",
  copy: "Copy",
  edit: "Edit",
  number: "number"
}, ys = ({
  model: e,
  api: t,
  models: r,
  relationFilters: o = {},
  permissions: a = {},
  Layout: s = us,
  baseSaveData: i = {},
  sx: d,
  readOnly: h,
  beforeSubmit: C,
  deletePromptText: u
}) => {
  const p = e.formTitle || e.title, { navigate: l, getParams: y, useParams: c, pathname: f } = Kt(), { relations: E = [] } = e, { dispatchData: x, stateData: D } = We(), w = c() || y, { id: P = "" } = w, L = P.split("-")[0], J = new URLSearchParams(window.location.search), j = J.has(Te.baseData) && J.get(Te.baseData);
  if (j) {
    const k = JSON.parse(j);
    typeof k === Te.object && k !== null && (i = { ...i, ...k });
  }
  const [ee, oe] = F(!0), [B, te] = F({}), [Z, R] = F(null), [Y, H] = F(!1), I = qt(), [K, Q] = F(null), [X, Ce] = F(0), [re, Ee] = F(!1), [Oe, ot] = F(null), [Le, ke] = F(""), _e = D?.gridSettings?.permissions?.Url || "", $e = typeof e.applyFieldConfig === Te.function ? e.applyFieldConfig({ data: B, lookups: Z }) : gs, Ae = be(() => `${_e}${e.api || t || ""}`, [_e, e.api, t]), { mode: pt } = D.dataForm, xt = D.getUserData || {}, ft = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...a
  }, { canEdit: at } = en({
    userData: xt,
    model: e,
    userDefinedPermissions: ft
  }), { hideBreadcrumb: he = !1, navigateBack: M } = e, $ = () => {
    let k;
    switch (typeof M) {
      case Te.function:
        k = M({ params: w, searchParams: J, data: B });
        break;
      case Te.number:
      case Te.string:
        k = M;
        break;
      default:
        k = f.substring(0, f.lastIndexOf("/"));
        break;
    }
    l(k);
  }, ve = be(() => dt.emptyIdValues.includes(L), [L]), m = be(() => ve ? { ...e.initialValues, ...B, ...i } : { ...i, ...e.initialValues, ...B }, [e.initialValues, B, L]);
  ue(() => {
    if (!_e) return;
    Q(e.getValidationSchema({ id: L, snackbar: I }));
    const k = P.split("-");
    tn({
      ...{
        api: t || Ae,
        model: e,
        setError: qe
      },
      id: k.length > 1 ? k[1] : k[0],
      setIsLoading: oe,
      setActiveRecord: ye
    });
  }, [L, P, e, _e]);
  const se = Kr({
    enableReinitialize: !0,
    initialValues: m,
    validationSchema: K,
    validateOnBlur: !1,
    onSubmit: async (k, { resetForm: De }) => {
      Object.keys(k).forEach((ne) => {
        typeof k[ne] === Te.string && (k[ne] = k[ne].trim());
      }), oe(!0), nn({
        id: L,
        api: Ae,
        values: k,
        setIsLoading: oe,
        setError: I.showError
      }).then((ne) => {
        if (!ne) return;
        if (e.reloadOnSave)
          return window.location.reload();
        const Qe = ne.info ? ne.info : `Record ${L === 0 ? "Added" : "Updated"} Successfully.`;
        I.showMessage(Qe), M !== !1 && $();
      }).catch((ne) => {
        I.showError(
          "An error occured.",
          ne
        ), e.reloadOnSave && De();
      }).finally(() => oe(!1));
    }
  }), { dirty: Be } = se, Pe = () => {
    se.resetForm(), Ee(!1), $();
  }, qe = function(k, De) {
    I.showError(k, De), $();
  }, ye = function({ id: k, title: De, record: ne, lookups: Qe }) {
    const Xe = P.indexOf("-") > -1, et = !k || k === "0", Yt = et ? Te.create : Xe ? Te.copy : Te.edit, mt = et ? "" : ne[e.linkColumn], Ve = [{ text: e.breadCrumbs }, { text: Yt }];
    Xe && (ne[e.linkColumn] = ""), e.columns.forEach((It) => {
      It.skipCopy && Xe && (ne[It.field] = "");
    }), te(ne), R(Qe), mt !== "" && Ve.push({ text: mt }), x({
      type: z.PAGE_TITLE_DETAILS,
      payload: {
        showBreadcrumbs: !0,
        breadcrumbs: Ve
      }
    });
  }, de = function(k) {
    Be ? Ee(!0) : $(), k.preventDefault();
  }, ae = async function() {
    try {
      H(!0), await rn({
        id: L,
        api: t || e.api,
        setIsLoading: oe,
        setError: I.showError,
        setErrorMessage: ke
      }) === !0 && (I.showMessage("Record Deleted Successfully."), $());
    } catch {
      I.showError("An error occured, please try after some time.");
    } finally {
      H(!1);
    }
  }, le = () => {
    ke(null), H(!1);
  };
  if (ee)
    return /* @__PURE__ */ n(ut, { sx: { display: "flex", pt: "20%", justifyContent: "center" }, children: /* @__PURE__ */ n(ua, {}) });
  const Dt = function(k) {
    const { name: De, value: ne } = k.target;
    te({ ...B, [De]: ne });
  }, xe = async function(k) {
    k && k.preventDefault(), typeof C === Te.function && await C({ formik: se });
    const { errors: De } = se;
    se.handleSubmit();
    const ne = Object.keys(De)[0], Qe = De[ne];
    Qe && I.showError(Qe, null, "error");
    const Xe = e.columns.find(
      (et) => et.field === ne
    ) || {};
    Xe.tab && Ce(Object.keys(e.tabs).indexOf(Xe.tab));
  }, Ke = [
    { text: p },
    { text: L === "0" ? "New" : "Update" }
  ], Ye = Number(L) !== 0 && !!E.length, Je = J.has("showRelation"), Ze = !("canEdit" in B) || B.canEdit, ge = !Ze || B.readOnlyRelations;
  return u = u || "Are you sure you want to delete ?", /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ n(
      sn,
      {
        navigate: l,
        title: p,
        showBreadcrumbs: !he,
        breadcrumbs: Ke,
        model: e
      }
    ),
    /* @__PURE__ */ n(un.Provider, { value: { activeStep: X, setActiveStep: Ce }, children: /* @__PURE__ */ v(ca, { sx: { padding: 2, ...d }, children: [
      /* @__PURE__ */ v("form", { children: [
        /* @__PURE__ */ v(
          da,
          {
            direction: "row",
            spacing: 2,
            justifyContent: "flex-end",
            mb: 1,
            children: [
              at && Ze && !Je && !h && /* @__PURE__ */ n(
                Se,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  onClick: xe,
                  children: "Save"
                }
              ),
              /* @__PURE__ */ n(
                Se,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: de,
                  children: "Cancel"
                }
              ),
              a.delete && /* @__PURE__ */ n(
                Se,
                {
                  variant: "contained",
                  color: "error",
                  onClick: () => H(!0),
                  children: "Delete"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ n(
          s,
          {
            model: e,
            formik: se,
            data: B,
            fieldConfigs: $e,
            onChange: Dt,
            lookups: Z,
            id: L,
            handleSubmit: xe,
            mode: pt
          }
        )
      ] }),
      Le && /* @__PURE__ */ v(
        je,
        {
          open: !!Le,
          onConfirm: le,
          onCancel: le,
          title: "Info",
          hideCancelButton: !0,
          children: [
            " ",
            Le
          ]
        }
      ),
      /* @__PURE__ */ n(
        je,
        {
          open: re,
          onConfirm: Pe,
          onCancel: () => Ee(!1),
          title: "Changes not saved",
          okText: "Discard",
          cancelText: "Continue",
          children: "Would you like to continue to edit or discard changes?"
        }
      ),
      /* @__PURE__ */ n(
        je,
        {
          open: Y,
          onConfirm: ae,
          onCancel: () => {
            H(!1), ot(null);
          },
          title: Oe ? "Error Deleting Record" : "Confirm Delete",
          children: u
        }
      ),
      Ye ? /* @__PURE__ */ n(
        hs,
        {
          readOnly: ge,
          models: r,
          relationFilters: o,
          relations: E,
          parent: e.name || e.title || ""
        }
      ) : null
    ] }) })
  ] });
}, _t = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
  nonAlphaNumeric: /[^a-zA-Z0-9]/g,
  compareValidatorRegex: /^compare:(.+)$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
}, bs = {}, $r = !0, Cs = {
  string: "",
  boolean: !1,
  radio: !1,
  oneToMany: ""
};
class zt {
  static defaultPermissions = {
    add: !0,
    edit: !0,
    delete: !0
  };
  constructor(t) {
    const { title: r = "", controllerType: o } = t;
    let { api: a, idProperty: s = a + "Id" } = t;
    const i = "module" in t ? t.module : r.replace(/[^\w\s]/gi, "");
    a || (a = `${r.replaceAll(_t.nonAlphaNumeric, "-").toLowerCase()}`, s = r.replaceAll(" ", "") + "Id"), a = o === "cs" ? `${a}.ashx` : `${a}`;
    const d = { ...t.defaultValues }, h = i || r;
    Object.assign(this, {
      standard: !0,
      name: h,
      permissions: { ...zt.defaultPermissions },
      idProperty: s,
      linkColumn: `${h}Name`,
      overrideFileName: r,
      preferenceId: h,
      tableName: h,
      module: i,
      ...t,
      api: a
    }), this.columnVisibilityModel = this._getColumnVisibilityModel(), this.defaultValues = this._getDefaultValues(d);
  }
  _getColumnVisibilityModel() {
    const t = {};
    for (const r of this.columns)
      r.hide === !0 && (t[r.id || r.field] = !1);
    return t;
  }
  _getDefaultValues(t) {
    for (const r of this.columns) {
      const o = r.field || r.id;
      t[o] = r.defaultValue === void 0 ? Cs[r.type] || "" : r.defaultValue;
    }
    return t;
  }
  getValidationSchema({ id: t }) {
    const { columns: r } = this, o = {};
    for (const a of r) {
      const { field: s, label: i, header: d, type: h = "string", requiredIfNew: C = !1, required: u = !1, min: p = "", max: l = "", validate: y } = a, c = i || d || s;
      if (!c)
        continue;
      let f;
      switch (h) {
        case "string":
          f = ce.string().nullable().trim().label(c), p && !isNaN(Number(p)) && (f = f.min(Number(p), `${c} must be at least ${p} characters long`)), l && !isNaN(Number(l)) && (f = f.max(Number(l), `${c} must be at most ${l} characters long`)), u && (f = f.trim().required(`${c} is required`));
          break;
        case "boolean":
          f = ce.bool().nullable().transform((E, x) => x === "" ? null : E).label(c);
          break;
        case "radio":
        case "dayRadio":
          f = ce.mixed().label(c).required(`Select at least one option for ${c}`);
          break;
        case "date":
          f = ce.date().nullable().transform((E, x) => x === "" || x === null ? null : E).label(c).required(`${c} is required`);
          break;
        case "dateTime":
          f = ce.date().nullable().transform((E, x) => x === "" || x === null ? null : E).label(c);
          break;
        case "select":
        case "autocomplete":
          u ? f = ce.string().trim().label(c).required(`Select at least one ${c}`) : f = ce.string().nullable();
          break;
        case "password":
          f = ce.string().label(c).test("ignore-asterisks", `${c} must be a valid password.`, (E) => {
            if (E === "******") return !0;
            const x = Number(p) || 8, D = Number(l) || 50, w = a.regex || _t.password;
            return ce.string().min(x, `${c} must be at least ${x} characters`).max(D, `${c} must be at most ${D} characters`).matches(
              w,
              `${c} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`
            ).isValidSync(E);
          });
          break;
        case "email":
          f = ce.string().trim().matches(
            a.regex || _t.email,
            "Email must be a valid email"
          );
          break;
        case "number":
          u ? f = ce.number().label(c).required(`${c} is required.`) : f = ce.number().nullable(), p !== void 0 && p !== "" && !isNaN(Number(p)) && (f = f.min(Number(p), `${c} must be greater than or equal to ${p}`)), l !== void 0 && l !== "" && !isNaN(Number(l)) && (f = f.max(Number(l), `${c} must be less than or equal to ${l}`));
          break;
        case "fileUpload":
          f = ce.string().trim().label(c);
          break;
        default:
          f = ce.mixed().nullable().label(c);
          break;
      }
      if (u && h !== "string" && (f = f.required(`${c} is required`)), C && (!t || t === "") && (f = f.trim().required(`${c} is required`)), y) {
        const E = _t.compareValidatorRegex.exec(y);
        if (E) {
          const x = E[1], D = r.find(
            (w) => (w.formField === x || w.field) === x
          );
          f = f.oneOf(
            [ce.ref(x)],
            `${c} must match ${D.label}`
          );
        }
      }
      o[s] = f;
    }
    return ce.object({ ...o, ...this.validationSchema });
  }
  Form = ({ match: t, ...r }) => /* @__PURE__ */ n(ys, { model: this, Layout: this.Layout, ...r });
  Grid = ({ match: t, ...r }) => /* @__PURE__ */ n(Br, { model: this, showRowsSelected: $r, ...r });
  ChildGrid = (t) => /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ n(Br, { model: this, ...t, customStyle: bs, showRowsSelected: $r }),
    /* @__PURE__ */ n(Ko, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  je as DialogComponent,
  Br as GridBase,
  li as HelpModal,
  Rr as MuiTypography,
  sn as PageTitle,
  kl as RouterProvider,
  Qr as SnackbarContext,
  Bl as SnackbarProvider,
  Ll as StateProvider,
  zt as UiModel,
  ja as daDKGrid,
  Wa as deDEGrid,
  Ka as elGRGrid,
  Ja as esESGrid,
  Qa as frFRGrid,
  Pt as httpRequest,
  ei as itITGrid,
  si as locales,
  oi as ptPT,
  ri as trTRGrid,
  Ua as useMobile,
  Kt as useRouter,
  qt as useSnackbar,
  We as useStateContext
};
//# sourceMappingURL=index.js.map
