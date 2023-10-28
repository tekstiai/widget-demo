function Pc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fs = { exports: {} }, fl = {}, ds = { exports: {} }, j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr = Symbol.for("react.element"), zc = Symbol.for("react.portal"), Tc = Symbol.for("react.fragment"), Lc = Symbol.for("react.strict_mode"), jc = Symbol.for("react.profiler"), Rc = Symbol.for("react.provider"), Oc = Symbol.for("react.context"), $c = Symbol.for("react.forward_ref"), Dc = Symbol.for("react.suspense"), Ic = Symbol.for("react.memo"), Mc = Symbol.for("react.lazy"), qi = Symbol.iterator;
function Fc(e) {
  return e === null || typeof e != "object" ? null : (e = qi && e[qi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ps = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ms = Object.assign, hs = {};
function pn(e, t, n) {
  this.props = e, this.context = t, this.refs = hs, this.updater = n || ps;
}
pn.prototype.isReactComponent = {};
pn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
pn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vs() {
}
vs.prototype = pn.prototype;
function li(e, t, n) {
  this.props = e, this.context = t, this.refs = hs, this.updater = n || ps;
}
var oi = li.prototype = new vs();
oi.constructor = li;
ms(oi, pn.prototype);
oi.isPureReactComponent = !0;
var bi = Array.isArray, ys = Object.prototype.hasOwnProperty, ii = { current: null }, gs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ws(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      ys.call(t, r) && !gs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++)
      s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: nr, type: e, key: o, ref: i, props: l, _owner: ii.current };
}
function Uc(e, t) {
  return { $$typeof: nr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ui(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nr;
}
function Ac(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var eu = /\/+/g;
function jl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ac("" + e.key) : t.toString(36);
}
function zr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case nr:
          case zc:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + jl(i, 0) : r, bi(l) ? (n = "", e != null && (n = e.replace(eu, "$&/") + "/"), zr(l, t, n, "", function(a) {
      return a;
    })) : l != null && (ui(l) && (l = Uc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(eu, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", bi(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + jl(o, u);
      i += zr(o, t, n, s, l);
    }
  else if (s = Fc(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + jl(o, u++), i += zr(o, t, n, s, l);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function fr(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return zr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Vc(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var ae = { current: null }, Tr = { transition: null }, Qc = { ReactCurrentDispatcher: ae, ReactCurrentBatchConfig: Tr, ReactCurrentOwner: ii };
j.Children = { map: fr, forEach: function(e, t, n) {
  fr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return fr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return fr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ui(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
j.Component = pn;
j.Fragment = Tc;
j.Profiler = jc;
j.PureComponent = li;
j.StrictMode = Lc;
j.Suspense = Dc;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qc;
j.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ms({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = ii.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      ys.call(t, s) && !gs.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++)
      u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: nr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
j.createContext = function(e) {
  return e = { $$typeof: Oc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Rc, _context: e }, e.Consumer = e;
};
j.createElement = ws;
j.createFactory = function(e) {
  var t = ws.bind(null, e);
  return t.type = e, t;
};
j.createRef = function() {
  return { current: null };
};
j.forwardRef = function(e) {
  return { $$typeof: $c, render: e };
};
j.isValidElement = ui;
j.lazy = function(e) {
  return { $$typeof: Mc, _payload: { _status: -1, _result: e }, _init: Vc };
};
j.memo = function(e, t) {
  return { $$typeof: Ic, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function(e) {
  var t = Tr.transition;
  Tr.transition = {};
  try {
    e();
  } finally {
    Tr.transition = t;
  }
};
j.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
j.useCallback = function(e, t) {
  return ae.current.useCallback(e, t);
};
j.useContext = function(e) {
  return ae.current.useContext(e);
};
j.useDebugValue = function() {
};
j.useDeferredValue = function(e) {
  return ae.current.useDeferredValue(e);
};
j.useEffect = function(e, t) {
  return ae.current.useEffect(e, t);
};
j.useId = function() {
  return ae.current.useId();
};
j.useImperativeHandle = function(e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function(e, t) {
  return ae.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function(e, t) {
  return ae.current.useLayoutEffect(e, t);
};
j.useMemo = function(e, t) {
  return ae.current.useMemo(e, t);
};
j.useReducer = function(e, t, n) {
  return ae.current.useReducer(e, t, n);
};
j.useRef = function(e) {
  return ae.current.useRef(e);
};
j.useState = function(e) {
  return ae.current.useState(e);
};
j.useSyncExternalStore = function(e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function() {
  return ae.current.useTransition();
};
j.version = "18.2.0";
ds.exports = j;
var D = ds.exports;
const oo = /* @__PURE__ */ Pc(D);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hc = D, Bc = Symbol.for("react.element"), Wc = Symbol.for("react.fragment"), Kc = Object.prototype.hasOwnProperty, Yc = Hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Xc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ks(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    Kc.call(t, r) && !Xc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Bc, type: e, key: o, ref: i, props: l, _owner: Yc.current };
}
fl.Fragment = Wc;
fl.jsx = ks;
fl.jsxs = ks;
fs.exports = fl;
var z = fs.exports, io = {}, Ss = { exports: {} }, Se = {}, xs = { exports: {} }, Es = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(x, P) {
    var T = x.length;
    x.push(P);
    e:
      for (; 0 < T; ) {
        var W = T - 1 >>> 1, Z = x[W];
        if (0 < l(Z, P))
          x[W] = P, x[T] = Z, T = W;
        else
          break e;
      }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0)
      return null;
    var P = x[0], T = x.pop();
    if (T !== P) {
      x[0] = T;
      e:
        for (var W = 0, Z = x.length, ar = Z >>> 1; W < ar; ) {
          var Et = 2 * (W + 1) - 1, Ll = x[Et], Ct = Et + 1, cr = x[Ct];
          if (0 > l(Ll, T))
            Ct < Z && 0 > l(cr, Ll) ? (x[W] = cr, x[Ct] = T, W = Ct) : (x[W] = Ll, x[Et] = T, W = Et);
          else if (Ct < Z && 0 > l(cr, T))
            x[W] = cr, x[Ct] = T, W = Ct;
          else
            break e;
        }
    }
    return P;
  }
  function l(x, P) {
    var T = x.sortIndex - P.sortIndex;
    return T !== 0 ? T : x.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], a = [], m = 1, h = null, p = 3, g = !1, w = !1, k = !1, O = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var P = n(a); P !== null; ) {
      if (P.callback === null)
        r(a);
      else if (P.startTime <= x)
        r(a), P.sortIndex = P.expirationTime, t(s, P);
      else
        break;
      P = n(a);
    }
  }
  function v(x) {
    if (k = !1, d(x), !w)
      if (n(s) !== null)
        w = !0, Ut(S);
      else {
        var P = n(a);
        P !== null && vn(v, P.startTime - x);
      }
  }
  function S(x, P) {
    w = !1, k && (k = !1, f(N), N = -1), g = !0;
    var T = p;
    try {
      for (d(P), h = n(s); h !== null && (!(h.expirationTime > P) || x && !ve()); ) {
        var W = h.callback;
        if (typeof W == "function") {
          h.callback = null, p = h.priorityLevel;
          var Z = W(h.expirationTime <= P);
          P = e.unstable_now(), typeof Z == "function" ? h.callback = Z : h === n(s) && r(s), d(P);
        } else
          r(s);
        h = n(s);
      }
      if (h !== null)
        var ar = !0;
      else {
        var Et = n(a);
        Et !== null && vn(v, Et.startTime - P), ar = !1;
      }
      return ar;
    } finally {
      h = null, p = T, g = !1;
    }
  }
  var _ = !1, C = null, N = -1, A = 5, L = -1;
  function ve() {
    return !(e.unstable_now() - L < A);
  }
  function ie() {
    if (C !== null) {
      var x = e.unstable_now();
      L = x;
      var P = !0;
      try {
        P = C(!0, x);
      } finally {
        P ? xt() : (_ = !1, C = null);
      }
    } else
      _ = !1;
  }
  var xt;
  if (typeof c == "function")
    xt = function() {
      c(ie);
    };
  else if (typeof MessageChannel < "u") {
    var sr = new MessageChannel(), Tl = sr.port2;
    sr.port1.onmessage = ie, xt = function() {
      Tl.postMessage(null);
    };
  } else
    xt = function() {
      O(ie, 0);
    };
  function Ut(x) {
    C = x, _ || (_ = !0, xt());
  }
  function vn(x, P) {
    N = O(function() {
      x(e.unstable_now());
    }, P);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(x) {
    x.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, Ut(S));
  }, e.unstable_forceFrameRate = function(x) {
    0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < x ? Math.floor(1e3 / x) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(x) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var P = 3;
        break;
      default:
        P = p;
    }
    var T = p;
    p = P;
    try {
      return x();
    } finally {
      p = T;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(x, P) {
    switch (x) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        x = 3;
    }
    var T = p;
    p = x;
    try {
      return P();
    } finally {
      p = T;
    }
  }, e.unstable_scheduleCallback = function(x, P, T) {
    var W = e.unstable_now();
    switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? W + T : W) : T = W, x) {
      case 1:
        var Z = -1;
        break;
      case 2:
        Z = 250;
        break;
      case 5:
        Z = 1073741823;
        break;
      case 4:
        Z = 1e4;
        break;
      default:
        Z = 5e3;
    }
    return Z = T + Z, x = { id: m++, callback: P, priorityLevel: x, startTime: T, expirationTime: Z, sortIndex: -1 }, T > W ? (x.sortIndex = T, t(a, x), n(s) === null && x === n(a) && (k ? (f(N), N = -1) : k = !0, vn(v, T - W))) : (x.sortIndex = Z, t(s, x), w || g || (w = !0, Ut(S))), x;
  }, e.unstable_shouldYield = ve, e.unstable_wrapCallback = function(x) {
    var P = p;
    return function() {
      var T = p;
      p = P;
      try {
        return x.apply(this, arguments);
      } finally {
        p = T;
      }
    };
  };
})(Es);
xs.exports = Es;
var Gc = xs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cs = D, ke = Gc;
function y(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var _s = /* @__PURE__ */ new Set(), Fn = {};
function Mt(e, t) {
  on(e, t), on(e + "Capture", t);
}
function on(e, t) {
  for (Fn[e] = t, e = 0; e < t.length; e++)
    _s.add(t[e]);
}
var Xe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), uo = Object.prototype.hasOwnProperty, Zc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, tu = {}, nu = {};
function Jc(e) {
  return uo.call(nu, e) ? !0 : uo.call(tu, e) ? !1 : Zc.test(e) ? nu[e] = !0 : (tu[e] = !0, !1);
}
function qc(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function bc(e, t, n, r) {
  if (t === null || typeof t > "u" || qc(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  te[e] = new ce(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  te[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  te[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  te[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  te[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  te[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  te[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  te[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  te[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var si = /[\-:]([a-z])/g;
function ai(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    si,
    ai
  );
  te[t] = new ce(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(si, ai);
  te[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(si, ai);
  te[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  te[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  te[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ci(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (bc(t, n, l, r) && (n = null), r || l === null ? Jc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var be = Cs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, dr = Symbol.for("react.element"), Vt = Symbol.for("react.portal"), Qt = Symbol.for("react.fragment"), fi = Symbol.for("react.strict_mode"), so = Symbol.for("react.profiler"), Ns = Symbol.for("react.provider"), Ps = Symbol.for("react.context"), di = Symbol.for("react.forward_ref"), ao = Symbol.for("react.suspense"), co = Symbol.for("react.suspense_list"), pi = Symbol.for("react.memo"), tt = Symbol.for("react.lazy"), zs = Symbol.for("react.offscreen"), ru = Symbol.iterator;
function yn(e) {
  return e === null || typeof e != "object" ? null : (e = ru && e[ru] || e["@@iterator"], typeof e == "function" ? e : null);
}
var H = Object.assign, Rl;
function _n(e) {
  if (Rl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Rl = t && t[1] || "";
    }
  return `
` + Rl + e;
}
var Ol = !1;
function $l(e, t) {
  if (!e || Ol)
    return "";
  Ol = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (var l = a.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || l[i] !== o[u]) {
                var s = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    Ol = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? _n(e) : "";
}
function ef(e) {
  switch (e.tag) {
    case 5:
      return _n(e.type);
    case 16:
      return _n("Lazy");
    case 13:
      return _n("Suspense");
    case 19:
      return _n("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = $l(e.type, !1), e;
    case 11:
      return e = $l(e.type.render, !1), e;
    case 1:
      return e = $l(e.type, !0), e;
    default:
      return "";
  }
}
function fo(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Qt:
      return "Fragment";
    case Vt:
      return "Portal";
    case so:
      return "Profiler";
    case fi:
      return "StrictMode";
    case ao:
      return "Suspense";
    case co:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ps:
        return (e.displayName || "Context") + ".Consumer";
      case Ns:
        return (e._context.displayName || "Context") + ".Provider";
      case di:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case pi:
        return t = e.displayName || null, t !== null ? t : fo(e.type) || "Memo";
      case tt:
        t = e._payload, e = e._init;
        try {
          return fo(e(t));
        } catch {
        }
    }
  return null;
}
function tf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return fo(t);
    case 8:
      return t === fi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function vt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ts(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function nf(e) {
  var t = Ts(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function pr(e) {
  e._valueTracker || (e._valueTracker = nf(e));
}
function Ls(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ts(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Vr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function po(e, t) {
  var n = t.checked;
  return H({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function lu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = vt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function js(e, t) {
  t = t.checked, t != null && ci(e, "checked", t, !1);
}
function mo(e, t) {
  js(e, t);
  var n = vt(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ho(e, t.type, n) : t.hasOwnProperty("defaultValue") && ho(e, t.type, vt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ou(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ho(e, t, n) {
  (t !== "number" || Vr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nn = Array.isArray;
function bt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
      t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + vt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function vo(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return H({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function iu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(y(92));
      if (Nn(n)) {
        if (1 < n.length)
          throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: vt(n) };
}
function Rs(e, t) {
  var n = vt(t.value), r = vt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function uu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Os(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function yo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Os(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var mr, $s = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (mr = mr || document.createElement("div"), mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = mr.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Un(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tn = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, rf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tn).forEach(function(e) {
  rf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Tn[t] = Tn[e];
  });
});
function Ds(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Tn.hasOwnProperty(e) && Tn[e] ? ("" + t).trim() : t + "px";
}
function Is(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Ds(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var lf = H({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function go(e, t) {
  if (t) {
    if (lf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(y(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(y(62));
  }
}
function wo(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ko = null;
function mi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var So = null, en = null, tn = null;
function su(e) {
  if (e = or(e)) {
    if (typeof So != "function")
      throw Error(y(280));
    var t = e.stateNode;
    t && (t = vl(t), So(e.stateNode, e.type, t));
  }
}
function Ms(e) {
  en ? tn ? tn.push(e) : tn = [e] : en = e;
}
function Fs() {
  if (en) {
    var e = en, t = tn;
    if (tn = en = null, su(e), t)
      for (e = 0; e < t.length; e++)
        su(t[e]);
  }
}
function Us(e, t) {
  return e(t);
}
function As() {
}
var Dl = !1;
function Vs(e, t, n) {
  if (Dl)
    return e(t, n);
  Dl = !0;
  try {
    return Us(e, t, n);
  } finally {
    Dl = !1, (en !== null || tn !== null) && (As(), Fs());
  }
}
function An(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = vl(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(y(231, t, typeof n));
  return n;
}
var xo = !1;
if (Xe)
  try {
    var gn = {};
    Object.defineProperty(gn, "passive", { get: function() {
      xo = !0;
    } }), window.addEventListener("test", gn, gn), window.removeEventListener("test", gn, gn);
  } catch {
    xo = !1;
  }
function of(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (m) {
    this.onError(m);
  }
}
var Ln = !1, Qr = null, Hr = !1, Eo = null, uf = { onError: function(e) {
  Ln = !0, Qr = e;
} };
function sf(e, t, n, r, l, o, i, u, s) {
  Ln = !1, Qr = null, of.apply(uf, arguments);
}
function af(e, t, n, r, l, o, i, u, s) {
  if (sf.apply(this, arguments), Ln) {
    if (Ln) {
      var a = Qr;
      Ln = !1, Qr = null;
    } else
      throw Error(y(198));
    Hr || (Hr = !0, Eo = a);
  }
}
function Ft(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Qs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function au(e) {
  if (Ft(e) !== e)
    throw Error(y(188));
}
function cf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ft(e), t === null)
      throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null)
      break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n)
          return au(l), e;
        if (o === r)
          return au(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return)
      n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i)
          throw Error(y(189));
      }
    }
    if (n.alternate !== r)
      throw Error(y(190));
  }
  if (n.tag !== 3)
    throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Hs(e) {
  return e = cf(e), e !== null ? Bs(e) : null;
}
function Bs(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Bs(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Ws = ke.unstable_scheduleCallback, cu = ke.unstable_cancelCallback, ff = ke.unstable_shouldYield, df = ke.unstable_requestPaint, K = ke.unstable_now, pf = ke.unstable_getCurrentPriorityLevel, hi = ke.unstable_ImmediatePriority, Ks = ke.unstable_UserBlockingPriority, Br = ke.unstable_NormalPriority, mf = ke.unstable_LowPriority, Ys = ke.unstable_IdlePriority, dl = null, Ae = null;
function hf(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function")
    try {
      Ae.onCommitFiberRoot(dl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var $e = Math.clz32 ? Math.clz32 : gf, vf = Math.log, yf = Math.LN2;
function gf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (vf(e) / yf | 0) | 0;
}
var hr = 64, vr = 4194304;
function Pn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Wr(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Pn(u) : (o &= i, o !== 0 && (r = Pn(o)));
  } else
    i = n & ~l, i !== 0 ? r = Pn(i) : o !== 0 && (r = Pn(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - $e(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function wf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function kf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - $e(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = wf(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Co(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Xs() {
  var e = hr;
  return hr <<= 1, !(hr & 4194240) && (hr = 64), e;
}
function Il(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function rr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - $e(t), e[t] = n;
}
function Sf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - $e(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function vi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - $e(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var $ = 0;
function Gs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Zs, yi, Js, qs, bs, _o = !1, yr = [], st = null, at = null, ct = null, Vn = /* @__PURE__ */ new Map(), Qn = /* @__PURE__ */ new Map(), rt = [], xf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function fu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      st = null;
      break;
    case "dragenter":
    case "dragleave":
      at = null;
      break;
    case "mouseover":
    case "mouseout":
      ct = null;
      break;
    case "pointerover":
    case "pointerout":
      Vn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qn.delete(t.pointerId);
  }
}
function wn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = or(t), t !== null && yi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Ef(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return st = wn(st, e, t, n, r, l), !0;
    case "dragenter":
      return at = wn(at, e, t, n, r, l), !0;
    case "mouseover":
      return ct = wn(ct, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Vn.set(o, wn(Vn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Qn.set(o, wn(Qn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function ea(e) {
  var t = Pt(e.target);
  if (t !== null) {
    var n = Ft(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Qs(n), t !== null) {
          e.blockedOn = t, bs(e.priority, function() {
            Js(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Lr(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = No(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ko = r, n.target.dispatchEvent(r), ko = null;
    } else
      return t = or(n), t !== null && yi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function du(e, t, n) {
  Lr(e) && n.delete(t);
}
function Cf() {
  _o = !1, st !== null && Lr(st) && (st = null), at !== null && Lr(at) && (at = null), ct !== null && Lr(ct) && (ct = null), Vn.forEach(du), Qn.forEach(du);
}
function kn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, _o || (_o = !0, ke.unstable_scheduleCallback(ke.unstable_NormalPriority, Cf)));
}
function Hn(e) {
  function t(l) {
    return kn(l, e);
  }
  if (0 < yr.length) {
    kn(yr[0], e);
    for (var n = 1; n < yr.length; n++) {
      var r = yr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (st !== null && kn(st, e), at !== null && kn(at, e), ct !== null && kn(ct, e), Vn.forEach(t), Qn.forEach(t), n = 0; n < rt.length; n++)
    r = rt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < rt.length && (n = rt[0], n.blockedOn === null); )
    ea(n), n.blockedOn === null && rt.shift();
}
var nn = be.ReactCurrentBatchConfig, Kr = !0;
function _f(e, t, n, r) {
  var l = $, o = nn.transition;
  nn.transition = null;
  try {
    $ = 1, gi(e, t, n, r);
  } finally {
    $ = l, nn.transition = o;
  }
}
function Nf(e, t, n, r) {
  var l = $, o = nn.transition;
  nn.transition = null;
  try {
    $ = 4, gi(e, t, n, r);
  } finally {
    $ = l, nn.transition = o;
  }
}
function gi(e, t, n, r) {
  if (Kr) {
    var l = No(e, t, n, r);
    if (l === null)
      Kl(e, t, r, Yr, n), fu(e, r);
    else if (Ef(l, e, t, n, r))
      r.stopPropagation();
    else if (fu(e, r), t & 4 && -1 < xf.indexOf(e)) {
      for (; l !== null; ) {
        var o = or(l);
        if (o !== null && Zs(o), o = No(e, t, n, r), o === null && Kl(e, t, r, Yr, n), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      Kl(e, t, r, null, n);
  }
}
var Yr = null;
function No(e, t, n, r) {
  if (Yr = null, e = mi(r), e = Pt(e), e !== null)
    if (t = Ft(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Qs(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Yr = e, null;
}
function ta(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (pf()) {
        case hi:
          return 1;
        case Ks:
          return 4;
        case Br:
        case mf:
          return 16;
        case Ys:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var it = null, wi = null, jr = null;
function na() {
  if (jr)
    return jr;
  var e, t = wi, n = t.length, r, l = "value" in it ? it.value : it.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
    ;
  return jr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Rr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function gr() {
  return !0;
}
function pu() {
  return !1;
}
function xe(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? gr : pu, this.isPropagationStopped = pu, this;
  }
  return H(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = gr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = gr);
  }, persist: function() {
  }, isPersistent: gr }), t;
}
var mn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ki = xe(mn), lr = H({}, mn, { view: 0, detail: 0 }), Pf = xe(lr), Ml, Fl, Sn, pl = H({}, lr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Si, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Sn && (Sn && e.type === "mousemove" ? (Ml = e.screenX - Sn.screenX, Fl = e.screenY - Sn.screenY) : Fl = Ml = 0, Sn = e), Ml);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Fl;
} }), mu = xe(pl), zf = H({}, pl, { dataTransfer: 0 }), Tf = xe(zf), Lf = H({}, lr, { relatedTarget: 0 }), Ul = xe(Lf), jf = H({}, mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Rf = xe(jf), Of = H({}, mn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), $f = xe(Of), Df = H({}, mn, { data: 0 }), hu = xe(Df), If = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Mf = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Ff = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Uf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ff[e]) ? !!t[e] : !1;
}
function Si() {
  return Uf;
}
var Af = H({}, lr, { key: function(e) {
  if (e.key) {
    var t = If[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Rr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Mf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Si, charCode: function(e) {
  return e.type === "keypress" ? Rr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Rr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Vf = xe(Af), Qf = H({}, pl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), vu = xe(Qf), Hf = H({}, lr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Si }), Bf = xe(Hf), Wf = H({}, mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kf = xe(Wf), Yf = H({}, pl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Xf = xe(Yf), Gf = [9, 13, 27, 32], xi = Xe && "CompositionEvent" in window, jn = null;
Xe && "documentMode" in document && (jn = document.documentMode);
var Zf = Xe && "TextEvent" in window && !jn, ra = Xe && (!xi || jn && 8 < jn && 11 >= jn), yu = String.fromCharCode(32), gu = !1;
function la(e, t) {
  switch (e) {
    case "keyup":
      return Gf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function oa(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ht = !1;
function Jf(e, t) {
  switch (e) {
    case "compositionend":
      return oa(t);
    case "keypress":
      return t.which !== 32 ? null : (gu = !0, yu);
    case "textInput":
      return e = t.data, e === yu && gu ? null : e;
    default:
      return null;
  }
}
function qf(e, t) {
  if (Ht)
    return e === "compositionend" || !xi && la(e, t) ? (e = na(), jr = wi = it = null, Ht = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ra && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var bf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function wu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!bf[e.type] : t === "textarea";
}
function ia(e, t, n, r) {
  Ms(r), t = Xr(t, "onChange"), 0 < t.length && (n = new ki("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Rn = null, Bn = null;
function ed(e) {
  ya(e, 0);
}
function ml(e) {
  var t = Kt(e);
  if (Ls(t))
    return e;
}
function td(e, t) {
  if (e === "change")
    return t;
}
var ua = !1;
if (Xe) {
  var Al;
  if (Xe) {
    var Vl = "oninput" in document;
    if (!Vl) {
      var ku = document.createElement("div");
      ku.setAttribute("oninput", "return;"), Vl = typeof ku.oninput == "function";
    }
    Al = Vl;
  } else
    Al = !1;
  ua = Al && (!document.documentMode || 9 < document.documentMode);
}
function Su() {
  Rn && (Rn.detachEvent("onpropertychange", sa), Bn = Rn = null);
}
function sa(e) {
  if (e.propertyName === "value" && ml(Bn)) {
    var t = [];
    ia(t, Bn, e, mi(e)), Vs(ed, t);
  }
}
function nd(e, t, n) {
  e === "focusin" ? (Su(), Rn = t, Bn = n, Rn.attachEvent("onpropertychange", sa)) : e === "focusout" && Su();
}
function rd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ml(Bn);
}
function ld(e, t) {
  if (e === "click")
    return ml(t);
}
function od(e, t) {
  if (e === "input" || e === "change")
    return ml(t);
}
function id(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ie = typeof Object.is == "function" ? Object.is : id;
function Wn(e, t) {
  if (Ie(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!uo.call(t, l) || !Ie(e[l], t[l]))
      return !1;
  }
  return !0;
}
function xu(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Eu(e, t) {
  var n = xu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = xu(n);
  }
}
function aa(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? aa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ca() {
  for (var e = window, t = Vr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Vr(e.document);
  }
  return t;
}
function Ei(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function ud(e) {
  var t = ca(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && aa(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ei(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Eu(n, o);
        var i = Eu(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var sd = Xe && "documentMode" in document && 11 >= document.documentMode, Bt = null, Po = null, On = null, zo = !1;
function Cu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zo || Bt == null || Bt !== Vr(r) || (r = Bt, "selectionStart" in r && Ei(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), On && Wn(On, r) || (On = r, r = Xr(Po, "onSelect"), 0 < r.length && (t = new ki("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Bt)));
}
function wr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Wt = { animationend: wr("Animation", "AnimationEnd"), animationiteration: wr("Animation", "AnimationIteration"), animationstart: wr("Animation", "AnimationStart"), transitionend: wr("Transition", "TransitionEnd") }, Ql = {}, fa = {};
Xe && (fa = document.createElement("div").style, "AnimationEvent" in window || (delete Wt.animationend.animation, delete Wt.animationiteration.animation, delete Wt.animationstart.animation), "TransitionEvent" in window || delete Wt.transitionend.transition);
function hl(e) {
  if (Ql[e])
    return Ql[e];
  if (!Wt[e])
    return e;
  var t = Wt[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in fa)
      return Ql[e] = t[n];
  return e;
}
var da = hl("animationend"), pa = hl("animationiteration"), ma = hl("animationstart"), ha = hl("transitionend"), va = /* @__PURE__ */ new Map(), _u = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function gt(e, t) {
  va.set(e, t), Mt(t, [e]);
}
for (var Hl = 0; Hl < _u.length; Hl++) {
  var Bl = _u[Hl], ad = Bl.toLowerCase(), cd = Bl[0].toUpperCase() + Bl.slice(1);
  gt(ad, "on" + cd);
}
gt(da, "onAnimationEnd");
gt(pa, "onAnimationIteration");
gt(ma, "onAnimationStart");
gt("dblclick", "onDoubleClick");
gt("focusin", "onFocus");
gt("focusout", "onBlur");
gt(ha, "onTransitionEnd");
on("onMouseEnter", ["mouseout", "mouseover"]);
on("onMouseLeave", ["mouseout", "mouseover"]);
on("onPointerEnter", ["pointerout", "pointerover"]);
on("onPointerLeave", ["pointerout", "pointerover"]);
Mt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), fd = new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));
function Nu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, af(r, t, void 0, e), e.currentTarget = null;
}
function ya(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, a = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          Nu(l, u, a), o = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          Nu(l, u, a), o = s;
        }
    }
  }
  if (Hr)
    throw e = Eo, Hr = !1, Eo = null, e;
}
function M(e, t) {
  var n = t[Oo];
  n === void 0 && (n = t[Oo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ga(t, e, 2, !1), n.add(r));
}
function Wl(e, t, n) {
  var r = 0;
  t && (r |= 4), ga(n, e, r, t);
}
var kr = "_reactListening" + Math.random().toString(36).slice(2);
function Kn(e) {
  if (!e[kr]) {
    e[kr] = !0, _s.forEach(function(n) {
      n !== "selectionchange" && (fd.has(n) || Wl(n, !1, e), Wl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[kr] || (t[kr] = !0, Wl("selectionchange", !1, t));
  }
}
function ga(e, t, n, r) {
  switch (ta(t)) {
    case 1:
      var l = _f;
      break;
    case 4:
      l = Nf;
      break;
    default:
      l = gi;
  }
  n = l.bind(null, t, n, e), l = void 0, !xo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Kl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || u.nodeType === 8 && u.parentNode === l)
            break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (i = Pt(u), i === null)
              return;
            if (s = i.tag, s === 5 || s === 6) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  Vs(function() {
    var a = o, m = mi(n), h = [];
    e: {
      var p = va.get(e);
      if (p !== void 0) {
        var g = ki, w = e;
        switch (e) {
          case "keypress":
            if (Rr(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = Vf;
            break;
          case "focusin":
            w = "focus", g = Ul;
            break;
          case "focusout":
            w = "blur", g = Ul;
            break;
          case "beforeblur":
          case "afterblur":
            g = Ul;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = mu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Tf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Bf;
            break;
          case da:
          case pa:
          case ma:
            g = Rf;
            break;
          case ha:
            g = Kf;
            break;
          case "scroll":
            g = Pf;
            break;
          case "wheel":
            g = Xf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = $f;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = vu;
        }
        var k = (t & 4) !== 0, O = !k && e === "scroll", f = k ? p !== null ? p + "Capture" : null : p;
        k = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = An(c, f), v != null && k.push(Yn(c, v, d)))), O)
            break;
          c = c.return;
        }
        0 < k.length && (p = new g(p, w, null, n, m), h.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && n !== ko && (w = n.relatedTarget || n.fromElement) && (Pt(w) || w[Ge]))
          break e;
        if ((g || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = a, w = w ? Pt(w) : null, w !== null && (O = Ft(w), w !== O || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = a), g !== w)) {
          if (k = mu, v = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (k = vu, v = "onPointerLeave", f = "onPointerEnter", c = "pointer"), O = g == null ? p : Kt(g), d = w == null ? p : Kt(w), p = new k(v, c + "leave", g, n, m), p.target = O, p.relatedTarget = d, v = null, Pt(m) === a && (k = new k(f, c + "enter", w, n, m), k.target = d, k.relatedTarget = O, v = k), O = v, g && w)
            t: {
              for (k = g, f = w, c = 0, d = k; d; d = At(d))
                c++;
              for (d = 0, v = f; v; v = At(v))
                d++;
              for (; 0 < c - d; )
                k = At(k), c--;
              for (; 0 < d - c; )
                f = At(f), d--;
              for (; c--; ) {
                if (k === f || f !== null && k === f.alternate)
                  break t;
                k = At(k), f = At(f);
              }
              k = null;
            }
          else
            k = null;
          g !== null && Pu(h, p, g, k, !1), w !== null && O !== null && Pu(h, O, w, k, !0);
        }
      }
      e: {
        if (p = a ? Kt(a) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file")
          var S = td;
        else if (wu(p))
          if (ua)
            S = od;
          else {
            S = rd;
            var _ = nd;
          }
        else
          (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (S = ld);
        if (S && (S = S(e, a))) {
          ia(h, S, n, m);
          break e;
        }
        _ && _(e, p, a), e === "focusout" && (_ = p._wrapperState) && _.controlled && p.type === "number" && ho(p, "number", p.value);
      }
      switch (_ = a ? Kt(a) : window, e) {
        case "focusin":
          (wu(_) || _.contentEditable === "true") && (Bt = _, Po = a, On = null);
          break;
        case "focusout":
          On = Po = Bt = null;
          break;
        case "mousedown":
          zo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          zo = !1, Cu(h, n, m);
          break;
        case "selectionchange":
          if (sd)
            break;
        case "keydown":
        case "keyup":
          Cu(h, n, m);
      }
      var C;
      if (xi)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Ht ? la(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (ra && n.locale !== "ko" && (Ht || N !== "onCompositionStart" ? N === "onCompositionEnd" && Ht && (C = na()) : (it = m, wi = "value" in it ? it.value : it.textContent, Ht = !0)), _ = Xr(a, N), 0 < _.length && (N = new hu(N, e, null, n, m), h.push({ event: N, listeners: _ }), C ? N.data = C : (C = oa(n), C !== null && (N.data = C)))), (C = Zf ? Jf(e, n) : qf(e, n)) && (a = Xr(a, "onBeforeInput"), 0 < a.length && (m = new hu("onBeforeInput", "beforeinput", null, n, m), h.push({ event: m, listeners: a }), m.data = C));
    }
    ya(h, t);
  });
}
function Yn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = An(e, n), o != null && r.unshift(Yn(e, o, l)), o = An(e, t), o != null && r.push(Yn(e, o, l))), e = e.return;
  }
  return r;
}
function At(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, l ? (s = An(n, o), s != null && i.unshift(Yn(n, s, u))) : l || (s = An(n, o), s != null && i.push(Yn(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var dd = /\r\n?/g, pd = /\u0000|\uFFFD/g;
function zu(e) {
  return (typeof e == "string" ? e : "" + e).replace(dd, `
`).replace(pd, "");
}
function Sr(e, t, n) {
  if (t = zu(t), zu(e) !== t && n)
    throw Error(y(425));
}
function Gr() {
}
var To = null, Lo = null;
function jo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ro = typeof setTimeout == "function" ? setTimeout : void 0, md = typeof clearTimeout == "function" ? clearTimeout : void 0, Tu = typeof Promise == "function" ? Promise : void 0, hd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Tu < "u" ? function(e) {
  return Tu.resolve(null).then(e).catch(vd);
} : Ro;
function vd(e) {
  setTimeout(function() {
    throw e;
  });
}
function Yl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Hn(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Hn(t);
}
function ft(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function Lu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var hn = Math.random().toString(36).slice(2), Ue = "__reactFiber$" + hn, Xn = "__reactProps$" + hn, Ge = "__reactContainer$" + hn, Oo = "__reactEvents$" + hn, yd = "__reactListeners$" + hn, gd = "__reactHandles$" + hn;
function Pt(e) {
  var t = e[Ue];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ge] || n[Ue]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Lu(e); e !== null; ) {
          if (n = e[Ue])
            return n;
          e = Lu(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function or(e) {
  return e = e[Ue] || e[Ge], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Kt(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(y(33));
}
function vl(e) {
  return e[Xn] || null;
}
var $o = [], Yt = -1;
function wt(e) {
  return { current: e };
}
function F(e) {
  0 > Yt || (e.current = $o[Yt], $o[Yt] = null, Yt--);
}
function I(e, t) {
  Yt++, $o[Yt] = e.current, e.current = t;
}
var yt = {}, oe = wt(yt), pe = wt(!1), Rt = yt;
function un(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return yt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n)
    l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function me(e) {
  return e = e.childContextTypes, e != null;
}
function Zr() {
  F(pe), F(oe);
}
function ju(e, t, n) {
  if (oe.current !== yt)
    throw Error(y(168));
  I(oe, t), I(pe, n);
}
function wa(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(y(108, tf(e) || "Unknown", l));
  return H({}, n, r);
}
function Jr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || yt, Rt = oe.current, I(oe, e), I(pe, pe.current), !0;
}
function Ru(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(y(169));
  n ? (e = wa(e, t, Rt), r.__reactInternalMemoizedMergedChildContext = e, F(pe), F(oe), I(oe, e)) : F(pe), I(pe, n);
}
var Be = null, yl = !1, Xl = !1;
function ka(e) {
  Be === null ? Be = [e] : Be.push(e);
}
function wd(e) {
  yl = !0, ka(e);
}
function kt() {
  if (!Xl && Be !== null) {
    Xl = !0;
    var e = 0, t = $;
    try {
      var n = Be;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Be = null, yl = !1;
    } catch (l) {
      throw Be !== null && (Be = Be.slice(e + 1)), Ws(hi, kt), l;
    } finally {
      $ = t, Xl = !1;
    }
  }
  return null;
}
var Xt = [], Gt = 0, qr = null, br = 0, Ee = [], Ce = 0, Ot = null, We = 1, Ke = "";
function _t(e, t) {
  Xt[Gt++] = br, Xt[Gt++] = qr, qr = e, br = t;
}
function Sa(e, t, n) {
  Ee[Ce++] = We, Ee[Ce++] = Ke, Ee[Ce++] = Ot, Ot = e;
  var r = We;
  e = Ke;
  var l = 32 - $e(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - $e(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, We = 1 << 32 - $e(t) + l | n << l | r, Ke = o + e;
  } else
    We = 1 << o | n << l | r, Ke = e;
}
function Ci(e) {
  e.return !== null && (_t(e, 1), Sa(e, 1, 0));
}
function _i(e) {
  for (; e === qr; )
    qr = Xt[--Gt], Xt[Gt] = null, br = Xt[--Gt], Xt[Gt] = null;
  for (; e === Ot; )
    Ot = Ee[--Ce], Ee[Ce] = null, Ke = Ee[--Ce], Ee[Ce] = null, We = Ee[--Ce], Ee[Ce] = null;
}
var we = null, ge = null, U = !1, Re = null;
function xa(e, t) {
  var n = _e(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ou(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, we = e, ge = ft(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, we = e, ge = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ot !== null ? { id: We, overflow: Ke } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = _e(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, we = e, ge = null, !0) : !1;
    default:
      return !1;
  }
}
function Do(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Io(e) {
  if (U) {
    var t = ge;
    if (t) {
      var n = t;
      if (!Ou(e, t)) {
        if (Do(e))
          throw Error(y(418));
        t = ft(n.nextSibling);
        var r = we;
        t && Ou(e, t) ? xa(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, we = e);
      }
    } else {
      if (Do(e))
        throw Error(y(418));
      e.flags = e.flags & -4097 | 2, U = !1, we = e;
    }
  }
}
function $u(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  we = e;
}
function xr(e) {
  if (e !== we)
    return !1;
  if (!U)
    return $u(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !jo(e.type, e.memoizedProps)), t && (t = ge)) {
    if (Do(e))
      throw Ea(), Error(y(418));
    for (; t; )
      xa(e, t), t = ft(t.nextSibling);
  }
  if ($u(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ge = ft(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ge = null;
    }
  } else
    ge = we ? ft(e.stateNode.nextSibling) : null;
  return !0;
}
function Ea() {
  for (var e = ge; e; )
    e = ft(e.nextSibling);
}
function sn() {
  ge = we = null, U = !1;
}
function Ni(e) {
  Re === null ? Re = [e] : Re.push(e);
}
var kd = be.ReactCurrentBatchConfig;
function Le(e, t) {
  if (e && e.defaultProps) {
    t = H({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var el = wt(null), tl = null, Zt = null, Pi = null;
function zi() {
  Pi = Zt = tl = null;
}
function Ti(e) {
  var t = el.current;
  F(el), e._currentValue = t;
}
function Mo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function rn(e, t) {
  tl = e, Pi = Zt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (de = !0), e.firstContext = null);
}
function Pe(e) {
  var t = e._currentValue;
  if (Pi !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Zt === null) {
      if (tl === null)
        throw Error(y(308));
      Zt = e, tl.dependencies = { lanes: 0, firstContext: e };
    } else
      Zt = Zt.next = e;
  return t;
}
var zt = null;
function Li(e) {
  zt === null ? zt = [e] : zt.push(e);
}
function Ca(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Li(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ze(e, r);
}
function Ze(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var nt = !1;
function ji(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function _a(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ye(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, R & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ze(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Li(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ze(e, n);
}
function Or(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, vi(e, n);
  }
}
function Du(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else
      l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function nl(e, t, n, r) {
  var l = e.updateQueue;
  nt = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, i === null ? o = a : i.next = a, i = s;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, u = m.lastBaseUpdate, u !== i && (u === null ? m.firstBaseUpdate = a : u.next = a, m.lastBaseUpdate = s));
  }
  if (o !== null) {
    var h = l.baseState;
    i = 0, m = a = s = null, u = o;
    do {
      var p = u.lane, g = u.eventTime;
      if ((r & p) === p) {
        m !== null && (m = m.next = {
          eventTime: g,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, k = u;
          switch (p = t, g = n, k.tag) {
            case 1:
              if (w = k.payload, typeof w == "function") {
                h = w.call(g, h, p);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = k.payload, p = typeof w == "function" ? w.call(g, h, p) : w, p == null)
                break e;
              h = H({}, h, p);
              break e;
            case 2:
              nt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else
        g = { eventTime: g, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, m === null ? (a = m = g, s = h) : m = m.next = g, i |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (1);
    if (m === null && (s = h), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else
      o === null && (l.shared.lanes = 0);
    Dt |= i, e.lanes = i, e.memoizedState = h;
  }
}
function Iu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function")
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var Na = new Cs.Component().refs;
function Fo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : H({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var gl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ft(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = se(), l = mt(e), o = Ye(r, l);
  o.payload = t, n != null && (o.callback = n), t = dt(e, o, l), t !== null && (De(t, e, l, r), Or(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = se(), l = mt(e), o = Ye(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = dt(e, o, l), t !== null && (De(t, e, l, r), Or(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = se(), r = mt(e), l = Ye(n, r);
  l.tag = 2, t != null && (l.callback = t), t = dt(e, l, r), t !== null && (De(t, e, r, n), Or(t, e, r));
} };
function Mu(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Wn(n, r) || !Wn(l, o) : !0;
}
function Pa(e, t, n) {
  var r = !1, l = yt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Pe(o) : (l = me(t) ? Rt : oe.current, r = t.contextTypes, o = (r = r != null) ? un(e, l) : yt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = gl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Fu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && gl.enqueueReplaceState(t, t.state, null);
}
function Uo(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = Na, ji(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Pe(o) : (o = me(t) ? Rt : oe.current, l.context = un(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Fo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && gl.enqueueReplaceState(l, l.state, null), nl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function xn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(y(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        u === Na && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(y(284));
    if (!n._owner)
      throw Error(y(290, e));
  }
  return e;
}
function Er(e, t) {
  throw e = Object.prototype.toString.call(t), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Uu(e) {
  var t = e._init;
  return t(e._payload);
}
function za(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [c], f.flags |= 16) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e)
      return null;
    for (; c !== null; )
      t(f, c), c = c.sibling;
    return null;
  }
  function r(f, c) {
    for (f = /* @__PURE__ */ new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
    return f;
  }
  function l(f, c) {
    return f = ht(f, c), f.index = 0, f.sibling = null, f;
  }
  function o(f, c, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, v) {
    return c === null || c.tag !== 6 ? (c = to(d, f.mode, v), c.return = f, c) : (c = l(c, d), c.return = f, c);
  }
  function s(f, c, d, v) {
    var S = d.type;
    return S === Qt ? m(f, c, d.props.children, v, d.key) : c !== null && (c.elementType === S || typeof S == "object" && S !== null && S.$$typeof === tt && Uu(S) === c.type) ? (v = l(c, d.props), v.ref = xn(f, c, d), v.return = f, v) : (v = Ur(d.type, d.key, d.props, null, f.mode, v), v.ref = xn(f, c, d), v.return = f, v);
  }
  function a(f, c, d, v) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = no(d, f.mode, v), c.return = f, c) : (c = l(c, d.children || []), c.return = f, c);
  }
  function m(f, c, d, v, S) {
    return c === null || c.tag !== 7 ? (c = jt(d, f.mode, v, S), c.return = f, c) : (c = l(c, d), c.return = f, c);
  }
  function h(f, c, d) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = to("" + c, f.mode, d), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case dr:
          return d = Ur(c.type, c.key, c.props, null, f.mode, d), d.ref = xn(f, null, c), d.return = f, d;
        case Vt:
          return c = no(c, f.mode, d), c.return = f, c;
        case tt:
          var v = c._init;
          return h(f, v(c._payload), d);
      }
      if (Nn(c) || yn(c))
        return c = jt(c, f.mode, d, null), c.return = f, c;
      Er(f, c);
    }
    return null;
  }
  function p(f, c, d, v) {
    var S = c !== null ? c.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return S !== null ? null : u(f, c, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case dr:
          return d.key === S ? s(f, c, d, v) : null;
        case Vt:
          return d.key === S ? a(f, c, d, v) : null;
        case tt:
          return S = d._init, p(
            f,
            c,
            S(d._payload),
            v
          );
      }
      if (Nn(d) || yn(d))
        return S !== null ? null : m(f, c, d, v, null);
      Er(f, d);
    }
    return null;
  }
  function g(f, c, d, v, S) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return f = f.get(d) || null, u(c, f, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case dr:
          return f = f.get(v.key === null ? d : v.key) || null, s(c, f, v, S);
        case Vt:
          return f = f.get(v.key === null ? d : v.key) || null, a(c, f, v, S);
        case tt:
          var _ = v._init;
          return g(f, c, d, _(v._payload), S);
      }
      if (Nn(v) || yn(v))
        return f = f.get(d) || null, m(c, f, v, S, null);
      Er(c, v);
    }
    return null;
  }
  function w(f, c, d, v) {
    for (var S = null, _ = null, C = c, N = c = 0, A = null; C !== null && N < d.length; N++) {
      C.index > N ? (A = C, C = null) : A = C.sibling;
      var L = p(f, C, d[N], v);
      if (L === null) {
        C === null && (C = A);
        break;
      }
      e && C && L.alternate === null && t(f, C), c = o(L, c, N), _ === null ? S = L : _.sibling = L, _ = L, C = A;
    }
    if (N === d.length)
      return n(f, C), U && _t(f, N), S;
    if (C === null) {
      for (; N < d.length; N++)
        C = h(f, d[N], v), C !== null && (c = o(C, c, N), _ === null ? S = C : _.sibling = C, _ = C);
      return U && _t(f, N), S;
    }
    for (C = r(f, C); N < d.length; N++)
      A = g(C, f, N, d[N], v), A !== null && (e && A.alternate !== null && C.delete(A.key === null ? N : A.key), c = o(A, c, N), _ === null ? S = A : _.sibling = A, _ = A);
    return e && C.forEach(function(ve) {
      return t(f, ve);
    }), U && _t(f, N), S;
  }
  function k(f, c, d, v) {
    var S = yn(d);
    if (typeof S != "function")
      throw Error(y(150));
    if (d = S.call(d), d == null)
      throw Error(y(151));
    for (var _ = S = null, C = c, N = c = 0, A = null, L = d.next(); C !== null && !L.done; N++, L = d.next()) {
      C.index > N ? (A = C, C = null) : A = C.sibling;
      var ve = p(f, C, L.value, v);
      if (ve === null) {
        C === null && (C = A);
        break;
      }
      e && C && ve.alternate === null && t(f, C), c = o(ve, c, N), _ === null ? S = ve : _.sibling = ve, _ = ve, C = A;
    }
    if (L.done)
      return n(
        f,
        C
      ), U && _t(f, N), S;
    if (C === null) {
      for (; !L.done; N++, L = d.next())
        L = h(f, L.value, v), L !== null && (c = o(L, c, N), _ === null ? S = L : _.sibling = L, _ = L);
      return U && _t(f, N), S;
    }
    for (C = r(f, C); !L.done; N++, L = d.next())
      L = g(C, f, N, L.value, v), L !== null && (e && L.alternate !== null && C.delete(L.key === null ? N : L.key), c = o(L, c, N), _ === null ? S = L : _.sibling = L, _ = L);
    return e && C.forEach(function(ie) {
      return t(f, ie);
    }), U && _t(f, N), S;
  }
  function O(f, c, d, v) {
    if (typeof d == "object" && d !== null && d.type === Qt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case dr:
          e: {
            for (var S = d.key, _ = c; _ !== null; ) {
              if (_.key === S) {
                if (S = d.type, S === Qt) {
                  if (_.tag === 7) {
                    n(f, _.sibling), c = l(_, d.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (_.elementType === S || typeof S == "object" && S !== null && S.$$typeof === tt && Uu(S) === _.type) {
                  n(f, _.sibling), c = l(_, d.props), c.ref = xn(f, _, d), c.return = f, f = c;
                  break e;
                }
                n(f, _);
                break;
              } else
                t(f, _);
              _ = _.sibling;
            }
            d.type === Qt ? (c = jt(d.props.children, f.mode, v, d.key), c.return = f, f = c) : (v = Ur(d.type, d.key, d.props, null, f.mode, v), v.ref = xn(f, c, d), v.return = f, f = v);
          }
          return i(f);
        case Vt:
          e: {
            for (_ = d.key; c !== null; ) {
              if (c.key === _)
                if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                  n(f, c.sibling), c = l(c, d.children || []), c.return = f, f = c;
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else
                t(f, c);
              c = c.sibling;
            }
            c = no(d, f.mode, v), c.return = f, f = c;
          }
          return i(f);
        case tt:
          return _ = d._init, O(f, c, _(d._payload), v);
      }
      if (Nn(d))
        return w(f, c, d, v);
      if (yn(d))
        return k(f, c, d, v);
      Er(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, d), c.return = f, f = c) : (n(f, c), c = to(d, f.mode, v), c.return = f, f = c), i(f)) : n(f, c);
  }
  return O;
}
var an = za(!0), Ta = za(!1), ir = {}, Ve = wt(ir), Gn = wt(ir), Zn = wt(ir);
function Tt(e) {
  if (e === ir)
    throw Error(y(174));
  return e;
}
function Ri(e, t) {
  switch (I(Zn, t), I(Gn, e), I(Ve, ir), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = yo(t, e);
  }
  F(Ve), I(Ve, t);
}
function cn() {
  F(Ve), F(Gn), F(Zn);
}
function La(e) {
  Tt(Zn.current);
  var t = Tt(Ve.current), n = yo(t, e.type);
  t !== n && (I(Gn, e), I(Ve, n));
}
function Oi(e) {
  Gn.current === e && (F(Ve), F(Gn));
}
var V = wt(0);
function rl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Gl = [];
function $i() {
  for (var e = 0; e < Gl.length; e++)
    Gl[e]._workInProgressVersionPrimary = null;
  Gl.length = 0;
}
var $r = be.ReactCurrentDispatcher, Zl = be.ReactCurrentBatchConfig, $t = 0, Q = null, X = null, J = null, ll = !1, $n = !1, Jn = 0, Sd = 0;
function ne() {
  throw Error(y(321));
}
function Di(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ie(e[n], t[n]))
      return !1;
  return !0;
}
function Ii(e, t, n, r, l, o) {
  if ($t = o, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, $r.current = e === null || e.memoizedState === null ? _d : Nd, e = n(r, l), $n) {
    o = 0;
    do {
      if ($n = !1, Jn = 0, 25 <= o)
        throw Error(y(301));
      o += 1, J = X = null, t.updateQueue = null, $r.current = Pd, e = n(r, l);
    } while ($n);
  }
  if ($r.current = ol, t = X !== null && X.next !== null, $t = 0, J = X = Q = null, ll = !1, t)
    throw Error(y(300));
  return e;
}
function Mi() {
  var e = Jn !== 0;
  return Jn = 0, e;
}
function Fe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return J === null ? Q.memoizedState = J = e : J = J.next = e, J;
}
function ze() {
  if (X === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = X.next;
  var t = J === null ? Q.memoizedState : J.next;
  if (t !== null)
    J = t, X = e;
  else {
    if (e === null)
      throw Error(y(310));
    X = e, e = { memoizedState: X.memoizedState, baseState: X.baseState, baseQueue: X.baseQueue, queue: X.queue, next: null }, J === null ? Q.memoizedState = J = e : J = J.next = e;
  }
  return J;
}
function qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Jl(e) {
  var t = ze(), n = t.queue;
  if (n === null)
    throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = X, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, a = o;
    do {
      var m = a.lane;
      if (($t & m) === m)
        s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var h = {
          lane: m,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = h, i = r) : s = s.next = h, Q.lanes |= m, Dt |= m;
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? i = r : s.next = u, Ie(r, t.memoizedState) || (de = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, Q.lanes |= o, Dt |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ql(e) {
  var t = ze(), n = t.queue;
  if (n === null)
    throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Ie(o, t.memoizedState) || (de = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function ja() {
}
function Ra(e, t) {
  var n = Q, r = ze(), l = t(), o = !Ie(r.memoizedState, l);
  if (o && (r.memoizedState = l, de = !0), r = r.queue, Fi(Da.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || J !== null && J.memoizedState.tag & 1) {
    if (n.flags |= 2048, bn(9, $a.bind(null, n, r, l, t), void 0, null), q === null)
      throw Error(y(349));
    $t & 30 || Oa(n, t, l);
  }
  return l;
}
function Oa(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function $a(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ia(t) && Ma(e);
}
function Da(e, t, n) {
  return n(function() {
    Ia(t) && Ma(e);
  });
}
function Ia(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ie(e, n);
  } catch {
    return !0;
  }
}
function Ma(e) {
  var t = Ze(e, 1);
  t !== null && De(t, e, 1, -1);
}
function Au(e) {
  var t = Fe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qn, lastRenderedState: e }, t.queue = e, e = e.dispatch = Cd.bind(null, Q, e), [t.memoizedState, e];
}
function bn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Fa() {
  return ze().memoizedState;
}
function Dr(e, t, n, r) {
  var l = Fe();
  Q.flags |= e, l.memoizedState = bn(1 | t, n, void 0, r === void 0 ? null : r);
}
function wl(e, t, n, r) {
  var l = ze();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (o = i.destroy, r !== null && Di(r, i.deps)) {
      l.memoizedState = bn(t, n, o, r);
      return;
    }
  }
  Q.flags |= e, l.memoizedState = bn(1 | t, n, o, r);
}
function Vu(e, t) {
  return Dr(8390656, 8, e, t);
}
function Fi(e, t) {
  return wl(2048, 8, e, t);
}
function Ua(e, t) {
  return wl(4, 2, e, t);
}
function Aa(e, t) {
  return wl(4, 4, e, t);
}
function Va(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Qa(e, t, n) {
  return n = n != null ? n.concat([e]) : null, wl(4, 4, Va.bind(null, t, e), n);
}
function Ui() {
}
function Ha(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Di(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ba(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Di(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Wa(e, t, n) {
  return $t & 21 ? (Ie(n, t) || (n = Xs(), Q.lanes |= n, Dt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, de = !0), e.memoizedState = n);
}
function xd(e, t) {
  var n = $;
  $ = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Zl.transition;
  Zl.transition = {};
  try {
    e(!1), t();
  } finally {
    $ = n, Zl.transition = r;
  }
}
function Ka() {
  return ze().memoizedState;
}
function Ed(e, t, n) {
  var r = mt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ya(e))
    Xa(t, n);
  else if (n = Ca(e, t, n, r), n !== null) {
    var l = se();
    De(n, e, r, l), Ga(n, t, r);
  }
}
function Cd(e, t, n) {
  var r = mt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ya(e))
    Xa(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, Ie(u, i)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Li(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = Ca(e, t, l, r), n !== null && (l = se(), De(n, e, r, l), Ga(n, t, r));
  }
}
function Ya(e) {
  var t = e.alternate;
  return e === Q || t !== null && t === Q;
}
function Xa(e, t) {
  $n = ll = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ga(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, vi(e, n);
  }
}
var ol = { readContext: Pe, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 }, _d = { readContext: Pe, useCallback: function(e, t) {
  return Fe().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Pe, useEffect: Vu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Dr(
    4194308,
    4,
    Va.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Dr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Dr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Fe();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Fe();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ed.bind(null, Q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Fe();
  return e = { current: e }, t.memoizedState = e;
}, useState: Au, useDebugValue: Ui, useDeferredValue: function(e) {
  return Fe().memoizedState = e;
}, useTransition: function() {
  var e = Au(!1), t = e[0];
  return e = xd.bind(null, e[1]), Fe().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Q, l = Fe();
  if (U) {
    if (n === void 0)
      throw Error(y(407));
    n = n();
  } else {
    if (n = t(), q === null)
      throw Error(y(349));
    $t & 30 || Oa(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Vu(Da.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, bn(9, $a.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Fe(), t = q.identifierPrefix;
  if (U) {
    var n = Ke, r = We;
    n = (r & ~(1 << 32 - $e(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Jn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Sd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Nd = {
  readContext: Pe,
  useCallback: Ha,
  useContext: Pe,
  useEffect: Fi,
  useImperativeHandle: Qa,
  useInsertionEffect: Ua,
  useLayoutEffect: Aa,
  useMemo: Ba,
  useReducer: Jl,
  useRef: Fa,
  useState: function() {
    return Jl(qn);
  },
  useDebugValue: Ui,
  useDeferredValue: function(e) {
    var t = ze();
    return Wa(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = Jl(qn)[0], t = ze().memoizedState;
    return [e, t];
  },
  useMutableSource: ja,
  useSyncExternalStore: Ra,
  useId: Ka,
  unstable_isNewReconciler: !1
}, Pd = { readContext: Pe, useCallback: Ha, useContext: Pe, useEffect: Fi, useImperativeHandle: Qa, useInsertionEffect: Ua, useLayoutEffect: Aa, useMemo: Ba, useReducer: ql, useRef: Fa, useState: function() {
  return ql(qn);
}, useDebugValue: Ui, useDeferredValue: function(e) {
  var t = ze();
  return X === null ? t.memoizedState = e : Wa(t, X.memoizedState, e);
}, useTransition: function() {
  var e = ql(qn)[0], t = ze().memoizedState;
  return [e, t];
}, useMutableSource: ja, useSyncExternalStore: Ra, useId: Ka, unstable_isNewReconciler: !1 };
function fn(e, t) {
  try {
    var n = "", r = t;
    do
      n += ef(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function bl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ao(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var zd = typeof WeakMap == "function" ? WeakMap : Map;
function Za(e, t, n) {
  n = Ye(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ul || (ul = !0, Zo = r), Ao(e, t);
  }, n;
}
function Ja(e, t, n) {
  n = Ye(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ao(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Ao(e, t), typeof r != "function" && (pt === null ? pt = /* @__PURE__ */ new Set([this]) : pt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Qu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new zd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Qd.bind(null, e, t, n), t.then(e, e));
}
function Hu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ye(-1, 1), t.tag = 2, dt(n, t, 1))), n.lanes |= 1), e);
}
var Td = be.ReactCurrentOwner, de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Ta(t, null, n, r) : an(t, e.child, n, r);
}
function Wu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return rn(t, l), r = Ii(e, t, n, r, o, l), n = Mi(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Je(e, t, l)) : (U && n && Ci(t), t.flags |= 1, ue(e, t, r, l), t.child);
}
function Ku(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Yi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, qa(e, t, o, r, l)) : (e = Ur(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Wn, n(i, r) && e.ref === t.ref)
      return Je(e, t, l);
  }
  return t.flags |= 1, e = ht(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function qa(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Wn(o, r) && e.ref === t.ref)
      if (de = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (de = !0);
      else
        return t.lanes = e.lanes, Je(e, t, l);
  }
  return Vo(e, t, n, r, l);
}
function ba(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, I(qt, ye), ye |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, I(qt, ye), ye |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, I(qt, ye), ye |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, I(qt, ye), ye |= r;
  return ue(e, t, l, n), t.child;
}
function ec(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Vo(e, t, n, r, l) {
  var o = me(n) ? Rt : oe.current;
  return o = un(t, o), rn(t, l), n = Ii(e, t, n, r, o, l), r = Mi(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Je(e, t, l)) : (U && r && Ci(t), t.flags |= 1, ue(e, t, n, l), t.child);
}
function Yu(e, t, n, r, l) {
  if (me(n)) {
    var o = !0;
    Jr(t);
  } else
    o = !1;
  if (rn(t, l), t.stateNode === null)
    Ir(e, t), Pa(t, n, r), Uo(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Pe(a) : (a = me(n) ? Rt : oe.current, a = un(t, a));
    var m = n.getDerivedStateFromProps, h = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && Fu(t, i, r, a), nt = !1;
    var p = t.memoizedState;
    i.state = p, nl(t, r, i, l), s = t.memoizedState, u !== r || p !== s || pe.current || nt ? (typeof m == "function" && (Fo(t, n, m, r), s = t.memoizedState), (u = nt || Mu(t, n, u, r, p, s, a)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, _a(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Le(t.type, u), i.props = a, h = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Pe(s) : (s = me(n) ? Rt : oe.current, s = un(t, s));
    var g = n.getDerivedStateFromProps;
    (m = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || p !== s) && Fu(t, i, r, s), nt = !1, p = t.memoizedState, i.state = p, nl(t, r, i, l);
    var w = t.memoizedState;
    u !== h || p !== w || pe.current || nt ? (typeof g == "function" && (Fo(t, n, g, r), w = t.memoizedState), (a = nt || Mu(t, n, a, r, p, w, s) || !1) ? (m || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Qo(e, t, n, r, o, l);
}
function Qo(e, t, n, r, l, o) {
  ec(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return l && Ru(t, n, !1), Je(e, t, o);
  r = t.stateNode, Td.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = an(t, e.child, null, o), t.child = an(t, null, u, o)) : ue(e, t, u, o), t.memoizedState = r.state, l && Ru(t, n, !0), t.child;
}
function tc(e) {
  var t = e.stateNode;
  t.pendingContext ? ju(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ju(e, t.context, !1), Ri(e, t.containerInfo);
}
function Xu(e, t, n, r, l) {
  return sn(), Ni(l), t.flags |= 256, ue(e, t, n, r), t.child;
}
var Ho = { dehydrated: null, treeContext: null, retryLane: 0 };
function Bo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function nc(e, t, n) {
  var r = t.pendingProps, l = V.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), I(V, l & 1), e === null)
    return Io(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = xl(i, r, 0, null), e = jt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Bo(n), t.memoizedState = Ho, e) : Ai(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return Ld(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = ht(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = ht(u, o) : (o = jt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Bo(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Ho, r;
  }
  return o = e.child, e = o.sibling, r = ht(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ai(e, t) {
  return t = xl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Cr(e, t, n, r) {
  return r !== null && Ni(r), an(t, e.child, null, n), e = Ai(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Ld(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = bl(Error(y(422))), Cr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = xl({ mode: "visible", children: r.children }, l, 0, null), o = jt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && an(t, e.child, null, i), t.child.memoizedState = Bo(i), t.memoizedState = Ho, o);
  if (!(t.mode & 1))
    return Cr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(y(419)), r = bl(o, r, void 0), Cr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, de || u) {
    if (r = q, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ze(e, l), De(r, e, l, -1));
    }
    return Ki(), r = bl(Error(y(421))), Cr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hd.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ge = ft(l.nextSibling), we = t, U = !0, Re = null, e !== null && (Ee[Ce++] = We, Ee[Ce++] = Ke, Ee[Ce++] = Ot, We = e.id, Ke = e.overflow, Ot = t), t = Ai(t, r.children), t.flags |= 4096, t);
}
function Gu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Mo(e.return, t, n);
}
function eo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function rc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (ue(e, t, r.children, n), r = V.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Gu(e, n, t);
          else if (e.tag === 19)
            Gu(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (I(V, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && rl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), eo(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && rl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        eo(t, !0, n, null, o);
        break;
      case "together":
        eo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ir(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Je(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Dt |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(y(153));
  if (t.child !== null) {
    for (e = t.child, n = ht(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = ht(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function jd(e, t, n) {
  switch (t.tag) {
    case 3:
      tc(t), sn();
      break;
    case 5:
      La(t);
      break;
    case 1:
      me(t.type) && Jr(t);
      break;
    case 4:
      Ri(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      I(el, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (I(V, V.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? nc(e, t, n) : (I(V, V.current & 1), e = Je(e, t, n), e !== null ? e.sibling : null);
      I(V, V.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return rc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), I(V, V.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, ba(e, t, n);
  }
  return Je(e, t, n);
}
var lc, Wo, oc, ic;
lc = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Wo = function() {
};
oc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Tt(Ve.current);
    var o = null;
    switch (n) {
      case "input":
        l = po(e, l), r = po(e, r), o = [];
        break;
      case "select":
        l = H({}, l, { value: void 0 }), r = H({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = vo(e, l), r = vo(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Gr);
    }
    go(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Fn.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = l != null ? l[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null))
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in s)
              s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
          } else
            n || (o || (o = []), o.push(
              a,
              n
            )), n = s;
        else
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Fn.hasOwnProperty(a) ? (s != null && a === "onScroll" && M("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
ic = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function En(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Rd(e, t, n) {
  var r = t.pendingProps;
  switch (_i(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(t), null;
    case 1:
      return me(t.type) && Zr(), re(t), null;
    case 3:
      return r = t.stateNode, cn(), F(pe), F(oe), $i(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (xr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Re !== null && (bo(Re), Re = null))), Wo(e, t), re(t), null;
    case 5:
      Oi(t);
      var l = Tt(Zn.current);
      if (n = t.type, e !== null && t.stateNode != null)
        oc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(y(166));
          return re(t), null;
        }
        if (e = Tt(Ve.current), xr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Ue] = t, r[Xn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              M("cancel", r), M("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              M("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < zn.length; l++)
                M(zn[l], r);
              break;
            case "source":
              M("error", r);
              break;
            case "img":
            case "image":
            case "link":
              M(
                "error",
                r
              ), M("load", r);
              break;
            case "details":
              M("toggle", r);
              break;
            case "input":
              lu(r, o), M("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, M("invalid", r);
              break;
            case "textarea":
              iu(r, o), M("invalid", r);
          }
          go(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Sr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Sr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : Fn.hasOwnProperty(i) && u != null && i === "onScroll" && M("scroll", r);
            }
          switch (n) {
            case "input":
              pr(r), ou(r, o, !0);
              break;
            case "textarea":
              pr(r), uu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Gr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Os(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ue] = t, e[Xn] = r, lc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = wo(n, r), n) {
              case "dialog":
                M("cancel", e), M("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                M("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < zn.length; l++)
                  M(zn[l], e);
                l = r;
                break;
              case "source":
                M("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                M(
                  "error",
                  e
                ), M("load", e), l = r;
                break;
              case "details":
                M("toggle", e), l = r;
                break;
              case "input":
                lu(e, r), l = po(e, r), M("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = H({}, r, { value: void 0 }), M("invalid", e);
                break;
              case "textarea":
                iu(e, r), l = vo(e, r), M("invalid", e);
                break;
              default:
                l = r;
            }
            go(n, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Is(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && $s(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Un(e, s) : typeof s == "number" && Un(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Fn.hasOwnProperty(o) ? s != null && o === "onScroll" && M("scroll", e) : s != null && ci(e, o, s, i));
              }
            switch (n) {
              case "input":
                pr(e), ou(e, r, !1);
                break;
              case "textarea":
                pr(e), uu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? bt(e, !!r.multiple, o, !1) : r.defaultValue != null && bt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Gr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null)
        ic(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(y(166));
        if (n = Tt(Zn.current), Tt(Ve.current), xr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ue] = t, (o = r.nodeValue !== n) && (e = we, e !== null))
            switch (e.tag) {
              case 3:
                Sr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Sr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ue] = t, t.stateNode = r;
      }
      return re(t), null;
    case 13:
      if (F(V), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && ge !== null && t.mode & 1 && !(t.flags & 128))
          Ea(), sn(), t.flags |= 98560, o = !1;
        else if (o = xr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(y(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(y(317));
            o[Ue] = t;
          } else
            sn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          re(t), o = !1;
        } else
          Re !== null && (bo(Re), Re = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || V.current & 1 ? G === 0 && (G = 3) : Ki())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
    case 4:
      return cn(), Wo(e, t), e === null && Kn(t.stateNode.containerInfo), re(t), null;
    case 10:
      return Ti(t.type._context), re(t), null;
    case 17:
      return me(t.type) && Zr(), re(t), null;
    case 19:
      if (F(V), o = t.memoizedState, o === null)
        return re(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          En(o, !1);
        else {
          if (G !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = rl(e), i !== null) {
                for (t.flags |= 128, En(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return I(V, V.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && K() > dn && (t.flags |= 128, r = !0, En(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = rl(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), En(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !U)
              return re(t), null;
          } else
            2 * K() - o.renderingStartTime > dn && n !== 1073741824 && (t.flags |= 128, r = !0, En(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = K(), t.sibling = null, n = V.current, I(V, r ? n & 1 | 2 : n & 1), t) : (re(t), null);
    case 22:
    case 23:
      return Wi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ye & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function Od(e, t) {
  switch (_i(t), t.tag) {
    case 1:
      return me(t.type) && Zr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return cn(), F(pe), F(oe), $i(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Oi(t), null;
    case 13:
      if (F(V), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(y(340));
        sn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return F(V), null;
    case 4:
      return cn(), null;
    case 10:
      return Ti(t.type._context), null;
    case 22:
    case 23:
      return Wi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _r = !1, le = !1, $d = typeof WeakSet == "function" ? WeakSet : Set, E = null;
function Jt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        B(e, t, r);
      }
    else
      n.current = null;
}
function Ko(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
var Zu = !1;
function Dd(e, t) {
  if (To = Kr, e = ca(), Ei(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, u = -1, s = -1, a = 0, m = 0, h = e, p = null;
          t:
            for (; ; ) {
              for (var g; h !== n || l !== 0 && h.nodeType !== 3 || (u = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (s = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (g = h.firstChild) !== null; )
                p = h, h = g;
              for (; ; ) {
                if (h === e)
                  break t;
                if (p === n && ++a === l && (u = i), p === o && ++m === r && (s = i), (g = h.nextSibling) !== null)
                  break;
                h = p, p = h.parentNode;
              }
              h = g;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Lo = { focusedElem: e, selectionRange: n }, Kr = !1, E = t; E !== null; )
    if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, E = e;
    else
      for (; E !== null; ) {
        t = E;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps, O = w.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Le(t.type, k), O);
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          B(t, t.return, v);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, E = e;
          break;
        }
        E = t.return;
      }
  return w = Zu, Zu = !1, w;
}
function Dn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Ko(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function kl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Yo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function uc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, uc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ue], delete t[Xn], delete t[Oo], delete t[yd], delete t[gd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function sc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ju(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || sc(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function Xo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Gr));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Xo(e, t, n), e = e.sibling; e !== null; )
      Xo(e, t, n), e = e.sibling;
}
function Go(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Go(e, t, n), e = e.sibling; e !== null; )
      Go(e, t, n), e = e.sibling;
}
var b = null, je = !1;
function et(e, t, n) {
  for (n = n.child; n !== null; )
    ac(e, t, n), n = n.sibling;
}
function ac(e, t, n) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function")
    try {
      Ae.onCommitFiberUnmount(dl, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      le || Jt(n, t);
    case 6:
      var r = b, l = je;
      b = null, et(e, t, n), b = r, je = l, b !== null && (je ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null && (je ? (e = b, n = n.stateNode, e.nodeType === 8 ? Yl(e.parentNode, n) : e.nodeType === 1 && Yl(e, n), Hn(e)) : Yl(b, n.stateNode));
      break;
    case 4:
      r = b, l = je, b = n.stateNode.containerInfo, je = !0, et(e, t, n), b = r, je = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Ko(n, t, i), l = l.next;
        } while (l !== r);
      }
      et(e, t, n);
      break;
    case 1:
      if (!le && (Jt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          B(n, t, u);
        }
      et(e, t, n);
      break;
    case 21:
      et(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (le = (r = le) || n.memoizedState !== null, et(e, t, n), le = r) : et(e, t, n);
      break;
    default:
      et(e, t, n);
  }
}
function qu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new $d()), t.forEach(function(r) {
      var l = Bd.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Te(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, u = i;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                b = u.stateNode, je = !1;
                break e;
              case 3:
                b = u.stateNode.containerInfo, je = !0;
                break e;
              case 4:
                b = u.stateNode.containerInfo, je = !0;
                break e;
            }
            u = u.return;
          }
        if (b === null)
          throw Error(y(160));
        ac(o, i, l), b = null, je = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (a) {
        B(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      cc(t, e), t = t.sibling;
}
function cc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Te(t, e), Me(e), r & 4) {
        try {
          Dn(3, e, e.return), kl(3, e);
        } catch (k) {
          B(e, e.return, k);
        }
        try {
          Dn(5, e, e.return);
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 1:
      Te(t, e), Me(e), r & 512 && n !== null && Jt(n, n.return);
      break;
    case 5:
      if (Te(t, e), Me(e), r & 512 && n !== null && Jt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Un(l, "");
        } catch (k) {
          B(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && js(l, o), wo(u, i);
            var a = wo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var m = s[i], h = s[i + 1];
              m === "style" ? Is(l, h) : m === "dangerouslySetInnerHTML" ? $s(l, h) : m === "children" ? Un(l, h) : ci(l, m, h, a);
            }
            switch (u) {
              case "input":
                mo(l, o);
                break;
              case "textarea":
                Rs(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null ? bt(l, !!o.multiple, g, !1) : p !== !!o.multiple && (o.defaultValue != null ? bt(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : bt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Xn] = o;
          } catch (k) {
            B(e, e.return, k);
          }
      }
      break;
    case 6:
      if (Te(t, e), Me(e), r & 4) {
        if (e.stateNode === null)
          throw Error(y(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Te(t, e), Me(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Hn(t.containerInfo);
        } catch (k) {
          B(e, e.return, k);
        }
      break;
    case 4:
      Te(t, e), Me(e);
      break;
    case 13:
      Te(t, e), Me(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Hi = K())), r & 4 && qu(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (a = le) || m, Te(t, e), le = a) : Te(t, e), Me(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !m && e.mode & 1)
          for (E = e, m = e.child; m !== null; ) {
            for (h = E = m; E !== null; ) {
              switch (p = E, g = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Dn(4, p, p.return);
                  break;
                case 1:
                  Jt(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                    } catch (k) {
                      B(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Jt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    es(h);
                    continue;
                  }
              }
              g !== null ? (g.return = p, E = g) : es(h);
            }
            m = m.sibling;
          }
        e:
          for (m = null, h = e; ; ) {
            if (h.tag === 5) {
              if (m === null) {
                m = h;
                try {
                  l = h.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ds("display", i));
                } catch (k) {
                  B(e, e.return, k);
                }
              }
            } else if (h.tag === 6) {
              if (m === null)
                try {
                  h.stateNode.nodeValue = a ? "" : h.memoizedProps;
                } catch (k) {
                  B(e, e.return, k);
                }
            } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
              h.child.return = h, h = h.child;
              continue;
            }
            if (h === e)
              break e;
            for (; h.sibling === null; ) {
              if (h.return === null || h.return === e)
                break e;
              m === h && (m = null), h = h.return;
            }
            m === h && (m = null), h.sibling.return = h.return, h = h.sibling;
          }
      }
      break;
    case 19:
      Te(t, e), Me(e), r & 4 && qu(e);
      break;
    case 21:
      break;
    default:
      Te(
        t,
        e
      ), Me(e);
  }
}
function Me(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (sc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Un(l, ""), r.flags &= -33);
          var o = Ju(e);
          Go(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Ju(e);
          Xo(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Id(e, t, n) {
  E = e, fc(e);
}
function fc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || _r;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || le;
        u = _r;
        var a = le;
        if (_r = i, (le = s) && !a)
          for (E = l; E !== null; )
            i = E, s = i.child, i.tag === 22 && i.memoizedState !== null ? ts(l) : s !== null ? (s.return = i, E = s) : ts(l);
        for (; o !== null; )
          E = o, fc(o), o = o.sibling;
        E = l, _r = u, le = a;
      }
      bu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, E = o) : bu(e);
  }
}
function bu(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || kl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Iu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Iu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var m = a.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Hn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        le || t.flags & 512 && Yo(t);
      } catch (p) {
        B(t, t.return, p);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, E = n;
      break;
    }
    E = t.return;
  }
}
function es(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, E = n;
      break;
    }
    E = t.return;
  }
}
function ts(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            kl(4, t);
          } catch (s) {
            B(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(t, l, s);
            }
          }
          var o = t.return;
          try {
            Yo(t);
          } catch (s) {
            B(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Yo(t);
          } catch (s) {
            B(t, i, s);
          }
      }
    } catch (s) {
      B(t, t.return, s);
    }
    if (t === e) {
      E = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, E = u;
      break;
    }
    E = t.return;
  }
}
var Md = Math.ceil, il = be.ReactCurrentDispatcher, Vi = be.ReactCurrentOwner, Ne = be.ReactCurrentBatchConfig, R = 0, q = null, Y = null, ee = 0, ye = 0, qt = wt(0), G = 0, er = null, Dt = 0, Sl = 0, Qi = 0, In = null, fe = null, Hi = 0, dn = 1 / 0, He = null, ul = !1, Zo = null, pt = null, Nr = !1, ut = null, sl = 0, Mn = 0, Jo = null, Mr = -1, Fr = 0;
function se() {
  return R & 6 ? K() : Mr !== -1 ? Mr : Mr = K();
}
function mt(e) {
  return e.mode & 1 ? R & 2 && ee !== 0 ? ee & -ee : kd.transition !== null ? (Fr === 0 && (Fr = Xs()), Fr) : (e = $, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ta(e.type)), e) : 1;
}
function De(e, t, n, r) {
  if (50 < Mn)
    throw Mn = 0, Jo = null, Error(y(185));
  rr(e, n, r), (!(R & 2) || e !== q) && (e === q && (!(R & 2) && (Sl |= n), G === 4 && lt(e, ee)), he(e, r), n === 1 && R === 0 && !(t.mode & 1) && (dn = K() + 500, yl && kt()));
}
function he(e, t) {
  var n = e.callbackNode;
  kf(e, t);
  var r = Wr(e, e === q ? ee : 0);
  if (r === 0)
    n !== null && cu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && cu(n), t === 1)
      e.tag === 0 ? wd(ns.bind(null, e)) : ka(ns.bind(null, e)), hd(function() {
        !(R & 6) && kt();
      }), n = null;
    else {
      switch (Gs(r)) {
        case 1:
          n = hi;
          break;
        case 4:
          n = Ks;
          break;
        case 16:
          n = Br;
          break;
        case 536870912:
          n = Ys;
          break;
        default:
          n = Br;
      }
      n = wc(n, dc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function dc(e, t) {
  if (Mr = -1, Fr = 0, R & 6)
    throw Error(y(327));
  var n = e.callbackNode;
  if (ln() && e.callbackNode !== n)
    return null;
  var r = Wr(e, e === q ? ee : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = al(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = mc();
    (q !== e || ee !== t) && (He = null, dn = K() + 500, Lt(e, t));
    do
      try {
        Ad();
        break;
      } catch (u) {
        pc(e, u);
      }
    while (1);
    zi(), il.current = o, R = l, Y !== null ? t = 0 : (q = null, ee = 0, t = G);
  }
  if (t !== 0) {
    if (t === 2 && (l = Co(e), l !== 0 && (r = l, t = qo(e, l))), t === 1)
      throw n = er, Lt(e, 0), lt(e, r), he(e, K()), n;
    if (t === 6)
      lt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Fd(l) && (t = al(e, r), t === 2 && (o = Co(e), o !== 0 && (r = o, t = qo(e, o))), t === 1))
        throw n = er, Lt(e, 0), lt(e, r), he(e, K()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Nt(e, fe, He);
          break;
        case 3:
          if (lt(e, r), (r & 130023424) === r && (t = Hi + 500 - K(), 10 < t)) {
            if (Wr(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              se(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ro(Nt.bind(null, e, fe, He), t);
            break;
          }
          Nt(e, fe, He);
          break;
        case 4:
          if (lt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - $e(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Md(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ro(Nt.bind(null, e, fe, He), r);
            break;
          }
          Nt(e, fe, He);
          break;
        case 5:
          Nt(e, fe, He);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return he(e, K()), e.callbackNode === n ? dc.bind(null, e) : null;
}
function qo(e, t) {
  var n = In;
  return e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256), e = al(e, t), e !== 2 && (t = fe, fe = n, t !== null && bo(t)), e;
}
function bo(e) {
  fe === null ? fe = e : fe.push.apply(fe, e);
}
function Fd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ie(o(), l))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function lt(e, t) {
  for (t &= ~Qi, t &= ~Sl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - $e(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ns(e) {
  if (R & 6)
    throw Error(y(327));
  ln();
  var t = Wr(e, 0);
  if (!(t & 1))
    return he(e, K()), null;
  var n = al(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Co(e);
    r !== 0 && (t = r, n = qo(e, r));
  }
  if (n === 1)
    throw n = er, Lt(e, 0), lt(e, t), he(e, K()), n;
  if (n === 6)
    throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Nt(e, fe, He), he(e, K()), null;
}
function Bi(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    R = n, R === 0 && (dn = K() + 500, yl && kt());
  }
}
function It(e) {
  ut !== null && ut.tag === 0 && !(R & 6) && ln();
  var t = R;
  R |= 1;
  var n = Ne.transition, r = $;
  try {
    if (Ne.transition = null, $ = 1, e)
      return e();
  } finally {
    $ = r, Ne.transition = n, R = t, !(R & 6) && kt();
  }
}
function Wi() {
  ye = qt.current, F(qt);
}
function Lt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, md(n)), Y !== null)
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch (_i(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Zr();
          break;
        case 3:
          cn(), F(pe), F(oe), $i();
          break;
        case 5:
          Oi(r);
          break;
        case 4:
          cn();
          break;
        case 13:
          F(V);
          break;
        case 19:
          F(V);
          break;
        case 10:
          Ti(r.type._context);
          break;
        case 22:
        case 23:
          Wi();
      }
      n = n.return;
    }
  if (q = e, Y = e = ht(e.current, null), ee = ye = t, G = 0, er = null, Qi = Sl = Dt = 0, fe = In = null, zt !== null) {
    for (t = 0; t < zt.length; t++)
      if (n = zt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
    zt = null;
  }
  return e;
}
function pc(e, t) {
  do {
    var n = Y;
    try {
      if (zi(), $r.current = ol, ll) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ll = !1;
      }
      if ($t = 0, J = X = Q = null, $n = !1, Jn = 0, Vi.current = null, n === null || n.return === null) {
        G = 1, er = t, Y = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = ee, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, m = u, h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var g = Hu(i);
          if (g !== null) {
            g.flags &= -257, Bu(g, i, u, o, t), g.mode & 1 && Qu(o, a, t), t = g, s = a;
            var w = t.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), t.updateQueue = k;
            } else
              w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Qu(o, a, t), Ki();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var O = Hu(i);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256), Bu(O, i, u, o, t), Ni(fn(s, u));
            break e;
          }
        }
        o = s = fn(s, u), G !== 4 && (G = 2), In === null ? In = [o] : In.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Za(o, s, t);
              Du(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (pt === null || !pt.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = Ja(o, u, t);
                Du(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      vc(n);
    } catch (S) {
      t = S, Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function mc() {
  var e = il.current;
  return il.current = ol, e === null ? ol : e;
}
function Ki() {
  (G === 0 || G === 3 || G === 2) && (G = 4), q === null || !(Dt & 268435455) && !(Sl & 268435455) || lt(q, ee);
}
function al(e, t) {
  var n = R;
  R |= 2;
  var r = mc();
  (q !== e || ee !== t) && (He = null, Lt(e, t));
  do
    try {
      Ud();
      break;
    } catch (l) {
      pc(e, l);
    }
  while (1);
  if (zi(), R = n, il.current = r, Y !== null)
    throw Error(y(261));
  return q = null, ee = 0, G;
}
function Ud() {
  for (; Y !== null; )
    hc(Y);
}
function Ad() {
  for (; Y !== null && !ff(); )
    hc(Y);
}
function hc(e) {
  var t = gc(e.alternate, e, ye);
  e.memoizedProps = e.pendingProps, t === null ? vc(e) : Y = t, Vi.current = null;
}
function vc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Od(n, t), n !== null) {
        n.flags &= 32767, Y = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        G = 6, Y = null;
        return;
      }
    } else if (n = Rd(n, t, ye), n !== null) {
      Y = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function Nt(e, t, n) {
  var r = $, l = Ne.transition;
  try {
    Ne.transition = null, $ = 1, Vd(e, t, n, r);
  } finally {
    Ne.transition = l, $ = r;
  }
  return null;
}
function Vd(e, t, n, r) {
  do
    ln();
  while (ut !== null);
  if (R & 6)
    throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Sf(e, o), e === q && (Y = q = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Nr || (Nr = !0, wc(Br, function() {
    return ln(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ne.transition, Ne.transition = null;
    var i = $;
    $ = 1;
    var u = R;
    R |= 4, Vi.current = null, Dd(e, n), cc(n, e), ud(Lo), Kr = !!To, Lo = To = null, e.current = n, Id(n), df(), R = u, $ = i, Ne.transition = o;
  } else
    e.current = n;
  if (Nr && (Nr = !1, ut = e, sl = l), o = e.pendingLanes, o === 0 && (pt = null), hf(n.stateNode), he(e, K()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ul)
    throw ul = !1, e = Zo, Zo = null, e;
  return sl & 1 && e.tag !== 0 && ln(), o = e.pendingLanes, o & 1 ? e === Jo ? Mn++ : (Mn = 0, Jo = e) : Mn = 0, kt(), null;
}
function ln() {
  if (ut !== null) {
    var e = Gs(sl), t = Ne.transition, n = $;
    try {
      if (Ne.transition = null, $ = 16 > e ? 16 : e, ut === null)
        var r = !1;
      else {
        if (e = ut, ut = null, sl = 0, R & 6)
          throw Error(y(331));
        var l = R;
        for (R |= 4, E = e.current; E !== null; ) {
          var o = E, i = o.child;
          if (E.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (E = a; E !== null; ) {
                  var m = E;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dn(8, m, o);
                  }
                  var h = m.child;
                  if (h !== null)
                    h.return = m, E = h;
                  else
                    for (; E !== null; ) {
                      m = E;
                      var p = m.sibling, g = m.return;
                      if (uc(m), m === a) {
                        E = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = g, E = p;
                        break;
                      }
                      E = g;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var O = k.sibling;
                    k.sibling = null, k = O;
                  } while (k !== null);
                }
              }
              E = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, E = i;
          else
            e:
              for (; E !== null; ) {
                if (o = E, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dn(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  f.return = o.return, E = f;
                  break e;
                }
                E = o.return;
              }
        }
        var c = e.current;
        for (E = c; E !== null; ) {
          i = E;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null)
            d.return = i, E = d;
          else
            e:
              for (i = c; E !== null; ) {
                if (u = E, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        kl(9, u);
                    }
                  } catch (S) {
                    B(u, u.return, S);
                  }
                if (u === i) {
                  E = null;
                  break e;
                }
                var v = u.sibling;
                if (v !== null) {
                  v.return = u.return, E = v;
                  break e;
                }
                E = u.return;
              }
        }
        if (R = l, kt(), Ae && typeof Ae.onPostCommitFiberRoot == "function")
          try {
            Ae.onPostCommitFiberRoot(dl, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      $ = n, Ne.transition = t;
    }
  }
  return !1;
}
function rs(e, t, n) {
  t = fn(n, t), t = Za(e, t, 1), e = dt(e, t, 1), t = se(), e !== null && (rr(e, 1, t), he(e, t));
}
function B(e, t, n) {
  if (e.tag === 3)
    rs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        rs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (pt === null || !pt.has(r))) {
          e = fn(n, e), e = Ja(t, e, 1), t = dt(t, e, 1), e = se(), t !== null && (rr(t, 1, e), he(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Qd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = se(), e.pingedLanes |= e.suspendedLanes & n, q === e && (ee & n) === n && (G === 4 || G === 3 && (ee & 130023424) === ee && 500 > K() - Hi ? Lt(e, 0) : Qi |= n), he(e, t);
}
function yc(e, t) {
  t === 0 && (e.mode & 1 ? (t = vr, vr <<= 1, !(vr & 130023424) && (vr = 4194304)) : t = 1);
  var n = se();
  e = Ze(e, t), e !== null && (rr(e, t, n), he(e, n));
}
function Hd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), yc(e, n);
}
function Bd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), yc(e, n);
}
var gc;
gc = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current)
      de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return de = !1, jd(e, t, n);
      de = !!(e.flags & 131072);
    }
  else
    de = !1, U && t.flags & 1048576 && Sa(t, br, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ir(e, t), e = t.pendingProps;
      var l = un(t, oe.current);
      rn(t, n), l = Ii(null, t, r, e, l, n);
      var o = Mi();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, me(r) ? (o = !0, Jr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ji(t), l.updater = gl, t.stateNode = l, l._reactInternals = t, Uo(t, r, e, n), t = Qo(null, t, r, !0, o, n)) : (t.tag = 0, U && o && Ci(t), ue(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ir(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Kd(r), e = Le(r, e), l) {
          case 0:
            t = Vo(null, t, r, e, n);
            break e;
          case 1:
            t = Yu(null, t, r, e, n);
            break e;
          case 11:
            t = Wu(null, t, r, e, n);
            break e;
          case 14:
            t = Ku(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(y(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Vo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Yu(e, t, r, l, n);
    case 3:
      e: {
        if (tc(t), e === null)
          throw Error(y(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, _a(e, t), nl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = fn(Error(y(423)), t), t = Xu(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = fn(Error(y(424)), t), t = Xu(e, t, r, n, l);
            break e;
          } else
            for (ge = ft(t.stateNode.containerInfo.firstChild), we = t, U = !0, Re = null, n = Ta(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (sn(), r === l) {
            t = Je(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return La(t), e === null && Io(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, jo(r, l) ? i = null : o !== null && jo(r, o) && (t.flags |= 32), ec(e, t), ue(e, t, i, n), t.child;
    case 6:
      return e === null && Io(t), null;
    case 13:
      return nc(e, t, n);
    case 4:
      return Ri(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = an(t, null, r, n) : ue(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Wu(e, t, r, l, n);
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, I(el, r._currentValue), r._currentValue = i, o !== null)
          if (Ie(o.value, i)) {
            if (o.children === l.children && !pe.current) {
              t = Je(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      s = Ye(-1, n & -n), s.tag = 2;
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var m = a.pending;
                        m === null ? s.next = s : (s.next = m.next, m.next = s), a.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Mo(
                      o.return,
                      n,
                      t
                    ), u.lanes |= n;
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10)
                i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (i = o.return, i === null)
                  throw Error(y(341));
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Mo(i, n, t), i = o.sibling;
              } else
                i = o.child;
              if (i !== null)
                i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (o = i.sibling, o !== null) {
                    o.return = i.return, i = o;
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ue(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, rn(t, n), l = Pe(l), r = r(l), t.flags |= 1, ue(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Le(r, t.pendingProps), l = Le(r.type, l), Ku(e, t, r, l, n);
    case 15:
      return qa(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Ir(e, t), t.tag = 1, me(r) ? (e = !0, Jr(t)) : e = !1, rn(t, n), Pa(t, r, l), Uo(t, r, l, n), Qo(null, t, r, !0, e, n);
    case 19:
      return rc(e, t, n);
    case 22:
      return ba(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function wc(e, t) {
  return Ws(e, t);
}
function Wd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function _e(e, t, n, r) {
  return new Wd(e, t, n, r);
}
function Yi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Kd(e) {
  if (typeof e == "function")
    return Yi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === di)
      return 11;
    if (e === pi)
      return 14;
  }
  return 2;
}
function ht(e, t) {
  var n = e.alternate;
  return n === null ? (n = _e(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ur(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    Yi(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case Qt:
          return jt(n.children, l, o, t);
        case fi:
          i = 8, l |= 8;
          break;
        case so:
          return e = _e(12, n, t, l | 2), e.elementType = so, e.lanes = o, e;
        case ao:
          return e = _e(13, n, t, l), e.elementType = ao, e.lanes = o, e;
        case co:
          return e = _e(19, n, t, l), e.elementType = co, e.lanes = o, e;
        case zs:
          return xl(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ns:
                i = 10;
                break e;
              case Ps:
                i = 9;
                break e;
              case di:
                i = 11;
                break e;
              case pi:
                i = 14;
                break e;
              case tt:
                i = 16, r = null;
                break e;
            }
          throw Error(y(130, e == null ? e : typeof e, ""));
      }
  return t = _e(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function jt(e, t, n, r) {
  return e = _e(7, e, r, t), e.lanes = n, e;
}
function xl(e, t, n, r) {
  return e = _e(22, e, r, t), e.elementType = zs, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function to(e, t, n) {
  return e = _e(6, e, null, t), e.lanes = n, e;
}
function no(e, t, n) {
  return t = _e(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Yd(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Il(0), this.expirationTimes = Il(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Il(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Xi(e, t, n, r, l, o, i, u, s) {
  return e = new Yd(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = _e(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ji(o), e;
}
function Xd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Vt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function kc(e) {
  if (!e)
    return yt;
  e = e._reactInternals;
  e: {
    if (Ft(e) !== e || e.tag !== 1)
      throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n))
      return wa(e, n, t);
  }
  return t;
}
function Sc(e, t, n, r, l, o, i, u, s) {
  return e = Xi(n, r, !0, e, l, o, i, u, s), e.context = kc(null), n = e.current, r = se(), l = mt(n), o = Ye(r, l), o.callback = t ?? null, dt(n, o, l), e.current.lanes = l, rr(e, l, r), he(e, r), e;
}
function El(e, t, n, r) {
  var l = t.current, o = se(), i = mt(l);
  return n = kc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ye(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = dt(l, t, i), e !== null && (De(e, l, i, o), Or(e, l, i)), i;
}
function cl(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ls(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Gi(e, t) {
  ls(e, t), (e = e.alternate) && ls(e, t);
}
function Gd() {
  return null;
}
var xc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Zi(e) {
  this._internalRoot = e;
}
Cl.prototype.render = Zi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(y(409));
  El(e, t, null, null);
};
Cl.prototype.unmount = Zi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    It(function() {
      El(null, e, null, null);
    }), t[Ge] = null;
  }
};
function Cl(e) {
  this._internalRoot = e;
}
Cl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = qs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < rt.length && t !== 0 && t < rt[n].priority; n++)
      ;
    rt.splice(n, 0, e), n === 0 && ea(e);
  }
};
function Ji(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function _l(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function os() {
}
function Zd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var a = cl(i);
        o.call(a);
      };
    }
    var i = Sc(t, r, e, 0, null, !1, !1, "", os);
    return e._reactRootContainer = i, e[Ge] = i.current, Kn(e.nodeType === 8 ? e.parentNode : e), It(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = cl(s);
      u.call(a);
    };
  }
  var s = Xi(e, 0, !1, null, null, !1, !1, "", os);
  return e._reactRootContainer = s, e[Ge] = s.current, Kn(e.nodeType === 8 ? e.parentNode : e), It(function() {
    El(t, s, n, r);
  }), s;
}
function Nl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = cl(i);
        u.call(s);
      };
    }
    El(t, i, e, l);
  } else
    i = Zd(n, t, e, l, r);
  return cl(i);
}
Zs = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pn(t.pendingLanes);
        n !== 0 && (vi(t, n | 1), he(t, K()), !(R & 6) && (dn = K() + 500, kt()));
      }
      break;
    case 13:
      It(function() {
        var r = Ze(e, 1);
        if (r !== null) {
          var l = se();
          De(r, e, 1, l);
        }
      }), Gi(e, 1);
  }
};
yi = function(e) {
  if (e.tag === 13) {
    var t = Ze(e, 134217728);
    if (t !== null) {
      var n = se();
      De(t, e, 134217728, n);
    }
    Gi(e, 134217728);
  }
};
Js = function(e) {
  if (e.tag === 13) {
    var t = mt(e), n = Ze(e, t);
    if (n !== null) {
      var r = se();
      De(n, e, t, r);
    }
    Gi(e, t);
  }
};
qs = function() {
  return $;
};
bs = function(e, t) {
  var n = $;
  try {
    return $ = e, t();
  } finally {
    $ = n;
  }
};
So = function(e, t, n) {
  switch (t) {
    case "input":
      if (mo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = vl(r);
            if (!l)
              throw Error(y(90));
            Ls(r), mo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Rs(e, n);
      break;
    case "select":
      t = n.value, t != null && bt(e, !!n.multiple, t, !1);
  }
};
Us = Bi;
As = It;
var Jd = { usingClientEntryPoint: !1, Events: [or, Kt, vl, Ms, Fs, Bi] }, Cn = { findFiberByHostInstance: Pt, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, qd = { bundleType: Cn.bundleType, version: Cn.version, rendererPackageName: Cn.rendererPackageName, rendererConfig: Cn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: be.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Hs(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Cn.findFiberByHostInstance || Gd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Pr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Pr.isDisabled && Pr.supportsFiber)
    try {
      dl = Pr.inject(qd), Ae = Pr;
    } catch {
    }
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jd;
Se.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ji(t))
    throw Error(y(200));
  return Xd(e, t, null, n);
};
Se.createRoot = function(e, t) {
  if (!Ji(e))
    throw Error(y(299));
  var n = !1, r = "", l = xc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Xi(e, 1, !1, null, null, n, !1, r, l), e[Ge] = t.current, Kn(e.nodeType === 8 ? e.parentNode : e), new Zi(t);
};
Se.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = Hs(t), e = e === null ? null : e.stateNode, e;
};
Se.flushSync = function(e) {
  return It(e);
};
Se.hydrate = function(e, t, n) {
  if (!_l(t))
    throw Error(y(200));
  return Nl(null, e, t, !0, n);
};
Se.hydrateRoot = function(e, t, n) {
  if (!Ji(e))
    throw Error(y(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = xc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Sc(t, null, e, 1, n ?? null, l, !1, o, i), e[Ge] = t.current, Kn(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new Cl(t);
};
Se.render = function(e, t, n) {
  if (!_l(t))
    throw Error(y(200));
  return Nl(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function(e) {
  if (!_l(e))
    throw Error(y(40));
  return e._reactRootContainer ? (It(function() {
    Nl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ge] = null;
    });
  }), !0) : !1;
};
Se.unstable_batchedUpdates = Bi;
Se.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!_l(n))
    throw Error(y(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(y(38));
  return Nl(e, t, n, !1, r);
};
Se.version = "18.2.0-next-9e3b772b8-20220608";
function Ec() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ec);
    } catch (e) {
      console.error(e);
    }
}
Ec(), Ss.exports = Se;
var bd = Ss.exports, is = bd;
io.createRoot = is.createRoot, io.hydrateRoot = is.hydrateRoot;
function ep({
  type: e,
  onClick: t,
  children: n,
  disabled: r,
  backgroundColor: l,
  borderColor: o,
  textColor: i
}) {
  const a = `focus:ring-2 focus:ring-offset-2 px-4 py-2 rounded-lg border-2 bg-tekstiai-teal text-white ${r ? "cursor-not-allowed opacity-50" : "hover:opacity-80"}`;
  return /* @__PURE__ */ z.jsx(
    "button",
    {
      type: e,
      onClick: t,
      disabled: r,
      className: a,
      style: { backgroundColor: l, color: i, borderColor: o },
      children: n
    }
  );
}
function tp({
  value: e,
  onChange: t,
  placeholder: n,
  onSubmit: r,
  disabled: l,
  buttonBackgroundColor: o,
  buttonTextColor: i,
  buttonBorderColor: u,
  buttonText: s
}) {
  return /* @__PURE__ */ z.jsxs(
    "form",
    {
      onSubmit: (a) => {
        a.preventDefault(), r();
      },
      className: "flex justify-center items-center",
      children: [
        /* @__PURE__ */ z.jsx(
          "input",
          {
            type: "text",
            value: e,
            onChange: (a) => t(a.target.value),
            placeholder: n,
            disabled: l,
            className: "w-full px-4 py-2 mr-2 border-2 border-gray-300 bg-transparent rounded-lg focus:outline-none focus:border-tekstiai-teal"
          }
        ),
        /* @__PURE__ */ z.jsx(ep, { type: "submit", disabled: l, backgroundColor: o, textColor: i, borderColor: u, children: s || "Send" })
      ]
    }
  );
}
function Cc({
  type: e,
  backgroundColor: t,
  textColor: n,
  width: r,
  text: l
}) {
  const o = e === "question" ? "Q" : "A", i = e === "question" ? "bg-tekstiai-gray-platinum" : "bg-tekstiai-teal";
  return /* @__PURE__ */ z.jsx("div", { className: "", children: /* @__PURE__ */ z.jsx(
    "div",
    {
      style: {
        backgroundColor: t,
        color: n || "white",
        width: r
      },
      className: `${i} font-bold text-[.5rem] rounded-[6px] w-[25px] h-[25px] flex justify-center items-center dark:bg-black`,
      children: /* @__PURE__ */ z.jsx("span", { children: l || o })
    }
  ) });
}
function us({
  question: e,
  questionAvatarBackgroundColor: t,
  questionAvatarTextColor: n,
  avatarWidth: r,
  questionAvatarText: l
}) {
  return /* @__PURE__ */ z.jsxs("div", { className: "p-4 md:py-6 gap-2 md:gap-4 w-full bg-tekstiai-white-seasalt flex self-start align-center justify-start md:justify-center dark:bg-tekstiai-gray-onyx border-b", children: [
    /* @__PURE__ */ z.jsx(
      Cc,
      {
        type: "question",
        backgroundColor: t,
        textColor: n,
        width: r,
        text: l
      }
    ),
    /* @__PURE__ */ z.jsx("span", { className: "md:w-3/4 xl:w-1/2 text-left", children: e })
  ] });
}
function ro({
  type: e,
  onClick: t,
  children: n,
  active: r,
  disabled: l
}) {
  return /* @__PURE__ */ z.jsx(
    "button",
    {
      type: e,
      onClick: t,
      disabled: l,
      className: `border rounded focus:ring-2 focus:ring-offset-2 bg-tekstiai-black-eerie dark:bg-black text-white px-2 py-1 text-xs ${l ? "cursor-not-allowed opacity-50" : "hover:opacity-80"} ${r ? "border-tekstiai-teal" : "border-tekstiai-black-eerie dark:border-black"}`,
      children: n
    }
  );
}
let np = { data: "" }, rp = (e) => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || np, lp = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, op = /\/\*[^]*?\*\/|  +/g, ss = /\n+/g, ot = (e, t) => {
  let n = "", r = "", l = "";
  for (let o in e) {
    let i = e[o];
    o[0] == "@" ? o[1] == "i" ? n = o + " " + i + ";" : r += o[1] == "f" ? ot(i, o) : o + "{" + ot(i, o[1] == "k" ? "" : t) + "}" : typeof i == "object" ? r += ot(i, t ? t.replace(/([^,])+/g, (u) => o.replace(/(^:.*)|([^,])+/g, (s) => /&/.test(s) ? s.replace(/&/g, u) : u ? u + " " + s : s)) : o) : i != null && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(), l += ot.p ? ot.p(o, i) : o + ":" + i + ";");
  }
  return n + (t && l ? t + "{" + l + "}" : l) + r;
}, Qe = {}, _c = (e) => {
  if (typeof e == "object") {
    let t = "";
    for (let n in e)
      t += n + _c(e[n]);
    return t;
  }
  return e;
}, ip = (e, t, n, r, l) => {
  let o = _c(e), i = Qe[o] || (Qe[o] = ((s) => {
    let a = 0, m = 11;
    for (; a < s.length; )
      m = 101 * m + s.charCodeAt(a++) >>> 0;
    return "go" + m;
  })(o));
  if (!Qe[i]) {
    let s = o !== e ? e : ((a) => {
      let m, h, p = [{}];
      for (; m = lp.exec(a.replace(op, "")); )
        m[4] ? p.shift() : m[3] ? (h = m[3].replace(ss, " ").trim(), p.unshift(p[0][h] = p[0][h] || {})) : p[0][m[1]] = m[2].replace(ss, " ").trim();
      return p[0];
    })(e);
    Qe[i] = ot(l ? { ["@keyframes " + i]: s } : s, n ? "" : "." + i);
  }
  let u = n && Qe.g ? Qe.g : null;
  return n && (Qe.g = Qe[i]), ((s, a, m, h) => {
    h ? a.data = a.data.replace(h, s) : a.data.indexOf(s) === -1 && (a.data = m ? s + a.data : a.data + s);
  })(Qe[i], t, r, u), i;
}, up = (e, t, n) => e.reduce((r, l, o) => {
  let i = t[o];
  if (i && i.call) {
    let u = i(n), s = u && u.props && u.props.className || /^go/.test(u) && u;
    i = s ? "." + s : u && typeof u == "object" ? u.props ? "" : ot(u, "") : u === !1 ? "" : u;
  }
  return r + l + (i ?? "");
}, "");
function Pl(e) {
  let t = this || {}, n = e.call ? e(t.p) : e;
  return ip(n.unshift ? n.raw ? up(n, [].slice.call(arguments, 1), t.p) : n.reduce((r, l) => Object.assign(r, l && l.call ? l(t.p) : l), {}) : n, rp(t.target), t.g, t.o, t.k);
}
let Nc, ei, ti;
Pl.bind({ g: 1 });
let qe = Pl.bind({ k: 1 });
function sp(e, t, n, r) {
  ot.p = t, Nc = e, ei = n, ti = r;
}
function St(e, t) {
  let n = this || {};
  return function() {
    let r = arguments;
    function l(o, i) {
      let u = Object.assign({}, o), s = u.className || l.className;
      n.p = Object.assign({ theme: ei && ei() }, u), n.o = / *go\d+/.test(s), u.className = Pl.apply(n, r) + (s ? " " + s : ""), t && (u.ref = i);
      let a = e;
      return e[0] && (a = u.as || e, delete u.as), ti && a[0] && ti(u), Nc(a, u);
    }
    return t ? t(l) : l;
  };
}
var ap = (e) => typeof e == "function", ni = (e, t) => ap(e) ? e(t) : e, cp = (() => {
  let e = 0;
  return () => (++e).toString();
})(), fp = (() => {
  let e;
  return () => {
    if (e === void 0 && typeof window < "u") {
      let t = matchMedia("(prefers-reduced-motion: reduce)");
      e = !t || t.matches;
    }
    return e;
  };
})(), dp = 20, Ar = /* @__PURE__ */ new Map(), pp = 1e3, as = (e) => {
  if (Ar.has(e))
    return;
  let t = setTimeout(() => {
    Ar.delete(e), zl({ type: 4, toastId: e });
  }, pp);
  Ar.set(e, t);
}, mp = (e) => {
  let t = Ar.get(e);
  t && clearTimeout(t);
}, ri = (e, t) => {
  switch (t.type) {
    case 0:
      return { ...e, toasts: [t.toast, ...e.toasts].slice(0, dp) };
    case 1:
      return t.toast.id && mp(t.toast.id), { ...e, toasts: e.toasts.map((o) => o.id === t.toast.id ? { ...o, ...t.toast } : o) };
    case 2:
      let { toast: n } = t;
      return e.toasts.find((o) => o.id === n.id) ? ri(e, { type: 1, toast: n }) : ri(e, { type: 0, toast: n });
    case 3:
      let { toastId: r } = t;
      return r ? as(r) : e.toasts.forEach((o) => {
        as(o.id);
      }), { ...e, toasts: e.toasts.map((o) => o.id === r || r === void 0 ? { ...o, visible: !1 } : o) };
    case 4:
      return t.toastId === void 0 ? { ...e, toasts: [] } : { ...e, toasts: e.toasts.filter((o) => o.id !== t.toastId) };
    case 5:
      return { ...e, pausedAt: t.time };
    case 6:
      let l = t.time - (e.pausedAt || 0);
      return { ...e, pausedAt: void 0, toasts: e.toasts.map((o) => ({ ...o, pauseDuration: o.pauseDuration + l })) };
  }
}, hp = [], lo = { toasts: [], pausedAt: void 0 }, zl = (e) => {
  lo = ri(lo, e), hp.forEach((t) => {
    t(lo);
  });
}, vp = (e, t = "blank", n) => ({ createdAt: Date.now(), visible: !0, type: t, ariaProps: { role: "status", "aria-live": "polite" }, message: e, pauseDuration: 0, ...n, id: (n == null ? void 0 : n.id) || cp() }), ur = (e) => (t, n) => {
  let r = vp(t, e, n);
  return zl({ type: 2, toast: r }), r.id;
}, Oe = (e, t) => ur("blank")(e, t);
Oe.error = ur("error");
Oe.success = ur("success");
Oe.loading = ur("loading");
Oe.custom = ur("custom");
Oe.dismiss = (e) => {
  zl({ type: 3, toastId: e });
};
Oe.remove = (e) => zl({ type: 4, toastId: e });
Oe.promise = (e, t, n) => {
  let r = Oe.loading(t.loading, { ...n, ...n == null ? void 0 : n.loading });
  return e.then((l) => (Oe.success(ni(t.success, l), { id: r, ...n, ...n == null ? void 0 : n.success }), l)).catch((l) => {
    Oe.error(ni(t.error, l), { id: r, ...n, ...n == null ? void 0 : n.error });
  }), e;
};
var yp = qe`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, gp = qe`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, wp = qe`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, kp = St("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${yp} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${gp} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${wp} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, Sp = qe`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, xp = St("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${Sp} 1s linear infinite;
`, Ep = qe`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, Cp = qe`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, _p = St("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ep} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Cp} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, Np = St("div")`
  position: absolute;
`, Pp = St("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, zp = qe`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Tp = St("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${zp} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, Lp = ({ toast: e }) => {
  let { icon: t, type: n, iconTheme: r } = e;
  return t !== void 0 ? typeof t == "string" ? D.createElement(Tp, null, t) : t : n === "blank" ? null : D.createElement(Pp, null, D.createElement(xp, { ...r }), n !== "loading" && D.createElement(Np, null, n === "error" ? D.createElement(kp, { ...r }) : D.createElement(_p, { ...r })));
}, jp = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, Rp = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`, Op = "0%{opacity:0;} 100%{opacity:1;}", $p = "0%{opacity:1;} 100%{opacity:0;}", Dp = St("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, Ip = St("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Mp = (e, t) => {
  let n = e.includes("top") ? 1 : -1, [r, l] = fp() ? [Op, $p] : [jp(n), Rp(n)];
  return { animation: t ? `${qe(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${qe(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
};
D.memo(({ toast: e, position: t, style: n, children: r }) => {
  let l = e.height ? Mp(e.position || t || "top-center", e.visible) : { opacity: 0 }, o = D.createElement(Lp, { toast: e }), i = D.createElement(Ip, { ...e.ariaProps }, ni(e.message, e));
  return D.createElement(Dp, { className: e.className, style: { ...l, ...n, ...e.style } }, typeof r == "function" ? r({ icon: o, message: i }) : D.createElement(D.Fragment, null, o, i));
});
sp(D.createElement);
Pl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
var tr = Oe;
function Fp({ isStreaming: e }) {
  const [t, n] = D.useState(0);
  return D.useEffect(() => {
    if (e) {
      const r = setInterval(() => {
        n((l) => (l + 1) % 4);
      }, 200);
      return () => clearInterval(r);
    } else
      n(0);
  }, [e]), /* @__PURE__ */ z.jsx("span", { children: "." + ".".repeat(t) });
}
function cs({
  answer: e,
  references: t,
  isStreaming: n,
  answerAvatarBackgroundColor: r,
  answerAvatarTextColor: l,
  avatarWidth: o,
  answerAvatarText: i,
  copyButtonText: u,
  referenceButtonText: s,
  stopStreaming: a
}) {
  const [m, h] = D.useState(!1);
  function p() {
    h(!m);
  }
  function g() {
    try {
      navigator.clipboard.writeText(e).then(() => {
        tr.success("Copied to clipboard");
      });
    } catch {
      tr.error("Failed to copy to clipboard");
    }
  }
  return /* @__PURE__ */ z.jsxs(
    "div",
    {
      id: "answer-container",
      className: "p-4 md:py-6 w-full self-start flex gap-3 md:gap-4 align-center justify-start md:justify-center",
      children: [
        /* @__PURE__ */ z.jsx(
          Cc,
          {
            type: "answer",
            backgroundColor: r,
            textColor: l,
            width: o,
            text: i
          }
        ),
        /* @__PURE__ */ z.jsxs("div", { className: "md:w-3/4 xl:w-1/2", children: [
          Up(e),
          n && e.length === 0 && /* @__PURE__ */ z.jsx("i", { className: "", children: "Gathering references" }),
          n && /* @__PURE__ */ z.jsx(Fp, { isStreaming: n }),
          /* @__PURE__ */ z.jsxs("div", { children: [
            /* @__PURE__ */ z.jsxs("div", { id: "controls", className: "mt-4 flex gap-2", children: [
              /* @__PURE__ */ z.jsx(ro, { onClick: g, type: "button", children: u || "Copy" }),
              /* @__PURE__ */ z.jsx(
                ro,
                {
                  onClick: p,
                  active: m,
                  type: "button",
                  children: s || "References"
                }
              ),
              n && /* @__PURE__ */ z.jsx(
                ro,
                {
                  onClick: a,
                  type: "button",
                  children: "Stop"
                }
              )
            ] }),
            m && t && /* @__PURE__ */ z.jsx("ul", { className: "mt-4 px-12 py-6 border rounded-lg list-decimal max-w-fit", children: t.map((w) => /* @__PURE__ */ z.jsxs("li", { className: "flex flex-col", children: [
              /* @__PURE__ */ z.jsx("div", { className: "list-item font-bold", children: /* @__PURE__ */ z.jsx("span", { children: /* @__PURE__ */ z.jsx(
                "a",
                {
                  href: w.source,
                  target: "_blank",
                  children: w.title
                }
              ) }) }),
              /* @__PURE__ */ z.jsxs("span", { children: [
                "...",
                w.content.substring(0, 160),
                "..."
              ] })
            ] })) })
          ] })
        ] })
      ]
    }
  );
}
function Up(e) {
  const t = e.split(`
`);
  return /* @__PURE__ */ z.jsx("div", { children: t.map((n, r) => /* @__PURE__ */ z.jsxs(oo.Fragment, { children: [
    n,
    r < t.length - 1 && /* @__PURE__ */ z.jsx("br", {})
  ] }, r)) });
}
const Ap = oo.forwardRef(
  ({
    qaPairs: e,
    questionText: t,
    answerText: n,
    references: r,
    isStreaming: l,
    stopStreaming: o,
    questionAvatarBackgroundColor: i,
    questionAvatarTextColor: u,
    avatarWidth: s,
    questionAvatarText: a,
    answerAvatarBackgroundColor: m,
    answerAvatarTextColor: h,
    answerAvatarText: p,
    copyButtonText: g,
    referenceButtonText: w
  }, k) => /* @__PURE__ */ z.jsxs(
    "div",
    {
      ref: k,
      id: "discussion-area",
      className: "flex-3 flex flex-col overflow-auto text-xs md:text-sm",
      children: [
        !t && !n && !l && e.length == 0 && /* @__PURE__ */ z.jsx("div", { className: "flex text-center justify-center flex-col gap-4 md:gap-6 items-center mt-16 text-lg md:text-xl font-bold opacity-10 cursor-default select-none", children: "Powered by TekstiAI" }),
        /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
          e.length > 0 && e.map((O, f) => /* @__PURE__ */ z.jsxs(oo.Fragment, { children: [
            /* @__PURE__ */ z.jsx(
              us,
              {
                question: O.question,
                questionAvatarBackgroundColor: i,
                questionAvatarTextColor: u,
                avatarWidth: s,
                questionAvatarText: a
              }
            ),
            /* @__PURE__ */ z.jsx(
              cs,
              {
                answer: O.answer,
                references: O.references,
                answerAvatarBackgroundColor: m,
                answerAvatarTextColor: h,
                avatarWidth: s,
                answerAvatarText: p,
                copyButtonText: g,
                referenceButtonText: w
              }
            )
          ] }, f)),
          t && /* @__PURE__ */ z.jsx(
            us,
            {
              question: t,
              questionAvatarBackgroundColor: i,
              questionAvatarTextColor: u,
              avatarWidth: s,
              questionAvatarText: a
            }
          ),
          (n || l) && /* @__PURE__ */ z.jsx(
            cs,
            {
              answer: n,
              references: r,
              isStreaming: l,
              answerAvatarBackgroundColor: m,
              answerAvatarTextColor: h,
              avatarWidth: s,
              answerAvatarText: p,
              copyButtonText: g,
              referenceButtonText: w,
              stopStreaming: o
            }
          )
        ] })
      ]
    }
  )
);
async function Vp(e, t, n, r, l) {
  try {
    const o = `${e}?apiKey=${encodeURIComponent(t)}`;
    if (l && l.aborted) {
      console.log("Signal already aborted");
      return;
    }
    const i = await fetch(o, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/plain"
      },
      body: JSON.stringify(n),
      signal: l
    });
    if (!i.ok)
      throw new Error(`HTTP error! status: ${i.status}`);
    if (i.body) {
      const u = i.body.getReader();
      for (; ; ) {
        if (l && l.aborted) {
          console.log("Signal aborted during reading");
          break;
        }
        const { done: s, value: a } = await u.read();
        if (s)
          break;
        const m = new TextDecoder().decode(a);
        r(m);
      }
    } else
      console.error("Fetch response body is null");
  } catch (o) {
    o.name !== "AbortError" && (tr.error("Stream interrupted."), console.error("Failed to stream", o));
  }
}
async function Qp(e, t, n) {
  try {
    return (await fetch(`${t}/question?apiKey=` + e, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(n)
    })).json();
  } catch (r) {
    throw console.error("Failed to post question", r), r;
  }
}
async function Hp(e, t, n, r, l) {
  return new Promise((o, i) => {
    try {
      Vp(
        `${t}/chat/streamquestion`,
        e,
        n,
        (u) => {
          r(u);
        },
        l
      ).then(() => {
        o("Streaming complete");
      }).catch((u) => {
        i(u);
      });
    } catch (u) {
      console.error("Failed to post chat", u), i(u);
    }
  });
}
const Bp = async (e, t, n, r, l, o) => {
  const { signal: i } = r, u = await Qp(e, t, {
    q: n,
    qa_pairs: l
  });
  let s = "";
  return await Hp(
    e,
    t,
    {
      // q: question,
      qa_pairs: u.qa_pairs
    },
    (a) => {
      o(a), s += a;
    },
    i
  ), {
    content: s,
    references: u.qa_pairs[u.qa_pairs.length - 1].references
  };
};
function Wp({
  apiKey: e,
  apiUrl: t,
  buttonBackgroundColor: n,
  buttonTextColor: r,
  buttonBorderColor: l,
  buttonText: o,
  questionAvatarBackgroundColor: i,
  questionAvatarTextColor: u,
  avatarWidth: s,
  questionAvatarText: a,
  answerAvatarBackgroundColor: m,
  answerAvatarTextColor: h,
  answerAvatarText: p,
  copyButtonText: g,
  referenceButtonText: w,
  inputPlaceholderText: k
}) {
  const [O, f] = D.useState(""), [c, d] = D.useState(!1), [v, S] = D.useState(""), [_, C] = D.useState(""), [N, A] = D.useState([]), [L, ve] = D.useState([]), ie = D.useRef(null), xt = D.useRef(null);
  function sr() {
    ie.current && (ie.current.abort(), ie.current = null), tr.success("Stopped streaming"), d(!1), S(""), C(""), A([]);
  }
  D.useEffect(() => () => {
    ie.current && (ie.current.abort(), ie.current = null);
  }, []);
  const Tl = async () => {
    if (!e) {
      tr.error("No org key provided for the widget.");
      return;
    }
    const Ut = O;
    f(""), S(O), d(!0), ie.current = new AbortController();
    const vn = (P) => {
      C((T) => T + P);
    }, x = await Bp(
      e,
      t,
      Ut,
      ie.current,
      L,
      vn
    );
    d(!1), S(""), C(""), ie.current.signal.aborted || ve((P) => [
      ...P,
      {
        question: Ut,
        answer: x.content,
        references: x.references
      }
    ]);
  };
  return /* @__PURE__ */ z.jsxs("div", { className: "embed flex flex-col flex-1 overflow-auto w-full h-full p-5 bg-white", children: [
    /* @__PURE__ */ z.jsx(
      Ap,
      {
        ref: xt,
        qaPairs: L,
        questionText: v,
        answerText: _,
        references: N,
        isStreaming: c,
        stopStreaming: sr,
        questionAvatarBackgroundColor: i,
        questionAvatarTextColor: u,
        avatarWidth: s,
        questionAvatarText: a,
        answerAvatarBackgroundColor: m,
        answerAvatarTextColor: h,
        answerAvatarText: p,
        copyButtonText: g,
        referenceButtonText: w
      }
    ),
    /* @__PURE__ */ z.jsx(
      tp,
      {
        value: O,
        onChange: f,
        placeholder: k || "Type your question here...",
        onSubmit: Tl,
        disabled: c,
        buttonText: o,
        buttonBackgroundColor: n,
        buttonTextColor: r,
        buttonBorderColor: l
      }
    )
  ] });
}
function Kp({
  apiKey: e,
  apiUrl: t,
  buttonBackgroundColor: n,
  buttonTextColor: r,
  buttonBorderColor: l,
  buttonText: o,
  questionAvatarBackgroundColor: i,
  questionAvatarTextColor: u,
  avatarWidth: s,
  questionAvatarText: a,
  answerAvatarBackgroundColor: m,
  answerAvatarTextColor: h,
  answerAvatarText: p,
  copyButtonText: g,
  referenceButtonText: w,
  inputPlaceholderText: k
}) {
  return /* @__PURE__ */ z.jsx(
    Wp,
    {
      apiKey: e,
      apiUrl: t,
      buttonText: o,
      buttonBackgroundColor: n,
      buttonTextColor: r,
      buttonBorderColor: l,
      questionAvatarBackgroundColor: i,
      questionAvatarTextColor: u,
      avatarWidth: s,
      questionAvatarText: a,
      answerAvatarBackgroundColor: m,
      answerAvatarTextColor: h,
      answerAvatarText: p,
      copyButtonText: g,
      referenceButtonText: w,
      inputPlaceholderText: k
    }
  );
}
function Yp(e, t) {
  const { api: n, styles: r } = t;
  io.createRoot(e).render(
    /* @__PURE__ */ z.jsx(
      Kp,
      {
        ...n,
        ...r
      }
    )
  );
}
export {
  Yp as renderTekstiaiWidget
};
