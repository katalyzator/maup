!function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document)throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    function i(t, e) {
        e = e || it;
        var i = e.createElement("script");
        i.text = t, e.head.appendChild(i).parentNode.removeChild(i)
    }

    function n(t) {
        var e = !!t && "length" in t && t.length, i = gt.type(t);
        return "function" !== i && !gt.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function o(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }

    function s(t, e, i) {
        return gt.isFunction(e) ? gt.grep(t, function (t, n) {
            return !!e.call(t, n, t) !== i
        }) : e.nodeType ? gt.grep(t, function (t) {
            return t === e !== i
        }) : "string" != typeof e ? gt.grep(t, function (t) {
            return at.call(e, t) > -1 !== i
        }) : Tt.test(e) ? gt.filter(e, t, i) : (e = gt.filter(e, t), gt.grep(t, function (t) {
            return at.call(e, t) > -1 !== i && 1 === t.nodeType
        }))
    }

    function r(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function a(t) {
        var e = {};
        return gt.each(t.match(Dt) || [], function (t, i) {
            e[i] = !0
        }), e
    }

    function l(t) {
        return t
    }

    function c(t) {
        throw t
    }

    function h(t, e, i, n) {
        var o;
        try {
            t && gt.isFunction(o = t.promise) ? o.call(t).done(e).fail(i) : t && gt.isFunction(o = t.then) ? o.call(t, e, i) : e.apply(void 0, [t].slice(n))
        } catch (t) {
            i.apply(void 0, [t])
        }
    }

    function d() {
        it.removeEventListener("DOMContentLoaded", d), t.removeEventListener("load", d), gt.ready()
    }

    function u() {
        this.expando = gt.expando + u.uid++
    }

    function p(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : It.test(t) ? JSON.parse(t) : t)
    }

    function f(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)if (n = "data-" + e.replace(_t, "-$&").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
            try {
                i = p(i)
            } catch (o) {
            }
            Pt.set(t, e, i)
        } else i = void 0;
        return i
    }

    function g(t, e, i, n) {
        var o, s = 1, r = 20, a = n ? function () {
                return n.cur()
            } : function () {
                return gt.css(t, e, "")
            }, l = a(), c = i && i[3] || (gt.cssNumber[e] ? "" : "px"),
            h = (gt.cssNumber[e] || "px" !== c && +l) && qt.exec(gt.css(t, e));
        if (h && h[3] !== c) {
            c = c || h[3], i = i || [], h = +l || 1;
            do s = s || ".5", h /= s, gt.style(t, e, h + c); while (s !== (s = a() / l) && 1 !== s && --r)
        }
        return i && (h = +h || +l || 0, o = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = h, n.end = o)), o
    }

    function v(t) {
        var e, i = t.ownerDocument, n = t.nodeName, o = Ut[n];
        return o ? o : (e = i.body.appendChild(i.createElement(n)), o = gt.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), Ut[n] = o, o)
    }

    function m(t, e) {
        for (var i, n, o = [], s = 0,
                 r = t.length; s < r; s++)n = t[s], n.style && (i = n.style.display, e ? ("none" === i && (o[s] = jt.get(n, "display") || null, o[s] || (n.style.display = "")), "" === n.style.display && Wt(n) && (o[s] = v(n))) : "none" !== i && (o[s] = "none", jt.set(n, "display", i)));
        for (s = 0; s < r; s++)null != o[s] && (t[s].style.display = o[s]);
        return t
    }

    function w(t, e) {
        var i;
        return i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && o(t, e) ? gt.merge([t], i) : i
    }

    function y(t, e) {
        for (var i = 0, n = t.length; i < n; i++)jt.set(t[i], "globalEval", !e || jt.get(e[i], "globalEval"))
    }

    function x(t, e, i, n, o) {
        for (var s, r, a, l, c, h, d = e.createDocumentFragment(), u = [], p = 0,
                 f = t.length; p < f; p++)if (s = t[p], s || 0 === s)if ("object" === gt.type(s)) gt.merge(u, s.nodeType ? [s] : s); else if (Gt.test(s)) {
            for (r = r || d.appendChild(e.createElement("div")), a = (Vt.exec(s) || ["", ""])[1].toLowerCase(), l = Xt[a] || Xt._default, r.innerHTML = l[1] + gt.htmlPrefilter(s) + l[2], h = l[0]; h--;)r = r.lastChild;
            gt.merge(u, r.childNodes), r = d.firstChild, r.textContent = ""
        } else u.push(e.createTextNode(s));
        for (d.textContent = "", p = 0; s = u[p++];)if (n && gt.inArray(s, n) > -1) o && o.push(s); else if (c = gt.contains(s.ownerDocument, s), r = w(d.appendChild(s), "script"), c && y(r), i)for (h = 0; s = r[h++];)Yt.test(s.type || "") && i.push(s);
        return d
    }

    function k() {
        return !0
    }

    function b() {
        return !1
    }

    function C() {
        try {
            return it.activeElement
        } catch (t) {
        }
    }

    function $(t, e, i, n, o, s) {
        var r, a;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (a in e)$(t, a, i, n, e[a], s);
            return t
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), o === !1) o = b; else if (!o)return t;
        return 1 === s && (r = o, o = function (t) {
            return gt().off(t), r.apply(this, arguments)
        }, o.guid = r.guid || (r.guid = gt.guid++)), t.each(function () {
            gt.event.add(this, e, o, n, i)
        })
    }

    function T(t, e) {
        return o(t, "table") && o(11 !== e.nodeType ? e : e.firstChild, "tr") ? gt(">tbody", t)[0] || t : t
    }

    function S(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function L(t) {
        var e = oe.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function A(t, e) {
        var i, n, o, s, r, a, l, c;
        if (1 === e.nodeType) {
            if (jt.hasData(t) && (s = jt.access(t), r = jt.set(e, s), c = s.events)) {
                delete r.handle, r.events = {};
                for (o in c)for (i = 0, n = c[o].length; i < n; i++)gt.event.add(e, o, c[o][i])
            }
            Pt.hasData(t) && (a = Pt.access(t), l = gt.extend({}, a), Pt.set(e, l))
        }
    }

    function M(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && Zt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
    }

    function E(t, e, n, o) {
        e = st.apply([], e);
        var s, r, a, l, c, h, d = 0, u = t.length, p = u - 1, f = e[0], g = gt.isFunction(f);
        if (g || u > 1 && "string" == typeof f && !pt.checkClone && ne.test(f))return t.each(function (i) {
            var s = t.eq(i);
            g && (e[0] = f.call(this, i, s.html())), E(s, e, n, o)
        });
        if (u && (s = x(e, t[0].ownerDocument, !1, t, o), r = s.firstChild, 1 === s.childNodes.length && (s = r), r || o)) {
            for (a = gt.map(w(s, "script"), S), l = a.length; d < u; d++)c = s, d !== p && (c = gt.clone(c, !0, !0), l && gt.merge(a, w(c, "script"))), n.call(t[d], c, d);
            if (l)for (h = a[a.length - 1].ownerDocument, gt.map(a, L), d = 0; d < l; d++)c = a[d], Yt.test(c.type || "") && !jt.access(c, "globalEval") && gt.contains(h, c) && (c.src ? gt._evalUrl && gt._evalUrl(c.src) : i(c.textContent.replace(se, ""), h))
        }
        return t
    }

    function D(t, e, i) {
        for (var n, o = e ? gt.filter(e, t) : t,
                 s = 0; null != (n = o[s]); s++)i || 1 !== n.nodeType || gt.cleanData(w(n)), n.parentNode && (i && gt.contains(n.ownerDocument, n) && y(w(n, "script")), n.parentNode.removeChild(n));
        return t
    }

    function O(t, e, i) {
        var n, o, s, r, a = t.style;
        return i = i || le(t), i && (r = i.getPropertyValue(e) || i[e], "" !== r || gt.contains(t.ownerDocument, t) || (r = gt.style(t, e)), !pt.pixelMarginRight() && ae.test(r) && re.test(e) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
    }

    function B(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function N(t) {
        if (t in fe)return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = pe.length; i--;)if (t = pe[i] + e, t in fe)return t
    }

    function H(t) {
        var e = gt.cssProps[t];
        return e || (e = gt.cssProps[t] = N(t) || t), e
    }

    function j(t, e, i) {
        var n = qt.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function P(t, e, i, n, o) {
        var s, r = 0;
        for (s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; s < 4; s += 2)"margin" === i && (r += gt.css(t, i + Ft[s], !0, o)), n ? ("content" === i && (r -= gt.css(t, "padding" + Ft[s], !0, o)), "margin" !== i && (r -= gt.css(t, "border" + Ft[s] + "Width", !0, o))) : (r += gt.css(t, "padding" + Ft[s], !0, o), "padding" !== i && (r += gt.css(t, "border" + Ft[s] + "Width", !0, o)));
        return r
    }

    function I(t, e, i) {
        var n, o = le(t), s = O(t, e, o), r = "border-box" === gt.css(t, "boxSizing", !1, o);
        return ae.test(s) ? s : (n = r && (pt.boxSizingReliable() || s === t.style[e]), "auto" === s && (s = t["offset" + e[0].toUpperCase() + e.slice(1)]), s = parseFloat(s) || 0, s + P(t, e, i || (r ? "border" : "content"), n, o) + "px")
    }

    function _(t, e, i, n, o) {
        return new _.prototype.init(t, e, i, n, o)
    }

    function z() {
        ve && (it.hidden === !1 && t.requestAnimationFrame ? t.requestAnimationFrame(z) : t.setTimeout(z, gt.fx.interval), gt.fx.tick())
    }

    function q() {
        return t.setTimeout(function () {
            ge = void 0
        }), ge = gt.now()
    }

    function F(t, e) {
        var i, n = 0, o = {height: t};
        for (e = e ? 1 : 0; n < 4; n += 2 - e)i = Ft[n], o["margin" + i] = o["padding" + i] = t;
        return e && (o.opacity = o.width = t), o
    }

    function W(t, e, i) {
        for (var n, o = (Z.tweeners[e] || []).concat(Z.tweeners["*"]), s = 0,
                 r = o.length; s < r; s++)if (n = o[s].call(i, e, t))return n
    }

    function R(t, e, i) {
        var n, o, s, r, a, l, c, h, d = "width" in e || "height" in e, u = this, p = {}, f = t.style,
            g = t.nodeType && Wt(t), v = jt.get(t, "fxshow");
        i.queue || (r = gt._queueHooks(t, "fx"), null == r.unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
            r.unqueued || a()
        }), r.unqueued++, u.always(function () {
            u.always(function () {
                r.unqueued--, gt.queue(t, "fx").length || r.empty.fire()
            })
        }));
        for (n in e)if (o = e[n], me.test(o)) {
            if (delete e[n], s = s || "toggle" === o, o === (g ? "hide" : "show")) {
                if ("show" !== o || !v || void 0 === v[n])continue;
                g = !0
            }
            p[n] = v && v[n] || gt.style(t, n)
        }
        if (l = !gt.isEmptyObject(e), l || !gt.isEmptyObject(p)) {
            d && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], c = v && v.display, null == c && (c = jt.get(t, "display")), h = gt.css(t, "display"), "none" === h && (c ? h = c : (m([t], !0), c = t.style.display || c, h = gt.css(t, "display"), m([t]))), ("inline" === h || "inline-block" === h && null != c) && "none" === gt.css(t, "float") && (l || (u.done(function () {
                f.display = c
            }), null == c && (h = f.display, c = "none" === h ? "" : h)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", u.always(function () {
                f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
            })), l = !1;
            for (n in p)l || (v ? "hidden" in v && (g = v.hidden) : v = jt.access(t, "fxshow", {display: c}), s && (v.hidden = !g), g && m([t], !0), u.done(function () {
                g || m([t]), jt.remove(t, "fxshow");
                for (n in p)gt.style(t, n, p[n])
            })), l = W(g ? v[n] : 0, n, u), n in v || (v[n] = l.start, g && (l.end = l.start, l.start = 0))
        }
    }

    function U(t, e) {
        var i, n, o, s, r;
        for (i in t)if (n = gt.camelCase(i), o = e[n], s = t[i], Array.isArray(s) && (o = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), r = gt.cssHooks[n], r && "expand" in r) {
            s = r.expand(s), delete t[n];
            for (i in s)i in t || (t[i] = s[i], e[i] = o)
        } else e[n] = o
    }

    function Z(t, e, i) {
        var n, o, s = 0, r = Z.prefilters.length, a = gt.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (o)return !1;
            for (var e = ge || q(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, s = 1 - n,
                     r = 0, l = c.tweens.length; r < l; r++)c.tweens[r].run(s);
            return a.notifyWith(t, [c, s, i]), s < 1 && l ? i : (l || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
        }, c = a.promise({
            elem: t,
            props: gt.extend({}, e),
            opts: gt.extend(!0, {specialEasing: {}, easing: gt.easing._default}, i),
            originalProperties: e,
            originalOptions: i,
            startTime: ge || q(),
            duration: i.duration,
            tweens: [],
            createTween: function (e, i) {
                var n = gt.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(n), n
            },
            stop: function (e) {
                var i = 0, n = e ? c.tweens.length : 0;
                if (o)return this;
                for (o = !0; i < n; i++)c.tweens[i].run(1);
                return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
            }
        }), h = c.props;
        for (U(h, c.opts.specialEasing); s < r; s++)if (n = Z.prefilters[s].call(c, t, h, c.opts))return gt.isFunction(n.stop) && (gt._queueHooks(c.elem, c.opts.queue).stop = gt.proxy(n.stop, n)), n;
        return gt.map(h, W, c), gt.isFunction(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), gt.fx.timer(gt.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    function V(t) {
        var e = t.match(Dt) || [];
        return e.join(" ")
    }

    function Y(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function X(t, e, i, n) {
        var o;
        if (Array.isArray(e)) gt.each(e, function (e, o) {
            i || Ae.test(t) ? n(t, o) : X(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
        }); else if (i || "object" !== gt.type(e)) n(t, e); else for (o in e)X(t + "[" + o + "]", e[o], i, n)
    }

    function G(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, o = 0, s = e.toLowerCase().match(Dt) || [];
            if (gt.isFunction(i))for (; n = s[o++];)"+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function Q(t, e, i, n) {
        function o(a) {
            var l;
            return s[a] = !0, gt.each(t[a] || [], function (t, a) {
                var c = a(e, i, n);
                return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
            }), l
        }

        var s = {}, r = t === ze;
        return o(e.dataTypes[0]) || !s["*"] && o("*")
    }

    function J(t, e) {
        var i, n, o = gt.ajaxSettings.flatOptions || {};
        for (i in e)void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && gt.extend(!0, t, n), t
    }

    function K(t, e, i) {
        for (var n, o, s, r, a = t.contents,
                 l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n)for (o in a)if (a[o] && a[o].test(n)) {
            l.unshift(o);
            break
        }
        if (l[0] in i) s = l[0]; else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    s = o;
                    break
                }
                r || (r = o)
            }
            s = s || r
        }
        if (s)return s !== l[0] && l.unshift(s), i[s]
    }

    function tt(t, e, i, n) {
        var o, s, r, a, l, c = {}, h = t.dataTypes.slice();
        if (h[1])for (r in t.converters)c[r.toLowerCase()] = t.converters[r];
        for (s = h.shift(); s;)if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = h.shift())if ("*" === s) s = l; else if ("*" !== l && l !== s) {
            if (r = c[l + " " + s] || c["* " + s], !r)for (o in c)if (a = o.split(" "), a[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                r === !0 ? r = c[o] : c[o] !== !0 && (s = a[0], h.unshift(a[1]));
                break
            }
            if (r !== !0)if (r && t["throws"]) e = r(e); else try {
                e = r(e)
            } catch (d) {
                return {state: "parsererror", error: r ? d : "No conversion from " + l + " to " + s}
            }
        }
        return {state: "success", data: e}
    }

    var et = [], it = t.document, nt = Object.getPrototypeOf, ot = et.slice, st = et.concat, rt = et.push,
        at = et.indexOf, lt = {}, ct = lt.toString, ht = lt.hasOwnProperty, dt = ht.toString, ut = dt.call(Object),
        pt = {}, ft = "3.2.1", gt = function (t, e) {
            return new gt.fn.init(t, e)
        }, vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, mt = /^-ms-/, wt = /-([a-z])/g, yt = function (t, e) {
            return e.toUpperCase()
        };
    gt.fn = gt.prototype = {
        jquery: ft, constructor: gt, length: 0, toArray: function () {
            return ot.call(this)
        }, get: function (t) {
            return null == t ? ot.call(this) : t < 0 ? this[t + this.length] : this[t]
        }, pushStack: function (t) {
            var e = gt.merge(this.constructor(), t);
            return e.prevObject = this, e
        }, each: function (t) {
            return gt.each(this, t)
        }, map: function (t) {
            return this.pushStack(gt.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        }, slice: function () {
            return this.pushStack(ot.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: rt, sort: et.sort, splice: et.splice
    }, gt.extend = gt.fn.extend = function () {
        var t, e, i, n, o, s, r = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || gt.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++)if (null != (t = arguments[a]))for (e in t)i = r[e], n = t[e], r !== n && (c && n && (gt.isPlainObject(n) || (o = Array.isArray(n))) ? (o ? (o = !1, s = i && Array.isArray(i) ? i : []) : s = i && gt.isPlainObject(i) ? i : {}, r[e] = gt.extend(c, s, n)) : void 0 !== n && (r[e] = n));
        return r
    }, gt.extend({
        expando: "jQuery" + (ft + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isFunction: function (t) {
            return "function" === gt.type(t)
        }, isWindow: function (t) {
            return null != t && t === t.window
        }, isNumeric: function (t) {
            var e = gt.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, isPlainObject: function (t) {
            var e, i;
            return !(!t || "[object Object]" !== ct.call(t)) && (!(e = nt(t)) || (i = ht.call(e, "constructor") && e.constructor, "function" == typeof i && dt.call(i) === ut))
        }, isEmptyObject: function (t) {
            var e;
            for (e in t)return !1;
            return !0
        }, type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ct.call(t)] || "object" : typeof t
        }, globalEval: function (t) {
            i(t)
        }, camelCase: function (t) {
            return t.replace(mt, "ms-").replace(wt, yt)
        }, each: function (t, e) {
            var i, o = 0;
            if (n(t))for (i = t.length; o < i && e.call(t[o], o, t[o]) !== !1; o++); else for (o in t)if (e.call(t[o], o, t[o]) === !1)break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(vt, "")
        }, makeArray: function (t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? gt.merge(i, "string" == typeof t ? [t] : t) : rt.call(i, t)), i
        }, inArray: function (t, e, i) {
            return null == e ? -1 : at.call(e, t, i)
        }, merge: function (t, e) {
            for (var i = +e.length, n = 0, o = t.length; n < i; n++)t[o++] = e[n];
            return t.length = o, t
        }, grep: function (t, e, i) {
            for (var n, o = [], s = 0, r = t.length, a = !i; s < r; s++)n = !e(t[s], s), n !== a && o.push(t[s]);
            return o
        }, map: function (t, e, i) {
            var o, s, r = 0, a = [];
            if (n(t))for (o = t.length; r < o; r++)s = e(t[r], r, i), null != s && a.push(s); else for (r in t)s = e(t[r], r, i), null != s && a.push(s);
            return st.apply([], a)
        }, guid: 1, proxy: function (t, e) {
            var i, n, o;
            if ("string" == typeof e && (i = t[e], e = t, t = i), gt.isFunction(t))return n = ot.call(arguments, 2), o = function () {
                return t.apply(e || this, n.concat(ot.call(arguments)))
            }, o.guid = t.guid = t.guid || gt.guid++, o
        }, now: Date.now, support: pt
    }), "function" == typeof Symbol && (gt.fn[Symbol.iterator] = et[Symbol.iterator]), gt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        lt["[object " + e + "]"] = e.toLowerCase()
    });
    var xt = function (t) {
        function e(t, e, i, n) {
            var o, s, r, a, l, c, h, u = e && e.ownerDocument, f = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f)return i;
            if (!n && ((e ? e.ownerDocument || e : q) !== B && O(e), e = e || B, H)) {
                if (11 !== f && (l = mt.exec(t)))if (o = l[1]) {
                    if (9 === f) {
                        if (!(r = e.getElementById(o)))return i;
                        if (r.id === o)return i.push(r), i
                    } else if (u && (r = u.getElementById(o)) && _(e, r) && r.id === o)return i.push(r), i
                } else {
                    if (l[2])return J.apply(i, e.getElementsByTagName(t)), i;
                    if ((o = l[3]) && b.getElementsByClassName && e.getElementsByClassName)return J.apply(i, e.getElementsByClassName(o)), i
                }
                if (b.qsa && !Z[t + " "] && (!j || !j.test(t))) {
                    if (1 !== f) u = e, h = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(kt, bt) : e.setAttribute("id", a = z), c = S(t), s = c.length; s--;)c[s] = "#" + a + " " + p(c[s]);
                        h = c.join(","), u = wt.test(t) && d(e.parentNode) || e
                    }
                    if (h)try {
                        return J.apply(i, u.querySelectorAll(h)), i
                    } catch (g) {
                    } finally {
                        a === z && e.removeAttribute("id")
                    }
                }
            }
            return A(t.replace(at, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > C.cacheLength && delete t[e.shift()], t[i + " "] = n
            }

            var e = [];
            return t
        }

        function n(t) {
            return t[z] = !0, t
        }

        function o(t) {
            var e = B.createElement("fieldset");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function s(t, e) {
            for (var i = t.split("|"), n = i.length; n--;)C.attrHandle[i[n]] = e
        }

        function r(t, e) {
            var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n)return n;
            if (i)for (; i = i.nextSibling;)if (i === e)return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function c(t) {
            return function (e) {
                return "form" in e ? e.parentNode && e.disabled === !1 ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && $t(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function h(t) {
            return n(function (e) {
                return e = +e, n(function (i, n) {
                    for (var o, s = t([], i.length, e), r = s.length; r--;)i[o = s[r]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function d(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function u() {
        }

        function p(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++)n += t[e].value;
            return n
        }

        function f(t, e, i) {
            var n = e.dir, o = e.next, s = o || n, r = i && "parentNode" === s, a = W++;
            return e.first ? function (e, i, o) {
                for (; e = e[n];)if (1 === e.nodeType || r)return t(e, i, o);
                return !1
            } : function (e, i, l) {
                var c, h, d, u = [F, a];
                if (l) {
                    for (; e = e[n];)if ((1 === e.nodeType || r) && t(e, i, l))return !0
                } else for (; e = e[n];)if (1 === e.nodeType || r)if (d = e[z] || (e[z] = {}), h = d[e.uniqueID] || (d[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[n] || e; else {
                    if ((c = h[s]) && c[0] === F && c[1] === a)return u[2] = c[2];
                    if (h[s] = u, u[2] = t(e, i, l))return !0
                }
                return !1
            }
        }

        function g(t) {
            return t.length > 1 ? function (e, i, n) {
                for (var o = t.length; o--;)if (!t[o](e, i, n))return !1;
                return !0
            } : t[0]
        }

        function v(t, i, n) {
            for (var o = 0, s = i.length; o < s; o++)e(t, i[o], n);
            return n
        }

        function m(t, e, i, n, o) {
            for (var s, r = [], a = 0, l = t.length,
                     c = null != e; a < l; a++)(s = t[a]) && (i && !i(s, n, o) || (r.push(s), c && e.push(a)));
            return r
        }

        function w(t, e, i, o, s, r) {
            return o && !o[z] && (o = w(o)), s && !s[z] && (s = w(s, r)), n(function (n, r, a, l) {
                var c, h, d, u = [], p = [], f = r.length, g = n || v(e || "*", a.nodeType ? [a] : a, []),
                    w = !t || !n && e ? g : m(g, u, t, a, l), y = i ? s || (n ? t : f || o) ? [] : r : w;
                if (i && i(w, y, a, l), o)for (c = m(y, p), o(c, [], a, l), h = c.length; h--;)(d = c[h]) && (y[p[h]] = !(w[p[h]] = d));
                if (n) {
                    if (s || t) {
                        if (s) {
                            for (c = [], h = y.length; h--;)(d = y[h]) && c.push(w[h] = d);
                            s(null, y = [], c, l)
                        }
                        for (h = y.length; h--;)(d = y[h]) && (c = s ? tt(n, d) : u[h]) > -1 && (n[c] = !(r[c] = d))
                    }
                } else y = m(y === r ? y.splice(f, y.length) : y), s ? s(null, r, y, l) : J.apply(r, y)
            })
        }

        function y(t) {
            for (var e, i, n, o = t.length, s = C.relative[t[0].type], r = s || C.relative[" "], a = s ? 1 : 0,
                     l = f(function (t) {
                         return t === e
                     }, r, !0), c = f(function (t) {
                    return tt(e, t) > -1
                }, r, !0), h = [function (t, i, n) {
                    var o = !s && (n || i !== M) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                    return e = null, o
                }]; a < o; a++)if (i = C.relative[t[a].type]) h = [f(g(h), i)]; else {
                if (i = C.filter[t[a].type].apply(null, t[a].matches), i[z]) {
                    for (n = ++a; n < o && !C.relative[t[n].type]; n++);
                    return w(a > 1 && g(h), a > 1 && p(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(at, "$1"), i, a < n && y(t.slice(a, n)), n < o && y(t = t.slice(n)), n < o && p(t))
                }
                h.push(i)
            }
            return g(h)
        }

        function x(t, i) {
            var o = i.length > 0, s = t.length > 0, r = function (n, r, a, l, c) {
                var h, d, u, p = 0, f = "0", g = n && [], v = [], w = M, y = n || s && C.find.TAG("*", c),
                    x = F += null == w ? 1 : Math.random() || .1, k = y.length;
                for (c && (M = r === B || r || c); f !== k && null != (h = y[f]); f++) {
                    if (s && h) {
                        for (d = 0, r || h.ownerDocument === B || (O(h), a = !H); u = t[d++];)if (u(h, r || B, a)) {
                            l.push(h);
                            break
                        }
                        c && (F = x)
                    }
                    o && ((h = !u && h) && p--, n && g.push(h))
                }
                if (p += f, o && f !== p) {
                    for (d = 0; u = i[d++];)u(g, v, r, a);
                    if (n) {
                        if (p > 0)for (; f--;)g[f] || v[f] || (v[f] = G.call(l));
                        v = m(v)
                    }
                    J.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                }
                return c && (F = x, M = w), g
            };
            return o ? n(r) : r
        }

        var k, b, C, $, T, S, L, A, M, E, D, O, B, N, H, j, P, I, _, z = "sizzle" + 1 * new Date, q = t.document, F = 0,
            W = 0, R = i(), U = i(), Z = i(), V = function (t, e) {
                return t === e && (D = !0), 0
            }, Y = {}.hasOwnProperty, X = [], G = X.pop, Q = X.push, J = X.push, K = X.slice, tt = function (t, e) {
                for (var i = 0, n = t.length; i < n; i++)if (t[i] === e)return i;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]", nt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ot = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
            st = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            rt = new RegExp(it + "+", "g"), at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            lt = new RegExp("^" + it + "*," + it + "*"), ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"), dt = new RegExp(st),
            ut = new RegExp("^" + nt + "$"), pt = {
                ID: new RegExp("^#(" + nt + ")"),
                CLASS: new RegExp("^\\.(" + nt + ")"),
                TAG: new RegExp("^(" + nt + "|[*])"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            }, ft = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/,
            mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, wt = /[+~]/,
            yt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"), xt = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, kt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, bt = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, Ct = function () {
                O()
            }, $t = f(function (t) {
                return t.disabled === !0 && ("form" in t || "label" in t)
            }, {dir: "parentNode", next: "legend"});
        try {
            J.apply(X = K.call(q.childNodes), q.childNodes), X[q.childNodes.length].nodeType
        } catch (Tt) {
            J = {
                apply: X.length ? function (t, e) {
                    Q.apply(t, K.call(e))
                } : function (t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        b = e.support = {}, T = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, O = e.setDocument = function (t) {
            var e, i, n = t ? t.ownerDocument || t : q;
            return n !== B && 9 === n.nodeType && n.documentElement ? (B = n, N = B.documentElement, H = !T(B), q !== B && (i = B.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Ct, !1) : i.attachEvent && i.attachEvent("onunload", Ct)), b.attributes = o(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), b.getElementsByTagName = o(function (t) {
                return t.appendChild(B.createComment("")), !t.getElementsByTagName("*").length
            }), b.getElementsByClassName = vt.test(B.getElementsByClassName), b.getById = o(function (t) {
                return N.appendChild(t).id = z, !B.getElementsByName || !B.getElementsByName(z).length
            }), b.getById ? (C.filter.ID = function (t) {
                var e = t.replace(yt, xt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }, C.find.ID = function (t, e) {
                if ("undefined" != typeof e.getElementById && H) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }) : (C.filter.ID = function (t) {
                var e = t.replace(yt, xt);
                return function (t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }, C.find.ID = function (t, e) {
                if ("undefined" != typeof e.getElementById && H) {
                    var i, n, o, s = e.getElementById(t);
                    if (s) {
                        if (i = s.getAttributeNode("id"), i && i.value === t)return [s];
                        for (o = e.getElementsByName(t), n = 0; s = o[n++];)if (i = s.getAttributeNode("id"), i && i.value === t)return [s]
                    }
                    return []
                }
            }), C.find.TAG = b.getElementsByTagName ? function (t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var i, n = [], o = 0, s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = s[o++];)1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }, C.find.CLASS = b.getElementsByClassName && function (t, e) {
                    if ("undefined" != typeof e.getElementsByClassName && H)return e.getElementsByClassName(t)
                }, P = [], j = [], (b.qsa = vt.test(B.querySelectorAll)) && (o(function (t) {
                N.appendChild(t).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || j.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + z + "-]").length || j.push("~="), t.querySelectorAll(":checked").length || j.push(":checked"), t.querySelectorAll("a#" + z + "+*").length || j.push(".#.+[+~]")
            }), o(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = B.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && j.push("name" + it + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && j.push(":enabled", ":disabled"), N.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && j.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), j.push(",.*:")
            })), (b.matchesSelector = vt.test(I = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && o(function (t) {
                b.disconnectedMatch = I.call(t, "*"), I.call(t, "[s!='']:x"), P.push("!=", st)
            }), j = j.length && new RegExp(j.join("|")), P = P.length && new RegExp(P.join("|")), e = vt.test(N.compareDocumentPosition), _ = e || vt.test(N.contains) ? function (t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function (t, e) {
                if (e)for (; e = e.parentNode;)if (e === t)return !0;
                return !1
            }, V = e ? function (t, e) {
                if (t === e)return D = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === B || t.ownerDocument === q && _(q, t) ? -1 : e === B || e.ownerDocument === q && _(q, e) ? 1 : E ? tt(E, t) - tt(E, e) : 0 : 4 & i ? -1 : 1)
            } : function (t, e) {
                if (t === e)return D = !0, 0;
                var i, n = 0, o = t.parentNode, s = e.parentNode, a = [t], l = [e];
                if (!o || !s)return t === B ? -1 : e === B ? 1 : o ? -1 : s ? 1 : E ? tt(E, t) - tt(E, e) : 0;
                if (o === s)return r(t, e);
                for (i = t; i = i.parentNode;)a.unshift(i);
                for (i = e; i = i.parentNode;)l.unshift(i);
                for (; a[n] === l[n];)n++;
                return n ? r(a[n], l[n]) : a[n] === q ? -1 : l[n] === q ? 1 : 0
            }, B) : B
        }, e.matches = function (t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function (t, i) {
            if ((t.ownerDocument || t) !== B && O(t), i = i.replace(ht, "='$1']"), b.matchesSelector && H && !Z[i + " "] && (!P || !P.test(i)) && (!j || !j.test(i)))try {
                var n = I.call(t, i);
                if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType)return n
            } catch (o) {
            }
            return e(i, B, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== B && O(t), _(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== B && O(t);
            var i = C.attrHandle[e.toLowerCase()],
                n = i && Y.call(C.attrHandle, e.toLowerCase()) ? i(t, e, !H) : void 0;
            return void 0 !== n ? n : b.attributes || !H ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.escape = function (t) {
            return (t + "").replace(kt, bt)
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, i = [], n = 0, o = 0;
            if (D = !b.detectDuplicates, E = !b.sortStable && t.slice(0), t.sort(V), D) {
                for (; e = t[o++];)e === t[o] && (n = i.push(o));
                for (; n--;)t.splice(i[n], 1)
            }
            return E = null, t
        }, $ = e.getText = function (t) {
            var e, i = "", n = 0, o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent)return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)i += $(t)
                } else if (3 === o || 4 === o)return t.nodeValue
            } else for (; e = t[n++];)i += $(e);
            return i
        }, C = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: pt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(yt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(yt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, i = !t[6] && t[2];
                    return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && dt.test(i) && (e = S(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(yt, xt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = R[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && R(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                }, ATTR: function (t, i, n) {
                    return function (o) {
                        var s = e.attr(o, t);
                        return null == s ? "!=" === i : !i || (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(rt, " ") + " ").indexOf(n) > -1 : "|=" === i && (s === n || s.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (t, e, i, n, o) {
                    var s = "nth" !== t.slice(0, 3), r = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === n && 0 === o ? function (t) {
                        return !!t.parentNode
                    } : function (e, i, l) {
                        var c, h, d, u, p, f, g = s !== r ? "nextSibling" : "previousSibling", v = e.parentNode,
                            m = a && e.nodeName.toLowerCase(), w = !l && !a, y = !1;
                        if (v) {
                            if (s) {
                                for (; g;) {
                                    for (u = e; u = u[g];)if (a ? u.nodeName.toLowerCase() === m : 1 === u.nodeType)return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? v.firstChild : v.lastChild], r && w) {
                                for (u = v, d = u[z] || (u[z] = {}), h = d[u.uniqueID] || (d[u.uniqueID] = {}), c = h[t] || [], p = c[0] === F && c[1], y = p && c[2], u = p && v.childNodes[p]; u = ++p && u && u[g] || (y = p = 0) || f.pop();)if (1 === u.nodeType && ++y && u === e) {
                                    h[t] = [F, p, y];
                                    break
                                }
                            } else if (w && (u = e, d = u[z] || (u[z] = {}), h = d[u.uniqueID] || (d[u.uniqueID] = {}), c = h[t] || [], p = c[0] === F && c[1], y = p), y === !1)for (; (u = ++p && u && u[g] || (y = p = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== m : 1 !== u.nodeType) || !++y || (w && (d = u[z] || (u[z] = {}), h = d[u.uniqueID] || (d[u.uniqueID] = {}), h[t] = [F, y]), u !== e)););
                            return y -= o, y === n || y % n === 0 && y / n >= 0
                        }
                    }
                }, PSEUDO: function (t, i) {
                    var o, s = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return s[z] ? s(i) : s.length > 1 ? (o = [t, t, "", i], C.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                        for (var n, o = s(t, i), r = o.length; r--;)n = tt(t, o[r]), t[n] = !(e[n] = o[r])
                    }) : function (t) {
                        return s(t, 0, o)
                    }) : s
                }
            },
            pseudos: {
                not: n(function (t) {
                    var e = [], i = [], o = L(t.replace(at, "$1"));
                    return o[z] ? n(function (t, e, i, n) {
                        for (var s, r = o(t, null, n, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
                    }) : function (t, n, s) {
                        return e[0] = t, o(e, null, s, i), e[0] = null, !i.pop()
                    }
                }), has: n(function (t) {
                    return function (i) {
                        return e(t, i).length > 0
                    }
                }), contains: n(function (t) {
                    return t = t.replace(yt, xt), function (e) {
                        return (e.textContent || e.innerText || $(e)).indexOf(t) > -1
                    }
                }), lang: n(function (t) {
                    return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(yt, xt).toLowerCase(), function (e) {
                        var i;
                        do if (i = H ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    }
                }), target: function (e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                }, root: function (t) {
                    return t === N
                }, focus: function (t) {
                    return t === B.activeElement && (!B.hasFocus || B.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: c(!1), disabled: c(!0), checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                    return !0
                }, parent: function (t) {
                    return !C.pseudos.empty(t)
                }, header: function (t) {
                    return gt.test(t.nodeName)
                }, input: function (t) {
                    return ft.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: h(function () {
                    return [0]
                }), last: h(function (t, e) {
                    return [e - 1]
                }), eq: h(function (t, e, i) {
                    return [i < 0 ? i + e : i]
                }), even: h(function (t, e) {
                    for (var i = 0; i < e; i += 2)t.push(i);
                    return t
                }), odd: h(function (t, e) {
                    for (var i = 1; i < e; i += 2)t.push(i);
                    return t
                }), lt: h(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; --n >= 0;)t.push(n);
                    return t
                }), gt: h(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e;)t.push(n);
                    return t
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (k in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[k] = a(k);
        for (k in{submit: !0, reset: !0})C.pseudos[k] = l(k);
        return u.prototype = C.filters = C.pseudos, C.setFilters = new u, S = e.tokenize = function (t, i) {
            var n, o, s, r, a, l, c, h = U[t + " "];
            if (h)return i ? 0 : h.slice(0);
            for (a = t, l = [], c = C.preFilter; a;) {
                n && !(o = lt.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = ct.exec(a)) && (n = o.shift(), s.push({
                    value: n,
                    type: o[0].replace(at, " ")
                }), a = a.slice(n.length));
                for (r in C.filter)!(o = pt[r].exec(a)) || c[r] && !(o = c[r](o)) || (n = o.shift(), s.push({
                    value: n,
                    type: r,
                    matches: o
                }), a = a.slice(n.length));
                if (!n)break
            }
            return i ? a.length : a ? e.error(t) : U(t, l).slice(0)
        }, L = e.compile = function (t, e) {
            var i, n = [], o = [], s = Z[t + " "];
            if (!s) {
                for (e || (e = S(t)), i = e.length; i--;)s = y(e[i]), s[z] ? n.push(s) : o.push(s);
                s = Z(t, x(o, n)), s.selector = t
            }
            return s
        }, A = e.select = function (t, e, i, n) {
            var o, s, r, a, l, c = "function" == typeof t && t, h = !n && S(t = c.selector || t);
            if (i = i || [], 1 === h.length) {
                if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && 9 === e.nodeType && H && C.relative[s[1].type]) {
                    if (e = (C.find.ID(r.matches[0].replace(yt, xt), e) || [])[0], !e)return i;
                    c && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (o = pt.needsContext.test(t) ? 0 : s.length; o-- && (r = s[o], !C.relative[a = r.type]);)if ((l = C.find[a]) && (n = l(r.matches[0].replace(yt, xt), wt.test(s[0].type) && d(e.parentNode) || e))) {
                    if (s.splice(o, 1), t = n.length && p(s), !t)return J.apply(i, n), i;
                    break
                }
            }
            return (c || L(t, h))(n, e, !H, i, !e || wt.test(t) && d(e.parentNode) || e), i
        }, b.sortStable = z.split("").sort(V).join("") === z, b.detectDuplicates = !!D, O(), b.sortDetached = o(function (t) {
            return 1 & t.compareDocumentPosition(B.createElement("fieldset"))
        }), o(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function (t, e, i) {
            if (!i)return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), b.attributes && o(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || s("value", function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase())return t.defaultValue
        }), o(function (t) {
            return null == t.getAttribute("disabled")
        }) || s(et, function (t, e, i) {
            var n;
            if (!i)return t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    gt.find = xt, gt.expr = xt.selectors, gt.expr[":"] = gt.expr.pseudos, gt.uniqueSort = gt.unique = xt.uniqueSort, gt.text = xt.getText, gt.isXMLDoc = xt.isXML, gt.contains = xt.contains, gt.escapeSelector = xt.escape;
    var kt = function (t, e, i) {
            for (var n = [], o = void 0 !== i; (t = t[e]) && 9 !== t.nodeType;)if (1 === t.nodeType) {
                if (o && gt(t).is(i))break;
                n.push(t)
            }
            return n
        }, bt = function (t, e) {
            for (var i = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && i.push(t);
            return i
        }, Ct = gt.expr.match.needsContext, $t = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Tt = /^.[^:#\[\.,]*$/;
    gt.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? gt.find.matchesSelector(n, t) ? [n] : [] : gt.find.matches(t, gt.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, gt.fn.extend({
        find: function (t) {
            var e, i, n = this.length, o = this;
            if ("string" != typeof t)return this.pushStack(gt(t).filter(function () {
                for (e = 0; e < n; e++)if (gt.contains(o[e], this))return !0
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++)gt.find(t, o[e], i);
            return n > 1 ? gt.uniqueSort(i) : i
        }, filter: function (t) {
            return this.pushStack(s(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(s(this, t || [], !0))
        }, is: function (t) {
            return !!s(this, "string" == typeof t && Ct.test(t) ? gt(t) : t || [], !1).length
        }
    });
    var St, Lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, At = gt.fn.init = function (t, e, i) {
        var n, o;
        if (!t)return this;
        if (i = i || St, "string" == typeof t) {
            if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Lt.exec(t), !n || !n[1] && e)return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof gt ? e[0] : e, gt.merge(this, gt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : it, !0)), $t.test(n[1]) && gt.isPlainObject(e))for (n in e)gt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return o = it.getElementById(n[2]), o && (this[0] = o, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : gt.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(gt) : gt.makeArray(t, this)
    };
    At.prototype = gt.fn, St = gt(it);
    var Mt = /^(?:parents|prev(?:Until|All))/, Et = {children: !0, contents: !0, next: !0, prev: !0};
    gt.fn.extend({
        has: function (t) {
            var e = gt(t, this), i = e.length;
            return this.filter(function () {
                for (var t = 0; t < i; t++)if (gt.contains(this, e[t]))return !0
            })
        }, closest: function (t, e) {
            var i, n = 0, o = this.length, s = [], r = "string" != typeof t && gt(t);
            if (!Ct.test(t))for (; n < o; n++)for (i = this[n]; i && i !== e; i = i.parentNode)if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && gt.find.matchesSelector(i, t))) {
                s.push(i);
                break
            }
            return this.pushStack(s.length > 1 ? gt.uniqueSort(s) : s)
        }, index: function (t) {
            return t ? "string" == typeof t ? at.call(gt(t), this[0]) : at.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(gt.uniqueSort(gt.merge(this.get(), gt(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), gt.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return kt(t, "parentNode")
        }, parentsUntil: function (t, e, i) {
            return kt(t, "parentNode", i)
        }, next: function (t) {
            return r(t, "nextSibling")
        }, prev: function (t) {
            return r(t, "previousSibling")
        }, nextAll: function (t) {
            return kt(t, "nextSibling")
        }, prevAll: function (t) {
            return kt(t, "previousSibling")
        }, nextUntil: function (t, e, i) {
            return kt(t, "nextSibling", i)
        }, prevUntil: function (t, e, i) {
            return kt(t, "previousSibling", i)
        }, siblings: function (t) {
            return bt((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return bt(t.firstChild)
        }, contents: function (t) {
            return o(t, "iframe") ? t.contentDocument : (o(t, "template") && (t = t.content || t), gt.merge([], t.childNodes))
        }
    }, function (t, e) {
        gt.fn[t] = function (i, n) {
            var o = gt.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = gt.filter(n, o)), this.length > 1 && (Et[t] || gt.uniqueSort(o), Mt.test(t) && o.reverse()), this.pushStack(o)
        }
    });
    var Dt = /[^\x20\t\r\n\f]+/g;
    gt.Callbacks = function (t) {
        t = "string" == typeof t ? a(t) : gt.extend({}, t);
        var e, i, n, o, s = [], r = [], l = -1, c = function () {
            for (o = o || t.once, n = e = !0; r.length; l = -1)for (i = r.shift(); ++l < s.length;)s[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && (l = s.length, i = !1);
            t.memory || (i = !1), e = !1, o && (s = i ? [] : "")
        }, h = {
            add: function () {
                return s && (i && !e && (l = s.length - 1, r.push(i)), function n(e) {
                    gt.each(e, function (e, i) {
                        gt.isFunction(i) ? t.unique && h.has(i) || s.push(i) : i && i.length && "string" !== gt.type(i) && n(i)
                    })
                }(arguments), i && !e && c()), this
            }, remove: function () {
                return gt.each(arguments, function (t, e) {
                    for (var i; (i = gt.inArray(e, s, i)) > -1;)s.splice(i, 1), i <= l && l--
                }), this
            }, has: function (t) {
                return t ? gt.inArray(t, s) > -1 : s.length > 0
            }, empty: function () {
                return s && (s = []), this
            }, disable: function () {
                return o = r = [], s = i = "", this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return o = r = [], i || e || (s = i = ""), this
            }, locked: function () {
                return !!o
            }, fireWith: function (t, i) {
                return o || (i = i || [], i = [t, i.slice ? i.slice() : i], r.push(i), e || c()), this
            }, fire: function () {
                return h.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return h
    }, gt.extend({
        Deferred: function (e) {
            var i = [["notify", "progress", gt.Callbacks("memory"), gt.Callbacks("memory"), 2], ["resolve", "done", gt.Callbacks("once memory"), gt.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", gt.Callbacks("once memory"), gt.Callbacks("once memory"), 1, "rejected"]],
                n = "pending", o = {
                    state: function () {
                        return n
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, "catch": function (t) {
                        return o.then(null, t)
                    }, pipe: function () {
                        var t = arguments;
                        return gt.Deferred(function (e) {
                            gt.each(i, function (i, n) {
                                var o = gt.isFunction(t[n[4]]) && t[n[4]];
                                s[n[1]](function () {
                                    var t = o && o.apply(this, arguments);
                                    t && gt.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, o ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    }, then: function (e, n, o) {
                        function s(e, i, n, o) {
                            return function () {
                                var a = this, h = arguments, d = function () {
                                    var t, d;
                                    if (!(e < r)) {
                                        if (t = n.apply(a, h), t === i.promise())throw new TypeError("Thenable self-resolution");
                                        d = t && ("object" == typeof t || "function" == typeof t) && t.then, gt.isFunction(d) ? o ? d.call(t, s(r, i, l, o), s(r, i, c, o)) : (r++, d.call(t, s(r, i, l, o), s(r, i, c, o), s(r, i, l, i.notifyWith))) : (n !== l && (a = void 0, h = [t]), (o || i.resolveWith)(a, h))
                                    }
                                }, u = o ? d : function () {
                                    try {
                                        d()
                                    } catch (t) {
                                        gt.Deferred.exceptionHook && gt.Deferred.exceptionHook(t, u.stackTrace), e + 1 >= r && (n !== c && (a = void 0, h = [t]), i.rejectWith(a, h))
                                    }
                                };
                                e ? u() : (gt.Deferred.getStackHook && (u.stackTrace = gt.Deferred.getStackHook()), t.setTimeout(u))
                            }
                        }

                        var r = 0;
                        return gt.Deferred(function (t) {
                            i[0][3].add(s(0, t, gt.isFunction(o) ? o : l, t.notifyWith)), i[1][3].add(s(0, t, gt.isFunction(e) ? e : l)), i[2][3].add(s(0, t, gt.isFunction(n) ? n : c))
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? gt.extend(t, o) : o
                    }
                }, s = {};
            return gt.each(i, function (t, e) {
                var r = e[2], a = e[5];
                o[e[1]] = r.add, a && r.add(function () {
                    n = a
                }, i[3 - t][2].disable, i[0][2].lock), r.add(e[3].fire), s[e[0]] = function () {
                    return s[e[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[e[0] + "With"] = r.fireWith
            }), o.promise(s), e && e.call(s, s), s
        }, when: function (t) {
            var e = arguments.length, i = e, n = Array(i), o = ot.call(arguments), s = gt.Deferred(), r = function (t) {
                return function (i) {
                    n[t] = this, o[t] = arguments.length > 1 ? ot.call(arguments) : i, --e || s.resolveWith(n, o)
                }
            };
            if (e <= 1 && (h(t, s.done(r(i)).resolve, s.reject, !e), "pending" === s.state() || gt.isFunction(o[i] && o[i].then)))return s.then();
            for (; i--;)h(o[i], r(i), s.reject);
            return s.promise()
        }
    });
    var Ot = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    gt.Deferred.exceptionHook = function (e, i) {
        t.console && t.console.warn && e && Ot.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    }, gt.readyException = function (e) {
        t.setTimeout(function () {
            throw e
        })
    };
    var Bt = gt.Deferred();
    gt.fn.ready = function (t) {
        return Bt.then(t)["catch"](function (t) {
            gt.readyException(t)
        }), this
    }, gt.extend({
        isReady: !1, readyWait: 1, ready: function (t) {
            (t === !0 ? --gt.readyWait : gt.isReady) || (gt.isReady = !0, t !== !0 && --gt.readyWait > 0 || Bt.resolveWith(it, [gt]))
        }
    }), gt.ready.then = Bt.then, "complete" === it.readyState || "loading" !== it.readyState && !it.documentElement.doScroll ? t.setTimeout(gt.ready) : (it.addEventListener("DOMContentLoaded", d), t.addEventListener("load", d));
    var Nt = function (t, e, i, n, o, s, r) {
        var a = 0, l = t.length, c = null == i;
        if ("object" === gt.type(i)) {
            o = !0;
            for (a in i)Nt(t, e, a, i[a], !0, s, r)
        } else if (void 0 !== n && (o = !0, gt.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function (t, e, i) {
                return c.call(gt(t), i)
            })), e))for (; a < l; a++)e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
        return o ? t : c ? e.call(t) : l ? e(t[0], i) : s
    }, Ht = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
    u.uid = 1, u.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, Ht(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        }, set: function (t, e, i) {
            var n, o = this.cache(t);
            if ("string" == typeof e) o[gt.camelCase(e)] = i; else for (n in e)o[gt.camelCase(n)] = e[n];
            return o
        }, get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][gt.camelCase(e)]
        }, access: function (t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        }, remove: function (t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    Array.isArray(e) ? e = e.map(gt.camelCase) : (e = gt.camelCase(e), e = e in n ? [e] : e.match(Dt) || []), i = e.length;
                    for (; i--;)delete n[e[i]]
                }
                (void 0 === e || gt.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        }, hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !gt.isEmptyObject(e)
        }
    };
    var jt = new u, Pt = new u, It = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, _t = /[A-Z]/g;
    gt.extend({
        hasData: function (t) {
            return Pt.hasData(t) || jt.hasData(t)
        }, data: function (t, e, i) {
            return Pt.access(t, e, i)
        }, removeData: function (t, e) {
            Pt.remove(t, e)
        }, _data: function (t, e, i) {
            return jt.access(t, e, i)
        }, _removeData: function (t, e) {
            jt.remove(t, e)
        }
    }), gt.fn.extend({
        data: function (t, e) {
            var i, n, o, s = this[0], r = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (o = Pt.get(s), 1 === s.nodeType && !jt.get(s, "hasDataAttrs"))) {
                    for (i = r.length; i--;)r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = gt.camelCase(n.slice(5)), f(s, n, o[n])));
                    jt.set(s, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function () {
                Pt.set(this, t)
            }) : Nt(this, function (e) {
                var i;
                if (s && void 0 === e) {
                    if (i = Pt.get(s, t), void 0 !== i)return i;
                    if (i = f(s, t), void 0 !== i)return i
                } else this.each(function () {
                    Pt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        }, removeData: function (t) {
            return this.each(function () {
                Pt.remove(this, t)
            })
        }
    }), gt.extend({
        queue: function (t, e, i) {
            var n;
            if (t)return e = (e || "fx") + "queue", n = jt.get(t, e), i && (!n || Array.isArray(i) ? n = jt.access(t, e, gt.makeArray(i)) : n.push(i)), n || []
        }, dequeue: function (t, e) {
            e = e || "fx";
            var i = gt.queue(t, e), n = i.length, o = i.shift(), s = gt._queueHooks(t, e), r = function () {
                gt.dequeue(t, e)
            };
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete s.stop, o.call(t, r, s)), !n && s && s.empty.fire()
        }, _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return jt.get(t, i) || jt.access(t, i, {
                    empty: gt.Callbacks("once memory").add(function () {
                        jt.remove(t, [e + "queue", i])
                    })
                })
        }
    }), gt.fn.extend({
        queue: function (t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? gt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var i = gt.queue(this, t, e);
                gt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && gt.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                gt.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var i, n = 1, o = gt.Deferred(), s = this, r = this.length, a = function () {
                --n || o.resolveWith(s, [s])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)i = jt.get(s[r], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var zt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, qt = new RegExp("^(?:([+-])=|)(" + zt + ")([a-z%]*)$", "i"),
        Ft = ["Top", "Right", "Bottom", "Left"], Wt = function (t, e) {
            return t = e || t, "none" === t.style.display || "" === t.style.display && gt.contains(t.ownerDocument, t) && "none" === gt.css(t, "display")
        }, Rt = function (t, e, i, n) {
            var o, s, r = {};
            for (s in e)r[s] = t.style[s], t.style[s] = e[s];
            o = i.apply(t, n || []);
            for (s in e)t.style[s] = r[s];
            return o
        }, Ut = {};
    gt.fn.extend({
        show: function () {
            return m(this, !0)
        }, hide: function () {
            return m(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Wt(this) ? gt(this).show() : gt(this).hide()
            })
        }
    });
    var Zt = /^(?:checkbox|radio)$/i, Vt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Yt = /^$|\/(?:java|ecma)script/i, Xt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Xt.optgroup = Xt.option, Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead, Xt.th = Xt.td;
    var Gt = /<|&#?\w+;/;
    !function () {
        var t = it.createDocumentFragment(), e = t.appendChild(it.createElement("div")), i = it.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), pt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", pt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Qt = it.documentElement, Jt = /^key/, Kt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        te = /^([^.]*)(?:\.(.+)|)/;
    gt.event = {
        global: {}, add: function (t, e, i, n, o) {
            var s, r, a, l, c, h, d, u, p, f, g, v = jt.get(t);
            if (v)for (i.handler && (s = i, i = s.handler, o = s.selector), o && gt.find.matchesSelector(Qt, o), i.guid || (i.guid = gt.guid++), (l = v.events) || (l = v.events = {}), (r = v.handle) || (r = v.handle = function (e) {
                return "undefined" != typeof gt && gt.event.triggered !== e.type ? gt.event.dispatch.apply(t, arguments) : void 0
            }), e = (e || "").match(Dt) || [""], c = e.length; c--;)a = te.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p && (d = gt.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = gt.event.special[p] || {}, h = gt.extend({
                type: p,
                origType: g,
                data: n,
                handler: i,
                guid: i.guid,
                selector: o,
                needsContext: o && gt.expr.match.needsContext.test(o),
                namespace: f.join(".")
            }, s), (u = l[p]) || (u = l[p] = [], u.delegateCount = 0, d.setup && d.setup.call(t, n, f, r) !== !1 || t.addEventListener && t.addEventListener(p, r)), d.add && (d.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), o ? u.splice(u.delegateCount++, 0, h) : u.push(h), gt.event.global[p] = !0)
        }, remove: function (t, e, i, n, o) {
            var s, r, a, l, c, h, d, u, p, f, g, v = jt.hasData(t) && jt.get(t);
            if (v && (l = v.events)) {
                for (e = (e || "").match(Dt) || [""], c = e.length; c--;)if (a = te.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                    for (d = gt.event.special[p] || {}, p = (n ? d.delegateType : d.bindType) || p, u = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = u.length; s--;)h = u[s], !o && g !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (u.splice(s, 1), h.selector && u.delegateCount--, d.remove && d.remove.call(t, h));
                    r && !u.length && (d.teardown && d.teardown.call(t, f, v.handle) !== !1 || gt.removeEvent(t, p, v.handle), delete l[p])
                } else for (p in l)gt.event.remove(t, p + e[c], i, n, !0);
                gt.isEmptyObject(l) && jt.remove(t, "handle events")
            }
        }, dispatch: function (t) {
            var e, i, n, o, s, r, a = gt.event.fix(t), l = new Array(arguments.length),
                c = (jt.get(this, "events") || {})[a.type] || [], h = gt.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++)l[e] = arguments[e];
            if (a.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, a) !== !1) {
                for (r = gt.event.handlers.call(this, a, c), e = 0; (o = r[e++]) && !a.isPropagationStopped();)for (a.currentTarget = o.elem, i = 0; (s = o.handlers[i++]) && !a.isImmediatePropagationStopped();)a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, n = ((gt.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l), void 0 !== n && (a.result = n) === !1 && (a.preventDefault(), a.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, a), a.result
            }
        }, handlers: function (t, e) {
            var i, n, o, s, r, a = [], l = e.delegateCount, c = t.target;
            if (l && c.nodeType && !("click" === t.type && t.button >= 1))for (; c !== this; c = c.parentNode || this)if (1 === c.nodeType && ("click" !== t.type || c.disabled !== !0)) {
                for (s = [], r = {}, i = 0; i < l; i++)n = e[i], o = n.selector + " ", void 0 === r[o] && (r[o] = n.needsContext ? gt(o, this).index(c) > -1 : gt.find(o, this, null, [c]).length), r[o] && s.push(n);
                s.length && a.push({elem: c, handlers: s})
            }
            return c = this, l < e.length && a.push({elem: c, handlers: e.slice(l)}), a
        }, addProp: function (t, e) {
            Object.defineProperty(gt.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: gt.isFunction(e) ? function () {
                    if (this.originalEvent)return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent)return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (t) {
            return t[gt.expando] ? t : new gt.Event(t)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== C() && this.focus)return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === C() && this.blur)return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && o(this, "input"))return this.click(), !1
                }, _default: function (t) {
                    return o(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, gt.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, gt.Event = function (t, e) {
        return this instanceof gt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? k : b, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && gt.extend(this, e), this.timeStamp = t && t.timeStamp || gt.now(), void(this[gt.expando] = !0)) : new gt.Event(t, e)
    }, gt.Event.prototype = {
        constructor: gt.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = k, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = k, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = k, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, gt.each({
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
        "char": !0,
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
        which: function (t) {
            var e = t.button;
            return null == t.which && Jt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Kt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, gt.event.addProp), gt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        gt.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var i, n = this, o = t.relatedTarget, s = t.handleObj;
                return o && (o === n || gt.contains(n, o)) || (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), gt.fn.extend({
        on: function (t, e, i, n) {
            return $(this, t, e, i, n)
        }, one: function (t, e, i, n) {
            return $(this, t, e, i, n, 1)
        }, off: function (t, e, i) {
            var n, o;
            if (t && t.preventDefault && t.handleObj)return n = t.handleObj, gt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (o in t)this.off(o, e, t[o]);
                return this
            }
            return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = b), this.each(function () {
                gt.event.remove(this, t, i, e)
            })
        }
    });
    var ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ie = /<script|<style|<link/i, ne = /checked\s*(?:[^=]|=\s*.checked.)/i, oe = /^true\/(.*)/,
        se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    gt.extend({
        htmlPrefilter: function (t) {
            return t.replace(ee, "<$1></$2>")
        }, clone: function (t, e, i) {
            var n, o, s, r, a = t.cloneNode(!0), l = gt.contains(t.ownerDocument, t);
            if (!(pt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || gt.isXMLDoc(t)))for (r = w(a), s = w(t), n = 0, o = s.length; n < o; n++)M(s[n], r[n]);
            if (e)if (i)for (s = s || w(t), r = r || w(a), n = 0, o = s.length; n < o; n++)A(s[n], r[n]); else A(t, a);
            return r = w(a, "script"), r.length > 0 && y(r, !l && w(t, "script")), a
        }, cleanData: function (t) {
            for (var e, i, n, o = gt.event.special, s = 0; void 0 !== (i = t[s]); s++)if (Ht(i)) {
                if (e = i[jt.expando]) {
                    if (e.events)for (n in e.events)o[n] ? gt.event.remove(i, n) : gt.removeEvent(i, n, e.handle);
                    i[jt.expando] = void 0
                }
                i[Pt.expando] && (i[Pt.expando] = void 0)
            }
        }
    }), gt.fn.extend({
        detach: function (t) {
            return D(this, t, !0)
        }, remove: function (t) {
            return D(this, t)
        }, text: function (t) {
            return Nt(this, function (t) {
                return void 0 === t ? gt.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        }, append: function () {
            return E(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.appendChild(t)
                }
            })
        }, prepend: function () {
            return E(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return E(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return E(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, empty: function () {
            for (var t,
                     e = 0; null != (t = this[e]); e++)1 === t.nodeType && (gt.cleanData(w(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return gt.clone(this, t, e)
            })
        }, html: function (t) {
            return Nt(this, function (t) {
                var e = this[0] || {}, i = 0, n = this.length;
                if (void 0 === t && 1 === e.nodeType)return e.innerHTML;
                if ("string" == typeof t && !ie.test(t) && !Xt[(Vt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = gt.htmlPrefilter(t);
                    try {
                        for (; i < n; i++)e = this[i] || {}, 1 === e.nodeType && (gt.cleanData(w(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (o) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = [];
            return E(this, arguments, function (e) {
                var i = this.parentNode;
                gt.inArray(this, t) < 0 && (gt.cleanData(w(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), gt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        gt.fn[t] = function (t) {
            for (var i, n = [], o = gt(t), s = o.length - 1,
                     r = 0; r <= s; r++)i = r === s ? this : this.clone(!0), gt(o[r])[e](i), rt.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var re = /^margin/, ae = new RegExp("^(" + zt + ")(?!px)[a-z%]+$", "i"), le = function (e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t), i.getComputedStyle(e)
    };
    !function () {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Qt.appendChild(r);
                var e = t.getComputedStyle(a);
                i = "1%" !== e.top, s = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", o = "4px" === e.marginRight, Qt.removeChild(r), a = null
            }
        }

        var i, n, o, s, r = it.createElement("div"), a = it.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", pt.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(a), gt.extend(pt, {
            pixelPosition: function () {
                return e(), i
            }, boxSizingReliable: function () {
                return e(), n
            }, pixelMarginRight: function () {
                return e(), o
            }, reliableMarginLeft: function () {
                return e(), s
            }
        }))
    }();
    var ce = /^(none|table(?!-c[ea]).+)/, he = /^--/,
        de = {position: "absolute", visibility: "hidden", display: "block"},
        ue = {letterSpacing: "0", fontWeight: "400"}, pe = ["Webkit", "Moz", "ms"], fe = it.createElement("div").style;
    gt.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = O(t, "opacity");
                        return "" === i ? "1" : i
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
        cssProps: {"float": "cssFloat"},
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, s, r, a = gt.camelCase(e), l = he.test(e), c = t.style;
                return l || (e = H(a)), r = gt.cssHooks[e] || gt.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (o = r.get(t, !1, n)) ? o : c[e] : (s = typeof i, "string" === s && (o = qt.exec(i)) && o[1] && (i = g(t, e, o), s = "number"), null != i && i === i && ("number" === s && (i += o && o[3] || (gt.cssNumber[a] ? "" : "px")), pt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i)), void 0)
            }
        },
        css: function (t, e, i, n) {
            var o, s, r, a = gt.camelCase(e), l = he.test(e);
            return l || (e = H(a)), r = gt.cssHooks[e] || gt.cssHooks[a], r && "get" in r && (o = r.get(t, !0, i)), void 0 === o && (o = O(t, e, n)), "normal" === o && e in ue && (o = ue[e]), "" === i || i ? (s = parseFloat(o), i === !0 || isFinite(s) ? s || 0 : o) : o
        }
    }), gt.each(["height", "width"], function (t, e) {
        gt.cssHooks[e] = {
            get: function (t, i, n) {
                if (i)return !ce.test(gt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? I(t, e, n) : Rt(t, de, function () {
                    return I(t, e, n)
                })
            }, set: function (t, i, n) {
                var o, s = n && le(t), r = n && P(t, e, n, "border-box" === gt.css(t, "boxSizing", !1, s), s);
                return r && (o = qt.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i, i = gt.css(t, e)), j(t, i, r)
            }
        }
    }), gt.cssHooks.marginLeft = B(pt.reliableMarginLeft, function (t, e) {
        if (e)return (parseFloat(O(t, "marginLeft")) || t.getBoundingClientRect().left - Rt(t, {marginLeft: 0}, function () {
                return t.getBoundingClientRect().left
            })) + "px"
    }), gt.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        gt.cssHooks[t + e] = {
            expand: function (i) {
                for (var n = 0, o = {},
                         s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)o[t + Ft[n] + e] = s[n] || s[n - 2] || s[0];
                return o
            }
        }, re.test(t) || (gt.cssHooks[t + e].set = j)
    }), gt.fn.extend({
        css: function (t, e) {
            return Nt(this, function (t, e, i) {
                var n, o, s = {}, r = 0;
                if (Array.isArray(e)) {
                    for (n = le(t), o = e.length; r < o; r++)s[e[r]] = gt.css(t, e[r], !1, n);
                    return s
                }
                return void 0 !== i ? gt.style(t, e, i) : gt.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), gt.Tween = _, _.prototype = {
        constructor: _, init: function (t, e, i, n, o, s) {
            this.elem = t, this.prop = i, this.easing = o || gt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (gt.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var t = _.propHooks[this.prop];
            return t && t.get ? t.get(this) : _.propHooks._default.get(this)
        }, run: function (t) {
            var e, i = _.propHooks[this.prop];
            return this.options.duration ? this.pos = e = gt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : _.propHooks._default.set(this), this
        }
    }, _.prototype.init.prototype = _.prototype, _.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = gt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            }, set: function (t) {
                gt.fx.step[t.prop] ? gt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[gt.cssProps[t.prop]] && !gt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : gt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, gt.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
    }, gt.fx = _.prototype.init, gt.fx.step = {};
    var ge, ve, me = /^(?:toggle|show|hide)$/, we = /queueHooks$/;
    gt.Animation = gt.extend(Z, {
        tweeners: {
            "*": [function (t, e) {
                var i = this.createTween(t, e);
                return g(i.elem, t, qt.exec(e), i), i
            }]
        }, tweener: function (t, e) {
            gt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Dt);
            for (var i, n = 0,
                     o = t.length; n < o; n++)i = t[n], Z.tweeners[i] = Z.tweeners[i] || [], Z.tweeners[i].unshift(e)
        }, prefilters: [R], prefilter: function (t, e) {
            e ? Z.prefilters.unshift(t) : Z.prefilters.push(t)
        }
    }), gt.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? gt.extend({}, t) : {
            complete: i || !i && e || gt.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !gt.isFunction(e) && e
        };
        return gt.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in gt.fx.speeds ? n.duration = gt.fx.speeds[n.duration] : n.duration = gt.fx.speeds._default), null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            gt.isFunction(n.old) && n.old.call(this), n.queue && gt.dequeue(this, n.queue)
        }, n
    }, gt.fn.extend({
        fadeTo: function (t, e, i, n) {
            return this.filter(Wt).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
        }, animate: function (t, e, i, n) {
            var o = gt.isEmptyObject(t), s = gt.speed(e, i, n), r = function () {
                var e = Z(this, gt.extend({}, t), s);
                (o || jt.get(this, "finish")) && e.stop(!0)
            };
            return r.finish = r, o || s.queue === !1 ? this.each(r) : this.queue(s.queue, r)
        }, stop: function (t, e, i) {
            var n = function (t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                var e = !0, o = null != t && t + "queueHooks", s = gt.timers, r = jt.get(this);
                if (o) r[o] && r[o].stop && n(r[o]); else for (o in r)r[o] && r[o].stop && we.test(o) && n(r[o]);
                for (o = s.length; o--;)s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(i), e = !1, s.splice(o, 1));
                !e && i || gt.dequeue(this, t)
            })
        }, finish: function (t) {
            return t !== !1 && (t = t || "fx"), this.each(function () {
                var e, i = jt.get(this), n = i[t + "queue"], o = i[t + "queueHooks"], s = gt.timers,
                    r = n ? n.length : 0;
                for (i.finish = !0, gt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;)s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                for (e = 0; e < r; e++)n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }), gt.each(["toggle", "show", "hide"], function (t, e) {
        var i = gt.fn[e];
        gt.fn[e] = function (t, n, o) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(F(e, !0), t, n, o)
        }
    }), gt.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        gt.fn[t] = function (t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), gt.timers = [], gt.fx.tick = function () {
        var t, e = 0, i = gt.timers;
        for (ge = gt.now(); e < i.length; e++)t = i[e], t() || i[e] !== t || i.splice(e--, 1);
        i.length || gt.fx.stop(), ge = void 0
    }, gt.fx.timer = function (t) {
        gt.timers.push(t), gt.fx.start()
    }, gt.fx.interval = 13, gt.fx.start = function () {
        ve || (ve = !0, z())
    }, gt.fx.stop = function () {
        ve = null
    }, gt.fx.speeds = {slow: 600, fast: 200, _default: 400}, gt.fn.delay = function (e, i) {
        return e = gt.fx ? gt.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function (i, n) {
            var o = t.setTimeout(i, e);
            n.stop = function () {
                t.clearTimeout(o)
            }
        })
    }, function () {
        var t = it.createElement("input"), e = it.createElement("select"),
            i = e.appendChild(it.createElement("option"));
        t.type = "checkbox", pt.checkOn = "" !== t.value, pt.optSelected = i.selected, t = it.createElement("input"), t.value = "t", t.type = "radio", pt.radioValue = "t" === t.value
    }();
    var ye, xe = gt.expr.attrHandle;
    gt.fn.extend({
        attr: function (t, e) {
            return Nt(this, gt.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                gt.removeAttr(this, t)
            })
        }
    }), gt.extend({
        attr: function (t, e, i) {
            var n, o, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)return "undefined" == typeof t.getAttribute ? gt.prop(t, e, i) : (1 === s && gt.isXMLDoc(t) || (o = gt.attrHooks[e.toLowerCase()] || (gt.expr.match.bool.test(e) ? ye : void 0)), void 0 !== i ? null === i ? void gt.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : (n = gt.find.attr(t, e), null == n ? void 0 : n))
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!pt.radioValue && "radio" === e && o(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }, removeAttr: function (t, e) {
            var i, n = 0, o = e && e.match(Dt);
            if (o && 1 === t.nodeType)for (; i = o[n++];)t.removeAttribute(i)
        }
    }), ye = {
        set: function (t, e, i) {
            return e === !1 ? gt.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, gt.each(gt.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = xe[e] || gt.find.attr;
        xe[e] = function (t, e, n) {
            var o, s, r = e.toLowerCase();
            return n || (s = xe[r], xe[r] = o, o = null != i(t, e, n) ? r : null, xe[r] = s), o
        }
    });
    var ke = /^(?:input|select|textarea|button)$/i, be = /^(?:a|area)$/i;
    gt.fn.extend({
        prop: function (t, e) {
            return Nt(this, gt.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return this.each(function () {
                delete this[gt.propFix[t] || t]
            })
        }
    }), gt.extend({
        prop: function (t, e, i) {
            var n, o, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)return 1 === s && gt.isXMLDoc(t) || (e = gt.propFix[e] || e, o = gt.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = gt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ke.test(t.nodeName) || be.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), pt.optSelected || (gt.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), gt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        gt.propFix[this.toLowerCase()] = this
    }), gt.fn.extend({
        addClass: function (t) {
            var e, i, n, o, s, r, a, l = 0;
            if (gt.isFunction(t))return this.each(function (e) {
                gt(this).addClass(t.call(this, e, Y(this)))
            });
            if ("string" == typeof t && t)for (e = t.match(Dt) || []; i = this[l++];)if (o = Y(i), n = 1 === i.nodeType && " " + V(o) + " ") {
                for (r = 0; s = e[r++];)n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                a = V(n), o !== a && i.setAttribute("class", a)
            }
            return this
        }, removeClass: function (t) {
            var e, i, n, o, s, r, a, l = 0;
            if (gt.isFunction(t))return this.each(function (e) {
                gt(this).removeClass(t.call(this, e, Y(this)))
            });
            if (!arguments.length)return this.attr("class", "");
            if ("string" == typeof t && t)for (e = t.match(Dt) || []; i = this[l++];)if (o = Y(i), n = 1 === i.nodeType && " " + V(o) + " ") {
                for (r = 0; s = e[r++];)for (; n.indexOf(" " + s + " ") > -1;)n = n.replace(" " + s + " ", " ");
                a = V(n), o !== a && i.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : gt.isFunction(t) ? this.each(function (i) {
                gt(this).toggleClass(t.call(this, i, Y(this), e), e)
            }) : this.each(function () {
                var e, n, o, s;
                if ("string" === i)for (n = 0, o = gt(this), s = t.match(Dt) || []; e = s[n++];)o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else void 0 !== t && "boolean" !== i || (e = Y(this), e && jt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : jt.get(this, "__className__") || ""))
            })
        }, hasClass: function (t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)if (1 === i.nodeType && (" " + V(Y(i)) + " ").indexOf(e) > -1)return !0;
            return !1
        }
    });
    var Ce = /\r/g;
    gt.fn.extend({
        val: function (t) {
            var e, i, n, o = this[0];
            {
                if (arguments.length)return n = gt.isFunction(t), this.each(function (i) {
                    var o;
                    1 === this.nodeType && (o = n ? t.call(this, i, gt(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = gt.map(o, function (t) {
                            return null == t ? "" : t + ""
                        })), e = gt.valHooks[this.type] || gt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                });
                if (o)return e = gt.valHooks[o.type] || gt.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(Ce, "") : null == i ? "" : i)
            }
        }
    }), gt.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = gt.find.attr(t, "value");
                    return null != e ? e : V(gt.text(t))
                }
            }, select: {
                get: function (t) {
                    var e, i, n, s = t.options, r = t.selectedIndex, a = "select-one" === t.type, l = a ? null : [],
                        c = a ? r + 1 : s.length;
                    for (n = r < 0 ? c : a ? r : 0; n < c; n++)if (i = s[n], (i.selected || n === r) && !i.disabled && (!i.parentNode.disabled || !o(i.parentNode, "optgroup"))) {
                        if (e = gt(i).val(), a)return e;
                        l.push(e)
                    }
                    return l
                }, set: function (t, e) {
                    for (var i, n, o = t.options, s = gt.makeArray(e),
                             r = o.length; r--;)n = o[r], (n.selected = gt.inArray(gt.valHooks.option.get(n), s) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), gt.each(["radio", "checkbox"], function () {
        gt.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e))return t.checked = gt.inArray(gt(t).val(), e) > -1
            }
        }, pt.checkOn || (gt.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var $e = /^(?:focusinfocus|focusoutblur)$/;
    gt.extend(gt.event, {
        trigger: function (e, i, n, o) {
            var s, r, a, l, c, h, d, u = [n || it], p = ht.call(e, "type") ? e.type : e,
                f = ht.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = a = n = n || it, 3 !== n.nodeType && 8 !== n.nodeType && !$e.test(p + gt.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[gt.expando] ? e : new gt.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : gt.makeArray(i, [e]), d = gt.event.special[p] || {}, o || !d.trigger || d.trigger.apply(n, i) !== !1)) {
                if (!o && !d.noBubble && !gt.isWindow(n)) {
                    for (l = d.delegateType || p, $e.test(l + p) || (r = r.parentNode); r; r = r.parentNode)u.push(r), a = r;
                    a === (n.ownerDocument || it) && u.push(a.defaultView || a.parentWindow || t)
                }
                for (s = 0; (r = u[s++]) && !e.isPropagationStopped();)e.type = s > 1 ? l : d.bindType || p, h = (jt.get(r, "events") || {})[e.type] && jt.get(r, "handle"), h && h.apply(r, i), h = c && r[c], h && h.apply && Ht(r) && (e.result = h.apply(r, i), e.result === !1 && e.preventDefault());
                return e.type = p, o || e.isDefaultPrevented() || d._default && d._default.apply(u.pop(), i) !== !1 || !Ht(n) || c && gt.isFunction(n[p]) && !gt.isWindow(n) && (a = n[c], a && (n[c] = null), gt.event.triggered = p, n[p](), gt.event.triggered = void 0, a && (n[c] = a)), e.result
            }
        }, simulate: function (t, e, i) {
            var n = gt.extend(new gt.Event, i, {type: t, isSimulated: !0});
            gt.event.trigger(n, null, e)
        }
    }), gt.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                gt.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var i = this[0];
            if (i)return gt.event.trigger(t, e, i, !0)
        }
    }), gt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        gt.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), gt.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), pt.focusin = "onfocusin" in t, pt.focusin || gt.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var i = function (t) {
            gt.event.simulate(e, t.target, gt.event.fix(t))
        };
        gt.event.special[e] = {
            setup: function () {
                var n = this.ownerDocument || this, o = jt.access(n, e);
                o || n.addEventListener(t, i, !0), jt.access(n, e, (o || 0) + 1)
            }, teardown: function () {
                var n = this.ownerDocument || this, o = jt.access(n, e) - 1;
                o ? jt.access(n, e, o) : (n.removeEventListener(t, i, !0), jt.remove(n, e))
            }
        }
    });
    var Te = t.location, Se = gt.now(), Le = /\?/;
    gt.parseXML = function (e) {
        var i;
        if (!e || "string" != typeof e)return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (n) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || gt.error("Invalid XML: " + e), i
    };
    var Ae = /\[\]$/, Me = /\r?\n/g, Ee = /^(?:submit|button|image|reset|file)$/i,
        De = /^(?:input|select|textarea|keygen)/i;
    gt.param = function (t, e) {
        var i, n = [], o = function (t, e) {
            var i = gt.isFunction(e) ? e() : e;
            n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (Array.isArray(t) || t.jquery && !gt.isPlainObject(t)) gt.each(t, function () {
            o(this.name, this.value)
        }); else for (i in t)X(i, t[i], e, o);
        return n.join("&")
    }, gt.fn.extend({
        serialize: function () {
            return gt.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = gt.prop(this, "elements");
                return t ? gt.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !gt(this).is(":disabled") && De.test(this.nodeName) && !Ee.test(t) && (this.checked || !Zt.test(t))
            }).map(function (t, e) {
                var i = gt(this).val();
                return null == i ? null : Array.isArray(i) ? gt.map(i, function (t) {
                    return {name: e.name, value: t.replace(Me, "\r\n")}
                }) : {name: e.name, value: i.replace(Me, "\r\n")}
            }).get()
        }
    });
    var Oe = /%20/g, Be = /#.*$/, Ne = /([?&])_=[^&]*/, He = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        je = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Pe = /^(?:GET|HEAD)$/, Ie = /^\/\//, _e = {},
        ze = {}, qe = "*/".concat("*"), Fe = it.createElement("a");
    Fe.href = Te.href, gt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Te.href,
            type: "GET",
            isLocal: je.test(Te.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": gt.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? J(J(t, gt.ajaxSettings), e) : J(gt.ajaxSettings, t)
        },
        ajaxPrefilter: G(_e),
        ajaxTransport: G(ze),
        ajax: function (e, i) {
            function n(e, i, n, a) {
                var c, u, p, x, k, b = i;
                h || (h = !0, l && t.clearTimeout(l), o = void 0, r = a || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, n && (x = K(f, C, n)), x = tt(f, x, C, c), c ? (f.ifModified && (k = C.getResponseHeader("Last-Modified"), k && (gt.lastModified[s] = k), k = C.getResponseHeader("etag"), k && (gt.etag[s] = k)), 204 === e || "HEAD" === f.type ? b = "nocontent" : 304 === e ? b = "notmodified" : (b = x.state, u = x.data, p = x.error, c = !p)) : (p = b, !e && b || (b = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (i || b) + "", c ? m.resolveWith(g, [u, b, C]) : m.rejectWith(g, [C, b, p]), C.statusCode(y), y = void 0, d && v.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? u : p]), w.fireWith(g, [C, b]), d && (v.trigger("ajaxComplete", [C, f]), --gt.active || gt.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var o, s, r, a, l, c, h, d, u, p, f = gt.ajaxSetup({}, i), g = f.context || f,
                v = f.context && (g.nodeType || g.jquery) ? gt(g) : gt.event, m = gt.Deferred(),
                w = gt.Callbacks("once memory"), y = f.statusCode || {}, x = {}, k = {}, b = "canceled", C = {
                    readyState: 0, getResponseHeader: function (t) {
                        var e;
                        if (h) {
                            if (!a)for (a = {}; e = He.exec(r);)a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    }, getAllResponseHeaders: function () {
                        return h ? r : null
                    }, setRequestHeader: function (t, e) {
                        return null == h && (t = k[t.toLowerCase()] = k[t.toLowerCase()] || t, x[t] = e), this
                    }, overrideMimeType: function (t) {
                        return null == h && (f.mimeType = t), this
                    }, statusCode: function (t) {
                        var e;
                        if (t)if (h) C.always(t[C.status]); else for (e in t)y[e] = [y[e], t[e]];
                        return this
                    }, abort: function (t) {
                        var e = t || b;
                        return o && o.abort(e), n(0, e), this
                    }
                };
            if (m.promise(C), f.url = ((e || f.url || Te.href) + "").replace(Ie, Te.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Dt) || [""], null == f.crossDomain) {
                c = it.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = Fe.protocol + "//" + Fe.host != c.protocol + "//" + c.host
                } catch ($) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = gt.param(f.data, f.traditional)), Q(_e, f, i, C), h)return C;
            d = gt.event && f.global, d && 0 === gt.active++ && gt.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Pe.test(f.type), s = f.url.replace(Be, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Oe, "+")) : (p = f.url.slice(s.length), f.data && (s += (Le.test(s) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (s = s.replace(Ne, "$1"), p = (Le.test(s) ? "&" : "?") + "_=" + Se++ + p), f.url = s + p), f.ifModified && (gt.lastModified[s] && C.setRequestHeader("If-Modified-Since", gt.lastModified[s]), gt.etag[s] && C.setRequestHeader("If-None-Match", gt.etag[s])), (f.data && f.hasContent && f.contentType !== !1 || i.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + qe + "; q=0.01" : "") : f.accepts["*"]);
            for (u in f.headers)C.setRequestHeader(u, f.headers[u]);
            if (f.beforeSend && (f.beforeSend.call(g, C, f) === !1 || h))return C.abort();
            if (b = "abort", w.add(f.complete), C.done(f.success), C.fail(f.error), o = Q(ze, f, i, C)) {
                if (C.readyState = 1, d && v.trigger("ajaxSend", [C, f]), h)return C;
                f.async && f.timeout > 0 && (l = t.setTimeout(function () {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    h = !1, o.send(x, n)
                } catch ($) {
                    if (h)throw $;
                    n(-1, $)
                }
            } else n(-1, "No Transport");
            return C
        },
        getJSON: function (t, e, i) {
            return gt.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return gt.get(t, void 0, e, "script")
        }
    }), gt.each(["get", "post"], function (t, e) {
        gt[e] = function (t, i, n, o) {
            return gt.isFunction(i) && (o = o || n, n = i, i = void 0), gt.ajax(gt.extend({
                url: t,
                type: e,
                dataType: o,
                data: i,
                success: n
            }, gt.isPlainObject(t) && t))
        }
    }), gt._evalUrl = function (t) {
        return gt.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, gt.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (gt.isFunction(t) && (t = t.call(this[0])), e = gt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;)t = t.firstElementChild;
                return t
            }).append(this)), this
        }, wrapInner: function (t) {
            return gt.isFunction(t) ? this.each(function (e) {
                gt(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = gt(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = gt.isFunction(t);
            return this.each(function (i) {
                gt(this).wrapAll(e ? t.call(this, i) : t)
            })
        }, unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                gt(this).replaceWith(this.childNodes)
            }), this
        }
    }), gt.expr.pseudos.hidden = function (t) {
        return !gt.expr.pseudos.visible(t)
    }, gt.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, gt.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (e) {
        }
    };
    var We = {0: 200, 1223: 204}, Re = gt.ajaxSettings.xhr();
    pt.cors = !!Re && "withCredentials" in Re, pt.ajax = Re = !!Re, gt.ajaxTransport(function (e) {
        var i, n;
        if (pt.cors || Re && !e.crossDomain)return {
            send: function (o, s) {
                var r, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (r in e.xhrFields)a[r] = e.xhrFields[r];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (r in o)a.setRequestHeader(r, o[r]);
                i = function (t) {
                    return function () {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(We[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout(function () {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (l) {
                    if (i)throw l
                }
            }, abort: function () {
                i && i()
            }
        }
    }), gt.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), gt.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (t) {
                return gt.globalEval(t), t
            }
        }
    }), gt.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), gt.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function (n, o) {
                    e = gt("<script>").prop({charset: t.scriptCharset, src: t.url}).on("load error", i = function (t) {
                        e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), it.head.appendChild(e[0])
                }, abort: function () {
                    i && i()
                }
            }
        }
    });
    var Ue = [], Ze = /(=)\?(?=&|$)|\?\?/;
    gt.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = Ue.pop() || gt.expando + "_" + Se++;
            return this[t] = !0, t
        }
    }), gt.ajaxPrefilter("json jsonp", function (e, i, n) {
        var o, s, r,
            a = e.jsonp !== !1 && (Ze.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ze.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])return o = e.jsonpCallback = gt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ze, "$1" + o) : e.jsonp !== !1 && (e.url += (Le.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
            return r || gt.error(o + " was not called"), r[0]
        }, e.dataTypes[0] = "json", s = t[o], t[o] = function () {
            r = arguments
        }, n.always(function () {
            void 0 === s ? gt(t).removeProp(o) : t[o] = s, e[o] && (e.jsonpCallback = i.jsonpCallback, Ue.push(o)), r && gt.isFunction(s) && s(r[0]), r = s = void 0
        }), "script"
    }), pt.createHTMLDocument = function () {
        var t = it.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), gt.parseHTML = function (t, e, i) {
        if ("string" != typeof t)return [];
        "boolean" == typeof e && (i = e, e = !1);
        var n, o, s;
        return e || (pt.createHTMLDocument ? (e = it.implementation.createHTMLDocument(""), n = e.createElement("base"), n.href = it.location.href, e.head.appendChild(n)) : e = it), o = $t.exec(t), s = !i && [], o ? [e.createElement(o[1])] : (o = x([t], e, s), s && s.length && gt(s).remove(), gt.merge([], o.childNodes))
    }, gt.fn.load = function (t, e, i) {
        var n, o, s, r = this, a = t.indexOf(" ");
        return a > -1 && (n = V(t.slice(a)), t = t.slice(0, a)), gt.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && gt.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            s = arguments, r.html(n ? gt("<div>").append(gt.parseHTML(t)).find(n) : t)
        }).always(i && function (t, e) {
                r.each(function () {
                    i.apply(this, s || [t.responseText, e, t])
                })
            }), this
    }, gt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        gt.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), gt.expr.pseudos.animated = function (t) {
        return gt.grep(gt.timers, function (e) {
            return t === e.elem
        }).length
    }, gt.offset = {
        setOffset: function (t, e, i) {
            var n, o, s, r, a, l, c, h = gt.css(t, "position"), d = gt(t), u = {};
            "static" === h && (t.style.position = "relative"), a = d.offset(), s = gt.css(t, "top"), l = gt.css(t, "left"), c = ("absolute" === h || "fixed" === h) && (s + l).indexOf("auto") > -1, c ? (n = d.position(), r = n.top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), gt.isFunction(e) && (e = e.call(t, i, gt.extend({}, a))), null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + o), "using" in e ? e.using.call(t, u) : d.css(u)
        }
    }, gt.fn.extend({
        offset: function (t) {
            if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                gt.offset.setOffset(this, t, e)
            });
            var e, i, n, o, s = this[0];
            if (s)return s.getClientRects().length ? (n = s.getBoundingClientRect(), e = s.ownerDocument, i = e.documentElement, o = e.defaultView, {
                top: n.top + o.pageYOffset - i.clientTop,
                left: n.left + o.pageXOffset - i.clientLeft
            }) : {top: 0, left: 0}
        }, position: function () {
            if (this[0]) {
                var t, e, i = this[0], n = {top: 0, left: 0};
                return "fixed" === gt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), o(t[0], "html") || (n = t.offset()), n = {
                    top: n.top + gt.css(t[0], "borderTopWidth", !0),
                    left: n.left + gt.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - n.top - gt.css(i, "marginTop", !0),
                    left: e.left - n.left - gt.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === gt.css(t, "position");)t = t.offsetParent;
                return t || Qt
            })
        }
    }), gt.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var i = "pageYOffset" === e;
        gt.fn[t] = function (n) {
            return Nt(this, function (t, n, o) {
                var s;
                return gt.isWindow(t) ? s = t : 9 === t.nodeType && (s = t.defaultView), void 0 === o ? s ? s[e] : t[n] : void(s ? s.scrollTo(i ? s.pageXOffset : o, i ? o : s.pageYOffset) : t[n] = o)
            }, t, n, arguments.length)
        }
    }), gt.each(["top", "left"], function (t, e) {
        gt.cssHooks[e] = B(pt.pixelPosition, function (t, i) {
            if (i)return i = O(t, e), ae.test(i) ? gt(t).position()[e] + "px" : i
        })
    }), gt.each({Height: "height", Width: "width"}, function (t, e) {
        gt.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, n) {
            gt.fn[n] = function (o, s) {
                var r = arguments.length && (i || "boolean" != typeof o),
                    a = i || (o === !0 || s === !0 ? "margin" : "border");
                return Nt(this, function (e, i, o) {
                    var s;
                    return gt.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === o ? gt.css(e, i, a) : gt.style(e, i, o, a)
                }, e, r ? o : void 0, r)
            }
        })
    }), gt.fn.extend({
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        }, undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), gt.holdReady = function (t) {
        t ? gt.readyWait++ : gt.ready(!0)
    }, gt.isArray = Array.isArray, gt.parseJSON = JSON.parse, gt.nodeName = o, "function" == typeof define && define.amd && define("jquery", [], function () {
        return gt
    });
    var Ve = t.jQuery, Ye = t.$;
    return gt.noConflict = function (e) {
        return t.$ === gt && (t.$ = Ye), e && t.jQuery === gt && (t.jQuery = Ve), gt
    }, e || (t.jQuery = t.$ = gt), gt
}), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    "use strict";
    var e = window.Slick || {};
    e = function () {
        function e(e, n) {
            var o, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(e),
                appendDots: t(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, i) {
                    return t('<button type="button" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(e), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = t(e).data("slick") || {}, s.options = t.extend({}, s.defaults, n, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, "undefined" != typeof document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.instanceUid = i++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
        }

        var i = 0;
        return e
    }(), e.prototype.activateADA = function () {
        var t = this;
        t.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, i, n) {
        var o = this;
        if ("boolean" == typeof i) n = i, i = null; else if (i < 0 || i >= o.slideCount)return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : n === !0 ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (e, i) {
            t(i).attr("data-slick-index", e)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.animateHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({height: e}, t.options.speed)
        }
    }, e.prototype.animateSlide = function (e, i) {
        var n = {}, o = this;
        o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (e = -e), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({left: e}, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({top: e}, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), t({animStart: o.currentLeft}).animate({animStart: e}, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function (t) {
                t = Math.ceil(t), o.options.vertical === !1 ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
            },
            complete: function () {
                i && i.call()
            }
        })) : (o.applyTransition(), e = Math.ceil(e), o.options.vertical === !1 ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function () {
            o.disableTransition(), i.call()
        }, o.options.speed))
    }, e.prototype.getNavTarget = function () {
        var e = this, i = e.options.asNavFor;
        return i && null !== i && (i = t(i).not(e.$slider)), i
    }, e.prototype.asNavFor = function (e) {
        var i = this, n = i.getNavTarget();
        null !== n && "object" == typeof n && n.each(function () {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function (t) {
        var e = this, i = {};
        e.options.fade === !1 ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
        var t = this, e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 === 0 && (t.direction = 1))), t.slideHandler(e))
    }, e.prototype.buildArrows = function () {
        var e = this;
        e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function () {
        var e, i, n = this;
        if (n.options.dots === !0) {
            for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1)i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
        var t, e, i, n, o, s, r, a = this;
        if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), t = 0; t < o; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var h = t * r + (e * a.options.slidesPerRow + i);
                        s.get(h) && c.appendChild(s.get(h))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function (e, i) {
        var n, o, s, r = this, a = !1, l = r.$slider.width(), c = window.innerWidth || t(window).width();
        if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            o = null;
            for (n in r.breakpoints)r.breakpoints.hasOwnProperty(n) && (r.originalSettings.mobileFirst === !1 ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
            null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = o), e || a === !1 || r.$slider.trigger("breakpoint", [r, a])
        }
    }, e.prototype.changeSlide = function (e, i) {
        var n, o, s, r = this, a = t(e.currentTarget);
        switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), s = r.slideCount % r.options.slidesToScroll !== 0, n = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case"previous":
                o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                break;
            case"next":
                o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                break;
            case"index":
                var l = 0 === e.data.index ? 0 : e.data.index || a.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function (t) {
        var e, i, n = this;
        if (e = n.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1]; else for (var o in e) {
            if (t < e[o]) {
                t = i;
                break
            }
            i = e[o]
        }
        return t
    }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.options.accessibility === !0 && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), e.options.accessibility === !0 && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function () {
        var t, e = this;
        e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
    }, e.prototype.clickHandler = function (t) {
        var e = this;
        e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, e.prototype.destroy = function (e) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            t(this).attr("style", t(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
    }, e.prototype.disableTransition = function (t) {
        var e = this, i = {};
        i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.fadeSlide = function (t, e) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(t).css({zIndex: i.options.zIndex}), i.$slides.eq(t).animate({opacity: 1}, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function () {
            i.disableTransition(t), e.call()
        }, i.options.speed))
    }, e.prototype.fadeSlideOut = function (t) {
        var e = this;
        e.cssTransitions === !1 ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (i) {
            i.stopImmediatePropagation();
            var n = t(this);
            setTimeout(function () {
                e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        var t = this;
        return t.currentSlide
    }, e.prototype.getDotCount = function () {
        var t = this, e = 0, i = 0, n = 0;
        if (t.options.infinite === !0)if (t.slideCount <= t.options.slidesToShow) ++n; else for (; e < t.slideCount;)++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else if (t.options.centerMode === !0) n = t.slideCount; else if (t.options.asNavFor)for (; e < t.slideCount;)++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return n - 1
    }, e.prototype.getLeft = function (t) {
        var e, i, n, o, s = this, r = 0;
        return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), s.options.infinite === !0 ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = -1, s.options.vertical === !0 && s.options.centerMode === !0 && (2 === s.options.slidesToShow ? o = -1.5 : 1 === s.options.slidesToShow && (o = -2)), r = i * s.options.slidesToShow * o), s.slideCount % s.options.slidesToScroll !== 0 && t + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (t > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (t - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * i * -1))) : t + s.options.slidesToShow > s.slideCount && (s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (t + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, r = 0), s.options.centerMode === !0 && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : s.options.centerMode === !0 && s.options.infinite === !0 ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : s.options.centerMode === !0 && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = s.options.vertical === !1 ? t * s.slideWidth * -1 + s.slideOffset : t * i * -1 + r, s.options.variableWidth === !0 && (n = s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow), e = s.options.rtl === !0 ? n[0] ? (s.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, s.options.centerMode === !0 && (n = s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1), e = s.options.rtl === !0 ? n[0] ? (s.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, e += (s.$list.width() - n.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
        var e = this;
        return e.options[t]
    }, e.prototype.getNavigableIndexes = function () {
        var t, e = this, i = 0, n = 0, o = [];
        for (e.options.infinite === !1 ? t = e.slideCount : (i = e.options.slidesToScroll * -1, n = e.options.slidesToScroll * -1, t = 2 * e.slideCount); i < t;)o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
    }, e.prototype.getSlick = function () {
        return this
    }, e.prototype.getSlideCount = function () {
        var e, i, n, o = this;
        return n = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function (e, s) {
            if (s.offsetLeft - n + t(s).outerWidth() / 2 > o.swipeLeft * -1)return i = s, !1
        }), e = Math.abs(t(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
        var i = this;
        i.changeSlide({data: {message: "index", index: parseInt(t)}}, e)
    }, e.prototype.init = function (e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, e.prototype.initADA = function () {
        var e = this, i = Math.ceil(e.slideCount / e.options.slidesToShow),
            n = e.getNavigableIndexes().filter(function (t) {
                return t >= 0 && t < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i) {
            var o = n.indexOf(i);
            t(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + i,
                tabindex: -1
            }), o !== -1 && t(this).attr({"aria-describedby": "slick-slide-control" + e.instanceUid + o})
        }), e.$dots.attr("role", "tablist").find("li").each(function (o) {
            var s = n[o];
            t(this).attr({role: "presentation"}), t(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + o,
                "aria-controls": "slick-slide" + e.instanceUid + s,
                "aria-label": o + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
        for (var o = e.currentSlide, s = o + e.options.slidesToShow; o < s; o++)e.$slides.eq(o).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function () {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, t.changeSlide), t.options.accessibility === !0 && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }, e.prototype.initDotEvents = function () {
        var e = this;
        e.options.dots === !0 && (t("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), e.options.accessibility === !0 && e.$dots.on("keydown.slick", e.keyHandler)), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
    }, e.prototype.initUI = function () {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, e.prototype.keyHandler = function (t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({data: {message: e.options.rtl === !0 ? "next" : "previous"}}) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({data: {message: e.options.rtl === !0 ? "previous" : "next"}}))
    }, e.prototype.lazyLoad = function () {
        function e(e) {
            t("img[data-lazy]", e).each(function () {
                var e = t(this), i = t(this).attr("data-lazy"), n = t(this).attr("data-srcset"),
                    o = t(this).attr("data-sizes") || r.$slider.attr("data-sizes"), s = document.createElement("img");
                s.onload = function () {
                    e.animate({opacity: 0}, 100, function () {
                        n && (e.attr("srcset", n), o && e.attr("sizes", o)), e.attr("src", i).animate({opacity: 1}, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), r.$slider.trigger("lazyLoaded", [r, e, i])
                    })
                }, s.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, i])
                }, s.src = i
            })
        }

        var i, n, o, s, r = this;
        if (r.options.centerMode === !0 ? r.options.infinite === !0 ? (o = r.currentSlide + (r.options.slidesToShow / 2 + 1), s = o + r.options.slidesToShow + 2) : (o = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (o = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = Math.ceil(o + r.options.slidesToShow), r.options.fade === !0 && (o > 0 && o--, s <= r.slideCount && s++)), i = r.$slider.find(".slick-slide").slice(o, s), "anticipated" === r.options.lazyLoad)for (var a = o - 1,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       l = s,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       c = r.$slider.find(".slick-slide"),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       h = 0; h < r.options.slidesToScroll; h++)a < 0 && (a = r.slideCount - 1), i = i.add(c.eq(a)), i = i.add(c.eq(l)), a--, l++;
        e(i), r.slideCount <= r.options.slidesToShow ? (n = r.$slider.find(".slick-slide"), e(n)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (n = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(n)) : 0 === r.currentSlide && (n = r.$slider.find(".slick-cloned").slice(r.options.slidesToShow * -1), e(n))
    }, e.prototype.loadSlider = function () {
        var t = this;
        t.setPosition(), t.$slideTrack.css({opacity: 1}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
        var t = this;
        t.changeSlide({data: {message: "next"}})
    }, e.prototype.orientationChange = function () {
        var t = this;
        t.checkResponsive(), t.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
        var t = this;
        t.autoPlayClear(), t.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, e.prototype.postSlide = function (e) {
        var i = this;
        if (!i.unslicked && (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), i.options.accessibility === !0 && (i.initADA(), i.options.focusOnChange))) {
            var n = t(i.$slides.get(i.currentSlide));
            n.attr("tabindex", 0).focus()
        }
    }, e.prototype.prev = e.prototype.slickPrev = function () {
        var t = this;
        t.changeSlide({data: {message: "previous"}})
    }, e.prototype.preventDefault = function (t) {
        t.preventDefault()
    }, e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var i, n, o, s, r, a = this, l = t("img[data-lazy]", a.$slider);
        l.length ? (i = l.first(), n = i.attr("data-lazy"), o = i.attr("data-srcset"), s = i.attr("data-sizes") || a.$slider.attr("data-sizes"), r = document.createElement("img"), r.onload = function () {
            o && (i.attr("srcset", o), s && i.attr("sizes", s)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), a.options.adaptiveHeight === !0 && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad()
        }, r.onerror = function () {
            e < 3 ? setTimeout(function () {
                a.progressiveLazyLoad(e + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad())
        }, r.src = n) : a.$slider.trigger("allImagesLoaded", [a])
    }, e.prototype.refresh = function (e) {
        var i, n, o = this;
        n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {currentSlide: i}), o.init(), e || o.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function () {
        var e, i, n, o = this, s = o.options.responsive || null;
        if ("array" === t.type(s) && s.length) {
            o.respondTo = o.options.respondTo || "window";
            for (e in s)if (n = o.breakpoints.length - 1, s.hasOwnProperty(e)) {
                for (i = s[e].breakpoint; n >= 0;)o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                o.breakpoints.push(i), o.breakpointSettings[i] = s[e].settings
            }
            o.breakpoints.sort(function (t, e) {
                return o.options.mobileFirst ? t - e : e - t
            })
        }
    }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function () {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
        var n = this;
        return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, !(n.slideCount < 1 || t < 0 || t > n.slideCount - 1) && (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
    }, e.prototype.setCSS = function (t) {
        var e, i, n = this, o = {};
        n.options.rtl === !0 && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(o) : (o = {}, n.cssTransitions === !1 ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
    }, e.prototype.setDimensions = function () {
        var t = this;
        t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({padding: "0px " + t.options.centerPadding}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({padding: t.options.centerPadding + " 0px"})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, e.prototype.setFade = function () {
        var e, i = this;
        i.$slides.each(function (n, o) {
            e = i.slideWidth * n * -1, i.options.rtl === !0 ? t(o).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(o).css({position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0})
        }), i.$slides.eq(i.currentSlide).css({zIndex: i.options.zIndex - 1, opacity: 1})
    }, e.prototype.setHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e, i, n, o, s, r = this, a = !1;
        if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], s = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? s = "responsive" : "undefined" != typeof arguments[1] && (s = "single")), "single" === s) r.options[n] = o; else if ("multiple" === s) t.each(n, function (t, e) {
            r.options[t] = e
        }); else if ("responsive" === s)for (i in o)if ("array" !== t.type(r.options.responsive)) r.options.responsive = [o[i]]; else {
            for (e = r.options.responsive.length - 1; e >= 0;)r.options.responsive[e].breakpoint === o[i].breakpoint && r.options.responsive.splice(e, 1), e--;
            r.options.responsive.push(o[i])
        }
        a && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function () {
        var t = this;
        t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, e.prototype.setProps = function () {
        var t = this, e = document.body.style;
        t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
    }, e.prototype.setSlideClasses = function (t) {
        var e, i, n, o, s = this;
        if (i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), s.options.centerMode === !0) {
            var r = s.options.slidesToShow % 2 === 0 ? 1 : 0;
            e = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e + r, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1 + r, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")
        } else t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = s.options.infinite === !0 ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
    }, e.prototype.setupInfinite = function () {
        var e, i, n, o = this;
        if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (i = null, o.slideCount > o.options.slidesToShow)) {
            for (n = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1)i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < n + o.slideCount; e += 1)i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                t(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function (t) {
        var e = this;
        t || e.autoPlay(), e.interrupted = t
    }, e.prototype.selectHandler = function (e) {
        var i = this, n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            o = parseInt(n.attr("data-slick-index"));
        return o || (o = 0), i.slideCount <= i.options.slidesToShow ? void i.slideHandler(o, !1, !0) : void i.slideHandler(o)
    }, e.prototype.slideHandler = function (t, e, i) {
        var n, o, s, r, a, l = null, c = this;
        if (e = e || !1, !(c.animating === !0 && c.options.waitForAnimate === !0 || c.options.fade === !0 && c.currentSlide === t))return e === !1 && c.asNavFor(t), n = t, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, c.options.infinite === !1 && c.options.centerMode === !1 && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(r, function () {
            c.postSlide(n)
        }) : c.postSlide(n))) : c.options.infinite === !1 && c.options.centerMode === !0 && (t < 0 || t > c.slideCount - c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(r, function () {
            c.postSlide(n)
        }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), c.options.fade === !0 ? (i !== !0 ? (c.fadeSlideOut(s), c.fadeSlide(o, function () {
            c.postSlide(o)
        })) : c.postSlide(o), void c.animateHeight()) : void(i !== !0 ? c.animateSlide(l, function () {
            c.postSlide(o)
        }) : c.postSlide(o)))
    }, e.prototype.startLoad = function () {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
        var t, e, i, n, o = this;
        return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), n < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? o.options.rtl === !1 ? "left" : "right" : n <= 360 && n >= 315 ? o.options.rtl === !1 ? "left" : "right" : n >= 135 && n <= 225 ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function (t) {
        var e, i, n = this;
        if (n.dragging = !1, n.swiping = !1, n.scrolling)return n.scrolling = !1, !1;
        if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX)return !1;
        if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
                case"left":
                case"down":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, e.prototype.swipeHandler = function (t) {
        var e = this;
        if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && t.type.indexOf("mouse") !== -1))switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case"start":
                e.swipeStart(t);
                break;
            case"move":
                e.swipeMove(t);
                break;
            case"end":
                e.swipeEnd(t)
        }
    }, e.prototype.swipeMove = function (t) {
        var e, i, n, o, s, r, a = this;
        return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (a.options.verticalSwiping === !0 && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), o = (a.options.rtl === !1 ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), a.options.verticalSwiping === !0 && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, a.options.infinite === !1 && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), a.options.vertical === !1 ? a.swipeLeft = e + n * o : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * o, a.options.verticalSwiping === !0 && (a.swipeLeft = e + n * o), a.options.fade !== !0 && a.options.touchMove !== !1 && (a.animating === !0 ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, e.prototype.swipeStart = function (t) {
        var e, i = this;
        return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit());
    }, e.prototype.unload = function () {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy()
    }, e.prototype.updateArrows = function () {
        var t, e = this;
        t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function () {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }, t.fn.slick = function () {
        var t, i, n = this, o = arguments[0], s = Array.prototype.slice.call(arguments, 1), r = n.length;
        for (t = 0; t < r; t++)if ("object" == typeof o || "undefined" == typeof o ? n[t].slick = new e(n[t], o) : i = n[t].slick[o].apply(n[t].slick, s), "undefined" != typeof i)return i;
        return n
    }
}), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define("uikit", ["jquery"], e) : t.UIkit = e(t.jQuery)
}(this, function (t) {
    "use strict";
    function e() {
        return "complete" === document.readyState || "loading" !== document.readyState && !Bt.doScroll
    }

    function i(t) {
        var i = function () {
            o(document, "DOMContentLoaded", i), o(window, "load", i), t()
        };
        e() ? t() : (n(document, "DOMContentLoaded", i), n(window, "load", i))
    }

    function n(t, e, i, n) {
        void 0 === n && (n = !1), e.split(" ").forEach(function (e) {
            return q(t).addEventListener(e, i, n)
        })
    }

    function o(t, e, i, n) {
        void 0 === n && (n = !1), e.split(" ").forEach(function (e) {
            return q(t).removeEventListener(e, i, n)
        })
    }

    function s(t, e, i, s, r) {
        var a = function (n) {
            var l = !r || r(n);
            l && (o(t, e, a, s), i(n, l))
        };
        n(t, e, a, s)
    }

    function r(t, e) {
        var i = f(e);
        return q(t).dispatchEvent(i), i
    }

    function a(e, i, n, o) {
        void 0 === o && (o = !1);
        var s = i instanceof t.Event ? i : t.Event(i);
        return Ot(e)[o ? "triggerHandler" : "trigger"](s, n), s
    }

    function l(t, e, i, n) {
        return void 0 === i && (i = 400), void 0 === n && (n = "linear"), S(function (o, r) {
            t = Ot(t);
            for (var a in e)t.css(a, t.css(a));
            var l = setTimeout(function () {
                return t.trigger(he)
            }, i);
            s(t, he + " " + It, function (e) {
                var i = e.type;
                clearTimeout(l), t.removeClass("uk-transition").css("transition", ""), i === It ? r() : o()
            }, !1, function (e) {
                var i = e.target;
                return t.is(i)
            }), t.addClass("uk-transition").css("transition", "all " + i + "ms " + n).css(e)
        })
    }

    function c(t, e, i, n, o) {
        var r = arguments;
        return void 0 === i && (i = 200), S(function (a, l) {
            function h() {
                t.css("animation-duration", ""), p(t, qt + "\\S*")
            }

            if (t = Ot(t), t.hasClass(Ft))return void te(function () {
                return S.resolve().then(function () {
                    return c.apply(null, r).then(a, l)
                })
            });
            var d = e + " " + qt + (o ? "leave" : "enter");
            0 === e.lastIndexOf(qt, 0) && (n && (d += " " + qt + n), o && (d += " " + qt + "reverse")), h(), s(t, (ue || "animationend") + " " + zt, function (e) {
                var i = e.type, n = !1;
                i === zt ? l() : a(), te(function () {
                    n || (t.addClass(Ft), te(function () {
                        return t.removeClass(Ft)
                    }))
                }), S.resolve().then(function () {
                    n = !0, h()
                })
            }, !1, function (e) {
                var i = e.target;
                return t.is(i)
            }), t.css("animation-duration", i + "ms").addClass(d), ue || te(function () {
                return Rt.cancel(t)
            })
        })
    }

    function h(t) {
        return t instanceof Ot
    }

    function d(t, e) {
        return t = Ot(t), !!t.is(e) || (H(e) ? t.parents(e).length : q(e).contains(t[0]))
    }

    function u(t, e, i, n) {
        return t = Ot(t), t.attr(e, function (t, e) {
            return e ? e.replace(i, n) : e
        })
    }

    function p(t, e) {
        return u(t, "class", new RegExp("(^|\\s)" + e + "(?!\\S)", "g"), "")
    }

    function f(t, e, i, n) {
        if (void 0 === e && (e = !0), void 0 === i && (i = !1), void 0 === n && (n = !1), H(t)) {
            var o = document.createEvent("Event");
            o.initEvent(t, e, i), t = o
        }
        return n && Jt(t, n), t
    }

    function g(t, e, i) {
        void 0 === e && (e = 0), void 0 === i && (i = 0);
        var n = q(t).getBoundingClientRect();
        return n.bottom >= -1 * e && n.right >= -1 * i && n.top <= window.innerHeight + e && n.left <= window.innerWidth + i
    }

    function v(t) {
        t = q(t);
        var e = t.offsetHeight, i = m(t), n = window.innerHeight, o = n + Math.min(0, i - n),
            s = Math.max(0, n - (w() - (i + e)));
        return X((o + window.pageYOffset - i) / ((o + (e - (s < n ? s : 0))) / 100) / 100)
    }

    function m(t) {
        var e = 0;
        do e += t.offsetTop; while (t = t.offsetParent);
        return e
    }

    function w() {
        return Math.max(Bt.offsetHeight, Bt.scrollHeight)
    }

    function y(t, e, i) {
        void 0 === i && (i = 0), e = Ot(e);
        var n = Ot(e).length;
        return t = (j(t) ? t : "next" === t ? i + 1 : "previous" === t ? i - 1 : H(t) ? parseInt(t, 10) : e.index(t)) % n, t < 0 ? t + n : t
    }

    function x(t) {
        return Ut[q(t).tagName.toLowerCase()]
    }

    function k(t, e) {
        var i = _(t);
        return i ? i.reduce(function (t, e) {
            return z(e, t)
        }, e) : z(t)
    }

    function b() {
        var t = setTimeout(function () {
            return r(Ht, "click")
        }, 0);
        s(Ht, "click", function (e) {
            e.preventDefault(), e.stopImmediatePropagation(), clearTimeout(t)
        }, !0)
    }

    function C(t, e) {
        t = q(t);
        for (var i = 0, n = [e, "data-" + e]; i < n.length; i++)if (t.hasAttribute(n[i]))return t.getAttribute(n[i])
    }

    function $(t, e) {
        return function (i) {
            var n = arguments.length;
            return n ? n > 1 ? t.apply(e, arguments) : t.call(e, i) : t.call(e)
        }
    }

    function T(t, e) {
        return Vt.call(t, e)
    }

    function S(t) {
        if (ne)return new Promise(t);
        var e = Ot.Deferred();
        return t(e.resolve, e.reject), e
    }

    function L(t) {
        return t.replace(/(?:^|[-_\/])(\w)/g, function (t, e) {
            return e ? e.toUpperCase() : ""
        })
    }

    function A(t) {
        return t.replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase()
    }

    function M(t) {
        return t.replace(Yt, E)
    }

    function E(t, e) {
        return e ? e.toUpperCase() : ""
    }

    function D(t) {
        return "function" == typeof t
    }

    function O(t) {
        return null !== t && "object" == typeof t
    }

    function B(t) {
        return O(t) && Object.getPrototypeOf(t) === Object.prototype
    }

    function N(t) {
        return "boolean" == typeof t
    }

    function H(t) {
        return "string" == typeof t
    }

    function j(t) {
        return "number" == typeof t
    }

    function P(t) {
        return void 0 === t
    }

    function I(t) {
        return H(t) && t.match(/^[!>+-]/)
    }

    function _(t) {
        return I(t) && t.split(/(?=\s[!>+-])/g).map(function (t) {
                return t.trim()
            })
    }

    function z(t, e) {
        if (t === !0)return null;
        try {
            if (e && I(t) && ">" !== t[0]) {
                var i = Gt[t[0]], n = t.substr(1);
                e = Ot(e), "closest" === i && (e = e.parent(), n = n || "*"), t = e[i](n)
            } else t = Ot(t, e)
        } catch (o) {
            return null
        }
        return t.length ? t : null
    }

    function q(t) {
        return t && (h(t) ? t[0] : t)
    }

    function F(t) {
        return N(t) ? t : "true" === t || "1" === t || "" === t || "false" !== t && "0" !== t && t
    }

    function W(t) {
        var e = Number(t);
        return !isNaN(e) && e
    }

    function R(e) {
        return Xt(e) ? e : H(e) ? e.split(",").map(function (e) {
            return t.isNumeric(e) ? W(e) : F(e.trim())
        }) : [e]
    }

    function U(t) {
        if (H(t))if ("@" === t[0]) {
            var e = "media-" + t.substr(1);
            t = Qt[e] || (Qt[e] = parseFloat(J(e)))
        } else if (isNaN(t))return t;
        return !(!t || isNaN(t)) && "(min-width: " + t + "px)"
    }

    function Z(t, e, i) {
        return t === Boolean ? F(e) : t === Number ? W(e) : "jQuery" === t ? k(e, i) : "list" === t ? R(e) : "media" === t ? U(e) : t ? t(e) : e
    }

    function V(t) {
        return t ? "ms" === t.substr(-2) ? parseFloat(t) : 1e3 * parseFloat(t) : 0
    }

    function Y(t, e, i) {
        return t.replace(new RegExp(e + "|" + i, "mg"), function (t) {
            return t === e ? i : e
        })
    }

    function X(t, e, i) {
        return void 0 === e && (e = 0), void 0 === i && (i = 1), Math.min(Math.max(t, e), i)
    }

    function G() {
    }

    function Q(t, e, i) {
        return (window.getComputedStyle(q(t), i) || {})[e]
    }

    function J(t) {
        var e, i = document.documentElement, n = i.appendChild(document.createElement("div"));
        n.classList.add("var-" + t);
        try {
            e = Q(n, "content", ":before").replace(/^["'](.*)["']$/, "$1"), e = JSON.parse(e)
        } catch (o) {
        }
        return i.removeChild(n), e || void 0
    }

    function K(t) {
        return S(function (e, i) {
            var n = new Image;
            n.onerror = i, n.onload = function () {
                return e(n)
            }, n.src = t
        })
    }

    function tt(t, e) {
        var i, n = L(t), o = L(e).toLowerCase(), s = L(e), r = document.body || document.documentElement,
            a = (i = {}, i[t] = o, i["Webkit" + n] = "webkit" + s, i["Moz" + n] = o, i["o" + n] = "o" + s + " o" + o, i);
        for (t in a)if (void 0 !== r.style[t])return a[t]
    }

    function et() {
        pe.scheduled || (pe.scheduled = !0, te(pe.flush.bind(pe)))
    }

    function it(t) {
        for (var e; e = t.shift();)e()
    }

    function nt(t, e) {
        var i = t.indexOf(e);
        return !!~i && !!t.splice(i, 1)
    }

    function ot() {
    }

    function st(t, e) {
        return (e.y - t.y) / (e.x - t.x)
    }

    function rt(t, e) {
        function i(i) {
            o[i] = (fe[i] || ge)(t[i], e[i])
        }

        var n, o = {};
        if (e.mixins)for (var s = 0, r = e.mixins.length; s < r; s++)t = rt(t, e.mixins[s]);
        for (n in t)i(n);
        for (n in e)T(t, n) || i(n);
        return o
    }

    function at(t, e) {
        try {
            t.contentWindow.postMessage(JSON.stringify(Jt({event: "command"}, e)), "*")
        } catch (i) {
        }
    }

    function lt(t) {
        return S(function (e) {
            s(window, "message", function (t, i) {
                return e(i)
            }, !1, function (e) {
                var i = e.data;
                if (i && H(i)) {
                    try {
                        i = JSON.parse(i)
                    } catch (n) {
                        return
                    }
                    return i && t(i)
                }
            })
        })
    }

    function ct(e, i, n, o, s, r, a, l) {
        n = gt(n), o = gt(o);
        var c = {element: n, target: o};
        if (!e)return c;
        var h = ht(e), d = ht(i), u = d;
        return ft(u, n, h, -1), ft(u, o, d, 1), s = vt(s, h.width, h.height), r = vt(r, d.width, d.height), s.x += r.x, s.y += r.y, u.left += s.x, u.top += s.y, l = ht(l || window), a && t.each(be, function (t, e) {
            function i(e, i) {
                var n = u[p] + e + i - 2 * s[t];
                if (n >= l[p] && n + h[r] <= l[f])return u[p] = n, ["element", "target"].forEach(function (i) {
                    c[i][t] = e ? c[i][t] === be[t][1] ? be[t][2] : be[t][1] : c[i][t]
                }), !0
            }

            var r = e[0], p = e[1], f = e[2];
            if (a === !0 || ~a.indexOf(t)) {
                var g = n[t] === p ? -h[r] : n[t] === f ? h[r] : 0, v = o[t] === p ? d[r] : o[t] === f ? -d[r] : 0;
                if (u[p] < l[p] || u[p] + h[r] > l[f]) {
                    var m = h[r] / 2, w = "center" === o[t] ? -d[r] / 2 : 0;
                    "center" === n[t] && (i(m, w) || i(-m, -w)) || i(g, v)
                }
            }
        }), dt(e, u), c
    }

    function ht(t) {
        t = q(t);
        var e = pt(t), i = e.pageYOffset, n = e.pageXOffset;
        if (!t.ownerDocument)return {
            top: i,
            left: n,
            height: e.innerHeight,
            width: e.innerWidth,
            bottom: i + e.innerHeight,
            right: n + e.innerWidth
        };
        var o = !1;
        t.offsetHeight || (o = t.style.display, t.style.display = "block");
        var s = t.getBoundingClientRect();
        return o !== !1 && (t.style.display = o), {
            height: s.height,
            width: s.width,
            top: s.top + i,
            left: s.left + n,
            bottom: s.bottom + i,
            right: s.right + n
        }
    }

    function dt(t, e) {
        var i = e.left, n = e.top;
        Ot(t).offset({left: i - Ce.clientLeft, top: n - Ce.clientTop})
    }

    function ut(t) {
        return t = q(t), t.getBoundingClientRect().top + pt(t).pageYOffset
    }

    function pt(t) {
        return t && t.ownerDocument ? t.ownerDocument.defaultView : window
    }

    function ft(e, i, n, o) {
        t.each(be, function (t, s) {
            var r = s[0], a = s[1], l = s[2];
            i[t] === l ? e[a] += n[r] * o : "center" === i[t] && (e[a] += n[r] * o / 2)
        })
    }

    function gt(t) {
        var e = /left|center|right/, i = /top|center|bottom/;
        return t = (t || "").split(" "), 1 === t.length && (t = e.test(t[0]) ? t.concat(["center"]) : i.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), {
            x: e.test(t[0]) ? t[0] : "center",
            y: i.test(t[1]) ? t[1] : "center"
        }
    }

    function vt(t, e, i) {
        return t = (t || "").split(" "), {
            x: t[0] ? parseFloat(t[0]) * ("%" === t[0][t[0].length - 1] ? e / 100 : 1) : 0,
            y: t[1] ? parseFloat(t[1]) * ("%" === t[1][t[1].length - 1] ? i / 100 : 1) : 0
        }
    }

    function mt(t) {
        switch (t) {
            case"left":
                return "right";
            case"right":
                return "left";
            case"top":
                return "bottom";
            case"bottom":
                return "top";
            default:
                return t
        }
    }

    function wt(t) {
        var e = t.x1, i = t.x2, n = t.y1, o = t.y2;
        return Math.abs(e - i) >= Math.abs(n - o) ? e - i > 0 ? "Left" : "Right" : n - o > 0 ? "Up" : "Down"
    }

    function yt() {
        we && clearTimeout(we), ye && clearTimeout(ye), xe && clearTimeout(xe), we = ye = xe = null, $e = {}
    }

    function xt(t) {
        return Te || "touch" === (t.originalEvent || t).pointerType
    }

    function kt(t) {
        Ht.on((e = {}, e["click." + t] = function (t) {
            Pe && Pe.bgClose && !t.isDefaultPrevented() && !d(t.target, Pe.panel) && Pe.hide()
        }, e["keydown." + t] = function (t) {
            27 === t.keyCode && Pe && Pe.escClose && (t.preventDefault(), Pe.hide())
        }, e));
        var e
    }

    function bt(t) {
        Ht.off("click." + t).off("keydown." + t)
    }

    function Ct(t) {
        function e(t) {
            var e = t - Date.now();
            return {
                total: e,
                seconds: e / 1e3 % 60,
                minutes: e / 1e3 / 60 % 60,
                hours: e / 1e3 / 60 / 60 % 24,
                days: e / 1e3 / 60 / 60 / 24
            }
        }

        Ct.installed || t.component("countdown", {
            mixins: [t.mixin["class"]],
            attrs: !0,
            props: {date: String, clsWrapper: String},
            defaults: {date: "", clsWrapper: ".uk-countdown-%unit%"},
            computed: {
                date: function () {
                    return Date.parse(this.$props.date)
                }, days: function () {
                    return this.$el.find(this.clsWrapper.replace("%unit%", "days"))
                }, hours: function () {
                    return this.$el.find(this.clsWrapper.replace("%unit%", "hours"))
                }, minutes: function () {
                    return this.$el.find(this.clsWrapper.replace("%unit%", "minutes"))
                }, seconds: function () {
                    return this.$el.find(this.clsWrapper.replace("%unit%", "seconds"))
                }, units: function () {
                    var t = this;
                    return ["days", "hours", "minutes", "seconds"].filter(function (e) {
                        return t[e].length
                    })
                }
            },
            connected: function () {
                this.start()
            },
            disconnected: function () {
                var t = this;
                this.stop(), this.units.forEach(function (e) {
                    return t[e].empty()
                })
            },
            update: {
                write: function () {
                    var t = this, i = e(this.date);
                    i.total <= 0 && (this.stop(), i.days = i.hours = i.minutes = i.seconds = 0), this.units.forEach(function (e) {
                        var n = String(Math.floor(i[e]));
                        if (n = n.length < 2 ? "0" + n : n, t[e].text() !== n) {
                            var o = t[e];
                            n = n.split(""), n.length !== o.children().length && o.empty().append(n.map(function () {
                                return "<span></span>"
                            }).join("")), n.forEach(function (t, e) {
                                return o[0].childNodes[e].innerText = t
                            })
                        }
                    })
                }
            },
            methods: {
                start: function () {
                    var t = this;
                    this.stop(), this.date && this.units.length && (this.$emit(), this.timer = setInterval(function () {
                        return t.$emit()
                    }, 1e3))
                }, stop: function () {
                    this.timer && (clearInterval(this.timer), this.timer = null)
                }
            }
        })
    }

    function $t(t) {
        function e(t, e, i, n, s, r) {
            t = t in y ? y[t] : y.slide;
            var a = t.show(s);
            return {
                dir: s, current: i, next: n, show: function (t, o) {
                    var s = this;
                    return void 0 === o && (o = 0), t -= Math.round(t * o), this.translate(o), g.all([m.start(i, a[0], t, e), m.start(n, a[1], t, e)]).then(function () {
                        s.reset(), r()
                    }, l)
                }, stop: function () {
                    return g.all([m.stop(n), m.stop(i)])
                }, cancel: function () {
                    return g.all([m.cancel(n), m.cancel(i)])
                }, reset: function () {
                    for (var t in a[0])o([n[0], i[0]]).css(t, "")
                }, forward: function (t) {
                    var e = this, o = this.percent();
                    return g.all([m.cancel(n), m.cancel(i)]).then(function () {
                        return e.show(t, o)
                    })
                }, translate: function (e) {
                    var o = t.translate(e, s);
                    i.css(o[0]), n.css(o[1])
                }, percent: function () {
                    return t.percent(i, n, s)
                }
            }
        }

        function i(t) {
            return ~~t
        }

        if (!$t.installed) {
            var n = t.util, o = n.$, s = n.doc, r = n.fastdom, a = n.getIndex, l = n.noop, c = n.on, h = n.off,
                d = n.pointerDown, u = n.pointerMove, p = n.pointerUp, f = n.preventClick, g = n.promise,
                v = n.requestAnimationFrame, m = n.Transition;
            t.mixin.slideshow = {
                attrs: !0,
                props: {autoplay: Number, animation: String, transition: String, duration: Number},
                defaults: {
                    autoplay: 0,
                    animation: "slide",
                    transition: "linear",
                    duration: 400,
                    index: 0,
                    stack: [],
                    threshold: 10,
                    percent: 0,
                    clsActive: "uk-active"
                },
                computed: {
                    slides: function () {
                        return this.list.children("." + this.clsItem)
                    }, forwardDuration: function () {
                        return this.duration / 4
                    }
                },
                init: function () {
                    var t = this;
                    ["start", "move", "end"].forEach(function (e) {
                        var i = t[e];
                        t[e] = function (e) {
                            e = e.originalEvent || e, t.prevPos = t.pos, t.pos = (e.touches && e.touches[0] || e).pageX, i(e)
                        }
                    })
                },
                connected: function () {
                    this.startAutoplay()
                },
                events: [{
                    name: "click", delegate: function () {
                        return "[" + this.attrItem + "]"
                    }, handler: function (t) {
                        t.preventDefault(), this.show(o(t.currentTarget).blur().attr(this.attrItem))
                    }
                }, {
                    name: d, delegate: function () {
                        return "." + this.clsItem
                    }, handler: "start"
                }, {name: d, handler: "stopAutoplay"}, {
                    name: "mouseenter", filter: function () {
                        return this.autoplay
                    }, handler: function () {
                        this.isHovering = !0
                    }
                }, {
                    name: "mouseleave", filter: function () {
                        return this.autoplay
                    }, handler: function () {
                        this.isHovering = !1
                    }
                }],
                methods: {
                    start: function (t) {
                        if (!(t.button && 0 !== t.button || this.slides.length < 2)) {
                            t.preventDefault();
                            var e = 0;
                            if (this.stack.length) {
                                this.percent = this._animation.percent();
                                var i = this._animation.dir;
                                e = this.percent * i, this.stack.splice(0, this.stack.length), this._animation.cancel(), this._animation.translate(Math.abs(e)), this.index = this.getIndex(this.index - i), this.touching = !0
                            }
                            c(s, u, this.move, !0), c(s, p, this.end, !0);
                            var n = this.slides.eq(this.index);
                            this.touch = {el: n, start: this.pos + (e ? n.outerWidth() * e : 0)}
                        }
                    }, move: function (n) {
                        var o = this;
                        n.preventDefault();
                        var s = this.touch, r = s.start, c = s.el;
                        if (!(this.pos === this.prevPos || !this.touching && Math.abs(r - this.pos) < this.threshold)) {
                            this.touching = !0;
                            var h = (this.pos - r) / c.outerWidth();
                            if (this.percent !== h) {
                                var d = i(this.percent) !== i(h), u = this.getIndex(this.index - i(h)),
                                    p = this.slides.eq(u), f = h < 0 ? 1 : -1,
                                    g = a(h < 0 ? "next" : "previous", this.slides, u), v = this.slides.eq(g);
                                this.slides.each(function (t, e) {
                                    return o.$toggleClass(e, o.clsActive, t === u || t === g)
                                }), d && this._animation && this._animation.reset(), this._animation = new e(this.animation, this.transition, p, v, f, l), this._animation.translate(Math.abs(h % 1)), this.percent = h, t.update(null, p), t.update(null, v)
                            }
                        }
                    }, end: function (t) {
                        if (t.preventDefault(), h(s, u, this.move, !0), h(s, p, this.end, !0), this.touching) {
                            var e = this.percent;
                            this.percent = Math.abs(this.percent) % 1, this.index = this.getIndex(this.index - i(e)), this.percent < .2 && (this.index = this.getIndex(e > 0 ? "previous" : "next"), this.percent = 1 - this.percent, e *= -1), this.show(e > 0 ? "previous" : "next", !0), f()
                        }
                        this.pos = this.prevPos = this.touch = this.touching = this.percent = null
                    }, show: function (i, n) {
                        var o = this;
                        if (void 0 === n && (n = !1), n || !this.touch) {
                            if (this.stack[n ? "unshift" : "push"](i), !n && this.stack.length > 1)return void(2 === this.stack.length && this._animation.forward(this.forwardDuration));
                            var s = this.slides.hasClass("uk-active"),
                                a = "next" === i ? 1 : "previous" === i ? -1 : i < this.index ? -1 : 1;
                            if (i = this.getIndex(i), s && i === this.index)return void this.stack[n ? "shift" : "pop"]();
                            var l = s && this.slides.eq(this.index), c = this.slides.eq(i);
                            this.$el.trigger("beforeitemshow", [this, c]), l && this.$el.trigger("beforeitemhide", [this, l]), this.index = i, this.$addClass(c, this.clsActive), this._animation = new e(l ? this.animation : "scale", this.transition, l || c, c, a, function () {
                                l && o.$removeClass(l, o.clsActive), o.stack.shift(), o.stack.length ? v(function () {
                                    return o.show(o.stack.shift(), !0)
                                }) : o._animation = null, o.$el.trigger("itemshown", [o, c]), t.update(null, c), l && (o.$el.trigger("itemhidden", [o, l]), t.update(null, l))
                            }), this._animation.show(this.stack.length > 1 ? this.forwardDuration : this.duration, this.percent), this.$el.trigger("itemshow", [this, c]), l && (this.$el.trigger("itemhide", [this, l]), t.update(null, l)), t.update(null, c), r.flush()
                        }
                    }, getIndex: function (t) {
                        return void 0 === t && (t = this.index), a(t, this.slides, this.index)
                    }, startAutoplay: function () {
                        var t = this;
                        this.stopAutoplay(), this.autoplay && (this.interval = setInterval(function () {
                            !t.isHovering && t.show("next")
                        }, this.autoplay))
                    }, stopAutoplay: function () {
                        this.interval && clearInterval(this.interval)
                    }
                }
            };
            var w = .2, y = {
                fade: {
                    show: function () {
                        return [{opacity: 0}, {opacity: 1}]
                    }, percent: function (t) {
                        return 1 - t.css("opacity")
                    }, translate: function (t) {
                        return [{opacity: 1 - t}, {opacity: t}]
                    }
                }, slide: {
                    show: function (t) {
                        return [{transform: "translate3d(" + t * -100 + "%, 0, 0)"}, {transform: "translate3d(0, 0, 0)"}]
                    }, percent: function (t) {
                        return Math.abs(t.css("transform").split(",")[4] / t.outerWidth())
                    }, translate: function (t, e) {
                        return [{transform: "translate3d(" + e * -100 * t + "%, 0, 0)"}, {transform: "translate3d(" + 100 * e * (1 - t) + "%, 0, 0)"}]
                    }
                }, scale: {
                    show: function () {
                        return [{opacity: 0, transform: "scale3d(" + (1 - w) + ", " + (1 - w) + ", 1)"}, {
                            opacity: 1,
                            transform: "scale3d(1, 1, 1)"
                        }]
                    }, percent: function (t) {
                        return 1 - t.css("opacity")
                    }, translate: function (t) {
                        var e = 1 - w * t, i = 1 - w + w * t;
                        return [{opacity: 1 - t, transform: "scale3d(" + e + ", " + e + ", 1)"}, {
                            opacity: t,
                            transform: "scale3d(" + i + ", " + i + ", 1)"
                        }]
                    }
                }, swipe: {
                    show: function (t) {
                        return t < 0 ? [{opacity: 1, transform: "translate3d(100%, 0, 0)", zIndex: 0}, {
                            opacity: 1,
                            transform: "scale3d(1, 1, 1) translate3d(0, 0, 0)",
                            zIndex: -1
                        }] : [{
                            opacity: .3,
                            transform: "scale3d(" + (1 - w) + ", " + (1 - w) + ", 1) translate3d(-20%, 0, 0)",
                            zIndex: -1
                        }, {opacity: 1, transform: "translate3d(0, 0, 0)", zIndex: 0}]
                    }, percent: function x(t, e, i) {
                        var n = i < 0 ? t : e, x = Math.abs(n.css("transform").split(",")[4] / n.outerWidth());
                        return i < 0 ? x : 1 - x
                    }, translate: function (t, e) {
                        var i;
                        return e < 0 ? (i = 1 - w * (1 - t), [{
                            opacity: 1,
                            transform: "translate3d(" + 100 * t + "%, 0, 0)",
                            zIndex: 0
                        }, {
                            opacity: .3 + .7 * t,
                            transform: "scale3d(" + i + ", " + i + ", 1) translate3d(" + -20 * (1 - t) + "%, 0, 0)",
                            zIndex: -1
                        }]) : (i = 1 - w * t, [{
                            opacity: 1 - .7 * t,
                            transform: "scale3d(" + i + ", " + i + ", 1) translate3d(" + -20 * t + "%, 0, 0)",
                            zIndex: -1
                        }, {opacity: 1, transform: "translate3d(" + 100 * (1 - t) + "%, 0, 0)", zIndex: 0}])
                    }
                }
            }
        }
    }

    function Tt(t) {
        function e(t, e, i) {
            void 0 === i && (i = "in"), t.each(function (n) {
                return a[i](t.eq(n).attr("hidden", !1), e).then(function () {
                    "out" === i && t.eq(n).attr("hidden", !0)
                })
            })
        }

        function i(t, e, i) {
            return '<iframe src="' + t + '" width="' + e + '" height="' + i + '" style="max-width: 100%; box-sizing: border-box;" uk-video uk-responsive></iframe>'
        }

        if (!Tt.installed) {
            t.use($t);
            var n = t.mixin, o = t.util, s = o.$, r = o.$trigger, a = o.Animation, l = o.ajax, c = o.assign, h = o.doc,
                d = o.docElement, u = o.getData, p = o.getImage, f = o.pointerDown, g = o.pointerMove, v = o.Transition;
            t.component("lightbox", {
                attrs: !0,
                props: {animation: String, toggle: String},
                defaults: {animation: void 0, toggle: "a"},
                computed: {
                    toggles: function m() {
                        var t = this, m = s(this.toggle, this.$el);
                        return this._changed = !this._toggles || m.length !== this._toggles.length || m.toArray().some(function (e, i) {
                                return e !== t._toggles.get(i)
                            }), this._toggles = m
                    }
                },
                disconnected: function () {
                    this.panel && (this.panel.$destroy(!0), this.panel = null)
                },
                events: [{
                    name: "click", delegate: function () {
                        return this.toggle + ":not(.uk-disabled)"
                    }, handler: function (t) {
                        t.preventDefault(), this.show(this.toggles.index(s(t.currentTarget).blur()))
                    }
                }],
                update: function () {
                    this.panel && this.animation && (this.panel.$props.animation = this.animation, this.panel.$emit()), this.toggles.length && this._changed && this.panel && (this.panel.$destroy(!0), this._init())
                },
                methods: {
                    _init: function () {
                        return this.panel = this.panel || t.lightboxPanel({
                                animation: this.animation,
                                items: this.toggles.toArray().reduce(function (t, e) {
                                    return t.push(["href", "caption", "type"].reduce(function (t, i) {
                                        return t["href" === i ? "source" : i] = u(e, i), t
                                    }, {})), t
                                }, [])
                            })
                    }, show: function (t) {
                        return this.panel || this._init(), this.panel.show(t)
                    }, hide: function () {
                        return this.panel && this.panel.hide()
                    }
                }
            }), t.component("lightbox-panel", {
                mixins: [n.togglable, n.slideshow],
                functional: !0,
                defaults: {
                    preload: 1,
                    delayControls: 3e3,
                    items: [],
                    cls: "uk-open",
                    clsPage: "uk-lightbox-page",
                    clsItem: "uk-lightbox-item",
                    attrItem: "uk-lightbox-item",
                    template: ' <div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close uk-toggle="!.uk-lightbox"></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium" href="#" uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium" href="#" uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center"></div> </div>'
                },
                computed: {
                    container: function () {
                        return s(this.$props.container === !0 && t.container || this.$props.container || t.container)
                    }
                },
                created: function () {
                    var t = this;
                    this.$mount(s(this.template).appendTo(this.container)[0]), this.list = this.$el.find(".uk-lightbox-items"), this.toolbars = this.$el.find(".uk-lightbox-toolbar"), this.nav = this.$el.find("a[uk-lightbox-item]"), this.caption = this.$el.find(".uk-lightbox-caption"), this.items.forEach(function (e, i) {
                        return t.list.append('<li class="' + t.clsItem + " item-" + i + '"></li>')
                    })
                },
                events: [{name: g + " " + f + " keydown", handler: "showControls"}, {
                    name: "click",
                    self: !0,
                    handler: function (t) {
                        t.preventDefault(), this.hide()
                    }
                }, {
                    name: "click", self: !0, delegate: function () {
                        return "." + this.clsItem
                    }, handler: function (t) {
                        t.preventDefault(), this.hide()
                    }
                }, {
                    name: "show", self: !0, handler: function () {
                        this.$addClass(d, this.clsPage)
                    }
                }, {
                    name: "shown", self: !0, handler: function () {
                        this.$addClass(this.caption, "uk-animation-slide-bottom"), this.toolbars.attr("hidden", !0), this.nav.attr("hidden", !0), this.showControls()
                    }
                }, {
                    name: "hide", self: !0, handler: function () {
                        this.$removeClass(this.caption, "uk-animation-slide-bottom"), this.toolbars.attr("hidden", !0), this.nav.attr("hidden", !0)
                    }
                }, {
                    name: "hidden", self: !0, handler: function () {
                        this.$removeClass(d, this.clsPage)
                    }
                }, {
                    name: "keydown", el: function () {
                        return h
                    }, handler: function (t) {
                        if (this.isToggled(this.$el))switch (t.keyCode) {
                            case 27:
                                this.hide();
                                break;
                            case 37:
                                this.show("previous");
                                break;
                            case 39:
                                this.show("next")
                        }
                    }
                }, {
                    name: "toggle", handler: function (t) {
                        t.preventDefault(), this.toggle()
                    }
                }, {
                    name: "beforeitemshow", self: !0, handler: function () {
                        this.isToggled() || this.toggleNow(this.$el, !0)
                    }
                }, {
                    name: "itemshow", self: !0, handler: function () {
                        var t = this, e = this.getItem().caption;
                        this.caption.toggle(!!e).html(e);
                        for (var i = 0; i <= this.preload; i++)t.loadItem(t.getIndex(t.index + i)), t.loadItem(t.getIndex(t.index - i))
                    }
                }, {
                    name: "itemload", handler: function (t, e) {
                        var n, o = this, r = e.source, a = e.type;
                        if (this.setItem(e, "<span uk-spinner></span>"), r) {
                            if ("image" === a || r.match(/\.(jp(e)?g|png|gif|svg)$/i)) p(r).then(function (t) {
                                return o.setItem(e, '<img width="' + t.width + '" height="' + t.height + '" src="' + r + '">')
                            }, function () {
                                return o.setError(e)
                            }); else if ("video" === a || r.match(/\.(mp4|webm|ogv)$/i))var c = s("<video controls playsinline uk-video></video>").on("loadedmetadata", function () {
                                return o.setItem(e, c.attr({width: c[0].videoWidth, height: c[0].videoHeight}))
                            }).on("error", function () {
                                return o.setError(e)
                            }).attr("src", r); else if ("iframe" === a) this.setItem(e, '<iframe class="uk-lightbox-iframe" src="' + r + '" frameborder="0" allowfullscreen></iframe>'); else if (n = r.match(/\/\/.*?youtube\.[a-z]+\/watch\?v=([^&\s]+)/) || r.match(/youtu\.be\/(.*)/)) {
                                var h = n[1], d = function (t, n) {
                                    return void 0 === t && (t = 640), void 0 === n && (n = 450), o.setItem(e, i("//www.youtube.com/embed/" + h, t, n))
                                };
                                p("//img.youtube.com/vi/" + h + "/maxresdefault.jpg").then(function (t) {
                                    120 === t.width && 90 === t.height ? p("//img.youtube.com/vi/" + h + "/0.jpg").then(function (t) {
                                        return d(t.width, t.height)
                                    }, d) : d(t.width, t.height)
                                }, d)
                            } else {
                                if (!(n = r.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/)))return;
                                l({
                                    type: "GET",
                                    url: "//vimeo.com/api/oembed.json?url=" + encodeURI(r),
                                    jsonp: "callback",
                                    dataType: "jsonp"
                                }).then(function (t) {
                                    var s = t.height, r = t.width;
                                    return o.setItem(e, i("//player.vimeo.com/video/" + n[2], r, s))
                                })
                            }
                            return !0
                        }
                    }
                }],
                methods: {
                    toggle: function () {
                        return this.isToggled() ? this.hide() : this.show()
                    }, hide: function () {
                        this.isToggled() && this.toggleNow(this.$el, !1), this.slides.removeClass(this.clsActive).each(function (t, e) {
                            return v.stop(e)
                        }), delete this.index, delete this.percent, delete this._animation
                    }, loadItem: function (t) {
                        void 0 === t && (t = this.index);
                        var e = this.getItem(t);
                        e.content || r(this.$el, "itemload", [e], !0).result || this.setError(e)
                    }, getItem: function (t) {
                        return void 0 === t && (t = this.index), this.items[t] || {}
                    }, setItem: function (e, i) {
                        c(e, {content: i});
                        var n = this.slides.eq(this.items.indexOf(e)).html(i);
                        this.$el.trigger("itemloaded", [this, n]), t.update(null, n)
                    }, setError: function (t) {
                        this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>')
                    }, showControls: function () {
                        clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), this.toolbars.attr("hidden") && (e(this.toolbars.eq(0), "uk-animation-slide-top"), e(this.toolbars.eq(1), "uk-animation-slide-bottom"), this.nav.attr("hidden", this.items.length <= 1), this.items.length > 1 && e(this.nav, "uk-animation-fade"))
                    }, hideControls: function () {
                        this.toolbars.attr("hidden") || (e(this.toolbars.eq(0), "uk-animation-slide-top", "out"), e(this.toolbars.eq(1), "uk-animation-slide-bottom", "out"), this.items.length > 1 && e(this.nav, "uk-animation-fade", "out"))
                    }
                }
            })
        }
    }

    function St(t) {
        if (!St.installed) {
            var e = t.util, i = e.$, n = e.each, o = e.pointerEnter, s = e.pointerLeave, r = e.Transition, a = {};
            t.component("notification", {
                functional: !0,
                args: ["message", "status"],
                defaults: {
                    message: "",
                    status: "",
                    timeout: 5e3,
                    group: null,
                    pos: "top-center",
                    onClose: null,
                    clsClose: "uk-notification-close",
                    clsMsg: "uk-notification-message"
                },
                created: function () {
                    a[this.pos] || (a[this.pos] = i('<div class="uk-notification uk-notification-' + this.pos + '"></div>').appendTo(t.container)), this.$mount(i('<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href="#" class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>").appendTo(a[this.pos].show())[0])
                },
                ready: function () {
                    var t = this, e = parseInt(this.$el.css("margin-bottom"), 10);
                    r.start(this.$el.css({
                        opacity: 0,
                        marginTop: -1 * this.$el.outerHeight(),
                        marginBottom: 0
                    }), {opacity: 1, marginTop: 0, marginBottom: e}).then(function () {
                        t.timeout && (t.timer = setTimeout(t.close, t.timeout))
                    })
                },
                events: (l = {
                    click: function (t) {
                        i(t.target).closest('a[href="#"]').length && t.preventDefault(), this.close()
                    }
                }, l[o] = function () {
                    this.timer && clearTimeout(this.timer)
                }, l[s] = function () {
                    this.timeout && (this.timer = setTimeout(this.close, this.timeout))
                }, l),
                methods: {
                    close: function (t) {
                        var e = this, i = function () {
                            e.onClose && e.onClose(), e.$el.trigger("close", [e]).remove(), a[e.pos].children().length || a[e.pos].hide()
                        };
                        this.timer && clearTimeout(this.timer), t ? i() : r.start(this.$el, {
                            opacity: 0,
                            marginTop: -1 * this.$el.outerHeight(),
                            marginBottom: 0
                        }).then(i)
                    }
                }
            });
            var l;
            t.notification.closeAll = function (e, i) {
                n(t.instances, function (t, n) {
                    "notification" !== n.$options.name || e && e !== n.group || n.close(i)
                })
            }
        }
    }

    function Lt(t) {
        function e(i) {
            return t.getComponent(i, "sortable") || i.parentNode && e(i.parentNode)
        }

        if (!Lt.installed) {
            var i = t.mixin, n = t.util, o = n.$, s = n.assign, r = n.docElement, a = n.docHeight, l = n.fastdom,
                c = n.getDimensions, h = n.isWithin, d = n.offset, u = n.offsetTop, p = n.pointerDown,
                f = n.pointerMove, g = n.pointerUp, v = n.preventClick, m = n.promise, w = n.win;
            t.component("sortable", {
                mixins: [i["class"]],
                props: {
                    group: String,
                    animation: Number,
                    threshold: Number,
                    clsItem: String,
                    clsPlaceholder: String,
                    clsDrag: String,
                    clsDragState: String,
                    clsBase: String,
                    clsNoDrag: String,
                    clsEmpty: String,
                    clsCustom: String,
                    handle: String
                },
                defaults: {
                    group: !1,
                    animation: 150,
                    threshold: 5,
                    clsItem: "uk-sortable-item",
                    clsPlaceholder: "uk-sortable-placeholder",
                    clsDrag: "uk-sortable-drag",
                    clsDragState: "uk-drag",
                    clsBase: "uk-sortable",
                    clsNoDrag: "uk-sortable-nodrag",
                    clsEmpty: "uk-sortable-empty",
                    clsCustom: "",
                    handle: !1
                },
                init: function () {
                    var t = this;
                    ["init", "start", "move", "end"].forEach(function (e) {
                        var i = t[e];
                        t[e] = function (e) {
                            e = e.originalEvent || e, t.scrollY = window.scrollY;
                            var n = e.touches && e.touches[0] || e, o = n.pageX, s = n.pageY;
                            t.pos = {x: o, y: s}, i(e)
                        }
                    })
                },
                events: (y = {}, y[p] = "init", y),
                update: {
                    write: function () {
                        var t = this;
                        if (this.clsEmpty && this.$toggleClass(this.clsEmpty, !this.$el.children().length), this.drag) {
                            d(this.drag, {top: this.pos.y + this.origin.top, left: this.pos.x + this.origin.left});
                            var e = u(this.drag), i = e + this.drag[0].offsetHeight;
                            e > 0 && e < this.scrollY ? setTimeout(function () {
                                return w.scrollTop(t.scrollY - 5)
                            }, 5) : i < a() && i > window.innerHeight + this.scrollY && setTimeout(function () {
                                    return w.scrollTop(t.scrollY + 5)
                                }, 5)
                        }
                    }
                },
                methods: {
                    init: function (t) {
                        var e = o(t.target), i = this.$el.children().filter(function (e, i) {
                            return h(t.target, i)
                        });
                        !i.length || e.is(":input") || this.handle && !h(e, this.handle) || t.button && 0 !== t.button || h(e, "." + this.clsNoDrag) || t.defaultPrevented || (t.preventDefault(), this.touched = [this], this.placeholder = i, this.origin = s({
                            target: e,
                            index: this.placeholder.index()
                        }, this.pos), r.on(f, this.move), r.on(g, this.end), w.on("scroll", this.scroll), this.threshold || this.start(t))
                    }, start: function (e) {
                        this.drag = o(this.placeholder[0].outerHTML.replace(/^<li/i, "<div").replace(/li>$/i, "div>")).attr("uk-no-boot", "").addClass(this.clsDrag + " " + this.clsCustom).css({
                            boxSizing: "border-box",
                            width: this.placeholder.outerWidth(),
                            height: this.placeholder.outerHeight()
                        }).css(this.placeholder.css(["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"])).appendTo(t.container), this.drag.children().first().height(this.placeholder.children().height());
                        var i = c(this.placeholder), n = i.left, a = i.top;
                        s(this.origin, {
                            left: n - this.pos.x,
                            top: a - this.pos.y
                        }), this.placeholder.addClass(this.clsPlaceholder), this.$el.children().addClass(this.clsItem), r.addClass(this.clsDragState), this.$el.trigger("start", [this, this.placeholder, this.drag]), this.move(e)
                    }, move: function x(t) {
                        if (!this.drag)return void((Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t));
                        this.$emit();
                        var i = "mousemove" === t.type ? t.target : document.elementFromPoint(this.pos.x - document.body.scrollLeft, this.pos.y - document.body.scrollTop),
                            n = e(i), s = e(this.placeholder[0]), x = n !== s;
                        if (n && !h(i, this.placeholder) && (!x || n.group && n.group === s.group)) {
                            if (i = n.$el.is(i.parentNode) && o(i) || n.$el.children().has(i), x) s.remove(this.placeholder); else if (!i.length)return;
                            n.insert(this.placeholder, i), ~this.touched.indexOf(n) || this.touched.push(n)
                        }
                    }, scroll: function k() {
                        var k = window.scrollY;
                        k !== this.scrollY && (this.pos.y += k - this.scrollY,
                            this.scrollY = k, this.$emit())
                    }, end: function (t) {
                        if (r.off(f, this.move), r.off(g, this.end), w.off("scroll", this.scroll), !this.drag)return void("mouseup" !== t.type && h(t.target, "a[href]") && (location.href = o(t.target).closest("a[href]").attr("href")));
                        v();
                        var i = e(this.placeholder[0]);
                        this === i ? this.origin.index !== this.placeholder.index() && this.$el.trigger("change", [this, this.placeholder, "moved"]) : (i.$el.trigger("change", [i, this.placeholder, "added"]), this.$el.trigger("change", [this, this.placeholder, "removed"])), this.$el.trigger("stop", [this]), this.drag.remove(), this.drag = null;
                        var n = this.touched.map(function (t) {
                            return t.clsPlaceholder + " " + t.clsItem
                        }).join(" ");
                        this.touched.forEach(function (t) {
                            return t.$el.children().removeClass(n)
                        }), r.removeClass(this.clsDragState)
                    }, insert: function b(t, e) {
                        var i = this;
                        this.$el.children().addClass(this.clsItem);
                        var b = function () {
                            e.length ? !i.$el.has(t).length || t.prevAll().filter(e).length ? t.insertBefore(e) : t.insertAfter(e) : i.$el.append(t)
                        };
                        this.animation ? this.animate(b) : b()
                    }, remove: function (t) {
                        this.$el.has(t).length && (this.animation ? this.animate(function () {
                            return t.detach()
                        }) : t.detach())
                    }, animate: function (t) {
                        var e = this, i = [], n = this.$el.children().toArray().map(function (t) {
                            return t = o(t), i.push(s({
                                position: "absolute",
                                pointerEvents: "none",
                                width: t.outerWidth(),
                                height: t.outerHeight()
                            }, t.position())), t
                        }), r = {position: "", width: "", height: "", pointerEvents: "", top: "", left: ""};
                        t(), n.forEach(function (t) {
                            return t.stop()
                        }), this.$el.children().css(r), this.$update("update", !0), l.flush(), this.$el.css("min-height", this.$el.height());
                        var a = n.map(function (t) {
                            return t.position()
                        });
                        m.all(n.map(function (t, n) {
                            return t.css(i[n]).animate(a[n], e.animation).promise()
                        })).then(function () {
                            e.$el.css("min-height", "").children().css(r), e.$update("update", !0), l.flush()
                        })
                    }
                }
            });
            var y
        }
    }

    function At(t) {
        if (!At.installed) {
            var e = t.util, i = t.mixin, n = e.$, o = e.doc, s = e.fastdom, r = e.flipPosition, a = e.isTouch,
                l = e.isWithin, c = e.pointerDown, h = e.pointerEnter, d = e.pointerLeave, u = [];
            t.component("tooltip", {
                attrs: !0,
                mixins: [i.togglable, i.position],
                props: {delay: Number, container: Boolean, title: String},
                defaults: {
                    pos: "top",
                    title: "",
                    delay: 0,
                    animation: ["uk-animation-scale-up"],
                    duration: 100,
                    cls: "uk-active",
                    clsPos: "uk-tooltip",
                    container: !0
                },
                computed: {
                    container: function () {
                        return n(this.$props.container === !0 && t.container || this.$props.container || t.container)
                    }
                },
                connected: function () {
                    var t = this;
                    s.mutate(function () {
                        return t.$el.removeAttr("title").attr("aria-expanded", !1)
                    })
                },
                disconnected: function () {
                    this.hide()
                },
                methods: {
                    show: function () {
                        var t = this;
                        ~u.indexOf(this) || (u.forEach(function (t) {
                            return t.hide()
                        }), u.push(this), o.on("click." + this.$options.name, function (e) {
                            l(e.target, t.$el) || t.hide()
                        }), clearTimeout(this.showTimer), this.tooltip = n('<div class="' + this.clsPos + '" aria-hidden="true"><div class="' + this.clsPos + '-inner">' + this.title + "</div></div>").appendTo(this.container), this.$el.attr("aria-expanded", !0), this.positionAt(this.tooltip, this.$el), this.origin = "y" === this.getAxis() ? r(this.dir) + "-" + this.align : this.align + "-" + r(this.dir), this.showTimer = setTimeout(function () {
                            t.toggleElement(t.tooltip, !0), t.hideTimer = setInterval(function () {
                                t.$el.is(":visible") || t.hide()
                            }, 150)
                        }, this.delay))
                    }, hide: function () {
                        var t = u.indexOf(this);
                        !~t || this.$el.is("input") && this.$el[0] === document.activeElement || (u.splice(t, 1), clearTimeout(this.showTimer), clearInterval(this.hideTimer), this.$el.attr("aria-expanded", !1), this.toggleElement(this.tooltip, !1), this.tooltip && this.tooltip.remove(), this.tooltip = !1, o.off("click." + this.$options.name))
                    }
                },
                events: (p = {blur: "hide"}, p["focus " + h + " " + c] = function (t) {
                    t.type === c && a(t) || this.show()
                }, p[d] = function (t) {
                    a(t) || this.hide()
                }, p)
            });
            var p
        }
    }

    function Mt(t) {
        function e(t, e) {
            return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"))
        }

        function i(t, e) {
            for (var i = [], n = 0; n < t.length; n += e) {
                for (var o = [], s = 0; s < e; s++)o.push(t[n + s]);
                i.push(o)
            }
            return i
        }

        if (!Mt.installed) {
            var n = t.util, o = n.$, s = n.ajax, r = n.on;
            t.component("upload", {
                props: {
                    allow: String,
                    clsDragover: String,
                    concurrent: Number,
                    dataType: String,
                    mime: String,
                    msgInvalidMime: String,
                    msgInvalidName: String,
                    multiple: Boolean,
                    name: String,
                    params: Object,
                    type: String,
                    url: String
                },
                defaults: {
                    allow: !1,
                    clsDragover: "uk-dragover",
                    concurrent: 1,
                    dataType: void 0,
                    mime: !1,
                    msgInvalidMime: "Invalid File Type: %s",
                    msgInvalidName: "Invalid File Name: %s",
                    multiple: !1,
                    name: "files[]",
                    params: {},
                    type: "POST",
                    url: "",
                    abort: null,
                    beforeAll: null,
                    beforeSend: null,
                    complete: null,
                    completeAll: null,
                    error: null,
                    fail: function (t) {
                        alert(t)
                    },
                    load: null,
                    loadEnd: null,
                    loadStart: null,
                    progress: null
                },
                events: {
                    change: function (t) {
                        o(t.target).is('input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "")
                    }, drop: function (t) {
                        t.preventDefault(), t.stopPropagation();
                        var e = t.originalEvent.dataTransfer;
                        e && e.files && (this.$removeClass(this.clsDragover), this.upload(e.files))
                    }, dragenter: function (t) {
                        t.preventDefault(), t.stopPropagation()
                    }, dragover: function (t) {
                        t.preventDefault(), t.stopPropagation(), this.$addClass(this.clsDragover)
                    }, dragleave: function (t) {
                        t.preventDefault(), t.stopPropagation(), this.$removeClass(this.clsDragover)
                    }
                },
                methods: {
                    upload: function a(t) {
                        var n = this;
                        if (t.length) {
                            this.$el.trigger("upload", [t]);
                            for (var l = 0; l < t.length; l++) {
                                if (n.allow && !e(n.allow, t[l].name))return void n.fail(n.msgInvalidName.replace(/%s/, n.allow));
                                if (n.mime && !e(n.mime, t[l].type))return void n.fail(n.msgInvalidMime.replace(/%s/, n.mime))
                            }
                            this.multiple || (t = [t[0]]), this.beforeAll && this.beforeAll(this, t);
                            var c = i(t, this.concurrent), a = function (t) {
                                var e = new FormData;
                                t.forEach(function (t) {
                                    return e.append(n.name, t)
                                });
                                for (var i in n.params)e.append(i, n.params[i]);
                                s({
                                    data: e,
                                    url: n.url,
                                    type: n.type,
                                    dataType: n.dataType,
                                    beforeSend: n.beforeSend,
                                    complete: [n.complete, function (t, e) {
                                        c.length ? a(c.shift()) : n.completeAll && n.completeAll(t), "abort" === e && n.abort && n.abort(t)
                                    }],
                                    cache: !1,
                                    contentType: !1,
                                    processData: !1,
                                    xhr: function () {
                                        var t = o.ajaxSettings.xhr();
                                        return t.upload && n.progress && r(t.upload, "progress", n.progress), ["loadStart", "load", "loadEnd", "error", "abort"].forEach(function (e) {
                                            return n[e] && r(t, e.toLowerCase(), n[e])
                                        }), t
                                    }
                                })
                            };
                            a(c.shift())
                        }
                    }
                }
            })
        }
    }

    function Et(t) {
        function e(t, e) {
            return t.sort(function (t, i) {
                return t[e] > i[e] ? 1 : i[e] > t[e] ? -1 : 0
            })
        }

        if (!Et.installed) {
            var i = t.util, n = i.scrolledOver;
            t.component("grid-parallax", t.components.grid.extend({
                props: {target: String, translate: Number},
                defaults: {target: !1, translate: 150},
                init: function () {
                    this.$addClass("uk-grid")
                },
                disconnected: function () {
                    this.reset(), this.$el.css("margin-bottom", "")
                },
                computed: {
                    translate: function () {
                        return Math.abs(this.$props.translate)
                    }, items: function () {
                        return (this.target ? this.$el.find(this.target) : this.$el.children()).toArray()
                    }
                },
                update: [{
                    read: function () {
                        this.columns = this.rows && this.rows[0] && this.rows[0].length || 0, this.rows = this.rows && this.rows.map(function (t) {
                                return e(t, "offsetLeft")
                            })
                    }, write: function () {
                        this.$el.css("margin-bottom", "").css("margin-bottom", this.columns > 1 ? this.translate + parseFloat(this.$el.css("margin-bottom")) : "")
                    }, events: ["load", "resize"]
                }, {
                    read: function () {
                        this.scrolled = n(this.$el) * this.translate
                    }, write: function () {
                        var t = this;
                        return this.rows && 1 !== this.columns && this.scrolled ? void this.rows.forEach(function (e) {
                            return e.forEach(function (e, i) {
                                return e.style.transform = "translateY(" + (i % 2 ? t.scrolled : t.scrolled / 8) + "px)"
                            })
                        }) : this.reset()
                    }, events: ["scroll", "load", "resize"]
                }],
                methods: {
                    reset: function () {
                        this.items.forEach(function (t) {
                            return t.style.transform = ""
                        })
                    }
                }
            })), t.component("grid-parallax").options.update.unshift({
                read: function () {
                    this.reset()
                }, events: ["load", "resize"]
            })
        }
    }

    function Dt(t) {
        function e(t) {
            return t.split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(function (t) {
                return parseFloat(t)
            })
        }

        function i(t, e) {
            return +(c(t.diff) ? +t.end : t.start + t.diff * e * (t.start < t.end ? 1 : -1)).toFixed(2)
        }

        if (!Dt.installed) {
            var n = t.mixin, o = t.util, s = o.assign, r = o.clamp, a = o.Dimensions, l = o.getImage, c = o.isUndefined,
                h = o.scrolledOver, d = o.query,
                u = ["x", "y", "bgx", "bgy", "rotate", "scale", "color", "backgroundColor", "borderColor", "opacity", "blur", "hue", "grayscale", "invert", "saturate", "sepia", "fopacity"];
            n.parallax = {
                props: u.reduce(function (t, e) {
                    return t[e] = "list", t
                }, {easing: Number, media: "media"}), defaults: u.reduce(function (t, e) {
                    return t[e] = void 0, t
                }, {easing: 1, media: !1}), computed: {
                    props: function () {
                        var t = this;
                        return u.reduce(function (i, n) {
                            if (c(t.$props[n]))return i;
                            var o = n.match(/color/i), r = o || "opacity" === n, a = t.$props[n];
                            r && t.$el.css(n, "");
                            var l, h = (c(a[1]) ? "scale" === n ? 1 : r ? t.$el.css(n) : 0 : a[0]) || 0,
                                d = c(a[1]) ? a[0] : a[1], u = ~a.join("").indexOf("%") ? "%" : "px";
                            if (o) {
                                var p = t.$el[0].style.color;
                                t.$el[0].style.color = h, h = e(t.$el.css("color")), t.$el[0].style.color = d, d = e(t.$el.css("color")), t.$el[0].style.color = p
                            } else h = parseFloat(h), d = parseFloat(d), l = Math.abs(h - d);
                            if (i[n] = {start: h, end: d, diff: l, unit: u}, n.match(/^bg/)) {
                                var f = "background-position-" + n[2];
                                i[n].pos = t.$el.css(f, "").css("background-position").split(" ")["x" === n[2] ? 0 : 1], t.covers && s(i[n], {
                                    start: 0,
                                    end: h <= d ? l : -l
                                })
                            }
                            return i
                        }, {})
                    }, bgProps: function () {
                        var t = this;
                        return ["bgx", "bgy"].filter(function (e) {
                            return e in t.props
                        })
                    }, covers: function () {
                        return "cover" === this.$el.css("backgroundSize", "").css("backgroundSize")
                    }
                }, disconnected: function () {
                    delete this._image
                }, update: [{
                    read: function () {
                        var t = this;
                        if (delete this._computeds.props, this._active = !this.media || window.matchMedia(this.media).matches, this._image && (this._image.dimEl = {
                                width: this.$el[0].offsetWidth,
                                height: this.$el[0].offsetHeight
                            }), c(this._image) && this.covers && this.bgProps.length) {
                            var e = this.$el.css("backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
                            e && (this._image = !1, l(e).then(function (e) {
                                t._image = {width: e.naturalWidth, height: e.naturalHeight}, t.$emit()
                            }))
                        }
                    }, write: function () {
                        var t = this;
                        if (this._image) {
                            if (!this._active)return void this.$el.css({backgroundSize: "", backgroundRepeat: ""});
                            var e = this._image, i = e.dimEl, n = a.cover(e, i);
                            this.bgProps.forEach(function (o) {
                                var s = t.props[o], l = s.start, c = s.end, h = s.pos, d = s.diff,
                                    u = "bgy" === o ? "height" : "width", p = n[u] - i[u];
                                if (h.match(/%$/)) {
                                    if (l >= c) p < d ? (i[u] = n[u] + d - p, t.props[o].pos = "0px") : (h = -1 * p / 100 * parseFloat(h), h = r(h, d - p, 0), t.props[o].pos = h + "px"); else {
                                        if (p < d) i[u] = n[u] + d - p; else if (p / 100 * parseFloat(h) > d)return;
                                        t.props[o].pos = "-" + d + "px"
                                    }
                                    n = a.cover(e, i)
                                }
                            }), this.$el.css({
                                backgroundSize: n.width + "px " + n.height + "px",
                                backgroundRepeat: "no-repeat"
                            })
                        }
                    }, events: ["load", "resize"]
                }], methods: {
                    reset: function () {
                        var t = this;
                        Object.keys(this.getCss(0)).forEach(function (e) {
                            return t.$el.css(e, "")
                        })
                    }, getCss: function (t) {
                        var e = !1, n = this.props;
                        return Object.keys(n).reduce(function (o, s) {
                            var r = n[s], a = i(r, t);
                            switch (s) {
                                case"x":
                                case"y":
                                    if (e)break;
                                    var l = ["x", "y"].map(function (e) {
                                        return s === e ? a + r.unit : n[e] ? i(n[e], t) + n[e].unit : 0
                                    }), c = l[0], h = l[1];
                                    e = o.transform += " translate3d(" + c + ", " + h + ", 0)";
                                    break;
                                case"rotate":
                                    o.transform += " rotate(" + a + "deg)";
                                    break;
                                case"scale":
                                    o.transform += " scale(" + a + ")";
                                    break;
                                case"bgy":
                                case"bgx":
                                    o["background-position-" + s[2]] = "calc(" + r.pos + " + " + (a + r.unit) + ")";
                                    break;
                                case"color":
                                case"backgroundColor":
                                case"borderColor":
                                    o[s] = "rgba(" + r.start.map(function (e, i) {
                                            return e += t * (r.end[i] - e), 3 === i ? parseFloat(e) : parseInt(e, 10)
                                        }).join(",") + ")";
                                    break;
                                case"blur":
                                    o.filter += " blur(" + a + "px)";
                                    break;
                                case"hue":
                                    o.filter += " hue-rotate(" + a + "deg)";
                                    break;
                                case"fopacity":
                                    o.filter += " opacity(" + a + "%)";
                                    break;
                                case"grayscale":
                                case"invert":
                                case"saturate":
                                case"sepia":
                                    o.filter += " " + s + "(" + a + "%)";
                                    break;
                                default:
                                    o[s] = a
                            }
                            return o
                        }, {transform: "", filter: ""})
                    }
                }
            }, t.component("parallax", {
                mixins: [n.parallax],
                props: {target: String, viewport: Number},
                defaults: {target: !1, viewport: 1},
                computed: {
                    target: function () {
                        return this.$props.target && d(this.$props.target, this.$el) || this.$el
                    }
                },
                disconnected: function () {
                    delete this._prev
                },
                update: [{
                    read: function () {
                        delete this._prev
                    }
                }, {
                    read: function () {
                        var t = h(this.target) / (this.viewport || 1);
                        this._percent = r(t * (1 - (this.easing - this.easing * t)))
                    }, write: function () {
                        return this._active ? void(this._prev !== this._percent && (this.$el.css(this.getCss(this._percent)), this._prev = this._percent)) : void this.reset()
                    }, events: ["scroll", "load", "resize"]
                }]
            })
        }
    }

    var Ot = "default" in t ? t["default"] : t, Bt = document.documentElement, Nt = Ot(window), Ht = Ot(document),
        jt = Ot(Bt), Pt = "rtl" === Bt.getAttribute("dir"), It = "transitioncancel", _t = {
            start: l, stop: function (t) {
                return r(t, he), S.resolve()
            }, cancel: function (t) {
                return r(t, It), S.resolve()
            }, inProgress: function (t) {
                return Ot(t).hasClass("uk-transition")
            }
        }, zt = "animationcancel", qt = "uk-animation-", Ft = "uk-cancel-animation", Wt = new RegExp(qt + "(enter|leave)"),
        Rt = {
            "in": function (t, e, i, n) {
                return c(t, e, i, n, !1)
            }, out: function (t, e, i, n) {
                return c(t, e, i, n, !0)
            }, inProgress: function (t) {
                return Wt.test(Ot(t).attr("class"))
            }, cancel: function (t) {
                return r(t, zt), S.resolve()
            }
        }, Ut = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            menuitem: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        }, Zt = {
            ratio: function (t, e, i) {
                var n = "width" === e ? "height" : "width";
                return o = {}, o[n] = Math.round(i * t[n] / t[e]), o[e] = i, o;
                var o
            }, contain: function (e, i) {
                var n = this;
                return e = Jt({}, e), t.each(e, function (t) {
                    return e = e[t] > i[t] ? n.ratio(e, t, i[t]) : e
                }), e
            }, cover: function (e, i) {
                var n = this;
                return e = this.contain(e, i), t.each(e, function (t) {
                    return e = e[t] < i[t] ? n.ratio(e, t, i[t]) : e
                }), e
            }
        }, Vt = Object.prototype.hasOwnProperty;
    S.resolve = function (t) {
        return S(function (e) {
            e(t)
        })
    }, S.reject = function (t) {
        return S(function (e, i) {
            i(t)
        })
    }, S.all = function (t) {
        return ne ? Promise.all(t) : Ot.when.apply(Ot, t)
    };
    var Yt = /-(\w)/g, Xt = Array.isArray, Gt = {"!": "closest", "+": "nextAll", "-": "prevAll"}, Qt = {},
        Jt = Object.assign || function (t) {
                for (var e = [], i = arguments.length - 1; i-- > 0;)e[i] = arguments[i + 1];
                t = Object(t);
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    if (null !== o)for (var s in o)T(o, s) && (t[s] = o[s])
                }
                return t
            }, Kt = window.MutationObserver || window.WebKitMutationObserver,
        te = window.requestAnimationFrame || function (t) {
                return setTimeout(t, 1e3 / 60)
            }, ee = "ontouchstart" in window, ie = window.PointerEvent, ne = "Promise" in window,
        oe = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || navigator.msPointerEnabled && navigator.msMaxTouchPoints || navigator.pointerEnabled && navigator.maxTouchPoints,
        se = oe ? "mousedown " + (ee ? "touchstart" : "pointerdown") : "mousedown",
        re = oe ? "mousemove " + (ee ? "touchmove" : "pointermove") : "mousemove",
        ae = oe ? "mouseup " + (ee ? "touchend" : "pointerup") : "mouseup",
        le = oe && ie ? "pointerenter" : "mouseenter", ce = oe && ie ? "pointerleave" : "mouseleave",
        he = tt("transition", "transition-end"), de = tt("animation", "animation-start"),
        ue = tt("animation", "animation-end"), pe = {
            reads: [], writes: [], measure: function (t) {
                return this.reads.push(t), et(), t
            }, mutate: function (t) {
                return this.writes.push(t), et(), t
            }, clear: function (t) {
                return nt(this.reads, t) || nt(this.writes, t)
            }, flush: function () {
                it(this.reads), it(this.writes.splice(0, this.writes.length)), this.scheduled = !1, (this.reads.length || this.writes.length) && et()
            }
        };
    ot.prototype = {
        positions: [], position: null, init: function () {
            var t = this;
            this.positions = [], this.position = null;
            var e = !1;
            this.handler = function (i) {
                e || setTimeout(function () {
                    var n = Date.now(), o = t.positions.length;
                    o && n - t.positions[o - 1].time > 100 && t.positions.splice(0, o), t.positions.push({
                        time: n,
                        x: i.pageX,
                        y: i.pageY
                    }), t.positions.length > 5 && t.positions.shift(), e = !1
                }, 5), e = !0
            }, Ht.on("mousemove", this.handler)
        }, cancel: function () {
            this.handler && Ht.off("mousemove", this.handler)
        }, movesTo: function (t) {
            if (this.positions.length < 2)return !1;
            var e = ht(t), i = this.positions[this.positions.length - 1], n = this.positions[0];
            if (e.left <= i.x && i.x <= e.right && e.top <= i.y && i.y <= e.bottom)return !1;
            var o = [[{x: e.left, y: e.top}, {x: e.right, y: e.bottom}], [{x: e.right, y: e.top}, {
                x: e.left,
                y: e.bottom
            }]];
            return e.right <= i.x || (e.left >= i.x ? (o[0].reverse(), o[1].reverse()) : e.bottom <= i.y ? o[0].reverse() : e.top >= i.y && o[1].reverse()), !!o.reduce(function (t, e) {
                return t + (st(n, e[0]) < st(i, e[0]) && st(n, e[1]) > st(i, e[1]))
            }, 0)
        }
    };
    var fe = {};
    fe.args = fe.created = fe.events = fe.init = fe.ready = fe.connected = fe.disconnected = fe.destroy = function (t, e) {
        return t = t && !Xt(t) ? [t] : t, e ? t ? t.concat(e) : Xt(e) ? e : [e] : t
    }, fe.update = function (t, e) {
        return fe.args(t, D(e) ? {read: e} : e)
    }, fe.props = function (t, e) {
        return Xt(e) && (e = e.reduce(function (t, e) {
            return t[e] = String, t
        }, {})), fe.methods(t, e)
    }, fe.computed = fe.defaults = fe.methods = function (t, e) {
        return e ? t ? Jt({}, t, e) : e : t
    };
    var ge = function (t, e) {
        return P(e) ? t : e
    }, ve = 0, me = function (t) {
        this.id = ++ve, this.el = q(t)
    };
    me.prototype.isVideo = function () {
        return this.isYoutube() || this.isVimeo() || this.isHTML5()
    }, me.prototype.isHTML5 = function () {
        return "VIDEO" === this.el.tagName
    }, me.prototype.isIFrame = function () {
        return "IFRAME" === this.el.tagName
    }, me.prototype.isYoutube = function () {
        return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)
    }, me.prototype.isVimeo = function () {
        return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/)
    }, me.prototype.enableApi = function () {
        var t = this;
        if (this.ready)return this.ready;
        var e, i = this.isYoutube(), n = this.isVimeo();
        return i || n ? this.ready = S(function (o) {
            s(t.el, "load", function () {
                if (i) {
                    var n = function () {
                        return at(t.el, {event: "listening", id: t.id})
                    };
                    e = setInterval(n, 100), n()
                }
            }), lt(function (e) {
                return i && e.id === t.id && "onReady" === e.event || n && Number(e.player_id) === t.id
            }).then(function () {
                o(), e && clearInterval(e)
            }), t.el.setAttribute("src", "" + t.el.src + (~t.el.src.indexOf("?") ? "&" : "?") + (i ? "enablejsapi=1" : "api=1&player_id=" + ve))
        }) : S.resolve()
    }, me.prototype.play = function () {
        var t = this;
        this.isVideo() && (this.isIFrame() ? this.enableApi().then(function () {
            return at(t.el, {func: "playVideo", method: "play"})
        }) : this.isHTML5() && this.el.play())
    }, me.prototype.pause = function () {
        var t = this;
        this.isVideo() && (this.isIFrame() ? this.enableApi().then(function () {
            return at(t.el, {func: "pauseVideo", method: "pause"})
        }) : this.isHTML5() && this.el.pause())
    }, me.prototype.mute = function () {
        var t = this;
        this.isVideo() && (this.isIFrame() ? this.enableApi().then(function () {
            return at(t.el, {func: "mute", method: "setVolume", value: 0})
        }) : this.isHTML5() && (this.el.muted = !0, this.el.setAttribute("muted", "")))
    };
    var we, ye, xe, ke, be = {x: ["width", "left", "right"], y: ["height", "top", "bottom"]},
        Ce = document.documentElement, $e = {};
    i(function () {
        n(document, "click", function () {
            return ke = !0
        }, !0), n(document, se, function (t) {
            var e = t.touches ? t.touches[0] : t, i = e.target, n = e.pageX, o = e.pageY, s = Date.now();
            $e.el = "tagName" in i ? i : i.parentNode, we && clearTimeout(we), $e.x1 = n, $e.y1 = o, $e.last && s - $e.last <= 250 && ($e = {}), $e.last = s, ke = t.button > 0
        }), n(document, re, function (t) {
            var e = t.touches ? t.touches[0] : t, i = e.pageX, n = e.pageY;
            $e.x2 = i, $e.y2 = n
        }), n(document, ae, function (t) {
            var e = t.target;
            $e.x2 && Math.abs($e.x1 - $e.x2) > 30 || $e.y2 && Math.abs($e.y1 - $e.y2) > 30 ? ye = setTimeout(function () {
                $e.el && (r($e.el, "swipe"), r($e.el, "swipe" + wt($e))), $e = {}
            }) : "last" in $e ? (xe = setTimeout(function () {
                return $e.el && r($e.el, "tap")
            }), $e.el && d(e, $e.el) && (we = setTimeout(function () {
                we = null, $e.el && !ke && r($e.el, "click"), $e = {}
            }, 350))) : $e = {}
        }), n(document, "touchcancel", yt), n(window, "scroll", yt)
    });
    var Te = !1;
    n(document, "touchstart", function () {
        return Te = !0
    }, !0), n(document, "click", function () {
        Te = !1
    }), n(document, "touchcancel", function () {
        return Te = !1
    }, !0);
    var Se, Le, Ae = Object.freeze({
        win: Nt,
        doc: Ht,
        docElement: jt,
        isRtl: Pt,
        isReady: e,
        ready: i,
        on: n,
        off: o,
        one: s,
        trigger: r,
        $trigger: a,
        transition: l,
        Transition: _t,
        animate: c,
        Animation: Rt,
        isJQuery: h,
        isWithin: d,
        attrFilter: u,
        removeClass: p,
        createEvent: f,
        isInView: g,
        scrolledOver: v,
        docHeight: w,
        getIndex: y,
        isVoidElement: x,
        Dimensions: Zt,
        query: k,
        preventClick: b,
        getData: C,
        Observer: Kt,
        requestAnimationFrame: te,
        hasPromise: ne,
        hasTouch: oe,
        pointerDown: se,
        pointerMove: re,
        pointerUp: ae,
        pointerEnter: le,
        pointerLeave: ce,
        transitionend: he,
        animationstart: de,
        animationend: ue,
        getStyle: Q,
        getCssVar: J,
        getImage: K,
        fastdom: pe,
        $: Ot,
        bind: $,
        hasOwn: T,
        promise: S,
        classify: L,
        hyphenate: A,
        camelize: M,
        isArray: Xt,
        isFunction: D,
        isObject: O,
        isPlainObject: B,
        isBoolean: N,
        isString: H,
        isNumber: j,
        isUndefined: P,
        isContextSelector: I,
        getContextSelectors: _,
        toJQuery: z,
        toNode: q,
        toBoolean: F,
        toNumber: W,
        toList: R,
        toMedia: U,
        coerce: Z,
        toMs: V,
        swap: Y,
        assign: Jt,
        clamp: X,
        noop: G,
        ajax: t.ajax,
        each: t.each,
        Event: t.Event,
        isNumeric: t.isNumeric,
        MouseTracker: ot,
        mergeOptions: rt,
        Player: me,
        position: ct,
        getDimensions: ht,
        offset: dt,
        offsetTop: ut,
        flipPosition: mt,
        isTouch: xt
    }), Me = function (t) {
        function e() {
            o(document.body, r), pe.flush(), new Kt(function (e) {
                return e.forEach(function (e) {
                    for (var i = e.addedNodes, n = e.removedNodes, s = e.target, l = 0; l < i.length; l++)o(i[l], r);
                    for (l = 0; l < n.length; l++)o(n[l], a);
                    t.update("update", s, !0)
                })
            }).observe(s, {
                childList: !0,
                subtree: !0,
                characterData: !0,
                attributes: !0,
                attributeFilter: ["href"]
            }), t._initialized = !0
        }

        function o(t, e) {
            if (t.nodeType === Node.ELEMENT_NODE && !t.hasAttribute("uk-no-boot"))for (e(t), t = t.firstChild; t;) {
                var i = t.nextSibling;
                o(t, e), t = i
            }
        }

        var s = document.documentElement, r = t.connect, a = t.disconnect;
        Kt ? document.body ? e() : new Kt(function () {
            document.body && (this.disconnect(), e())
        }).observe(s, {childList: !0, subtree: !0}) : i(function () {
            o(document.body, r), n(s, "DOMNodeInserted", function (t) {
                return o(t.target, r)
            }), n(s, "DOMNodeRemoved", function (t) {
                return o(t.target, a)
            })
        })
    }, Ee = function (t) {
        function e(t) {
            return new Function("return function " + L(t) + " (options) { this._init(options); }")()
        }

        function i(t, e) {
            if (t.nodeType === Node.ELEMENT_NODE)for (e(t), t = t.firstChild; t;)i(t, e), t = t.nextSibling
        }

        function n(t, e) {
            if (t)for (var i in t)t[i]._isReady && t[i]._callUpdate(e)
        }

        var o = t.data;
        t.use = function (t) {
            if (!t.installed)return t.call(null, this), t.installed = !0, this
        }, t.mixin = function (e, i) {
            i = (H(i) ? t.components[i] : i) || this, e = rt({}, e), e.mixins = i.options.mixins, delete i.options.mixins, i.options = rt(e, i.options)
        }, t.extend = function (t) {
            t = t || {};
            var i = this, n = t.name || i.options.name, o = e(n || "UIkitComponent");
            return o.prototype = Object.create(i.prototype), o.prototype.constructor = o, o.options = rt(i.options, t), o["super"] = i, o.extend = i.extend, o
        }, t.update = function (e, s, r) {
            if (void 0 === r && (r = !1), e = f(e || "update"), !s)return void n(t.instances, e);
            if (s = q(s), r) {
                do n(s[o], e), s = s.parentNode; while (s)
            } else i(s, function (t) {
                return n(t[o], e)
            })
        };
        var s;
        Object.defineProperty(t, "container", {
            get: function () {
                return s || document.body
            }, set: function (t) {
                s = t
            }
        })
    }, De = function (t) {
        t.prototype._callHook = function (t) {
            var e = this, i = this.$options[t];
            i && i.forEach(function (t) {
                return t.call(e)
            })
        }, t.prototype._callReady = function () {
            this._isReady || (this._isReady = !0, this._callHook("ready"), this._callUpdate())
        }, t.prototype._callConnected = function () {
            var e = this;
            this._connected || (~t.elements.indexOf(this.$options.el) || t.elements.push(this.$options.el), t.instances[this._uid] = this, this._initEvents(), this._callHook("connected"), this._connected = !0, this._initObserver(), this._isReady || i(function () {
                return e._callReady()
            }), this._callUpdate())
        }, t.prototype._callDisconnected = function () {
            if (this._connected) {
                this._observer && (this._observer.disconnect(), this._observer = null);
                var e = t.elements.indexOf(this.$options.el);
                ~e && t.elements.splice(e, 1), delete t.instances[this._uid], this._initEvents(!0), this._callHook("disconnected"), this._connected = !1
            }
        }, t.prototype._callUpdate = function (t) {
            var e = this;
            t = f(t || "update"), "update" === t.type && (this._computeds = {});
            var i = this.$options.update;
            i && i.forEach(function (i, n) {
                ("update" === t.type || i.events && ~i.events.indexOf(t.type)) && (i.read && !~pe.reads.indexOf(e._frames.reads[n]) && (e._frames.reads[n] = pe.measure(function () {
                    i.read.call(e, t), delete e._frames.reads[n]
                })), i.write && !~pe.writes.indexOf(e._frames.writes[n]) && (e._frames.writes[n] = pe.mutate(function () {
                    i.write.call(e, t), delete e._frames.writes[n]
                })))
            })
        }
    }, Oe = function (t) {
        function e(t, e) {
            var n = {}, o = t.args;
            void 0 === o && (o = []);
            var s = t.props;
            void 0 === s && (s = {});
            var r, a, l = t.el;
            if (!s)return n;
            for (r in s)if (a = A(r), l.hasAttribute(a)) {
                var c = Z(s[r], l.getAttribute(a), l);
                if ("target" === a && (!c || 0 === c.lastIndexOf("_", 0)))continue;
                n[r] = c
            }
            var h = i(C(l, e), o);
            for (r in h)a = M(r), void 0 !== s[a] && (n[a] = Z(s[a], h[r], l));
            return n
        }

        function i(t, e) {
            void 0 === e && (e = []);
            try {
                return t ? "{" === t[0] ? JSON.parse(t) : e.length && !~t.indexOf(":") ? (i = {}, i[e[0]] = t, i) : t.split(";").reduce(function (t, e) {
                    var i = e.split(/:(.+)/), n = i[0], o = i[1];
                    return n && o && (t[n.trim()] = o.trim()), t
                }, {}) : {};
                var i
            } catch (n) {
                return {}
            }
        }

        function n(t, e, i) {
            Object.defineProperty(t, e, {
                enumerable: !0, get: function () {
                    return T(t._computeds, e) || (t._computeds[e] = i.call(t)), t._computeds[e]
                }, set: function (i) {
                    t._computeds[e] = i
                }
            })
        }

        function o(t, e, i, n) {
            B(i) || (i = {name: n, handler: i});
            var o = i.name, r = i.el, a = i.delegate, l = i.self, c = i.filter, h = i.handler,
                d = "." + t.$options.name + "." + t._uid;
            if (r = r && r.call(t) || t.$el, o = o.split(" ").map(function (t) {
                    return t + "." + d
                }).join(" "), e) r.off(o); else {
                if (c && !c.call(t))return;
                h = H(h) ? t[h] : $(h, t), l && (h = s(h, t)), a ? r.on(o, H(a) ? a : a.call(t), h) : r.on(o, h)
            }
        }

        function s(t, e) {
            return function (i) {
                if (i.target === i.currentTarget)return t.call(e, i)
            }
        }

        function r(t, e) {
            return t.every(function (t) {
                return !t || !T(t, e)
            })
        }

        function a(t, e) {
            return P(t) || t === e || h(t) && h(e) && t.is(e)
        }

        var l = 0;
        t.prototype.props = {}, t.prototype._init = function (e) {
            e = e || {}, e = this.$options = rt(this.constructor.options, e, this), this.$el = null, this.$name = t.prefix + A(this.$options.name), this.$props = {}, this._frames = {
                reads: {},
                writes: {}
            }, this._uid = l++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), e.el && this.$mount(e.el)
        }, t.prototype._initData = function () {
            var t = this, e = this.$options, i = e.defaults, n = e.data;
            void 0 === n && (n = {});
            var o = e.args;
            void 0 === o && (o = []);
            var s = e.props;
            void 0 === s && (s = {});
            var r = e.el;
            o.length && Xt(n) && (n = n.slice(0, o.length).reduce(function (t, e, i) {
                return B(e) ? Jt(t, e) : t[o[i]] = e, t
            }, {}));
            for (var a in i)t.$props[a] = t[a] = T(n, a) && !P(n[a]) ? Z(s[a], n[a], r) : Xt(i[a]) ? i[a].concat() : i[a]
        }, t.prototype._initMethods = function () {
            var t = this, e = this.$options.methods;
            if (e)for (var i in e)t[i] = $(e[i], t)
        }, t.prototype._initComputeds = function () {
            var t = this, e = this.$options.computed;
            if (this._computeds = {}, e)for (var i in e)n(t, i, e[i])
        }, t.prototype._initProps = function (t) {
            var i = this;
            this._computeds = {}, Jt(this.$props, t || e(this.$options, this.$name));
            var n = [this.$options.computed, this.$options.methods];
            for (var o in i.$props)r(n, o) && (i[o] = i.$props[o])
        }, t.prototype._initEvents = function (t) {
            var e = this, i = this.$options.events;
            i && i.forEach(function (i) {
                if (T(i, "handler")) o(e, t, i); else for (var n in i)o(e, t, i[n], n)
            })
        }, t.prototype._initObserver = function () {
            var t = this, i = this.$options, n = i.attrs, o = i.props, s = i.el;
            !this._observer && o && n && Kt && (n = Xt(n) ? n : Object.keys(o).map(function (t) {
                return A(t)
            }), this._observer = new Kt(function () {
                var i = e(t.$options, t.$name);
                n.some(function (e) {
                    return !a(i[e], t.$props[e])
                }) && t.$reset(i)
            }), this._observer.observe(s, {
                attributes: !0,
                attributeFilter: n.concat([this.$name, "data-" + this.$name])
            }))
        }
    }, Be = function (t) {
        var e = t.data;
        t.prototype.$mount = function (t) {
            var i = this.$options.name;
            t[e] || (t[e] = {}), t[e][i] || (t[e][i] = this, this.$options.el = this.$options.el || t, this.$el = Ot(t), this._initProps(), this._callHook("init"), document.documentElement.contains(t) && this._callConnected())
        }, t.prototype.$emit = function (t) {
            this._callUpdate(t)
        }, t.prototype.$update = function (e, i) {
            t.update(e, this.$options.el, i)
        }, t.prototype.$reset = function (t) {
            this._callDisconnected(), this._initProps(t), this._callConnected()
        }, t.prototype.$destroy = function (t) {
            void 0 === t && (t = !1);
            var i = this.$options, n = i.el, o = i.name;
            n && this._callDisconnected(), this._callHook("destroy"), n && n[e] && (delete n[e][o], Object.keys(n[e]).length || delete n[e], t && this.$el.remove())
        }
    }, Ne = function (t) {
        var e = t.data;
        t.components = {}, t.component = function (e, i) {
            var n = M(e);
            if (B(i)) i.name = n, i = t.extend(i); else {
                if (P(i))return t.components[n];
                i.options.name = n
            }
            return t.components[n] = i, t[n] = function (e, i) {
                function o(e) {
                    return t.getComponent(e, n) || new t.components[n]({el: e, data: i || {}})
                }

                for (var s = arguments.length, r = Array(s); s--;)r[s] = arguments[s];
                return B(e) ? new t.components[n]({data: e}) : t.components[n].options.functional ? new t.components[n]({data: [].concat(r)}) : e && e.nodeType ? o(e) : Ot(e).toArray().map(o)[0]
            }, t._initialized && !i.options.functional && pe.measure(function () {
                return t[n]("[uk-" + e + "],[data-uk-" + e + "]")
            }), t.components[n]
        }, t.getComponents = function (t) {
            return t && (t = h(t) ? t[0] : t) && t[e] || {}
        }, t.getComponent = function (e, i) {
            return t.getComponents(e)[i]
        }, t.connect = function (i) {
            var n;
            if (i[e])for (n in i[e])i[e][n]._callConnected();
            for (var o = 0; o < i.attributes.length; o++)n = i.attributes[o].name, 0 !== n.lastIndexOf("uk-", 0) && 0 !== n.lastIndexOf("data-uk-", 0) || (n = M(n.replace("data-uk-", "").replace("uk-", "")), t[n] && t[n](i))
        }, t.disconnect = function (t) {
            for (var i in t[e])t[e][i]._callDisconnected()
        }
    }, He = function (t) {
        function e(t, e, n) {
            (e = i(e, t)) && (Se ? e[0][n].apply(e[0], e.slice(1)) : e.slice(1).forEach(function (t) {
                return e[0][n](t)
            }))
        }

        function i(t, e) {
            return H(t[0]) && t.unshift(e), t[0] = (q(t[0]) || {}).classList, t.forEach(function (e, i) {
                return i > 0 && H(e) && ~e.indexOf(" ") && Array.prototype.splice.apply(t, [i, 1].concat(t[i].split(" ")))
            }), t[0] && t[1] && t.length > 1 && t
        }

        t.prototype.$addClass = function () {
            for (var t = [], i = arguments.length; i--;)t[i] = arguments[i];
            e(this.$options.el, t, "add")
        }, t.prototype.$removeClass = function () {
            for (var t = [], i = arguments.length; i--;)t[i] = arguments[i];
            e(this.$options.el, t, "remove")
        }, t.prototype.$hasClass = function () {
            for (var t = [], e = arguments.length; e--;)t[e] = arguments[e];
            return (t = i(t, this.$options.el)) && t[0].contains(t[1])
        }, t.prototype.$toggleClass = function () {
            for (var t = [], e = arguments.length; e--;)t[e] = arguments[e];
            t = i(t, this.$options.el);
            for (var n = t && !H(t[t.length - 1]) ? t.pop() : void 0,
                     o = 1; o < (t && t.length); o++)t[0] && Le ? t[0].toggle(t[o], n) : t[0][(P(n) ? !t[0].contains(t[o]) : n) ? "add" : "remove"](t[o])
        }
    };
    !function () {
        var t = document.createElement("_").classList;
        t && (t.add("a", "b"), t.toggle("c", !1), Se = t.contains("b"), Le = !t.contains("c")), t = null
    }();
    var je = function (t) {
        this._init(t)
    };
    je.util = Ae, je.data = "__uikit__", je.prefix = "uk-", je.options = {}, je.instances = {}, je.elements = [], Ee(je), De(je), Oe(je), Be(je), Ne(je), He(je);
    var Pe, Ie, _e = {
            init: function () {
                this.$addClass(this.$name)
            }
        }, ze = {
            props: {cls: Boolean, animation: "list", duration: Number, origin: String, transition: String, queued: Boolean},
            defaults: {
                cls: !1,
                animation: [!1],
                duration: 200,
                origin: !1,
                transition: "linear",
                queued: !1,
                initProps: {overflow: "", height: "", paddingTop: "", paddingBottom: "", marginTop: "", marginBottom: ""},
                hideProps: {overflow: "hidden", height: 0, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 0}
            },
            computed: {
                hasAnimation: function () {
                    return !!this.animation[0]
                }, hasTransition: function () {
                    return this.hasAnimation && this.animation[0] === !0
                }
            },
            methods: {
                toggleElement: function (t, e, i) {
                    var n = this;
                    return S(function (o) {
                        t = Ot(t).toArray();
                        var s, r = function (t) {
                            return S.all(t.map(function (t) {
                                return n._toggleElement(t, e, i)
                            }))
                        }, a = t.filter(function (t) {
                            return n.isToggled(t)
                        }), l = t.filter(function (t) {
                            return !~a.indexOf(t)
                        });
                        if (n.queued && P(i) && P(e) && n.hasAnimation && !(t.length < 2)) {
                            var c = document.body, h = c.scrollTop, d = a[0],
                                u = Rt.inProgress(d) && n.$hasClass(d, "uk-animation-leave") || _t.inProgress(d) && "0px" === d.style.height;
                            s = r(a), u || (s = s.then(function () {
                                var t = r(l);
                                return c.scrollTop = h, t
                            }))
                        } else s = r(l.concat(a));
                        s.then(o, G)
                    })
                }, toggleNow: function (t, e) {
                    var i = this;
                    return S(function (n) {
                        return S.all(Ot(t).toArray().map(function (t) {
                            return i._toggleElement(t, e, !1)
                        })).then(n, G)
                    })
                }, isToggled: function (t) {
                    return t = t && Ot(t) || this.$el, this.cls ? t.hasClass(this.cls.split(" ")[0]) : !t.attr("hidden")
                }, updateAria: function (t) {
                    this.cls === !1 && t.attr("aria-hidden", !this.isToggled(t))
                }, _toggleElement: function (e, i, n) {
                    var o = this;
                    if (e = Ot(e), i = N(i) ? i : Rt.inProgress(e) ? this.$hasClass(e, "uk-animation-leave") : _t.inProgress(e) ? "0px" === e[0].style.height : !this.isToggled(e), a(e, "before" + (i ? "show" : "hide"), [this]).result === !1)return S.reject();
                    var s = (n !== !1 && this.hasAnimation ? this.hasTransition ? this._toggleHeight : this._toggleAnimation : this._toggleImmediate)(e, i),
                        r = t.Event(i ? "show" : "hide");
                    return r.preventDefault(), a(e, r, [this]), s.then(function () {
                        a(e, i ? "shown" : "hidden", [o]), je.update(null, e)
                    })
                }, _toggle: function (t, e) {
                    t = Ot(t), this.cls ? t.toggleClass(this.cls, ~this.cls.indexOf(" ") ? void 0 : e) : t.attr("hidden", !e), t.find("[autofocus]:visible").focus(), this.updateAria(t), je.update(null, t)
                }, _toggleImmediate: function (t, e) {
                    return this._toggle(t, e), S.resolve()
                }, _toggleHeight: function (t, e) {
                    var i, n = this, o = t.children(), s = _t.inProgress(t),
                        r = o.length ? parseFloat(o.first().css("margin-top")) + parseFloat(o.last().css("margin-bottom")) : 0,
                        a = t[0].offsetHeight ? t.height() + (s ? 0 : r) : 0;
                    return _t.cancel(t), this.isToggled(t) || this._toggle(t, !0), t.height(""), pe.flush(), i = t.height() + (s ? 0 : r), t.height(a), (e ? _t.start(t, Jt({}, this.initProps, {
                        overflow: "hidden",
                        height: i
                    }), Math.round(this.duration * (1 - a / i)), this.transition) : _t.start(t, this.hideProps, Math.round(this.duration * (a / i)), this.transition).then(function () {
                        return n._toggle(t, !1)
                    })).then(function () {
                        return t.css(n.initProps)
                    })
                }, _toggleAnimation: function (t, e) {
                    var i = this;
                    return Rt.inProgress(t) ? Rt.cancel(t).then(function () {
                        return Rt.inProgress(t) ? S.resolve().then(function () {
                            return i._toggleAnimation(t, e)
                        }) : i._toggleAnimation(t, e)
                    }) : e ? (this._toggle(t, !0), Rt["in"](t, this.animation[0], this.duration, this.origin)) : Rt.out(t, this.animation[1] || this.animation[0], this.duration, this.origin).then(function () {
                        return i._toggle(t, !1)
                    })
                }
            }
        }, qe = {
            mixins: [_e, ze],
            props: {
                clsPanel: String,
                selClose: String,
                escClose: Boolean,
                bgClose: Boolean,
                stack: Boolean,
                container: Boolean
            },
            defaults: {cls: "uk-open", escClose: !0, bgClose: !0, overlay: !0, stack: !1, container: !0},
            computed: {
                body: function () {
                    return Ot(document.body)
                }, panel: function () {
                    return this.$el.find("." + this.clsPanel)
                }, container: function () {
                    return q(this.$props.container === !0 && je.container || this.$props.container && z(this.$props.container))
                }, transitionElement: function () {
                    return this.panel
                }, transitionDuration: function () {
                    return V(this.transitionElement.css("transition-duration"))
                }, component: function () {
                    return je[this.$options.name]
                }
            },
            events: [{
                name: "click", delegate: function () {
                    return this.selClose
                }, handler: function (t) {
                    t.preventDefault(), this.hide()
                }
            }, {
                name: "toggle", handler: function (t) {
                    t.preventDefault(), this.toggle()
                }
            }, {
                name: "show", self: !0, handler: function () {
                    jt.hasClass(this.clsPage) || (this.scrollbarWidth = window.innerWidth - jt[0].offsetWidth, this.body.css("overflow-y", this.scrollbarWidth && this.overlay ? "scroll" : "")), jt.addClass(this.clsPage)
                }
            }, {
                name: "hidden", self: !0, handler: function () {
                    this.component.active === this && (jt.removeClass(this.clsPage), this.body.css("overflow-y", ""), this.component.active = null)
                }
            }],
            methods: {
                toggle: function () {
                    return this.isToggled() ? this.hide() : this.show()
                }, show: function () {
                    var t = this;
                    if (!this.isToggled()) {
                        if (this.container && !this.$el.parent().is(this.container))return this.container.appendChild(this.$el[0]), S(function (e) {
                            return te(function () {
                                return e(t.show())
                            })
                        });
                        var e = Pe && Pe !== this && Pe;
                        if (Pe = this, this.component.active = this, e) {
                            if (!this.stack)return void e.hide().then(this.show);
                            this.prev = e
                        } else te(function () {
                            return kt(t.$options.name)
                        });
                        return this.toggleNow(this.$el, !0)
                    }
                }, hide: function () {
                    if (this.isToggled())return Pe = Pe && Pe !== this && Pe || this.prev, Pe || bt(this.$options.name), this.toggleNow(this.$el, !1)
                }, getActive: function () {
                    return Pe
                }, _toggleImmediate: function (t, e) {
                    var i = this;
                    return te(function () {
                        return i._toggle(t, e)
                    }), this.transitionDuration ? S(function (t, e) {
                        i._transition && (i.transitionElement.off(he, i._transition.handler), i._transition.reject()), i._transition = {
                            reject: e,
                            handler: function () {
                                t(), i._transition = null
                            }
                        }, i.transitionElement.one(he, i._transition.handler)
                    }) : S.resolve()
                }
            }
        }, Fe = {
            props: {pos: String, offset: null, flip: Boolean, clsPos: String},
            defaults: {pos: Pt ? "bottom-right" : "bottom-left", flip: !0, offset: !1, clsPos: ""},
            computed: {
                pos: function () {
                    return (this.$props.pos + (~this.$props.pos.indexOf("-") ? "" : "-center")).split("-")
                }, dir: function () {
                    return this.pos[0]
                }, align: function () {
                    return this.pos[1]
                }
            },
            methods: {
                positionAt: function (t, e, i) {
                    p(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?").css({top: "", left: ""});
                    var n = W(this.offset) || 0, o = this.getAxis(),
                        s = ct(t, e, "x" === o ? mt(this.dir) + " " + this.align : this.align + " " + mt(this.dir), "x" === o ? this.dir + " " + this.align : this.align + " " + this.dir, "x" === o ? "" + ("left" === this.dir ? -1 * n : n) : " " + ("top" === this.dir ? -1 * n : n), null, this.flip, i);
                    this.dir = "x" === o ? s.target.x : s.target.y, this.align = "x" === o ? s.target.y : s.target.x, t.toggleClass(this.clsPos + "-" + this.dir + "-" + this.align, this.offset === !1)
                }, getAxis: function () {
                    return "top" === this.dir || "bottom" === this.dir ? "y" : "x"
                }
            }
        }, We = function (t) {
            t.mixin["class"] = _e, t.mixin.modal = qe, t.mixin.position = Fe, t.mixin.togglable = ze
        }, Re = function (t) {
            t.component("accordion", {
                mixins: [_e, ze],
                props: {
                    targets: String,
                    active: null,
                    collapsible: Boolean,
                    multiple: Boolean,
                    toggle: String,
                    content: String,
                    transition: String
                },
                defaults: {
                    targets: "> *",
                    active: !1,
                    animation: [!0],
                    collapsible: !0,
                    multiple: !1,
                    clsOpen: "uk-open",
                    toggle: "> .uk-accordion-title",
                    content: "> .uk-accordion-content",
                    transition: "ease"
                },
                computed: {
                    items: function e() {
                        var t = this, e = Ot(this.targets, this.$el);
                        return this._changed = !this._items || e.length !== this._items.length || e.toArray().some(function (e, i) {
                                return e !== t._items.get(i)
                            }), this._items = e
                    }
                },
                events: [{
                    name: "click", delegate: function () {
                        return this.targets + " " + this.$props.toggle
                    }, handler: function (t) {
                        t.preventDefault(), this.toggle(this.items.find(this.$props.toggle).index(t.currentTarget))
                    }
                }],
                update: function () {
                    var t = this;
                    if (this.items.length && this._changed) {
                        this.items.each(function (e, i) {
                            i = Ot(i), t.toggleNow(i.find(t.content), i.hasClass(t.clsOpen))
                        });
                        var e = this.active !== !1 && z(this.items.eq(Number(this.active))) || !this.collapsible && z(this.items.eq(0));
                        e && !e.hasClass(this.clsOpen) && this.toggle(e, !1)
                    }
                },
                methods: {
                    toggle: function (t, e) {
                        var i = this, n = y(t, this.items), o = this.items.filter("." + this.clsOpen);
                        t = this.items.eq(n), t.add(!this.multiple && o).each(function (n, s) {
                            s = Ot(s);
                            var r = s.is(t), a = r && !s.hasClass(i.clsOpen);
                            if (a || !r || i.collapsible || !(o.length < 2)) {
                                s.toggleClass(i.clsOpen, a);
                                var l = s[0]._wrapper ? s[0]._wrapper.children().first() : s.find(i.content);
                                s[0]._wrapper || (s[0]._wrapper = l.wrap("<div>").parent().attr("hidden", a)), i._toggleImmediate(l, !0), i.toggleElement(s[0]._wrapper, a, e).then(function () {
                                    s.hasClass(i.clsOpen) === a && (a || i._toggleImmediate(l, !1), s[0]._wrapper = null, l.unwrap())
                                })
                            }
                        })
                    }
                }
            })
        }, Ue = function (t) {
            t.component("alert", {
                attrs: !0,
                mixins: [_e, ze],
                args: "animation",
                props: {close: String},
                defaults: {
                    animation: [!0],
                    selClose: ".uk-alert-close",
                    duration: 150,
                    hideProps: Jt({opacity: 0}, ze.defaults.hideProps)
                },
                events: [{
                    name: "click", delegate: function () {
                        return this.selClose
                    }, handler: function (t) {
                        t.preventDefault(), this.close()
                    }
                }],
                methods: {
                    close: function () {
                        var t = this;
                        this.toggleElement(this.$el).then(function () {
                            return t.$destroy(!0)
                        })
                    }
                }
            })
        }, Ze = function (t) {
            t.component("cover", {
                mixins: [_e], props: {width: Number, height: Number}, computed: {
                    el: function () {
                        return this.$el[0]
                    }, parent: function () {
                        return this.el.parentNode
                    }
                }, ready: function () {
                    this.$el.is("iframe") && this.$el.css("pointerEvents", "none");
                    var t = new me(this.$el);
                    t.isVideo() && t.mute()
                }, update: {
                    write: function () {
                        0 !== this.el.offsetHeight && this.$el.css({
                            width: "",
                            height: ""
                        }).css(Zt.cover({
                            width: this.width || this.el.clientWidth,
                            height: this.height || this.el.clientHeight
                        }, {width: this.parent.offsetWidth, height: this.parent.offsetHeight}))
                    }, events: ["load", "resize"]
                }, events: {
                    loadedmetadata: function () {
                        this.$emit()
                    }
                }
            })
        }, Ve = function (t) {
            function e() {
                n || (n = !0, Ht.on("click", function (t) {
                    var e;
                    if (!t.isDefaultPrevented())for (; i && i !== e && !d(t.target, i.$el) && (!i.toggle || !d(t.target, i.toggle.$el));)e = i, i.hide(!1)
                }))
            }

            var i;
            t.component("drop", {
                mixins: [Fe, ze],
                args: "pos",
                props: {
                    mode: "list",
                    toggle: Boolean,
                    boundary: "jQuery",
                    boundaryAlign: Boolean,
                    delayShow: Number,
                    delayHide: Number,
                    clsDrop: String
                },
                defaults: {
                    mode: ["click", "hover"],
                    toggle: "- :first",
                    boundary: window,
                    boundaryAlign: !1,
                    delayShow: 0,
                    delayHide: 800,
                    clsDrop: !1,
                    hoverIdle: 200,
                    animation: ["uk-animation-fade"],
                    cls: "uk-open"
                },
                init: function () {
                    this.tracker = new ot, this.clsDrop = this.clsDrop || "uk-" + this.$options.name, this.clsPos = this.clsDrop, this.$addClass(this.clsDrop)
                },
                ready: function () {
                    this.updateAria(this.$el), this.toggle && (this.toggle = t.toggle(k(this.toggle, this.$el), {
                        target: this.$el,
                        mode: this.mode
                    }))
                },
                events: [{
                    name: "click", delegate: function () {
                        return "." + this.clsDrop + "-close"
                    }, handler: function (t) {
                        t.preventDefault(), this.hide(!1)
                    }
                }, {
                    name: "click", delegate: function () {
                        return 'a[href^="#"]'
                    }, handler: function (t) {
                        if (!t.isDefaultPrevented()) {
                            var e = t.target.hash;
                            e || t.preventDefault(), e && d(e, this.$el) || this.hide(!1)
                        }
                    }
                }, {
                    name: "beforescroll", handler: function () {
                        this.hide(!1)
                    }
                }, {
                    name: "toggle", handler: function (t, e) {
                        e && !this.$el.is(e.target) || (t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e, !1))
                    }
                }, {
                    name: le, filter: function () {
                        return ~this.mode.indexOf("hover")
                    }, handler: function (t) {
                        xt(t) || (i && i !== this && i.toggle && ~i.toggle.mode.indexOf("hover") && !d(t.target, i.$el) && !d(t.target, i.toggle.$el) && i.hide(!1), t.preventDefault(), this.show(this.toggle))
                    }
                }, {
                    name: "toggleshow", handler: function (t, e) {
                        e && !this.$el.is(e.target) || (t.preventDefault(), this.show(e || this.toggle))
                    }
                }, {
                    name: "togglehide " + ce, handler: function (t, e) {
                        xt(t) || e && !this.$el.is(e.target) || (t.preventDefault(), this.toggle && ~this.toggle.mode.indexOf("hover") && this.hide())
                    }
                }, {
                    name: "beforeshow", self: !0, handler: function () {
                        this.clearTimers()
                    }
                }, {
                    name: "show", self: !0, handler: function () {
                        this.tracker.init(), this.toggle.$el.addClass(this.cls).attr("aria-expanded", "true"), e()
                    }
                }, {
                    name: "beforehide", self: !0, handler: function () {
                        this.clearTimers()
                    }
                }, {
                    name: "hide", handler: function (t) {
                        var e = t.target;
                        return this.$el.is(e) ? (i = this.isActive() ? null : i, this.toggle.$el.removeClass(this.cls).attr("aria-expanded", "false").blur().find("a, button").blur(), void this.tracker.cancel()) : void(i = null === i && d(e, this.$el) && this.isToggled() ? this : i)
                    }
                }],
                update: {
                    write: function () {
                        this.isToggled() && !Rt.inProgress(this.$el) && this.position()
                    }, events: ["resize"]
                },
                methods: {
                    show: function o(t, e) {
                        var n = this;
                        void 0 === e && (e = !0);
                        var o = function () {
                            n.isToggled() || (n.position(), n.toggleElement(n.$el, !0))
                        }, s = function () {
                            if (n.toggle = t || n.toggle, n.clearTimers(), !n.isActive()) {
                                if (e && i && i !== n && i.isDelaying)return void(n.showTimer = setTimeout(n.show, 10));
                                if (n.isParentOf(i)) {
                                    if (!i.hideTimer)return;
                                    i.hide(!1)
                                } else if (i && !n.isChildOf(i) && !n.isParentOf(i))for (var s; i && i !== s && !n.isChildOf(i);)s = i, i.hide(!1);
                                e && n.delayShow ? n.showTimer = setTimeout(o, n.delayShow) : o(), i = n
                            }
                        };
                        t && this.toggle && !this.toggle.$el.is(t.$el) ? (this.$el.one("hide", s), this.hide(!1)) : s()
                    }, hide: function s(t) {
                        var e = this;
                        void 0 === t && (t = !0);
                        var s = function () {
                            return e.toggleNow(e.$el, !1)
                        };
                        this.clearTimers(), this.isDelaying = this.tracker.movesTo(this.$el), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, this.hoverIdle) : t && this.delayHide ? this.hideTimer = setTimeout(s, this.delayHide) : s()
                    }, clearTimers: function () {
                        clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1
                    }, isActive: function () {
                        return i === this
                    }, isChildOf: function (t) {
                        return t && t !== this && d(this.$el, t.$el)
                    }, isParentOf: function (t) {
                        return t && t !== this && d(t.$el, this.$el)
                    }, position: function () {
                        p(this.$el, this.clsDrop + "-(stack|boundary)").css({
                            top: "",
                            left: ""
                        }), this.$el.show().toggleClass(this.clsDrop + "-boundary", this.boundaryAlign);
                        var t = ht(this.boundary), e = this.boundaryAlign ? t : ht(this.toggle.$el);
                        if ("justify" === this.align) {
                            var i = "y" === this.getAxis() ? "width" : "height";
                            this.$el.css(i, e[i])
                        } else this.$el.outerWidth() > Math.max(t.right - e.left, e.right - t.left) && (this.$addClass(this.clsDrop + "-stack"), this.$el.trigger("stack", [this]));
                        this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary), this.$el[0].style.display = ""
                    }
                }
            }), t.drop.getActive = function () {
                return i
            };
            var n
        }, Ye = function (t) {
            t.component("dropdown", t.components.drop.extend({name: "dropdown"}))
        }, Xe = function (t) {
            t.component("form-custom", {
                mixins: [_e],
                args: "target",
                props: {target: Boolean},
                defaults: {target: !1},
                computed: {
                    input: function () {
                        return this.$el.find(":input:first")
                    }, state: function () {
                        return this.input.next()
                    }, target: function () {
                        return this.$props.target && k(this.$props.target === !0 ? "> :input:first + :first" : this.$props.target, this.$el)
                    }
                },
                connected: function () {
                    this.input.trigger("change")
                },
                events: [{
                    name: "focusin focusout mouseenter mouseleave", delegate: ":input:first", handler: function (t) {
                        var e = t.type;
                        this.state.toggleClass("uk-" + (~e.indexOf("focus") ? "focus" : "hover"), ~["focusin", "mouseenter"].indexOf(e))
                    }
                }, {
                    name: "change", handler: function () {
                        this.target && this.target[this.target.is(":input") ? "val" : "text"](this.input[0].files && this.input[0].files[0] ? this.input[0].files[0].name : this.input.is("select") ? this.input.find("option:selected").text() : this.input.val())
                    }
                }]
            })
        }, Ge = function (t) {
            t.component("gif", {
                update: {
                    read: function () {
                        var t = g(this.$el);
                        !this.isInView && t && (this.$el[0].src = this.$el[0].src), this.isInView = t
                    }, events: ["scroll", "load", "resize"]
                }
            })
        }, Qe = function (t) {
            t.component("grid", t.components.margin.extend({
                mixins: [_e],
                name: "grid",
                defaults: {margin: "uk-grid-margin", clsStack: "uk-grid-stack"},
                update: {
                    write: function () {
                        this.$toggleClass(this.clsStack, this.stacks)
                    }, events: ["load", "resize"]
                }
            }))
        }, Je = function (t) {
            t.component("height-match", {
                args: "target",
                props: {target: String, row: Boolean},
                defaults: {target: "> *", row: !0},
                computed: {
                    elements: function () {
                        return Ot(this.target, this.$el)
                    }
                },
                update: {
                    read: function () {
                        var t = this, e = !1;
                        this.elements.css("minHeight", ""), this.rows = this.row ? this.elements.toArray().reduce(function (t, i) {
                            return e !== i.offsetTop ? t.push([i]) : t[t.length - 1].push(i), e = i.offsetTop, t
                        }, []).map(function (e) {
                            return t.match(Ot(e))
                        }) : [this.match(this.elements)]
                    }, write: function () {
                        this.rows.forEach(function (t) {
                            var e = t.height, i = t.elements;
                            return i && i.each(function (t, i) {
                                    return i.style.minHeight = e + "px"
                                })
                        })
                    }, events: ["load", "resize"]
                },
                methods: {
                    match: function (t) {
                        if (t.length < 2)return {};
                        var e = 0, i = [];
                        return t = t.each(function (t, n) {
                            var o, s, r;
                            0 === n.offsetHeight && (o = Ot(n), s = o.attr("style") || null, r = o.attr("hidden") || null, o.attr({
                                style: s + ";display:block !important;",
                                hidden: null
                            })), e = Math.max(e, n.offsetHeight), i.push(n.offsetHeight), o && o.attr({style: s, hidden: r})
                        }).filter(function (t) {
                            return i[t] < e
                        }), {height: e, elements: t}
                    }
                }
            })
        }, Ke = function (e) {
            e.component("height-viewport", {
                props: {expand: Boolean, offsetTop: Boolean, offsetBottom: Boolean},
                defaults: {expand: !1, offsetTop: !1, offsetBottom: !1},
                update: {
                    write: function () {
                        this.$el.css("boxSizing", "border-box");
                        var e, i = window.innerHeight, n = 0;
                        if (this.expand) {
                            this.$el.css({height: "", minHeight: ""});
                            var o = i - document.documentElement.offsetHeight;
                            o > 0 && this.$el.css("min-height", e = this.$el.outerHeight() + o)
                        } else {
                            var s = ut(this.$el);
                            if (s < i / 2 && this.offsetTop && (n += s), this.offsetBottom === !0) n += this.$el.next().outerHeight() || 0; else if (t.isNumeric(this.offsetBottom)) n += i / 100 * this.offsetBottom; else if (this.offsetBottom && "px" === this.offsetBottom.substr(-2)) n += parseFloat(this.offsetBottom); else if (H(this.offsetBottom)) {
                                var r = k(this.offsetBottom, this.$el);
                                n += r && r.outerHeight() || 0
                            }
                            this.$el.css("min-height", e = n ? "calc(100vh - " + n + "px)" : "100vh")
                        }
                        this.$el.height(""), e && i - n >= this.$el.outerHeight() && this.$el.css("height", e)
                    }, events: ["load", "resize"]
                }
            })
        }, ti = function (t) {
            i(function () {
                if (oe) {
                    var e = "uk-hover";
                    jt.on("tap", function (t) {
                        var i = t.target;
                        return Ot("." + e).filter(function (t, e) {
                            return !d(i, e)
                        }).removeClass(e)
                    }), Object.defineProperty(t, "hoverSelector", {
                        set: function (t) {
                            jt.on("tap", t, function (t) {
                                var i = t.currentTarget;
                                return i.classList.add(e)
                            })
                        }
                    }), t.hoverSelector = ".uk-animation-toggle, .uk-transition-toggle, [uk-hover]"
                }
            })
        },
        ei = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg>',
        ii = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"></line><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"></line></svg>',
        ni = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"></rect><rect x="4" y="9" width="11" height="1"></rect></svg>',
        oi = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"></rect><rect y="3" width="20" height="2"></rect><rect y="15" width="20" height="2"></rect></svg>',
        si = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"></rect><rect x="0" y="19" width="40" height="1"></rect></svg>',
        ri = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"></polyline></svg>',
        ai = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"></polyline></svg>',
        li = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"></circle><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"></path></svg>',
        ci = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"></circle><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"></line></svg>',
        hi = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
        di = '<svg width="11" height="20" viewBox="0 0 11 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 10 10 1 19"></polyline></svg>',
        ui = '<svg width="18" height="34" viewBox="0 0 18 34" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1 1 17 17 1 33"></polyline></svg>',
        pi = '<svg width="11" height="20" viewBox="0 0 11 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="10 1 1 10 10 19"></polyline></svg>',
        fi = '<svg width="18" height="34" viewBox="0 0 18 34" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="17 1 1 17 17 33"></polyline></svg>',
        gi = '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"></circle></svg>',
        vi = '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "></polyline></svg>',
        mi = function (e) {
            function i(t, i) {
                e.component(t, e.components.icon.extend({name: t, mixins: i ? [i] : [], defaults: {icon: t}}))
            }

            var n = {}, o = {
                spinner: gi,
                totop: vi,
                marker: ni,
                "close-icon": ei,
                "close-large": ii,
                "navbar-toggle-icon": oi,
                "overlay-icon": si,
                "pagination-next": ri,
                "pagination-previous": ai,
                "search-icon": li,
                "search-large": ci,
                "search-navbar": hi,
                "slidenav-next": di,
                "slidenav-next-large": ui,
                "slidenav-previous": pi,
                "slidenav-previous-large": fi
            };
            e.component("icon", e.components.svg.extend({
                attrs: ["icon", "ratio"],
                mixins: [_e],
                name: "icon",
                args: "icon",
                props: ["icon"],
                defaults: {exclude: ["id", "style", "class", "src", "icon"]},
                init: function () {
                    this.$addClass("uk-icon"), Pt && (this.icon = Y(Y(this.icon, "left", "right"), "previous", "next"))
                },
                disconnected: function () {
                    delete this.delay
                },
                update: {
                    read: function () {
                        if (this.delay) {
                            var t = this.getIcon();
                            t && (this.delay(t), delete this.delay)
                        }
                    }, events: ["load"]
                },
                methods: {
                    getSvg: function () {
                        var t = this, e = this.getIcon();
                        return e ? S.resolve(e) : "complete" !== document.readyState ? S(function (e) {
                            t.delay = e
                        }) : S.reject("Icon not found.")
                    }, getIcon: function () {
                        return o[this.icon] ? (n[this.icon] || (n[this.icon] = this.parse(o[this.icon])), n[this.icon]) : null
                    }
                }
            })), ["marker", "navbar-toggle-icon", "overlay-icon", "pagination-previous", "pagination-next", "totop"].forEach(function (t) {
                return i(t)
            }), ["slidenav-previous", "slidenav-next"].forEach(function (t) {
                return i(t, {
                    init: function () {
                        this.$addClass("uk-slidenav"), this.$hasClass("uk-slidenav-large") && (this.icon += "-large")
                    }
                })
            }), i("search-icon", {
                init: function () {
                    this.$hasClass("uk-search-icon") && this.$el.parents(".uk-search-large").length ? this.icon = "search-large" : this.$el.parents(".uk-search-navbar").length && (this.icon = "search-navbar")
                }
            }), i("close", {
                init: function () {
                    this.icon = "close-" + (this.$hasClass("uk-close-large") ? "large" : "icon")
                }
            }), i("spinner", {
                connected: function () {
                    var t = this;
                    this.svg.then(function (e) {
                        return 1 !== t.ratio && Ot(e).find("circle").css("stroke-width", 1 / t.ratio)
                    }, G)
                }
            }), e.icon.add = function (i) {
                Jt(o, i), Object.keys(i).forEach(function (t) {
                    return delete n[t]
                }), e._initialized && t.each(e.instances, function (t, e) {
                    "icon" === e.$options.name && e.$reset()
                })
            }
        }, wi = function (t) {
            t.component("margin", {
                props: {margin: String, firstColumn: Boolean},
                defaults: {margin: "uk-margin-small-top", firstColumn: "uk-first-column"},
                computed: {
                    items: function () {
                        return this.$el[0].children
                    }
                },
                update: {
                    read: function () {
                        var t = this;
                        if (!this.items.length || 0 === this.$el[0].offsetHeight)return void(this.rows = !1);
                        this.stacks = !0;
                        for (var e = [[]], i = 0; i < this.items.length; i++) {
                            var n = t.items[i], o = n.getBoundingClientRect();
                            if (o.height)for (var s = e.length - 1; s >= 0; s--) {
                                var r = e[s];
                                if (!r[0]) {
                                    r.push(n);
                                    break
                                }
                                var a = r[0].getBoundingClientRect();
                                if (o.top >= Math.floor(a.bottom)) {
                                    e.push([n]);
                                    break
                                }
                                if (Math.floor(o.bottom) > a.top) {
                                    if (t.stacks = !1, o.left < a.left && !Pt) {
                                        r.unshift(n);
                                        break
                                    }
                                    r.push(n);
                                    break
                                }
                                if (0 === s) {
                                    e.unshift([n]);
                                    break
                                }
                            }
                        }
                        this.rows = e
                    }, write: function () {
                        var t = this;
                        this.rows && this.rows.forEach(function (e, i) {
                            return e.forEach(function (e, n) {
                                t.$toggleClass(e, t.margin, 0 !== i), t.$toggleClass(e, t.firstColumn, 0 === n)
                            })
                        })
                    }, events: ["load", "resize"]
                }
            })
        }, yi = function (t) {
            t.component("modal", {
                mixins: [qe],
                defaults: {
                    clsPage: "uk-modal-page",
                    clsPanel: "uk-modal-dialog",
                    selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
                },
                events: [{
                    name: "show", self: !0, handler: function () {
                        this.panel.hasClass("uk-margin-auto-vertical") ? this.$el.addClass("uk-flex") : this.$el.css("display", "block"), this.$el.height()
                    }
                }, {
                    name: "hidden", self: !0, handler: function () {
                        this.$el.css("display", "").removeClass("uk-flex")
                    }
                }]
            }), t.component("overflow-auto", {
                mixins: [_e], computed: {
                    modal: function () {
                        return this.$el.closest(".uk-modal")
                    }, panel: function () {
                        return this.$el.closest(".uk-modal-dialog")
                    }
                }, connected: function () {
                    this.$el.css("min-height", 150)
                }, update: {
                    write: function () {
                        var t = this.$el.css("max-height");
                        this.$el.css("max-height", 150).css("max-height", Math.max(150, 150 + this.modal.height() - this.panel.outerHeight(!0))), t !== this.$el.css("max-height") && this.$el.trigger("resize")
                    }, events: ["load", "resize"]
                }
            }), t.modal.dialog = function (e, i) {
                var n = t.modal(' <div class="uk-modal"> <div class="uk-modal-dialog">' + e + "</div> </div> ", i);
                return n.$el.on("hidden", function (t) {
                    t.target === t.currentTarget && n.$destroy(!0)
                }), n.show(), n
            }, t.modal.alert = function (e, i) {
                return i = Jt({bgClose: !1, escClose: !1, labels: t.modal.labels}, i), S(function (n) {
                    return t.modal.dialog(' <div class="uk-modal-body">' + (H(e) ? e : Ot(e).html()) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + i.labels.ok + "</button> </div> ", i).$el.on("hide", n)
                })
            }, t.modal.confirm = function (e, i) {
                return i = Jt({bgClose: !1, escClose: !1, labels: t.modal.labels}, i), S(function (n, o) {
                    return t.modal.dialog(' <div class="uk-modal-body">' + (H(e) ? e : Ot(e).html()) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close">' + i.labels.cancel + '</button> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + i.labels.ok + "</button> </div> ", i).$el.on("click", ".uk-modal-footer button", function (t) {
                        return 0 === Ot(t.target).index() ? o() : n()
                    })
                })
            }, t.modal.prompt = function (e, i, n) {
                return n = Jt({bgClose: !1, escClose: !1, labels: t.modal.labels}, n), S(function (o) {
                    var s = !1,
                        r = t.modal.dialog(' <form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (H(e) ? e : Ot(e).html()) + '</label> <input class="uk-input" type="text" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + n.labels.cancel + '</button> <button class="uk-button uk-button-primary" type="submit">' + n.labels.ok + "</button> </div> </form> ", n),
                        a = r.$el.find("input").val(i);
                    r.$el.on("submit", "form", function (t) {
                        t.preventDefault(), o(a.val()), s = !0, r.hide()
                    }).on("hide", function () {
                        s || o(null)
                    })
                })
            }, t.modal.labels = {ok: "Ok", cancel: "Cancel"}
        }, xi = function (t) {
            t.component("nav", t.components.accordion.extend({
                name: "nav",
                defaults: {targets: "> .uk-parent", toggle: "> a", content: "ul:first"}
            }))
        }, ki = function (t) {
            t.component("navbar", {
                mixins: [_e],
                props: {
                    dropdown: String,
                    mode: "list",
                    align: String,
                    offset: Number,
                    boundary: Boolean,
                    boundaryAlign: Boolean,
                    clsDrop: String,
                    delayShow: Number,
                    delayHide: Number,
                    dropbar: Boolean,
                    dropbarMode: String,
                    dropbarAnchor: "jQuery",
                    duration: Number
                },
                defaults: {
                    dropdown: ".uk-navbar-nav > li",
                    align: Pt ? "right" : "left",
                    clsDrop: "uk-navbar-dropdown",
                    mode: void 0,
                    offset: void 0,
                    delayShow: void 0,
                    delayHide: void 0,
                    boundaryAlign: void 0,
                    flip: "x",
                    boundary: !0,
                    dropbar: !1,
                    dropbarMode: "slide",
                    dropbarAnchor: !1,
                    duration: 200
                },
                computed: {
                    boundary: function () {
                        return this.$props.boundary === !0 || this.boundaryAlign ? this.$el : this.$props.boundary
                    }, pos: function () {
                        return "bottom-" + this.align
                    }
                },
                ready: function () {
                    this.dropbar && t.navbarDropbar(k(this.dropbar, this.$el) || Ot("<div></div>").insertAfter(this.dropbarAnchor || this.$el), {
                        clsDrop: this.clsDrop,
                        mode: this.dropbarMode,
                        duration: this.duration,
                        navbar: this
                    })
                },
                update: function () {
                    t.drop(Ot(this.dropdown + " ." + this.clsDrop, this.$el).filter(function (e, i) {
                        return !t.getComponent(i, "dropdown")
                    }), Jt({}, this.$props, {boundary: this.boundary, pos: this.pos}))
                },
                events: [{
                    name: le, delegate: function () {
                        return this.dropdown
                    }, handler: function (t) {
                        var e = t.currentTarget, i = this.getActive();
                        i && i.toggle && !d(i.toggle.$el, e) && !i.tracker.movesTo(i.$el) && i.hide(!1)
                    }
                }],
                methods: {
                    getActive: function () {
                        var e = t.drop.getActive();
                        return e && !~e.mode.indexOf("click") && d(e.toggle.$el, this.$el) && e
                    }
                }
            }), t.component("navbar-dropbar", {
                mixins: [_e],
                defaults: {clsDrop: "", mode: "slide", navbar: null, duration: 200},
                init: function () {
                    "slide" === this.mode && this.$addClass("uk-navbar-dropbar-slide")
                },
                events: [{
                    name: "beforeshow", el: function () {
                        return this.navbar.$el
                    }, handler: function (t, e) {
                        var i = e.$el, n = e.dir;
                        if ("bottom" === n && !d(i, this.$el))return i.appendTo(this.$el), e.show(), !1
                    }
                }, {
                    name: "mouseleave", handler: function () {
                        var t = this.navbar.getActive();
                        t && !this.$el.is(":hover") && t.hide()
                    }
                }, {
                    name: "beforeshow", handler: function (t, e) {
                        var i = e.$el;
                        this.clsDrop && i.addClass(this.clsDrop + "-dropbar"), this.transitionTo(i.outerHeight(!0))
                    }
                }, {
                    name: "beforehide", handler: function (t, e) {
                        var i = e.$el, n = this.navbar.getActive();
                        if (this.$el.is(":hover") && n && n.$el.is(i))return !1
                    }
                }, {
                    name: "hide", handler: function (t, e) {
                        var i = e.$el, n = this.navbar.getActive();
                        (!n || n && n.$el.is(i)) && this.transitionTo(0)
                    }
                }],
                methods: {
                    transitionTo: function (t) {
                        return this.$el.height(this.$el[0].offsetHeight ? this.$el.height() : 0), _t.cancel(this.$el), _t.start(this.$el, {height: t}, this.duration).then(null, G)
                    }
                }
            })
        }, bi = function (t) {
            t.component("offcanvas", {
                mixins: [qe],
                args: "mode",
                props: {content: String, mode: String, flip: Boolean, overlay: Boolean},
                defaults: {
                    content: ".uk-offcanvas-content:first",
                    mode: "slide",
                    flip: !1,
                    overlay: !1,
                    clsPage: "uk-offcanvas-page",
                    clsContainer: "uk-offcanvas-container",
                    clsPanel: "uk-offcanvas-bar",
                    clsFlip: "uk-offcanvas-flip",
                    clsContent: "uk-offcanvas-content",
                    clsContentAnimation: "uk-offcanvas-content-animation",
                    clsSidebarAnimation: "uk-offcanvas-bar-animation",
                    clsMode: "uk-offcanvas",
                    clsOverlay: "uk-offcanvas-overlay",
                    selClose: ".uk-offcanvas-close"
                },
                computed: {
                    content: function () {
                        return Ot(k(this.$props.content, this.$el))
                    }, clsFlip: function () {
                        return this.flip ? this.$props.clsFlip : ""
                    }, clsOverlay: function () {
                        return this.overlay ? this.$props.clsOverlay : ""
                    }, clsMode: function () {
                        return this.$props.clsMode + "-" + this.mode
                    }, clsSidebarAnimation: function () {
                        return "none" === this.mode || "reveal" === this.mode ? "" : this.$props.clsSidebarAnimation
                    }, clsContentAnimation: function () {
                        return "push" !== this.mode && "reveal" !== this.mode ? "" : this.$props.clsContentAnimation
                    }, transitionElement: function () {
                        return "reveal" === this.mode ? this.panel.parent() : this.panel
                    }
                },
                update: {
                    write: function () {
                        this.isToggled() && ((this.overlay || this.clsContentAnimation) && this.content.width(window.innerWidth - this.scrollbarWidth), this.overlay && (this.content.height(window.innerHeight), Ie && this.content.scrollTop(Ie.y)))
                    }, events: ["resize"]
                },
                events: [{
                    name: "click", delegate: function () {
                        return 'a[href^="#"]'
                    }, handler: function (t) {
                        var e = t.currentTarget;
                        e.hash && this.content.find(e.hash).length && (Ie = null, this.hide())
                    }
                }, {
                    name: "beforescroll", filter: function () {
                        return this.overlay
                    }, handler: function (t, e, i) {
                        if (e && i && this.isToggled() && this.content.find(i).length)return this.$el.one("hidden", function () {
                            return e.scrollTo(i)
                        }), !1
                    }
                }, {
                    name: "show", self: !0, handler: function () {
                        Ie = Ie || {
                                x: window.pageXOffset,
                                y: window.pageYOffset
                            }, "reveal" !== this.mode || this.panel.parent().hasClass(this.clsMode) || this.panel.wrap("<div>").parent().addClass(this.clsMode), jt.css("overflow-y", (!this.clsContentAnimation || this.flip) && this.scrollbarWidth && this.overlay ? "scroll" : ""), this.body.addClass(this.clsContainer + " " + this.clsFlip + " " + this.clsOverlay).height(), this.content.addClass(this.clsContentAnimation), this.panel.addClass(this.clsSidebarAnimation + " " + ("reveal" !== this.mode ? this.clsMode : "")), this.$el.addClass(this.clsOverlay).css("display", "block").height()
                    }
                }, {
                    name: "hide", self: !0, handler: function () {
                        this.content.removeClass(this.clsContentAnimation), ("none" === this.mode || this.getActive() && this.getActive() !== this) && this.panel.trigger(he)
                    }
                }, {
                    name: "hidden", self: !0, handler: function () {
                        if ("reveal" === this.mode && this.panel.unwrap(), this.overlay) {
                            if (!Ie) {
                                var t = this.content[0], e = t.scrollLeft, i = t.scrollTop;
                                Ie = {x: e, y: i}
                            }
                        } else Ie = {x: window.pageXOffset, y: window.pageYOffset};
                        this.panel.removeClass(this.clsSidebarAnimation + " " + this.clsMode), this.$el.removeClass(this.clsOverlay).css("display", ""), this.body.removeClass(this.clsContainer + " " + this.clsFlip + " " + this.clsOverlay).scrollTop(Ie.y), jt.css("overflow-y", ""), this.content.width("").height(""), window.scrollTo(Ie.x, Ie.y), Ie = null
                    }
                }, {
                    name: "swipeLeft swipeRight", handler: function (t) {
                        this.isToggled() && xt(t) && ("swipeLeft" === t.type && !this.flip || "swipeRight" === t.type && this.flip) && this.hide()
                    }
                }]
            })
        }, Ci = function (t) {
            t.component("responsive", {
                props: ["width", "height"], init: function () {
                    this.$addClass("uk-responsive-width")
                }, update: {
                    read: function () {
                        this.dim = !!(this.$el.is(":visible") && this.width && this.height) && {
                                width: this.$el.parent().width(),
                                height: this.height
                            }
                    }, write: function () {
                        this.dim && this.$el.height(Zt.contain({height: this.height, width: this.width}, this.dim).height)
                    }, events: ["load", "resize"]
                }
            })
        }, $i = function (t) {
            t.component("scroll", {
                props: {duration: Number, easing: String, offset: Number},
                defaults: {duration: 1e3, easing: "easeOutExpo", offset: 0},
                methods: {
                    scrollTo: function (t) {
                        var e = this, i = ut(Ot(t)) - this.offset, n = w(), o = window.innerHeight;
                        i + o > n && (i = n - o), a(this.$el, "beforescroll", [this, t]).result !== !1 && Ot("html,body").stop().animate({scrollTop: Math.round(i)}, this.duration, this.easing).promise().then(function () {
                            return e.$el.trigger("scrolled", [e, t])
                        })
                    }
                },
                events: {
                    click: function (t) {
                        t.isDefaultPrevented() || (t.preventDefault(), this.scrollTo(Ot(this.$el[0].hash).length ? this.$el[0].hash : "body"))
                    }
                }
            }), Ot.easing.easeOutExpo = Ot.easing.easeOutExpo || function (t, e, i, n, o) {
                    return e === o ? i + n : n * (-Math.pow(2, -10 * e / o) + 1) + i
                }
        }, Ti = function (t) {
            t.component("scrollspy", {
                args: "cls",
                props: {
                    cls: "list",
                    target: String,
                    hidden: Boolean,
                    offsetTop: Number,
                    offsetLeft: Number,
                    repeat: Boolean,
                    delay: Number
                },
                defaults: {
                    cls: ["uk-scrollspy-inview"],
                    target: !1,
                    hidden: !0,
                    offsetTop: 0,
                    offsetLeft: 0,
                    repeat: !1,
                    delay: 0,
                    inViewClass: "uk-scrollspy-inview"
                },
                computed: {
                    elements: function () {
                        return this.target && Ot(this.target, this.$el) || this.$el
                    }
                },
                update: [{
                    write: function () {
                        this.hidden && this.elements.filter(":not(." + this.inViewClass + ")").css("visibility", "hidden")
                    }
                }, {
                    read: function () {
                        var t = this;
                        this.elements.each(function (e, i) {
                            if (!i._scrollspy) {
                                var n = Ot(i).attr("uk-scrollspy-class");
                                i._scrollspy = {toggles: n && n.split(",") || t.cls}
                            }
                            i._scrollspy.show = g(i, t.offsetTop, t.offsetLeft)
                        })
                    }, write: function () {
                        var t = this, e = 1 === this.elements.length ? 1 : 0;
                        this.elements.each(function (i, n) {
                            var o = Ot(n), s = n._scrollspy, r = s.toggles[i] || s.toggles[0];
                            if (s.show) {
                                if (!s.inview && !s.timer) {
                                    var a = function () {
                                        o.css("visibility", "").addClass(t.inViewClass).toggleClass(r).trigger("inview"), t.$update(), s.inview = !0, delete s.timer
                                    };
                                    t.delay && e ? s.timer = setTimeout(a, t.delay * e) : a(), e++
                                }
                            } else s.inview && t.repeat && (s.timer && (clearTimeout(s.timer), delete s.timer), o.removeClass(t.inViewClass).toggleClass(r).css("visibility", t.hidden ? "hidden" : "").trigger("outview"), t.$update(), s.inview = !1)
                        })
                    }, events: ["scroll", "load", "resize"]
                }]
            })
        }, Si = function (t) {
            t.component("scrollspy-nav", {
                props: {
                    cls: String,
                    closest: String,
                    scroll: Boolean,
                    overflow: Boolean,
                    offset: Number
                },
                defaults: {cls: "uk-active", closest: !1, scroll: !1, overflow: !0, offset: 0},
                computed: {
                    links: function () {
                        return this.$el.find('a[href^="#"]').filter(function (t, e) {
                            return e.hash
                        })
                    }, elements: function () {
                        return this.closest ? this.links.closest(this.closest) : this.links
                    }, targets: function () {
                        return Ot(this.links.toArray().map(function (t) {
                            return t.hash
                        }).join(","))
                    }
                },
                update: [{
                    read: function () {
                        this.scroll && t.scroll(this.links, {offset: this.offset || 0})
                    }
                }, {
                    read: function () {
                        var t = this, e = window.pageYOffset + this.offset + 1, i = w() - window.innerHeight + this.offset;
                        this.active = !1, this.targets.each(function (n, o) {
                            var s = ut(o), r = n + 1 === t.targets.length;
                            if (!t.overflow && (0 === n && s > e || r && s + o.offsetTop < e))return !1;
                            if (r || !(ut(t.targets.eq(n + 1)) <= e)) {
                                if (e >= i)for (var a = t.targets.length - 1; a > n; a--)if (g(t.targets[a])) {
                                    o = t.targets[a];
                                    break
                                }
                                return !(t.active = z(t.links.filter('[href="#' + o.id + '"]')))
                            }
                        })
                    }, write: function () {
                        this.links.blur(), this.elements.removeClass(this.cls), this.active && this.$el.trigger("active", [this.active, (this.closest ? this.active.closest(this.closest) : this.active).addClass(this.cls)])
                    }, events: ["scroll", "load", "resize"]
                }]
            })
        }, Li = function (e) {
            e.component("sticky", {
                mixins: [_e],
                attrs: !0,
                props: {
                    top: null,
                    bottom: Boolean,
                    offset: Number,
                    animation: String,
                    clsActive: String,
                    clsInactive: String,
                    clsFixed: String,
                    clsBelow: String,
                    selTarget: String,
                    widthElement: "jQuery",
                    showOnUp: Boolean,
                    media: "media",
                    target: Number
                },
                defaults: {
                    top: 0,
                    bottom: !1,
                    offset: 0,
                    animation: "",
                    clsActive: "uk-active",
                    clsInactive: "",
                    clsFixed: "uk-sticky-fixed",
                    clsBelow: "uk-sticky-below",
                    selTarget: "",
                    widthElement: !1,
                    showOnUp: !1,
                    media: !1,
                    target: !1
                },
                computed: {
                    selTarget: function () {
                        return this.$props.selTarget && z(this.$props.selTarget, this.$el) || this.$el
                    }
                },
                connected: function () {
                    this.placeholder = Ot('<div class="uk-sticky-placeholder"></div>'), this.widthElement = this.$props.widthElement || this.placeholder, this.isActive || this.hide()
                },
                disconnected: function () {
                    this.isActive && (this.isActive = !1, this.hide(), this.$removeClass(this.clsInactive)), this.placeholder.remove(), this.placeholder = null, this.widthElement = null
                },
                ready: function () {
                    var t = this;
                    if (this.target && location.hash && window.pageYOffset > 0) {
                        var e = k(location.hash);
                        e && te(function () {
                            var i = ut(e), n = ut(t.$el), o = t.$el[0].offsetHeight;
                            n + o >= i && n <= i + e[0].offsetHeight && window.scrollTo(0, i - o - t.target - t.offset)
                        })
                    }
                },
                events: [{
                    name: "active", handler: function () {
                        this.$addClass(this.selTarget, this.clsActive), this.$removeClass(this.selTarget, this.clsInactive)
                    }
                }, {
                    name: "inactive", handler: function () {
                        this.$addClass(this.selTarget, this.clsInactive), this.$removeClass(this.selTarget, this.clsActive)
                    }
                }],
                update: [{
                    write: function () {
                        var e, i = this, n = (this.isActive ? this.placeholder : this.$el)[0].offsetHeight;
                        this.placeholder.css("height", "absolute" !== this.$el.css("position") ? n : "").css(this.$el.css(["marginTop", "marginBottom", "marginLeft", "marginRight"])), document.documentElement.contains(this.placeholder[0]) || this.placeholder.insertAfter(this.$el).attr("hidden", !0), this.width = this.widthElement.attr("hidden", null)[0].offsetWidth, this.widthElement.attr("hidden", !this.isActive), this.topOffset = ut(this.isActive ? this.placeholder : this.$el), this.bottomOffset = this.topOffset + n, ["top", "bottom"].forEach(function (n) {
                            i[n] = i.$props[n], i[n] && (t.isNumeric(i[n]) ? i[n] = i[n + "Offset"] + parseFloat(i[n]) : H(i[n]) && i[n].match(/^-?\d+vh$/) ? i[n] = window.innerHeight * parseFloat(i[n]) / 100 : (e = i[n] === !0 ? i.$el.parent() : k(i[n], i.$el), e && (i[n] = ut(e) + e[0].offsetHeight)))
                        }), this.top = Math.max(parseFloat(this.top), this.topOffset) - this.offset, this.bottom = this.bottom && this.bottom - n, this.inactive = this.media && !window.matchMedia(this.media).matches, this.isActive && this.update()
                    }, events: ["load", "resize"]
                }, {
                    read: function () {
                        this.offsetTop = ut(this.$el), this.scroll = window.pageYOffset, this.visible = this.$el.is(":visible")
                    }, write: function (t) {
                        var e = this;
                        void 0 === t && (t = {});
                        var i = t.dir, n = this.scroll;
                        if (!(n < 0 || !this.visible || this.disabled || this.showOnUp && !i))if (this.inactive || n < this.top || this.showOnUp && (n <= this.top || "down" === i || "up" === i && !this.isActive && n <= this.bottomOffset)) {
                            if (!this.isActive)return;
                            this.isActive = !1, this.animation && n > this.topOffset ? Rt.cancel(this.$el).then(function () {
                                return Rt.out(e.$el, e.animation).then(function () {
                                    return e.hide()
                                }, G)
                            }) : this.hide()
                        } else this.isActive ? this.update() : this.animation ? Rt.cancel(this.$el).then(function () {
                            e.show(), Rt["in"](e.$el, e.animation).then(null, G)
                        }) : this.show()
                    }, events: ["scroll"]
                }],
                methods: {
                    show: function () {
                        this.isActive = !0, this.update(), this.placeholder.attr("hidden", null)
                    }, hide: function () {
                        this.isActive && !this.$hasClass(this.selTarget, this.clsActive) || this.$el.trigger("inactive"), this.$removeClass(this.clsFixed, this.clsBelow), this.$el.css({
                            position: "",
                            top: "",
                            width: ""
                        }), this.placeholder.attr("hidden", !0)
                    }, update: function () {
                        var t = this, e = Math.max(0, this.offset), i = this.scroll > this.top;
                        this.bottom && this.scroll > this.bottom - this.offset && (e = this.bottom - this.scroll), this.$el.css({
                            position: "fixed",
                            top: e + "px",
                            width: this.width
                        }), this.$hasClass(this.selTarget, this.clsActive) ? i || this.$el.trigger("inactive") : i && this.$el.trigger("active"), this.$toggleClass(this.clsBelow, this.scroll > this.bottomOffset), this.showOnUp ? te(function () {
                            return t.$addClass(t.clsFixed)
                        }) : this.$addClass(this.clsFixed)
                    }
                }
            })
        }, Ai = {}, Mi = new DOMParser, Ei = function (e) {
            e.component("svg", {
                attrs: !0,
                props: {
                    id: String,
                    icon: String,
                    src: String,
                    style: String,
                    width: Number,
                    height: Number,
                    ratio: Number,
                    "class": String
                },
                defaults: {ratio: 1, id: !1, exclude: ["src"], "class": ""},
                init: function () {
                    this["class"] += " uk-svg"
                },
                connected: function () {
                    var t = this;
                    if (!this.icon && this.src && ~this.src.indexOf("#")) {
                        var e = this.src.split("#");
                        e.length > 1 && (this.src = e[0], this.icon = e[1])
                    }
                    this.width = this.$props.width, this.height = this.$props.height, this.svg = this.getSvg().then(function (e) {
                        return S(function (i, n) {
                            var o, s;
                            if (!e)return void n("SVG not found.");
                            if (t.icon)if (o = e.getElementById(t.icon)) {
                                var r = o.outerHTML;
                                if (!r) {
                                    var a = document.createElement("div");
                                    a.appendChild(o.cloneNode(!0)), r = a.innerHTML
                                }
                                r = r.replace(/<symbol/g, "<svg" + (~r.indexOf("xmlns") ? "" : ' xmlns="http://www.w3.org/2000/svg"')).replace(/symbol>/g, "svg>"), s = Mi.parseFromString(r, "image/svg+xml").documentElement
                            } else e.querySelector("symbol") || (s = e.documentElement.cloneNode(!0)); else s = e.documentElement.cloneNode(!0);
                            if (!s)return void n("SVG not found.");
                            var l = s.getAttribute("viewBox");
                            l && (l = l.split(" "), t.width = t.width || l[2], t.height = t.height || l[3]), t.width *= t.ratio, t.height *= t.ratio;
                            for (var c in t.$options.props)t[c] && !~t.exclude.indexOf(c) && s.setAttribute(c, t[c]);
                            t.id || s.removeAttribute("id"), t.width && !t.height && s.removeAttribute("height"), t.height && !t.width && s.removeAttribute("width");
                            var h = t.$el[0];
                            x(h) || "CANVAS" === h.tagName ? (t.$el.attr({
                                hidden: !0,
                                id: null
                            }), h.nextSibling ? s.isEqualNode(h.nextSibling) ? s = h.nextSibling : h.parentNode.insertBefore(s, h.nextSibling) : h.parentNode.appendChild(s)) : h.lastChild && s.isEqualNode(h.lastChild) ? s = h.lastChild : h.appendChild(s), i(s)
                        })
                    })
                },
                disconnected: function () {
                    x(this.$el) && this.$el.attr({
                        hidden: null,
                        id: this.id || null
                    }), this.svg && (this.svg.then(function (t) {
                        return t.parentNode && t.parentNode.removeChild(t)
                    }, G), this.svg = null)
                },
                methods: {
                    getSvg: function () {
                        var e = this;
                        return this.src ? Ai[this.src] ? Ai[this.src] : (Ai[this.src] = S(function (i, n) {
                            0 === e.src.lastIndexOf("data:", 0) ? i(e.parse(decodeURIComponent(e.src.split(",")[1]))) : t.ajax(e.src, {dataType: "html"}).then(function (t) {
                                i(e.parse(t))
                            }, function () {
                                n("SVG not found.")
                            })
                        }), Ai[this.src]) : S.reject()
                    }, parse: function (t) {
                        var e = Mi.parseFromString(t, "image/svg+xml");
                        return e.documentElement && "svg" === e.documentElement.nodeName ? e : null
                    }
                }
            })
        }, Di = function (t) {
            t.component("switcher", {
                mixins: [ze],
                args: "connect",
                props: {connect: String, toggle: String, active: Number, swiping: Boolean},
                defaults: {
                    connect: !1,
                    toggle: " > *",
                    active: 0,
                    swiping: !0,
                    cls: "uk-active",
                    clsContainer: "uk-switcher",
                    attrItem: "uk-switcher-item",
                    queued: !0
                },
                computed: {
                    connects: function () {
                        return k(this.connect, this.$el) || Ot(this.$el.next("." + this.clsContainer))
                    }, toggles: function () {
                        return Ot(this.toggle, this.$el)
                    }
                },
                events: [{
                    name: "click", delegate: function () {
                        return this.toggle + ":not(.uk-disabled)"
                    }, handler: function (t) {
                        t.preventDefault(), this.show(t.currentTarget)
                    }
                }, {
                    name: "click", el: function () {
                        return this.connects
                    }, delegate: function () {
                        return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                    }, handler: function (t) {
                        t.preventDefault(), this.show(Ot(t.currentTarget)[t.currentTarget.hasAttribute(this.attrItem) ? "attr" : "data"](this.attrItem))
                    }
                }, {
                    name: "swipeRight swipeLeft", filter: function () {
                        return this.swiping
                    }, el: function () {
                        return this.connects
                    }, handler: function (t) {
                        xt(t) && (t.preventDefault(), window.getSelection().toString() || this.show("swipeLeft" === t.type ? "next" : "previous"))
                    }
                }],
                update: function () {
                    this.updateAria(this.connects.children()), this.show(z(this.toggles.filter("." + this.cls + ":first")) || z(this.toggles.eq(this.active)) || this.toggles.first())
                },
                methods: {
                    show: function (t) {
                        for (var e, i = this, n = this.toggles.length, o = this.connects.children("." + this.cls).index(),
                                 s = o >= 0, r = y(t, this.toggles, o), a = "previous" === t ? -1 : 1,
                                 l = 0; l < n; l++, r = (r + a + n) % n)if (!i.toggles.eq(r).is(".uk-disabled, [disabled]")) {
                            e = i.toggles.eq(r);
                            break
                        }
                        !e || o >= 0 && e.hasClass(this.cls) || o === r || (this.toggles.removeClass(this.cls).attr("aria-expanded", !1), e.addClass(this.cls).attr("aria-expanded", !0), s ? this.toggleElement(this.connects.children(":nth-child(" + (o + 1) + "),:nth-child(" + (r + 1) + ")")) : this.toggleNow(this.connects.children(":nth-child(" + (r + 1) + ")")))
                    }
                }
            })
        }, Oi = function (t) {
            t.component("tab", t.components.switcher.extend({
                mixins: [_e],
                name: "tab",
                props: {media: "media"},
                defaults: {media: 960, attrItem: "uk-tab-item"},
                init: function () {
                    var e = this.$hasClass("uk-tab-left") && "uk-tab-left" || this.$hasClass("uk-tab-right") && "uk-tab-right";
                    e && t.toggle(this.$el, {cls: e, mode: "media", media: this.media})
                }
            }))
        }, Bi = function (t) {
            t.component("toggle", {
                mixins: [t.mixin.togglable],
                args: "target",
                props: {href: String, target: null, mode: "list", media: "media"},
                defaults: {href: !1, target: !1, mode: "click", queued: !0, media: !1},
                computed: {
                    target: function () {
                        return k(this.$props.target || this.href, this.$el) || this.$el
                    }
                },
                events: [{
                    name: le + " " + ce, filter: function () {
                        return ~this.mode.indexOf("hover")
                    }, handler: function (t) {
                        xt(t) || this.toggle("toggle" + (t.type === le ? "show" : "hide"))
                    }
                }, {
                    name: "click", filter: function () {
                        return ~this.mode.indexOf("click") || oe
                    }, handler: function (t) {
                        if (xt(t) || ~this.mode.indexOf("click")) {
                            var e = Ot(t.target).closest("a[href]")[0];
                            (Ot(t.target).closest('a[href="#"], button').length || e && (this.cls || !this.target.is(":visible") || e.hash && this.target.is(e.hash))) && t.preventDefault(), this.toggle()
                        }
                    }
                }],
                update: {
                    write: function () {
                        if (~this.mode.indexOf("media") && this.media) {
                            var t = this.isToggled(this.target);
                            (window.matchMedia(this.media).matches ? !t : t) && this.toggle()
                        }
                    }, events: ["load", "resize"]
                },
                methods: {
                    toggle: function (t) {
                        a(this.target, t || "toggle", [this], !0).isDefaultPrevented() || this.toggleElement(this.target)
                    }
                }
            })
        }, Ni = function (t) {
            t.component("leader", {
                mixins: [_e],
                props: {fill: String, media: "media"},
                defaults: {
                    fill: "",
                    media: !1,
                    clsWrapper: "uk-leader-fill",
                    clsHide: "uk-leader-hide",
                    attrFill: "data-fill"
                },
                computed: {
                    fill: function () {
                        return this.$props.fill || J("leader-fill")
                    }
                },
                connected: function () {
                    this.wrapper = this.$el.wrapInner('<span class="' + this.clsWrapper + '">').children().first()
                },
                disconnected: function () {
                    this.wrapper.contents().unwrap()
                },
                update: [{
                    read: function () {
                        var t = this._width;
                        this._width = Math.floor(this.$el[0].offsetWidth / 2), this._changed = t !== this._width, this._hide = this.media && !window.matchMedia(this.media).matches
                    }, write: function () {
                        this.wrapper.toggleClass(this.clsHide, this._hide), this._changed && this.wrapper.attr(this.attrFill, new Array(this._width).join(this.fill))
                    }, events: ["load", "resize"]
                }]
            })
        }, Hi = function (t) {
            t.component("video", {
                props: {automute: Boolean, autoplay: Boolean},
                defaults: {automute: !1, autoplay: !0},
                computed: {
                    el: function () {
                        return this.$el[0]
                    }
                },
                ready: function () {
                    this.player = new me(this.el), this.automute && this.player.mute()
                },
                update: {
                    write: function () {
                        this.player && this.autoplay && (0 === this.el.offsetHeight || "hidden" === this.$el.css("visibility") ? this.player.pause() : this.player.play())
                    }, events: ["load"]
                }
            })
        }, ji = function (t) {
            var e = 0, i = 0;
            n(window, "load resize", t.update), n(window, "scroll", function (i) {
                i.dir = e < window.pageYOffset ? "down" : "up", e = window.pageYOffset, t.update(i), pe.flush()
            }), de && n(document, de, function (t) {
                var e = t.target;
                (Q(e, "animationName") || "").match(/^uk-.*(left|right)/) && (i++, document.body.style.overflowX = "hidden", setTimeout(function () {
                    --i || (document.body.style.overflowX = "")
                }, V(Q(e, "animationDuration")) + 100))
            }, !0), t.use(Bi), t.use(Re), t.use(Ue), t.use(Hi), t.use(Ze), t.use(Ve), t.use(Ye), t.use(Xe), t.use(Je), t.use(Ke), t.use(ti), t.use(wi), t.use(Ge), t.use(Qe), t.use(Ni), t.use(yi), t.use(xi), t.use(ki), t.use(bi), t.use(Ci), t.use($i), t.use(Ti), t.use(Si), t.use(Li), t.use(Ei), t.use(mi), t.use(Di), t.use(Oi)
        };
    return je.version = "3.0.0-beta.30", We(je), ji(je), je.use(Ct), je.use(Tt), je.use(St), je.use(Lt), je.use(At), je.use(Mt), je.use(Et), je.use(Dt), Me(je), je
}), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("uikiticons", e) : t.UIkitIcons = e()
}(this, function () {
    "use strict";
    function t(e) {
        t.installed || e.icon.add(Yt)
    }

    var e = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="5" y="2" width="10" height="1"></rect> <rect x="3" y="4" width="14" height="1"></rect> <rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"></rect></svg>',
        i = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle> <line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"></line></svg>',
        n = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"></path> <path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"></path> <rect x="13" y="4" width="5" height="1.4"></rect></svg>',
        o = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z"></path> <path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16"></path></svg>',
        s = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z"></path></svg>',
        r = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"></path></svg>',
        a = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5"></polygon></svg>',
        l = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"></path> <rect width="1" height="3" x="6" y="2"></rect> <rect width="1" height="3" x="13" y="2"></rect></svg>',
        c = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8"></circle> <path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"></path></svg>',
        h = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="7.3" cy="17.3" r="1.4"></circle> <circle cx="13.3" cy="17.3" r="1.4"></circle> <polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"></polyline></svg>',
        d = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline></svg>',
        u = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle> <rect x="9" y="4" width="1" height="7"></rect> <path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"></path></svg>',
        p = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"></path> <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"></path></svg>',
        f = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"></polyline> <polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"></polyline></svg>',
        g = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"></circle> <path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"></path></svg>',
        v = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"></path></svg>',
        m = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5"></polygon> <circle cx="10" cy="8" r="1"></circle> <circle cx="6" cy="8" r="1"></circle> <circle cx="14" cy="8" r="1"></circle></svg>',
        w = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13"></polyline> <path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z"></path></svg>',
        y = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16"></rect> <polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17"></polyline></svg>',
        x = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14"></ellipse> <path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11"></path> <path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25"></path> <path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64"></path></svg>',
        k = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="8" y="15" width="1" height="2"></rect> <rect x="11" y="15" width="1" height="2"></rect> <rect x="5" y="16" width="10" height="1"></rect> <rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11"></rect></svg>',
        b = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"></polyline> <rect x="3" y="17" width="13" height="1"></rect> <line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"></line></svg>',
        C = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"></path> <path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"></path> <path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"></path> <circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9"></circle></svg>',
        $ = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="13 2 18 2 18 7 17 7 17 3 13 3"></polygon> <polygon points="2 13 3 13 3 17 7 17 7 18 2 18"></polygon> <path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"></path></svg>',
        T = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path></svg>',
        S = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17"></rect></svg>',
        L = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="5.5" cy="9.5" r="3.5"></circle> <circle cx="14.5" cy="9.5" r="3.5"></circle></svg>',
        A = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5"></polygon></svg>',
        M = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z"></path></svg>',
        E = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z"></path></svg>',
        D = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"></polyline> <path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"></path> <rect x="9" y="4" width="1" height="7"></rect> <path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"></path></svg>',
        O = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"></path></svg>',
        B = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="3.5" y="1" width="1.531" height="11.471"></rect> <rect x="7.324" y="4.059" width="1.529" height="15.294"></rect> <rect x="11.148" y="4.059" width="1.527" height="15.294"></rect> <rect x="14.971" y="4.059" width="1.529" height="8.412"></rect></svg>',
        N = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z"></path></svg>',
        H = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="2" width="3" height="3"></rect> <rect x="8" y="2" width="3" height="3"></rect> <rect x="14" y="2" width="3" height="3"></rect> <rect x="2" y="8" width="3" height="3"></rect> <rect x="8" y="8" width="3" height="3"></rect> <rect x="14" y="8" width="3" height="3"></rect> <rect x="2" y="14" width="3" height="3"></rect> <rect x="8" y="14" width="3" height="3"></rect> <rect x="14" y="14" width="3" height="3"></rect></svg>',
        j = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="13" cy="7" r="1"></circle> <circle cx="7" cy="7" r="1"></circle> <circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"></circle> <path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"></path></svg>',
        P = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z"></path></svg>',
        I = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"></path></svg>',
        _ = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2"></polyline> <path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10"></path> <rect x="9" y="4" width="1" height="7"></rect> <path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625" id="Shape"></path></svg>',
        z = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"></polygon> <polygon points="15 4 18 4 18 7 17 7 17 5 15 5"></polygon> <polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"></polygon></svg>',
        q = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="16.1" cy="6.1" r="1.1"></circle> <rect fill="none" stroke="#000" x="0.5" y="2.5" width="19" height="15"></rect> <polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14"></polyline> <polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14"></polyline></svg>',
        F = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"></path> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle></svg>',
        W = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path> <circle cx="14.87" cy="5.26" r="1.09"></circle> <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path></svg>',
        R = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z"></path></svg>',
        U = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z"></path> <path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8"></path> <path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8"></path> <path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7"></path></svg>',
        Z = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect y="16" width="20" height="1"></rect> <rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10"></rect></svg>',
        V = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z"></path></svg>',
        Y = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975"></path></svg>',
        X = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"></path> <path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"></path></svg>',
        G = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="6" y="4" width="12" height="1"></rect> <rect x="6" y="9" width="12" height="1"></rect> <rect x="6" y="14" width="12" height="1"></rect> <rect x="2" y="4" width="2" height="1"></rect> <rect x="2" y="9" width="2" height="1"></rect> <rect x="2" y="14" width="2" height="1"></rect></svg>',
        Q = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"></path> <circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"></circle></svg>',
        J = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5"></rect> <path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"></path></svg>',
        K = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"></polyline> <path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"></path></svg>',
        tt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="4" width="16" height="1"></rect> <rect x="2" y="9" width="16" height="1"></rect> <rect x="2" y="14" width="16" height="1"></rect></svg>',
        et = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect height="1" width="18" y="9" x="1"></rect></svg>',
        it = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="3" cy="10" r="2"></circle> <circle cx="10" cy="10" r="2"></circle> <circle cx="17" cy="10" r="2"></circle></svg>',
        nt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="4,5 1,5 1,9 2,9 2,6 4,6 "></polygon> <polygon points="1,16 2,16 2,18 4,18 4,19 1,19 "></polygon> <polygon points="14,16 14,19 11,19 11,18 13,18 13,16 "></polygon> <rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13"></rect> <rect x="1" y="11" width="1" height="3"></rect> <rect x="6" y="18" width="3" height="1"></rect></svg>',
        ot = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"></polygon> <circle fill="none" stroke="#000" cx="10" cy="10" r="3.5"></circle></svg>',
        st = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19 "></polygon></svg>',
        rt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"></path> <path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"></path></svg>',
        at = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"></path> <circle cx="10.5" cy="16.5" r="0.8"></circle></svg>',
        lt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"></path></svg>',
        ct = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15"></polygon></svg>',
        ht = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="9" y="1" width="1" height="17"></rect> <rect x="1" y="9" width="17" height="1"></rect></svg>',
        dt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7"></polygon> <line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2"></line> <polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5"></polyline></svg>',
        ut = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3"></polygon> <line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1"></line> <polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5"></polyline></svg>',
        pt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle> <circle cx="10.44" cy="14.42" r="1.05"></circle> <path fill="none" stroke="#000" stroke-width="1.2" d="M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75"></path></svg>',
        ft = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"></path></svg>',
        gt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5"></path> <polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"></polyline></svg>',
        vt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z"></path></svg>',
        mt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="3.12" cy="16.8" r="1.85"></circle> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5"></path></svg>',
        wt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"></circle> <path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"></path></svg>',
        yt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="3" y="3" width="1" height="2"></rect> <rect x="5" y="3" width="1" height="2"></rect> <rect x="7" y="3" width="1" height="2"></rect> <rect x="16" y="3" width="1" height="1"></rect> <rect x="16" y="10" width="1" height="1"></rect> <circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4"></circle> <rect x="3" y="10" width="1" height="2"></rect> <rect x="5" y="10" width="1" height="2"></rect> <rect x="9.5" y="14" width="1" height="2"></rect> <rect x="3" y="17" width="6" height="1"></rect> <rect x="11" y="17" width="6" height="1"></rect> <rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5"></rect> <rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5"></rect></svg>',
        xt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"></ellipse> <ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"></ellipse> <circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"></circle> <rect x="1" y="3" width="3" height="1"></rect> <rect x="10" y="3" width="8" height="1"></rect> <rect x="1" y="9" width="8" height="1"></rect> <rect x="15" y="9" width="3" height="1"></rect> <rect x="1" y="15" width="3" height="1"></rect> <rect x="10" y="15" width="8" height="1"></rect></svg>',
        kt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="11 4 12 4 12 8 16 8 16 9 11 9"></polygon> <polygon points="4 11 9 11 9 16 8 16 8 12 4 12"></polygon> <path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12"></path></svg>',
        bt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"></line> <line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"></line> <circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"></circle> <circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"></circle> <circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"></circle></svg>',
        Ct = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z"></path> <rect x="6" y="6.5" width="1.5" height="8.5"></rect> <rect x="3" y="8" width="1.5" height="7"></rect> <rect y="10" width="1.5" height="5"></rect></svg>',
        $t = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"></polygon></svg>',
        Tt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z"></path> <rect x="3" y="10" width="15" height="1"></rect></svg>',
        St = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="1" y="3" width="18" height="1"></rect> <rect x="1" y="7" width="18" height="1"></rect> <rect x="1" y="11" width="18" height="1"></rect> <rect x="1" y="15" width="18" height="1"></rect></svg>',
        Lt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z"></path> <circle cx="10.5" cy="16.3" r="0.8"></circle></svg>',
        At = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"></path> <circle cx="14" cy="6" r="1"></circle></svg>',
        Mt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"></rect> <rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"></rect> <rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"></rect> <rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"></rect></svg>',
        Et = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"></polyline> <polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"></polyline> <rect x="8" y="7" width="1" height="9"></rect> <rect x="11" y="7" width="1" height="9"></rect> <rect x="2" y="3" width="16" height="1"></rect></svg>',
        Dt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"></path></svg>',
        Ot = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z"></path></svg>',
        Bt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="7" y="16" width="6" height="1"></rect> <rect fill="none" stroke="#000" x="0.5" y="3.5" width="19" height="11"></rect></svg>',
        Nt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"></path></svg>',
        Ht = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"></polygon> <polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"></polygon></svg>',
        jt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10"></rect> <path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"></path></svg>',
        Pt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8 "></polyline> <rect x="3" y="17" width="13" height="1"></rect> <line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4"></line></svg>',
        It = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"></circle> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"></path></svg>',
        _t = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"></circle> <path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"></path></svg>',
        zt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z"></path></svg>',
        qt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="14" r="1"></circle> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle> <path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z"></path></svg>',
        Ft = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"></path></svg>',
        Wt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z"></path></svg>',
        Rt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M1,10.5 L19,10.5"></path> <path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5"></path> <path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5"></path> <path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"></path> <circle fill="none" stroke="#000" cx="10" cy="10.5" r="9"></circle></svg>',
        Ut = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z"></path> <path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z"></path></svg>',
        Zt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z"></path></svg>',
        Vt = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"></path></svg>',
        Yt = {
            album: e,
            ban: i,
            behance: n,
            bell: o,
            bold: s,
            bolt: r,
            bookmark: a,
            calendar: l,
            camera: c,
            cart: h,
            check: d,
            clock: u,
            close: p,
            code: f,
            cog: g,
            comment: v,
            commenting: m,
            comments: w,
            copy: y,
            database: x,
            desktop: k,
            download: b,
            dribbble: C,
            expand: $,
            facebook: T,
            file: S,
            flickr: L,
            folder: A,
            forward: M,
            foursquare: E,
            future: D,
            github: O,
            gitter: B,
            google: N,
            grid: H,
            happy: j,
            hashtag: P,
            heart: I,
            history: _,
            home: z,
            image: q,
            info: F,
            instagram: W,
            italic: R,
            joomla: U,
            laptop: Z,
            lifesaver: V,
            link: Y,
            linkedin: X,
            list: G,
            location: Q,
            lock: J,
            mail: K,
            menu: tt,
            minus: et,
            more: it,
            move: nt,
            nut: ot,
            pagekit: st,
            pencil: rt,
            phone: at,
            pinterest: lt,
            play: ct,
            plus: ht,
            pull: dt,
            push: ut,
            question: pt,
            receiver: ft,
            refresh: gt,
            reply: vt,
            rss: mt,
            search: wt,
            server: yt,
            settings: xt,
            shrink: kt,
            social: bt,
            soundcloud: Ct,
            star: $t,
            strikethrough: Tt,
            table: St,
            tablet: Lt,
            tag: At,
            thumbnails: Mt,
            trash: Et,
            tripadvisor: Dt,
            tumblr: Ot,
            tv: Bt,
            twitter: Nt,
            uikit: Ht,
            unlock: jt,
            upload: Pt,
            user: It,
            users: _t,
            vimeo: zt,
            warning: qt,
            whatsapp: Ft,
            wordpress: Wt,
            world: Rt,
            xing: Ut,
            yelp: Zt,
            youtube: Vt,
            "500px": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719\t\tc0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449\t\tc-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045\t\tc-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z"></path> <path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066\t\tc0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564\t\tc0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271\t\tc0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z"></path> <path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521\t\tc-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53\t\tc-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203\t\tc-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604\t\tc0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645\t\tc1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z"></path> <path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461\t\tc0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882\t\tc0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881\t\tc-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461\t\tc-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915\t\tC5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0\t\tc0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408\t\tc0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406\t\tc-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799\t\tc0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468\t\tc-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607\t\tc0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038\t\tc-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113\t\tc-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z"></path></svg>',
            "arrow-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"></polygon> <line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"></line></svg>',
            "arrow-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"></polyline> <line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"></line></svg>',
            "arrow-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"></polyline> <line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"></line></svg>',
            "arrow-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"></polygon> <line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"></line></svg>',
            "chevron-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"></polyline></svg>',
            "chevron-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"></polyline></svg>',
            "chevron-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"></polyline></svg>',
            "chevron-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"></polyline></svg>',
            "cloud-download": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"></path> <polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16"></polyline> <path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"></path></svg>',
            "cloud-upload": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"></path> <polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75"></polyline> <path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"></path></svg>',
            "credit-card": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12"></rect> <rect x="1" y="7" width="18" height="3"></rect></svg>',
            "file-edit": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"></path> <polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"></polyline></svg>',
            "git-branch": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2"></circle> <circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2"></circle> <circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2"></circle> <path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5"></path></svg>',
            "git-fork": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79"></circle> <circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79"></circle> <ellipse fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" rx="1.79" ry="1.79"></ellipse> <path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57"></path></svg>',
            "github-alt": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z"></path></svg>',
            "google-plus": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z"></path> <polygon points="20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9 "></polygon></svg>',
            "minus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"></circle> <line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"></line></svg>',
            "more-vertical": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="3" r="2"></circle> <circle cx="10" cy="10" r="2"></circle> <circle cx="10" cy="17" r="2"></circle></svg>',
            "paint-bucket": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M6.42,2.33 L11.7,7.61"></path> <path d="M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z"></path></svg>',
            "phone-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z"></path> <circle cx="3.8" cy="10.5" r="0.8"></circle></svg>',
            "play-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"></polygon> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle></svg>',
            "plus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"></circle> <line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14"></line> <line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"></line></svg>',
            "quote-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z"></path> <path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z"></path></svg>',
            "sign-in": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"></polygon> <polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"></polygon></svg>',
            "sign-out": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"></polygon> <polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"></polygon></svg>',
            "tablet-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z"></path> <circle cx="3.7" cy="10.5" r="0.8"></circle></svg>',
            "triangle-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="5 7 15 7 10 12"></polygon></svg>',
            "triangle-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="12 5 7 10 12 15"></polygon></svg>',
            "triangle-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="8 5 13 10 8 15"></polygon></svg>',
            "triangle-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="5 13 10 8 15 13"></polygon></svg>',
            "video-camera": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="18,6 18,14 12,10 "></polygon> <rect x="2" y="5" width="12" height="10"></rect></svg>'
        };
    return "undefined" != typeof window && window.UIkit && window.UIkit.use(t), t
}), $(".main_slider").slick({
    dots: !0,
    infinite: !0,
    speed: 500,
    fade: !0,
    cssEase: "linear",
    arrows: !1
}), $(".news_slider").slick({
    infinite: !0,
    variableWidth: !0,
    draggable: !1
}), $(".universities_slider").slick({
    infinite: !1,
    variableWidth: !0,
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: !1
}), $(".gallery_slider").slick({infinite: !1, variableWidth: !0, slidesToShow: 4, slidesToScroll: 4});

    $('ul.uk-navbar-nav > li:nth-child(3) > a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    $('ul.uk-navbar-nav > li:nth-child(6) > a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    $('ul.uk-navbar-nav > li:last-child > a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    $('ul.uk-navbar-nav > li:nth-child(4) > a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });