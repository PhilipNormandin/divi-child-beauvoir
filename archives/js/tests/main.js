!function (t, n) { "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.Scrollbar = n() : t.Scrollbar = n() }(this, function () { return function (t) { function n(r) { if (e[r]) return e[r].exports; var o = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports } var e = {}; return n.m = t, n.c = e, n.d = function (t, e, r) { n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r }) }, n.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return n.d(e, "a", e), e }, n.o = function (t, n) { return Object.prototype.hasOwnProperty.call(t, n) }, n.p = "", n(n.s = 56) }([function (t, n, e) { var r = e(39)("wks"), o = e(16), i = e(2).Symbol, u = "function" == typeof i; (t.exports = function (t) { return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t)) }).store = r }, function (t, n) { t.exports = function (t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function (t, n) { var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = e) }, function (t, n) { var e = {}.hasOwnProperty; t.exports = function (t, n) { return e.call(t, n) } }, function (t, n) { var e = t.exports = { version: "2.5.1" }; "number" == typeof __e && (__e = e) }, function (t, n, e) { var r = e(2), o = e(4), i = e(11), u = e(6), c = e(10), s = function (t, n, e) { var a, f, l, p, h = t & s.F, d = t & s.G, v = t & s.S, y = t & s.P, m = t & s.B, g = d ? r : v ? r[n] || (r[n] = {}) : (r[n] || {}).prototype, b = d ? o : o[n] || (o[n] = {}), x = b.prototype || (b.prototype = {}); d && (e = n); for (a in e) f = !h && g && void 0 !== g[a], l = (f ? g : e)[a], p = m && f ? c(l, r) : y && "function" == typeof l ? c(Function.call, l) : l, g && u(g, a, l, t & s.U), b[a] != l && i(b, a, p), y && x[a] != l && (x[a] = l) }; r.core = o, s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s }, function (t, n, e) { var r = e(2), o = e(11), i = e(3), u = e(16)("src"), c = Function.toString, s = ("" + c).split("toString"); e(4).inspectSource = function (t) { return c.call(t) }, (t.exports = function (t, n, e, c) { var a = "function" == typeof e; a && (i(e, "name") || o(e, "name", n)), t[n] !== e && (a && (i(e, u) || o(e, u, t[n] ? "" + t[n] : s.join(String(n)))), t === r ? t[n] = e : c ? t[n] ? t[n] = e : o(t, n, e) : (delete t[n], o(t, n, e))) })(Function.prototype, "toString", function () { return "function" == typeof this && this[u] || c.call(this) }) }, function (t, n, e) { var r = e(8), o = e(40), i = e(42), u = Object.defineProperty; n.f = e(9) ? Object.defineProperty : function (t, n, e) { if (r(t), n = i(n, !0), r(e), o) try { return u(t, n, e) } catch (t) { } if ("get" in e || "set" in e) throw TypeError("Accessors not supported!"); return "value" in e && (t[n] = e.value), t } }, function (t, n, e) { var r = e(1); t.exports = function (t) { if (!r(t)) throw TypeError(t + " is not an object!"); return t } }, function (t, n, e) { t.exports = !e(12)(function () { return 7 != Object.defineProperty({}, "a", { get: function () { return 7 } }).a }) }, function (t, n, e) { var r = e(43); t.exports = function (t, n, e) { if (r(t), void 0 === n) return t; switch (e) { case 1: return function (e) { return t.call(n, e) }; case 2: return function (e, r) { return t.call(n, e, r) }; case 3: return function (e, r, o) { return t.call(n, e, r, o) } }return function () { return t.apply(n, arguments) } } }, function (t, n, e) { var r = e(7), o = e(17); t.exports = e(9) ? function (t, n, e) { return r.f(t, n, o(1, e)) } : function (t, n, e) { return t[n] = e, t } }, function (t, n) { t.exports = function (t) { try { return !!t() } catch (t) { return !0 } } }, function (t, n) { t.exports = {} }, function (t, n, e) { var r = e(10), o = e(48), i = e(49), u = e(8), c = e(19), s = e(50), a = {}, f = {}, n = t.exports = function (t, n, e, l, p) { var h, d, v, y, m = p ? function () { return t } : s(t), g = r(e, l, n ? 2 : 1), b = 0; if ("function" != typeof m) throw TypeError(t + " is not iterable!"); if (i(m)) { for (h = c(t.length); h > b; b++)if ((y = n ? g(u(d = t[b])[0], d[1]) : g(t[b])) === a || y === f) return y } else for (v = m.call(t); !(d = v.next()).done;)if ((y = o(v, g, d.value, n)) === a || y === f) return y }; n.BREAK = a, n.RETURN = f }, function (t, n, e) { var r = e(1); t.exports = function (t, n) { if (!r(t) || t._t !== n) throw TypeError("Incompatible receiver, " + n + " required!"); return t } }, function (t, n) { var e = 0, r = Math.random(); t.exports = function (t) { return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36)) } }, function (t, n) { t.exports = function (t, n) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n } } }, function (t, n, e) { var r = e(30), o = e(27); t.exports = function (t) { return r(o(t)) } }, function (t, n, e) { var r = e(26), o = Math.min; t.exports = function (t) { return t > 0 ? o(r(t), 9007199254740991) : 0 } }, function (t, n, e) { var r = e(27); t.exports = function (t) { return Object(r(t)) } }, function (t, n, e) { var r = e(16)("meta"), o = e(1), i = e(3), u = e(7).f, c = 0, s = Object.isExtensible || function () { return !0 }, a = !e(12)(function () { return s(Object.preventExtensions({})) }), f = function (t) { u(t, r, { value: { i: "O" + ++c, w: {} } }) }, l = function (t, n) { if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t; if (!i(t, r)) { if (!s(t)) return "F"; if (!n) return "E"; f(t) } return t[r].i }, p = function (t, n) { if (!i(t, r)) { if (!s(t)) return !0; if (!n) return !1; f(t) } return t[r].w }, h = function (t) { return a && d.NEED && s(t) && !i(t, r) && f(t), t }, d = t.exports = { KEY: r, NEED: !1, fastKey: l, getWeak: p, onFreeze: h } }, function (t, n, e) { "use strict"; var r = e(23), o = {}; o[e(0)("toStringTag")] = "z", o + "" != "[object z]" && e(6)(Object.prototype, "toString", function () { return "[object " + r(this) + "]" }, !0) }, function (t, n, e) { var r = e(24), o = e(0)("toStringTag"), i = "Arguments" == r(function () { return arguments }()), u = function (t, n) { try { return t[n] } catch (t) { } }; t.exports = function (t) { var n, e, c; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = u(n = Object(t), o)) ? e : i ? r(n) : "Object" == (c = r(n)) && "function" == typeof n.callee ? "Arguments" : c } }, function (t, n) { var e = {}.toString; t.exports = function (t) { return e.call(t).slice(8, -1) } }, function (t, n, e) { "use strict"; var r = e(59)(!0); e(28)(String, "String", function (t) { this._t = String(t), this._i = 0 }, function () { var t, n = this._t, e = this._i; return e >= n.length ? { value: void 0, done: !0 } : (t = r(n, e), this._i += t.length, { value: t, done: !1 }) }) }, function (t, n) { var e = Math.ceil, r = Math.floor; t.exports = function (t) { return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t) } }, function (t, n) { t.exports = function (t) { if (void 0 == t) throw TypeError("Can't call method on  " + t); return t } }, function (t, n, e) { "use strict"; var r = e(60), o = e(5), i = e(6), u = e(11), c = e(3), s = e(13), a = e(61), f = e(32), l = e(67), p = e(0)("iterator"), h = !([].keys && "next" in [].keys()), d = function () { return this }; t.exports = function (t, n, e, v, y, m, g) { a(e, n, v); var b, x, _, w = function (t) { if (!h && t in T) return T[t]; switch (t) { case "keys": case "values": return function () { return new e(this, t) } }return function () { return new e(this, t) } }, E = n + " Iterator", S = "values" == y, O = !1, T = t.prototype, M = T[p] || T["@@iterator"] || y && T[y], A = M || w(y), P = y ? S ? w("entries") : A : void 0, j = "Array" == n ? T.entries || M : M; if (j && (_ = l(j.call(new t))) !== Object.prototype && _.next && (f(_, E, !0), r || c(_, p) || u(_, p, d)), S && M && "values" !== M.name && (O = !0, A = function () { return M.call(this) }), r && !g || !h && !O && T[p] || u(T, p, A), s[n] = A, s[E] = d, y) if (b = { values: S ? A : w("values"), keys: m ? A : w("keys"), entries: P }, g) for (x in b) x in T || i(T, x, b[x]); else o(o.P + o.F * (h || O), n, b); return b } }, function (t, n, e) { var r = e(63), o = e(45); t.exports = Object.keys || function (t) { return r(t, o) } }, function (t, n, e) { var r = e(24); t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) { return "String" == r(t) ? t.split("") : Object(t) } }, function (t, n, e) { var r = e(39)("keys"), o = e(16); t.exports = function (t) { return r[t] || (r[t] = o(t)) } }, function (t, n, e) { var r = e(7).f, o = e(3), i = e(0)("toStringTag"); t.exports = function (t, n, e) { t && !o(t = e ? t : t.prototype, i) && r(t, i, { configurable: !0, value: n }) } }, function (t, n, e) { for (var r = e(68), o = e(29), i = e(6), u = e(2), c = e(11), s = e(13), a = e(0), f = a("iterator"), l = a("toStringTag"), p = s.Array, h = { CSSRuleList: !0, CSSStyleDeclaration: !1, CSSValueList: !1, ClientRectList: !1, DOMRectList: !1, DOMStringList: !1, DOMTokenList: !0, DataTransferItemList: !1, FileList: !1, HTMLAllCollection: !1, HTMLCollection: !1, HTMLFormElement: !1, HTMLSelectElement: !1, MediaList: !0, MimeTypeArray: !1, NamedNodeMap: !1, NodeList: !0, PaintRequestList: !1, Plugin: !1, PluginArray: !1, SVGLengthList: !1, SVGNumberList: !1, SVGPathSegList: !1, SVGPointList: !1, SVGStringList: !1, SVGTransformList: !1, SourceBufferList: !1, StyleSheetList: !0, TextTrackCueList: !1, TextTrackList: !1, TouchList: !1 }, d = o(h), v = 0; v < d.length; v++) { var y, m = d[v], g = h[m], b = u[m], x = b && b.prototype; if (x && (x[f] || c(x, f, p), x[l] || c(x, l, m), s[m] = p, g)) for (y in r) x[y] || i(x, y, r[y], !0) } }, function (t, n, e) { var r = e(6); t.exports = function (t, n, e) { for (var o in n) r(t, o, n[o], e); return t } }, function (t, n) { t.exports = function (t, n, e, r) { if (!(t instanceof n) || void 0 !== r && r in t) throw TypeError(e + ": incorrect invocation!"); return t } }, function (t, n, e) { "use strict"; var r = e(2), o = e(5), i = e(6), u = e(34), c = e(21), s = e(14), a = e(35), f = e(1), l = e(12), p = e(51), h = e(32), d = e(72); t.exports = function (t, n, e, v, y, m) { var g = r[t], b = g, x = y ? "set" : "add", _ = b && b.prototype, w = {}, E = function (t) { var n = _[t]; i(_, t, "delete" == t ? function (t) { return !(m && !f(t)) && n.call(this, 0 === t ? 0 : t) } : "has" == t ? function (t) { return !(m && !f(t)) && n.call(this, 0 === t ? 0 : t) } : "get" == t ? function (t) { return m && !f(t) ? void 0 : n.call(this, 0 === t ? 0 : t) } : "add" == t ? function (t) { return n.call(this, 0 === t ? 0 : t), this } : function (t, e) { return n.call(this, 0 === t ? 0 : t, e), this }) }; if ("function" == typeof b && (m || _.forEach && !l(function () { (new b).entries().next() }))) { var S = new b, O = S[x](m ? {} : -0, 1) != S, T = l(function () { S.has(1) }), M = p(function (t) { new b(t) }), A = !m && l(function () { for (var t = new b, n = 5; n--;)t[x](n, n); return !t.has(-0) }); M || (b = n(function (n, e) { a(n, b, t); var r = d(new g, n, b); return void 0 != e && s(e, y, r[x], r), r }), b.prototype = _, _.constructor = b), (T || A) && (E("delete"), E("has"), y && E("get")), (A || O) && E(x), m && _.clear && delete _.clear } else b = v.getConstructor(n, t, y, x), u(b.prototype, e), c.NEED = !0; return h(b, t), w[t] = b, o(o.G + o.W + o.F * (b != g), w), m || v.setStrong(b, t, y), b } }, function (t, n, e) { "use strict"; var r = e(5); t.exports = function (t) { r(r.S, t, { of: function () { for (var t = arguments.length, n = Array(t); t--;)n[t] = arguments[t]; return new this(n) } }) } }, function (t, n, e) { "use strict"; var r = e(5), o = e(43), i = e(10), u = e(14); t.exports = function (t) { r(r.S, t, { from: function (t) { var n, e, r, c, s = arguments[1]; return o(this), n = void 0 !== s, n && o(s), void 0 == t ? new this : (e = [], n ? (r = 0, c = i(s, arguments[2], 2), u(t, !1, function (t) { e.push(c(t, r++)) })) : u(t, !1, e.push, e), new this(e)) } }) } }, function (t, n, e) { var r = e(2), o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {}); t.exports = function (t) { return o[t] || (o[t] = {}) } }, function (t, n, e) { t.exports = !e(9) && !e(12)(function () { return 7 != Object.defineProperty(e(41)("div"), "a", { get: function () { return 7 } }).a }) }, function (t, n, e) { var r = e(1), o = e(2).document, i = r(o) && r(o.createElement); t.exports = function (t) { return i ? o.createElement(t) : {} } }, function (t, n, e) { var r = e(1); t.exports = function (t, n) { if (!r(t)) return t; var e, o; if (n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o; if ("function" == typeof (e = t.valueOf) && !r(o = e.call(t))) return o; if (!n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o; throw TypeError("Can't convert object to primitive value") } }, function (t, n) { t.exports = function (t) { if ("function" != typeof t) throw TypeError(t + " is not a function!"); return t } }, function (t, n, e) { var r = e(8), o = e(62), i = e(45), u = e(31)("IE_PROTO"), c = function () { }, s = function () { var t, n = e(41)("iframe"), r = i.length; for (n.style.display = "none", e(66).appendChild(n), n.src = "javascript:", t = n.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), s = t.F; r--;)delete s.prototype[i[r]]; return s() }; t.exports = Object.create || function (t, n) { var e; return null !== t ? (c.prototype = r(t), e = new c, c.prototype = null, e[u] = t) : e = s(), void 0 === n ? e : o(e, n) } }, function (t, n) { t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function (t, n) { t.exports = function (t, n) { return { value: n, done: !!t } } }, function (t, n, e) { "use strict"; var r = e(7).f, o = e(44), i = e(34), u = e(10), c = e(35), s = e(14), a = e(28), f = e(46), l = e(71), p = e(9), h = e(21).fastKey, d = e(15), v = p ? "_s" : "size", y = function (t, n) { var e, r = h(n); if ("F" !== r) return t._i[r]; for (e = t._f; e; e = e.n)if (e.k == n) return e }; t.exports = { getConstructor: function (t, n, e, a) { var f = t(function (t, r) { c(t, f, n, "_i"), t._t = n, t._i = o(null), t._f = void 0, t._l = void 0, t[v] = 0, void 0 != r && s(r, e, t[a], t) }); return i(f.prototype, { clear: function () { for (var t = d(this, n), e = t._i, r = t._f; r; r = r.n)r.r = !0, r.p && (r.p = r.p.n = void 0), delete e[r.i]; t._f = t._l = void 0, t[v] = 0 }, delete: function (t) { var e = d(this, n), r = y(e, t); if (r) { var o = r.n, i = r.p; delete e._i[r.i], r.r = !0, i && (i.n = o), o && (o.p = i), e._f == r && (e._f = o), e._l == r && (e._l = i), e[v]-- } return !!r }, forEach: function (t) { d(this, n); for (var e, r = u(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.n : this._f;)for (r(e.v, e.k, this); e && e.r;)e = e.p }, has: function (t) { return !!y(d(this, n), t) } }), p && r(f.prototype, "size", { get: function () { return d(this, n)[v] } }), f }, def: function (t, n, e) { var r, o, i = y(t, n); return i ? i.v = e : (t._l = i = { i: o = h(n, !0), k: n, v: e, p: r = t._l, n: void 0, r: !1 }, t._f || (t._f = i), r && (r.n = i), t[v]++ , "F" !== o && (t._i[o] = i)), t }, getEntry: y, setStrong: function (t, n, e) { a(t, n, function (t, e) { this._t = d(t, n), this._k = e, this._l = void 0 }, function () { for (var t = this, n = t._k, e = t._l; e && e.r;)e = e.p; return t._t && (t._l = e = e ? e.n : t._t._f) ? "keys" == n ? f(0, e.k) : "values" == n ? f(0, e.v) : f(0, [e.k, e.v]) : (t._t = void 0, f(1)) }, e ? "entries" : "values", !e, !0), l(n) } } }, function (t, n, e) { var r = e(8); t.exports = function (t, n, e, o) { try { return o ? n(r(e)[0], e[1]) : n(e) } catch (n) { var i = t.return; throw void 0 !== i && r(i.call(t)), n } } }, function (t, n, e) { var r = e(13), o = e(0)("iterator"), i = Array.prototype; t.exports = function (t) { return void 0 !== t && (r.Array === t || i[o] === t) } }, function (t, n, e) { var r = e(23), o = e(0)("iterator"), i = e(13); t.exports = e(4).getIteratorMethod = function (t) { if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)] } }, function (t, n, e) { var r = e(0)("iterator"), o = !1; try { var i = [7][r](); i.return = function () { o = !0 }, Array.from(i, function () { throw 2 }) } catch (t) { } t.exports = function (t, n) { if (!n && !o) return !1; var e = !1; try { var i = [7], u = i[r](); u.next = function () { return { done: e = !0 } }, i[r] = function () { return u }, t(i) } catch (t) { } return e } }, function (t, n) { n.f = {}.propertyIsEnumerable }, function (t, n, e) { var r = e(23), o = e(76); t.exports = function (t) { return function () { if (r(this) != t) throw TypeError(t + "#toJSON isn't generic"); return o(this) } } }, function (t, n, e) { var r = e(10), o = e(30), i = e(20), u = e(19), c = e(86); t.exports = function (t, n) { var e = 1 == t, s = 2 == t, a = 3 == t, f = 4 == t, l = 6 == t, p = 5 == t || l, h = n || c; return function (n, c, d) { for (var v, y, m = i(n), g = o(m), b = r(c, d, 3), x = u(g.length), _ = 0, w = e ? h(n, x) : s ? h(n, 0) : void 0; x > _; _++)if ((p || _ in g) && (v = g[_], y = b(v, _, m), t)) if (e) w[_] = y; else if (y) switch (t) { case 3: return !0; case 5: return v; case 6: return _; case 2: w.push(v) } else if (f) return !1; return l ? -1 : a || f ? f : w } } }, function (t, n, e) { "use strict"; var r = e(29), o = e(89), i = e(52), u = e(20), c = e(30), s = Object.assign; t.exports = !s || e(12)(function () { var t = {}, n = {}, e = Symbol(), r = "abcdefghijklmnopqrst"; return t[e] = 7, r.split("").forEach(function (t) { n[t] = t }), 7 != s({}, t)[e] || Object.keys(s({}, n)).join("") != r }) ? function (t, n) { for (var e = u(t), s = arguments.length, a = 1, f = o.f, l = i.f; s > a;)for (var p, h = c(arguments[a++]), d = f ? r(h).concat(f(h)) : r(h), v = d.length, y = 0; v > y;)l.call(h, p = d[y++]) && (e[p] = h[p]); return e } : s }, function (t, n, e) { t.exports = e(57) }, function (t, n, e) { "use strict"; function r(t, n) { function e() { this.constructor = t } K(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e) } function o(t, n, e, r) { var o, i = arguments.length, u = i < 3 ? n : null === r ? r = Object.getOwnPropertyDescriptor(n, e) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(t, n, e, r); else for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (u = (i < 3 ? o(u) : i > 3 ? o(n, e, u) : o(n, e)) || u); return i > 3 && u && Object.defineProperty(n, e, u), u } function i(t, n, e) { return t === t && (void 0 !== e && (t = t <= e ? t : e), void 0 !== n && (t = t >= n ? t : n)), t } function u(t) { var n = typeof t; return null != t && ("object" == n || "function" == n) } function c(t) { var n = ut.call(t, st), e = t[st]; try { t[st] = void 0; var r = !0 } catch (t) { } var o = ct.call(t); return r && (n ? t[st] = e : delete t[st]), o } function s(t) { return lt.call(t) } function a(t) { return null == t ? void 0 === t ? dt : ht : vt && vt in Object(t) ? at(t) : pt(t) } function f(t) { return null != t && "object" == typeof t } function l(t) { return "symbol" == typeof t || mt(t) && yt(t) == gt } function p(t) { if ("number" == typeof t) return t; if (bt(t)) return xt; if (Q(t)) { var n = "function" == typeof t.valueOf ? t.valueOf() : t; t = Q(n) ? n + "" : n } if ("string" != typeof t) return 0 === t ? t : +t; t = t.replace(_t, ""); var e = Et.test(t); return e || St.test(t) ? Ot(t.slice(2), e ? 2 : 8) : wt.test(t) ? xt : +t } function h(t, n, e) { return void 0 === e && (e = n, n = void 0), void 0 !== e && (e = Tt(e), e = e === e ? e : 0), void 0 !== n && (n = Tt(n), n = n === n ? n : 0), J(Tt(t), n, e) } function d(t, n) { return void 0 === t && (t = -1 / 0), void 0 === n && (n = 1 / 0), function (e, r) { var o = "_" + r; Object.defineProperty(e, r, { get: function () { return this[o] }, set: function (e) { Object.defineProperty(this, o, { value: Mt(e, t, n), enumerable: !1, writable: !0, configurable: !0 }) }, enumerable: !0, configurable: !0 }) } } function v(t, n) { var e = "_" + n; Object.defineProperty(t, n, { get: function () { return this[e] }, set: function (t) { Object.defineProperty(this, e, { value: !!t, enumerable: !1, writable: !0, configurable: !0 }) }, enumerable: !0, configurable: !0 }) } function y(t, n, e) { function r(n) { var e = p, r = h; return p = h = void 0, g = n, v = t.apply(r, e) } function o(t) { return g = t, y = setTimeout(c, n), b ? r(t) : v } function i(t) { var e = t - m, r = t - g, o = n - e; return x ? Dt(o, d - r) : o } function u(t) { var e = t - m, r = t - g; return void 0 === m || e >= n || e < 0 || x && r >= d } function c() { var t = Pt(); if (u(t)) return s(t); y = setTimeout(c, i(t)) } function s(t) { return y = void 0, _ && p ? r(t) : (p = h = void 0, v) } function a() { void 0 !== y && clearTimeout(y), g = 0, p = m = h = y = void 0 } function f() { return void 0 === y ? v : s(Pt()) } function l() { var t = Pt(), e = u(t); if (p = arguments, h = this, m = t, e) { if (void 0 === y) return o(m); if (x) return y = setTimeout(c, n), r(m) } return void 0 === y && (y = setTimeout(c, n)), v } var p, h, d, v, y, m, g = 0, b = !1, x = !1, _ = !0; if ("function" != typeof t) throw new TypeError(jt); return n = Tt(n) || 0, Q(e) && (b = !!e.leading, x = "maxWait" in e, d = x ? kt(Tt(e.maxWait) || 0, n) : d, _ = "trailing" in e ? !!e.trailing : _), l.cancel = a, l.flush = f, l } function m() { for (var t = [], n = 0; n < arguments.length; n++)t[n] = arguments[n]; return function (n, e, r) { var o = r.value; return { get: function () { return this.hasOwnProperty(e) || Object.defineProperty(this, e, { value: Lt.apply(void 0, [o].concat(t)) }), this[e] } } } } function g() { if (void 0 !== Y) return Y; var t = !1; try { var n = function () { }, e = Object.defineProperty({}, "passive", { get: function () { t = !0 } }); window.addEventListener("testPassive", n, e), window.removeEventListener("testPassive", n, e) } catch (t) { } return Y = !!t && { passive: !1 } } function b(t) { var n = zt.get(t) || []; return zt.set(t, n), function (t, e, r) { function o(t) { t.defaultPrevented || r(t) } e.split(/\s+/g).forEach(function (e) { n.push({ elem: t, eventName: e, handler: o }), t.addEventListener(e, o, g()) }) } } function x(t) { var n = zt.get(t); n && (n.forEach(function (t) { var n = t.elem, e = t.eventName, r = t.handler; n.removeEventListener(e, r, g()) }), zt.delete(t)) } function _(t) { return t.touches ? t.touches[t.touches.length - 1] : t } function w(t) { var n = _(t); return { x: n.clientX, y: n.clientY } } function E(t, n) { return void 0 === n && (n = []), n.some(function (n) { return t === n }) } function S(t) { var n = {}; return Object.keys(t).forEach(function (e) { if (!Rt.test(e)) return void (n[e] = t[e]); var r = t[e]; e = e.replace(/^-/, ""), n[e] = r, Ct.forEach(function (t) { n["-" + t + "-" + e] = r }) }), n } function O(t, n) { n = S(n), Object.keys(n).forEach(function (e) { var r = e.replace(/^-/, "").replace(/-([a-z])/g, function (t, n) { return n.toUpperCase() }); t.style[r] = n[e] }) } function T(t) { var n = t.containerEl, e = t.contentEl; return { container: { width: n.clientWidth, height: n.clientHeight }, content: { width: e.offsetWidth - e.clientWidth + e.scrollWidth, height: e.offsetHeight - e.clientHeight + e.scrollHeight } } } function M(t, n) { var e = t.bounding, r = n.getBoundingClientRect(), o = Math.max(e.top, r.top), i = Math.max(e.left, r.left), u = Math.min(e.right, r.right); return o < Math.min(e.bottom, r.bottom) && i < u } function A(t) { var n = t.getSize(), e = { x: Math.max(n.content.width - n.container.width, 0), y: Math.max(n.content.height - n.container.height, 0) }, r = t.containerEl.getBoundingClientRect(), o = { top: Math.max(r.top, 0), right: Math.min(r.right, window.innerWidth), bottom: Math.min(r.bottom, window.innerHeight), left: Math.max(r.left, 0) }; t.size = n, t.limit = e, t.bounding = o, t.track.update(), t.setPosition() } function P(t, n, e) { var r = t.options, o = t.offset, i = t.limit, u = t.track, c = t.contentEl; return r.renderByPixels && (n = Math.round(n), e = Math.round(e)), n = Mt(n, 0, i.x), e = Mt(e, 0, i.y), n !== o.x && u.xAxis.show(), e !== o.y && u.yAxis.show(), r.alwaysShowTracks || u.autoHideOnIdle(), n === o.x && e === o.y ? null : (o.x = n, o.y = e, O(c, { "-transform": "translate3d(" + -n + "px, " + -e + "px, 0)" }), u.update(), { offset: $({}, o), limit: $({}, i) }) } function j(t, n, e, r, o) { function i() { var n = Date.now() - g, e = r ? s(Math.min(n / r, 1)) : 1; t.setPosition(d + y * e, v + m * e), n >= r ? "function" == typeof f && f.call(t) : requestAnimationFrame(i) } void 0 === r && (r = 0); var u = void 0 === o ? {} : o, c = u.easing, s = void 0 === c ? k : c, a = u.callback, f = void 0 === a ? null : a, l = t.options, p = t.offset, h = t.limit; l.renderByPixels && (n = Math.round(n), e = Math.round(e)); var d = p.x, v = p.y, y = Mt(n, 0, h.x) - d, m = Mt(e, 0, h.y) - v, g = Date.now(); i() } function k(t) { return Math.pow(t - 1, 3) + 1 } function D(t, n, e) { var r = void 0 === e ? {} : e, o = r.alignToTop, i = void 0 === o || o, u = r.onlyScrollIfNeeded, c = void 0 !== u && u, s = r.offsetTop, a = void 0 === s ? 0 : s, f = r.offsetLeft, l = void 0 === f ? 0 : f, p = r.offsetBottom, h = void 0 === p ? 0 : p, d = t.containerEl, v = t.bounding, y = t.offset, m = t.limit; if (n && d.contains(n)) { var g = n.getBoundingClientRect(); if (!c || !t.isVisible(n)) { var b = i ? g.top - v.top - a : g.bottom - v.bottom + h; t.setMomentum(g.left - v.left - l, Mt(b, -y.y, m.y - y.y)) } } } function L() { for (var t = [], n = 0; n < arguments.length; n++)t[n] = arguments[n]; t.forEach(function (t) { var n = t.pluginName; if (!n) throw new TypeError("plugin name is required"); Ut.order.add(n), Ut.constructors[n] = t }) } function N(t, n) { return Array.from(Ut.order).filter(function (t) { return !1 !== n[t] }).map(function (e) { var r = Ut.constructors[e], o = new r(t, n[e]); return n[e] = o.options, o }) } function z(t) { var n = b(t), e = t.containerEl; n(e, "keydown", function (n) { if (document.activeElement === e) { var r = C(t, n.keyCode || n.which); if (r) { var o = r[0], i = r[1]; t.addTransformableMomentum(o, i, n, function (e) { e ? n.preventDefault() : (t.containerEl.blur(), t.parent && t.parent.containerEl.focus()) }) } } }) } function C(t, n) { var e = t.size, r = t.limit, o = t.offset; switch (n) { case Ht.SPACE: return [0, 200]; case Ht.PAGE_UP: return [0, 40 - e.container.height]; case Ht.PAGE_DOWN: return [0, e.container.height - 40]; case Ht.END: return [0, r.y - o.y]; case Ht.HOME: return [0, -o.y]; case Ht.LEFT: return [-40, 0]; case Ht.UP: return [0, -40]; case Ht.RIGHT: return [40, 0]; case Ht.DOWN: return [0, 40]; default: return null } } function R(t) { function n(n, e) { var r = t.size; if (n === Xt.X) { return e / (r.container.width + (l.thumb.realSize - l.thumb.displaySize)) * r.content.width } if (n === Xt.Y) { return e / (r.container.height + (p.thumb.realSize - p.thumb.displaySize)) * r.content.height } return 0 } function e(t) { return E(t, [l.element, l.thumb.element]) ? Xt.X : E(t, [p.element, p.thumb.element]) ? Xt.Y : void 0 } var r, o, i, u, c, s = b(t), a = t.containerEl, f = t.track, l = f.xAxis, p = f.yAxis; s(a, "click", function (r) { if (!o && E(r.target, [l.element, p.element])) { var i = r.target, u = e(i), c = i.getBoundingClientRect(), s = w(r), a = t.offset, f = t.limit; if (u === Xt.X) { var h = s.x - c.left - l.thumb.displaySize / 2; t.setMomentum(Mt(n(u, h) - a.x, -a.x, f.x - a.x), 0) } if (u === Xt.Y) { var h = s.y - c.top - p.thumb.displaySize / 2; t.setMomentum(0, Mt(n(u, h) - a.y, -a.y, f.y - a.y)) } } }), s(a, "mousedown", function (n) { if (E(n.target, [l.thumb.element, p.thumb.element])) { r = !0; var o = n.target, s = w(n), f = o.getBoundingClientRect(); u = e(o), i = { x: s.x - f.left, y: s.y - f.top }, c = a.getBoundingClientRect(), O(t.containerEl, { "-user-select": "none" }) } }), s(window, "mousemove", function (e) { if (r) { o = !0; var s = t.offset, a = w(e); if (u === Xt.X) { var f = a.x - i.x - c.left; t.setPosition(n(u, f), s.y) } if (u === Xt.Y) { var f = a.y - i.y - c.top; t.setPosition(s.x, n(u, f)) } } }), s(window, "mouseup blur", function () { r = o = !1, O(t.containerEl, { "-user-select": "" }) }) } function F(t) { b(t)(window, "resize", Lt(t.update.bind(t), 300)) } function I(t) { function n(r) { var o = r.x, i = r.y; (o || i) && (t.setMomentum(Mt(u.x + o, 0, c.x) - u.x, Mt(u.y + i, 0, c.y) - u.y), e = requestAnimationFrame(function () { n({ x: o, y: i }) })) } var e, r = b(t), o = t.containerEl, i = t.contentEl, u = t.offset, c = t.limit, s = !1; r(window, "mousemove", function (r) { if (s) { cancelAnimationFrame(e); n(H(t, r)) } }), r(i, "selectstart", function (t) { t.stopPropagation(), cancelAnimationFrame(e), s = !0 }), r(window, "mouseup blur", function () { cancelAnimationFrame(e), s = !1 }), r(o, "scroll", function (t) { t.preventDefault(), o.scrollTop = o.scrollLeft = 0 }) } function H(t, n) { var e = t.bounding, r = e.top, o = e.right, i = e.bottom, u = e.left, c = w(n), s = c.x, a = c.y, f = { x: 0, y: 0 }; return 0 === s && 0 === a ? f : (s > o - 20 ? f.x = s - o + 20 : s < u + 20 && (f.x = s - u - 20), a > i - 20 ? f.y = a - i + 20 : a < r + 20 && (f.y = a - r - 20), f.x *= 2, f.y *= 2, f) } function W(t) { var n, e = /Android/.test(navigator.userAgent) ? 3 : 2, r = t.options.delegateTo || t.containerEl, o = new It, i = b(t), u = 0; i(r, "touchstart", function (e) { o.track(e), t.setMomentum(0, 0), 0 === u && (n = t.options.damping, t.options.damping = Math.max(n, .5)), u++ }), i(r, "touchmove", function (n) { if (!Yt || Yt === t) { o.update(n); var e = o.getDelta(), r = e.x, i = e.y; t.addTransformableMomentum(r, i, n, function (e) { e && (n.preventDefault(), Yt = t) }) } }), i(r, "touchcancel touchend", function (r) { var i = o.getVelocity(), c = { x: 0, y: 0 }; Object.keys(i).forEach(function (t) { var r = i[t] / n; c[t] = Math.abs(r) < 50 ? 0 : r * e }), t.addTransformableMomentum(c.x, c.y, r), u-- , 0 === u && (t.options.damping = n), o.release(r), Yt = null }) } function B(t) { b(t)(t.options.delegateTo || t.containerEl, "onwheel" in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel", function (n) { var e = G(n), r = e.x, o = e.y; t.addTransformableMomentum(r, o, n, function (t) { t && n.preventDefault() }) }) } function G(t) { if ("deltaX" in t) { var n = $t(t.deltaMode); return { x: t.deltaX / qt.STANDARD * n, y: t.deltaY / qt.STANDARD * n } } return "wheelDeltaX" in t ? { x: t.wheelDeltaX / qt.OTHERS, y: t.wheelDeltaY / qt.OTHERS } : { x: 0, y: t.wheelDelta / qt.OTHERS } } function V() { if (!nn && "undefined" != typeof window) { var t = document.createElement("style"); t.id = tn, t.textContent = Zt, document.head.appendChild(t), nn = !0 } } function U() { if (nn && "undefined" != typeof window) { var t = document.getElementById(tn); t && t.parentNode && (t.parentNode.removeChild(t), nn = !1) } } Object.defineProperty(n, "__esModule", { value: !0 }); var X = {}; e.d(X, "keyboardHandler", function () { return z }), e.d(X, "mouseHandler", function () { return R }), e.d(X, "resizeHandler", function () { return F }), e.d(X, "selectHandler", function () { return I }), e.d(X, "touchHandler", function () { return W }), e.d(X, "wheelHandler", function () { return B }); var Y, q, K = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, n) { t.__proto__ = n } || function (t, n) { for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]) }, $ = Object.assign || function (t) { for (var n, e = 1, r = arguments.length; e < r; e++) { n = arguments[e]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]) } return t }, J = (e(58), e(79), e(84), e(93), e(96), i), Q = u, Z = e(98), tt = "object" == typeof self && self && self.Object === Object && self, nt = Z.a || tt || Function("return this")(), et = nt, rt = et.Symbol, ot = rt, it = Object.prototype, ut = it.hasOwnProperty, ct = it.toString, st = ot ? ot.toStringTag : void 0, at = c, ft = Object.prototype, lt = ft.toString, pt = s, ht = "[object Null]", dt = "[object Undefined]", vt = ot ? ot.toStringTag : void 0, yt = a, mt = f, gt = "[object Symbol]", bt = l, xt = NaN, _t = /^\s+|\s+$/g, wt = /^[-+]0x[0-9a-f]+$/i, Et = /^0b[01]+$/i, St = /^0o[0-7]+$/i, Ot = parseInt, Tt = p, Mt = h, At = function () { return et.Date.now() }, Pt = At, jt = "Expected a function", kt = Math.max, Dt = Math.min, Lt = y, Nt = function () { function t(t) { void 0 === t && (t = {}); var n = this; this.damping = .1, this.thumbMinSize = 20, this.renderByPixels = !0, this.alwaysShowTracks = !1, this.continuousScrolling = !0, this.delegateTo = null, this.plugins = {}, Object.keys(t).forEach(function (e) { n[e] = t[e] }) } return Object.defineProperty(t.prototype, "wheelEventTarget", { get: function () { return this.delegateTo }, set: function (t) { console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."), this.delegateTo = t }, enumerable: !0, configurable: !0 }), o([d(0, 1)], t.prototype, "damping", void 0), o([d(0, 1 / 0)], t.prototype, "thumbMinSize", void 0), o([v], t.prototype, "renderByPixels", void 0), o([v], t.prototype, "alwaysShowTracks", void 0), o([v], t.prototype, "continuousScrolling", void 0), t }(), zt = new WeakMap, Ct = ["webkit", "moz", "ms", "o"], Rt = new RegExp("^-(?!(?:" + Ct.join("|") + ")-)"), Ft = function () { function t(t) { this.updateTime = Date.now(), this.delta = { x: 0, y: 0 }, this.velocity = { x: 0, y: 0 }, this.lastPosition = { x: 0, y: 0 }, this.lastPosition = w(t) } return t.prototype.update = function (t) { var n = this, e = n.velocity, r = n.updateTime, o = n.lastPosition, i = Date.now(), u = w(t), c = { x: -(u.x - o.x), y: -(u.y - o.y) }, s = i - r || 16, a = c.x / s * 16, f = c.y / s * 16; e.x = .9 * a + .1 * e.x, e.y = .9 * f + .1 * e.y, this.delta = c, this.updateTime = i, this.lastPosition = u }, t }(), It = function () { function t() { this._touchList = {} } return Object.defineProperty(t.prototype, "_primitiveValue", { get: function () { return { x: 0, y: 0 } }, enumerable: !0, configurable: !0 }), t.prototype.isActive = function () { return void 0 !== this._activeTouchID }, t.prototype.getDelta = function () { var t = this._getActiveTracker(); return t ? $({}, t.delta) : this._primitiveValue }, t.prototype.getVelocity = function () { var t = this._getActiveTracker(); return t ? $({}, t.velocity) : this._primitiveValue }, t.prototype.track = function (t) { var n = this, e = t.targetTouches; return Array.from(e).forEach(function (t) { n._add(t) }), this._touchList }, t.prototype.update = function (t) { var n = this, e = t.touches, r = t.changedTouches; return Array.from(e).forEach(function (t) { n._renew(t) }), this._setActiveID(r), this._touchList }, t.prototype.release = function (t) { var n = this; delete this._activeTouchID, Array.from(t.changedTouches).forEach(function (t) { n._delete(t) }) }, t.prototype._add = function (t) { if (!this._has(t)) { var n = new Ft(t); this._touchList[t.identifier] = n } }, t.prototype._renew = function (t) { if (this._has(t)) { this._touchList[t.identifier].update(t) } }, t.prototype._delete = function (t) { delete this._touchList[t.identifier] }, t.prototype._has = function (t) { return this._touchList.hasOwnProperty(t.identifier) }, t.prototype._setActiveID = function (t) { this._activeTouchID = t[t.length - 1].identifier, this._lastTouch = this._touchList[this._activeTouchID] }, t.prototype._getActiveTracker = function () { var t = this; return t._touchList[t._activeTouchID] }, t }(); !function (t) { t.X = "x", t.Y = "y" }(q || (q = {})); var Ht, Wt = function () { function t(t, n) { void 0 === n && (n = 0), this._direction = t, this._minSize = n, this.element = document.createElement("div"), this.displaySize = 0, this.realSize = 0, this.offset = 0, this.element.className = "scrollbar-thumb scrollbar-thumb-" + t } return t.prototype.attachTo = function (t) { t.appendChild(this.element) }, t.prototype.update = function (t, n, e) { this.realSize = Math.min(n / e, 1) * n, this.displaySize = Math.max(this.realSize, this._minSize), this.offset = t / e * (n + (this.realSize - this.displaySize)), O(this.element, this._getStyle()) }, t.prototype._getStyle = function () { switch (this._direction) { case q.X: return { width: this.displaySize + "px", "-transform": "translate3d(" + this.offset + "px, 0, 0)" }; case q.Y: return { height: this.displaySize + "px", "-transform": "translate3d(0, " + this.offset + "px, 0)" }; default: return null } }, t }(), Bt = function () { function t(t, n) { void 0 === n && (n = 0), this.element = document.createElement("div"), this._isShown = !1, this.element.className = "scrollbar-track scrollbar-track-" + t, this.thumb = new Wt(t, n), this.thumb.attachTo(this.element) } return t.prototype.attachTo = function (t) { t.appendChild(this.element) }, t.prototype.show = function () { this._isShown || (this._isShown = !0, this.element.classList.add("show")) }, t.prototype.hide = function () { this._isShown && (this._isShown = !1, this.element.classList.remove("show")) }, t.prototype.update = function (t, n, e) { O(this.element, { display: e <= n ? "none" : "block" }), this.thumb.update(t, n, e) }, t }(), Gt = function () { function t(t) { this._scrollbar = t; var n = t.options.thumbMinSize; this.xAxis = new Bt(q.X, n), this.yAxis = new Bt(q.Y, n), this.xAxis.attachTo(t.containerEl), this.yAxis.attachTo(t.containerEl), t.options.alwaysShowTracks && (this.xAxis.show(), this.yAxis.show()) } return t.prototype.update = function () { var t = this._scrollbar, n = t.size, e = t.offset; this.xAxis.update(e.x, n.container.width, n.content.width), this.yAxis.update(e.y, n.container.height, n.content.height) }, t.prototype.autoHideOnIdle = function () { this._scrollbar.options.alwaysShowTracks || (this.xAxis.hide(), this.yAxis.hide()) }, o([m(300)], t.prototype, "autoHideOnIdle", null), t }(), Vt = function () { function t(t, n) { var e = this.constructor; this.scrollbar = t, this.name = e.pluginName, this.options = $({}, e.defaultOptions, n) } return t.prototype.onInit = function () { }, t.prototype.onDestory = function () { }, t.prototype.onUpdate = function () { }, t.prototype.onRender = function (t) { }, t.prototype.transformDelta = function (t, n) { return $({}, t) }, t.pluginName = "", t.defaultOptions = {}, t }(), Ut = { order: new Set, constructors: {} }; !function (t) { t[t.SPACE = 32] = "SPACE", t[t.PAGE_UP = 33] = "PAGE_UP", t[t.PAGE_DOWN = 34] = "PAGE_DOWN", t[t.END = 35] = "END", t[t.HOME = 36] = "HOME", t[t.LEFT = 37] = "LEFT", t[t.UP = 38] = "UP", t[t.RIGHT = 39] = "RIGHT", t[t.DOWN = 40] = "DOWN" }(Ht || (Ht = {})); var Xt; !function (t) { t[t.X = 0] = "X", t[t.Y = 1] = "Y" }(Xt || (Xt = {})); var Yt, qt = { STANDARD: 1, OTHERS: -3 }, Kt = [1, 28, 500], $t = function (t) { return Kt[t] || Kt[0] }, Jt = new Map, Qt = function () { function t(t, n) { var e = this; this.offset = { x: 0, y: 0 }, this.limit = { x: 1 / 0, y: 1 / 0 }, this.bounding = { top: 0, right: 0, bottom: 0, left: 0 }, this._plugins = [], this._momentum = { x: 0, y: 0 }, this._listeners = new Set, this.containerEl = t; var r = this.contentEl = document.createElement("div"); this.options = new Nt(n), t.setAttribute("data-scrollbar", "true"), t.setAttribute("tabindex", "1"), O(t, { overflow: "hidden", outline: "none" }), window.navigator.msPointerEnabled && (t.style.msTouchAction = "none"), r.className = "scroll-content", Array.from(t.childNodes).forEach(function (t) { r.appendChild(t) }), t.appendChild(r), this.track = new Gt(this), this.size = this.getSize(), this._plugins = N(this, this.options.plugins); var o = t.scrollLeft, i = t.scrollTop; t.scrollLeft = t.scrollTop = 0, this.setPosition(o, i, { withoutCallbacks: !0 }); var u = window, c = u.MutationObserver || u.WebKitMutationObserver || u.MozMutationObserver; "function" == typeof c && (this._observer = new c(function () { e.update() }), this._observer.observe(r, { subtree: !0, childList: !0 })), Jt.set(t, this), requestAnimationFrame(function () { e._init() }) } return Object.defineProperty(t.prototype, "parent", { get: function () { for (var t = this.containerEl.parentElement; t;) { var n = Jt.get(t); if (n) return n; t = t.parentElement } return null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "scrollTop", { get: function () { return this.offset.y }, set: function (t) { this.setPosition(this.scrollLeft, t) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "scrollLeft", { get: function () { return this.offset.x }, set: function (t) { this.setPosition(t, this.scrollTop) }, enumerable: !0, configurable: !0 }), t.prototype.getSize = function () { return T(this) }, t.prototype.update = function () { A(this), this._plugins.forEach(function (t) { t.onUpdate() }) }, t.prototype.isVisible = function (t) { return M(this, t) }, t.prototype.setPosition = function (t, n, e) { var r = this; void 0 === t && (t = this.offset.x), void 0 === n && (n = this.offset.y), void 0 === e && (e = {}); var o = P(this, t, n); o && !e.withoutCallbacks && this._listeners.forEach(function (t) { t.call(r, o) }) }, t.prototype.scrollTo = function (t, n, e, r) { void 0 === t && (t = this.offset.x), void 0 === n && (n = this.offset.y), void 0 === e && (e = 0), void 0 === r && (r = {}), j(this, t, n, e, r) }, t.prototype.scrollIntoView = function (t, n) { void 0 === n && (n = {}), D(this, t, n) }, t.prototype.addListener = function (t) { if ("function" != typeof t) throw new TypeError("[smooth-scrollbar] scrolling listener should be a function"); this._listeners.add(t) }, t.prototype.removeListener = function (t) { this._listeners.delete(t) }, t.prototype.addTransformableMomentum = function (t, n, e, r) { this._updateDebounced(); var o = this._plugins.reduce(function (t, n) { return n.transformDelta(t, e) || t }, { x: t, y: n }), i = !this._shouldPropagateMomentum(o.x, o.y); i && this.addMomentum(o.x, o.y), r && r.call(this, i) }, t.prototype.addMomentum = function (t, n) { this.setMomentum(this._momentum.x + t, this._momentum.y + n) }, t.prototype.setMomentum = function (t, n) { 0 === this.limit.x && (t = 0), 0 === this.limit.y && (n = 0), this.options.renderByPixels && (t = Math.round(t), n = Math.round(n)), this._momentum.x = t, this._momentum.y = n }, t.prototype.updatePluginOptions = function (t, n) { this._plugins.forEach(function (e) { e.name === t && Object.assign(e.options, n) }) }, t.prototype.destroy = function () { var t = this, n = t.containerEl, e = t.contentEl; x(this), this._listeners.clear(), this.setMomentum(0, 0), cancelAnimationFrame(this._renderID), this._observer && this._observer.disconnect(), Jt.delete(this.containerEl); for (var r = Array.from(e.childNodes); n.firstChild;)n.removeChild(n.firstChild); r.forEach(function (t) { n.appendChild(t) }), O(n, { overflow: "" }), n.scrollTop = this.scrollTop, n.scrollLeft = this.scrollLeft, this._plugins.forEach(function (t) { t.onDestory() }), this._plugins.length = 0 }, t.prototype._init = function () { var t = this; this.update(), Object.keys(X).forEach(function (n) { X[n](t) }), this._plugins.forEach(function (t) { t.onInit() }), this._render() }, t.prototype._updateDebounced = function () { this.update() }, t.prototype._shouldPropagateMomentum = function (t, n) { void 0 === t && (t = 0), void 0 === n && (n = 0); var e = this, r = e.options, o = e.offset, i = e.limit; if (!r.continuousScrolling) return !1; 0 === i.x && 0 === i.y && this._updateDebounced(); var u = Mt(t + o.x, 0, i.x), c = Mt(n + o.y, 0, i.y), s = !0; return s = s && u === o.x, s = s && c === o.y, s = s && (o.x === i.x || 0 === o.x || o.y === i.y || 0 === o.y) }, t.prototype._render = function () { var t = this._momentum; if (t.x || t.y) { var n = this._nextTick("x"), e = this._nextTick("y"); t.x = n.momentum, t.y = e.momentum, this.setPosition(n.position, e.position) } var r = $({}, this._momentum); this._plugins.forEach(function (t) { t.onRender(r) }), this._renderID = requestAnimationFrame(this._render.bind(this)) }, t.prototype._nextTick = function (t) { var n = this, e = n.options, r = n.offset, o = n._momentum, i = r[t], u = o[t]; if (Math.abs(u) <= .1) return { momentum: 0, position: i + u }; var c = u * (1 - e.damping); return e.renderByPixels && (c |= 0), { momentum: c, position: i + u - c } }, o([m(100, { leading: !0 })], t.prototype, "_updateDebounced", null), t }(), Zt = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n", tn = "smooth-scrollbar-style", nn = !1; e.d(n, "ScrollbarPlugin", function () { return Vt }); var en = function (t) { function n() { return null !== t && t.apply(this, arguments) || this } return r(n, t), n.init = function (t, n) { if (!t || 1 !== t.nodeType) throw new TypeError("expect element to be DOM Element, but got " + t); return V(), Jt.has(t) ? Jt.get(t) : new Qt(t, n) }, n.initAll = function (t) { return Array.from(document.querySelectorAll("[data-scrollbar]"), function (e) { return n.init(e, t) }) }, n.has = function (t) { return Jt.has(t) }, n.get = function (t) { return Jt.get(t) }, n.getAll = function () { return Array.from(Jt.values()) }, n.destroy = function (t) { var n = Jt.get(t); n && n.destroy() }, n.destroyAll = function () { Jt.forEach(function (t) { t.destroy() }) }, n.use = function () { for (var t = [], n = 0; n < arguments.length; n++)t[n] = arguments[n]; return L.apply(void 0, t) }, n.attachStyle = function () { return V() }, n.detachStyle = function () { return U() }, n.version = "8.3.0", n.ScrollbarPlugin = Vt, n }(Qt); n.default = en }, function (t, n, e) { e(22), e(25), e(33), e(70), e(75), e(77), e(78), t.exports = e(4).Map }, function (t, n, e) { var r = e(26), o = e(27); t.exports = function (t) { return function (n, e) { var i, u, c = String(o(n)), s = r(e), a = c.length; return s < 0 || s >= a ? t ? "" : void 0 : (i = c.charCodeAt(s), i < 55296 || i > 56319 || s + 1 === a || (u = c.charCodeAt(s + 1)) < 56320 || u > 57343 ? t ? c.charAt(s) : i : t ? c.slice(s, s + 2) : u - 56320 + (i - 55296 << 10) + 65536) } } }, function (t, n) { t.exports = !1 }, function (t, n, e) { "use strict"; var r = e(44), o = e(17), i = e(32), u = {}; e(11)(u, e(0)("iterator"), function () { return this }), t.exports = function (t, n, e) { t.prototype = r(u, { next: o(1, e) }), i(t, n + " Iterator") } }, function (t, n, e) { var r = e(7), o = e(8), i = e(29); t.exports = e(9) ? Object.defineProperties : function (t, n) { o(t); for (var e, u = i(n), c = u.length, s = 0; c > s;)r.f(t, e = u[s++], n[e]); return t } }, function (t, n, e) { var r = e(3), o = e(18), i = e(64)(!1), u = e(31)("IE_PROTO"); t.exports = function (t, n) { var e, c = o(t), s = 0, a = []; for (e in c) e != u && r(c, e) && a.push(e); for (; n.length > s;)r(c, e = n[s++]) && (~i(a, e) || a.push(e)); return a } }, function (t, n, e) { var r = e(18), o = e(19), i = e(65); t.exports = function (t) { return function (n, e, u) { var c, s = r(n), a = o(s.length), f = i(u, a); if (t && e != e) { for (; a > f;)if ((c = s[f++]) != c) return !0 } else for (; a > f; f++)if ((t || f in s) && s[f] === e) return t || f || 0; return !t && -1 } } }, function (t, n, e) { var r = e(26), o = Math.max, i = Math.min; t.exports = function (t, n) { return t = r(t), t < 0 ? o(t + n, 0) : i(t, n) } }, function (t, n, e) { var r = e(2).document; t.exports = r && r.documentElement }, function (t, n, e) { var r = e(3), o = e(20), i = e(31)("IE_PROTO"), u = Object.prototype; t.exports = Object.getPrototypeOf || function (t) { return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null } }, function (t, n, e) { "use strict"; var r = e(69), o = e(46), i = e(13), u = e(18); t.exports = e(28)(Array, "Array", function (t, n) { this._t = u(t), this._i = 0, this._k = n }, function () { var t = this._t, n = this._k, e = this._i++; return !t || e >= t.length ? (this._t = void 0, o(1)) : "keys" == n ? o(0, e) : "values" == n ? o(0, t[e]) : o(0, [e, t[e]]) }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries") }, function (t, n, e) { var r = e(0)("unscopables"), o = Array.prototype; void 0 == o[r] && e(11)(o, r, {}), t.exports = function (t) { o[r][t] = !0 } }, function (t, n, e) { "use strict"; var r = e(47), o = e(15); t.exports = e(36)("Map", function (t) { return function () { return t(this, arguments.length > 0 ? arguments[0] : void 0) } }, { get: function (t) { var n = r.getEntry(o(this, "Map"), t); return n && n.v }, set: function (t, n) { return r.def(o(this, "Map"), 0 === t ? 0 : t, n) } }, r, !0) }, function (t, n, e) { "use strict"; var r = e(2), o = e(7), i = e(9), u = e(0)("species"); t.exports = function (t) { var n = r[t]; i && n && !n[u] && o.f(n, u, { configurable: !0, get: function () { return this } }) } }, function (t, n, e) { var r = e(1), o = e(73).set; t.exports = function (t, n, e) { var i, u = n.constructor; return u !== e && "function" == typeof u && (i = u.prototype) !== e.prototype && r(i) && o && o(t, i), t } }, function (t, n, e) { var r = e(1), o = e(8), i = function (t, n) { if (o(t), !r(n) && null !== n) throw TypeError(n + ": can't set as prototype!") }; t.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, n, r) { try { r = e(10)(Function.call, e(74).f(Object.prototype, "__proto__").set, 2), r(t, []), n = !(t instanceof Array) } catch (t) { n = !0 } return function (t, e) { return i(t, e), n ? t.__proto__ = e : r(t, e), t } }({}, !1) : void 0), check: i } }, function (t, n, e) { var r = e(52), o = e(17), i = e(18), u = e(42), c = e(3), s = e(40), a = Object.getOwnPropertyDescriptor; n.f = e(9) ? a : function (t, n) { if (t = i(t), n = u(n, !0), s) try { return a(t, n) } catch (t) { } if (c(t, n)) return o(!r.f.call(t, n), t[n]) } }, function (t, n, e) { var r = e(5); r(r.P + r.R, "Map", { toJSON: e(53)("Map") }) }, function (t, n, e) { var r = e(14); t.exports = function (t, n) { var e = []; return r(t, !1, e.push, e, n), e } }, function (t, n, e) { e(37)("Map") }, function (t, n, e) { e(38)("Map") }, function (t, n, e) { e(22), e(25), e(33), e(80), e(81), e(82), e(83), t.exports = e(4).Set }, function (t, n, e) { "use strict"; var r = e(47), o = e(15); t.exports = e(36)("Set", function (t) { return function () { return t(this, arguments.length > 0 ? arguments[0] : void 0) } }, { add: function (t) { return r.def(o(this, "Set"), t = 0 === t ? 0 : t, t) } }, r) }, function (t, n, e) { var r = e(5); r(r.P + r.R, "Set", { toJSON: e(53)("Set") }) }, function (t, n, e) { e(37)("Set") }, function (t, n, e) { e(38)("Set") }, function (t, n, e) { e(22), e(33), e(85), e(91), e(92), t.exports = e(4).WeakMap }, function (t, n, e) { "use strict"; var r, o = e(54)(0), i = e(6), u = e(21), c = e(55), s = e(90), a = e(1), f = e(12), l = e(15), p = u.getWeak, h = Object.isExtensible, d = s.ufstore, v = {}, y = function (t) { return function () { return t(this, arguments.length > 0 ? arguments[0] : void 0) } }, m = { get: function (t) { if (a(t)) { var n = p(t); return !0 === n ? d(l(this, "WeakMap")).get(t) : n ? n[this._i] : void 0 } }, set: function (t, n) { return s.def(l(this, "WeakMap"), t, n) } }, g = t.exports = e(36)("WeakMap", y, m, s, !0, !0); f(function () { return 7 != (new g).set((Object.freeze || Object)(v), 7).get(v) }) && (r = s.getConstructor(y, "WeakMap"), c(r.prototype, m), u.NEED = !0, o(["delete", "has", "get", "set"], function (t) { var n = g.prototype, e = n[t]; i(n, t, function (n, o) { if (a(n) && !h(n)) { this._f || (this._f = new r); var i = this._f[t](n, o); return "set" == t ? this : i } return e.call(this, n, o) }) })) }, function (t, n, e) { var r = e(87); t.exports = function (t, n) { return new (r(t))(n) } }, function (t, n, e) { var r = e(1), o = e(88), i = e(0)("species"); t.exports = function (t) { var n; return o(t) && (n = t.constructor, "function" != typeof n || n !== Array && !o(n.prototype) || (n = void 0), r(n) && null === (n = n[i]) && (n = void 0)), void 0 === n ? Array : n } }, function (t, n, e) { var r = e(24); t.exports = Array.isArray || function (t) { return "Array" == r(t) } }, function (t, n) { n.f = Object.getOwnPropertySymbols }, function (t, n, e) { "use strict"; var r = e(34), o = e(21).getWeak, i = e(8), u = e(1), c = e(35), s = e(14), a = e(54), f = e(3), l = e(15), p = a(5), h = a(6), d = 0, v = function (t) { return t._l || (t._l = new y) }, y = function () { this.a = [] }, m = function (t, n) { return p(t.a, function (t) { return t[0] === n }) }; y.prototype = { get: function (t) { var n = m(this, t); if (n) return n[1] }, has: function (t) { return !!m(this, t) }, set: function (t, n) { var e = m(this, t); e ? e[1] = n : this.a.push([t, n]) }, delete: function (t) { var n = h(this.a, function (n) { return n[0] === t }); return ~n && this.a.splice(n, 1), !!~n } }, t.exports = { getConstructor: function (t, n, e, i) { var a = t(function (t, r) { c(t, a, n, "_i"), t._t = n, t._i = d++ , t._l = void 0, void 0 != r && s(r, e, t[i], t) }); return r(a.prototype, { delete: function (t) { if (!u(t)) return !1; var e = o(t); return !0 === e ? v(l(this, n)).delete(t) : e && f(e, this._i) && delete e[this._i] }, has: function (t) { if (!u(t)) return !1; var e = o(t); return !0 === e ? v(l(this, n)).has(t) : e && f(e, this._i) } }), a }, def: function (t, n, e) { var r = o(i(n), !0); return !0 === r ? v(t).set(n, e) : r[t._i] = e, t }, ufstore: v } }, function (t, n, e) { e(37)("WeakMap") }, function (t, n, e) { e(38)("WeakMap") }, function (t, n, e) { e(25), e(94), t.exports = e(4).Array.from }, function (t, n, e) { "use strict"; var r = e(10), o = e(5), i = e(20), u = e(48), c = e(49), s = e(19), a = e(95), f = e(50); o(o.S + o.F * !e(51)(function (t) { Array.from(t) }), "Array", { from: function (t) { var n, e, o, l, p = i(t), h = "function" == typeof this ? this : Array, d = arguments.length, v = d > 1 ? arguments[1] : void 0, y = void 0 !== v, m = 0, g = f(p); if (y && (v = r(v, d > 2 ? arguments[2] : void 0, 2)), void 0 == g || h == Array && c(g)) for (n = s(p.length), e = new h(n); n > m; m++)a(e, m, y ? v(p[m], m) : p[m]); else for (l = g.call(p), e = new h; !(o = l.next()).done; m++)a(e, m, y ? u(l, v, [o.value, m], !0) : o.value); return e.length = m, e } }) }, function (t, n, e) { "use strict"; var r = e(7), o = e(17); t.exports = function (t, n, e) { n in t ? r.f(t, n, o(0, e)) : t[n] = e } }, function (t, n, e) { e(97), t.exports = e(4).Object.assign }, function (t, n, e) { var r = e(5); r(r.S + r.F, "Object", { assign: e(55) }) }, function (t, n, e) { "use strict"; (function (t) { var e = "object" == typeof t && t && t.Object === Object && t; n.a = e }).call(n, e(99)) }, function (t, n) { var e; e = function () { return this }(); try { e = e || Function("return this")() || (0, eval)("this") } catch (t) { "object" == typeof window && (e = window) } t.exports = e }]).default });
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t() }(this, function () { "use strict"; var e = "undefined" == typeof document ? { body: {}, addEventListener: function () { }, removeEventListener: function () { }, activeElement: { blur: function () { }, nodeName: "" }, querySelector: function () { return null }, querySelectorAll: function () { return [] }, getElementById: function () { return null }, createEvent: function () { return { initEvent: function () { } } }, createElement: function () { return { children: [], childNodes: [], style: {}, setAttribute: function () { }, getElementsByTagName: function () { return [] } } }, location: { hash: "" } } : document, t = "undefined" == typeof window ? { document: e, navigator: { userAgent: "" }, location: {}, history: {}, CustomEvent: function () { return this }, addEventListener: function () { }, removeEventListener: function () { }, getComputedStyle: function () { return { getPropertyValue: function () { return "" } } }, Image: function () { }, Date: function () { }, screen: {}, setTimeout: function () { }, clearTimeout: function () { } } : window, i = function (e) { for (var t = 0; t < e.length; t += 1)this[t] = e[t]; return this.length = e.length, this }; function s(s, a) { var r = [], n = 0; if (s && !a && s instanceof i) return s; if (s) if ("string" == typeof s) { var o, l, d = s.trim(); if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) { var h = "div"; for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1)r.push(l.childNodes[n]) } else for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1)o[n] && r.push(o[n]) } else if (s.nodeType || s === t || s === e) r.push(s); else if (s.length > 0 && s[0].nodeType) for (n = 0; n < s.length; n += 1)r.push(s[n]); return new i(r) } function a(e) { for (var t = [], i = 0; i < e.length; i += 1)-1 === t.indexOf(e[i]) && t.push(e[i]); return t } s.fn = i.prototype, s.Class = i, s.Dom7 = i; var r = { addClass: function (e) { if (void 0 === e) return this; for (var t = e.split(" "), i = 0; i < t.length; i += 1)for (var s = 0; s < this.length; s += 1)void 0 !== this[s].classList && this[s].classList.add(t[i]); return this }, removeClass: function (e) { for (var t = e.split(" "), i = 0; i < t.length; i += 1)for (var s = 0; s < this.length; s += 1)void 0 !== this[s].classList && this[s].classList.remove(t[i]); return this }, hasClass: function (e) { return !!this[0] && this[0].classList.contains(e) }, toggleClass: function (e) { for (var t = e.split(" "), i = 0; i < t.length; i += 1)for (var s = 0; s < this.length; s += 1)void 0 !== this[s].classList && this[s].classList.toggle(t[i]); return this }, attr: function (e, t) { var i = arguments; if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0; for (var s = 0; s < this.length; s += 1)if (2 === i.length) this[s].setAttribute(e, t); else for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]); return this }, removeAttr: function (e) { for (var t = 0; t < this.length; t += 1)this[t].removeAttribute(e); return this }, data: function (e, t) { var i; if (void 0 !== t) { for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t; return this } if (i = this[0]) { if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e]; var a = i.getAttribute("data-" + e); return a || void 0 } }, transform: function (e) { for (var t = 0; t < this.length; t += 1) { var i = this[t].style; i.webkitTransform = e, i.transform = e } return this }, transition: function (e) { "string" != typeof e && (e += "ms"); for (var t = 0; t < this.length; t += 1) { var i = this[t].style; i.webkitTransitionDuration = e, i.transitionDuration = e } return this }, on: function () { for (var e, t = [], i = arguments.length; i--;)t[i] = arguments[i]; var a = t[0], r = t[1], n = t[2], o = t[3]; function l(e) { var t = e.target; if (t) { var i = e.target.dom7EventData || []; if (i.unshift(e), s(t).is(r)) n.apply(t, i); else for (var a = s(t).parents(), o = 0; o < a.length; o += 1)s(a[o]).is(r) && n.apply(a[o], i) } } function d(e) { var t = e && e.target ? e.target.dom7EventData || [] : []; t.unshift(e), n.apply(this, t) } "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1); for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) { var u = this[c]; if (r) for (h = 0; h < p.length; h += 1)u.dom7LiveListeners || (u.dom7LiveListeners = []), u.dom7LiveListeners.push({ type: a, listener: n, proxyListener: l }), u.addEventListener(p[h], l, o); else for (h = 0; h < p.length; h += 1)u.dom7Listeners || (u.dom7Listeners = []), u.dom7Listeners.push({ type: a, listener: n, proxyListener: d }), u.addEventListener(p[h], d, o) } return this }, off: function () { for (var e, t = [], i = arguments.length; i--;)t[i] = arguments[i]; var s = t[0], a = t[1], r = t[2], n = t[3]; "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1); for (var o = s.split(" "), l = 0; l < o.length; l += 1)for (var d = 0; d < this.length; d += 1) { var h = this[d]; if (a) { if (h.dom7LiveListeners) for (var p = 0; p < h.dom7LiveListeners.length; p += 1)r ? h.dom7LiveListeners[p].listener === r && h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n) : h.dom7LiveListeners[p].type === o[l] && h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n) } else if (h.dom7Listeners) for (var c = 0; c < h.dom7Listeners.length; c += 1)r ? h.dom7Listeners[c].listener === r && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n) : h.dom7Listeners[c].type === o[l] && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n) } return this }, trigger: function () { for (var i = [], s = arguments.length; s--;)i[s] = arguments[s]; for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)for (var o = 0; o < this.length; o += 1) { var l = void 0; try { l = new t.CustomEvent(a[n], { detail: r, bubbles: !0, cancelable: !0 }) } catch (t) { (l = e.createEvent("Event")).initEvent(a[n], !0, !0), l.detail = r } this[o].dom7EventData = i.filter(function (e, t) { return t > 0 }), this[o].dispatchEvent(l), this[o].dom7EventData = [], delete this[o].dom7EventData } return this }, transitionEnd: function (e) { var t, i = ["webkitTransitionEnd", "transitionend"], s = this; function a(r) { if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t += 1)s.off(i[t], a) } if (e) for (t = 0; t < i.length; t += 1)s.on(i[t], a); return this }, outerWidth: function (e) { if (this.length > 0) { if (e) { var t = this.styles(); return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left")) } return this[0].offsetWidth } return null }, outerHeight: function (e) { if (this.length > 0) { if (e) { var t = this.styles(); return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom")) } return this[0].offsetHeight } return null }, offset: function () { if (this.length > 0) { var i = this[0], s = i.getBoundingClientRect(), a = e.body, r = i.clientTop || a.clientTop || 0, n = i.clientLeft || a.clientLeft || 0, o = i === t ? t.scrollY : i.scrollTop, l = i === t ? t.scrollX : i.scrollLeft; return { top: s.top + o - r, left: s.left + l - n } } return null }, css: function (e, i) { var s; if (1 === arguments.length) { if ("string" != typeof e) { for (s = 0; s < this.length; s += 1)for (var a in e) this[s].style[a] = e[a]; return this } if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e) } if (2 === arguments.length && "string" == typeof e) { for (s = 0; s < this.length; s += 1)this[s].style[e] = i; return this } return this }, each: function (e) { if (!e) return this; for (var t = 0; t < this.length; t += 1)if (!1 === e.call(this[t], t, this[t])) return this; return this }, html: function (e) { if (void 0 === e) return this[0] ? this[0].innerHTML : void 0; for (var t = 0; t < this.length; t += 1)this[t].innerHTML = e; return this }, text: function (e) { if (void 0 === e) return this[0] ? this[0].textContent.trim() : null; for (var t = 0; t < this.length; t += 1)this[t].textContent = e; return this }, is: function (a) { var r, n, o = this[0]; if (!o || void 0 === a) return !1; if ("string" == typeof a) { if (o.matches) return o.matches(a); if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a); if (o.msMatchesSelector) return o.msMatchesSelector(a); for (r = s(a), n = 0; n < r.length; n += 1)if (r[n] === o) return !0; return !1 } if (a === e) return o === e; if (a === t) return o === t; if (a.nodeType || a instanceof i) { for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1)if (r[n] === o) return !0; return !1 } return !1 }, index: function () { var e, t = this[0]; if (t) { for (e = 0; null !== (t = t.previousSibling);)1 === t.nodeType && (e += 1); return e } }, eq: function (e) { if (void 0 === e) return this; var t, s = this.length; return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]]) }, append: function () { for (var t, s = [], a = arguments.length; a--;)s[a] = arguments[a]; for (var r = 0; r < s.length; r += 1) { t = s[r]; for (var n = 0; n < this.length; n += 1)if ("string" == typeof t) { var o = e.createElement("div"); for (o.innerHTML = t; o.firstChild;)this[n].appendChild(o.firstChild) } else if (t instanceof i) for (var l = 0; l < t.length; l += 1)this[n].appendChild(t[l]); else this[n].appendChild(t) } return this }, prepend: function (t) { var s, a; for (s = 0; s < this.length; s += 1)if ("string" == typeof t) { var r = e.createElement("div"); for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1)this[s].insertBefore(r.childNodes[a], this[s].childNodes[0]) } else if (t instanceof i) for (a = 0; a < t.length; a += 1)this[s].insertBefore(t[a], this[s].childNodes[0]); else this[s].insertBefore(t, this[s].childNodes[0]); return this }, next: function (e) { return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([]) }, nextAll: function (e) { var t = [], a = this[0]; if (!a) return new i([]); for (; a.nextElementSibling;) { var r = a.nextElementSibling; e ? s(r).is(e) && t.push(r) : t.push(r), a = r } return new i(t) }, prev: function (e) { if (this.length > 0) { var t = this[0]; return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([]) } return new i([]) }, prevAll: function (e) { var t = [], a = this[0]; if (!a) return new i([]); for (; a.previousElementSibling;) { var r = a.previousElementSibling; e ? s(r).is(e) && t.push(r) : t.push(r), a = r } return new i(t) }, parent: function (e) { for (var t = [], i = 0; i < this.length; i += 1)null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode)); return s(a(t)) }, parents: function (e) { for (var t = [], i = 0; i < this.length; i += 1)for (var r = this[i].parentNode; r;)e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode; return s(a(t)) }, closest: function (e) { var t = this; return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t) }, find: function (e) { for (var t = [], s = 0; s < this.length; s += 1)for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1)t.push(a[r]); return new i(t) }, children: function (e) { for (var t = [], r = 0; r < this.length; r += 1)for (var n = this[r].childNodes, o = 0; o < n.length; o += 1)e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]); return new i(a(t)) }, remove: function () { for (var e = 0; e < this.length; e += 1)this[e].parentNode && this[e].parentNode.removeChild(this[e]); return this }, add: function () { for (var e = [], t = arguments.length; t--;)e[t] = arguments[t]; var i, a; for (i = 0; i < e.length; i += 1) { var r = s(e[i]); for (a = 0; a < r.length; a += 1)this[this.length] = r[a], this.length += 1 } return this }, styles: function () { return this[0] ? t.getComputedStyle(this[0], null) : {} } }; Object.keys(r).forEach(function (e) { s.fn[e] = r[e] }); var n, o, l, d = { deleteProps: function (e) { var t = e; Object.keys(t).forEach(function (e) { try { t[e] = null } catch (e) { } try { delete t[e] } catch (e) { } }) }, nextTick: function (e, t) { return void 0 === t && (t = 0), setTimeout(e, t) }, now: function () { return Date.now() }, getTranslate: function (e, i) { var s, a, r; void 0 === i && (i = "x"); var n = t.getComputedStyle(e, null); return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function (e) { return e.replace(",", ".") }).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0 }, parseUrlQuery: function (e) { var i, s, a, r, n = {}, o = e || t.location.href; if ("string" == typeof o && o.length) for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) { return "" !== e })).length, i = 0; i < r; i += 1)a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || ""; return n }, isObject: function (e) { return "object" == typeof e && null !== e && e.constructor && e.constructor === Object }, extend: function () { for (var e = [], t = arguments.length; t--;)e[t] = arguments[t]; for (var i = Object(e[0]), s = 1; s < e.length; s += 1) { var a = e[s]; if (void 0 !== a && null !== a) for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) { var l = r[n], h = Object.getOwnPropertyDescriptor(a, l); void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? (i[l] = {}, d.extend(i[l], a[l])) : i[l] = a[l]) } } return i } }, h = (l = e.createElement("div"), { touch: t.Modernizr && !0 === t.Modernizr.touch || !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch), pointerEvents: !(!t.navigator.pointerEnabled && !t.PointerEvent), prefixedPointerEvents: !!t.navigator.msPointerEnabled, transition: (o = l.style, "transition" in o || "webkitTransition" in o || "MozTransition" in o), transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (n = l.style, "webkitPerspective" in n || "MozPerspective" in n || "OPerspective" in n || "MsPerspective" in n || "perspective" in n), flexbox: function () { for (var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)if (t[i] in e) return !0; return !1 }(), observer: "MutationObserver" in t || "WebkitMutationObserver" in t, passiveListener: function () { var e = !1; try { var i = Object.defineProperty({}, "passive", { get: function () { e = !0 } }); t.addEventListener("testPassiveListener", null, i) } catch (e) { } return e }(), gestures: "ongesturestart" in t }), p = function (e) { void 0 === e && (e = {}); var t = this; t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) { t.on(e, t.params.on[e]) }) }, c = { components: { configurable: !0 } }; p.prototype.on = function (e, t, i) { var s = this; if ("function" != typeof t) return s; var a = i ? "unshift" : "push"; return e.split(" ").forEach(function (e) { s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t) }), s }, p.prototype.once = function (e, t, i) { var s = this; if ("function" != typeof t) return s; return s.on(e, function i() { for (var a = [], r = arguments.length; r--;)a[r] = arguments[r]; t.apply(s, a), s.off(e, i) }, i) }, p.prototype.off = function (e, t) { var i = this; return i.eventsListeners ? (e.split(" ").forEach(function (e) { void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function (s, a) { s === t && i.eventsListeners[e].splice(a, 1) }) }), i) : i }, p.prototype.emit = function () { for (var e = [], t = arguments.length; t--;)e[t] = arguments[t]; var i, s, a, r = this; return r.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) { if (r.eventsListeners && r.eventsListeners[e]) { var t = []; r.eventsListeners[e].forEach(function (e) { t.push(e) }), t.forEach(function (e) { e.apply(a, s) }) } }), r) : r }, p.prototype.useModulesParams = function (e) { var t = this; t.modules && Object.keys(t.modules).forEach(function (i) { var s = t.modules[i]; s.params && d.extend(e, s.params) }) }, p.prototype.useModules = function (e) { void 0 === e && (e = {}); var t = this; t.modules && Object.keys(t.modules).forEach(function (i) { var s = t.modules[i], a = e[i] || {}; s.instance && Object.keys(s.instance).forEach(function (e) { var i = s.instance[e]; t[e] = "function" == typeof i ? i.bind(t) : i }), s.on && t.on && Object.keys(s.on).forEach(function (e) { t.on(e, s.on[e]) }), s.create && s.create.bind(t)(a) }) }, c.components.set = function (e) { this.use && this.use(e) }, p.installModule = function (e) { for (var t = [], i = arguments.length - 1; i-- > 0;)t[i] = arguments[i + 1]; var s = this; s.prototype.modules || (s.prototype.modules = {}); var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now(); return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function (t) { s.prototype[t] = e.proto[t] }), e.static && Object.keys(e.static).forEach(function (t) { s[t] = e.static[t] }), e.install && e.install.apply(s, t), s }, p.use = function (e) { for (var t = [], i = arguments.length - 1; i-- > 0;)t[i] = arguments[i + 1]; var s = this; return Array.isArray(e) ? (e.forEach(function (e) { return s.installModule(e) }), s) : s.installModule.apply(s, [e].concat(t)) }, Object.defineProperties(p, c); var u = { updateSize: function () { var e, t, i = this.$el; e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, { width: e, height: t, size: this.isHorizontal() ? e : t })) }, updateSlides: function () { var e = this.params, i = this.$wrapperEl, s = this.size, a = this.rtlTranslate, r = this.wrongRTL, n = i.children("." + this.params.slideClass), o = this.virtual && e.virtual.enabled ? this.virtual.slides.length : n.length, l = [], p = [], c = [], u = e.slidesOffsetBefore; "function" == typeof u && (u = e.slidesOffsetBefore.call(this)); var v = e.slidesOffsetAfter; "function" == typeof v && (v = e.slidesOffsetAfter.call(this)); var f = o, m = this.snapGrid.length, g = this.snapGrid.length, b = e.spaceBetween, w = -u, y = 0, x = 0; if (void 0 !== s) { var E, T; "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * s), this.virtualSize = -b, a ? n.css({ marginLeft: "", marginTop: "" }) : n.css({ marginRight: "", marginBottom: "" }), e.slidesPerColumn > 1 && (E = Math.floor(o / e.slidesPerColumn) === o / this.params.slidesPerColumn ? o : Math.ceil(o / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn))); for (var S, C = e.slidesPerColumn, M = E / C, z = M - (e.slidesPerColumn * M - o), k = 0; k < o; k += 1) { T = 0; var P = n.eq(k); if (e.slidesPerColumn > 1) { var $ = void 0, L = void 0, I = void 0; "column" === e.slidesPerColumnFill ? (I = k - (L = Math.floor(k / C)) * C, (L > z || L === z && I === C - 1) && (I += 1) >= C && (I = 0, L += 1), $ = L + I * E / C, P.css({ "-webkit-box-ordinal-group": $, "-moz-box-ordinal-group": $, "-ms-flex-order": $, "-webkit-order": $, order: $ })) : L = k - (I = Math.floor(k / M)) * M, P.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== I && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", L).attr("data-swiper-row", I) } if ("none" !== P.css("display")) { if ("auto" === e.slidesPerView) { var D = t.getComputedStyle(P[0], null); T = this.isHorizontal() ? P[0].getBoundingClientRect().width + parseFloat(D.getPropertyValue("margin-left")) + parseFloat(D.getPropertyValue("margin-right")) : P[0].getBoundingClientRect().height + parseFloat(D.getPropertyValue("margin-top")) + parseFloat(D.getPropertyValue("margin-bottom")), e.roundLengths && (T = Math.floor(T)) } else T = (s - (e.slidesPerView - 1) * b) / e.slidesPerView, e.roundLengths && (T = Math.floor(T)), n[k] && (this.isHorizontal() ? n[k].style.width = T + "px" : n[k].style.height = T + "px"); n[k] && (n[k].swiperSlideSize = T), c.push(T), e.centeredSlides ? (w = w + T / 2 + y / 2 + b, 0 === y && 0 !== k && (w = w - s / 2 - b), 0 === k && (w = w - s / 2 - b), Math.abs(w) < .001 && (w = 0), x % e.slidesPerGroup == 0 && l.push(w), p.push(w)) : (x % e.slidesPerGroup == 0 && l.push(w), p.push(w), w = w + T + b), this.virtualSize += T + b, y = T, x += 1 } } if (this.virtualSize = Math.max(this.virtualSize, s) + v, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({ width: this.virtualSize + e.spaceBetween + "px" }), h.flexbox && !e.setWrapperSize || (this.isHorizontal() ? i.css({ width: this.virtualSize + e.spaceBetween + "px" }) : i.css({ height: this.virtualSize + e.spaceBetween + "px" })), e.slidesPerColumn > 1 && (this.virtualSize = (T + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({ width: this.virtualSize + e.spaceBetween + "px" }) : i.css({ height: this.virtualSize + e.spaceBetween + "px" }), e.centeredSlides)) { S = []; for (var O = 0; O < l.length; O += 1)l[O] < this.virtualSize + l[0] && S.push(l[O]); l = S } if (!e.centeredSlides) { S = []; for (var A = 0; A < l.length; A += 1)l[A] <= this.virtualSize - s && S.push(l[A]); l = S, Math.floor(this.virtualSize - s) - Math.floor(l[l.length - 1]) > 1 && l.push(this.virtualSize - s) } 0 === l.length && (l = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? n.css({ marginLeft: b + "px" }) : n.css({ marginRight: b + "px" }) : n.css({ marginBottom: b + "px" })), d.extend(this, { slides: n, snapGrid: l, slidesGrid: p, slidesSizesGrid: c }), o !== f && this.emit("slidesLengthChange"), l.length !== m && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), p.length !== g && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset() } }, updateAutoHeight: function (e) { var t, i = [], s = 0; if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) { var a = this.activeIndex + t; if (a > this.slides.length) break; i.push(this.slides.eq(a)[0]) } else i.push(this.slides.eq(this.activeIndex)[0]); for (t = 0; t < i.length; t += 1)if (void 0 !== i[t]) { var r = i[t].offsetHeight; s = r > s ? r : s } s && this.$wrapperEl.css("height", s + "px") }, updateSlidesOffset: function () { for (var e = this.slides, t = 0; t < e.length; t += 1)e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop }, updateSlidesProgress: function (e) { void 0 === e && (e = this.translate || 0); var t = this.params, i = this.slides, s = this.rtlTranslate; if (0 !== i.length) { void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset(); var a = -e; s && (a = e), i.removeClass(t.slideVisibleClass); for (var r = 0; r < i.length; r += 1) { var n = i[r], o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween); if (t.watchSlidesVisibility) { var l = -(a - n.swiperSlideOffset), d = l + this.slidesSizesGrid[r]; (l >= 0 && l < this.size || d > 0 && d <= this.size || l <= 0 && d >= this.size) && i.eq(r).addClass(t.slideVisibleClass) } n.progress = s ? -o : o } } }, updateProgress: function (e) { void 0 === e && (e = this.translate || 0); var t = this.params, i = this.maxTranslate() - this.minTranslate(), s = this.progress, a = this.isBeginning, r = this.isEnd, n = a, o = r; 0 === i ? (s = 0, a = !0, r = !0) : (a = (s = (e - this.minTranslate()) / i) <= 0, r = s >= 1), d.extend(this, { progress: s, isBeginning: a, isEnd: r }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), a && !n && this.emit("reachBeginning toEdge"), r && !o && this.emit("reachEnd toEdge"), (n && !a || o && !r) && this.emit("fromEdge"), this.emit("progress", s) }, updateSlidesClasses: function () { var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, r = this.realIndex, n = this.virtual && i.virtual.enabled; t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass)); var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass); i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass); var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass); i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)) }, updateActiveIndex: function (e) { var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid, r = this.params, n = this.activeIndex, o = this.realIndex, l = this.snapIndex, h = e; if (void 0 === h) { for (var p = 0; p < s.length; p += 1)void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p); r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0) } if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1), h !== n) { var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10); d.extend(this, { snapIndex: t, realIndex: c, previousIndex: n, activeIndex: h }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== c && this.emit("realIndexChange"), this.emit("slideChange") } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange")) }, updateClickedSlide: function (e) { var t = this.params, i = s(e.target).closest("." + t.slideClass)[0], a = !1; if (i) for (var r = 0; r < this.slides.length; r += 1)this.slides[r] === i && (a = !0); if (!i || !a) return this.clickedSlide = void 0, void (this.clickedIndex = void 0); this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide() } }; var v = { getTranslate: function (e) { void 0 === e && (e = this.isHorizontal() ? "x" : "y"); var t = this.params, i = this.rtlTranslate, s = this.translate, a = this.$wrapperEl; if (t.virtualTranslate) return i ? -s : s; var r = d.getTranslate(a[0], e); return i && (r = -r), r || 0 }, setTranslate: function (e, t) { var i = this.rtlTranslate, s = this.params, a = this.$wrapperEl, r = this.progress, n = 0, o = 0; this.isHorizontal() ? n = i ? -e : e : o = e, s.roundLengths && (n = Math.floor(n), o = Math.floor(o)), s.virtualTranslate || (h.transforms3d ? a.transform("translate3d(" + n + "px, " + o + "px, 0px)") : a.transform("translate(" + n + "px, " + o + "px)")), this.translate = this.isHorizontal() ? n : o; var l = this.maxTranslate() - this.minTranslate(); (0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t) }, minTranslate: function () { return -this.snapGrid[0] }, maxTranslate: function () { return -this.snapGrid[this.snapGrid.length - 1] } }; var f = { setTransition: function (e, t) { this.$wrapperEl.transition(e), this.emit("setTransition", e, t) }, transitionStart: function (e, t) { void 0 === e && (e = !0); var i = this.activeIndex, s = this.params, a = this.previousIndex; s.autoHeight && this.updateAutoHeight(); var r = t; if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) { if ("reset" === r) return void this.emit("slideResetTransitionStart"); this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart") } }, transitionEnd: function (e, t) { void 0 === e && (e = !0); var i = this.activeIndex, s = this.previousIndex; this.animating = !1, this.setTransition(0); var a = t; if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) { if ("reset" === a) return void this.emit("slideResetTransitionEnd"); this.emit("slideChangeTransitionEnd"), "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd") } } }; var m = { slideTo: function (e, t, i, s) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0); var a = this, r = e; r < 0 && (r = 0); var n = a.params, o = a.snapGrid, l = a.slidesGrid, d = a.previousIndex, p = a.activeIndex, c = a.rtlTranslate, u = a.$wrapperEl; if (a.animating && n.preventIntercationOnTransition) return !1; var v = Math.floor(r / n.slidesPerGroup); v >= o.length && (v = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart"); var f, m = -o[v]; if (a.updateProgress(m), n.normalizeSlideIndex) for (var g = 0; g < l.length; g += 1)-Math.floor(100 * m) >= Math.floor(100 * l[g]) && (r = g); if (a.initialized && r !== p) { if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1; if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (p || 0) !== r) return !1 } return f = r > p ? "next" : r < p ? "prev" : "reset", c && -m === a.translate || !c && m === a.translate ? (a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(m), "reset" !== f && (a.transitionStart(i, f), a.transitionEnd(i, f)), !1) : (0 !== t && h.transition ? (a.setTransition(t), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.animating || (a.animating = !0, u.transitionEnd(function () { a && !a.destroyed && a.transitionEnd(i, f) }))) : (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.transitionEnd(i, f)), !0) }, slideToLoop: function (e, t, i, s) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0); var a = e; return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s) }, slideNext: function (e, t, i) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var s = this.params, a = this.animating; return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i) }, slidePrev: function (e, t, i) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var s = this.params, a = this.animating, r = this.snapGrid, n = this.slidesGrid, o = this.rtlTranslate; if (s.loop) { if (a) return !1; this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft } var l, d = o ? this.translate : -this.translate, h = (r[r.indexOf(d)], r[r.indexOf(d) - 1]); return h && (l = n.indexOf(h)) < 0 && (l = this.activeIndex - 1), this.slideTo(l, e, t, i) }, slideReset: function (e, t, i) { return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i) }, slideToClosest: function (e, t, i) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var s = this.activeIndex, a = Math.floor(s / this.params.slidesPerGroup); if (a < this.snapGrid.length - 1) { var r = this.rtlTranslate ? this.translate : -this.translate, n = this.snapGrid[a]; r - n > (this.snapGrid[a + 1] - n) / 2 && (s = this.params.slidesPerGroup) } return this.slideTo(s, e, t, i) }, slideToClickedSlide: function () { var e, t = this, i = t.params, a = t.$wrapperEl, r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, n = t.clickedIndex; if (i.loop) { if (t.animating) return; e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function () { t.slideTo(n) })) : t.slideTo(n) : n > t.slides.length - r ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function () { t.slideTo(n) })) : t.slideTo(n) } else t.slideTo(n) } }; var g = { loopCreate: function () { var t = this, i = t.params, a = t.$wrapperEl; a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove(); var r = a.children("." + i.slideClass); if (i.loopFillGroupWithBlank) { var n = i.slidesPerGroup - r.length % i.slidesPerGroup; if (n !== i.slidesPerGroup) { for (var o = 0; o < n; o += 1) { var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass); a.append(l) } r = a.children("." + i.slideClass) } } "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length); var d = [], h = []; r.each(function (e, i) { var a = s(i); e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e) }); for (var p = 0; p < h.length; p += 1)a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass)); for (var c = d.length - 1; c >= 0; c -= 1)a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass)) }, loopFix: function () { var e, t = this.params, i = this.activeIndex, s = this.slides, a = this.loopedSlides, r = this.allowSlidePrev, n = this.allowSlideNext, o = this.snapGrid, l = this.rtlTranslate; this.allowSlidePrev = !0, this.allowSlideNext = !0; var d = -o[i] - this.getTranslate(); i < a ? (e = s.length - 3 * a + i, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)) : ("auto" === t.slidesPerView && i >= 2 * a || i > s.length - 2 * t.slidesPerView) && (e = -s.length + i + a, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)); this.allowSlidePrev = r, this.allowSlideNext = n }, loopDestroy: function () { var e = this.$wrapperEl, t = this.params, i = this.slides; e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index") } }; var b = { setGrabCursor: function (e) { if (!h.touch && this.params.simulateTouch) { var t = this.el; t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab" } }, unsetGrabCursor: function () { h.touch || (this.el.style.cursor = "") } }; var w = { appendSlide: function (e) { var t = this.$wrapperEl, i = this.params; if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1)e[s] && t.append(e[s]); else t.append(e); i.loop && this.loopCreate(), i.observer && h.observer || this.update() }, prependSlide: function (e) { var t = this.params, i = this.$wrapperEl, s = this.activeIndex; t.loop && this.loopDestroy(); var a = s + 1; if ("object" == typeof e && "length" in e) { for (var r = 0; r < e.length; r += 1)e[r] && i.prepend(e[r]); a = s + e.length } else i.prepend(e); t.loop && this.loopCreate(), t.observer && h.observer || this.update(), this.slideTo(a, 0, !1) }, removeSlide: function (e) { var t = this.params, i = this.$wrapperEl, s = this.activeIndex; t.loop && (this.loopDestroy(), this.slides = i.children("." + t.slideClass)); var a, r = s; if ("object" == typeof e && "length" in e) { for (var n = 0; n < e.length; n += 1)a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1); r = Math.max(r, 0) } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0); t.loop && this.loopCreate(), t.observer && h.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1) }, removeAllSlides: function () { for (var e = [], t = 0; t < this.slides.length; t += 1)e.push(t); this.removeSlide(e) } }, y = function () { var i = t.navigator.userAgent, s = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: t.cordova || t.phonegap, phonegap: t.cordova || t.phonegap }, a = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), r = i.match(/(Android);?[\s\/]+([\d.]+)?/), n = i.match(/(iPad).*OS\s([\d_]+)/), o = i.match(/(iPod)(.*OS\s([\d_]+))?/), l = !n && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/); if (a && (s.os = "windows", s.osVersion = a[2], s.windows = !0), r && !a && (s.os = "android", s.osVersion = r[2], s.android = !0, s.androidChrome = i.toLowerCase().indexOf("chrome") >= 0), (n || l || o) && (s.os = "ios", s.ios = !0), l && !o && (s.osVersion = l[2].replace(/_/g, "."), s.iphone = !0), n && (s.osVersion = n[2].replace(/_/g, "."), s.ipad = !0), o && (s.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, s.iphone = !0), s.ios && s.osVersion && i.indexOf("Version/") >= 0 && "10" === s.osVersion.split(".")[0] && (s.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), s.desktop = !(s.os || s.android || s.webView), s.webView = (l || n || o) && i.match(/.*AppleWebKit(?!.*Safari)/i), s.os && "ios" === s.os) { var d = s.osVersion.split("."), h = e.querySelector('meta[name="viewport"]'); s.minimalUi = !s.webView && (o || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0 } return s.pixelRatio = t.devicePixelRatio || 1, s }(); function x() { var e = this.params, t = this.el; if (!t || 0 !== t.offsetWidth) { e.breakpoints && this.setBreakpoint(); var i = this.allowSlideNext, s = this.allowSlidePrev, a = this.snapGrid; if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) { var r = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate()); this.setTranslate(r), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight() } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0); this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow() } } var E = { attachEvents: function () { var i = this.params, a = this.touchEvents, r = this.el, n = this.wrapperEl; this.onTouchStart = function (i) { var a = this.touchEventsData, r = this.params, n = this.touches; if (!this.animating || !r.preventIntercationOnTransition) { var o = i; if (o.originalEvent && (o = o.originalEvent), a.isTouchEvent = "touchstart" === o.type, (a.isTouchEvent || !("which" in o) || 3 !== o.which) && (!a.isTouched || !a.isMoved)) if (r.noSwiping && s(o.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0; else if (!r.swipeHandler || s(o).closest(r.swipeHandler)[0]) { n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY; var l = n.currentX, h = n.currentY; if (!(y.ios && !y.cordova && r.iOSEdgeSwipeDetection && l <= r.iOSEdgeSwipeThreshold && l >= t.screen.width - r.iOSEdgeSwipeThreshold)) { if (d.extend(a, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), n.startX = l, n.startY = h, a.touchStartTime = d.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== o.type) { var p = !0; s(o.target).is(a.formElements) && (p = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== o.target && e.activeElement.blur(), p && this.allowTouchMove && o.preventDefault() } this.emit("touchStart", o) } } } }.bind(this), this.onTouchMove = function (t) { var i = this.touchEventsData, a = this.params, r = this.touches, n = this.rtlTranslate, o = t; if (o.originalEvent && (o = o.originalEvent), i.isTouched) { if (!i.isTouchEvent || "mousemove" !== o.type) { var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX, h = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY; if (o.preventedByNestedSwiper) return r.startX = l, void (r.startY = h); if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (d.extend(r, { startX: l, startY: h, currentX: l, currentY: h }), i.touchStartTime = d.now())); if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop) if (this.isVertical()) { if (h < r.startY && this.translate <= this.maxTranslate() || h > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1) } else if (l < r.startX && this.translate <= this.maxTranslate() || l > r.startX && this.translate >= this.minTranslate()) return; if (i.isTouchEvent && e.activeElement && o.target === e.activeElement && s(o.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1); if (i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) { r.currentX = l, r.currentY = h; var p, c = r.currentX - r.startX, u = r.currentY - r.startY; if (void 0 === i.isScrolling && (this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (p = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1; else if (i.startMoving) { this.allowClick = !1, o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), i.isMoved = !0; var v = this.isHorizontal() ? c : u; r.diff = v, v *= a.touchRatio, n && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate; var f = !0, m = a.resistanceRatio; if (a.touchReleaseOnEdges && (m = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, m))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, m))), f && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) { if (!(Math.abs(v) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate); if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY) } a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({ position: r[this.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }), i.velocities.push({ position: r[this.isHorizontal() ? "currentX" : "currentY"], time: d.now() })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate)) } } } } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o) }.bind(this), this.onTouchEnd = function (e) { var t = this, i = t.touchEventsData, s = t.params, a = t.touches, r = t.rtlTranslate, n = t.$wrapperEl, o = t.slidesGrid, l = t.snapGrid, h = e; if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1); s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1); var p, c = d.now(), u = c - i.touchStartTime; if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap", h), u < 300 && c - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = d.nextTick(function () { t && !t.destroyed && t.emit("click", h) }, 300)), u < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", h))), i.lastClickTime = d.now(), d.nextTick(function () { t.destroyed || (t.allowClick = !0) }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1); if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) { if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex); if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1)); if (s.freeModeMomentum) { if (i.velocities.length > 1) { var v = i.velocities.pop(), f = i.velocities.pop(), m = v.position - f.position, g = v.time - f.time; t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || d.now() - v.time > 300) && (t.velocity = 0) } else t.velocity = 0; t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0; var b = 1e3 * s.freeModeMomentumRatio, w = t.velocity * b, y = t.translate + w; r && (y = -y); var x, E, T = !1, S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio; if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (E = !0); else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (E = !0); else if (s.freeModeSticky) { for (var C, M = 0; M < l.length; M += 1)if (l[M] > -y) { C = M; break } y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1]) } if (E && t.once("transitionEnd", function () { t.loopFix() }), 0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity); else if (s.freeModeSticky) return void t.slideToClosest(); s.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () { t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), n.transitionEnd(function () { t && !t.destroyed && t.transitionEnd() })) })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () { t && !t.destroyed && t.transitionEnd() }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses() } else if (s.freeModeSticky) return void t.slideToClosest(); (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()) } else { for (var z = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += s.slidesPerGroup)void 0 !== o[P + s.slidesPerGroup] ? p >= o[P] && p < o[P + s.slidesPerGroup] && (z = P, k = o[P + s.slidesPerGroup] - o[P]) : p >= o[P] && (z = P, k = o[o.length - 1] - o[o.length - 2]); var $ = (p - o[z]) / k; if (u > s.longSwipesMs) { if (!s.longSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && ($ >= s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z)), "prev" === t.swipeDirection && ($ > 1 - s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z)) } else { if (!s.shortSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && t.slideTo(z + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(z) } } }.bind(this), this.onClick = function (e) { this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation())) }.bind(this); var o = "container" === i.touchEventsTarget ? r : n, l = !!i.nested; if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) { if (h.touch) { var p = !("touchstart" !== a.start || !h.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 }; o.addEventListener(a.start, this.onTouchStart, p), o.addEventListener(a.move, this.onTouchMove, h.passiveListener ? { passive: !1, capture: l } : l), o.addEventListener(a.end, this.onTouchEnd, p) } (i.simulateTouch && !y.ios && !y.android || i.simulateTouch && !h.touch && y.ios) && (o.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, l), e.addEventListener("mouseup", this.onTouchEnd, !1)) } else o.addEventListener(a.start, this.onTouchStart, !1), e.addEventListener(a.move, this.onTouchMove, l), e.addEventListener(a.end, this.onTouchEnd, !1); (i.preventClicks || i.preventClicksPropagation) && o.addEventListener("click", this.onClick, !0), this.on("resize observerUpdate", x, !0) }, detachEvents: function () { var t = this.params, i = this.touchEvents, s = this.el, a = this.wrapperEl, r = "container" === t.touchEventsTarget ? s : a, n = !!t.nested; if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) { if (h.touch) { var o = !("onTouchStart" !== i.start || !h.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 }; r.removeEventListener(i.start, this.onTouchStart, o), r.removeEventListener(i.move, this.onTouchMove, n), r.removeEventListener(i.end, this.onTouchEnd, o) } (t.simulateTouch && !y.ios && !y.android || t.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, n), e.removeEventListener("mouseup", this.onTouchEnd, !1)) } else r.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, n), e.removeEventListener(i.end, this.onTouchEnd, !1); (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0), this.off("resize observerUpdate", x) } }; var T = { setBreakpoint: function () { var e = this.activeIndex, t = this.loopedSlides; void 0 === t && (t = 0); var i = this.params, s = i.breakpoints; if (s && (!s || 0 !== Object.keys(s).length)) { var a = this.getBreakpoint(s); if (a && this.currentBreakpoint !== a) { var r = a in s ? s[a] : this.originalParams, n = i.loop && r.slidesPerView !== i.slidesPerView; d.extend(this.params, r), d.extend(this, { allowTouchMove: this.params.allowTouchMove, allowSlideNext: this.params.allowSlideNext, allowSlidePrev: this.params.allowSlidePrev }), this.currentBreakpoint = a, n && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - t + this.loopedSlides, 0, !1)), this.emit("breakpoint", r) } } }, getBreakpoint: function (e) { if (e) { var i = !1, s = []; Object.keys(e).forEach(function (e) { s.push(e) }), s.sort(function (e, t) { return parseInt(e, 10) - parseInt(t, 10) }); for (var a = 0; a < s.length; a += 1) { var r = s[a]; r >= t.innerWidth && !i && (i = r) } return i || "max" } } }, S = function () { return { isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g), isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent) }; var e }(); var C = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, preventIntercationOnTransition: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 }, M = { update: u, translate: v, transition: f, slide: m, loop: g, grabCursor: b, manipulation: w, events: E, breakpoints: T, checkOverflow: { checkOverflow: function () { var e = this.isLocked; this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update()) } }, classes: { addClasses: function () { var e = this.classNames, t = this.params, i = this.rtl, s = this.$el, a = []; a.push(t.direction), t.freeMode && a.push("free-mode"), h.flexbox || a.push("no-flexbox"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && a.push("multirow"), y.android && a.push("android"), y.ios && a.push("ios"), S.isIE && (h.pointerEvents || h.prefixedPointerEvents) && a.push("wp8-" + t.direction), a.forEach(function (i) { e.push(t.containerModifierClass + i) }), s.addClass(e.join(" ")) }, removeClasses: function () { var e = this.$el, t = this.classNames; e.removeClass(t.join(" ")) } }, images: { loadImage: function (e, i, s, a, r, n) { var o; function l() { n && n() } e.complete && r ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l() }, preloadImages: function () { var e = this; function t() { void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady"))) } e.imagesToLoad = e.$el.find("img"); for (var i = 0; i < e.imagesToLoad.length; i += 1) { var s = e.imagesToLoad[i]; e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t) } } } }, z = {}, k = function (e) { function t() { for (var i, a, r, n = [], o = arguments.length; o--;)n[o] = arguments[o]; 1 === n.length && n[0].constructor && n[0].constructor === Object ? r = n[0] : (a = (i = n)[0], r = i[1]), r || (r = {}), r = d.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(M).forEach(function (e) { Object.keys(M[e]).forEach(function (i) { t.prototype[i] || (t.prototype[i] = M[e][i]) }) }); var l = this; void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (e) { var t = l.modules[e]; if (t.params) { var i = Object.keys(t.params)[0], s = t.params[i]; if ("object" != typeof s) return; if (!(i in r && "enabled" in s)) return; !0 === r[i] && (r[i] = { enabled: !0 }), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = { enabled: !1 }) } }); var p = d.extend({}, C); l.useModulesParams(p), l.params = d.extend({}, p, z, r), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, r), l.$ = s; var c = s(l.params.el); if (a = c[0]) { if (c.length > 1) { var u = []; return c.each(function (e, i) { var s = d.extend({}, r, { el: i }); u.push(new t(s)) }), u } a.swiper = l, c.data("swiper", l); var v, f, m = c.children("." + l.params.wrapperClass); return d.extend(l, { $el: c, el: a, $wrapperEl: m, wrapperEl: m[0], classNames: [], slides: s(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function () { return "horizontal" === l.params.direction }, isVertical: function () { return "vertical" === l.params.direction }, rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"), rtlTranslate: "horizontal" === l.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")), wrongRTL: "-webkit-box" === m.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: l.params.allowSlideNext, allowSlidePrev: l.params.allowSlidePrev, touchEvents: (v = ["touchstart", "touchmove", "touchend"], f = ["mousedown", "mousemove", "mouseup"], h.pointerEvents ? f = ["pointerdown", "pointermove", "pointerup"] : h.prefixedPointerEvents && (f = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = { start: v[0], move: v[1], end: v[2] }, l.touchEventsDesktop = { start: f[0], move: f[1], end: f[2] }, h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: d.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: l.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), l.useModules(), l.params.init && l.init(), l } } e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t; var i = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } }; return t.prototype.slidesPerViewDynamic = function () { var e = this.params, t = this.slides, i = this.slidesGrid, s = this.size, a = this.activeIndex, r = 1; if (e.centeredSlides) { for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1)t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0)); for (var d = a - 1; d >= 0; d -= 1)t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0)) } else for (var h = a + 1; h < t.length; h += 1)i[h] - i[a] < s && (r += 1); return r }, t.prototype.update = function () { var e = this; if (e && !e.destroyed) { var t = e.snapGrid, i = e.params; i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update") } function s() { var t = e.rtlTranslate ? -1 * e.translate : e.translate, i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate()); e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses() } }, t.prototype.init = function () { this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init")) }, t.prototype.destroy = function (e, t) { void 0 === e && (e = !0), void 0 === t && (t = !0); var i = this, s = i.params, a = i.$el, r = i.$wrapperEl, n = i.slides; i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) { i.off(e) }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0 }, t.extendDefaults = function (e) { d.extend(z, e) }, i.extendedDefaults.get = function () { return z }, i.defaults.get = function () { return C }, i.Class.get = function () { return e }, i.$.get = function () { return s }, Object.defineProperties(t, i), t }(p), P = { name: "device", proto: { device: y }, static: { device: y } }, $ = { name: "support", proto: { support: h }, static: { support: h } }, L = { name: "browser", proto: { browser: S }, static: { browser: S } }, I = { name: "resize", create: function () { var e = this; d.extend(e, { resize: { resizeHandler: function () { e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize")) }, orientationChangeHandler: function () { e && !e.destroyed && e.initialized && e.emit("orientationchange") } } }) }, on: { init: function () { t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler) }, destroy: function () { t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler) } } }, D = { func: t.MutationObserver || t.WebkitMutationObserver, attach: function (e, t) { void 0 === t && (t = {}); var i = this, s = new (0, D.func)(function (e) { e.forEach(function (e) { i.emit("observerUpdate", e) }) }); s.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), i.observer.observers.push(s) }, init: function () { if (h.observer && this.params.observer) { if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)this.observer.attach(e[t]); this.observer.attach(this.$el[0], { childList: !1 }), this.observer.attach(this.$wrapperEl[0], { attributes: !1 }) } }, destroy: function () { this.observer.observers.forEach(function (e) { e.disconnect() }), this.observer.observers = [] } }, O = { name: "observer", params: { observer: !1, observeParents: !1 }, create: function () { d.extend(this, { observer: { init: D.init.bind(this), attach: D.attach.bind(this), destroy: D.destroy.bind(this), observers: [] } }) }, on: { init: function () { this.observer.init() }, destroy: function () { this.observer.destroy() } } }, A = { update: function (e) { var t = this, i = t.params, s = i.slidesPerView, a = i.slidesPerGroup, r = i.centeredSlides, n = t.virtual, o = n.from, l = n.to, h = n.slides, p = n.slidesGrid, c = n.renderSlide, u = n.offset; t.updateActiveIndex(); var v, f, m, g = t.activeIndex || 0; v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (f = Math.floor(s / 2) + a, m = Math.floor(s / 2) + a) : (f = s + (a - 1), m = a); var b = Math.max((g || 0) - m, 0), w = Math.min((g || 0) + f, h.length - 1), y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0); function x() { t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load() } if (d.extend(t.virtual, { from: b, to: w, offset: y, slidesGrid: t.slidesGrid }), o === b && l === w && !e) return t.slidesGrid !== p && y !== u && t.slides.css(v, y + "px"), void t.updateProgress(); if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, { offset: y, from: b, to: w, slides: function () { for (var e = [], t = b; t <= w; t += 1)e.push(h[t]); return e }() }), void x(); var E = [], T = []; if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var S = o; S <= l; S += 1)(S < b || S > w) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove(); for (var C = 0; C < h.length; C += 1)C >= b && C <= w && (void 0 === l || e ? T.push(C) : (C > l && T.push(C), C < o && E.push(C))); T.forEach(function (e) { t.$wrapperEl.append(c(h[e], e)) }), E.sort(function (e, t) { return e < t }).forEach(function (e) { t.$wrapperEl.prepend(c(h[e], e)) }), t.$wrapperEl.children(".swiper-slide").css(v, y + "px"), x() }, renderSlide: function (e, t) { var i = this.params.virtual; if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t]; var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>"); return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a }, appendSlide: function (e) { this.virtual.slides.push(e), this.virtual.update(!0) }, prependSlide: function (e) { if (this.virtual.slides.unshift(e), this.params.virtual.cache) { var t = this.virtual.cache, i = {}; Object.keys(t).forEach(function (e) { i[e + 1] = t[e] }), this.virtual.cache = i } this.virtual.update(!0), this.slideNext(0) } }, G = { name: "virtual", params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null } }, create: function () { d.extend(this, { virtual: { update: A.update.bind(this), appendSlide: A.appendSlide.bind(this), prependSlide: A.prependSlide.bind(this), renderSlide: A.renderSlide.bind(this), slides: this.params.virtual.slides, cache: {} } }) }, on: { beforeInit: function () { if (this.params.virtual.enabled) { this.classNames.push(this.params.containerModifierClass + "virtual"); var e = { watchSlidesProgress: !0 }; d.extend(this.params, e), d.extend(this.originalParams, e), this.virtual.update() } }, setTranslate: function () { this.params.virtual.enabled && this.virtual.update() } } }, H = { handle: function (i) { var s = this.rtlTranslate, a = i; a.originalEvent && (a = a.originalEvent); var r = a.keyCode || a.charCode; if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r)) return !1; if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r)) return !1; if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) { if (this.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) { var n = !1; if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return; var o = t.innerWidth, l = t.innerHeight, d = this.$el.offset(); s && (d.left -= this.$el[0].scrollLeft); for (var h = [[d.left, d.top], [d.left + this.width, d.top], [d.left, d.top + this.height], [d.left + this.width, d.top + this.height]], p = 0; p < h.length; p += 1) { var c = h[p]; c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0) } if (!n) return } this.isHorizontal() ? (37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === r && !s || 37 === r && s) && this.slideNext(), (37 === r && !s || 39 === r && s) && this.slidePrev()) : (38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === r && this.slideNext(), 38 === r && this.slidePrev()), this.emit("keyPress", r) } }, enable: function () { this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0) }, disable: function () { this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1) } }, N = { name: "keyboard", params: { keyboard: { enabled: !1, onlyInViewport: !0 } }, create: function () { d.extend(this, { keyboard: { enabled: !1, enable: H.enable.bind(this), disable: H.disable.bind(this), handle: H.handle.bind(this) } }) }, on: { init: function () { this.params.keyboard.enabled && this.keyboard.enable() }, destroy: function () { this.keyboard.enabled && this.keyboard.disable() } } }; var B = { lastScrollTime: d.now(), event: t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () { var t = "onwheel" in e; if (!t) { var i = e.createElement("div"); i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel } return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t }() ? "wheel" : "mousewheel", normalize: function (e) { var t = 0, i = 0, s = 0, a = 0; return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), { spinX: t, spinY: i, pixelX: s, pixelY: a } }, handleMouseEnter: function () { this.mouseEntered = !0 }, handleMouseLeave: function () { this.mouseEntered = !1 }, handle: function (e) { var i = e, s = this, a = s.params.mousewheel; if (!s.mouseEntered && !a.releaseOnEdges) return !0; i.originalEvent && (i = i.originalEvent); var r = 0, n = s.rtlTranslate ? -1 : 1, o = B.normalize(i); if (a.forceToAxis) if (s.isHorizontal()) { if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0; r = o.pixelX * n } else { if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0; r = o.pixelY } else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY; if (0 === r) return !0; if (a.invert && (r = -r), s.params.freeMode) { s.params.loop && s.loopFix(); var l = s.getTranslate() + r * a.sensitivity, h = s.isBeginning, p = s.isEnd; if (l >= s.minTranslate() && (l = s.minTranslate()), l <= s.maxTranslate() && (l = s.maxTranslate()), s.setTransition(0), s.setTranslate(l), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses(), (!h && s.isBeginning || !p && s.isEnd) && s.updateSlidesClasses(), s.params.freeModeSticky && (clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = d.nextTick(function () { s.slideToClosest() }, 300)), s.emit("scroll", i), s.params.autoplay && s.params.autoplayDisableOnInteraction && s.stopAutoplay(), l === s.minTranslate() || l === s.maxTranslate()) return !0 } else { if (d.now() - s.mousewheel.lastScrollTime > 60) if (r < 0) if (s.isEnd && !s.params.loop || s.animating) { if (a.releaseOnEdges) return !0 } else s.slideNext(), s.emit("scroll", i); else if (s.isBeginning && !s.params.loop || s.animating) { if (a.releaseOnEdges) return !0 } else s.slidePrev(), s.emit("scroll", i); s.mousewheel.lastScrollTime = (new t.Date).getTime() } return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1 }, enable: function () { if (!B.event) return !1; if (this.mousewheel.enabled) return !1; var e = this.$el; return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(B.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0 }, disable: function () { if (!B.event) return !1; if (!this.mousewheel.enabled) return !1; var e = this.$el; return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.off(B.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0 } }, X = { update: function () { var e = this.params.navigation; if (!this.params.loop) { var t = this.navigation, i = t.$nextEl, s = t.$prevEl; s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)) } }, init: function () { var e, t, i = this, a = i.params.navigation; (a.nextEl || a.prevEl) && (a.nextEl && (e = s(a.nextEl), i.params.uniqueNavElements && "string" == typeof a.nextEl && e.length > 1 && 1 === i.$el.find(a.nextEl).length && (e = i.$el.find(a.nextEl))), a.prevEl && (t = s(a.prevEl), i.params.uniqueNavElements && "string" == typeof a.prevEl && t.length > 1 && 1 === i.$el.find(a.prevEl).length && (t = i.$el.find(a.prevEl))), e && e.length > 0 && e.on("click", function (e) { e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext() }), t && t.length > 0 && t.on("click", function (e) { e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev() }), d.extend(i.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] })) }, destroy: function () { var e = this.navigation, t = e.$nextEl, i = e.$prevEl; t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass)) } }, Y = { update: function () { var e = this.rtl, t = this.params.pagination; if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) { var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, r = this.pagination.$el, n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length; if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) { var o, l, d, h = this.pagination.bullets; if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each(function (e, a) { var r = s(a), n = r.index(); n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")) }); else if (h.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets) { for (var p = h.eq(o), c = h.eq(l), u = o; u <= l; u += 1)h.eq(u).addClass(t.bulletActiveClass + "-main"); p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next") } if (t.dynamicBullets) { var v = Math.min(h.length, t.dynamicMainBullets + 4), f = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize, m = e ? "right" : "left"; h.css(this.isHorizontal() ? m : "top", f + "px") } } if ("fraction" === t.type && (r.find("." + t.currentClass).text(i + 1), r.find("." + t.totalClass).text(n)), "progressbar" === t.type) { var g; g = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical"; var b = (i + 1) / n, w = 1, y = 1; "horizontal" === g ? w = b : y = b, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(this.params.speed) } "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass) } }, render: function () { var e = this.params.pagination; if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) { var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, i = this.pagination.$el, s = ""; if ("bullets" === e.type) { for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1)e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">"; i.html(s), this.pagination.bullets = i.find("." + e.bulletClass) } "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]) } }, init: function () { var e = this, t = e.params.pagination; if (t.el) { var i = s(t.el); 0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) { t.preventDefault(); var i = s(this).index() * e.params.slidesPerGroup; e.params.loop && (i += e.loopedSlides), e.slideTo(i) }), d.extend(e.pagination, { $el: i, el: i[0] })) } }, destroy: function () { var e = this.params.pagination; if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) { var t = this.pagination.$el; t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass) } } }, V = { setTranslate: function () { if (this.params.scrollbar.el && this.scrollbar.el) { var e = this.scrollbar, t = this.rtlTranslate, i = this.progress, s = e.dragSize, a = e.trackSize, r = e.$dragEl, n = e.$el, o = this.params.scrollbar, l = s, d = (a - s) * i; t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (h.transforms3d ? r.transform("translate3d(" + d + "px, 0, 0)") : r.transform("translateX(" + d + "px)"), r[0].style.width = l + "px") : (h.transforms3d ? r.transform("translate3d(0px, " + d + "px, 0)") : r.transform("translateY(" + d + "px)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () { n[0].style.opacity = 0, n.transition(400) }, 1e3)) } }, setTransition: function (e) { this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e) }, updateSize: function () { if (this.params.scrollbar.el && this.scrollbar.el) { var e = this.scrollbar, t = e.$dragEl, i = e.$el; t[0].style.width = "", t[0].style.height = ""; var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = this.size / this.virtualSize, n = r * (a / this.size); s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), d.extend(e, { trackSize: a, divider: r, moveDivider: n, dragSize: s }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass) } }, setDragPosition: function (e) { var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, r = i.dragSize, n = i.trackSize; t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[this.isHorizontal() ? "left" : "top"] - r / 2) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t); var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t; this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses() }, onDragStart: function (e) { var t = this.params.scrollbar, i = this.scrollbar, s = this.$wrapperEl, a = i.$el, r = i.$dragEl; this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.emit("scrollbarDragStart", e) }, onDragMove: function (e) { var t = this.scrollbar, i = this.$wrapperEl, s = t.$el, a = t.$dragEl; this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e)) }, onDragEnd: function (e) { var t = this.params.scrollbar, i = this.scrollbar.$el; this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = d.nextTick(function () { i.css("opacity", 0), i.transition(400) }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest()) }, enableDraggable: function () { if (this.params.scrollbar.el) { var t = this.scrollbar, i = this.touchEvents, s = this.touchEventsDesktop, a = this.params, r = t.$el[0], n = !(!h.passiveListener || !a.passiveListener) && { passive: !1, capture: !1 }, o = !(!h.passiveListener || !a.passiveListener) && { passive: !0, capture: !1 }; h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.addEventListener("mousedown", this.scrollbar.onDragStart, n), e.addEventListener("mousemove", this.scrollbar.onDragMove, n), e.addEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, o)) } }, disableDraggable: function () { if (this.params.scrollbar.el) { var t = this.scrollbar, i = this.touchEvents, s = this.touchEventsDesktop, a = this.params, r = t.$el[0], n = !(!h.passiveListener || !a.passiveListener) && { passive: !1, capture: !1 }, o = !(!h.passiveListener || !a.passiveListener) && { passive: !0, capture: !1 }; h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.scrollbar.onDragStart, n), e.removeEventListener("mousemove", this.scrollbar.onDragMove, n), e.removeEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, o)) } }, init: function () { if (this.params.scrollbar.el) { var e = this.scrollbar, t = this.$el, i = this.params.scrollbar, a = s(i.el); this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el)); var r = a.find("." + this.params.scrollbar.dragClass); 0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), d.extend(e, { $el: a, el: a[0], $dragEl: r, dragEl: r[0] }), i.draggable && e.enableDraggable() } }, destroy: function () { this.scrollbar.disableDraggable() } }, R = { setTransform: function (e, t) { var i = this.rtl, a = s(e), r = i ? -1 : 1, n = a.attr("data-swiper-parallax") || "0", o = a.attr("data-swiper-parallax-x"), l = a.attr("data-swiper-parallax-y"), d = a.attr("data-swiper-parallax-scale"), h = a.attr("data-swiper-parallax-opacity"); if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", void 0 !== h && null !== h) { var p = h - (h - 1) * (1 - Math.abs(t)); a[0].style.opacity = p } if (void 0 === d || null === d) a.transform("translate3d(" + o + ", " + l + ", 0px)"); else { var c = d - (d - 1) * (1 - Math.abs(t)); a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")") } }, setTranslate: function () { var e = this, t = e.$el, i = e.slides, a = e.progress, r = e.snapGrid; t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) { e.parallax.setTransform(i, a) }), i.each(function (t, i) { var n = i.progress; e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) { e.parallax.setTransform(i, n) }) }) }, setTransition: function (e) { void 0 === e && (e = this.params.speed); this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) { var a = s(i), r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e; 0 === e && (r = 0), a.transition(r) }) } }, F = { getDistanceBetweenTouches: function (e) { if (e.targetTouches.length < 2) return 1; var t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, s = e.targetTouches[1].pageX, a = e.targetTouches[1].pageY; return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2)) }, onGestureStart: function (e) { var t = this.params.zoom, i = this.zoom, a = i.gesture; if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !h.gestures) { if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return; i.fakeGestureTouched = !0, a.scaleStart = F.getDistanceBetweenTouches(e) } a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0 }, onGestureChange: function (e) { var t = this.params.zoom, i = this.zoom, s = i.gesture; if (!h.gestures) { if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return; i.fakeGestureMoved = !0, s.scaleMove = F.getDistanceBetweenTouches(e) } s.$imageEl && 0 !== s.$imageEl.length && (h.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")")) }, onGestureEnd: function (e) { var t = this.params.zoom, i = this.zoom, s = i.gesture; if (!h.gestures) { if (!i.fakeGestureTouched || !i.fakeGestureMoved) return; if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !y.android) return; i.fakeGestureTouched = !1, i.fakeGestureMoved = !1 } s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0)) }, onTouchStart: function (e) { var t = this.zoom, i = t.gesture, s = t.image; i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (y.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)) }, onTouchMove: function (e) { var t = this.zoom, i = t.gesture, s = t.image, a = t.velocity; if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) { s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY)); var r = s.width * t.scale, n = s.height * t.scale; if (!(r < i.slideWidth && n < i.slideHeight)) { if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) { if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1); if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1) } e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)") } } }, onTouchEnd: function () { var e = this.zoom, t = e.gesture, i = e.image, s = e.velocity; if (t.$imageEl && 0 !== t.$imageEl.length) { if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1); i.isTouched = !1, i.isMoved = !1; var a = 300, r = 300, n = s.x * a, o = i.currentX + n, l = s.y * r, d = i.currentY + l; 0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y)); var h = Math.max(a, r); i.currentX = o, i.currentY = d; var p = i.width * e.scale, c = i.height * e.scale; i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)") } }, onTransitionEnd: function () { var e = this.zoom, t = e.gesture; t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1) }, toggle: function (e) { var t = this.zoom; t.scale && 1 !== t.scale ? t.out() : t.in(e) }, in: function (e) { var t, i, a, r, n, o, l, d, h, p, c, u, v, f, m, g, b = this.zoom, w = this.params.zoom, y = b.gesture, x = b.image; (y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = y.$slideEl[0].offsetWidth, g = y.$slideEl[0].offsetHeight, a = y.$slideEl.offset().left + m / 2 - t, r = y.$slideEl.offset().top + g / 2 - i, l = y.$imageEl[0].offsetWidth, d = y.$imageEl[0].offsetHeight, h = l * b.scale, p = d * b.scale, v = -(c = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(g / 2 - p / 2, 0)), n = a * b.scale, o = r * b.scale, n < c && (n = c), n > v && (n = v), o < u && (o = u), o > f && (o = f)) : (n = 0, o = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")")) }, out: function () { var e = this.zoom, t = this.params.zoom, i = e.gesture; i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0) }, enable: function () { var e = this.zoom; if (!e.enabled) { e.enabled = !0; var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 }; h.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove) } }, disable: function () { var e = this.zoom; if (e.enabled) { this.zoom.enabled = !1; var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 }; h.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove) } } }, W = { loadInSlide: function (e, t) { void 0 === t && (t = !0); var i = this, a = i.params.lazy; if (void 0 !== e && 0 !== i.slides.length) { var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e), n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")"); !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function (e, n) { var o = s(n); o.addClass(a.loadingClass); var l = o.attr("data-background"), d = o.attr("data-src"), h = o.attr("data-srcset"), p = o.attr("data-sizes"); i.loadImage(o[0], d || l, h, p, !1, function () { if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) { if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) { var e = r.attr("data-swiper-slide-index"); if (r.hasClass(i.params.slideDuplicateClass)) { var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")"); i.lazy.loadInSlide(s.index(), !1) } else { var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]'); i.lazy.loadInSlide(n.index(), !1) } } i.emit("lazyImageReady", r[0], o[0]) } }), i.emit("lazyImageLoad", r[0], o[0]) }) } }, load: function () { var e = this, t = e.$wrapperEl, i = e.params, a = e.slides, r = e.activeIndex, n = e.virtual && i.virtual.enabled, o = i.lazy, l = i.slidesPerView; function d(e) { if (n) { if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0 } else if (a[e]) return !0; return !1 } function h(e) { return n ? s(e).attr("data-swiper-slide-index") : s(e).index() } if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t, i) { var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index(); e.lazy.loadInSlide(a) }); else if (l > 1) for (var p = r; p < r + l; p += 1)d(p) && e.lazy.loadInSlide(p); else e.lazy.loadInSlide(r); if (o.loadPrevNext) if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) { for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1)d(m) && e.lazy.loadInSlide(m); for (var g = f; g < r; g += 1)d(g) && e.lazy.loadInSlide(g) } else { var b = t.children("." + i.slideNextClass); b.length > 0 && e.lazy.loadInSlide(h(b)); var w = t.children("." + i.slidePrevClass); w.length > 0 && e.lazy.loadInSlide(h(w)) } } }, q = { LinearSpline: function (e, t) { var i, s, a, r, n, o = function (e, t) { for (s = -1, i = e.length; i - s > 1;)e[a = i + s >> 1] <= t ? s = a : i = a; return i }; return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) { return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0 }, this }, getInterpolateFunction: function (e) { this.controller.spline || (this.controller.spline = this.params.loop ? new q.LinearSpline(this.slidesGrid, e.slidesGrid) : new q.LinearSpline(this.snapGrid, e.snapGrid)) }, setTranslate: function (e, t) { var i, s, a = this, r = a.controller.control; function n(e) { var t = a.rtlTranslate ? -a.translate : a.translate; "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses() } if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1)r[o] !== t && r[o] instanceof k && n(r[o]); else r instanceof k && t !== r && n(r) }, setTransition: function (e, t) { var i, s = this, a = s.controller.control; function r(t) { t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function () { a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd()) })) } if (Array.isArray(a)) for (i = 0; i < a.length; i += 1)a[i] !== t && a[i] instanceof k && r(a[i]); else a instanceof k && t !== a && r(a) } }, j = { makeElFocusable: function (e) { return e.attr("tabIndex", "0"), e }, addElRole: function (e, t) { return e.attr("role", t), e }, addElLabel: function (e, t) { return e.attr("aria-label", t), e }, disableEl: function (e) { return e.attr("aria-disabled", !0), e }, enableEl: function (e) { return e.attr("aria-disabled", !1), e }, onEnterKey: function (e) { var t = this.params.a11y; if (13 === e.keyCode) { var i = s(e.target); this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click() } }, notify: function (e) { var t = this.a11y.liveRegion; 0 !== t.length && (t.html(""), t.html(e)) }, updateNavigation: function () { if (!this.params.loop) { var e = this.navigation, t = e.$nextEl, i = e.$prevEl; i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t)) } }, updatePagination: function () { var e = this, t = e.params.a11y; e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i, a) { var r = s(a); e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1)) }) }, init: function () { this.$el.append(this.a11y.liveRegion); var e, t, i = this.params.a11y; this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey) }, destroy: function () { var e, t; this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey) } }, K = { init: function () { if (this.params.history) { if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0); var e = this.history; e.initialized = !0, e.paths = K.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState)) } }, destroy: function () { this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState) }, setHistoryPopState: function () { this.history.paths = K.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1) }, getPathValues: function () { var e = t.location.pathname.slice(1).split("/").filter(function (e) { return "" !== e }), i = e.length; return { key: e[i - 2], value: e[i - 1] } }, setHistory: function (e, i) { if (this.history.initialized && this.params.history.enabled) { var s = this.slides.eq(i), a = K.slugify(s.attr("data-history")); t.location.pathname.includes(e) || (a = e + "/" + a); var r = t.history.state; r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({ value: a }, null, a) : t.history.pushState({ value: a }, null, a)) } }, slugify: function (e) { return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "") }, scrollToSlide: function (e, t, i) { if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) { var r = this.slides.eq(s); if (K.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) { var n = r.index(); this.slideTo(n, e, i) } } else this.slideTo(0, e, i) } }, U = { onHashCange: function () { var t = e.location.hash.replace("#", ""); t !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index()) }, setHash: function () { if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""); else { var i = this.slides.eq(this.activeIndex), s = i.attr("data-hash") || i.attr("data-history"); e.location.hash = s || "" } }, init: function () { if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) { this.hashNavigation.initialized = !0; var i = e.location.hash.replace("#", ""); if (i) for (var a = 0, r = this.slides.length; a < r; a += 1) { var n = this.slides.eq(a); if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) { var o = n.index(); this.slideTo(o, 0, this.params.runCallbacksOnInit, !0) } } this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange) } }, destroy: function () { this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange) } }, _ = { run: function () { var e = this, t = e.slides.eq(e.activeIndex), i = e.params.autoplay.delay; t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = d.nextTick(function () { e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) }, i) }, start: function () { return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)) }, stop: function () { return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)) }, pause: function (e) { var t = this; t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function () { t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop()) }) : (t.autoplay.paused = !1, t.autoplay.run()))) } }, Z = { setTranslate: function () { for (var e = this.slides, t = 0; t < e.length; t += 1) { var i = this.slides.eq(t), s = -i[0].swiperSlideOffset; this.params.virtualTranslate || (s -= this.translate); var a = 0; this.isHorizontal() || (a = s, s = 0); var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0); i.css({ opacity: r }).transform("translate3d(" + s + "px, " + a + "px, 0px)") } }, setTransition: function (e) { var t = this, i = t.slides, s = t.$wrapperEl; if (i.transition(e), t.params.virtualTranslate && 0 !== e) { var a = !1; i.transitionEnd(function () { if (!a && t && !t.destroyed) { a = !0, t.animating = !1; for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)s.trigger(e[i]) } }) } } }, Q = { setTranslate: function () { var e, t = this.$el, i = this.$wrapperEl, a = this.slides, r = this.width, n = this.height, o = this.rtlTranslate, l = this.size, d = this.params.cubeEffect, h = this.isHorizontal(), p = this.virtual && this.params.virtual.enabled, c = 0; d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({ height: r + "px" })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e))); for (var u = 0; u < a.length; u += 1) { var v = a.eq(u), f = u; p && (f = parseInt(v.attr("data-swiper-slide-index"), 10)); var m = 90 * f, g = Math.floor(m / 360); o && (m = -m, g = Math.floor(-m / 360)); var b = Math.max(Math.min(v[0].progress, 1), -1), w = 0, y = 0, x = 0; f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0); var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)"; if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(E), d.slideShadows) { var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"), C = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom"); 0 === T.length && (T = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(T)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(C)), T.length && (T[0].style.opacity = Math.max(-b, 0)), C.length && (C[0].style.opacity = Math.max(b, 0)) } } if (i.css({ "-webkit-transform-origin": "50% 50% -" + l / 2 + "px", "-moz-transform-origin": "50% 50% -" + l / 2 + "px", "-ms-transform-origin": "50% 50% -" + l / 2 + "px", "transform-origin": "50% 50% -" + l / 2 + "px" }), d.shadow) if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")"); else { var M = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90), z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2), k = d.shadowScale, P = d.shadowScale / z, $ = d.shadowOffset; e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + $) + "px, " + -n / 2 / P + "px) rotateX(-90deg)") } var L = S.isSafari || S.isUiWebView ? -l / 2 : 0; i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)") }, setTransition: function (e) { var t = this.$el; this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e) } }, J = { setTranslate: function () { for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) { var a = e.eq(i), r = a[0].progress; this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1)); var n = -180 * r, o = 0, l = -a[0].swiperSlideOffset, d = 0; if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) { var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"), p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom"); 0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0)) } a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)") } }, setTransition: function (e) { var t = this, i = t.slides, s = t.activeIndex, a = t.$wrapperEl; if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) { var r = !1; i.eq(s).transitionEnd(function () { if (!r && t && !t.destroyed) { r = !0, t.animating = !1; for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)a.trigger(e[i]) } }) } } }, ee = { setTranslate: function () { for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) { var f = i.eq(u), m = r[u], g = (d - f[0].swiperSlideOffset - m / 2) / m * n.modifier, b = o ? p * g : 0, w = o ? 0 : p * g, y = -c * Math.abs(g), x = o ? 0 : n.stretch * g, E = o ? n.stretch * g : 0; Math.abs(E) < .001 && (E = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0); var T = "translate3d(" + E + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)"; if (f.transform(T), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) { var S = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"), C = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom"); 0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), f.append(S)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), f.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0) } } (h.pointerEvents || h.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = d + "px 50%") }, setTransition: function (e) { this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e) } }, te = [P, $, L, I, O, G, N, { name: "mousewheel", params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } }, create: function () { d.extend(this, { mousewheel: { enabled: !1, enable: B.enable.bind(this), disable: B.disable.bind(this), handle: B.handle.bind(this), handleMouseEnter: B.handleMouseEnter.bind(this), handleMouseLeave: B.handleMouseLeave.bind(this), lastScrollTime: d.now() } }) }, on: { init: function () { this.params.mousewheel.enabled && this.mousewheel.enable() }, destroy: function () { this.mousewheel.enabled && this.mousewheel.disable() } } }, { name: "navigation", params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } }, create: function () { d.extend(this, { navigation: { init: X.init.bind(this), update: X.update.bind(this), destroy: X.destroy.bind(this) } }) }, on: { init: function () { this.navigation.init(), this.navigation.update() }, toEdge: function () { this.navigation.update() }, fromEdge: function () { this.navigation.update() }, destroy: function () { this.navigation.destroy() }, click: function (e) { var t = this.navigation, i = t.$nextEl, a = t.$prevEl; !this.params.navigation.hideOnClick || s(e.target).is(a) || s(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass)) } } }, { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } }, create: function () { d.extend(this, { pagination: { init: Y.init.bind(this), render: Y.render.bind(this), update: Y.update.bind(this), destroy: Y.destroy.bind(this), dynamicBulletIndex: 0 } }) }, on: { init: function () { this.pagination.init(), this.pagination.render(), this.pagination.update() }, activeIndexChange: function () { this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update() }, snapIndexChange: function () { this.params.loop || this.pagination.update() }, slidesLengthChange: function () { this.params.loop && (this.pagination.render(), this.pagination.update()) }, snapGridLengthChange: function () { this.params.loop || (this.pagination.render(), this.pagination.update()) }, destroy: function () { this.pagination.destroy() }, click: function (e) { this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass) } } }, { name: "scrollbar", params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }, create: function () { d.extend(this, { scrollbar: { init: V.init.bind(this), destroy: V.destroy.bind(this), updateSize: V.updateSize.bind(this), setTranslate: V.setTranslate.bind(this), setTransition: V.setTransition.bind(this), enableDraggable: V.enableDraggable.bind(this), disableDraggable: V.disableDraggable.bind(this), setDragPosition: V.setDragPosition.bind(this), onDragStart: V.onDragStart.bind(this), onDragMove: V.onDragMove.bind(this), onDragEnd: V.onDragEnd.bind(this), isTouched: !1, timeout: null, dragTimeout: null } }) }, on: { init: function () { this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate() }, update: function () { this.scrollbar.updateSize() }, resize: function () { this.scrollbar.updateSize() }, observerUpdate: function () { this.scrollbar.updateSize() }, setTranslate: function () { this.scrollbar.setTranslate() }, setTransition: function (e) { this.scrollbar.setTransition(e) }, destroy: function () { this.scrollbar.destroy() } } }, { name: "parallax", params: { parallax: { enabled: !1 } }, create: function () { d.extend(this, { parallax: { setTransform: R.setTransform.bind(this), setTranslate: R.setTranslate.bind(this), setTransition: R.setTransition.bind(this) } }) }, on: { beforeInit: function () { this.params.parallax.enabled && (this.params.watchSlidesProgress = !0) }, init: function () { this.params.parallax && this.parallax.setTranslate() }, setTranslate: function () { this.params.parallax && this.parallax.setTranslate() }, setTransition: function (e) { this.params.parallax && this.parallax.setTransition(e) } } }, { name: "zoom", params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }, create: function () { var e = this, t = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } }; "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) { t[i] = F[i].bind(e) }), d.extend(e, { zoom: t }) }, on: { init: function () { this.params.zoom.enabled && this.zoom.enable() }, destroy: function () { this.zoom.disable() }, touchStart: function (e) { this.zoom.enabled && this.zoom.onTouchStart(e) }, touchEnd: function (e) { this.zoom.enabled && this.zoom.onTouchEnd(e) }, doubleTap: function (e) { this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e) }, transitionEnd: function () { this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd() } } }, { name: "lazy", params: { lazy: { enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }, create: function () { d.extend(this, { lazy: { initialImageLoaded: !1, load: W.load.bind(this), loadInSlide: W.loadInSlide.bind(this) } }) }, on: { beforeInit: function () { this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1) }, init: function () { this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load() }, scroll: function () { this.params.freeMode && !this.params.freeModeSticky && this.lazy.load() }, resize: function () { this.params.lazy.enabled && this.lazy.load() }, scrollbarDragMove: function () { this.params.lazy.enabled && this.lazy.load() }, transitionStart: function () { this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load() }, transitionEnd: function () { this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load() } } }, { name: "controller", params: { controller: { control: void 0, inverse: !1, by: "slide" } }, create: function () { d.extend(this, { controller: { control: this.params.controller.control, getInterpolateFunction: q.getInterpolateFunction.bind(this), setTranslate: q.setTranslate.bind(this), setTransition: q.setTransition.bind(this) } }) }, on: { update: function () { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, resize: function () { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, observerUpdate: function () { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, setTranslate: function (e, t) { this.controller.control && this.controller.setTranslate(e, t) }, setTransition: function (e, t) { this.controller.control && this.controller.setTransition(e, t) } } }, { name: "a11y", params: { a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } }, create: function () { var e = this; d.extend(e, { a11y: { liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }), Object.keys(j).forEach(function (t) { e.a11y[t] = j[t].bind(e) }) }, on: { init: function () { this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation()) }, toEdge: function () { this.params.a11y.enabled && this.a11y.updateNavigation() }, fromEdge: function () { this.params.a11y.enabled && this.a11y.updateNavigation() }, paginationUpdate: function () { this.params.a11y.enabled && this.a11y.updatePagination() }, destroy: function () { this.params.a11y.enabled && this.a11y.destroy() } } }, { name: "history", params: { history: { enabled: !1, replaceState: !1, key: "slides" } }, create: function () { d.extend(this, { history: { init: K.init.bind(this), setHistory: K.setHistory.bind(this), setHistoryPopState: K.setHistoryPopState.bind(this), scrollToSlide: K.scrollToSlide.bind(this), destroy: K.destroy.bind(this) } }) }, on: { init: function () { this.params.history.enabled && this.history.init() }, destroy: function () { this.params.history.enabled && this.history.destroy() }, transitionEnd: function () { this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex) } } }, { name: "hash-navigation", params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } }, create: function () { d.extend(this, { hashNavigation: { initialized: !1, init: U.init.bind(this), destroy: U.destroy.bind(this), setHash: U.setHash.bind(this), onHashCange: U.onHashCange.bind(this) } }) }, on: { init: function () { this.params.hashNavigation.enabled && this.hashNavigation.init() }, destroy: function () { this.params.hashNavigation.enabled && this.hashNavigation.destroy() }, transitionEnd: function () { this.hashNavigation.initialized && this.hashNavigation.setHash() } } }, { name: "autoplay", params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } }, create: function () { d.extend(this, { autoplay: { running: !1, paused: !1, run: _.run.bind(this), start: _.start.bind(this), stop: _.stop.bind(this), pause: _.pause.bind(this) } }) }, on: { init: function () { this.params.autoplay.enabled && this.autoplay.start() }, beforeTransitionStart: function (e, t) { this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop()) }, sliderFirstMove: function () { this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause()) }, destroy: function () { this.autoplay.running && this.autoplay.stop() } } }, { name: "effect-fade", params: { fadeEffect: { crossFade: !1 } }, create: function () { d.extend(this, { fadeEffect: { setTranslate: Z.setTranslate.bind(this), setTransition: Z.setTransition.bind(this) } }) }, on: { beforeInit: function () { if ("fade" === this.params.effect) { this.classNames.push(this.params.containerModifierClass + "fade"); var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 }; d.extend(this.params, e), d.extend(this.originalParams, e) } }, setTranslate: function () { "fade" === this.params.effect && this.fadeEffect.setTranslate() }, setTransition: function (e) { "fade" === this.params.effect && this.fadeEffect.setTransition(e) } } }, { name: "effect-cube", params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } }, create: function () { d.extend(this, { cubeEffect: { setTranslate: Q.setTranslate.bind(this), setTransition: Q.setTransition.bind(this) } }) }, on: { beforeInit: function () { if ("cube" === this.params.effect) { this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d"); var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 }; d.extend(this.params, e), d.extend(this.originalParams, e) } }, setTranslate: function () { "cube" === this.params.effect && this.cubeEffect.setTranslate() }, setTransition: function (e) { "cube" === this.params.effect && this.cubeEffect.setTransition(e) } } }, { name: "effect-flip", params: { flipEffect: { slideShadows: !0, limitRotation: !0 } }, create: function () { d.extend(this, { flipEffect: { setTranslate: J.setTranslate.bind(this), setTransition: J.setTransition.bind(this) } }) }, on: { beforeInit: function () { if ("flip" === this.params.effect) { this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d"); var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 }; d.extend(this.params, e), d.extend(this.originalParams, e) } }, setTranslate: function () { "flip" === this.params.effect && this.flipEffect.setTranslate() }, setTransition: function (e) { "flip" === this.params.effect && this.flipEffect.setTransition(e) } } }, { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } }, create: function () { d.extend(this, { coverflowEffect: { setTranslate: ee.setTranslate.bind(this), setTransition: ee.setTransition.bind(this) } }) }, on: { beforeInit: function () { "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0) }, setTranslate: function () { "coverflow" === this.params.effect && this.coverflowEffect.setTranslate() }, setTransition: function (e) { "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e) } } }]; return void 0 === k.use && (k.use = k.Class.use, k.installModule = k.Class.installModule), k.use(te), k });
//# sourceMappingURL=swiper.min.js.map
/*!
 * modernizr v3.6.0
 * Build https://modernizr.com/download?-touchevents-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
*/

; (function (window, document, undefined) {
	var classes = [];


	var tests = [];


	/**
	 *
	 * ModernizrProto is the constructor for Modernizr
	 *
	 * @class
	 * @access public
	 */

	var ModernizrProto = {
		// The current version, dummy
		_version: '3.6.0',

		// Any settings that don't work as separate modules
		// can go in here as configuration.
		_config: {
			'classPrefix': '',
			'enableClasses': true,
			'enableJSClass': true,
			'usePrefixes': true
		},

		// Queue of tests
		_q: [],

		// Stub these for people who are listening
		on: function (test, cb) {
			// I don't really think people should do this, but we can
			// safe guard it a bit.
			// -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
			// This is in case people listen to synchronous tests. I would leave it out,
			// but the code to *disallow* sync tests in the real version of this
			// function is actually larger than this.
			var self = this;
			setTimeout(function () {
				cb(self[test]);
			}, 0);
		},

		addTest: function (name, fn, options) {
			tests.push({ name: name, fn: fn, options: options });
		},

		addAsyncTest: function (fn) {
			tests.push({ name: null, fn: fn });
		}
	};



	// Fake some of Object.create so we can force non test results to be non "own" properties.
	var Modernizr = function () { };
	Modernizr.prototype = ModernizrProto;

	// Leak modernizr globally when you `require` it rather than force it here.
	// Overwrite name so constructor name is nicer :D
	Modernizr = new Modernizr();



	/**
	 * is returns a boolean if the typeof an obj is exactly type.
	 *
	 * @access private
	 * @function is
	 * @param {*} obj - A thing we want to check the type of
	 * @param {string} type - A string to compare the typeof against
	 * @returns {boolean}
	 */

	function is(obj, type) {
		return typeof obj === type;
	}
	;

	/**
	 * Run through all tests and detect their support in the current UA.
	 *
	 * @access private
	 */

	function testRunner() {
		var featureNames;
		var feature;
		var aliasIdx;
		var result;
		var nameIdx;
		var featureName;
		var featureNameSplit;

		for (var featureIdx in tests) {
			if (tests.hasOwnProperty(featureIdx)) {
				featureNames = [];
				feature = tests[featureIdx];
				// run the test, throw the return value into the Modernizr,
				// then based on that boolean, define an appropriate className
				// and push it into an array of classes we'll join later.
				//
				// If there is no name, it's an 'async' test that is run,
				// but not directly added to the object. That should
				// be done with a post-run addTest call.
				if (feature.name) {
					featureNames.push(feature.name.toLowerCase());

					if (feature.options && feature.options.aliases && feature.options.aliases.length) {
						// Add all the aliases into the names list
						for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
							featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
						}
					}
				}

				// Run the test, or use the raw value if it's not a function
				result = is(feature.fn, 'function') ? feature.fn() : feature.fn;


				// Set each of the names on the Modernizr object
				for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
					featureName = featureNames[nameIdx];
					// Support dot properties as sub tests. We don't do checking to make sure
					// that the implied parent tests have been added. You must call them in
					// order (either in the test, or make the parent test a dependency).
					//
					// Cap it to TWO to make the logic simple and because who needs that kind of subtesting
					// hashtag famous last words
					featureNameSplit = featureName.split('.');

					if (featureNameSplit.length === 1) {
						Modernizr[featureNameSplit[0]] = result;
					} else {
						// cast to a Boolean, if not one already
						if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
							Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
						}

						Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
					}

					classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
				}
			}
		}
	}
	;

	/**
	 * docElement is a convenience wrapper to grab the root element of the document
	 *
	 * @access private
	 * @returns {HTMLElement|SVGElement} The root element of the document
	 */

	var docElement = document.documentElement;


	/**
	 * A convenience helper to check if the document we are running in is an SVG document
	 *
	 * @access private
	 * @returns {boolean}
	 */

	var isSVG = docElement.nodeName.toLowerCase() === 'svg';


	/**
	 * setClasses takes an array of class names and adds them to the root element
	 *
	 * @access private
	 * @function setClasses
	 * @param {string[]} classes - Array of class names
	 */

	// Pass in an and array of class names, e.g.:
	//  ['no-webp', 'borderradius', ...]
	function setClasses(classes) {
		var className = docElement.className;
		var classPrefix = Modernizr._config.classPrefix || '';

		if (isSVG) {
			className = className.baseVal;
		}

		// Change `no-js` to `js` (independently of the `enableClasses` option)
		// Handle classPrefix on this too
		if (Modernizr._config.enableJSClass) {
			var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
			className = className.replace(reJS, '$1' + classPrefix + 'js$2');
		}

		if (Modernizr._config.enableClasses) {
			// Add the new classes
			className += ' ' + classPrefix + classes.join(' ' + classPrefix);
			if (isSVG) {
				docElement.className.baseVal = className;
			} else {
				docElement.className = className;
			}
		}

	}

	;

	/**
	 * List of property values to set for css tests. See ticket #21
	 * http://git.io/vUGl4
	 *
	 * @memberof Modernizr
	 * @name Modernizr._prefixes
	 * @optionName Modernizr._prefixes
	 * @optionProp prefixes
	 * @access public
	 * @example
	 *
	 * Modernizr._prefixes is the internal list of prefixes that we test against
	 * inside of things like [prefixed](#modernizr-prefixed) and [prefixedCSS](#-code-modernizr-prefixedcss). It is simply
	 * an array of kebab-case vendor prefixes you can use within your code.
	 *
	 * Some common use cases include
	 *
	 * Generating all possible prefixed version of a CSS property
	 * ```js
	 * var rule = Modernizr._prefixes.join('transform: rotate(20deg); ');
	 *
	 * rule === 'transform: rotate(20deg); webkit-transform: rotate(20deg); moz-transform: rotate(20deg); o-transform: rotate(20deg); ms-transform: rotate(20deg);'
	 * ```
	 *
	 * Generating all possible prefixed version of a CSS value
	 * ```js
	 * rule = 'display:' +  Modernizr._prefixes.join('flex; display:') + 'flex';
	 *
	 * rule === 'display:flex; display:-webkit-flex; display:-moz-flex; display:-o-flex; display:-ms-flex; display:flex'
	 * ```
	 */

	// we use ['',''] rather than an empty array in order to allow a pattern of .`join()`ing prefixes to test
	// values in feature detects to continue to work
	var prefixes = (ModernizrProto._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : ['', '']);

	// expose these for the plugin API. Look in the source for how to join() them against your input
	ModernizrProto._prefixes = prefixes;



	/**
	 * createElement is a convenience wrapper around document.createElement. Since we
	 * use createElement all over the place, this allows for (slightly) smaller code
	 * as well as abstracting away issues with creating elements in contexts other than
	 * HTML documents (e.g. SVG documents).
	 *
	 * @access private
	 * @function createElement
	 * @returns {HTMLElement|SVGElement} An HTML or SVG element
	 */

	function createElement() {
		if (typeof document.createElement !== 'function') {
			// This is the case in IE7, where the type of createElement is "object".
			// For this reason, we cannot call apply() as Object is not a Function.
			return document.createElement(arguments[0]);
		} else if (isSVG) {
			return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
		} else {
			return document.createElement.apply(document, arguments);
		}
	}

	;

	/**
	 * getBody returns the body of a document, or an element that can stand in for
	 * the body if a real body does not exist
	 *
	 * @access private
	 * @function getBody
	 * @returns {HTMLElement|SVGElement} Returns the real body of a document, or an
	 * artificially created element that stands in for the body
	 */

	function getBody() {
		// After page load injecting a fake body doesn't work so check if body exists
		var body = document.body;

		if (!body) {
			// Can't use the real body create a fake one.
			body = createElement(isSVG ? 'svg' : 'body');
			body.fake = true;
		}

		return body;
	}

	;

	/**
	 * injectElementWithStyles injects an element with style element and some CSS rules
	 *
	 * @access private
	 * @function injectElementWithStyles
	 * @param {string} rule - String representing a css rule
	 * @param {function} callback - A function that is used to test the injected element
	 * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
	 * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
	 * @returns {boolean}
	 */

	function injectElementWithStyles(rule, callback, nodes, testnames) {
		var mod = 'modernizr';
		var style;
		var ret;
		var node;
		var docOverflow;
		var div = createElement('div');
		var body = getBody();

		if (parseInt(nodes, 10)) {
			// In order not to give false positives we create a node for each test
			// This also allows the method to scale for unspecified uses
			while (nodes--) {
				node = createElement('div');
				node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
				div.appendChild(node);
			}
		}

		style = createElement('style');
		style.type = 'text/css';
		style.id = 's' + mod;

		// IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
		// Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
		(!body.fake ? div : body).appendChild(style);
		body.appendChild(div);

		if (style.styleSheet) {
			style.styleSheet.cssText = rule;
		} else {
			style.appendChild(document.createTextNode(rule));
		}
		div.id = mod;

		if (body.fake) {
			//avoid crashing IE8, if background image is used
			body.style.background = '';
			//Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
			body.style.overflow = 'hidden';
			docOverflow = docElement.style.overflow;
			docElement.style.overflow = 'hidden';
			docElement.appendChild(body);
		}

		ret = callback(div, rule);
		// If this is done after page load we don't want to remove the body so check if body exists
		if (body.fake) {
			body.parentNode.removeChild(body);
			docElement.style.overflow = docOverflow;
			// Trigger layout so kinetic scrolling isn't disabled in iOS6+
			// eslint-disable-next-line
			docElement.offsetHeight;
		} else {
			div.parentNode.removeChild(div);
		}

		return !!ret;

	}

	;

	/**
	 * testStyles injects an element with style element and some CSS rules
	 *
	 * @memberof Modernizr
	 * @name Modernizr.testStyles
	 * @optionName Modernizr.testStyles()
	 * @optionProp testStyles
	 * @access public
	 * @function testStyles
	 * @param {string} rule - String representing a css rule
	 * @param {function} callback - A function that is used to test the injected element
	 * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
	 * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
	 * @returns {boolean}
	 * @example
	 *
	 * `Modernizr.testStyles` takes a CSS rule and injects it onto the current page
	 * along with (possibly multiple) DOM elements. This lets you check for features
	 * that can not be detected by simply checking the [IDL](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Interface_development_guide/IDL_interface_rules).
	 *
	 * ```js
	 * Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip; }', function(elem, rule) {
	 *   // elem is the first DOM node in the page (by default #modernizr)
	 *   // rule is the first argument you supplied - the CSS rule in string form
	 *
	 *   addTest('widthworks', elem.style.width === '9px')
	 * });
	 * ```
	 *
	 * If your test requires multiple nodes, you can include a third argument
	 * indicating how many additional div elements to include on the page. The
	 * additional nodes are injected as children of the `elem` that is returned as
	 * the first argument to the callback.
	 *
	 * ```js
	 * Modernizr.testStyles('#modernizr {width: 1px}; #modernizr2 {width: 2px}', function(elem) {
	 *   document.getElementById('modernizr').style.width === '1px'; // true
	 *   document.getElementById('modernizr2').style.width === '2px'; // true
	 *   elem.firstChild === document.getElementById('modernizr2'); // true
	 * }, 1);
	 * ```
	 *
	 * By default, all of the additional elements have an ID of `modernizr[n]`, where
	 * `n` is its index (e.g. the first additional, second overall is `#modernizr2`,
	 * the second additional is `#modernizr3`, etc.).
	 * If you want to have more meaningful IDs for your function, you can provide
	 * them as the fourth argument, as an array of strings
	 *
	 * ```js
	 * Modernizr.testStyles('#foo {width: 10px}; #bar {height: 20px}', function(elem) {
	 *   elem.firstChild === document.getElementById('foo'); // true
	 *   elem.lastChild === document.getElementById('bar'); // true
	 * }, 2, ['foo', 'bar']);
	 * ```
	 *
	 */

	var testStyles = ModernizrProto.testStyles = injectElementWithStyles;

	/*!
	{
	  "name": "Touch Events",
	  "property": "touchevents",
	  "caniuse" : "touch",
	  "tags": ["media", "attribute"],
	  "notes": [{
		"name": "Touch Events spec",
		"href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
	  }],
	  "warnings": [
		"Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
	  ],
	  "knownBugs": [
		"False-positive on some configurations of Nokia N900",
		"False-positive on some BlackBerry 6.0 builds â€“ https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
	  ]
	}
	!*/
	/* DOC
	Indicates if the browser supports the W3C Touch Events API.

	This *does not* necessarily reflect a touchscreen device:

	* Older touchscreen devices only emulate mouse events
	* Modern IE touch devices implement the Pointer Events API instead: use `Modernizr.pointerevents` to detect support for that
	* Some browsers & OS setups may enable touch APIs when no touchscreen is connected
	* Future browsers may implement other event models for touch interactions

	See this article: [You Can't Detect A Touchscreen](http://www.stucox.com/blog/you-cant-detect-a-touchscreen/).

	It's recommended to bind both mouse and touch/pointer events simultaneously â€“ see [this HTML5 Rocks tutorial](http://www.html5rocks.com/en/mobile/touchandmouse/).

	This test will also return `true` for Firefox 4 Multitouch support.
	*/

	// Chrome (desktop) used to lie about its support on this, but that has since been rectified: http://crbug.com/36415
	Modernizr.addTest('touchevents', function () {
		var bool;
		if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
			bool = true;
		} else {
			// include the 'heartz' as a way to have a non matching MQ to help terminate the join
			// https://git.io/vznFH
			var query = ['@media (', prefixes.join('touch-enabled),('), 'heartz', ')', '{#modernizr{top:9px;position:absolute}}'].join('');
			testStyles(query, function (node) {
				bool = node.offsetTop === 9;
			});
		}
		return bool;
	});

	(function () {

		var v = document.createElement("video")
		v.muted = true
		v.pause()
		var p = v.play()

		var complete = false

		setTimeout(function () {
			if (complete == false) {
				complete = true
				document.documentElement.classList.add('videoautoplay')
			}
		}, 64)

		if ("Promise" in window && p instanceof Promise) {

			p.catch(function (e) {
				if (complete == false) {
					complete = true
					document.documentElement.classList.add('no-videoautoplay')
				}
			})

			return
		}

	})();

	// Run each test
	testRunner();

	// Remove the "no-js" class if it exists
	setClasses(classes);

	delete ModernizrProto.addTest;
	delete ModernizrProto.addAsyncTest;

	// Run the things that are supposed to run after the tests
	for (var i = 0; i < Modernizr._q.length; i++) {
		Modernizr._q[i]();
	}

	// Leak Modernizr namespace
	window.Modernizr = Modernizr;


	;

})(window, document);
//------------------------------------------------------------------------------
// CSS Events
// Author Jean-Philippe Dery (jean-philippe.dery@logaritm.ca)
//------------------------------------------------------------------------------
(function ($) {

	/**
	 * Automatically adds prefix to the animationend event.
	 * @author Jean-Philippe Dery (jeanphilippe.dery@jblp.ca)
	 * @version 1.0.0
	 */

	var on = $.fn.on
	var off = $.fn.off
	var one = $.fn.one
	var css = $.fn.css

	/**
	 * Appends the prefixed version on the event names when adding.
	 * @function on
	 * @since 1.0.0
	 */
	$.fn.on = function () {

		var args = Array.prototype.slice.call(arguments)

		if (args[0] == 'transitionend') {
			args[0] = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
		}

		if (args[0] == 'animationstart') {
			args[0] = 'webkitAnimationStart oanimationstart oAnimationStart msAnimationStart animationstart';
		}

		if (args[0] == 'animationend') {
			args[0] = 'webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend';
		}

		return on.apply(this, args)
	}

	/**
	 * Appends the prefixed version on the event names when adding.
	 * @function one
	 * @since 1.0.0
	 */
	$.fn.one = function () {

		var args = Array.prototype.slice.call(arguments)

		if (args[0] == 'transitionend') {
			args[0] = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
		}

		if (args[0] == 'animationstart') {
			args[0] = 'webkitAnimationStart oanimationstart oAnimationStart msAnimationStart animationstart';
		}

		if (args[0] == 'animationend') {
			args[0] = 'webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend';
		}

		return one.apply(this, args)
	}

	/**
	 * Appends the prefixed version on the event names when removing.
	 * @function off
	 * @since 1.0.0
	 */
	$.fn.off = function () {

		var args = Array.prototype.slice.call(arguments)

		if (args[0] == 'transitionend') {
			args[0] = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
		}

		if (args[0] == 'animationstart') {
			args[0] = 'webkitAnimationStart oanimationstart oAnimationStart msAnimationStart animationstart';
		}

		if (args[0] == 'animationend') {
			args[0] = 'webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend';
		}

		return off.apply(this, args)
	}

})(jQuery);

//------------------------------------------------------------------------------
// Detects when a define media changes.
// Author Jean-Philippe Dery (jean-philippe.dery@logaritm.ca)
//------------------------------------------------------------------------------
(function ($) {

	var medias = {}

	/**
	 * Defines a new media size.
	 * @function defineMedia
	 * @since 1.0.0
	 */
	$.defineMedia = function (name, media) {
		if (medias[media] == null) {
			medias[media] = name
			matchMedia(media).addListener(onMediaMatch)
		}
	}

	/**
	 * Media change callback.
	 * @function onMediaMatch
	 * @since 1.0.0
	 */
	var onMediaMatch = function (mql) {
		if (mql.matches) {
			$(window).trigger('mediaenter', medias[mql.media], mql)
		} else {
			$(window).trigger('medialeave', medias[mql.media], mql)
		}
	}

	$(window).on('mediaenter', function (e, media) {
		$('html').addClass('media-' + media)
	})

	$(window).on('medialeave', function (e, media) {
		$('html').removeClass('media-' + media)
	})

	$(function () {

		$.each(medias, function (q, name) {
			var mql = matchMedia(q)
			if (mql.matches) {
				$(window).trigger('mediaenter', medias[mql.media], mql)
			}
		})

		var on = $.fn.on
		var once = $.fn.once

		$.fn.on = function (type, callback) {

			if (type === 'mediaenter') {
				$.each(medias, function (q, name) {
					var mql = matchMedia(q)
					if (mql.matches) {
						callback('mediaenter', medias[mql.media], mql)
					}
				})
			}

			return on.apply(this, arguments)
		}

		$.fn.once = function (type, callback) {

			if (type === 'mediaenter') {
				$.each(medias, function (q, name) {
					var mql = matchMedia(q)
					if (mql.matches) {
						callback('mediaenter', medias[mql.media], mql)
					}
				})
			}

			return once.apply(this, arguments)
		}
	})

	/**
	 * @function matchMedia
	 * @since 1.0.0
	 */
	var matchMedia = (function (win) {
		'use strict';
		var _doc = win.document, _viewport = _doc.documentElement, _queries = [], _queryID = 0, _type = '', _features = {}, _typeExpr = /\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i, _mediaExpr = /^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/, _timer = 0, _matches = function (media) {
			var mql = media.indexOf(',') !== -1 && media.split(',') || [media], mqIndex = mql.length - 1, mqLength = mqIndex, mq = null, negateType = null, negateTypeFound = '', negateTypeIndex = 0, negate = false, type = '', exprListStr = '', exprList = null, exprIndex = 0, exprLength = 0, expr = null, prefix = '', length = '', unit = '', value = '', feature = '', match = false;
			if (media === '') {
				return true;
			}
			do {
				mq = mql[mqLength - mqIndex];
				negate = false;
				negateType = mq.match(_typeExpr);
				if (negateType) {
					negateTypeFound = negateType[0];
					negateTypeIndex = negateType.index;
				}
				if (!negateType || mq.substring(0, negateTypeIndex).indexOf('(') === -1 && (negateTypeIndex || !negateType[3] && negateTypeFound !== negateType.input)) {
					match = false;
					continue;
				}
				exprListStr = mq;
				negate = negateType[1] === 'not';
				if (!negateTypeIndex) {
					type = negateType[2];
					exprListStr = mq.substring(negateTypeFound.length);
				}
				match = type === _type || type === 'all' || type === '';
				exprList = exprListStr.indexOf(' and ') !== -1 && exprListStr.split(' and ') || [exprListStr];
				exprIndex = exprList.length - 1;
				exprLength = exprIndex;
				if (match && exprIndex >= 0 && exprListStr !== '') {
					do {
						expr = exprList[exprIndex].match(_mediaExpr);
						if (!expr || !_features[expr[3]]) {
							match = false;
							break;
						}
						prefix = expr[2];
						length = expr[5];
						value = length;
						unit = expr[7];
						feature = _features[expr[3]];
						if (unit) {
							if (unit === 'px') {
								value = Number(length);
							} else if (unit === 'em' || unit === 'rem') {
								value = 16 * length;
							} else if (expr[8]) {
								value = (length / expr[8]).toFixed(2);
							} else if (unit === 'dppx') {
								value = length * 96;
							} else if (unit === 'dpcm') {
								value = length * 0.3937;
							} else {
								value = Number(length);
							}
						}
						if (prefix === 'min-' && value) {
							match = feature >= value;
						} else if (prefix === 'max-' && value) {
							match = feature <= value;
						} else if (value) {
							match = feature === value;
						} else {
							match = !!feature;
						}
						if (!match) {
							break;
						}
					} while (exprIndex--);
				}
				if (match) {
					break;
				}
			} while (mqIndex--);
			return negate ? !match : match;
		}, _setFeature = function () {
			var w = win.innerWidth || _viewport.clientWidth, h = win.innerHeight || _viewport.clientHeight, dw = win.screen.width, dh = win.screen.height, c = win.screen.colorDepth, x = win.devicePixelRatio;
			_features.width = w;
			_features.height = h;
			_features['aspect-ratio'] = (w / h).toFixed(2);
			_features['device-width'] = dw;
			_features['device-height'] = dh;
			_features['device-aspect-ratio'] = (dw / dh).toFixed(2);
			_features.color = c;
			_features['color-index'] = Math.pow(2, c);
			_features.orientation = h >= w ? 'portrait' : 'landscape';
			_features.resolution = x && x * 96 || win.screen.deviceXDPI || 96;
			_features['device-pixel-ratio'] = x || 1;
		}, _watch = function () {
			clearTimeout(_timer);
			_timer = setTimeout(function () {
				var query = null, qIndex = _queryID - 1, qLength = qIndex, match = false;
				if (qIndex >= 0) {
					_setFeature();
					do {
						query = _queries[qLength - qIndex];
						if (query) {
							match = _matches(query.mql.media);
							if (match && !query.mql.matches || !match && query.mql.matches) {
								query.mql.matches = match;
								if (query.listeners) {
									for (var i = 0, il = query.listeners.length; i < il; i++) {
										if (query.listeners[i]) {
											query.listeners[i].call(win, query.mql);
										}
									}
								}
							}
						}
					} while (qIndex--);
				}
			}, 10);
		}, _init = function () {
			var head = _doc.getElementsByTagName('head')[0], style = _doc.createElement('style'), info = null, typeList = [
				'screen',
				'print',
				'speech',
				'projection',
				'handheld',
				'tv',
				'braille',
				'embossed',
				'tty'
			], typeIndex = 0, typeLength = typeList.length, cssText = '#mediamatchjs { position: relative; z-index: 0; }', eventPrefix = '', addEvent = win.addEventListener || (eventPrefix = 'on') && win.attachEvent;
			style.type = 'text/css';
			style.id = 'mediamatchjs';
			head.appendChild(style);
			info = win.getComputedStyle && win.getComputedStyle(style) || style.currentStyle;
			for (; typeIndex < typeLength; typeIndex++) {
				cssText += '@media ' + typeList[typeIndex] + ' { #mediamatchjs { position: relative; z-index: ' + typeIndex + ' } }';
			}
			if (style.styleSheet) {
				style.styleSheet.cssText = cssText;
			} else {
				style.textContent = cssText;
			}
			_type = typeList[info.zIndex * 1 || 0];
			head.removeChild(style);
			_setFeature();
			addEvent(eventPrefix + 'resize', _watch);
			addEvent(eventPrefix + 'orientationchange', _watch);
		};
		_init();
		return function (media) {
			var id = _queryID, mql = {
				matches: false,
				media: media,
				addListener: function addListener(listener) {
					_queries[id].listeners || (_queries[id].listeners = []);
					listener && _queries[id].listeners.push(listener);
				},
				removeListener: function removeListener(listener) {
					var query = _queries[id], i = 0, il = 0;
					if (!query) {
						return;
					}
					il = query.listeners.length;
					for (; i < il; i++) {
						if (query.listeners[i] === listener) {
							query.listeners.splice(i, 1);
						}
					}
				}
			};
			if (media === '') {
				mql.matches = true;
				return mql;
			}
			mql.matches = _matches(media);
			_queryID = _queries.push({
				mql: mql,
				listeners: null
			});
			return mql;
		};
	}(window));

})(jQuery);

//------------------------------------------------------------------------------
// Convenient method to attach and reattach code to specified elements.
// Author Jean-Philippe Dery (jean-philippe.dery@logaritm.ca)
//------------------------------------------------------------------------------

(function ($) {

	//------------------------------------------------------------------------------
	// Variables
	//------------------------------------------------------------------------------

	/**
	 * The attached element ids.
	 * @var selectors
	 * @since 1.1.0
	 */
	var ids = 1

	/**
	 * The selector bounds to callbacks.
	 * @var selectors
	 * @since 1.0.0
	 */
	var selectors = []

	//------------------------------------------------------------------------------
	// Functions
	//------------------------------------------------------------------------------

	/**
	 * Attach a callback to a selector.
	 * @function attach
	 * @since 1.0.0
	 */
	$.attach = function (selector, callback) {

		var element = {
			selector: selector,
			callback: callback
		}

		selectors.push(element)
	}

	/**
	 * Executes all callbacks from a specific element.
	 * @function attach.refresh
	 * @since 1.0.0
	 */
	$.attach.refresh = function (root) {

		var element = $(root || document.body)

		var process = function (elements) {

			elements.each(function (i, element) {

				element = $(element)

				$.each(selectors, function (i, builder) {
					var selector = builder.selector
					var callback = builder.callback
					if (selector && callback) {
						if (element.is(selector)) {
							element.attr('data-attach-id', ids++)
							callback(i, element)
						}
					}
				})

				process(element.children())
			})
		}

		process(element)
	}

	/**
	 * Triggers the detach listener on all attached element.
	 * @function detach
	 * @since 1.0.0
	 */
	$.detach = function (root) {

		var element = $(root || document.body)

		var process = function (elements) {

			elements.each(function (i, element) {

				element = $(element)

				if (element.is('[data-attach-id]')) {
					element.trigger('detach')
				}

				process(element.children())
			})
		}

		process(element)
	}

	$(function () {
		$.attach.refresh()
	})

})(jQuery);

//------------------------------------------------------------------------------
// Simple pub/sub
// Author Jean-Philippe Dery (jean-philippe.dery@logaritm.ca)
//------------------------------------------------------------------------------
(function ($) {

    //--------------------------------------------------------------------------
    // Variables
    //--------------------------------------------------------------------------

    /**
     * The subscribers data.
     * @var subscribers
     * @since 1.0.0
     */
    var subscribers = {}

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    /**
     * Subscribes to a global event.
     * @function subscribe
     * @since 1.0.0
     */
    $.subscribe = function (type, listener) {

        type = type.toLowerCase()

        var listeners = subscribers[type]
        if (listeners == null) {
            listeners = subscribers[type] = []
        }

        var index = listeners.indexOf(listener)
        if (index === -1) {
            listeners.push(listener)
        }
    }

    /**
     * Unsubscribes from a global event.
     * @function unsubscribe
     * @since 1.0.0
     */
    $.unsubscribe = function (type, listener) {

        type = type.toLowerCase()

        var listeners = subscribers[type]
        if (listeners == null) {
            listeners = subscribers[type] = []
        }

        var index = listeners.indexOf(listener)
        if (index > -1) {
            listeners.splice(index, 1)
        }
    }

    /**
     * Publish a global event.
     * @function publish
     * @since 1.0.0
     */
    $.publish = function (type) {

        var listeners = subscribers[type]
        if (listeners == null)
            return this

        var args = Array.prototype.slice.call(arguments, 1)

        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i]
            if (listener) {
                listener.apply(null, args)
            }
        }
    }

}(jQuery));

//------------------------------------------------------------------------------
// Detect when an element's assets are fully loaded.
// Author Jean-Philippe Dery (jean-philippe.dery@logaritm.ca)
//------------------------------------------------------------------------------
(function ($) {

	$(document.body).attr('data-loaded', 0)

	var loaded = 0
	var length = 0
	var object = { value: 0 }

	if (document.readyState !== 'complete') {
		length = 1
	}

	var timeout = $(document.body).attr('data-load-timeout') || 5
	if (timeout) {
		timeout = parseFloat(timeout)
	}

	var autoplays = []

	var begin = function (element, visible) {
		onBeginLoading(element, visible)
	}

	var finish = function (element, visible) {
		requestAnimationFrame(function () {
			onFinishLoading(element, visible)
		})
	}

	var isVisible = function (element) {

		var rect = $(element).get(0).getBoundingClientRect()

		var r1x1 = 0
		var r1y1 = 0
		var r1x2 = $(window).width()
		var r1y2 = $(window).height()

		var r2x1 = rect.x
		var r2y1 = rect.y
		var r2x2 = rect.x + rect.width
		var r2y2 = rect.y + rect.height

		var overlaps = (
			r1x1 > r2x2 ||
			r2x1 > r1x2 ||
			r1y1 > r2y2 ||
			r2y1 > r1y2
		) == false

		return overlaps
	}

	var onBeginLoading = function (element, visible) {

		var observer = $(element).closest("[data-preload]")
		if (observer.length) {

			var key = observer.get(0)

			if ($.data(key, 'load_start_time') == null) {
				$.data(key, 'load_start_time', Date.now())
			}

			var preloadCount = $.data(key, 'preload_count') || 0
			var visibleCount = $.data(key, 'visible_count') || 0

			preloadCount++

			if (visible) {
				visibleCount++
			}

			$.data(key, 'preload_count', preloadCount)
			$.data(key, 'visible_count', visibleCount)

			onBeginLoading(observer.parent(), visible)
		}
	}

	var onFinishLoading = function (element, visible) {

		var observer = $(element).closest("[data-preload]")
		if (observer.length) {

			var key = observer.get(0)

			var preloadLoadedCount = $.data(key, 'preload_loaded_count') || 0
			var visibleLoadedCount = $.data(key, 'visible_loaded_count') || 0

			preloadLoadedCount++

			if (visible) {
				visibleLoadedCount++
			}

			$.data(key, 'preload_loaded_count', preloadLoadedCount)
			$.data(key, 'visible_loaded_count', visibleLoadedCount)

			var preloadCount = $.data(key, 'preload_count') || 0
			var visibleCount = $.data(key, 'visible_count') || 0

			if (preloadCount == preloadLoadedCount ||
				visibleCount == visibleLoadedCount) {

				var hold = observer.attr('data-preload-hold') || 0
				if (hold) {
					hold = parseInt(hold)
				}

				var elapsed = Date.now() - $.data(key, 'load_start_time')

				if (visibleCount == visibleLoadedCount) {

					if ($.data(key, 'visible_count_reached') == null) {
						$.data(key, 'visible_count_reached', true)

						setTimeout(function () {

							if (observer.hasClass('loaded-enough') == false) {
								observer.addClass('loaded-enough')
								observer.trigger('loadedenough')
							}

						}, Math.max(0, hold - elapsed))
					}
				}

				if (preloadCount == preloadLoadedCount) {

					if ($.data(key, 'preload_count_reached') == null) {
						$.data(key, 'preload_count_reached', true)

						setTimeout(function () {

							if (observer.hasClass('loaded') == false) {
								observer.addClass('loaded')
								observer.addClass('loaded-enough')
								observer.trigger('loaded')
								observer.trigger('loadedenough')
							}

						}, Math.max(0, hold - elapsed))
					}
				}
			}

			onFinishLoading(observer.parent(), visible)
		}
	}

	/**
	 * Updates the progress value.
	 * @function update
	 * @since 1.0.0
	 */
	var update = function () {

		var value = length ? (++loaded / length) * 100 : 100

		var complete = function () {

			if (value < 100) {
				return
			}

			for (var i = 0; i < autoplays.length; i++) {
				autoplays[i].play()
			}

			$.publish('loading/complete')
		}

		var progress = function (value) {
			$.publish('loading/progress', value)
		}

		$(object).stop().animate({ value: value }, {
			duration: 500,
			complete: complete,
			step: progress
		})

		$(document.body).attr('data-loaded', value)
	}

	/**
	 * Appends an image to be preloaded.
	 * @function preloadImage
	 * @since 1.0.0
	 */
	var preloadImage = function (element, url) {

		if (url == '') {
			return
		}

		var visible = isVisible(element)

		begin(element, visible)

		var failsafe = null

		var image = new Image()

		image.src = url

		if (image.complete === false) {

			length++

			var onLoad = function () {
				clearTimeout(failsafe)
				image.removeEventListener('load', onLoad)
				image.removeEventListener('error', onLoad)
				finish(element, visible)
				update()
			}

			image.addEventListener('load', onLoad)
			image.addEventListener('error', onLoad)

			failsafe = setTimeout(function () {
				console.warn('Timeout reached for image', url)
				onLoad()
			}, timeout * 1000)

		} else {
			finish(element, visible)
		}
	}

	/**
	 * Appends a video element to be preloaded.
	 * @function preloadVideo
	 * @since 1.0.0
	 */
	var preloadVideo = function (element) {

		if (hasSource(element) == false) {
			return
		}

		var visible = isVisible(element)

		/*
		Not sure this is reliable
		if (element.readyState === 4) {
			begin(element, visible)
			finish(element, visible)
			return
		}
		*/

		begin(element, visible)

		length++

		var autoplay = element.autoplay
		var failsafe = null

		var onCanPlayThrough = function () {

			clearTimeout(failsafe)

			element.removeEventListener('canplaythrough', onCanPlayThrough)

			finish(element, visible)

			update()

			if (autoplay) {
				autoplays.push(element)
			}
		}

		element.autoplay = false
		element.pause()
		element.addEventListener('canplaythrough', onCanPlayThrough)
		element.load()

		failsafe = setTimeout(function () {
			console.warn('Timeout reached for video', element.currentSrc)
			onCanPlayThrough()
		}, timeout * 1000)
	}

	/**
	 * Appends a audio element to be preloaded.
	 * @function preloadVideo
	 * @since 1.0.0
	 */
	var preloadAudio = function (element) {

		if (hasSource(element) == false) {
			return
		}

		/*
		Not sure this is reliable
		if (element.readyState === 4) {
			begin(element, visible)
			finish(element, visible)
			return
		}
		*/

		length++

		begin(element, true)

		var autoplay = element.autoplay
		var failsafe = null

		var onCanPlayThrough = function () {

			clearTimeout(failsafe)

			element.removeEventListener('canplaythrough', onCanPlayThrough)

			finish(element, true)

			update()

			if (autoplay) {
				autoplays.push(element)
			}
		}

		element.autoplay = false
		element.pause()
		element.addEventListener('canplaythrough', onCanPlayThrough)
		element.load()

		failsafe = setTimeout(function () {
			console.warn('Timeout reached for audio', element.currentSrc)
			onCanPlayThrough()
		}, timeout * 1000)
	}

	/**
	 * Checks whether the audio or video element has a source.
	 * @function hasSource
	 * @since 1.0.0
	 */
	var hasSource = function (element) {

		var has = false

		for (var i = 0; i < element.children.length; i++) {
			var source = element.children[i]
			if (source.src) {
				has = true
			}
		}

		if (has == false) {
			has = element.src.length > 0
		}

		return has
	}

	/**
	 * Process every element in order to find whether they are attach to
	 * a resource that needs to be preloaded.
	 */
	$('*').each(function (i, element) {

		var backgroundImage = $(element).css('background-image').match(/url\((.*?)\)/g)
		if (backgroundImage) {
			backgroundImage = backgroundImage[0];
			backgroundImage = backgroundImage.replace(/^url\(/, '')
			backgroundImage = backgroundImage.replace(/\)$/, '')
			backgroundImage = backgroundImage.replace(/('|")/g, '')
			preloadImage(element, backgroundImage)
		}

		if (element.tagName === 'IMG') {
			preloadImage(element, $(element).attr('src'))
			return
		}

		if (element.tagName === 'VIDEO' && element.classList.contains('preload')) {
			preloadVideo(element)
			return
		}

		if (element.tagName === 'AUDIO' && element.classList.contains('preload')) {
			preloadAudio(element)
			return
		}

		if (element.tagName === 'IMAGE') {
			preloadImage(element, element.getAttributeNS('http://www.w3.org/1999/xlink', 'href'))
			return
		}
	})

	if (length === 0) {
		update()
	}

	$(window).on('load', update)

	$("[data-preload]").each(function (i, element) {

		element = $(element)

		var key = element.get(0)
		var preloadCount = $.data(key, 'preload_count') || 0
		var visibleCount = $.data(key, 'visible_count') || 0

		if (preloadCount == 0) {
			element.addClass('loaded')
			element.addClass('loaded-enough')
			element.trigger('loaded')
			element.trigger('loadedenough')
		}

		if (visibleCount == 0) {
			element.addClass('loaded-enough')
			element.trigger('loadedenough')
		}

	})

})(jQuery);
(function ($) {

	$.attach('.slider', function (i, element) {

		var swiper = null

		var total = parseInt(element.attr('data-slider-xl-items')) || 3
		var frame = element.find('.slider-items')
		var items = element.find('.slider-item')

		var dots = element.find('.dots')

		var outer = $('<div class="slider-outer"></div>')
		var inner = $('<div class="slider-inner swiper-container"></div>')

		frame.after(outer)
		outer.append(inner)
		inner.append(frame)

		frame.addClass('swiper-wrapper')

		var wrap = function () {

			frame.empty()

			for (var i = 0; i < items.length; i += total) {

				var slide = $('<div class="slider-slide swiper-slide"></div>')

				for (var j = 0; j < total; j++) {
					slide.append(items.get(i + j))
				}

				slide.wrapInner('<div class="slider-slide-cell"></div>')
				slide.wrapInner('<div class="slider-slide-container container-inset"></div>')

				frame.append(slide)
			}

			if (swiper) {
				swiper.update()
			}

			dots.empty()

			var pages = Math.ceil(items.length / total)

			for (var i = 0; i < pages; i++) {
				dots.append('<div class="dot"></div>')
			}

			if (swiper) {
				dots.find('.dot').eq(swiper.realIndex).addClass('dot--current')
			}

			if (pages == 1) {
				dots.hide()
			} else {
				dots.show()
			}
		}

		var onNext = function () {
			swiper.slideNext(750)
		}

		var onPrev = function () {
			swiper.slidePrev(750)
		}

		var onPage = function (e) {
			swiper.slideTo($(e.target).index(), 750, false)
		}

		var onSlideChange = function () {

			var min = 0
			var max = swiper.slides.length - 1

			element.find('.slider-prev').toggleClass('button-hidden', swiper.realIndex == min)
			element.find('.slider-next').toggleClass('button-hidden', swiper.realIndex == max)

			dots.find('.dot').removeClass('dot--current').eq(swiper.realIndex).addClass('dot--current')
		}

		swiper = new Swiper(element.find('.swiper-container'), {
			autoHeight: true,
			speed: 500
		})

		element.on('click', '.slider-prev', onPrev)
		element.on('click', '.slider-next', onNext)
		element.on('click', '.dot', onPage)

		$(window).on('mediaenter', function (e, media) {
			total = parseInt(element.attr('data-slider-' + media + '-items'))
			total = total || 3
			wrap()
		})

		$(window).on('medialeave', function (e, media) {

			switch (media) {
				case 'xxxl': total = parseInt(element.attr('data-slider-xxxl-items')); break
				case 'xxl': total = parseInt(element.attr('data-slider-xxl-items')); break
				case 'xl': total = parseInt(element.attr('data-slider-lg-items')); break
				case 'lg': total = parseInt(element.attr('data-slider-md-items')); break
				case 'md': total = parseInt(element.attr('data-slider-sm-items')); break
				case 'sm': total = parseInt(element.attr('data-slider-xs-items')); break
			}

			total = total || 4

			wrap()
		})

		swiper.on('slideChange', onSlideChange)

		onSlideChange()
	})

})(jQuery);

//------------------------------------------------------------------------------
// Animates an element based on scroll.
// Author Jean-Philippe Dery (jean-philippe.dery@logaritm.ca)
//------------------------------------------------------------------------------
(function ($) {

    /**
     * Creates animations on an element based on the scroll.
     * @author Jean-Philippe Dery (jeanphilippe.dery@jblp.ca)
     * @version 1.0.0
     */

	$.attach('[data-scroll-depth]', function (i, element) {

		element = $(element)

		//------------------------------------------------------------------------------
		// Properties
		//------------------------------------------------------------------------------

		/**
		 * The element that scrolls.
		 * @var scroller
		 * @since 1.0.0
		 */
		var scroller = element.closest('[data-scroller]')

		/**
		 * The scrollbar manager.
		 * @var scrollbar
		 * @since 1.0.0
		 */
		var scrollbar = null

        /**
         * The depth factor
         * @property factor
         * @since 1.0.0
         */
		var factor = 2

        /**
         * The current offset
         * @property offset
         * @since 1.0.0
         */
		var offset = 0

		var enterScroll = 0
		var leaveScroll = 0

		/**
		 * Returns the scroll value on the y axis.
		 * @function getScrollTop
		 * @since 1.0.0
		 */
		var getScrollTop = function () {
			return scrollbar ? scrollbar.scrollTop : $(window).scrollTop()
		}

		/**
		 * Returns the scroll value on the x axis.
		 * @function getScrollLeft
		 * @since 1.0.0
		 */
		var getScrollLeft = function () {
			return scrollbar ? scrollbar.scrollLeft : $(window).scrollLeft()
		}

		/**
		 * Returns the scrollable container's width.
		 * @function getFrameWidth
		 * @since 1.0.0
		 */
		var getFrameWidth = function () {
			return scrollbar ? scrollbar.containerEl.getBoundingClientRect().width : $(window).width()
		}

		/**
		 * Returns the scrollable container's height.
		 * @function getFrameHeight
		 * @since 1.0.0
		 */
		var getFrameHeight = function () {
			return scrollbar ? scrollbar.containerEl.getBoundingClientRect().height : $(window).height()
		}


        /**
         * Update the animation limits
         * @function update
         * @since 1.0.0
         */
		var updateLimits = function () {

			var bounds = element.bounds()

			var t = getScrollTop() + bounds.top
			var b = getScrollTop() + bounds.top + bounds.height

			t -= offset
			b -= offset

			var length = getFrameHeight() + bounds.height

			enterScroll = t
			leaveScroll = t + length * factor

			enterScroll -= getFrameHeight()
			leaveScroll -= getFrameHeight()
		}

        /**
         * Update the animation progress.
         * @function update
         * @since 1.0.0
         */
		var updateOffset = function () {

			var scroll = getScrollTop()

			if (scroll < enterScroll) {
				scroll = enterScroll
			}

			if (scroll > leaveScroll) {
				scroll = leaveScroll
			}

			offset = (scroll - enterScroll) / factor

			element.css('transform', 'translateY(' + offset + 'px)')
		}

		//--------------------------------------------------------------------------
		// Events
		//--------------------------------------------------------------------------

        /**
         * updateOffsets and update the animation.
         * @function onWindowResize
         * @since 1.0.0
         */
		var onWindowResize = function () {

			delay = cancelAnimationFrame(delay)
			delay = requestAnimationFrame(function () {
				updateLimits()
				updateOffset()
			})
		}

        /**
         * Update the animation.
         * @function onWindowScroll
         * @since 1.0.0
         */
		var onWindowScroll = function () {
			delay = cancelAnimationFrame(delay)
			delay = requestAnimationFrame(function () {
				updateOffset()
			})
		}

        /**
         * Update
         * @function onWindowLoad
         * @since 1.0.0
         */
		var onWindowLoad = function () {
			updateLimits()
			updateOffset()
		}

		/**
		 * Called when a scroller is attached.
		 * @function onAttachScrollbar
		 * @since 1.0.0
		 */
		var onAttachScrollbar = function () {

			if (scrollbar == null) {
				scrollbar = Scrollbar.get(scroller.get(0))
			}

			if (scrollbar) {
				scrollbar.addListener(onWindowResize)
			}

			updateLimits()
			updateOffset()
		}

		/**
		 * Called when a scroller is detached.
		 * @function onAttachScrollbar
		 * @since 1.0.0
		 */
		var onDetachScrollbar = function () {

			if (scrollbar) {
				scrollbar.removeListener(onWindowResize)
				scrollbar = null
			}

			updateLimits()
			updateOffset()
		}

		//--------------------------------------------------------------------------
		// Initialization
		//--------------------------------------------------------------------------

		var delay = null

		factor = parseFloat(element.attr('data-scroll-depth')) || 2

		$(window).on('resize', onWindowResize)
		$(window).on('scroll', onWindowScroll)
		$(window).on('load', onWindowLoad)

		onAttachScrollbar()

		$(scroller).on('attachscrollbar', onAttachScrollbar)
		$(scroller).on('detachscrollbar', onDetachScrollbar)

		updateLimits()
		updateOffset()

	})

})(jQuery);

//------------------------------------------------------------------------------
// Detects when an element is visible on screen.
// Author Jean-Philippe Dery (jean-philippe.dery@logaritm.ca)
//------------------------------------------------------------------------------
(function ($) {

	$.attach('[data-watch]', function (i, element) {

		element = $(element)

		//--------------------------------------------------------------------------
		// Properties
		//--------------------------------------------------------------------------

		/**
		 * The element that scrolls.
		 * @var scroller
		 * @since 1.0.0
		 */
		var scroller = element.closest('[data-scroller]')

		/**
		 * The scrollbar manager.
		 * @var scrollbar
		 * @since 1.0.0
		 */
		var scrollbar = null

		/**
		 * The element current top offset.
		 * @var offsetTop
		 * @since 1.0.0
		 */
		var offsetTop = 0

		/**
		 * The element current bottom offset.
		 * @var offsetBot
		 * @since 1.0.0
		 */
		var offsetBot = 0

		/**
		 * The trigger mode.
		 * @var mode
		 * @since 1.0.0
		 */
		var mode = element.attr('data-mode') || 'screen'

		/**
		 * The type of events to watch (enter, leave, both)
		 * @var watch
		 * @since 1.0.0
		 */
		var watch = element.attr('data-watch') || 'both'

		/**
		 * The percentage of getVisibility required to enter.
		 * @var enterAt
		 * @since 1.0.0
		 */
		var enterAt = element.attr('data-enter-at') || 0.80

		/**
		 * The percentage of getVisibility required to leave.
		 * @var enterAt
		 * @since 1.0.0
		 */
		var leaveAt = element.attr('data-leave-at') || 0

		/**
		 * The class to add when an item is visible on screen.
		 * @var visibleClass
		 * @since 1.0.0
		 */
		var visibleClass = element.attr('data-visible-class') || 'visible-on-screen'

		/**
		 * Whether the element is currently visible.
		 * @var since
		 * @since 1.0.0
		 */
		var visible = false

		/**
		 * Whether the page has been loaded.
		 * @var loaded
		 * @since 1.0.1
		 */
		var loaded = false

		//--------------------------------------------------------------------------
		// Functions
		//--------------------------------------------------------------------------

		/**
		 * Returns the scroll value on the y axis.
		 * @function getScrollTop
		 * @since 1.0.0
		 */
		var getScrollTop = function () {
			return scrollbar ? scrollbar.scrollTop : $(window).scrollTop()
		}

		/**
		 * Returns the scroll value on the x axis.
		 * @function getScrollLeft
		 * @since 1.0.0
		 */
		var getScrollLeft = function () {
			return scrollbar ? scrollbar.scrollLeft : $(window).scrollLeft()
		}

		/**
		 * Returns the scrollable container's width.
		 * @function getFrameWidth
		 * @since 1.0.0
		 */
		var getFrameWidth = function () {
			return scrollbar ? scrollbar.containerEl.getBoundingClientRect().width : $(window).width()
		}

		/**
		 * Returns the scrollable container's height.
		 * @function getFrameHeight
		 * @since 1.0.0
		 */
		var getFrameHeight = function () {
			return scrollbar ? scrollbar.containerEl.getBoundingClientRect().height : $(window).height()
		}

		/**
		 * Returns the visible area of the element.
		 * @function getVisibility
		 * @since 1.0.0
		 */
		var getVisibility = function () {

			var offsetT = offsetTop
			var offsetB = offsetBot
			var scrollX = getScrollLeft()
			var scrollY = getScrollTop()
			var windowSizeX = getFrameWidth()
			var windowSizeY = getFrameHeight()

			offsetT -= scrollY
			offsetB -= scrollY

			// hidden
			if (offsetB < 0 ||
				offsetT > windowSizeY)
				return 0

			// fills or contains
			if (offsetT <= 0 && offsetB >= windowSizeY ||
				offsetT >= 0 && offsetB <= windowSizeY)
				return 1

			// contents larger than screen
			if (offsetB - offsetT > windowSizeY) {

				var visibility = 1 - offsetT / windowSizeY
				if (visibility > 1) {
					visibility = 1
				}

				return visibility
			}

			return offsetT > 0 ? (windowSizeY - offsetT) / (offsetB - offsetT) : 1 - Math.abs(offsetT) / (offsetB - offsetT)
		}

		/**
		 * Updates the css classes used to indicate the visibility state.
		 * @function updateProgress
		 * @since 1.0.0
		 */
		var updateProgress = function () {

			var visibleOnInitialLoad = offsetTop < getFrameHeight() && getScrollTop() < offsetBot

			var progress = getVisibility()

			element.attr('data-visibility', Math.round(progress * 10) * 10)

			if (mode == 'screen') {

				var height = getFrameHeight()

				var triggerTop = (1 - enterAt) * height
				var triggerBot = (0 + enterAt) * height

				var rect = element[0].getBoundingClientRect()

				var top = rect.top
				var bot = rect.bottom

				if (bot < triggerTop ||
					top > triggerBot) {
					progress = 0
				} else {
					progress = 1
				}

				if (visibleOnInitialLoad) {
					if (top > 0 && top < height ||
						bot > 0 && bot < height) {
						progress = 1
					}
				}
			}

			if (progress > 1) {
				progress = 1
			} else if (progress < 0) {
				progress = 0
			}

			if (progress > 0) {
				if (visible === false && (watch === 'enter' || watch === 'both' || loaded == false) && (progress >= enterAt || visibleOnInitialLoad)) {
					visible = true
					element.toggleClass(visibleClass, true)
					element.trigger('enterscreen')
				}
			} else {
				if (visible === true && (watch === 'leave' || watch === 'both' || loaded == false) && progress <= leaveAt) {
					visible = false
					element.toggleClass(visibleClass, false)
					element.trigger('leavescreen')
				}
			}
		}

		/**
		 * updateOffsetses the element offset.
		 * @function updateOffsets
		 * @since 1.0.0
		 */
		var updateOffsets = function () {

			var offset = element.offset()
			offsetTop = offset.top
			offsetBot = offset.top + element.outerHeight()

			if (scrollbar) {
				offsetTop += scrollbar.scrollTop
				offsetBot += scrollbar.scrollTop
			}

			updateProgress()
		}

		/**
		 * Returns a throttled function.
		 * @function throttled
		 * @since 1.0.0
		 */
		var throttled = function (callback) {

			var request = null

			return function () {

				var exec = function () {

					if (callback) {
						callback()
					}

					request = null
				}

				if (request == null) {
					request = requestAnimationFrame(exec)
				}
			}
		}

		/**
		 * Update the offsets when the window loads.
		 * @function onWindowLoad
		 * @since 1.0.0
		 */
		var onWindowLoad = function () {
			updateOffsets()
			loaded = true
		}

		/**
		 * Update the offsets when the window resizes.
		 * @function onWindowResize
		 * @since 1.0.0
		 */
		var onWindowResize = throttled(function () {
			updateOffsets()
		})

		/**
		 * Update the offsets when the window scrolls.
		 * @function onWindowScroll
		 * @since 1.0.0
		 */
		var onWindowScroll = throttled(function () {
			updateProgress()
		})

		/**
		 * Called when a scroller is attached.
		 * @function onAttachScrollbar
		 * @since 1.0.0
		 */
		var onAttachScrollbar = function () {

			if (scrollbar == null) {
				scrollbar = Scrollbar.get(scroller.get(0))
			}

			if (scrollbar) {
				scrollbar.addListener(onWindowResize)
			}

			updateOffsets()
			updateProgress()
		}

		/**
		 * Called when a scroller is detached.
		 * @function onAttachScrollbar
		 * @since 1.0.0
		 */
		var onDetachScrollbar = function () {

			if (scrollbar) {
				scrollbar.removeListener(onWindowResize)
				scrollbar = null
			}

			updateOffsets()
			updateProgress()
		}

		//--------------------------------------------------------------------------
		// Initialization
		//--------------------------------------------------------------------------

		$(window).on('load', onWindowLoad)
		$(window).on('resize', onWindowResize)
		$(window).on('scroll', onWindowScroll)

		onAttachScrollbar()

		$(scroller).on('attachscrollbar', onAttachScrollbar)
		$(scroller).on('detachscrollbar', onDetachScrollbar)

		if (document.readyState === 'complete') {
			loaded = true
		}

		updateOffsets()
		updateProgress()

	})

})(jQuery);

/*!
 * jQuery.scrollTo
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler â—‹ gmail â€¢ com | http://flesler.blogspot.com
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 * @author Ariel Flesler
 * @version 2.1.2
 */
; (function (factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof module !== 'undefined' && module.exports) {
		// CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Global
		factory(jQuery);
	}
})(function ($) {
	'use strict';

	var $scrollTo = $.scrollTo = function (target, duration, settings) {
		return $(window).scrollTo(target, duration, settings);
	};

	$scrollTo.defaults = {
		axis: 'xy',
		duration: 0,
		limit: true
	};

	function isWin(elem) {
		return !elem.nodeName ||
			$.inArray(elem.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) !== -1;
	}

	$.fn.scrollTo = function (target, duration, settings) {
		if (typeof duration === 'object') {
			settings = duration;
			duration = 0;
		}
		if (typeof settings === 'function') {
			settings = { onAfter: settings };
		}
		if (target === 'max') {
			target = 9e9;
		}

		settings = $.extend({}, $scrollTo.defaults, settings);
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.duration;
		// Make sure the settings are given right
		var queue = settings.queue && settings.axis.length > 1;
		if (queue) {
			// Let's keep the overall duration
			duration /= 2;
		}
		settings.offset = both(settings.offset);
		settings.over = both(settings.over);

		return this.each(function () {
			// Null target yields nothing, just like jQuery does
			if (target === null) return;

			var win = isWin(this),
				elem = win ? this.contentWindow || window : this,
				$elem = $(elem),
				targ = target,
				attr = {},
				toff;

			switch (typeof targ) {
				// A number will pass the regex
				case 'number':
				case 'string':
					if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
						targ = both(targ);
						// We are done
						break;
					}
					// Relative/Absolute selector
					targ = win ? $(targ) : $(targ, elem);
				/* falls through */
				case 'object':
					if (targ.length === 0) return;
					// DOMElement / jQuery
					if (targ.is || targ.style) {
						// Get the real position of the target
						toff = (targ = $(targ)).offset();
					}
			}

			var offset = $.isFunction(settings.offset) && settings.offset(elem, targ) || settings.offset;

			$.each(settings.axis.split(''), function (i, axis) {
				var Pos = axis === 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					prev = $elem[key](),
					max = $scrollTo.max(elem, axis);

				if (toff) {// jQuery / DOMElement
					attr[key] = toff[pos] + (win ? 0 : prev - $elem.offset()[pos]);

					// If it's a dom element, reduce the margin
					if (settings.margin) {
						attr[key] -= parseInt(targ.css('margin' + Pos), 10) || 0;
						attr[key] -= parseInt(targ.css('border' + Pos + 'Width'), 10) || 0;
					}

					attr[key] += offset[pos] || 0;

					if (settings.over[pos]) {
						// Scroll to a fraction of its width/height
						attr[key] += targ[axis === 'x' ? 'width' : 'height']() * settings.over[pos];
					}
				} else {
					var val = targ[pos];
					// Handle percentage values
					attr[key] = val.slice && val.slice(-1) === '%' ?
						parseFloat(val) / 100 * max
						: val;
				}

				// Number or 'number'
				if (settings.limit && /^\d+$/.test(attr[key])) {
					// Check the limits
					attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
				}

				// Don't waste time animating, if there's no need.
				if (!i && settings.axis.length > 1) {
					if (prev === attr[key]) {
						// No animation needed
						attr = {};
					} else if (queue) {
						// Intermediate animation
						animate(settings.onAfterFirst);
						// Don't animate this axis again in the next iteration.
						attr = {};
					}
				}
			});

			animate(settings.onAfter);

			function animate(callback) {
				var opts = $.extend({}, settings, {
					// The queue setting conflicts with animate()
					// Force it to always be true
					queue: true,
					duration: duration,
					complete: callback && function () {
						callback.call(elem, targ, settings);
					}
				});
				$elem.animate(attr, opts);
			}
		});
	};

	// Max scrolling position, works on quirks mode
	// It only fails (not too badly) on IE, quirks mode.
	$scrollTo.max = function (elem, axis) {
		var Dim = axis === 'x' ? 'Width' : 'Height',
			scroll = 'scroll' + Dim;

		if (!isWin(elem))
			return elem[scroll] - $(elem)[Dim.toLowerCase()]();

		var size = 'client' + Dim,
			doc = elem.ownerDocument || elem.document,
			html = doc.documentElement,
			body = doc.body;

		return Math.max(html[scroll], body[scroll]) - Math.min(html[size], body[size]);
	};

	function both(val) {
		return $.isFunction(val) || $.isPlainObject(val) ? val : { top: val, left: val };
	}

	// Add special hooks so that window scroll properties can be animated
	$.Tween.propHooks.scrollLeft =
		$.Tween.propHooks.scrollTop = {
			get: function (t) {
				return $(t.elem)[t.prop]();
			},
			set: function (t) {
				var curr = this.get(t);
				// If interrupt is true and user scrolled, stop animating
				if (t.options.interrupt && t._last && t._last !== curr) {
					return $(t.elem).stop();
				}
				var next = Math.round(t.now);
				// Don't waste CPU
				// Browsers don't render floating point scroll
				if (curr !== next) {
					$(t.elem)[t.prop](next);
					t._last = this.get(t);
				}
			}
		};

	// AMD requirement
	return $scrollTo;
});
(function ($) {

	$.attach('[data-expand-lines]', function (i, element) {

		var selector = element.attr('data-expand-lines')
		if (selector == '') {
			return
		}

		element.find(selector).attr('data-lines', '')
	})

	$.attach('[data-lines]', function (i, element) {

		if (element.find('.line').length > 0) {
			return
		}

		var root = element.get(0)

		var html = root.innerHTML
		html = html.trim()
		html = html.replace(/\n/g, '')
		html = html.replace(/\s+/g, ' ')
		root.innerHTML = html

		var limit = parseInt(element.attr('data-lines')) || Infinity

		var nodes = []
		var lines = []
		var original = root.innerHTML

		/**
		 * Splits each text node by the spacing character.
		 * @since 1.0.0
		 */
		var split = function (root) {

			for (var i = 0; i < root.childNodes.length; i++) {

				var node = root.childNodes[i]
				var type = node.nodeType
				var text = node.nodeValue

				if (type == Node.TEXT_NODE) {
					for (var j = 0; j < text.length - 1; j++) {
						var char = text[j]
						if (char == ' ') {
							root.insertBefore(node.splitText(j + 1), node.nextSibling)
							break
						}
					}
				}

				nodes.push(node)

				if (type == Node.ELEMENT_NODE) {
					split(node)
					continue
				}
			}
		}

		/**
		 * Creates a cloned with parent structure node.
		 * @since 1.0.0
		 */
		var build = function (node) {

			var parent = node.parentNode
			if (parent == null ||
				parent == root) {
				return node.cloneNode()
			}

			var tree = node.cloneNode()

			while (parent && parent != root) {

				var elem = document.createElement(parent.nodeName)
				elem.appendChild(tree)
				tree = elem

				parent = parent.parentNode
			}

			return tree
		}

		/**
		 * Detect line breaks.
		 * @since 1.0.0
		 */
		var wraps = function (nodes) {

			var wraps = []
			var index = 0
			var range = document.createRange()

			var offset = null
			var height = null

			nodes.forEach(function (node) {

				var type = node.nodeType
				var text = node.nodeValue

				if (type == Node.TEXT_NODE) {

					range.selectNodeContents(node)

					rects = range.getClientRects()

					if (wraps[index] == null) {
						wraps[index] = []
					}

					var rect = rects[0]
					if (rect == null) {

						wraps[index].push(node)

					} else if (offset == null) {

						offset = rect.top
						height = rect.height
						wraps[index].push(node)

					} else if (rect.top > offset) {

						offset = rect.top
						height = rect.height
						wraps[++index] = [node]

					} else {

						wraps[index].push(node)

					}
				}
			})

			lines = wraps
		}

		/**
		 * Empty a node.
		 * @since 1.0.0
		 */
		var empty = function (node) {
			while (node.firstChild) {
				node.removeChild(node.firstChild)
			}
		}

		/**
		 * Detected the lines and wrap them.
		 * @since 1.0.0
		 */
		var detect = function () {

			element.removeClass('truncated')

			root.innerHTML = original

			nodes = []
			lines = []

			split(root)
			wraps(nodes)

			var fragment = document.createDocumentFragment()

			for (var i = 0; i < lines.length; i++) {

				var line = document.createElement('span')
				var text = document.createElement('span')

				line.classList.add('line')
				text.classList.add('text')

				line.appendChild(text)

				var items = lines[i]

				for (var j = 0; j < items.length; j++) {
					text.appendChild(build(items[j]))
				}

				fragment.appendChild(line)

				if (lines.length > limit) {
					if (i == limit - 1) {
						element.addClass('truncated')
						break
					}
				}
			}

			empty(root)

			root.appendChild(fragment)
		}

		detect()

		$(window).on('resize', detect)

	});

})(jQuery);
// ==================================================
// fancyBox v3.5.2
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================
(function(window, document, $, undefined) {
    "use strict";

    window.console = window.console || {
      info: function(stuff) {}
    };

    // If there's no jQuery, fancyBox can't work
    // =========================================

    if (!$) {
      return;
    }

    // Check if fancyBox is already initialized
    // ========================================

    if ($.fn.fancybox) {
      console.info("fancyBox already initialized");

      return;
    }

    // Private default settings
    // ========================

    var defaults = {
      // Close existing modals
      // Set this to false if you do not need to stack multiple instances
      closeExisting: false,

      // Enable infinite gallery navigation
      loop: false,

      // Horizontal space between slides
      gutter: 50,

      // Enable keyboard navigation
      keyboard: true,

      // Should allow caption to overlap the content
      preventCaptionOverlap: true,

      // Should display navigation arrows at the screen edges
      arrows: true,

      // Should display counter at the top left corner
      infobar: true,

      // Should display close button (using `btnTpl.smallBtn` template) over the content
      // Can be true, false, "auto"
      // If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
      smallBtn: "auto",

      // Should display toolbar (buttons at the top)
      // Can be true, false, "auto"
      // If "auto" - will be automatically hidden if "smallBtn" is enabled
      toolbar: "auto",

      // What buttons should appear in the top right corner.
      // Buttons will be created using templates from `btnTpl` option
      // and they will be placed into toolbar (class="fancybox-toolbar"` element)
      buttons: [
        "zoom",
        //"share",
        "slideShow",
        //"fullScreen",
        //"download",
        "thumbs",
        "close"
      ],

      // Detect "idle" time in seconds
      idleTime: 3,

      // Disable right-click and use simple image protection for images
      protect: false,

      // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
      modal: false,

      image: {
        // Wait for images to load before displaying
        //   true  - wait for image to load and then display;
        //   false - display thumbnail and load the full-sized image over top,
        //           requires predefined image dimensions (`data-width` and `data-height` attributes)
        preload: false
      },

      ajax: {
        // Object containing settings for ajax request
        settings: {
          // This helps to indicate that request comes from the modal
          // Feel free to change naming
          data: {
            fancybox: true
          }
        }
      },

      iframe: {
        // Iframe template
        tpl:
          '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen allow="autoplay; fullscreen" src=""></iframe>',

        // Preload iframe before displaying it
        // This allows to calculate iframe content width and height
        // (note: Due to "Same Origin Policy", you can't get cross domain data).
        preload: true,

        // Custom CSS styling for iframe wrapping element
        // You can use this to set custom iframe dimensions
        css: {},

        // Iframe tag attributes
        attr: {
          scrolling: "auto"
        }
      },

      // For HTML5 video only
      video: {
        tpl:
          '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' +
          '<source src="{{src}}" type="{{format}}" />' +
          'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
          "</video>",
        format: "", // custom video format
        autoStart: true
      },

      // Default content type if cannot be detected automatically
      defaultType: "image",

      // Open/close animation type
      // Possible values:
      //   false            - disable
      //   "zoom"           - zoom images from/to thumbnail
      //   "fade"
      //   "zoom-in-out"
      //
      animationEffect: "zoom",

      // Duration in ms for open/close animation
      animationDuration: 366,

      // Should image change opacity while zooming
      // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
      zoomOpacity: "auto",

      // Transition effect between slides
      //
      // Possible values:
      //   false            - disable
      //   "fade'
      //   "slide'
      //   "circular'
      //   "tube'
      //   "zoom-in-out'
      //   "rotate'
      //
      transitionEffect: "fade",

      // Duration in ms for transition animation
      transitionDuration: 366,

      // Custom CSS class for slide element
      slideClass: "",

      // Custom CSS class for layout
      baseClass: "",

      // Base template for layout
      baseTpl:
        '<div class="fancybox-container" role="dialog" tabindex="-1">' +
        '<div class="fancybox-bg"></div>' +
        '<div class="fancybox-inner">' +
        '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
        '<div class="fancybox-toolbar">{{buttons}}</div>' +
        '<div class="fancybox-navigation">{{arrows}}</div>' +
        '<div class="fancybox-stage"></div>' +
        '<div class="fancybox-caption"></div>' +
        "</div>" +
        "</div>",

      // Loading indicator template
      spinnerTpl: '<div class="fancybox-loading"></div>',

      // Error message template
      errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',

      btnTpl: {
        download:
          '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
          "</a>",

        zoom:
          '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' +
          "</button>",

        close:
          '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
          "</button>",

        // Arrows
        arrowLeft:
          '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
          '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
          "</button>",

        arrowRight:
          '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
          '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
          "</button>",

        // This small close button will be appended to your html/inline/ajax content by default,
        // if "smallBtn" option is not set to false
        smallBtn:
          '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' +
          "</button>"
      },

      // Container is injected into this element
      parentEl: "body",

      // Hide browser vertical scrollbars; use at your own risk
      hideScrollbar: true,

      // Focus handling
      // ==============

      // Try to focus on the first focusable element after opening
      autoFocus: true,

      // Put focus back to active element after closing
      backFocus: true,

      // Do not let user to focus on element outside modal content
      trapFocus: true,

      // Module specific options
      // =======================

      fullScreen: {
        autoStart: false
      },

      // Set `touch: false` to disable panning/swiping
      touch: {
        vertical: true, // Allow to drag content vertically
        momentum: true // Continue movement after releasing mouse/touch when panning
      },

      // Hash value when initializing manually,
      // set `false` to disable hash change
      hash: null,

      // Customize or add new media types
      // Example:
      /*
        media : {
          youtube : {
            params : {
              autoplay : 0
            }
          }
        }
      */
      media: {},

      slideShow: {
        autoStart: false,
        speed: 3000
      },

      thumbs: {
        autoStart: false, // Display thumbnails on opening
        hideOnClose: true, // Hide thumbnail grid when closing animation starts
        parentEl: ".fancybox-container", // Container is injected into this element
        axis: "y" // Vertical (y) or horizontal (x) scrolling
      },

      // Use mousewheel to navigate gallery
      // If 'auto' - enabled for images only
      wheel: "auto",

      // Callbacks
      //==========

      // See Documentation/API/Events for more information
      // Example:
      /*
        afterShow: function( instance, current ) {
          console.info( 'Clicked element:' );
          console.info( current.opts.$orig );
        }
      */

      onInit: $.noop, // When instance has been initialized

      beforeLoad: $.noop, // Before the content of a slide is being loaded
      afterLoad: $.noop, // When the content of a slide is done loading

      beforeShow: $.noop, // Before open animation starts
      afterShow: $.noop, // When content is done loading and animating

      beforeClose: $.noop, // Before the instance attempts to close. Return false to cancel the close.
      afterClose: $.noop, // After instance has been closed

      onActivate: $.noop, // When instance is brought to front
      onDeactivate: $.noop, // When other instance has been activated

      // Interaction
      // ===========

      // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
      // each option can be string or method that returns value.
      //
      // Possible values:
      //   "close"           - close instance
      //   "next"            - move to next gallery item
      //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
      //   "toggleControls"  - show/hide controls
      //   "zoom"            - zoom image (if loaded)
      //   false             - do nothing

      // Clicked on the content
      clickContent: function(current, event) {
        return current.type === "image" ? "zoom" : false;
      },

      // Clicked on the slide
      clickSlide: "close",

      // Clicked on the background (backdrop) element;
      // if you have not changed the layout, then most likely you need to use `clickSlide` option
      clickOutside: "close",

      // Same as previous two, but for double click
      dblclickContent: false,
      dblclickSlide: false,
      dblclickOutside: false,

      // Custom options when mobile device is detected
      // =============================================

      mobile: {
        preventCaptionOverlap: false,
        idleTime: false,
        clickContent: function(current, event) {
          return current.type === "image" ? "toggleControls" : false;
        },
        clickSlide: function(current, event) {
          return current.type === "image" ? "toggleControls" : "close";
        },
        dblclickContent: function(current, event) {
          return current.type === "image" ? "zoom" : false;
        },
        dblclickSlide: function(current, event) {
          return current.type === "image" ? "zoom" : false;
        }
      },

      // Internationalization
      // ====================

      lang: "en",
      i18n: {
        en: {
          CLOSE: "Close",
          NEXT: "Next",
          PREV: "Previous",
          ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
          PLAY_START: "Start slideshow",
          PLAY_STOP: "Pause slideshow",
          FULL_SCREEN: "Full screen",
          THUMBS: "Thumbnails",
          DOWNLOAD: "Download",
          SHARE: "Share",
          ZOOM: "Zoom"
        },
        de: {
          CLOSE: "Schliessen",
          NEXT: "Weiter",
          PREV: "ZurÃ¼ck",
          ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es spÃ¤ter nochmal.",
          PLAY_START: "Diaschau starten",
          PLAY_STOP: "Diaschau beenden",
          FULL_SCREEN: "Vollbild",
          THUMBS: "Vorschaubilder",
          DOWNLOAD: "Herunterladen",
          SHARE: "Teilen",
          ZOOM: "MaÃŸstab"
        }
      }
    };

    // Few useful variables and methods
    // ================================

    var $W = $(window);
    var $D = $(document);

    var called = 0;

    // Check if an object is a jQuery object and not a native JavaScript object
    // ========================================================================
    var isQuery = function(obj) {
      return obj && obj.hasOwnProperty && obj instanceof $;
    };

    // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
    // ===============================================================================
    var requestAFrame = (function() {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
        function(callback) {
          return window.setTimeout(callback, 1000 / 60);
        }
      );
    })();

    var cancelAFrame = (function() {
      return (
        window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.oCancelAnimationFrame ||
        function(id) {
          window.clearTimeout(id);
        }
      );
    })();

    // Detect the supported transition-end event property name
    // =======================================================
    var transitionEnd = (function() {
      var el = document.createElement("fakeelement"),
        t;

      var transitions = {
        transition: "transitionend",
        OTransition: "oTransitionEnd",
        MozTransition: "transitionend",
        WebkitTransition: "webkitTransitionEnd"
      };

      for (t in transitions) {
        if (el.style[t] !== undefined) {
          return transitions[t];
        }
      }

      return "transitionend";
    })();

    // Force redraw on an element.
    // This helps in cases where the browser doesn't redraw an updated element properly
    // ================================================================================
    var forceRedraw = function($el) {
      return $el && $el.length && $el[0].offsetHeight;
    };

    // Exclude array (`buttons`) options from deep merging
    // ===================================================
    var mergeOpts = function(opts1, opts2) {
      var rez = $.extend(true, {}, opts1, opts2);

      $.each(opts2, function(key, value) {
        if ($.isArray(value)) {
          rez[key] = value;
        }
      });

      return rez;
    };

    // How much of an element is visible in viewport
    // =============================================

    var inViewport = function(elem) {
      var elemCenter, rez;

      if (!elem || elem.ownerDocument !== document) {
        return false;
      }

      $(".fancybox-container").css("pointer-events", "none");

      elemCenter = {
        x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
        y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
      };

      rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;

      $(".fancybox-container").css("pointer-events", "");

      return rez;
    };

    // Class definition
    // ================

    var FancyBox = function(content, opts, index) {
      var self = this;

      self.opts = mergeOpts({index: index}, $.fancybox.defaults);

      if ($.isPlainObject(opts)) {
        self.opts = mergeOpts(self.opts, opts);
      }

      if ($.fancybox.isMobile) {
        self.opts = mergeOpts(self.opts, self.opts.mobile);
      }

      self.id = self.opts.id || ++called;

      self.currIndex = parseInt(self.opts.index, 10) || 0;
      self.prevIndex = null;

      self.prevPos = null;
      self.currPos = 0;

      self.firstRun = true;

      // All group items
      self.group = [];

      // Existing slides (for current, next and previous gallery items)
      self.slides = {};

      // Create group elements
      self.addContent(content);

      if (!self.group.length) {
        return;
      }

      self.init();
    };

    $.extend(FancyBox.prototype, {
      // Create DOM structure
      // ====================

      init: function() {
        var self = this,
          firstItem = self.group[self.currIndex],
          firstItemOpts = firstItem.opts,
          $container,
          buttonStr;

        if (firstItemOpts.closeExisting) {
          $.fancybox.close(true);
        }

        // Hide scrollbars
        // ===============

        $("body").addClass("fancybox-active");

        if (
          !$.fancybox.getInstance() &&
          firstItemOpts.hideScrollbar !== false &&
          !$.fancybox.isMobile &&
          document.body.scrollHeight > window.innerHeight
        ) {
          $("head").append(
            '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
              (window.innerWidth - document.documentElement.clientWidth) +
              "px;}</style>"
          );

          $("body").addClass("compensate-for-scrollbar");
        }

        // Build html markup and set references
        // ====================================

        // Build html code for buttons and insert into main template
        buttonStr = "";

        $.each(firstItemOpts.buttons, function(index, value) {
          buttonStr += firstItemOpts.btnTpl[value] || "";
        });

        // Create markup from base template, it will be initially hidden to
        // avoid unnecessary work like painting while initializing is not complete
        $container = $(
          self.translate(
            self,
            firstItemOpts.baseTpl
              .replace("{{buttons}}", buttonStr)
              .replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight)
          )
        )
          .attr("id", "fancybox-container-" + self.id)
          .addClass(firstItemOpts.baseClass)
          .data("FancyBox", self)
          .appendTo(firstItemOpts.parentEl);

        // Create object holding references to jQuery wrapped nodes
        self.$refs = {
          container: $container
        };

        ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(item) {
          self.$refs[item] = $container.find(".fancybox-" + item);
        });

        self.trigger("onInit");

        // Enable events, deactive previous instances
        self.activate();

        // Build slides, load and reveal content
        self.jumpTo(self.currIndex);
      },

      // Simple i18n support - replaces object keys found in template
      // with corresponding values
      // ============================================================

      translate: function(obj, str) {
        var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;

        return str.replace(/\{\{(\w+)\}\}/g, function(match, n) {
          var value = arr[n];

          if (value === undefined) {
            return match;
          }

          return value;
        });
      },

      // Populate current group with fresh content
      // Check if each object has valid type and content
      // ===============================================

      addContent: function(content) {
        var self = this,
          items = $.makeArray(content),
          thumbs;

        $.each(items, function(i, item) {
          var obj = {},
            opts = {},
            $item,
            type,
            found,
            src,
            srcParts;

          // Step 1 - Make sure we have an object
          // ====================================

          if ($.isPlainObject(item)) {
            // We probably have manual usage here, something like
            // $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )

            obj = item;
            opts = item.opts || item;
          } else if ($.type(item) === "object" && $(item).length) {
            // Here we probably have jQuery collection returned by some selector
            $item = $(item);

            // Support attributes like `data-options='{"touch" : false}'` and `data-touch='false'`
            opts = $item.data() || {};
            opts = $.extend(true, {}, opts, opts.options);

            // Here we store clicked element
            opts.$orig = $item;

            obj.src = self.opts.src || opts.src || $item.attr("href");

            // Assume that simple syntax is used, for example:
            //   `$.fancybox.open( $("#test"), {} );`
            if (!obj.type && !obj.src) {
              obj.type = "inline";
              obj.src = item;
            }
          } else {
            // Assume we have a simple html code, for example:
            //   $.fancybox.open( '<div><h1>Hi!</h1></div>' );
            obj = {
              type: "html",
              src: item + ""
            };
          }

          // Each gallery object has full collection of options
          obj.opts = $.extend(true, {}, self.opts, opts);

          // Do not merge buttons array
          if ($.isArray(opts.buttons)) {
            obj.opts.buttons = opts.buttons;
          }

          if ($.fancybox.isMobile && obj.opts.mobile) {
            obj.opts = mergeOpts(obj.opts, obj.opts.mobile);
          }

          // Step 2 - Make sure we have content type, if not - try to guess
          // ==============================================================

          type = obj.type || obj.opts.type;
          src = obj.src || "";

          if (!type && src) {
            if ((found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))) {
              type = "video";

              if (!obj.opts.video.format) {
                obj.opts.video.format = "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
              }
            } else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
              type = "image";
            } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
              type = "iframe";
              obj = $.extend(true, obj, {contentType: "pdf", opts: {iframe: {preload: false}}});
            } else if (src.charAt(0) === "#") {
              type = "inline";
            }
          }

          if (type) {
            obj.type = type;
          } else {
            self.trigger("objectNeedsType", obj);
          }

          if (!obj.contentType) {
            obj.contentType = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html" : obj.type;
          }

          // Step 3 - Some adjustments
          // =========================

          obj.index = self.group.length;

          if (obj.opts.smallBtn == "auto") {
            obj.opts.smallBtn = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
          }

          if (obj.opts.toolbar === "auto") {
            obj.opts.toolbar = !obj.opts.smallBtn;
          }

          // Find thumbnail image, check if exists and if is in the viewport
          obj.$thumb = obj.opts.$thumb || null;

          if (obj.opts.$trigger && obj.index === self.opts.index) {
            obj.$thumb = obj.opts.$trigger.find("img:first");

            if (obj.$thumb.length) {
              obj.opts.$orig = obj.opts.$trigger;
            }
          }

          if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
            obj.$thumb = obj.opts.$orig.find("img:first");
          }

          if (obj.$thumb && !obj.$thumb.length) {
            obj.$thumb = null;
          }

          obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null);

          // "caption" is a "special" option, it can be used to customize caption per gallery item
          if ($.type(obj.opts.caption) === "function") {
            obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
          }

          if ($.type(self.opts.caption) === "function") {
            obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
          }

          // Make sure we have caption as a string or jQuery object
          if (!(obj.opts.caption instanceof $)) {
            obj.opts.caption = obj.opts.caption === undefined ? "" : obj.opts.caption + "";
          }

          // Check if url contains "filter" used to filter the content
          // Example: "ajax.html #something"
          if (obj.type === "ajax") {
            srcParts = src.split(/\s+/, 2);

            if (srcParts.length > 1) {
              obj.src = srcParts.shift();

              obj.opts.filter = srcParts.shift();
            }
          }

          // Hide all buttons and disable interactivity for modal items
          if (obj.opts.modal) {
            obj.opts = $.extend(true, obj.opts, {
              trapFocus: true,
              // Remove buttons
              infobar: 0,
              toolbar: 0,

              smallBtn: 0,

              // Disable keyboard navigation
              keyboard: 0,

              // Disable some modules
              slideShow: 0,
              fullScreen: 0,
              thumbs: 0,
              touch: 0,

              // Disable click event handlers
              clickContent: false,
              clickSlide: false,
              clickOutside: false,
              dblclickContent: false,
              dblclickSlide: false,
              dblclickOutside: false
            });
          }

          // Step 4 - Add processed object to group
          // ======================================

          self.group.push(obj);
        });

        // Update controls if gallery is already opened
        if (Object.keys(self.slides).length) {
          self.updateControls();

          // Update thumbnails, if needed
          thumbs = self.Thumbs;

          if (thumbs && thumbs.isActive) {
            thumbs.create();

            thumbs.focus();
          }
        }
      },

      // Attach an event handler functions for:
      //   - navigation buttons
      //   - browser scrolling, resizing;
      //   - focusing
      //   - keyboard
      //   - detecting inactivity
      // ======================================

      addEvents: function() {
        var self = this;

        self.removeEvents();

        // Make navigation elements clickable
        // ==================================

        self.$refs.container
          .on("click.fb-close", "[data-fancybox-close]", function(e) {
            e.stopPropagation();
            e.preventDefault();

            self.close(e);
          })
          .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(e) {
            e.stopPropagation();
            e.preventDefault();

            self.previous();
          })
          .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(e) {
            e.stopPropagation();
            e.preventDefault();

            self.next();
          })
          .on("click.fb", "[data-fancybox-zoom]", function(e) {
            // Click handler for zoom button
            self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
          });

        // Handle page scrolling and browser resizing
        // ==========================================

        $W.on("orientationchange.fb resize.fb", function(e) {
          if (e && e.originalEvent && e.originalEvent.type === "resize") {
            if (self.requestId) {
              cancelAFrame(self.requestId);
            }

            self.requestId = requestAFrame(function() {
              self.update(e);
            });
          } else {
            if (self.current && self.current.type === "iframe") {
              self.$refs.stage.hide();
            }

            setTimeout(function() {
              self.$refs.stage.show();

              self.update(e);
            }, $.fancybox.isMobile ? 600 : 250);
          }
        });

        $D.on("keydown.fb", function(e) {
          var instance = $.fancybox ? $.fancybox.getInstance() : null,
            current = instance.current,
            keycode = e.keyCode || e.which;

          // Trap keyboard focus inside of the modal
          // =======================================

          if (keycode == 9) {
            if (current.opts.trapFocus) {
              self.focus(e);
            }

            return;
          }

          // Enable keyboard navigation
          // ==========================

          if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input") || $(e.target).is("textarea")) {
            return;
          }

          // Backspace and Esc keys
          if (keycode === 8 || keycode === 27) {
            e.preventDefault();

            self.close(e);

            return;
          }

          // Left arrow and Up arrow
          if (keycode === 37 || keycode === 38) {
            e.preventDefault();

            self.previous();

            return;
          }

          // Righ arrow and Down arrow
          if (keycode === 39 || keycode === 40) {
            e.preventDefault();

            self.next();

            return;
          }

          self.trigger("afterKeydown", e, keycode);
        });

        // Hide controls after some inactivity period
        if (self.group[self.currIndex].opts.idleTime) {
          self.idleSecondsCounter = 0;

          $D.on(
            "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
            function(e) {
              self.idleSecondsCounter = 0;

              if (self.isIdle) {
                self.showControls();
              }

              self.isIdle = false;
            }
          );

          self.idleInterval = window.setInterval(function() {
            self.idleSecondsCounter++;

            if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
              self.isIdle = true;
              self.idleSecondsCounter = 0;

              self.hideControls();
            }
          }, 1000);
        }
      },

      // Remove events added by the core
      // ===============================

      removeEvents: function() {
        var self = this;

        $W.off("orientationchange.fb resize.fb");
        $D.off("keydown.fb .fb-idle");

        this.$refs.container.off(".fb-close .fb-prev .fb-next");

        if (self.idleInterval) {
          window.clearInterval(self.idleInterval);

          self.idleInterval = null;
        }
      },

      // Change to previous gallery item
      // ===============================

      previous: function(duration) {
        return this.jumpTo(this.currPos - 1, duration);
      },

      // Change to next gallery item
      // ===========================

      next: function(duration) {
        return this.jumpTo(this.currPos + 1, duration);
      },

      // Switch to selected gallery item
      // ===============================

      jumpTo: function(pos, duration) {
        var self = this,
          groupLen = self.group.length,
          firstRun,
          isMoved,
          loop,
          current,
          previous,
          slidePos,
          stagePos,
          prop,
          diff;

        if (self.isDragging || self.isClosing || (self.isAnimating && self.firstRun)) {
          return;
        }

        // Should loop?
        pos = parseInt(pos, 10);
        loop = self.current ? self.current.opts.loop : self.opts.loop;

        if (!loop && (pos < 0 || pos >= groupLen)) {
          return false;
        }

        // Check if opening for the first time; this helps to speed things up
        firstRun = self.firstRun = !Object.keys(self.slides).length;

        // Create slides
        previous = self.current;

        self.prevIndex = self.currIndex;
        self.prevPos = self.currPos;

        current = self.createSlide(pos);

        if (groupLen > 1) {
          if (loop || current.index < groupLen - 1) {
            self.createSlide(pos + 1);
          }

          if (loop || current.index > 0) {
            self.createSlide(pos - 1);
          }
        }

        self.current = current;
        self.currIndex = current.index;
        self.currPos = current.pos;

        self.trigger("beforeShow", firstRun);

        self.updateControls();

        // Validate duration length
        current.forcedDuration = undefined;

        if ($.isNumeric(duration)) {
          current.forcedDuration = duration;
        } else {
          duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"];
        }

        duration = parseInt(duration, 10);

        // Check if user has swiped the slides or if still animating
        isMoved = self.isMoved(current);

        // Make sure current slide is visible
        current.$slide.addClass("fancybox-slide--current");

        // Fresh start - reveal container, current slide and start loading content
        if (firstRun) {
          if (current.opts.animationEffect && duration) {
            self.$refs.container.css("transition-duration", duration + "ms");
          }

          self.$refs.container.addClass("fancybox-is-open").trigger("focus");

          // Attempt to load content into slide
          // This will later call `afterLoad` -> `revealContent`
          self.loadSlide(current);

          self.preload("image");

          return;
        }

        // Get actual slide/stage positions (before cleaning up)
        slidePos = $.fancybox.getTranslate(previous.$slide);
        stagePos = $.fancybox.getTranslate(self.$refs.stage);

        // Clean up all slides
        $.each(self.slides, function(index, slide) {
          $.fancybox.stop(slide.$slide, true);
        });

        if (previous.pos !== current.pos) {
          previous.isComplete = false;
        }

        previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");

        // If slides are out of place, then animate them to correct position
        if (isMoved) {
          // Calculate horizontal swipe distance
          diff = slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);

          $.each(self.slides, function(index, slide) {
            slide.$slide.removeClass("fancybox-animated").removeClass(function(index, className) {
              return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
            });

            // Make sure that each slide is in equal distance
            // This is mostly needed for freshly added slides, because they are not yet positioned
            var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;

            $.fancybox.setTranslate(slide.$slide, {top: 0, left: leftPos - stagePos.left + diff});

            if (slide.pos !== current.pos) {
              slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"));
            }

            // Redraw to make sure that transition will start
            forceRedraw(slide.$slide);

            // Animate the slide
            $.fancybox.animate(
              slide.$slide,
              {
                top: 0,
                left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
              },
              duration,
              function() {
                slide.$slide
                  .css({
                    transform: "",
                    opacity: ""
                  })
                  .removeClass("fancybox-slide--next fancybox-slide--previous");

                if (slide.pos === self.currPos) {
                  self.complete();
                }
              }
            );
          });
        } else if (duration && current.opts.transitionEffect) {
          // Set transition effect for previously active slide
          prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;

          previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous"));

          $.fancybox.animate(
            previous.$slide,
            prop,
            duration,
            function() {
              previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous");
            },
            false
          );
        }

        if (current.isLoaded) {
          self.revealContent(current);
        } else {
          self.loadSlide(current);
        }

        self.preload("image");
      },

      // Create new "slide" element
      // These are gallery items  that are actually added to DOM
      // =======================================================

      createSlide: function(pos) {
        var self = this,
          $slide,
          index;

        index = pos % self.group.length;
        index = index < 0 ? self.group.length + index : index;

        if (!self.slides[pos] && self.group[index]) {
          $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);

          self.slides[pos] = $.extend(true, {}, self.group[index], {
            pos: pos,
            $slide: $slide,
            isLoaded: false
          });

          self.updateSlide(self.slides[pos]);
        }

        return self.slides[pos];
      },

      // Scale image to the actual size of the image;
      // x and y values should be relative to the slide
      // ==============================================

      scaleToActual: function(x, y, duration) {
        var self = this,
          current = self.current,
          $content = current.$content,
          canvasWidth = $.fancybox.getTranslate(current.$slide).width,
          canvasHeight = $.fancybox.getTranslate(current.$slide).height,
          newImgWidth = current.width,
          newImgHeight = current.height,
          imgPos,
          posX,
          posY,
          scaleX,
          scaleY;

        if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
          return;
        }

        self.isAnimating = true;

        $.fancybox.stop($content);

        x = x === undefined ? canvasWidth * 0.5 : x;
        y = y === undefined ? canvasHeight * 0.5 : y;

        imgPos = $.fancybox.getTranslate($content);

        imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
        imgPos.left -= $.fancybox.getTranslate(current.$slide).left;

        scaleX = newImgWidth / imgPos.width;
        scaleY = newImgHeight / imgPos.height;

        // Get center position for original image
        posX = canvasWidth * 0.5 - newImgWidth * 0.5;
        posY = canvasHeight * 0.5 - newImgHeight * 0.5;

        // Make sure image does not move away from edges
        if (newImgWidth > canvasWidth) {
          posX = imgPos.left * scaleX - (x * scaleX - x);

          if (posX > 0) {
            posX = 0;
          }

          if (posX < canvasWidth - newImgWidth) {
            posX = canvasWidth - newImgWidth;
          }
        }

        if (newImgHeight > canvasHeight) {
          posY = imgPos.top * scaleY - (y * scaleY - y);

          if (posY > 0) {
            posY = 0;
          }

          if (posY < canvasHeight - newImgHeight) {
            posY = canvasHeight - newImgHeight;
          }
        }

        self.updateCursor(newImgWidth, newImgHeight);

        $.fancybox.animate(
          $content,
          {
            top: posY,
            left: posX,
            scaleX: scaleX,
            scaleY: scaleY
          },
          duration || 330,
          function() {
            self.isAnimating = false;
          }
        );

        // Stop slideshow
        if (self.SlideShow && self.SlideShow.isActive) {
          self.SlideShow.stop();
        }
      },

      // Scale image to fit inside parent element
      // ========================================

      scaleToFit: function(duration) {
        var self = this,
          current = self.current,
          $content = current.$content,
          end;

        if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
          return;
        }

        self.isAnimating = true;

        $.fancybox.stop($content);

        end = self.getFitPos(current);

        self.updateCursor(end.width, end.height);

        $.fancybox.animate(
          $content,
          {
            top: end.top,
            left: end.left,
            scaleX: end.width / $content.width(),
            scaleY: end.height / $content.height()
          },
          duration || 330,
          function() {
            self.isAnimating = false;
          }
        );
      },

      // Calculate image size to fit inside viewport
      // ===========================================

      getFitPos: function(slide) {
        var self = this,
          $content = slide.$content,
          $slide = slide.$slide,
          width = slide.width || slide.opts.width,
          height = slide.height || slide.opts.height,
          maxWidth,
          maxHeight,
          minRatio,
          aspectRatio,
          rez = {};

        if (!slide.isLoaded || !$content || !$content.length) {
          return false;
        }

        maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
        maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;

        maxWidth -=
          parseFloat($slide.css("paddingLeft")) +
          parseFloat($slide.css("paddingRight")) +
          parseFloat($content.css("marginLeft")) +
          parseFloat($content.css("marginRight"));

        maxHeight -=
          parseFloat($slide.css("paddingTop")) +
          parseFloat($slide.css("paddingBottom")) +
          parseFloat($content.css("marginTop")) +
          parseFloat($content.css("marginBottom"));

        if (!width || !height) {
          width = maxWidth;
          height = maxHeight;
        }

        minRatio = Math.min(1, maxWidth / width, maxHeight / height);

        width = minRatio * width;
        height = minRatio * height;

        // Adjust width/height to precisely fit into container
        if (width > maxWidth - 0.5) {
          width = maxWidth;
        }

        if (height > maxHeight - 0.5) {
          height = maxHeight;
        }

        if (slide.type === "image") {
          rez.top = Math.floor((maxHeight - height) * 0.5) + parseFloat($slide.css("paddingTop"));
          rez.left = Math.floor((maxWidth - width) * 0.5) + parseFloat($slide.css("paddingLeft"));
        } else if (slide.contentType === "video") {
          // Force aspect ratio for the video
          // "I say the whole world must learn of our peaceful waysâ€¦ by force!"
          aspectRatio = slide.opts.width && slide.opts.height ? width / height : slide.opts.ratio || 16 / 9;

          if (height > width / aspectRatio) {
            height = width / aspectRatio;
          } else if (width > height * aspectRatio) {
            width = height * aspectRatio;
          }
        }

        rez.width = width;
        rez.height = height;

        return rez;
      },

      // Update content size and position for all slides
      // ==============================================

      update: function(e) {
        var self = this;

        $.each(self.slides, function(key, slide) {
          self.updateSlide(slide, e);
        });
      },

      // Update slide content position and size
      // ======================================

      updateSlide: function(slide, e) {
        var self = this,
          $content = slide && slide.$content,
          width = slide.width || slide.opts.width,
          height = slide.height || slide.opts.height,
          $slide = slide.$slide;

        // First, prevent caption overlap, if needed
        self.adjustCaption(slide);

        // Then resize content to fit inside the slide
        if ($content && (width || height || slide.contentType === "video") && !slide.hasError) {
          $.fancybox.stop($content);

          $.fancybox.setTranslate($content, self.getFitPos(slide));

          if (slide.pos === self.currPos) {
            self.isAnimating = false;

            self.updateCursor();
          }
        }

        // Then some adjustments
        self.adjustLayout(slide);

        if ($slide.length) {
          $slide.trigger("refresh");

          if (slide.pos === self.currPos) {
            self.$refs.toolbar
              .add(self.$refs.navigation.find(".fancybox-button--arrow_right"))
              .toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight);
          }
        }

        self.trigger("onUpdate", slide, e);
      },

      // Horizontally center slide
      // =========================

      centerSlide: function(duration) {
        var self = this,
          current = self.current,
          $slide = current.$slide;

        if (self.isClosing || !current) {
          return;
        }

        $slide.siblings().css({
          transform: "",
          opacity: ""
        });

        $slide
          .parent()
          .children()
          .removeClass("fancybox-slide--previous fancybox-slide--next");

        $.fancybox.animate(
          $slide,
          {
            top: 0,
            left: 0,
            opacity: 1
          },
          duration === undefined ? 0 : duration,
          function() {
            // Clean up
            $slide.css({
              transform: "",
              opacity: ""
            });

            if (!current.isComplete) {
              self.complete();
            }
          },
          false
        );
      },

      // Check if current slide is moved (swiped)
      // ========================================

      isMoved: function(slide) {
        var current = slide || this.current,
          slidePos,
          stagePos;

        if (!current) {
          return false;
        }

        stagePos = $.fancybox.getTranslate(this.$refs.stage);
        slidePos = $.fancybox.getTranslate(current.$slide);

        return (
          !current.$slide.hasClass("fancybox-animated") &&
          (Math.abs(slidePos.top - stagePos.top) > 0.5 || Math.abs(slidePos.left - stagePos.left) > 0.5)
        );
      },

      // Update cursor style depending if content can be zoomed
      // ======================================================

      updateCursor: function(nextWidth, nextHeight) {
        var self = this,
          current = self.current,
          $container = self.$refs.container,
          canPan,
          isZoomable;

        if (!current || self.isClosing || !self.Guestures) {
          return;
        }

        $container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");

        canPan = self.canPan(nextWidth, nextHeight);

        isZoomable = canPan ? true : self.isZoomable();

        $container.toggleClass("fancybox-is-zoomable", isZoomable);

        $("[data-fancybox-zoom]").prop("disabled", !isZoomable);

        if (canPan) {
          $container.addClass("fancybox-can-pan");
        } else if (
          isZoomable &&
          (current.opts.clickContent === "zoom" || ($.isFunction(current.opts.clickContent) && current.opts.clickContent(current) == "zoom"))
        ) {
          $container.addClass("fancybox-can-zoomIn");
        } else if (current.opts.touch && (current.opts.touch.vertical || self.group.length > 1) && current.contentType !== "video") {
          $container.addClass("fancybox-can-swipe");
        }
      },

      // Check if current slide is zoomable
      // ==================================

      isZoomable: function() {
        var self = this,
          current = self.current,
          fitPos;

        // Assume that slide is zoomable if:
        //   - image is still loading
        //   - actual size of the image is smaller than available area
        if (current && !self.isClosing && current.type === "image" && !current.hasError) {
          if (!current.isLoaded) {
            return true;
          }

          fitPos = self.getFitPos(current);

          if (fitPos && (current.width > fitPos.width || current.height > fitPos.height)) {
            return true;
          }
        }

        return false;
      },

      // Check if current image dimensions are smaller than actual
      // =========================================================

      isScaledDown: function(nextWidth, nextHeight) {
        var self = this,
          rez = false,
          current = self.current,
          $content = current.$content;

        if (nextWidth !== undefined && nextHeight !== undefined) {
          rez = nextWidth < current.width && nextHeight < current.height;
        } else if ($content) {
          rez = $.fancybox.getTranslate($content);
          rez = rez.width < current.width && rez.height < current.height;
        }

        return rez;
      },

      // Check if image dimensions exceed parent element
      // ===============================================

      canPan: function(nextWidth, nextHeight) {
        var self = this,
          current = self.current,
          pos = null,
          rez = false;

        if (current.type === "image" && (current.isComplete || (nextWidth && nextHeight)) && !current.hasError) {
          rez = self.getFitPos(current);

          if (nextWidth !== undefined && nextHeight !== undefined) {
            pos = {width: nextWidth, height: nextHeight};
          } else if (current.isComplete) {
            pos = $.fancybox.getTranslate(current.$content);
          }

          if (pos && rez) {
            rez = Math.abs(pos.width - rez.width) > 1.5 || Math.abs(pos.height - rez.height) > 1.5;
          }
        }

        return rez;
      },

      // Load content into the slide
      // ===========================

      loadSlide: function(slide) {
        var self = this,
          type,
          $slide,
          ajaxLoad;

        if (slide.isLoading || slide.isLoaded) {
          return;
        }

        slide.isLoading = true;

        if (self.trigger("beforeLoad", slide) === false) {
          slide.isLoading = false;

          return false;
        }

        type = slide.type;
        $slide = slide.$slide;

        $slide
          .off("refresh")
          .trigger("onReset")
          .addClass(slide.opts.slideClass);

        // Create content depending on the type
        switch (type) {
          case "image":
            self.setImage(slide);

            break;

          case "iframe":
            self.setIframe(slide);

            break;

          case "html":
            self.setContent(slide, slide.src || slide.content);

            break;

          case "video":
            self.setContent(
              slide,
              slide.opts.video.tpl
                .replace(/\{\{src\}\}/gi, slide.src)
                .replace("{{format}}", slide.opts.videoFormat || slide.opts.video.format || "")
                .replace("{{poster}}", slide.thumb || "")
            );

            break;

          case "inline":
            if ($(slide.src).length) {
              self.setContent(slide, $(slide.src));
            } else {
              self.setError(slide);
            }

            break;

          case "ajax":
            self.showLoading(slide);

            ajaxLoad = $.ajax(
              $.extend({}, slide.opts.ajax.settings, {
                url: slide.src,
                success: function(data, textStatus) {
                  if (textStatus === "success") {
                    self.setContent(slide, data);
                  }
                },
                error: function(jqXHR, textStatus) {
                  if (jqXHR && textStatus !== "abort") {
                    self.setError(slide);
                  }
                }
              })
            );

            $slide.one("onReset", function() {
              ajaxLoad.abort();
            });

            break;

          default:
            self.setError(slide);

            break;
        }

        return true;
      },

      // Use thumbnail image, if possible
      // ================================

      setImage: function(slide) {
        var self = this,
          ghost;

        // Check if need to show loading icon
        setTimeout(function() {
          var $img = slide.$image;

          if (!self.isClosing && slide.isLoading && (!$img || !$img.length || !$img[0].complete) && !slide.hasError) {
            self.showLoading(slide);
          }
        }, 50);

        //Check if image has srcset
        self.checkSrcset(slide);

        // This will be wrapper containing both ghost and actual image
        slide.$content = $('<div class="fancybox-content"></div>')
          .addClass("fancybox-is-hidden")
          .appendTo(slide.$slide.addClass("fancybox-slide--image"));

        // If we have a thumbnail, we can display it while actual image is loading
        // Users will not stare at black screen and actual image will appear gradually
        if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && slide.thumb) {
          slide.width = slide.opts.width;
          slide.height = slide.opts.height;

          ghost = document.createElement("img");

          ghost.onerror = function() {
            $(this).remove();

            slide.$ghost = null;
          };

          ghost.onload = function() {
            self.afterLoad(slide);
          };

          slide.$ghost = $(ghost)
            .addClass("fancybox-image")
            .appendTo(slide.$content)
            .attr("src", slide.thumb);
        }

        // Start loading actual image
        self.setBigImage(slide);
      },

      // Check if image has srcset and get the source
      // ============================================
      checkSrcset: function(slide) {
        var srcset = slide.opts.srcset || slide.opts.image.srcset,
          found,
          temp,
          pxRatio,
          windowWidth;

        // If we have "srcset", then we need to find first matching "src" value.
        // This is necessary, because when you set an src attribute, the browser will preload the image
        // before any javascript or even CSS is applied.
        if (srcset) {
          pxRatio = window.devicePixelRatio || 1;
          windowWidth = window.innerWidth * pxRatio;

          temp = srcset.split(",").map(function(el) {
            var ret = {};

            el.trim()
              .split(/\s+/)
              .forEach(function(el, i) {
                var value = parseInt(el.substring(0, el.length - 1), 10);

                if (i === 0) {
                  return (ret.url = el);
                }

                if (value) {
                  ret.value = value;
                  ret.postfix = el[el.length - 1];
                }
              });

            return ret;
          });

          // Sort by value
          temp.sort(function(a, b) {
            return a.value - b.value;
          });

          // Ok, now we have an array of all srcset values
          for (var j = 0; j < temp.length; j++) {
            var el = temp[j];

            if ((el.postfix === "w" && el.value >= windowWidth) || (el.postfix === "x" && el.value >= pxRatio)) {
              found = el;
              break;
            }
          }

          // If not found, take the last one
          if (!found && temp.length) {
            found = temp[temp.length - 1];
          }

          if (found) {
            slide.src = found.url;

            // If we have default width/height values, we can calculate height for matching source
            if (slide.width && slide.height && found.postfix == "w") {
              slide.height = (slide.width / slide.height) * found.value;
              slide.width = found.value;
            }

            slide.opts.srcset = srcset;
          }
        }
      },

      // Create full-size image
      // ======================

      setBigImage: function(slide) {
        var self = this,
          img = document.createElement("img"),
          $img = $(img);

        slide.$image = $img
          .one("error", function() {
            self.setError(slide);
          })
          .one("load", function() {
            var sizes;

            if (!slide.$ghost) {
              self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);

              self.afterLoad(slide);
            }

            if (self.isClosing) {
              return;
            }

            if (slide.opts.srcset) {
              sizes = slide.opts.sizes;

              if (!sizes || sizes === "auto") {
                sizes =
                  (slide.width / slide.height > 1 && $W.width() / $W.height() > 1 ? "100" : Math.round((slide.width / slide.height) * 100)) +
                  "vw";
              }

              $img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
            }

            // Hide temporary image after some delay
            if (slide.$ghost) {
              setTimeout(function() {
                if (slide.$ghost && !self.isClosing) {
                  slide.$ghost.hide();
                }
              }, Math.min(300, Math.max(1000, slide.height / 1600)));
            }

            self.hideLoading(slide);
          })
          .addClass("fancybox-image")
          .attr("src", slide.src)
          .appendTo(slide.$content);

        if ((img.complete || img.readyState == "complete") && $img.naturalWidth && $img.naturalHeight) {
          $img.trigger("load");
        } else if (img.error) {
          $img.trigger("error");
        }
      },

      // Computes the slide size from image size and maxWidth/maxHeight
      // ==============================================================

      resolveImageSlideSize: function(slide, imgWidth, imgHeight) {
        var maxWidth = parseInt(slide.opts.width, 10),
          maxHeight = parseInt(slide.opts.height, 10);

        // Sets the default values from the image
        slide.width = imgWidth;
        slide.height = imgHeight;

        if (maxWidth > 0) {
          slide.width = maxWidth;
          slide.height = Math.floor((maxWidth * imgHeight) / imgWidth);
        }

        if (maxHeight > 0) {
          slide.width = Math.floor((maxHeight * imgWidth) / imgHeight);
          slide.height = maxHeight;
        }
      },

      // Create iframe wrapper, iframe and bindings
      // ==========================================

      setIframe: function(slide) {
        var self = this,
          opts = slide.opts.iframe,
          $slide = slide.$slide,
          $iframe;

        // Fix responsive iframes on iOS (along with `position:absolute;` for iframe element)
        if ($.fancybox.isMobile) {
          opts.css.overflow = "scroll";
        }

        slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>')
          .css(opts.css)
          .appendTo($slide);

        $slide.addClass("fancybox-slide--" + slide.contentType);

        slide.$iframe = $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime()))
          .attr(opts.attr)
          .appendTo(slide.$content);

        if (opts.preload) {
          self.showLoading(slide);

          // Unfortunately, it is not always possible to determine if iframe is successfully loaded
          // (due to browser security policy)

          $iframe.on("load.fb error.fb", function(e) {
            this.isReady = 1;

            slide.$slide.trigger("refresh");

            self.afterLoad(slide);
          });

          // Recalculate iframe content size
          // ===============================

          $slide.on("refresh.fb", function() {
            var $content = slide.$content,
              frameWidth = opts.css.width,
              frameHeight = opts.css.height,
              $contents,
              $body;

            if ($iframe[0].isReady !== 1) {
              return;
            }

            try {
              $contents = $iframe.contents();
              $body = $contents.find("body");
            } catch (ignore) {}

            // Calculate contnet dimensions if it is accessible
            if ($body && $body.length && $body.children().length) {
              // Avoid scrolling to top (if multiple instances)
              $slide.css("overflow", "visible");

              $content.css({
                width: "100%",
                "max-width": "100%",
                height: "9999px"
              });

              if (frameWidth === undefined) {
                frameWidth = Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)));
              }

              $content.css("width", frameWidth ? frameWidth : "").css("max-width", "");

              if (frameHeight === undefined) {
                frameHeight = Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)));
              }

              $content.css("height", frameHeight ? frameHeight : "");

              $slide.css("overflow", "auto");
            }

            $content.removeClass("fancybox-is-hidden");
          });
        } else {
          self.afterLoad(slide);
        }

        $iframe.attr("src", slide.src);

        // Remove iframe if closing or changing gallery item
        $slide.one("onReset", function() {
          // This helps IE not to throw errors when closing
          try {
            $(this)
              .find("iframe")
              .hide()
              .unbind()
              .attr("src", "//about:blank");
          } catch (ignore) {}

          $(this)
            .off("refresh.fb")
            .empty();

          slide.isLoaded = false;
          slide.isRevealed = false;
        });
      },

      // Wrap and append content to the slide
      // ======================================

      setContent: function(slide, content) {
        var self = this;

        if (self.isClosing) {
          return;
        }

        self.hideLoading(slide);

        if (slide.$content) {
          $.fancybox.stop(slide.$content);
        }

        slide.$slide.empty();

        // If content is a jQuery object, then it will be moved to the slide.
        // The placeholder is created so we will know where to put it back.
        if (isQuery(content) && content.parent().length) {
          // Make sure content is not already moved to fancyBox
          if (content.hasClass("fancybox-content") || content.parent().hasClass("fancybox-content")) {
            content.parents(".fancybox-slide").trigger("onReset");
          }

          // Create temporary element marking original place of the content
          slide.$placeholder = $("<div>")
            .hide()
            .insertAfter(content);

          // Make sure content is visible
          content.css("display", "inline-block");
        } else if (!slide.hasError) {
          // If content is just a plain text, try to convert it to html
          if ($.type(content) === "string") {
            content = $("<div>")
              .append($.trim(content))
              .contents();
          }

          // If "filter" option is provided, then filter content
          if (slide.opts.filter) {
            content = $("<div>")
              .html(content)
              .find(slide.opts.filter);
          }
        }

        slide.$slide.one("onReset", function() {
          // Pause all html5 video/audio
          $(this)
            .find("video,audio")
            .trigger("pause");

          // Put content back
          if (slide.$placeholder) {
            slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();

            slide.$placeholder = null;
          }

          // Remove custom close button
          if (slide.$smallBtn) {
            slide.$smallBtn.remove();

            slide.$smallBtn = null;
          }

          // Remove content and mark slide as not loaded
          if (!slide.hasError) {
            $(this).empty();

            slide.isLoaded = false;
            slide.isRevealed = false;
          }
        });

        $(content).appendTo(slide.$slide);

        if ($(content).is("video,audio")) {
          $(content).addClass("fancybox-video");

          $(content).wrap("<div></div>");

          slide.contentType = "video";

          slide.opts.width = slide.opts.width || $(content).attr("width");
          slide.opts.height = slide.opts.height || $(content).attr("height");
        }

        slide.$content = slide.$slide
          .children()
          .filter("div,form,main,video,audio,article,.fancybox-content")
          .first();

        slide.$content.siblings().hide();

        // Re-check if there is a valid content
        // (in some cases, ajax response can contain various elements or plain text)
        if (!slide.$content.length) {
          slide.$content = slide.$slide
            .wrapInner("<div></div>")
            .children()
            .first();
        }

        slide.$content.addClass("fancybox-content");

        slide.$slide.addClass("fancybox-slide--" + slide.contentType);

        self.afterLoad(slide);
      },

      // Display error message
      // =====================

      setError: function(slide) {
        slide.hasError = true;

        slide.$slide
          .trigger("onReset")
          .removeClass("fancybox-slide--" + slide.contentType)
          .addClass("fancybox-slide--error");

        slide.contentType = "html";

        this.setContent(slide, this.translate(slide, slide.opts.errorTpl));

        if (slide.pos === this.currPos) {
          this.isAnimating = false;
        }
      },

      // Show loading icon inside the slide
      // ==================================

      showLoading: function(slide) {
        var self = this;

        slide = slide || self.current;

        if (slide && !slide.$spinner) {
          slide.$spinner = $(self.translate(self, self.opts.spinnerTpl))
            .appendTo(slide.$slide)
            .hide()
            .fadeIn("fast");
        }
      },

      // Remove loading icon from the slide
      // ==================================

      hideLoading: function(slide) {
        var self = this;

        slide = slide || self.current;

        if (slide && slide.$spinner) {
          slide.$spinner.stop().remove();

          delete slide.$spinner;
        }
      },

      // Adjustments after slide content has been loaded
      // ===============================================

      afterLoad: function(slide) {
        var self = this;

        if (self.isClosing) {
          return;
        }

        slide.isLoading = false;
        slide.isLoaded = true;

        self.trigger("afterLoad", slide);

        self.hideLoading(slide);

        // Add small close button
        if (slide.opts.smallBtn && (!slide.$smallBtn || !slide.$smallBtn.length)) {
          slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
        }

        // Disable right click
        if (slide.opts.protect && slide.$content && !slide.hasError) {
          slide.$content.on("contextmenu.fb", function(e) {
            if (e.button == 2) {
              e.preventDefault();
            }

            return true;
          });

          // Add fake element on top of the image
          // This makes a bit harder for user to select image
          if (slide.type === "image") {
            $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
          }
        }

        self.adjustCaption(slide);

        self.adjustLayout(slide);

        if (slide.pos === self.currPos) {
          self.updateCursor();
        }

        self.revealContent(slide);
      },

      // Prevent caption overlap,
      // fix css inconsistency across browsers
      // =====================================

      adjustCaption: function(slide) {
        var self = this,
          current = slide || self.current,
          caption = current.opts.caption,
          $caption = self.$refs.caption,
          captionH = false;

        if (current.opts.preventCaptionOverlap && caption && caption.length) {
          if (current.pos !== self.currPos) {
            $caption = $caption
              .clone()
              .empty()
              .appendTo($caption.parent());

            $caption.html(caption);

            captionH = $caption.outerHeight(true);

            $caption.empty().remove();
          } else if (self.$caption) {
            captionH = self.$caption.outerHeight(true);
          }

          current.$slide.css("padding-bottom", captionH || "");
        }
      },

      // Simple hack to fix inconsistency across browsers, described here (affects Edge, too):
      // https://bugzilla.mozilla.org/show_bug.cgi?id=748518
      // ====================================================================================

      adjustLayout: function(slide) {
        var self = this,
          current = slide || self.current,
          scrollHeight,
          marginBottom,
          inlinePadding,
          actualPadding;

        if (current.isLoaded && current.opts.disableLayoutFix !== true) {
          current.$content.css("margin-bottom", "");

          // If we would always set margin-bottom for the content,
          // then it would potentially break vertical align
          if (current.$content.outerHeight() > current.$slide.height() + 0.5) {
            inlinePadding = current.$slide[0].style["padding-bottom"];
            actualPadding = current.$slide.css("padding-bottom");

            if (parseFloat(actualPadding) > 0) {
              scrollHeight = current.$slide[0].scrollHeight;

              current.$slide.css("padding-bottom", 0);

              if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
                marginBottom = actualPadding;
              }

              current.$slide.css("padding-bottom", inlinePadding);
            }
          }

          current.$content.css("margin-bottom", marginBottom);
        }
      },

      // Make content visible
      // This method is called right after content has been loaded or
      // user navigates gallery and transition should start
      // ============================================================

      revealContent: function(slide) {
        var self = this,
          $slide = slide.$slide,
          end = false,
          start = false,
          isMoved = self.isMoved(slide),
          isRevealed = slide.isRevealed,
          effect,
          effectClassName,
          duration,
          opacity;

        slide.isRevealed = true;

        effect = slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
        duration = slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];

        duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);

        if (isMoved || slide.pos !== self.currPos || !duration) {
          effect = false;
        }

        // Check if can zoom
        if (effect === "zoom") {
          if (slide.pos === self.currPos && duration && slide.type === "image" && !slide.hasError && (start = self.getThumbPos(slide))) {
            end = self.getFitPos(slide);
          } else {
            effect = "fade";
          }
        }

        // Zoom animation
        // ==============
        if (effect === "zoom") {
          self.isAnimating = true;

          end.scaleX = end.width / start.width;
          end.scaleY = end.height / start.height;

          // Check if we need to animate opacity
          opacity = slide.opts.zoomOpacity;

          if (opacity == "auto") {
            opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
          }

          if (opacity) {
            start.opacity = 0.1;
            end.opacity = 1;
          }

          // Draw image at start position
          $.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);

          forceRedraw(slide.$content);

          // Start animation
          $.fancybox.animate(slide.$content, end, duration, function() {
            self.isAnimating = false;

            self.complete();
          });

          return;
        }

        self.updateSlide(slide);

        // Simply show content if no effect
        // ================================
        if (!effect) {
          slide.$content.removeClass("fancybox-is-hidden");

          if (!isRevealed && isMoved && slide.type === "image" && !slide.hasError) {
            slide.$content.hide().fadeIn("fast");
          }

          if (slide.pos === self.currPos) {
            self.complete();
          }

          return;
        }

        // Prepare for CSS transiton
        // =========================
        $.fancybox.stop($slide);

        //effectClassName = "fancybox-animated fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-fx-" + effect;
        effectClassName = "fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + effect;

        $slide.addClass(effectClassName).removeClass("fancybox-slide--current"); //.addClass(effectClassName);

        slide.$content.removeClass("fancybox-is-hidden");

        // Force reflow
        forceRedraw($slide);

        if (slide.type !== "image") {
          slide.$content.hide().show(0);
        }

        $.fancybox.animate(
          $slide,
          "fancybox-slide--current",
          duration,
          function() {
            $slide.removeClass(effectClassName).css({
              transform: "",
              opacity: ""
            });

            if (slide.pos === self.currPos) {
              self.complete();
            }
          },
          true
        );
      },

      // Check if we can and have to zoom from thumbnail
      //================================================

      getThumbPos: function(slide) {
        var rez = false,
          $thumb = slide.$thumb,
          thumbPos,
          btw,
          brw,
          bbw,
          blw;

        if (!$thumb || !inViewport($thumb[0])) {
          return false;
        }

        thumbPos = $.fancybox.getTranslate($thumb);

        btw = parseFloat($thumb.css("border-top-width") || 0);
        brw = parseFloat($thumb.css("border-right-width") || 0);
        bbw = parseFloat($thumb.css("border-bottom-width") || 0);
        blw = parseFloat($thumb.css("border-left-width") || 0);

        rez = {
          top: thumbPos.top + btw,
          left: thumbPos.left + blw,
          width: thumbPos.width - brw - blw,
          height: thumbPos.height - btw - bbw,
          scaleX: 1,
          scaleY: 1
        };

        return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false;
      },

      // Final adjustments after current gallery item is moved to position
      // and it`s content is loaded
      // ==================================================================

      complete: function() {
        var self = this,
          current = self.current,
          slides = {},
          $el;

        if (self.isMoved() || !current.isLoaded) {
          return;
        }

        if (!current.isComplete) {
          current.isComplete = true;

          current.$slide.siblings().trigger("onReset");

          self.preload("inline");

          // Trigger any CSS transiton inside the slide
          forceRedraw(current.$slide);

          current.$slide.addClass("fancybox-slide--complete");

          // Remove unnecessary slides
          $.each(self.slides, function(key, slide) {
            if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
              slides[slide.pos] = slide;
            } else if (slide) {
              $.fancybox.stop(slide.$slide);

              slide.$slide.off().remove();
            }
          });

          self.slides = slides;
        }

        self.isAnimating = false;

        self.updateCursor();

        self.trigger("afterShow");

        // Autoplay first html5 video/audio
        if (!!current.opts.video.autoStart) {
          current.$slide
            .find("video,audio")
            .filter(":visible:first")
            .trigger("play")
            .one("ended", function() {
              if (this.webkitExitFullscreen) {
                this.webkitExitFullscreen();
              }

              self.next();
            });
        }

        // Try to focus on the first focusable element
        if (current.opts.autoFocus && current.contentType === "html") {
          // Look for the first input with autofocus attribute
          $el = current.$content.find("input[autofocus]:enabled:visible:first");

          if ($el.length) {
            $el.trigger("focus");
          } else {
            self.focus(null, true);
          }
        }

        // Avoid jumping
        current.$slide.scrollTop(0).scrollLeft(0);
      },

      // Preload next and previous slides
      // ================================

      preload: function(type) {
        var self = this,
          prev,
          next;

        if (self.group.length < 2) {
          return;
        }

        next = self.slides[self.currPos + 1];
        prev = self.slides[self.currPos - 1];

        if (prev && prev.type === type) {
          self.loadSlide(prev);
        }

        if (next && next.type === type) {
          self.loadSlide(next);
        }
      },

      // Try to find and focus on the first focusable element
      // ====================================================

      focus: function(e, firstRun) {
        var self = this,
          focusableStr = [
            "a[href]",
            "area[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "button:not([disabled]):not([aria-hidden])",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])'
          ].join(","),
          focusableItems,
          focusedItemIndex;

        if (self.isClosing) {
          return;
        }

        if (e || !self.current || !self.current.isComplete) {
          // Focus on any element inside fancybox
          focusableItems = self.$refs.container.find("*:visible");
        } else {
          // Focus inside current slide
          focusableItems = self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)" : ""));
        }

        focusableItems = focusableItems.filter(focusableStr).filter(function() {
          return $(this).css("visibility") !== "hidden" && !$(this).hasClass("disabled");
        });

        if (focusableItems.length) {
          focusedItemIndex = focusableItems.index(document.activeElement);

          if (e && e.shiftKey) {
            // Back tab
            if (focusedItemIndex < 0 || focusedItemIndex == 0) {
              e.preventDefault();

              focusableItems.eq(focusableItems.length - 1).trigger("focus");
            }
          } else {
            // Outside or Forward tab
            if (focusedItemIndex < 0 || focusedItemIndex == focusableItems.length - 1) {
              if (e) {
                e.preventDefault();
              }

              focusableItems.eq(0).trigger("focus");
            }
          }
        } else {
          self.$refs.container.trigger("focus");
        }
      },

      // Activates current instance - brings container to the front and enables keyboard,
      // notifies other instances about deactivating
      // =================================================================================

      activate: function() {
        var self = this;

        // Deactivate all instances
        $(".fancybox-container").each(function() {
          var instance = $(this).data("FancyBox");

          // Skip self and closing instances
          if (instance && instance.id !== self.id && !instance.isClosing) {
            instance.trigger("onDeactivate");

            instance.removeEvents();

            instance.isVisible = false;
          }
        });

        self.isVisible = true;

        if (self.current || self.isIdle) {
          self.update();

          self.updateControls();
        }

        self.trigger("onActivate");

        self.addEvents();
      },

      // Start closing procedure
      // This will start "zoom-out" animation if needed and clean everything up afterwards
      // =================================================================================

      close: function(e, d) {
        var self = this,
          current = self.current,
          effect,
          duration,
          $content,
          domRect,
          opacity,
          start,
          end;

        var done = function() {
          self.cleanUp(e);
        };

        if (self.isClosing) {
          return false;
        }

        self.isClosing = true;

        // If beforeClose callback prevents closing, make sure content is centered
        if (self.trigger("beforeClose", e) === false) {
          self.isClosing = false;

          requestAFrame(function() {
            self.update();
          });

          return false;
        }

        // Remove all events
        // If there are multiple instances, they will be set again by "activate" method
        self.removeEvents();

        $content = current.$content;
        effect = current.opts.animationEffect;
        duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;

        current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");

        if (e !== true) {
          $.fancybox.stop(current.$slide);
        } else {
          effect = false;
        }

        // Remove other slides
        current.$slide
          .siblings()
          .trigger("onReset")
          .remove();

        // Trigger animations
        if (duration) {
          self.$refs.container
            .removeClass("fancybox-is-open")
            .addClass("fancybox-is-closing")
            .css("transition-duration", duration + "ms");
        }

        // Clean up
        self.hideLoading(current);

        self.hideControls(true);

        self.updateCursor();

        // Check if possible to zoom-out
        if (
          effect === "zoom" &&
          !($content && duration && current.type === "image" && !self.isMoved() && !current.hasError && (end = self.getThumbPos(current)))
        ) {
          effect = "fade";
        }

        if (effect === "zoom") {
          $.fancybox.stop($content);

          domRect = $.fancybox.getTranslate($content);

          start = {
            top: domRect.top,
            left: domRect.left,
            scaleX: domRect.width / end.width,
            scaleY: domRect.height / end.height,
            width: end.width,
            height: end.height
          };

          // Check if we need to animate opacity
          opacity = current.opts.zoomOpacity;

          if (opacity == "auto") {
            opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
          }

          if (opacity) {
            end.opacity = 0;
          }

          $.fancybox.setTranslate($content, start);

          forceRedraw($content);

          $.fancybox.animate($content, end, duration, done);

          return true;
        }

        if (effect && duration) {
          $.fancybox.animate(
            current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),
            "fancybox-animated fancybox-fx-" + effect,
            duration,
            done
          );
        } else {
          // If skip animation
          if (e === true) {
            setTimeout(done, duration);
          } else {
            done();
          }
        }

        return true;
      },

      // Final adjustments after removing the instance
      // =============================================

      cleanUp: function(e) {
        var self = this,
          instance,
          $focus = self.current.opts.$orig,
          x,
          y;

        self.current.$slide.trigger("onReset");

        self.$refs.container.empty().remove();

        self.trigger("afterClose", e);

        // Place back focus
        if (!!self.current.opts.backFocus) {
          if (!$focus || !$focus.length || !$focus.is(":visible")) {
            $focus = self.$trigger;
          }

          if ($focus && $focus.length) {
            x = window.scrollX;
            y = window.scrollY;

            $focus.trigger("focus");

            $("html, body")
              .scrollTop(y)
              .scrollLeft(x);
          }
        }

        self.current = null;

        // Check if there are other instances
        instance = $.fancybox.getInstance();

        if (instance) {
          instance.activate();
        } else {
          $("body").removeClass("fancybox-active compensate-for-scrollbar");

          $("#fancybox-style-noscroll").remove();
        }
      },

      // Call callback and trigger an event
      // ==================================

      trigger: function(name, slide) {
        var args = Array.prototype.slice.call(arguments, 1),
          self = this,
          obj = slide && slide.opts ? slide : self.current,
          rez;

        if (obj) {
          args.unshift(obj);
        } else {
          obj = self;
        }

        args.unshift(self);

        if ($.isFunction(obj.opts[name])) {
          rez = obj.opts[name].apply(obj, args);
        }

        if (rez === false) {
          return rez;
        }

        if (name === "afterClose" || !self.$refs) {
          $D.trigger(name + ".fb", args);
        } else {
          self.$refs.container.trigger(name + ".fb", args);
        }
      },

      // Update infobar values, navigation button states and reveal caption
      // ==================================================================

      updateControls: function() {
        var self = this,
          current = self.current,
          index = current.index,
          $container = self.$refs.container,
          $caption = self.$refs.caption,
          caption = current.opts.caption;

        // Recalculate content dimensions
        current.$slide.trigger("refresh");

        self.$caption = caption && caption.length ? $caption.html(caption) : null;

        if (!self.hasHiddenControls && !self.isIdle) {
          self.showControls();
        }

        // Update info and navigation elements
        $container.find("[data-fancybox-count]").html(self.group.length);
        $container.find("[data-fancybox-index]").html(index + 1);

        $container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
        $container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self.group.length - 1);

        if (current.type === "image") {
          // Re-enable buttons; update download button source
          $container
            .find("[data-fancybox-zoom]")
            .show()
            .end()
            .find("[data-fancybox-download]")
            .attr("href", current.opts.image.src || current.src)
            .show();
        } else if (current.opts.toolbar) {
          $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
        }

        // Make sure focus is not on disabled button/element
        if ($(document.activeElement).is(":hidden,[disabled]")) {
          self.$refs.container.trigger("focus");
        }
      },

      // Hide toolbar and caption
      // ========================

      hideControls: function(andCaption) {
        var self = this,
          arr = ["infobar", "toolbar", "nav"];

        if (andCaption || !self.current.opts.preventCaptionOverlap) {
          arr.push("caption");
        }

        this.$refs.container.removeClass(
          arr
            .map(function(i) {
              return "fancybox-show-" + i;
            })
            .join(" ")
        );

        this.hasHiddenControls = true;
      },

      showControls: function() {
        var self = this,
          opts = self.current ? self.current.opts : self.opts,
          $container = self.$refs.container;

        self.hasHiddenControls = false;
        self.idleSecondsCounter = 0;

        $container
          .toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons))
          .toggleClass("fancybox-show-infobar", !!(opts.infobar && self.group.length > 1))
          .toggleClass("fancybox-show-caption", !!self.$caption)
          .toggleClass("fancybox-show-nav", !!(opts.arrows && self.group.length > 1))
          .toggleClass("fancybox-is-modal", !!opts.modal);
      },

      // Toggle toolbar and caption
      // ==========================

      toggleControls: function() {
        if (this.hasHiddenControls) {
          this.showControls();
        } else {
          this.hideControls();
        }
      }
    });

    $.fancybox = {
      version: "3.5.2",
      defaults: defaults,

      // Get current instance and execute a command.
      //
      // Examples of usage:
      //
      //   $instance = $.fancybox.getInstance();
      //   $.fancybox.getInstance().jumpTo( 1 );
      //   $.fancybox.getInstance( 'jumpTo', 1 );
      //   $.fancybox.getInstance( function() {
      //       console.info( this.currIndex );
      //   });
      // ======================================================

      getInstance: function(command) {
        var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
          args = Array.prototype.slice.call(arguments, 1);

        if (instance instanceof FancyBox) {
          if ($.type(command) === "string") {
            instance[command].apply(instance, args);
          } else if ($.type(command) === "function") {
            command.apply(instance, args);
          }

          return instance;
        }

        return false;
      },

      // Create new instance
      // ===================

      open: function(items, opts, index) {
        return new FancyBox(items, opts, index);
      },

      // Close current or all instances
      // ==============================

      close: function(all) {
        var instance = this.getInstance();

        if (instance) {
          instance.close();

          // Try to find and close next instance
          if (all === true) {
            this.close(all);
          }
        }
      },

      // Close all instances and unbind all events
      // =========================================

      destroy: function() {
        this.close(true);

        $D.add("body").off("click.fb-start", "**");
      },

      // Try to detect mobile devices
      // ============================

      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

      // Detect if 'translate3d' support is available
      // ============================================

      use3d: (function() {
        var div = document.createElement("div");

        return (
          window.getComputedStyle &&
          window.getComputedStyle(div) &&
          window.getComputedStyle(div).getPropertyValue("transform") &&
          !(document.documentMode && document.documentMode < 11)
        );
      })(),

      // Helper function to get current visual state of an element
      // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
      // =====================================================================

      getTranslate: function($el) {
        var domRect;

        if (!$el || !$el.length) {
          return false;
        }

        domRect = $el[0].getBoundingClientRect();

        return {
          top: domRect.top || 0,
          left: domRect.left || 0,
          width: domRect.width,
          height: domRect.height,
          opacity: parseFloat($el.css("opacity"))
        };
      },

      // Shortcut for setting "translate3d" properties for element
      // Can set be used to set opacity, too
      // ========================================================

      setTranslate: function($el, props) {
        var str = "",
          css = {};

        if (!$el || !props) {
          return;
        }

        if (props.left !== undefined || props.top !== undefined) {
          str =
            (props.left === undefined ? $el.position().left : props.left) +
            "px, " +
            (props.top === undefined ? $el.position().top : props.top) +
            "px";

          if (this.use3d) {
            str = "translate3d(" + str + ", 0px)";
          } else {
            str = "translate(" + str + ")";
          }
        }

        if (props.scaleX !== undefined && props.scaleY !== undefined) {
          str += " scale(" + props.scaleX + ", " + props.scaleY + ")";
        } else if (props.scaleX !== undefined) {
          str += " scaleX(" + props.scaleX + ")";
        }

        if (str.length) {
          css.transform = str;
        }

        if (props.opacity !== undefined) {
          css.opacity = props.opacity;
        }

        if (props.width !== undefined) {
          css.width = props.width;
        }

        if (props.height !== undefined) {
          css.height = props.height;
        }

        return $el.css(css);
      },

      // Simple CSS transition handler
      // =============================

      animate: function($el, to, duration, callback, leaveAnimationName) {
        var self = this,
          from;

        if ($.isFunction(duration)) {
          callback = duration;
          duration = null;
        }

        self.stop($el);

        from = self.getTranslate($el);

        $el.on(transitionEnd, function(e) {
          // Skip events from child elements and z-index change
          if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
            return;
          }

          self.stop($el);

          if ($.isNumeric(duration)) {
            $el.css("transition-duration", "");
          }

          if ($.isPlainObject(to)) {
            if (to.scaleX !== undefined && to.scaleY !== undefined) {
              self.setTranslate($el, {
                top: to.top,
                left: to.left,
                width: from.width * to.scaleX,
                height: from.height * to.scaleY,
                scaleX: 1,
                scaleY: 1
              });
            }
          } else if (leaveAnimationName !== true) {
            $el.removeClass(to);
          }

          if ($.isFunction(callback)) {
            callback(e);
          }
        });

        if ($.isNumeric(duration)) {
          $el.css("transition-duration", duration + "ms");
        }

        // Start animation by changing CSS properties or class name
        if ($.isPlainObject(to)) {
          if (to.scaleX !== undefined && to.scaleY !== undefined) {
            delete to.width;
            delete to.height;

            if ($el.parent().hasClass("fancybox-slide--image")) {
              $el.parent().addClass("fancybox-is-scaling");
            }
          }

          $.fancybox.setTranslate($el, to);
        } else {
          $el.addClass(to);
        }

        // Make sure that `transitionend` callback gets fired
        $el.data(
          "timer",
          setTimeout(function() {
            $el.trigger(transitionEnd);
          }, duration + 33)
        );
      },

      stop: function($el, callCallback) {
        if ($el && $el.length) {
          clearTimeout($el.data("timer"));

          if (callCallback) {
            $el.trigger(transitionEnd);
          }

          $el.off(transitionEnd).css("transition-duration", "");

          $el.parent().removeClass("fancybox-is-scaling");
        }
      }
    };

    // Default click handler for "fancyboxed" links
    // ============================================

    function _run(e, opts) {
      var items = [],
        index = 0,
        $target,
        value,
        instance;

      // Avoid opening multiple times
      if (e && e.isDefaultPrevented()) {
        return;
      }

      e.preventDefault();

      opts = opts || {};

      if (e && e.data) {
        opts = mergeOpts(e.data.options, opts);
      }

      $target = opts.$target || $(e.currentTarget).trigger("blur");
      instance = $.fancybox.getInstance();

      if (instance && instance.$trigger && instance.$trigger.is($target)) {
        return;
      }

      if (opts.selector) {
        items = $(opts.selector);
      } else {
        // Get all related items and find index for clicked one
        value = $target.attr("data-fancybox") || "";

        if (value) {
          items = e.data ? e.data.items : [];
          items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
        } else {
          items = [$target];
        }
      }

      index = $(items).index($target);

      // Sometimes current item can not be found
      if (index < 0) {
        index = 0;
      }

      instance = $.fancybox.open(items, opts, index);

      // Save last active element
      instance.$trigger = $target;
    }

    // Create a jQuery plugin
    // ======================

    $.fn.fancybox = function(options) {
      var selector;

      options = options || {};
      selector = options.selector || false;

      if (selector) {
        // Use body element instead of document so it executes first
        $("body")
          .off("click.fb-start", selector)
          .on("click.fb-start", selector, {options: options}, _run);
      } else {
        this.off("click.fb-start").on(
          "click.fb-start",
          {
            items: this,
            options: options
          },
          _run
        );
      }

      return this;
    };

    // Self initializing plugin for all elements having `data-fancybox` attribute
    // ==========================================================================

    $D.on("click.fb-start", "[data-fancybox]", _run);

    // Enable "trigger elements"
    // =========================

    $D.on("click.fb-start", "[data-fancybox-trigger]", function(e) {
      $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]')
        .eq($(this).attr("data-fancybox-index") || 0)
        .trigger("click.fb-start", {
          $trigger: $(this)
        });
    });

    // Track focus event for better accessibility styling
    // ==================================================
    (function() {
      var buttonStr = ".fancybox-button",
        focusStr = "fancybox-focus",
        $pressed = null;

      $D.on("mousedown mouseup focus blur", buttonStr, function(e) {
        switch (e.type) {
          case "mousedown":
            $pressed = $(this);
            break;
          case "mouseup":
            $pressed = null;
            break;
          case "focusin":
            $(buttonStr).removeClass(focusStr);

            if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
              $(this).addClass(focusStr);
            }
            break;
          case "focusout":
            $(buttonStr).removeClass(focusStr);
            break;
        }
      });
    })();
  })(window, document, jQuery);

  // ==========================================================================
  //
  // Media
  // Adds additional media type support
  //
  // ==========================================================================
  (function($) {
    "use strict";

    // Object containing properties for each media type
    var defaults = {
      youtube: {
        matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
        params: {
          autoplay: 1,
          autohide: 1,
          fs: 1,
          rel: 0,
          hd: 1,
          wmode: "transparent",
          enablejsapi: 1,
          html5: 1
        },
        paramPlace: 8,
        type: "iframe",
        url: "//www.youtube-nocookie.com/embed/$4",
        thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
      },

      vimeo: {
        matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
        params: {
          autoplay: 1,
          hd: 1,
          show_title: 1,
          show_byline: 1,
          show_portrait: 0,
          fullscreen: 1
        },
        paramPlace: 3,
        type: "iframe",
        url: "//player.vimeo.com/video/$2"
      },

      instagram: {
        matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
        type: "image",
        url: "//$1/p/$2/media/?size=l"
      },

      // Examples:
      // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
      // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
      // https://www.google.com/maps/@52.2111123,2.9237542,6.61z?hl=en
      // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
      gmap_place: {
        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
        type: "iframe",
        url: function(rez) {
          return (
            "//maps.google." +
            rez[2] +
            "/?ll=" +
            (rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12] + "").replace(/\?/, "&") +
            "&output=" +
            (rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
          );
        }
      },

      // Examples:
      // https://www.google.com/maps/search/Empire+State+Building/
      // https://www.google.com/maps/search/?api=1&query=centurylink+field
      // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
      gmap_search: {
        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
        type: "iframe",
        url: function(rez) {
          return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
        }
      }
    };

    // Formats matching url to final form
    var format = function(url, rez, params) {
      if (!url) {
        return;
      }

      params = params || "";

      if ($.type(params) === "object") {
        params = $.param(params, true);
      }

      $.each(rez, function(key, value) {
        url = url.replace("$" + key, value || "");
      });

      if (params.length) {
        url += (url.indexOf("?") > 0 ? "&" : "?") + params;
      }

      return url;
    };

    $(document).on("objectNeedsType.fb", function(e, instance, item) {
      var url = item.src || "",
        type = false,
        media,
        thumb,
        rez,
        params,
        urlParams,
        paramObj,
        provider;

      media = $.extend(true, {}, defaults, item.opts.media);

      // Look for any matching media type
      $.each(media, function(providerName, providerOpts) {
        rez = url.match(providerOpts.matcher);

        if (!rez) {
          return;
        }

        type = providerOpts.type;
        provider = providerName;
        paramObj = {};

        if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
          urlParams = rez[providerOpts.paramPlace];

          if (urlParams[0] == "?") {
            urlParams = urlParams.substring(1);
          }

          urlParams = urlParams.split("&");

          for (var m = 0; m < urlParams.length; ++m) {
            var p = urlParams[m].split("=", 2);

            if (p.length == 2) {
              paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
          }
        }

        params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);

        url =
          $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);

        thumb =
          $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);

        if (providerName === "youtube") {
          url = url.replace(/&t=((\d+)m)?(\d+)s/, function(match, p1, m, s) {
            return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10));
          });
        } else if (providerName === "vimeo") {
          url = url.replace("&%23", "#");
        }

        return false;
      });

      // If it is found, then change content type and update the url

      if (type) {
        if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
          item.opts.thumb = thumb;
        }

        if (type === "iframe") {
          item.opts = $.extend(true, item.opts, {
            iframe: {
              preload: false,
              attr: {
                scrolling: "no"
              }
            }
          });
        }

        $.extend(item, {
          type: type,
          src: url,
          origSrc: item.src,
          contentSource: provider,
          contentType: type === "image" ? "image" : provider == "gmap_place" || provider == "gmap_search" ? "map" : "video"
        });
      } else if (url) {
        item.type = item.opts.defaultType;
      }
    });

    // Load YouTube/Video API on request to detect when video finished playing
    var VideoAPILoader = {
      youtube: {
        src: "https://www.youtube.com/iframe_api",
        class: "YT",
        loading: false,
        loaded: false
      },

      vimeo: {
        src: "https://player.vimeo.com/api/player.js",
        class: "Vimeo",
        loading: false,
        loaded: false
      },

      load: function(vendor) {
        var _this = this,
          script;

        if (this[vendor].loaded) {
          setTimeout(function() {
            _this.done(vendor);
          });
          return;
        }

        if (this[vendor].loading) {
          return;
        }

        this[vendor].loading = true;

        script = document.createElement("script");
        script.type = "text/javascript";
        script.src = this[vendor].src;

        if (vendor === "youtube") {
          window.onYouTubeIframeAPIReady = function() {
            _this[vendor].loaded = true;
            _this.done(vendor);
          };
        } else {
          script.onload = function() {
            _this[vendor].loaded = true;
            _this.done(vendor);
          };
        }

        document.body.appendChild(script);
      },
      done: function(vendor) {
        var instance, $el, player;

        if (vendor === "youtube") {
          delete window.onYouTubeIframeAPIReady;
        }

        instance = $.fancybox.getInstance();

        if (instance) {
          $el = instance.current.$content.find("iframe");

          if (vendor === "youtube" && YT !== undefined && YT) {
            player = new YT.Player($el.attr("id"), {
              events: {
                onStateChange: function(e) {
                  if (e.data == 0) {
                    instance.next();
                  }
                }
              }
            });
          } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
            player = new Vimeo.Player($el);

            player.on("ended", function() {
              instance.next();
            });
          }
        }
      }
    };

    $(document).on({
      "afterShow.fb": function(e, instance, current) {
        if (instance.group.length > 1 && (current.contentSource === "youtube" || current.contentSource === "vimeo")) {
          VideoAPILoader.load(current.contentSource);
        }
      }
    });
  })(jQuery);

  // ==========================================================================
  //
  // Guestures
  // Adds touch guestures, handles click and tap events
  //
  // ==========================================================================
  (function(window, document, $) {
    "use strict";

    var requestAFrame = (function() {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
        function(callback) {
          return window.setTimeout(callback, 1000 / 60);
        }
      );
    })();

    var cancelAFrame = (function() {
      return (
        window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.oCancelAnimationFrame ||
        function(id) {
          window.clearTimeout(id);
        }
      );
    })();

    var getPointerXY = function(e) {
      var result = [];

      e = e.originalEvent || e || window.e;
      e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];

      for (var key in e) {
        if (e[key].pageX) {
          result.push({
            x: e[key].pageX,
            y: e[key].pageY
          });
        } else if (e[key].clientX) {
          result.push({
            x: e[key].clientX,
            y: e[key].clientY
          });
        }
      }

      return result;
    };

    var distance = function(point2, point1, what) {
      if (!point1 || !point2) {
        return 0;
      }

      if (what === "x") {
        return point2.x - point1.x;
      } else if (what === "y") {
        return point2.y - point1.y;
      }

      return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    };

    var isClickable = function($el) {
      if (
        $el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') ||
        $.isFunction($el.get(0).onclick) ||
        $el.data("selectable")
      ) {
        return true;
      }

      // Check for attributes like data-fancybox-next or data-fancybox-close
      for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
        if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
          return true;
        }
      }

      return false;
    };

    var hasScrollbars = function(el) {
      var overflowY = window.getComputedStyle(el)["overflow-y"],
        overflowX = window.getComputedStyle(el)["overflow-x"],
        vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight,
        horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;

      return vertical || horizontal;
    };

    var isScrollable = function($el) {
      var rez = false;

      while (true) {
        rez = hasScrollbars($el.get(0));

        if (rez) {
          break;
        }

        $el = $el.parent();

        if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
          break;
        }
      }

      return rez;
    };

    var Guestures = function(instance) {
      var self = this;

      self.instance = instance;

      self.$bg = instance.$refs.bg;
      self.$stage = instance.$refs.stage;
      self.$container = instance.$refs.container;

      self.destroy();

      self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
    };

    Guestures.prototype.destroy = function() {
      var self = this;

      self.$container.off(".fb.touch");

      $(document).off(".fb.touch");

      if (self.requestId) {
        cancelAFrame(self.requestId);
        self.requestId = null;
      }

      if (self.tapped) {
        clearTimeout(self.tapped);
        self.tapped = null;
      }
    };

    Guestures.prototype.ontouchstart = function(e) {
      var self = this,
        $target = $(e.target),
        instance = self.instance,
        current = instance.current,
        $slide = current.$slide,
        $content = current.$content,
        isTouchDevice = e.type == "touchstart";

      // Do not respond to both (touch and mouse) events
      if (isTouchDevice) {
        self.$container.off("mousedown.fb.touch");
      }

      // Ignore right click
      if (e.originalEvent && e.originalEvent.button == 2) {
        return;
      }

      // Ignore taping on links, buttons, input elements
      if (!$slide.length || !$target.length || isClickable($target) || isClickable($target.parent())) {
        return;
      }
      // Ignore clicks on the scrollbar
      if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
        return;
      }

      // Ignore clicks while zooming or closing
      if (!current || instance.isAnimating || current.$slide.hasClass("fancybox-animated")) {
        e.stopPropagation();
        e.preventDefault();

        return;
      }

      self.realPoints = self.startPoints = getPointerXY(e);

      if (!self.startPoints.length) {
        return;
      }

      // Allow other scripts to catch touch event if "touch" is set to false
      if (current.touch) {
        e.stopPropagation();
      }

      self.startEvent = e;

      self.canTap = true;
      self.$target = $target;
      self.$content = $content;
      self.opts = current.opts.touch;

      self.isPanning = false;
      self.isSwiping = false;
      self.isZooming = false;
      self.isScrolling = false;
      self.canPan = instance.canPan();

      self.startTime = new Date().getTime();
      self.distanceX = self.distanceY = self.distance = 0;

      self.canvasWidth = Math.round($slide[0].clientWidth);
      self.canvasHeight = Math.round($slide[0].clientHeight);

      self.contentLastPos = null;
      self.contentStartPos = $.fancybox.getTranslate(self.$content) || {top: 0, left: 0};
      self.sliderStartPos = $.fancybox.getTranslate($slide);

      // Since position will be absolute, but we need to make it relative to the stage
      self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);

      self.sliderStartPos.top -= self.stagePos.top;
      self.sliderStartPos.left -= self.stagePos.left;

      self.contentStartPos.top -= self.stagePos.top;
      self.contentStartPos.left -= self.stagePos.left;

      $(document)
        .off(".fb.touch")
        .on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend"))
        .on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self, "ontouchmove"));

      if ($.fancybox.isMobile) {
        document.addEventListener("scroll", self.onscroll, true);
      }

      // Skip if clicked outside the sliding area
      if (!(self.opts || self.canPan) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
        if ($target.is(".fancybox-image")) {
          e.preventDefault();
        }

        if (!($.fancybox.isMobile && $target.hasClass("fancybox-caption"))) {
          return;
        }
      }

      self.isScrollable = isScrollable($target) || isScrollable($target.parent());

      // Check if element is scrollable and try to prevent default behavior (scrolling)
      if (!($.fancybox.isMobile && self.isScrollable)) {
        e.preventDefault();
      }

      // One finger or mouse click - swipe or pan an image
      if (self.startPoints.length === 1 || current.hasError) {
        if (self.canPan) {
          $.fancybox.stop(self.$content);

          self.isPanning = true;
        } else {
          self.isSwiping = true;
        }

        self.$container.addClass("fancybox-is-grabbing");
      }

      // Two fingers - zoom image
      if (self.startPoints.length === 2 && current.type === "image" && (current.isLoaded || current.$ghost)) {
        self.canTap = false;
        self.isSwiping = false;
        self.isPanning = false;

        self.isZooming = true;

        $.fancybox.stop(self.$content);

        self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
        self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();

        self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
        self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;

        self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
      }
    };

    Guestures.prototype.onscroll = function(e) {
      var self = this;

      self.isScrolling = true;

      document.removeEventListener("scroll", self.onscroll, true);
    };

    Guestures.prototype.ontouchmove = function(e) {
      var self = this;

      // Make sure user has not released over iframe or disabled element
      if (e.originalEvent.buttons !== undefined && e.originalEvent.buttons === 0) {
        self.ontouchend(e);
        return;
      }

      if (self.isScrolling) {
        self.canTap = false;
        return;
      }

      self.newPoints = getPointerXY(e);

      if (!(self.opts || self.canPan) || !self.newPoints.length || !self.newPoints.length) {
        return;
      }

      if (!(self.isSwiping && self.isSwiping === true)) {
        e.preventDefault();
      }

      self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
      self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");

      self.distance = distance(self.newPoints[0], self.startPoints[0]);

      // Skip false ontouchmove events (Chrome)
      if (self.distance > 0) {
        if (self.isSwiping) {
          self.onSwipe(e);
        } else if (self.isPanning) {
          self.onPan();
        } else if (self.isZooming) {
          self.onZoom();
        }
      }
    };

    Guestures.prototype.onSwipe = function(e) {
      var self = this,
        instance = self.instance,
        swiping = self.isSwiping,
        left = self.sliderStartPos.left || 0,
        angle;

      // If direction is not yet determined
      if (swiping === true) {
        // We need at least 10px distance to correctly calculate an angle
        if (Math.abs(self.distance) > 10) {
          self.canTap = false;

          if (instance.group.length < 2 && self.opts.vertical) {
            self.isSwiping = "y";
          } else if (instance.isDragging || self.opts.vertical === false || (self.opts.vertical === "auto" && $(window).width() > 800)) {
            self.isSwiping = "x";
          } else {
            angle = Math.abs((Math.atan2(self.distanceY, self.distanceX) * 180) / Math.PI);

            self.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
          }

          if (self.isSwiping === "y" && $.fancybox.isMobile && self.isScrollable) {
            self.isScrolling = true;

            return;
          }

          instance.isDragging = self.isSwiping;

          // Reset points to avoid jumping, because we dropped first swipes to calculate the angle
          self.startPoints = self.newPoints;

          $.each(instance.slides, function(index, slide) {
            var slidePos, stagePos;

            $.fancybox.stop(slide.$slide);

            slidePos = $.fancybox.getTranslate(slide.$slide);
            stagePos = $.fancybox.getTranslate(instance.$refs.stage);

            slide.$slide
              .css({
                transform: "",
                opacity: "",
                "transition-duration": ""
              })
              .removeClass("fancybox-animated")
              .removeClass(function(index, className) {
                return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
              });

            if (slide.pos === instance.current.pos) {
              self.sliderStartPos.top = slidePos.top - stagePos.top;
              self.sliderStartPos.left = slidePos.left - stagePos.left;
            }

            $.fancybox.setTranslate(slide.$slide, {
              top: slidePos.top - stagePos.top,
              left: slidePos.left - stagePos.left
            });
          });

          // Stop slideshow
          if (instance.SlideShow && instance.SlideShow.isActive) {
            instance.SlideShow.stop();
          }
        }

        return;
      }

      // Sticky edges
      if (swiping == "x") {
        if (
          self.distanceX > 0 &&
          (self.instance.group.length < 2 || (self.instance.current.index === 0 && !self.instance.current.opts.loop))
        ) {
          left = left + Math.pow(self.distanceX, 0.8);
        } else if (
          self.distanceX < 0 &&
          (self.instance.group.length < 2 ||
            (self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop))
        ) {
          left = left - Math.pow(-self.distanceX, 0.8);
        } else {
          left = left + self.distanceX;
        }
      }

      self.sliderLastPos = {
        top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
        left: left
      };

      if (self.requestId) {
        cancelAFrame(self.requestId);

        self.requestId = null;
      }

      self.requestId = requestAFrame(function() {
        if (self.sliderLastPos) {
          $.each(self.instance.slides, function(index, slide) {
            var pos = slide.pos - self.instance.currPos;

            $.fancybox.setTranslate(slide.$slide, {
              top: self.sliderLastPos.top,
              left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
            });
          });

          self.$container.addClass("fancybox-is-sliding");
        }
      });
    };

    Guestures.prototype.onPan = function() {
      var self = this;

      // Prevent accidental movement (sometimes, when tapping casually, finger can move a bit)
      if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
        self.startPoints = self.newPoints;
        return;
      }

      self.canTap = false;

      self.contentLastPos = self.limitMovement();

      if (self.requestId) {
        cancelAFrame(self.requestId);
      }

      self.requestId = requestAFrame(function() {
        $.fancybox.setTranslate(self.$content, self.contentLastPos);
      });
    };

    // Make panning sticky to the edges
    Guestures.prototype.limitMovement = function() {
      var self = this;

      var canvasWidth = self.canvasWidth;
      var canvasHeight = self.canvasHeight;

      var distanceX = self.distanceX;
      var distanceY = self.distanceY;

      var contentStartPos = self.contentStartPos;

      var currentOffsetX = contentStartPos.left;
      var currentOffsetY = contentStartPos.top;

      var currentWidth = contentStartPos.width;
      var currentHeight = contentStartPos.height;

      var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;

      if (currentWidth > canvasWidth) {
        newOffsetX = currentOffsetX + distanceX;
      } else {
        newOffsetX = currentOffsetX;
      }

      newOffsetY = currentOffsetY + distanceY;

      // Slow down proportionally to traveled distance
      minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
      minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);

      maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
      maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);

      //   ->
      if (distanceX > 0 && newOffsetX > minTranslateX) {
        newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
      }

      //    <-
      if (distanceX < 0 && newOffsetX < maxTranslateX) {
        newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
      }

      //   \/
      if (distanceY > 0 && newOffsetY > minTranslateY) {
        newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
      }

      //   /\
      if (distanceY < 0 && newOffsetY < maxTranslateY) {
        newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
      }

      return {
        top: newOffsetY,
        left: newOffsetX
      };
    };

    Guestures.prototype.limitPosition = function(newOffsetX, newOffsetY, newWidth, newHeight) {
      var self = this;

      var canvasWidth = self.canvasWidth;
      var canvasHeight = self.canvasHeight;

      if (newWidth > canvasWidth) {
        newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
        newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
      } else {
        // Center horizontally
        newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
      }

      if (newHeight > canvasHeight) {
        newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
        newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
      } else {
        // Center vertically
        newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
      }

      return {
        top: newOffsetY,
        left: newOffsetX
      };
    };

    Guestures.prototype.onZoom = function() {
      var self = this;

      // Calculate current distance between points to get pinch ratio and new width and height
      var contentStartPos = self.contentStartPos;

      var currentWidth = contentStartPos.width;
      var currentHeight = contentStartPos.height;

      var currentOffsetX = contentStartPos.left;
      var currentOffsetY = contentStartPos.top;

      var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);

      var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;

      var newWidth = Math.floor(currentWidth * pinchRatio);
      var newHeight = Math.floor(currentHeight * pinchRatio);

      // This is the translation due to pinch-zooming
      var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
      var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;

      // Point between the two touches
      var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
      var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();

      // And this is the translation due to translation of the centerpoint
      // between the two fingers
      var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
      var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;

      // The new offset is the old/current one plus the total translation
      var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
      var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);

      var newPos = {
        top: newOffsetY,
        left: newOffsetX,
        scaleX: pinchRatio,
        scaleY: pinchRatio
      };

      self.canTap = false;

      self.newWidth = newWidth;
      self.newHeight = newHeight;

      self.contentLastPos = newPos;

      if (self.requestId) {
        cancelAFrame(self.requestId);
      }

      self.requestId = requestAFrame(function() {
        $.fancybox.setTranslate(self.$content, self.contentLastPos);
      });
    };

    Guestures.prototype.ontouchend = function(e) {
      var self = this;

      var swiping = self.isSwiping;
      var panning = self.isPanning;
      var zooming = self.isZooming;
      var scrolling = self.isScrolling;

      self.endPoints = getPointerXY(e);
      self.dMs = Math.max(new Date().getTime() - self.startTime, 1);

      self.$container.removeClass("fancybox-is-grabbing");

      $(document).off(".fb.touch");

      document.removeEventListener("scroll", self.onscroll, true);

      if (self.requestId) {
        cancelAFrame(self.requestId);

        self.requestId = null;
      }

      self.isSwiping = false;
      self.isPanning = false;
      self.isZooming = false;
      self.isScrolling = false;

      self.instance.isDragging = false;

      if (self.canTap) {
        return self.onTap(e);
      }

      self.speed = 100;

      // Speed in px/ms
      self.velocityX = (self.distanceX / self.dMs) * 0.5;
      self.velocityY = (self.distanceY / self.dMs) * 0.5;

      if (panning) {
        self.endPanning();
      } else if (zooming) {
        self.endZooming();
      } else {
        self.endSwiping(swiping, scrolling);
      }

      return;
    };

    Guestures.prototype.endSwiping = function(swiping, scrolling) {
      var self = this,
        ret = false,
        len = self.instance.group.length,
        distanceX = Math.abs(self.distanceX),
        canAdvance = swiping == "x" && len > 1 && ((self.dMs > 130 && distanceX > 10) || distanceX > 50),
        speedX = 300;

      self.sliderLastPos = null;

      // Close if swiped vertically / navigate if horizontally
      if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
        // Continue vertical movement
        $.fancybox.animate(
          self.instance.current.$slide,
          {
            top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
            opacity: 0
          },
          200
        );
        ret = self.instance.close(true, 250);
      } else if (canAdvance && self.distanceX > 0) {
        ret = self.instance.previous(speedX);
      } else if (canAdvance && self.distanceX < 0) {
        ret = self.instance.next(speedX);
      }

      if (ret === false && (swiping == "x" || swiping == "y")) {
        self.instance.centerSlide(200);
      }

      self.$container.removeClass("fancybox-is-sliding");
    };

    // Limit panning from edges
    // ========================
    Guestures.prototype.endPanning = function() {
      var self = this,
        newOffsetX,
        newOffsetY,
        newPos;

      if (!self.contentLastPos) {
        return;
      }

      if (self.opts.momentum === false || self.dMs > 350) {
        newOffsetX = self.contentLastPos.left;
        newOffsetY = self.contentLastPos.top;
      } else {
        // Continue movement
        newOffsetX = self.contentLastPos.left + self.velocityX * 500;
        newOffsetY = self.contentLastPos.top + self.velocityY * 500;
      }

      newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);

      newPos.width = self.contentStartPos.width;
      newPos.height = self.contentStartPos.height;

      $.fancybox.animate(self.$content, newPos, 330);
    };

    Guestures.prototype.endZooming = function() {
      var self = this;

      var current = self.instance.current;

      var newOffsetX, newOffsetY, newPos, reset;

      var newWidth = self.newWidth;
      var newHeight = self.newHeight;

      if (!self.contentLastPos) {
        return;
      }

      newOffsetX = self.contentLastPos.left;
      newOffsetY = self.contentLastPos.top;

      reset = {
        top: newOffsetY,
        left: newOffsetX,
        width: newWidth,
        height: newHeight,
        scaleX: 1,
        scaleY: 1
      };

      // Reset scalex/scaleY values; this helps for perfomance and does not break animation
      $.fancybox.setTranslate(self.$content, reset);

      if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
        self.instance.scaleToFit(150);
      } else if (newWidth > current.width || newHeight > current.height) {
        self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
      } else {
        newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);

        $.fancybox.animate(self.$content, newPos, 150);
      }
    };

    Guestures.prototype.onTap = function(e) {
      var self = this;
      var $target = $(e.target);

      var instance = self.instance;
      var current = instance.current;

      var endPoints = (e && getPointerXY(e)) || self.startPoints;

      var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
      var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;

      var where;

      var process = function(prefix) {
        var action = current.opts[prefix];

        if ($.isFunction(action)) {
          action = action.apply(instance, [current, e]);
        }

        if (!action) {
          return;
        }

        switch (action) {
          case "close":
            instance.close(self.startEvent);

            break;

          case "toggleControls":
            instance.toggleControls();

            break;

          case "next":
            instance.next();

            break;

          case "nextOrClose":
            if (instance.group.length > 1) {
              instance.next();
            } else {
              instance.close(self.startEvent);
            }

            break;

          case "zoom":
            if (current.type == "image" && (current.isLoaded || current.$ghost)) {
              if (instance.canPan()) {
                instance.scaleToFit();
              } else if (instance.isScaledDown()) {
                instance.scaleToActual(tapX, tapY);
              } else if (instance.group.length < 2) {
                instance.close(self.startEvent);
              }
            }

            break;
        }
      };

      // Ignore right click
      if (e.originalEvent && e.originalEvent.button == 2) {
        return;
      }

      // Skip if clicked on the scrollbar
      if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
        return;
      }

      // Check where is clicked
      if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
        where = "Outside";
      } else if ($target.is(".fancybox-slide")) {
        where = "Slide";
      } else if (
        instance.current.$content &&
        instance.current.$content
          .find($target)
          .addBack()
          .filter($target).length
      ) {
        where = "Content";
      } else {
        return;
      }

      // Check if this is a double tap
      if (self.tapped) {
        // Stop previously created single tap
        clearTimeout(self.tapped);
        self.tapped = null;

        // Skip if distance between taps is too big
        if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
          return this;
        }

        // OK, now we assume that this is a double-tap
        process("dblclick" + where);
      } else {
        // Single tap will be processed if user has not clicked second time within 300ms
        // or there is no need to wait for double-tap
        self.tapX = tapX;
        self.tapY = tapY;

        if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
          self.tapped = setTimeout(function() {
            self.tapped = null;

            if (!instance.isAnimating) {
              process("click" + where);
            }
          }, 500);
        } else {
          process("click" + where);
        }
      }

      return this;
    };

    $(document)
      .on("onActivate.fb", function(e, instance) {
        if (instance && !instance.Guestures) {
          instance.Guestures = new Guestures(instance);
        }
      })
      .on("beforeClose.fb", function(e, instance) {
        if (instance && instance.Guestures) {
          instance.Guestures.destroy();
        }
      });
  })(window, document, jQuery);

  // ==========================================================================
  //
  // SlideShow
  // Enables slideshow functionality
  //
  // Example of usage:
  // $.fancybox.getInstance().SlideShow.start()
  //
  // ==========================================================================
  (function(document, $) {
    "use strict";

    $.extend(true, $.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' +
          "</button>"
      },
      slideShow: {
        autoStart: false,
        speed: 3000,
        progress: true
      }
    });

    var SlideShow = function(instance) {
      this.instance = instance;
      this.init();
    };

    $.extend(SlideShow.prototype, {
      timer: null,
      isActive: false,
      $button: null,

      init: function() {
        var self = this,
          instance = self.instance,
          opts = instance.group[instance.currIndex].opts.slideShow;

        self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
          self.toggle();
        });

        if (instance.group.length < 2 || !opts) {
          self.$button.hide();
        } else if (opts.progress) {
          self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
        }
      },

      set: function(force) {
        var self = this,
          instance = self.instance,
          current = instance.current;

        // Check if reached last element
        if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
          if (self.isActive && current.contentType !== "video") {
            if (self.$progress) {
              $.fancybox.animate(self.$progress.show(), {scaleX: 1}, current.opts.slideShow.speed);
            }

            self.timer = setTimeout(function() {
              if (!instance.current.opts.loop && instance.current.index == instance.group.length - 1) {
                instance.jumpTo(0);
              } else {
                instance.next();
              }
            }, current.opts.slideShow.speed);
          }
        } else {
          self.stop();
          instance.idleSecondsCounter = 0;
          instance.showControls();
        }
      },

      clear: function() {
        var self = this;

        clearTimeout(self.timer);

        self.timer = null;

        if (self.$progress) {
          self.$progress.removeAttr("style").hide();
        }
      },

      start: function() {
        var self = this,
          current = self.instance.current;

        if (current) {
          self.$button
            .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_STOP)
            .removeClass("fancybox-button--play")
            .addClass("fancybox-button--pause");

          self.isActive = true;

          if (current.isComplete) {
            self.set(true);
          }

          self.instance.trigger("onSlideShowChange", true);
        }
      },

      stop: function() {
        var self = this,
          current = self.instance.current;

        self.clear();

        self.$button
          .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_START)
          .removeClass("fancybox-button--pause")
          .addClass("fancybox-button--play");

        self.isActive = false;

        self.instance.trigger("onSlideShowChange", false);

        if (self.$progress) {
          self.$progress.removeAttr("style").hide();
        }
      },

      toggle: function() {
        var self = this;

        if (self.isActive) {
          self.stop();
        } else {
          self.start();
        }
      }
    });

    $(document).on({
      "onInit.fb": function(e, instance) {
        if (instance && !instance.SlideShow) {
          instance.SlideShow = new SlideShow(instance);
        }
      },

      "beforeShow.fb": function(e, instance, current, firstRun) {
        var SlideShow = instance && instance.SlideShow;

        if (firstRun) {
          if (SlideShow && current.opts.slideShow.autoStart) {
            SlideShow.start();
          }
        } else if (SlideShow && SlideShow.isActive) {
          SlideShow.clear();
        }
      },

      "afterShow.fb": function(e, instance, current) {
        var SlideShow = instance && instance.SlideShow;

        if (SlideShow && SlideShow.isActive) {
          SlideShow.set();
        }
      },

      "afterKeydown.fb": function(e, instance, current, keypress, keycode) {
        var SlideShow = instance && instance.SlideShow;

        // "P" or Spacebar
        if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
          keypress.preventDefault();

          SlideShow.toggle();
        }
      },

      "beforeClose.fb onDeactivate.fb": function(e, instance) {
        var SlideShow = instance && instance.SlideShow;

        if (SlideShow) {
          SlideShow.stop();
        }
      }
    });

    // Page Visibility API to pause slideshow when window is not active
    $(document).on("visibilitychange", function() {
      var instance = $.fancybox.getInstance(),
        SlideShow = instance && instance.SlideShow;

      if (SlideShow && SlideShow.isActive) {
        if (document.hidden) {
          SlideShow.clear();
        } else {
          SlideShow.set();
        }
      }
    });
  })(document, jQuery);

  // ==========================================================================
  //
  // FullScreen
  // Adds fullscreen functionality
  //
  // ==========================================================================
  (function(document, $) {
    "use strict";

    // Collection of methods supported by user browser
    var fn = (function() {
      var fnMap = [
        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
        // new WebKit
        [
          "webkitRequestFullscreen",
          "webkitExitFullscreen",
          "webkitFullscreenElement",
          "webkitFullscreenEnabled",
          "webkitfullscreenchange",
          "webkitfullscreenerror"
        ],
        // old WebKit (Safari 5.1)
        [
          "webkitRequestFullScreen",
          "webkitCancelFullScreen",
          "webkitCurrentFullScreenElement",
          "webkitCancelFullScreen",
          "webkitfullscreenchange",
          "webkitfullscreenerror"
        ],
        [
          "mozRequestFullScreen",
          "mozCancelFullScreen",
          "mozFullScreenElement",
          "mozFullScreenEnabled",
          "mozfullscreenchange",
          "mozfullscreenerror"
        ],
        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
      ];

      var ret = {};

      for (var i = 0; i < fnMap.length; i++) {
        var val = fnMap[i];

        if (val && val[1] in document) {
          for (var j = 0; j < val.length; j++) {
            ret[fnMap[0][j]] = val[j];
          }

          return ret;
        }
      }

      return false;
    })();

    if (fn) {
      var FullScreen = {
        request: function(elem) {
          elem = elem || document.documentElement;

          elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
        },
        exit: function() {
          document[fn.exitFullscreen]();
        },
        toggle: function(elem) {
          elem = elem || document.documentElement;

          if (this.isFullscreen()) {
            this.exit();
          } else {
            this.request(elem);
          }
        },
        isFullscreen: function() {
          return Boolean(document[fn.fullscreenElement]);
        },
        enabled: function() {
          return Boolean(document[fn.fullscreenEnabled]);
        }
      };

      $.extend(true, $.fancybox.defaults, {
        btnTpl: {
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' +
            "</button>"
        },
        fullScreen: {
          autoStart: false
        }
      });

      $(document).on(fn.fullscreenchange, function() {
        var isFullscreen = FullScreen.isFullscreen(),
          instance = $.fancybox.getInstance();

        if (instance) {
          // If image is zooming, then force to stop and reposition properly
          if (instance.current && instance.current.type === "image" && instance.isAnimating) {
            instance.current.$content.css("transition", "none");

            instance.isAnimating = false;

            instance.update(true, true, 0);
          }

          instance.trigger("onFullscreenChange", isFullscreen);

          instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);

          instance.$refs.toolbar
            .find("[data-fancybox-fullscreen]")
            .toggleClass("fancybox-button--fsenter", !isFullscreen)
            .toggleClass("fancybox-button--fsexit", isFullscreen);
        }
      });
    }

    $(document).on({
      "onInit.fb": function(e, instance) {
        var $container;

        if (!fn) {
          instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();

          return;
        }

        if (instance && instance.group[instance.currIndex].opts.fullScreen) {
          $container = instance.$refs.container;

          $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(e) {
            e.stopPropagation();
            e.preventDefault();

            FullScreen.toggle();
          });

          if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
            FullScreen.request();
          }

          // Expose API
          instance.FullScreen = FullScreen;
        } else if (instance) {
          instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
        }
      },

      "afterKeydown.fb": function(e, instance, current, keypress, keycode) {
        // "F"
        if (instance && instance.FullScreen && keycode === 70) {
          keypress.preventDefault();

          instance.FullScreen.toggle();
        }
      },

      "beforeClose.fb": function(e, instance) {
        if (instance && instance.FullScreen && instance.$refs.container.hasClass("fancybox-is-fullscreen")) {
          FullScreen.exit();
        }
      }
    });
  })(document, jQuery);

  // ==========================================================================
  //
  // Thumbs
  // Displays thumbnails in a grid
  //
  // ==========================================================================
  (function(document, $) {
    "use strict";

    var CLASS = "fancybox-thumbs",
      CLASS_ACTIVE = CLASS + "-active";

    // Make sure there are default values
    $.fancybox.defaults = $.extend(
      true,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' +
            "</button>"
        },
        thumbs: {
          autoStart: false, // Display thumbnails on opening
          hideOnClose: true, // Hide thumbnail grid when closing animation starts
          parentEl: ".fancybox-container", // Container is injected into this element
          axis: "y" // Vertical (y) or horizontal (x) scrolling
        }
      },
      $.fancybox.defaults
    );

    var FancyThumbs = function(instance) {
      this.init(instance);
    };

    $.extend(FancyThumbs.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: false,
      isActive: false,

      init: function(instance) {
        var self = this,
          group = instance.group,
          enabled = 0;

        self.instance = instance;
        self.opts = group[instance.currIndex].opts.thumbs;

        instance.Thumbs = self;

        self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");

        // Enable thumbs if at least two group items have thumbnails
        for (var i = 0, len = group.length; i < len; i++) {
          if (group[i].thumb) {
            enabled++;
          }

          if (enabled > 1) {
            break;
          }
        }

        if (enabled > 1 && !!self.opts) {
          self.$button.removeAttr("style").on("click", function() {
            self.toggle();
          });

          self.isActive = true;
        } else {
          self.$button.hide();
        }
      },

      create: function() {
        var self = this,
          instance = self.instance,
          parentEl = self.opts.parentEl,
          list = [],
          src;

        if (!self.$grid) {
          // Create main element
          self.$grid = $('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(
            instance.$refs.container
              .find(parentEl)
              .addBack()
              .filter(parentEl)
          );

          // Add "click" event that performs gallery navigation
          self.$grid.on("click", "a", function() {
            instance.jumpTo($(this).attr("data-index"));
          });
        }

        // Build the list
        if (!self.$list) {
          self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid);
        }

        $.each(instance.group, function(i, item) {
          src = item.thumb;

          if (!src && item.type === "image") {
            src = item.src;
          }

          list.push(
            '<a href="javascript:;" tabindex="0" data-index="' +
              i +
              '"' +
              (src && src.length ? ' style="background-image:url(' + src + ')"' : 'class="fancybox-thumbs-missing"') +
              "></a>"
          );
        });

        self.$list[0].innerHTML = list.join("");

        if (self.opts.axis === "x") {
          // Set fixed width for list element to enable horizontal scrolling
          self.$list.width(
            parseInt(self.$grid.css("padding-right"), 10) +
              instance.group.length *
                self.$list
                  .children()
                  .eq(0)
                  .outerWidth(true)
          );
        }
      },

      focus: function(duration) {
        var self = this,
          $list = self.$list,
          $grid = self.$grid,
          thumb,
          thumbPos;

        if (!self.instance.current) {
          return;
        }

        thumb = $list
          .children()
          .removeClass(CLASS_ACTIVE)
          .filter('[data-index="' + self.instance.current.index + '"]')
          .addClass(CLASS_ACTIVE);

        thumbPos = thumb.position();

        // Check if need to scroll to make current thumb visible
        if (self.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
          $list.stop().animate(
            {
              scrollTop: $list.scrollTop() + thumbPos.top
            },
            duration
          );
        } else if (
          self.opts.axis === "x" &&
          (thumbPos.left < $grid.scrollLeft() || thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))
        ) {
          $list
            .parent()
            .stop()
            .animate(
              {
                scrollLeft: thumbPos.left
              },
              duration
            );
        }
      },

      update: function() {
        var that = this;
        that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);

        if (that.isVisible) {
          if (!that.$grid) {
            that.create();
          }

          that.instance.trigger("onThumbsShow");

          that.focus(0);
        } else if (that.$grid) {
          that.instance.trigger("onThumbsHide");
        }

        // Update content position
        that.instance.update();
      },

      hide: function() {
        this.isVisible = false;
        this.update();
      },

      show: function() {
        this.isVisible = true;
        this.update();
      },

      toggle: function() {
        this.isVisible = !this.isVisible;
        this.update();
      }
    });

    $(document).on({
      "onInit.fb": function(e, instance) {
        var Thumbs;

        if (instance && !instance.Thumbs) {
          Thumbs = new FancyThumbs(instance);

          if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
            Thumbs.show();
          }
        }
      },

      "beforeShow.fb": function(e, instance, item, firstRun) {
        var Thumbs = instance && instance.Thumbs;

        if (Thumbs && Thumbs.isVisible) {
          Thumbs.focus(firstRun ? 0 : 250);
        }
      },

      "afterKeydown.fb": function(e, instance, current, keypress, keycode) {
        var Thumbs = instance && instance.Thumbs;

        // "G"
        if (Thumbs && Thumbs.isActive && keycode === 71) {
          keypress.preventDefault();

          Thumbs.toggle();
        }
      },

      "beforeClose.fb": function(e, instance) {
        var Thumbs = instance && instance.Thumbs;

        if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
          Thumbs.$grid.hide();
        }
      }
    });
  })(document, jQuery);

  //// ==========================================================================
  //
  // Share
  // Displays simple form for sharing current url
  //
  // ==========================================================================
  (function(document, $) {
    "use strict";

    $.extend(true, $.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' +
          "</button>"
      },
      share: {
        url: function(instance, item) {
          return (
            (!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location
          );
        },
        tpl:
          '<div class="fancybox-share">' +
          "<h1>{{SHARE}}</h1>" +
          "<p>" +
          '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' +
          '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' +
          "<span>Facebook</span>" +
          "</a>" +
          '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' +
          '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' +
          "<span>Twitter</span>" +
          "</a>" +
          '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' +
          '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' +
          "<span>Pinterest</span>" +
          "</a>" +
          "</p>" +
          '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' +
          "</div>"
      }
    });

    function escapeHtml(string) {
      var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
      };

      return String(string).replace(/[&<>"'`=\/]/g, function(s) {
        return entityMap[s];
      });
    }

    $(document).on("click", "[data-fancybox-share]", function() {
      var instance = $.fancybox.getInstance(),
        current = instance.current || null,
        url,
        tpl;

      if (!current) {
        return;
      }

      if ($.type(current.opts.share.url) === "function") {
        url = current.opts.share.url.apply(current, [instance, current]);
      }

      tpl = current.opts.share.tpl
        .replace(/\{\{media\}\}/g, current.type === "image" ? encodeURIComponent(current.src) : "")
        .replace(/\{\{url\}\}/g, encodeURIComponent(url))
        .replace(/\{\{url_raw\}\}/g, escapeHtml(url))
        .replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()) : "");

      $.fancybox.open({
        src: instance.translate(instance, tpl),
        type: "html",
        opts: {
          touch: false,
          animationEffect: false,
          afterLoad: function(shareInstance, shareCurrent) {
            // Close self if parent instance is closing
            instance.$refs.container.one("beforeClose.fb", function() {
              shareInstance.close(null, 0);
            });

            // Opening links in a popup window
            shareCurrent.$content.find(".fancybox-share__button").click(function() {
              window.open(this.href, "Share", "width=550, height=450");
              return false;
            });
          },
          mobile: {
            autoFocus: false
          }
        }
      });
    });
  })(document, jQuery);

  // ==========================================================================
  //
  // Hash
  // Enables linking to each modal
  //
  // ==========================================================================
  (function(window, document, $) {
    "use strict";

    // Simple $.escapeSelector polyfill (for jQuery prior v3)
    if (!$.escapeSelector) {
      $.escapeSelector = function(sel) {
        var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        var fcssescape = function(ch, asCodePoint) {
          if (asCodePoint) {
            // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
            if (ch === "\0") {
              return "\uFFFD";
            }

            // Control characters and (dependent upon position) numbers get escaped as code points
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }

          // Other potentially-special ASCII characters get backslash-escaped
          return "\\" + ch;
        };

        return (sel + "").replace(rcssescape, fcssescape);
      };
    }

    // Get info about gallery name and current index from url
    function parseUrl() {
      var hash = window.location.hash.substr(1),
        rez = hash.split("-"),
        index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1,
        gallery = rez.join("-");

      return {
        hash: hash,
        /* Index is starting from 1 */
        index: index < 1 ? 1 : index,
        gallery: gallery
      };
    }

    // Trigger click evnt on links to open new fancyBox instance
    function triggerFromUrl(url) {
      if (url.gallery !== "") {
        // If we can find element matching 'data-fancybox' atribute,
        // then triggering click event should start fancyBox
        $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']")
          .eq(url.index - 1)
          .focus()
          .trigger("click.fb-start");
      }
    }

    // Get gallery name from current instance
    function getGalleryID(instance) {
      var opts, ret;

      if (!instance) {
        return false;
      }

      opts = instance.current ? instance.current.opts : instance.opts;
      ret = opts.hash || (opts.$orig ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger") : "");

      return ret === "" ? false : ret;
    }

    // Start when DOM becomes ready
    $(function() {
      // Check if user has disabled this module
      if ($.fancybox.defaults.hash === false) {
        return;
      }

      // Update hash when opening/closing fancyBox
      $(document).on({
        "onInit.fb": function(e, instance) {
          var url, gallery;

          if (instance.group[instance.currIndex].opts.hash === false) {
            return;
          }

          url = parseUrl();
          gallery = getGalleryID(instance);

          // Make sure gallery start index matches index from hash
          if (gallery && url.gallery && gallery == url.gallery) {
            instance.currIndex = url.index - 1;
          }
        },

        "beforeShow.fb": function(e, instance, current, firstRun) {
          var gallery;

          if (!current || current.opts.hash === false) {
            return;
          }

          // Check if need to update window hash
          gallery = getGalleryID(instance);

          if (!gallery) {
            return;
          }

          // Variable containing last hash value set by fancyBox
          // It will be used to determine if fancyBox needs to close after hash change is detected
          instance.currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : "");

          // If current hash is the same (this instance most likely is opened by hashchange), then do nothing
          if (window.location.hash === "#" + instance.currentHash) {
            return;
          }

          if (firstRun && !instance.origHash) {
            instance.origHash = window.location.hash;
          }

          if (instance.hashTimer) {
            clearTimeout(instance.hashTimer);
          }

          // Update hash
          instance.hashTimer = setTimeout(function() {
            if ("replaceState" in window.history) {
              window.history[firstRun ? "pushState" : "replaceState"](
                {},
                document.title,
                window.location.pathname + window.location.search + "#" + instance.currentHash
              );

              if (firstRun) {
                instance.hasCreatedHistory = true;
              }
            } else {
              window.location.hash = instance.currentHash;
            }

            instance.hashTimer = null;
          }, 300);
        },

        "beforeClose.fb": function(e, instance, current) {
          if (current.opts.hash === false) {
            return;
          }

          clearTimeout(instance.hashTimer);

          // Goto previous history entry
          if (instance.currentHash && instance.hasCreatedHistory) {
            window.history.back();
          } else if (instance.currentHash) {
            if ("replaceState" in window.history) {
              window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash || ""));
            } else {
              window.location.hash = instance.origHash;
            }
          }

          instance.currentHash = null;
        }
      });

      // Check if need to start/close after url has changed
      $(window).on("hashchange.fb", function() {
        var url = parseUrl(),
          fb = null;

        // Find last fancyBox instance that has "hash"
        $.each(
          $(".fancybox-container")
            .get()
            .reverse(),
          function(index, value) {
            var tmp = $(value).data("FancyBox");

            if (tmp && tmp.currentHash) {
              fb = tmp;
              return false;
            }
          }
        );

        if (fb) {
          // Now, compare hash values
          if (fb.currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && fb.currentHash == url.gallery)) {
            fb.currentHash = null;

            fb.close();
          }
        } else if (url.gallery !== "") {
          triggerFromUrl(url);
        }
      });

      // Check current hash and trigger click event on matching element to start fancyBox, if needed
      setTimeout(function() {
        if (!$.fancybox.getInstance()) {
          triggerFromUrl(parseUrl());
        }
      }, 50);
    });
  })(window, document, jQuery);

  // ==========================================================================
  //
  // Wheel
  // Basic mouse weheel support for gallery navigation
  //
  // ==========================================================================
  (function(document, $) {
    "use strict";

    var prevTime = new Date().getTime();

    $(document).on({
      "onInit.fb": function(e, instance, current) {
        instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(e) {
          var current = instance.current,
            currTime = new Date().getTime();

          if (instance.group.length < 2 || current.opts.wheel === false || (current.opts.wheel === "auto" && current.type !== "image")) {
            return;
          }

          e.preventDefault();
          e.stopPropagation();

          if (current.$slide.hasClass("fancybox-animated")) {
            return;
          }

          e = e.originalEvent || e;

          if (currTime - prevTime < 250) {
            return;
          }

          prevTime = currTime;

          instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]();
        });
      }
    });
  })(document, jQuery);

(function ($) {

	$.defineMedia('xs', '(min-width: 0px)')
	$.defineMedia('sm', '(min-width: 576px)')
	$.defineMedia('md', '(min-width: 768px)')
	$.defineMedia('lg', '(min-width: 992px)')
	$.defineMedia('xl', '(min-width: 1200px)')
	$.defineMedia('xxl', '(min-width: 1600px)')
	$.defineMedia('xxxl', '(min-width: 2100px)')

	/**
	 * Adds the ready body class when the document is loaded enough.
	 */

	$(document.body).on('loadedenough', function (e) {
		if (e.target == document.body) {
			$(document.body).addClass('ready')
			$(document.body).trigger('ready')
		}
	})

	/**
	 * Disables animations during previews
	 */

	if ($(document.body).hasClass('preview')) {

		$(document.body).addClass('ready')
		$(document.body).addClass('loaded')
		$(document.body).addClass('loaded-enough')
		$(document.body).addClass('visible-on-screen')

		$(document.body).trigger('ready')
	}

})(jQuery);

/**
 * Manages hash scrolling.
 * @since 1.0.0
 */
(function ($) {

	var find = function (string) {

		var anchor = (
			string &&
			string.length &&
			string.match(/^#[a-zA-Z0-9-+]+/i)
		) ? string : null

		if (anchor == null) {
			return null
		}

		var element = $(anchor)
		if (element.length == 0) {

			var anchors = window.__anchors__
			if (anchors) {

				for (var i = 0; i < anchors.length; i++) {

					var value = anchors[i].value
					var alias = anchors[i].alias

					if (!value.match(/^#/)) value = '#' + value
					if (!alias.match(/^#/)) alias = '#' + alias

					if (alias == string) {

						element = $(value)

						if (element.length) {
							break
						}
					}
				}
			}

			return element.length == 0 ? null : element
		}

		return element
	}

	$.attach('body', function (i, element) {
		setTimeout(function () {
			$.scrollToTarget(find(location.hash), 2000)
		}, 1000)
	})

	$.attach('a', function (i, element) {

		if (element.attr('data-fancybox')) {
			return
		}

		var target = find(element.attr('href'))
		if (target == null ||
			target.length == 0) {
			return
		}

		element.on('click', function (e) {
			e.preventDefault()
			$.scrollToTarget(target, 2000, function () {
				location.hash = element.attr('href')
			})
		})
	})

})(jQuery);

/**
 * Manages smooth scrolling
 * @since 1.0.0
 */
(function ($) {

	var html = $('html')

	html.toggleClass('smooth-scrolling', false)
	html.toggleClass('native-scrolling', true)

    /**
     * Add a smooth scrollbar on desktop browser. The smooth scrollbar is
     * removed when the screen is smaller than something like 1000 px
     */

	var scrollbar = null
	var container = document.querySelector('[data-scroller]')
	if (container == null) {
		return
	}

	var onSmoothScroll = function () {
		$(window).trigger('scroll')
	}

	var createScrollbars = function () {

		if (scrollbar) {
			return
		}

		scrollbar = Scrollbar.init(container)
		scrollbar.addListener(onSmoothScroll)

		html.toggleClass('smooth-scrolling', true)
		html.toggleClass('native-scrolling', false)

		$(container).trigger('attachscrollbar')
	}

	var destroyScrollbars = function () {

		if (scrollbar == null) {
			return
		}

		Scrollbar.destroyAll()
		scrollbar = null

		html.toggleClass('smooth-scrolling', false)
		html.toggleClass('native-scrolling', true)

		$(container).trigger('detachscrollbar')
	}

	$(window).on('mediaenter', function (e, media) {
		if (media == 'xl') {
			createScrollbars()
		}
	})

	$(window).on('medialeave', function (e, media) {
		if (media == 'xl') {
			destroyScrollbars()
		}
	})

	var oldScrollTop = $.fn.scrollTop
	var oldScrollLeft = $.fn.scrollLeft

	/**
	 * Override the scrollTop to return the main scroller's position.
	 * @function scrollTop
	 * @since 1.0.0
	 */
	$.fn.scrollTop = function (value) {

		if (this.get(0) == window) {

			var scrollbar = Scrollbar.get(container)
			if (scrollbar) {

				if (value == null) {
					return scrollbar.offset.y
				}

				scrollbar.setPosition(scrollbar.offset.x, value)
				return this
			}
		}

		return oldScrollTop.apply(this, arguments)
	}

	/**
	 * Override the scrollLeft to return the main scroller's position.
	 * @function scrollLeft
	 * @since 1.0.0
	 */
	$.fn.scrollLeft = function (value) {

		if (this.get(0) == window) {

			var scrollbar = Scrollbar.get(container)
			if (scrollbar) {

				if (value == null) {
					return scrollbar.offset.x
				}

				scrollbar.setPosition(value, scrollbar.offset.y)
				return this
			}
		}

		return oldScrollLeft.apply(this, arguments)
	}

    /**
     * Redispatch wheel events from fixed elements back to the
	 * scroller otherwise scrolling simply stops. This has to be done
	 * using vanilla javascript
     */

	var header = document.querySelector('.main-layout-header')
	if (header) {

		header.addEventListener('wheel', function (e) {

			var scrollbar = Scrollbar.get(container)
			if (scrollbar == null) {
				return
			}

			try {
				container.dispatchEvent(new WheelEvent(e.type, e))
			} catch (e) {

			}

		})
	}

})(jQuery);

(function ($) {

	/**
	 * Override the scrollLeft to return the main scroller's position.
	 * @function scrollLeft
	 * @since 1.0.0
	 */
	$.fn.bounds = function () {
		return this.get(0).getBoundingClientRect()
	}

	/**
	 * Override the scrollLeft to return the main scroller's position.
	 * @function scrollLeft
	 * @since 1.0.0
	 */
	$.fn.scrollWidth = function () {
		return this.get(0).scrollWidth
	}

	/**
	 * Override the scrollLeft to return the main scroller's position.
	 * @function scrollLeft
	 * @since 1.0.0
	 */
	$.fn.scrollHeight = function () {
		return this.get(0).scrollHeight
	}

	/**
	 * @function scrollToTarget
	 * @since 1.0.scrollIntoView
	 */
	$.scrollToTarget = function (target, duration, callback) {

		var offset = 0

		if (typeof target == 'number') {

			offset = target

		} else {

			target = $(target)

			if (target.length == 0) {
				return
			}

			offset = $(window).scrollTop() + target.bounds().top - parseInt(target.css('margin-top')) || 0
		}

		offset -= $('.main-layout-header-bar').outerHeight()
		offset -= $('.main-layout-header-nav').outerHeight()
		offset = Math.max(offset, 0)

		setTimeout(function () {
			callback && callback()
		}, duration)

		var container = document.querySelector('[data-scroller]')
		if (container) {

			var scrollbar = Scrollbar.get(container)
			if (scrollbar) {

				requestAnimationFrame(function () {
					scrollbar.scrollTo(0, offset, duration)
				})

				return
			}
		}

		$.scrollTo(offset, duration, { axis: 'y', })
	}

})(jQuery);

/**
 * IE 11 Min Height Flex Fix
 * @since 1.0.0
 */
(function ($) {

	if (window.navigator.userAgent.indexOf('Trident/7.0') > 0 ||
		window.navigator.userAgent.indexOf('Trident/6.0') > 0) {

		$('*:not(.no-ie-flex-fix').each(function (i, element) {

			element = $(element)

			var timeout = null
			var display = element.css('display')
			var minimum = parseInt(element.css('min-height'))

			if ((display === 'flex' || display === '-ms-flexbox') && minimum > 0) {

				var measure = function () {

					var minimum = parseInt(element.css('min-height'))

					if (minimum > 0) {

						element.css('height', '')

						var height = element.get(0).scrollHeight
						if (height < minimum) {
							height = minimum
						}

						element.css('height', height)

					} else {
						element.css('height', '')
					}

					timeout = null
				}

				$(window).on('resize', function () {
					if (timeout == null) {
						timeout = setTimeout(measure, 16)
					}
				})

				measure()
			}
		})
	}

})(jQuery);

(function ($) {

	$.attach('.home .main-layout-header-nav', function (i, nav) {

		var enabled = false

		var bar = $('.home .main-layout-header-bar')

		bar.toggleClass('main-layout-header-bar--light')

		var update = function () {

			if (enabled == false) {
				bar.toggleClass('main-layout-header-bar--light', false)
				nav.toggleClass('main-layout-header-nav--sticky', true)
				nav.css('transform', '')
				return
			}

			var barHeight = bar.height()
			var navHeight = nav.height()
			var winHeight = $(window).height()

			var scroll = $(window).scrollTop()

			var offset = 0
			var sticky = false

			var pos = winHeight - navHeight - scroll

			if (pos < barHeight) {
				offset = 0
				sticky = true
			} else {
				offset = scroll
				sticky = false
			}

			nav.css('transform', 'translateY(-' + offset + 'px)')

			nav.toggleClass('main-layout-header-nav--sticky', sticky)
			bar.toggleClass('main-layout-header-bar--light', !sticky)
		}

		var onScroll = function () {
			update()
		}

		var onResize = function () {
			update()
		}

		$(window).on('mediaenter', function (e, media) {
			if (media == 'lg') enabled = true
		})

		$(window).on('medialeave', function (e, media) {
			if (media == 'lg') enabled = false
		})

		$(window).on('resize', onResize)
		$(window).on('scroll', onScroll)

		update()
	})

	$.attach('.main-layout-header-nav', function (i, element) {

		var submenus = element.find('.sub-menu')
		var enabled = false

		var onResize = function (e) {

			if (enabled == false) {

				submenus.each(function (i, element) {
					element = $(element)
					element.css('width', '')
				})

				return false
			}

			var width = $(window).width()

			submenus.each(function (i, element) {

				element = $(element)
				element.css('width', '')

				var bounds = element.bounds()
				if (bounds.right > width) {
					element.css('width', element.outerWidth() - (bounds.right - width))
				}
			})
		}

		var onMouseEnter = function (e) {
			$('.main-layout-header-nav').css('height', $('.main-layout-header-nav-container').scrollHeight())
		}

		var onMouseLeave = function (e) {
			$('.main-layout-header-nav').css('height', '')
		}

		element.find('.main-layout-header-nav-menu > .primary-navigation-container > .menu > .menu-item')
			.on('mouseenter', onMouseEnter)
			.on('mouseleave', onMouseLeave)

		$(window).on('resize', onResize)
		$(window).on('load', onResize)

		$(window).on('mediaenter', function (e, media) {
			if (media == 'lg') {
				enabled = true
			}
		})

		$(window).on('medialeave', function (e, media) {
			if (media == 'lg') {
				enabled = false
			}
		})

		onResize()
	})

	$.attach('.main-layout-header-nav-menu', function (i, element) {



		var update = function () {
			element.toggleClass('main-layout-header-nav-menu--overflow', element.scrollHeight() > element.height())
		}

		$(window).on('resize', update)
		$(window).on('load', update)

	})

	$.attach('.main-layout-header-nav', function (i, element) {

		var body = $('body')

		var onShowClick = function () {
			body.toggleClass('primary-navigation-menu-open', true)
		}

		var onHideClick = function () {
			body.toggleClass('primary-navigation-menu-open', false)
		}

		element.find('.main-layout-header-nav-show').on('click', onShowClick)
		element.find('.main-layout-header-nav-hide').on('click', onHideClick)
	})

	$.attach('.main-layout-symbol', function (i, element) {

		var html = $('html')

		try {
			var block = $('#' + element.attr('data-block'))
		} catch (e) {
			console.log('Error')
			return
		}

		var translate = 0

		var disposition = element.attr('data-disposition')
		var offsetx = parseInt(element.attr('data-offset-x')) || 0
		var offsety = parseInt(element.attr('data-offset-y')) || 0
		var w = parseInt(element.attr('data-height')) || 0
		var h = parseInt(element.attr('data-width')) || 0

		if (w) element.css('width', (w / 16) + 'rem')
		if (h) element.css('height', (h / 16) + 'rem')

		if (block.length == 0) {
			return
		}

		var container = block.find('.container, .container-inset')
		if (container.length == 0) {
			container = block
		}

		var rem = function (px) {
			return px / parseFloat(html.css('font-size'))
		}

		var update = function () {

			var scroll = $(window).scrollTop()

			var bounds = container.bounds()

			var t = bounds.top + scroll
			var l = bounds.left
			var r = bounds.left + bounds.width
			var b = bounds.top + bounds.height + scroll

			var w = element.bounds().width
			var h = element.bounds().height

			var windowW = $(window).width()
			var windowH = $(window).height()

			var x = 0
			var y = 0

			switch (disposition) {

				case 'top-left':
					y = t
					x = 0
					break

				case 'top-right':
					y = t
					x = r
					break

				case 'bottom-left':
					y = b - h
					x = l - w
					break

				case 'bottom-right':
					y = b - h
					x = r
					break
			}

			x += offsetx
			y += offsety

			element.css('top', rem(y) + 'rem')
			element.css('left', rem(x) + 'rem')
			//element.css('top', y + 'px')
			//element.css('left', x + 'px')
		}

		update()

		$(window).on('resize', update)
		$(window).on('load', update)

	});

})(jQuery);
(function ($) {

	var getWords = function (str) {
		return str.split(/[\s-]+/i)
	}

	var getChars = function (str) {
		return str.split('')
	}

	$.attach('[data-expand]', function (i, element) {

		var selector = element.attr('data-expand')
		if (selector == '') {
			return
		}

		element.find(selector).each(function (i, element) {

			element = $(element)

			var text = element.text().replace(/\s+/, ' ')

			var words = getWords(text)
			if (words.length == 0) {
				return
			}

			element.empty()

			var l = 0
			var k = 0

			$.each(words, function (i, word) {

				var chars = getChars(word)
				if (chars.length == 0) {
					return
				}

				var string = $('<span class="w"></span>')

				$.each(chars, function (i, char) {

					l++

					string.append('<span class="l" data-index="' + (l) + '">' + char + '</span>')

					k++

				})

				element.append(string)

				var spacer = text[k]
				if (spacer) {
					element.append('<span class="s">' + spacer + '</span>')
				}

				k++
			})
		})
	})

})(jQuery);
(function ($) {

	$.attach('.b-package table td', function (i, element) {
		element.toggleClass('empty', element.text().trim().length == 0)
	})

})(jQuery);
(function ($) {

	$.attach('.b-schedule table td', function (i, element) {
		element.toggleClass('empty', element.text().trim().length == 0)
	})

})(jQuery);
(function ($) {

	$.attach('.b-contact-info table td', function (i, element) {
		element.toggleClass('empty', element.text().trim().length == 0)
	})

})(jQuery);
