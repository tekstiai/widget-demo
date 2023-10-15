function Pc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var cs = { exports: {} }, sl = {}, fs = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er = Symbol.for("react.element"), zc = Symbol.for("react.portal"), Tc = Symbol.for("react.fragment"), Lc = Symbol.for("react.strict_mode"), jc = Symbol.for("react.profiler"), Rc = Symbol.for("react.provider"), Oc = Symbol.for("react.context"), $c = Symbol.for("react.forward_ref"), Dc = Symbol.for("react.suspense"), Ic = Symbol.for("react.memo"), Mc = Symbol.for("react.lazy"), Zi = Symbol.iterator;
function Fc(e) {
  return e === null || typeof e != "object" ? null : (e = Zi && e[Zi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ds = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ps = Object.assign, ms = {};
function cn(e, t, n) {
  this.props = e, this.context = t, this.refs = ms, this.updater = n || ds;
}
cn.prototype.isReactComponent = {};
cn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
cn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function hs() {
}
hs.prototype = cn.prototype;
function ti(e, t, n) {
  this.props = e, this.context = t, this.refs = ms, this.updater = n || ds;
}
var ni = ti.prototype = new hs();
ni.constructor = ti;
ps(ni, cn.prototype);
ni.isPureReactComponent = !0;
var Ji = Array.isArray, vs = Object.prototype.hasOwnProperty, ri = { current: null }, ys = { key: !0, ref: !0, __self: !0, __source: !0 };
function gs(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      vs.call(t, r) && !ys.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++)
      s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: er, type: e, key: o, ref: i, props: l, _owner: ri.current };
}
function Uc(e, t) {
  return { $$typeof: er, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function li(e) {
  return typeof e == "object" && e !== null && e.$$typeof === er;
}
function Ac(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var qi = /\/+/g;
function Tl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ac("" + e.key) : t.toString(36);
}
function _r(e, t, n, r, l) {
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
          case er:
          case zc:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + Tl(i, 0) : r, Ji(l) ? (n = "", e != null && (n = e.replace(qi, "$&/") + "/"), _r(l, t, n, "", function(c) {
      return c;
    })) : l != null && (li(l) && (l = Uc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(qi, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Ji(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Tl(o, u);
      i += _r(o, t, n, s, l);
    }
  else if (s = Fc(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + Tl(o, u++), i += _r(o, t, n, s, l);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function sr(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return _r(e, r, "", "", function(o) {
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
var se = { current: null }, Nr = { transition: null }, Bc = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: Nr, ReactCurrentOwner: ri };
L.Children = { map: sr, forEach: function(e, t, n) {
  sr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return sr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return sr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!li(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = cn;
L.Fragment = Tc;
L.Profiler = jc;
L.PureComponent = ti;
L.StrictMode = Lc;
L.Suspense = Dc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bc;
L.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ps({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = ri.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      vs.call(t, s) && !ys.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++)
      u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: er, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function(e) {
  return e = { $$typeof: Oc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Rc, _context: e }, e.Consumer = e;
};
L.createElement = gs;
L.createFactory = function(e) {
  var t = gs.bind(null, e);
  return t.type = e, t;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: $c, render: e };
};
L.isValidElement = li;
L.lazy = function(e) {
  return { $$typeof: Mc, _payload: { _status: -1, _result: e }, _init: Vc };
};
L.memo = function(e, t) {
  return { $$typeof: Ic, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function(e) {
  var t = Nr.transition;
  Nr.transition = {};
  try {
    e();
  } finally {
    Nr.transition = t;
  }
};
L.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function(e, t) {
  return se.current.useCallback(e, t);
};
L.useContext = function(e) {
  return se.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return se.current.useDeferredValue(e);
};
L.useEffect = function(e, t) {
  return se.current.useEffect(e, t);
};
L.useId = function() {
  return se.current.useId();
};
L.useImperativeHandle = function(e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function(e, t) {
  return se.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function(e, t) {
  return se.current.useLayoutEffect(e, t);
};
L.useMemo = function(e, t) {
  return se.current.useMemo(e, t);
};
L.useReducer = function(e, t, n) {
  return se.current.useReducer(e, t, n);
};
L.useRef = function(e) {
  return se.current.useRef(e);
};
L.useState = function(e) {
  return se.current.useState(e);
};
L.useSyncExternalStore = function(e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function() {
  return se.current.useTransition();
};
L.version = "18.2.0";
fs.exports = L;
var $ = fs.exports;
const bi = /* @__PURE__ */ Pc($);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qc = $, Hc = Symbol.for("react.element"), Wc = Symbol.for("react.fragment"), Kc = Object.prototype.hasOwnProperty, Yc = Qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Xc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ws(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    Kc.call(t, r) && !Xc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Hc, type: e, key: o, ref: i, props: l, _owner: Yc.current };
}
sl.Fragment = Wc;
sl.jsx = ws;
sl.jsxs = ws;
cs.exports = sl;
var P = cs.exports, ro = {}, ks = { exports: {} }, we = {}, Ss = { exports: {} }, xs = {};
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
  function t(E, z) {
    var T = E.length;
    E.push(z);
    e:
      for (; 0 < T; ) {
        var W = T - 1 >>> 1, Z = E[W];
        if (0 < l(Z, z))
          E[W] = z, E[T] = Z, T = W;
        else
          break e;
      }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0)
      return null;
    var z = E[0], T = E.pop();
    if (T !== z) {
      E[0] = T;
      e:
        for (var W = 0, Z = E.length, ir = Z >>> 1; W < ir; ) {
          var St = 2 * (W + 1) - 1, zl = E[St], xt = St + 1, ur = E[xt];
          if (0 > l(zl, T))
            xt < Z && 0 > l(ur, zl) ? (E[W] = ur, E[xt] = T, W = xt) : (E[W] = zl, E[St] = T, W = St);
          else if (xt < Z && 0 > l(ur, T))
            E[W] = ur, E[xt] = T, W = xt;
          else
            break e;
        }
    }
    return z;
  }
  function l(E, z) {
    var T = E.sortIndex - z.sortIndex;
    return T !== 0 ? T : E.id - z.id;
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
  var s = [], c = [], m = 1, h = null, p = 3, g = !1, w = !1, k = !1, D = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null)
        r(c);
      else if (z.startTime <= E)
        r(c), z.sortIndex = z.expirationTime, t(s, z);
      else
        break;
      z = n(c);
    }
  }
  function v(E) {
    if (k = !1, d(E), !w)
      if (n(s) !== null)
        w = !0, Nl(S);
      else {
        var z = n(c);
        z !== null && Pl(v, z.startTime - E);
      }
  }
  function S(E, z) {
    w = !1, k && (k = !1, f(N), N = -1), g = !0;
    var T = p;
    try {
      for (d(z), h = n(s); h !== null && (!(h.expirationTime > z) || E && !Pe()); ) {
        var W = h.callback;
        if (typeof W == "function") {
          h.callback = null, p = h.priorityLevel;
          var Z = W(h.expirationTime <= z);
          z = e.unstable_now(), typeof Z == "function" ? h.callback = Z : h === n(s) && r(s), d(z);
        } else
          r(s);
        h = n(s);
      }
      if (h !== null)
        var ir = !0;
      else {
        var St = n(c);
        St !== null && Pl(v, St.startTime - z), ir = !1;
      }
      return ir;
    } finally {
      h = null, p = T, g = !1;
    }
  }
  var C = !1, _ = null, N = -1, H = 5, j = -1;
  function Pe() {
    return !(e.unstable_now() - j < H);
  }
  function pn() {
    if (_ !== null) {
      var E = e.unstable_now();
      j = E;
      var z = !0;
      try {
        z = _(!0, E);
      } finally {
        z ? mn() : (C = !1, _ = null);
      }
    } else
      C = !1;
  }
  var mn;
  if (typeof a == "function")
    mn = function() {
      a(pn);
    };
  else if (typeof MessageChannel < "u") {
    var Gi = new MessageChannel(), Nc = Gi.port2;
    Gi.port1.onmessage = pn, mn = function() {
      Nc.postMessage(null);
    };
  } else
    mn = function() {
      D(pn, 0);
    };
  function Nl(E) {
    _ = E, C || (C = !0, mn());
  }
  function Pl(E, z) {
    N = D(function() {
      E(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, Nl(S));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < E ? Math.floor(1e3 / E) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(E) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = p;
    }
    var T = p;
    p = z;
    try {
      return E();
    } finally {
      p = T;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(E, z) {
    switch (E) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        E = 3;
    }
    var T = p;
    p = E;
    try {
      return z();
    } finally {
      p = T;
    }
  }, e.unstable_scheduleCallback = function(E, z, T) {
    var W = e.unstable_now();
    switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? W + T : W) : T = W, E) {
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
    return Z = T + Z, E = { id: m++, callback: z, priorityLevel: E, startTime: T, expirationTime: Z, sortIndex: -1 }, T > W ? (E.sortIndex = T, t(c, E), n(s) === null && E === n(c) && (k ? (f(N), N = -1) : k = !0, Pl(v, T - W))) : (E.sortIndex = Z, t(s, E), w || g || (w = !0, Nl(S))), E;
  }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function(E) {
    var z = p;
    return function() {
      var T = p;
      p = z;
      try {
        return E.apply(this, arguments);
      } finally {
        p = T;
      }
    };
  };
})(xs);
Ss.exports = xs;
var Gc = Ss.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Es = $, ge = Gc;
function y(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Cs = /* @__PURE__ */ new Set(), In = {};
function Dt(e, t) {
  nn(e, t), nn(e + "Capture", t);
}
function nn(e, t) {
  for (In[e] = t, e = 0; e < t.length; e++)
    Cs.add(t[e]);
}
var Ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), lo = Object.prototype.hasOwnProperty, Zc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, eu = {}, tu = {};
function Jc(e) {
  return lo.call(tu, e) ? !0 : lo.call(eu, e) ? !1 : Zc.test(e) ? tu[e] = !0 : (eu[e] = !0, !1);
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
function ae(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  te[e] = new ae(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var oi = /[\-:]([a-z])/g;
function ii(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    oi,
    ii
  );
  te[t] = new ae(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(oi, ii);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(oi, ii);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ui(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (bc(t, n, l, r) && (n = null), r || l === null ? Jc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var qe = Es.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ar = Symbol.for("react.element"), Ft = Symbol.for("react.portal"), Ut = Symbol.for("react.fragment"), si = Symbol.for("react.strict_mode"), oo = Symbol.for("react.profiler"), _s = Symbol.for("react.provider"), Ns = Symbol.for("react.context"), ai = Symbol.for("react.forward_ref"), io = Symbol.for("react.suspense"), uo = Symbol.for("react.suspense_list"), ci = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), Ps = Symbol.for("react.offscreen"), nu = Symbol.iterator;
function hn(e) {
  return e === null || typeof e != "object" ? null : (e = nu && e[nu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var B = Object.assign, Ll;
function En(e) {
  if (Ll === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ll = t && t[1] || "";
    }
  return `
` + Ll + e;
}
var jl = !1;
function Rl(e, t) {
  if (!e || jl)
    return "";
  jl = !0;
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
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
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
    jl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? En(e) : "";
}
function ef(e) {
  switch (e.tag) {
    case 5:
      return En(e.type);
    case 16:
      return En("Lazy");
    case 13:
      return En("Suspense");
    case 19:
      return En("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Rl(e.type, !1), e;
    case 11:
      return e = Rl(e.type.render, !1), e;
    case 1:
      return e = Rl(e.type, !0), e;
    default:
      return "";
  }
}
function so(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Ut:
      return "Fragment";
    case Ft:
      return "Portal";
    case oo:
      return "Profiler";
    case si:
      return "StrictMode";
    case io:
      return "Suspense";
    case uo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ns:
        return (e.displayName || "Context") + ".Consumer";
      case _s:
        return (e._context.displayName || "Context") + ".Provider";
      case ai:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ci:
        return t = e.displayName || null, t !== null ? t : so(e.type) || "Memo";
      case et:
        t = e._payload, e = e._init;
        try {
          return so(e(t));
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
      return so(t);
    case 8:
      return t === si ? "StrictMode" : "Mode";
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
function ht(e) {
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
function zs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function nf(e) {
  var t = zs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function cr(e) {
  e._valueTracker || (e._valueTracker = nf(e));
}
function Ts(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = zs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Fr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ao(e, t) {
  var n = t.checked;
  return B({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ru(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ht(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ls(e, t) {
  t = t.checked, t != null && ui(e, "checked", t, !1);
}
function co(e, t) {
  Ls(e, t);
  var n = ht(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? fo(e, t.type, n) : t.hasOwnProperty("defaultValue") && fo(e, t.type, ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function lu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function fo(e, t, n) {
  (t !== "number" || Fr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Cn = Array.isArray;
function Zt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
      t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function po(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return B({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ou(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(y(92));
      if (Cn(n)) {
        if (1 < n.length)
          throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ht(n) };
}
function js(e, t) {
  var n = ht(t.value), r = ht(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function iu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Rs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Rs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var fr, Os = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (fr = fr || document.createElement("div"), fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = fr.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Mn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Pn = {
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
Object.keys(Pn).forEach(function(e) {
  rf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Pn[t] = Pn[e];
  });
});
function $s(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Pn.hasOwnProperty(e) && Pn[e] ? ("" + t).trim() : t + "px";
}
function Ds(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = $s(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var lf = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ho(e, t) {
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
function vo(e, t) {
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
var yo = null;
function fi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var go = null, Jt = null, qt = null;
function uu(e) {
  if (e = rr(e)) {
    if (typeof go != "function")
      throw Error(y(280));
    var t = e.stateNode;
    t && (t = pl(t), go(e.stateNode, e.type, t));
  }
}
function Is(e) {
  Jt ? qt ? qt.push(e) : qt = [e] : Jt = e;
}
function Ms() {
  if (Jt) {
    var e = Jt, t = qt;
    if (qt = Jt = null, uu(e), t)
      for (e = 0; e < t.length; e++)
        uu(t[e]);
  }
}
function Fs(e, t) {
  return e(t);
}
function Us() {
}
var Ol = !1;
function As(e, t, n) {
  if (Ol)
    return e(t, n);
  Ol = !0;
  try {
    return Fs(e, t, n);
  } finally {
    Ol = !1, (Jt !== null || qt !== null) && (Us(), Ms());
  }
}
function Fn(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = pl(n);
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
var wo = !1;
if (Ye)
  try {
    var vn = {};
    Object.defineProperty(vn, "passive", { get: function() {
      wo = !0;
    } }), window.addEventListener("test", vn, vn), window.removeEventListener("test", vn, vn);
  } catch {
    wo = !1;
  }
function of(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var zn = !1, Ur = null, Ar = !1, ko = null, uf = { onError: function(e) {
  zn = !0, Ur = e;
} };
function sf(e, t, n, r, l, o, i, u, s) {
  zn = !1, Ur = null, of.apply(uf, arguments);
}
function af(e, t, n, r, l, o, i, u, s) {
  if (sf.apply(this, arguments), zn) {
    if (zn) {
      var c = Ur;
      zn = !1, Ur = null;
    } else
      throw Error(y(198));
    Ar || (Ar = !0, ko = c);
  }
}
function It(e) {
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
function Vs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function su(e) {
  if (It(e) !== e)
    throw Error(y(188));
}
function cf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = It(e), t === null)
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
          return su(l), e;
        if (o === r)
          return su(l), t;
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
function Bs(e) {
  return e = cf(e), e !== null ? Qs(e) : null;
}
function Qs(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Qs(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Hs = ge.unstable_scheduleCallback, au = ge.unstable_cancelCallback, ff = ge.unstable_shouldYield, df = ge.unstable_requestPaint, K = ge.unstable_now, pf = ge.unstable_getCurrentPriorityLevel, di = ge.unstable_ImmediatePriority, Ws = ge.unstable_UserBlockingPriority, Vr = ge.unstable_NormalPriority, mf = ge.unstable_LowPriority, Ks = ge.unstable_IdlePriority, al = null, Ue = null;
function hf(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Oe = Math.clz32 ? Math.clz32 : gf, vf = Math.log, yf = Math.LN2;
function gf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (vf(e) / yf | 0) | 0;
}
var dr = 64, pr = 4194304;
function _n(e) {
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
function Br(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = _n(u) : (o &= i, o !== 0 && (r = _n(o)));
  } else
    i = n & ~l, i !== 0 ? r = _n(i) : o !== 0 && (r = _n(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Oe(t), l = 1 << n, r |= e[n], t &= ~l;
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
    var i = 31 - Oe(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = wf(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function So(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ys() {
  var e = dr;
  return dr <<= 1, !(dr & 4194240) && (dr = 64), e;
}
function $l(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function tr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Oe(t), e[t] = n;
}
function Sf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function pi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var O = 0;
function Xs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Gs, mi, Zs, Js, qs, xo = !1, mr = [], ut = null, st = null, at = null, Un = /* @__PURE__ */ new Map(), An = /* @__PURE__ */ new Map(), nt = [], xf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function cu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ut = null;
      break;
    case "dragenter":
    case "dragleave":
      st = null;
      break;
    case "mouseover":
    case "mouseout":
      at = null;
      break;
    case "pointerover":
    case "pointerout":
      Un.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      An.delete(t.pointerId);
  }
}
function yn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = rr(t), t !== null && mi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Ef(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ut = yn(ut, e, t, n, r, l), !0;
    case "dragenter":
      return st = yn(st, e, t, n, r, l), !0;
    case "mouseover":
      return at = yn(at, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Un.set(o, yn(Un.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, An.set(o, yn(An.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function bs(e) {
  var t = _t(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Vs(n), t !== null) {
          e.blockedOn = t, qs(e.priority, function() {
            Zs(n);
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
function Pr(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Eo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      yo = r, n.target.dispatchEvent(r), yo = null;
    } else
      return t = rr(n), t !== null && mi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function fu(e, t, n) {
  Pr(e) && n.delete(t);
}
function Cf() {
  xo = !1, ut !== null && Pr(ut) && (ut = null), st !== null && Pr(st) && (st = null), at !== null && Pr(at) && (at = null), Un.forEach(fu), An.forEach(fu);
}
function gn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, xo || (xo = !0, ge.unstable_scheduleCallback(ge.unstable_NormalPriority, Cf)));
}
function Vn(e) {
  function t(l) {
    return gn(l, e);
  }
  if (0 < mr.length) {
    gn(mr[0], e);
    for (var n = 1; n < mr.length; n++) {
      var r = mr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ut !== null && gn(ut, e), st !== null && gn(st, e), at !== null && gn(at, e), Un.forEach(t), An.forEach(t), n = 0; n < nt.length; n++)
    r = nt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nt.length && (n = nt[0], n.blockedOn === null); )
    bs(n), n.blockedOn === null && nt.shift();
}
var bt = qe.ReactCurrentBatchConfig, Qr = !0;
function _f(e, t, n, r) {
  var l = O, o = bt.transition;
  bt.transition = null;
  try {
    O = 1, hi(e, t, n, r);
  } finally {
    O = l, bt.transition = o;
  }
}
function Nf(e, t, n, r) {
  var l = O, o = bt.transition;
  bt.transition = null;
  try {
    O = 4, hi(e, t, n, r);
  } finally {
    O = l, bt.transition = o;
  }
}
function hi(e, t, n, r) {
  if (Qr) {
    var l = Eo(e, t, n, r);
    if (l === null)
      Hl(e, t, r, Hr, n), cu(e, r);
    else if (Ef(l, e, t, n, r))
      r.stopPropagation();
    else if (cu(e, r), t & 4 && -1 < xf.indexOf(e)) {
      for (; l !== null; ) {
        var o = rr(l);
        if (o !== null && Gs(o), o = Eo(e, t, n, r), o === null && Hl(e, t, r, Hr, n), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      Hl(e, t, r, null, n);
  }
}
var Hr = null;
function Eo(e, t, n, r) {
  if (Hr = null, e = fi(r), e = _t(e), e !== null)
    if (t = It(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Vs(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Hr = e, null;
}
function ea(e) {
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
        case di:
          return 1;
        case Ws:
          return 4;
        case Vr:
        case mf:
          return 16;
        case Ks:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ot = null, vi = null, zr = null;
function ta() {
  if (zr)
    return zr;
  var e, t = vi, n = t.length, r, l = "value" in ot ? ot.value : ot.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
    ;
  return zr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Tr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function hr() {
  return !0;
}
function du() {
  return !1;
}
function ke(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? hr : du, this.isPropagationStopped = du, this;
  }
  return B(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = hr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = hr);
  }, persist: function() {
  }, isPersistent: hr }), t;
}
var fn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, yi = ke(fn), nr = B({}, fn, { view: 0, detail: 0 }), Pf = ke(nr), Dl, Il, wn, cl = B({}, nr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: gi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== wn && (wn && e.type === "mousemove" ? (Dl = e.screenX - wn.screenX, Il = e.screenY - wn.screenY) : Il = Dl = 0, wn = e), Dl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Il;
} }), pu = ke(cl), zf = B({}, cl, { dataTransfer: 0 }), Tf = ke(zf), Lf = B({}, nr, { relatedTarget: 0 }), Ml = ke(Lf), jf = B({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Rf = ke(jf), Of = B({}, fn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), $f = ke(Of), Df = B({}, fn, { data: 0 }), mu = ke(Df), If = {
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
function gi() {
  return Uf;
}
var Af = B({}, nr, { key: function(e) {
  if (e.key) {
    var t = If[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Tr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Mf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: gi, charCode: function(e) {
  return e.type === "keypress" ? Tr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Tr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Vf = ke(Af), Bf = B({}, cl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), hu = ke(Bf), Qf = B({}, nr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: gi }), Hf = ke(Qf), Wf = B({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kf = ke(Wf), Yf = B({}, cl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Xf = ke(Yf), Gf = [9, 13, 27, 32], wi = Ye && "CompositionEvent" in window, Tn = null;
Ye && "documentMode" in document && (Tn = document.documentMode);
var Zf = Ye && "TextEvent" in window && !Tn, na = Ye && (!wi || Tn && 8 < Tn && 11 >= Tn), vu = String.fromCharCode(32), yu = !1;
function ra(e, t) {
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
function la(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var At = !1;
function Jf(e, t) {
  switch (e) {
    case "compositionend":
      return la(t);
    case "keypress":
      return t.which !== 32 ? null : (yu = !0, vu);
    case "textInput":
      return e = t.data, e === vu && yu ? null : e;
    default:
      return null;
  }
}
function qf(e, t) {
  if (At)
    return e === "compositionend" || !wi && ra(e, t) ? (e = ta(), zr = vi = ot = null, At = !1, e) : null;
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
      return na && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var bf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function gu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!bf[e.type] : t === "textarea";
}
function oa(e, t, n, r) {
  Is(r), t = Wr(t, "onChange"), 0 < t.length && (n = new yi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ln = null, Bn = null;
function ed(e) {
  va(e, 0);
}
function fl(e) {
  var t = Qt(e);
  if (Ts(t))
    return e;
}
function td(e, t) {
  if (e === "change")
    return t;
}
var ia = !1;
if (Ye) {
  var Fl;
  if (Ye) {
    var Ul = "oninput" in document;
    if (!Ul) {
      var wu = document.createElement("div");
      wu.setAttribute("oninput", "return;"), Ul = typeof wu.oninput == "function";
    }
    Fl = Ul;
  } else
    Fl = !1;
  ia = Fl && (!document.documentMode || 9 < document.documentMode);
}
function ku() {
  Ln && (Ln.detachEvent("onpropertychange", ua), Bn = Ln = null);
}
function ua(e) {
  if (e.propertyName === "value" && fl(Bn)) {
    var t = [];
    oa(t, Bn, e, fi(e)), As(ed, t);
  }
}
function nd(e, t, n) {
  e === "focusin" ? (ku(), Ln = t, Bn = n, Ln.attachEvent("onpropertychange", ua)) : e === "focusout" && ku();
}
function rd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return fl(Bn);
}
function ld(e, t) {
  if (e === "click")
    return fl(t);
}
function od(e, t) {
  if (e === "input" || e === "change")
    return fl(t);
}
function id(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var De = typeof Object.is == "function" ? Object.is : id;
function Qn(e, t) {
  if (De(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!lo.call(t, l) || !De(e[l], t[l]))
      return !1;
  }
  return !0;
}
function Su(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function xu(e, t) {
  var n = Su(e);
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
    n = Su(n);
  }
}
function sa(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? sa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function aa() {
  for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Fr(e.document);
  }
  return t;
}
function ki(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function ud(e) {
  var t = aa(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && sa(n.ownerDocument.documentElement, n)) {
    if (r !== null && ki(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = xu(n, o);
        var i = xu(
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
var sd = Ye && "documentMode" in document && 11 >= document.documentMode, Vt = null, Co = null, jn = null, _o = !1;
function Eu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _o || Vt == null || Vt !== Fr(r) || (r = Vt, "selectionStart" in r && ki(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), jn && Qn(jn, r) || (jn = r, r = Wr(Co, "onSelect"), 0 < r.length && (t = new yi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Vt)));
}
function vr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Bt = { animationend: vr("Animation", "AnimationEnd"), animationiteration: vr("Animation", "AnimationIteration"), animationstart: vr("Animation", "AnimationStart"), transitionend: vr("Transition", "TransitionEnd") }, Al = {}, ca = {};
Ye && (ca = document.createElement("div").style, "AnimationEvent" in window || (delete Bt.animationend.animation, delete Bt.animationiteration.animation, delete Bt.animationstart.animation), "TransitionEvent" in window || delete Bt.transitionend.transition);
function dl(e) {
  if (Al[e])
    return Al[e];
  if (!Bt[e])
    return e;
  var t = Bt[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in ca)
      return Al[e] = t[n];
  return e;
}
var fa = dl("animationend"), da = dl("animationiteration"), pa = dl("animationstart"), ma = dl("transitionend"), ha = /* @__PURE__ */ new Map(), Cu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function yt(e, t) {
  ha.set(e, t), Dt(t, [e]);
}
for (var Vl = 0; Vl < Cu.length; Vl++) {
  var Bl = Cu[Vl], ad = Bl.toLowerCase(), cd = Bl[0].toUpperCase() + Bl.slice(1);
  yt(ad, "on" + cd);
}
yt(fa, "onAnimationEnd");
yt(da, "onAnimationIteration");
yt(pa, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(ma, "onTransitionEnd");
nn("onMouseEnter", ["mouseout", "mouseover"]);
nn("onMouseLeave", ["mouseout", "mouseover"]);
nn("onPointerEnter", ["pointerout", "pointerover"]);
nn("onPointerLeave", ["pointerout", "pointerover"]);
Dt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Dt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Dt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Dt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), fd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));
function _u(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, af(r, t, void 0, e), e.currentTarget = null;
}
function va(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, c = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          _u(l, u, c), o = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, c = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          _u(l, u, c), o = s;
        }
    }
  }
  if (Ar)
    throw e = ko, Ar = !1, ko = null, e;
}
function M(e, t) {
  var n = t[Lo];
  n === void 0 && (n = t[Lo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ya(t, e, 2, !1), n.add(r));
}
function Ql(e, t, n) {
  var r = 0;
  t && (r |= 4), ya(n, e, r, t);
}
var yr = "_reactListening" + Math.random().toString(36).slice(2);
function Hn(e) {
  if (!e[yr]) {
    e[yr] = !0, Cs.forEach(function(n) {
      n !== "selectionchange" && (fd.has(n) || Ql(n, !1, e), Ql(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yr] || (t[yr] = !0, Ql("selectionchange", !1, t));
  }
}
function ya(e, t, n, r) {
  switch (ea(t)) {
    case 1:
      var l = _f;
      break;
    case 4:
      l = Nf;
      break;
    default:
      l = hi;
  }
  n = l.bind(null, t, n, e), l = void 0, !wo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Hl(e, t, n, r, l) {
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
            if (i = _t(u), i === null)
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
  As(function() {
    var c = o, m = fi(n), h = [];
    e: {
      var p = ha.get(e);
      if (p !== void 0) {
        var g = yi, w = e;
        switch (e) {
          case "keypress":
            if (Tr(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = Vf;
            break;
          case "focusin":
            w = "focus", g = Ml;
            break;
          case "focusout":
            w = "blur", g = Ml;
            break;
          case "beforeblur":
          case "afterblur":
            g = Ml;
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
            g = pu;
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
            g = Hf;
            break;
          case fa:
          case da:
          case pa:
            g = Rf;
            break;
          case ma:
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
            g = hu;
        }
        var k = (t & 4) !== 0, D = !k && e === "scroll", f = k ? p !== null ? p + "Capture" : null : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Fn(a, f), v != null && k.push(Wn(a, v, d)))), D)
            break;
          a = a.return;
        }
        0 < k.length && (p = new g(p, w, null, n, m), h.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && n !== yo && (w = n.relatedTarget || n.fromElement) && (_t(w) || w[Xe]))
          break e;
        if ((g || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = c, w = w ? _t(w) : null, w !== null && (D = It(w), w !== D || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (k = pu, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = hu, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), D = g == null ? p : Qt(g), d = w == null ? p : Qt(w), p = new k(v, a + "leave", g, n, m), p.target = D, p.relatedTarget = d, v = null, _t(m) === c && (k = new k(f, a + "enter", w, n, m), k.target = d, k.relatedTarget = D, v = k), D = v, g && w)
            t: {
              for (k = g, f = w, a = 0, d = k; d; d = Mt(d))
                a++;
              for (d = 0, v = f; v; v = Mt(v))
                d++;
              for (; 0 < a - d; )
                k = Mt(k), a--;
              for (; 0 < d - a; )
                f = Mt(f), d--;
              for (; a--; ) {
                if (k === f || f !== null && k === f.alternate)
                  break t;
                k = Mt(k), f = Mt(f);
              }
              k = null;
            }
          else
            k = null;
          g !== null && Nu(h, p, g, k, !1), w !== null && D !== null && Nu(h, D, w, k, !0);
        }
      }
      e: {
        if (p = c ? Qt(c) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file")
          var S = td;
        else if (gu(p))
          if (ia)
            S = od;
          else {
            S = rd;
            var C = nd;
          }
        else
          (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (S = ld);
        if (S && (S = S(e, c))) {
          oa(h, S, n, m);
          break e;
        }
        C && C(e, p, c), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && fo(p, "number", p.value);
      }
      switch (C = c ? Qt(c) : window, e) {
        case "focusin":
          (gu(C) || C.contentEditable === "true") && (Vt = C, Co = c, jn = null);
          break;
        case "focusout":
          jn = Co = Vt = null;
          break;
        case "mousedown":
          _o = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          _o = !1, Eu(h, n, m);
          break;
        case "selectionchange":
          if (sd)
            break;
        case "keydown":
        case "keyup":
          Eu(h, n, m);
      }
      var _;
      if (wi)
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
        At ? ra(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (na && n.locale !== "ko" && (At || N !== "onCompositionStart" ? N === "onCompositionEnd" && At && (_ = ta()) : (ot = m, vi = "value" in ot ? ot.value : ot.textContent, At = !0)), C = Wr(c, N), 0 < C.length && (N = new mu(N, e, null, n, m), h.push({ event: N, listeners: C }), _ ? N.data = _ : (_ = la(n), _ !== null && (N.data = _)))), (_ = Zf ? Jf(e, n) : qf(e, n)) && (c = Wr(c, "onBeforeInput"), 0 < c.length && (m = new mu("onBeforeInput", "beforeinput", null, n, m), h.push({ event: m, listeners: c }), m.data = _));
    }
    va(h, t);
  });
}
function Wn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Fn(e, n), o != null && r.unshift(Wn(e, o, l)), o = Fn(e, t), o != null && r.push(Wn(e, o, l))), e = e.return;
  }
  return r;
}
function Mt(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Nu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Fn(n, o), s != null && i.unshift(Wn(n, s, u))) : l || (s = Fn(n, o), s != null && i.push(Wn(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var dd = /\r\n?/g, pd = /\u0000|\uFFFD/g;
function Pu(e) {
  return (typeof e == "string" ? e : "" + e).replace(dd, `
`).replace(pd, "");
}
function gr(e, t, n) {
  if (t = Pu(t), Pu(e) !== t && n)
    throw Error(y(425));
}
function Kr() {
}
var No = null, Po = null;
function zo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var To = typeof setTimeout == "function" ? setTimeout : void 0, md = typeof clearTimeout == "function" ? clearTimeout : void 0, zu = typeof Promise == "function" ? Promise : void 0, hd = typeof queueMicrotask == "function" ? queueMicrotask : typeof zu < "u" ? function(e) {
  return zu.resolve(null).then(e).catch(vd);
} : To;
function vd(e) {
  setTimeout(function() {
    throw e;
  });
}
function Wl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Vn(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Vn(t);
}
function ct(e) {
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
function Tu(e) {
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
var dn = Math.random().toString(36).slice(2), Fe = "__reactFiber$" + dn, Kn = "__reactProps$" + dn, Xe = "__reactContainer$" + dn, Lo = "__reactEvents$" + dn, yd = "__reactListeners$" + dn, gd = "__reactHandles$" + dn;
function _t(e) {
  var t = e[Fe];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Xe] || n[Fe]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Tu(e); e !== null; ) {
          if (n = e[Fe])
            return n;
          e = Tu(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function rr(e) {
  return e = e[Fe] || e[Xe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Qt(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(y(33));
}
function pl(e) {
  return e[Kn] || null;
}
var jo = [], Ht = -1;
function gt(e) {
  return { current: e };
}
function F(e) {
  0 > Ht || (e.current = jo[Ht], jo[Ht] = null, Ht--);
}
function I(e, t) {
  Ht++, jo[Ht] = e.current, e.current = t;
}
var vt = {}, oe = gt(vt), de = gt(!1), Lt = vt;
function rn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n)
    l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function pe(e) {
  return e = e.childContextTypes, e != null;
}
function Yr() {
  F(de), F(oe);
}
function Lu(e, t, n) {
  if (oe.current !== vt)
    throw Error(y(168));
  I(oe, t), I(de, n);
}
function ga(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(y(108, tf(e) || "Unknown", l));
  return B({}, n, r);
}
function Xr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vt, Lt = oe.current, I(oe, e), I(de, de.current), !0;
}
function ju(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(y(169));
  n ? (e = ga(e, t, Lt), r.__reactInternalMemoizedMergedChildContext = e, F(de), F(oe), I(oe, e)) : F(de), I(de, n);
}
var Qe = null, ml = !1, Kl = !1;
function wa(e) {
  Qe === null ? Qe = [e] : Qe.push(e);
}
function wd(e) {
  ml = !0, wa(e);
}
function wt() {
  if (!Kl && Qe !== null) {
    Kl = !0;
    var e = 0, t = O;
    try {
      var n = Qe;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Qe = null, ml = !1;
    } catch (l) {
      throw Qe !== null && (Qe = Qe.slice(e + 1)), Hs(di, wt), l;
    } finally {
      O = t, Kl = !1;
    }
  }
  return null;
}
var Wt = [], Kt = 0, Gr = null, Zr = 0, Se = [], xe = 0, jt = null, He = 1, We = "";
function Et(e, t) {
  Wt[Kt++] = Zr, Wt[Kt++] = Gr, Gr = e, Zr = t;
}
function ka(e, t, n) {
  Se[xe++] = He, Se[xe++] = We, Se[xe++] = jt, jt = e;
  var r = He;
  e = We;
  var l = 32 - Oe(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Oe(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, He = 1 << 32 - Oe(t) + l | n << l | r, We = o + e;
  } else
    He = 1 << o | n << l | r, We = e;
}
function Si(e) {
  e.return !== null && (Et(e, 1), ka(e, 1, 0));
}
function xi(e) {
  for (; e === Gr; )
    Gr = Wt[--Kt], Wt[Kt] = null, Zr = Wt[--Kt], Wt[Kt] = null;
  for (; e === jt; )
    jt = Se[--xe], Se[xe] = null, We = Se[--xe], Se[xe] = null, He = Se[--xe], Se[xe] = null;
}
var ye = null, ve = null, U = !1, je = null;
function Sa(e, t) {
  var n = Ee(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ru(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = ct(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = jt !== null ? { id: He, overflow: We } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ee(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ye = e, ve = null, !0) : !1;
    default:
      return !1;
  }
}
function Ro(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Oo(e) {
  if (U) {
    var t = ve;
    if (t) {
      var n = t;
      if (!Ru(e, t)) {
        if (Ro(e))
          throw Error(y(418));
        t = ct(n.nextSibling);
        var r = ye;
        t && Ru(e, t) ? Sa(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, ye = e);
      }
    } else {
      if (Ro(e))
        throw Error(y(418));
      e.flags = e.flags & -4097 | 2, U = !1, ye = e;
    }
  }
}
function Ou(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function wr(e) {
  if (e !== ye)
    return !1;
  if (!U)
    return Ou(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !zo(e.type, e.memoizedProps)), t && (t = ve)) {
    if (Ro(e))
      throw xa(), Error(y(418));
    for (; t; )
      Sa(e, t), t = ct(t.nextSibling);
  }
  if (Ou(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = ct(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else
    ve = ye ? ct(e.stateNode.nextSibling) : null;
  return !0;
}
function xa() {
  for (var e = ve; e; )
    e = ct(e.nextSibling);
}
function ln() {
  ve = ye = null, U = !1;
}
function Ei(e) {
  je === null ? je = [e] : je.push(e);
}
var kd = qe.ReactCurrentBatchConfig;
function Te(e, t) {
  if (e && e.defaultProps) {
    t = B({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Jr = gt(null), qr = null, Yt = null, Ci = null;
function _i() {
  Ci = Yt = qr = null;
}
function Ni(e) {
  var t = Jr.current;
  F(Jr), e._currentValue = t;
}
function $o(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function en(e, t) {
  qr = e, Ci = Yt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0), e.firstContext = null);
}
function _e(e) {
  var t = e._currentValue;
  if (Ci !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Yt === null) {
      if (qr === null)
        throw Error(y(308));
      Yt = e, qr.dependencies = { lanes: 0, firstContext: e };
    } else
      Yt = Yt.next = e;
  return t;
}
var Nt = null;
function Pi(e) {
  Nt === null ? Nt = [e] : Nt.push(e);
}
function Ea(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Pi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ge(e, r);
}
function Ge(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var tt = !1;
function zi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Ca(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ke(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, R & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ge(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Pi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ge(e, n);
}
function Lr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, pi(e, n);
  }
}
function $u(e, t) {
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
function br(e, t, n, r) {
  var l = e.updateQueue;
  tt = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, i === null ? o = c : i.next = c, i = s;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, u = m.lastBaseUpdate, u !== i && (u === null ? m.firstBaseUpdate = c : u.next = c, m.lastBaseUpdate = s));
  }
  if (o !== null) {
    var h = l.baseState;
    i = 0, m = c = s = null, u = o;
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
              h = B({}, h, p);
              break e;
            case 2:
              tt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else
        g = { eventTime: g, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, m === null ? (c = m = g, s = h) : m = m.next = g, i |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (1);
    if (m === null && (s = h), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else
      o === null && (l.shared.lanes = 0);
    Ot |= i, e.lanes = i, e.memoizedState = h;
  }
}
function Du(e, t, n) {
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
var _a = new Es.Component().refs;
function Do(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : B({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hl = { isMounted: function(e) {
  return (e = e._reactInternals) ? It(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ue(), l = pt(e), o = Ke(r, l);
  o.payload = t, n != null && (o.callback = n), t = ft(e, o, l), t !== null && ($e(t, e, l, r), Lr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ue(), l = pt(e), o = Ke(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ft(e, o, l), t !== null && ($e(t, e, l, r), Lr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ue(), r = pt(e), l = Ke(n, r);
  l.tag = 2, t != null && (l.callback = t), t = ft(e, l, r), t !== null && ($e(t, e, r, n), Lr(t, e, r));
} };
function Iu(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Qn(n, r) || !Qn(l, o) : !0;
}
function Na(e, t, n) {
  var r = !1, l = vt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = _e(o) : (l = pe(t) ? Lt : oe.current, r = t.contextTypes, o = (r = r != null) ? rn(e, l) : vt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Mu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hl.enqueueReplaceState(t, t.state, null);
}
function Io(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = _a, zi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = _e(o) : (o = pe(t) ? Lt : oe.current, l.context = rn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Do(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && hl.enqueueReplaceState(l, l.state, null), br(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function kn(e, t, n) {
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
        u === _a && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(y(284));
    if (!n._owner)
      throw Error(y(290, e));
  }
  return e;
}
function kr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Fu(e) {
  var t = e._init;
  return t(e._payload);
}
function Pa(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e)
      return null;
    for (; a !== null; )
      t(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = mt(f, a), f.index = 0, f.sibling = null, f;
  }
  function o(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = bl(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var S = d.type;
    return S === Ut ? m(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === S || typeof S == "object" && S !== null && S.$$typeof === et && Fu(S) === a.type) ? (v = l(a, d.props), v.ref = kn(f, a, d), v.return = f, v) : (v = Ir(d.type, d.key, d.props, null, f.mode, v), v.ref = kn(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = eo(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function m(f, a, d, v, S) {
    return a === null || a.tag !== 7 ? (a = Tt(d, f.mode, v, S), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function h(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number")
      return a = bl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case ar:
          return d = Ir(a.type, a.key, a.props, null, f.mode, d), d.ref = kn(f, null, a), d.return = f, d;
        case Ft:
          return a = eo(a, f.mode, d), a.return = f, a;
        case et:
          var v = a._init;
          return h(f, v(a._payload), d);
      }
      if (Cn(a) || hn(a))
        return a = Tt(a, f.mode, d, null), a.return = f, a;
      kr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var S = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return S !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          return d.key === S ? s(f, a, d, v) : null;
        case Ft:
          return d.key === S ? c(f, a, d, v) : null;
        case et:
          return S = d._init, p(
            f,
            a,
            S(d._payload),
            v
          );
      }
      if (Cn(d) || hn(d))
        return S !== null ? null : m(f, a, d, v, null);
      kr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, S) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return f = f.get(d) || null, u(a, f, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ar:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, S);
        case Ft:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, S);
        case et:
          var C = v._init;
          return g(f, a, d, C(v._payload), S);
      }
      if (Cn(v) || hn(v))
        return f = f.get(d) || null, m(a, f, v, S, null);
      kr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (var S = null, C = null, _ = a, N = a = 0, H = null; _ !== null && N < d.length; N++) {
      _.index > N ? (H = _, _ = null) : H = _.sibling;
      var j = p(f, _, d[N], v);
      if (j === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && j.alternate === null && t(f, _), a = o(j, a, N), C === null ? S = j : C.sibling = j, C = j, _ = H;
    }
    if (N === d.length)
      return n(f, _), U && Et(f, N), S;
    if (_ === null) {
      for (; N < d.length; N++)
        _ = h(f, d[N], v), _ !== null && (a = o(_, a, N), C === null ? S = _ : C.sibling = _, C = _);
      return U && Et(f, N), S;
    }
    for (_ = r(f, _); N < d.length; N++)
      H = g(_, f, N, d[N], v), H !== null && (e && H.alternate !== null && _.delete(H.key === null ? N : H.key), a = o(H, a, N), C === null ? S = H : C.sibling = H, C = H);
    return e && _.forEach(function(Pe) {
      return t(f, Pe);
    }), U && Et(f, N), S;
  }
  function k(f, a, d, v) {
    var S = hn(d);
    if (typeof S != "function")
      throw Error(y(150));
    if (d = S.call(d), d == null)
      throw Error(y(151));
    for (var C = S = null, _ = a, N = a = 0, H = null, j = d.next(); _ !== null && !j.done; N++, j = d.next()) {
      _.index > N ? (H = _, _ = null) : H = _.sibling;
      var Pe = p(f, _, j.value, v);
      if (Pe === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && Pe.alternate === null && t(f, _), a = o(Pe, a, N), C === null ? S = Pe : C.sibling = Pe, C = Pe, _ = H;
    }
    if (j.done)
      return n(
        f,
        _
      ), U && Et(f, N), S;
    if (_ === null) {
      for (; !j.done; N++, j = d.next())
        j = h(f, j.value, v), j !== null && (a = o(j, a, N), C === null ? S = j : C.sibling = j, C = j);
      return U && Et(f, N), S;
    }
    for (_ = r(f, _); !j.done; N++, j = d.next())
      j = g(_, f, N, j.value, v), j !== null && (e && j.alternate !== null && _.delete(j.key === null ? N : j.key), a = o(j, a, N), C === null ? S = j : C.sibling = j, C = j);
    return e && _.forEach(function(pn) {
      return t(f, pn);
    }), U && Et(f, N), S;
  }
  function D(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === Ut && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          e: {
            for (var S = d.key, C = a; C !== null; ) {
              if (C.key === S) {
                if (S = d.type, S === Ut) {
                  if (C.tag === 7) {
                    n(f, C.sibling), a = l(C, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (C.elementType === S || typeof S == "object" && S !== null && S.$$typeof === et && Fu(S) === C.type) {
                  n(f, C.sibling), a = l(C, d.props), a.ref = kn(f, C, d), a.return = f, f = a;
                  break e;
                }
                n(f, C);
                break;
              } else
                t(f, C);
              C = C.sibling;
            }
            d.type === Ut ? (a = Tt(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = Ir(d.type, d.key, d.props, null, f.mode, v), v.ref = kn(f, a, d), v.return = f, f = v);
          }
          return i(f);
        case Ft:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else
                t(f, a);
              a = a.sibling;
            }
            a = eo(d, f.mode, v), a.return = f, f = a;
          }
          return i(f);
        case et:
          return C = d._init, D(f, a, C(d._payload), v);
      }
      if (Cn(d))
        return w(f, a, d, v);
      if (hn(d))
        return k(f, a, d, v);
      kr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = bl(d, f.mode, v), a.return = f, f = a), i(f)) : n(f, a);
  }
  return D;
}
var on = Pa(!0), za = Pa(!1), lr = {}, Ae = gt(lr), Yn = gt(lr), Xn = gt(lr);
function Pt(e) {
  if (e === lr)
    throw Error(y(174));
  return e;
}
function Ti(e, t) {
  switch (I(Xn, t), I(Yn, e), I(Ae, lr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : mo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = mo(t, e);
  }
  F(Ae), I(Ae, t);
}
function un() {
  F(Ae), F(Yn), F(Xn);
}
function Ta(e) {
  Pt(Xn.current);
  var t = Pt(Ae.current), n = mo(t, e.type);
  t !== n && (I(Yn, e), I(Ae, n));
}
function Li(e) {
  Yn.current === e && (F(Ae), F(Yn));
}
var A = gt(0);
function el(e) {
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
var Yl = [];
function ji() {
  for (var e = 0; e < Yl.length; e++)
    Yl[e]._workInProgressVersionPrimary = null;
  Yl.length = 0;
}
var jr = qe.ReactCurrentDispatcher, Xl = qe.ReactCurrentBatchConfig, Rt = 0, V = null, X = null, J = null, tl = !1, Rn = !1, Gn = 0, Sd = 0;
function ne() {
  throw Error(y(321));
}
function Ri(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n]))
      return !1;
  return !0;
}
function Oi(e, t, n, r, l, o) {
  if (Rt = o, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, jr.current = e === null || e.memoizedState === null ? _d : Nd, e = n(r, l), Rn) {
    o = 0;
    do {
      if (Rn = !1, Gn = 0, 25 <= o)
        throw Error(y(301));
      o += 1, J = X = null, t.updateQueue = null, jr.current = Pd, e = n(r, l);
    } while (Rn);
  }
  if (jr.current = nl, t = X !== null && X.next !== null, Rt = 0, J = X = V = null, tl = !1, t)
    throw Error(y(300));
  return e;
}
function $i() {
  var e = Gn !== 0;
  return Gn = 0, e;
}
function Me() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return J === null ? V.memoizedState = J = e : J = J.next = e, J;
}
function Ne() {
  if (X === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = X.next;
  var t = J === null ? V.memoizedState : J.next;
  if (t !== null)
    J = t, X = e;
  else {
    if (e === null)
      throw Error(y(310));
    X = e, e = { memoizedState: X.memoizedState, baseState: X.baseState, baseQueue: X.baseQueue, queue: X.queue, next: null }, J === null ? V.memoizedState = J = e : J = J.next = e;
  }
  return J;
}
function Zn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Gl(e) {
  var t = Ne(), n = t.queue;
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
    var u = i = null, s = null, c = o;
    do {
      var m = c.lane;
      if ((Rt & m) === m)
        s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = h, i = r) : s = s.next = h, V.lanes |= m, Ot |= m;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? i = r : s.next = u, De(r, t.memoizedState) || (fe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, V.lanes |= o, Ot |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Zl(e) {
  var t = Ne(), n = t.queue;
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
    De(o, t.memoizedState) || (fe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function La() {
}
function ja(e, t) {
  var n = V, r = Ne(), l = t(), o = !De(r.memoizedState, l);
  if (o && (r.memoizedState = l, fe = !0), r = r.queue, Di($a.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || J !== null && J.memoizedState.tag & 1) {
    if (n.flags |= 2048, Jn(9, Oa.bind(null, n, r, l, t), void 0, null), q === null)
      throw Error(y(349));
    Rt & 30 || Ra(n, t, l);
  }
  return l;
}
function Ra(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Oa(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Da(t) && Ia(e);
}
function $a(e, t, n) {
  return n(function() {
    Da(t) && Ia(e);
  });
}
function Da(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function Ia(e) {
  var t = Ge(e, 1);
  t !== null && $e(t, e, 1, -1);
}
function Uu(e) {
  var t = Me();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Zn, lastRenderedState: e }, t.queue = e, e = e.dispatch = Cd.bind(null, V, e), [t.memoizedState, e];
}
function Jn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ma() {
  return Ne().memoizedState;
}
function Rr(e, t, n, r) {
  var l = Me();
  V.flags |= e, l.memoizedState = Jn(1 | t, n, void 0, r === void 0 ? null : r);
}
function vl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (o = i.destroy, r !== null && Ri(r, i.deps)) {
      l.memoizedState = Jn(t, n, o, r);
      return;
    }
  }
  V.flags |= e, l.memoizedState = Jn(1 | t, n, o, r);
}
function Au(e, t) {
  return Rr(8390656, 8, e, t);
}
function Di(e, t) {
  return vl(2048, 8, e, t);
}
function Fa(e, t) {
  return vl(4, 2, e, t);
}
function Ua(e, t) {
  return vl(4, 4, e, t);
}
function Aa(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Va(e, t, n) {
  return n = n != null ? n.concat([e]) : null, vl(4, 4, Aa.bind(null, t, e), n);
}
function Ii() {
}
function Ba(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ri(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Qa(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ri(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ha(e, t, n) {
  return Rt & 21 ? (De(n, t) || (n = Ys(), V.lanes |= n, Ot |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n);
}
function xd(e, t) {
  var n = O;
  O = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Xl.transition;
  Xl.transition = {};
  try {
    e(!1), t();
  } finally {
    O = n, Xl.transition = r;
  }
}
function Wa() {
  return Ne().memoizedState;
}
function Ed(e, t, n) {
  var r = pt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ka(e))
    Ya(t, n);
  else if (n = Ea(e, t, n, r), n !== null) {
    var l = ue();
    $e(n, e, r, l), Xa(n, t, r);
  }
}
function Cd(e, t, n) {
  var r = pt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ka(e))
    Ya(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, De(u, i)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Pi(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = Ea(e, t, l, r), n !== null && (l = ue(), $e(n, e, r, l), Xa(n, t, r));
  }
}
function Ka(e) {
  var t = e.alternate;
  return e === V || t !== null && t === V;
}
function Ya(e, t) {
  Rn = tl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Xa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, pi(e, n);
  }
}
var nl = { readContext: _e, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 }, _d = { readContext: _e, useCallback: function(e, t) {
  return Me().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: _e, useEffect: Au, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Rr(
    4194308,
    4,
    Aa.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Rr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Rr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Me();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Me();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ed.bind(null, V, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Me();
  return e = { current: e }, t.memoizedState = e;
}, useState: Uu, useDebugValue: Ii, useDeferredValue: function(e) {
  return Me().memoizedState = e;
}, useTransition: function() {
  var e = Uu(!1), t = e[0];
  return e = xd.bind(null, e[1]), Me().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = V, l = Me();
  if (U) {
    if (n === void 0)
      throw Error(y(407));
    n = n();
  } else {
    if (n = t(), q === null)
      throw Error(y(349));
    Rt & 30 || Ra(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Au($a.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Jn(9, Oa.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Me(), t = q.identifierPrefix;
  if (U) {
    var n = We, r = He;
    n = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Gn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Sd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Nd = {
  readContext: _e,
  useCallback: Ba,
  useContext: _e,
  useEffect: Di,
  useImperativeHandle: Va,
  useInsertionEffect: Fa,
  useLayoutEffect: Ua,
  useMemo: Qa,
  useReducer: Gl,
  useRef: Ma,
  useState: function() {
    return Gl(Zn);
  },
  useDebugValue: Ii,
  useDeferredValue: function(e) {
    var t = Ne();
    return Ha(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = Gl(Zn)[0], t = Ne().memoizedState;
    return [e, t];
  },
  useMutableSource: La,
  useSyncExternalStore: ja,
  useId: Wa,
  unstable_isNewReconciler: !1
}, Pd = { readContext: _e, useCallback: Ba, useContext: _e, useEffect: Di, useImperativeHandle: Va, useInsertionEffect: Fa, useLayoutEffect: Ua, useMemo: Qa, useReducer: Zl, useRef: Ma, useState: function() {
  return Zl(Zn);
}, useDebugValue: Ii, useDeferredValue: function(e) {
  var t = Ne();
  return X === null ? t.memoizedState = e : Ha(t, X.memoizedState, e);
}, useTransition: function() {
  var e = Zl(Zn)[0], t = Ne().memoizedState;
  return [e, t];
}, useMutableSource: La, useSyncExternalStore: ja, useId: Wa, unstable_isNewReconciler: !1 };
function sn(e, t) {
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
function Jl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Mo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var zd = typeof WeakMap == "function" ? WeakMap : Map;
function Ga(e, t, n) {
  n = Ke(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ll || (ll = !0, Yo = r), Mo(e, t);
  }, n;
}
function Za(e, t, n) {
  n = Ke(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Mo(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Mo(e, t), typeof r != "function" && (dt === null ? dt = /* @__PURE__ */ new Set([this]) : dt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Vu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new zd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Bd.bind(null, e, t, n), t.then(e, e));
}
function Bu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Qu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ke(-1, 1), t.tag = 2, ft(n, t, 1))), n.lanes |= 1), e);
}
var Td = qe.ReactCurrentOwner, fe = !1;
function ie(e, t, n, r) {
  t.child = e === null ? za(t, null, n, r) : on(t, e.child, n, r);
}
function Hu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return en(t, l), r = Oi(e, t, n, r, o, l), n = $i(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ze(e, t, l)) : (U && n && Si(t), t.flags |= 1, ie(e, t, r, l), t.child);
}
function Wu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Hi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ja(e, t, o, r, l)) : (e = Ir(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Qn, n(i, r) && e.ref === t.ref)
      return Ze(e, t, l);
  }
  return t.flags |= 1, e = mt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ja(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Qn(o, r) && e.ref === t.ref)
      if (fe = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (fe = !0);
      else
        return t.lanes = e.lanes, Ze(e, t, l);
  }
  return Fo(e, t, n, r, l);
}
function qa(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, I(Gt, he), he |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, I(Gt, he), he |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, I(Gt, he), he |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, I(Gt, he), he |= r;
  return ie(e, t, l, n), t.child;
}
function ba(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Fo(e, t, n, r, l) {
  var o = pe(n) ? Lt : oe.current;
  return o = rn(t, o), en(t, l), n = Oi(e, t, n, r, o, l), r = $i(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ze(e, t, l)) : (U && r && Si(t), t.flags |= 1, ie(e, t, n, l), t.child);
}
function Ku(e, t, n, r, l) {
  if (pe(n)) {
    var o = !0;
    Xr(t);
  } else
    o = !1;
  if (en(t, l), t.stateNode === null)
    Or(e, t), Na(t, n, r), Io(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = _e(c) : (c = pe(n) ? Lt : oe.current, c = rn(t, c));
    var m = n.getDerivedStateFromProps, h = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && Mu(t, i, r, c), tt = !1;
    var p = t.memoizedState;
    i.state = p, br(t, r, i, l), s = t.memoizedState, u !== r || p !== s || de.current || tt ? (typeof m == "function" && (Do(t, n, m, r), s = t.memoizedState), (u = tt || Iu(t, n, u, r, p, s, c)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Ca(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : Te(t.type, u), i.props = c, h = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = _e(s) : (s = pe(n) ? Lt : oe.current, s = rn(t, s));
    var g = n.getDerivedStateFromProps;
    (m = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || p !== s) && Mu(t, i, r, s), tt = !1, p = t.memoizedState, i.state = p, br(t, r, i, l);
    var w = t.memoizedState;
    u !== h || p !== w || de.current || tt ? (typeof g == "function" && (Do(t, n, g, r), w = t.memoizedState), (c = tt || Iu(t, n, c, r, p, w, s) || !1) ? (m || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Uo(e, t, n, r, o, l);
}
function Uo(e, t, n, r, l, o) {
  ba(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return l && ju(t, n, !1), Ze(e, t, o);
  r = t.stateNode, Td.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = on(t, e.child, null, o), t.child = on(t, null, u, o)) : ie(e, t, u, o), t.memoizedState = r.state, l && ju(t, n, !0), t.child;
}
function ec(e) {
  var t = e.stateNode;
  t.pendingContext ? Lu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Lu(e, t.context, !1), Ti(e, t.containerInfo);
}
function Yu(e, t, n, r, l) {
  return ln(), Ei(l), t.flags |= 256, ie(e, t, n, r), t.child;
}
var Ao = { dehydrated: null, treeContext: null, retryLane: 0 };
function Vo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function tc(e, t, n) {
  var r = t.pendingProps, l = A.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), I(A, l & 1), e === null)
    return Oo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = wl(i, r, 0, null), e = Tt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Vo(n), t.memoizedState = Ao, e) : Mi(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return Ld(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = mt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = mt(u, o) : (o = Tt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Vo(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Ao, r;
  }
  return o = e.child, e = o.sibling, r = mt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Mi(e, t) {
  return t = wl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Sr(e, t, n, r) {
  return r !== null && Ei(r), on(t, e.child, null, n), e = Mi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Ld(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Jl(Error(y(422))), Sr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = wl({ mode: "visible", children: r.children }, l, 0, null), o = Tt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && on(t, e.child, null, i), t.child.memoizedState = Vo(i), t.memoizedState = Ao, o);
  if (!(t.mode & 1))
    return Sr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(y(419)), r = Jl(o, r, void 0), Sr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, fe || u) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ge(e, l), $e(r, e, l, -1));
    }
    return Qi(), r = Jl(Error(y(421))), Sr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Qd.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ve = ct(l.nextSibling), ye = t, U = !0, je = null, e !== null && (Se[xe++] = He, Se[xe++] = We, Se[xe++] = jt, He = e.id, We = e.overflow, jt = t), t = Mi(t, r.children), t.flags |= 4096, t);
}
function Xu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), $o(e.return, t, n);
}
function ql(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function nc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (ie(e, t, r.children, n), r = A.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Xu(e, n, t);
          else if (e.tag === 19)
            Xu(e, n, t);
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
  if (I(A, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && el(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ql(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && el(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ql(t, !0, n, null, o);
        break;
      case "together":
        ql(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Or(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ze(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ot |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(y(153));
  if (t.child !== null) {
    for (e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = mt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function jd(e, t, n) {
  switch (t.tag) {
    case 3:
      ec(t), ln();
      break;
    case 5:
      Ta(t);
      break;
    case 1:
      pe(t.type) && Xr(t);
      break;
    case 4:
      Ti(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      I(Jr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (I(A, A.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? tc(e, t, n) : (I(A, A.current & 1), e = Ze(e, t, n), e !== null ? e.sibling : null);
      I(A, A.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return nc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), I(A, A.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, qa(e, t, n);
  }
  return Ze(e, t, n);
}
var rc, Bo, lc, oc;
rc = function(e, t) {
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
Bo = function() {
};
lc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Pt(Ae.current);
    var o = null;
    switch (n) {
      case "input":
        l = ao(e, l), r = ao(e, r), o = [];
        break;
      case "select":
        l = B({}, l, { value: void 0 }), r = B({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = po(e, l), r = po(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Kr);
    }
    ho(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (In.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null))
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in s)
              s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
          } else
            n || (o || (o = []), o.push(
              c,
              n
            )), n = s;
        else
          c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (In.hasOwnProperty(c) ? (s != null && c === "onScroll" && M("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
oc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sn(e, t) {
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
  switch (xi(t), t.tag) {
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
      return pe(t.type) && Yr(), re(t), null;
    case 3:
      return r = t.stateNode, un(), F(de), F(oe), ji(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (wr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, je !== null && (Zo(je), je = null))), Bo(e, t), re(t), null;
    case 5:
      Li(t);
      var l = Pt(Xn.current);
      if (n = t.type, e !== null && t.stateNode != null)
        lc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(y(166));
          return re(t), null;
        }
        if (e = Pt(Ae.current), wr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Fe] = t, r[Kn] = o, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < Nn.length; l++)
                M(Nn[l], r);
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
              ru(r, o), M("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, M("invalid", r);
              break;
            case "textarea":
              ou(r, o), M("invalid", r);
          }
          ho(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && gr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && gr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : In.hasOwnProperty(i) && u != null && i === "onScroll" && M("scroll", r);
            }
          switch (n) {
            case "input":
              cr(r), lu(r, o, !0);
              break;
            case "textarea":
              cr(r), iu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Kr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Rs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Fe] = t, e[Kn] = r, rc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = vo(n, r), n) {
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
                for (l = 0; l < Nn.length; l++)
                  M(Nn[l], e);
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
                ru(e, r), l = ao(e, r), M("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = B({}, r, { value: void 0 }), M("invalid", e);
                break;
              case "textarea":
                ou(e, r), l = po(e, r), M("invalid", e);
                break;
              default:
                l = r;
            }
            ho(n, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Ds(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Os(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Mn(e, s) : typeof s == "number" && Mn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (In.hasOwnProperty(o) ? s != null && o === "onScroll" && M("scroll", e) : s != null && ui(e, o, s, i));
              }
            switch (n) {
              case "input":
                cr(e), lu(e, r, !1);
                break;
              case "textarea":
                cr(e), iu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ht(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Zt(e, !!r.multiple, o, !1) : r.defaultValue != null && Zt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Kr);
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
        oc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(y(166));
        if (n = Pt(Xn.current), Pt(Ae.current), wr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Fe] = t, (o = r.nodeValue !== n) && (e = ye, e !== null))
            switch (e.tag) {
              case 3:
                gr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && gr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Fe] = t, t.stateNode = r;
      }
      return re(t), null;
    case 13:
      if (F(A), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && ve !== null && t.mode & 1 && !(t.flags & 128))
          xa(), ln(), t.flags |= 98560, o = !1;
        else if (o = wr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(y(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(y(317));
            o[Fe] = t;
          } else
            ln(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          re(t), o = !1;
        } else
          je !== null && (Zo(je), je = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || A.current & 1 ? G === 0 && (G = 3) : Qi())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
    case 4:
      return un(), Bo(e, t), e === null && Hn(t.stateNode.containerInfo), re(t), null;
    case 10:
      return Ni(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && Yr(), re(t), null;
    case 19:
      if (F(A), o = t.memoizedState, o === null)
        return re(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          Sn(o, !1);
        else {
          if (G !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = el(e), i !== null) {
                for (t.flags |= 128, Sn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return I(A, A.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && K() > an && (t.flags |= 128, r = !0, Sn(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = el(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Sn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !U)
              return re(t), null;
          } else
            2 * K() - o.renderingStartTime > an && n !== 1073741824 && (t.flags |= 128, r = !0, Sn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = K(), t.sibling = null, n = A.current, I(A, r ? n & 1 | 2 : n & 1), t) : (re(t), null);
    case 22:
    case 23:
      return Bi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function Od(e, t) {
  switch (xi(t), t.tag) {
    case 1:
      return pe(t.type) && Yr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return un(), F(de), F(oe), ji(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Li(t), null;
    case 13:
      if (F(A), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(y(340));
        ln();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return F(A), null;
    case 4:
      return un(), null;
    case 10:
      return Ni(t.type._context), null;
    case 22:
    case 23:
      return Bi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xr = !1, le = !1, $d = typeof WeakSet == "function" ? WeakSet : Set, x = null;
function Xt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else
      n.current = null;
}
function Qo(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var Gu = !1;
function Dd(e, t) {
  if (No = Qr, e = aa(), ki(e)) {
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
          var i = 0, u = -1, s = -1, c = 0, m = 0, h = e, p = null;
          t:
            for (; ; ) {
              for (var g; h !== n || l !== 0 && h.nodeType !== 3 || (u = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (s = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (g = h.firstChild) !== null; )
                p = h, h = g;
              for (; ; ) {
                if (h === e)
                  break t;
                if (p === n && ++c === l && (u = i), p === o && ++m === r && (s = i), (g = h.nextSibling) !== null)
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
  for (Po = { focusedElem: e, selectionRange: n }, Qr = !1, x = t; x !== null; )
    if (t = x, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, x = e;
    else
      for (; x !== null; ) {
        t = x;
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
                  var k = w.memoizedProps, D = w.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Te(t.type, k), D);
                  f.__reactInternalSnapshotBeforeUpdate = a;
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
          Q(t, t.return, v);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, x = e;
          break;
        }
        x = t.return;
      }
  return w = Gu, Gu = !1, w;
}
function On(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Qo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function yl(e, t) {
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
function Ho(e) {
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
function ic(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ic(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Fe], delete t[Kn], delete t[Lo], delete t[yd], delete t[gd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function uc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zu(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || uc(e.return))
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
function Wo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Kr));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Wo(e, t, n), e = e.sibling; e !== null; )
      Wo(e, t, n), e = e.sibling;
}
function Ko(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ko(e, t, n), e = e.sibling; e !== null; )
      Ko(e, t, n), e = e.sibling;
}
var b = null, Le = !1;
function be(e, t, n) {
  for (n = n.child; n !== null; )
    sc(e, t, n), n = n.sibling;
}
function sc(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(al, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      le || Xt(n, t);
    case 6:
      var r = b, l = Le;
      b = null, be(e, t, n), b = r, Le = l, b !== null && (Le ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null && (Le ? (e = b, n = n.stateNode, e.nodeType === 8 ? Wl(e.parentNode, n) : e.nodeType === 1 && Wl(e, n), Vn(e)) : Wl(b, n.stateNode));
      break;
    case 4:
      r = b, l = Le, b = n.stateNode.containerInfo, Le = !0, be(e, t, n), b = r, Le = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Qo(n, t, i), l = l.next;
        } while (l !== r);
      }
      be(e, t, n);
      break;
    case 1:
      if (!le && (Xt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          Q(n, t, u);
        }
      be(e, t, n);
      break;
    case 21:
      be(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (le = (r = le) || n.memoizedState !== null, be(e, t, n), le = r) : be(e, t, n);
      break;
    default:
      be(e, t, n);
  }
}
function Ju(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new $d()), t.forEach(function(r) {
      var l = Hd.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function ze(e, t) {
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
                b = u.stateNode, Le = !1;
                break e;
              case 3:
                b = u.stateNode.containerInfo, Le = !0;
                break e;
              case 4:
                b = u.stateNode.containerInfo, Le = !0;
                break e;
            }
            u = u.return;
          }
        if (b === null)
          throw Error(y(160));
        sc(o, i, l), b = null, Le = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (c) {
        Q(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      ac(t, e), t = t.sibling;
}
function ac(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ze(t, e), Ie(e), r & 4) {
        try {
          On(3, e, e.return), yl(3, e);
        } catch (k) {
          Q(e, e.return, k);
        }
        try {
          On(5, e, e.return);
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 1:
      ze(t, e), Ie(e), r & 512 && n !== null && Xt(n, n.return);
      break;
    case 5:
      if (ze(t, e), Ie(e), r & 512 && n !== null && Xt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Mn(l, "");
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && Ls(l, o), vo(u, i);
            var c = vo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var m = s[i], h = s[i + 1];
              m === "style" ? Ds(l, h) : m === "dangerouslySetInnerHTML" ? Os(l, h) : m === "children" ? Mn(l, h) : ui(l, m, h, c);
            }
            switch (u) {
              case "input":
                co(l, o);
                break;
              case "textarea":
                js(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null ? Zt(l, !!o.multiple, g, !1) : p !== !!o.multiple && (o.defaultValue != null ? Zt(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Zt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Kn] = o;
          } catch (k) {
            Q(e, e.return, k);
          }
      }
      break;
    case 6:
      if (ze(t, e), Ie(e), r & 4) {
        if (e.stateNode === null)
          throw Error(y(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 3:
      if (ze(t, e), Ie(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Vn(t.containerInfo);
        } catch (k) {
          Q(e, e.return, k);
        }
      break;
    case 4:
      ze(t, e), Ie(e);
      break;
    case 13:
      ze(t, e), Ie(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ai = K())), r & 4 && Ju(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (c = le) || m, ze(t, e), le = c) : ze(t, e), Ie(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1)
          for (x = e, m = e.child; m !== null; ) {
            for (h = x = m; x !== null; ) {
              switch (p = x, g = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  On(4, p, p.return);
                  break;
                case 1:
                  Xt(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                    } catch (k) {
                      Q(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Xt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    bu(h);
                    continue;
                  }
              }
              g !== null ? (g.return = p, x = g) : bu(h);
            }
            m = m.sibling;
          }
        e:
          for (m = null, h = e; ; ) {
            if (h.tag === 5) {
              if (m === null) {
                m = h;
                try {
                  l = h.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = $s("display", i));
                } catch (k) {
                  Q(e, e.return, k);
                }
              }
            } else if (h.tag === 6) {
              if (m === null)
                try {
                  h.stateNode.nodeValue = c ? "" : h.memoizedProps;
                } catch (k) {
                  Q(e, e.return, k);
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
      ze(t, e), Ie(e), r & 4 && Ju(e);
      break;
    case 21:
      break;
    default:
      ze(
        t,
        e
      ), Ie(e);
  }
}
function Ie(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (uc(n)) {
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
          r.flags & 32 && (Mn(l, ""), r.flags &= -33);
          var o = Zu(e);
          Ko(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Zu(e);
          Wo(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      Q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Id(e, t, n) {
  x = e, cc(e);
}
function cc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || xr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || le;
        u = xr;
        var c = le;
        if (xr = i, (le = s) && !c)
          for (x = l; x !== null; )
            i = x, s = i.child, i.tag === 22 && i.memoizedState !== null ? es(l) : s !== null ? (s.return = i, x = s) : es(l);
        for (; o !== null; )
          x = o, cc(o), o = o.sibling;
        x = l, xr = u, le = c;
      }
      qu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, x = o) : qu(e);
  }
}
function qu(e) {
  for (; x !== null; ) {
    var t = x;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || yl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Du(t, o, r);
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
                Du(t, i, n);
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
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Vn(h);
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
        le || t.flags & 512 && Ho(t);
      } catch (p) {
        Q(t, t.return, p);
      }
    }
    if (t === e) {
      x = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, x = n;
      break;
    }
    x = t.return;
  }
}
function bu(e) {
  for (; x !== null; ) {
    var t = x;
    if (t === e) {
      x = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, x = n;
      break;
    }
    x = t.return;
  }
}
function es(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yl(4, t);
          } catch (s) {
            Q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Q(t, l, s);
            }
          }
          var o = t.return;
          try {
            Ho(t);
          } catch (s) {
            Q(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ho(t);
          } catch (s) {
            Q(t, i, s);
          }
      }
    } catch (s) {
      Q(t, t.return, s);
    }
    if (t === e) {
      x = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, x = u;
      break;
    }
    x = t.return;
  }
}
var Md = Math.ceil, rl = qe.ReactCurrentDispatcher, Fi = qe.ReactCurrentOwner, Ce = qe.ReactCurrentBatchConfig, R = 0, q = null, Y = null, ee = 0, he = 0, Gt = gt(0), G = 0, qn = null, Ot = 0, gl = 0, Ui = 0, $n = null, ce = null, Ai = 0, an = 1 / 0, Be = null, ll = !1, Yo = null, dt = null, Er = !1, it = null, ol = 0, Dn = 0, Xo = null, $r = -1, Dr = 0;
function ue() {
  return R & 6 ? K() : $r !== -1 ? $r : $r = K();
}
function pt(e) {
  return e.mode & 1 ? R & 2 && ee !== 0 ? ee & -ee : kd.transition !== null ? (Dr === 0 && (Dr = Ys()), Dr) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ea(e.type)), e) : 1;
}
function $e(e, t, n, r) {
  if (50 < Dn)
    throw Dn = 0, Xo = null, Error(y(185));
  tr(e, n, r), (!(R & 2) || e !== q) && (e === q && (!(R & 2) && (gl |= n), G === 4 && rt(e, ee)), me(e, r), n === 1 && R === 0 && !(t.mode & 1) && (an = K() + 500, ml && wt()));
}
function me(e, t) {
  var n = e.callbackNode;
  kf(e, t);
  var r = Br(e, e === q ? ee : 0);
  if (r === 0)
    n !== null && au(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && au(n), t === 1)
      e.tag === 0 ? wd(ts.bind(null, e)) : wa(ts.bind(null, e)), hd(function() {
        !(R & 6) && wt();
      }), n = null;
    else {
      switch (Xs(r)) {
        case 1:
          n = di;
          break;
        case 4:
          n = Ws;
          break;
        case 16:
          n = Vr;
          break;
        case 536870912:
          n = Ks;
          break;
        default:
          n = Vr;
      }
      n = gc(n, fc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function fc(e, t) {
  if ($r = -1, Dr = 0, R & 6)
    throw Error(y(327));
  var n = e.callbackNode;
  if (tn() && e.callbackNode !== n)
    return null;
  var r = Br(e, e === q ? ee : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = il(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = pc();
    (q !== e || ee !== t) && (Be = null, an = K() + 500, zt(e, t));
    do
      try {
        Ad();
        break;
      } catch (u) {
        dc(e, u);
      }
    while (1);
    _i(), rl.current = o, R = l, Y !== null ? t = 0 : (q = null, ee = 0, t = G);
  }
  if (t !== 0) {
    if (t === 2 && (l = So(e), l !== 0 && (r = l, t = Go(e, l))), t === 1)
      throw n = qn, zt(e, 0), rt(e, r), me(e, K()), n;
    if (t === 6)
      rt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Fd(l) && (t = il(e, r), t === 2 && (o = So(e), o !== 0 && (r = o, t = Go(e, o))), t === 1))
        throw n = qn, zt(e, 0), rt(e, r), me(e, K()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Ct(e, ce, Be);
          break;
        case 3:
          if (rt(e, r), (r & 130023424) === r && (t = Ai + 500 - K(), 10 < t)) {
            if (Br(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ue(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = To(Ct.bind(null, e, ce, Be), t);
            break;
          }
          Ct(e, ce, Be);
          break;
        case 4:
          if (rt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Oe(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Md(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = To(Ct.bind(null, e, ce, Be), r);
            break;
          }
          Ct(e, ce, Be);
          break;
        case 5:
          Ct(e, ce, Be);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? fc.bind(null, e) : null;
}
function Go(e, t) {
  var n = $n;
  return e.current.memoizedState.isDehydrated && (zt(e, t).flags |= 256), e = il(e, t), e !== 2 && (t = ce, ce = n, t !== null && Zo(t)), e;
}
function Zo(e) {
  ce === null ? ce = e : ce.push.apply(ce, e);
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
            if (!De(o(), l))
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
function rt(e, t) {
  for (t &= ~Ui, t &= ~gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Oe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ts(e) {
  if (R & 6)
    throw Error(y(327));
  tn();
  var t = Br(e, 0);
  if (!(t & 1))
    return me(e, K()), null;
  var n = il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = So(e);
    r !== 0 && (t = r, n = Go(e, r));
  }
  if (n === 1)
    throw n = qn, zt(e, 0), rt(e, t), me(e, K()), n;
  if (n === 6)
    throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ct(e, ce, Be), me(e, K()), null;
}
function Vi(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    R = n, R === 0 && (an = K() + 500, ml && wt());
  }
}
function $t(e) {
  it !== null && it.tag === 0 && !(R & 6) && tn();
  var t = R;
  R |= 1;
  var n = Ce.transition, r = O;
  try {
    if (Ce.transition = null, O = 1, e)
      return e();
  } finally {
    O = r, Ce.transition = n, R = t, !(R & 6) && wt();
  }
}
function Bi() {
  he = Gt.current, F(Gt);
}
function zt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, md(n)), Y !== null)
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch (xi(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Yr();
          break;
        case 3:
          un(), F(de), F(oe), ji();
          break;
        case 5:
          Li(r);
          break;
        case 4:
          un();
          break;
        case 13:
          F(A);
          break;
        case 19:
          F(A);
          break;
        case 10:
          Ni(r.type._context);
          break;
        case 22:
        case 23:
          Bi();
      }
      n = n.return;
    }
  if (q = e, Y = e = mt(e.current, null), ee = he = t, G = 0, qn = null, Ui = gl = Ot = 0, ce = $n = null, Nt !== null) {
    for (t = 0; t < Nt.length; t++)
      if (n = Nt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
    Nt = null;
  }
  return e;
}
function dc(e, t) {
  do {
    var n = Y;
    try {
      if (_i(), jr.current = nl, tl) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        tl = !1;
      }
      if (Rt = 0, J = X = V = null, Rn = !1, Gn = 0, Fi.current = null, n === null || n.return === null) {
        G = 1, qn = t, Y = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = ee, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, m = u, h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var g = Bu(i);
          if (g !== null) {
            g.flags &= -257, Qu(g, i, u, o, t), g.mode & 1 && Vu(o, c, t), t = g, s = c;
            var w = t.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), t.updateQueue = k;
            } else
              w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Vu(o, c, t), Qi();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var D = Bu(i);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256), Qu(D, i, u, o, t), Ei(sn(s, u));
            break e;
          }
        }
        o = s = sn(s, u), G !== 4 && (G = 2), $n === null ? $n = [o] : $n.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Ga(o, s, t);
              $u(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (dt === null || !dt.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = Za(o, u, t);
                $u(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      hc(n);
    } catch (S) {
      t = S, Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function pc() {
  var e = rl.current;
  return rl.current = nl, e === null ? nl : e;
}
function Qi() {
  (G === 0 || G === 3 || G === 2) && (G = 4), q === null || !(Ot & 268435455) && !(gl & 268435455) || rt(q, ee);
}
function il(e, t) {
  var n = R;
  R |= 2;
  var r = pc();
  (q !== e || ee !== t) && (Be = null, zt(e, t));
  do
    try {
      Ud();
      break;
    } catch (l) {
      dc(e, l);
    }
  while (1);
  if (_i(), R = n, rl.current = r, Y !== null)
    throw Error(y(261));
  return q = null, ee = 0, G;
}
function Ud() {
  for (; Y !== null; )
    mc(Y);
}
function Ad() {
  for (; Y !== null && !ff(); )
    mc(Y);
}
function mc(e) {
  var t = yc(e.alternate, e, he);
  e.memoizedProps = e.pendingProps, t === null ? hc(e) : Y = t, Fi.current = null;
}
function hc(e) {
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
    } else if (n = Rd(n, t, he), n !== null) {
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
function Ct(e, t, n) {
  var r = O, l = Ce.transition;
  try {
    Ce.transition = null, O = 1, Vd(e, t, n, r);
  } finally {
    Ce.transition = l, O = r;
  }
  return null;
}
function Vd(e, t, n, r) {
  do
    tn();
  while (it !== null);
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
  if (Sf(e, o), e === q && (Y = q = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Er || (Er = !0, gc(Vr, function() {
    return tn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ce.transition, Ce.transition = null;
    var i = O;
    O = 1;
    var u = R;
    R |= 4, Fi.current = null, Dd(e, n), ac(n, e), ud(Po), Qr = !!No, Po = No = null, e.current = n, Id(n), df(), R = u, O = i, Ce.transition = o;
  } else
    e.current = n;
  if (Er && (Er = !1, it = e, ol = l), o = e.pendingLanes, o === 0 && (dt = null), hf(n.stateNode), me(e, K()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ll)
    throw ll = !1, e = Yo, Yo = null, e;
  return ol & 1 && e.tag !== 0 && tn(), o = e.pendingLanes, o & 1 ? e === Xo ? Dn++ : (Dn = 0, Xo = e) : Dn = 0, wt(), null;
}
function tn() {
  if (it !== null) {
    var e = Xs(ol), t = Ce.transition, n = O;
    try {
      if (Ce.transition = null, O = 16 > e ? 16 : e, it === null)
        var r = !1;
      else {
        if (e = it, it = null, ol = 0, R & 6)
          throw Error(y(331));
        var l = R;
        for (R |= 4, x = e.current; x !== null; ) {
          var o = x, i = o.child;
          if (x.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (x = c; x !== null; ) {
                  var m = x;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      On(8, m, o);
                  }
                  var h = m.child;
                  if (h !== null)
                    h.return = m, x = h;
                  else
                    for (; x !== null; ) {
                      m = x;
                      var p = m.sibling, g = m.return;
                      if (ic(m), m === c) {
                        x = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = g, x = p;
                        break;
                      }
                      x = g;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var D = k.sibling;
                    k.sibling = null, k = D;
                  } while (k !== null);
                }
              }
              x = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, x = i;
          else
            e:
              for (; x !== null; ) {
                if (o = x, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      On(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  f.return = o.return, x = f;
                  break e;
                }
                x = o.return;
              }
        }
        var a = e.current;
        for (x = a; x !== null; ) {
          i = x;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null)
            d.return = i, x = d;
          else
            e:
              for (i = a; x !== null; ) {
                if (u = x, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yl(9, u);
                    }
                  } catch (S) {
                    Q(u, u.return, S);
                  }
                if (u === i) {
                  x = null;
                  break e;
                }
                var v = u.sibling;
                if (v !== null) {
                  v.return = u.return, x = v;
                  break e;
                }
                x = u.return;
              }
        }
        if (R = l, wt(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
          try {
            Ue.onPostCommitFiberRoot(al, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      O = n, Ce.transition = t;
    }
  }
  return !1;
}
function ns(e, t, n) {
  t = sn(n, t), t = Ga(e, t, 1), e = ft(e, t, 1), t = ue(), e !== null && (tr(e, 1, t), me(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3)
    ns(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ns(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (dt === null || !dt.has(r))) {
          e = sn(n, e), e = Za(t, e, 1), t = ft(t, e, 1), e = ue(), t !== null && (tr(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Bd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ue(), e.pingedLanes |= e.suspendedLanes & n, q === e && (ee & n) === n && (G === 4 || G === 3 && (ee & 130023424) === ee && 500 > K() - Ai ? zt(e, 0) : Ui |= n), me(e, t);
}
function vc(e, t) {
  t === 0 && (e.mode & 1 ? (t = pr, pr <<= 1, !(pr & 130023424) && (pr = 4194304)) : t = 1);
  var n = ue();
  e = Ge(e, t), e !== null && (tr(e, t, n), me(e, n));
}
function Qd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), vc(e, n);
}
function Hd(e, t) {
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
  r !== null && r.delete(t), vc(e, n);
}
var yc;
yc = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current)
      fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return fe = !1, jd(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else
    fe = !1, U && t.flags & 1048576 && ka(t, Zr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Or(e, t), e = t.pendingProps;
      var l = rn(t, oe.current);
      en(t, n), l = Oi(null, t, r, e, l, n);
      var o = $i();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pe(r) ? (o = !0, Xr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, zi(t), l.updater = hl, t.stateNode = l, l._reactInternals = t, Io(t, r, e, n), t = Uo(null, t, r, !0, o, n)) : (t.tag = 0, U && o && Si(t), ie(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Or(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Kd(r), e = Te(r, e), l) {
          case 0:
            t = Fo(null, t, r, e, n);
            break e;
          case 1:
            t = Ku(null, t, r, e, n);
            break e;
          case 11:
            t = Hu(null, t, r, e, n);
            break e;
          case 14:
            t = Wu(null, t, r, Te(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Fo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Ku(e, t, r, l, n);
    case 3:
      e: {
        if (ec(t), e === null)
          throw Error(y(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Ca(e, t), br(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = sn(Error(y(423)), t), t = Yu(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = sn(Error(y(424)), t), t = Yu(e, t, r, n, l);
            break e;
          } else
            for (ve = ct(t.stateNode.containerInfo.firstChild), ye = t, U = !0, je = null, n = za(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ln(), r === l) {
            t = Ze(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ta(t), e === null && Oo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, zo(r, l) ? i = null : o !== null && zo(r, o) && (t.flags |= 32), ba(e, t), ie(e, t, i, n), t.child;
    case 6:
      return e === null && Oo(t), null;
    case 13:
      return tc(e, t, n);
    case 4:
      return Ti(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = on(t, null, r, n) : ie(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Hu(e, t, r, l, n);
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, I(Jr, r._currentValue), r._currentValue = i, o !== null)
          if (De(o.value, i)) {
            if (o.children === l.children && !de.current) {
              t = Ze(e, t, n);
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
                      s = Ke(-1, n & -n), s.tag = 2;
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), $o(
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
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), $o(i, n, t), i = o.sibling;
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
        ie(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, en(t, n), l = _e(l), r = r(l), t.flags |= 1, ie(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Te(r, t.pendingProps), l = Te(r.type, l), Wu(e, t, r, l, n);
    case 15:
      return Ja(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Or(e, t), t.tag = 1, pe(r) ? (e = !0, Xr(t)) : e = !1, en(t, n), Na(t, r, l), Io(t, r, l, n), Uo(null, t, r, !0, e, n);
    case 19:
      return nc(e, t, n);
    case 22:
      return qa(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function gc(e, t) {
  return Hs(e, t);
}
function Wd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ee(e, t, n, r) {
  return new Wd(e, t, n, r);
}
function Hi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Kd(e) {
  if (typeof e == "function")
    return Hi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ai)
      return 11;
    if (e === ci)
      return 14;
  }
  return 2;
}
function mt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ee(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ir(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    Hi(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case Ut:
          return Tt(n.children, l, o, t);
        case si:
          i = 8, l |= 8;
          break;
        case oo:
          return e = Ee(12, n, t, l | 2), e.elementType = oo, e.lanes = o, e;
        case io:
          return e = Ee(13, n, t, l), e.elementType = io, e.lanes = o, e;
        case uo:
          return e = Ee(19, n, t, l), e.elementType = uo, e.lanes = o, e;
        case Ps:
          return wl(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case _s:
                i = 10;
                break e;
              case Ns:
                i = 9;
                break e;
              case ai:
                i = 11;
                break e;
              case ci:
                i = 14;
                break e;
              case et:
                i = 16, r = null;
                break e;
            }
          throw Error(y(130, e == null ? e : typeof e, ""));
      }
  return t = Ee(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Tt(e, t, n, r) {
  return e = Ee(7, e, r, t), e.lanes = n, e;
}
function wl(e, t, n, r) {
  return e = Ee(22, e, r, t), e.elementType = Ps, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function bl(e, t, n) {
  return e = Ee(6, e, null, t), e.lanes = n, e;
}
function eo(e, t, n) {
  return t = Ee(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Yd(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $l(0), this.expirationTimes = $l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $l(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Wi(e, t, n, r, l, o, i, u, s) {
  return e = new Yd(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ee(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, zi(o), e;
}
function Xd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ft, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function wc(e) {
  if (!e)
    return vt;
  e = e._reactInternals;
  e: {
    if (It(e) !== e || e.tag !== 1)
      throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
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
    if (pe(n))
      return ga(e, n, t);
  }
  return t;
}
function kc(e, t, n, r, l, o, i, u, s) {
  return e = Wi(n, r, !0, e, l, o, i, u, s), e.context = wc(null), n = e.current, r = ue(), l = pt(n), o = Ke(r, l), o.callback = t ?? null, ft(n, o, l), e.current.lanes = l, tr(e, l, r), me(e, r), e;
}
function kl(e, t, n, r) {
  var l = t.current, o = ue(), i = pt(l);
  return n = wc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ke(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ft(l, t, i), e !== null && ($e(e, l, i, o), Lr(e, l, i)), i;
}
function ul(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function rs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ki(e, t) {
  rs(e, t), (e = e.alternate) && rs(e, t);
}
function Gd() {
  return null;
}
var Sc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Yi(e) {
  this._internalRoot = e;
}
Sl.prototype.render = Yi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(y(409));
  kl(e, t, null, null);
};
Sl.prototype.unmount = Yi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $t(function() {
      kl(null, e, null, null);
    }), t[Xe] = null;
  }
};
function Sl(e) {
  this._internalRoot = e;
}
Sl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Js();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++)
      ;
    nt.splice(n, 0, e), n === 0 && bs(e);
  }
};
function Xi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function xl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ls() {
}
function Zd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = ul(i);
        o.call(c);
      };
    }
    var i = kc(t, r, e, 0, null, !1, !1, "", ls);
    return e._reactRootContainer = i, e[Xe] = i.current, Hn(e.nodeType === 8 ? e.parentNode : e), $t(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = ul(s);
      u.call(c);
    };
  }
  var s = Wi(e, 0, !1, null, null, !1, !1, "", ls);
  return e._reactRootContainer = s, e[Xe] = s.current, Hn(e.nodeType === 8 ? e.parentNode : e), $t(function() {
    kl(t, s, n, r);
  }), s;
}
function El(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = ul(i);
        u.call(s);
      };
    }
    kl(t, i, e, l);
  } else
    i = Zd(n, t, e, l, r);
  return ul(i);
}
Gs = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _n(t.pendingLanes);
        n !== 0 && (pi(t, n | 1), me(t, K()), !(R & 6) && (an = K() + 500, wt()));
      }
      break;
    case 13:
      $t(function() {
        var r = Ge(e, 1);
        if (r !== null) {
          var l = ue();
          $e(r, e, 1, l);
        }
      }), Ki(e, 1);
  }
};
mi = function(e) {
  if (e.tag === 13) {
    var t = Ge(e, 134217728);
    if (t !== null) {
      var n = ue();
      $e(t, e, 134217728, n);
    }
    Ki(e, 134217728);
  }
};
Zs = function(e) {
  if (e.tag === 13) {
    var t = pt(e), n = Ge(e, t);
    if (n !== null) {
      var r = ue();
      $e(n, e, t, r);
    }
    Ki(e, t);
  }
};
Js = function() {
  return O;
};
qs = function(e, t) {
  var n = O;
  try {
    return O = e, t();
  } finally {
    O = n;
  }
};
go = function(e, t, n) {
  switch (t) {
    case "input":
      if (co(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = pl(r);
            if (!l)
              throw Error(y(90));
            Ts(r), co(r, l);
          }
        }
      }
      break;
    case "textarea":
      js(e, n);
      break;
    case "select":
      t = n.value, t != null && Zt(e, !!n.multiple, t, !1);
  }
};
Fs = Vi;
Us = $t;
var Jd = { usingClientEntryPoint: !1, Events: [rr, Qt, pl, Is, Ms, Vi] }, xn = { findFiberByHostInstance: _t, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, qd = { bundleType: xn.bundleType, version: xn.version, rendererPackageName: xn.rendererPackageName, rendererConfig: xn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: qe.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Bs(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: xn.findFiberByHostInstance || Gd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Cr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Cr.isDisabled && Cr.supportsFiber)
    try {
      al = Cr.inject(qd), Ue = Cr;
    } catch {
    }
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jd;
we.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xi(t))
    throw Error(y(200));
  return Xd(e, t, null, n);
};
we.createRoot = function(e, t) {
  if (!Xi(e))
    throw Error(y(299));
  var n = !1, r = "", l = Sc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Wi(e, 1, !1, null, null, n, !1, r, l), e[Xe] = t.current, Hn(e.nodeType === 8 ? e.parentNode : e), new Yi(t);
};
we.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = Bs(t), e = e === null ? null : e.stateNode, e;
};
we.flushSync = function(e) {
  return $t(e);
};
we.hydrate = function(e, t, n) {
  if (!xl(t))
    throw Error(y(200));
  return El(null, e, t, !0, n);
};
we.hydrateRoot = function(e, t, n) {
  if (!Xi(e))
    throw Error(y(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = Sc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = kc(t, null, e, 1, n ?? null, l, !1, o, i), e[Xe] = t.current, Hn(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new Sl(t);
};
we.render = function(e, t, n) {
  if (!xl(t))
    throw Error(y(200));
  return El(null, e, t, !1, n);
};
we.unmountComponentAtNode = function(e) {
  if (!xl(e))
    throw Error(y(40));
  return e._reactRootContainer ? ($t(function() {
    El(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Xe] = null;
    });
  }), !0) : !1;
};
we.unstable_batchedUpdates = Vi;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!xl(n))
    throw Error(y(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(y(38));
  return El(e, t, n, !1, r);
};
we.version = "18.2.0-next-9e3b772b8-20220608";
function xc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xc);
    } catch (e) {
      console.error(e);
    }
}
xc(), ks.exports = we;
var bd = ks.exports, os = bd;
ro.createRoot = os.createRoot, ro.hydrateRoot = os.hydrateRoot;
function ep({ type: e, onClick: t, children: n, outline: r, disabled: l }) {
  const s = `focus:ring-2 focus:ring-offset-2 px-4 py-2 rounded-lg ${r ? "border-2 border-tekstiai-black-almost dark:border-white text-tekstiai-black-almost dark:text-white" : "bg-tekstiai-teal border-2 border-tekstiai-teal text-white"} ${l ? "cursor-not-allowed opacity-50" : "hover:opacity-80"}`;
  return /* @__PURE__ */ P.jsx(
    "button",
    {
      type: e,
      onClick: t,
      disabled: l,
      className: s,
      children: n
    }
  );
}
function tp({
  value: e,
  onChange: t,
  placeholder: n,
  onSubmit: r,
  disabled: l
}) {
  return /* @__PURE__ */ P.jsxs(
    "form",
    {
      onSubmit: (o) => {
        o.preventDefault(), r();
      },
      className: "flex justify-center items-center",
      children: [
        /* @__PURE__ */ P.jsx(
          "input",
          {
            type: "text",
            value: e,
            onChange: (o) => t(o.target.value),
            placeholder: n,
            disabled: l,
            className: "w-full px-4 py-2 mr-2 border-2 border-gray-300 bg-transparent rounded-lg focus:outline-none focus:border-tekstiai-teal"
          }
        ),
        /* @__PURE__ */ P.jsx(ep, { type: "submit", disabled: l, children: "Send" })
      ]
    }
  );
}
function Ec({ type: e }) {
  return /* @__PURE__ */ P.jsxs("div", { className: "hidden sm:block", children: [
    e === "question" && /* @__PURE__ */ P.jsx("div", { className: "bg-tekstiai-gray-platinum dark:bg-black text-white font-bold text-[.5rem] rounded-[6px] w-[25px] h-[25px] flex justify-center items-center", children: /* @__PURE__ */ P.jsx("span", { children: "Q" }) }),
    e === "answer" && /* @__PURE__ */ P.jsx("div", { className: "bg-tekstiai-teal dark:bg-black text-white font-bold text-[.5rem] rounded-[6px] w-[25px] h-[25px] flex justify-center items-center", children: /* @__PURE__ */ P.jsx("span", { children: "A" }) })
  ] });
}
function is({ question: e }) {
  return /* @__PURE__ */ P.jsxs("div", { className: "p-4 md:py-6 gap-2 md:gap-4 w-full bg-tekstiai-white-seasalt flex self-start align-center justify-start md:justify-center dark:bg-tekstiai-gray-onyx border-b", children: [
    /* @__PURE__ */ P.jsx(Ec, { type: "question" }),
    /* @__PURE__ */ P.jsx("span", { className: "md:w-3/4 xl:w-1/2 text-left", children: e })
  ] });
}
function to({
  type: e,
  onClick: t,
  children: n,
  active: r,
  disabled: l
}) {
  return /* @__PURE__ */ P.jsx(
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
let np = { data: "" }, rp = (e) => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || np, lp = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, op = /\/\*[^]*?\*\/|  +/g, us = /\n+/g, lt = (e, t) => {
  let n = "", r = "", l = "";
  for (let o in e) {
    let i = e[o];
    o[0] == "@" ? o[1] == "i" ? n = o + " " + i + ";" : r += o[1] == "f" ? lt(i, o) : o + "{" + lt(i, o[1] == "k" ? "" : t) + "}" : typeof i == "object" ? r += lt(i, t ? t.replace(/([^,])+/g, (u) => o.replace(/(^:.*)|([^,])+/g, (s) => /&/.test(s) ? s.replace(/&/g, u) : u ? u + " " + s : s)) : o) : i != null && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(), l += lt.p ? lt.p(o, i) : o + ":" + i + ";");
  }
  return n + (t && l ? t + "{" + l + "}" : l) + r;
}, Ve = {}, Cc = (e) => {
  if (typeof e == "object") {
    let t = "";
    for (let n in e)
      t += n + Cc(e[n]);
    return t;
  }
  return e;
}, ip = (e, t, n, r, l) => {
  let o = Cc(e), i = Ve[o] || (Ve[o] = ((s) => {
    let c = 0, m = 11;
    for (; c < s.length; )
      m = 101 * m + s.charCodeAt(c++) >>> 0;
    return "go" + m;
  })(o));
  if (!Ve[i]) {
    let s = o !== e ? e : ((c) => {
      let m, h, p = [{}];
      for (; m = lp.exec(c.replace(op, "")); )
        m[4] ? p.shift() : m[3] ? (h = m[3].replace(us, " ").trim(), p.unshift(p[0][h] = p[0][h] || {})) : p[0][m[1]] = m[2].replace(us, " ").trim();
      return p[0];
    })(e);
    Ve[i] = lt(l ? { ["@keyframes " + i]: s } : s, n ? "" : "." + i);
  }
  let u = n && Ve.g ? Ve.g : null;
  return n && (Ve.g = Ve[i]), ((s, c, m, h) => {
    h ? c.data = c.data.replace(h, s) : c.data.indexOf(s) === -1 && (c.data = m ? s + c.data : c.data + s);
  })(Ve[i], t, r, u), i;
}, up = (e, t, n) => e.reduce((r, l, o) => {
  let i = t[o];
  if (i && i.call) {
    let u = i(n), s = u && u.props && u.props.className || /^go/.test(u) && u;
    i = s ? "." + s : u && typeof u == "object" ? u.props ? "" : lt(u, "") : u === !1 ? "" : u;
  }
  return r + l + (i ?? "");
}, "");
function Cl(e) {
  let t = this || {}, n = e.call ? e(t.p) : e;
  return ip(n.unshift ? n.raw ? up(n, [].slice.call(arguments, 1), t.p) : n.reduce((r, l) => Object.assign(r, l && l.call ? l(t.p) : l), {}) : n, rp(t.target), t.g, t.o, t.k);
}
let _c, Jo, qo;
Cl.bind({ g: 1 });
let Je = Cl.bind({ k: 1 });
function sp(e, t, n, r) {
  lt.p = t, _c = e, Jo = n, qo = r;
}
function kt(e, t) {
  let n = this || {};
  return function() {
    let r = arguments;
    function l(o, i) {
      let u = Object.assign({}, o), s = u.className || l.className;
      n.p = Object.assign({ theme: Jo && Jo() }, u), n.o = / *go\d+/.test(s), u.className = Cl.apply(n, r) + (s ? " " + s : ""), t && (u.ref = i);
      let c = e;
      return e[0] && (c = u.as || e, delete u.as), qo && c[0] && qo(u), _c(c, u);
    }
    return t ? t(l) : l;
  };
}
var ap = (e) => typeof e == "function", bo = (e, t) => ap(e) ? e(t) : e, cp = (() => {
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
})(), dp = 20, Mr = /* @__PURE__ */ new Map(), pp = 1e3, ss = (e) => {
  if (Mr.has(e))
    return;
  let t = setTimeout(() => {
    Mr.delete(e), _l({ type: 4, toastId: e });
  }, pp);
  Mr.set(e, t);
}, mp = (e) => {
  let t = Mr.get(e);
  t && clearTimeout(t);
}, ei = (e, t) => {
  switch (t.type) {
    case 0:
      return { ...e, toasts: [t.toast, ...e.toasts].slice(0, dp) };
    case 1:
      return t.toast.id && mp(t.toast.id), { ...e, toasts: e.toasts.map((o) => o.id === t.toast.id ? { ...o, ...t.toast } : o) };
    case 2:
      let { toast: n } = t;
      return e.toasts.find((o) => o.id === n.id) ? ei(e, { type: 1, toast: n }) : ei(e, { type: 0, toast: n });
    case 3:
      let { toastId: r } = t;
      return r ? ss(r) : e.toasts.forEach((o) => {
        ss(o.id);
      }), { ...e, toasts: e.toasts.map((o) => o.id === r || r === void 0 ? { ...o, visible: !1 } : o) };
    case 4:
      return t.toastId === void 0 ? { ...e, toasts: [] } : { ...e, toasts: e.toasts.filter((o) => o.id !== t.toastId) };
    case 5:
      return { ...e, pausedAt: t.time };
    case 6:
      let l = t.time - (e.pausedAt || 0);
      return { ...e, pausedAt: void 0, toasts: e.toasts.map((o) => ({ ...o, pauseDuration: o.pauseDuration + l })) };
  }
}, hp = [], no = { toasts: [], pausedAt: void 0 }, _l = (e) => {
  no = ei(no, e), hp.forEach((t) => {
    t(no);
  });
}, vp = (e, t = "blank", n) => ({ createdAt: Date.now(), visible: !0, type: t, ariaProps: { role: "status", "aria-live": "polite" }, message: e, pauseDuration: 0, ...n, id: (n == null ? void 0 : n.id) || cp() }), or = (e) => (t, n) => {
  let r = vp(t, e, n);
  return _l({ type: 2, toast: r }), r.id;
}, Re = (e, t) => or("blank")(e, t);
Re.error = or("error");
Re.success = or("success");
Re.loading = or("loading");
Re.custom = or("custom");
Re.dismiss = (e) => {
  _l({ type: 3, toastId: e });
};
Re.remove = (e) => _l({ type: 4, toastId: e });
Re.promise = (e, t, n) => {
  let r = Re.loading(t.loading, { ...n, ...n == null ? void 0 : n.loading });
  return e.then((l) => (Re.success(bo(t.success, l), { id: r, ...n, ...n == null ? void 0 : n.success }), l)).catch((l) => {
    Re.error(bo(t.error, l), { id: r, ...n, ...n == null ? void 0 : n.error });
  }), e;
};
var yp = Je`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, gp = Je`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, wp = Je`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, kp = kt("div")`
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
`, Sp = Je`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, xp = kt("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${Sp} 1s linear infinite;
`, Ep = Je`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, Cp = Je`
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
}`, _p = kt("div")`
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
`, Np = kt("div")`
  position: absolute;
`, Pp = kt("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, zp = Je`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Tp = kt("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${zp} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, Lp = ({ toast: e }) => {
  let { icon: t, type: n, iconTheme: r } = e;
  return t !== void 0 ? typeof t == "string" ? $.createElement(Tp, null, t) : t : n === "blank" ? null : $.createElement(Pp, null, $.createElement(xp, { ...r }), n !== "loading" && $.createElement(Np, null, n === "error" ? $.createElement(kp, { ...r }) : $.createElement(_p, { ...r })));
}, jp = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, Rp = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`, Op = "0%{opacity:0;} 100%{opacity:1;}", $p = "0%{opacity:1;} 100%{opacity:0;}", Dp = kt("div")`
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
`, Ip = kt("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Mp = (e, t) => {
  let n = e.includes("top") ? 1 : -1, [r, l] = fp() ? [Op, $p] : [jp(n), Rp(n)];
  return { animation: t ? `${Je(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${Je(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
};
$.memo(({ toast: e, position: t, style: n, children: r }) => {
  let l = e.height ? Mp(e.position || t || "top-center", e.visible) : { opacity: 0 }, o = $.createElement(Lp, { toast: e }), i = $.createElement(Ip, { ...e.ariaProps }, bo(e.message, e));
  return $.createElement(Dp, { className: e.className, style: { ...l, ...n, ...e.style } }, typeof r == "function" ? r({ icon: o, message: i }) : $.createElement($.Fragment, null, o, i));
});
sp($.createElement);
Cl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
var bn = Re;
function Fp({ isStreaming: e }) {
  const [t, n] = $.useState(0);
  return $.useEffect(() => {
    if (e) {
      const r = setInterval(() => {
        n((l) => (l + 1) % 4);
      }, 200);
      return () => clearInterval(r);
    } else
      n(0);
  }, [e]), /* @__PURE__ */ P.jsx("span", { children: "." + ".".repeat(t) });
}
function as({
  answer: e,
  references: t,
  isStreaming: n,
  stopStreaming: r
}) {
  const [l, o] = $.useState(!1);
  function i() {
    o(!l);
  }
  function u() {
    try {
      navigator.clipboard.writeText(e).then(() => {
        bn.success("Copied to clipboard");
      });
    } catch {
      bn.error("Failed to copy to clipboard");
    }
  }
  return /* @__PURE__ */ P.jsxs(
    "div",
    {
      id: "answer-container",
      className: "p-4 md:py-6 w-full self-start flex gap-2 md:gap-4 align-center justify-start md:justify-center",
      children: [
        /* @__PURE__ */ P.jsx(Ec, { type: "answer" }),
        /* @__PURE__ */ P.jsxs("div", { className: "md:w-3/4 xl:w-1/2", children: [
          e,
          n && /* @__PURE__ */ P.jsx(Fp, { isStreaming: n }),
          /* @__PURE__ */ P.jsxs("div", { children: [
            /* @__PURE__ */ P.jsxs("div", { id: "controls", className: "mt-4 flex gap-2", children: [
              /* @__PURE__ */ P.jsx(to, { onClick: u, type: "button", children: "Copy" }),
              /* @__PURE__ */ P.jsx(
                to,
                {
                  onClick: i,
                  active: l,
                  type: "button",
                  children: "Show references"
                }
              ),
              n && /* @__PURE__ */ P.jsx(to, { onClick: r, type: "button", children: "Stop" })
            ] }),
            l && t && /* @__PURE__ */ P.jsx("ul", { className: "mt-4 px-12 py-6 border rounded-lg list-decimal max-w-fit", children: t.map((s) => /* @__PURE__ */ P.jsxs("li", { className: "flex flex-col", children: [
              /* @__PURE__ */ P.jsx("div", { className: "list-item font-bold", children: /* @__PURE__ */ P.jsx("span", { children: /* @__PURE__ */ P.jsx("a", { href: s.source, target: "_blank", children: s.title }) }) }),
              /* @__PURE__ */ P.jsxs("span", { children: [
                "...",
                s.content.substring(0, 160),
                "..."
              ] })
            ] })) })
          ] })
        ] })
      ]
    }
  );
}
const Up = bi.forwardRef(
  ({
    qaPairs: e,
    questionText: t,
    answerText: n,
    references: r,
    isStreaming: l,
    stopStreaming: o
  }, i) => /* @__PURE__ */ P.jsxs(
    "div",
    {
      ref: i,
      id: "discussion-area",
      className: "flex-3 flex flex-col overflow-auto text-xs md:text-sm",
      children: [
        !t && !n && !l && e.length == 0 && /* @__PURE__ */ P.jsx("div", { className: "flex text-center justify-center flex-col gap-4 md:gap-6 items-center mt-16 text-lg md:text-xl font-bold opacity-10 cursor-default select-none", children: "Powered by TekstiAI" }),
        /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
          e.length > 0 && e.map((u, s) => /* @__PURE__ */ P.jsxs(bi.Fragment, { children: [
            /* @__PURE__ */ P.jsx(
              is,
              {
                question: u.question
              }
            ),
            /* @__PURE__ */ P.jsx(
              as,
              {
                answer: u.answer,
                references: u.references
              }
            )
          ] }, s)),
          t && /* @__PURE__ */ P.jsx(is, { question: t }),
          (n || l) && /* @__PURE__ */ P.jsx(
            as,
            {
              answer: n,
              references: r,
              isStreaming: l,
              stopStreaming: o
            }
          )
        ] })
      ]
    }
  )
);
async function Ap(e, t, n, r, l) {
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
        const { done: s, value: c } = await u.read();
        if (s)
          break;
        const m = new TextDecoder().decode(c);
        r(m);
      }
    } else
      console.error("Fetch response body is null");
  } catch (o) {
    o.name !== "AbortError" && (bn.error("Stream interrupted."), console.error("Failed to stream", o));
  }
}
async function Vp(e, t) {
  try {
    return (await fetch("https://develop.teksti.ai/api/embed/question?apiKey=" + e, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(t)
    })).json();
  } catch (n) {
    throw console.error("Failed to post question", n), n;
  }
}
async function Bp(e, t, n, r) {
  return new Promise((l, o) => {
    try {
      Ap(
        "https://develop.teksti.ai/api/embed/streamquestion",
        e,
        t,
        (i) => {
          n(i);
        },
        r
      ).then(() => {
        l("Streaming complete");
      }).catch((i) => {
        o(i);
      });
    } catch (i) {
      console.error("Failed to post chat", i), o(i);
    }
  });
}
const Qp = async (e, t, n, r, l) => {
  const { signal: o } = n, i = await Vp(
    e,
    {
      q: t,
      qa_pairs: r
    }
  );
  let u = "";
  return await Bp(
    e,
    {
      // q: question,
      qa_pairs: i.qa_pairs
    },
    (s) => {
      l(s), u += s;
    },
    o
  ), { content: u, references: i.qa_pairs[i.qa_pairs.length - 1].references };
};
function Hp({ apiKey: e }) {
  const [t, n] = $.useState(""), [r, l] = $.useState(!1), [o, i] = $.useState(""), [u, s] = $.useState(""), [c, m] = $.useState([]), [h, p] = $.useState([]), g = $.useRef(null), w = $.useRef(null);
  function k() {
    g.current && (g.current.abort(), g.current = null), bn.success("Stopped streaming"), l(!1), i(""), s(""), m([]);
  }
  $.useEffect(() => () => {
    g.current && (g.current.abort(), g.current = null);
  }, []);
  const D = async () => {
    if (!e) {
      bn.error("No org key provided for the widget.");
      return;
    }
    const f = t;
    n(""), i(t), l(!0), g.current = new AbortController();
    const a = (v) => {
      s((S) => S + v);
    }, d = await Qp(
      e,
      f,
      g.current,
      h,
      a
    );
    l(!1), i(""), s(""), g.current.signal.aborted || p((v) => [
      ...v,
      {
        question: f,
        answer: d.content,
        references: d.references
      }
    ]);
  };
  return /* @__PURE__ */ P.jsxs("div", { className: "embed flex flex-col flex-1 overflow-auto w-full h-full p-5 bg-white", children: [
    /* @__PURE__ */ P.jsx(
      Up,
      {
        ref: w,
        qaPairs: h,
        questionText: o,
        answerText: u,
        references: c,
        isStreaming: r,
        stopStreaming: k
      }
    ),
    /* @__PURE__ */ P.jsx(
      tp,
      {
        value: t,
        onChange: n,
        placeholder: "Type your question here...",
        onSubmit: D,
        disabled: r
      }
    )
  ] });
}
function Wp({ apiKey: e }) {
  return /* @__PURE__ */ P.jsx(Hp, { apiKey: e });
}
function Kp(e, t) {
  ro.createRoot(e).render(/* @__PURE__ */ P.jsx(Wp, { apiKey: t }));
}
export {
  Kp as renderTekstiaiWidget
};
