function zc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fs = { exports: {} }, al = {}, ds = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr = Symbol.for("react.element"), Lc = Symbol.for("react.portal"), jc = Symbol.for("react.fragment"), Rc = Symbol.for("react.strict_mode"), Oc = Symbol.for("react.profiler"), $c = Symbol.for("react.provider"), Dc = Symbol.for("react.context"), Fc = Symbol.for("react.forward_ref"), Ic = Symbol.for("react.suspense"), Mc = Symbol.for("react.memo"), Ac = Symbol.for("react.lazy"), qi = Symbol.iterator;
function Uc(e) {
  return e === null || typeof e != "object" ? null : (e = qi && e[qi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ps = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ms = Object.assign, hs = {};
function cn(e, t, n) {
  this.props = e, this.context = t, this.refs = hs, this.updater = n || ps;
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
function vs() {
}
vs.prototype = cn.prototype;
function ri(e, t, n) {
  this.props = e, this.context = t, this.refs = hs, this.updater = n || ps;
}
var li = ri.prototype = new vs();
li.constructor = ri;
ms(li, cn.prototype);
li.isPureReactComponent = !0;
var bi = Array.isArray, ys = Object.prototype.hasOwnProperty, oi = { current: null }, gs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ws(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      ys.call(t, r) && !gs.hasOwnProperty(r) && (l[r] = t[r]);
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
  return { $$typeof: tr, type: e, key: o, ref: i, props: l, _owner: oi.current };
}
function Bc(e, t) {
  return { $$typeof: tr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ii(e) {
  return typeof e == "object" && e !== null && e.$$typeof === tr;
}
function Vc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var eu = /\/+/g;
function jl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Vc("" + e.key) : t.toString(36);
}
function Nr(e, t, n, r, l) {
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
          case tr:
          case Lc:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + jl(i, 0) : r, bi(l) ? (n = "", e != null && (n = e.replace(eu, "$&/") + "/"), Nr(l, t, n, "", function(c) {
      return c;
    })) : l != null && (ii(l) && (l = Bc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(eu, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", bi(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + jl(o, u);
      i += Nr(o, t, n, s, l);
    }
  else if (s = Uc(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + jl(o, u++), i += Nr(o, t, n, s, l);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function ar(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return Nr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Qc(e) {
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
var se = { current: null }, Pr = { transition: null }, Wc = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: Pr, ReactCurrentOwner: oi };
L.Children = { map: ar, forEach: function(e, t, n) {
  ar(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ar(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ar(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ii(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = cn;
L.Fragment = jc;
L.Profiler = Oc;
L.PureComponent = ri;
L.StrictMode = Rc;
L.Suspense = Ic;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wc;
L.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ms({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = oi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      ys.call(t, s) && !gs.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
  return { $$typeof: tr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function(e) {
  return e = { $$typeof: Dc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: $c, _context: e }, e.Consumer = e;
};
L.createElement = ws;
L.createFactory = function(e) {
  var t = ws.bind(null, e);
  return t.type = e, t;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: Fc, render: e };
};
L.isValidElement = ii;
L.lazy = function(e) {
  return { $$typeof: Ac, _payload: { _status: -1, _result: e }, _init: Qc };
};
L.memo = function(e, t) {
  return { $$typeof: Mc, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function(e) {
  var t = Pr.transition;
  Pr.transition = {};
  try {
    e();
  } finally {
    Pr.transition = t;
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
ds.exports = L;
var O = ds.exports;
const Fn = /* @__PURE__ */ zc(O);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hc = O, Kc = Symbol.for("react.element"), Yc = Symbol.for("react.fragment"), Xc = Object.prototype.hasOwnProperty, Gc = Hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Zc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ks(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    Xc.call(t, r) && !Zc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Kc, type: e, key: o, ref: i, props: l, _owner: Gc.current };
}
al.Fragment = Yc;
al.jsx = ks;
al.jsxs = ks;
fs.exports = al;
var P = fs.exports, oo = {}, Ss = { exports: {} }, we = {}, xs = { exports: {} }, Es = {};
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
  function t(E, T) {
    var z = E.length;
    E.push(T);
    e:
      for (; 0 < z; ) {
        var H = z - 1 >>> 1, Z = E[H];
        if (0 < l(Z, T))
          E[H] = T, E[z] = Z, z = H;
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
    var T = E[0], z = E.pop();
    if (z !== T) {
      E[0] = z;
      e:
        for (var H = 0, Z = E.length, ur = Z >>> 1; H < ur; ) {
          var St = 2 * (H + 1) - 1, Ll = E[St], xt = St + 1, sr = E[xt];
          if (0 > l(Ll, z))
            xt < Z && 0 > l(sr, Ll) ? (E[H] = sr, E[xt] = z, H = xt) : (E[H] = Ll, E[St] = z, H = St);
          else if (xt < Z && 0 > l(sr, z))
            E[H] = sr, E[xt] = z, H = xt;
          else
            break e;
        }
    }
    return T;
  }
  function l(E, T) {
    var z = E.sortIndex - T.sortIndex;
    return z !== 0 ? z : E.id - T.id;
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
  var s = [], c = [], m = 1, h = null, p = 3, w = !1, g = !1, k = !1, D = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null)
        r(c);
      else if (T.startTime <= E)
        r(c), T.sortIndex = T.expirationTime, t(s, T);
      else
        break;
      T = n(c);
    }
  }
  function v(E) {
    if (k = !1, d(E), !g)
      if (n(s) !== null)
        g = !0, Tl(S);
      else {
        var T = n(c);
        T !== null && zl(v, T.startTime - E);
      }
  }
  function S(E, T) {
    g = !1, k && (k = !1, f(N), N = -1), w = !0;
    var z = p;
    try {
      for (d(T), h = n(s); h !== null && (!(h.expirationTime > T) || E && !Pe()); ) {
        var H = h.callback;
        if (typeof H == "function") {
          h.callback = null, p = h.priorityLevel;
          var Z = H(h.expirationTime <= T);
          T = e.unstable_now(), typeof Z == "function" ? h.callback = Z : h === n(s) && r(s), d(T);
        } else
          r(s);
        h = n(s);
      }
      if (h !== null)
        var ur = !0;
      else {
        var St = n(c);
        St !== null && zl(v, St.startTime - T), ur = !1;
      }
      return ur;
    } finally {
      h = null, p = z, w = !1;
    }
  }
  var C = !1, _ = null, N = -1, W = 5, j = -1;
  function Pe() {
    return !(e.unstable_now() - j < W);
  }
  function pn() {
    if (_ !== null) {
      var E = e.unstable_now();
      j = E;
      var T = !0;
      try {
        T = _(!0, E);
      } finally {
        T ? mn() : (C = !1, _ = null);
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
    var Ji = new MessageChannel(), Tc = Ji.port2;
    Ji.port1.onmessage = pn, mn = function() {
      Tc.postMessage(null);
    };
  } else
    mn = function() {
      D(pn, 0);
    };
  function Tl(E) {
    _ = E, C || (C = !0, mn());
  }
  function zl(E, T) {
    N = D(function() {
      E(e.unstable_now());
    }, T);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    g || w || (g = !0, Tl(S));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < E ? Math.floor(1e3 / E) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(E) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var T = 3;
        break;
      default:
        T = p;
    }
    var z = p;
    p = T;
    try {
      return E();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(E, T) {
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
    var z = p;
    p = E;
    try {
      return T();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(E, T, z) {
    var H = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? H + z : H) : z = H, E) {
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
    return Z = z + Z, E = { id: m++, callback: T, priorityLevel: E, startTime: z, expirationTime: Z, sortIndex: -1 }, z > H ? (E.sortIndex = z, t(c, E), n(s) === null && E === n(c) && (k ? (f(N), N = -1) : k = !0, zl(v, z - H))) : (E.sortIndex = Z, t(s, E), g || w || (g = !0, Tl(S))), E;
  }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function(E) {
    var T = p;
    return function() {
      var z = p;
      p = T;
      try {
        return E.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(Es);
xs.exports = Es;
var Jc = xs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cs = O, ge = Jc;
function y(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var _s = /* @__PURE__ */ new Set(), In = {};
function Dt(e, t) {
  nn(e, t), nn(e + "Capture", t);
}
function nn(e, t) {
  for (In[e] = t, e = 0; e < t.length; e++)
    _s.add(t[e]);
}
var Ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), io = Object.prototype.hasOwnProperty, qc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, tu = {}, nu = {};
function bc(e) {
  return io.call(nu, e) ? !0 : io.call(tu, e) ? !1 : qc.test(e) ? nu[e] = !0 : (tu[e] = !0, !1);
}
function ef(e, t, n, r) {
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
function tf(e, t, n, r) {
  if (t === null || typeof t > "u" || ef(e, t, n, r))
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
var ui = /[\-:]([a-z])/g;
function si(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ui,
    si
  );
  te[t] = new ae(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ui, si);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ui, si);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ai(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (tf(t, n, l, r) && (n = null), r || l === null ? bc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var qe = Cs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, cr = Symbol.for("react.element"), Mt = Symbol.for("react.portal"), At = Symbol.for("react.fragment"), ci = Symbol.for("react.strict_mode"), uo = Symbol.for("react.profiler"), Ns = Symbol.for("react.provider"), Ps = Symbol.for("react.context"), fi = Symbol.for("react.forward_ref"), so = Symbol.for("react.suspense"), ao = Symbol.for("react.suspense_list"), di = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), Ts = Symbol.for("react.offscreen"), ru = Symbol.iterator;
function hn(e) {
  return e === null || typeof e != "object" ? null : (e = ru && e[ru] || e["@@iterator"], typeof e == "function" ? e : null);
}
var V = Object.assign, Rl;
function En(e) {
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
    Ol = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? En(e) : "";
}
function nf(e) {
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
      return e = $l(e.type, !1), e;
    case 11:
      return e = $l(e.type.render, !1), e;
    case 1:
      return e = $l(e.type, !0), e;
    default:
      return "";
  }
}
function co(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case At:
      return "Fragment";
    case Mt:
      return "Portal";
    case uo:
      return "Profiler";
    case ci:
      return "StrictMode";
    case so:
      return "Suspense";
    case ao:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ps:
        return (e.displayName || "Context") + ".Consumer";
      case Ns:
        return (e._context.displayName || "Context") + ".Provider";
      case fi:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case di:
        return t = e.displayName || null, t !== null ? t : co(e.type) || "Memo";
      case et:
        t = e._payload, e = e._init;
        try {
          return co(e(t));
        } catch {
        }
    }
  return null;
}
function rf(e) {
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
      return co(t);
    case 8:
      return t === ci ? "StrictMode" : "Mode";
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
function lf(e) {
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
function fr(e) {
  e._valueTracker || (e._valueTracker = lf(e));
}
function Ls(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = zs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ar(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fo(e, t) {
  var n = t.checked;
  return V({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function lu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ht(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function js(e, t) {
  t = t.checked, t != null && ai(e, "checked", t, !1);
}
function po(e, t) {
  js(e, t);
  var n = ht(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? mo(e, t.type, n) : t.hasOwnProperty("defaultValue") && mo(e, t.type, ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
function mo(e, t, n) {
  (t !== "number" || Ar(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
function ho(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return V({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function iu(e, t) {
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
function Rs(e, t) {
  var n = ht(t.value), r = ht(t.defaultValue);
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
function vo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Os(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var dr, $s = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (dr = dr || document.createElement("div"), dr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = dr.firstChild; e.firstChild; )
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
}, of = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pn).forEach(function(e) {
  of.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Pn[t] = Pn[e];
  });
});
function Ds(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Pn.hasOwnProperty(e) && Pn[e] ? ("" + t).trim() : t + "px";
}
function Fs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Ds(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var uf = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function yo(e, t) {
  if (t) {
    if (uf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function go(e, t) {
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
var wo = null;
function pi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ko = null, Jt = null, qt = null;
function su(e) {
  if (e = lr(e)) {
    if (typeof ko != "function")
      throw Error(y(280));
    var t = e.stateNode;
    t && (t = ml(t), ko(e.stateNode, e.type, t));
  }
}
function Is(e) {
  Jt ? qt ? qt.push(e) : qt = [e] : Jt = e;
}
function Ms() {
  if (Jt) {
    var e = Jt, t = qt;
    if (qt = Jt = null, su(e), t)
      for (e = 0; e < t.length; e++)
        su(t[e]);
  }
}
function As(e, t) {
  return e(t);
}
function Us() {
}
var Dl = !1;
function Bs(e, t, n) {
  if (Dl)
    return e(t, n);
  Dl = !0;
  try {
    return As(e, t, n);
  } finally {
    Dl = !1, (Jt !== null || qt !== null) && (Us(), Ms());
  }
}
function An(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = ml(n);
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
var So = !1;
if (Ye)
  try {
    var vn = {};
    Object.defineProperty(vn, "passive", { get: function() {
      So = !0;
    } }), window.addEventListener("test", vn, vn), window.removeEventListener("test", vn, vn);
  } catch {
    So = !1;
  }
function sf(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Tn = !1, Ur = null, Br = !1, xo = null, af = { onError: function(e) {
  Tn = !0, Ur = e;
} };
function cf(e, t, n, r, l, o, i, u, s) {
  Tn = !1, Ur = null, sf.apply(af, arguments);
}
function ff(e, t, n, r, l, o, i, u, s) {
  if (cf.apply(this, arguments), Tn) {
    if (Tn) {
      var c = Ur;
      Tn = !1, Ur = null;
    } else
      throw Error(y(198));
    Br || (Br = !0, xo = c);
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
function Vs(e) {
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
function df(e) {
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
function Qs(e) {
  return e = df(e), e !== null ? Ws(e) : null;
}
function Ws(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Ws(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Hs = ge.unstable_scheduleCallback, cu = ge.unstable_cancelCallback, pf = ge.unstable_shouldYield, mf = ge.unstable_requestPaint, K = ge.unstable_now, hf = ge.unstable_getCurrentPriorityLevel, mi = ge.unstable_ImmediatePriority, Ks = ge.unstable_UserBlockingPriority, Vr = ge.unstable_NormalPriority, vf = ge.unstable_LowPriority, Ys = ge.unstable_IdlePriority, cl = null, Ae = null;
function yf(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function")
    try {
      Ae.onCommitFiberRoot(cl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Oe = Math.clz32 ? Math.clz32 : kf, gf = Math.log, wf = Math.LN2;
function kf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (gf(e) / wf | 0) | 0;
}
var pr = 64, mr = 4194304;
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
function Qr(e, t) {
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
function Sf(e, t) {
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
function xf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Oe(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = Sf(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Eo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Xs() {
  var e = pr;
  return pr <<= 1, !(pr & 4194240) && (pr = 64), e;
}
function Fl(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function nr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Oe(t), e[t] = n;
}
function Ef(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function hi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var $ = 0;
function Gs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Zs, vi, Js, qs, bs, Co = !1, hr = [], ut = null, st = null, at = null, Un = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map(), nt = [], Cf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function fu(e, t) {
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
      Bn.delete(t.pointerId);
  }
}
function yn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = lr(t), t !== null && vi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function _f(e, t, n, r, l) {
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
      return o = l.pointerId, Bn.set(o, yn(Bn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function ea(e) {
  var t = _t(e.target);
  if (t !== null) {
    var n = Ft(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Vs(n), t !== null) {
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
function Tr(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _o(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      wo = r, n.target.dispatchEvent(r), wo = null;
    } else
      return t = lr(n), t !== null && vi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function du(e, t, n) {
  Tr(e) && n.delete(t);
}
function Nf() {
  Co = !1, ut !== null && Tr(ut) && (ut = null), st !== null && Tr(st) && (st = null), at !== null && Tr(at) && (at = null), Un.forEach(du), Bn.forEach(du);
}
function gn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Co || (Co = !0, ge.unstable_scheduleCallback(ge.unstable_NormalPriority, Nf)));
}
function Vn(e) {
  function t(l) {
    return gn(l, e);
  }
  if (0 < hr.length) {
    gn(hr[0], e);
    for (var n = 1; n < hr.length; n++) {
      var r = hr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ut !== null && gn(ut, e), st !== null && gn(st, e), at !== null && gn(at, e), Un.forEach(t), Bn.forEach(t), n = 0; n < nt.length; n++)
    r = nt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nt.length && (n = nt[0], n.blockedOn === null); )
    ea(n), n.blockedOn === null && nt.shift();
}
var bt = qe.ReactCurrentBatchConfig, Wr = !0;
function Pf(e, t, n, r) {
  var l = $, o = bt.transition;
  bt.transition = null;
  try {
    $ = 1, yi(e, t, n, r);
  } finally {
    $ = l, bt.transition = o;
  }
}
function Tf(e, t, n, r) {
  var l = $, o = bt.transition;
  bt.transition = null;
  try {
    $ = 4, yi(e, t, n, r);
  } finally {
    $ = l, bt.transition = o;
  }
}
function yi(e, t, n, r) {
  if (Wr) {
    var l = _o(e, t, n, r);
    if (l === null)
      Kl(e, t, r, Hr, n), fu(e, r);
    else if (_f(l, e, t, n, r))
      r.stopPropagation();
    else if (fu(e, r), t & 4 && -1 < Cf.indexOf(e)) {
      for (; l !== null; ) {
        var o = lr(l);
        if (o !== null && Zs(o), o = _o(e, t, n, r), o === null && Kl(e, t, r, Hr, n), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      Kl(e, t, r, null, n);
  }
}
var Hr = null;
function _o(e, t, n, r) {
  if (Hr = null, e = pi(r), e = _t(e), e !== null)
    if (t = Ft(e), t === null)
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
      switch (hf()) {
        case mi:
          return 1;
        case Ks:
          return 4;
        case Vr:
        case vf:
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
var ot = null, gi = null, zr = null;
function na() {
  if (zr)
    return zr;
  var e, t = gi, n = t.length, r, l = "value" in ot ? ot.value : ot.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
    ;
  return zr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Lr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function vr() {
  return !0;
}
function pu() {
  return !1;
}
function ke(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? vr : pu, this.isPropagationStopped = pu, this;
  }
  return V(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = vr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = vr);
  }, persist: function() {
  }, isPersistent: vr }), t;
}
var fn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, wi = ke(fn), rr = V({}, fn, { view: 0, detail: 0 }), zf = ke(rr), Il, Ml, wn, fl = V({}, rr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ki, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== wn && (wn && e.type === "mousemove" ? (Il = e.screenX - wn.screenX, Ml = e.screenY - wn.screenY) : Ml = Il = 0, wn = e), Il);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ml;
} }), mu = ke(fl), Lf = V({}, fl, { dataTransfer: 0 }), jf = ke(Lf), Rf = V({}, rr, { relatedTarget: 0 }), Al = ke(Rf), Of = V({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), $f = ke(Of), Df = V({}, fn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Ff = ke(Df), If = V({}, fn, { data: 0 }), hu = ke(If), Mf = {
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
}, Af = {
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
}, Uf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Bf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Uf[e]) ? !!t[e] : !1;
}
function ki() {
  return Bf;
}
var Vf = V({}, rr, { key: function(e) {
  if (e.key) {
    var t = Mf[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Lr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Af[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ki, charCode: function(e) {
  return e.type === "keypress" ? Lr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Lr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Qf = ke(Vf), Wf = V({}, fl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), vu = ke(Wf), Hf = V({}, rr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ki }), Kf = ke(Hf), Yf = V({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xf = ke(Yf), Gf = V({}, fl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zf = ke(Gf), Jf = [9, 13, 27, 32], Si = Ye && "CompositionEvent" in window, zn = null;
Ye && "documentMode" in document && (zn = document.documentMode);
var qf = Ye && "TextEvent" in window && !zn, ra = Ye && (!Si || zn && 8 < zn && 11 >= zn), yu = String.fromCharCode(32), gu = !1;
function la(e, t) {
  switch (e) {
    case "keyup":
      return Jf.indexOf(t.keyCode) !== -1;
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
var Ut = !1;
function bf(e, t) {
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
function ed(e, t) {
  if (Ut)
    return e === "compositionend" || !Si && la(e, t) ? (e = na(), zr = gi = ot = null, Ut = !1, e) : null;
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
var td = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function wu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!td[e.type] : t === "textarea";
}
function ia(e, t, n, r) {
  Is(r), t = Kr(t, "onChange"), 0 < t.length && (n = new wi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ln = null, Qn = null;
function nd(e) {
  ya(e, 0);
}
function dl(e) {
  var t = Qt(e);
  if (Ls(t))
    return e;
}
function rd(e, t) {
  if (e === "change")
    return t;
}
var ua = !1;
if (Ye) {
  var Ul;
  if (Ye) {
    var Bl = "oninput" in document;
    if (!Bl) {
      var ku = document.createElement("div");
      ku.setAttribute("oninput", "return;"), Bl = typeof ku.oninput == "function";
    }
    Ul = Bl;
  } else
    Ul = !1;
  ua = Ul && (!document.documentMode || 9 < document.documentMode);
}
function Su() {
  Ln && (Ln.detachEvent("onpropertychange", sa), Qn = Ln = null);
}
function sa(e) {
  if (e.propertyName === "value" && dl(Qn)) {
    var t = [];
    ia(t, Qn, e, pi(e)), Bs(nd, t);
  }
}
function ld(e, t, n) {
  e === "focusin" ? (Su(), Ln = t, Qn = n, Ln.attachEvent("onpropertychange", sa)) : e === "focusout" && Su();
}
function od(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return dl(Qn);
}
function id(e, t) {
  if (e === "click")
    return dl(t);
}
function ud(e, t) {
  if (e === "input" || e === "change")
    return dl(t);
}
function sd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var De = typeof Object.is == "function" ? Object.is : sd;
function Wn(e, t) {
  if (De(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!io.call(t, l) || !De(e[l], t[l]))
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
  for (var e = window, t = Ar(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Ar(e.document);
  }
  return t;
}
function xi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function ad(e) {
  var t = ca(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && aa(n.ownerDocument.documentElement, n)) {
    if (r !== null && xi(n)) {
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
var cd = Ye && "documentMode" in document && 11 >= document.documentMode, Bt = null, No = null, jn = null, Po = !1;
function Cu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Po || Bt == null || Bt !== Ar(r) || (r = Bt, "selectionStart" in r && xi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), jn && Wn(jn, r) || (jn = r, r = Kr(No, "onSelect"), 0 < r.length && (t = new wi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Bt)));
}
function yr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Vt = { animationend: yr("Animation", "AnimationEnd"), animationiteration: yr("Animation", "AnimationIteration"), animationstart: yr("Animation", "AnimationStart"), transitionend: yr("Transition", "TransitionEnd") }, Vl = {}, fa = {};
Ye && (fa = document.createElement("div").style, "AnimationEvent" in window || (delete Vt.animationend.animation, delete Vt.animationiteration.animation, delete Vt.animationstart.animation), "TransitionEvent" in window || delete Vt.transitionend.transition);
function pl(e) {
  if (Vl[e])
    return Vl[e];
  if (!Vt[e])
    return e;
  var t = Vt[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in fa)
      return Vl[e] = t[n];
  return e;
}
var da = pl("animationend"), pa = pl("animationiteration"), ma = pl("animationstart"), ha = pl("transitionend"), va = /* @__PURE__ */ new Map(), _u = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function yt(e, t) {
  va.set(e, t), Dt(t, [e]);
}
for (var Ql = 0; Ql < _u.length; Ql++) {
  var Wl = _u[Ql], fd = Wl.toLowerCase(), dd = Wl[0].toUpperCase() + Wl.slice(1);
  yt(fd, "on" + dd);
}
yt(da, "onAnimationEnd");
yt(pa, "onAnimationIteration");
yt(ma, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(ha, "onTransitionEnd");
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
var Nn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), pd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));
function Nu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, ff(r, t, void 0, e), e.currentTarget = null;
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
          var u = r[i], s = u.instance, c = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          Nu(l, u, c), o = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, c = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          Nu(l, u, c), o = s;
        }
    }
  }
  if (Br)
    throw e = xo, Br = !1, xo = null, e;
}
function I(e, t) {
  var n = t[Ro];
  n === void 0 && (n = t[Ro] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ga(t, e, 2, !1), n.add(r));
}
function Hl(e, t, n) {
  var r = 0;
  t && (r |= 4), ga(n, e, r, t);
}
var gr = "_reactListening" + Math.random().toString(36).slice(2);
function Hn(e) {
  if (!e[gr]) {
    e[gr] = !0, _s.forEach(function(n) {
      n !== "selectionchange" && (pd.has(n) || Hl(n, !1, e), Hl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gr] || (t[gr] = !0, Hl("selectionchange", !1, t));
  }
}
function ga(e, t, n, r) {
  switch (ta(t)) {
    case 1:
      var l = Pf;
      break;
    case 4:
      l = Tf;
      break;
    default:
      l = yi;
  }
  n = l.bind(null, t, n, e), l = void 0, !So || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
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
  Bs(function() {
    var c = o, m = pi(n), h = [];
    e: {
      var p = va.get(e);
      if (p !== void 0) {
        var w = wi, g = e;
        switch (e) {
          case "keypress":
            if (Lr(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            w = Qf;
            break;
          case "focusin":
            g = "focus", w = Al;
            break;
          case "focusout":
            g = "blur", w = Al;
            break;
          case "beforeblur":
          case "afterblur":
            w = Al;
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
            w = mu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = jf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Kf;
            break;
          case da:
          case pa:
          case ma:
            w = $f;
            break;
          case ha:
            w = Xf;
            break;
          case "scroll":
            w = zf;
            break;
          case "wheel":
            w = Zf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Ff;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = vu;
        }
        var k = (t & 4) !== 0, D = !k && e === "scroll", f = k ? p !== null ? p + "Capture" : null : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = An(a, f), v != null && k.push(Kn(a, v, d)))), D)
            break;
          a = a.return;
        }
        0 < k.length && (p = new w(p, g, null, n, m), h.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", p && n !== wo && (g = n.relatedTarget || n.fromElement) && (_t(g) || g[Xe]))
          break e;
        if ((w || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, w ? (g = n.relatedTarget || n.toElement, w = c, g = g ? _t(g) : null, g !== null && (D = Ft(g), g !== D || g.tag !== 5 && g.tag !== 6) && (g = null)) : (w = null, g = c), w !== g)) {
          if (k = mu, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = vu, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), D = w == null ? p : Qt(w), d = g == null ? p : Qt(g), p = new k(v, a + "leave", w, n, m), p.target = D, p.relatedTarget = d, v = null, _t(m) === c && (k = new k(f, a + "enter", g, n, m), k.target = d, k.relatedTarget = D, v = k), D = v, w && g)
            t: {
              for (k = w, f = g, a = 0, d = k; d; d = It(d))
                a++;
              for (d = 0, v = f; v; v = It(v))
                d++;
              for (; 0 < a - d; )
                k = It(k), a--;
              for (; 0 < d - a; )
                f = It(f), d--;
              for (; a--; ) {
                if (k === f || f !== null && k === f.alternate)
                  break t;
                k = It(k), f = It(f);
              }
              k = null;
            }
          else
            k = null;
          w !== null && Pu(h, p, w, k, !1), g !== null && D !== null && Pu(h, D, g, k, !0);
        }
      }
      e: {
        if (p = c ? Qt(c) : window, w = p.nodeName && p.nodeName.toLowerCase(), w === "select" || w === "input" && p.type === "file")
          var S = rd;
        else if (wu(p))
          if (ua)
            S = ud;
          else {
            S = od;
            var C = ld;
          }
        else
          (w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (S = id);
        if (S && (S = S(e, c))) {
          ia(h, S, n, m);
          break e;
        }
        C && C(e, p, c), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && mo(p, "number", p.value);
      }
      switch (C = c ? Qt(c) : window, e) {
        case "focusin":
          (wu(C) || C.contentEditable === "true") && (Bt = C, No = c, jn = null);
          break;
        case "focusout":
          jn = No = Bt = null;
          break;
        case "mousedown":
          Po = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Po = !1, Cu(h, n, m);
          break;
        case "selectionchange":
          if (cd)
            break;
        case "keydown":
        case "keyup":
          Cu(h, n, m);
      }
      var _;
      if (Si)
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
        Ut ? la(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (ra && n.locale !== "ko" && (Ut || N !== "onCompositionStart" ? N === "onCompositionEnd" && Ut && (_ = na()) : (ot = m, gi = "value" in ot ? ot.value : ot.textContent, Ut = !0)), C = Kr(c, N), 0 < C.length && (N = new hu(N, e, null, n, m), h.push({ event: N, listeners: C }), _ ? N.data = _ : (_ = oa(n), _ !== null && (N.data = _)))), (_ = qf ? bf(e, n) : ed(e, n)) && (c = Kr(c, "onBeforeInput"), 0 < c.length && (m = new hu("onBeforeInput", "beforeinput", null, n, m), h.push({ event: m, listeners: c }), m.data = _));
    }
    ya(h, t);
  });
}
function Kn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Kr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = An(e, n), o != null && r.unshift(Kn(e, o, l)), o = An(e, t), o != null && r.push(Kn(e, o, l))), e = e.return;
  }
  return r;
}
function It(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && c !== null && (u = c, l ? (s = An(n, o), s != null && i.unshift(Kn(n, s, u))) : l || (s = An(n, o), s != null && i.push(Kn(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var md = /\r\n?/g, hd = /\u0000|\uFFFD/g;
function Tu(e) {
  return (typeof e == "string" ? e : "" + e).replace(md, `
`).replace(hd, "");
}
function wr(e, t, n) {
  if (t = Tu(t), Tu(e) !== t && n)
    throw Error(y(425));
}
function Yr() {
}
var To = null, zo = null;
function Lo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var jo = typeof setTimeout == "function" ? setTimeout : void 0, vd = typeof clearTimeout == "function" ? clearTimeout : void 0, zu = typeof Promise == "function" ? Promise : void 0, yd = typeof queueMicrotask == "function" ? queueMicrotask : typeof zu < "u" ? function(e) {
  return zu.resolve(null).then(e).catch(gd);
} : jo;
function gd(e) {
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
var dn = Math.random().toString(36).slice(2), Me = "__reactFiber$" + dn, Yn = "__reactProps$" + dn, Xe = "__reactContainer$" + dn, Ro = "__reactEvents$" + dn, wd = "__reactListeners$" + dn, kd = "__reactHandles$" + dn;
function _t(e) {
  var t = e[Me];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Xe] || n[Me]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Lu(e); e !== null; ) {
          if (n = e[Me])
            return n;
          e = Lu(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function lr(e) {
  return e = e[Me] || e[Xe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Qt(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(y(33));
}
function ml(e) {
  return e[Yn] || null;
}
var Oo = [], Wt = -1;
function gt(e) {
  return { current: e };
}
function M(e) {
  0 > Wt || (e.current = Oo[Wt], Oo[Wt] = null, Wt--);
}
function F(e, t) {
  Wt++, Oo[Wt] = e.current, e.current = t;
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
function Xr() {
  M(de), M(oe);
}
function ju(e, t, n) {
  if (oe.current !== vt)
    throw Error(y(168));
  F(oe, t), F(de, n);
}
function wa(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(y(108, rf(e) || "Unknown", l));
  return V({}, n, r);
}
function Gr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vt, Lt = oe.current, F(oe, e), F(de, de.current), !0;
}
function Ru(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(y(169));
  n ? (e = wa(e, t, Lt), r.__reactInternalMemoizedMergedChildContext = e, M(de), M(oe), F(oe, e)) : M(de), F(de, n);
}
var Qe = null, hl = !1, Xl = !1;
function ka(e) {
  Qe === null ? Qe = [e] : Qe.push(e);
}
function Sd(e) {
  hl = !0, ka(e);
}
function wt() {
  if (!Xl && Qe !== null) {
    Xl = !0;
    var e = 0, t = $;
    try {
      var n = Qe;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Qe = null, hl = !1;
    } catch (l) {
      throw Qe !== null && (Qe = Qe.slice(e + 1)), Hs(mi, wt), l;
    } finally {
      $ = t, Xl = !1;
    }
  }
  return null;
}
var Ht = [], Kt = 0, Zr = null, Jr = 0, Se = [], xe = 0, jt = null, We = 1, He = "";
function Et(e, t) {
  Ht[Kt++] = Jr, Ht[Kt++] = Zr, Zr = e, Jr = t;
}
function Sa(e, t, n) {
  Se[xe++] = We, Se[xe++] = He, Se[xe++] = jt, jt = e;
  var r = We;
  e = He;
  var l = 32 - Oe(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Oe(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, We = 1 << 32 - Oe(t) + l | n << l | r, He = o + e;
  } else
    We = 1 << o | n << l | r, He = e;
}
function Ei(e) {
  e.return !== null && (Et(e, 1), Sa(e, 1, 0));
}
function Ci(e) {
  for (; e === Zr; )
    Zr = Ht[--Kt], Ht[Kt] = null, Jr = Ht[--Kt], Ht[Kt] = null;
  for (; e === jt; )
    jt = Se[--xe], Se[xe] = null, He = Se[--xe], Se[xe] = null, We = Se[--xe], Se[xe] = null;
}
var ye = null, ve = null, A = !1, je = null;
function xa(e, t) {
  var n = Ee(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ou(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = ct(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = jt !== null ? { id: We, overflow: He } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ee(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ye = e, ve = null, !0) : !1;
    default:
      return !1;
  }
}
function $o(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Do(e) {
  if (A) {
    var t = ve;
    if (t) {
      var n = t;
      if (!Ou(e, t)) {
        if ($o(e))
          throw Error(y(418));
        t = ct(n.nextSibling);
        var r = ye;
        t && Ou(e, t) ? xa(r, n) : (e.flags = e.flags & -4097 | 2, A = !1, ye = e);
      }
    } else {
      if ($o(e))
        throw Error(y(418));
      e.flags = e.flags & -4097 | 2, A = !1, ye = e;
    }
  }
}
function $u(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function kr(e) {
  if (e !== ye)
    return !1;
  if (!A)
    return $u(e), A = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Lo(e.type, e.memoizedProps)), t && (t = ve)) {
    if ($o(e))
      throw Ea(), Error(y(418));
    for (; t; )
      xa(e, t), t = ct(t.nextSibling);
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
function Ea() {
  for (var e = ve; e; )
    e = ct(e.nextSibling);
}
function ln() {
  ve = ye = null, A = !1;
}
function _i(e) {
  je === null ? je = [e] : je.push(e);
}
var xd = qe.ReactCurrentBatchConfig;
function ze(e, t) {
  if (e && e.defaultProps) {
    t = V({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var qr = gt(null), br = null, Yt = null, Ni = null;
function Pi() {
  Ni = Yt = br = null;
}
function Ti(e) {
  var t = qr.current;
  M(qr), e._currentValue = t;
}
function Fo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function en(e, t) {
  br = e, Ni = Yt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0), e.firstContext = null);
}
function _e(e) {
  var t = e._currentValue;
  if (Ni !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Yt === null) {
      if (br === null)
        throw Error(y(308));
      Yt = e, br.dependencies = { lanes: 0, firstContext: e };
    } else
      Yt = Yt.next = e;
  return t;
}
var Nt = null;
function zi(e) {
  Nt === null ? Nt = [e] : Nt.push(e);
}
function Ca(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, zi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ge(e, r);
}
function Ge(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var tt = !1;
function Li(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function _a(e, t) {
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
  return l = r.interleaved, l === null ? (t.next = t, zi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ge(e, n);
}
function jr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, hi(e, n);
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
function el(e, t, n, r) {
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
      var p = u.lane, w = u.eventTime;
      if ((r & p) === p) {
        m !== null && (m = m.next = {
          eventTime: w,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var g = e, k = u;
          switch (p = t, w = n, k.tag) {
            case 1:
              if (g = k.payload, typeof g == "function") {
                h = g.call(w, h, p);
                break e;
              }
              h = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = k.payload, p = typeof g == "function" ? g.call(w, h, p) : g, p == null)
                break e;
              h = V({}, h, p);
              break e;
            case 2:
              tt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else
        w = { eventTime: w, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, m === null ? (c = m = w, s = h) : m = m.next = w, i |= p;
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
function Fu(e, t, n) {
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
function Io(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : V({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var vl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ft(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ue(), l = pt(e), o = Ke(r, l);
  o.payload = t, n != null && (o.callback = n), t = ft(e, o, l), t !== null && ($e(t, e, l, r), jr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ue(), l = pt(e), o = Ke(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ft(e, o, l), t !== null && ($e(t, e, l, r), jr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ue(), r = pt(e), l = Ke(n, r);
  l.tag = 2, t != null && (l.callback = t), t = ft(e, l, r), t !== null && ($e(t, e, r, n), jr(t, e, r));
} };
function Iu(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Wn(n, r) || !Wn(l, o) : !0;
}
function Pa(e, t, n) {
  var r = !1, l = vt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = _e(o) : (l = pe(t) ? Lt : oe.current, r = t.contextTypes, o = (r = r != null) ? rn(e, l) : vt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = vl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Mu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && vl.enqueueReplaceState(t, t.state, null);
}
function Mo(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = Na, Li(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = _e(o) : (o = pe(t) ? Lt : oe.current, l.context = rn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Io(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && vl.enqueueReplaceState(l, l.state, null), el(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
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
function Sr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Au(e) {
  var t = e._init;
  return t(e._payload);
}
function Ta(e) {
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
    return a === null || a.tag !== 6 ? (a = to(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var S = d.type;
    return S === At ? m(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === S || typeof S == "object" && S !== null && S.$$typeof === et && Au(S) === a.type) ? (v = l(a, d.props), v.ref = kn(f, a, d), v.return = f, v) : (v = Ir(d.type, d.key, d.props, null, f.mode, v), v.ref = kn(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = no(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function m(f, a, d, v, S) {
    return a === null || a.tag !== 7 ? (a = zt(d, f.mode, v, S), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function h(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number")
      return a = to("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case cr:
          return d = Ir(a.type, a.key, a.props, null, f.mode, d), d.ref = kn(f, null, a), d.return = f, d;
        case Mt:
          return a = no(a, f.mode, d), a.return = f, a;
        case et:
          var v = a._init;
          return h(f, v(a._payload), d);
      }
      if (Cn(a) || hn(a))
        return a = zt(a, f.mode, d, null), a.return = f, a;
      Sr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var S = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return S !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case cr:
          return d.key === S ? s(f, a, d, v) : null;
        case Mt:
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
      Sr(f, d);
    }
    return null;
  }
  function w(f, a, d, v, S) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return f = f.get(d) || null, u(a, f, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case cr:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, S);
        case Mt:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, S);
        case et:
          var C = v._init;
          return w(f, a, d, C(v._payload), S);
      }
      if (Cn(v) || hn(v))
        return f = f.get(d) || null, m(a, f, v, S, null);
      Sr(a, v);
    }
    return null;
  }
  function g(f, a, d, v) {
    for (var S = null, C = null, _ = a, N = a = 0, W = null; _ !== null && N < d.length; N++) {
      _.index > N ? (W = _, _ = null) : W = _.sibling;
      var j = p(f, _, d[N], v);
      if (j === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && j.alternate === null && t(f, _), a = o(j, a, N), C === null ? S = j : C.sibling = j, C = j, _ = W;
    }
    if (N === d.length)
      return n(f, _), A && Et(f, N), S;
    if (_ === null) {
      for (; N < d.length; N++)
        _ = h(f, d[N], v), _ !== null && (a = o(_, a, N), C === null ? S = _ : C.sibling = _, C = _);
      return A && Et(f, N), S;
    }
    for (_ = r(f, _); N < d.length; N++)
      W = w(_, f, N, d[N], v), W !== null && (e && W.alternate !== null && _.delete(W.key === null ? N : W.key), a = o(W, a, N), C === null ? S = W : C.sibling = W, C = W);
    return e && _.forEach(function(Pe) {
      return t(f, Pe);
    }), A && Et(f, N), S;
  }
  function k(f, a, d, v) {
    var S = hn(d);
    if (typeof S != "function")
      throw Error(y(150));
    if (d = S.call(d), d == null)
      throw Error(y(151));
    for (var C = S = null, _ = a, N = a = 0, W = null, j = d.next(); _ !== null && !j.done; N++, j = d.next()) {
      _.index > N ? (W = _, _ = null) : W = _.sibling;
      var Pe = p(f, _, j.value, v);
      if (Pe === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && Pe.alternate === null && t(f, _), a = o(Pe, a, N), C === null ? S = Pe : C.sibling = Pe, C = Pe, _ = W;
    }
    if (j.done)
      return n(
        f,
        _
      ), A && Et(f, N), S;
    if (_ === null) {
      for (; !j.done; N++, j = d.next())
        j = h(f, j.value, v), j !== null && (a = o(j, a, N), C === null ? S = j : C.sibling = j, C = j);
      return A && Et(f, N), S;
    }
    for (_ = r(f, _); !j.done; N++, j = d.next())
      j = w(_, f, N, j.value, v), j !== null && (e && j.alternate !== null && _.delete(j.key === null ? N : j.key), a = o(j, a, N), C === null ? S = j : C.sibling = j, C = j);
    return e && _.forEach(function(pn) {
      return t(f, pn);
    }), A && Et(f, N), S;
  }
  function D(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === At && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case cr:
          e: {
            for (var S = d.key, C = a; C !== null; ) {
              if (C.key === S) {
                if (S = d.type, S === At) {
                  if (C.tag === 7) {
                    n(f, C.sibling), a = l(C, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (C.elementType === S || typeof S == "object" && S !== null && S.$$typeof === et && Au(S) === C.type) {
                  n(f, C.sibling), a = l(C, d.props), a.ref = kn(f, C, d), a.return = f, f = a;
                  break e;
                }
                n(f, C);
                break;
              } else
                t(f, C);
              C = C.sibling;
            }
            d.type === At ? (a = zt(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = Ir(d.type, d.key, d.props, null, f.mode, v), v.ref = kn(f, a, d), v.return = f, f = v);
          }
          return i(f);
        case Mt:
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
            a = no(d, f.mode, v), a.return = f, f = a;
          }
          return i(f);
        case et:
          return C = d._init, D(f, a, C(d._payload), v);
      }
      if (Cn(d))
        return g(f, a, d, v);
      if (hn(d))
        return k(f, a, d, v);
      Sr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = to(d, f.mode, v), a.return = f, f = a), i(f)) : n(f, a);
  }
  return D;
}
var on = Ta(!0), za = Ta(!1), or = {}, Ue = gt(or), Xn = gt(or), Gn = gt(or);
function Pt(e) {
  if (e === or)
    throw Error(y(174));
  return e;
}
function ji(e, t) {
  switch (F(Gn, t), F(Xn, e), F(Ue, or), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = vo(t, e);
  }
  M(Ue), F(Ue, t);
}
function un() {
  M(Ue), M(Xn), M(Gn);
}
function La(e) {
  Pt(Gn.current);
  var t = Pt(Ue.current), n = vo(t, e.type);
  t !== n && (F(Xn, e), F(Ue, n));
}
function Ri(e) {
  Xn.current === e && (M(Ue), M(Xn));
}
var U = gt(0);
function tl(e) {
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
function Oi() {
  for (var e = 0; e < Gl.length; e++)
    Gl[e]._workInProgressVersionPrimary = null;
  Gl.length = 0;
}
var Rr = qe.ReactCurrentDispatcher, Zl = qe.ReactCurrentBatchConfig, Rt = 0, B = null, X = null, J = null, nl = !1, Rn = !1, Zn = 0, Ed = 0;
function ne() {
  throw Error(y(321));
}
function $i(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n]))
      return !1;
  return !0;
}
function Di(e, t, n, r, l, o) {
  if (Rt = o, B = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Rr.current = e === null || e.memoizedState === null ? Pd : Td, e = n(r, l), Rn) {
    o = 0;
    do {
      if (Rn = !1, Zn = 0, 25 <= o)
        throw Error(y(301));
      o += 1, J = X = null, t.updateQueue = null, Rr.current = zd, e = n(r, l);
    } while (Rn);
  }
  if (Rr.current = rl, t = X !== null && X.next !== null, Rt = 0, J = X = B = null, nl = !1, t)
    throw Error(y(300));
  return e;
}
function Fi() {
  var e = Zn !== 0;
  return Zn = 0, e;
}
function Ie() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return J === null ? B.memoizedState = J = e : J = J.next = e, J;
}
function Ne() {
  if (X === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = X.next;
  var t = J === null ? B.memoizedState : J.next;
  if (t !== null)
    J = t, X = e;
  else {
    if (e === null)
      throw Error(y(310));
    X = e, e = { memoizedState: X.memoizedState, baseState: X.baseState, baseQueue: X.baseQueue, queue: X.queue, next: null }, J === null ? B.memoizedState = J = e : J = J.next = e;
  }
  return J;
}
function Jn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Jl(e) {
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
        s === null ? (u = s = h, i = r) : s = s.next = h, B.lanes |= m, Ot |= m;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? i = r : s.next = u, De(r, t.memoizedState) || (fe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, B.lanes |= o, Ot |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ql(e) {
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
function ja() {
}
function Ra(e, t) {
  var n = B, r = Ne(), l = t(), o = !De(r.memoizedState, l);
  if (o && (r.memoizedState = l, fe = !0), r = r.queue, Ii(Da.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || J !== null && J.memoizedState.tag & 1) {
    if (n.flags |= 2048, qn(9, $a.bind(null, n, r, l, t), void 0, null), q === null)
      throw Error(y(349));
    Rt & 30 || Oa(n, t, l);
  }
  return l;
}
function Oa(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = B.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, B.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function $a(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Fa(t) && Ia(e);
}
function Da(e, t, n) {
  return n(function() {
    Fa(t) && Ia(e);
  });
}
function Fa(e) {
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
  var t = Ie();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jn, lastRenderedState: e }, t.queue = e, e = e.dispatch = Nd.bind(null, B, e), [t.memoizedState, e];
}
function qn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = B.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, B.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ma() {
  return Ne().memoizedState;
}
function Or(e, t, n, r) {
  var l = Ie();
  B.flags |= e, l.memoizedState = qn(1 | t, n, void 0, r === void 0 ? null : r);
}
function yl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (o = i.destroy, r !== null && $i(r, i.deps)) {
      l.memoizedState = qn(t, n, o, r);
      return;
    }
  }
  B.flags |= e, l.memoizedState = qn(1 | t, n, o, r);
}
function Bu(e, t) {
  return Or(8390656, 8, e, t);
}
function Ii(e, t) {
  return yl(2048, 8, e, t);
}
function Aa(e, t) {
  return yl(4, 2, e, t);
}
function Ua(e, t) {
  return yl(4, 4, e, t);
}
function Ba(e, t) {
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
  return n = n != null ? n.concat([e]) : null, yl(4, 4, Ba.bind(null, t, e), n);
}
function Mi() {
}
function Qa(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $i(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Wa(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $i(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ha(e, t, n) {
  return Rt & 21 ? (De(n, t) || (n = Xs(), B.lanes |= n, Ot |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n);
}
function Cd(e, t) {
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
  return Ne().memoizedState;
}
function _d(e, t, n) {
  var r = pt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ya(e))
    Xa(t, n);
  else if (n = Ca(e, t, n, r), n !== null) {
    var l = ue();
    $e(n, e, r, l), Ga(n, t, r);
  }
}
function Nd(e, t, n) {
  var r = pt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ya(e))
    Xa(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, De(u, i)) {
          var s = t.interleaved;
          s === null ? (l.next = l, zi(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = Ca(e, t, l, r), n !== null && (l = ue(), $e(n, e, r, l), Ga(n, t, r));
  }
}
function Ya(e) {
  var t = e.alternate;
  return e === B || t !== null && t === B;
}
function Xa(e, t) {
  Rn = nl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ga(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, hi(e, n);
  }
}
var rl = { readContext: _e, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 }, Pd = { readContext: _e, useCallback: function(e, t) {
  return Ie().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: _e, useEffect: Bu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Or(
    4194308,
    4,
    Ba.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Or(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Or(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ie();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ie();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = _d.bind(null, B, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ie();
  return e = { current: e }, t.memoizedState = e;
}, useState: Uu, useDebugValue: Mi, useDeferredValue: function(e) {
  return Ie().memoizedState = e;
}, useTransition: function() {
  var e = Uu(!1), t = e[0];
  return e = Cd.bind(null, e[1]), Ie().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = B, l = Ie();
  if (A) {
    if (n === void 0)
      throw Error(y(407));
    n = n();
  } else {
    if (n = t(), q === null)
      throw Error(y(349));
    Rt & 30 || Oa(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Bu(Da.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, qn(9, $a.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ie(), t = q.identifierPrefix;
  if (A) {
    var n = He, r = We;
    n = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Zn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Ed++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Td = {
  readContext: _e,
  useCallback: Qa,
  useContext: _e,
  useEffect: Ii,
  useImperativeHandle: Va,
  useInsertionEffect: Aa,
  useLayoutEffect: Ua,
  useMemo: Wa,
  useReducer: Jl,
  useRef: Ma,
  useState: function() {
    return Jl(Jn);
  },
  useDebugValue: Mi,
  useDeferredValue: function(e) {
    var t = Ne();
    return Ha(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = Jl(Jn)[0], t = Ne().memoizedState;
    return [e, t];
  },
  useMutableSource: ja,
  useSyncExternalStore: Ra,
  useId: Ka,
  unstable_isNewReconciler: !1
}, zd = { readContext: _e, useCallback: Qa, useContext: _e, useEffect: Ii, useImperativeHandle: Va, useInsertionEffect: Aa, useLayoutEffect: Ua, useMemo: Wa, useReducer: ql, useRef: Ma, useState: function() {
  return ql(Jn);
}, useDebugValue: Mi, useDeferredValue: function(e) {
  var t = Ne();
  return X === null ? t.memoizedState = e : Ha(t, X.memoizedState, e);
}, useTransition: function() {
  var e = ql(Jn)[0], t = Ne().memoizedState;
  return [e, t];
}, useMutableSource: ja, useSyncExternalStore: Ra, useId: Ka, unstable_isNewReconciler: !1 };
function sn(e, t) {
  try {
    var n = "", r = t;
    do
      n += nf(r), r = r.return;
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
var Ld = typeof WeakMap == "function" ? WeakMap : Map;
function Za(e, t, n) {
  n = Ke(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ol || (ol = !0, Go = r), Ao(e, t);
  }, n;
}
function Ja(e, t, n) {
  n = Ke(-1, n), n.tag = 3;
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
    Ao(e, t), typeof r != "function" && (dt === null ? dt = /* @__PURE__ */ new Set([this]) : dt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Vu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ld();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Wd.bind(null, e, t, n), t.then(e, e));
}
function Qu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Wu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ke(-1, 1), t.tag = 2, ft(n, t, 1))), n.lanes |= 1), e);
}
var jd = qe.ReactCurrentOwner, fe = !1;
function ie(e, t, n, r) {
  t.child = e === null ? za(t, null, n, r) : on(t, e.child, n, r);
}
function Hu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return en(t, l), r = Di(e, t, n, r, o, l), n = Fi(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ze(e, t, l)) : (A && n && Ei(t), t.flags |= 1, ie(e, t, r, l), t.child);
}
function Ku(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Ki(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, qa(e, t, o, r, l)) : (e = Ir(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Wn, n(i, r) && e.ref === t.ref)
      return Ze(e, t, l);
  }
  return t.flags |= 1, e = mt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function qa(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Wn(o, r) && e.ref === t.ref)
      if (fe = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (fe = !0);
      else
        return t.lanes = e.lanes, Ze(e, t, l);
  }
  return Uo(e, t, n, r, l);
}
function ba(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, F(Gt, he), he |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, F(Gt, he), he |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, F(Gt, he), he |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, F(Gt, he), he |= r;
  return ie(e, t, l, n), t.child;
}
function ec(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Uo(e, t, n, r, l) {
  var o = pe(n) ? Lt : oe.current;
  return o = rn(t, o), en(t, l), n = Di(e, t, n, r, o, l), r = Fi(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ze(e, t, l)) : (A && r && Ei(t), t.flags |= 1, ie(e, t, n, l), t.child);
}
function Yu(e, t, n, r, l) {
  if (pe(n)) {
    var o = !0;
    Gr(t);
  } else
    o = !1;
  if (en(t, l), t.stateNode === null)
    $r(e, t), Pa(t, n, r), Mo(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = _e(c) : (c = pe(n) ? Lt : oe.current, c = rn(t, c));
    var m = n.getDerivedStateFromProps, h = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && Mu(t, i, r, c), tt = !1;
    var p = t.memoizedState;
    i.state = p, el(t, r, i, l), s = t.memoizedState, u !== r || p !== s || de.current || tt ? (typeof m == "function" && (Io(t, n, m, r), s = t.memoizedState), (u = tt || Iu(t, n, u, r, p, s, c)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, _a(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : ze(t.type, u), i.props = c, h = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = _e(s) : (s = pe(n) ? Lt : oe.current, s = rn(t, s));
    var w = n.getDerivedStateFromProps;
    (m = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || p !== s) && Mu(t, i, r, s), tt = !1, p = t.memoizedState, i.state = p, el(t, r, i, l);
    var g = t.memoizedState;
    u !== h || p !== g || de.current || tt ? (typeof w == "function" && (Io(t, n, w, r), g = t.memoizedState), (c = tt || Iu(t, n, c, r, p, g, s) || !1) ? (m || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Bo(e, t, n, r, o, l);
}
function Bo(e, t, n, r, l, o) {
  ec(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return l && Ru(t, n, !1), Ze(e, t, o);
  r = t.stateNode, jd.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = on(t, e.child, null, o), t.child = on(t, null, u, o)) : ie(e, t, u, o), t.memoizedState = r.state, l && Ru(t, n, !0), t.child;
}
function tc(e) {
  var t = e.stateNode;
  t.pendingContext ? ju(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ju(e, t.context, !1), ji(e, t.containerInfo);
}
function Xu(e, t, n, r, l) {
  return ln(), _i(l), t.flags |= 256, ie(e, t, n, r), t.child;
}
var Vo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function nc(e, t, n) {
  var r = t.pendingProps, l = U.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), F(U, l & 1), e === null)
    return Do(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = kl(i, r, 0, null), e = zt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Qo(n), t.memoizedState = Vo, e) : Ai(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return Rd(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = mt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = mt(u, o) : (o = zt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Qo(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Vo, r;
  }
  return o = e.child, e = o.sibling, r = mt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ai(e, t) {
  return t = kl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function xr(e, t, n, r) {
  return r !== null && _i(r), on(t, e.child, null, n), e = Ai(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Rd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = bl(Error(y(422))), xr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = kl({ mode: "visible", children: r.children }, l, 0, null), o = zt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && on(t, e.child, null, i), t.child.memoizedState = Qo(i), t.memoizedState = Vo, o);
  if (!(t.mode & 1))
    return xr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(y(419)), r = bl(o, r, void 0), xr(e, t, i, r);
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
    return Hi(), r = bl(Error(y(421))), xr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hd.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ve = ct(l.nextSibling), ye = t, A = !0, je = null, e !== null && (Se[xe++] = We, Se[xe++] = He, Se[xe++] = jt, We = e.id, He = e.overflow, jt = t), t = Ai(t, r.children), t.flags |= 4096, t);
}
function Gu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fo(e.return, t, n);
}
function eo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function rc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (ie(e, t, r.children, n), r = U.current, r & 2)
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
  if (F(U, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && tl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), eo(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && tl(e) === null) {
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
function $r(e, t) {
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
function Od(e, t, n) {
  switch (t.tag) {
    case 3:
      tc(t), ln();
      break;
    case 5:
      La(t);
      break;
    case 1:
      pe(t.type) && Gr(t);
      break;
    case 4:
      ji(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      F(qr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (F(U, U.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? nc(e, t, n) : (F(U, U.current & 1), e = Ze(e, t, n), e !== null ? e.sibling : null);
      F(U, U.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return rc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), F(U, U.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, ba(e, t, n);
  }
  return Ze(e, t, n);
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
    e = t.stateNode, Pt(Ue.current);
    var o = null;
    switch (n) {
      case "input":
        l = fo(e, l), r = fo(e, r), o = [];
        break;
      case "select":
        l = V({}, l, { value: void 0 }), r = V({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = ho(e, l), r = ho(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yr);
    }
    yo(n, r);
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
          c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (In.hasOwnProperty(c) ? (s != null && c === "onScroll" && I("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
ic = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sn(e, t) {
  if (!A)
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
function $d(e, t, n) {
  var r = t.pendingProps;
  switch (Ci(t), t.tag) {
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
      return pe(t.type) && Xr(), re(t), null;
    case 3:
      return r = t.stateNode, un(), M(de), M(oe), Oi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (kr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, je !== null && (qo(je), je = null))), Wo(e, t), re(t), null;
    case 5:
      Ri(t);
      var l = Pt(Gn.current);
      if (n = t.type, e !== null && t.stateNode != null)
        oc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(y(166));
          return re(t), null;
        }
        if (e = Pt(Ue.current), kr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Me] = t, r[Yn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              I("cancel", r), I("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              I("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Nn.length; l++)
                I(Nn[l], r);
              break;
            case "source":
              I("error", r);
              break;
            case "img":
            case "image":
            case "link":
              I(
                "error",
                r
              ), I("load", r);
              break;
            case "details":
              I("toggle", r);
              break;
            case "input":
              lu(r, o), I("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, I("invalid", r);
              break;
            case "textarea":
              iu(r, o), I("invalid", r);
          }
          yo(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && wr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && wr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : In.hasOwnProperty(i) && u != null && i === "onScroll" && I("scroll", r);
            }
          switch (n) {
            case "input":
              fr(r), ou(r, o, !0);
              break;
            case "textarea":
              fr(r), uu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Yr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Os(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Me] = t, e[Yn] = r, lc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = go(n, r), n) {
              case "dialog":
                I("cancel", e), I("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                I("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Nn.length; l++)
                  I(Nn[l], e);
                l = r;
                break;
              case "source":
                I("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                I(
                  "error",
                  e
                ), I("load", e), l = r;
                break;
              case "details":
                I("toggle", e), l = r;
                break;
              case "input":
                lu(e, r), l = fo(e, r), I("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = V({}, r, { value: void 0 }), I("invalid", e);
                break;
              case "textarea":
                iu(e, r), l = ho(e, r), I("invalid", e);
                break;
              default:
                l = r;
            }
            yo(n, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Fs(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && $s(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Mn(e, s) : typeof s == "number" && Mn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (In.hasOwnProperty(o) ? s != null && o === "onScroll" && I("scroll", e) : s != null && ai(e, o, s, i));
              }
            switch (n) {
              case "input":
                fr(e), ou(e, r, !1);
                break;
              case "textarea":
                fr(e), uu(e);
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
                typeof l.onClick == "function" && (e.onclick = Yr);
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
        if (n = Pt(Gn.current), Pt(Ue.current), kr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Me] = t, (o = r.nodeValue !== n) && (e = ye, e !== null))
            switch (e.tag) {
              case 3:
                wr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && wr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Me] = t, t.stateNode = r;
      }
      return re(t), null;
    case 13:
      if (M(U), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (A && ve !== null && t.mode & 1 && !(t.flags & 128))
          Ea(), ln(), t.flags |= 98560, o = !1;
        else if (o = kr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(y(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(y(317));
            o[Me] = t;
          } else
            ln(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          re(t), o = !1;
        } else
          je !== null && (qo(je), je = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || U.current & 1 ? G === 0 && (G = 3) : Hi())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
    case 4:
      return un(), Wo(e, t), e === null && Hn(t.stateNode.containerInfo), re(t), null;
    case 10:
      return Ti(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && Xr(), re(t), null;
    case 19:
      if (M(U), o = t.memoizedState, o === null)
        return re(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          Sn(o, !1);
        else {
          if (G !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = tl(e), i !== null) {
                for (t.flags |= 128, Sn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return F(U, U.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && K() > an && (t.flags |= 128, r = !0, Sn(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = tl(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Sn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !A)
              return re(t), null;
          } else
            2 * K() - o.renderingStartTime > an && n !== 1073741824 && (t.flags |= 128, r = !0, Sn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = K(), t.sibling = null, n = U.current, F(U, r ? n & 1 | 2 : n & 1), t) : (re(t), null);
    case 22:
    case 23:
      return Wi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function Dd(e, t) {
  switch (Ci(t), t.tag) {
    case 1:
      return pe(t.type) && Xr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return un(), M(de), M(oe), Oi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ri(t), null;
    case 13:
      if (M(U), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(y(340));
        ln();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return M(U), null;
    case 4:
      return un(), null;
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
var Er = !1, le = !1, Fd = typeof WeakSet == "function" ? WeakSet : Set, x = null;
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
function Ho(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var Zu = !1;
function Id(e, t) {
  if (To = Wr, e = ca(), xi(e)) {
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
              for (var w; h !== n || l !== 0 && h.nodeType !== 3 || (u = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (s = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (w = h.firstChild) !== null; )
                p = h, h = w;
              for (; ; ) {
                if (h === e)
                  break t;
                if (p === n && ++c === l && (u = i), p === o && ++m === r && (s = i), (w = h.nextSibling) !== null)
                  break;
                h = p, p = h.parentNode;
              }
              h = w;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (zo = { focusedElem: e, selectionRange: n }, Wr = !1, x = t; x !== null; )
    if (t = x, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, x = e;
    else
      for (; x !== null; ) {
        t = x;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var k = g.memoizedProps, D = g.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : ze(t.type, k), D);
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
  return g = Zu, Zu = !1, g;
}
function On(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Ho(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function gl(e, t) {
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
function Ko(e) {
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
  t !== null && (e.alternate = null, uc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Me], delete t[Yn], delete t[Ro], delete t[wd], delete t[kd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
function Yo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yr));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Yo(e, t, n), e = e.sibling; e !== null; )
      Yo(e, t, n), e = e.sibling;
}
function Xo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Xo(e, t, n), e = e.sibling; e !== null; )
      Xo(e, t, n), e = e.sibling;
}
var b = null, Le = !1;
function be(e, t, n) {
  for (n = n.child; n !== null; )
    ac(e, t, n), n = n.sibling;
}
function ac(e, t, n) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function")
    try {
      Ae.onCommitFiberUnmount(cl, n);
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
      b !== null && (Le ? (e = b, n = n.stateNode, e.nodeType === 8 ? Yl(e.parentNode, n) : e.nodeType === 1 && Yl(e, n), Vn(e)) : Yl(b, n.stateNode));
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
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Ho(n, t, i), l = l.next;
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
function qu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Fd()), t.forEach(function(r) {
      var l = Kd.bind(null, e, r);
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
        ac(o, i, l), b = null, Le = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (c) {
        Q(l, t, c);
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
      if (Te(t, e), Fe(e), r & 4) {
        try {
          On(3, e, e.return), gl(3, e);
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
      Te(t, e), Fe(e), r & 512 && n !== null && Xt(n, n.return);
      break;
    case 5:
      if (Te(t, e), Fe(e), r & 512 && n !== null && Xt(n, n.return), e.flags & 32) {
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
            u === "input" && o.type === "radio" && o.name != null && js(l, o), go(u, i);
            var c = go(u, o);
            for (i = 0; i < s.length; i += 2) {
              var m = s[i], h = s[i + 1];
              m === "style" ? Fs(l, h) : m === "dangerouslySetInnerHTML" ? $s(l, h) : m === "children" ? Mn(l, h) : ai(l, m, h, c);
            }
            switch (u) {
              case "input":
                po(l, o);
                break;
              case "textarea":
                Rs(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null ? Zt(l, !!o.multiple, w, !1) : p !== !!o.multiple && (o.defaultValue != null ? Zt(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Zt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Yn] = o;
          } catch (k) {
            Q(e, e.return, k);
          }
      }
      break;
    case 6:
      if (Te(t, e), Fe(e), r & 4) {
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
      if (Te(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Vn(t.containerInfo);
        } catch (k) {
          Q(e, e.return, k);
        }
      break;
    case 4:
      Te(t, e), Fe(e);
      break;
    case 13:
      Te(t, e), Fe(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Vi = K())), r & 4 && qu(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (c = le) || m, Te(t, e), le = c) : Te(t, e), Fe(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1)
          for (x = e, m = e.child; m !== null; ) {
            for (h = x = m; x !== null; ) {
              switch (p = x, w = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  On(4, p, p.return);
                  break;
                case 1:
                  Xt(p, p.return);
                  var g = p.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
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
                    es(h);
                    continue;
                  }
              }
              w !== null ? (w.return = p, x = w) : es(h);
            }
            m = m.sibling;
          }
        e:
          for (m = null, h = e; ; ) {
            if (h.tag === 5) {
              if (m === null) {
                m = h;
                try {
                  l = h.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ds("display", i));
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
      Te(t, e), Fe(e), r & 4 && qu(e);
      break;
    case 21:
      break;
    default:
      Te(
        t,
        e
      ), Fe(e);
  }
}
function Fe(e) {
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
          r.flags & 32 && (Mn(l, ""), r.flags &= -33);
          var o = Ju(e);
          Xo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Ju(e);
          Yo(e, u, i);
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
function Md(e, t, n) {
  x = e, fc(e);
}
function fc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Er;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || le;
        u = Er;
        var c = le;
        if (Er = i, (le = s) && !c)
          for (x = l; x !== null; )
            i = x, s = i.child, i.tag === 22 && i.memoizedState !== null ? ts(l) : s !== null ? (s.return = i, x = s) : ts(l);
        for (; o !== null; )
          x = o, fc(o), o = o.sibling;
        x = l, Er = u, le = c;
      }
      bu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, x = o) : bu(e);
  }
}
function bu(e) {
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
              le || gl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Fu(t, o, r);
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
                Fu(t, i, n);
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
        le || t.flags & 512 && Ko(t);
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
function es(e) {
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
function ts(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            gl(4, t);
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
            Ko(t);
          } catch (s) {
            Q(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ko(t);
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
var Ad = Math.ceil, ll = qe.ReactCurrentDispatcher, Ui = qe.ReactCurrentOwner, Ce = qe.ReactCurrentBatchConfig, R = 0, q = null, Y = null, ee = 0, he = 0, Gt = gt(0), G = 0, bn = null, Ot = 0, wl = 0, Bi = 0, $n = null, ce = null, Vi = 0, an = 1 / 0, Ve = null, ol = !1, Go = null, dt = null, Cr = !1, it = null, il = 0, Dn = 0, Zo = null, Dr = -1, Fr = 0;
function ue() {
  return R & 6 ? K() : Dr !== -1 ? Dr : Dr = K();
}
function pt(e) {
  return e.mode & 1 ? R & 2 && ee !== 0 ? ee & -ee : xd.transition !== null ? (Fr === 0 && (Fr = Xs()), Fr) : (e = $, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ta(e.type)), e) : 1;
}
function $e(e, t, n, r) {
  if (50 < Dn)
    throw Dn = 0, Zo = null, Error(y(185));
  nr(e, n, r), (!(R & 2) || e !== q) && (e === q && (!(R & 2) && (wl |= n), G === 4 && rt(e, ee)), me(e, r), n === 1 && R === 0 && !(t.mode & 1) && (an = K() + 500, hl && wt()));
}
function me(e, t) {
  var n = e.callbackNode;
  xf(e, t);
  var r = Qr(e, e === q ? ee : 0);
  if (r === 0)
    n !== null && cu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && cu(n), t === 1)
      e.tag === 0 ? Sd(ns.bind(null, e)) : ka(ns.bind(null, e)), yd(function() {
        !(R & 6) && wt();
      }), n = null;
    else {
      switch (Gs(r)) {
        case 1:
          n = mi;
          break;
        case 4:
          n = Ks;
          break;
        case 16:
          n = Vr;
          break;
        case 536870912:
          n = Ys;
          break;
        default:
          n = Vr;
      }
      n = wc(n, dc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function dc(e, t) {
  if (Dr = -1, Fr = 0, R & 6)
    throw Error(y(327));
  var n = e.callbackNode;
  if (tn() && e.callbackNode !== n)
    return null;
  var r = Qr(e, e === q ? ee : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = ul(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = mc();
    (q !== e || ee !== t) && (Ve = null, an = K() + 500, Tt(e, t));
    do
      try {
        Vd();
        break;
      } catch (u) {
        pc(e, u);
      }
    while (1);
    Pi(), ll.current = o, R = l, Y !== null ? t = 0 : (q = null, ee = 0, t = G);
  }
  if (t !== 0) {
    if (t === 2 && (l = Eo(e), l !== 0 && (r = l, t = Jo(e, l))), t === 1)
      throw n = bn, Tt(e, 0), rt(e, r), me(e, K()), n;
    if (t === 6)
      rt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Ud(l) && (t = ul(e, r), t === 2 && (o = Eo(e), o !== 0 && (r = o, t = Jo(e, o))), t === 1))
        throw n = bn, Tt(e, 0), rt(e, r), me(e, K()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Ct(e, ce, Ve);
          break;
        case 3:
          if (rt(e, r), (r & 130023424) === r && (t = Vi + 500 - K(), 10 < t)) {
            if (Qr(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ue(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = jo(Ct.bind(null, e, ce, Ve), t);
            break;
          }
          Ct(e, ce, Ve);
          break;
        case 4:
          if (rt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Oe(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ad(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = jo(Ct.bind(null, e, ce, Ve), r);
            break;
          }
          Ct(e, ce, Ve);
          break;
        case 5:
          Ct(e, ce, Ve);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? dc.bind(null, e) : null;
}
function Jo(e, t) {
  var n = $n;
  return e.current.memoizedState.isDehydrated && (Tt(e, t).flags |= 256), e = ul(e, t), e !== 2 && (t = ce, ce = n, t !== null && qo(t)), e;
}
function qo(e) {
  ce === null ? ce = e : ce.push.apply(ce, e);
}
function Ud(e) {
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
  for (t &= ~Bi, t &= ~wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Oe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ns(e) {
  if (R & 6)
    throw Error(y(327));
  tn();
  var t = Qr(e, 0);
  if (!(t & 1))
    return me(e, K()), null;
  var n = ul(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Eo(e);
    r !== 0 && (t = r, n = Jo(e, r));
  }
  if (n === 1)
    throw n = bn, Tt(e, 0), rt(e, t), me(e, K()), n;
  if (n === 6)
    throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ct(e, ce, Ve), me(e, K()), null;
}
function Qi(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    R = n, R === 0 && (an = K() + 500, hl && wt());
  }
}
function $t(e) {
  it !== null && it.tag === 0 && !(R & 6) && tn();
  var t = R;
  R |= 1;
  var n = Ce.transition, r = $;
  try {
    if (Ce.transition = null, $ = 1, e)
      return e();
  } finally {
    $ = r, Ce.transition = n, R = t, !(R & 6) && wt();
  }
}
function Wi() {
  he = Gt.current, M(Gt);
}
function Tt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, vd(n)), Y !== null)
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch (Ci(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Xr();
          break;
        case 3:
          un(), M(de), M(oe), Oi();
          break;
        case 5:
          Ri(r);
          break;
        case 4:
          un();
          break;
        case 13:
          M(U);
          break;
        case 19:
          M(U);
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
  if (q = e, Y = e = mt(e.current, null), ee = he = t, G = 0, bn = null, Bi = wl = Ot = 0, ce = $n = null, Nt !== null) {
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
function pc(e, t) {
  do {
    var n = Y;
    try {
      if (Pi(), Rr.current = rl, nl) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        nl = !1;
      }
      if (Rt = 0, J = X = B = null, Rn = !1, Zn = 0, Ui.current = null, n === null || n.return === null) {
        G = 1, bn = t, Y = null;
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
          var w = Qu(i);
          if (w !== null) {
            w.flags &= -257, Wu(w, i, u, o, t), w.mode & 1 && Vu(o, c, t), t = w, s = c;
            var g = t.updateQueue;
            if (g === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), t.updateQueue = k;
            } else
              g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Vu(o, c, t), Hi();
              break e;
            }
            s = Error(y(426));
          }
        } else if (A && u.mode & 1) {
          var D = Qu(i);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256), Wu(D, i, u, o, t), _i(sn(s, u));
            break e;
          }
        }
        o = s = sn(s, u), G !== 4 && (G = 2), $n === null ? $n = [o] : $n.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Za(o, s, t);
              Du(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (dt === null || !dt.has(d)))) {
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
  var e = ll.current;
  return ll.current = rl, e === null ? rl : e;
}
function Hi() {
  (G === 0 || G === 3 || G === 2) && (G = 4), q === null || !(Ot & 268435455) && !(wl & 268435455) || rt(q, ee);
}
function ul(e, t) {
  var n = R;
  R |= 2;
  var r = mc();
  (q !== e || ee !== t) && (Ve = null, Tt(e, t));
  do
    try {
      Bd();
      break;
    } catch (l) {
      pc(e, l);
    }
  while (1);
  if (Pi(), R = n, ll.current = r, Y !== null)
    throw Error(y(261));
  return q = null, ee = 0, G;
}
function Bd() {
  for (; Y !== null; )
    hc(Y);
}
function Vd() {
  for (; Y !== null && !pf(); )
    hc(Y);
}
function hc(e) {
  var t = gc(e.alternate, e, he);
  e.memoizedProps = e.pendingProps, t === null ? vc(e) : Y = t, Ui.current = null;
}
function vc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Dd(n, t), n !== null) {
        n.flags &= 32767, Y = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        G = 6, Y = null;
        return;
      }
    } else if (n = $d(n, t, he), n !== null) {
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
  var r = $, l = Ce.transition;
  try {
    Ce.transition = null, $ = 1, Qd(e, t, n, r);
  } finally {
    Ce.transition = l, $ = r;
  }
  return null;
}
function Qd(e, t, n, r) {
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
  if (Ef(e, o), e === q && (Y = q = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Cr || (Cr = !0, wc(Vr, function() {
    return tn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ce.transition, Ce.transition = null;
    var i = $;
    $ = 1;
    var u = R;
    R |= 4, Ui.current = null, Id(e, n), cc(n, e), ad(zo), Wr = !!To, zo = To = null, e.current = n, Md(n), mf(), R = u, $ = i, Ce.transition = o;
  } else
    e.current = n;
  if (Cr && (Cr = !1, it = e, il = l), o = e.pendingLanes, o === 0 && (dt = null), yf(n.stateNode), me(e, K()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ol)
    throw ol = !1, e = Go, Go = null, e;
  return il & 1 && e.tag !== 0 && tn(), o = e.pendingLanes, o & 1 ? e === Zo ? Dn++ : (Dn = 0, Zo = e) : Dn = 0, wt(), null;
}
function tn() {
  if (it !== null) {
    var e = Gs(il), t = Ce.transition, n = $;
    try {
      if (Ce.transition = null, $ = 16 > e ? 16 : e, it === null)
        var r = !1;
      else {
        if (e = it, it = null, il = 0, R & 6)
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
                      var p = m.sibling, w = m.return;
                      if (uc(m), m === c) {
                        x = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = w, x = p;
                        break;
                      }
                      x = w;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var k = g.child;
                if (k !== null) {
                  g.child = null;
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
                        gl(9, u);
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
        if (R = l, wt(), Ae && typeof Ae.onPostCommitFiberRoot == "function")
          try {
            Ae.onPostCommitFiberRoot(cl, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      $ = n, Ce.transition = t;
    }
  }
  return !1;
}
function rs(e, t, n) {
  t = sn(n, t), t = Za(e, t, 1), e = ft(e, t, 1), t = ue(), e !== null && (nr(e, 1, t), me(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3)
    rs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        rs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (dt === null || !dt.has(r))) {
          e = sn(n, e), e = Ja(t, e, 1), t = ft(t, e, 1), e = ue(), t !== null && (nr(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Wd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ue(), e.pingedLanes |= e.suspendedLanes & n, q === e && (ee & n) === n && (G === 4 || G === 3 && (ee & 130023424) === ee && 500 > K() - Vi ? Tt(e, 0) : Bi |= n), me(e, t);
}
function yc(e, t) {
  t === 0 && (e.mode & 1 ? (t = mr, mr <<= 1, !(mr & 130023424) && (mr = 4194304)) : t = 1);
  var n = ue();
  e = Ge(e, t), e !== null && (nr(e, t, n), me(e, n));
}
function Hd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), yc(e, n);
}
function Kd(e, t) {
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
    if (e.memoizedProps !== t.pendingProps || de.current)
      fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return fe = !1, Od(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else
    fe = !1, A && t.flags & 1048576 && Sa(t, Jr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      $r(e, t), e = t.pendingProps;
      var l = rn(t, oe.current);
      en(t, n), l = Di(null, t, r, e, l, n);
      var o = Fi();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pe(r) ? (o = !0, Gr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Li(t), l.updater = vl, t.stateNode = l, l._reactInternals = t, Mo(t, r, e, n), t = Bo(null, t, r, !0, o, n)) : (t.tag = 0, A && o && Ei(t), ie(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch ($r(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Xd(r), e = ze(r, e), l) {
          case 0:
            t = Uo(null, t, r, e, n);
            break e;
          case 1:
            t = Yu(null, t, r, e, n);
            break e;
          case 11:
            t = Hu(null, t, r, e, n);
            break e;
          case 14:
            t = Ku(null, t, r, ze(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), Uo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), Yu(e, t, r, l, n);
    case 3:
      e: {
        if (tc(t), e === null)
          throw Error(y(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, _a(e, t), el(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = sn(Error(y(423)), t), t = Xu(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = sn(Error(y(424)), t), t = Xu(e, t, r, n, l);
            break e;
          } else
            for (ve = ct(t.stateNode.containerInfo.firstChild), ye = t, A = !0, je = null, n = za(t, null, r, n), t.child = n; n; )
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
      return La(t), e === null && Do(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Lo(r, l) ? i = null : o !== null && Lo(r, o) && (t.flags |= 32), ec(e, t), ie(e, t, i, n), t.child;
    case 6:
      return e === null && Do(t), null;
    case 13:
      return nc(e, t, n);
    case 4:
      return ji(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = on(t, null, r, n) : ie(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), Hu(e, t, r, l, n);
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, F(qr, r._currentValue), r._currentValue = i, o !== null)
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
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Fo(
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
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Fo(i, n, t), i = o.sibling;
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
      return r = t.type, l = ze(r, t.pendingProps), l = ze(r.type, l), Ku(e, t, r, l, n);
    case 15:
      return qa(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), $r(e, t), t.tag = 1, pe(r) ? (e = !0, Gr(t)) : e = !1, en(t, n), Pa(t, r, l), Mo(t, r, l, n), Bo(null, t, r, !0, e, n);
    case 19:
      return rc(e, t, n);
    case 22:
      return ba(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function wc(e, t) {
  return Hs(e, t);
}
function Yd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ee(e, t, n, r) {
  return new Yd(e, t, n, r);
}
function Ki(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Xd(e) {
  if (typeof e == "function")
    return Ki(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === fi)
      return 11;
    if (e === di)
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
    Ki(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case At:
          return zt(n.children, l, o, t);
        case ci:
          i = 8, l |= 8;
          break;
        case uo:
          return e = Ee(12, n, t, l | 2), e.elementType = uo, e.lanes = o, e;
        case so:
          return e = Ee(13, n, t, l), e.elementType = so, e.lanes = o, e;
        case ao:
          return e = Ee(19, n, t, l), e.elementType = ao, e.lanes = o, e;
        case Ts:
          return kl(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ns:
                i = 10;
                break e;
              case Ps:
                i = 9;
                break e;
              case fi:
                i = 11;
                break e;
              case di:
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
function zt(e, t, n, r) {
  return e = Ee(7, e, r, t), e.lanes = n, e;
}
function kl(e, t, n, r) {
  return e = Ee(22, e, r, t), e.elementType = Ts, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function to(e, t, n) {
  return e = Ee(6, e, null, t), e.lanes = n, e;
}
function no(e, t, n) {
  return t = Ee(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Gd(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fl(0), this.expirationTimes = Fl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Yi(e, t, n, r, l, o, i, u, s) {
  return e = new Gd(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ee(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Li(o), e;
}
function Zd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Mt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function kc(e) {
  if (!e)
    return vt;
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
      return wa(e, n, t);
  }
  return t;
}
function Sc(e, t, n, r, l, o, i, u, s) {
  return e = Yi(n, r, !0, e, l, o, i, u, s), e.context = kc(null), n = e.current, r = ue(), l = pt(n), o = Ke(r, l), o.callback = t ?? null, ft(n, o, l), e.current.lanes = l, nr(e, l, r), me(e, r), e;
}
function Sl(e, t, n, r) {
  var l = t.current, o = ue(), i = pt(l);
  return n = kc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ke(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ft(l, t, i), e !== null && ($e(e, l, i, o), jr(e, l, i)), i;
}
function sl(e) {
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
function Xi(e, t) {
  ls(e, t), (e = e.alternate) && ls(e, t);
}
function Jd() {
  return null;
}
var xc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Gi(e) {
  this._internalRoot = e;
}
xl.prototype.render = Gi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(y(409));
  Sl(e, t, null, null);
};
xl.prototype.unmount = Gi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $t(function() {
      Sl(null, e, null, null);
    }), t[Xe] = null;
  }
};
function xl(e) {
  this._internalRoot = e;
}
xl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = qs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++)
      ;
    nt.splice(n, 0, e), n === 0 && ea(e);
  }
};
function Zi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function El(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function os() {
}
function qd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = sl(i);
        o.call(c);
      };
    }
    var i = Sc(t, r, e, 0, null, !1, !1, "", os);
    return e._reactRootContainer = i, e[Xe] = i.current, Hn(e.nodeType === 8 ? e.parentNode : e), $t(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = sl(s);
      u.call(c);
    };
  }
  var s = Yi(e, 0, !1, null, null, !1, !1, "", os);
  return e._reactRootContainer = s, e[Xe] = s.current, Hn(e.nodeType === 8 ? e.parentNode : e), $t(function() {
    Sl(t, s, n, r);
  }), s;
}
function Cl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = sl(i);
        u.call(s);
      };
    }
    Sl(t, i, e, l);
  } else
    i = qd(n, t, e, l, r);
  return sl(i);
}
Zs = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _n(t.pendingLanes);
        n !== 0 && (hi(t, n | 1), me(t, K()), !(R & 6) && (an = K() + 500, wt()));
      }
      break;
    case 13:
      $t(function() {
        var r = Ge(e, 1);
        if (r !== null) {
          var l = ue();
          $e(r, e, 1, l);
        }
      }), Xi(e, 1);
  }
};
vi = function(e) {
  if (e.tag === 13) {
    var t = Ge(e, 134217728);
    if (t !== null) {
      var n = ue();
      $e(t, e, 134217728, n);
    }
    Xi(e, 134217728);
  }
};
Js = function(e) {
  if (e.tag === 13) {
    var t = pt(e), n = Ge(e, t);
    if (n !== null) {
      var r = ue();
      $e(n, e, t, r);
    }
    Xi(e, t);
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
ko = function(e, t, n) {
  switch (t) {
    case "input":
      if (po(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ml(r);
            if (!l)
              throw Error(y(90));
            Ls(r), po(r, l);
          }
        }
      }
      break;
    case "textarea":
      Rs(e, n);
      break;
    case "select":
      t = n.value, t != null && Zt(e, !!n.multiple, t, !1);
  }
};
As = Qi;
Us = $t;
var bd = { usingClientEntryPoint: !1, Events: [lr, Qt, ml, Is, Ms, Qi] }, xn = { findFiberByHostInstance: _t, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, ep = { bundleType: xn.bundleType, version: xn.version, rendererPackageName: xn.rendererPackageName, rendererConfig: xn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: qe.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Qs(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: xn.findFiberByHostInstance || Jd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var _r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_r.isDisabled && _r.supportsFiber)
    try {
      cl = _r.inject(ep), Ae = _r;
    } catch {
    }
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bd;
we.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Zi(t))
    throw Error(y(200));
  return Zd(e, t, null, n);
};
we.createRoot = function(e, t) {
  if (!Zi(e))
    throw Error(y(299));
  var n = !1, r = "", l = xc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Yi(e, 1, !1, null, null, n, !1, r, l), e[Xe] = t.current, Hn(e.nodeType === 8 ? e.parentNode : e), new Gi(t);
};
we.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = Qs(t), e = e === null ? null : e.stateNode, e;
};
we.flushSync = function(e) {
  return $t(e);
};
we.hydrate = function(e, t, n) {
  if (!El(t))
    throw Error(y(200));
  return Cl(null, e, t, !0, n);
};
we.hydrateRoot = function(e, t, n) {
  if (!Zi(e))
    throw Error(y(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = xc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Sc(t, null, e, 1, n ?? null, l, !1, o, i), e[Xe] = t.current, Hn(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new xl(t);
};
we.render = function(e, t, n) {
  if (!El(t))
    throw Error(y(200));
  return Cl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function(e) {
  if (!El(e))
    throw Error(y(40));
  return e._reactRootContainer ? ($t(function() {
    Cl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Xe] = null;
    });
  }), !0) : !1;
};
we.unstable_batchedUpdates = Qi;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!El(n))
    throw Error(y(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(y(38));
  return Cl(e, t, n, !1, r);
};
we.version = "18.2.0-next-9e3b772b8-20220608";
function Ec() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ec);
    } catch (e) {
      console.error(e);
    }
}
Ec(), Ss.exports = we;
var tp = Ss.exports, is = tp;
oo.createRoot = is.createRoot, oo.hydrateRoot = is.hydrateRoot;
Fn.createContext(null);
const Cc = Fn.createContext(null);
function _l() {
  const e = O.useContext(Cc);
  return {
    buttonBackgroundColor: (e == null ? void 0 : e.buttonBackgroundColor) || "#45ddc5",
    buttonTextColor: (e == null ? void 0 : e.buttonTextColor) || "#FFFFFF",
    buttonBorderColor: (e == null ? void 0 : e.buttonBorderColor) || "#45ddc5",
    buttonText: (e == null ? void 0 : e.buttonText) || "Send",
    questionAvatarBackgroundColor: (e == null ? void 0 : e.questionAvatarBackgroundColor) || "#D9D9D9",
    questionAvatarTextColor: (e == null ? void 0 : e.questionAvatarTextColor) || "#ffffff",
    avatarWidth: (e == null ? void 0 : e.avatarWidth) || "25px",
    answerAvatarBackgroundColor: (e == null ? void 0 : e.answerAvatarBackgroundColor) || "#45ddc5",
    answerAvatarTextColor: (e == null ? void 0 : e.answerAvatarTextColor) || "#ffffff",
    questionAvatarText: (e == null ? void 0 : e.questionAvatarText) || "Q",
    answerAvatarText: (e == null ? void 0 : e.answerAvatarText) || "A",
    copyButtonText: (e == null ? void 0 : e.copyButtonText) || "Copy",
    referenceButtonText: (e == null ? void 0 : e.referenceButtonText) || "References",
    inputPlaceholderText: (e == null ? void 0 : e.inputPlaceholderText) || "Type your question here..."
  };
}
function np({
  type: e,
  onClick: t,
  children: n,
  disabled: r
}) {
  const i = `focus:ring-2 focus:ring-offset-2 px-4 py-2 rounded-lg border-2 bg-tekstiai-teal text-white ${r ? "cursor-not-allowed opacity-50" : "hover:opacity-80"}`, { buttonBackgroundColor: u, buttonTextColor: s, buttonBorderColor: c } = _l();
  return /* @__PURE__ */ P.jsx(
    "button",
    {
      type: e,
      onClick: t,
      disabled: r,
      className: i,
      style: { backgroundColor: u, color: s, borderColor: c },
      children: n
    }
  );
}
function rp({
  value: e,
  onChange: t,
  onSubmit: n,
  disabled: r
}) {
  const { buttonText: l, inputPlaceholderText: o } = _l();
  return /* @__PURE__ */ P.jsxs(
    "form",
    {
      onSubmit: (i) => {
        i.preventDefault(), n();
      },
      className: "flex justify-center items-center",
      children: [
        /* @__PURE__ */ P.jsx(
          "input",
          {
            type: "text",
            value: e,
            onChange: (i) => t(i.target.value),
            placeholder: o,
            disabled: r,
            className: "w-full px-4 py-2 mr-2 border-2 border-gray-300 bg-transparent rounded-lg focus:outline-none focus:border-tekstiai-teal"
          }
        ),
        /* @__PURE__ */ P.jsx(np, { type: "submit", disabled: r, children: l })
      ]
    }
  );
}
function _c({
  type: e,
  backgroundColor: t,
  textColor: n,
  width: r,
  text: l
}) {
  const o = e === "question" ? "Q" : "A", i = e === "question" ? "bg-tekstiai-gray-platinum" : "bg-tekstiai-teal";
  return /* @__PURE__ */ P.jsx(
    "div",
    {
      style: {
        backgroundColor: t,
        color: n || "white",
        width: r
      },
      className: `${i} font-bold text-[.5rem] rounded-[6px] w-[25px] h-[25px] flex justify-center items-center dark:bg-black`,
      children: /* @__PURE__ */ P.jsx("span", { children: l || o })
    }
  );
}
function us({
  question: e
}) {
  const { questionAvatarBackgroundColor: t, questionAvatarTextColor: n, avatarWidth: r, questionAvatarText: l } = _l();
  return /* @__PURE__ */ P.jsxs("div", { className: "p-4 md:py-6 gap-2 md:gap-4 w-full bg-tekstiai-white-seasalt flex self-start align-center justify-start md:justify-center dark:bg-tekstiai-gray-onyx border-b", children: [
    /* @__PURE__ */ P.jsx(
      _c,
      {
        type: "question",
        backgroundColor: t,
        textColor: n,
        width: r,
        text: l
      }
    ),
    /* @__PURE__ */ P.jsx("span", { className: "md:w-3/4 xl:w-1/2 text-left", children: e })
  ] });
}
function ro({
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
let lp = { data: "" }, op = (e) => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || lp, ip = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, up = /\/\*[^]*?\*\/|  +/g, ss = /\n+/g, lt = (e, t) => {
  let n = "", r = "", l = "";
  for (let o in e) {
    let i = e[o];
    o[0] == "@" ? o[1] == "i" ? n = o + " " + i + ";" : r += o[1] == "f" ? lt(i, o) : o + "{" + lt(i, o[1] == "k" ? "" : t) + "}" : typeof i == "object" ? r += lt(i, t ? t.replace(/([^,])+/g, (u) => o.replace(/(^:.*)|([^,])+/g, (s) => /&/.test(s) ? s.replace(/&/g, u) : u ? u + " " + s : s)) : o) : i != null && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(), l += lt.p ? lt.p(o, i) : o + ":" + i + ";");
  }
  return n + (t && l ? t + "{" + l + "}" : l) + r;
}, Be = {}, Nc = (e) => {
  if (typeof e == "object") {
    let t = "";
    for (let n in e)
      t += n + Nc(e[n]);
    return t;
  }
  return e;
}, sp = (e, t, n, r, l) => {
  let o = Nc(e), i = Be[o] || (Be[o] = ((s) => {
    let c = 0, m = 11;
    for (; c < s.length; )
      m = 101 * m + s.charCodeAt(c++) >>> 0;
    return "go" + m;
  })(o));
  if (!Be[i]) {
    let s = o !== e ? e : ((c) => {
      let m, h, p = [{}];
      for (; m = ip.exec(c.replace(up, "")); )
        m[4] ? p.shift() : m[3] ? (h = m[3].replace(ss, " ").trim(), p.unshift(p[0][h] = p[0][h] || {})) : p[0][m[1]] = m[2].replace(ss, " ").trim();
      return p[0];
    })(e);
    Be[i] = lt(l ? { ["@keyframes " + i]: s } : s, n ? "" : "." + i);
  }
  let u = n && Be.g ? Be.g : null;
  return n && (Be.g = Be[i]), ((s, c, m, h) => {
    h ? c.data = c.data.replace(h, s) : c.data.indexOf(s) === -1 && (c.data = m ? s + c.data : c.data + s);
  })(Be[i], t, r, u), i;
}, ap = (e, t, n) => e.reduce((r, l, o) => {
  let i = t[o];
  if (i && i.call) {
    let u = i(n), s = u && u.props && u.props.className || /^go/.test(u) && u;
    i = s ? "." + s : u && typeof u == "object" ? u.props ? "" : lt(u, "") : u === !1 ? "" : u;
  }
  return r + l + (i ?? "");
}, "");
function Nl(e) {
  let t = this || {}, n = e.call ? e(t.p) : e;
  return sp(n.unshift ? n.raw ? ap(n, [].slice.call(arguments, 1), t.p) : n.reduce((r, l) => Object.assign(r, l && l.call ? l(t.p) : l), {}) : n, op(t.target), t.g, t.o, t.k);
}
let Pc, bo, ei;
Nl.bind({ g: 1 });
let Je = Nl.bind({ k: 1 });
function cp(e, t, n, r) {
  lt.p = t, Pc = e, bo = n, ei = r;
}
function kt(e, t) {
  let n = this || {};
  return function() {
    let r = arguments;
    function l(o, i) {
      let u = Object.assign({}, o), s = u.className || l.className;
      n.p = Object.assign({ theme: bo && bo() }, u), n.o = / *go\d+/.test(s), u.className = Nl.apply(n, r) + (s ? " " + s : ""), t && (u.ref = i);
      let c = e;
      return e[0] && (c = u.as || e, delete u.as), ei && c[0] && ei(u), Pc(c, u);
    }
    return t ? t(l) : l;
  };
}
var fp = (e) => typeof e == "function", ti = (e, t) => fp(e) ? e(t) : e, dp = (() => {
  let e = 0;
  return () => (++e).toString();
})(), pp = (() => {
  let e;
  return () => {
    if (e === void 0 && typeof window < "u") {
      let t = matchMedia("(prefers-reduced-motion: reduce)");
      e = !t || t.matches;
    }
    return e;
  };
})(), mp = 20, Mr = /* @__PURE__ */ new Map(), hp = 1e3, as = (e) => {
  if (Mr.has(e))
    return;
  let t = setTimeout(() => {
    Mr.delete(e), Pl({ type: 4, toastId: e });
  }, hp);
  Mr.set(e, t);
}, vp = (e) => {
  let t = Mr.get(e);
  t && clearTimeout(t);
}, ni = (e, t) => {
  switch (t.type) {
    case 0:
      return { ...e, toasts: [t.toast, ...e.toasts].slice(0, mp) };
    case 1:
      return t.toast.id && vp(t.toast.id), { ...e, toasts: e.toasts.map((o) => o.id === t.toast.id ? { ...o, ...t.toast } : o) };
    case 2:
      let { toast: n } = t;
      return e.toasts.find((o) => o.id === n.id) ? ni(e, { type: 1, toast: n }) : ni(e, { type: 0, toast: n });
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
}, yp = [], lo = { toasts: [], pausedAt: void 0 }, Pl = (e) => {
  lo = ni(lo, e), yp.forEach((t) => {
    t(lo);
  });
}, gp = (e, t = "blank", n) => ({ createdAt: Date.now(), visible: !0, type: t, ariaProps: { role: "status", "aria-live": "polite" }, message: e, pauseDuration: 0, ...n, id: (n == null ? void 0 : n.id) || dp() }), ir = (e) => (t, n) => {
  let r = gp(t, e, n);
  return Pl({ type: 2, toast: r }), r.id;
}, Re = (e, t) => ir("blank")(e, t);
Re.error = ir("error");
Re.success = ir("success");
Re.loading = ir("loading");
Re.custom = ir("custom");
Re.dismiss = (e) => {
  Pl({ type: 3, toastId: e });
};
Re.remove = (e) => Pl({ type: 4, toastId: e });
Re.promise = (e, t, n) => {
  let r = Re.loading(t.loading, { ...n, ...n == null ? void 0 : n.loading });
  return e.then((l) => (Re.success(ti(t.success, l), { id: r, ...n, ...n == null ? void 0 : n.success }), l)).catch((l) => {
    Re.error(ti(t.error, l), { id: r, ...n, ...n == null ? void 0 : n.error });
  }), e;
};
var wp = Je`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, kp = Je`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Sp = Je`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, xp = kt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${wp} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${kp} 0.15s ease-out forwards;
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
    animation: ${Sp} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, Ep = Je`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, Cp = kt("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${Ep} 1s linear infinite;
`, _p = Je`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, Np = Je`
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
}`, Pp = kt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_p} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Np} 0.2s ease-out forwards;
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
`, Tp = kt("div")`
  position: absolute;
`, zp = kt("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Lp = Je`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, jp = kt("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Lp} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, Rp = ({ toast: e }) => {
  let { icon: t, type: n, iconTheme: r } = e;
  return t !== void 0 ? typeof t == "string" ? O.createElement(jp, null, t) : t : n === "blank" ? null : O.createElement(zp, null, O.createElement(Cp, { ...r }), n !== "loading" && O.createElement(Tp, null, n === "error" ? O.createElement(xp, { ...r }) : O.createElement(Pp, { ...r })));
}, Op = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, $p = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`, Dp = "0%{opacity:0;} 100%{opacity:1;}", Fp = "0%{opacity:1;} 100%{opacity:0;}", Ip = kt("div")`
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
`, Mp = kt("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Ap = (e, t) => {
  let n = e.includes("top") ? 1 : -1, [r, l] = pp() ? [Dp, Fp] : [Op(n), $p(n)];
  return { animation: t ? `${Je(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${Je(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
};
O.memo(({ toast: e, position: t, style: n, children: r }) => {
  let l = e.height ? Ap(e.position || t || "top-center", e.visible) : { opacity: 0 }, o = O.createElement(Rp, { toast: e }), i = O.createElement(Mp, { ...e.ariaProps }, ti(e.message, e));
  return O.createElement(Ip, { className: e.className, style: { ...l, ...n, ...e.style } }, typeof r == "function" ? r({ icon: o, message: i }) : O.createElement(O.Fragment, null, o, i));
});
cp(O.createElement);
Nl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
var er = Re;
function Up({ isStreaming: e }) {
  const [t, n] = O.useState(0);
  return O.useEffect(() => {
    if (e) {
      const r = setInterval(() => {
        n((l) => (l + 1) % 4);
      }, 200);
      return () => clearInterval(r);
    } else
      n(0);
  }, [e]), /* @__PURE__ */ P.jsx("span", { children: "." + ".".repeat(t) });
}
function cs({
  answer: e,
  references: t,
  isStreaming: n,
  stopStreaming: r
}) {
  const [l, o] = O.useState(!1), { answerAvatarBackgroundColor: i, answerAvatarTextColor: u, avatarWidth: s, answerAvatarText: c, copyButtonText: m, referenceButtonText: h } = _l();
  function p() {
    o(!l);
  }
  function w() {
    try {
      navigator.clipboard.writeText(e).then(() => {
        er.success("Copied to clipboard");
      });
    } catch {
      er.error("Failed to copy to clipboard");
    }
  }
  return /* @__PURE__ */ P.jsxs(
    "div",
    {
      id: "answer-container",
      className: "p-4 md:py-6 w-full self-start flex gap-3 md:gap-4 align-center justify-start md:justify-center",
      children: [
        /* @__PURE__ */ P.jsx(
          _c,
          {
            type: "answer",
            backgroundColor: i,
            textColor: u,
            width: s,
            text: c
          }
        ),
        /* @__PURE__ */ P.jsxs("div", { className: "md:w-3/4 xl:w-1/2", children: [
          Bp(e),
          n && e.length === 0 && /* @__PURE__ */ P.jsx("i", { className: "", children: "Gathering references" }),
          n && /* @__PURE__ */ P.jsx(Up, { isStreaming: n }),
          /* @__PURE__ */ P.jsxs("div", { children: [
            /* @__PURE__ */ P.jsxs("div", { id: "controls", className: "mt-4 flex gap-2", children: [
              /* @__PURE__ */ P.jsx(ro, { onClick: w, type: "button", children: m || "Copy" }),
              /* @__PURE__ */ P.jsx(
                ro,
                {
                  onClick: p,
                  active: l,
                  type: "button",
                  children: h || "References"
                }
              ),
              n && /* @__PURE__ */ P.jsx(
                ro,
                {
                  onClick: r,
                  type: "button",
                  children: "Stop"
                }
              )
            ] }),
            l && t && /* @__PURE__ */ P.jsx("ul", { className: "mt-4 px-12 py-6 border rounded-lg list-decimal max-w-fit", children: t.map((g) => /* @__PURE__ */ P.jsxs("li", { className: "flex flex-col", children: [
              /* @__PURE__ */ P.jsx("div", { className: "list-item font-bold", children: /* @__PURE__ */ P.jsx("span", { children: /* @__PURE__ */ P.jsx(
                "a",
                {
                  href: g.source,
                  target: "_blank",
                  children: g.title
                }
              ) }) }),
              /* @__PURE__ */ P.jsxs("span", { children: [
                "...",
                g.content.substring(0, 160),
                "..."
              ] })
            ] })) })
          ] })
        ] })
      ]
    }
  );
}
function Bp(e) {
  const t = e.split(`
`);
  return /* @__PURE__ */ P.jsx("div", { children: t.map((n, r) => /* @__PURE__ */ P.jsxs(Fn.Fragment, { children: [
    n,
    r < t.length - 1 && /* @__PURE__ */ P.jsx("br", {})
  ] }, r)) });
}
const Vp = Fn.forwardRef(
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
          e.length > 0 && e.map((u, s) => /* @__PURE__ */ P.jsxs(Fn.Fragment, { children: [
            /* @__PURE__ */ P.jsx(
              us,
              {
                question: u.question
              }
            ),
            /* @__PURE__ */ P.jsx(
              cs,
              {
                answer: u.answer,
                references: u.references
              }
            )
          ] }, s)),
          t && /* @__PURE__ */ P.jsx(
            us,
            {
              question: t
            }
          ),
          (n || l) && /* @__PURE__ */ P.jsx(
            cs,
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
async function Qp(e, t, n, r, l) {
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
    o.name !== "AbortError" && (er.error("Stream interrupted."), console.error("Failed to stream", o));
  }
}
async function Wp(e, t, n) {
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
      Qp(
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
const Kp = async (e, t, n, r, l, o) => {
  const { signal: i } = r, u = await Wp(e, t, {
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
    (c) => {
      o(c), s += c;
    },
    i
  ), {
    content: s,
    references: u.qa_pairs[u.qa_pairs.length - 1].references
  };
};
function Yp({
  apiKey: e,
  apiUrl: t
}) {
  const [n, r] = O.useState(""), [l, o] = O.useState(!1), [i, u] = O.useState(""), [s, c] = O.useState(""), [m, h] = O.useState([]), [p, w] = O.useState([]), g = O.useRef(null), k = O.useRef(null);
  function D() {
    g.current && (g.current.abort(), g.current = null), er.success("Stopped streaming"), o(!1), u(""), c(""), h([]);
  }
  O.useEffect(() => () => {
    g.current && (g.current.abort(), g.current = null);
  }, []);
  const f = async () => {
    if (!e) {
      er.error("No org key provided for the widget.");
      return;
    }
    const a = n;
    r(""), u(n), o(!0), g.current = new AbortController();
    const d = (S) => {
      c((C) => C + S);
    }, v = await Kp(
      e,
      t,
      a,
      g.current,
      p,
      d
    );
    o(!1), u(""), c(""), g.current.signal.aborted || w((S) => [
      ...S,
      {
        question: a,
        answer: v.content,
        references: v.references
      }
    ]);
  };
  return /* @__PURE__ */ P.jsxs("div", { className: "embed flex flex-col flex-1 overflow-auto w-full h-full p-5 bg-white", children: [
    /* @__PURE__ */ P.jsx(
      Vp,
      {
        ref: k,
        qaPairs: p,
        questionText: i,
        answerText: s,
        references: m,
        isStreaming: l,
        stopStreaming: D
      }
    ),
    /* @__PURE__ */ P.jsx(
      rp,
      {
        value: n,
        onChange: r,
        onSubmit: f,
        disabled: l
      }
    )
  ] });
}
function Xp({
  apiKey: e,
  apiUrl: t
}) {
  return /* @__PURE__ */ P.jsx(
    Yp,
    {
      apiKey: e,
      apiUrl: t
    }
  );
}
function Gp(e, t) {
  const { api: n, styles: r = null } = t;
  oo.createRoot(e).render(
    /* @__PURE__ */ P.jsx(Cc.Provider, { value: r, children: /* @__PURE__ */ P.jsx(Xp, { ...n }) })
  );
}
export {
  Gp as renderTekstiaiWidget
};
