import { jsx as n, jsxs as v, Fragment as me } from "react/jsx-runtime";
import * as Ge from "react";
import Ct, { createContext as jt, useContext as hr, useState as R, useEffect as ce, useReducer as so, useMemo as ye, useCallback as Ft, memo as zr, useRef as Or, useId as co, createElement as gr } from "react";
import uo from "@mui/material/Snackbar";
import po from "@mui/material/Alert";
import we from "@mui/material/Button";
import fo from "@mui/material/Dialog";
import mo from "@mui/material/DialogActions";
import ho from "@mui/material/DialogContent";
import go from "@mui/material/DialogContentText";
import yo from "@mui/material/DialogTitle";
import * as et from "@mui/x-data-grid-premium";
import { GridFooterContainer as bo, GridFooter as Co, getGridDateOperators as Ur, useGridApiRef as Gr, useGridSelector as dr, gridFilterModelSelector as jr, gridSortModelSelector as Eo, DataGridPremium as Hr, GridActionsCellItem as Ue, GridToolbarExportContainer as vo, Toolbar as xo, GRID_CHECKBOX_SELECTION_COL_DEF as Do, getGridStringOperators as wo, getGridBooleanOperators as To, ColumnsPanelTrigger as So, FilterPanelTrigger as Oo } from "@mui/x-data-grid-premium";
import Wr from "@mui/icons-material/Delete";
import Ar from "@mui/icons-material/FileCopy";
import Ao from "@mui/icons-material/Article";
import ur from "@mui/icons-material/Edit";
import Po from "@mui/icons-material/FilterListOff";
import Pr from "@mui/icons-material/Add";
import Fo from "@mui/icons-material/Remove";
import At from "@mui/material/Typography";
import ct from "@mui/material/Box";
import Ht from "@mui/material/TextField";
import { useTranslation as yr, withTranslation as Io } from "react-i18next";
import { Typography as Re, Dialog as Mo, DialogTitle as Ro, Grid as fe, DialogContent as No, Card as Bo, CardContent as Lo, Breadcrumbs as ko, Link as $o, Button as it, IconButton as Vt, Box as Me, Menu as _o, List as Vo, MenuItem as _t, ListItemButton as Fr, ListItemIcon as zo, ListItem as Uo, ListItemText as Go, TextField as zt, FormControlLabel as lt, Checkbox as jo, Stack as lr, Tooltip as Fe, FormControl as Wt, Select as Ho, Badge as Wo, FormHelperText as dt, useTheme as Et, Input as qo, FilledInput as Ko, OutlinedInput as Yo, InputAdornment as qr, FormLabel as Jo, RadioGroup as br, Radio as bt, styled as Zo, Avatar as Qo, CircularProgress as Xo, Divider as ea } from "@mui/material";
import ta from "@mui/icons-material/Check";
import pr from "@mui/icons-material/Close";
import ra from "@mui/icons-material/Help";
import { Replay as na, Close as oa } from "@mui/icons-material";
import le from "dayjs";
import aa from "dayjs/plugin/utc";
import ia from "dayjs/plugin/timezone";
import { DatePicker as Kr } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as fr } from "@mui/x-date-pickers/DateTimePicker";
import la from "dayjs/plugin/utc.js";
import { LocalizationProvider as sa } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as ca } from "@mui/x-date-pickers/AdapterDayjs";
import da from "@mui/icons-material/Save";
import Ir from "@mui/icons-material/Settings";
import { useFormik as Yr } from "formik";
import * as se from "yup";
import ua from "@mui/icons-material/History";
import pa from "@mui/icons-material/FileDownload";
import Jr from "@mui/material/Checkbox";
import Zr from "@mui/material/MenuItem";
import { styled as qt } from "@mui/material/styles";
import fa from "@mui/icons-material/ViewColumn";
import ma from "@mui/icons-material/FilterList";
import ha from "@mui/material/Paper";
import ga from "@mui/material/Stack";
import ya from "@mui/material/CircularProgress";
import ba from "@mui/material/FormControlLabel";
import { NumberField as Ut } from "@base-ui/react/number-field";
import Ca from "@mui/icons-material/KeyboardArrowUp";
import Qr from "@mui/icons-material/KeyboardArrowDown";
import Ea from "@mui/icons-material/VisibilityOff";
import va from "@mui/icons-material/Visibility";
import { TimePicker as xa } from "@mui/x-date-pickers/TimePicker";
import Kt from "@mui/material/FormControl";
import Da from "@mui/material/InputLabel";
import wa from "@mui/material/Select";
import sr from "@mui/material/Grid";
import Xr from "@mui/material/Autocomplete";
import Ta from "@mui/material/Stepper";
import Sa from "@mui/material/Step";
import Oa from "@mui/material/StepLabel";
import { grey as Aa } from "@mui/material/colors";
import Pa from "@emotion/styled";
import Fa from "@mui/material/Chip";
import { SimpleTreeView as Ia } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as Mr } from "@mui/x-tree-view/TreeItem";
import Ma from "@mui/material/Input";
import Ra from "@mui/material/Tab";
import Na from "@mui/material/Tabs";
const en = jt(null), Ba = "bottom", La = "center", ka = Ct.forwardRef(function(t, r) {
  return /* @__PURE__ */ n(po, { elevation: 6, ref: r, variant: "filled", ...t });
}), Vs = ({ children: e }) => {
  const [t, r] = R(null), [o, a] = R(!1), [l, i] = R(null), [c, h] = R(null), C = function(s, y, d = "info", m) {
    typeof s != "string" && (s = s.toString()), y && typeof y != "string" && (y = y.toString()), r(y ? `${s}: ${y}` : s), i(d), a(!0), h(m);
  }, p = function(s, y, d = "error", m) {
    C(s, y, d, m);
  }, u = function() {
    a(!1), h(null), c && c();
  };
  return /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ n(
      en.Provider,
      {
        value: { showMessage: C, showError: p },
        children: e
      }
    ),
    /* @__PURE__ */ n(uo, { open: o, autoHideDuration: 6e3, onClose: u, anchorOrigin: { vertical: Ba, horizontal: La }, children: /* @__PURE__ */ n(ka, { severity: l, children: t }) })
  ] });
}, Yt = function() {
  return hr(en);
}, je = ({ open: e, onConfirm: t, title: r = "Confirm", onCancel: o, okText: a, cancelText: l, yesNo: i = !1, children: c, maxWidth: h = "sm", fullWidth: C = !0, ...p }) => (a = a || (i ? "Yes" : "Ok"), l = l || (i ? "No" : "Cancel"), /* @__PURE__ */ v(
  fo,
  {
    ...p,
    open: e,
    onClose: o,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    maxWidth: h,
    fullWidth: C,
    children: [
      /* @__PURE__ */ n(yo, { id: "alert-dialog-title", sx: { fontSize: c ? "inherit" : "1.25rem" }, children: r }),
      c && /* @__PURE__ */ n(ho, { dividers: !0, children: /* @__PURE__ */ n(go, { children: c }) }),
      (o || t) && /* @__PURE__ */ v(mo, { children: [
        o && /* @__PURE__ */ n(we, { onClick: o, children: l }),
        t && /* @__PURE__ */ n(we, { onClick: t, autoFocus: !0, children: a })
      ] })
    ]
  }
)), G = {
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
}, tn = (e) => {
  const t = new FormData();
  for (const r in e)
    typeof e[r] == "object" ? t.append(r, JSON.stringify(e[r])) : t.append(r, e[r]);
  return t;
}, $a = (e, t) => {
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
    credentials: l = "include",
    ...i
  } = e, c = {
    method: t,
    credentials: l,
    headers: {
      ...a
    },
    ...i
  };
  o && (a["Content-Type"] === "multipart/form-data" ? (delete c.headers["Content-Type"], c.body = o instanceof FormData ? o : tn(o)) : (c.headers["Content-Type"] = a["Content-Type"] || "application/json", c.body = typeof o == "string" ? o : JSON.stringify(o)));
  const h = await fetch(r, c), C = h.headers.get("content-type") || {};
  return {
    status: h.status,
    data: C.includes("application/json") ? await h.json() : await h.text(),
    headers: Object.fromEntries(h.headers.entries())
  };
}, Pt = async ({ url: e, params: t = {}, history: r, jsonPayload: o = !1, additionalParams: a = {}, additionalHeaders: l = {}, disableLoader: i = !1, dispatchData: c }) => {
  if (t.exportData)
    return $a(e, t);
  i || c({ type: G.UPDATE_LOADER_STATE, payload: !0 }), Ot++;
  const h = {
    method: "POST",
    credentials: "include",
    url: e,
    headers: o ? { ...l } : { "Content-Type": "multipart/form-data", ...l },
    ...a
  };
  t && (h.data = o ? t : tn(t));
  try {
    const C = await vt(h);
    Ot--;
    const p = C.data;
    if (Ot === 0 && !i && c({ type: "UPDATE_LOADER_STATE", loaderOpen: !1 }), C.status === He.SESSION_EXPIRED) {
      r("/login");
      return;
    }
    return C.status !== He.OK ? { data: { message: p.message || "An error occurred" } } : p;
  } catch (C) {
    return Ot--, Ot === 0 && c({ type: "UPDATE_LOADER_STATE", loaderOpen: !1 }), { data: { message: C.message || "Network error" } };
  }
}, st = {
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
}, rn = ({ userData: e = {}, model: t, userDefinedPermissions: r }) => {
  const { permissions: o = [] } = e;
  r = r || { add: !0, edit: !0, delete: !0 };
  const a = o.find((l) => l.Module === t.module);
  return a ? {
    canAdd: r.add && !!a[st.permissionsMapper.add],
    canEdit: r.edit && !!a[st.permissionsMapper.edit],
    canDelete: r.delete && !!a[[st.permissionsMapper.delete]]
  } : { canAdd: r.add, canEdit: r.edit, canDelete: r.delete };
}, _a = ["date", "dateTime"], Va = ["singleSelect"], Rr = 200, za = (e) => (/* @__PURE__ */ new Date()).getTimezoneOffset() === new Date(e).getTimezoneOffset(), Xe = (e, t) => e.status === He.SESSION_EXPIRED ? (t("Session Expired!"), setTimeout(() => {
  window.location.href = "/";
}, Rr), !0) : e.status === He.FORBIDDEN ? (t("Access Denied!"), setTimeout(() => {
  window.location.href = "/";
}, Rr), !0) : (e.status === He.INTERNAL_SERVER_ERROR && t("Internal Server Error"), !1);
function Ua(e) {
  const { operator: t, value: r, type: o } = e, a = ["isEmpty", "isNotEmpty"].includes(t), l = r != null && (r !== "" || o === "number" && r === 0 || o === "boolean" && r === !1);
  return a || l;
}
const Ga = async ({ gridColumns: e, setIsLoading: t, setData: r, page: o, pageSize: a, sortModel: l, filterModel: i, api: c, parentFilters: h, action: C = "list", setError: p, extraParams: u, contentType: s, columns: y, controllerType: d = "node", template: m = null, configFileName: E = null, dispatchData: x, showFullScreenLoader: D = !1, model: w, baseFilters: F = null, isElasticExport: A }) => {
  s || D && x({ type: G.UPDATE_LOADER_STATE, payload: !0 });
  const q = [], _ = [], ee = [];
  e.forEach(({ lookup: B, type: J, field: H, keepLocal: N = !1, keepLocalDate: Y, filterable: Q = !0, dependsOn: X }) => {
    _a.includes(J) && ee.push({ field: H, keepLocal: N, keepLocalDate: Y }), B && !q.includes(B) && Va.includes(J) && Q && (q.push(B), _.push({ lookup: B, dependsOn: X }));
  });
  const ae = [];
  i?.items?.length && i.items.forEach((B) => {
    if (Ua(B)) {
      const { field: J, operator: H, filterField: N } = B;
      let { value: Y } = B;
      const X = e.filter((Ce) => Ce?.field === B.field)[0]?.type;
      X === "boolean" ? Y = Y === "true" || Y === !0 ? 1 : 0 : X === "number" && (Y = Array.isArray(Y) ? Y.filter((Ce) => Ce) : Y), Y = B.filterValues || Y, ae.push({
        field: N || J,
        operator: H,
        value: Y,
        type: X
      });
    }
  }), h && ae.push(...h), F && ae.push(...F);
  const k = {
    start: o * a,
    limit: A ? w.exportSize : a,
    ...u,
    logicalOperator: i.logicOperator,
    sort: l.map((B) => (B.filterField || B.field) + " " + B.sort).join(","),
    where: ae,
    isElasticExport: A,
    model: w.module,
    fileName: w.overrideFileName
  };
  q.length && (k.lookups = q.join(",")), _.length && (k.lookupWithDeps = JSON.stringify(_)), w?.limitToSurveyed && (k.limitToSurveyed = w?.limitToSurveyed);
  const te = {};
  let Z = d === "cs" ? `${c}?action=${C}&asArray=0` : `${c}/${C}`;
  if (m !== null && (Z += `&template=${m}`), E !== null && (Z += `&configFileName=${E}`), s) {
    const B = document.createElement("form");
    if (k.responseType = s, k.columns = y, k.userTimezoneOffset = -(/* @__PURE__ */ new Date()).getTimezoneOffset(), B.setAttribute("method", "POST"), B.setAttribute("id", "exportForm"), B.setAttribute("target", "_blank"), m === null)
      for (const J in k) {
        let H = k[J];
        if (H == null)
          continue;
        typeof H != "string" && (H = JSON.stringify(H));
        const N = document.createElement("input");
        N.type = "hidden", N.name = J, N.value = H, B.append(N);
      }
    B.setAttribute("action", Z), document.body.appendChild(B), B.submit(), setTimeout(() => {
      document.getElementById("exportForm").remove();
    }, 3e3);
    return;
  }
  try {
    t(!0);
    const B = {
      url: Z,
      method: "POST",
      data: k,
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
    const J = await vt(B);
    if (J.status === He.OK) {
      const { records: H } = J.data;
      H && H.forEach((N) => {
        ee.forEach((Y) => {
          const { field: Q, keepLocal: X, keepLocalDate: Ce } = Y;
          if (N[Q]) {
            if (N[Q] = new Date(N[Q]), Ce) {
              const re = N[Q].getTimezoneOffset() * 6e4;
              N[Q] = new Date(N[Q].getTime() + re);
            }
            if (X && !za(N[Q])) {
              const re = N[Q].getTimezoneOffset() * 6e4;
              N[Q] = new Date(N[Q].getTime() + re);
            }
          }
        }), w.columns.forEach(({ field: Y, displayIndex: Q }) => {
          Q && (N[Y] = N[Q]);
        });
      }), r(J.data);
    } else Xe(J, p) || p(J.statusText);
  } catch (B) {
    B.response && !Xe(B.response, p) ? p("Could not list record", B.message || B.toString()) : p("Network failure or server unreachable. Please try again.");
  } finally {
    t(!1), !s && D && x({ type: G.UPDATE_LOADER_STATE, payload: !1 });
  }
}, nn = async ({ api: e, id: t, setIsLoading: r, setActiveRecord: o, model: a, parentFilters: l, where: i = {}, setError: c }) => {
  e = e || a.api, r(!0);
  const h = new URLSearchParams(), C = `${e}/${t ?? "-"}`, p = [];
  (a.formDef || a.columns)?.forEach((s) => {
    s.lookup && !p.includes(s.lookup) && !s.dependsOn && p.push(s.lookup);
  }), h.set("lookups", p), i && Object.keys(i)?.length && h.set("where", JSON.stringify(i));
  try {
    const s = await vt({
      url: `${C}?${h.toString()}`,
      method: "GET",
      credentials: "include"
    });
    if (s.status === He.OK) {
      const { data: y, lookups: d } = s.data;
      let m = y[a.linkColumn];
      const E = a.columns.find((D) => D.field === a.linkColumn);
      if (E && E.lookup && d && d[E.lookup] && d[E.lookup]?.length) {
        const D = d[E.lookup].find((w) => w.value === m);
        D && (m = D.label);
      }
      const x = { ...a.defaultValues };
      o({ id: t, title: m, record: { ...x, ...y, ...l }, lookups: d });
    } else Xe(s, c) || c("Could not load record", s.body.toString());
  } catch (s) {
    s.response && Xe(s.response, c) && c("Could not load record", s.message || s.toString());
  } finally {
    r(!1);
  }
}, on = async function({ id: e, api: t, setIsLoading: r, setError: o }) {
  const a = { success: !1, error: "" };
  if (!e) {
    o("Deleted failed. No active record.");
    return;
  }
  r(!0);
  try {
    const l = await vt({
      url: `${t}/${e}`,
      method: "DELETE",
      credentials: "include"
    });
    if (l.status === He.OK)
      return l.data && !l.data.success ? (a.success = !1, o("Delete failed", l.data.message), !1) : (a.success = !0, !0);
    Xe(l, o) || o("Delete failed", l.body);
  } catch (l) {
    l.response && !Xe(l.response, o) && o("Could not delete record", l.message || l.toString());
  } finally {
    r(!1);
  }
  return a;
}, an = async function({ id: e, api: t, values: r, setIsLoading: o, setError: a }) {
  let l, i;
  e !== 0 ? (l = `${t}/${e}`, i = "PUT") : (l = t, i = "POST");
  try {
    o(!0);
    const c = await vt({
      url: l,
      method: i,
      data: r,
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (c.status === He.OK) {
      const h = c.data;
      if (h.success)
        return h;
      a("Save failed", h.err || h.message);
    } else Xe(c, a) || a("Save failed", c.body);
  } catch (c) {
    c.response && !Xe(c.response, a) && a("Could not save record", c.message || c.toString());
  } finally {
    o(!1);
  }
  return !1;
}, ja = ({ pagination: e, apiRef: t, tTranslate: r = (o) => o }) => {
  const o = t.current.state.pagination.paginationModel.page, a = t.current.state.pagination.paginationModel.pageSize, l = t.current.state.rows.totalRowCount, i = Math.ceil(l / a), { t: c, i18n: h } = yr(), C = { t: c, i18n: h }, [p, u] = R(o + 1), s = function(m) {
    let E = m.target?.value;
    E === "" ? u("") : (E = parseInt(E), E = isNaN(E) || E < 1 ? 1 : E, u(E));
  };
  ce(() => {
    u(o + 1);
  }, [o, a]);
  const y = function() {
    let m = p === "" ? 1 : p;
    m = Math.max(m, 1), m = Math.min(m, i), t.current.setPage(m - 1), u(m), p === "" && u(1);
  }, d = (m) => {
    const E = m.which || m.keyCode, x = String.fromCharCode(E);
    /\d/.test(x) || m.preventDefault();
  };
  return /* @__PURE__ */ v(bo, { children: [
    /* @__PURE__ */ n(ct, { sx: { pl: 5 }, children: e && /* @__PURE__ */ v(me, { children: [
      /* @__PURE__ */ v(At, { variant: "p", children: [
        r("Jump to page", C),
        ":"
      ] }),
      /* @__PURE__ */ n(
        Ht,
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
          value: p,
          onChange: s,
          onKeyPress: d,
          disabled: !l
        }
      ),
      /* @__PURE__ */ n(we, { disabled: !l, size: "small", onClick: y, children: r("Go", C) })
    ] }) }),
    /* @__PURE__ */ n(Co, {})
  ] });
}, Ha = /\${((\w+)\.)?(\w+)}/g, Wa = function(e, t, { template: r = Ha, keepMissingTags: o = !1 } = {}) {
  return !e || !t ? e : e.replace(r, function(a, l, i, c) {
    const h = i ? t[i] || {} : t;
    return h[c] === void 0 ? o ? a : "" : h[c];
  });
}, cr = {
  replaceTags: Wa
};
function Nr({ variant: e = "h2", component: t = "h2", text: r = "", name: o = null, ...a }) {
  return /* @__PURE__ */ v(Re, { variant: e, component: t, ...a, children: [
    r,
    o && ` ${o}`
  ] });
}
function qa(e = !1) {
  const t = l(), [r, o] = R(t);
  function a() {
    setTimeout(() => {
      o(l());
    }, 10);
  }
  ce(() => (window.addEventListener("resize", a), () => {
    window.removeEventListener("resize", a);
  }), []);
  function l() {
    let i = typeof window.navigator > "u" ? "" : navigator.userAgent;
    const c = !!i.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    i = i.toLowerCase();
    const h = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(i);
    let C = null;
    return window.innerWidth <= window.innerHeight ? C = "portrait" : C = "landscape", { mobile: c, tablet: h, portrait: C === "portrait", landscape: C === "landscape" };
  }
  return e ? r.mobile : r;
}
const Ka = (e, t) => {
  switch (t.type) {
    case G.UPDATE_LOCALIZATION:
      return { ...e, dataLocalization: t.payload };
    case G.UPDATE_DATE_TIME:
      return { ...e, dateTime: t.payload };
    case G.UPDATE_FORM_MODE:
      return { ...e, dataForm: t.payload };
    case G.PAGE_TITLE_DETAILS:
      return { ...e, pageTitleDetails: t.payload };
    case G.OPEN_MODAL:
      return { ...e, modal: t.payload };
    case G.SET_PAGE_BACK_BUTTON:
      return { ...e, pageBackButton: t.payload };
    case G.SET_GRID_SETTINGS:
      return { ...e, gridSettings: t.payload };
    case G.SET_LOCAL_LOCALIZATION:
      return { ...e, getLocal: t.payload };
    case G.USER_DATA:
      return { ...e, getUserData: t.payload };
    case G.UDPATE_PREFERENCES:
      return { ...e, preferences: t.payload };
    case G.SET_CURRENT_PREFERENCE_NAME:
      return { ...e, currentPreference: t.payload };
    case G.TOTAL_PREFERENCES:
      return { ...e, totalPreferences: t.payload };
    case G.UPDATE_LOADER_STATE:
      return { ...e, loaderOpen: t.payload };
    case G.PASS_FILTERS_TO_HEADER:
      return { ...e, filtersInHeader: t.payload };
    case G.SET_TIMEZONE:
      return { ...e, timeZone: t.payload };
    default:
      return e;
  }
}, Ya = {
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
}, Ja = {
  Jumptopage: "Gå til side",
  Go: "Gå",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "I dette rum vil vi snart bringe dig et dashboard med hovedoversigt KPIer for nem adgang",
  Pages: "sider",
  MuiTablePagination: {
    labelRowsPerPage: "Rækker pr. side"
  }
}, Za = {
  ...et.daDK,
  ...Ja
}, Qa = {
  Jumptopage: "Zur Seite springen",
  Go: "Gehen",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In diesem Bereich werden wir Ihnen in Kürze ein Dashboard mit den wichtigsten Übersichts-KPIs für einen einfachen Zugriff bereitstellen",
  Pages: "Seiten",
  MuiTablePagination: {
    labelRowsPerPage: "Zeilen pro Seite"
  }
}, Xa = {
  ...et.deDE,
  ...Qa
}, ei = {
  Jumptopage: "Μετάβαση στη σελίδα",
  Go: "Πηγαίνω",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Σε αυτόν τον χώρο θα σας φέρουμε σύντομα έναν πίνακα ελέγχου βασικών επισκόπησης KPI για εύκολη πρόσβαση",
  Pages: "Σελίδες",
  MuiTablePagination: {
    labelRowsPerPage: "Σειρές ανά σελίδα"
  }
}, ti = {
  ...et.elGR,
  ...ei
}, ri = {
  Jumptopage: "Saltar a la página",
  Go: "Ir",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "En este espacio pronto le ofreceremos un panel con los principales KPI generales para un fácil acceso.",
  Pages: "paginas",
  MuiTablePagination: {
    labelRowsPerPage: "Filas por página"
  }
}, ni = {
  ...et.esES,
  ...ri
}, oi = {
  Jumptopage: "Aller à la page",
  Go: "Aller",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Dans cet espace, nous vous proposerons bientôt un tableau de bord des principaux KPI pour un accès facile.",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Lignes par page"
  }
}, ai = {
  ...et.frFR,
  ...oi
}, ii = {
  Jumptopage: "Vai alla pagina",
  Go: "Andare",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In questo spazio presto ti forniremo una dashboard con i principali KPI generali per un facile accesso",
  Pages: "Pagine",
  MuiTablePagination: {
    labelRowsPerPage: "Righe per pagina"
  }
}, li = {
  ...et.itIT,
  ...ii
}, si = {
  Jumptopage: "Sayfaya atla",
  Go: "Gitmek",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
  Pages: "Sayfalar",
  MuiTablePagination: {
    labelRowsPerPage: "Sayfa başına satır"
  }
}, ci = {
  ...et.trTR,
  ...si
}, di = {
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
}, ui = {
  Jumptopage: "Jump to page",
  Go: "Go",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In this space we will soon bring you a dashboard of main overview KPIs for easy access",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Rows per page"
  }
}, pi = {
  ...et.enUS,
  ...ui
}, fi = {
  en: pi,
  "tr-TR": ci,
  "es-ES": ni,
  "da-DK": Za,
  "de-DE": Xa,
  "el-GR": ti,
  "fr-FR": ai,
  "pt-PT": di,
  "it-IT": li
};
le.extend(aa);
le.extend(ia);
const ln = jt(), sn = jt(null), zs = ({ children: e }) => {
  const [t, r] = so(Ka, Ya);
  function o(p, u, s) {
    if (s != null) {
      const y = s;
      let d = p ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
      return y && (d = y.split(" "), d[0] = d[0].toUpperCase(), p ? d = d[0] : u ? d = d[0].toUpperCase() : (d[1] += d[1].includes(":ss") ? "" : ":ss", d = d.join(" "))), d;
    }
    return p ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
  }
  async function a({ preferenceName: p, Username: u, history: s, dispatchData: y, preferenceApi: d, defaultPreferenceEnums: m = {}, addDefaultPreference: E = !1 }) {
    const x = await Pt({ url: d, params: { action: "list", id: p, Username: u }, history: s, dispatchData: y }) || {};
    let D = {};
    if (typeof x == "string")
      try {
        D = JSON.parse(x);
      } catch (F) {
        console.error("Failed to parse preferences response as JSON:", F), D = {};
      }
    else x && typeof x == "object" && (D = x);
    const w = D.preferences || [];
    return E && w.unshift({
      prefName: "Default",
      prefId: 0,
      GridId: p,
      GridPreferenceId: 0,
      prefValue: m[p]
    }), y({ type: G.UDPATE_PREFERENCES, payload: w }), y({ type: G.TOTAL_PREFERENCES, payload: w.length }), w;
  }
  const l = ({ gridRef: p, data: u }) => u.filter((s) => p.current.getColumnIndex(s.field) !== -1);
  async function i({ preferences: p = [], gridRef: u, dispatchData: s, preferenceName: y, setIsGridPreferenceFetched: d, defaultPreferenceEnums: m = {} }) {
    const E = p.find((D) => D.isDefault && D.GridId === y), x = E ? JSON.parse(E.prefValue) : m[y];
    x && Object.keys(x).length && (x.gridColumn = l({ gridRef: u, data: x.gridColumn }), x.sortModel = l({ gridRef: u, data: x.sortModel }), x.filterModel.items = l({ gridRef: u, data: x.filterModel.items }), u.current.setColumnVisibilityModel(x.columnVisibilityModel), u.current.setPinnedColumns(x.pinnedColumns), u.current.setSortModel(x.sortModel || []), u.current.setFilterModel(x?.filterModel), s({ type: G.SET_CURRENT_PREFERENCE_NAME, payload: E ? E.prefName : "Default" })), d && d(!0);
  }
  function c({ dispatchData: p }) {
    p({ type: G.SET_CURRENT_PREFERENCE_NAME, payload: null });
  }
  function h({ value: p, useSystemFormat: u, showOnlyDate: s = !1, state: y, timeZone: d }) {
    if (!p) return "-";
    const m = o(u, s, y);
    return d ? le(p).tz(d).format(m) : le(p).format(m);
  }
  function C() {
    const p = t.dataLocalization, u = fi[p];
    function s(y) {
      return p === "pt-PT" || p === "ptPT" ? u.components.MuiDataGrid.defaultProps.localeText[y] || y : u[y] || y;
    }
    return { getLocalizedString: s };
  }
  return /* @__PURE__ */ n(ln.Provider, { value: { stateData: t, dispatchData: r, systemDateTimeFormat: o, formatDate: h, removeCurrentPreferenceName: c, getAllSavedPreferences: a, applyDefaultPreferenceIfExists: i, useLocalization: C }, children: e });
}, Us = sn.Provider, Jt = () => hr(sn), We = () => {
  const e = hr(ln);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, mi = () => {
  const [e, t] = R(), [r, o] = R(!1), { stateData: a, dispatchData: l } = We(), i = a.modal, c = 16 / 9;
  let h = (window.outerWidth - 10) / window.innerWidth * 100;
  const C = () => {
    let u = document.getElementById("tutorial-iframe");
    u ? (u = u.offsetWidth, u = u / window.innerWidth) : u = 0.9;
    const s = window.innerWidth * u * (1 / c), y = window.innerHeight - 180;
    t(Math.min(s, y));
  };
  ce(() => {
    i?.status && (o(!0), C());
  }, [i, h]), ce(() => (window.addEventListener("resize", C), () => {
    window.removeEventListener("resize", C);
  }), []);
  function p() {
    const u = document.getElementById("tutorial-iframe");
    u.src = i?.data?.url;
  }
  return /* @__PURE__ */ n("div", { children: i?.status && /* @__PURE__ */ v(Mo, { fullWidth: !0, maxWidth: "lg", open: i.status, onClose: () => {
    l({
      type: G.OPEN_MODAL,
      payload: { status: !1, data: {} }
    });
  }, children: [
    /* @__PURE__ */ n(Ro, { className: "pt-2 pb-0", children: /* @__PURE__ */ v(fe, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ v(fe, { size: 11, children: [
        /* @__PURE__ */ v(Re, { variant: "h7", component: "div", children: [
          " ",
          i?.data?.title || ""
        ] }),
        /* @__PURE__ */ n(Re, { variant: "caption", component: "div", children: i?.data?.subTitle || /* @__PURE__ */ n(me, { children: " " }) })
      ] }),
      /* @__PURE__ */ v(fe, { className: "text-right", size: 1, children: [
        /* @__PURE__ */ n(na, { className: "cursor_pointer mt-2 mr-2", onClick: p }),
        /* @__PURE__ */ n(oa, { className: "cursor_pointer mt-2", onClick: () => {
          l({
            type: G.OPEN_MODAL,
            payload: { status: !1, data: {} }
          });
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ v(No, { dividers: !0, children: [
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
function hi({
  titleHeading: e,
  navigate: t,
  name: r = null,
  RightComponent: o = null,
  mobileRightComponent: a,
  title: l = "",
  titleClass: i = "text-theme-blue text-max-width",
  showBreadcrumbs: c,
  breadcrumbs: h = [],
  enableBackButton: C = !1,
  breadcrumbColor: p,
  showHelpButton: u = !1
}) {
  const s = qa(!0), y = h.length - 1, d = c && h.length, m = () => {
    t(-1);
  };
  return ce(() => {
    l && (document.title = l);
  }, [l]), /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ n(Nr, { className: "print-only", text: e }),
    d && /* @__PURE__ */ v(me, { children: [
      /* @__PURE__ */ n(Bo, { sx: { mb: 3 }, children: /* @__PURE__ */ v(Lo, { sx: { backgroundColor: p || "#fff" }, children: [
        /* @__PURE__ */ v(fe, { container: !0, children: [
          /* @__PURE__ */ n(fe, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ n(ko, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${i} breadcrumbs-text-title text-max-width`, children: h.map((E, x) => x < y ? /* @__PURE__ */ n($o, { onClick: m, className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: E.text }, x) : /* @__PURE__ */ n(Re, { className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", children: E.text }, x)) }) }),
          (h.length > 1 || C) && /* @__PURE__ */ n(fe, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(it, { variant: "contained", onClick: m, children: "Back" }) }),
          u && /* @__PURE__ */ n(fe, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(Vt, { color: "primary", title: "Help", size: "large", children: /* @__PURE__ */ n(ra, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ n(Me, { className: "app-page-title--first", children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("div", { style: { display: s ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ n("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ n(
          Nr,
          {
            className: `${i} page-text-title`,
            variant: "p",
            text: e,
            name: r
          }
        ) }) }) }) }),
        !s && /* @__PURE__ */ v(me, { children: [
          /* @__PURE__ */ v(Me, { children: [
            " ",
            o && /* @__PURE__ */ n(o, {}),
            " "
          ] }),
          /* @__PURE__ */ v(Me, { children: [
            " ",
            a,
            " "
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ n(mi, {})
    ] })
  ] });
}
const cn = Io()(hi);
le.extend(la);
const gi = {
  date: Kr,
  datetime: fr,
  dateTimeLocal: fr
}, yi = "-10px", bi = "-16px", Ci = (e) => {
  const { fixedFilterFormat: t } = st, { item: r, applyValue: o, convert: a } = e, { systemDateTimeFormat: l, stateData: i } = We(), c = e?.type || "date", h = t[c], C = (m) => {
    const E = le(m);
    return E.isValid() && E.year() > 1900;
  }, p = l(i.dateTime), u = (m) => {
    if (!(c !== "date" && c !== "datetime" && c !== "dateTimeLocal" || ((x) => typeof x != "string" ? !1 : !le(x, p, !0).isValid())(m))) {
      if (a) {
        m = le(m).utc(), o({ ...r, value: m });
        return;
      }
      if (!C(m)) {
        o({ ...r, value: null });
        return;
      }
      o({ ...r, value: m.format(h) });
    }
  }, s = (m) => {
    if (m && m === t.OverrideDateFormat) {
      const E = m.split("-");
      return E.length === 3 ? E[1] : null;
    }
  }, y = gi[c], d = c === "dateTimeLocal" ? r?.value ? le(r?.value.$d) : null : r?.value ? le(r.value) : null;
  return /* @__PURE__ */ n(sa, { dateAdapter: ca, children: /* @__PURE__ */ n(
    y,
    {
      fullWidth: !0,
      format: p,
      value: d,
      onChange: u,
      slotProps: {
        textField: {
          variant: "standard",
          label: e.label,
          sx: {
            marginTop: yi,
            marginBottom: bi
          }
        }
      },
      localeText: {
        fieldMonthPlaceholder: () => s(p) === "MMM" ? "MMM" : "MM"
      }
    }
  ) });
}, Lt = (e) => Ur().map((t) => ({
  ...t,
  InputComponent: t.InputComponent ? (r) => /* @__PURE__ */ n(Ci, { ...r, ...e }) : void 0
})), Ie = {
  Edit: "Edit",
  Delete: "Delete"
}, at = {
  Add: "Add",
  Manage: "Manage"
}, Ei = [
  { field: "prefName", type: "string", width: 300, headerName: "Preference Name", sortable: !1, filterable: !1 },
  { field: "prefDesc", type: "string", width: 300, headerName: "Preference Description", sortable: !1, filterable: !1 },
  { field: "isDefault", type: "boolean", width: 100, headerName: "Default", sortable: !1, filterable: !1 },
  { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(Ue, { icon: /* @__PURE__ */ v(Fe, { title: Ie.Edit, children: [
    "   ",
    /* @__PURE__ */ n(ur, {})
  ] }), tabIndex: 1, "data-action": Ie.Edit, label: "Edit", color: "primary" }, 1)] },
  { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(Ue, { icon: /* @__PURE__ */ v(Fe, { title: Ie.Delete, children: [
    /* @__PURE__ */ n(Wr, {}),
    " "
  ] }), tabIndex: 2, "data-action": Ie.Delete, label: "Delete", color: "error" }, 2)] }
], vi = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, xi = [5, 10, 20, 50, 100], Di = ({ tTranslate: e = (l) => l, preferenceName: t, gridRef: r, columns: o = [], setIsGridPreferenceFetched: a }) => {
  const { stateData: l, dispatchData: i, removeCurrentPreferenceName: c, getAllSavedPreferences: h } = We(), { navigate: C } = Jt(), p = Gr(), u = Yt(), { t: s, i18n: y } = yr(), d = { t: s, i18n: y }, [m, E] = R(!1), [x, D] = R(!1), [w, F] = R([]), [A, q] = R(), [_, ee] = R(), [ae, k] = R(!1), [te, Z] = R({}), { Username: B } = l?.getUserData ? l.getUserData : {}, J = l?.preferences, H = l?.currentPreference, N = l?.gridSettings?.permissions?.preferenceApi, Y = l?.gridSettings?.permissions?.defaultPreferenceEnums, Q = dr(r, jr), X = dr(r, Eo), Ce = ye(() => se.object({
    prefName: se.string().trim(!0).required("Preference Name is Required").max(20, "Maximum Length is 20"),
    prefDesc: se.string().max(100, "Description maximum length is 100")
  }), []);
  ce(() => {
    F(J?.filter((I) => I.prefId !== 0));
  }, [J]);
  const re = Yr({
    initialValues: vi,
    validationSchema: Ce,
    onSubmit: async (I) => {
      await $e(I);
    },
    mode: "onBlur"
  }), Ee = (I) => {
    ee(I?.currentTarget);
  }, Te = () => {
    ee(null);
  }, tt = () => {
    q(), Te(), E(!1);
  }, Le = async (I, V) => {
    const f = await Pt({ url: N, params: {
      action: "delete",
      id: t,
      Username: B,
      prefIdArray: I
    }, history: C, dispatchData: i });
    let ie = f;
    if (typeof f == "string")
      try {
        ie = JSON.parse(f);
      } catch (Ne) {
        typeof console < "u" && typeof console.error == "function" && console.error("Failed to parse deletePreference response:", Ne, f), u.showMessage("An error occurred while processing the server response.");
        return;
      }
    (ie === !0 || ie?.success) && (V === H && c({ dispatchData: i }), u.showMessage("Preference Deleted Successfully."));
  }, ke = async (I) => {
    a && a(!1), await _e(I);
  }, $e = async (I) => {
    const V = I.prefName.trim(), ve = J.findIndex((Ae) => Ae.prefName === V);
    if (ve > -1 && (A === at.Add || J[ve].prefId !== I.prefId)) {
      k(!0);
      return;
    }
    const { pinnedColumns: f } = r.current.state, { orderedFields: ie, columnVisibilityModel: Ne, lookup: Oe } = r.current.state.columns, qe = [];
    ie?.forEach((Ae) => {
      const { field: Ke } = Oe[Ae], Ye = o.find((Be) => Be.field === Ke) || Oe[Ae];
      Ye.width = Oe[Ae].width, qe.push(Ye);
    });
    const be = Q?.items?.map((Ae) => {
      const { field: Ke, operator: Ye, value: Be } = Ae;
      return { field: Ke, operator: Ye, value: Be };
    });
    Q.items = be;
    const de = {
      action: "save",
      id: t,
      prefName: V,
      prefDesc: I.prefDesc,
      prefValue: { sortModel: X, filterModel: Q, columnVisibilityModel: Ne, gridColumn: qe, pinnedColumns: f },
      isDefault: I.isDefault
    };
    I.prefId && (de.prefId = I.prefId);
    const ne = await Pt({ url: N, params: de, history: C, dispatchData: i }), ue = typeof ne == "string" ? JSON.parse(ne) : ne, ft = A === at.Add ? "Added" : "Saved";
    (ue === !0 || ue?.success === !0) && (u.showMessage(`Preference ${ft} Successfully.`), tt()), h({ preferenceName: t, Username: B, history: C, dispatchData: i, preferenceApi: N, defaultPreferenceEnums: Y });
  }, _e = async (I) => {
    let V, ve = "Default";
    if (I === 0)
      V = Y[t] || null;
    else {
      const de = await Pt({ url: N, params: {
        action: "load",
        id: t,
        Username: B,
        prefId: I
      }, history: C, dispatchData: i }) || {};
      let ne = de;
      if (typeof de == "string")
        try {
          ne = JSON.parse(de);
        } catch (ue) {
          console.error("Failed to parse preference response JSON", { error: ue, rawResponse: de });
          return;
        }
      if (ne && ne.prefValue)
        try {
          V = JSON.parse(ne.prefValue);
        } catch (ue) {
          console.error("Failed to parse preference value JSON", { error: ue, prefValue: ne.prefValue });
          return;
        }
      else
        V = null;
      ne && ne.prefName && (ve = ne.prefName);
    }
    if (!V) return;
    const { gridColumn: f, columnVisibilityModel: ie, pinnedColumns: Ne, sortModel: Oe, filterModel: qe } = V;
    f.forEach(({ field: be, width: de }) => {
      r.current.getColumnIndex(be) !== -1 && r.current.setColumnWidth(be, de);
    }), r.current.setColumnVisibilityModel(ie), r.current.state.columns.orderedFields = f.map(({ field: be }) => be), r.current.setPinnedColumns(Ne), r.current.setSortModel(Oe || []), r.current.setFilterModel(qe), i({ type: G.SET_CURRENT_PREFERENCE_NAME, payload: ve }), a(!0);
  }, Se = (I) => I.GridPreferenceId, ut = (I, V = !0) => {
    q(I), Te(), E(!0), D(V), V && re.resetForm();
  }, xt = async () => {
    const { prefId: I, preferenceName: V } = te;
    await Le(I, V), h({ preferenceName: t, history: C, dispatchData: i, Username: B, preferenceApi: N, defaultPreferenceEnums: Y }), Z({});
  }, pt = async (I) => {
    const V = I.field === "editAction" ? Ie.Edit : I.field === "deleteAction" ? Ie.Delete : null;
    if (I.id === 0 && (V === Ie.Edit || V === Ie.Delete)) {
      u.showMessage(`Default Preference Can Not Be ${V === Ie.Edit ? "Edited" : "Deleted"}`);
      return;
    }
    V === Ie.Edit && (q("Modify"), re.setValues(I?.row), D(!0)), V === Ie.Delete && Z({
      prefId: I.id,
      preferenceName: I.row.prefName
    });
  }, rt = re.values.prefName.trim(), he = A === at.Manage;
  return /* @__PURE__ */ v(Me, { children: [
    /* @__PURE__ */ v(
      it,
      {
        id: "grid-preferences-btn",
        "aria-controls": _ ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": _ ? "true" : void 0,
        onClick: Ee,
        title: e("Preference", d),
        startIcon: /* @__PURE__ */ n(Ir, {}),
        children: [
          e("Preferences", d),
          " ",
          H && `(${H})`
        ]
      }
    ),
    /* @__PURE__ */ v(
      _o,
      {
        id: "grid-preference-menu",
        anchorEl: _,
        open: !!_,
        onClose: Te,
        component: Vo,
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
          /* @__PURE__ */ n(_t, { component: Fr, dense: !0, onClick: () => ut(at.Add), children: e("Add Preference", d) }),
          /* @__PURE__ */ v(_t, { component: Fr, dense: !0, divider: J?.length > 0, onClick: () => ut(at.Manage, !1), children: [
            /* @__PURE__ */ n(zo, { children: /* @__PURE__ */ n(Ir, {}) }),
            e("Manage Preferences", d)
          ] }),
          J?.length > 0 && J?.map((I) => {
            const { prefName: V, prefDesc: ve, prefId: f } = I;
            return /* @__PURE__ */ n(
              _t,
              {
                onClick: () => ke(f),
                component: Uo,
                selected: H === V,
                title: e(ve, d),
                dense: !0,
                children: /* @__PURE__ */ n(Go, { primary: e(V, d) })
              },
              `pref-item-${f}`
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ v(
      je,
      {
        open: m,
        disableRestoreFocus: !0,
        title: /* @__PURE__ */ n(lr, { direction: "row", columnGap: 2, children: /* @__PURE__ */ v(Re, { variant: "h5", children: [
          A,
          " ",
          e(`Preference${A === at.Manage ? "s" : ""}`, d)
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
                  zt,
                  {
                    defaultValue: e(re.values.prefName, d),
                    variant: "outlined",
                    size: "small",
                    margin: "dense",
                    label: /* @__PURE__ */ v("span", { children: [
                      e("Preference Name", d),
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
                  zt,
                  {
                    defaultValue: e(re.values.prefDesc, d),
                    variant: "outlined",
                    multiline: !0,
                    rows: 2,
                    size: "small",
                    margin: "dense",
                    label: e("Preference Description", d),
                    name: "prefDesc",
                    onChange: re.handleChange,
                    error: !!re.errors.prefDesc,
                    helperText: re.errors.prefDesc,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ n(fe, { size: 12, children: /* @__PURE__ */ n(
                  lt,
                  {
                    control: /* @__PURE__ */ n(
                      jo,
                      {
                        checked: re.values.isDefault,
                        name: "isDefault",
                        onChange: re.handleChange
                      }
                    ),
                    label: e("Default", d)
                  }
                ) }),
                /* @__PURE__ */ n(fe, { size: 12, children: /* @__PURE__ */ v(lr, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
                  /* @__PURE__ */ n(
                    it,
                    {
                      type: "submit",
                      size: "small",
                      startIcon: /* @__PURE__ */ n(da, {}),
                      color: "primary",
                      variant: "contained",
                      disableElevation: !0,
                      children: e("Save", d)
                    }
                  ),
                  /* @__PURE__ */ n(
                    it,
                    {
                      type: "button",
                      startIcon: /* @__PURE__ */ n(pr, {}),
                      color: "error",
                      variant: "contained",
                      size: "small",
                      onClick: tt,
                      disableElevation: !0,
                      children: e("Close", d)
                    }
                  )
                ] }) })
              ]
            }
          ),
          m && A === at.Manage && /* @__PURE__ */ v(fe, { container: !0, rowGap: 2, children: [
            /* @__PURE__ */ n(fe, { size: 12, children: /* @__PURE__ */ n(
              Hr,
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
                onCellClick: pt,
                columns: Ei,
                pageSizeOptions: xi,
                pagination: !0,
                rowCount: w.length,
                rows: w,
                getRowId: Se,
                slots: {
                  headerFilterMenu: !1
                },
                density: "compact",
                disableDensitySelector: !0,
                apiRef: p,
                disableAggregation: !0,
                disableRowGrouping: !0,
                disableRowSelectionOnClick: !0,
                autoHeight: !0
              }
            ) }),
            /* @__PURE__ */ n(fe, { size: 12, children: /* @__PURE__ */ n(lr, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ n(
              it,
              {
                type: "button",
                startIcon: /* @__PURE__ */ n(pr, {}),
                color: "error",
                variant: "contained",
                size: "small",
                onClick: tt,
                disableElevation: !0,
                children: e("Close", d)
              }
            ) }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ v(
      je,
      {
        open: ae,
        onConfirm: () => k(!1),
        title: "",
        okText: e("Ok", d),
        cancelText: "",
        children: [
          '"',
          rt,
          '" ',
          e("name already in use, please use another name.", d)
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
}, wi = {
  IsAnyOf: "isAnyOf"
}, Ti = (e) => {
  const { column: t, item: r, applyValue: o, apiRef: a } = e, l = t?.dataRef?.current?.lookups;
  let i = t.customLookup || l[t.lookup] || [];
  typeof t.lookup == "string" && (i = i.map(({ label: u, value: s }) => ({
    label: u,
    value: s
  })));
  const c = dr(a, jr), h = ye(
    () => c.items?.filter((u) => u.field === t.field),
    [t.field, c.items]
  ), C = Ft(
    (u) => {
      let s = u.target.value;
      if (c.items.length >= 1) {
        s = s.length === 1 ? s[0] : s;
        for (const m of c.items)
          m.field === r.field && (m.operator === wi.IsAnyOf ? s = Array.isArray(s) ? s : [s] : s = s === 0 ? "0" : s);
      }
      if (s.length === 0 && h[0]) {
        a.current.deleteFilterItem(h[0]);
        return;
      }
      const y = s, d = h[0] ? h[0] : r;
      o({ ...d, value: y });
    },
    [a, t.applyZeroFilter, h, r, o]
  ), p = h[0]?.value ?? "";
  return /* @__PURE__ */ n(Wt, { variant: "standard", className: "w-100", children: /* @__PURE__ */ n(
    Ho,
    {
      label: t.field,
      variant: "standard",
      value: p,
      onChange: (u) => C(u),
      multiple: Array.isArray(p),
      MenuProps: {
        PaperProps: {
          style: {
            height: "fit-content",
            overflow: "hidden"
          }
        }
      },
      children: i?.map((u, s) => /* @__PURE__ */ n(_t, { value: u.value, children: u.label }, s))
    }
  ) });
}, Si = (e, t, r) => typeof e !== t.string ? [] : e.split(",").map((o) => {
  r.lastIndex = 0;
  const a = r.exec(o);
  if (!a) return null;
  const [, l, i = "ASC"] = a;
  return {
    field: l.trim(),
    sort: i.trim().toLowerCase()
  };
}).filter(Boolean), yt = ({ tTranslate: e, tOpts: t, handleExport: r, contentType: o, type: a, isPivotExport: l = !1 }) => /* @__PURE__ */ v(
  Zr,
  {
    onClick: r,
    "data-type": a,
    "data-content-type": o,
    "data-is-pivot-export": l,
    children: [
      e("Export", t),
      " ",
      a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
    ]
  }
), Oi = ({ exportFormats: e, ...t }) => /* @__PURE__ */ v(vo, { ...t, children: [
  e.csv !== !1 && /* @__PURE__ */ n(yt, { ...t, type: "csv", contentType: "text/csv" }),
  e.excel !== !1 && /* @__PURE__ */ n(yt, { ...t, type: "excel", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
  t.showPivotExportBtn && /* @__PURE__ */ n(yt, { ...t, type: "excel With Pivot", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", isPivotExport: !0 }),
  e.xml !== !1 && /* @__PURE__ */ n(yt, { ...t, type: "xml", contentType: "text/xml" }),
  e.html !== !1 && /* @__PURE__ */ n(yt, { ...t, type: "html", contentType: "text/html" }),
  e.json !== !1 && /* @__PURE__ */ n(yt, { ...t, type: "json", contentType: "application/json" })
] }), Ai = (e = {}, t = {}) => {
  let r = !0;
  for (const o in e)
    e[o] !== t[o] && (r = !1);
  for (const o in t)
    o in e || (r = !1);
  return r;
}, Pi = 10, Fi = /(\w+)( ASC| DESC)?/i, Ii = 6e4, xe = {
  Copy: "Copy",
  Edit: "Edit",
  Delete: "Delete",
  History: "History",
  Download: "Download"
}, Mi = {
  article: /* @__PURE__ */ n(Ao, {})
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
}, Ri = [
  { key: "addCreatedOnColumn", field: "CreatedOn", type: "dateTime", header: "Created On" },
  { key: "addCreatedByColumn", field: "CreatedByUser", type: "string", header: "Created By" },
  { key: "addModifiedOnColumn", field: "ModifiedOn", type: "dateTime", header: "Modified On" },
  { key: "addModifiedByColumn", field: "ModifiedByUser", type: "string", header: "Modified By" }
], Ni = (e) => e.value ? /* @__PURE__ */ n(ta, { style: { color: "green" } }) : /* @__PURE__ */ n(pr, { style: { color: "gray" } }), Br = qt("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), kt = qt(we)({
  margin: "6px"
}), Bi = qt(xo)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  minHeight: "auto",
  borderBottom: "none"
}), Li = function(e) {
  const {
    model: t,
    data: r,
    currentPreference: o,
    isReadOnly: a,
    canAdd: l,
    forAssignment: i,
    showAddIcon: c,
    onAdd: h,
    selectionApi: C,
    selectedSet: p,
    selectAll: u,
    available: s,
    onAssign: y,
    assigned: d,
    onUnassign: m,
    effectivePermissions: E,
    clearFilters: x,
    handleExport: D,
    preferenceName: w,
    apiRef: F,
    gridColumns: A,
    setIsGridPreferenceFetched: q,
    tTranslate: _,
    tOpts: ee,
    filterModel: ae
  } = e, k = t.customAddText || (t.title ? `Add ${t.title}` : "Add"), te = ae?.items?.length || 0;
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
            _(t.gridSubTitle, ee)
          ] }),
          o && t.showPreferenceInHeader && /* @__PURE__ */ v(At, { className: "preference-name-text", variant: "h6", component: "h6", textAlign: "center", sx: { ml: 1 }, children: [
            _("Applied Preference", ee),
            " - ",
            o
          ] }),
          (a || !l && !i) && /* @__PURE__ */ v(At, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
            " ",
            !l || a ? "" : t.title
          ] }),
          !i && l && !a && /* @__PURE__ */ n(kt, { startIcon: c ? /* @__PURE__ */ n(Pr, {}) : null, onClick: h, size: "medium", variant: "contained", children: k }),
          C.length && r.records.length ? /* @__PURE__ */ n(
            kt,
            {
              onClick: u,
              size: "medium",
              variant: "contained",
              children: p.current.size === r.records.length ? _("Deselect All", ee) : _("Select All", ee)
            }
          ) : /* @__PURE__ */ n(me, {}),
          s && /* @__PURE__ */ n(kt, { startIcon: c ? /* @__PURE__ */ n(Pr, {}) : null, onClick: y, size: "medium", variant: "contained", children: _("Assign", ee) }),
          d && /* @__PURE__ */ n(kt, { startIcon: c ? /* @__PURE__ */ n(Fo, {}) : null, onClick: m, size: "medium", variant: "contained", children: _("Remove", ee) })
        ] }),
        /* @__PURE__ */ v(Bi, { ...e, children: [
          E.showColumnsOrder && /* @__PURE__ */ n(
            So,
            {
              render: (Z) => /* @__PURE__ */ n(
                we,
                {
                  ...Z,
                  startIcon: /* @__PURE__ */ n(fa, {}),
                  size: "small",
                  variant: "text",
                  children: _("COLUMNS", ee)
                }
              )
            }
          ),
          E.filter && /* @__PURE__ */ v(me, { children: [
            /* @__PURE__ */ n(
              Oo,
              {
                render: (Z) => /* @__PURE__ */ n(
                  we,
                  {
                    ...Z,
                    startIcon: /* @__PURE__ */ n(Wo, { badgeContent: te, color: "primary", children: /* @__PURE__ */ n(ma, {}) }),
                    size: "small",
                    variant: "text",
                    children: _("FILTERS", ee)
                  }
                )
              }
            ),
            /* @__PURE__ */ n(we, { startIcon: /* @__PURE__ */ n(Po, {}), onClick: x, size: "small", children: _("CLEAR FILTER", ee) })
          ] }),
          E.export && /* @__PURE__ */ n(Oi, { handleExport: D, showPivotExportBtn: t.pivotApi, exportFormats: t.exportFormats || {}, tTranslate: _, tOpts: ee }),
          w && /* @__PURE__ */ n(Di, { preferenceName: w, gridRef: F, columns: A, setIsGridPreferenceFetched: q })
        ] })
      ]
    }
  );
}, Lr = zr(({
  model: e,
  columns: t,
  api: r,
  defaultSort: o,
  setActiveRecord: a,
  parentFilters: l,
  parent: i,
  where: c,
  title: h,
  permissions: C,
  selected: p,
  assigned: u,
  available: s,
  disableCellRedirect: y = !1,
  onAssignChange: d,
  customStyle: m,
  onCellClick: E,
  showRowsSelected: x,
  chartFilters: D,
  clearChartFilter: w,
  showFullScreenLoader: F,
  customFilters: A,
  onRowDoubleClick: q,
  onRowClick: _ = () => {
  },
  gridStyle: ee,
  reRenderKey: ae,
  additionalFilters: k,
  onCellDoubleClickOverride: te,
  onAddOverride: Z,
  dynamicColumns: B,
  readOnly: J = !1,
  baseFilters: H = [],
  ...N
}) => {
  const [Y, Q] = R({ pageSize: Pi, page: 0 }), [X, Ce] = R({ recordCount: 0, records: [], lookups: {} }), [re, Ee] = R(!0), Te = !!d, tt = x, [Le, ke] = R([]), [$e, _e] = R(!1), [Se, ut] = R(null), xt = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [pt, rt] = R(!1), he = Yt(), I = e.paginationMode === U.client ? U.client : U.server, { t: V, i18n: ve } = yr(), f = { t: V, i18n: ve }, [ie, Ne] = R(""), [Oe, qe] = R(Si(o || e.defaultSort, U, Fi)), be = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (be.items = [], e.defaultFilters.forEach((g) => {
    be.items.push(g);
  }));
  const [de, ne] = R({ ...be }), { navigate: ue, getParams: ft, useParams: Ae, pathname: Ke } = Jt(), { id: Ye } = Ae() || ft, Be = Ye?.split("-")[0], nt = Gr(), { idProperty: M = "id", showHeaderFilters: ge = !0, disableRowSelectionOnClick: oe = !0, hideBackButton: Je = !1, hideTopFilters: Ze = !0, updatePageTitle: mt = !0, isElasticScreen: Dt = !1, navigateBack: It = !1, selectionApi: ht = {} } = e, Ve = e.readOnly === !0 || J, mn = e.allowDoubleClick === !1, Zt = Or(X), hn = e.showAddIcon === !0, gn = e.columns.filter(({ link: g }) => !!g).map((g) => g.link), [Cr, Er] = R(!1), { stateData: ze, dispatchData: Pe, formatDate: Qt, removeCurrentPreferenceName: yn, getAllSavedPreferences: bn, applyDefaultPreferenceIfExists: Cn } = We(), { timeZone: Xt } = ze, wt = { ...U.permissions, ...ze.gridSettings.permissions, ...e.permissions, ...C }, { Username: En } = ze?.getUserData ? ze.getUserData : {}, {
    gridSettings: {
      permissions: {
        routesWithNoChildRoute: vn = [],
        Url: Tt,
        withControllersUrl: er,
        defaultPreferenceEnums: xn,
        preferenceApi: tr,
        historyScreenName: Dn = "historyScreen",
        showPageTitle: wn = !0
      } = {}
    } = {},
    currentPreference: Tn
  } = ze, Sn = ["isEmpty", "isNotEmpty", "isAnyOf"], On = ze.getUserData || {}, vr = e.columns.find((g) => g.type === "fileUpload")?.field || "", An = { add: wt.add, edit: wt.edit, delete: wt.delete }, { canAdd: Pn, canEdit: xr, canDelete: Fn } = rn({ userData: On, model: e, userDefinedPermissions: An }), b = e.tTranslate ?? ((g) => g), { addUrlParamKey: rr, searchParamKey: Mt, hideBreadcrumb: In = !1, tableName: Mn, showHistory: Rn = !0, hideBreadcrumbInGrid: Nn = !1, breadcrumbColor: Bn, disablePivoting: Ln = !1, columnHeaderHeight: kn = 70 } = e, $n = e.gridTitle || e.title, Rt = e.preferenceId || e.module?.preferenceId, gt = new URLSearchParams(window.location.search), Dr = gt.has("baseData") && gt.get("baseData"), _n = (() => {
    if (Dr) {
      const g = JSON.parse(Dr);
      if (typeof g === U.object && g !== null)
        return g;
    }
    return {};
  })(), pe = Or(/* @__PURE__ */ new Set()), Vn = ({ row: g }) => {
    const S = g[M];
    pe.current.has(S) ? pe.current.delete(S) : pe.current.add(S), ke(Array.from(pe.current));
  }, zn = (g) => {
    const S = g.row[M], [O, T] = R(pe.current.has(S));
    return ce(() => {
      T(pe.current.has(S));
    }, [g.row, pe.current.size]), /* @__PURE__ */ n(
      Jr,
      {
        onClick: (z) => {
          z.stopPropagation(), Vn(g);
        },
        checked: O,
        color: "primary",
        inputProps: { "aria-label": "checkbox" }
      }
    );
  }, nr = {
    radio: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    date: {
      valueFormatter: (g) => Qt({ value: g, useSystemFormat: !0, showOnlyDate: !1, state: ze.dateTime, timeZone: Xt }),
      filterOperators: Lt({ columnType: "date", label: b("Value", f) })
    },
    dateTime: {
      valueFormatter: (g) => Qt({ value: g, useSystemFormat: !1, showOnlyDate: !1, state: ze.dateTime, timeZone: Xt }),
      filterOperators: Lt({ columnType: "datetime", label: b("Value", f) })
    },
    dateTimeLocal: {
      valueFormatter: (g) => Qt({ value: g, useSystemFormat: !1, showOnlyDate: !1, state: ze.dateTime, timeZone: Xt }),
      filterOperators: Lt({ type: "dateTimeLocal", convert: !0 })
    },
    boolean: {
      renderCell: Ni
    },
    select: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    selection: {
      renderCell: (g) => /* @__PURE__ */ n(zn, { ...g })
    }
  };
  ce(() => {
    Zt.current = X;
  }, [X]), ce(() => {
    if (!A || !Object.keys(A).length) return;
    if (A.clear) {
      ne({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
      return;
    }
    const g = Object.entries(A).reduce((S, [O, T]) => (O === U.startDate || O === U.endDate ? S.push(T) : O in A && S.push({ field: O, value: T, operator: "equals", type: "string" }), S), []);
    ne({ items: g, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [A]);
  const Un = ({ field: g }) => (Zt.current.lookups || {})[ar[g].lookup] || [];
  ce(() => {
    N.isChildGrid || !Ze || Pe({
      type: G.PASS_FILTERS_TO_HEADER,
      payload: {
        filterButton: null,
        hidden: { search: !0, operation: !0, export: !0, print: !0, filter: !0 }
      }
    });
  }, []);
  const { customActions: or = [] } = e, { gridColumns: Qe, pinnedColumns: Gn, lookupMap: ar } = ye(() => {
    let g = t || e.gridColumns || e.columns;
    B && (g = [...B, ...g]);
    const S = { left: [Do.field], right: [] }, O = [], T = {};
    for (const L of g) {
      if (L.gridLabel === null || i && L.lookup === i || L.type === U.oneToMany && L.countInList === !1) continue;
      const W = {};
      if (L.type === U.oneToMany && (W.type = "number", W.field = L.field.replace(/s$/, "Count")), nr[L.type] && Object.assign(W, nr[L.type]), W.valueOptions === U.lookup || L.type === U.boolean) {
        let j = [];
        W.valueOptions === U.lookup && (W.valueOptions = Un, j = [...Ur(), ...wo()].filter((St) => ["is", "not", "isAnyOf"].includes(St.value))), L.type === U.boolean && (j = To()), W.filterOperators = j.map(($) => ({
          ...$,
          InputComponent: $.InputComponent ? (St) => /* @__PURE__ */ n(
            Ti,
            {
              column: {
                ...L,
                ...L.type === U.boolean ? {
                  customLookup: [
                    { value: !0, label: "Yes" },
                    { value: !1, label: "No" }
                  ]
                } : {},
                dataRef: Zt
              },
              ...St,
              autoHighlight: !0
            }
          ) : void 0
        }));
      }
      (L.linkTo || L.link) && (W.cellClassName = "mui-grid-linkColumn");
      const K = b(L.gridLabel || L.label, f);
      O.push({ headerName: K, description: K, ...L, ...W }), L.pinned && S[L.pinned === U.right ? U.right : U.left].push(L.field), T[L.field] = L;
    }
    let P = e.standard;
    P === !0 && (P = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), P && typeof P === U.object && Ri.forEach(({ key: L, field: W, type: K, header: j }) => {
      if (P[L] === !0) {
        const $ = { field: W, type: K, headerName: j, width: 200 };
        K === U.dateTime && ($.filterOperators = Lt({ columnType: "date" }), $.valueFormatter = nr.dateTime.valueFormatter, $.keepLocal = !0), O.push($);
      }
    });
    const z = [];
    return !Te && !Ve && (xr && z.push(/* @__PURE__ */ n(Ue, { icon: /* @__PURE__ */ n(Fe, { title: "Edit", children: /* @__PURE__ */ n(ur, {}) }), "data-action": xe.Edit, label: "Edit", color: "primary" })), wt.copy && z.push(/* @__PURE__ */ n(Ue, { icon: /* @__PURE__ */ v(Fe, { title: "Copy", children: [
      /* @__PURE__ */ n(Ar, {}),
      " "
    ] }), "data-action": xe.Copy, label: "Copy", color: "primary" })), Fn && z.push(/* @__PURE__ */ n(Ue, { icon: /* @__PURE__ */ v(Fe, { title: "Delete", children: [
      /* @__PURE__ */ n(Wr, {}),
      " "
    ] }), "data-action": xe.Delete, label: "Delete", color: "error" })), Rn && z.push(/* @__PURE__ */ n(Ue, { icon: /* @__PURE__ */ v(Fe, { title: "History", children: [
      /* @__PURE__ */ n(ua, {}),
      " "
    ] }), "data-action": xe.History, label: "History", color: "primary" })), or.length && or.forEach(({ icon: L, action: W, color: K }) => {
      z.push(
        /* @__PURE__ */ n(
          Ue,
          {
            icon: /* @__PURE__ */ n(Fe, { title: W, children: Mi[L] || /* @__PURE__ */ n(Ar, {}) }),
            "data-action": W,
            label: W,
            color: K || "primary"
          }
        )
      );
    })), vr.length && z.push(/* @__PURE__ */ n(Ue, { icon: /* @__PURE__ */ v(Fe, { title: "Download document", children: [
      /* @__PURE__ */ n(pa, {}),
      " "
    ] }), "data-action": xe.Download, label: "Download document", color: "primary" })), z.length && O.push({
      field: "actions",
      type: "actions",
      label: "",
      width: z.length * 50,
      hidable: !1,
      getActions: (L) => {
        const W = [...z];
        if (xr && !Ve) {
          const K = L.row.canEdit === !1;
          W[0] = /* @__PURE__ */ n(
            Ue,
            {
              icon: /* @__PURE__ */ n(Fe, { title: "Edit", children: /* @__PURE__ */ n(ur, {}) }),
              "data-action": xe.Edit,
              label: "Edit",
              color: "primary",
              disabled: K
            }
          );
        }
        return W;
      }
    }), S.right.push("actions"), { gridColumns: O, pinnedColumns: S, lookupMap: T };
  }, [t, e, i, C, Te, B]), Nt = (g = "list", S = {}, O, T, P, z) => {
    const { pageSize: L, page: W } = Y;
    let K = e.controllerType, j = `${K === "cs" ? er : Tt || ""}${e.api || r}`;
    P && (j = `${er}${e.pivotApi}`, K = "cs"), (u || s) && (S[u ? "include" : "exclude"] = Array.isArray(p) ? p.join(",") : p);
    const $ = { ...de };
    if (D?.items?.length > 0) {
      const { columnField: ot, operatorValue: ir } = D.items[0] || {}, lo = U.chartFilterFields[ot];
      $.items = [{ field: lo, operator: ir, isChartFilter: !1 }], JSON.stringify(de) !== JSON.stringify($) && (ne({ ...$ }), D.items.length = 0);
    }
    e.joinColumn && Be && H.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(Be) }), k && ($.items = [...$.items || [], ...k]), S = { ...S, ...N.extraParams }, (!$.items.length || $.items.every((ot) => "value" in ot && ot.value !== void 0)) && Ga({
      action: g,
      page: O ? 0 : W,
      pageSize: O ? 1e6 : L,
      sortModel: Oe,
      filterModel: $,
      controllerType: K,
      api: j,
      setIsLoading: Ee,
      setData: Ce,
      gridColumns: Qe,
      model: e,
      parentFilters: l,
      extraParams: S,
      setError: he.showError,
      contentType: O,
      columns: T,
      template: P ? e.exportTemplate : null,
      configFileName: P ? e.configFileName : null,
      dispatchData: Pe,
      showFullScreenLoader: F,
      history: ue,
      baseFilters: H,
      isElasticExport: z
    });
  }, Bt = ({ id: g, record: S = {}, mode: O }) => {
    if (a) {
      nn({ id: g, api: r || e.api, setIsLoading: Ee, setActiveRecord: a, model: e, parentFilters: l, where: c });
      return;
    }
    let T = Ke;
    T.endsWith("/") || (T += "/"), O === "copy" ? (T += "0-" + g, Pe({ type: "UPDATE_FORM_MODE", payload: "copy" })) : (T += g, Pe({ type: "UPDATE_FORM_MODE", payload: "" })), rr && (gt.set(rr, S[rr]), T += `?${gt.toString()}`), ue(T);
  }, jn = async ({ documentLink: g, fileName: S }) => {
    if (g)
      try {
        const O = await fetch(g);
        if (!O.ok)
          throw new Error(`Failed to fetch the file: ${O.statusText}`);
        const T = await O.blob(), P = window.URL.createObjectURL(T), z = document.createElement("a");
        z.href = P;
        const L = g.split("/").pop() || `downloaded-file.${T.type.split("/")[1] || "txt"}`;
        z.download = S || L, document.body.appendChild(z), z.click(), document.body.removeChild(z), window.URL.revokeObjectURL(P);
      } catch {
        window.open(g);
      }
  }, Hn = async (g, S, O) => {
    let T = g.field === e.linkColumn ? xe.Edit : null;
    if (!T && g.field === U.actions && (T = O?.action, !T)) {
      const K = S.target.closest("button");
      K && (T = K.dataset.action);
    }
    const { row: P } = g;
    if (!Ve) {
      if (E && typeof await E({ cellParams: g, event: S, details: O }) !== U.boolean)
        return;
      const K = ar[g.field] || {};
      if (K.linkTo) {
        ue({
          pathname: cr.replaceTags(K.linkTo, P)
        });
        return;
      }
      switch (T) {
        case xe.Edit:
          return Bt({ id: P[M], record: P });
        case xe.Copy:
          return Bt({ id: P[M], mode: "copy" });
        case xe.Delete:
          _e(!0), ut({ name: P[e.linkColumn], id: P[M] });
          break;
        case xe.History:
          return ue(`${Dn}?tableName=${Mn}&id=${P[M]}&breadCrumb=${Mt ? gt.get(Mt) : $n}`);
        default:
          const j = or.find(($) => $.action === T && typeof $.onClick === U.function);
          if (j) {
            j.onClick({ row: P, navigate: ue });
            return;
          }
          break;
      }
    }
    if (T === xe.Download && jn({ documentLink: P[vr], fileName: P.FileName }), !gn.length)
      return;
    const { row: z } = g, L = ar[g.field] || {}, W = {
      pathname: cr.replaceTags(L.linkTo, z)
    };
    e.addRecordToState && (W.state = z), ue(W);
  }, Wn = async function() {
    await on({ id: Se.id, api: `${e.controllerType === "cs" ? er : Tt}${e.api || r}`, setIsLoading: Ee, setError: he.showError, setErrorMessage: Ne }) === !0 ? (_e(!1), he.showMessage("Record Deleted Successfully."), Nt()) : _e(!1);
  }, wr = () => {
    Ne(null), _e(!1);
  }, qn = (g) => (typeof N.processRowUpdate == "function" && N.processRowUpdate(g, X), g), Kn = (g) => {
    if (g.row.canEdit === !1)
      return;
    const { row: S } = g;
    if (typeof te === U.function) {
      te(g);
      return;
    }
    if (!Ve && !mn && !y && Bt({ id: S[M], record: S }), Ve && e.rowRedirectLink) {
      const O = {
        pathname: cr.replaceTags(e.rowRedirectLink, S)
      };
      e.addRecordToState && (O.state = S), ue(O);
    }
    typeof q === U.function && q(g);
  }, Yn = async () => {
    if (pe.current.size < 1) {
      he.showError("Please select at least one record to proceed");
      return;
    }
    const g = Array.from(pe.current), S = new Map(X.records.map((T) => [T[M], T]));
    let O = g.map((T) => ({ ..._n, ...S.get(T) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (O = O.map(
      (T) => Object.fromEntries(e.selectionUpdateKeys.map((P) => [P, T[P]]))
    ));
    try {
      const T = await an({
        id: 0,
        api: `${Tt}${ht || r}/updateMany`,
        values: { items: O },
        setIsLoading: Ee,
        setError: he.showError
      });
      if (T) {
        Nt();
        const P = T.info ? T.info : "Record Added Successfully.";
        he.showMessage(P);
      }
    } catch (T) {
      he.showError(T.message || "An error occurred, please try again later.");
    } finally {
      pe.current.clear(), Ee(!1), rt(!1);
    }
  }, Jn = () => {
    if (ht.length > 0) {
      if (pe.current.size) {
        rt(!0);
        return;
      }
      he.showError(
        "Please select at least one record to proceed"
      ), Ee(!1);
      return;
    }
    typeof Z === U.function ? Z() : Bt({ id: 0 });
  }, Zn = () => {
    if (!de?.items?.length) return;
    const g = JSON.parse(JSON.stringify(U.gridFilterModel));
    ne(g), w && w();
  }, Tr = ({ unassign: g, assign: S }) => {
    const O = Array.isArray(p) ? p : p.length ? p.split(",") : [], T = g ? O.filter((P) => !g.includes(parseInt(P))) : [...O, ...S];
    d(typeof p === U.string ? T.join(",") : T);
  }, Qn = () => {
    Tr({ assign: Le });
  }, Xn = () => {
    Tr({ unassign: Le });
  }, eo = () => {
    pe.current.size === X.records.length ? (pe.current.clear(), ke([])) : (X.records.forEach((g) => {
      pe.current.add(g[M]);
    }), ke(X.records.map((g) => g[M])));
  }, to = async ({ preferenceName: g, Username: S, preferenceApi: O, defaultPreferenceEnums: T }) => {
    yn({ dispatchData: Pe });
    const P = await bn({ preferenceName: g, history: ue, dispatchData: Pe, Username: S, preferenceApi: O, defaultPreferenceEnums: T });
    Cn({ preferenceName: g, dispatchData: Pe, gridRef: nt, setIsGridPreferenceFetched: Er, defaultPreferenceEnums: T, preferences: P });
  };
  ce(() => {
    !Rt || !tr || to({ preferenceName: Rt, Username: En, preferenceApi: tr, defaultPreferenceEnums: xn });
  }, [tr]);
  const ro = (g) => g[M], no = (g) => {
    if (X?.recordCount > Ii) {
      he.showMessage("Cannot export more than 60k records, please apply filters or reduce your results using filters");
      return;
    }
    const { orderedFields: S, columnVisibilityModel: O, lookup: T } = nt.current.state.columns, P = g.target.dataset.isPivotExport === "true", z = Object.keys(O).filter((j) => O[j] === !1), L = new Set(Qe.filter((j) => j.exportable === !1).map((j) => j.field)), W = S.filter(
      (j) => !L.has(j) && !z.includes(j) && j !== "__check__" && j !== "actions"
    );
    if (W.length === 0) {
      he.showMessage("You cannot export while all columns are hidden... please show at least 1 column before exporting");
      return;
    }
    const K = {};
    W.forEach((j) => {
      const $ = T[j];
      K[j] = { field: j, width: $.width, headerName: $.headerName || $.field, type: $.type, keepLocal: $.keepLocal === !0, isParsable: $.isParsable, lookup: $.lookup };
    }), Nt(
      P ? "export" : void 0,
      void 0,
      g.target.dataset.contentType,
      K,
      P,
      Dt
    );
  };
  ce(() => {
    !Tt || Rt && !Cr || Nt();
  }, [Y, Oe, de, r, Qe, e, l, u, p, s, D, Cr, ae, Tt]), ce(() => {
    if (!(N.isChildGrid || Te || !mt))
      return Pe({ type: G.PAGE_TITLE_DETAILS, payload: { icon: "", titleHeading: e.pageTitle || e.title, title: e.title } }), () => {
        Pe({
          type: G.PAGE_TITLE_DETAILS,
          payload: null
        });
      };
  }, []), ce(() => {
    if (N.isChildGrid)
      return;
    let g = Ke;
    if (Je || vn.includes(g)) {
      Pe({
        type: G.SET_PAGE_BACK_BUTTON,
        payload: { status: !1, backRoute: "" }
      });
      return;
    }
    g = g.split("/"), g.pop(), g = g.join("/"), Pe({
      type: G.SET_PAGE_BACK_BUTTON,
      payload: { status: !0, backRoute: g }
    });
  }, [re]);
  const oo = (g) => {
    const { items: S } = g, O = S.map((P) => {
      const { field: z, operator: L, type: W, value: K } = P, j = Qe.find((ot) => ot.field === z) || {}, $ = j.type === U.number;
      return $ && K < 0 ? { ...P, value: null } : Sn.includes(L) || $ && !isNaN(K) || !$ ? (Dt && Qe.filter((ir) => ir.field === z)[0]?.isKeywordField && (P.filterField = `${P.field}.keyword`), P.value = ["isEmpty", "isNotEmpty"].includes(L) ? null : K, { ...P, type: j.type }) : { field: z, operator: L, type: W, value: $ ? null : K };
    });
    g.items = O, ne(g), (g.items.findIndex((P) => P.isChartFilter && !["isEmpty", "isNotEmpty"].includes(P.operator)) === -1 || D?.items?.length && (!g.items.length || D.items.findIndex((P) => P.columnField === g.items[0]?.field) > -1)) && w && w();
  }, ao = (g) => {
    const S = g.map((O) => {
      const T = Qe.filter((L) => L.field === O.field)[0] || {}, P = Dt && T.isKeywordField, z = { ...O, filterField: P ? `${O.field}.keyword` : O.field };
      return T.dataIndex && (z.filterField = T.dataIndex), z;
    });
    qe(S);
  }, Sr = h || e.gridTitle || e.title, io = Mt ? [{ text: gt.get(Mt) || Sr }] : [{ text: Sr }];
  return /* @__PURE__ */ v(me, { children: [
    wn && /* @__PURE__ */ n(
      cn,
      {
        navigate: ue,
        showBreadcrumbs: !In && !Nn,
        breadcrumbs: io,
        enableBackButton: It,
        breadcrumbColor: Bn
      }
    ),
    /* @__PURE__ */ v(Me, { style: ee || m, children: [
      /* @__PURE__ */ n(Me, { sx: { display: "flex", maxHeight: "80vh", flexDirection: "column" }, children: /* @__PURE__ */ n(
        Hr,
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
          headerFilters: ge,
          unstable_headerFilters: ge,
          checkboxSelection: Te,
          loading: re,
          className: "pagination-fix",
          onCellClick: Hn,
          onCellDoubleClick: Kn,
          columns: Qe,
          paginationModel: Y,
          pageSizeOptions: U.pageSizeOptions,
          onPaginationModelChange: Q,
          pagination: !0,
          rowCount: X.recordCount,
          rows: X.records,
          sortModel: Oe,
          paginationMode: I,
          sortingMode: I,
          filterMode: I,
          processRowUpdate: qn,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: ao,
          onFilterModelChange: oo,
          rowSelection: Le,
          onRowSelectionModelChange: ke,
          filterModel: de,
          getRowId: ro,
          onRowClick: _,
          slots: {
            headerFilterMenu: !1,
            toolbar: Li,
            footer: ja
          },
          slotProps: {
            toolbar: {
              model: e,
              data: X,
              currentPreference: Tn,
              isReadOnly: Ve,
              canAdd: Pn,
              forAssignment: Te,
              showAddIcon: hn,
              onAdd: Jn,
              selectionApi: ht,
              selectedSet: pe,
              selectAll: eo,
              available: s,
              onAssign: Qn,
              assigned: u,
              onUnassign: Xn,
              effectivePermissions: wt,
              clearFilters: Zn,
              handleExport: no,
              preferenceName: Rt,
              apiRef: nt,
              gridColumns: Qe,
              setIsGridPreferenceFetched: Er,
              tTranslate: b,
              tOpts: f,
              idProperty: M,
              filterModel: de
            },
            footer: {
              pagination: !0,
              apiRef: nt
            },
            panel: {
              placement: "bottom-end"
            }
          },
          hideFooterSelectedRowCount: tt,
          density: "compact",
          disableDensitySelector: !0,
          apiRef: nt,
          disableAggregation: !0,
          disableRowGrouping: !0,
          disableRowSelectionOnClick: oe,
          disablePivoting: Ln,
          initialState: {
            columns: {
              columnVisibilityModel: xt
            },
            pinnedColumns: Gn
          },
          localeText: {
            filterValueTrue: b("Yes", f),
            filterValueFalse: b("No", f),
            noRowsLabel: b("No data", f),
            footerTotalRows: `${b("Total rows", f)}:`,
            MuiTablePagination: {
              labelRowsPerPage: b("Rows per page", f),
              labelDisplayedRows: ({ from: g, to: S, count: O }) => `${g}–${S} ${b("of", f)} ${O}`
            },
            toolbarQuickFilterPlaceholder: b(e?.searchPlaceholder || "Search...", f),
            toolbarColumns: b("Columns", f),
            toolbarFilters: b("Filters", f),
            toolbarExport: b("Export", f),
            filterPanelAddFilter: b("Add filter", f),
            filterPanelRemoveAll: b("Remove all", f),
            filterPanelDeleteIconLabel: b("Delete", f),
            filterPanelColumns: b("Columns", f),
            filterPanelOperator: b("Operator", f),
            filterPanelValue: b("Value", f),
            filterPanelInputLabel: b("Value", f),
            filterPanelInputPlaceholder: b("Filter value", f),
            columnMenuLabel: b("Menu", f),
            columnMenuShowColumns: b("Show columns", f),
            columnMenuManageColumns: b("Manage columns", f),
            columnMenuFilter: b("Filter", f),
            columnMenuHideColumn: b("Hide column", f),
            columnMenuManagePivot: b("Manage pivot", f),
            toolbarColumnsLabel: b("Select columns", f),
            toolbarExportLabel: b("Export", f),
            pivotDragToColumns: b("Drag here to pivot by", f),
            pivotDragToRows: b("Drag here to group by", f),
            pivotDragToValues: b("Drag here to create values", f),
            pivotColumns: b("Pivot columns", f),
            pivotRows: b("Row groups", f),
            pivotValues: b("Values", f),
            pivotMenuRows: b("Rows", f),
            pivotMenuColumns: b("Columns", f),
            pivotMenuValues: b("Values", f),
            pivotToggleLabel: b("Pivot", f),
            pivotSearchControlPlaceholder: b("Search pivot columns", f),
            columnMenuUnsort: b("Unsort", f),
            columnMenuSortAsc: b("Sort by ascending", f),
            columnMenuSortDesc: b("Sort by descending", f),
            columnMenuUnpin: b("Unpin", f),
            columnsPanelTextFieldLabel: b("Find column", f),
            columnsPanelTextFieldPlaceholder: b("Column title", f),
            columnsPanelHideAllButton: b("Hide all", f),
            columnsPanelShowAllButton: b("Show all", f),
            pinToLeft: b("Pin to left", f),
            pinToRight: b("Pin to right", f),
            unpin: b("Unpin", f),
            filterValueAny: b("any", f),
            filterOperatorIs: b("is", f),
            filterOperatorNot: b("is not", f),
            filterOperatorIsAnyOf: b("is any of", f),
            filterOperatorContains: b("contains", f),
            filterOperatorDoesNotContain: b("does not contain", f),
            filterOperatorEquals: b("equals", f),
            filterOperatorDoesNotEqual: b("does not equal", f),
            filterOperatorStartsWith: b("starts with", f),
            filterOperatorEndsWith: b("ends with", f),
            filterOperatorIsEmpty: b("is empty", f),
            filterOperatorIsNotEmpty: b("is not empty", f),
            filterOperatorAfter: b("is after", f),
            filterOperatorOnOrAfter: b("is on or after", f),
            filterOperatorBefore: b("is before", f),
            filterOperatorOnOrBefore: b("is on or before", f),
            toolbarFiltersTooltipHide: b("Hide filters", f),
            toolbarFiltersTooltipShow: b("Show filters", f),
            //filter textfield labels
            headerFilterOperatorContains: b("contains", f),
            headerFilterOperatorEquals: b("equals", f),
            headerFilterOperatorStartsWith: b("starts with", f),
            headerFilterOperatorEndsWith: b("ends with", f),
            headerFilterOperatorIsEmpty: b("is empty", f),
            headerFilterOperatorIsNotEmpty: b("is not empty", f),
            headerFilterOperatorAfter: b("is after", f),
            headerFilterOperatorOnOrAfter: b("is on or after", f),
            headerFilterOperatorBefore: b("is before", f),
            headerFilterOperatorOnOrBefore: b("is on or before", f),
            headerFilterOperatorIs: b("is", f),
            "headerFilterOperator=": b("equals", f),
            "headerFilterOperator!=": b("does not equal", f),
            "headerFilterOperator>": b("greater than", f),
            "headerFilterOperator>=": b("greater than or equal to", f),
            "headerFilterOperator<": b("less than", f),
            "headerFilterOperator<=": b("less than or equal to", f),
            columnsManagementSearchTitle: b("Search", f),
            columnsManagementNoColumns: b("No columns", f),
            paginationRowsPerPage: b("Rows per page", f),
            paginationDisplayedRows: ({ from: g, to: S, count: O }) => `${g}–${S} ${b("of", f)} ${O}`,
            toolbarQuickFilterLabel: b("Search", f),
            toolbarFiltersTooltipActive: (g) => `${g} ${b(g === 1 ? "active filter" : "active filters", f)}`,
            columnHeaderSortIconLabel: b("Sort", f),
            filterPanelOperatorAnd: b("And", f),
            filterPanelOperatorOr: b("Or", f),
            noResultsOverlayLabel: b("No results found", f),
            columnHeaderFiltersTooltipActive: (g) => `${g} ${b(g === 1 ? "active filter" : "active filters", f)}`,
            detailPanelToggle: b("Detail panel toggle", f),
            checkboxSelectionHeaderName: b("Checkbox selection", f),
            columnsManagementShowHideAllText: b("Show/Hide all", f),
            noColumnsOverlayLabel: b("No columns", f),
            noColumnsOverlayManageColumns: b("Manage columns", f),
            columnsManagementReset: b("Reset", f),
            groupColumn: (g) => `${b("Group by", f)} ${g}`,
            unGroupColumn: (g) => `${b("Ungroup", f)} ${g}`,
            footerRowSelected: (g) => {
              const S = g === 1 ? "item selected" : "items selected";
              return `${g.toLocaleString()} ${b(S, f)}`;
            }
          },
          showToolbar: !0,
          columnHeaderHeight: kn
        }
      ) }),
      ie && /* @__PURE__ */ v(je, { open: !!ie, onConfirm: wr, onCancel: wr, title: "Info", hideCancelButton: !0, children: [
        " ",
        ie
      ] }),
      $e && !ie && /* @__PURE__ */ n(je, { open: $e, onConfirm: Wn, onCancel: () => _e(!1), title: "Confirm Delete", children: /* @__PURE__ */ v(Br, { children: [
        b("Are you sure you want to delete", f),
        " ",
        Se.name && /* @__PURE__ */ n(Fe, { style: { display: "inline" }, title: Se.name, arrow: !0, children: Se.name.length > 30 ? `${Se.name.slice(0, 30)}...` : Se.name }),
        " ?"
      ] }) }),
      pt && /* @__PURE__ */ n(
        je,
        {
          open: pt,
          onConfirm: Yn,
          onCancel: () => rt(!1),
          title: "Confirm Add",
          children: /* @__PURE__ */ v(Br, { children: [
            b("Are you sure you want to add", f),
            " ",
            pe.current.size,
            " ",
            b("records", { count: pe.current.size, ...f }),
            "?"
          ] })
        }
      )
    ] })
  ] });
}, Ai), ki = ({ column: e, field: t, formik: r, otherProps: o }) => {
  const a = (c) => {
    r.setFieldValue(t, c.target.checked);
  }, l = ye(() => r.values[t] ?? !!e.defaultValue, [r, e]), i = typeof e.readOnly == "function" ? e.readOnly(r) : e.readOnly;
  return /* @__PURE__ */ v("div", { children: [
    /* @__PURE__ */ n(
      ba,
      {
        control: /* @__PURE__ */ n(
          Jr,
          {
            ...o,
            name: t,
            disabled: i || e.disabled === !0,
            checked: l,
            onChange: a,
            onBlur: r.handleBlur,
            defaultChecked: e.defaultValue
          }
        )
      }
    ),
    /* @__PURE__ */ n(dt, { error: r.touched[t] && !!r.errors[t], children: r.touched[t] && r.errors[t] })
  ] }, t);
}, mr = ({ column: e, field: t, formik: r, otherProps: o }) => {
  const a = Et(), l = e.rows || (e.multiline ? 5 : 1);
  return /* @__PURE__ */ n(
    Ht,
    {
      type: "text",
      variant: e.variant || "standard",
      InputProps: {
        readOnly: e.readOnly === !0,
        sx: e.readOnly ? { backgroundColor: a.palette?.action?.disabled } : void 0
      },
      required: e.required,
      multiline: e.multiline,
      rows: l,
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
function dn(e, t) {
  const [r, o] = R(e);
  return ce(() => {
    const a = setTimeout(() => {
      o(e);
    }, t);
    return () => {
      clearTimeout(a);
    };
  }, [e, t]), r;
}
const kr = ({ value: e, state: t }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const r = e.slice(1, -1);
    return t[r] !== void 0 ? t[r] : e;
  }
  return e;
}, $i = {
  outlined: Yo,
  filled: Ko,
  standard: qo
}, _i = () => /* @__PURE__ */ v(
  qr,
  {
    position: "end",
    sx: {
      flexDirection: "column",
      maxHeight: "unset",
      alignSelf: "stretch",
      ml: 0,
      "& button": {
        py: 0,
        flex: 1,
        borderRadius: 0.5
      }
    },
    children: [
      /* @__PURE__ */ n(
        Ut.Increment,
        {
          render: /* @__PURE__ */ n(Vt, { size: "small", "aria-label": "Increase" }),
          children: /* @__PURE__ */ n(
            Ca,
            {
              fontSize: "small",
              sx: { transform: "translateY(2px)" }
            }
          )
        }
      ),
      /* @__PURE__ */ n(
        Ut.Decrement,
        {
          render: /* @__PURE__ */ n(Vt, { size: "small", "aria-label": "Decrease" }),
          children: /* @__PURE__ */ n(
            Qr,
            {
              fontSize: "small",
              sx: { transform: "translateY(-2px)" }
            }
          )
        }
      )
    ]
  }
), Vi = ({ column: e, otherProps: t, formik: r, field: o, ...a }) => {
  const { min: l, max: i, readOnly: c } = e, h = Et(), C = ye(
    () => kr({ value: l, state: r.values }),
    [l, r.values]
  ), p = ye(
    () => kr({ value: i, state: r.values }),
    [i, r.values]
  ), u = ye(() => r.values[o] ?? null, [r.values[o]]), [s, y] = R(u), d = dn(s, 400);
  ce(() => {
    d !== u && r.setFieldValue(o, d);
  }, [d]), ce(() => {
    u !== s && y(u);
  }, [u]);
  const m = (A) => {
    y(A);
  }, E = (A) => {
    r.setFieldTouched(o, !0), typeof a.onBlur == "function" && a.onBlur(A);
  }, x = co(), D = `number-field-${o}-${x}`, w = e.variant || "standard", F = $i[w];
  return /* @__PURE__ */ v(
    Ut.Root,
    {
      value: s,
      onValueChange: m,
      min: C,
      max: p,
      disabled: c,
      render: (A, q) => /* @__PURE__ */ n(
        Wt,
        {
          fullWidth: !0,
          ref: A.ref,
          error: r.touched[o] && !!r.errors[o],
          sx: c ? {
            backgroundColor: h.palette?.action?.disabled
          } : void 0,
          children: A.children
        }
      ),
      children: [
        /* @__PURE__ */ n(
          Ut.Input,
          {
            render: (A, q) => /* @__PURE__ */ n(
              F,
              {
                id: D,
                inputRef: A.ref,
                value: q.inputValue,
                onChange: A.onChange,
                onBlur: (_) => {
                  A.onBlur(_), E(_);
                },
                inputProps: {
                  ...A,
                  "aria-describedby": r.touched[o] && r.errors[o] ? `${D}-error` : void 0
                },
                endAdornment: /* @__PURE__ */ n(_i, {}),
                sx: { pr: 0 },
                ...t
              }
            )
          }
        ),
        r.touched[o] && r.errors[o] && /* @__PURE__ */ v(dt, { id: `${D}-error`, error: !0, children: [
          " ",
          r.errors[o],
          " "
        ] })
      ]
    }
  );
}, zi = ({ otherProps: e, ...t }) => {
  const [r, o] = Ct.useState(!1), a = () => o((h) => !h), l = (h) => {
    h.preventDefault();
  }, { readOnly: i = !1, disabled: c = !1 } = t.column || {};
  return e = {
    type: r ? "text" : "password",
    InputProps: {
      readOnly: i,
      disabled: c,
      endAdornment: /* @__PURE__ */ n(qr, { position: "end", children: /* @__PURE__ */ n(
        Vt,
        {
          "aria-label": "toggle password visibility",
          onClick: a,
          onMouseDown: l,
          edge: "end",
          disabled: c,
          readOnly: i,
          size: "large",
          children: r ? /* @__PURE__ */ n(Ea, {}) : /* @__PURE__ */ n(va, {})
        }
      ) })
    },
    ...e
  }, /* @__PURE__ */ n(mr, { otherProps: e, ...t });
}, Ui = ({ column: e, field: t, formik: r, otherProps: o, fieldConfigs: a = {}, mode: l }) => {
  const i = l !== "copy" && a.disabled, { systemDateTimeFormat: c, stateData: h } = We();
  return /* @__PURE__ */ gr(
    Kr,
    {
      ...o,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: t,
      fullWidth: !0,
      format: c(!0, !1, h.dateTime),
      name: t,
      value: le(r.values[t]),
      onChange: (C) => {
        const u = le(C).hour(12).toISOString();
        r.setFieldValue(t, u);
      },
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      minDate: e.min ? le(e.min) : null,
      maxDate: e.max ? le(e.max) : null,
      disabled: i,
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, Gi = ({ column: e, field: t, formik: r, otherProps: o }) => {
  const { systemDateTimeFormat: a, stateData: l } = We();
  return /* @__PURE__ */ gr(
    fr,
    {
      ...o,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: t,
      fullWidth: !0,
      format: a(!1, !1, l.dateTime),
      name: t,
      value: le(r.values[t]),
      onChange: (i) => r.setFieldValue(t, i),
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      minDateTime: e.min ? le(e.min) : null,
      maxDateTime: e.max ? le(e.max) : null,
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, ji = ({ column: e, field: t, formik: r, otherProps: o }) => {
  let a = r.values[t];
  return e.isUtc && (a = le.utc(a).utcOffset(le().utcOffset(), !0).format()), /* @__PURE__ */ gr(
    xa,
    {
      ...o,
      variant: "standard",
      readOnly: e.readOnly === !0,
      key: t,
      fullWidth: !0,
      name: t,
      value: le(a),
      onChange: (l) => (e.isUtc && (l = l && l.isValid() ? l.format("YYYY-MM-DDTHH:mm:ss") + ".000Z" : null), r.setFieldValue(t, l)),
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, Hi = [null, void 0, ""];
function un({ column: e, formik: t, lookups: r, dependsOn: o = [], isAutoComplete: a = !1, userSelected: l, model: i }) {
  const [c, h] = R([]), { stateData: C } = We(), p = C?.gridSettings?.permissions?.Url || "", u = ye(() => `${p}${i?.api || ""}`, [p, i?.api]), s = ye(() => {
    const m = {};
    if (!o.length) return m;
    for (const E of o)
      m[E] = t.values[E];
    return m;
  }, o.map((m) => t.values[m])), y = ye(() => o.length ? [] : typeof e.lookup == "string" ? r[e.lookup] : e.lookup, [e.lookup, r, o]), d = async () => {
    if (!e.lookup) return;
    if (!Object.values(s).every(
      (D) => !Hi.includes(D)
    )) {
      h([]);
      return;
    }
    let E = [];
    const x = {
      lookups: [{ lookup: e.lookup, where: s }]
    };
    try {
      const D = await Pt({ url: `${u}/combo`, params: x, disableLoader: !0, jsonPayload: !0 });
      D && D.success && D.lookups ? E = D.lookups[e.lookup] || [] : E = [];
    } catch {
      E = [];
    } finally {
      h(E);
    }
  };
  return ce(() => {
    o.length ? d() : (a || !l.current) && h(y);
  }, [s, y, u, e.lookup]), c;
}
const Wi = Ct.memo(({ column: e, field: t, formik: r, lookups: o, dependsOn: a = [], model: l, ...i }) => {
  const c = Ct.useRef(!1), { placeHolder: h } = e, C = un({ column: e, formik: r, lookups: o, dependsOn: a, userSelected: c, model: l }), p = Et(), u = ye(() => {
    let y = r.values[t];
    if (C?.length && !y && !e.multiSelect && "IsDefault" in C[0]) {
      const d = C.find((m) => m.IsDefault);
      d && (y = d.value, r.setFieldValue(t, d.value));
    }
    return e.multiSelect && (!y || y.length === 0 ? y = [] : Array.isArray(y) || (y = y.split(",").map((d) => parseInt(d)))), y;
  }, [r.values[t], C, e.multiSelect, t]), s = Ft((y) => {
    r.handleChange(y), c.current = !0;
  }, [r]);
  return /* @__PURE__ */ v(
    Kt,
    {
      fullWidth: !0,
      error: r.touched[t] && r.errors[t],
      variant: "standard",
      children: [
        /* @__PURE__ */ n(Da, { children: h || "" }),
        /* @__PURE__ */ n(
          wa,
          {
            IconComponent: Qr,
            ...i,
            name: t,
            multiple: e.multiSelect === !0,
            readOnly: e.readOnly === !0,
            value: `${u}`,
            onChange: s,
            onBlur: r.handleBlur,
            sx: {
              backgroundColor: e.readOnly ? p.palette?.action?.disabled : ""
            },
            children: Array.isArray(C) && C.map((y) => /* @__PURE__ */ n(Zr, { value: y.value, disabled: y.isDisabled, children: y.label }, y.value))
          }
        ),
        /* @__PURE__ */ n(dt, { children: r.touched[t] && r.errors[t] })
      ]
    },
    t
  );
}), $r = qt("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), qi = ({ component: e, name: t, formik: r, field: o, column: a }) => {
  const { value: l } = r.getFieldProps(t || o), { setFieldValue: i } = r, c = e || a.relation, h = Ft((C) => {
    i(t || o, C);
  }, [i, t, o]);
  return /* @__PURE__ */ v("div", { children: [
    /* @__PURE__ */ n($r, { children: `Available ${a.label}` }),
    /* @__PURE__ */ n(c, { selected: l, available: !0, onAssignChange: h, disableCellRedirect: a.disableCellRedirect, readOnly: a.readOnly }),
    /* @__PURE__ */ n($r, { children: `Assigned ${a.label}` }),
    /* @__PURE__ */ n(c, { selected: l, assigned: !0, onAssignChange: h, disableCellRedirect: a.disableCellRedirect, readOnly: a.readOnly })
  ] });
}, Ki = ({ field: e, formik: t, orientation: r = "row", label: o, lookups: a, fieldConfigs: l = {}, mode: i, ...c }) => {
  const h = (y) => {
    t.setFieldValue(e, y.target.value);
  }, C = a ? a[c.column.lookup] : [], p = Et(), u = t.touched[e] && !!t.errors[e], s = i !== "copy" && l.disabled;
  return /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ v(Wt, { component: "fieldset", error: u, children: [
      /* @__PURE__ */ n(Jo, { component: "legend", children: o }),
      /* @__PURE__ */ n(
        br,
        {
          row: r === "row",
          "aria-label": o,
          name: e,
          value: t.values[e],
          onChange: h,
          children: C?.map((y, d) => /* @__PURE__ */ n(
            lt,
            {
              value: y.value,
              control: /* @__PURE__ */ n(bt, {}),
              label: y.label,
              disabled: s
            },
            d
          ))
        }
      )
    ] }),
    u && /* @__PURE__ */ n(dt, { style: { color: p.palette.error.main }, children: t.errors[e] })
  ] });
}, Yi = {
  limitTags: 5
}, Ji = Ge.memo(({ column: e, field: t, formik: r, lookups: o, dependsOn: a = [], fieldConfigs: l = {}, mode: i, model: c, ...h }) => {
  const C = un({ column: e, formik: r, lookups: o, dependsOn: a, model: c, isAutoComplete: !0 });
  let p = r.values[t] || [];
  Array.isArray(p) || (p = p.split(", ").map(Number));
  const u = C.filter((d) => p.includes(d.value)) || [], s = i !== "copy" && l.disabled, y = (d, m) => {
    let E = m?.map((x) => x.value) || [];
    e.dataFormat !== "array" && (E = E.length ? E.join(", ") : ""), r.setFieldValue(t, E);
  };
  return /* @__PURE__ */ v(
    Kt,
    {
      fullWidth: !0,
      variant: "standard",
      error: r.touched[t] && !!r.errors[t],
      children: [
        /* @__PURE__ */ n(
          Xr,
          {
            ...h,
            multiple: !0,
            id: t,
            limitTags: e.limitTags || Yi.limitTags,
            options: C || [],
            getOptionLabel: (d) => d.label || "",
            defaultValue: u,
            renderInput: (d) => /* @__PURE__ */ n(Ht, { ...d, variant: "standard" }),
            onChange: y,
            value: u,
            size: "small",
            disabled: s
          }
        ),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ n(dt, { children: r.errors[t] })
      ]
    },
    t
  );
}), Zi = "#182eb5", Qi = [
  { label: "Sunday", value: 0, display: "S" },
  { label: "Monday", value: 1, display: "M" },
  { label: "Tuesday", value: 2, display: "T" },
  { label: "Wednesday", value: 3, display: "W" },
  { label: "Thursday", value: 4, display: "T" },
  { label: "Friday", value: 5, display: "F" },
  { label: "Saturday", value: 6, display: "S" }
], Xi = Zo(Qo)(({ theme: e, isSelected: t }) => ({
  width: 34,
  height: 34,
  padding: 1,
  margin: 1,
  backgroundColor: t ? Zi : "#ffffff",
  border: `1px solid ${Aa[500]}`,
  color: t ? "white" : "black"
})), el = ({ day: e, onClick: t, isSelected: r }) => /* @__PURE__ */ n(
  Xi,
  {
    onClick: () => t(e.value),
    isSelected: r,
    style: { margin: "4px" },
    children: e.display
  },
  e.value
), tl = ({ name: e, field: t, formik: r, expired: o }) => {
  const { setFieldValue: a } = r, { value: l } = r.getFieldProps(e || t), i = "1000001", c = "0111110", h = "0".repeat(7), [C, p] = R(l || h), [u, s] = R(() => l ? l === i ? i : l === c ? c : "Custom" : ""), [y, d] = R(!1), m = Ft((D) => {
    if (Array.isArray(D)) {
      let w = h;
      for (const F of D)
        w = w.substring(0, F) + "1" + w.substring(F + 1);
      p(w), a(e || t, w), d(!0);
    } else {
      let w = y ? h : C;
      const F = w.slice(0, D) + (w[D] === "1" ? "0" : "1") + w.slice(D + 1);
      p(F), a(e || t, F), s("Custom"), d(!1);
    }
  }, [y, h, C, e, t, a]), E = Et(), x = r.touched[t] && !!r.errors[t];
  return /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ n(Wt, { component: "fieldset", error: x, children: /* @__PURE__ */ v(
      br,
      {
        row: !0,
        name: e || t,
        value: u,
        onChange: (D) => {
          const w = D.target.value;
          s(w), w !== "Custom" ? (p(w), a(e || t, w), d(!0)) : (p(h), a(e || t, h), d(!1));
        },
        children: [
          /* @__PURE__ */ n(lt, { value: i, control: /* @__PURE__ */ n(bt, {}), label: "Weekends (Sat - Sun)", onClick: () => m([0, 6]) }),
          /* @__PURE__ */ n(lt, { value: c, control: /* @__PURE__ */ n(bt, {}), label: "Weekdays (Mon - Fri)", onClick: () => m([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ n(lt, { value: "Custom", control: /* @__PURE__ */ n(bt, {}), label: "Specific days" }),
          Qi.map((D, w) => /* @__PURE__ */ n(
            el,
            {
              day: D,
              onClick: () => m(w),
              isSelected: u === "Custom" && C[w] === "1",
              disabled: o
            },
            D.value
          ))
        ]
      }
    ) }),
    x && /* @__PURE__ */ n(dt, { style: { color: E.palette.error.main }, children: r.errors[t] })
  ] });
}, rl = ({ isAdd: e, column: t, field: r, formik: o, otherProps: a, fieldConfigs: l = {}, mode: i }) => {
  const c = Et();
  let h = o.values[r] || [];
  Array.isArray(h) || (h = h.split(",").map((s) => s.trim()));
  const C = Ge.useMemo(() => i === "copy" ? !0 : typeof l.disabled < "u" ? l.disabled : typeof t.disabled == "function" ? t.disabled({ isAdd: e, formik: o }) : !!t.disabled, [i, l.disabled, t.disabled]), p = t.hasDefault && !e ? [h[0]] : [], u = Ft((s, y, d, m = {}) => {
    const E = y.pop()?.trim();
    y.includes(E) || y.push(E), p && p.includes(m.option) && d === "removeOption" && (y = [m.option]), t.dataFormat !== "array" && (y = y.length ? y.join(",") : ""), o.setFieldValue(r, y);
  }, [o, r]);
  return /* @__PURE__ */ v(
    Kt,
    {
      fullWidth: !0,
      variant: "standard",
      error: o.touched[r] && !!o.errors[r],
      children: [
        /* @__PURE__ */ n(
          Xr,
          {
            ...a,
            multiple: !0,
            id: r,
            freeSolo: !0,
            value: h,
            options: [],
            renderInput: (s) => /* @__PURE__ */ n(
              Ht,
              {
                ...s,
                variant: "standard",
                InputProps: {
                  ...s.InputProps,
                  sx: {
                    ...s.InputProps?.sx,
                    ...C && { backgroundColor: c.palette?.action?.disabled }
                  }
                }
              }
            ),
            onChange: u,
            size: "small",
            renderTags: (s, y) => s.map((d, m) => {
              const { key: E, ...x } = y({ index: m });
              return /* @__PURE__ */ n(
                Fa,
                {
                  label: d,
                  ...x,
                  disabled: p.includes(d)
                },
                E
              );
            }),
            disabled: C
          }
        ),
        o.touched[r] && o.errors[r] && /* @__PURE__ */ n(dt, { children: o.errors[r] })
      ]
    },
    r
  );
}, nl = (e = []) => {
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
function ol({ column: e, field: t, formik: r, lookups: o, fieldConfigs: a, mode: l }) {
  const i = o ? o[e.lookup] : [], c = nl(i), h = r.values[t]?.length ? r.values[t].split(", ") : [];
  let C;
  return l !== "copy" && (C = a?.disabled), /* @__PURE__ */ n(ct, { sx: { minHeight: 350 }, children: /* @__PURE__ */ n(
    Ia,
    {
      selectedItems: h,
      onSelectedItemsChange: (u, s) => {
        r.setFieldValue(t, s?.join(", ") || "");
      },
      disabled: C,
      multiSelect: !0,
      checkboxSelection: !0,
      children: c.map((u) => /* @__PURE__ */ n(Mr, { itemId: u.value, label: u.label, children: u.children.map((s) => /* @__PURE__ */ n(Mr, { itemId: s.value, label: s.label }, s.value)) }, u.value))
    }
  ) });
}
const al = { maxLength: 500 }, { errorMapping: il } = st, ll = 1024 * 1024;
function sl({ column: e, field: t, formik: r }) {
  const o = r.values[t] || "", { stateData: a } = We(), { maxSize: l, formats: i } = e, { uploadApi: c, mediaApi: h, Url: C } = a?.gridSettings?.permissions, [p, u] = R({
    isExternal: "no",
    selectedFile: null
  }), [s, y] = R(!1), d = Yt(), { getParams: m, useParams: E } = Jt(), { associationId: x } = E() || m, D = x?.split("-")[0] || 1, w = (k) => {
    const te = k.target.value;
    u({
      ...p,
      isExternal: te,
      selectedFile: null
    }), r.setFieldValue(t, r.values[t]);
  }, F = (k) => {
    r.setFieldValue(t, k.target.value);
  }, A = (k) => {
    const te = k.target.files[0];
    if (te) {
      if (l && te.size > l * ll) {
        d.showError(`File size exceeds the maximum limit of ${l} MB.`);
        return;
      }
      if (Array.isArray(i) && !i.includes(te.type)) {
        d.showError(`Invalid file format. Allowed formats: ${i.join(", ")}.`);
        return;
      }
      u((Z) => ({ ...Z, selectedFile: te }));
    }
  }, q = async () => {
    if (p.selectedFile) {
      y(!0);
      try {
        const k = new FormData();
        k.append("file", p.selectedFile), k.append("DocumentGroupId", r.values.DocumentGroupId), k.append("AssociationId", D);
        const Z = (await vt({
          method: "POST",
          url: c,
          data: k,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!Z.success) {
          d.showError(Z.message || "Upload failed");
          return;
        }
        const B = h + "/" + Z.filePath;
        r.setFieldValue(t, B);
      } catch (k) {
        const te = (k.message.match(/status code (\d{3})/) || [])[1];
        d.showError(il[te]);
      } finally {
        y(!1);
      }
    }
  }, _ = new URL(C, window.location.origin).hostname.toLowerCase();
  Ct.useEffect(() => {
    u({
      ...p,
      isExternal: o.toLowerCase().includes(_) ? "no" : "yes"
    });
  }, [o, u]);
  const ee = r.values[t]?.length > (e.max || al.maxLength), ae = ee ? "red" : "";
  return /* @__PURE__ */ v(Me, { children: [
    /* @__PURE__ */ v(Me, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(Re, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
      /* @__PURE__ */ v(
        br,
        {
          row: !0,
          value: p.isExternal,
          onChange: w,
          "aria-label": "is-external-link",
          name: "is-external-link",
          children: [
            /* @__PURE__ */ n(lt, { value: "yes", control: /* @__PURE__ */ n(bt, {}), label: "Yes" }),
            /* @__PURE__ */ n(lt, { value: "no", control: /* @__PURE__ */ n(bt, {}), label: "No" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ v(Me, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(Re, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ v(Me, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        p.isExternal === "yes" ? /* @__PURE__ */ n(
          zt,
          {
            fullWidth: !0,
            value: o,
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: ae },
                "&.Mui-focused fieldset": { borderColor: ae },
                "&:hover fieldset": { borderColor: ae }
              }
            },
            onChange: F,
            placeholder: "Enter external link"
          }
        ) : /* @__PURE__ */ n(
          zt,
          {
            fullWidth: !0,
            value: o,
            placeholder: "Link autopopulated once uploaded",
            InputProps: { readOnly: !0 }
          }
        ),
        ee && /* @__PURE__ */ v(Re, { sx: { color: "red" }, children: [
          "Maximum allowed length for the document link is ",
          e.max,
          " characters."
        ] })
      ] })
    ] }),
    p.isExternal === "no" && /* @__PURE__ */ v(Me, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ v(
        it,
        {
          variant: "outlined",
          component: "label",
          disabled: s,
          children: [
            "Choose File",
            /* @__PURE__ */ n("input", { type: "file", hidden: !0, onChange: A })
          ]
        }
      ),
      p.selectedFile && /* @__PURE__ */ n(Fe, { title: p.selectedFile.name, arrow: !0, children: /* @__PURE__ */ n(Re, { variant: "body2", children: p.selectedFile.name.length > 20 ? `${p.selectedFile.name.substring(0, 20)}...` : p.selectedFile.name }) }),
      /* @__PURE__ */ n(
        it,
        {
          variant: "contained",
          color: "primary",
          onClick: q,
          disabled: !p.selectedFile || s,
          children: s ? /* @__PURE__ */ n(Xo, { size: 24, color: "inherit" }) : "Upload File"
        }
      )
    ] })
  ] });
}
const cl = ({ field: e, formik: t }) => {
  const [r, o] = Ge.useState({}), a = dn(r, 300);
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
  const l = (i, c) => {
    const h = { ...r, [i]: c };
    o(h);
  };
  return /* @__PURE__ */ n(
    Kt,
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
              Ma,
              {
                id: i,
                name: i,
                value: r[i],
                onChange: (c) => l(i, c.target.value),
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
}, dl = {
  boolean: ki,
  select: Wi,
  string: mr,
  number: Vi,
  password: zi,
  date: Ui,
  dateTime: Gi,
  time: ji,
  oneToMany: qi,
  radio: Ki,
  autocomplete: Ji,
  dayRadio: tl,
  email: mr,
  chipInput: rl,
  treeCheckbox: ol,
  fileUpload: sl,
  json: cl
}, _r = { paddingTop: "2.5px", paddingBottom: "2.5px" }, ul = Pa("span")({
  color: "red !important"
}), pl = ({ tabColumns: e, model: t, formik: r, data: o, onChange: a, combos: l, lookups: i, fieldConfigs: c, mode: h, handleSubmit: C }) => {
  const [p, u] = Ge.useState(/* @__PURE__ */ new Set()), { activeStep: s, setActiveStep: y } = Ge.useContext(fn), d = {};
  for (let F = 0, A = t.columns.length; F < A; F++) {
    const { field: q, skip: _ } = t.columns[F];
    _ && (d[_.step] = r.values[q]);
  }
  const m = (F) => p.has(F) || d[F], E = () => {
    for (let F = s + 1; F < e.length; F++)
      if (!m(F))
        return !1;
    return !0;
  }, x = () => {
    let F = s + 1;
    for (; d[F]; )
      F++;
    u((A) => new Set(A).add(s)), F >= e.length || E() ? C() : y(F);
  }, D = () => {
    let F = s - 1;
    for (; d[F] && F > 0; )
      F--;
    y(F);
  };
  if (!e?.length)
    return null;
  const w = e[s];
  return /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ n(Ta, { activeStep: s, sx: { marginBottom: "20px" }, children: e.map(({ title: F, key: A }, q) => /* @__PURE__ */ n(Sa, { completed: m(q), children: /* @__PURE__ */ n(Oa, { children: /* @__PURE__ */ n(Re, { sx: { fontSize: "20px" }, children: F }) }) }, A)) }),
    /* @__PURE__ */ v(Ge.Fragment, { children: [
      /* @__PURE__ */ n(pn, { formElements: w.items, model: t, formik: r, data: o, onChange: a, combos: l, lookups: i, fieldConfigs: c, mode: h }),
      /* @__PURE__ */ v(ct, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        s !== 0 ? /* @__PURE__ */ v(we, { color: "inherit", disabled: s === 0, onClick: D, variant: "contained", sx: { mr: 2 }, children: [
          " ",
          "Back"
        ] }) : null,
        /* @__PURE__ */ n(we, { onClick: x, variant: "contained", children: E() ? "Finish" : "Next" })
      ] })
    ] })
  ] });
}, pn = ({ formElements: e, model: t, formik: r, data: o, onChange: a, combos: l, lookups: i, fieldConfigs: c, mode: h, isAdd: C }) => e?.length ? /* @__PURE__ */ n(me, { children: e.map(({ Component: p, column: u, field: s, label: y, otherProps: d }, m) => {
  const E = typeof u.relation == "function";
  return /* @__PURE__ */ v(sr, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: E ? "flex-start" : "center", children: [
    u?.showLabel !== !1 ? /* @__PURE__ */ n(sr, { size: { xs: 3 }, sx: _r, children: /* @__PURE__ */ v(Re, { sx: { fontSize: "16px", fontWeight: "bold" }, children: [
      u.label || s,
      ": ",
      u.required && /* @__PURE__ */ n(ul, { children: "*" })
    ] }) }) : null,
    /* @__PURE__ */ n(sr, { size: { xs: E ? 12 : 9 }, sx: _r, children: /* @__PURE__ */ n(p, { isAdd: C, model: t, fieldConfigs: c[s], mode: h, column: u, field: s, label: y, formik: r, data: o, onChange: a, combos: l, lookups: i, ...d }) })
  ] }, m);
}) }) : null, fl = function({ columns: e, tabs: t = {}, id: r, searchParams: o }) {
  const a = [], l = {};
  for (const c in t)
    l[c] = [];
  for (const c of e) {
    const h = c.type;
    if (c.label === null)
      continue;
    const { field: C, label: p, tab: u } = c, s = {};
    c.options && (s.options = c.options), c.dependsOn && (s.dependsOn = c.dependsOn);
    const y = dl[h];
    if (!y || c.hideInAddGrid && r === "0")
      continue;
    (u && t[u] ? l[u] : a).push({ Component: y, field: C, label: p, column: { ...c, readOnly: o.has("showRelation") || c.readOnly }, otherProps: s });
  }
  const i = [];
  for (const c in l)
    i.push({ key: c, title: t[c], items: l[c] });
  return { formElements: a, tabColumns: i };
}, ml = ({ model: e, formik: t, data: r, combos: o, onChange: a, lookups: l, id: i, fieldConfigs: c, mode: h, handleSubmit: C }) => {
  const p = st.emptyIdValues.includes(i), { formElements: u, tabColumns: s } = Ge.useMemo(() => {
    const y = e.formConfig?.showTabbed, d = new URLSearchParams(window.location.search), { formElements: m, tabColumns: E } = fl({ columns: e.columns, tabs: y ? e.tabs : {}, id: i, searchParams: d });
    return { formElements: m, tabColumns: E, showTabs: y && E.length > 0 };
  }, [e]);
  return /* @__PURE__ */ v("div", { children: [
    /* @__PURE__ */ n(pn, { isAdd: p, formElements: u, model: e, formik: t, data: r, onChange: a, combos: o, lookups: l, fieldConfigs: c, mode: h }),
    /* @__PURE__ */ n("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ n(pl, { tabColumns: s, model: e, formik: t, data: r, onChange: a, combos: o, lookups: l, fieldConfigs: c, mode: h, handleSubmit: C }) })
  ] });
};
function hl(e) {
  const { children: t, value: r, index: o, ...a } = e;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "tabpanel",
      hidden: r !== o,
      id: `simple-tabpanel-${o}`,
      "aria-labelledby": `simple-tab-${o}`,
      ...a,
      children: r === o && /* @__PURE__ */ n(ct, { sx: { p: 3 }, children: t })
    }
  );
}
function gl(e) {
  return {
    id: `simple-tab-${e}`,
    "aria-controls": `simple-tabpanel-${e}`
  };
}
const yl = zr(({ relation: e, parentFilters: t, parent: r, where: o, models: a, readOnly: l }) => {
  const i = a.find(({ name: C }) => C === e);
  if (!i) return null;
  const c = { ...i, hideBreadcrumb: !0 }, h = c instanceof Gt ? c : new Gt(c);
  return h ? /* @__PURE__ */ n(
    h.ChildGrid,
    {
      readOnly: l,
      parentFilters: t,
      parent: r,
      model: c,
      where: o,
      isChildGrid: !0
    }
  ) : null;
}), bl = Ct.memo(({ relations: e, parent: t, where: r = [], models: o, relationFilters: a, readOnly: l }) => {
  const [i, c] = R(0);
  return /* @__PURE__ */ v(ct, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ n(ct, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ n(Na, { value: i, onChange: (C, p) => {
      c(p);
    }, "aria-label": "relations tabs", children: e.map((C, p) => {
      const u = o.find(({ name: y }) => y === C) || {}, s = u.listTitle || u.title || C;
      return /* @__PURE__ */ n(
        Ra,
        {
          label: s,
          ...gl(p)
        },
        C
      );
    }) }) }),
    e.map((C, p) => /* @__PURE__ */ n(hl, { value: i, index: p, children: /* @__PURE__ */ n(
      yl,
      {
        readOnly: l,
        relation: C,
        models: o,
        parentFilters: a[C] || [],
        parent: t,
        where: r
      },
      C
    ) }, C))
  ] });
}), fn = jt(1), Cl = {}, De = {
  object: "object",
  function: "function",
  baseData: "baseData",
  string: "string",
  create: "Create",
  copy: "Copy",
  edit: "Edit",
  number: "number"
}, El = ({
  model: e,
  api: t,
  models: r,
  relationFilters: o = {},
  permissions: a = {},
  Layout: l = ml,
  baseSaveData: i = {},
  sx: c,
  readOnly: h,
  beforeSubmit: C,
  deletePromptText: p
}) => {
  const u = e.formTitle || e.title, { navigate: s, getParams: y, useParams: d, pathname: m } = Jt(), { relations: E = [] } = e, { dispatchData: x, stateData: D } = We(), w = d() || y, { id: F = "" } = w, A = F.split("-")[0], q = new URLSearchParams(window.location.search), _ = q.has(De.baseData) && q.get(De.baseData);
  if (_) {
    const M = JSON.parse(_);
    typeof M === De.object && M !== null && (i = { ...i, ...M });
  }
  const [ee, ae] = R(!0), [k, te] = R({}), [Z, B] = R(null), [J, H] = R(!1), N = Yt(), [Y, Q] = R(null), [X, Ce] = R(0), [re, Ee] = R(!1), [Te, tt] = R(null), [Le, ke] = R(""), $e = D?.gridSettings?.permissions?.Url || "", _e = typeof e.applyFieldConfig === De.function ? e.applyFieldConfig({ data: k, lookups: Z }) : Cl, Se = ye(() => `${$e}${e.api || t || ""}`, [$e, e.api, t]), { mode: ut } = D.dataForm, xt = D.getUserData || {}, pt = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...a
  }, { canEdit: rt } = rn({
    userData: xt,
    model: e,
    userDefinedPermissions: pt
  }), { hideBreadcrumb: he = !1, navigateBack: I } = e, V = () => {
    let M;
    switch (typeof I) {
      case De.function:
        M = I({ params: w, searchParams: q, data: k });
        break;
      case De.number:
      case De.string:
        M = I;
        break;
      default:
        M = m.substring(0, m.lastIndexOf("/"));
        break;
    }
    s(M);
  }, ve = ye(() => st.emptyIdValues.includes(A), [A]), f = ye(() => ve ? { ...e.initialValues, ...k, ...i } : { ...i, ...e.initialValues, ...k }, [e.initialValues, k, A]);
  ce(() => {
    if (!$e) return;
    Q(e.getValidationSchema({ id: A, snackbar: N }));
    const M = F.split("-");
    nn({
      ...{
        api: t || Se,
        model: e,
        setError: Oe
      },
      id: M.length > 1 ? M[1] : M[0],
      setIsLoading: ae,
      setActiveRecord: qe
    });
  }, [A, F, e, $e]);
  const ie = Yr({
    enableReinitialize: !0,
    initialValues: f,
    validationSchema: Y,
    validateOnBlur: !1,
    onSubmit: async (M, { resetForm: ge }) => {
      Object.keys(M).forEach((oe) => {
        typeof M[oe] === De.string && (M[oe] = M[oe].trim());
      }), ae(!0), an({
        id: A,
        api: Se,
        values: M,
        setIsLoading: ae,
        setError: N.showError
      }).then((oe) => {
        if (!oe) return;
        if (e.reloadOnSave)
          return window.location.reload();
        const Je = oe.info ? oe.info : `Record ${A === 0 ? "Added" : "Updated"} Successfully.`;
        N.showMessage(Je), I !== !1 && V(), ge({ values: ie.values });
      }).catch((oe) => {
        N.showError(
          "An error occured.",
          oe
        ), e.reloadOnSave && ge();
      }).finally(() => ae(!1));
    }
  }), Ne = () => {
    ie.resetForm(), Ee(!1), I !== !1 && V();
  }, Oe = function(M, ge) {
    N.showError(M, ge), V();
  }, qe = function({ id: M, title: ge, record: oe, lookups: Je }) {
    const Ze = F.indexOf("-") > -1, mt = !M || M === "0", Dt = mt ? De.create : Ze ? De.copy : De.edit, It = mt ? "" : oe[e.linkColumn], ht = [{ text: e.breadCrumbs }, { text: Dt }];
    Ze && (oe[e.linkColumn] = ""), e.columns.forEach((Ve) => {
      Ve.skipCopy && Ze && (oe[Ve.field] = "");
    }), te(oe), B(Je), It !== "" && ht.push({ text: It }), x({
      type: G.PAGE_TITLE_DETAILS,
      payload: {
        showBreadcrumbs: !0,
        breadcrumbs: ht
      }
    });
  }, be = function(M) {
    ie.dirty && Be ? Ee(!0) : I !== !1 && V(), M.preventDefault();
  }, de = async function() {
    try {
      H(!0), await on({
        id: A,
        api: t || e.api,
        setIsLoading: ae,
        setError: N.showError,
        setErrorMessage: ke
      }) === !0 && (N.showMessage("Record Deleted Successfully."), I !== !1 && V());
    } catch {
      N.showError("An error occurred, please try after some time.");
    } finally {
      H(!1);
    }
  }, ne = () => {
    ke(null), H(!1);
  };
  if (ee)
    return /* @__PURE__ */ n(ct, { sx: { display: "flex", pt: "20%", justifyContent: "center" }, children: /* @__PURE__ */ n(ya, {}) });
  const ue = function(M) {
    const { name: ge, value: oe } = M.target;
    te({ ...k, [ge]: oe });
  }, ft = async function(M) {
    M && M.preventDefault(), typeof C === De.function && await C({ formik: ie });
    const { errors: ge } = ie;
    ie.handleSubmit();
    const oe = Object.keys(ge)[0], Je = ge[oe];
    Je && N.showError(Je, null, "error");
    const Ze = e.columns.find(
      (mt) => mt.field === oe
    ) || {};
    Ze.tab && Ce(Object.keys(e.tabs).indexOf(Ze.tab));
  }, Ae = [
    { text: u },
    { text: A === "0" ? "New" : "Update" }
  ], Ke = Number(A) !== 0 && !!E.length, Ye = q.has("showRelation"), Be = !("canEdit" in k) || k.canEdit, nt = !Be || k.readOnlyRelations;
  return p = p || "Are you sure you want to delete ?", /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ n(
      cn,
      {
        navigate: s,
        title: u,
        showBreadcrumbs: !he,
        breadcrumbs: Ae,
        model: e
      }
    ),
    /* @__PURE__ */ n(fn.Provider, { value: { activeStep: X, setActiveStep: Ce }, children: /* @__PURE__ */ v(ha, { sx: { padding: 2, ...c }, children: [
      /* @__PURE__ */ v("form", { children: [
        /* @__PURE__ */ v(
          ga,
          {
            direction: "row",
            spacing: 2,
            justifyContent: "flex-end",
            mb: 1,
            children: [
              rt && Be && !Ye && !h && /* @__PURE__ */ n(
                we,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  onClick: ft,
                  children: "Save"
                }
              ),
              /* @__PURE__ */ n(
                we,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: be,
                  children: "Cancel"
                }
              ),
              a.delete && /* @__PURE__ */ n(
                we,
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
          l,
          {
            model: e,
            formik: ie,
            data: k,
            fieldConfigs: _e,
            onChange: ue,
            lookups: Z,
            id: A,
            handleSubmit: ft,
            mode: ut
          }
        )
      ] }),
      Le && /* @__PURE__ */ v(
        je,
        {
          open: !!Le,
          onConfirm: ne,
          onCancel: ne,
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
          onConfirm: Ne,
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
          open: J,
          onConfirm: de,
          onCancel: () => {
            H(!1), tt(null);
          },
          title: Te ? "Error Deleting Record" : "Confirm Delete",
          children: p
        }
      ),
      Ke ? /* @__PURE__ */ n(
        bl,
        {
          readOnly: nt,
          models: r,
          relationFilters: o,
          relations: E,
          parent: e.name || e.title || ""
        }
      ) : null
    ] }) })
  ] });
}, $t = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
  nonAlphaNumeric: /[^a-zA-Z0-9]/g,
  compareValidatorRegex: /^compare:(.+)$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
}, vl = {}, Vr = !0, xl = {
  string: "",
  boolean: !1,
  radio: !1,
  oneToMany: ""
};
class Gt {
  static defaultPermissions = {
    add: !0,
    edit: !0,
    delete: !0
  };
  constructor(t) {
    const { title: r = "", controllerType: o } = t;
    let { api: a, idProperty: l = a + "Id" } = t;
    const i = "module" in t ? t.module : r.replace(/[^\w\s]/gi, "");
    a || (a = `${r.replaceAll($t.nonAlphaNumeric, "-").toLowerCase()}`, l = r.replaceAll(" ", "") + "Id"), a = o === "cs" ? `${a}.ashx` : `${a}`;
    const c = { ...t.defaultValues }, h = i || r;
    Object.assign(this, {
      standard: !0,
      name: h,
      permissions: { ...Gt.defaultPermissions },
      idProperty: l,
      linkColumn: `${h}Name`,
      overrideFileName: r,
      preferenceId: h,
      tableName: h,
      module: i,
      ...t,
      api: a
    }), this.columnVisibilityModel = this._getColumnVisibilityModel(), this.defaultValues = this._getDefaultValues(c);
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
      t[o] = r.defaultValue === void 0 ? xl[r.type] || "" : r.defaultValue;
    }
    return t;
  }
  getValidationSchema({ id: t }) {
    const { columns: r } = this, o = {};
    for (const a of r) {
      const { field: l, label: i, header: c, type: h = "string", requiredIfNew: C = !1, required: p = !1, min: u = "", max: s = "", validate: y } = a, d = i || c || l;
      if (!d)
        continue;
      let m;
      switch (h) {
        case "string":
          m = se.string().nullable().trim().label(d), u && !isNaN(Number(u)) && (m = m.min(Number(u), `${d} must be at least ${u} characters long`)), s && !isNaN(Number(s)) && (m = m.max(Number(s), `${d} must be at most ${s} characters long`)), p && (m = m.trim().required(`${d} is required`));
          break;
        case "boolean":
          m = se.bool().nullable().transform((E, x) => x === "" ? null : E).label(d);
          break;
        case "radio":
        case "dayRadio":
          m = se.mixed().label(d).required(`Select at least one option for ${d}`);
          break;
        case "date":
          m = se.date().nullable().transform((E, x) => x === "" || x === null ? null : E).label(d).required(`${d} is required`);
          break;
        case "dateTime":
          m = se.date().nullable().transform((E, x) => x === "" || x === null ? null : E).label(d);
          break;
        case "select":
        case "autocomplete":
          p ? m = se.string().trim().label(d).required(`Select at least one ${d}`) : m = se.string().nullable();
          break;
        case "password":
          m = se.string().label(d).test("ignore-asterisks", `${d} must be a valid password.`, (E) => {
            if (E === "******") return !0;
            const x = Number(u) || 8, D = Number(s) || 50, w = a.regex || $t.password;
            return se.string().min(x, `${d} must be at least ${x} characters`).max(D, `${d} must be at most ${D} characters`).matches(
              w,
              `${d} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`
            ).isValidSync(E);
          });
          break;
        case "email":
          m = se.string().trim().matches(
            a.regex || $t.email,
            "Email must be a valid email"
          );
          break;
        case "number":
          p ? m = se.number().label(d).required(`${d} is required.`) : m = se.number().nullable(), u !== void 0 && u !== "" && !isNaN(Number(u)) && (m = m.min(Number(u), `${d} must be greater than or equal to ${u}`)), s !== void 0 && s !== "" && !isNaN(Number(s)) && (m = m.max(Number(s), `${d} must be less than or equal to ${s}`));
          break;
        case "fileUpload":
          m = se.string().trim().label(d);
          break;
        default:
          m = se.mixed().nullable().label(d);
          break;
      }
      if (p && h !== "string" && (m = m.required(`${d} is required`)), C && (!t || t === "") && (m = m.trim().required(`${d} is required`)), y) {
        const E = $t.compareValidatorRegex.exec(y);
        if (E) {
          const x = E[1], D = r.find(
            (w) => (w.formField === x || w.field) === x
          );
          m = m.oneOf(
            [se.ref(x)],
            `${d} must match ${D.label}`
          );
        }
      }
      o[l] = m;
    }
    return se.object({ ...o, ...this.validationSchema });
  }
  Form = ({ match: t, ...r }) => /* @__PURE__ */ n(El, { model: this, Layout: this.Layout, ...r });
  Grid = ({ match: t, ...r }) => /* @__PURE__ */ n(Lr, { model: this, showRowsSelected: Vr, ...r });
  ChildGrid = (t) => /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ n(Lr, { model: this, ...t, customStyle: vl, showRowsSelected: Vr }),
    /* @__PURE__ */ n(ea, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  je as DialogComponent,
  Lr as GridBase,
  mi as HelpModal,
  Nr as MuiTypography,
  cn as PageTitle,
  Us as RouterProvider,
  en as SnackbarContext,
  Vs as SnackbarProvider,
  zs as StateProvider,
  Gt as UiModel,
  Ja as daDKGrid,
  Qa as deDEGrid,
  ei as elGRGrid,
  ri as esESGrid,
  oi as frFRGrid,
  Pt as httpRequest,
  ii as itITGrid,
  fi as locales,
  di as ptPT,
  si as trTRGrid,
  qa as useMobile,
  Jt as useRouter,
  Yt as useSnackbar,
  We as useStateContext
};
//# sourceMappingURL=index.js.map
