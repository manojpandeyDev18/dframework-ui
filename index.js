import { jsx as n, jsxs as C, Fragment as ue } from "react/jsx-runtime";
import * as Ue from "react";
import yt, { createContext as Ut, useContext as pr, useState as S, useEffect as oe, useReducer as aa, useMemo as ge, useCallback as Ot, memo as Vr, useRef as Sr, createElement as fr } from "react";
import oa from "@mui/material/Snackbar";
import ia from "@mui/material/Alert";
import ve from "@mui/material/Button";
import sa from "@mui/material/Dialog";
import la from "@mui/material/DialogActions";
import ca from "@mui/material/DialogContent";
import da from "@mui/material/DialogContentText";
import ua from "@mui/material/DialogTitle";
import * as tt from "@mui/x-data-grid-premium";
import { GridFooterContainer as pa, GridFooter as fa, getGridDateOperators as zr, useGridApiRef as Ur, useGridSelector as lr, gridFilterModelSelector as Gr, gridSortModelSelector as ma, DataGridPremium as jr, GridActionsCellItem as Ve, GridToolbarExportContainer as ha, Toolbar as ga, GRID_CHECKBOX_SELECTION_COL_DEF as ya, getGridStringOperators as ba, getGridBooleanOperators as Ca, ColumnsPanelTrigger as Ea, FilterPanelTrigger as xa } from "@mui/x-data-grid-premium";
import Wr from "@mui/icons-material/Delete";
import Ar from "@mui/icons-material/FileCopy";
import Da from "@mui/icons-material/Article";
import cr from "@mui/icons-material/Edit";
import va from "@mui/icons-material/FilterListOff";
import Or from "@mui/icons-material/Add";
import Ta from "@mui/icons-material/Remove";
import St from "@mui/material/Typography";
import dt from "@mui/material/Box";
import Gt from "@mui/material/TextField";
import { useTranslation as mr, withTranslation as wa } from "react-i18next";
import { Typography as Fe, Dialog as Sa, DialogTitle as Aa, Grid as de, DialogContent as Oa, Card as Hr, CardContent as Kr, Breadcrumbs as Pa, Link as Ia, Button as st, IconButton as qr, Box as ze, Menu as Fa, List as Ma, MenuItem as _t, ListItemButton as Pr, ListItemIcon as Ra, ListItem as Na, ListItemText as Ba, TextField as $t, FormControlLabel as lt, Checkbox as La, Stack as or, Tooltip as Pe, FormControl as hr, InputLabel as ka, Select as _a, FormHelperText as bt, useTheme as Ct, InputAdornment as $a, FormLabel as Va, RadioGroup as gr, Radio as gt, styled as za, Avatar as Ua, CircularProgress as Ga, Divider as ja } from "@mui/material";
import Wa from "@mui/icons-material/Check";
import dr from "@mui/icons-material/Close";
import Ha from "@mui/icons-material/Help";
import { Replay as Ka, Close as qa } from "@mui/icons-material";
import re from "dayjs";
import Ya from "dayjs/plugin/utc";
import Ja from "dayjs/plugin/timezone";
import { DatePicker as Yr } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as ur } from "@mui/x-date-pickers/DateTimePicker";
import Za from "dayjs/plugin/utc.js";
import { LocalizationProvider as Xa } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as Qa } from "@mui/x-date-pickers/AdapterDayjs";
import eo from "@mui/icons-material/Save";
import Ir from "@mui/icons-material/Settings";
import { useFormik as Jr } from "formik";
import * as ne from "yup";
import to from "@mui/icons-material/History";
import ro from "@mui/icons-material/FileDownload";
import Zr from "@mui/material/Checkbox";
import Xr from "@mui/material/MenuItem";
import { styled as jt } from "@mui/material/styles";
import no from "@mui/icons-material/ViewColumn";
import ao from "@mui/icons-material/FilterList";
import oo from "@mui/material/Paper";
import io from "@mui/material/Stack";
import so from "@mui/material/CircularProgress";
import lo from "@mui/material/FormControlLabel";
import co from "@mui/icons-material/VisibilityOff";
import uo from "@mui/icons-material/Visibility";
import { TimePicker as po } from "@mui/x-date-pickers/TimePicker";
import fo from "@mui/icons-material/KeyboardArrowDown";
import Wt from "@mui/material/FormControl";
import mo from "@mui/material/InputLabel";
import ho from "@mui/material/Select";
import ir from "@mui/material/Grid";
import Qr from "@mui/material/Autocomplete";
import go from "@mui/material/Stepper";
import yo from "@mui/material/Step";
import bo from "@mui/material/StepLabel";
import { grey as Co } from "@mui/material/colors";
import Eo from "@emotion/styled";
import xo from "@mui/material/Chip";
import { SimpleTreeView as Do } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as Fr } from "@mui/x-tree-view/TreeItem";
import vo from "@mui/material/Input";
import To from "@mui/material/Tab";
import wo from "@mui/material/Tabs";
const en = Ut(null), So = "bottom", Ao = "center", Oo = yt.forwardRef(function(t, r) {
  return /* @__PURE__ */ n(ia, { elevation: 6, ref: r, variant: "filled", ...t });
}), Il = ({ children: e }) => {
  const [t, r] = S(null), [a, o] = S(!1), [s, i] = S(null), [d, m] = S(null), g = function(l, h, c = "info", f) {
    typeof l != "string" && (l = l.toString()), h && typeof h != "string" && (h = h.toString()), r(h ? `${l}: ${h}` : l), i(c), o(!0), m(f);
  }, u = function(l, h, c = "error", f) {
    g(l, h, c, f);
  }, p = function() {
    o(!1), m(null), d && d();
  };
  return /* @__PURE__ */ C(ue, { children: [
    /* @__PURE__ */ n(
      en.Provider,
      {
        value: { showMessage: g, showError: u },
        children: e
      }
    ),
    /* @__PURE__ */ n(oa, { open: a, autoHideDuration: 6e3, onClose: p, anchorOrigin: { vertical: So, horizontal: Ao }, children: /* @__PURE__ */ n(Oo, { severity: s, children: t }) })
  ] });
}, Ht = function() {
  return pr(en);
}, Ge = ({ open: e, onConfirm: t, title: r = "Confirm", onCancel: a, okText: o, cancelText: s, yesNo: i = !1, children: d, maxWidth: m = "sm", fullWidth: g = !0, ...u }) => (o = o || (i ? "Yes" : "Ok"), s = s || (i ? "No" : "Cancel"), /* @__PURE__ */ C(
  sa,
  {
    ...u,
    open: e,
    onClose: a,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    maxWidth: m,
    fullWidth: g,
    children: [
      /* @__PURE__ */ n(ua, { id: "alert-dialog-title", children: r }),
      /* @__PURE__ */ n(ca, { dividers: !0, children: /* @__PURE__ */ n(da, { children: d }) }),
      (a || t) && /* @__PURE__ */ C(la, { children: [
        a && /* @__PURE__ */ n(ve, { onClick: a, children: s }),
        t && /* @__PURE__ */ n(ve, { onClick: t, autoFocus: !0, children: o })
      ] })
    ]
  }
)), V = {
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
let wt = 0;
const je = {
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
}, Po = (e, t) => {
  const r = new URL(e);
  for (const a in t) {
    const o = typeof t[a] == "object" ? JSON.stringify(t[a]) : t[a];
    r.searchParams.append(a, o);
  }
  window.open(r, "_blank").focus();
}, Et = async (e) => {
  const {
    method: t = "GET",
    url: r,
    data: a,
    headers: o = {},
    credentials: s = "include",
    ...i
  } = e, d = {
    method: t,
    credentials: s,
    headers: {
      ...o
    },
    ...i
  };
  a && (o["Content-Type"] === "multipart/form-data" ? (delete d.headers["Content-Type"], d.body = a instanceof FormData ? a : tn(a)) : (d.headers["Content-Type"] = o["Content-Type"] || "application/json", d.body = typeof a == "string" ? a : JSON.stringify(a)));
  const m = await fetch(r, d), g = m.headers.get("content-type") || {};
  return {
    status: m.status,
    data: g.includes("application/json") ? await m.json() : await m.text(),
    headers: Object.fromEntries(m.headers.entries())
  };
}, At = async ({ url: e, params: t = {}, history: r, jsonPayload: a = !1, additionalParams: o = {}, additionalHeaders: s = {}, disableLoader: i = !1, dispatchData: d }) => {
  if (t.exportData)
    return Po(e, t);
  i || d({ type: V.UPDATE_LOADER_STATE, payload: !0 }), wt++;
  const m = {
    method: "POST",
    credentials: "include",
    url: e,
    headers: a ? { ...s } : { "Content-Type": "multipart/form-data", ...s },
    ...o
  };
  t && (m.data = a ? t : tn(t));
  try {
    const g = await Et(m);
    wt--;
    const u = g.data;
    if (wt === 0 && !i && d({ type: "UPDATE_LOADER_STATE", loaderOpen: !1 }), g.status === je.SESSION_EXPIRED) {
      r("/login");
      return;
    }
    return g.status !== je.OK ? { data: { message: u.message || "An error occurred" } } : u;
  } catch (g) {
    return wt--, wt === 0 && d({ type: "UPDATE_LOADER_STATE", loaderOpen: !1 }), { data: { message: g.message || "Network error" } };
  }
}, ct = {
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
  const { permissions: a = [] } = e;
  r = r || { add: !0, edit: !0, delete: !0 };
  const o = a.find((s) => s.Module === t.module);
  return o ? {
    canAdd: r.add && !!o[ct.permissionsMapper.add],
    canEdit: r.edit && !!o[ct.permissionsMapper.edit],
    canDelete: r.delete && !!o[[ct.permissionsMapper.delete]]
  } : { canAdd: r.add, canEdit: r.edit, canDelete: r.delete };
}, Io = ["date", "dateTime"], Fo = ["singleSelect"], Mr = 200, Mo = (e) => (/* @__PURE__ */ new Date()).getTimezoneOffset() === new Date(e).getTimezoneOffset(), et = (e, t) => e.status === je.SESSION_EXPIRED ? (t("Session Expired!"), setTimeout(() => {
  window.location.href = "/";
}, Mr), !0) : e.status === je.FORBIDDEN ? (t("Access Denied!"), setTimeout(() => {
  window.location.href = "/";
}, Mr), !0) : (e.status === je.INTERNAL_SERVER_ERROR && t("Internal Server Error"), !1);
function Ro(e) {
  const { operator: t, value: r, type: a } = e, o = ["isEmpty", "isNotEmpty"].includes(t), s = r != null && (r !== "" || a === "number" && r === 0 || a === "boolean" && r === !1);
  return o || s;
}
const No = async ({ gridColumns: e, setIsLoading: t, setData: r, page: a, pageSize: o, sortModel: s, filterModel: i, api: d, parentFilters: m, action: g = "list", setError: u, extraParams: p, contentType: l, columns: h, controllerType: c = "node", template: f = null, configFileName: b = null, dispatchData: E, showFullScreenLoader: x = !1, model: T, baseFilters: A = null, isElasticExport: N }) => {
  l || x && E({ type: V.UPDATE_LOADER_STATE, payload: !0 });
  const K = [], q = [], ae = [];
  e.forEach(({ lookup: M, type: H, field: U, keepLocal: O = !1, keepLocalDate: W, filterable: Y = !0, dependsOn: J }) => {
    Io.includes(H) && ae.push({ field: U, keepLocal: O, keepLocalDate: W }), M && !K.includes(M) && Fo.includes(H) && Y && (K.push(M), q.push({ lookup: M, dependsOn: J }));
  });
  const ee = [];
  i?.items?.length && i.items.forEach((M) => {
    if (Ro(M)) {
      const { field: H, operator: U, filterField: O } = M;
      let { value: W } = M;
      const J = e.filter((ye) => ye?.field === M.field)[0]?.type;
      J === "boolean" ? W = W === "true" || W === !0 ? 1 : 0 : J === "number" && (W = Array.isArray(W) ? W.filter((ye) => ye) : W), W = M.filterValues || W, ee.push({
        field: O || H,
        operator: U,
        value: W,
        type: J
      });
    }
  }), m && ee.push(...m), A && ee.push(...A);
  const F = {
    start: a * o,
    limit: N ? T.exportSize : o,
    ...p,
    logicalOperator: i.logicOperator,
    sort: s.map((M) => (M.filterField || M.field) + " " + M.sort).join(","),
    where: ee,
    isElasticExport: N,
    model: T.module,
    fileName: T.overrideFileName
  };
  K.length && (F.lookups = K.join(",")), q.length && (F.lookupWithDeps = JSON.stringify(q)), T?.limitToSurveyed && (F.limitToSurveyed = T?.limitToSurveyed);
  const X = {};
  let te = c === "cs" ? `${d}?action=${g}&asArray=0` : `${d}/${g}`;
  if (f !== null && (te += `&template=${f}`), b !== null && (te += `&configFileName=${b}`), l) {
    const M = document.createElement("form");
    if (F.responseType = l, F.columns = h, F.userTimezoneOffset = -(/* @__PURE__ */ new Date()).getTimezoneOffset(), M.setAttribute("method", "POST"), M.setAttribute("id", "exportForm"), M.setAttribute("target", "_blank"), f === null)
      for (const H in F) {
        let U = F[H];
        if (U == null)
          continue;
        typeof U != "string" && (U = JSON.stringify(U));
        const O = document.createElement("input");
        O.type = "hidden", O.name = H, O.value = U, M.append(O);
      }
    M.setAttribute("action", te), document.body.appendChild(M), M.submit(), setTimeout(() => {
      document.getElementById("exportForm").remove();
    }, 3e3);
    return;
  }
  try {
    t(!0);
    const M = {
      url: te,
      method: "POST",
      data: F,
      headers: {
        "Content-Type": "application/json",
        ...X
      },
      credentials: "include"
    };
    r((U) => ({
      ...U,
      records: []
      // reset records to empty array before fetching new data
    }));
    const H = await Et(M);
    if (H.status === je.OK) {
      const { records: U } = H.data;
      U && U.forEach((O) => {
        ae.forEach((W) => {
          const { field: Y, keepLocal: J, keepLocalDate: ye } = W;
          if (O[Y]) {
            if (O[Y] = new Date(O[Y]), ye) {
              const Z = O[Y].getTimezoneOffset() * 6e4;
              O[Y] = new Date(O[Y].getTime() + Z);
            }
            if (J && !Mo(O[Y])) {
              const Z = O[Y].getTimezoneOffset() * 6e4;
              O[Y] = new Date(O[Y].getTime() + Z);
            }
          }
        }), T.columns.forEach(({ field: W, displayIndex: Y }) => {
          Y && (O[W] = O[Y]);
        });
      }), r(H.data);
    } else et(H, u) || u(H.statusText);
  } catch (M) {
    M.response && !et(M.response, u) && u("Could not list record", M.message || M.toString());
  } finally {
    t(!1), !l && x && E({ type: V.UPDATE_LOADER_STATE, payload: !1 });
  }
}, nn = async ({ api: e, id: t, setIsLoading: r, setActiveRecord: a, model: o, parentFilters: s, where: i = {}, setError: d }) => {
  e = e || o.api, r(!0);
  const m = new URLSearchParams(), g = `${e}/${t ?? "-"}`, u = [];
  (o.formDef || o.columns)?.forEach((l) => {
    l.lookup && !u.includes(l.lookup) && !l.dependsOn && u.push(l.lookup);
  }), m.set("lookups", u), i && Object.keys(i)?.length && m.set("where", JSON.stringify(i));
  try {
    const l = await Et({
      url: `${g}?${m.toString()}`,
      method: "GET",
      credentials: "include"
    });
    if (l.status === je.OK) {
      const { data: h, lookups: c } = l.data;
      let f = h[o.linkColumn];
      const b = o.columns.find((x) => x.field === o.linkColumn);
      if (b && b.lookup && c && c[b.lookup] && c[b.lookup]?.length) {
        const x = c[b.lookup].find((T) => T.value === f);
        x && (f = x.label);
      }
      const E = { ...o.defaultValues };
      a({ id: t, title: f, record: { ...E, ...h, ...s }, lookups: c });
    } else et(l, d) || d("Could not load record", l.body.toString());
  } catch (l) {
    l.response && et(l.response, d) && d("Could not load record", l.message || l.toString());
  } finally {
    r(!1);
  }
}, an = async function({ id: e, api: t, setIsLoading: r, setError: a }) {
  const o = { success: !1, error: "" };
  if (!e) {
    a("Deleted failed. No active record.");
    return;
  }
  r(!0);
  try {
    const s = await Et({
      url: `${t}/${e}`,
      method: "DELETE",
      credentials: "include"
    });
    if (s.status === je.OK)
      return s.data && !s.data.success ? (o.success = !1, a("Delete failed", s.data.message), !1) : (o.success = !0, !0);
    et(s, a) || a("Delete failed", s.body);
  } catch (s) {
    s.response && !et(s.response, a) && a("Could not delete record", s.message || s.toString());
  } finally {
    r(!1);
  }
  return o;
}, on = async function({ id: e, api: t, values: r, setIsLoading: a, setError: o }) {
  let s, i;
  e !== 0 ? (s = `${t}/${e}`, i = "PUT") : (s = t, i = "POST");
  try {
    a(!0);
    const d = await Et({
      url: s,
      method: i,
      data: r,
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (d.status === je.OK) {
      const m = d.data;
      if (m.success)
        return m;
      o("Save failed", m.err || m.message);
    } else et(d, o) || o("Save failed", d.body);
  } catch (d) {
    d.response && !et(d.response, o) && o("Could not save record", d.message || d.toString());
  } finally {
    a(!1);
  }
  return !1;
}, Bo = ({ pagination: e, apiRef: t, tTranslate: r = (a) => a }) => {
  const a = t.current.state.pagination.paginationModel.page, o = t.current.state.pagination.paginationModel.pageSize, s = t.current.state.rows.totalRowCount, i = Math.ceil(s / o), { t: d, i18n: m } = mr(), g = { t: d, i18n: m }, [u, p] = S(a + 1), l = function(f) {
    let b = f.target?.value;
    b === "" ? p("") : (b = parseInt(b), b = isNaN(b) || b < 1 ? 1 : b, p(b));
  };
  oe(() => {
    p(a + 1);
  }, [a, o]);
  const h = function() {
    let f = u === "" ? 1 : u;
    f = Math.max(f, 1), f = Math.min(f, i), t.current.setPage(f - 1), p(f), u === "" && p(1);
  }, c = (f) => {
    const b = f.which || f.keyCode, E = String.fromCharCode(b);
    /\d/.test(E) || f.preventDefault();
  };
  return /* @__PURE__ */ C(pa, { children: [
    /* @__PURE__ */ n(dt, { sx: { pl: 5 }, children: e && /* @__PURE__ */ C(ue, { children: [
      /* @__PURE__ */ C(St, { variant: "p", children: [
        r("Jump to page", g),
        ":"
      ] }),
      /* @__PURE__ */ n(
        Gt,
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
      /* @__PURE__ */ n(ve, { disabled: !s, size: "small", onClick: h, children: r("Go", g) })
    ] }) }),
    /* @__PURE__ */ n(fa, {})
  ] });
}, Lo = /\${((\w+)\.)?(\w+)}/g, ko = function(e, t, { template: r = Lo, keepMissingTags: a = !1 } = {}) {
  return !e || !t ? e : e.replace(r, function(o, s, i, d) {
    const m = i ? t[i] || {} : t;
    return m[d] === void 0 ? a ? o : "" : m[d];
  });
}, sr = {
  replaceTags: ko
};
function Rr({ variant: e = "h2", component: t = "h2", text: r = "", name: a = null, ...o }) {
  return /* @__PURE__ */ C(Fe, { variant: e, component: t, ...o, children: [
    r,
    a && ` ${a}`
  ] });
}
function _o(e = !1) {
  const t = s(), [r, a] = S(t);
  function o() {
    setTimeout(() => {
      a(s());
    }, 10);
  }
  oe(() => (window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o);
  }), []);
  function s() {
    let i = typeof window.navigator > "u" ? "" : navigator.userAgent;
    const d = !!i.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    i = i.toLowerCase();
    const m = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(i);
    let g = null;
    return window.innerWidth <= window.innerHeight ? g = "portrait" : g = "landscape", { mobile: d, tablet: m, portrait: g === "portrait", landscape: g === "landscape" };
  }
  return e ? r.mobile : r;
}
const $o = (e, t) => {
  switch (t.type) {
    case V.UPDATE_LOCALIZATION:
      return { ...e, dataLocalization: t.payload };
    case V.UPDATE_DATE_TIME:
      return { ...e, dateTime: t.payload };
    case V.UPDATE_FORM_MODE:
      return { ...e, dataForm: t.payload };
    case V.PAGE_TITLE_DETAILS:
      return { ...e, pageTitleDetails: t.payload };
    case V.OPEN_MODAL:
      return { ...e, modal: t.payload };
    case V.SET_PAGE_BACK_BUTTON:
      return { ...e, pageBackButton: t.payload };
    case V.SET_GRID_SETTINGS:
      return { ...e, gridSettings: t.payload };
    case V.SET_LOCAL_LOCALIZATION:
      return { ...e, getLocal: t.payload };
    case V.USER_DATA:
      return { ...e, getUserData: t.payload };
    case V.UDPATE_PREFERENCES:
      return { ...e, preferences: t.payload };
    case V.SET_CURRENT_PREFERENCE_NAME:
      return { ...e, currentPreference: t.payload };
    case V.TOTAL_PREFERENCES:
      return { ...e, totalPreferences: t.payload };
    case V.UPDATE_LOADER_STATE:
      return { ...e, loaderOpen: t.payload };
    case V.PASS_FILTERS_TO_HEADER:
      return { ...e, filtersInHeader: t.payload };
    case V.SET_TIMEZONE:
      return { ...e, timeZone: t.payload };
    default:
      return e;
  }
}, Vo = {
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
}, zo = {
  Jumptopage: "Gå til side",
  Go: "Gå",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "I dette rum vil vi snart bringe dig et dashboard med hovedoversigt KPIer for nem adgang",
  Pages: "sider",
  MuiTablePagination: {
    labelRowsPerPage: "Rækker pr. side"
  }
}, Uo = {
  ...tt.daDK,
  ...zo
}, Go = {
  Jumptopage: "Zur Seite springen",
  Go: "Gehen",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In diesem Bereich werden wir Ihnen in Kürze ein Dashboard mit den wichtigsten Übersichts-KPIs für einen einfachen Zugriff bereitstellen",
  Pages: "Seiten",
  MuiTablePagination: {
    labelRowsPerPage: "Zeilen pro Seite"
  }
}, jo = {
  ...tt.deDE,
  ...Go
}, Wo = {
  Jumptopage: "Μετάβαση στη σελίδα",
  Go: "Πηγαίνω",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Σε αυτόν τον χώρο θα σας φέρουμε σύντομα έναν πίνακα ελέγχου βασικών επισκόπησης KPI για εύκολη πρόσβαση",
  Pages: "Σελίδες",
  MuiTablePagination: {
    labelRowsPerPage: "Σειρές ανά σελίδα"
  }
}, Ho = {
  ...tt.elGR,
  ...Wo
}, Ko = {
  Jumptopage: "Saltar a la página",
  Go: "Ir",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "En este espacio pronto le ofreceremos un panel con los principales KPI generales para un fácil acceso.",
  Pages: "paginas",
  MuiTablePagination: {
    labelRowsPerPage: "Filas por página"
  }
}, qo = {
  ...tt.esES,
  ...Ko
}, Yo = {
  Jumptopage: "Aller à la page",
  Go: "Aller",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Dans cet espace, nous vous proposerons bientôt un tableau de bord des principaux KPI pour un accès facile.",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Lignes par page"
  }
}, Jo = {
  ...tt.frFR,
  ...Yo
}, Zo = {
  Jumptopage: "Vai alla pagina",
  Go: "Andare",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In questo spazio presto ti forniremo una dashboard con i principali KPI generali per un facile accesso",
  Pages: "Pagine",
  MuiTablePagination: {
    labelRowsPerPage: "Righe per pagina"
  }
}, Xo = {
  ...tt.itIT,
  ...Zo
}, Qo = {
  Jumptopage: "Sayfaya atla",
  Go: "Gitmek",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
  Pages: "Sayfalar",
  MuiTablePagination: {
    labelRowsPerPage: "Sayfa başına satır"
  }
}, ei = {
  ...tt.trTR,
  ...Qo
}, ti = {
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
}, ri = {
  Jumptopage: "Jump to page",
  Go: "Go",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In this space we will soon bring you a dashboard of main overview KPIs for easy access",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Rows per page"
  }
}, ni = {
  ...tt.enUS,
  ...ri
}, ai = {
  en: ni,
  "tr-TR": ei,
  "es-ES": qo,
  "da-DK": Uo,
  "de-DE": jo,
  "el-GR": Ho,
  "fr-FR": Jo,
  "pt-PT": ti,
  "it-IT": Xo
};
re.extend(Ya);
re.extend(Ja);
const sn = Ut(), ln = Ut(null), Fl = ({ children: e }) => {
  const [t, r] = aa($o, Vo);
  function a(u, p, l) {
    if (l != null) {
      const h = l;
      let c = u ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
      return h && (c = h.split(" "), c[0] = c[0].toUpperCase(), u ? c = c[0] : p ? c = c[0].toUpperCase() : (c[1] += c[1].includes(":ss") ? "" : ":ss", c = c.join(" "))), c;
    }
    return u ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
  }
  async function o({ preferenceName: u, Username: p, history: l, dispatchData: h, preferenceApi: c, defaultPreferenceEnums: f = {}, addDefaultPreference: b = !1 }) {
    const x = (await At({ url: c, params: { action: "list", id: u, Username: p }, history: l, dispatchData: h }) || {}).preferences || [];
    return b && x.unshift({
      prefName: "Default",
      prefId: 0,
      GridId: u,
      GridPreferenceId: 0,
      prefValue: f[u]
    }), h({ type: V.UDPATE_PREFERENCES, payload: x }), h({ type: V.TOTAL_PREFERENCES, payload: x.length }), x;
  }
  const s = ({ gridRef: u, data: p }) => p.filter((l) => u.current.getColumnIndex(l.field) !== -1);
  async function i({ preferences: u = [], gridRef: p, dispatchData: l, preferenceName: h, setIsGridPreferenceFetched: c, defaultPreferenceEnums: f = {} }) {
    const b = u.find((x) => x.isDefault && x.GridId === h), E = b ? JSON.parse(b.prefValue) : f[h];
    E && Object.keys(E).length && (E.gridColumn = s({ gridRef: p, data: E.gridColumn }), E.sortModel = s({ gridRef: p, data: E.sortModel }), E.filterModel.items = s({ gridRef: p, data: E.filterModel.items }), p.current.setColumnVisibilityModel(E.columnVisibilityModel), p.current.setPinnedColumns(E.pinnedColumns), p.current.setSortModel(E.sortModel || []), p.current.setFilterModel(E?.filterModel), l({ type: V.SET_CURRENT_PREFERENCE_NAME, payload: b ? b.prefName : "Default" })), c && c(!0);
  }
  function d({ dispatchData: u }) {
    u({ type: V.SET_CURRENT_PREFERENCE_NAME, payload: null });
  }
  function m({ value: u, useSystemFormat: p, showOnlyDate: l = !1, state: h, timeZone: c }) {
    if (!u) return "-";
    const f = a(p, l, h);
    return c ? re(u).tz(c).format(f) : re(u).format(f);
  }
  function g() {
    const u = t.dataLocalization, p = ai[u];
    function l(h) {
      return u === "pt-PT" || u === "ptPT" ? p.components.MuiDataGrid.defaultProps.localeText[h] || h : p[h] || h;
    }
    return { getLocalizedString: l };
  }
  return /* @__PURE__ */ n(sn.Provider, { value: { stateData: t, dispatchData: r, systemDateTimeFormat: a, formatDate: m, removeCurrentPreferenceName: d, getAllSavedPreferences: o, applyDefaultPreferenceIfExists: i, useLocalization: g }, children: e });
}, Ml = ln.Provider, Kt = () => pr(ln), We = () => {
  const e = pr(sn);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, oi = () => {
  const [e, t] = S(), [r, a] = S(!1), { stateData: o, dispatchData: s } = We(), i = o.modal, d = 16 / 9;
  let m = (window.outerWidth - 10) / window.innerWidth * 100;
  const g = () => {
    let p = document.getElementById("tutorial-iframe");
    p ? (p = p.offsetWidth, p = p / window.innerWidth) : p = 0.9;
    const l = window.innerWidth * p * (1 / d), h = window.innerHeight - 180;
    t(Math.min(l, h));
  };
  oe(() => {
    i?.status && (a(!0), g());
  }, [i, m]), oe(() => (window.addEventListener("resize", g), () => {
    window.removeEventListener("resize", g);
  }), []);
  function u() {
    const p = document.getElementById("tutorial-iframe");
    p.src = i?.data?.url;
  }
  return /* @__PURE__ */ n("div", { children: i?.status && /* @__PURE__ */ C(Sa, { fullWidth: !0, maxWidth: "lg", open: i.status, onClose: () => {
    s({
      type: V.OPEN_MODAL,
      payload: { status: !1, data: {} }
    });
  }, children: [
    /* @__PURE__ */ n(Aa, { className: "pt-2 pb-0", children: /* @__PURE__ */ C(de, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ C(de, { size: 11, children: [
        /* @__PURE__ */ C(Fe, { variant: "h7", component: "div", children: [
          " ",
          i?.data?.title || ""
        ] }),
        /* @__PURE__ */ n(Fe, { variant: "caption", component: "div", children: i?.data?.subTitle || /* @__PURE__ */ n(ue, { children: " " }) })
      ] }),
      /* @__PURE__ */ C(de, { className: "text-right", size: 1, children: [
        /* @__PURE__ */ n(Ka, { className: "cursor_pointer mt-2 mr-2", onClick: u }),
        /* @__PURE__ */ n(qa, { className: "cursor_pointer mt-2", onClick: () => {
          s({
            type: V.OPEN_MODAL,
            payload: { status: !1, data: {} }
          });
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ C(Oa, { dividers: !0, children: [
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
          onLoad: () => a(!1)
        }
      )
    ] })
  ] }) });
};
function ii({
  titleHeading: e,
  navigate: t,
  name: r = null,
  RightComponent: a = null,
  mobileRightComponent: o,
  title: s = "",
  titleClass: i = "text-theme-blue text-max-width",
  showBreadcrumbs: d,
  breadcrumbs: m = [],
  enableBackButton: g = !1,
  breadcrumbColor: u,
  showHelpButton: p = !1
}) {
  const l = _o(!0), h = m.length - 1, c = d && m.length, f = () => {
    t(-1);
  };
  return oe(() => {
    s && (document.title = s);
  }, [s]), /* @__PURE__ */ C(ue, { children: [
    /* @__PURE__ */ n(Rr, { className: "print-only", text: e }),
    c && /* @__PURE__ */ C(ue, { children: [
      /* @__PURE__ */ n(Hr, { sx: { mb: 3 }, children: /* @__PURE__ */ C(Kr, { sx: { backgroundColor: u || "#fff" }, children: [
        /* @__PURE__ */ C(de, { container: !0, children: [
          /* @__PURE__ */ n(de, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ n(Pa, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${i} breadcrumbs-text-title text-max-width`, children: m.map((b, E) => E < h ? /* @__PURE__ */ n(Ia, { onClick: f, className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: b.text }, E) : /* @__PURE__ */ n(Fe, { className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", children: b.text }, E)) }) }),
          (m.length > 1 || g) && /* @__PURE__ */ n(de, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(st, { variant: "contained", onClick: f, children: "Back" }) }),
          p && /* @__PURE__ */ n(de, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(qr, { color: "primary", title: "Help", size: "large", children: /* @__PURE__ */ n(Ha, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ n(ze, { className: "app-page-title--first", children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("div", { style: { display: l ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ n("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ n(
          Rr,
          {
            className: `${i} page-text-title`,
            variant: "p",
            text: e,
            name: r
          }
        ) }) }) }) }),
        !l && /* @__PURE__ */ C(ue, { children: [
          /* @__PURE__ */ C(ze, { children: [
            " ",
            a && /* @__PURE__ */ n(a, {}),
            " "
          ] }),
          /* @__PURE__ */ C(ze, { children: [
            " ",
            o,
            " "
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ n(oi, {})
    ] })
  ] });
}
const cn = wa()(ii);
re.extend(Za);
const si = {
  date: Yr,
  datetime: ur,
  dateTimeLocal: ur
}, li = (e) => {
  const { fixedFilterFormat: t } = ct, { item: r, applyValue: a, convert: o } = e, { systemDateTimeFormat: s, stateData: i } = We(), d = e?.type || "date", m = t[d], g = (f) => {
    const b = re(f);
    return b.isValid() && b.year() > 1900;
  }, u = s(i.dateTime), p = (f) => {
    if (!(d !== "date" && d !== "datetime" && d !== "dateTimeLocal" || ((E) => typeof E != "string" ? !1 : !re(E, u, !0).isValid())(f))) {
      if (o) {
        f = re(f).utc(), a({ ...r, value: f });
        return;
      }
      if (!g(f)) {
        a({ ...r, value: null });
        return;
      }
      a({ ...r, value: f.format(m) });
    }
  }, l = (f) => {
    if (f && f === t.OverrideDateFormat) {
      const b = f.split("-");
      return b.length === 3 ? b[1] : null;
    }
  }, h = si[d], c = d === "dateTimeLocal" ? r?.value ? re(r?.value.$d) : null : r?.value ? re(r.value) : null;
  return /* @__PURE__ */ n(Xa, { dateAdapter: Qa, children: /* @__PURE__ */ n(
    h,
    {
      fullWidth: !0,
      format: u,
      value: c,
      onChange: p,
      slotProps: { textField: { variant: "standard", label: "Value" } },
      localeText: {
        fieldMonthPlaceholder: () => l(u) === "MMM" ? "MMM" : "MM"
      }
    }
  ) });
}, Bt = (e) => zr().map((t) => ({
  ...t,
  InputComponent: t.InputComponent ? (r) => /* @__PURE__ */ n(li, { ...r, ...e }) : void 0
})), Ie = {
  Edit: "Edit",
  Delete: "Delete"
}, it = {
  Add: "Add",
  Manage: "Manage"
}, ci = [
  { field: "prefName", type: "string", width: 300, headerName: "Preference Name", sortable: !1, filterable: !1 },
  { field: "prefDesc", type: "string", width: 300, headerName: "Preference Description", sortable: !1, filterable: !1 },
  { field: "isDefault", type: "boolean", width: 100, headerName: "Default", sortable: !1, filterable: !1 },
  { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(Ve, { icon: /* @__PURE__ */ C(Pe, { title: Ie.Edit, children: [
    "   ",
    /* @__PURE__ */ n(cr, {})
  ] }), tabIndex: 1, "data-action": Ie.Edit, label: "Edit", color: "primary" }, 1)] },
  { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(Ve, { icon: /* @__PURE__ */ C(Pe, { title: Ie.Delete, children: [
    /* @__PURE__ */ n(Wr, {}),
    " "
  ] }), tabIndex: 2, "data-action": Ie.Delete, label: "Delete", color: "error" }, 2)] }
], di = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, ui = [5, 10, 20, 50, 100], pi = ({ tTranslate: e = (s) => s, preferenceName: t, gridRef: r, columns: a = [], setIsGridPreferenceFetched: o }) => {
  const { stateData: s, dispatchData: i, removeCurrentPreferenceName: d, getAllSavedPreferences: m } = We(), { navigate: g } = Kt(), u = Ur(), p = Ht(), { t: l, i18n: h } = mr(), c = { t: l, i18n: h }, [f, b] = S(!1), [E, x] = S(!1), [T, A] = S([]), [N, K] = S(), [q, ae] = S(), [ee, F] = S(!1), [X, te] = S({}), { Username: M } = s?.getUserData ? s.getUserData : {}, H = s?.preferences, U = s?.currentPreference, O = s?.gridSettings?.permissions?.preferenceApi, W = s?.gridSettings?.permissions?.defaultPreferenceEnums, Y = lr(r, Gr), J = lr(r, ma), ye = ge(() => ne.object({
    prefName: ne.string().trim(!0).required("Preference Name is Required").max(20, "Maximum Length is 20"),
    prefDesc: ne.string().max(100, "Description maximum length is 100")
  }), []);
  oe(() => {
    A(H?.filter((P) => P.prefId !== 0));
  }, [H]);
  const Z = Jr({
    initialValues: di,
    validationSchema: ye,
    onSubmit: async (P) => {
      await Be(P);
    },
    mode: "onBlur"
  }), be = (P) => {
    ae(P?.currentTarget);
  }, Te = () => {
    ae(null);
  }, rt = () => {
    K(), Te(), b(!1);
  }, Re = async (P, k) => {
    const le = await At({ url: O, params: {
      action: "delete",
      id: t,
      Username: M,
      prefIdArray: P
    }, history: g, dispatchData: i });
    (le === !0 || le?.success) && (k === U && d({ dispatchData: i }), p.showMessage("Preference Deleted Successfully."));
  }, Ne = async (P) => {
    o && o(!1), await Le(P);
  }, Be = async (P) => {
    const k = P.prefName.trim(), Ce = H.findIndex((Ae) => Ae.prefName === k);
    if (Ce > -1 && (N === it.Add || H[Ce].prefId !== P.prefId)) {
      F(!0);
      return;
    }
    const { pinnedColumns: le } = r.current.state, { orderedFields: ce, columnVisibilityModel: He, lookup: Se } = r.current.state.columns, Ke = [];
    ce?.forEach((Ae) => {
      const { field: qe } = Se[Ae], ke = a.find((at) => at.field === qe) || Se[Ae];
      ke.width = Se[Ae].width, Ke.push(ke);
    });
    const he = Y?.items?.map((Ae) => {
      const { field: qe, operator: ke, value: at } = Ae;
      return { field: qe, operator: ke, value: at };
    });
    Y.items = he;
    const ie = {
      action: "save",
      id: t,
      prefName: k,
      prefDesc: P.prefDesc,
      prefValue: { sortModel: J, filterModel: Y, columnVisibilityModel: He, gridColumn: Ke, pinnedColumns: le },
      isDefault: P.isDefault
    };
    P.prefId && (ie.prefId = P.prefId);
    const Me = await At({ url: O, params: ie, history: g, dispatchData: i }), fe = N === it.Add ? "Added" : "Saved";
    (Me === !0 || Me?.success === !0) && (p.showMessage(`Preference ${fe} Successfully.`), rt()), m({ preferenceName: t, Username: M, history: g, dispatchData: i, preferenceApi: O, defaultPreferenceEnums: W });
  }, Le = async (P) => {
    let k, Ce = "Default";
    if (P === 0)
      k = W[t] || null;
    else {
      const ie = await At({ url: O, params: {
        action: "load",
        id: t,
        Username: M,
        prefId: P
      }, history: g, dispatchData: i }) || {};
      k = ie.prefValue ? JSON.parse(ie.prefValue) : null, ie.prefName && (Ce = ie.prefName);
    }
    if (!k) return;
    const { gridColumn: le, columnVisibilityModel: ce, pinnedColumns: He, sortModel: Se, filterModel: Ke } = k;
    le.forEach(({ field: he, width: ie }) => {
      r.current.getColumnIndex(he) !== -1 && r.current.setColumnWidth(he, ie);
    }), r.current.setColumnVisibilityModel(ce), r.current.state.columns.orderedFields = le.map(({ field: he }) => he), r.current.setPinnedColumns(He), r.current.setSortModel(Se || []), r.current.setFilterModel(Ke), i({ type: V.SET_CURRENT_PREFERENCE_NAME, payload: Ce }), o(!0);
  }, we = (P) => P.GridPreferenceId, ut = (P, k = !0) => {
    K(P), Te(), b(!0), x(k), k && Z.resetForm();
  }, xt = async () => {
    const { prefId: P, preferenceName: k } = X;
    await Re(P, k), m({ preferenceName: t, history: g, dispatchData: i, Username: M, preferenceApi: O, defaultPreferenceEnums: W }), te({});
  }, pt = async (P) => {
    const k = P.field === "editAction" ? Ie.Edit : P.field === "deleteAction" ? Ie.Delete : null;
    if (P.id === 0 && (k === Ie.Edit || k === Ie.Delete)) {
      p.showMessage(`Default Preference Can Not Be ${k === Ie.Edit ? "Edited" : "Deleted"}`);
      return;
    }
    k === Ie.Edit && (K("Modify"), Z.setValues(P?.row), x(!0)), k === Ie.Delete && te({
      prefId: P.id,
      preferenceName: P.row.prefName
    });
  }, nt = Z.values.prefName.trim(), pe = N === it.Manage;
  return /* @__PURE__ */ C(ze, { children: [
    /* @__PURE__ */ C(
      st,
      {
        id: "grid-preferences-btn",
        "aria-controls": q ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": q ? "true" : void 0,
        onClick: be,
        title: e("Preference", c),
        startIcon: /* @__PURE__ */ n(Ir, {}),
        children: [
          e("Preferences", c),
          " ",
          U && `(${U})`
        ]
      }
    ),
    /* @__PURE__ */ C(
      Fa,
      {
        id: "grid-preference-menu",
        anchorEl: q,
        open: !!q,
        onClose: Te,
        component: Ma,
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
          /* @__PURE__ */ n(_t, { component: Pr, dense: !0, onClick: () => ut(it.Add), children: e("Add Preference", c) }),
          /* @__PURE__ */ C(_t, { component: Pr, dense: !0, divider: H?.length > 0, onClick: () => ut(it.Manage, !1), children: [
            /* @__PURE__ */ n(Ra, { children: /* @__PURE__ */ n(Ir, {}) }),
            e("Manage Preferences", c)
          ] }),
          H?.length > 0 && H?.map((P) => {
            const { prefName: k, prefDesc: Ce, prefId: le } = P;
            return /* @__PURE__ */ n(
              _t,
              {
                onClick: () => Ne(le),
                component: Na,
                selected: U === k,
                title: e(Ce, c),
                dense: !0,
                children: /* @__PURE__ */ n(Ba, { primary: e(k, c) })
              },
              `pref-item-${le}`
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ C(
      Ge,
      {
        open: f,
        disableRestoreFocus: !0,
        title: /* @__PURE__ */ n(or, { direction: "row", columnGap: 2, children: /* @__PURE__ */ C(Fe, { variant: "h5", children: [
          N,
          " ",
          e(`Preference${N === it.Manage ? "s" : ""}`, c)
        ] }) }),
        maxWidth: pe ? "md" : "sm",
        fullWidth: !0,
        children: [
          E && /* @__PURE__ */ C(
            de,
            {
              component: "form",
              onSubmit: Z.handleSubmit,
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
                /* @__PURE__ */ n(de, { size: 12, children: /* @__PURE__ */ n(
                  $t,
                  {
                    defaultValue: e(Z.values.prefName, c),
                    variant: "outlined",
                    size: "small",
                    margin: "dense",
                    label: /* @__PURE__ */ C("span", { children: [
                      e("Preference Name", c),
                      " ",
                      /* @__PURE__ */ n("span", { style: { color: "red" }, children: "*" })
                    ] }),
                    autoFocus: !0,
                    name: "prefName",
                    onChange: Z.handleChange,
                    error: !!Z.errors.prefName,
                    helperText: Z.errors.prefName,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ n(de, { size: 12, children: /* @__PURE__ */ n(
                  $t,
                  {
                    defaultValue: e(Z.values.prefDesc, c),
                    variant: "outlined",
                    multiline: !0,
                    rows: 2,
                    size: "small",
                    margin: "dense",
                    label: e("Preference Description", c),
                    name: "prefDesc",
                    onChange: Z.handleChange,
                    error: !!Z.errors.prefDesc,
                    helperText: Z.errors.prefDesc,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ n(de, { size: 12, children: /* @__PURE__ */ n(
                  lt,
                  {
                    control: /* @__PURE__ */ n(
                      La,
                      {
                        checked: Z.values.isDefault,
                        name: "isDefault",
                        onChange: Z.handleChange
                      }
                    ),
                    label: e("Default", c)
                  }
                ) }),
                /* @__PURE__ */ n(de, { size: 12, children: /* @__PURE__ */ C(or, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
                  /* @__PURE__ */ n(
                    st,
                    {
                      type: "submit",
                      size: "small",
                      startIcon: /* @__PURE__ */ n(eo, {}),
                      color: "primary",
                      variant: "contained",
                      disableElevation: !0,
                      children: e("Save", c)
                    }
                  ),
                  /* @__PURE__ */ n(
                    st,
                    {
                      type: "button",
                      startIcon: /* @__PURE__ */ n(dr, {}),
                      color: "error",
                      variant: "contained",
                      size: "small",
                      onClick: rt,
                      disableElevation: !0,
                      children: e("Close", c)
                    }
                  )
                ] }) })
              ]
            }
          ),
          f && N === it.Manage && /* @__PURE__ */ C(de, { container: !0, rowGap: 2, children: [
            /* @__PURE__ */ n(de, { size: 12, children: /* @__PURE__ */ n(
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
                onCellClick: pt,
                columns: ci,
                pageSizeOptions: ui,
                pagination: !0,
                rowCount: T.length,
                rows: T,
                getRowId: we,
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
            /* @__PURE__ */ n(de, { size: 12, children: /* @__PURE__ */ n(or, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ n(
              st,
              {
                type: "button",
                startIcon: /* @__PURE__ */ n(dr, {}),
                color: "error",
                variant: "contained",
                size: "small",
                onClick: rt,
                disableElevation: !0,
                children: e("Close", c)
              }
            ) }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ C(
      Ge,
      {
        open: ee,
        onConfirm: () => F(!1),
        title: "",
        okText: e("Ok", c),
        cancelText: "",
        children: [
          '"',
          nt,
          '" ',
          e("name already in use, please use another name.", c)
        ]
      }
    ),
    /* @__PURE__ */ C(
      Ge,
      {
        open: X.preferenceName,
        onConfirm: xt,
        onCancel: () => te({}),
        title: "Confirm delete",
        yesNo: !0,
        children: [
          'Are you sure you wish to delete "',
          X.preferenceName,
          '"'
        ]
      }
    )
  ] });
}, fi = {
  IsAnyOf: "isAnyOf"
}, mi = (e) => {
  const { column: t, item: r, applyValue: a, apiRef: o } = e, s = t?.dataRef?.current?.lookups;
  let i = t.customLookup || s[t.lookup] || [];
  typeof t.lookup == "string" && (i = i.map(({ label: p, value: l }) => ({
    label: p,
    value: l
  })));
  const d = lr(o, Gr), m = ge(
    () => d.items?.filter((p) => p.field === t.field),
    [t.field, d.items]
  ), g = Ot(
    (p) => {
      let l = p.target.value;
      if (d.items.length >= 1) {
        l = l.length === 1 ? l[0] : l;
        for (const f of d.items)
          f.field === r.field && (f.operator === fi.IsAnyOf ? l = Array.isArray(l) ? l : [l] : l = l === 0 ? "0" : l);
      }
      if (l.length === 0 && m[0]) {
        o.current.deleteFilterItem(m[0]);
        return;
      }
      const h = l, c = m[0] ? m[0] : r;
      a({ ...c, value: h });
    },
    [o, t.applyZeroFilter, m, r, a]
  ), u = m[0]?.value ?? "";
  return /* @__PURE__ */ C(hr, { variant: "standard", className: "w-100", children: [
    /* @__PURE__ */ n(ka, {}),
    /* @__PURE__ */ n(
      _a,
      {
        label: t.field,
        variant: "standard",
        value: u,
        onChange: (p) => g(p),
        multiple: Array.isArray(u),
        MenuProps: {
          PaperProps: {
            style: {
              height: "fit-content",
              overflow: "hidden"
            }
          }
        },
        children: i?.map((p, l) => /* @__PURE__ */ n(_t, { value: p.value, children: p.label }, l))
      }
    )
  ] });
}, hi = (e, t, r) => typeof e !== t.string ? [] : e.split(",").map((a) => {
  r.lastIndex = 0;
  const o = r.exec(a);
  if (!o) return null;
  const [, s, i = "ASC"] = o;
  return {
    field: s.trim(),
    sort: i.trim().toLowerCase()
  };
}).filter(Boolean), ht = ({ tTranslate: e, tOpts: t, handleExport: r, contentType: a, type: o, isPivotExport: s = !1 }) => /* @__PURE__ */ C(
  Xr,
  {
    onClick: r,
    "data-type": o,
    "data-content-type": a,
    "data-is-pivot-export": s,
    children: [
      e("Export", t),
      " ",
      o.charAt(0).toUpperCase() + o.slice(1).toLowerCase()
    ]
  }
), gi = ({ exportFormats: e, ...t }) => /* @__PURE__ */ C(ha, { ...t, children: [
  e.csv !== !1 && /* @__PURE__ */ n(ht, { ...t, type: "csv", contentType: "text/csv" }),
  e.excel !== !1 && /* @__PURE__ */ n(ht, { ...t, type: "excel", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
  t.showPivotExportBtn && /* @__PURE__ */ n(ht, { ...t, type: "excel With Pivot", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", isPivotExport: !0 }),
  e.xml !== !1 && /* @__PURE__ */ n(ht, { ...t, type: "xml", contentType: "text/xml" }),
  e.html !== !1 && /* @__PURE__ */ n(ht, { ...t, type: "html", contentType: "text/html" }),
  e.json !== !1 && /* @__PURE__ */ n(ht, { ...t, type: "json", contentType: "application/json" })
] }), yi = (e = {}, t = {}) => {
  let r = !0;
  for (const a in e)
    e[a] !== t[a] && (r = !1);
  for (const a in t)
    a in e || (r = !1);
  return r;
}, bi = 10, Ci = /(\w+)( ASC| DESC)?/i, Ei = 6e4, xe = {
  Copy: "Copy",
  Edit: "Edit",
  Delete: "Delete",
  History: "History",
  Download: "Download"
}, xi = {
  article: /* @__PURE__ */ n(Da, {})
}, $ = {
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
}, Di = [
  { key: "addCreatedOnColumn", field: "CreatedOn", type: "dateTime", header: "Created On" },
  { key: "addCreatedByColumn", field: "CreatedByUser", type: "string", header: "Created By" },
  { key: "addModifiedOnColumn", field: "ModifiedOn", type: "dateTime", header: "Modified On" },
  { key: "addModifiedByColumn", field: "ModifiedByUser", type: "string", header: "Modified By" }
], vi = (e) => e.value ? /* @__PURE__ */ n(Wa, { style: { color: "green" } }) : /* @__PURE__ */ n(dr, { style: { color: "gray" } }), Nr = jt("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), Lt = jt(ve)({
  margin: "6px"
}), Ti = jt(ga)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  minHeight: "auto",
  borderBottom: "none"
}), wi = function(e) {
  const {
    model: t,
    data: r,
    currentPreference: a,
    isReadOnly: o,
    canAdd: s,
    forAssignment: i,
    showAddIcon: d,
    onAdd: m,
    selectionApi: g,
    selectedSet: u,
    selectAll: p,
    available: l,
    onAssign: h,
    assigned: c,
    onUnassign: f,
    effectivePermissions: b,
    clearFilters: E,
    handleExport: x,
    preferenceName: T,
    apiRef: A,
    gridColumns: N,
    setIsGridPreferenceFetched: K,
    tTranslate: q,
    tOpts: ae
  } = e, ee = t.customAddText || (t.title ? `Add ${t.title}` : "Add");
  return /* @__PURE__ */ C(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px"
      },
      children: [
        /* @__PURE__ */ C("div", { children: [
          t.gridSubTitle && /* @__PURE__ */ C(St, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
            " ",
            q(t.gridSubTitle, ae)
          ] }),
          a && t.showPreferenceInHeader && /* @__PURE__ */ C(St, { className: "preference-name-text", variant: "h6", component: "h6", textAlign: "center", sx: { ml: 1 }, children: [
            q("Applied Preference", ae),
            " - ",
            a
          ] }),
          (o || !s && !i) && /* @__PURE__ */ C(St, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
            " ",
            !s || o ? "" : t.title
          ] }),
          !i && s && !o && /* @__PURE__ */ n(Lt, { startIcon: d ? /* @__PURE__ */ n(Or, {}) : null, onClick: m, size: "medium", variant: "contained", children: ee }),
          g.length && r.records.length ? /* @__PURE__ */ n(
            Lt,
            {
              onClick: p,
              size: "medium",
              variant: "contained",
              children: u.current.size === r.records.length ? "Deselect All" : "Select All"
            }
          ) : /* @__PURE__ */ n(ue, {}),
          l && /* @__PURE__ */ n(Lt, { startIcon: d ? /* @__PURE__ */ n(Or, {}) : null, onClick: h, size: "medium", variant: "contained", children: "Assign" }),
          c && /* @__PURE__ */ n(Lt, { startIcon: d ? /* @__PURE__ */ n(Ta, {}) : null, onClick: f, size: "medium", variant: "contained", children: "Remove" })
        ] }),
        /* @__PURE__ */ C(Ti, { ...e, children: [
          b.showColumnsOrder && /* @__PURE__ */ n(
            Ea,
            {
              render: (F) => /* @__PURE__ */ n(
                ve,
                {
                  ...F,
                  startIcon: /* @__PURE__ */ n(no, {}),
                  size: "small",
                  variant: "text",
                  children: q("COLUMNS", ae)
                }
              )
            }
          ),
          b.filter && /* @__PURE__ */ C(ue, { children: [
            /* @__PURE__ */ n(
              xa,
              {
                render: (F) => /* @__PURE__ */ n(
                  ve,
                  {
                    ...F,
                    startIcon: /* @__PURE__ */ n(ao, {}),
                    size: "small",
                    variant: "text",
                    children: q("FILTERS", ae)
                  }
                )
              }
            ),
            /* @__PURE__ */ n(ve, { startIcon: /* @__PURE__ */ n(va, {}), onClick: E, size: "small", children: "CLEAR FILTER" })
          ] }),
          b.export && /* @__PURE__ */ n(gi, { handleExport: x, showPivotExportBtn: t.pivotApi, exportFormats: t.exportFormats || {}, tTranslate: q, tOpts: ae }),
          T && /* @__PURE__ */ n(pi, { preferenceName: T, gridRef: A, columns: N, setIsGridPreferenceFetched: K })
        ] })
      ]
    }
  );
}, Br = Vr(({
  model: e,
  columns: t,
  api: r,
  defaultSort: a,
  setActiveRecord: o,
  parentFilters: s,
  parent: i,
  where: d,
  title: m,
  permissions: g,
  selected: u,
  assigned: p,
  available: l,
  disableCellRedirect: h = !1,
  onAssignChange: c,
  customStyle: f,
  onCellClick: b,
  showRowsSelected: E,
  chartFilters: x,
  clearChartFilter: T,
  showFullScreenLoader: A,
  customFilters: N,
  onRowDoubleClick: K,
  onRowClick: q = () => {
  },
  gridStyle: ae,
  reRenderKey: ee,
  additionalFilters: F,
  onCellDoubleClickOverride: X,
  onAddOverride: te,
  dynamicColumns: M,
  readOnly: H = !1,
  baseFilters: U = [],
  ...O
}) => {
  const [W, Y] = S({ pageSize: bi, page: 0 }), [J, ye] = S({ recordCount: 0, records: [], lookups: {} }), [Z, be] = S(!0), Te = !!c, rt = E, [Re, Ne] = S([]), [Be, Le] = S(!1), [we, ut] = S(null), xt = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [pt, nt] = S(!1), pe = Ht(), P = e.paginationMode === $.client ? $.client : $.server, { t: k, i18n: Ce } = mr(), le = { t: k, i18n: Ce }, [ce, He] = S(""), [Se, Ke] = S(hi(a || e.defaultSort, $, Ci)), he = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (he.items = [], e.defaultFilters.forEach((y) => {
    he.items.push(y);
  }));
  const [ie, Me] = S({ ...he }), { navigate: fe, getParams: Ae, useParams: qe, pathname: ke } = Kt(), { id: at } = qe() || Ae, Pt = at?.split("-")[0], Ye = Ur(), { idProperty: me = "id", showHeaderFilters: B = !0, disableRowSelectionOnClick: Ee = !0, hideBackButton: Q = !1, hideTopFilters: Je = !0, updatePageTitle: Ze = !0, isElasticScreen: Xe = !1, navigateBack: qt = !1, selectionApi: ft = {} } = e, _e = e.readOnly === !0 || H, It = e.allowDoubleClick === !1, Yt = Sr(J), mn = e.showAddIcon === !0, hn = e.columns.filter(({ link: y }) => !!y).map((y) => y.link), [yr, br] = S(!1), { stateData: $e, dispatchData: Oe, formatDate: Jt, removeCurrentPreferenceName: gn, getAllSavedPreferences: yn, applyDefaultPreferenceIfExists: bn } = We(), { timeZone: Zt } = $e, Dt = { ...$.permissions, ...$e.gridSettings.permissions, ...e.permissions, ...g }, { Username: Cn } = $e?.getUserData ? $e.getUserData : {}, {
    gridSettings: {
      permissions: {
        routesWithNoChildRoute: En = [],
        Url: vt,
        withControllersUrl: Xt,
        defaultPreferenceEnums: xn,
        preferenceApi: Qt,
        historyScreenName: Dn = "historyScreen"
      } = {}
    } = {},
    currentPreference: vn
  } = $e, Tn = ["isEmpty", "isNotEmpty", "isAnyOf"], wn = $e.getUserData || {}, Cr = e.columns.find((y) => y.type === "fileUpload")?.field || "", Sn = { add: Dt.add, edit: Dt.edit, delete: Dt.delete }, { canAdd: An, canEdit: Er, canDelete: On } = rn({ userData: wn, model: e, userDefinedPermissions: Sn }), xr = e.tTranslate ?? ((y) => y), { addUrlParamKey: er, searchParamKey: Ft, hideBreadcrumb: Pn = !1, tableName: In, showHistory: Fn = !0, hideBreadcrumbInGrid: Mn = !1, breadcrumbColor: Rn } = e, Nn = e.gridTitle || e.title, Mt = e.preferenceId || e.module?.preferenceId, mt = new URLSearchParams(window.location.search), Dr = mt.has("baseData") && mt.get("baseData"), Bn = (() => {
    if (Dr) {
      const y = JSON.parse(Dr);
      if (typeof y === $.object && y !== null)
        return y;
    }
    return {};
  })(), se = Sr(/* @__PURE__ */ new Set()), Ln = ({ row: y }) => {
    const I = y[me];
    se.current.has(I) ? se.current.delete(I) : se.current.add(I), Ne(Array.from(se.current));
  }, kn = (y) => {
    const I = y.row[me], [w, D] = S(se.current.has(I));
    return oe(() => {
      D(se.current.has(I));
    }, [y.row, se.current.size]), /* @__PURE__ */ n(
      Zr,
      {
        onClick: (_) => {
          _.stopPropagation(), Ln(y);
        },
        checked: w,
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
      valueFormatter: (y) => Jt({ value: y, useSystemFormat: !0, showOnlyDate: !1, state: $e.dateTime, timeZone: Zt }),
      filterOperators: Bt({ columnType: "date" })
    },
    dateTime: {
      valueFormatter: (y) => Jt({ value: y, useSystemFormat: !1, showOnlyDate: !1, state: $e.dateTime, timeZone: Zt }),
      filterOperators: Bt({ columnType: "datetime" })
    },
    dateTimeLocal: {
      valueFormatter: (y) => Jt({ value: y, useSystemFormat: !1, showOnlyDate: !1, state: $e.dateTime, timeZone: Zt }),
      filterOperators: Bt({ type: "dateTimeLocal", convert: !0 })
    },
    boolean: {
      renderCell: vi
    },
    select: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    selection: {
      renderCell: (y) => /* @__PURE__ */ n(kn, { ...y })
    }
  };
  oe(() => {
    Yt.current = J;
  }, [J]), oe(() => {
    if (!N || !Object.keys(N).length) return;
    if (N.clear) {
      Me({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
      return;
    }
    const y = Object.entries(N).reduce((I, [w, D]) => (w === $.startDate || w === $.endDate ? I.push(D) : w in N && I.push({ field: w, value: D, operator: "equals", type: "string" }), I), []);
    Me({ items: y, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [N]);
  const _n = ({ field: y }) => (Yt.current.lookups || {})[nr[y].lookup] || [];
  oe(() => {
    O.isChildGrid || !Je || Oe({
      type: V.PASS_FILTERS_TO_HEADER,
      payload: {
        filterButton: null,
        hidden: { search: !0, operation: !0, export: !0, print: !0, filter: !0 }
      }
    });
  }, []);
  const { customActions: rr = [] } = e, { gridColumns: Qe, pinnedColumns: $n, lookupMap: nr } = ge(() => {
    let y = t || e.gridColumns || e.columns;
    M && (y = [...M, ...y]);
    const I = { left: [ya.field], right: [] }, w = [], D = {};
    for (const R of y) {
      if (R.gridLabel === null || i && R.lookup === i || R.type === $.oneToMany && R.countInList === !1) continue;
      const G = {};
      if (R.type === $.oneToMany && (G.type = "number", G.field = R.field.replace(/s$/, "Count")), tr[R.type] && Object.assign(G, tr[R.type]), G.valueOptions === $.lookup || R.type === $.boolean) {
        let z = [];
        G.valueOptions === $.lookup && (G.valueOptions = _n, z = [...zr(), ...ba()].filter((Tt) => ["is", "not", "isAnyOf"].includes(Tt.value))), R.type === $.boolean && (z = Ca()), G.filterOperators = z.map((L) => ({
          ...L,
          InputComponent: L.InputComponent ? (Tt) => /* @__PURE__ */ n(
            mi,
            {
              column: {
                ...R,
                ...R.type === $.boolean ? {
                  customLookup: [
                    { value: !0, label: "Yes" },
                    { value: !1, label: "No" }
                  ]
                } : {},
                dataRef: Yt
              },
              ...Tt,
              autoHighlight: !0
            }
          ) : void 0
        }));
      }
      (R.linkTo || R.link) && (G.cellClassName = "mui-grid-linkColumn");
      const j = xr(R.gridLabel || R.label, le);
      w.push({ headerName: j, description: j, ...R, ...G }), R.pinned && I[R.pinned === $.right ? $.right : $.left].push(R.field), D[R.field] = R;
    }
    let v = e.standard;
    v === !0 && (v = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), v && typeof v === $.object && Di.forEach(({ key: R, field: G, type: j, header: z }) => {
      if (v[R] === !0) {
        const L = { field: G, type: j, headerName: z, width: 200 };
        j === $.dateTime && (L.filterOperators = Bt({ columnType: "date" }), L.valueFormatter = tr.dateTime.valueFormatter, L.keepLocal = !0), w.push(L);
      }
    });
    const _ = [];
    return !Te && !_e && (Er && _.push(/* @__PURE__ */ n(Ve, { icon: /* @__PURE__ */ n(Pe, { title: "Edit", children: /* @__PURE__ */ n(cr, {}) }), "data-action": xe.Edit, label: "Edit", color: "primary" })), Dt.copy && _.push(/* @__PURE__ */ n(Ve, { icon: /* @__PURE__ */ C(Pe, { title: "Copy", children: [
      /* @__PURE__ */ n(Ar, {}),
      " "
    ] }), "data-action": xe.Copy, label: "Copy", color: "primary" })), On && _.push(/* @__PURE__ */ n(Ve, { icon: /* @__PURE__ */ C(Pe, { title: "Delete", children: [
      /* @__PURE__ */ n(Wr, {}),
      " "
    ] }), "data-action": xe.Delete, label: "Delete", color: "error" })), Fn && _.push(/* @__PURE__ */ n(Ve, { icon: /* @__PURE__ */ C(Pe, { title: "History", children: [
      /* @__PURE__ */ n(to, {}),
      " "
    ] }), "data-action": xe.History, label: "History", color: "primary" })), rr.length && rr.forEach(({ icon: R, action: G, color: j }) => {
      _.push(
        /* @__PURE__ */ n(
          Ve,
          {
            icon: /* @__PURE__ */ n(Pe, { title: G, children: xi[R] || /* @__PURE__ */ n(Ar, {}) }),
            "data-action": G,
            label: G,
            color: j || "primary"
          }
        )
      );
    })), Cr.length && _.push(/* @__PURE__ */ n(Ve, { icon: /* @__PURE__ */ C(Pe, { title: "Download document", children: [
      /* @__PURE__ */ n(ro, {}),
      " "
    ] }), "data-action": xe.Download, label: "Download document", color: "primary" })), _.length && w.push({
      field: "actions",
      type: "actions",
      label: "",
      width: _.length * 50,
      hidable: !1,
      getActions: (R) => {
        const G = [..._];
        if (Er && !_e) {
          const j = R.row.canEdit === !1;
          G[0] = /* @__PURE__ */ n(
            Ve,
            {
              icon: /* @__PURE__ */ n(Pe, { title: "Edit", children: /* @__PURE__ */ n(cr, {}) }),
              "data-action": xe.Edit,
              label: "Edit",
              color: "primary",
              disabled: j
            }
          );
        }
        return G;
      }
    }), I.right.push("actions"), { gridColumns: w, pinnedColumns: I, lookupMap: D };
  }, [t, e, i, g, Te, M]), Rt = (y = "list", I = {}, w, D, v, _) => {
    const { pageSize: R, page: G } = W;
    let j = e.controllerType, z = `${j === "cs" ? Xt : vt || ""}${e.api || r}`;
    v && (z = `${Xt}${e.pivotApi}`, j = "cs"), (p || l) && (I[p ? "include" : "exclude"] = Array.isArray(u) ? u.join(",") : u);
    const L = { ...ie };
    if (x?.items?.length > 0) {
      const { columnField: ot, operatorValue: ar } = x.items[0] || {}, na = $.chartFilterFields[ot];
      L.items = [{ field: na, operator: ar, isChartFilter: !1 }], JSON.stringify(ie) !== JSON.stringify(L) && (Me({ ...L }), x.items.length = 0);
    }
    e.joinColumn && Pt && U.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(Pt) }), F && (L.items = [...L.items || [], ...F]), I = { ...I, ...O.extraParams }, (!L.items.length || L.items.every((ot) => "value" in ot && ot.value !== void 0)) && No({
      action: y,
      page: w ? 0 : G,
      pageSize: w ? 1e6 : R,
      sortModel: Se,
      filterModel: L,
      controllerType: j,
      api: z,
      setIsLoading: be,
      setData: ye,
      gridColumns: Qe,
      model: e,
      parentFilters: s,
      extraParams: I,
      setError: pe.showError,
      contentType: w,
      columns: D,
      template: v ? e.exportTemplate : null,
      configFileName: v ? e.configFileName : null,
      dispatchData: Oe,
      showFullScreenLoader: A,
      history: fe,
      baseFilters: U,
      isElasticExport: _
    });
  }, Nt = ({ id: y, record: I = {}, mode: w }) => {
    if (o) {
      nn({ id: y, api: r || e.api, setIsLoading: be, setActiveRecord: o, model: e, parentFilters: s, where: d });
      return;
    }
    let D = ke;
    D.endsWith("/") || (D += "/"), w === "copy" ? (D += "0-" + y, Oe({ type: "UPDATE_FORM_MODE", payload: "copy" })) : (D += y, Oe({ type: "UPDATE_FORM_MODE", payload: "" })), er && (mt.set(er, I[er]), D += `?${mt.toString()}`), fe(D);
  }, Vn = async ({ documentLink: y, fileName: I }) => {
    if (y)
      try {
        const w = await fetch(y);
        if (!w.ok)
          throw new Error(`Failed to fetch the file: ${w.statusText}`);
        const D = await w.blob(), v = window.URL.createObjectURL(D), _ = document.createElement("a");
        _.href = v;
        const R = y.split("/").pop() || `downloaded-file.${D.type.split("/")[1] || "txt"}`;
        _.download = I || R, document.body.appendChild(_), _.click(), document.body.removeChild(_), window.URL.revokeObjectURL(v);
      } catch {
        window.open(y);
      }
  }, zn = async (y, I, w) => {
    let D = y.field === e.linkColumn ? xe.Edit : null;
    if (!D && y.field === $.actions && (D = w?.action, !D)) {
      const j = I.target.closest("button");
      j && (D = j.dataset.action);
    }
    const { row: v } = y;
    if (!_e) {
      if (b && typeof await b({ cellParams: y, event: I, details: w }) !== $.boolean)
        return;
      const j = nr[y.field] || {};
      if (j.linkTo) {
        fe({
          pathname: sr.replaceTags(j.linkTo, v)
        });
        return;
      }
      switch (D) {
        case xe.Edit:
          return Nt({ id: v[me], record: v });
        case xe.Copy:
          return Nt({ id: v[me], mode: "copy" });
        case xe.Delete:
          Le(!0), ut({ name: v[e.linkColumn], id: v[me] });
          break;
        case xe.History:
          return fe(`${Dn}?tableName=${In}&id=${v[me]}&breadCrumb=${Ft ? mt.get(Ft) : Nn}`);
        default:
          const z = rr.find((L) => L.action === D && typeof L.onClick === $.function);
          if (z) {
            z.onClick({ row: v, navigate: fe });
            return;
          }
          break;
      }
    }
    if (D === xe.Download && Vn({ documentLink: v[Cr], fileName: v.FileName }), !hn.length)
      return;
    const { row: _ } = y, R = nr[y.field] || {}, G = {
      pathname: sr.replaceTags(R.linkTo, _)
    };
    e.addRecordToState && (G.state = _), fe(G);
  }, Un = async function() {
    await an({ id: we.id, api: `${e.controllerType === "cs" ? Xt : vt}${e.api || r}`, setIsLoading: be, setError: pe.showError, setErrorMessage: He }) === !0 ? (Le(!1), pe.showMessage("Record Deleted Successfully."), Rt()) : Le(!1);
  }, vr = () => {
    He(null), Le(!1);
  }, Gn = (y) => (typeof O.processRowUpdate == "function" && O.processRowUpdate(y, J), y), jn = (y) => {
    if (y.row.canEdit === !1)
      return;
    const { row: I } = y;
    if (typeof X === $.function) {
      X(y);
      return;
    }
    if (!_e && !It && !h && Nt({ id: I[me], record: I }), _e && e.rowRedirectLink) {
      const w = {
        pathname: sr.replaceTags(e.rowRedirectLink, I)
      };
      e.addRecordToState && (w.state = I), fe(w);
    }
    typeof K === $.function && K(y);
  }, Wn = async () => {
    if (se.current.size < 1) {
      pe.showError("Please select at least one record to proceed");
      return;
    }
    const y = Array.from(se.current), I = new Map(J.records.map((D) => [D[me], D]));
    let w = y.map((D) => ({ ...Bn, ...I.get(D) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (w = w.map(
      (D) => Object.fromEntries(e.selectionUpdateKeys.map((v) => [v, D[v]]))
    ));
    try {
      const D = await on({
        id: 0,
        api: `${vt}${ft || r}/updateMany`,
        values: { items: w },
        setIsLoading: be,
        setError: pe.showError
      });
      if (D) {
        Rt();
        const v = D.info ? D.info : "Record Added Successfully.";
        pe.showMessage(v);
      }
    } catch (D) {
      pe.showError(D.message || "An error occurred, please try again later.");
    } finally {
      se.current.clear(), be(!1), nt(!1);
    }
  }, Hn = () => {
    if (ft.length > 0) {
      if (se.current.size) {
        nt(!0);
        return;
      }
      pe.showError(
        "Please select at least one record to proceed"
      ), be(!1);
      return;
    }
    typeof te === $.function ? te() : Nt({ id: 0 });
  }, Kn = () => {
    if (!ie?.items?.length) return;
    const y = JSON.parse(JSON.stringify($.gridFilterModel));
    Me(y), T && T();
  }, Tr = ({ unassign: y, assign: I }) => {
    const w = Array.isArray(u) ? u : u.length ? u.split(",") : [], D = y ? w.filter((v) => !y.includes(parseInt(v))) : [...w, ...I];
    c(typeof u === $.string ? D.join(",") : D);
  }, qn = () => {
    Tr({ assign: Re });
  }, Yn = () => {
    Tr({ unassign: Re });
  }, Jn = () => {
    se.current.size === J.records.length ? (se.current.clear(), Ne([])) : (J.records.forEach((y) => {
      se.current.add(y[me]);
    }), Ne(J.records.map((y) => y[me])));
  }, Zn = async ({ preferenceName: y, Username: I, preferenceApi: w, defaultPreferenceEnums: D }) => {
    gn({ dispatchData: Oe });
    const v = await yn({ preferenceName: y, history: fe, dispatchData: Oe, Username: I, preferenceApi: w, defaultPreferenceEnums: D });
    bn({ preferenceName: y, dispatchData: Oe, gridRef: Ye, setIsGridPreferenceFetched: br, defaultPreferenceEnums: D, preferences: v });
  };
  oe(() => {
    !Mt || !Qt || Zn({ preferenceName: Mt, Username: Cn, preferenceApi: Qt, defaultPreferenceEnums: xn });
  }, [Qt]);
  const Xn = (y) => y[me], Qn = (y) => {
    if (J?.recordCount > Ei) {
      pe.showMessage("Cannot export more than 60k records, please apply filters or reduce your results using filters");
      return;
    }
    const { orderedFields: I, columnVisibilityModel: w, lookup: D } = Ye.current.state.columns, v = y.target.dataset.isPivotExport === "true", _ = Object.keys(w).filter((z) => w[z] === !1), R = new Set(Qe.filter((z) => z.exportable === !1).map((z) => z.field)), G = I.filter(
      (z) => !R.has(z) && !_.includes(z) && z !== "__check__" && z !== "actions"
    );
    if (G.length === 0) {
      pe.showMessage("You cannot export while all columns are hidden... please show at least 1 column before exporting");
      return;
    }
    const j = {};
    G.forEach((z) => {
      const L = D[z];
      j[z] = { field: z, width: L.width, headerName: L.headerName || L.field, type: L.type, keepLocal: L.keepLocal === !0, isParsable: L.isParsable, lookup: L.lookup };
    }), Rt(
      v ? "export" : void 0,
      void 0,
      y.target.dataset.contentType,
      j,
      v,
      Xe
    );
  };
  oe(() => {
    !vt || Mt && !yr || Rt();
  }, [W, Se, ie, r, Qe, e, s, p, u, l, x, yr, ee, vt]), oe(() => {
    if (!(O.isChildGrid || Te || !Ze))
      return Oe({ type: V.PAGE_TITLE_DETAILS, payload: { icon: "", titleHeading: e.pageTitle || e.title, title: e.title } }), () => {
        Oe({
          type: V.PAGE_TITLE_DETAILS,
          payload: null
        });
      };
  }, []), oe(() => {
    if (O.isChildGrid)
      return;
    let y = ke;
    if (Q || En.includes(y)) {
      Oe({
        type: V.SET_PAGE_BACK_BUTTON,
        payload: { status: !1, backRoute: "" }
      });
      return;
    }
    y = y.split("/"), y.pop(), y = y.join("/"), Oe({
      type: V.SET_PAGE_BACK_BUTTON,
      payload: { status: !0, backRoute: y }
    });
  }, [Z]);
  const ea = (y) => {
    const { items: I } = y, w = I.map((v) => {
      const { field: _, operator: R, type: G, value: j } = v, z = Qe.find((ot) => ot.field === _) || {}, L = z.type === $.number;
      return L && j < 0 ? { ...v, value: null } : Tn.includes(R) || L && !isNaN(j) || !L ? (Xe && Qe.filter((ar) => ar.field === _)[0]?.isKeywordField && (v.filterField = `${v.field}.keyword`), v.value = ["isEmpty", "isNotEmpty"].includes(R) ? null : j, { ...v, type: z.type }) : { field: _, operator: R, type: G, value: L ? null : j };
    });
    y.items = w, Me(y), (y.items.findIndex((v) => v.isChartFilter && !["isEmpty", "isNotEmpty"].includes(v.operator)) === -1 || x?.items?.length && (!y.items.length || x.items.findIndex((v) => v.columnField === y.items[0]?.field) > -1)) && T && T();
  }, ta = (y) => {
    const I = y.map((w) => {
      const D = Qe.filter((R) => R.field === w.field)[0] || {}, v = Xe && D.isKeywordField, _ = { ...w, filterField: v ? `${w.field}.keyword` : w.field };
      return D.dataIndex && (_.filterField = D.dataIndex), _;
    });
    Ke(I);
  }, wr = m || e.gridTitle || e.title, ra = Ft ? [{ text: mt.get(Ft) || wr }] : [{ text: wr }];
  return /* @__PURE__ */ C(ue, { children: [
    /* @__PURE__ */ n(
      cn,
      {
        navigate: fe,
        showBreadcrumbs: !Pn && !Mn,
        breadcrumbs: ra,
        enableBackButton: qt,
        breadcrumbColor: Rn
      }
    ),
    /* @__PURE__ */ n(Hr, { style: ae || f, elevation: 0, sx: { "& .MuiCardContent-root": { p: 0 } }, children: /* @__PURE__ */ C(Kr, { children: [
      /* @__PURE__ */ n(
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
          unstable_headerFilters: B,
          checkboxSelection: Te,
          loading: Z,
          className: "pagination-fix",
          onCellClick: zn,
          onCellDoubleClick: jn,
          columns: Qe,
          paginationModel: W,
          pageSizeOptions: $.pageSizeOptions,
          onPaginationModelChange: Y,
          pagination: !0,
          rowCount: J.recordCount,
          rows: J.records,
          sortModel: Se,
          paginationMode: P,
          sortingMode: P,
          filterMode: P,
          processRowUpdate: Gn,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: ta,
          onFilterModelChange: ea,
          rowSelection: Re,
          onRowSelectionModelChange: Ne,
          filterModel: ie,
          getRowId: Xn,
          onRowClick: q,
          slots: {
            headerFilterMenu: !1,
            toolbar: wi,
            footer: Bo
          },
          slotProps: {
            toolbar: {
              model: e,
              data: J,
              currentPreference: vn,
              isReadOnly: _e,
              canAdd: An,
              forAssignment: Te,
              showAddIcon: mn,
              onAdd: Hn,
              selectionApi: ft,
              selectedSet: se,
              selectAll: Jn,
              available: l,
              onAssign: qn,
              assigned: p,
              onUnassign: Yn,
              effectivePermissions: Dt,
              clearFilters: Kn,
              handleExport: Qn,
              preferenceName: Mt,
              apiRef: Ye,
              gridColumns: Qe,
              setIsGridPreferenceFetched: br,
              tTranslate: xr,
              tOpts: le,
              idProperty: me
            },
            footer: {
              pagination: !0,
              apiRef: Ye
            },
            panel: {
              placement: "bottom-end"
            }
          },
          hideFooterSelectedRowCount: rt,
          density: "compact",
          disableDensitySelector: !0,
          apiRef: Ye,
          disableAggregation: !0,
          disableRowGrouping: !0,
          disableRowSelectionOnClick: Ee,
          autoHeight: !0,
          initialState: {
            columns: {
              columnVisibilityModel: xt
            },
            pinnedColumns: $n
          },
          localeText: {
            filterValueTrue: "Yes",
            filterValueFalse: "No"
          },
          showToolbar: !0
        }
      ),
      ce && /* @__PURE__ */ C(Ge, { open: !!ce, onConfirm: vr, onCancel: vr, title: "Info", hideCancelButton: !0, children: [
        " ",
        ce
      ] }),
      Be && !ce && /* @__PURE__ */ n(Ge, { open: Be, onConfirm: Un, onCancel: () => Le(!1), title: "Confirm Delete", children: /* @__PURE__ */ C(Nr, { children: [
        "Are you sure you want to delete ",
        we.name && /* @__PURE__ */ n(Pe, { style: { display: "inline" }, title: we.name, arrow: !0, children: we.name.length > 30 ? `${we.name.slice(0, 30)}...` : we.name }),
        " ?"
      ] }) }),
      pt && /* @__PURE__ */ n(
        Ge,
        {
          open: pt,
          onConfirm: Wn,
          onCancel: () => nt(!1),
          title: "Confirm Add",
          children: /* @__PURE__ */ C(Nr, { children: [
            "Are you sure you want to add ",
            se.current.size,
            " records?"
          ] })
        }
      )
    ] }) })
  ] });
}, yi), Si = ({ column: e, field: t, formik: r, otherProps: a }) => {
  const o = (d) => {
    r.setFieldValue(t, d.target.checked);
  }, s = ge(() => r.values[t] ?? !!e.defaultValue, [r, e]), i = typeof e.readOnly == "function" ? e.readOnly(r) : e.readOnly;
  return /* @__PURE__ */ C("div", { children: [
    /* @__PURE__ */ n(
      lo,
      {
        control: /* @__PURE__ */ n(
          Zr,
          {
            ...a,
            name: t,
            disabled: i || e.disabled === !0,
            checked: s,
            onChange: o,
            onBlur: r.handleBlur,
            defaultChecked: e.defaultValue
          }
        )
      }
    ),
    /* @__PURE__ */ n(bt, { error: r.touched[t] && !!r.errors[t], children: r.touched[t] && r.errors[t] })
  ] }, t);
}, Vt = ({ column: e, field: t, formik: r, otherProps: a }) => {
  const o = Ct(), s = e.rows || (e.multiline ? 5 : 1);
  return /* @__PURE__ */ n(
    Gt,
    {
      type: "text",
      variant: e.variant || "standard",
      InputProps: {
        readOnly: e.readOnly === !0,
        sx: e.readOnly ? { backgroundColor: o.palette?.action?.disabled } : void 0
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
      ...a,
      defaultValue: e.defaultValue
    },
    t
  );
};
function dn(e, t) {
  const [r, a] = S(e);
  return oe(() => {
    const o = setTimeout(() => {
      a(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), r;
}
const Ai = 47, Oi = 58, Pi = 37, Ii = 40, Fi = [8, 46, 9, 27, 13], Lr = ({ value: e, state: t }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const r = e.slice(1, -1);
    return t[r] !== void 0 ? t[r] : e;
  }
  return e;
}, Mi = ({ column: e, otherProps: t, formik: r, field: a, ...o }) => {
  const { min: s, max: i } = e, d = Ct(), [m, g] = S(r.values[a]), u = dn(m, 400), p = ge(
    () => Math.max(0, Lr({ value: s, state: r.values })),
    [s, r.values]
  ), l = ge(
    () => Lr({ value: i, state: r.values }),
    [i, r.values]
  );
  oe(() => {
    if (u !== r.values[a]) {
      const c = Number(u);
      c < p ? r.setFieldValue(a, p) : l && c > l ? r.setFieldValue(a, l) : r.setFieldValue(a, c);
    }
  }, [u, a, p, l]);
  const { onBlur: h } = o;
  return t = {
    InputProps: {
      inputProps: {
        min: p,
        max: l,
        readOnly: e.readOnly === !0,
        onKeyDown: (c) => {
          const f = c.which ? c.which : c.keyCode;
          Fi.includes(f) || f >= Pi && f <= Ii || f > Ai && f < Oi || c.preventDefault();
        },
        sx: e.readOnly ? { backgroundColor: d.palette?.action?.disabled } : void 0
      }
    },
    type: "number",
    ...t,
    onChange: (c) => {
      g(c.target.value), typeof h == "function" && h(c);
    }
  }, /* @__PURE__ */ n(Vt, { column: e, otherProps: t, formik: r, field: a, ...o });
}, Ri = ({ otherProps: e, ...t }) => {
  const [r, a] = yt.useState(!1), o = () => a((m) => !m), s = (m) => {
    m.preventDefault();
  }, { readOnly: i = !1, disabled: d = !1 } = t.column || {};
  return e = {
    type: r ? "text" : "password",
    InputProps: {
      readOnly: i,
      disabled: d,
      endAdornment: /* @__PURE__ */ n($a, { position: "end", children: /* @__PURE__ */ n(
        qr,
        {
          "aria-label": "toggle password visibility",
          onClick: o,
          onMouseDown: s,
          edge: "end",
          disabled: d,
          readOnly: i,
          size: "large",
          children: r ? /* @__PURE__ */ n(co, {}) : /* @__PURE__ */ n(uo, {})
        }
      ) })
    },
    ...e
  }, /* @__PURE__ */ n(Vt, { otherProps: e, ...t });
}, Ni = ({ column: e, field: t, formik: r, otherProps: a, fieldConfigs: o = {}, mode: s }) => {
  const i = s !== "copy" && o.disabled, { systemDateTimeFormat: d, stateData: m } = We();
  return /* @__PURE__ */ fr(
    Yr,
    {
      ...a,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: t,
      fullWidth: !0,
      format: d(!0, !1, m.dateTime),
      name: t,
      value: re(r.values[t]),
      onChange: (g) => {
        const p = re(g).hour(12).toISOString();
        r.setFieldValue(t, p);
      },
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      minDate: e.min ? re(e.min) : null,
      maxDate: e.max ? re(e.max) : null,
      disabled: i,
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, Bi = ({ column: e, field: t, formik: r, otherProps: a }) => {
  const { systemDateTimeFormat: o, stateData: s } = We();
  return /* @__PURE__ */ fr(
    ur,
    {
      ...a,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: t,
      fullWidth: !0,
      format: o(!1, !1, s.dateTime),
      name: t,
      value: re(r.values[t]),
      onChange: (i) => r.setFieldValue(t, i),
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      minDateTime: e.min ? re(e.min) : null,
      maxDateTime: e.max ? re(e.max) : null,
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, Li = ({ column: e, field: t, formik: r, otherProps: a }) => {
  let o = r.values[t];
  return e.isUtc && (o = re.utc(o).utcOffset(re().utcOffset(), !0).format()), /* @__PURE__ */ fr(
    po,
    {
      ...a,
      variant: "standard",
      readOnly: e.readOnly === !0,
      key: t,
      fullWidth: !0,
      name: t,
      value: re(o),
      onChange: (s) => (e.isUtc && (s = s && s.isValid() ? s.format("YYYY-MM-DDTHH:mm:ss") + ".000Z" : null), r.setFieldValue(t, s)),
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, ki = [null, void 0, ""];
function un({ column: e, formik: t, lookups: r, dependsOn: a = [], isAutoComplete: o = !1, userSelected: s, model: i }) {
  const [d, m] = S([]), { stateData: g } = We(), u = g?.gridSettings?.permissions?.Url || "", p = ge(() => `${u}${i?.api || ""}`, [u, i?.api]), l = ge(() => {
    const f = {};
    if (!a.length) return f;
    for (const b of a)
      f[b] = t.values[b];
    return f;
  }, a.map((f) => t.values[f])), h = ge(() => a.length ? [] : typeof e.lookup == "string" ? r[e.lookup] : e.lookup, [e.lookup, r, a]), c = async () => {
    if (!e.lookup) return;
    if (!Object.values(l).every(
      (x) => !ki.includes(x)
    )) {
      m([]);
      return;
    }
    let b = [];
    const E = {
      lookups: [{ lookup: e.lookup, where: l }]
    };
    try {
      const x = await At({ url: `${p}/combo`, params: E, disableLoader: !0, jsonPayload: !0 });
      x && x.success && x.lookups ? b = x.lookups[e.lookup] || [] : b = [];
    } catch {
      b = [];
    } finally {
      m(b);
    }
  };
  return oe(() => {
    a.length ? c() : (o || !s.current) && m(h);
  }, [l, h, p, e.lookup]), d;
}
const _i = yt.memo(({ column: e, field: t, formik: r, lookups: a, dependsOn: o = [], model: s, ...i }) => {
  const d = yt.useRef(!1), { placeHolder: m } = e, g = un({ column: e, formik: r, lookups: a, dependsOn: o, userSelected: d, model: s }), u = Ct(), p = ge(() => {
    let h = r.values[t];
    if (g?.length && !h && !e.multiSelect && "IsDefault" in g[0]) {
      const c = g.find((f) => f.IsDefault);
      c && (h = c.value, r.setFieldValue(t, c.value));
    }
    return e.multiSelect && (!h || h.length === 0 ? h = [] : Array.isArray(h) || (h = h.split(",").map((c) => parseInt(c)))), h;
  }, [r.values[t], g, e.multiSelect, t]), l = Ot((h) => {
    r.handleChange(h), d.current = !0;
  }, [r]);
  return /* @__PURE__ */ C(
    Wt,
    {
      fullWidth: !0,
      error: r.touched[t] && r.errors[t],
      variant: "standard",
      children: [
        /* @__PURE__ */ n(mo, { children: m || "" }),
        /* @__PURE__ */ n(
          ho,
          {
            IconComponent: fo,
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
            children: Array.isArray(g) && g.map((h) => /* @__PURE__ */ n(Xr, { value: h.value, disabled: h.isDisabled, children: h.label }, h.value))
          }
        ),
        /* @__PURE__ */ n(bt, { children: r.touched[t] && r.errors[t] })
      ]
    },
    t
  );
}), kr = jt("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), $i = ({ component: e, name: t, formik: r, field: a, column: o }) => {
  const { value: s } = r.getFieldProps(t || a), { setFieldValue: i } = r, d = e || o.relation, m = Ot((g) => {
    i(t || a, g);
  }, [i, t, a]);
  return /* @__PURE__ */ C("div", { children: [
    /* @__PURE__ */ n(kr, { children: `Available ${o.label}` }),
    /* @__PURE__ */ n(d, { selected: s, available: !0, onAssignChange: m, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly }),
    /* @__PURE__ */ n(kr, { children: `Assigned ${o.label}` }),
    /* @__PURE__ */ n(d, { selected: s, assigned: !0, onAssignChange: m, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly })
  ] });
}, Vi = ({ field: e, formik: t, orientation: r = "row", label: a, lookups: o, fieldConfigs: s = {}, mode: i, ...d }) => {
  const m = (h) => {
    t.setFieldValue(e, h.target.value);
  }, g = o ? o[d.column.lookup] : [], u = Ct(), p = t.touched[e] && !!t.errors[e], l = i !== "copy" && s.disabled;
  return /* @__PURE__ */ C(ue, { children: [
    /* @__PURE__ */ C(hr, { component: "fieldset", error: p, children: [
      /* @__PURE__ */ n(Va, { component: "legend", children: a }),
      /* @__PURE__ */ n(
        gr,
        {
          row: r === "row",
          "aria-label": a,
          name: e,
          value: t.values[e],
          onChange: m,
          children: g?.map((h, c) => /* @__PURE__ */ n(
            lt,
            {
              value: h.value,
              control: /* @__PURE__ */ n(gt, {}),
              label: h.label,
              disabled: l
            },
            c
          ))
        }
      )
    ] }),
    p && /* @__PURE__ */ n(bt, { style: { color: u.palette.error.main }, children: t.errors[e] })
  ] });
}, zi = {
  limitTags: 5
}, Ui = Ue.memo(({ column: e, field: t, formik: r, lookups: a, dependsOn: o = [], fieldConfigs: s = {}, mode: i, model: d, ...m }) => {
  const g = un({ column: e, formik: r, lookups: a, dependsOn: o, model: d, isAutoComplete: !0 });
  let u = r.values[t] || [];
  Array.isArray(u) || (u = u.split(", ").map(Number));
  const p = g.filter((c) => u.includes(c.value)) || [], l = i !== "copy" && s.disabled, h = (c, f) => {
    let b = f?.map((E) => E.value) || [];
    e.dataFormat !== "array" && (b = b.length ? b.join(", ") : ""), r.setFieldValue(t, b);
  };
  return /* @__PURE__ */ C(
    Wt,
    {
      fullWidth: !0,
      variant: "standard",
      error: r.touched[t] && !!r.errors[t],
      children: [
        /* @__PURE__ */ n(
          Qr,
          {
            ...m,
            multiple: !0,
            id: t,
            limitTags: e.limitTags || zi.limitTags,
            options: g || [],
            getOptionLabel: (c) => c.label || "",
            defaultValue: p,
            renderInput: (c) => /* @__PURE__ */ n(Gt, { ...c, variant: "standard" }),
            onChange: h,
            value: p,
            size: "small",
            disabled: l
          }
        ),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ n(bt, { children: r.errors[t] })
      ]
    },
    t
  );
}), Gi = "#182eb5", ji = [
  { label: "Sunday", value: 0, display: "S" },
  { label: "Monday", value: 1, display: "M" },
  { label: "Tuesday", value: 2, display: "T" },
  { label: "Wednesday", value: 3, display: "W" },
  { label: "Thursday", value: 4, display: "T" },
  { label: "Friday", value: 5, display: "F" },
  { label: "Saturday", value: 6, display: "S" }
], Wi = za(Ua)(({ theme: e, isSelected: t }) => ({
  width: 34,
  height: 34,
  padding: 1,
  margin: 1,
  backgroundColor: t ? Gi : "#ffffff",
  border: `1px solid ${Co[500]}`,
  color: t ? "white" : "black"
})), Hi = ({ day: e, onClick: t, isSelected: r }) => /* @__PURE__ */ n(
  Wi,
  {
    onClick: () => t(e.value),
    isSelected: r,
    style: { margin: "4px" },
    children: e.display
  },
  e.value
), Ki = ({ name: e, field: t, formik: r, expired: a }) => {
  const { setFieldValue: o } = r, { value: s } = r.getFieldProps(e || t), i = "1000001", d = "0111110", m = "0".repeat(7), [g, u] = S(s || m), [p, l] = S(() => s ? s === i ? i : s === d ? d : "Custom" : ""), [h, c] = S(!1), f = Ot((x) => {
    if (Array.isArray(x)) {
      let T = m;
      for (const A of x)
        T = T.substring(0, A) + "1" + T.substring(A + 1);
      u(T), o(e || t, T), c(!0);
    } else {
      let T = h ? m : g;
      const A = T.slice(0, x) + (T[x] === "1" ? "0" : "1") + T.slice(x + 1);
      u(A), o(e || t, A), l("Custom"), c(!1);
    }
  }, [h, m, g, e, t, o]), b = Ct(), E = r.touched[t] && !!r.errors[t];
  return /* @__PURE__ */ C(ue, { children: [
    /* @__PURE__ */ n(hr, { component: "fieldset", error: E, children: /* @__PURE__ */ C(
      gr,
      {
        row: !0,
        name: e || t,
        value: p,
        onChange: (x) => {
          const T = x.target.value;
          l(T), T !== "Custom" ? (u(T), o(e || t, T), c(!0)) : (u(m), o(e || t, m), c(!1));
        },
        children: [
          /* @__PURE__ */ n(lt, { value: i, control: /* @__PURE__ */ n(gt, {}), label: "Weekends (Sat - Sun)", onClick: () => f([0, 6]) }),
          /* @__PURE__ */ n(lt, { value: d, control: /* @__PURE__ */ n(gt, {}), label: "Weekdays (Mon - Fri)", onClick: () => f([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ n(lt, { value: "Custom", control: /* @__PURE__ */ n(gt, {}), label: "Specific days" }),
          ji.map((x, T) => /* @__PURE__ */ n(
            Hi,
            {
              day: x,
              onClick: () => f(T),
              isSelected: p === "Custom" && g[T] === "1",
              disabled: a
            },
            x.value
          ))
        ]
      }
    ) }),
    E && /* @__PURE__ */ n(bt, { style: { color: b.palette.error.main }, children: r.errors[t] })
  ] });
}, qi = ({ isAdd: e, column: t, field: r, formik: a, otherProps: o, fieldConfigs: s = {}, mode: i }) => {
  const d = Ct();
  let m = a.values[r] || [];
  Array.isArray(m) || (m = m.split(",").map((l) => l.trim()));
  const g = Ue.useMemo(() => i === "copy" ? !0 : typeof s.disabled < "u" ? s.disabled : typeof t.disabled == "function" ? t.disabled({ isAdd: e, formik: a }) : !!t.disabled, [i, s.disabled, t.disabled]), u = t.hasDefault && !e ? [m[0]] : [], p = Ot((l, h, c, f = {}) => {
    const b = h.pop()?.trim();
    h.includes(b) || h.push(b), u && u.includes(f.option) && c === "removeOption" && (h = [f.option]), t.dataFormat !== "array" && (h = h.length ? h.join(",") : ""), a.setFieldValue(r, h);
  }, [a, r]);
  return /* @__PURE__ */ C(
    Wt,
    {
      fullWidth: !0,
      variant: "standard",
      error: a.touched[r] && !!a.errors[r],
      children: [
        /* @__PURE__ */ n(
          Qr,
          {
            ...o,
            multiple: !0,
            id: r,
            freeSolo: !0,
            value: m,
            options: [],
            renderInput: (l) => /* @__PURE__ */ n(
              Gt,
              {
                ...l,
                variant: "standard",
                InputProps: {
                  ...l.InputProps,
                  sx: {
                    ...l.InputProps?.sx,
                    ...g && { backgroundColor: d.palette?.action?.disabled }
                  }
                }
              }
            ),
            onChange: p,
            size: "small",
            renderTags: (l, h) => l.map((c, f) => {
              const { key: b, ...E } = h({ index: f });
              return /* @__PURE__ */ n(
                xo,
                {
                  label: c,
                  ...E,
                  disabled: u.includes(c)
                },
                b
              );
            }),
            disabled: g
          }
        ),
        a.touched[r] && a.errors[r] && /* @__PURE__ */ n(bt, { children: a.errors[r] })
      ]
    },
    r
  );
}, Yi = (e = []) => {
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
function Ji({ column: e, field: t, formik: r, lookups: a, fieldConfigs: o, mode: s }) {
  const i = a ? a[e.lookup] : [], d = Yi(i), m = r.values[t]?.length ? r.values[t].split(", ") : [];
  let g;
  return s !== "copy" && (g = o?.disabled), /* @__PURE__ */ n(dt, { sx: { minHeight: 350 }, children: /* @__PURE__ */ n(
    Do,
    {
      selectedItems: m,
      onSelectedItemsChange: (p, l) => {
        r.setFieldValue(t, l?.join(", ") || "");
      },
      disabled: g,
      multiSelect: !0,
      checkboxSelection: !0,
      children: d.map((p) => /* @__PURE__ */ n(Fr, { itemId: p.value, label: p.label, children: p.children.map((l) => /* @__PURE__ */ n(Fr, { itemId: l.value, label: l.label }, l.value)) }, p.value))
    }
  ) });
}
const Zi = { maxLength: 500 }, { errorMapping: Xi } = ct, Qi = 1024 * 1024;
function es({ column: e, field: t, formik: r }) {
  const a = r.values[t] || "", { stateData: o } = We(), { maxSize: s, formats: i } = e, { uploadApi: d, mediaApi: m, Url: g } = o?.gridSettings?.permissions, [u, p] = S({
    isExternal: "no",
    selectedFile: null
  }), [l, h] = S(!1), c = Ht(), { getParams: f, useParams: b } = Kt(), { associationId: E } = b() || f, x = E?.split("-")[0] || 1, T = (F) => {
    const X = F.target.value;
    p({
      ...u,
      isExternal: X,
      selectedFile: null
    }), r.setFieldValue(t, r.values[t]);
  }, A = (F) => {
    r.setFieldValue(t, F.target.value);
  }, N = (F) => {
    const X = F.target.files[0];
    if (X) {
      if (s && X.size > s * Qi) {
        c.showError(`File size exceeds the maximum limit of ${s} MB.`);
        return;
      }
      if (Array.isArray(i) && !i.includes(X.type)) {
        c.showError(`Invalid file format. Allowed formats: ${i.join(", ")}.`);
        return;
      }
      p((te) => ({ ...te, selectedFile: X }));
    }
  }, K = async () => {
    if (u.selectedFile) {
      h(!0);
      try {
        const F = new FormData();
        F.append("file", u.selectedFile), F.append("DocumentGroupId", r.values.DocumentGroupId), F.append("AssociationId", x);
        const te = (await Et({
          method: "POST",
          url: d,
          data: F,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!te.success) {
          c.showError(te.message || "Upload failed");
          return;
        }
        const M = m + "/" + te.filePath;
        r.setFieldValue(t, M);
      } catch (F) {
        const X = (F.message.match(/status code (\d{3})/) || [])[1];
        c.showError(Xi[X]);
      } finally {
        h(!1);
      }
    }
  }, q = new URL(g, window.location.origin).hostname.toLowerCase();
  yt.useEffect(() => {
    p({
      ...u,
      isExternal: a.toLowerCase().includes(q) ? "no" : "yes"
    });
  }, [a, p]);
  const ae = r.values[t]?.length > (e.max || Zi.maxLength), ee = ae ? "red" : "";
  return /* @__PURE__ */ C(ze, { children: [
    /* @__PURE__ */ C(ze, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(Fe, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
      /* @__PURE__ */ C(
        gr,
        {
          row: !0,
          value: u.isExternal,
          onChange: T,
          "aria-label": "is-external-link",
          name: "is-external-link",
          children: [
            /* @__PURE__ */ n(lt, { value: "yes", control: /* @__PURE__ */ n(gt, {}), label: "Yes" }),
            /* @__PURE__ */ n(lt, { value: "no", control: /* @__PURE__ */ n(gt, {}), label: "No" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ C(ze, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(Fe, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ C(ze, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        u.isExternal === "yes" ? /* @__PURE__ */ n(
          $t,
          {
            fullWidth: !0,
            value: a,
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: ee },
                "&.Mui-focused fieldset": { borderColor: ee },
                "&:hover fieldset": { borderColor: ee }
              }
            },
            onChange: A,
            placeholder: "Enter external link"
          }
        ) : /* @__PURE__ */ n(
          $t,
          {
            fullWidth: !0,
            value: a,
            placeholder: "Link autopopulated once uploaded",
            InputProps: { readOnly: !0 }
          }
        ),
        ae && /* @__PURE__ */ C(Fe, { sx: { color: "red" }, children: [
          "Maximum allowed length for the document link is ",
          e.max,
          " characters."
        ] })
      ] })
    ] }),
    u.isExternal === "no" && /* @__PURE__ */ C(ze, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ C(
        st,
        {
          variant: "outlined",
          component: "label",
          disabled: l,
          children: [
            "Choose File",
            /* @__PURE__ */ n("input", { type: "file", hidden: !0, onChange: N })
          ]
        }
      ),
      u.selectedFile && /* @__PURE__ */ n(Pe, { title: u.selectedFile.name, arrow: !0, children: /* @__PURE__ */ n(Fe, { variant: "body2", children: u.selectedFile.name.length > 20 ? `${u.selectedFile.name.substring(0, 20)}...` : u.selectedFile.name }) }),
      /* @__PURE__ */ n(
        st,
        {
          variant: "contained",
          color: "primary",
          onClick: K,
          disabled: !u.selectedFile || l,
          children: l ? /* @__PURE__ */ n(Ga, { size: 24, color: "inherit" }) : "Upload File"
        }
      )
    ] })
  ] });
}
const ts = ({ field: e, formik: t }) => {
  const [r, a] = Ue.useState({}), o = dn(r, 300);
  Ue.useEffect(() => {
    if (t.values[e])
      try {
        const i = JSON.parse(t.values[e]);
        a(i);
      } catch {
        a({});
      }
  }, [t.values[e]]), Ue.useEffect(() => {
    const i = JSON.stringify(o);
    t.values[e] !== i && t.setFieldValue(e, i);
  }, [o, e, t, t.values[e]]);
  const s = (i, d) => {
    const m = { ...r, [i]: d };
    a(m);
  };
  return /* @__PURE__ */ n(
    Wt,
    {
      fullWidth: !0,
      variant: "standard",
      error: t.touched[e] && !!t.errors[e],
      style: { marginBottom: "1rem" },
      children: Object.keys(r).map((i) => /* @__PURE__ */ C(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.5rem"
          },
          children: [
            /* @__PURE__ */ C(St, { variant: "body1", sx: { width: "180px", marginRight: 2 }, children: [
              i,
              ":"
            ] }),
            /* @__PURE__ */ n(
              vo,
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
}, rs = {
  boolean: Si,
  select: _i,
  string: Vt,
  number: Mi,
  password: Ri,
  date: Ni,
  dateTime: Bi,
  time: Li,
  oneToMany: $i,
  radio: Vi,
  autocomplete: Ui,
  dayRadio: Ki,
  email: Vt,
  chipInput: qi,
  treeCheckbox: Ji,
  fileUpload: es,
  json: ts
}, _r = { paddingTop: "2.5px", paddingBottom: "2.5px" }, ns = Eo("span")({
  color: "red !important"
}), as = ({ tabColumns: e, model: t, formik: r, data: a, onChange: o, combos: s, lookups: i, fieldConfigs: d, mode: m, handleSubmit: g }) => {
  const [u, p] = Ue.useState(/* @__PURE__ */ new Set()), { activeStep: l, setActiveStep: h } = Ue.useContext(fn), c = {};
  for (let A = 0, N = t.columns.length; A < N; A++) {
    const { field: K, skip: q } = t.columns[A];
    q && (c[q.step] = r.values[K]);
  }
  const f = (A) => u.has(A) || c[A], b = () => {
    for (let A = l + 1; A < e.length; A++)
      if (!f(A))
        return !1;
    return !0;
  }, E = () => {
    let A = l + 1;
    for (; c[A]; )
      A++;
    p((N) => new Set(N).add(l)), A >= e.length || b() ? g() : h(A);
  }, x = () => {
    let A = l - 1;
    for (; c[A] && A > 0; )
      A--;
    h(A);
  };
  if (!e?.length)
    return null;
  const T = e[l];
  return /* @__PURE__ */ C(ue, { children: [
    /* @__PURE__ */ n(go, { activeStep: l, sx: { marginBottom: "20px" }, children: e.map(({ title: A, key: N }, K) => /* @__PURE__ */ n(yo, { completed: f(K), children: /* @__PURE__ */ n(bo, { children: /* @__PURE__ */ n(Fe, { sx: { fontSize: "20px" }, children: A }) }) }, N)) }),
    /* @__PURE__ */ C(Ue.Fragment, { children: [
      /* @__PURE__ */ n(pn, { formElements: T.items, model: t, formik: r, data: a, onChange: o, combos: s, lookups: i, fieldConfigs: d, mode: m }),
      /* @__PURE__ */ C(dt, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        l !== 0 ? /* @__PURE__ */ C(ve, { color: "inherit", disabled: l === 0, onClick: x, variant: "contained", sx: { mr: 2 }, children: [
          " ",
          "Back"
        ] }) : null,
        /* @__PURE__ */ n(ve, { onClick: E, variant: "contained", children: b() ? "Finish" : "Next" })
      ] })
    ] })
  ] });
}, pn = ({ formElements: e, model: t, formik: r, data: a, onChange: o, combos: s, lookups: i, fieldConfigs: d, mode: m, isAdd: g }) => e?.length ? /* @__PURE__ */ n(ue, { children: e.map(({ Component: u, column: p, field: l, label: h, otherProps: c }, f) => {
  const b = typeof p.relation == "function";
  return /* @__PURE__ */ C(ir, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: b ? "flex-start" : "center", children: [
    p?.showLabel !== !1 ? /* @__PURE__ */ n(ir, { size: { xs: 3 }, sx: _r, children: /* @__PURE__ */ C(Fe, { sx: { fontSize: "16px", fontWeight: "bold" }, children: [
      p.label || l,
      ": ",
      p.required && /* @__PURE__ */ n(ns, { children: "*" })
    ] }) }) : null,
    /* @__PURE__ */ n(ir, { size: { xs: b ? 12 : 9 }, sx: _r, children: /* @__PURE__ */ n(u, { isAdd: g, model: t, fieldConfigs: d[l], mode: m, column: p, field: l, label: h, formik: r, data: a, onChange: o, combos: s, lookups: i, ...c }) })
  ] }, f);
}) }) : null, os = function({ columns: e, tabs: t = {}, id: r, searchParams: a }) {
  const o = [], s = {};
  for (const d in t)
    s[d] = [];
  for (const d of e) {
    const m = d.type;
    if (d.label === null)
      continue;
    const { field: g, label: u, tab: p } = d, l = {};
    d.options && (l.options = d.options), d.dependsOn && (l.dependsOn = d.dependsOn);
    const h = rs[m];
    if (!h || d.hideInAddGrid && r === "0")
      continue;
    (p && t[p] ? s[p] : o).push({ Component: h, field: g, label: u, column: { ...d, readOnly: a.has("showRelation") || d.readOnly }, otherProps: l });
  }
  const i = [];
  for (const d in s)
    i.push({ key: d, title: t[d], items: s[d] });
  return { formElements: o, tabColumns: i };
}, is = ({ model: e, formik: t, data: r, combos: a, onChange: o, lookups: s, id: i, fieldConfigs: d, mode: m, handleSubmit: g }) => {
  const u = ct.emptyIdValues.includes(i), { formElements: p, tabColumns: l } = Ue.useMemo(() => {
    const h = e.formConfig?.showTabbed, c = new URLSearchParams(window.location.search), { formElements: f, tabColumns: b } = os({ columns: e.columns, tabs: h ? e.tabs : {}, id: i, searchParams: c });
    return { formElements: f, tabColumns: b, showTabs: h && b.length > 0 };
  }, [e]);
  return /* @__PURE__ */ C("div", { children: [
    /* @__PURE__ */ n(pn, { isAdd: u, formElements: p, model: e, formik: t, data: r, onChange: o, combos: a, lookups: s, fieldConfigs: d, mode: m }),
    /* @__PURE__ */ n("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ n(as, { tabColumns: l, model: e, formik: t, data: r, onChange: o, combos: a, lookups: s, fieldConfigs: d, mode: m, handleSubmit: g }) })
  ] });
};
function ss(e) {
  const { children: t, value: r, index: a, ...o } = e;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "tabpanel",
      hidden: r !== a,
      id: `simple-tabpanel-${a}`,
      "aria-labelledby": `simple-tab-${a}`,
      ...o,
      children: r === a && /* @__PURE__ */ n(dt, { sx: { p: 3 }, children: t })
    }
  );
}
function ls(e) {
  return {
    id: `simple-tab-${e}`,
    "aria-controls": `simple-tabpanel-${e}`
  };
}
const cs = Vr(({ relation: e, parentFilters: t, parent: r, where: a, models: o, readOnly: s }) => {
  const i = o.find(({ name: g }) => g === e);
  if (!i) return null;
  const d = { ...i, hideBreadcrumb: !0 }, m = d instanceof zt ? d : new zt(d);
  return m ? /* @__PURE__ */ n(
    m.ChildGrid,
    {
      readOnly: s,
      parentFilters: t,
      parent: r,
      model: d,
      where: a,
      isChildGrid: !0
    }
  ) : null;
}), ds = yt.memo(({ relations: e, parent: t, where: r = [], models: a, relationFilters: o, readOnly: s }) => {
  const [i, d] = S(0);
  return /* @__PURE__ */ C(dt, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ n(dt, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ n(wo, { value: i, onChange: (g, u) => {
      d(u);
    }, "aria-label": "relations tabs", children: e.map((g, u) => {
      const p = a.find(({ name: h }) => h === g) || {}, l = p.listTitle || p.title || g;
      return /* @__PURE__ */ n(
        To,
        {
          label: l,
          ...ls(u)
        },
        g
      );
    }) }) }),
    e.map((g, u) => /* @__PURE__ */ n(ss, { value: i, index: u, children: /* @__PURE__ */ n(
      cs,
      {
        readOnly: s,
        relation: g,
        models: a,
        parentFilters: o[g] || [],
        parent: t,
        where: r
      },
      g
    ) }, g))
  ] });
}), fn = Ut(1), us = {}, De = {
  object: "object",
  function: "function",
  baseData: "baseData",
  string: "string",
  create: "Create",
  copy: "Copy",
  edit: "Edit",
  number: "number"
}, ps = ({
  model: e,
  api: t,
  models: r,
  relationFilters: a = {},
  permissions: o = {},
  Layout: s = is,
  baseSaveData: i = {},
  sx: d,
  readOnly: m,
  beforeSubmit: g,
  deletePromptText: u
}) => {
  const p = e.formTitle || e.title, { navigate: l, getParams: h, useParams: c, pathname: f } = Kt(), { relations: b = [] } = e, { dispatchData: E, stateData: x } = We(), T = c() || h, { id: A = "" } = T, N = A.split("-")[0], K = new URLSearchParams(window.location.search), q = K.has(De.baseData) && K.get(De.baseData);
  if (q) {
    const B = JSON.parse(q);
    typeof B === De.object && B !== null && (i = { ...i, ...B });
  }
  const [ae, ee] = S(!0), [F, X] = S({}), [te, M] = S(null), [H, U] = S(!1), O = Ht(), [W, Y] = S(null), [J, ye] = S(0), [Z, be] = S(!1), [Te, rt] = S(null), [Re, Ne] = S(""), Be = x?.gridSettings?.permissions?.Url || "", Le = typeof e.applyFieldConfig === De.function ? e.applyFieldConfig({ data: F, lookups: te }) : us, we = ge(() => `${Be}${e.api || t || ""}`, [Be, e.api, t]), { mode: ut } = x.dataForm, xt = x.getUserData || {}, pt = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...o
  }, { canEdit: nt } = rn({
    userData: xt,
    model: e,
    userDefinedPermissions: pt
  }), { hideBreadcrumb: pe = !1, navigateBack: P } = e, k = () => {
    let B;
    switch (typeof P) {
      case De.function:
        B = P({ params: T, searchParams: K, data: F });
        break;
      case De.number:
      case De.string:
        B = P;
        break;
      default:
        B = f.substring(0, f.lastIndexOf("/"));
        break;
    }
    l(B);
  }, Ce = ge(() => ct.emptyIdValues.includes(N), [N]), le = ge(() => Ce ? { ...e.initialValues, ...F, ...i } : { ...i, ...e.initialValues, ...F }, [e.initialValues, F, N]);
  oe(() => {
    if (!Be) return;
    Y(e.getValidationSchema({ id: N, snackbar: O }));
    const B = A.split("-");
    nn({
      ...{
        api: t || we,
        model: e,
        setError: Ke
      },
      id: B.length > 1 ? B[1] : B[0],
      setIsLoading: ee,
      setActiveRecord: he
    });
  }, [N, A, e, Be]);
  const ce = Jr({
    enableReinitialize: !0,
    initialValues: le,
    validationSchema: W,
    validateOnBlur: !1,
    onSubmit: async (B, { resetForm: Ee }) => {
      Object.keys(B).forEach((Q) => {
        typeof B[Q] === De.string && (B[Q] = B[Q].trim());
      }), ee(!0), on({
        id: N,
        api: we,
        values: B,
        setIsLoading: ee,
        setError: O.showError
      }).then((Q) => {
        if (!Q) return;
        if (e.reloadOnSave)
          return window.location.reload();
        const Je = Q.info ? Q.info : `Record ${N === 0 ? "Added" : "Updated"} Successfully.`;
        O.showMessage(Je), P !== !1 && k();
      }).catch((Q) => {
        O.showError(
          "An error occured.",
          Q
        ), e.reloadOnSave && Ee();
      }).finally(() => ee(!1));
    }
  }), { dirty: He } = ce, Se = () => {
    ce.resetForm(), be(!1), k();
  }, Ke = function(B, Ee) {
    O.showError(B, Ee), k();
  }, he = function({ id: B, title: Ee, record: Q, lookups: Je }) {
    const Ze = A.indexOf("-") > -1, Xe = !B || B === "0", qt = Xe ? De.create : Ze ? De.copy : De.edit, ft = Xe ? "" : Q[e.linkColumn], _e = [{ text: e.breadCrumbs }, { text: qt }];
    Ze && (Q[e.linkColumn] = ""), e.columns.forEach((It) => {
      It.skipCopy && Ze && (Q[It.field] = "");
    }), X(Q), M(Je), ft !== "" && _e.push({ text: ft }), E({
      type: V.PAGE_TITLE_DETAILS,
      payload: {
        showBreadcrumbs: !0,
        breadcrumbs: _e
      }
    });
  }, ie = function(B) {
    He ? be(!0) : k(), B.preventDefault();
  }, Me = async function() {
    try {
      U(!0), await an({
        id: N,
        api: t || e.api,
        setIsLoading: ee,
        setError: O.showError,
        setErrorMessage: Ne
      }) === !0 && (O.showMessage("Record Deleted Successfully."), k());
    } catch {
      O.showError("An error occured, please try after some time.");
    } finally {
      U(!1);
    }
  }, fe = () => {
    Ne(null), U(!1);
  };
  if (ae)
    return /* @__PURE__ */ n(dt, { sx: { display: "flex", pt: "20%", justifyContent: "center" }, children: /* @__PURE__ */ n(so, {}) });
  const Ae = function(B) {
    const { name: Ee, value: Q } = B.target;
    X({ ...F, [Ee]: Q });
  }, qe = async function(B) {
    B && B.preventDefault(), typeof g === De.function && await g({ formik: ce });
    const { errors: Ee } = ce;
    ce.handleSubmit();
    const Q = Object.keys(Ee)[0], Je = Ee[Q];
    Je && O.showError(Je, null, "error");
    const Ze = e.columns.find(
      (Xe) => Xe.field === Q
    ) || {};
    Ze.tab && ye(Object.keys(e.tabs).indexOf(Ze.tab));
  }, ke = [
    { text: p },
    { text: N === "0" ? "New" : "Update" }
  ], at = Number(N) !== 0 && !!b.length, Pt = K.has("showRelation"), Ye = !("canEdit" in F) || F.canEdit, me = !Ye || F.readOnlyRelations;
  return u = u || "Are you sure you want to delete ?", /* @__PURE__ */ C(ue, { children: [
    /* @__PURE__ */ n(
      cn,
      {
        navigate: l,
        title: p,
        showBreadcrumbs: !pe,
        breadcrumbs: ke,
        model: e
      }
    ),
    /* @__PURE__ */ n(fn.Provider, { value: { activeStep: J, setActiveStep: ye }, children: /* @__PURE__ */ C(oo, { sx: { padding: 2, ...d }, children: [
      /* @__PURE__ */ C("form", { children: [
        /* @__PURE__ */ C(
          io,
          {
            direction: "row",
            spacing: 2,
            justifyContent: "flex-end",
            mb: 1,
            children: [
              nt && Ye && !Pt && !m && /* @__PURE__ */ n(
                ve,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  onClick: qe,
                  children: "Save"
                }
              ),
              /* @__PURE__ */ n(
                ve,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: ie,
                  children: "Cancel"
                }
              ),
              o.delete && /* @__PURE__ */ n(
                ve,
                {
                  variant: "contained",
                  color: "error",
                  onClick: () => U(!0),
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
            formik: ce,
            data: F,
            fieldConfigs: Le,
            onChange: Ae,
            lookups: te,
            id: N,
            handleSubmit: qe,
            mode: ut
          }
        )
      ] }),
      Re && /* @__PURE__ */ C(
        Ge,
        {
          open: !!Re,
          onConfirm: fe,
          onCancel: fe,
          title: "Info",
          hideCancelButton: !0,
          children: [
            " ",
            Re
          ]
        }
      ),
      /* @__PURE__ */ n(
        Ge,
        {
          open: Z,
          onConfirm: Se,
          onCancel: () => be(!1),
          title: "Changes not saved",
          okText: "Discard",
          cancelText: "Continue",
          children: "Would you like to continue to edit or discard changes?"
        }
      ),
      /* @__PURE__ */ n(
        Ge,
        {
          open: H,
          onConfirm: Me,
          onCancel: () => {
            U(!1), rt(null);
          },
          title: Te ? "Error Deleting Record" : "Confirm Delete",
          children: u
        }
      ),
      at ? /* @__PURE__ */ n(
        ds,
        {
          readOnly: me,
          models: r,
          relationFilters: a,
          relations: b,
          parent: e.name || e.title || ""
        }
      ) : null
    ] }) })
  ] });
}, kt = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
  nonAlphaNumeric: /[^a-zA-Z0-9]/g,
  compareValidatorRegex: /^compare:(.+)$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
}, fs = {}, $r = !0, ms = {
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
    const { title: r = "", controllerType: a } = t;
    let { api: o, idProperty: s = o + "Id" } = t;
    const i = "module" in t ? t.module : r.replace(/[^\w\s]/gi, "");
    o || (o = `${r.replaceAll(kt.nonAlphaNumeric, "-").toLowerCase()}`, s = r.replaceAll(" ", "") + "Id"), o = a === "cs" ? `${o}.ashx` : `${o}`;
    const d = { ...t.defaultValues }, m = i || r;
    Object.assign(this, {
      standard: !0,
      name: m,
      permissions: { ...zt.defaultPermissions },
      idProperty: s,
      linkColumn: `${m}Name`,
      overrideFileName: r,
      preferenceId: m,
      tableName: m,
      module: i,
      ...t,
      api: o
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
      const a = r.field || r.id;
      t[a] = r.defaultValue === void 0 ? ms[r.type] || "" : r.defaultValue;
    }
    return t;
  }
  getValidationSchema({ id: t }) {
    const { columns: r } = this, a = {};
    for (const o of r) {
      const { field: s, label: i, header: d, type: m = "string", requiredIfNew: g = !1, required: u = !1, min: p = "", max: l = "", validate: h } = o, c = i || d || s;
      if (!c)
        continue;
      let f;
      switch (m) {
        case "string":
          f = ne.string().nullable().trim().label(c), p && !isNaN(Number(p)) && (f = f.min(Number(p), `${c} must be at least ${p} characters long`)), l && !isNaN(Number(l)) && (f = f.max(Number(l), `${c} must be at most ${l} characters long`)), u && (f = f.trim().required(`${c} is required`));
          break;
        case "boolean":
          f = ne.bool().nullable().transform((b, E) => E === "" ? null : b).label(c);
          break;
        case "radio":
        case "dayRadio":
          f = ne.mixed().label(c).required(`Select at least one option for ${c}`);
          break;
        case "date":
          f = ne.date().nullable().transform((b, E) => E === "" || E === null ? null : b).label(c).required(`${c} is required`);
          break;
        case "dateTime":
          f = ne.date().nullable().transform((b, E) => E === "" || E === null ? null : b).label(c);
          break;
        case "select":
        case "autocomplete":
          u ? f = ne.string().trim().label(c).required(`Select at least one ${c}`) : f = ne.string().nullable();
          break;
        case "password":
          f = ne.string().label(c).test("ignore-asterisks", `${c} must be a valid password.`, (b) => {
            if (b === "******") return !0;
            const E = Number(p) || 8, x = Number(l) || 50, T = o.regex || kt.password;
            return ne.string().min(E, `${c} must be at least ${E} characters`).max(x, `${c} must be at most ${x} characters`).matches(
              T,
              `${c} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`
            ).isValidSync(b);
          });
          break;
        case "email":
          f = ne.string().trim().matches(
            o.regex || kt.email,
            "Email must be a valid email"
          );
          break;
        case "number":
          u ? f = ne.number().label(c).required(`${c} is required.`) : f = ne.number().nullable(), p !== void 0 && p !== "" && !isNaN(Number(p)) && (f = f.min(Number(p), `${c} must be greater than or equal to ${p}`)), l !== void 0 && l !== "" && !isNaN(Number(l)) && (f = f.max(Number(l), `${c} must be less than or equal to ${l}`));
          break;
        case "fileUpload":
          f = ne.string().trim().label(c);
          break;
        default:
          f = ne.mixed().nullable().label(c);
          break;
      }
      if (u && m !== "string" && (f = f.required(`${c} is required`)), g && (!t || t === "") && (f = f.trim().required(`${c} is required`)), h) {
        const b = kt.compareValidatorRegex.exec(h);
        if (b) {
          const E = b[1], x = r.find(
            (T) => (T.formField === E || T.field) === E
          );
          f = f.oneOf(
            [ne.ref(E)],
            `${c} must match ${x.label}`
          );
        }
      }
      a[s] = f;
    }
    return ne.object({ ...a, ...this.validationSchema });
  }
  Form = ({ match: t, ...r }) => /* @__PURE__ */ n(ps, { model: this, Layout: this.Layout, ...r });
  Grid = ({ match: t, ...r }) => /* @__PURE__ */ n(Br, { model: this, showRowsSelected: $r, ...r });
  ChildGrid = (t) => /* @__PURE__ */ C(ue, { children: [
    /* @__PURE__ */ n(Br, { model: this, ...t, customStyle: fs, showRowsSelected: $r }),
    /* @__PURE__ */ n(ja, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  Ge as DialogComponent,
  Br as GridBase,
  oi as HelpModal,
  Rr as MuiTypography,
  cn as PageTitle,
  Ml as RouterProvider,
  en as SnackbarContext,
  Il as SnackbarProvider,
  Fl as StateProvider,
  zt as UiModel,
  zo as daDKGrid,
  Go as deDEGrid,
  Wo as elGRGrid,
  Ko as esESGrid,
  Yo as frFRGrid,
  At as httpRequest,
  Zo as itITGrid,
  ai as locales,
  ti as ptPT,
  Qo as trTRGrid,
  _o as useMobile,
  Kt as useRouter,
  Ht as useSnackbar,
  We as useStateContext
};
//# sourceMappingURL=index.js.map
