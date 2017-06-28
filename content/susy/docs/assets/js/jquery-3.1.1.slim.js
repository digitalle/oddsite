!(function(e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function(e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function(e, t) {
  'use strict';
  function n(e, t) {
    var n = (t = t || $).createElement('script');
    (n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
  }
  function r(e) {
    var t = !!e && 'length' in e && e.length, n = te.type(e);
    return (
      'function' !== n &&
      !te.isWindow(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && t > 0 && t - 1 in e))
    );
  }
  function i(e, t, n) {
    return te.isFunction(t)
      ? te.grep(e, function(e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
          ? te.grep(e, function(e) {
              return e === t !== n;
            })
          : 'string' != typeof t
              ? te.grep(e, function(e) {
                  return X.call(t, e) > -1 !== n;
                })
              : fe.test(t)
                  ? te.filter(t, e, n)
                  : ((t = te.filter(t, e)), te.grep(e, function(e) {
                      return X.call(t, e) > -1 !== n && 1 === e.nodeType;
                    }));
  }
  function o(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function a(e) {
    var t = {};
    return te.each(e.match(ve) || [], function(e, n) {
      t[n] = !0;
    }), t;
  }
  function s(e) {
    return e;
  }
  function u(e) {
    throw e;
  }
  function l(e, t, n) {
    var r;
    try {
      e && te.isFunction((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && te.isFunction((r = e.then))
            ? r.call(e, t, n)
            : t.call(void 0, e);
    } catch (e) {
      n.call(void 0, e);
    }
  }
  function c() {
    $.removeEventListener(
      'DOMContentLoaded',
      c
    ), e.removeEventListener('load', c), te.ready();
  }
  function f() {
    this.expando = te.expando + f.uid++;
  }
  function d(e) {
    return (
      'true' === e ||
      ('false' !== e &&
        ('null' === e
          ? null
          : e === +e + '' ? +e : Te.test(e) ? JSON.parse(e) : e))
    );
  }
  function p(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = 'data-' + t.replace(Ne, '-$&').toLowerCase()), 'string' ==
          typeof (n = e.getAttribute(r)))
      ) {
        try {
          n = d(n);
        } catch (e) {}
        Ce.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function h(e, t, n, r) {
    var i,
      o = 1,
      a = 20,
      s = r
        ? function() {
            return r.cur();
          }
        : function() {
            return te.css(e, t, '');
          },
      u = s(),
      l = (n && n[3]) || (te.cssNumber[t] ? '' : 'px'),
      c = (te.cssNumber[t] || ('px' !== l && +u)) && ke.exec(te.css(e, t));
    if (c && c[3] !== l) {
      (l = l || c[3]), (n = n || []), (c = +u || 1);
      do {
        (c /= o = o || '.5'), te.style(e, t, c + l);
      } while (o !== (o = s() / u) && 1 !== o && --a);
    }
    return n &&
      ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r &&
        ((r.unit = l), (r.start = c), (r.end = i))), i;
  }
  function g(e) {
    var t, n = e.ownerDocument, r = e.nodeName, i = Le[r];
    return (
      i ||
      ((t = n.body.appendChild(n.createElement(r))), (i = te.css(
        t,
        'display'
      )), t.parentNode.removeChild(t), 'none' === i && (i = 'block'), (Le[
        r
      ] = i), i)
    );
  }
  function v(e, t) {
    for (
      var n, r, i = [], o = 0, a = e.length;
      o < a;
      o++
    ) (r = e[o]).style && ((n = r.style.display), t ? ('none' === n && ((i[o] = we.get(r, 'display') || null), i[o] || (r.style.display = '')), '' === r.style.display && Ae(r) && (i[o] = g(r))) : 'none' !== n && ((i[o] = 'none'), we.set(r, 'display', n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  function m(e, t) {
    var n;
    return (n = void 0 !== e.getElementsByTagName
      ? e.getElementsByTagName(t || '*')
      : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : [
            ]), void 0 === t || (t && te.nodeName(e, t)) ? te.merge([e], n) : n;
  }
  function y(e, t) {
    for (
      var n = 0, r = e.length;
      n < r;
      n++
    ) we.set(e[n], 'globalEval', !t || we.get(t[n], 'globalEval'));
  }
  function b(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        d = [],
        p = 0,
        h = e.length;
      p < h;
      p++
    ) if ((o = e[p]) || 0 === o)
        if ('object' === te.type(o)) te.merge(d, o.nodeType ? [o] : o);
        else if (He.test(o)) {
          for (
            (a = a || f.appendChild(t.createElement('div'))), (s = (qe.exec(
              o
            ) || ['', ''])[1]
              .toLowerCase()), (u = Fe[s] || Fe._default), (a.innerHTML =
              u[1] + te.htmlPrefilter(o) + u[2]), (c = u[0]);
            c--;

          )
            a = a.lastChild;
          te.merge(d, a.childNodes), ((a = f.firstChild).textContent = '');
        } else d.push(t.createTextNode(o));
    for (
      (f.textContent = ''), (p = 0);
      (o = d[p++]);

    ) if (r && te.inArray(o, r) > -1) i && i.push(o);
      else if (
        ((l = te.contains(o.ownerDocument, o)), (a = m(
          f.appendChild(o),
          'script'
        )), l && y(a), n)
      )
        for (c = 0; (o = a[c++]); )
          Oe.test(o.type || '') && n.push(o);
    return f;
  }
  function x() {
    return !0;
  }
  function w() {
    return !1;
  }
  function C() {
    try {
      return $.activeElement;
    } catch (e) {}
  }
  function T(e, t, n, r, i, o) {
    var a, s;
    if ('object' == typeof t) {
      'string' != typeof n && ((r = r || n), (n = void 0));
      for (s in t)
        T(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
            ('string' == typeof n
              ? ((i = r), (r = void 0))
              : ((i = r), (r = n), (n = void 0))), !1 === i)
    )
      i = w;
    else if (!i) return e;
    return 1 === o &&
      ((a = i), ((i = function(e) {
        return te().off(e), a.apply(this, arguments);
      }).guid =
        a.guid || (a.guid = te.guid++))), e.each(function() {
      te.event.add(this, t, i, r, n);
    });
  }
  function N(e, t) {
    return te.nodeName(e, 'table') &&
      te.nodeName(11 !== t.nodeType ? t : t.firstChild, 'tr')
      ? e.getElementsByTagName('tbody')[0] || e
      : e;
  }
  function E(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function k(e) {
    var t = ze.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute('type'), e;
  }
  function D(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        we.hasData(e) &&
        ((o = we.access(e)), (a = we.set(t, o)), (l = o.events))
      ) {
        delete a.handle, (a.events = {});
        for (i in l)
          for ((n = 0), (r = l[i].length); n < r; n++)
            te.event.add(t, i, l[i][n]);
      }
      Ce.hasData(e) &&
        ((s = Ce.access(e)), (u = te.extend({}, s)), Ce.set(t, u));
    }
  }
  function A(e, t) {
    var n = t.nodeName.toLowerCase();
    'input' === n && je.test(e.type)
      ? (t.checked = e.checked)
      : ('input' !== n && 'textarea' !== n) ||
          (t.defaultValue = e.defaultValue);
  }
  function S(e, t, r, i) {
    t = U.apply([], t);
    var o,
      a,
      s,
      u,
      l,
      c,
      f = 0,
      d = e.length,
      p = d - 1,
      h = t[0],
      g = te.isFunction(h);
    if (g || (d > 1 && 'string' == typeof h && !Z.checkClone && $e.test(h)))
      return e.each(function(n) {
        var o = e.eq(n);
        g && (t[0] = h.call(this, n, o.html())), S(o, t, r, i);
      });
    if (
      d &&
      ((o = b(t, e[0].ownerDocument, !1, e, i)), (a = o.firstChild), 1 ===
        o.childNodes.length && (o = a), a || i)
    ) {
      for (u = (s = te.map(m(o, 'script'), E)).length; f < d; f++)
        (l = o), f !== p &&
          ((l = te.clone(l, !0, !0)), u && te.merge(s, m(l, 'script'))), r.call(
          e[f],
          l,
          f
        );
      if (u)
        for (
          (c = s[s.length - 1].ownerDocument), te.map(s, k), (f = 0);
          f < u;
          f++
        )
          (l = s[f]), Oe.test(l.type || '') &&
            !we.access(l, 'globalEval') &&
            te.contains(c, l) &&
            (l.src
              ? te._evalUrl && te._evalUrl(l.src)
              : n(l.textContent.replace(_e, ''), c));
    }
    return e;
  }
  function L(e, t, n) {
    for (
      var r, i = t ? te.filter(t, e) : e, o = 0;
      null != (r = i[o]);
      o++
    ) n || 1 !== r.nodeType || te.cleanData(m(r)), r.parentNode && (n && te.contains(r.ownerDocument, r) && y(m(r, 'script')), r.parentNode.removeChild(r));
    return e;
  }
  function j(e, t, n) {
    var r, i, o, a, s = e.style;
    return (n = n || Xe(e)) &&
      ('' !== (a = n.getPropertyValue(t) || n[t]) ||
        te.contains(e.ownerDocument, e) ||
        (a = te.style(e, t)), !Z.pixelMarginRight() &&
        Ve.test(a) &&
        Ue.test(t) &&
        ((r = s.width), (i = s.minWidth), (o =
          s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a =
          n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))), void 0 !== a ? a + '' : a;
  }
  function q(e, t) {
    return {
      get: function() {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      }
    };
  }
  function O(e) {
    if (e in Je) return e;
    for (
      var t = e[0].toUpperCase() + e.slice(1), n = Ke.length;
      n--;

    ) if ((e = Ke[n] + t) in Je) return e;
  }
  function F(e, t, n) {
    var r = ke.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
  }
  function H(e, t, n, r, i) {
    var o, a = 0;
    for (
      o = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0;
      o < 4;
      o += 2
    ) 'margin' === n && (a += te.css(e, n + De[o], !0, i)), r ? ('content' === n && (a -= te.css(e, 'padding' + De[o], !0, i)), 'margin' !== n && (a -= te.css(e, 'border' + De[o] + 'Width', !0, i))) : ((a += te.css(e, 'padding' + De[o], !0, i)), 'padding' !== n && (a += te.css(e, 'border' + De[o] + 'Width', !0, i)));
    return a;
  }
  function P(e, t, n) {
    var r,
      i = !0,
      o = Xe(e),
      a = 'border-box' === te.css(e, 'boxSizing', !1, o);
    if (
      (e.getClientRects().length && (r = e.getBoundingClientRect()[t]), r <=
        0 || null == r)
    ) {
      if ((((r = j(e, t, o)) < 0 || null == r) && (r = e.style[t]), Ve.test(r)))
        return r;
      (i = a && (Z.boxSizingReliable() || r === e.style[t])), (r =
        parseFloat(r) || 0);
    }
    return r + H(e, t, n || (a ? 'border' : 'content'), i, o) + 'px';
  }
  function I(e) {
    return (e.match(ve) || []).join(' ');
  }
  function R(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function B(e, t, n, r) {
    var i;
    if (te.isArray(t))
      te.each(t, function(t, i) {
        n || ot.test(e)
          ? r(e, i)
          : B(
              e + '[' + ('object' == typeof i && null != i ? t : '') + ']',
              i,
              n,
              r
            );
      });
    else if (n || 'object' !== te.type(t)) r(e, t);
    else for (i in t) B(e + '[' + i + ']', t[i], n, r);
  }
  function W(e) {
    return te.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  var M = [],
    $ = e.document,
    z = Object.getPrototypeOf,
    _ = M.slice,
    U = M.concat,
    V = M.push,
    X = M.indexOf,
    Q = {},
    Y = Q.toString,
    G = Q.hasOwnProperty,
    K = G.toString,
    J = K.call(Object),
    Z = {},
    ee =
      '3.1.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/animatedSelector,-effects/Tween,-deprecated',
    te = function(e, t) {
      return new te.fn.init(e, t);
    },
    ne = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    re = /^-ms-/,
    ie = /-([a-z])/g,
    oe = function(e, t) {
      return t.toUpperCase();
    };
  (te.fn = te.prototype = {
    jquery: ee,
    constructor: te,
    length: 0,
    toArray: function() {
      return _.call(this);
    },
    get: function(e) {
      return null == e ? _.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function(e) {
      var t = te.merge(this.constructor(), e);
      return (t.prevObject = this), t;
    },
    each: function(e) {
      return te.each(this, e);
    },
    map: function(e) {
      return this.pushStack(
        te.map(this, function(t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function() {
      return this.pushStack(_.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(e) {
      var t = this.length, n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: V,
    sort: M.sort,
    splice: M.splice
  }), (te.extend = te.fn.extend = function() {
    var e,
      t,
      n,
      r,
      i,
      o,
      a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for (
      'boolean' == typeof a &&
        ((l = a), (a = arguments[s] || {}), s++), 'object' == typeof a ||
        te.isFunction(a) ||
        (a = {}), s === u && ((a = this), s--);
      s < u;
      s++
    )
      if (null != (e = arguments[s]))
        for (t in e)
          (n = a[t]), a !== (r = e[t]) &&
            (l && r && (te.isPlainObject(r) || (i = te.isArray(r)))
              ? (i
                  ? ((i = !1), (o = n && te.isArray(n) ? n : []))
                  : (o = n && te.isPlainObject(n) ? n : {}), (a[t] = te.extend(
                  l,
                  o,
                  r
                )))
              : void 0 !== r && (a[t] = r));
    return a;
  }), te.extend({
    expando: 'jQuery' + (ee + Math.random()).replace(/\D/g, ''),
    isReady: !0,
    error: function(e) {
      throw new Error(e);
    },
    noop: function() {},
    isFunction: function(e) {
      return 'function' === te.type(e);
    },
    isArray: Array.isArray,
    isWindow: function(e) {
      return null != e && e === e.window;
    },
    isNumeric: function(e) {
      var t = te.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    },
    isPlainObject: function(e) {
      var t, n;
      return (
        !(!e || '[object Object]' !== Y.call(e)) &&
        (!(t = z(e)) ||
          ('function' ==
            typeof (n = G.call(t, 'constructor') && t.constructor) &&
            K.call(n) === J))
      );
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e)
        return !1;
      return !0;
    },
    type: function(e) {
      return null == e
        ? e + ''
        : 'object' == typeof e || 'function' == typeof e
            ? Q[Y.call(e)] || 'object'
            : typeof e;
    },
    globalEval: function(e) {
      n(e);
    },
    camelCase: function(e) {
      return e.replace(re, 'ms-').replace(ie, oe);
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function(e, t) {
      var n, i = 0;
      if (r(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
      else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
      return e;
    },
    trim: function(e) {
      return null == e ? '' : (e + '').replace(ne, '');
    },
    makeArray: function(e, t) {
      var n = t || [];
      return null != e &&
        (r(Object(e))
          ? te.merge(n, 'string' == typeof e ? [e] : e)
          : V.call(n, e)), n;
    },
    inArray: function(e, t, n) {
      return null == t ? -1 : X.call(t, e, n);
    },
    merge: function(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++)
        e[i++] = t[r];
      return (e.length = i), e;
    },
    grep: function(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
        !t(e[i], i) !== a && r.push(e[i]);
      return r;
    },
    map: function(e, t, n) {
      var i, o, a = 0, s = [];
      if (r(e))
        for (i = e.length; a < i; a++)
          null != (o = t(e[a], a, n)) && s.push(o);
      else for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
      return U.apply([], s);
    },
    guid: 1,
    proxy: function(e, t) {
      var n, r, i;
      if (
        ('string' == typeof t && ((n = e[t]), (t = e), (e = n)), te.isFunction(
          e
        ))
      )
        return (r = _.call(arguments, 2)), (i = function() {
          return e.apply(t || this, r.concat(_.call(arguments)));
        }), (i.guid = e.guid = e.guid || te.guid++), i;
    },
    now: Date.now,
    support: Z
  }), 'function' == typeof Symbol && (te.fn[Symbol.iterator] = M[Symbol.iterator]), te.each(
    'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
      ' '
    ),
    function(e, t) {
      Q['[object ' + t + ']'] = t.toLowerCase();
    }
  );
  var ae = (function(e) {
    function t(e, t, n, r) {
      var i, o, a, s, u, c, d, p = t && t.ownerDocument, h = t ? t.nodeType : 9;
      if (
        ((n = n || []), 'string' != typeof e ||
          !e ||
          (1 !== h && 9 !== h && 11 !== h))
      )
        return n;
      if (
        !r && ((t ? t.ownerDocument || t : B) !== j && L(t), (t = t || j), O)
      ) {
        if (11 !== h && (u = ge.exec(e)))
          if ((i = u[1])) {
            if (9 === h) {
              if (!(a = t.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (p && (a = p.getElementById(i)) && I(t, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return G.apply(n, t.getElementsByTagName(e)), n;
            if (
              (i = u[3]) && x.getElementsByClassName && t.getElementsByClassName
            )
              return G.apply(n, t.getElementsByClassName(i)), n;
          }
        if (x.qsa && !_[e + ' '] && (!F || !F.test(e))) {
          if (1 !== h) (p = t), (d = e);
          else if ('object' !== t.nodeName.toLowerCase()) {
            for (
              (s = t.getAttribute('id'))
                ? (s = s.replace(be, xe))
                : t.setAttribute('id', (s = R)), (o = (c = N(e)).length);
              o--;

            )
              c[o] = '#' + s + ' ' + f(c[o]);
            (d = c.join(',')), (p = (ve.test(e) && l(t.parentNode)) || t);
          }
          if (d)
            try {
              return G.apply(n, p.querySelectorAll(d)), n;
            } catch (e) {
            } finally {
              s === R && t.removeAttribute('id');
            }
        }
      }
      return k(e.replace(oe, '$1'), t, n, r);
    }
    function n() {
      function e(n, r) {
        return t.push(n + ' ') > w.cacheLength && delete e[t.shift()], (e[
          n + ' '
        ] = r);
      }
      var t = [];
      return e;
    }
    function r(e) {
      return (e[R] = !0), e;
    }
    function i(e) {
      var t = j.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function o(e, t) {
      for (var n = e.split('|'), r = n.length; r--; )
        w.attrHandle[n[r]] = t;
    }
    function a(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function s(e) {
      return function(t) {
        return 'form' in t
          ? t.parentNode && !1 === t.disabled
              ? 'label' in t
                  ? 'label' in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                  : t.isDisabled === e || (t.isDisabled !== !e && Ce(t) === e)
              : t.disabled === e
          : 'label' in t && t.disabled === e;
      };
    }
    function u(e) {
      return r(function(t) {
        return (t = +t), r(function(n, r) {
          for (
            var i, o = e([], n.length, t), a = o.length;
            a--;

          ) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
        });
      });
    }
    function l(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function c() {}
    function f(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++)
        r += e[t].value;
      return r;
    }
    function d(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        a = n && 'parentNode' === o,
        s = M++;
      return t.first
        ? function(t, n, i) {
            for (; (t = t[r]); )
              if (1 === t.nodeType || a) return e(t, n, i);
            return !1;
          }
        : function(t, n, u) {
            var l, c, f, d = [W, s];
            if (u) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || a)
                  if (
                    ((f = t[R] || (t[R] = {})), (c =
                      f[t.uniqueID] || (f[t.uniqueID] = {})), i &&
                      i === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((l = c[o]) && l[0] === W && l[1] === s)
                      return (d[2] = l[2]);
                    if (((c[o] = d), (d[2] = e(t, n, u)))) return !0;
                  }
            return !1;
          };
    }
    function p(e) {
      return e.length > 1
        ? function(t, n, r) {
            for (var i = e.length; i--; )
              if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function h(e, n, r) {
      for (var i = 0, o = n.length; i < o; i++)
        t(e, n[i], r);
      return r;
    }
    function g(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function v(e, t, n, i, o, a) {
      return i && !i[R] && (i = v(i)), o && !o[R] && (o = v(o, a)), r(function(
        r,
        a,
        s,
        u
      ) {
        var l,
          c,
          f,
          d = [],
          p = [],
          v = a.length,
          m = r || h(t || '*', s.nodeType ? [s] : s, []),
          y = !e || (!r && t) ? m : g(m, d, e, s, u),
          b = n ? o || (r ? e : v || i) ? [] : a : y;
        if ((n && n(y, b, s, u), i))
          for ((l = g(b, p)), i(l, [], s, u), (c = l.length); c--; )
            (f = l[c]) && (b[p[c]] = !(y[p[c]] = f));
        if (r) {
          if (o || e) {
            if (o) {
              for ((l = []), (c = b.length); c--; )
                (f = b[c]) && l.push((y[c] = f));
              o(null, (b = []), l, u);
            }
            for (c = b.length; c--; )
              (f = b[c]) &&
                (l = o ? J(r, f) : d[c]) > -1 &&
                (r[l] = !(a[l] = f));
          }
        } else
          (b = g(b === a ? b.splice(v, b.length) : b)), o
            ? o(null, a, b, u)
            : G.apply(a, b);
      });
    }
    function m(e) {
      for (
        var t,
          n,
          r,
          i = e.length,
          o = w.relative[e[0].type],
          a = o || w.relative[' '],
          s = o ? 1 : 0,
          u = d(
            function(e) {
              return e === t;
            },
            a,
            !0
          ),
          l = d(
            function(e) {
              return J(t, e) > -1;
            },
            a,
            !0
          ),
          c = [
            function(e, n, r) {
              var i =
                (!o && (r || n !== D)) ||
                ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
              return (t = null), i;
            }
          ];
        s < i;
        s++
      )
        if ((n = w.relative[e[s].type])) c = [d(p(c), n)];
        else {
          if ((n = w.filter[e[s].type].apply(null, e[s].matches))[R]) {
            for (r = ++s; r < i && !w.relative[e[r].type]; r++);
            return v(
              s > 1 && p(c),
              s > 1 &&
                f(
                  e
                    .slice(0, s - 1)
                    .concat({ value: ' ' === e[s - 2].type ? '*' : '' })
                ).replace(oe, '$1'),
              n,
              s < r && m(e.slice(s, r)),
              r < i && m((e = e.slice(r))),
              r < i && f(e)
            );
          }
          c.push(n);
        }
      return p(c);
    }
    function y(e, n) {
      var i = n.length > 0,
        o = e.length > 0,
        a = function(r, a, s, u, l) {
          var c,
            f,
            d,
            p = 0,
            h = '0',
            v = r && [],
            m = [],
            y = D,
            b = r || (o && w.find.TAG('*', l)),
            x = (W += null == y ? 1 : Math.random() || 0.1),
            C = b.length;
          for (
            l && (D = a === j || a || l);
            h !== C && null != (c = b[h]);
            h++
          ) {
            if (o && c) {
              for (
                (f = 0), a || c.ownerDocument === j || (L(c), (s = !O));
                (d = e[f++]);

              )
                if (d(c, a || j, s)) {
                  u.push(c);
                  break;
                }
              l && (W = x);
            }
            i && ((c = !d && c) && p--, r && v.push(c));
          }
          if (((p += h), i && h !== p)) {
            for (f = 0; (d = n[f++]); )
              d(v, m, a, s);
            if (r) {
              if (p > 0) for (; h--; ) v[h] || m[h] || (m[h] = Q.call(u));
              m = g(m);
            }
            G.apply(u, m), l &&
              !r &&
              m.length > 0 &&
              p + n.length > 1 &&
              t.uniqueSort(u);
          }
          return l && ((W = x), (D = y)), v;
        };
      return i ? r(a) : a;
    }
    var b,
      x,
      w,
      C,
      T,
      N,
      E,
      k,
      D,
      A,
      S,
      L,
      j,
      q,
      O,
      F,
      H,
      P,
      I,
      R = 'sizzle' + 1 * new Date(),
      B = e.document,
      W = 0,
      M = 0,
      $ = n(),
      z = n(),
      _ = n(),
      U = function(e, t) {
        return e === t && (S = !0), 0;
      },
      V = {}.hasOwnProperty,
      X = [],
      Q = X.pop,
      Y = X.push,
      G = X.push,
      K = X.slice,
      J = function(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          if (e[n] === t) return n;
        return -1;
      },
      Z =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      ee = '[\\x20\\t\\r\\n\\f]',
      te = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
      ne =
        '\\[' +
        ee +
        '*(' +
        te +
        ')(?:' +
        ee +
        '*([*^$|!~]?=)' +
        ee +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        te +
        '))|)' +
        ee +
        '*\\]',
      re =
        ':(' +
        te +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        ne +
        ')*)|.*)\\)|)',
      ie = new RegExp(ee + '+', 'g'),
      oe = new RegExp(
        '^' + ee + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ee + '+$',
        'g'
      ),
      ae = new RegExp('^' + ee + '*,' + ee + '*'),
      se = new RegExp('^' + ee + '*([>+~]|' + ee + ')' + ee + '*'),
      ue = new RegExp('=' + ee + '*([^\\]\'"]*?)' + ee + '*\\]', 'g'),
      le = new RegExp(re),
      ce = new RegExp('^' + te + '$'),
      fe = {
        ID: new RegExp('^#(' + te + ')'),
        CLASS: new RegExp('^\\.(' + te + ')'),
        TAG: new RegExp('^(' + te + '|[*])'),
        ATTR: new RegExp('^' + ne),
        PSEUDO: new RegExp('^' + re),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            ee +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            ee +
            '*(?:([+-]|)' +
            ee +
            '*(\\d+)|))' +
            ee +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + Z + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            ee +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            ee +
            '*((?:-\\d)?\\d*)' +
            ee +
            '*\\)|)(?=[^-]|$)',
          'i'
        )
      },
      de = /^(?:input|select|textarea|button)$/i,
      pe = /^h\d$/i,
      he = /^[^{]+\{\s*\[native \w/,
      ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ve = /[+~]/,
      me = new RegExp('\\\\([\\da-f]{1,6}' + ee + '?|(' + ee + ')|.)', 'ig'),
      ye = function(e, t, n) {
        var r = '0x' + t - 65536;
        return r !== r || n
          ? t
          : r < 0
              ? String.fromCharCode(r + 65536)
              : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      xe = function(e, t) {
        return t
          ? '\0' === e
              ? '�'
              : e.slice(0, -1) +
                  '\\' +
                  e.charCodeAt(e.length - 1).toString(16) +
                  ' '
          : '\\' + e;
      },
      we = function() {
        L();
      },
      Ce = d(
        function(e) {
          return !0 === e.disabled && ('form' in e || 'label' in e);
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      G.apply((X = K.call(B.childNodes)), B.childNodes), X[B.childNodes.length]
        .nodeType;
    } catch (e) {
      G = {
        apply: X.length
          ? function(e, t) {
              Y.apply(e, K.call(t));
            }
          : function(e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            }
      };
    }
    (x = t.support = {}), (T = t.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && 'HTML' !== t.nodeName;
    }), (L = t.setDocument = function(e) {
      var t, n, r = e ? e.ownerDocument || e : B;
      return r !== j && 9 === r.nodeType && r.documentElement
        ? ((j = r), (q = j.documentElement), (O = !T(j)), B !== j &&
            (n = j.defaultView) &&
            n.top !== n &&
            (n.addEventListener
              ? n.addEventListener('unload', we, !1)
              : n.attachEvent &&
                  n.attachEvent('onunload', we)), (x.attributes = i(function(
            e
          ) {
            return (e.className = 'i'), !e.getAttribute('className');
          })), (x.getElementsByTagName = i(function(e) {
            return e.appendChild(
              j.createComment('')
            ), !e.getElementsByTagName('*').length;
          })), (x.getElementsByClassName = he.test(
            j.getElementsByClassName
          )), (x.getById = i(function(e) {
            return (q.appendChild(
              e
            ).id = R), !j.getElementsByName || !j.getElementsByName(R).length;
          })), x.getById
            ? ((w.filter.ID = function(e) {
                var t = e.replace(me, ye);
                return function(e) {
                  return e.getAttribute('id') === t;
                };
              }), (w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && O) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((w.filter.ID = function(e) {
                var t = e.replace(me, ye);
                return function(e) {
                  var n =
                    void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                  return n && n.value === t;
                };
              }), (w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && O) {
                  var n, r, i, o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode('id')) && n.value === e)
                      return [o];
                    for ((i = t.getElementsByName(e)), (r = 0); (o = i[r++]); )
                      if ((n = o.getAttributeNode('id')) && n.value === e)
                        return [o];
                  }
                  return [];
                }
              })), (w.find.TAG = x.getElementsByTagName
            ? function(e, t) {
                return void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : x.qsa ? t.querySelectorAll(e) : void 0;
              }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ('*' === e) {
                  for (; (n = o[i++]); )
                    1 === n.nodeType && r.push(n);
                  return r;
                }
                return o;
              }), (w.find.CLASS =
            x.getElementsByClassName &&
            function(e, t) {
              if (void 0 !== t.getElementsByClassName && O)
                return t.getElementsByClassName(e);
            }), (H = []), (F = []), (x.qsa = he.test(j.querySelectorAll)) &&
            (i(function(e) {
              (q.appendChild(e).innerHTML =
                "<a id='" +
                R +
                "'></a><select id='" +
                R +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"), e.querySelectorAll("[msallowcapture^='']").length && F.push('[*^$]=' + ee + '*(?:\'\'|"")'), e.querySelectorAll('[selected]').length || F.push('\\[' + ee + '*(?:value|' + Z + ')'), e.querySelectorAll('[id~=' + R + '-]').length || F.push('~='), e.querySelectorAll(':checked').length || F.push(':checked'), e.querySelectorAll('a#' + R + '+*').length || F.push('.#.+[+~]');
            }), i(function(e) {
              e.innerHTML =
                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = j.createElement('input');
              t.setAttribute(
                'type',
                'hidden'
              ), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length && F.push('name' + ee + '*[*^$|!~]?='), 2 !== e.querySelectorAll(':enabled').length && F.push(':enabled', ':disabled'), (q.appendChild(e).disabled = !0), 2 !== e.querySelectorAll(':disabled').length && F.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), F.push(',.*:');
            })), (x.matchesSelector = he.test(
            (P =
              q.matches ||
              q.webkitMatchesSelector ||
              q.mozMatchesSelector ||
              q.oMatchesSelector ||
              q.msMatchesSelector)
          )) &&
            i(function(e) {
              (x.disconnectedMatch = P.call(
                e,
                '*'
              )), P.call(e, "[s!='']:x"), H.push('!=', re);
            }), (F = F.length && new RegExp(F.join('|'))), (H =
            H.length && new RegExp(H.join('|'))), (t = he.test(
            q.compareDocumentPosition
          )), (I = t || he.test(q.contains)
            ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                  r = t && t.parentNode;
                return (
                  e === r ||
                  !(!r ||
                    1 !== r.nodeType ||
                    !(n.contains
                      ? n.contains(r)
                      : e.compareDocumentPosition &&
                          16 & e.compareDocumentPosition(r)))
                );
              }
            : function(e, t) {
                if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                return !1;
              }), (U = t
            ? function(e, t) {
                if (e === t) return (S = !0), 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  n ||
                  ((n = (e.ownerDocument || e) === (t.ownerDocument || t)
                    ? e.compareDocumentPosition(t)
                    : 1), 1 & n ||
                    (!x.sortDetached && t.compareDocumentPosition(e) === n)
                    ? e === j || (e.ownerDocument === B && I(B, e))
                        ? -1
                        : t === j || (t.ownerDocument === B && I(B, t))
                            ? 1
                            : A ? J(A, e) - J(A, t) : 0
                    : 4 & n ? -1 : 1)
                );
              }
            : function(e, t) {
                if (e === t) return (S = !0), 0;
                var n,
                  r = 0,
                  i = e.parentNode,
                  o = t.parentNode,
                  s = [e],
                  u = [t];
                if (!i || !o)
                  return e === j
                    ? -1
                    : t === j ? 1 : i ? -1 : o ? 1 : A ? J(A, e) - J(A, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; (n = n.parentNode); )
                  s.unshift(n);
                for (n = t; (n = n.parentNode); )
                  u.unshift(n);
                for (; s[r] === u[r]; )
                  r++;
                return r ? a(s[r], u[r]) : s[r] === B ? -1 : u[r] === B ? 1 : 0;
              }), j)
        : j;
    }), (t.matches = function(e, n) {
      return t(e, null, null, n);
    }), (t.matchesSelector = function(e, n) {
      if (
        ((e.ownerDocument || e) !== j && L(e), (n = n.replace(
          ue,
          "='$1']"
        )), x.matchesSelector &&
          O &&
          !_[n + ' '] &&
          (!H || !H.test(n)) &&
          (!F || !F.test(n)))
      )
        try {
          var r = P.call(e, n);
          if (
            r ||
            x.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return r;
        } catch (e) {}
      return t(n, j, null, [e]).length > 0;
    }), (t.contains = function(e, t) {
      return (e.ownerDocument || e) !== j && L(e), I(e, t);
    }), (t.attr = function(e, t) {
      (e.ownerDocument || e) !== j && L(e);
      var n = w.attrHandle[t.toLowerCase()],
        r = n && V.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
      return void 0 !== r
        ? r
        : x.attributes || !O
            ? e.getAttribute(t)
            : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), (t.escape = function(e) {
      return (e + '').replace(be, xe);
    }), (t.error = function(e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }), (t.uniqueSort = function(e) {
      var t, n = [], r = 0, i = 0;
      if (
        ((S = !x.detectDuplicates), (A = !x.sortStable && e.slice(0)), e.sort(
          U
        ), S)
      ) {
        for (; (t = e[i++]); )
          t === e[i] && (r = n.push(i));
        for (; r--; )
          e.splice(n[r], 1);
      }
      return (A = null), e;
    }), (C = t.getText = function(e) {
      var t, n = '', r = 0, i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ('string' == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling)
            n += C(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; (t = e[r++]); ) n += C(t);
      return n;
    }), ((w = t.selectors = {
      cacheLength: 50,
      createPseudo: r,
      match: fe,
      attrHandle: {},
      find: {},
      relative: {
        '>': { dir: 'parentNode', first: !0 },
        ' ': { dir: 'parentNode' },
        '+': { dir: 'previousSibling', first: !0 },
        '~': { dir: 'previousSibling' }
      },
      preFilter: {
        ATTR: function(e) {
          return (e[1] = e[1].replace(me, ye)), (e[3] = (e[3] ||
            e[4] ||
            e[5] ||
            '')
            .replace(me, ye)), '~=' === e[2] &&
            (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
        },
        CHILD: function(e) {
          return (e[1] = e[1].toLowerCase()), 'nth' === e[1].slice(0, 3)
            ? (e[3] || t.error(e[0]), (e[4] = +(e[4]
                ? e[5] + (e[6] || 1)
                : 2 * ('even' === e[3] || 'odd' === e[3]))), (e[5] = +(e[7] +
                e[8] || 'odd' === e[3])))
            : e[3] && t.error(e[0]), e;
        },
        PSEUDO: function(e) {
          var t, n = !e[6] && e[2];
          return fe.CHILD.test(e[0])
            ? null
            : (e[3]
                ? (e[2] = e[4] || e[5] || '')
                : n &&
                    le.test(n) &&
                    (t = N(n, !0)) &&
                    (t = n.indexOf(')', n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(
                      0,
                      t
                    ))), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(me, ye).toLowerCase();
          return '*' === e
            ? function() {
                return !0;
              }
            : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function(e) {
          var t = $[e + ' '];
          return (
            t ||
            ((t = new RegExp('(^|' + ee + ')' + e + '(' + ee + '|$)')) &&
              $(e, function(e) {
                return t.test(
                  ('string' == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                    ''
                );
              }))
          );
        },
        ATTR: function(e, n, r) {
          return function(i) {
            var o = t.attr(i, e);
            return null == o
              ? '!=' === n
              : !n ||
                  ((o += ''), '=' === n
                    ? o === r
                    : '!=' === n
                        ? o !== r
                        : '^=' === n
                            ? r && 0 === o.indexOf(r)
                            : '*=' === n
                                ? r && o.indexOf(r) > -1
                                : '$=' === n
                                    ? r && o.slice(-r.length) === r
                                    : '~=' === n
                                        ? (' ' +
                                            o.replace(ie, ' ') +
                                            ' ').indexOf(r) > -1
                                        : '|=' === n &&
                                            (o === r ||
                                              o.slice(0, r.length + 1) ===
                                                r + '-'));
          };
        },
        CHILD: function(e, t, n, r, i) {
          var o = 'nth' !== e.slice(0, 3),
            a = 'last' !== e.slice(-4),
            s = 'of-type' === t;
          return 1 === r && 0 === i
            ? function(e) {
                return !!e.parentNode;
              }
            : function(t, n, u) {
                var l,
                  c,
                  f,
                  d,
                  p,
                  h,
                  g = o !== a ? 'nextSibling' : 'previousSibling',
                  v = t.parentNode,
                  m = s && t.nodeName.toLowerCase(),
                  y = !u && !s,
                  b = !1;
                if (v) {
                  if (o) {
                    for (; g; ) {
                      for (d = t; (d = d[g]); )
                        if (
                          s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType
                        )
                          return !1;
                      h = g = 'only' === e && !h && 'nextSibling';
                    }
                    return !0;
                  }
                  if (((h = [a ? v.firstChild : v.lastChild]), a && y)) {
                    for (
                      (b =
                        (p =
                          (l = (c =
                            (f = (d = v)[R] || (d[R] = {}))[d.uniqueID] ||
                            (f[d.uniqueID] = {}))[e] || [])[0] === W && l[1]) &&
                        l[2]), (d = p && v.childNodes[p]);
                      (d = (++p && d && d[g]) || (b = p = 0) || h.pop());

                    )
                      if (1 === d.nodeType && ++b && d === t) {
                        c[e] = [W, p, b];
                        break;
                      }
                  } else if (
                    (y &&
                      (b = p =
                        (l = (c =
                          (f = (d = t)[R] || (d[R] = {}))[d.uniqueID] ||
                          (f[d.uniqueID] = {}))[e] || [])[0] === W &&
                        l[1]), !1 === b)
                  )
                    for (
                      ;
                      (d = (++p && d && d[g]) || (b = p = 0) || h.pop()) &&
                      ((s
                        ? d.nodeName.toLowerCase() !== m
                        : 1 !== d.nodeType) ||
                        !++b ||
                        (y &&
                          ((c =
                            (f = d[R] || (d[R] = {}))[d.uniqueID] ||
                            (f[d.uniqueID] = {}))[e] = [W, b]), d !== t));

                    );
                  return (b -= i) === r || (b % r == 0 && b / r >= 0);
                }
              };
        },
        PSEUDO: function(e, n) {
          var i,
            o =
              w.pseudos[e] ||
              w.setFilters[e.toLowerCase()] ||
              t.error('unsupported pseudo: ' + e);
          return o[R]
            ? o(n)
            : o.length > 1
                ? ((i = [e, e, '', n]), w.setFilters.hasOwnProperty(
                    e.toLowerCase()
                  )
                    ? r(function(e, t) {
                        for (
                          var r, i = o(e, n), a = i.length;
                          a--;

                        ) e[(r = J(e, i[a]))] = !(t[r] = i[a]);
                      })
                    : function(e) {
                        return o(e, 0, i);
                      })
                : o;
        }
      },
      pseudos: {
        not: r(function(e) {
          var t = [], n = [], i = E(e.replace(oe, '$1'));
          return i[R]
            ? r(function(e, t, n, r) {
                for (
                  var o, a = i(e, null, r, []), s = e.length;
                  s--;

                ) (o = a[s]) && (e[s] = !(t[s] = o));
              })
            : function(e, r, o) {
                return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
              };
        }),
        has: r(function(e) {
          return function(n) {
            return t(e, n).length > 0;
          };
        }),
        contains: r(function(e) {
          return (e = e.replace(me, ye)), function(t) {
            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
          };
        }),
        lang: r(function(e) {
          return ce.test(e || '') ||
            t.error(
              'unsupported lang: ' + e
            ), (e = e.replace(me, ye).toLowerCase()), function(t) {
            var n;
            do {
              if (
                (n = O
                  ? t.lang
                  : t.getAttribute('xml:lang') || t.getAttribute('lang'))
              )
                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
            } while ((t = t.parentNode) && 1 === t.nodeType);
            return !1;
          };
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function(e) {
          return e === q;
        },
        focus: function(e) {
          return (
            e === j.activeElement &&
            (!j.hasFocus || j.hasFocus()) &&
            !!(e.type || e.href || ~e.tabIndex)
          );
        },
        enabled: s(!1),
        disabled: s(!0),
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return (
            ('input' === t && !!e.checked) || ('option' === t && !!e.selected)
          );
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function(e) {
          return !w.pseudos.empty(e);
        },
        header: function(e) {
          return pe.test(e.nodeName);
        },
        input: function(e) {
          return de.test(e.nodeName);
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return ('input' === t && 'button' === e.type) || 'button' === t;
        },
        text: function(e) {
          var t;
          return (
            'input' === e.nodeName.toLowerCase() &&
            'text' === e.type &&
            (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
          );
        },
        first: u(function() {
          return [0];
        }),
        last: u(function(e, t) {
          return [t - 1];
        }),
        eq: u(function(e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: u(function(e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: u(function(e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: u(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
          return e;
        }),
        gt: u(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
          return e;
        })
      }
    }).pseudos.nth =
      w.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      w.pseudos[b] = (function(e) {
        return function(t) {
          return 'input' === t.nodeName.toLowerCase() && t.type === e;
        };
      })(b);
    for (b in { submit: !0, reset: !0 })
      w.pseudos[b] = (function(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return ('input' === n || 'button' === n) && t.type === e;
        };
      })(b);
    return (c.prototype = w.filters =
      w.pseudos), (w.setFilters = new c()), (N = t.tokenize = function(e, n) {
      var r, i, o, a, s, u, l, c = z[e + ' '];
      if (c) return n ? 0 : c.slice(0);
      for ((s = e), (u = []), (l = w.preFilter); s; ) {
        (r && !(i = ae.exec(s))) ||
          (i && (s = s.slice(i[0].length) || s), u.push(
            (o = [])
          )), (r = !1), (i = se.exec(s)) &&
          ((r = i.shift()), o.push({
            value: r,
            type: i[0].replace(oe, ' ')
          }), (s = s.slice(r.length)));
        for (a in w.filter)
          !(i = fe[a].exec(s)) ||
            (l[a] && !(i = l[a](i))) ||
            ((r = i.shift()), o.push({
              value: r,
              type: a,
              matches: i
            }), (s = s.slice(r.length)));
        if (!r) break;
      }
      return n ? s.length : s ? t.error(e) : z(e, u).slice(0);
    }), (E = t.compile = function(e, t) {
      var n, r = [], i = [], o = _[e + ' '];
      if (!o) {
        for (t || (t = N(e)), (n = t.length); n--; )
          (o = m(t[n]))[R] ? r.push(o) : i.push(o);
        (o = _(e, y(i, r))).selector = e;
      }
      return o;
    }), (k = t.select = function(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        c = 'function' == typeof e && e,
        d = !r && N((e = c.selector || e));
      if (((n = n || []), 1 === d.length)) {
        if (
          (o = d[0] = d[0].slice(0)).length > 2 &&
          'ID' === (a = o[0]).type &&
          9 === t.nodeType &&
          O &&
          w.relative[o[1].type]
        ) {
          if (!(t = (w.find.ID(a.matches[0].replace(me, ye), t) || [])[0]))
            return n;
          c && (t = t.parentNode), (e = e.slice(o.shift().value.length));
        }
        for (
          i = fe.needsContext.test(e) ? 0 : o.length;
          i-- && ((a = o[i]), !w.relative[(s = a.type)]);

        )
          if (
            (u = w.find[s]) &&
            (r = u(
              a.matches[0].replace(me, ye),
              (ve.test(o[0].type) && l(t.parentNode)) || t
            ))
          ) {
            if ((o.splice(i, 1), !(e = r.length && f(o))))
              return G.apply(n, r), n;
            break;
          }
      }
      return (c || E(e, d))(
        r,
        t,
        !O,
        n,
        !t || (ve.test(e) && l(t.parentNode)) || t
      ), n;
    }), (x.sortStable =
      R.split('').sort(U).join('') ===
      R), (x.detectDuplicates = !!S), L(), (x.sortDetached = i(function(e) {
      return 1 & e.compareDocumentPosition(j.createElement('fieldset'));
    })), i(function(e) {
      return (e.innerHTML =
        "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
    }) ||
      o('type|href|height|width', function(e, t, n) {
        if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
      }), (x.attributes &&
      i(function(e) {
        return (e.innerHTML =
          '<input/>'), e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
      })) ||
      o('value', function(e, t, n) {
        if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
      }), i(function(e) {
      return null == e.getAttribute('disabled');
    }) ||
      o(Z, function(e, t, n) {
        var r;
        if (!n)
          return !0 === e[t]
            ? t.toLowerCase()
            : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }), t;
  })(e);
  (te.find = ae), (te.expr = ae.selectors), (te.expr[':'] = te.expr.pseudos), (te.uniqueSort = te.unique = ae.uniqueSort), (te.text = ae.getText), (te.isXMLDoc = ae.isXML), (te.contains = ae.contains), (te.escapeSelector = ae.escape);
  var se = function(e, t, n) {
    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
      if (1 === e.nodeType) {
        if (i && te(e).is(n)) break;
        r.push(e);
      }
    return r;
  },
    ue = function(e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    le = te.expr.match.needsContext,
    ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    fe = /^.[^:#\[\.,]*$/;
  (te.filter = function(e, t, n) {
    var r = t[0];
    return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === r.nodeType
      ? te.find.matchesSelector(r, e) ? [r] : []
      : te.find.matches(
          e,
          te.grep(t, function(e) {
            return 1 === e.nodeType;
          })
        );
  }), te.fn.extend({
    find: function(e) {
      var t, n, r = this.length, i = this;
      if ('string' != typeof e)
        return this.pushStack(
          te(e).filter(function() {
            for (t = 0; t < r; t++) if (te.contains(i[t], this)) return !0;
          })
        );
      for ((n = this.pushStack([])), (t = 0); t < r; t++)
        te.find(e, i[t], n);
      return r > 1 ? te.uniqueSort(n) : n;
    },
    filter: function(e) {
      return this.pushStack(i(this, e || [], !1));
    },
    not: function(e) {
      return this.pushStack(i(this, e || [], !0));
    },
    is: function(e) {
      return !!i(this, 'string' == typeof e && le.test(e) ? te(e) : e || [], !1)
        .length;
    }
  });
  var de, pe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((te.fn.init = function(e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || de), 'string' == typeof e)) {
      if (
        !(r = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
          ? [null, e, null]
          : pe.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof te ? t[0] : t), te.merge(
            this,
            te.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : $, !0)
          ), ce.test(r[1]) && te.isPlainObject(t))
        )
          for (r in t)
            te.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (i = $.getElementById(r[2])) &&
        ((this[0] = i), (this.length = 1)), this;
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : te.isFunction(e)
          ? void 0 !== n.ready ? n.ready(e) : e(te)
          : te.makeArray(e, this);
  }).prototype =
    te.fn), (de = te($));
  var he = /^(?:parents|prev(?:Until|All))/,
    ge = { children: !0, contents: !0, next: !0, prev: !0 };
  te.fn.extend({
    has: function(e) {
      var t = te(e, this), n = t.length;
      return this.filter(function() {
        for (var e = 0; e < n; e++) if (te.contains(this, t[e])) return !0;
      });
    },
    closest: function(e, t) {
      var n, r = 0, i = this.length, o = [], a = 'string' != typeof e && te(e);
      if (!le.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && te.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? te.uniqueSort(o) : o);
    },
    index: function(e) {
      return e
        ? 'string' == typeof e
            ? X.call(te(e), this[0])
            : X.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function(e, t) {
      return this.pushStack(te.uniqueSort(te.merge(this.get(), te(e, t))));
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), te.each(
    {
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function(e) {
        return se(e, 'parentNode');
      },
      parentsUntil: function(e, t, n) {
        return se(e, 'parentNode', n);
      },
      next: function(e) {
        return o(e, 'nextSibling');
      },
      prev: function(e) {
        return o(e, 'previousSibling');
      },
      nextAll: function(e) {
        return se(e, 'nextSibling');
      },
      prevAll: function(e) {
        return se(e, 'previousSibling');
      },
      nextUntil: function(e, t, n) {
        return se(e, 'nextSibling', n);
      },
      prevUntil: function(e, t, n) {
        return se(e, 'previousSibling', n);
      },
      siblings: function(e) {
        return ue((e.parentNode || {}).firstChild, e);
      },
      children: function(e) {
        return ue(e.firstChild);
      },
      contents: function(e) {
        return e.contentDocument || te.merge([], e.childNodes);
      }
    },
    function(e, t) {
      te.fn[e] = function(n, r) {
        var i = te.map(this, t, n);
        return 'Until' !== e.slice(-5) && (r = n), r &&
          'string' == typeof r &&
          (i = te.filter(r, i)), this.length > 1 &&
          (ge[e] || te.uniqueSort(i), he.test(e) &&
            i.reverse()), this.pushStack(i);
      };
    }
  );
  var ve = /[^\x20\t\r\n\f]+/g;
  (te.Callbacks = function(e) {
    e = 'string' == typeof e ? a(e) : te.extend({}, e);
    var t,
      n,
      r,
      i,
      o = [],
      s = [],
      u = -1,
      l = function() {
        for ((i = e.once), (r = t = !0); s.length; u = -1)
          for (n = s.shift(); ++u < o.length; )
            !1 === o[u].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((u = o.length), (n = !1));
        e.memory || (n = !1), (t = !1), i && (o = n ? [] : '');
      },
      c = {
        add: function() {
          return o &&
            (n && !t && ((u = o.length - 1), s.push(n)), (function t(n) {
              te.each(n, function(n, r) {
                te.isFunction(r)
                  ? (e.unique && c.has(r)) || o.push(r)
                  : r && r.length && 'string' !== te.type(r) && t(r);
              });
            })(arguments), n && !t && l()), this;
        },
        remove: function() {
          return te.each(arguments, function(e, t) {
            for (
              var n;
              (n = te.inArray(t, o, n)) > -1;

            ) o.splice(n, 1), n <= u && u--;
          }), this;
        },
        has: function(e) {
          return e ? te.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function() {
          return o && (o = []), this;
        },
        disable: function() {
          return (i = s = []), (o = n = ''), this;
        },
        disabled: function() {
          return !o;
        },
        lock: function() {
          return (i = s = []), n || t || (o = n = ''), this;
        },
        locked: function() {
          return !!i;
        },
        fireWith: function(e, n) {
          return i ||
            ((n = [e, (n = n || []).slice ? n.slice() : n]), s.push(n), t ||
              l()), this;
        },
        fire: function() {
          return c.fireWith(this, arguments), this;
        },
        fired: function() {
          return !!r;
        }
      };
    return c;
  }), te.extend({
    Deferred: function(t) {
      var n = [
        [
          'notify',
          'progress',
          te.Callbacks('memory'),
          te.Callbacks('memory'),
          2
        ],
        [
          'resolve',
          'done',
          te.Callbacks('once memory'),
          te.Callbacks('once memory'),
          0,
          'resolved'
        ],
        [
          'reject',
          'fail',
          te.Callbacks('once memory'),
          te.Callbacks('once memory'),
          1,
          'rejected'
        ]
      ],
        r = 'pending',
        i = {
          state: function() {
            return r;
          },
          always: function() {
            return o.done(arguments).fail(arguments), this;
          },
          catch: function(e) {
            return i.then(null, e);
          },
          pipe: function() {
            var e = arguments;
            return te
              .Deferred(function(t) {
                te.each(n, function(n, r) {
                  var i = te.isFunction(e[r[4]]) && e[r[4]];
                  o[r[1]](function() {
                    var e = i && i.apply(this, arguments);
                    e && te.isFunction(e.promise)
                      ? e
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[r[0] + 'With'](this, i ? [e] : arguments);
                  });
                }), (e = null);
              })
              .promise();
          },
          then: function(t, r, i) {
            function o(t, n, r, i) {
              return function() {
                var l = this,
                  c = arguments,
                  f = function() {
                    var e, f;
                    if (!(t < a)) {
                      if ((e = r.apply(l, c)) === n.promise())
                        throw new TypeError('Thenable self-resolution');
                      (f =
                        e &&
                        ('object' == typeof e || 'function' == typeof e) &&
                        e.then), te.isFunction(f)
                        ? i
                            ? f.call(e, o(a, n, s, i), o(a, n, u, i))
                            : (a++, f.call(
                                e,
                                o(a, n, s, i),
                                o(a, n, u, i),
                                o(a, n, s, n.notifyWith)
                              ))
                        : (r !== s && ((l = void 0), (c = [e])), (i ||
                            n.resolveWith)(l, c));
                    }
                  },
                  d = i
                    ? f
                    : function() {
                        try {
                          f();
                        } catch (e) {
                          te.Deferred.exceptionHook &&
                            te.Deferred.exceptionHook(e, d.stackTrace), t + 1 >=
                            a &&
                            (r !== u && ((l = void 0), (c = [e])), n.rejectWith(
                              l,
                              c
                            ));
                        }
                      };
                t
                  ? d()
                  : (te.Deferred.getStackHook &&
                      (d.stackTrace = te.Deferred.getStackHook()), e.setTimeout(
                      d
                    ));
              };
            }
            var a = 0;
            return te
              .Deferred(function(e) {
                n[0][3].add(
                  o(0, e, te.isFunction(i) ? i : s, e.notifyWith)
                ), n[1][3].add(o(0, e, te.isFunction(t) ? t : s)), n[2][3].add(o(0, e, te.isFunction(r) ? r : u));
              })
              .promise();
          },
          promise: function(e) {
            return null != e ? te.extend(e, i) : i;
          }
        },
        o = {};
      return te.each(n, function(e, t) {
        var a = t[2], s = t[5];
        (i[t[1]] = a.add), s &&
          a.add(
            function() {
              r = s;
            },
            n[3 - e][2].disable,
            n[0][2].lock
          ), a.add(t[3].fire), (o[t[0]] = function() {
          return o[t[0] + 'With'](this === o ? void 0 : this, arguments), this;
        }), (o[t[0] + 'With'] = a.fireWith);
      }), i.promise(o), t && t.call(o, o), o;
    },
    when: function(e) {
      var t = arguments.length,
        n = t,
        r = Array(n),
        i = _.call(arguments),
        o = te.Deferred(),
        a = function(e) {
          return function(n) {
            (r[e] = this), (i[e] = arguments.length > 1
              ? _.call(arguments)
              : n), --t || o.resolveWith(r, i);
          };
        };
      if (
        t <= 1 &&
        (l(e, o.done(a(n)).resolve, o.reject), 'pending' === o.state() ||
          te.isFunction(i[n] && i[n].then))
      )
        return o.then();
      for (; n--; )
        l(i[n], a(n), o.reject);
      return o.promise();
    }
  });
  var me = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (te.Deferred.exceptionHook = function(t, n) {
    e.console &&
      e.console.warn &&
      t &&
      me.test(t.name) &&
      e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
  }), (te.readyException = function(t) {
    e.setTimeout(function() {
      throw t;
    });
  });
  var ye = te.Deferred();
  (te.fn.ready = function(e) {
    return ye.then(e).catch(function(e) {
      te.readyException(e);
    }), this;
  }), te.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? te.readyWait++ : te.ready(!0);
    },
    ready: function(e) {
      (!0 === e ? --te.readyWait : te.isReady) ||
        ((te.isReady = !0), (!0 !== e && --te.readyWait > 0) ||
          ye.resolveWith($, [te]));
    }
  }), (te.ready.then = ye.then), 'complete' === $.readyState || ('loading' !== $.readyState && !$.documentElement.doScroll) ? e.setTimeout(te.ready) : ($.addEventListener('DOMContentLoaded', c), e.addEventListener('load', c));
  var be = function(e, t, n, r, i, o, a) {
    var s = 0, u = e.length, l = null == n;
    if ('object' === te.type(n)) {
      i = !0;
      for (s in n)
        be(e, t, s, n[s], !0, o, a);
    } else if (
      void 0 !== r &&
      ((i = !0), te.isFunction(r) || (a = !0), l &&
        (a
          ? (t.call(e, r), (t = null))
          : ((l = t), (t = function(e, t, n) {
              return l.call(te(e), n);
            }))), t)
    )
      for (; s < u; s++)
        t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
    xe = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  (f.uid = 1), (f.prototype = {
    cache: function(e) {
      var t = e[this.expando];
      return t ||
        ((t = {}), xe(e) &&
          (e.nodeType
            ? (e[this.expando] = t)
            : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
              }))), t;
    },
    set: function(e, t, n) {
      var r, i = this.cache(e);
      if ('string' == typeof t) i[te.camelCase(t)] = n;
      else for (r in t) i[te.camelCase(r)] = t[r];
      return i;
    },
    get: function(e, t) {
      return void 0 === t
        ? this.cache(e)
        : e[this.expando] && e[this.expando][te.camelCase(t)];
    },
    access: function(e, t, n) {
      return void 0 === t || (t && 'string' == typeof t && void 0 === n)
        ? this.get(e, t)
        : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function(e, t) {
      var n, r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = te.isArray(t)
            ? t.map(te.camelCase)
            : (t = te.camelCase(t)) in r ? [t] : t.match(ve) || []).length;
          for (; n--; )
            delete r[t[n]];
        }
        (void 0 === t || te.isEmptyObject(r)) &&
          (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
      }
    },
    hasData: function(e) {
      var t = e[this.expando];
      return void 0 !== t && !te.isEmptyObject(t);
    }
  });
  var we = new f(),
    Ce = new f(),
    Te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ne = /[A-Z]/g;
  te.extend({
    hasData: function(e) {
      return Ce.hasData(e) || we.hasData(e);
    },
    data: function(e, t, n) {
      return Ce.access(e, t, n);
    },
    removeData: function(e, t) {
      Ce.remove(e, t);
    },
    _data: function(e, t, n) {
      return we.access(e, t, n);
    },
    _removeData: function(e, t) {
      we.remove(e, t);
    }
  }), te.fn.extend({
    data: function(e, t) {
      var n, r, i, o = this[0], a = o && o.attributes;
      if (void 0 === e) {
        if (
          this.length &&
          ((i = Ce.get(o)), 1 === o.nodeType && !we.get(o, 'hasDataAttrs'))
        ) {
          for (n = a.length; n--; )
            a[n] &&
              0 === (r = a[n].name).indexOf('data-') &&
              ((r = te.camelCase(r.slice(5))), p(o, r, i[r]));
          we.set(o, 'hasDataAttrs', !0);
        }
        return i;
      }
      return 'object' == typeof e
        ? this.each(function() {
            Ce.set(this, e);
          })
        : be(
            this,
            function(t) {
              var n;
              if (o && void 0 === t) {
                if (void 0 !== (n = Ce.get(o, e))) return n;
                if (void 0 !== (n = p(o, e))) return n;
              } else
                this.each(function() {
                  Ce.set(this, e, t);
                });
            },
            null,
            t,
            arguments.length > 1,
            null,
            !0
          );
    },
    removeData: function(e) {
      return this.each(function() {
        Ce.remove(this, e);
      });
    }
  }), te.extend({
    queue: function(e, t, n) {
      var r;
      if (e)
        return (t = (t || 'fx') + 'queue'), (r = we.get(e, t)), n &&
          (!r || te.isArray(n)
            ? (r = we.access(e, t, te.makeArray(n)))
            : r.push(n)), r || [];
    },
    dequeue: function(e, t) {
      t = t || 'fx';
      var n = te.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = te._queueHooks(e, t),
        a = function() {
          te.dequeue(e, t);
        };
      'inprogress' === i && ((i = n.shift()), r--), i &&
        ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(
          e,
          a,
          o
        )), !r && o && o.empty.fire();
    },
    _queueHooks: function(e, t) {
      var n = t + 'queueHooks';
      return (
        we.get(e, n) ||
        we.access(e, n, {
          empty: te.Callbacks('once memory').add(function() {
            we.remove(e, [t + 'queue', n]);
          })
        })
      );
    }
  }), te.fn.extend({
    queue: function(e, t) {
      var n = 2;
      return 'string' != typeof e &&
        ((t = e), (e = 'fx'), n--), arguments.length < n
        ? te.queue(this[0], e)
        : void 0 === t
            ? this
            : this.each(function() {
                var n = te.queue(this, e, t);
                te._queueHooks(
                  this,
                  e
                ), 'fx' === e && 'inprogress' !== n[0] && te.dequeue(this, e);
              });
    },
    dequeue: function(e) {
      return this.each(function() {
        te.dequeue(this, e);
      });
    },
    clearQueue: function(e) {
      return this.queue(e || 'fx', []);
    },
    promise: function(e, t) {
      var n,
        r = 1,
        i = te.Deferred(),
        o = this,
        a = this.length,
        s = function() {
          --r || i.resolveWith(o, [o]);
        };
      for (
        'string' != typeof e && ((t = e), (e = void 0)), (e = e || 'fx');
        a--;

      )
        (n = we.get(o[a], e + 'queueHooks')) &&
          n.empty &&
          (r++, n.empty.add(s));
      return s(), i.promise(t);
    }
  });
  var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ke = new RegExp('^(?:([+-])=|)(' + Ee + ')([a-z%]*)$', 'i'),
    De = ['Top', 'Right', 'Bottom', 'Left'],
    Ae = function(e, t) {
      return (
        'none' === (e = t || e).style.display ||
        ('' === e.style.display &&
          te.contains(e.ownerDocument, e) &&
          'none' === te.css(e, 'display'))
      );
    },
    Se = function(e, t, n, r) {
      var i, o, a = {};
      for (o in t)
        (a[o] = e.style[o]), (e.style[o] = t[o]);
      i = n.apply(e, r || []);
      for (o in t)
        e.style[o] = a[o];
      return i;
    },
    Le = {};
  te.fn.extend({
    show: function() {
      return v(this, !0);
    },
    hide: function() {
      return v(this);
    },
    toggle: function(e) {
      return 'boolean' == typeof e
        ? e ? this.show() : this.hide()
        : this.each(function() {
            Ae(this) ? te(this).show() : te(this).hide();
          });
    }
  });
  var je = /^(?:checkbox|radio)$/i,
    qe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    Oe = /^$|\/(?:java|ecma)script/i,
    Fe = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', '']
    };
  (Fe.optgroup =
    Fe.option), (Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead), (Fe.th = Fe.td);
  var He = /<|&#?\w+;/;
  !(function() {
    var e = $.createDocumentFragment().appendChild($.createElement('div')),
      t = $.createElement('input');
    t.setAttribute(
      'type',
      'radio'
    ), t.setAttribute('checked', 'checked'), t.setAttribute('name', 't'), e.appendChild(t), (Z.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked), (e.innerHTML = '<textarea>x</textarea>'), (Z.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var Pe = $.documentElement,
    Ie = /^key/,
    Re = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Be = /^([^.]*)(?:\.(.+)|)/;
  (te.event = {
    global: {},
    add: function(e, t, n, r, i) {
      var o, a, s, u, l, c, f, d, p, h, g, v = we.get(e);
      if (v)
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)), i &&
            te.find.matchesSelector(Pe, i), n.guid || (n.guid = te.guid++), (u =
            v.events) || (u = v.events = {}), (a = v.handle) ||
            (a = v.handle = function(t) {
              return void 0 !== te && te.event.triggered !== t.type
                ? te.event.dispatch.apply(e, arguments)
                : void 0;
            }), (l = (t = (t || '').match(ve) || ['']).length);
          l--;

        )
          (p = g = (s = Be.exec(t[l]) || [])[1]), (h = (s[2] || '')
            .split('.')
            .sort()), p &&
            ((f = te.event.special[p] || {}), (p =
              (i ? f.delegateType : f.bindType) || p), (f = te.event.special[
              p
            ] || {}), (c = te.extend(
              {
                type: p,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && te.expr.match.needsContext.test(i),
                namespace: h.join('.')
              },
              o
            )), (d = u[p]) ||
              (((d = u[p] = []).delegateCount = 0), (f.setup &&
                !1 !== f.setup.call(e, r, h, a)) ||
                (e.addEventListener && e.addEventListener(p, a))), f.add &&
              (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i
              ? d.splice(d.delegateCount++, 0, c)
              : d.push(c), (te.event.global[p] = !0));
    },
    remove: function(e, t, n, r, i) {
      var o, a, s, u, l, c, f, d, p, h, g, v = we.hasData(e) && we.get(e);
      if (v && (u = v.events)) {
        for (l = (t = (t || '').match(ve) || ['']).length; l--; )
          if (
            ((s = Be.exec(t[l]) || []), (p = g = s[1]), (h = (s[2] || '')
              .split('.')
              .sort()), p)
          ) {
            for (
              (f = te.event.special[p] || {}), (d = u[
                (p = (r ? f.delegateType : f.bindType) || p)
              ] || []), (s =
                s[2] &&
                new RegExp(
                  '(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'
                )), (a = o = d.length);
              o--;

            )
              (c = d[o]), (!i && g !== c.origType) ||
                (n && n.guid !== c.guid) ||
                (s && !s.test(c.namespace)) ||
                (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                (d.splice(o, 1), c.selector && d.delegateCount--, f.remove &&
                  f.remove.call(e, c));
            a &&
              !d.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                te.removeEvent(e, p, v.handle), delete u[p]);
          } else for (p in u) te.event.remove(e, p + t[l], n, r, !0);
        te.isEmptyObject(u) && we.remove(e, 'handle events');
      }
    },
    dispatch: function(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = te.event.fix(e),
        u = new Array(arguments.length),
        l = (we.get(this, 'events') || {})[s.type] || [],
        c = te.event.special[s.type] || {};
      for ((u[0] = s), (t = 1); t < arguments.length; t++)
        u[t] = arguments[t];
      if (
        ((s.delegateTarget = this), !c.preDispatch ||
          !1 !== c.preDispatch.call(this, s))
      ) {
        for (
          (a = te.event.handlers.call(this, s, l)), (t = 0);
          (i = a[t++]) && !s.isPropagationStopped();

        )
          for (
            (s.currentTarget = i.elem), (n = 0);
            (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace && !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o), (s.data = o.data), void 0 !==
                (r = ((te.event.special[o.origType] || {}).handle || o.handler)
                  .apply(i.elem, u)) &&
                !1 === (s.result = r) &&
                (s.preventDefault(), s.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function(e, t) {
      var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
      if (u && l.nodeType && !('click' === e.type && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
            for ((o = []), (a = {}), (n = 0); n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                (a[i] = r.needsContext
                  ? te(i, this).index(l) > -1
                  : te.find(i, this, null, [l]).length), a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (l = this), u < t.length &&
        s.push({ elem: l, handlers: t.slice(u) }), s;
    },
    addProp: function(e, t) {
      Object.defineProperty(te.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: te.isFunction(t)
          ? function() {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function() {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function(t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function(e) {
      return e[te.expando] ? e : new te.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function() {
          if (this !== C() && this.focus) return this.focus(), !1;
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function() {
          if (this === C() && this.blur) return this.blur(), !1;
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function() {
          if (
            'checkbox' === this.type && this.click && te.nodeName(this, 'input')
          )
            return this.click(), !1;
        },
        _default: function(e) {
          return te.nodeName(e.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }), (te.removeEvent = function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }), (te.Event = function(e, t) {
    if (!(this instanceof te.Event)) return new te.Event(e, t);
    e && e.type
      ? ((this.originalEvent = e), (this.type =
          e.type), (this.isDefaultPrevented = e.defaultPrevented ||
          (void 0 === e.defaultPrevented && !1 === e.returnValue)
          ? x
          : w), (this.target = e.target && 3 === e.target.nodeType
          ? e.target.parentNode
          : e.target), (this.currentTarget =
          e.currentTarget), (this.relatedTarget = e.relatedTarget))
      : (this.type = e), t && te.extend(this, t), (this.timeStamp =
      (e && e.timeStamp) || te.now()), (this[te.expando] = !0);
  }), (te.Event.prototype = {
    constructor: te.Event,
    isDefaultPrevented: w,
    isPropagationStopped: w,
    isImmediatePropagationStopped: w,
    isSimulated: !1,
    preventDefault: function() {
      var e = this.originalEvent;
      (this.isDefaultPrevented = x), e &&
        !this.isSimulated &&
        e.preventDefault();
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      (this.isPropagationStopped = x), e &&
        !this.isSimulated &&
        e.stopPropagation();
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      (this.isImmediatePropagationStopped = x), e &&
        !this.isSimulated &&
        e.stopImmediatePropagation(), this.stopPropagation();
    }
  }), te.each(
    {
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(e) {
        var t = e.button;
        return null == e.which && Ie.test(e.type)
          ? null != e.charCode ? e.charCode : e.keyCode
          : !e.which && void 0 !== t && Re.test(e.type)
              ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0
              : e.which;
      }
    },
    te.event.addProp
  ), te.each(
    {
      mouseenter: 'mouseover',
      mouseleave: 'mouseout',
      pointerenter: 'pointerover',
      pointerleave: 'pointerout'
    },
    function(e, t) {
      te.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var n, r = this, i = e.relatedTarget, o = e.handleObj;
          return (i && (i === r || te.contains(r, i))) ||
            ((e.type = o.origType), (n = o.handler.apply(
              this,
              arguments
            )), (e.type = t)), n;
        }
      };
    }
  ), te.fn.extend({
    on: function(e, t, n, r) {
      return T(this, e, t, n, r);
    },
    one: function(e, t, n, r) {
      return T(this, e, t, n, r, 1);
    },
    off: function(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj)
        return (r = e.handleObj), te(e.delegateTarget).off(
          r.namespace ? r.origType + '.' + r.namespace : r.origType,
          r.selector,
          r.handler
        ), this;
      if ('object' == typeof e) {
        for (i in e)
          this.off(i, t, e[i]);
        return this;
      }
      return (!1 !== t && 'function' != typeof t) ||
        ((n = t), (t = void 0)), !1 === n && (n = w), this.each(function() {
        te.event.remove(this, e, n, t);
      });
    }
  });
  var We = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Me = /<script|<style|<link/i,
    $e = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ze = /^true\/(.*)/,
    _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  te.extend({
    htmlPrefilter: function(e) {
      return e.replace(We, '<$1></$2>');
    },
    clone: function(e, t, n) {
      var r, i, o, a, s = e.cloneNode(!0), u = te.contains(e.ownerDocument, e);
      if (
        !(Z.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          te.isXMLDoc(e))
      )
        for ((a = m(s)), (r = 0), (i = (o = m(e)).length); r < i; r++)
          A(o[r], a[r]);
      if (t)
        if (n)
          for (
            (o = o || m(e)), (a = a || m(s)), (r = 0), (i = o.length);
            r < i;
            r++
          )
            D(o[r], a[r]);
        else D(e, s);
      return (a = m(s, 'script')).length > 0 && y(a, !u && m(e, 'script')), s;
    },
    cleanData: function(e) {
      for (var t, n, r, i = te.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (xe(n)) {
          if ((t = n[we.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? te.event.remove(n, r) : te.removeEvent(n, r, t.handle);
            n[we.expando] = void 0;
          }
          n[Ce.expando] && (n[Ce.expando] = void 0);
        }
    }
  }), te.fn.extend({
    detach: function(e) {
      return L(this, e, !0);
    },
    remove: function(e) {
      return L(this, e);
    },
    text: function(e) {
      return be(
        this,
        function(e) {
          return void 0 === e
            ? te.text(this)
            : this.empty().each(function() {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  (this.textContent = e);
              });
        },
        null,
        e,
        arguments.length
      );
    },
    append: function() {
      return S(this, arguments, function(e) {
        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
          N(this, e).appendChild(e);
      });
    },
    prepend: function() {
      return S(this, arguments, function(e) {
        if (
          1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType
        ) {
          var t = N(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function() {
      return S(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function() {
      return S(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++)
        1 === e.nodeType && (te.cleanData(m(e, !1)), (e.textContent = ''));
      return this;
    },
    clone: function(e, t) {
      return (e = null != e && e), (t = null == t
        ? e
        : t), this.map(function() {
        return te.clone(this, e, t);
      });
    },
    html: function(e) {
      return be(
        this,
        function(e) {
          var t = this[0] || {}, n = 0, r = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if (
            'string' == typeof e &&
            !Me.test(e) &&
            !Fe[(qe.exec(e) || ['', ''])[1].toLowerCase()]
          ) {
            e = te.htmlPrefilter(e);
            try {
              for (; n < r; n++)
                1 === (t = this[n] || {}).nodeType &&
                  (te.cleanData(m(t, !1)), (t.innerHTML = e));
              t = 0;
            } catch (e) {}
          }
          t && this.empty().append(e);
        },
        null,
        e,
        arguments.length
      );
    },
    replaceWith: function() {
      var e = [];
      return S(
        this,
        arguments,
        function(t) {
          var n = this.parentNode;
          te.inArray(this, e) < 0 &&
            (te.cleanData(m(this)), n && n.replaceChild(t, this));
        },
        e
      );
    }
  }), te.each(
    {
      appendTo: 'append',
      prependTo: 'prepend',
      insertBefore: 'before',
      insertAfter: 'after',
      replaceAll: 'replaceWith'
    },
    function(e, t) {
      te.fn[e] = function(e) {
        for (var n, r = [], i = te(e), o = i.length - 1, a = 0; a <= o; a++)
          (n = a === o ? this : this.clone(!0)), te(i[a])[t](n), V.apply(
            r,
            n.get()
          );
        return this.pushStack(r);
      };
    }
  );
  var Ue = /^margin/,
    Ve = new RegExp('^(' + Ee + ')(?!px)[a-z%]+$', 'i'),
    Xe = function(t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    };
  !(function() {
    function t() {
      if (s) {
        (s.style.cssText =
          'box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%'), (s.innerHTML =
          ''), Pe.appendChild(a);
        var t = e.getComputedStyle(s);
        (n = '1%' !== t.top), (o = '2px' === t.marginLeft), (r =
          '4px' === t.width), (s.style.marginRight = '50%'), (i =
          '4px' === t.marginRight), Pe.removeChild(a), (s = null);
      }
    }
    var n, r, i, o, a = $.createElement('div'), s = $.createElement('div');
    s.style &&
      ((s.style.backgroundClip = 'content-box'), (s.cloneNode(
        !0
      ).style.backgroundClip =
        ''), (Z.clearCloneStyle =
        'content-box' === s.style.backgroundClip), (a.style.cssText =
        'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute'), a.appendChild(
        s
      ), te.extend(Z, {
        pixelPosition: function() {
          return t(), n;
        },
        boxSizingReliable: function() {
          return t(), r;
        },
        pixelMarginRight: function() {
          return t(), i;
        },
        reliableMarginLeft: function() {
          return t(), o;
        }
      }));
  })();
  var Qe = /^(none|table(?!-c[ea]).+)/,
    Ye = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Ge = { letterSpacing: '0', fontWeight: '400' },
    Ke = ['Webkit', 'Moz', 'ms'],
    Je = $.createElement('div').style;
  te.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = j(e, 'opacity');
            return '' === n ? '1' : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: 'cssFloat' },
    style: function(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, a, s = te.camelCase(t), u = e.style;
        if (
          ((t = te.cssProps[s] || (te.cssProps[s] = O(s) || s)), (a =
            te.cssHooks[t] || te.cssHooks[s]), void 0 === n)
        )
          return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
        'string' === (o = typeof n) &&
          (i = ke.exec(n)) &&
          i[1] &&
          ((n = h(e, t, i)), (o = 'number')), null != n &&
          n === n &&
          ('number' === o &&
            (n +=
              (i && i[3]) ||
              (te.cssNumber[s] ? '' : 'px')), Z.clearCloneStyle ||
            '' !== n ||
            0 !== t.indexOf('background') ||
            (u[t] = 'inherit'), (a &&
            'set' in a &&
            void 0 === (n = a.set(e, n, r))) ||
            (u[t] = n));
      }
    },
    css: function(e, t, n, r) {
      var i, o, a, s = te.camelCase(t);
      return (t = te.cssProps[s] || (te.cssProps[s] = O(s) || s)), (a =
        te.cssHooks[t] || te.cssHooks[s]) &&
        'get' in a &&
        (i = a.get(e, !0, n)), void 0 === i && (i = j(e, t, r)), 'normal' ===
        i &&
        t in Ge &&
        (i = Ge[t]), '' === n || n
        ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
        : i;
    }
  }), te.each(['height', 'width'], function(e, t) {
    te.cssHooks[t] = {
      get: function(e, n, r) {
        if (n)
          return !Qe.test(te.css(e, 'display')) ||
            (e.getClientRects().length && e.getBoundingClientRect().width)
            ? P(e, t, r)
            : Se(e, Ye, function() {
                return P(e, t, r);
              });
      },
      set: function(e, n, r) {
        var i,
          o = r && Xe(e),
          a =
            r && H(e, t, r, 'border-box' === te.css(e, 'boxSizing', !1, o), o);
        return a &&
          (i = ke.exec(n)) &&
          'px' !== (i[3] || 'px') &&
          ((e.style[t] = n), (n = te.css(e, t))), F(e, n, a);
      }
    };
  }), (te.cssHooks.marginLeft = q(Z.reliableMarginLeft, function(e, t) {
    if (t)
      return (
        (parseFloat(j(e, 'marginLeft')) ||
          e.getBoundingClientRect().left -
            Se(e, { marginLeft: 0 }, function() {
              return e.getBoundingClientRect().left;
            })) + 'px'
      );
  })), te.each({ margin: '', padding: '', border: 'Width' }, function(e, t) {
    (te.cssHooks[e + t] = {
      expand: function(n) {
        for (
          var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n];
          r < 4;
          r++
        )
          i[e + De[r] + t] = o[r] || o[r - 2] || o[0];
        return i;
      }
    }), Ue.test(e) || (te.cssHooks[e + t].set = F);
  }), te.fn.extend({
    css: function(e, t) {
      return be(
        this,
        function(e, t, n) {
          var r, i, o = {}, a = 0;
          if (te.isArray(t)) {
            for ((r = Xe(e)), (i = t.length); a < i; a++)
              o[t[a]] = te.css(e, t[a], !1, r);
            return o;
          }
          return void 0 !== n ? te.style(e, t, n) : te.css(e, t);
        },
        e,
        t,
        arguments.length > 1
      );
    }
  }), (te.fn.delay = function(t, n) {
    return (t = te.fx ? te.fx.speeds[t] || t : t), (n =
      n || 'fx'), this.queue(n, function(n, r) {
      var i = e.setTimeout(n, t);
      r.stop = function() {
        e.clearTimeout(i);
      };
    });
  }), (function() {
    var e = $.createElement('input'),
      t = $.createElement('select').appendChild($.createElement('option'));
    (e.type =
      'checkbox'), (Z.checkOn = '' !== e.value), (Z.optSelected = t.selected), ((e = $.createElement('input')).value = 't'), (e.type = 'radio'), (Z.radioValue = 't' === e.value);
  })();
  var Ze, et = te.expr.attrHandle;
  te.fn.extend({
    attr: function(e, t) {
      return be(this, te.attr, e, t, arguments.length > 1);
    },
    removeAttr: function(e) {
      return this.each(function() {
        te.removeAttr(this, e);
      });
    }
  }), te.extend({
    attr: function(e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o)
        return void 0 === e.getAttribute
          ? te.prop(e, t, n)
          : ((1 === o && te.isXMLDoc(e)) ||
              (i =
                te.attrHooks[t.toLowerCase()] ||
                (te.expr.match.bool.test(t) ? Ze : void 0)), void 0 !== n
              ? null === n
                  ? void te.removeAttr(e, t)
                  : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ''), n)
              : i && 'get' in i && null !== (r = i.get(e, t))
                  ? r
                  : ((r = te.find.attr(e, t)), null == r ? void 0 : r));
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!Z.radioValue && 'radio' === t && te.nodeName(e, 'input')) {
            var n = e.value;
            return e.setAttribute('type', t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function(e, t) {
      var n, r = 0, i = t && t.match(ve);
      if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
    }
  }), (Ze = {
    set: function(e, t, n) {
      return !1 === t ? te.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }), te.each(te.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = et[t] || te.find.attr;
    et[t] = function(e, t, r) {
      var i, o, a = t.toLowerCase();
      return r ||
        ((o = et[a]), (et[a] = i), (i = null != n(e, t, r) ? a : null), (et[
          a
        ] = o)), i;
    };
  });
  var tt = /^(?:input|select|textarea|button)$/i, nt = /^(?:a|area)$/i;
  te.fn.extend({
    prop: function(e, t) {
      return be(this, te.prop, e, t, arguments.length > 1);
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[te.propFix[e] || e];
      });
    }
  }), te.extend({
    prop: function(e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o)
        return (1 === o && te.isXMLDoc(e)) ||
          ((t = te.propFix[t] || t), (i = te.propHooks[t])), void 0 !== n
          ? i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)
          : i && 'get' in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = te.find.attr(e, 'tabindex');
          return t
            ? parseInt(t, 10)
            : tt.test(e.nodeName) || (nt.test(e.nodeName) && e.href) ? 0 : -1;
        }
      }
    },
    propFix: { for: 'htmlFor', class: 'className' }
  }), Z.optSelected ||
    (te.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), te.each(
    [
      'tabIndex',
      'readOnly',
      'maxLength',
      'cellSpacing',
      'cellPadding',
      'rowSpan',
      'colSpan',
      'useMap',
      'frameBorder',
      'contentEditable'
    ],
    function() {
      te.propFix[this.toLowerCase()] = this;
    }
  ), te.fn.extend({
    addClass: function(e) {
      var t, n, r, i, o, a, s, u = 0;
      if (te.isFunction(e))
        return this.each(function(t) {
          te(this).addClass(e.call(this, t, R(this)));
        });
      if ('string' == typeof e && e)
        for (t = e.match(ve) || []; (n = this[u++]); )
          if (((i = R(n)), (r = 1 === n.nodeType && ' ' + I(i) + ' '))) {
            for (a = 0; (o = t[a++]); )
              r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
            i !== (s = I(r)) && n.setAttribute('class', s);
          }
      return this;
    },
    removeClass: function(e) {
      var t, n, r, i, o, a, s, u = 0;
      if (te.isFunction(e))
        return this.each(function(t) {
          te(this).removeClass(e.call(this, t, R(this)));
        });
      if (!arguments.length) return this.attr('class', '');
      if ('string' == typeof e && e)
        for (t = e.match(ve) || []; (n = this[u++]); )
          if (((i = R(n)), (r = 1 === n.nodeType && ' ' + I(i) + ' '))) {
            for (a = 0; (o = t[a++]); )
              for (; r.indexOf(' ' + o + ' ') > -1; )
                r = r.replace(' ' + o + ' ', ' ');
            i !== (s = I(r)) && n.setAttribute('class', s);
          }
      return this;
    },
    toggleClass: function(e, t) {
      var n = typeof e;
      return 'boolean' == typeof t && 'string' === n
        ? t ? this.addClass(e) : this.removeClass(e)
        : te.isFunction(e)
            ? this.each(function(n) {
                te(this).toggleClass(e.call(this, n, R(this), t), t);
              })
            : this.each(function() {
                var t, r, i, o;
                if ('string' === n)
                  for (
                    (r = 0), (i = te(this)), (o = e.match(ve) || []);
                    (t = o[r++]);

                  )
                    i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                  (void 0 !== e && 'boolean' !== n) ||
                    ((t = R(this)) && we.set(this, '__className__', t), this
                      .setAttribute &&
                      this.setAttribute(
                        'class',
                        t || !1 === e ? '' : we.get(this, '__className__') || ''
                      ));
              });
    },
    hasClass: function(e) {
      var t, n, r = 0;
      for (t = ' ' + e + ' '; (n = this[r++]); )
        if (1 === n.nodeType && (' ' + I(R(n)) + ' ').indexOf(t) > -1)
          return !0;
      return !1;
    }
  });
  var rt = /\r/g;
  te.fn.extend({
    val: function(e) {
      var t, n, r, i = this[0];
      {
        if (arguments.length)
          return (r = te.isFunction(e)), this.each(function(n) {
            var i;
            1 === this.nodeType &&
              (null == (i = r ? e.call(this, n, te(this).val()) : e)
                ? (i = '')
                : 'number' == typeof i
                    ? (i += '')
                    : te.isArray(i) &&
                        (i = te.map(i, function(e) {
                          return null == e ? '' : e + '';
                        })), ((t =
                te.valHooks[this.type] ||
                te.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in t &&
                void 0 !== t.set(this, i, 'value')) ||
                (this.value = i));
          });
        if (i)
          return (t =
            te.valHooks[i.type] || te.valHooks[i.nodeName.toLowerCase()]) &&
            'get' in t &&
            void 0 !== (n = t.get(i, 'value'))
            ? n
            : ((n = i.value), 'string' == typeof n
                ? n.replace(rt, '')
                : null == n ? '' : n);
      }
    }
  }), te.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = te.find.attr(e, 'value');
          return null != t ? t : I(te.text(e));
        }
      },
      select: {
        get: function(e) {
          var t,
            n,
            r,
            i = e.options,
            o = e.selectedIndex,
            a = 'select-one' === e.type,
            s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++)
            if (
              ((n = i[r]).selected || r === o) &&
              !n.disabled &&
              (!n.parentNode.disabled || !te.nodeName(n.parentNode, 'optgroup'))
            ) {
              if (((t = te(n).val()), a)) return t;
              s.push(t);
            }
          return s;
        },
        set: function(e, t) {
          for (
            var n, r, i = e.options, o = te.makeArray(t), a = i.length;
            a--;

          )
            ((r = i[a]).selected =
              te.inArray(te.valHooks.option.get(r), o) > -1) && (n = !0);
          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), te.each(['radio', 'checkbox'], function() {
    (te.valHooks[this] = {
      set: function(e, t) {
        if (te.isArray(t)) return (e.checked = te.inArray(te(e).val(), t) > -1);
      }
    }), Z.checkOn ||
      (te.valHooks[this].get = function(e) {
        return null === e.getAttribute('value') ? 'on' : e.value;
      });
  });
  var it = /^(?:focusinfocus|focusoutblur)$/;
  te.extend(te.event, {
    trigger: function(t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d = [r || $],
        p = G.call(t, 'type') ? t.type : t,
        h = G.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (
        ((a = s = r = r || $), 3 !== r.nodeType &&
          8 !== r.nodeType &&
          !it.test(p + te.event.triggered) &&
          (p.indexOf('.') > -1 &&
            ((p = (h = p.split('.')).shift()), h.sort()), (l =
            p.indexOf(':') < 0 && 'on' + p), (t = t[te.expando]
            ? t
            : new te.Event(p, 'object' == typeof t && t)), (t.isTrigger = i
            ? 2
            : 3), (t.namespace = h.join('.')), (t.rnamespace = t.namespace
            ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null), (t.result = void 0), t.target ||
            (t.target = r), (n = null == n
            ? [t]
            : te.makeArray(n, [t])), (f = te.event.special[p] || {}), i ||
            !f.trigger ||
            !1 !== f.trigger.apply(r, n)))
      ) {
        if (!i && !f.noBubble && !te.isWindow(r)) {
          for (
            (u = f.delegateType || p), it.test(u + p) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            d.push(a), (s = a);
          s === (r.ownerDocument || $) &&
            d.push(s.defaultView || s.parentWindow || e);
        }
        for (o = 0; (a = d[o++]) && !t.isPropagationStopped(); )
          (t.type = o > 1 ? u : f.bindType || p), (c =
            (we.get(a, 'events') || {})[t.type] && we.get(a, 'handle')) &&
            c.apply(a, n), (c = l && a[l]) &&
            c.apply &&
            xe(a) &&
            ((t.result = c.apply(a, n)), !1 === t.result && t.preventDefault());
        return (t.type = p), i ||
          t.isDefaultPrevented() ||
          (f._default && !1 !== f._default.apply(d.pop(), n)) ||
          !xe(r) ||
          (l &&
            te.isFunction(r[p]) &&
            !te.isWindow(r) &&
            ((s = r[l]) && (r[l] = null), (te.event.triggered = p), r[
              p
            ](), (te.event.triggered = void 0), s && (r[l] = s))), t.result;
      }
    },
    simulate: function(e, t, n) {
      var r = te.extend(new te.Event(), n, { type: e, isSimulated: !0 });
      te.event.trigger(r, null, t);
    }
  }), te.fn.extend({
    trigger: function(e, t) {
      return this.each(function() {
        te.event.trigger(e, t, this);
      });
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      if (n) return te.event.trigger(e, t, n, !0);
    }
  }), te.each(
    'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
      ' '
    ),
    function(e, t) {
      te.fn[t] = function(e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    }
  ), te.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), (Z.focusin = 'onfocusin' in e), Z.focusin ||
    te.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
      var n = function(e) {
        te.event.simulate(t, e.target, te.event.fix(e));
      };
      te.event.special[t] = {
        setup: function() {
          var r = this.ownerDocument || this, i = we.access(r, t);
          i || r.addEventListener(e, n, !0), we.access(r, t, (i || 0) + 1);
        },
        teardown: function() {
          var r = this.ownerDocument || this, i = we.access(r, t) - 1;
          i
            ? we.access(r, t, i)
            : (r.removeEventListener(e, n, !0), we.remove(r, t));
        }
      };
    });
  var ot = /\[\]$/,
    at = /\r?\n/g,
    st = /^(?:submit|button|image|reset|file)$/i,
    ut = /^(?:input|select|textarea|keygen)/i;
  (te.param = function(e, t) {
    var n,
      r = [],
      i = function(e, t) {
        var n = te.isFunction(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (te.isArray(e) || (e.jquery && !te.isPlainObject(e)))
      te.each(e, function() {
        i(this.name, this.value);
      });
    else for (n in e) B(n, e[n], t, i);
    return r.join('&');
  }), te.fn.extend({
    serialize: function() {
      return te.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var e = te.prop(this, 'elements');
        return e ? te.makeArray(e) : this;
      })
        .filter(function() {
          var e = this.type;
          return (
            this.name &&
            !te(this).is(':disabled') &&
            ut.test(this.nodeName) &&
            !st.test(e) &&
            (this.checked || !je.test(e))
          );
        })
        .map(function(e, t) {
          var n = te(this).val();
          return null == n
            ? null
            : te.isArray(n)
                ? te.map(n, function(e) {
                    return { name: t.name, value: e.replace(at, '\r\n') };
                  })
                : { name: t.name, value: n.replace(at, '\r\n') };
        })
        .get();
    }
  }), te.fn.extend({
    wrapAll: function(e) {
      var t;
      return this[0] &&
        (te.isFunction(e) && (e = e.call(this[0])), (t = te(
          e,
          this[0].ownerDocument
        )
          .eq(0)
          .clone(!0)), this[0].parentNode && t.insertBefore(this[0]), t
          .map(function() {
            for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
            return e;
          })
          .append(this)), this;
    },
    wrapInner: function(e) {
      return te.isFunction(e)
        ? this.each(function(t) {
            te(this).wrapInner(e.call(this, t));
          })
        : this.each(function() {
            var t = te(this), n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e);
          });
    },
    wrap: function(e) {
      var t = te.isFunction(e);
      return this.each(function(n) {
        te(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function(e) {
      return this.parent(e).not('body').each(function() {
        te(this).replaceWith(this.childNodes);
      }), this;
    }
  }), (te.expr.pseudos.hidden = function(e) {
    return !te.expr.pseudos.visible(e);
  }), (te.expr.pseudos.visible = function(e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }), (Z.createHTMLDocument = (function() {
    var e = $.implementation.createHTMLDocument('').body;
    return (e.innerHTML = '<form></form><form></form>'), 2 ===
      e.childNodes.length;
  })()), (te.parseHTML = function(e, t, n) {
    if ('string' != typeof e) return [];
    'boolean' == typeof t && ((n = t), (t = !1));
    var r, i, o;
    return t ||
      (Z.createHTMLDocument
        ? (((r = (t = $.implementation.createHTMLDocument('')).createElement(
            'base'
          )).href =
            $.location.href), t.head.appendChild(r))
        : (t = $)), (i = ce.exec(e)), (o = !n && []), i
      ? [t.createElement(i[1])]
      : ((i = b([e], t, o)), o && o.length && te(o).remove(), te.merge(
          [],
          i.childNodes
        ));
  }), (te.offset = {
    setOffset: function(e, t, n) {
      var r, i, o, a, s, u, l = te.css(e, 'position'), c = te(e), f = {};
      'static' === l &&
        (e.style.position = 'relative'), (s = c.offset()), (o = te.css(
        e,
        'top'
      )), (u = te.css(e, 'left')), ('absolute' === l || 'fixed' === l) &&
        (o + u).indexOf('auto') > -1
        ? ((a = (r = c.position()).top), (i = r.left))
        : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)), te.isFunction(
        t
      ) && (t = t.call(e, n, te.extend({}, s))), null != t.top &&
        (f.top = t.top - s.top + a), null != t.left &&
        (f.left = t.left - s.left + i), 'using' in t
        ? t.using.call(e, f)
        : c.css(f);
    }
  }), te.fn.extend({
    offset: function(e) {
      if (arguments.length)
        return void 0 === e
          ? this
          : this.each(function(t) {
              te.offset.setOffset(this, e, t);
            });
      var t, n, r, i, o = this[0];
      if (o)
        return o.getClientRects().length
          ? ((r = o.getBoundingClientRect()), r.width || r.height
              ? ((i = o.ownerDocument), (n = W(i)), (t = i.documentElement), {
                  top: r.top + n.pageYOffset - t.clientTop,
                  left: r.left + n.pageXOffset - t.clientLeft
                })
              : r)
          : { top: 0, left: 0 };
    },
    position: function() {
      if (this[0]) {
        var e, t, n = this[0], r = { top: 0, left: 0 };
        return 'fixed' === te.css(n, 'position')
          ? (t = n.getBoundingClientRect())
          : ((e = this.offsetParent()), (t = this.offset()), te.nodeName(
              e[0],
              'html'
            ) || (r = e.offset()), (r = {
              top: r.top + te.css(e[0], 'borderTopWidth', !0),
              left: r.left + te.css(e[0], 'borderLeftWidth', !0)
            })), {
          top: t.top - r.top - te.css(n, 'marginTop', !0),
          left: t.left - r.left - te.css(n, 'marginLeft', !0)
        };
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (
          var e = this.offsetParent;
          e && 'static' === te.css(e, 'position');

        ) e = e.offsetParent;
        return e || Pe;
      });
    }
  }), te.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function(
    e,
    t
  ) {
    var n = 'pageYOffset' === t;
    te.fn[e] = function(r) {
      return be(
        this,
        function(e, r, i) {
          var o = W(e);
          if (void 0 === i) return o ? o[t] : e[r];
          o
            ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
            : (e[r] = i);
        },
        e,
        r,
        arguments.length
      );
    };
  }), te.each(['top', 'left'], function(e, t) {
    te.cssHooks[t] = q(Z.pixelPosition, function(e, n) {
      if (n) return (n = j(e, t)), Ve.test(n) ? te(e).position()[t] + 'px' : n;
    });
  }), te.each({ Height: 'height', Width: 'width' }, function(e, t) {
    te.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, function(
      n,
      r
    ) {
      te.fn[r] = function(i, o) {
        var a = arguments.length && (n || 'boolean' != typeof i),
          s = n || (!0 === i || !0 === o ? 'margin' : 'border');
        return be(
          this,
          function(t, n, i) {
            var o;
            return te.isWindow(t)
              ? 0 === r.indexOf('outer')
                  ? t['inner' + e]
                  : t.document.documentElement['client' + e]
              : 9 === t.nodeType
                  ? ((o = t.documentElement), Math.max(
                      t.body['scroll' + e],
                      o['scroll' + e],
                      t.body['offset' + e],
                      o['offset' + e],
                      o['client' + e]
                    ))
                  : void 0 === i ? te.css(t, n, s) : te.style(t, n, i, s);
          },
          t,
          a ? i : void 0,
          a
        );
      };
    });
  }), 'function' == typeof define &&
    define.amd &&
    define('jquery', [], function() {
      return te;
    });
  var lt = e.jQuery, ct = e.$;
  return (te.noConflict = function(t) {
    return e.$ === te && (e.$ = ct), t &&
      e.jQuery === te &&
      (e.jQuery = lt), te;
  }), t || (e.jQuery = e.$ = te), te;
});
