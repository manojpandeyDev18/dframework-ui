import { jsx as n, jsxs as v, Fragment as me } from "react/jsx-runtime";
import * as Ge from "react";
import bt, { createContext as Gt, useContext as pr, useState as M, useEffect as ue, useReducer as ao, useMemo as be, useCallback as Ft, memo as $r, useRef as Tr, createElement as fr } from "react";
import io from "@mui/material/Snackbar";
import so from "@mui/material/Alert";
import we from "@mui/material/Button";
import lo from "@mui/material/Dialog";
import co from "@mui/material/DialogActions";
import uo from "@mui/material/DialogContent";
import po from "@mui/material/DialogContentText";
import fo from "@mui/material/DialogTitle";
import * as et from "@mui/x-data-grid-premium";
import { GridFooterContainer as mo, GridFooter as ho, getGridDateOperators as Vr, useGridApiRef as Ur, useGridSelector as lr, gridFilterModelSelector as zr, gridSortModelSelector as go, DataGridPremium as Gr, GridActionsCellItem as ze, GridToolbarExportContainer as yo, Toolbar as bo, GRID_CHECKBOX_SELECTION_COL_DEF as Co, getGridStringOperators as Eo, getGridBooleanOperators as vo, ColumnsPanelTrigger as xo, FilterPanelTrigger as Do } from "@mui/x-data-grid-premium";
import jr from "@mui/icons-material/Delete";
import Sr from "@mui/icons-material/FileCopy";
import wo from "@mui/icons-material/Article";
import cr from "@mui/icons-material/Edit";
import To from "@mui/icons-material/FilterListOff";
import Or from "@mui/icons-material/Add";
import So from "@mui/icons-material/Remove";
import At from "@mui/material/Typography";
import ct from "@mui/material/Box";
import jt from "@mui/material/TextField";
import { useTranslation as mr, withTranslation as Oo } from "react-i18next";
import { Typography as Re, Dialog as Ao, DialogTitle as Po, Grid as fe, DialogContent as Fo, Card as Io, CardContent as Mo, Breadcrumbs as Ro, Link as No, Button as it, IconButton as Hr, Box as Me, Menu as Bo, List as Lo, MenuItem as $t, ListItemButton as Ar, ListItemIcon as ko, ListItem as _o, ListItemText as $o, TextField as Vt, FormControlLabel as st, Checkbox as Vo, Stack as ar, Tooltip as Fe, FormControl as hr, Select as Uo, Badge as zo, FormHelperText as Ct, useTheme as Et, InputAdornment as Go, FormLabel as jo, RadioGroup as gr, Radio as yt, styled as Ho, Avatar as Wo, CircularProgress as qo, Divider as Ko } from "@mui/material";
import Yo from "@mui/icons-material/Check";
import dr from "@mui/icons-material/Close";
import Jo from "@mui/icons-material/Help";
import { Replay as Zo, Close as Qo } from "@mui/icons-material";
import ie from "dayjs";
import Xo from "dayjs/plugin/utc";
import ea from "dayjs/plugin/timezone";
import { DatePicker as Wr } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as ur } from "@mui/x-date-pickers/DateTimePicker";
import ta from "dayjs/plugin/utc.js";
import { LocalizationProvider as ra } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as na } from "@mui/x-date-pickers/AdapterDayjs";
import oa from "@mui/icons-material/Save";
import Pr from "@mui/icons-material/Settings";
import { useFormik as qr } from "formik";
import * as le from "yup";
import aa from "@mui/icons-material/History";
import ia from "@mui/icons-material/FileDownload";
import Kr from "@mui/material/Checkbox";
import Yr from "@mui/material/MenuItem";
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
import ir from "@mui/material/Grid";
import Jr from "@mui/material/Autocomplete";
import Ca from "@mui/material/Stepper";
import Ea from "@mui/material/Step";
import va from "@mui/material/StepLabel";
import { grey as xa } from "@mui/material/colors";
import Da from "@emotion/styled";
import wa from "@mui/material/Chip";
import { SimpleTreeView as Ta } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as Fr } from "@mui/x-tree-view/TreeItem";
import Sa from "@mui/material/Input";
import Oa from "@mui/material/Tab";
import Aa from "@mui/material/Tabs";
const Zr = Gt(null), Pa = "bottom", Fa = "center", Ia = bt.forwardRef(function(t, r) {
  return /* @__PURE__ */ n(so, { elevation: 6, ref: r, variant: "filled", ...t });
}), Bl = ({ children: e }) => {
  const [t, r] = M(null), [o, a] = M(!1), [s, i] = M(null), [d, h] = M(null), C = function(l, y, c = "info", f) {
    typeof l != "string" && (l = l.toString()), y && typeof y != "string" && (y = y.toString()), r(y ? `${l}: ${y}` : l), i(c), a(!0), h(f);
  }, u = function(l, y, c = "error", f) {
    C(l, y, c, f);
  }, p = function() {
    a(!1), h(null), d && d();
  };
  return /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ n(
      Zr.Provider,
      {
        value: { showMessage: C, showError: u },
        children: e
      }
    ),
    /* @__PURE__ */ n(io, { open: o, autoHideDuration: 6e3, onClose: p, anchorOrigin: { vertical: Pa, horizontal: Fa }, children: /* @__PURE__ */ n(Ia, { severity: s, children: t }) })
  ] });
}, qt = function() {
  return pr(Zr);
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
        o && /* @__PURE__ */ n(we, { onClick: o, children: s }),
        t && /* @__PURE__ */ n(we, { onClick: t, autoFocus: !0, children: a })
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
}, Qr = (e) => {
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
  o && (a["Content-Type"] === "multipart/form-data" ? (delete d.headers["Content-Type"], d.body = o instanceof FormData ? o : Qr(o)) : (d.headers["Content-Type"] = a["Content-Type"] || "application/json", d.body = typeof o == "string" ? o : JSON.stringify(o)));
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
  t && (h.data = o ? t : Qr(t));
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
}, lt = {
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
}, Xr = ({ userData: e = {}, model: t, userDefinedPermissions: r }) => {
  const { permissions: o = [] } = e;
  r = r || { add: !0, edit: !0, delete: !0 };
  const a = o.find((s) => s.Module === t.module);
  return a ? {
    canAdd: r.add && !!a[lt.permissionsMapper.add],
    canEdit: r.edit && !!a[lt.permissionsMapper.edit],
    canDelete: r.delete && !!a[[lt.permissionsMapper.delete]]
  } : { canAdd: r.add, canEdit: r.edit, canDelete: r.delete };
}, Ra = ["date", "dateTime"], Na = ["singleSelect"], Ir = 200, Ba = (e) => (/* @__PURE__ */ new Date()).getTimezoneOffset() === new Date(e).getTimezoneOffset(), Xe = (e, t) => e.status === He.SESSION_EXPIRED ? (t("Session Expired!"), setTimeout(() => {
  window.location.href = "/";
}, Ir), !0) : e.status === He.FORBIDDEN ? (t("Access Denied!"), setTimeout(() => {
  window.location.href = "/";
}, Ir), !0) : (e.status === He.INTERNAL_SERVER_ERROR && t("Internal Server Error"), !1);
function La(e) {
  const { operator: t, value: r, type: o } = e, a = ["isEmpty", "isNotEmpty"].includes(t), s = r != null && (r !== "" || o === "number" && r === 0 || o === "boolean" && r === !1);
  return a || s;
}
const ka = async ({ gridColumns: e, setIsLoading: t, setData: r, page: o, pageSize: a, sortModel: s, filterModel: i, api: d, parentFilters: h, action: C = "list", setError: u, extraParams: p, contentType: l, columns: y, controllerType: c = "node", template: f = null, configFileName: E = null, dispatchData: x, showFullScreenLoader: D = !1, model: w, baseFilters: F = null, isElasticExport: k }) => {
  l || D && x({ type: z.UPDATE_LOADER_STATE, payload: !0 });
  const J = [], j = [], ee = [];
  e.forEach(({ lookup: N, type: Y, field: H, keepLocal: R = !1, keepLocalDate: K, filterable: Q = !0, dependsOn: X }) => {
    Ra.includes(Y) && ee.push({ field: H, keepLocal: R, keepLocalDate: K }), N && !J.includes(N) && Na.includes(Y) && Q && (J.push(N), j.push({ lookup: N, dependsOn: X }));
  });
  const ae = [];
  i?.items?.length && i.items.forEach((N) => {
    if (La(N)) {
      const { field: Y, operator: H, filterField: R } = N;
      let { value: K } = N;
      const X = e.filter((Ce) => Ce?.field === N.field)[0]?.type;
      X === "boolean" ? K = K === "true" || K === !0 ? 1 : 0 : X === "number" && (K = Array.isArray(K) ? K.filter((Ce) => Ce) : K), K = N.filterValues || K, ae.push({
        field: R || Y,
        operator: H,
        value: K,
        type: X
      });
    }
  }), h && ae.push(...h), F && ae.push(...F);
  const L = {
    start: o * a,
    limit: k ? w.exportSize : a,
    ...p,
    logicalOperator: i.logicOperator,
    sort: s.map((N) => (N.filterField || N.field) + " " + N.sort).join(","),
    where: ae,
    isElasticExport: k,
    model: w.module,
    fileName: w.overrideFileName
  };
  J.length && (L.lookups = J.join(",")), j.length && (L.lookupWithDeps = JSON.stringify(j)), w?.limitToSurveyed && (L.limitToSurveyed = w?.limitToSurveyed);
  const te = {};
  let Z = c === "cs" ? `${d}?action=${C}&asArray=0` : `${d}/${C}`;
  if (f !== null && (Z += `&template=${f}`), E !== null && (Z += `&configFileName=${E}`), l) {
    const N = document.createElement("form");
    if (L.responseType = l, L.columns = y, L.userTimezoneOffset = -(/* @__PURE__ */ new Date()).getTimezoneOffset(), N.setAttribute("method", "POST"), N.setAttribute("id", "exportForm"), N.setAttribute("target", "_blank"), f === null)
      for (const Y in L) {
        let H = L[Y];
        if (H == null)
          continue;
        typeof H != "string" && (H = JSON.stringify(H));
        const R = document.createElement("input");
        R.type = "hidden", R.name = Y, R.value = H, N.append(R);
      }
    N.setAttribute("action", Z), document.body.appendChild(N), N.submit(), setTimeout(() => {
      document.getElementById("exportForm").remove();
    }, 3e3);
    return;
  }
  try {
    t(!0);
    const N = {
      url: Z,
      method: "POST",
      data: L,
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
    const Y = await vt(N);
    if (Y.status === He.OK) {
      const { records: H } = Y.data;
      H && H.forEach((R) => {
        ee.forEach((K) => {
          const { field: Q, keepLocal: X, keepLocalDate: Ce } = K;
          if (R[Q]) {
            if (R[Q] = new Date(R[Q]), Ce) {
              const re = R[Q].getTimezoneOffset() * 6e4;
              R[Q] = new Date(R[Q].getTime() + re);
            }
            if (X && !Ba(R[Q])) {
              const re = R[Q].getTimezoneOffset() * 6e4;
              R[Q] = new Date(R[Q].getTime() + re);
            }
          }
        }), w.columns.forEach(({ field: K, displayIndex: Q }) => {
          Q && (R[K] = R[Q]);
        });
      }), r(Y.data);
    } else Xe(Y, u) || u(Y.statusText);
  } catch (N) {
    N.response && !Xe(N.response, u) ? u("Could not list record", N.message || N.toString()) : u("Network failure or server unreachable. Please try again.");
  } finally {
    t(!1), !l && D && x({ type: z.UPDATE_LOADER_STATE, payload: !1 });
  }
}, en = async ({ api: e, id: t, setIsLoading: r, setActiveRecord: o, model: a, parentFilters: s, where: i = {}, setError: d }) => {
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
    } else Xe(l, d) || d("Could not load record", l.body.toString());
  } catch (l) {
    l.response && Xe(l.response, d) && d("Could not load record", l.message || l.toString());
  } finally {
    r(!1);
  }
}, tn = async function({ id: e, api: t, setIsLoading: r, setError: o }) {
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
    Xe(s, o) || o("Delete failed", s.body);
  } catch (s) {
    s.response && !Xe(s.response, o) && o("Could not delete record", s.message || s.toString());
  } finally {
    r(!1);
  }
  return a;
}, rn = async function({ id: e, api: t, values: r, setIsLoading: o, setError: a }) {
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
    } else Xe(d, a) || a("Save failed", d.body);
  } catch (d) {
    d.response && !Xe(d.response, a) && a("Could not save record", d.message || d.toString());
  } finally {
    o(!1);
  }
  return !1;
}, _a = ({ pagination: e, apiRef: t, tTranslate: r = (o) => o }) => {
  const o = t.current.state.pagination.paginationModel.page, a = t.current.state.pagination.paginationModel.pageSize, s = t.current.state.rows.totalRowCount, i = Math.ceil(s / a), { t: d, i18n: h } = mr(), C = { t: d, i18n: h }, [u, p] = M(o + 1), l = function(f) {
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
    /* @__PURE__ */ n(ct, { sx: { pl: 5 }, children: e && /* @__PURE__ */ v(me, { children: [
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
      /* @__PURE__ */ n(we, { disabled: !s, size: "small", onClick: y, children: r("Go", C) })
    ] }) }),
    /* @__PURE__ */ n(ho, {})
  ] });
}, $a = /\${((\w+)\.)?(\w+)}/g, Va = function(e, t, { template: r = $a, keepMissingTags: o = !1 } = {}) {
  return !e || !t ? e : e.replace(r, function(a, s, i, d) {
    const h = i ? t[i] || {} : t;
    return h[d] === void 0 ? o ? a : "" : h[d];
  });
}, sr = {
  replaceTags: Va
};
function Mr({ variant: e = "h2", component: t = "h2", text: r = "", name: o = null, ...a }) {
  return /* @__PURE__ */ v(Re, { variant: e, component: t, ...a, children: [
    r,
    o && ` ${o}`
  ] });
}
function Ua(e = !1) {
  const t = s(), [r, o] = M(t);
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
  ...et.daDK,
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
  ...et.deDE,
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
  ...et.elGR,
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
  ...et.esES,
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
  ...et.frFR,
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
  ...et.itIT,
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
  ...et.trTR,
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
  ...et.enUS,
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
const nn = Gt(), on = Gt(null), Ll = ({ children: e }) => {
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
      } catch (F) {
        console.error("Failed to parse preferences response as JSON:", F), D = {};
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
  return /* @__PURE__ */ n(nn.Provider, { value: { stateData: t, dispatchData: r, systemDateTimeFormat: o, formatDate: h, removeCurrentPreferenceName: d, getAllSavedPreferences: a, applyDefaultPreferenceIfExists: i, useLocalization: C }, children: e });
}, kl = on.Provider, Kt = () => pr(on), We = () => {
  const e = pr(nn);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, li = () => {
  const [e, t] = M(), [r, o] = M(!1), { stateData: a, dispatchData: s } = We(), i = a.modal, d = 16 / 9;
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
        /* @__PURE__ */ v(Re, { variant: "h7", component: "div", children: [
          " ",
          i?.data?.title || ""
        ] }),
        /* @__PURE__ */ n(Re, { variant: "caption", component: "div", children: i?.data?.subTitle || /* @__PURE__ */ n(me, { children: " " }) })
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
    /* @__PURE__ */ n(Mr, { className: "print-only", text: e }),
    c && /* @__PURE__ */ v(me, { children: [
      /* @__PURE__ */ n(Io, { sx: { mb: 3 }, children: /* @__PURE__ */ v(Mo, { sx: { backgroundColor: u || "#fff" }, children: [
        /* @__PURE__ */ v(fe, { container: !0, children: [
          /* @__PURE__ */ n(fe, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ n(Ro, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${i} breadcrumbs-text-title text-max-width`, children: h.map((E, x) => x < y ? /* @__PURE__ */ n(No, { onClick: f, className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: E.text }, x) : /* @__PURE__ */ n(Re, { className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", children: E.text }, x)) }) }),
          (h.length > 1 || C) && /* @__PURE__ */ n(fe, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(it, { variant: "contained", onClick: f, children: "Back" }) }),
          p && /* @__PURE__ */ n(fe, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(Hr, { color: "primary", title: "Help", size: "large", children: /* @__PURE__ */ n(Jo, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ n(Me, { className: "app-page-title--first", children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("div", { style: { display: l ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ n("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ n(
          Mr,
          {
            className: `${i} page-text-title`,
            variant: "p",
            text: e,
            name: r
          }
        ) }) }) }) }),
        !l && /* @__PURE__ */ v(me, { children: [
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
      /* @__PURE__ */ n(li, {})
    ] })
  ] });
}
const an = Oo()(ci);
ie.extend(ta);
const di = {
  date: Wr,
  datetime: ur,
  dateTimeLocal: ur
}, ui = "-10px", pi = "-16px", fi = (e) => {
  const { fixedFilterFormat: t } = lt, { item: r, applyValue: o, convert: a } = e, { systemDateTimeFormat: s, stateData: i } = We(), d = e?.type || "date", h = t[d], C = (f) => {
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
}, Lt = (e) => Vr().map((t) => ({
  ...t,
  InputComponent: t.InputComponent ? (r) => /* @__PURE__ */ n(fi, { ...r, ...e }) : void 0
})), Ie = {
  Edit: "Edit",
  Delete: "Delete"
}, at = {
  Add: "Add",
  Manage: "Manage"
}, mi = [
  { field: "prefName", type: "string", width: 300, headerName: "Preference Name", sortable: !1, filterable: !1 },
  { field: "prefDesc", type: "string", width: 300, headerName: "Preference Description", sortable: !1, filterable: !1 },
  { field: "isDefault", type: "boolean", width: 100, headerName: "Default", sortable: !1, filterable: !1 },
  { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(ze, { icon: /* @__PURE__ */ v(Fe, { title: Ie.Edit, children: [
    "   ",
    /* @__PURE__ */ n(cr, {})
  ] }), tabIndex: 1, "data-action": Ie.Edit, label: "Edit", color: "primary" }, 1)] },
  { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(ze, { icon: /* @__PURE__ */ v(Fe, { title: Ie.Delete, children: [
    /* @__PURE__ */ n(jr, {}),
    " "
  ] }), tabIndex: 2, "data-action": Ie.Delete, label: "Delete", color: "error" }, 2)] }
], hi = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, gi = [5, 10, 20, 50, 100], yi = ({ tTranslate: e = (s) => s, preferenceName: t, gridRef: r, columns: o = [], setIsGridPreferenceFetched: a }) => {
  const { stateData: s, dispatchData: i, removeCurrentPreferenceName: d, getAllSavedPreferences: h } = We(), { navigate: C } = Kt(), u = Ur(), p = qt(), { t: l, i18n: y } = mr(), c = { t: l, i18n: y }, [f, E] = M(!1), [x, D] = M(!1), [w, F] = M([]), [k, J] = M(), [j, ee] = M(), [ae, L] = M(!1), [te, Z] = M({}), { Username: N } = s?.getUserData ? s.getUserData : {}, Y = s?.preferences, H = s?.currentPreference, R = s?.gridSettings?.permissions?.preferenceApi, K = s?.gridSettings?.permissions?.defaultPreferenceEnums, Q = lr(r, zr), X = lr(r, go), Ce = be(() => le.object({
    prefName: le.string().trim(!0).required("Preference Name is Required").max(20, "Maximum Length is 20"),
    prefDesc: le.string().max(100, "Description maximum length is 100")
  }), []);
  ue(() => {
    F(Y?.filter((P) => P.prefId !== 0));
  }, [Y]);
  const re = qr({
    initialValues: hi,
    validationSchema: Ce,
    onSubmit: async (P) => {
      await _e(P);
    },
    mode: "onBlur"
  }), Ee = (P) => {
    ee(P?.currentTarget);
  }, Te = () => {
    ee(null);
  }, tt = () => {
    J(), Te(), E(!1);
  }, Le = async (P, $) => {
    const m = await Pt({ url: R, params: {
      action: "delete",
      id: t,
      Username: N,
      prefIdArray: P
    }, history: C, dispatchData: i });
    let se = m;
    if (typeof m == "string")
      try {
        se = JSON.parse(m);
      } catch (Ne) {
        typeof console < "u" && typeof console.error == "function" && console.error("Failed to parse deletePreference response:", Ne, m), p.showMessage("An error occurred while processing the server response.");
        return;
      }
    (se === !0 || se?.success) && ($ === H && d({ dispatchData: i }), p.showMessage("Preference Deleted Successfully."));
  }, ke = async (P) => {
    a && a(!1), await $e(P);
  }, _e = async (P) => {
    const $ = P.prefName.trim(), ve = Y.findIndex((Ae) => Ae.prefName === $);
    if (ve > -1 && (k === at.Add || Y[ve].prefId !== P.prefId)) {
      L(!0);
      return;
    }
    const { pinnedColumns: m } = r.current.state, { orderedFields: se, columnVisibilityModel: Ne, lookup: Oe } = r.current.state.columns, qe = [];
    se?.forEach((Ae) => {
      const { field: Ke } = Oe[Ae], Ye = o.find((Be) => Be.field === Ke) || Oe[Ae];
      Ye.width = Oe[Ae].width, qe.push(Ye);
    });
    const ge = Q?.items?.map((Ae) => {
      const { field: Ke, operator: Ye, value: Be } = Ae;
      return { field: Ke, operator: Ye, value: Be };
    });
    Q.items = ge;
    const ce = {
      action: "save",
      id: t,
      prefName: $,
      prefDesc: P.prefDesc,
      prefValue: { sortModel: X, filterModel: Q, columnVisibilityModel: Ne, gridColumn: qe, pinnedColumns: m },
      isDefault: P.isDefault
    };
    P.prefId && (ce.prefId = P.prefId);
    const ne = await Pt({ url: R, params: ce, history: C, dispatchData: i }), de = typeof ne == "string" ? JSON.parse(ne) : ne, pt = k === at.Add ? "Added" : "Saved";
    (de === !0 || de?.success === !0) && (p.showMessage(`Preference ${pt} Successfully.`), tt()), h({ preferenceName: t, Username: N, history: C, dispatchData: i, preferenceApi: R, defaultPreferenceEnums: K });
  }, $e = async (P) => {
    let $, ve = "Default";
    if (P === 0)
      $ = K[t] || null;
    else {
      const ce = await Pt({ url: R, params: {
        action: "load",
        id: t,
        Username: N,
        prefId: P
      }, history: C, dispatchData: i }) || {};
      let ne = ce;
      if (typeof ce == "string")
        try {
          ne = JSON.parse(ce);
        } catch (de) {
          console.error("Failed to parse preference response JSON", { error: de, rawResponse: ce });
          return;
        }
      if (ne && ne.prefValue)
        try {
          $ = JSON.parse(ne.prefValue);
        } catch (de) {
          console.error("Failed to parse preference value JSON", { error: de, prefValue: ne.prefValue });
          return;
        }
      else
        $ = null;
      ne && ne.prefName && (ve = ne.prefName);
    }
    if (!$) return;
    const { gridColumn: m, columnVisibilityModel: se, pinnedColumns: Ne, sortModel: Oe, filterModel: qe } = $;
    m.forEach(({ field: ge, width: ce }) => {
      r.current.getColumnIndex(ge) !== -1 && r.current.setColumnWidth(ge, ce);
    }), r.current.setColumnVisibilityModel(se), r.current.state.columns.orderedFields = m.map(({ field: ge }) => ge), r.current.setPinnedColumns(Ne), r.current.setSortModel(Oe || []), r.current.setFilterModel(qe), i({ type: z.SET_CURRENT_PREFERENCE_NAME, payload: ve }), a(!0);
  }, Se = (P) => P.GridPreferenceId, dt = (P, $ = !0) => {
    J(P), Te(), E(!0), D($), $ && re.resetForm();
  }, xt = async () => {
    const { prefId: P, preferenceName: $ } = te;
    await Le(P, $), h({ preferenceName: t, history: C, dispatchData: i, Username: N, preferenceApi: R, defaultPreferenceEnums: K }), Z({});
  }, ut = async (P) => {
    const $ = P.field === "editAction" ? Ie.Edit : P.field === "deleteAction" ? Ie.Delete : null;
    if (P.id === 0 && ($ === Ie.Edit || $ === Ie.Delete)) {
      p.showMessage(`Default Preference Can Not Be ${$ === Ie.Edit ? "Edited" : "Deleted"}`);
      return;
    }
    $ === Ie.Edit && (J("Modify"), re.setValues(P?.row), D(!0)), $ === Ie.Delete && Z({
      prefId: P.id,
      preferenceName: P.row.prefName
    });
  }, rt = re.values.prefName.trim(), he = k === at.Manage;
  return /* @__PURE__ */ v(Me, { children: [
    /* @__PURE__ */ v(
      it,
      {
        id: "grid-preferences-btn",
        "aria-controls": j ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": j ? "true" : void 0,
        onClick: Ee,
        title: e("Preference", c),
        startIcon: /* @__PURE__ */ n(Pr, {}),
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
        onClose: Te,
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
          /* @__PURE__ */ n($t, { component: Ar, dense: !0, onClick: () => dt(at.Add), children: e("Add Preference", c) }),
          /* @__PURE__ */ v($t, { component: Ar, dense: !0, divider: Y?.length > 0, onClick: () => dt(at.Manage, !1), children: [
            /* @__PURE__ */ n(ko, { children: /* @__PURE__ */ n(Pr, {}) }),
            e("Manage Preferences", c)
          ] }),
          Y?.length > 0 && Y?.map((P) => {
            const { prefName: $, prefDesc: ve, prefId: m } = P;
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
        title: /* @__PURE__ */ n(ar, { direction: "row", columnGap: 2, children: /* @__PURE__ */ v(Re, { variant: "h5", children: [
          k,
          " ",
          e(`Preference${k === at.Manage ? "s" : ""}`, c)
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
                  st,
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
                /* @__PURE__ */ n(fe, { size: 12, children: /* @__PURE__ */ v(ar, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
                  /* @__PURE__ */ n(
                    it,
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
                    it,
                    {
                      type: "button",
                      startIcon: /* @__PURE__ */ n(dr, {}),
                      color: "error",
                      variant: "contained",
                      size: "small",
                      onClick: tt,
                      disableElevation: !0,
                      children: e("Close", c)
                    }
                  )
                ] }) })
              ]
            }
          ),
          f && k === at.Manage && /* @__PURE__ */ v(fe, { container: !0, rowGap: 2, children: [
            /* @__PURE__ */ n(fe, { size: 12, children: /* @__PURE__ */ n(
              Gr,
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
                onCellClick: ut,
                columns: mi,
                pageSizeOptions: gi,
                pagination: !0,
                rowCount: w.length,
                rows: w,
                getRowId: Se,
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
            /* @__PURE__ */ n(fe, { size: 12, children: /* @__PURE__ */ n(ar, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ n(
              it,
              {
                type: "button",
                startIcon: /* @__PURE__ */ n(dr, {}),
                color: "error",
                variant: "contained",
                size: "small",
                onClick: tt,
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
        open: ae,
        onConfirm: () => L(!1),
        title: "",
        okText: e("Ok", c),
        cancelText: "",
        children: [
          '"',
          rt,
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
  const d = lr(a, zr), h = be(
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
  return /* @__PURE__ */ n(hr, { variant: "standard", className: "w-100", children: /* @__PURE__ */ n(
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
  Yr,
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
}, Di = 10, wi = /(\w+)( ASC| DESC)?/i, Ti = 6e4, xe = {
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
], Ai = (e) => e.value ? /* @__PURE__ */ n(Yo, { style: { color: "green" } }) : /* @__PURE__ */ n(dr, { style: { color: "gray" } }), Rr = Ht("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), kt = Ht(we)({
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
    apiRef: F,
    gridColumns: k,
    setIsGridPreferenceFetched: J,
    tTranslate: j,
    tOpts: ee,
    filterModel: ae
  } = e, L = t.customAddText || (t.title ? `Add ${t.title}` : "Add"), te = ae?.items?.length || 0;
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
          !i && s && !a && /* @__PURE__ */ n(kt, { startIcon: d ? /* @__PURE__ */ n(Or, {}) : null, onClick: h, size: "medium", variant: "contained", children: L }),
          C.length && r.records.length ? /* @__PURE__ */ n(
            kt,
            {
              onClick: p,
              size: "medium",
              variant: "contained",
              children: u.current.size === r.records.length ? j("Deselect All", ee) : j("Select All", ee)
            }
          ) : /* @__PURE__ */ n(me, {}),
          l && /* @__PURE__ */ n(kt, { startIcon: d ? /* @__PURE__ */ n(Or, {}) : null, onClick: y, size: "medium", variant: "contained", children: j("Assign", ee) }),
          c && /* @__PURE__ */ n(kt, { startIcon: d ? /* @__PURE__ */ n(So, {}) : null, onClick: f, size: "medium", variant: "contained", children: j("Remove", ee) })
        ] }),
        /* @__PURE__ */ v(Pi, { ...e, children: [
          E.showColumnsOrder && /* @__PURE__ */ n(
            xo,
            {
              render: (Z) => /* @__PURE__ */ n(
                we,
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
                  we,
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
            /* @__PURE__ */ n(we, { startIcon: /* @__PURE__ */ n(To, {}), onClick: x, size: "small", children: j("CLEAR FILTER", ee) })
          ] }),
          E.export && /* @__PURE__ */ n(vi, { handleExport: D, showPivotExportBtn: t.pivotApi, exportFormats: t.exportFormats || {}, tTranslate: j, tOpts: ee }),
          w && /* @__PURE__ */ n(yi, { preferenceName: w, gridRef: F, columns: k, setIsGridPreferenceFetched: J })
        ] })
      ]
    }
  );
}, Nr = $r(({
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
  showFullScreenLoader: F,
  customFilters: k,
  onRowDoubleClick: J,
  onRowClick: j = () => {
  },
  gridStyle: ee,
  reRenderKey: ae,
  additionalFilters: L,
  onCellDoubleClickOverride: te,
  onAddOverride: Z,
  dynamicColumns: N,
  readOnly: Y = !1,
  baseFilters: H = [],
  ...R
}) => {
  const [K, Q] = M({ pageSize: Di, page: 0 }), [X, Ce] = M({ recordCount: 0, records: [], lookups: {} }), [re, Ee] = M(!0), Te = !!c, tt = x, [Le, ke] = M([]), [_e, $e] = M(!1), [Se, dt] = M(null), xt = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [ut, rt] = M(!1), he = qt(), P = e.paginationMode === U.client ? U.client : U.server, { t: $, i18n: ve } = mr(), m = { t: $, i18n: ve }, [se, Ne] = M(""), [Oe, qe] = M(Ei(o || e.defaultSort, U, wi)), ge = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (ge.items = [], e.defaultFilters.forEach((g) => {
    ge.items.push(g);
  }));
  const [ce, ne] = M({ ...ge }), { navigate: de, getParams: pt, useParams: Ae, pathname: Ke } = Kt(), { id: Ye } = Ae() || pt, Be = Ye?.split("-")[0], nt = Ur(), { idProperty: I = "id", showHeaderFilters: ye = !0, disableRowSelectionOnClick: oe = !0, hideBackButton: Je = !1, hideTopFilters: Ze = !0, updatePageTitle: ft = !0, isElasticScreen: Dt = !1, navigateBack: It = !1, selectionApi: mt = {} } = e, Ve = e.readOnly === !0 || Y, un = e.allowDoubleClick === !1, Yt = Tr(X), pn = e.showAddIcon === !0, fn = e.columns.filter(({ link: g }) => !!g).map((g) => g.link), [yr, br] = M(!1), { stateData: Ue, dispatchData: Pe, formatDate: Jt, removeCurrentPreferenceName: mn, getAllSavedPreferences: hn, applyDefaultPreferenceIfExists: gn } = We(), { timeZone: Zt } = Ue, wt = { ...U.permissions, ...Ue.gridSettings.permissions, ...e.permissions, ...C }, { Username: yn } = Ue?.getUserData ? Ue.getUserData : {}, {
    gridSettings: {
      permissions: {
        routesWithNoChildRoute: bn = [],
        Url: Tt,
        withControllersUrl: Qt,
        defaultPreferenceEnums: Cn,
        preferenceApi: Xt,
        historyScreenName: En = "historyScreen",
        showPageTitle: vn = !0
      } = {}
    } = {},
    currentPreference: xn
  } = Ue, Dn = ["isEmpty", "isNotEmpty", "isAnyOf"], wn = Ue.getUserData || {}, Cr = e.columns.find((g) => g.type === "fileUpload")?.field || "", Tn = { add: wt.add, edit: wt.edit, delete: wt.delete }, { canAdd: Sn, canEdit: Er, canDelete: On } = Xr({ userData: wn, model: e, userDefinedPermissions: Tn }), b = e.tTranslate ?? ((g) => g), { addUrlParamKey: er, searchParamKey: Mt, hideBreadcrumb: An = !1, tableName: Pn, showHistory: Fn = !0, hideBreadcrumbInGrid: In = !1, breadcrumbColor: Mn, disablePivoting: Rn = !1, columnHeaderHeight: Nn = 70 } = e, Bn = e.gridTitle || e.title, Rt = e.preferenceId || e.module?.preferenceId, ht = new URLSearchParams(window.location.search), vr = ht.has("baseData") && ht.get("baseData"), Ln = (() => {
    if (vr) {
      const g = JSON.parse(vr);
      if (typeof g === U.object && g !== null)
        return g;
    }
    return {};
  })(), pe = Tr(/* @__PURE__ */ new Set()), kn = ({ row: g }) => {
    const S = g[I];
    pe.current.has(S) ? pe.current.delete(S) : pe.current.add(S), ke(Array.from(pe.current));
  }, _n = (g) => {
    const S = g.row[I], [O, T] = M(pe.current.has(S));
    return ue(() => {
      T(pe.current.has(S));
    }, [g.row, pe.current.size]), /* @__PURE__ */ n(
      Kr,
      {
        onClick: (V) => {
          V.stopPropagation(), kn(g);
        },
        checked: O,
        color: "primary",
        inputProps: { "aria-label": "checkbox" }
      }
    );
  }, tr = {
    radio: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    date: {
      valueFormatter: (g) => Jt({ value: g, useSystemFormat: !0, showOnlyDate: !1, state: Ue.dateTime, timeZone: Zt }),
      filterOperators: Lt({ columnType: "date", label: b("Value", m) })
    },
    dateTime: {
      valueFormatter: (g) => Jt({ value: g, useSystemFormat: !1, showOnlyDate: !1, state: Ue.dateTime, timeZone: Zt }),
      filterOperators: Lt({ columnType: "datetime", label: b("Value", m) })
    },
    dateTimeLocal: {
      valueFormatter: (g) => Jt({ value: g, useSystemFormat: !1, showOnlyDate: !1, state: Ue.dateTime, timeZone: Zt }),
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
    Yt.current = X;
  }, [X]), ue(() => {
    if (!k || !Object.keys(k).length) return;
    if (k.clear) {
      ne({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
      return;
    }
    const g = Object.entries(k).reduce((S, [O, T]) => (O === U.startDate || O === U.endDate ? S.push(T) : O in k && S.push({ field: O, value: T, operator: "equals", type: "string" }), S), []);
    ne({ items: g, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [k]);
  const $n = ({ field: g }) => (Yt.current.lookups || {})[nr[g].lookup] || [];
  ue(() => {
    R.isChildGrid || !Ze || Pe({
      type: z.PASS_FILTERS_TO_HEADER,
      payload: {
        filterButton: null,
        hidden: { search: !0, operation: !0, export: !0, print: !0, filter: !0 }
      }
    });
  }, []);
  const { customActions: rr = [] } = e, { gridColumns: Qe, pinnedColumns: Vn, lookupMap: nr } = be(() => {
    let g = t || e.gridColumns || e.columns;
    N && (g = [...N, ...g]);
    const S = { left: [Co.field], right: [] }, O = [], T = {};
    for (const B of g) {
      if (B.gridLabel === null || i && B.lookup === i || B.type === U.oneToMany && B.countInList === !1) continue;
      const W = {};
      if (B.type === U.oneToMany && (W.type = "number", W.field = B.field.replace(/s$/, "Count")), tr[B.type] && Object.assign(W, tr[B.type]), W.valueOptions === U.lookup || B.type === U.boolean) {
        let G = [];
        W.valueOptions === U.lookup && (W.valueOptions = $n, G = [...Vr(), ...Eo()].filter((St) => ["is", "not", "isAnyOf"].includes(St.value))), B.type === U.boolean && (G = vo()), W.filterOperators = G.map((_) => ({
          ..._,
          InputComponent: _.InputComponent ? (St) => /* @__PURE__ */ n(
            Ci,
            {
              column: {
                ...B,
                ...B.type === U.boolean ? {
                  customLookup: [
                    { value: !0, label: "Yes" },
                    { value: !1, label: "No" }
                  ]
                } : {},
                dataRef: Yt
              },
              ...St,
              autoHighlight: !0
            }
          ) : void 0
        }));
      }
      (B.linkTo || B.link) && (W.cellClassName = "mui-grid-linkColumn");
      const q = b(B.gridLabel || B.label, m);
      O.push({ headerName: q, description: q, ...B, ...W }), B.pinned && S[B.pinned === U.right ? U.right : U.left].push(B.field), T[B.field] = B;
    }
    let A = e.standard;
    A === !0 && (A = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), A && typeof A === U.object && Oi.forEach(({ key: B, field: W, type: q, header: G }) => {
      if (A[B] === !0) {
        const _ = { field: W, type: q, headerName: G, width: 200 };
        q === U.dateTime && (_.filterOperators = Lt({ columnType: "date" }), _.valueFormatter = tr.dateTime.valueFormatter, _.keepLocal = !0), O.push(_);
      }
    });
    const V = [];
    return !Te && !Ve && (Er && V.push(/* @__PURE__ */ n(ze, { icon: /* @__PURE__ */ n(Fe, { title: "Edit", children: /* @__PURE__ */ n(cr, {}) }), "data-action": xe.Edit, label: "Edit", color: "primary" })), wt.copy && V.push(/* @__PURE__ */ n(ze, { icon: /* @__PURE__ */ v(Fe, { title: "Copy", children: [
      /* @__PURE__ */ n(Sr, {}),
      " "
    ] }), "data-action": xe.Copy, label: "Copy", color: "primary" })), On && V.push(/* @__PURE__ */ n(ze, { icon: /* @__PURE__ */ v(Fe, { title: "Delete", children: [
      /* @__PURE__ */ n(jr, {}),
      " "
    ] }), "data-action": xe.Delete, label: "Delete", color: "error" })), Fn && V.push(/* @__PURE__ */ n(ze, { icon: /* @__PURE__ */ v(Fe, { title: "History", children: [
      /* @__PURE__ */ n(aa, {}),
      " "
    ] }), "data-action": xe.History, label: "History", color: "primary" })), rr.length && rr.forEach(({ icon: B, action: W, color: q }) => {
      V.push(
        /* @__PURE__ */ n(
          ze,
          {
            icon: /* @__PURE__ */ n(Fe, { title: W, children: Si[B] || /* @__PURE__ */ n(Sr, {}) }),
            "data-action": W,
            label: W,
            color: q || "primary"
          }
        )
      );
    })), Cr.length && V.push(/* @__PURE__ */ n(ze, { icon: /* @__PURE__ */ v(Fe, { title: "Download document", children: [
      /* @__PURE__ */ n(ia, {}),
      " "
    ] }), "data-action": xe.Download, label: "Download document", color: "primary" })), V.length && O.push({
      field: "actions",
      type: "actions",
      label: "",
      width: V.length * 50,
      hidable: !1,
      getActions: (B) => {
        const W = [...V];
        if (Er && !Ve) {
          const q = B.row.canEdit === !1;
          W[0] = /* @__PURE__ */ n(
            ze,
            {
              icon: /* @__PURE__ */ n(Fe, { title: "Edit", children: /* @__PURE__ */ n(cr, {}) }),
              "data-action": xe.Edit,
              label: "Edit",
              color: "primary",
              disabled: q
            }
          );
        }
        return W;
      }
    }), S.right.push("actions"), { gridColumns: O, pinnedColumns: S, lookupMap: T };
  }, [t, e, i, C, Te, N]), Nt = (g = "list", S = {}, O, T, A, V) => {
    const { pageSize: B, page: W } = K;
    let q = e.controllerType, G = `${q === "cs" ? Qt : Tt || ""}${e.api || r}`;
    A && (G = `${Qt}${e.pivotApi}`, q = "cs"), (p || l) && (S[p ? "include" : "exclude"] = Array.isArray(u) ? u.join(",") : u);
    const _ = { ...ce };
    if (D?.items?.length > 0) {
      const { columnField: ot, operatorValue: or } = D.items[0] || {}, oo = U.chartFilterFields[ot];
      _.items = [{ field: oo, operator: or, isChartFilter: !1 }], JSON.stringify(ce) !== JSON.stringify(_) && (ne({ ..._ }), D.items.length = 0);
    }
    e.joinColumn && Be && H.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(Be) }), L && (_.items = [..._.items || [], ...L]), S = { ...S, ...R.extraParams }, (!_.items.length || _.items.every((ot) => "value" in ot && ot.value !== void 0)) && ka({
      action: g,
      page: O ? 0 : W,
      pageSize: O ? 1e6 : B,
      sortModel: Oe,
      filterModel: _,
      controllerType: q,
      api: G,
      setIsLoading: Ee,
      setData: Ce,
      gridColumns: Qe,
      model: e,
      parentFilters: s,
      extraParams: S,
      setError: he.showError,
      contentType: O,
      columns: T,
      template: A ? e.exportTemplate : null,
      configFileName: A ? e.configFileName : null,
      dispatchData: Pe,
      showFullScreenLoader: F,
      history: de,
      baseFilters: H,
      isElasticExport: V
    });
  }, Bt = ({ id: g, record: S = {}, mode: O }) => {
    if (a) {
      en({ id: g, api: r || e.api, setIsLoading: Ee, setActiveRecord: a, model: e, parentFilters: s, where: d });
      return;
    }
    let T = Ke;
    T.endsWith("/") || (T += "/"), O === "copy" ? (T += "0-" + g, Pe({ type: "UPDATE_FORM_MODE", payload: "copy" })) : (T += g, Pe({ type: "UPDATE_FORM_MODE", payload: "" })), er && (ht.set(er, S[er]), T += `?${ht.toString()}`), de(T);
  }, Un = async ({ documentLink: g, fileName: S }) => {
    if (g)
      try {
        const O = await fetch(g);
        if (!O.ok)
          throw new Error(`Failed to fetch the file: ${O.statusText}`);
        const T = await O.blob(), A = window.URL.createObjectURL(T), V = document.createElement("a");
        V.href = A;
        const B = g.split("/").pop() || `downloaded-file.${T.type.split("/")[1] || "txt"}`;
        V.download = S || B, document.body.appendChild(V), V.click(), document.body.removeChild(V), window.URL.revokeObjectURL(A);
      } catch {
        window.open(g);
      }
  }, zn = async (g, S, O) => {
    let T = g.field === e.linkColumn ? xe.Edit : null;
    if (!T && g.field === U.actions && (T = O?.action, !T)) {
      const q = S.target.closest("button");
      q && (T = q.dataset.action);
    }
    const { row: A } = g;
    if (!Ve) {
      if (E && typeof await E({ cellParams: g, event: S, details: O }) !== U.boolean)
        return;
      const q = nr[g.field] || {};
      if (q.linkTo) {
        de({
          pathname: sr.replaceTags(q.linkTo, A)
        });
        return;
      }
      switch (T) {
        case xe.Edit:
          return Bt({ id: A[I], record: A });
        case xe.Copy:
          return Bt({ id: A[I], mode: "copy" });
        case xe.Delete:
          $e(!0), dt({ name: A[e.linkColumn], id: A[I] });
          break;
        case xe.History:
          return de(`${En}?tableName=${Pn}&id=${A[I]}&breadCrumb=${Mt ? ht.get(Mt) : Bn}`);
        default:
          const G = rr.find((_) => _.action === T && typeof _.onClick === U.function);
          if (G) {
            G.onClick({ row: A, navigate: de });
            return;
          }
          break;
      }
    }
    if (T === xe.Download && Un({ documentLink: A[Cr], fileName: A.FileName }), !fn.length)
      return;
    const { row: V } = g, B = nr[g.field] || {}, W = {
      pathname: sr.replaceTags(B.linkTo, V)
    };
    e.addRecordToState && (W.state = V), de(W);
  }, Gn = async function() {
    await tn({ id: Se.id, api: `${e.controllerType === "cs" ? Qt : Tt}${e.api || r}`, setIsLoading: Ee, setError: he.showError, setErrorMessage: Ne }) === !0 ? ($e(!1), he.showMessage("Record Deleted Successfully."), Nt()) : $e(!1);
  }, xr = () => {
    Ne(null), $e(!1);
  }, jn = (g) => (typeof R.processRowUpdate == "function" && R.processRowUpdate(g, X), g), Hn = (g) => {
    if (g.row.canEdit === !1)
      return;
    const { row: S } = g;
    if (typeof te === U.function) {
      te(g);
      return;
    }
    if (!Ve && !un && !y && Bt({ id: S[I], record: S }), Ve && e.rowRedirectLink) {
      const O = {
        pathname: sr.replaceTags(e.rowRedirectLink, S)
      };
      e.addRecordToState && (O.state = S), de(O);
    }
    typeof J === U.function && J(g);
  }, Wn = async () => {
    if (pe.current.size < 1) {
      he.showError("Please select at least one record to proceed");
      return;
    }
    const g = Array.from(pe.current), S = new Map(X.records.map((T) => [T[I], T]));
    let O = g.map((T) => ({ ...Ln, ...S.get(T) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (O = O.map(
      (T) => Object.fromEntries(e.selectionUpdateKeys.map((A) => [A, T[A]]))
    ));
    try {
      const T = await rn({
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
      pe.current.clear(), Ee(!1), rt(!1);
    }
  }, qn = () => {
    if (mt.length > 0) {
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
  }, Kn = () => {
    if (!ce?.items?.length) return;
    const g = JSON.parse(JSON.stringify(U.gridFilterModel));
    ne(g), w && w();
  }, Dr = ({ unassign: g, assign: S }) => {
    const O = Array.isArray(u) ? u : u.length ? u.split(",") : [], T = g ? O.filter((A) => !g.includes(parseInt(A))) : [...O, ...S];
    c(typeof u === U.string ? T.join(",") : T);
  }, Yn = () => {
    Dr({ assign: Le });
  }, Jn = () => {
    Dr({ unassign: Le });
  }, Zn = () => {
    pe.current.size === X.records.length ? (pe.current.clear(), ke([])) : (X.records.forEach((g) => {
      pe.current.add(g[I]);
    }), ke(X.records.map((g) => g[I])));
  }, Qn = async ({ preferenceName: g, Username: S, preferenceApi: O, defaultPreferenceEnums: T }) => {
    mn({ dispatchData: Pe });
    const A = await hn({ preferenceName: g, history: de, dispatchData: Pe, Username: S, preferenceApi: O, defaultPreferenceEnums: T });
    gn({ preferenceName: g, dispatchData: Pe, gridRef: nt, setIsGridPreferenceFetched: br, defaultPreferenceEnums: T, preferences: A });
  };
  ue(() => {
    !Rt || !Xt || Qn({ preferenceName: Rt, Username: yn, preferenceApi: Xt, defaultPreferenceEnums: Cn });
  }, [Xt]);
  const Xn = (g) => g[I], eo = (g) => {
    if (X?.recordCount > Ti) {
      he.showMessage("Cannot export more than 60k records, please apply filters or reduce your results using filters");
      return;
    }
    const { orderedFields: S, columnVisibilityModel: O, lookup: T } = nt.current.state.columns, A = g.target.dataset.isPivotExport === "true", V = Object.keys(O).filter((G) => O[G] === !1), B = new Set(Qe.filter((G) => G.exportable === !1).map((G) => G.field)), W = S.filter(
      (G) => !B.has(G) && !V.includes(G) && G !== "__check__" && G !== "actions"
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
      Dt
    );
  };
  ue(() => {
    !Tt || Rt && !yr || Nt();
  }, [K, Oe, ce, r, Qe, e, s, p, u, l, D, yr, ae, Tt]), ue(() => {
    if (!(R.isChildGrid || Te || !ft))
      return Pe({ type: z.PAGE_TITLE_DETAILS, payload: { icon: "", titleHeading: e.pageTitle || e.title, title: e.title } }), () => {
        Pe({
          type: z.PAGE_TITLE_DETAILS,
          payload: null
        });
      };
  }, []), ue(() => {
    if (R.isChildGrid)
      return;
    let g = Ke;
    if (Je || bn.includes(g)) {
      Pe({
        type: z.SET_PAGE_BACK_BUTTON,
        payload: { status: !1, backRoute: "" }
      });
      return;
    }
    g = g.split("/"), g.pop(), g = g.join("/"), Pe({
      type: z.SET_PAGE_BACK_BUTTON,
      payload: { status: !0, backRoute: g }
    });
  }, [re]);
  const to = (g) => {
    const { items: S } = g, O = S.map((A) => {
      const { field: V, operator: B, type: W, value: q } = A, G = Qe.find((ot) => ot.field === V) || {}, _ = G.type === U.number;
      return _ && q < 0 ? { ...A, value: null } : Dn.includes(B) || _ && !isNaN(q) || !_ ? (Dt && Qe.filter((or) => or.field === V)[0]?.isKeywordField && (A.filterField = `${A.field}.keyword`), A.value = ["isEmpty", "isNotEmpty"].includes(B) ? null : q, { ...A, type: G.type }) : { field: V, operator: B, type: W, value: _ ? null : q };
    });
    g.items = O, ne(g), (g.items.findIndex((A) => A.isChartFilter && !["isEmpty", "isNotEmpty"].includes(A.operator)) === -1 || D?.items?.length && (!g.items.length || D.items.findIndex((A) => A.columnField === g.items[0]?.field) > -1)) && w && w();
  }, ro = (g) => {
    const S = g.map((O) => {
      const T = Qe.filter((B) => B.field === O.field)[0] || {}, A = Dt && T.isKeywordField, V = { ...O, filterField: A ? `${O.field}.keyword` : O.field };
      return T.dataIndex && (V.filterField = T.dataIndex), V;
    });
    qe(S);
  }, wr = h || e.gridTitle || e.title, no = Mt ? [{ text: ht.get(Mt) || wr }] : [{ text: wr }];
  return /* @__PURE__ */ v(me, { children: [
    vn && /* @__PURE__ */ n(
      an,
      {
        navigate: de,
        showBreadcrumbs: !An && !In,
        breadcrumbs: no,
        enableBackButton: It,
        breadcrumbColor: Mn
      }
    ),
    /* @__PURE__ */ v(Me, { style: ee || f, children: [
      /* @__PURE__ */ n(Me, { sx: { display: "flex", maxHeight: "80vh", flexDirection: "column" }, children: /* @__PURE__ */ n(
        Gr,
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
          headerFilters: ye,
          unstable_headerFilters: ye,
          checkboxSelection: Te,
          loading: re,
          className: "pagination-fix",
          onCellClick: zn,
          onCellDoubleClick: Hn,
          columns: Qe,
          paginationModel: K,
          pageSizeOptions: U.pageSizeOptions,
          onPaginationModelChange: Q,
          pagination: !0,
          rowCount: X.recordCount,
          rows: X.records,
          sortModel: Oe,
          paginationMode: P,
          sortingMode: P,
          filterMode: P,
          processRowUpdate: jn,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: ro,
          onFilterModelChange: to,
          rowSelection: Le,
          onRowSelectionModelChange: ke,
          filterModel: ce,
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
              forAssignment: Te,
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
              apiRef: nt,
              gridColumns: Qe,
              setIsGridPreferenceFetched: br,
              tTranslate: b,
              tOpts: m,
              idProperty: I,
              filterModel: ce
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
      se && /* @__PURE__ */ v(je, { open: !!se, onConfirm: xr, onCancel: xr, title: "Info", hideCancelButton: !0, children: [
        " ",
        se
      ] }),
      _e && !se && /* @__PURE__ */ n(je, { open: _e, onConfirm: Gn, onCancel: () => $e(!1), title: "Confirm Delete", children: /* @__PURE__ */ v(Rr, { children: [
        b("Are you sure you want to delete", m),
        " ",
        Se.name && /* @__PURE__ */ n(Fe, { style: { display: "inline" }, title: Se.name, arrow: !0, children: Se.name.length > 30 ? `${Se.name.slice(0, 30)}...` : Se.name }),
        " ?"
      ] }) }),
      ut && /* @__PURE__ */ n(
        je,
        {
          open: ut,
          onConfirm: Wn,
          onCancel: () => rt(!1),
          title: "Confirm Add",
          children: /* @__PURE__ */ v(Rr, { children: [
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
          Kr,
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
function sn(e, t) {
  const [r, o] = M(e);
  return ue(() => {
    const a = setTimeout(() => {
      o(e);
    }, t);
    return () => {
      clearTimeout(a);
    };
  }, [e, t]), r;
}
const Mi = 47, Ri = 58, Ni = 37, Bi = 40, Li = [8, 46, 9, 27, 13], Br = ({ value: e, state: t }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const r = e.slice(1, -1);
    return t[r] !== void 0 ? t[r] : e;
  }
  return e;
}, ki = ({ column: e, otherProps: t, formik: r, field: o, ...a }) => {
  const { min: s, max: i } = e, d = Et(), [h, C] = M(r.values[o]), u = sn(h, 400), p = be(
    () => Math.max(0, Br({ value: s, state: r.values })),
    [s, r.values]
  ), l = be(
    () => Br({ value: i, state: r.values }),
    [i, r.values]
  );
  ue(() => {
    if (u !== r.values[o]) {
      const c = Number(u);
      if (isNaN(c))
        return;
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
        Hr,
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
  return /* @__PURE__ */ fr(
    Wr,
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
  return /* @__PURE__ */ fr(
    ur,
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
  return e.isUtc && (a = ie.utc(a).utcOffset(ie().utcOffset(), !0).format()), /* @__PURE__ */ fr(
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
function ln({ column: e, formik: t, lookups: r, dependsOn: o = [], isAutoComplete: a = !1, userSelected: s, model: i }) {
  const [d, h] = M([]), { stateData: C } = We(), u = C?.gridSettings?.permissions?.Url || "", p = be(() => `${u}${i?.api || ""}`, [u, i?.api]), l = be(() => {
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
  const d = bt.useRef(!1), { placeHolder: h } = e, C = ln({ column: e, formik: r, lookups: o, dependsOn: a, userSelected: d, model: s }), u = Et(), p = be(() => {
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
            children: Array.isArray(C) && C.map((y) => /* @__PURE__ */ n(Yr, { value: y.value, disabled: y.isDisabled, children: y.label }, y.value))
          }
        ),
        /* @__PURE__ */ n(Ct, { children: r.touched[t] && r.errors[t] })
      ]
    },
    t
  );
}), Lr = Ht("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), ji = ({ component: e, name: t, formik: r, field: o, column: a }) => {
  const { value: s } = r.getFieldProps(t || o), { setFieldValue: i } = r, d = e || a.relation, h = Ft((C) => {
    i(t || o, C);
  }, [i, t, o]);
  return /* @__PURE__ */ v("div", { children: [
    /* @__PURE__ */ n(Lr, { children: `Available ${a.label}` }),
    /* @__PURE__ */ n(d, { selected: s, available: !0, onAssignChange: h, disableCellRedirect: a.disableCellRedirect, readOnly: a.readOnly }),
    /* @__PURE__ */ n(Lr, { children: `Assigned ${a.label}` }),
    /* @__PURE__ */ n(d, { selected: s, assigned: !0, onAssignChange: h, disableCellRedirect: a.disableCellRedirect, readOnly: a.readOnly })
  ] });
}, Hi = ({ field: e, formik: t, orientation: r = "row", label: o, lookups: a, fieldConfigs: s = {}, mode: i, ...d }) => {
  const h = (y) => {
    t.setFieldValue(e, y.target.value);
  }, C = a ? a[d.column.lookup] : [], u = Et(), p = t.touched[e] && !!t.errors[e], l = i !== "copy" && s.disabled;
  return /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ v(hr, { component: "fieldset", error: p, children: [
      /* @__PURE__ */ n(jo, { component: "legend", children: o }),
      /* @__PURE__ */ n(
        gr,
        {
          row: r === "row",
          "aria-label": o,
          name: e,
          value: t.values[e],
          onChange: h,
          children: C?.map((y, c) => /* @__PURE__ */ n(
            st,
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
  const C = ln({ column: e, formik: r, lookups: o, dependsOn: a, model: d, isAutoComplete: !0 });
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
          Jr,
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
  const { setFieldValue: a } = r, { value: s } = r.getFieldProps(e || t), i = "1000001", d = "0111110", h = "0".repeat(7), [C, u] = M(s || h), [p, l] = M(() => s ? s === i ? i : s === d ? d : "Custom" : ""), [y, c] = M(!1), f = Ft((D) => {
    if (Array.isArray(D)) {
      let w = h;
      for (const F of D)
        w = w.substring(0, F) + "1" + w.substring(F + 1);
      u(w), a(e || t, w), c(!0);
    } else {
      let w = y ? h : C;
      const F = w.slice(0, D) + (w[D] === "1" ? "0" : "1") + w.slice(D + 1);
      u(F), a(e || t, F), l("Custom"), c(!1);
    }
  }, [y, h, C, e, t, a]), E = Et(), x = r.touched[t] && !!r.errors[t];
  return /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ n(hr, { component: "fieldset", error: x, children: /* @__PURE__ */ v(
      gr,
      {
        row: !0,
        name: e || t,
        value: p,
        onChange: (D) => {
          const w = D.target.value;
          l(w), w !== "Custom" ? (u(w), a(e || t, w), c(!0)) : (u(h), a(e || t, h), c(!1));
        },
        children: [
          /* @__PURE__ */ n(st, { value: i, control: /* @__PURE__ */ n(yt, {}), label: "Weekends (Sat - Sun)", onClick: () => f([0, 6]) }),
          /* @__PURE__ */ n(st, { value: d, control: /* @__PURE__ */ n(yt, {}), label: "Weekdays (Mon - Fri)", onClick: () => f([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ n(st, { value: "Custom", control: /* @__PURE__ */ n(yt, {}), label: "Specific days" }),
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
          Jr,
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
  return s !== "copy" && (C = a?.disabled), /* @__PURE__ */ n(ct, { sx: { minHeight: 350 }, children: /* @__PURE__ */ n(
    Ta,
    {
      selectedItems: h,
      onSelectedItemsChange: (p, l) => {
        r.setFieldValue(t, l?.join(", ") || "");
      },
      disabled: C,
      multiSelect: !0,
      checkboxSelection: !0,
      children: d.map((p) => /* @__PURE__ */ n(Fr, { itemId: p.value, label: p.label, children: p.children.map((l) => /* @__PURE__ */ n(Fr, { itemId: l.value, label: l.label }, l.value)) }, p.value))
    }
  ) });
}
const rs = { maxLength: 500 }, { errorMapping: ns } = lt, os = 1024 * 1024;
function as({ column: e, field: t, formik: r }) {
  const o = r.values[t] || "", { stateData: a } = We(), { maxSize: s, formats: i } = e, { uploadApi: d, mediaApi: h, Url: C } = a?.gridSettings?.permissions, [u, p] = M({
    isExternal: "no",
    selectedFile: null
  }), [l, y] = M(!1), c = qt(), { getParams: f, useParams: E } = Kt(), { associationId: x } = E() || f, D = x?.split("-")[0] || 1, w = (L) => {
    const te = L.target.value;
    p({
      ...u,
      isExternal: te,
      selectedFile: null
    }), r.setFieldValue(t, r.values[t]);
  }, F = (L) => {
    r.setFieldValue(t, L.target.value);
  }, k = (L) => {
    const te = L.target.files[0];
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
        const L = new FormData();
        L.append("file", u.selectedFile), L.append("DocumentGroupId", r.values.DocumentGroupId), L.append("AssociationId", D);
        const Z = (await vt({
          method: "POST",
          url: d,
          data: L,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!Z.success) {
          c.showError(Z.message || "Upload failed");
          return;
        }
        const N = h + "/" + Z.filePath;
        r.setFieldValue(t, N);
      } catch (L) {
        const te = (L.message.match(/status code (\d{3})/) || [])[1];
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
  const ee = r.values[t]?.length > (e.max || rs.maxLength), ae = ee ? "red" : "";
  return /* @__PURE__ */ v(Me, { children: [
    /* @__PURE__ */ v(Me, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(Re, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
      /* @__PURE__ */ v(
        gr,
        {
          row: !0,
          value: u.isExternal,
          onChange: w,
          "aria-label": "is-external-link",
          name: "is-external-link",
          children: [
            /* @__PURE__ */ n(st, { value: "yes", control: /* @__PURE__ */ n(yt, {}), label: "Yes" }),
            /* @__PURE__ */ n(st, { value: "no", control: /* @__PURE__ */ n(yt, {}), label: "No" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ v(Me, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(Re, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ v(Me, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        u.isExternal === "yes" ? /* @__PURE__ */ n(
          Vt,
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
          Vt,
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
    u.isExternal === "no" && /* @__PURE__ */ v(Me, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ v(
        it,
        {
          variant: "outlined",
          component: "label",
          disabled: l,
          children: [
            "Choose File",
            /* @__PURE__ */ n("input", { type: "file", hidden: !0, onChange: k })
          ]
        }
      ),
      u.selectedFile && /* @__PURE__ */ n(Fe, { title: u.selectedFile.name, arrow: !0, children: /* @__PURE__ */ n(Re, { variant: "body2", children: u.selectedFile.name.length > 20 ? `${u.selectedFile.name.substring(0, 20)}...` : u.selectedFile.name }) }),
      /* @__PURE__ */ n(
        it,
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
  const [r, o] = Ge.useState({}), a = sn(r, 300);
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
}, kr = { paddingTop: "2.5px", paddingBottom: "2.5px" }, ls = Da("span")({
  color: "red !important"
}), cs = ({ tabColumns: e, model: t, formik: r, data: o, onChange: a, combos: s, lookups: i, fieldConfigs: d, mode: h, handleSubmit: C }) => {
  const [u, p] = Ge.useState(/* @__PURE__ */ new Set()), { activeStep: l, setActiveStep: y } = Ge.useContext(dn), c = {};
  for (let F = 0, k = t.columns.length; F < k; F++) {
    const { field: J, skip: j } = t.columns[F];
    j && (c[j.step] = r.values[J]);
  }
  const f = (F) => u.has(F) || c[F], E = () => {
    for (let F = l + 1; F < e.length; F++)
      if (!f(F))
        return !1;
    return !0;
  }, x = () => {
    let F = l + 1;
    for (; c[F]; )
      F++;
    p((k) => new Set(k).add(l)), F >= e.length || E() ? C() : y(F);
  }, D = () => {
    let F = l - 1;
    for (; c[F] && F > 0; )
      F--;
    y(F);
  };
  if (!e?.length)
    return null;
  const w = e[l];
  return /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ n(Ca, { activeStep: l, sx: { marginBottom: "20px" }, children: e.map(({ title: F, key: k }, J) => /* @__PURE__ */ n(Ea, { completed: f(J), children: /* @__PURE__ */ n(va, { children: /* @__PURE__ */ n(Re, { sx: { fontSize: "20px" }, children: F }) }) }, k)) }),
    /* @__PURE__ */ v(Ge.Fragment, { children: [
      /* @__PURE__ */ n(cn, { formElements: w.items, model: t, formik: r, data: o, onChange: a, combos: s, lookups: i, fieldConfigs: d, mode: h }),
      /* @__PURE__ */ v(ct, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        l !== 0 ? /* @__PURE__ */ v(we, { color: "inherit", disabled: l === 0, onClick: D, variant: "contained", sx: { mr: 2 }, children: [
          " ",
          "Back"
        ] }) : null,
        /* @__PURE__ */ n(we, { onClick: x, variant: "contained", children: E() ? "Finish" : "Next" })
      ] })
    ] })
  ] });
}, cn = ({ formElements: e, model: t, formik: r, data: o, onChange: a, combos: s, lookups: i, fieldConfigs: d, mode: h, isAdd: C }) => e?.length ? /* @__PURE__ */ n(me, { children: e.map(({ Component: u, column: p, field: l, label: y, otherProps: c }, f) => {
  const E = typeof p.relation == "function";
  return /* @__PURE__ */ v(ir, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: E ? "flex-start" : "center", children: [
    p?.showLabel !== !1 ? /* @__PURE__ */ n(ir, { size: { xs: 3 }, sx: kr, children: /* @__PURE__ */ v(Re, { sx: { fontSize: "16px", fontWeight: "bold" }, children: [
      p.label || l,
      ": ",
      p.required && /* @__PURE__ */ n(ls, { children: "*" })
    ] }) }) : null,
    /* @__PURE__ */ n(ir, { size: { xs: E ? 12 : 9 }, sx: kr, children: /* @__PURE__ */ n(u, { isAdd: C, model: t, fieldConfigs: d[l], mode: h, column: p, field: l, label: y, formik: r, data: o, onChange: a, combos: s, lookups: i, ...c }) })
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
  const u = lt.emptyIdValues.includes(i), { formElements: p, tabColumns: l } = Ge.useMemo(() => {
    const y = e.formConfig?.showTabbed, c = new URLSearchParams(window.location.search), { formElements: f, tabColumns: E } = ds({ columns: e.columns, tabs: y ? e.tabs : {}, id: i, searchParams: c });
    return { formElements: f, tabColumns: E, showTabs: y && E.length > 0 };
  }, [e]);
  return /* @__PURE__ */ v("div", { children: [
    /* @__PURE__ */ n(cn, { isAdd: u, formElements: p, model: e, formik: t, data: r, onChange: a, combos: o, lookups: s, fieldConfigs: d, mode: h }),
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
      children: r === o && /* @__PURE__ */ n(ct, { sx: { p: 3 }, children: t })
    }
  );
}
function fs(e) {
  return {
    id: `simple-tab-${e}`,
    "aria-controls": `simple-tabpanel-${e}`
  };
}
const ms = $r(({ relation: e, parentFilters: t, parent: r, where: o, models: a, readOnly: s }) => {
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
  const [i, d] = M(0);
  return /* @__PURE__ */ v(ct, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ n(ct, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ n(Aa, { value: i, onChange: (C, u) => {
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
}), dn = Gt(1), gs = {}, De = {
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
  const p = e.formTitle || e.title, { navigate: l, getParams: y, useParams: c, pathname: f } = Kt(), { relations: E = [] } = e, { dispatchData: x, stateData: D } = We(), w = c() || y, { id: F = "" } = w, k = F.split("-")[0], J = new URLSearchParams(window.location.search), j = J.has(De.baseData) && J.get(De.baseData);
  if (j) {
    const I = JSON.parse(j);
    typeof I === De.object && I !== null && (i = { ...i, ...I });
  }
  const [ee, ae] = M(!0), [L, te] = M({}), [Z, N] = M(null), [Y, H] = M(!1), R = qt(), [K, Q] = M(null), [X, Ce] = M(0), [re, Ee] = M(!1), [Te, tt] = M(null), [Le, ke] = M(""), _e = D?.gridSettings?.permissions?.Url || "", $e = typeof e.applyFieldConfig === De.function ? e.applyFieldConfig({ data: L, lookups: Z }) : gs, Se = be(() => `${_e}${e.api || t || ""}`, [_e, e.api, t]), { mode: dt } = D.dataForm, xt = D.getUserData || {}, ut = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...a
  }, { canEdit: rt } = Xr({
    userData: xt,
    model: e,
    userDefinedPermissions: ut
  }), { hideBreadcrumb: he = !1, navigateBack: P } = e, $ = () => {
    let I;
    switch (typeof P) {
      case De.function:
        I = P({ params: w, searchParams: J, data: L });
        break;
      case De.number:
      case De.string:
        I = P;
        break;
      default:
        I = f.substring(0, f.lastIndexOf("/"));
        break;
    }
    l(I);
  }, ve = be(() => lt.emptyIdValues.includes(k), [k]), m = be(() => ve ? { ...e.initialValues, ...L, ...i } : { ...i, ...e.initialValues, ...L }, [e.initialValues, L, k]);
  ue(() => {
    if (!_e) return;
    Q(e.getValidationSchema({ id: k, snackbar: R }));
    const I = F.split("-");
    en({
      ...{
        api: t || Se,
        model: e,
        setError: Oe
      },
      id: I.length > 1 ? I[1] : I[0],
      setIsLoading: ae,
      setActiveRecord: qe
    });
  }, [k, F, e, _e]);
  const se = qr({
    enableReinitialize: !0,
    initialValues: m,
    validationSchema: K,
    validateOnBlur: !1,
    onSubmit: async (I, { resetForm: ye }) => {
      Object.keys(I).forEach((oe) => {
        typeof I[oe] === De.string && (I[oe] = I[oe].trim());
      }), ae(!0), rn({
        id: k,
        api: Se,
        values: I,
        setIsLoading: ae,
        setError: R.showError
      }).then((oe) => {
        if (!oe) return;
        if (e.reloadOnSave)
          return window.location.reload();
        const Je = oe.info ? oe.info : `Record ${k === 0 ? "Added" : "Updated"} Successfully.`;
        R.showMessage(Je), P !== !1 && $();
      }).catch((oe) => {
        R.showError(
          "An error occured.",
          oe
        ), e.reloadOnSave && ye();
      }).finally(() => ae(!1));
    }
  }), Ne = () => {
    se.resetForm(), Ee(!1), P !== !1 && $();
  }, Oe = function(I, ye) {
    R.showError(I, ye), $();
  }, qe = function({ id: I, title: ye, record: oe, lookups: Je }) {
    const Ze = F.indexOf("-") > -1, ft = !I || I === "0", Dt = ft ? De.create : Ze ? De.copy : De.edit, It = ft ? "" : oe[e.linkColumn], mt = [{ text: e.breadCrumbs }, { text: Dt }];
    Ze && (oe[e.linkColumn] = ""), e.columns.forEach((Ve) => {
      Ve.skipCopy && Ze && (oe[Ve.field] = "");
    }), te(oe), N(Je), It !== "" && mt.push({ text: It }), x({
      type: z.PAGE_TITLE_DETAILS,
      payload: {
        showBreadcrumbs: !0,
        breadcrumbs: mt
      }
    });
  }, ge = function(I) {
    se.dirty && Be ? Ee(!0) : P !== !1 && $(), I.preventDefault();
  }, ce = async function() {
    try {
      H(!0), await tn({
        id: k,
        api: t || e.api,
        setIsLoading: ae,
        setError: R.showError,
        setErrorMessage: ke
      }) === !0 && (R.showMessage("Record Deleted Successfully."), P !== !1 && $());
    } catch {
      R.showError("An error occured, please try after some time.");
    } finally {
      H(!1);
    }
  }, ne = () => {
    ke(null), H(!1);
  };
  if (ee)
    return /* @__PURE__ */ n(ct, { sx: { display: "flex", pt: "20%", justifyContent: "center" }, children: /* @__PURE__ */ n(ua, {}) });
  const de = function(I) {
    const { name: ye, value: oe } = I.target;
    te({ ...L, [ye]: oe });
  }, pt = async function(I) {
    I && I.preventDefault(), typeof C === De.function && await C({ formik: se });
    const { errors: ye } = se;
    se.handleSubmit();
    const oe = Object.keys(ye)[0], Je = ye[oe];
    Je && R.showError(Je, null, "error");
    const Ze = e.columns.find(
      (ft) => ft.field === oe
    ) || {};
    Ze.tab && Ce(Object.keys(e.tabs).indexOf(Ze.tab));
  }, Ae = [
    { text: p },
    { text: k === "0" ? "New" : "Update" }
  ], Ke = Number(k) !== 0 && !!E.length, Ye = J.has("showRelation"), Be = !("canEdit" in L) || L.canEdit, nt = !Be || L.readOnlyRelations;
  return u = u || "Are you sure you want to delete ?", /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ n(
      an,
      {
        navigate: l,
        title: p,
        showBreadcrumbs: !he,
        breadcrumbs: Ae,
        model: e
      }
    ),
    /* @__PURE__ */ n(dn.Provider, { value: { activeStep: X, setActiveStep: Ce }, children: /* @__PURE__ */ v(ca, { sx: { padding: 2, ...d }, children: [
      /* @__PURE__ */ v("form", { children: [
        /* @__PURE__ */ v(
          da,
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
                  onClick: pt,
                  children: "Save"
                }
              ),
              /* @__PURE__ */ n(
                we,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: ge,
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
          s,
          {
            model: e,
            formik: se,
            data: L,
            fieldConfigs: $e,
            onChange: de,
            lookups: Z,
            id: k,
            handleSubmit: pt,
            mode: dt
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
          open: Y,
          onConfirm: ce,
          onCancel: () => {
            H(!1), tt(null);
          },
          title: Te ? "Error Deleting Record" : "Confirm Delete",
          children: u
        }
      ),
      Ke ? /* @__PURE__ */ n(
        hs,
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
}, _t = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
  nonAlphaNumeric: /[^a-zA-Z0-9]/g,
  compareValidatorRegex: /^compare:(.+)$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
}, bs = {}, _r = !0, Cs = {
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
          f = le.string().nullable().trim().label(c), p && !isNaN(Number(p)) && (f = f.min(Number(p), `${c} must be at least ${p} characters long`)), l && !isNaN(Number(l)) && (f = f.max(Number(l), `${c} must be at most ${l} characters long`)), u && (f = f.trim().required(`${c} is required`));
          break;
        case "boolean":
          f = le.bool().nullable().transform((E, x) => x === "" ? null : E).label(c);
          break;
        case "radio":
        case "dayRadio":
          f = le.mixed().label(c).required(`Select at least one option for ${c}`);
          break;
        case "date":
          f = le.date().nullable().transform((E, x) => x === "" || x === null ? null : E).label(c).required(`${c} is required`);
          break;
        case "dateTime":
          f = le.date().nullable().transform((E, x) => x === "" || x === null ? null : E).label(c);
          break;
        case "select":
        case "autocomplete":
          u ? f = le.string().trim().label(c).required(`Select at least one ${c}`) : f = le.string().nullable();
          break;
        case "password":
          f = le.string().label(c).test("ignore-asterisks", `${c} must be a valid password.`, (E) => {
            if (E === "******") return !0;
            const x = Number(p) || 8, D = Number(l) || 50, w = a.regex || _t.password;
            return le.string().min(x, `${c} must be at least ${x} characters`).max(D, `${c} must be at most ${D} characters`).matches(
              w,
              `${c} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`
            ).isValidSync(E);
          });
          break;
        case "email":
          f = le.string().trim().matches(
            a.regex || _t.email,
            "Email must be a valid email"
          );
          break;
        case "number":
          u ? f = le.number().label(c).required(`${c} is required.`) : f = le.number().nullable(), p !== void 0 && p !== "" && !isNaN(Number(p)) && (f = f.min(Number(p), `${c} must be greater than or equal to ${p}`)), l !== void 0 && l !== "" && !isNaN(Number(l)) && (f = f.max(Number(l), `${c} must be less than or equal to ${l}`));
          break;
        case "fileUpload":
          f = le.string().trim().label(c);
          break;
        default:
          f = le.mixed().nullable().label(c);
          break;
      }
      if (u && h !== "string" && (f = f.required(`${c} is required`)), C && (!t || t === "") && (f = f.trim().required(`${c} is required`)), y) {
        const E = _t.compareValidatorRegex.exec(y);
        if (E) {
          const x = E[1], D = r.find(
            (w) => (w.formField === x || w.field) === x
          );
          f = f.oneOf(
            [le.ref(x)],
            `${c} must match ${D.label}`
          );
        }
      }
      o[s] = f;
    }
    return le.object({ ...o, ...this.validationSchema });
  }
  Form = ({ match: t, ...r }) => /* @__PURE__ */ n(ys, { model: this, Layout: this.Layout, ...r });
  Grid = ({ match: t, ...r }) => /* @__PURE__ */ n(Nr, { model: this, showRowsSelected: _r, ...r });
  ChildGrid = (t) => /* @__PURE__ */ v(me, { children: [
    /* @__PURE__ */ n(Nr, { model: this, ...t, customStyle: bs, showRowsSelected: _r }),
    /* @__PURE__ */ n(Ko, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  je as DialogComponent,
  Nr as GridBase,
  li as HelpModal,
  Mr as MuiTypography,
  an as PageTitle,
  kl as RouterProvider,
  Zr as SnackbarContext,
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
