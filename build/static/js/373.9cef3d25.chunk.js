/*! For license information please see 373.9cef3d25.chunk.js.LICENSE.txt */
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [373],
  {
    98210: function (t, e, n) {
      var r;
      !(function (i) {
        'use strict';
        var o,
          a = 1e9,
          c = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
          },
          u = !0,
          l = '[DecimalError] ',
          s = l + 'Invalid argument: ',
          f = l + 'Exponent out of range: ',
          p = Math.floor,
          h = Math.pow,
          d = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          y = 1e7,
          v = 7,
          m = 9007199254740991,
          g = p(m / v),
          b = {};
        function x(t, e) {
          var n,
            r,
            i,
            o,
            a,
            c,
            l,
            s,
            f = t.constructor,
            p = f.precision;
          if (!t.s || !e.s) return e.s || (e = new f(t)), u ? T(e, p) : e;
          if (
            ((l = t.d),
            (s = e.d),
            (a = t.e),
            (i = e.e),
            (l = l.slice()),
            (o = a - i))
          ) {
            for (
              o < 0
                ? ((r = l), (o = -o), (c = s.length))
                : ((r = s), (i = a), (c = l.length)),
                o > (c = (a = Math.ceil(p / v)) > c ? a + 1 : c + 1) &&
                  ((o = c), (r.length = 1)),
                r.reverse();
              o--;

            )
              r.push(0);
            r.reverse();
          }
          for (
            (c = l.length) - (o = s.length) < 0 &&
              ((o = c), (r = s), (s = l), (l = r)),
              n = 0;
            o;

          )
            (n = ((l[--o] = l[o] + s[o] + n) / y) | 0), (l[o] %= y);
          for (n && (l.unshift(n), ++i), c = l.length; 0 == l[--c]; ) l.pop();
          return (e.d = l), (e.e = i), u ? T(e, p) : e;
        }
        function w(t, e, n) {
          if (t !== ~~t || t < e || t > n) throw Error(s + t);
        }
        function O(t) {
          var e,
            n,
            r,
            i = t.length - 1,
            o = '',
            a = t[0];
          if (i > 0) {
            for (o += a, e = 1; e < i; e++)
              (r = t[e] + ''), (n = v - r.length) && (o += E(n)), (o += r);
            (a = t[e]), (n = v - (r = a + '').length) && (o += E(n));
          } else if (0 === a) return '0';
          for (; a % 10 === 0; ) a /= 10;
          return o + a;
        }
        (b.absoluteValue = b.abs =
          function () {
            var t = new this.constructor(this);
            return t.s && (t.s = 1), t;
          }),
          (b.comparedTo = b.cmp =
            function (t) {
              var e,
                n,
                r,
                i,
                o = this;
              if (((t = new o.constructor(t)), o.s !== t.s)) return o.s || -t.s;
              if (o.e !== t.e) return (o.e > t.e) ^ (o.s < 0) ? 1 : -1;
              for (
                e = 0, n = (r = o.d.length) < (i = t.d.length) ? r : i;
                e < n;
                ++e
              )
                if (o.d[e] !== t.d[e])
                  return (o.d[e] > t.d[e]) ^ (o.s < 0) ? 1 : -1;
              return r === i ? 0 : (r > i) ^ (o.s < 0) ? 1 : -1;
            }),
          (b.decimalPlaces = b.dp =
            function () {
              var t = this,
                e = t.d.length - 1,
                n = (e - t.e) * v;
              if ((e = t.d[e])) for (; e % 10 == 0; e /= 10) n--;
              return n < 0 ? 0 : n;
            }),
          (b.dividedBy = b.div =
            function (t) {
              return A(this, new this.constructor(t));
            }),
          (b.dividedToIntegerBy = b.idiv =
            function (t) {
              var e = this.constructor;
              return T(A(this, new e(t), 0, 1), e.precision);
            }),
          (b.equals = b.eq =
            function (t) {
              return !this.cmp(t);
            }),
          (b.exponent = function () {
            return j(this);
          }),
          (b.greaterThan = b.gt =
            function (t) {
              return this.cmp(t) > 0;
            }),
          (b.greaterThanOrEqualTo = b.gte =
            function (t) {
              return this.cmp(t) >= 0;
            }),
          (b.isInteger = b.isint =
            function () {
              return this.e > this.d.length - 2;
            }),
          (b.isNegative = b.isneg =
            function () {
              return this.s < 0;
            }),
          (b.isPositive = b.ispos =
            function () {
              return this.s > 0;
            }),
          (b.isZero = function () {
            return 0 === this.s;
          }),
          (b.lessThan = b.lt =
            function (t) {
              return this.cmp(t) < 0;
            }),
          (b.lessThanOrEqualTo = b.lte =
            function (t) {
              return this.cmp(t) < 1;
            }),
          (b.logarithm = b.log =
            function (t) {
              var e,
                n = this,
                r = n.constructor,
                i = r.precision,
                a = i + 5;
              if (void 0 === t) t = new r(10);
              else if ((t = new r(t)).s < 1 || t.eq(o)) throw Error(l + 'NaN');
              if (n.s < 1) throw Error(l + (n.s ? 'NaN' : '-Infinity'));
              return n.eq(o)
                ? new r(0)
                : ((u = !1), (e = A(k(n, a), k(t, a), a)), (u = !0), T(e, i));
            }),
          (b.minus = b.sub =
            function (t) {
              var e = this;
              return (
                (t = new e.constructor(t)),
                e.s == t.s ? C(e, t) : x(e, ((t.s = -t.s), t))
              );
            }),
          (b.modulo = b.mod =
            function (t) {
              var e,
                n = this,
                r = n.constructor,
                i = r.precision;
              if (!(t = new r(t)).s) throw Error(l + 'NaN');
              return n.s
                ? ((u = !1), (e = A(n, t, 0, 1).times(t)), (u = !0), n.minus(e))
                : T(new r(n), i);
            }),
          (b.naturalExponential = b.exp =
            function () {
              return S(this);
            }),
          (b.naturalLogarithm = b.ln =
            function () {
              return k(this);
            }),
          (b.negated = b.neg =
            function () {
              var t = new this.constructor(this);
              return (t.s = -t.s || 0), t;
            }),
          (b.plus = b.add =
            function (t) {
              var e = this;
              return (
                (t = new e.constructor(t)),
                e.s == t.s ? x(e, t) : C(e, ((t.s = -t.s), t))
              );
            }),
          (b.precision = b.sd =
            function (t) {
              var e,
                n,
                r,
                i = this;
              if (void 0 !== t && t !== !!t && 1 !== t && 0 !== t)
                throw Error(s + t);
              if (
                ((e = j(i) + 1),
                (n = (r = i.d.length - 1) * v + 1),
                (r = i.d[r]))
              ) {
                for (; r % 10 == 0; r /= 10) n--;
                for (r = i.d[0]; r >= 10; r /= 10) n++;
              }
              return t && e > n ? e : n;
            }),
          (b.squareRoot = b.sqrt =
            function () {
              var t,
                e,
                n,
                r,
                i,
                o,
                a,
                c = this,
                s = c.constructor;
              if (c.s < 1) {
                if (!c.s) return new s(0);
                throw Error(l + 'NaN');
              }
              for (
                t = j(c),
                  u = !1,
                  0 == (i = Math.sqrt(+c)) || i == 1 / 0
                    ? (((e = O(c.d)).length + t) % 2 == 0 && (e += '0'),
                      (i = Math.sqrt(e)),
                      (t = p((t + 1) / 2) - (t < 0 || t % 2)),
                      (r = new s(
                        (e =
                          i == 1 / 0
                            ? '5e' + t
                            : (e = i.toExponential()).slice(
                                0,
                                e.indexOf('e') + 1
                              ) + t)
                      )))
                    : (r = new s(i.toString())),
                  i = a = (n = s.precision) + 3;
                ;

              )
                if (
                  ((r = (o = r).plus(A(c, o, a + 2)).times(0.5)),
                  O(o.d).slice(0, a) === (e = O(r.d)).slice(0, a))
                ) {
                  if (((e = e.slice(a - 3, a + 1)), i == a && '4999' == e)) {
                    if ((T(o, n + 1, 0), o.times(o).eq(c))) {
                      r = o;
                      break;
                    }
                  } else if ('9999' != e) break;
                  a += 4;
                }
              return (u = !0), T(r, n);
            }),
          (b.times = b.mul =
            function (t) {
              var e,
                n,
                r,
                i,
                o,
                a,
                c,
                l,
                s,
                f = this,
                p = f.constructor,
                h = f.d,
                d = (t = new p(t)).d;
              if (!f.s || !t.s) return new p(0);
              for (
                t.s *= f.s,
                  n = f.e + t.e,
                  (l = h.length) < (s = d.length) &&
                    ((o = h), (h = d), (d = o), (a = l), (l = s), (s = a)),
                  o = [],
                  r = a = l + s;
                r--;

              )
                o.push(0);
              for (r = s; --r >= 0; ) {
                for (e = 0, i = l + r; i > r; )
                  (c = o[i] + d[r] * h[i - r - 1] + e),
                    (o[i--] = c % y | 0),
                    (e = (c / y) | 0);
                o[i] = (o[i] + e) % y | 0;
              }
              for (; !o[--a]; ) o.pop();
              return (
                e ? ++n : o.shift(),
                (t.d = o),
                (t.e = n),
                u ? T(t, p.precision) : t
              );
            }),
          (b.toDecimalPlaces = b.todp =
            function (t, e) {
              var n = this,
                r = n.constructor;
              return (
                (n = new r(n)),
                void 0 === t
                  ? n
                  : (w(t, 0, a),
                    void 0 === e ? (e = r.rounding) : w(e, 0, 8),
                    T(n, t + j(n) + 1, e))
              );
            }),
          (b.toExponential = function (t, e) {
            var n,
              r = this,
              i = r.constructor;
            return (
              void 0 === t
                ? (n = _(r, !0))
                : (w(t, 0, a),
                  void 0 === e ? (e = i.rounding) : w(e, 0, 8),
                  (n = _((r = T(new i(r), t + 1, e)), !0, t + 1))),
              n
            );
          }),
          (b.toFixed = function (t, e) {
            var n,
              r,
              i = this,
              o = i.constructor;
            return void 0 === t
              ? _(i)
              : (w(t, 0, a),
                void 0 === e ? (e = o.rounding) : w(e, 0, 8),
                (n = _(
                  (r = T(new o(i), t + j(i) + 1, e)).abs(),
                  !1,
                  t + j(r) + 1
                )),
                i.isneg() && !i.isZero() ? '-' + n : n);
          }),
          (b.toInteger = b.toint =
            function () {
              var t = this,
                e = t.constructor;
              return T(new e(t), j(t) + 1, e.rounding);
            }),
          (b.toNumber = function () {
            return +this;
          }),
          (b.toPower = b.pow =
            function (t) {
              var e,
                n,
                r,
                i,
                a,
                c,
                s = this,
                f = s.constructor,
                h = +(t = new f(t));
              if (!t.s) return new f(o);
              if (!(s = new f(s)).s) {
                if (t.s < 1) throw Error(l + 'Infinity');
                return s;
              }
              if (s.eq(o)) return s;
              if (((r = f.precision), t.eq(o))) return T(s, r);
              if (((c = (e = t.e) >= (n = t.d.length - 1)), (a = s.s), c)) {
                if ((n = h < 0 ? -h : h) <= m) {
                  for (
                    i = new f(o), e = Math.ceil(r / v + 4), u = !1;
                    n % 2 && I((i = i.times(s)).d, e), 0 !== (n = p(n / 2));

                  )
                    I((s = s.times(s)).d, e);
                  return (u = !0), t.s < 0 ? new f(o).div(i) : T(i, r);
                }
              } else if (a < 0) throw Error(l + 'NaN');
              return (
                (a = a < 0 && 1 & t.d[Math.max(e, n)] ? -1 : 1),
                (s.s = 1),
                (u = !1),
                (i = t.times(k(s, r + 12))),
                (u = !0),
                ((i = S(i)).s = a),
                i
              );
            }),
          (b.toPrecision = function (t, e) {
            var n,
              r,
              i = this,
              o = i.constructor;
            return (
              void 0 === t
                ? (r = _(i, (n = j(i)) <= o.toExpNeg || n >= o.toExpPos))
                : (w(t, 1, a),
                  void 0 === e ? (e = o.rounding) : w(e, 0, 8),
                  (r = _(
                    (i = T(new o(i), t, e)),
                    t <= (n = j(i)) || n <= o.toExpNeg,
                    t
                  ))),
              r
            );
          }),
          (b.toSignificantDigits = b.tosd =
            function (t, e) {
              var n = this.constructor;
              return (
                void 0 === t
                  ? ((t = n.precision), (e = n.rounding))
                  : (w(t, 1, a), void 0 === e ? (e = n.rounding) : w(e, 0, 8)),
                T(new n(this), t, e)
              );
            }),
          (b.toString =
            b.valueOf =
            b.val =
            b.toJSON =
              function () {
                var t = this,
                  e = j(t),
                  n = t.constructor;
                return _(t, e <= n.toExpNeg || e >= n.toExpPos);
              });
        var A = (function () {
          function t(t, e) {
            var n,
              r = 0,
              i = t.length;
            for (t = t.slice(); i--; )
              (n = t[i] * e + r), (t[i] = n % y | 0), (r = (n / y) | 0);
            return r && t.unshift(r), t;
          }
          function e(t, e, n, r) {
            var i, o;
            if (n != r) o = n > r ? 1 : -1;
            else
              for (i = o = 0; i < n; i++)
                if (t[i] != e[i]) {
                  o = t[i] > e[i] ? 1 : -1;
                  break;
                }
            return o;
          }
          function n(t, e, n) {
            for (var r = 0; n--; )
              (t[n] -= r),
                (r = t[n] < e[n] ? 1 : 0),
                (t[n] = r * y + t[n] - e[n]);
            for (; !t[0] && t.length > 1; ) t.shift();
          }
          return function (r, i, o, a) {
            var c,
              u,
              s,
              f,
              p,
              h,
              d,
              m,
              g,
              b,
              x,
              w,
              O,
              A,
              S,
              P,
              E,
              k,
              M = r.constructor,
              C = r.s == i.s ? 1 : -1,
              _ = r.d,
              I = i.d;
            if (!r.s) return new M(r);
            if (!i.s) throw Error(l + 'Division by zero');
            for (
              u = r.e - i.e,
                E = I.length,
                S = _.length,
                m = (d = new M(C)).d = [],
                s = 0;
              I[s] == (_[s] || 0);

            )
              ++s;
            if (
              (I[s] > (_[s] || 0) && --u,
              (w =
                null == o ? (o = M.precision) : a ? o + (j(r) - j(i)) + 1 : o) <
                0)
            )
              return new M(0);
            if (((w = (w / v + 2) | 0), (s = 0), 1 == E))
              for (f = 0, I = I[0], w++; (s < S || f) && w--; s++)
                (O = f * y + (_[s] || 0)),
                  (m[s] = (O / I) | 0),
                  (f = O % I | 0);
            else {
              for (
                (f = (y / (I[0] + 1)) | 0) > 1 &&
                  ((I = t(I, f)),
                  (_ = t(_, f)),
                  (E = I.length),
                  (S = _.length)),
                  A = E,
                  b = (g = _.slice(0, E)).length;
                b < E;

              )
                g[b++] = 0;
              (k = I.slice()).unshift(0), (P = I[0]), I[1] >= y / 2 && ++P;
              do {
                (f = 0),
                  (c = e(I, g, E, b)) < 0
                    ? ((x = g[0]),
                      E != b && (x = x * y + (g[1] || 0)),
                      (f = (x / P) | 0) > 1
                        ? (f >= y && (f = y - 1),
                          1 ==
                            (c = e(
                              (p = t(I, f)),
                              g,
                              (h = p.length),
                              (b = g.length)
                            )) && (f--, n(p, E < h ? k : I, h)))
                        : (0 == f && (c = f = 1), (p = I.slice())),
                      (h = p.length) < b && p.unshift(0),
                      n(g, p, b),
                      -1 == c &&
                        (c = e(I, g, E, (b = g.length))) < 1 &&
                        (f++, n(g, E < b ? k : I, b)),
                      (b = g.length))
                    : 0 === c && (f++, (g = [0])),
                  (m[s++] = f),
                  c && g[0] ? (g[b++] = _[A] || 0) : ((g = [_[A]]), (b = 1));
              } while ((A++ < S || void 0 !== g[0]) && w--);
            }
            return m[0] || m.shift(), (d.e = u), T(d, a ? o + j(d) + 1 : o);
          };
        })();
        function S(t, e) {
          var n,
            r,
            i,
            a,
            c,
            l = 0,
            s = 0,
            p = t.constructor,
            d = p.precision;
          if (j(t) > 16) throw Error(f + j(t));
          if (!t.s) return new p(o);
          for (
            null == e ? ((u = !1), (c = d)) : (c = e), a = new p(0.03125);
            t.abs().gte(0.1);

          )
            (t = t.times(a)), (s += 5);
          for (
            c += ((Math.log(h(2, s)) / Math.LN10) * 2 + 5) | 0,
              n = r = i = new p(o),
              p.precision = c;
            ;

          ) {
            if (
              ((r = T(r.times(t), c)),
              (n = n.times(++l)),
              O((a = i.plus(A(r, n, c))).d).slice(0, c) === O(i.d).slice(0, c))
            ) {
              for (; s--; ) i = T(i.times(i), c);
              return (p.precision = d), null == e ? ((u = !0), T(i, d)) : i;
            }
            i = a;
          }
        }
        function j(t) {
          for (var e = t.e * v, n = t.d[0]; n >= 10; n /= 10) e++;
          return e;
        }
        function P(t, e, n) {
          if (e > t.LN10.sd())
            throw (
              ((u = !0),
              n && (t.precision = n),
              Error(l + 'LN10 precision limit exceeded'))
            );
          return T(new t(t.LN10), e);
        }
        function E(t) {
          for (var e = ''; t--; ) e += '0';
          return e;
        }
        function k(t, e) {
          var n,
            r,
            i,
            a,
            c,
            s,
            f,
            p,
            h,
            d = 1,
            y = t,
            v = y.d,
            m = y.constructor,
            g = m.precision;
          if (y.s < 1) throw Error(l + (y.s ? 'NaN' : '-Infinity'));
          if (y.eq(o)) return new m(0);
          if ((null == e ? ((u = !1), (p = g)) : (p = e), y.eq(10)))
            return null == e && (u = !0), P(m, p);
          if (
            ((p += 10),
            (m.precision = p),
            (r = (n = O(v)).charAt(0)),
            (a = j(y)),
            !(Math.abs(a) < 15e14))
          )
            return (
              (f = P(m, p + 2, g).times(a + '')),
              (y = k(new m(r + '.' + n.slice(1)), p - 10).plus(f)),
              (m.precision = g),
              null == e ? ((u = !0), T(y, g)) : y
            );
          for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3); )
            (r = (n = O((y = y.times(t)).d)).charAt(0)), d++;
          for (
            a = j(y),
              r > 1
                ? ((y = new m('0.' + n)), a++)
                : (y = new m(r + '.' + n.slice(1))),
              s = c = y = A(y.minus(o), y.plus(o), p),
              h = T(y.times(y), p),
              i = 3;
            ;

          ) {
            if (
              ((c = T(c.times(h), p)),
              O((f = s.plus(A(c, new m(i), p))).d).slice(0, p) ===
                O(s.d).slice(0, p))
            )
              return (
                (s = s.times(2)),
                0 !== a && (s = s.plus(P(m, p + 2, g).times(a + ''))),
                (s = A(s, new m(d), p)),
                (m.precision = g),
                null == e ? ((u = !0), T(s, g)) : s
              );
            (s = f), (i += 2);
          }
        }
        function M(t, e) {
          var n, r, i;
          for (
            (n = e.indexOf('.')) > -1 && (e = e.replace('.', '')),
              (r = e.search(/e/i)) > 0
                ? (n < 0 && (n = r),
                  (n += +e.slice(r + 1)),
                  (e = e.substring(0, r)))
                : n < 0 && (n = e.length),
              r = 0;
            48 === e.charCodeAt(r);

          )
            ++r;
          for (i = e.length; 48 === e.charCodeAt(i - 1); ) --i;
          if ((e = e.slice(r, i))) {
            if (
              ((i -= r),
              (n = n - r - 1),
              (t.e = p(n / v)),
              (t.d = []),
              (r = (n + 1) % v),
              n < 0 && (r += v),
              r < i)
            ) {
              for (r && t.d.push(+e.slice(0, r)), i -= v; r < i; )
                t.d.push(+e.slice(r, (r += v)));
              (e = e.slice(r)), (r = v - e.length);
            } else r -= i;
            for (; r--; ) e += '0';
            if ((t.d.push(+e), u && (t.e > g || t.e < -g))) throw Error(f + n);
          } else (t.s = 0), (t.e = 0), (t.d = [0]);
          return t;
        }
        function T(t, e, n) {
          var r,
            i,
            o,
            a,
            c,
            l,
            s,
            d,
            m = t.d;
          for (a = 1, o = m[0]; o >= 10; o /= 10) a++;
          if ((r = e - a) < 0) (r += v), (i = e), (s = m[(d = 0)]);
          else {
            if ((d = Math.ceil((r + 1) / v)) >= (o = m.length)) return t;
            for (s = o = m[d], a = 1; o >= 10; o /= 10) a++;
            i = (r %= v) - v + a;
          }
          if (
            (void 0 !== n &&
              ((c = (s / (o = h(10, a - i - 1))) % 10 | 0),
              (l = e < 0 || void 0 !== m[d + 1] || s % o),
              (l =
                n < 4
                  ? (c || l) && (0 == n || n == (t.s < 0 ? 3 : 2))
                  : c > 5 ||
                    (5 == c &&
                      (4 == n ||
                        l ||
                        (6 == n &&
                          (r > 0 ? (i > 0 ? s / h(10, a - i) : 0) : m[d - 1]) %
                            10 &
                            1) ||
                        n == (t.s < 0 ? 8 : 7))))),
            e < 1 || !m[0])
          )
            return (
              l
                ? ((o = j(t)),
                  (m.length = 1),
                  (e = e - o - 1),
                  (m[0] = h(10, (v - (e % v)) % v)),
                  (t.e = p(-e / v) || 0))
                : ((m.length = 1), (m[0] = t.e = t.s = 0)),
              t
            );
          if (
            (0 == r
              ? ((m.length = d), (o = 1), d--)
              : ((m.length = d + 1),
                (o = h(10, v - r)),
                (m[d] = i > 0 ? ((s / h(10, a - i)) % h(10, i) | 0) * o : 0)),
            l)
          )
            for (;;) {
              if (0 == d) {
                (m[0] += o) == y && ((m[0] = 1), ++t.e);
                break;
              }
              if (((m[d] += o), m[d] != y)) break;
              (m[d--] = 0), (o = 1);
            }
          for (r = m.length; 0 === m[--r]; ) m.pop();
          if (u && (t.e > g || t.e < -g)) throw Error(f + j(t));
          return t;
        }
        function C(t, e) {
          var n,
            r,
            i,
            o,
            a,
            c,
            l,
            s,
            f,
            p,
            h = t.constructor,
            d = h.precision;
          if (!t.s || !e.s)
            return e.s ? (e.s = -e.s) : (e = new h(t)), u ? T(e, d) : e;
          if (
            ((l = t.d),
            (p = e.d),
            (r = e.e),
            (s = t.e),
            (l = l.slice()),
            (a = s - r))
          ) {
            for (
              (f = a < 0)
                ? ((n = l), (a = -a), (c = p.length))
                : ((n = p), (r = s), (c = l.length)),
                a > (i = Math.max(Math.ceil(d / v), c) + 2) &&
                  ((a = i), (n.length = 1)),
                n.reverse(),
                i = a;
              i--;

            )
              n.push(0);
            n.reverse();
          } else {
            for (
              (f = (i = l.length) < (c = p.length)) && (c = i), i = 0;
              i < c;
              i++
            )
              if (l[i] != p[i]) {
                f = l[i] < p[i];
                break;
              }
            a = 0;
          }
          for (
            f && ((n = l), (l = p), (p = n), (e.s = -e.s)),
              c = l.length,
              i = p.length - c;
            i > 0;
            --i
          )
            l[c++] = 0;
          for (i = p.length; i > a; ) {
            if (l[--i] < p[i]) {
              for (o = i; o && 0 === l[--o]; ) l[o] = y - 1;
              --l[o], (l[i] += y);
            }
            l[i] -= p[i];
          }
          for (; 0 === l[--c]; ) l.pop();
          for (; 0 === l[0]; l.shift()) --r;
          return l[0] ? ((e.d = l), (e.e = r), u ? T(e, d) : e) : new h(0);
        }
        function _(t, e, n) {
          var r,
            i = j(t),
            o = O(t.d),
            a = o.length;
          return (
            e
              ? (n && (r = n - a) > 0
                  ? (o = o.charAt(0) + '.' + o.slice(1) + E(r))
                  : a > 1 && (o = o.charAt(0) + '.' + o.slice(1)),
                (o = o + (i < 0 ? 'e' : 'e+') + i))
              : i < 0
              ? ((o = '0.' + E(-i - 1) + o),
                n && (r = n - a) > 0 && (o += E(r)))
              : i >= a
              ? ((o += E(i + 1 - a)),
                n && (r = n - i - 1) > 0 && (o = o + '.' + E(r)))
              : ((r = i + 1) < a && (o = o.slice(0, r) + '.' + o.slice(r)),
                n &&
                  (r = n - a) > 0 &&
                  (i + 1 === a && (o += '.'), (o += E(r)))),
            t.s < 0 ? '-' + o : o
          );
        }
        function I(t, e) {
          if (t.length > e) return (t.length = e), !0;
        }
        function D(t) {
          if (!t || 'object' !== typeof t) throw Error(l + 'Object expected');
          var e,
            n,
            r,
            i = [
              'precision',
              1,
              a,
              'rounding',
              0,
              8,
              'toExpNeg',
              -1 / 0,
              0,
              'toExpPos',
              0,
              1 / 0
            ];
          for (e = 0; e < i.length; e += 3)
            if (void 0 !== (r = t[(n = i[e])])) {
              if (!(p(r) === r && r >= i[e + 1] && r <= i[e + 2]))
                throw Error(s + n + ': ' + r);
              this[n] = r;
            }
          if (void 0 !== (r = t[(n = 'LN10')])) {
            if (r != Math.LN10) throw Error(s + n + ': ' + r);
            this[n] = new this(r);
          }
          return this;
        }
        (c = (function t(e) {
          var n, r, i;
          function o(t) {
            var e = this;
            if (!(e instanceof o)) return new o(t);
            if (((e.constructor = o), t instanceof o))
              return (
                (e.s = t.s), (e.e = t.e), void (e.d = (t = t.d) ? t.slice() : t)
              );
            if ('number' === typeof t) {
              if (0 * t !== 0) throw Error(s + t);
              if (t > 0) e.s = 1;
              else {
                if (!(t < 0)) return (e.s = 0), (e.e = 0), void (e.d = [0]);
                (t = -t), (e.s = -1);
              }
              return t === ~~t && t < 1e7
                ? ((e.e = 0), void (e.d = [t]))
                : M(e, t.toString());
            }
            if ('string' !== typeof t) throw Error(s + t);
            if (
              (45 === t.charCodeAt(0)
                ? ((t = t.slice(1)), (e.s = -1))
                : (e.s = 1),
              !d.test(t))
            )
              throw Error(s + t);
            M(e, t);
          }
          if (
            ((o.prototype = b),
            (o.ROUND_UP = 0),
            (o.ROUND_DOWN = 1),
            (o.ROUND_CEIL = 2),
            (o.ROUND_FLOOR = 3),
            (o.ROUND_HALF_UP = 4),
            (o.ROUND_HALF_DOWN = 5),
            (o.ROUND_HALF_EVEN = 6),
            (o.ROUND_HALF_CEIL = 7),
            (o.ROUND_HALF_FLOOR = 8),
            (o.clone = t),
            (o.config = o.set = D),
            void 0 === e && (e = {}),
            e)
          )
            for (
              i = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10'],
                n = 0;
              n < i.length;

            )
              e.hasOwnProperty((r = i[n++])) || (e[r] = this[r]);
          return o.config(e), o;
        })(c)),
          (c.default = c.Decimal = c),
          (o = new c(1)),
          void 0 ===
            (r = function () {
              return c;
            }.call(e, n, e, t)) || (t.exports = r);
      })();
    },
    17283: (t) => {
      'use strict';
      var e = Object.prototype.hasOwnProperty,
        n = '~';
      function r() {}
      function i(t, e, n) {
        (this.fn = t), (this.context = e), (this.once = n || !1);
      }
      function o(t, e, r, o, a) {
        if ('function' !== typeof r)
          throw new TypeError('The listener must be a function');
        var c = new i(r, o || t, a),
          u = n ? n + e : e;
        return (
          t._events[u]
            ? t._events[u].fn
              ? (t._events[u] = [t._events[u], c])
              : t._events[u].push(c)
            : ((t._events[u] = c), t._eventsCount++),
          t
        );
      }
      function a(t, e) {
        0 === --t._eventsCount ? (t._events = new r()) : delete t._events[e];
      }
      function c() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (c.prototype.eventNames = function () {
          var t,
            r,
            i = [];
          if (0 === this._eventsCount) return i;
          for (r in (t = this._events))
            e.call(t, r) && i.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(t))
            : i;
        }),
        (c.prototype.listeners = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var i = 0, o = r.length, a = new Array(o); i < o; i++)
            a[i] = r[i].fn;
          return a;
        }),
        (c.prototype.listenerCount = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (c.prototype.emit = function (t, e, r, i, o, a) {
          var c = n ? n + t : t;
          if (!this._events[c]) return !1;
          var u,
            l,
            s = this._events[c],
            f = arguments.length;
          if (s.fn) {
            switch ((s.once && this.removeListener(t, s.fn, void 0, !0), f)) {
              case 1:
                return s.fn.call(s.context), !0;
              case 2:
                return s.fn.call(s.context, e), !0;
              case 3:
                return s.fn.call(s.context, e, r), !0;
              case 4:
                return s.fn.call(s.context, e, r, i), !0;
              case 5:
                return s.fn.call(s.context, e, r, i, o), !0;
              case 6:
                return s.fn.call(s.context, e, r, i, o, a), !0;
            }
            for (l = 1, u = new Array(f - 1); l < f; l++)
              u[l - 1] = arguments[l];
            s.fn.apply(s.context, u);
          } else {
            var p,
              h = s.length;
            for (l = 0; l < h; l++)
              switch (
                (s[l].once && this.removeListener(t, s[l].fn, void 0, !0), f)
              ) {
                case 1:
                  s[l].fn.call(s[l].context);
                  break;
                case 2:
                  s[l].fn.call(s[l].context, e);
                  break;
                case 3:
                  s[l].fn.call(s[l].context, e, r);
                  break;
                case 4:
                  s[l].fn.call(s[l].context, e, r, i);
                  break;
                default:
                  if (!u)
                    for (p = 1, u = new Array(f - 1); p < f; p++)
                      u[p - 1] = arguments[p];
                  s[l].fn.apply(s[l].context, u);
              }
          }
          return !0;
        }),
        (c.prototype.on = function (t, e, n) {
          return o(this, t, e, n, !1);
        }),
        (c.prototype.once = function (t, e, n) {
          return o(this, t, e, n, !0);
        }),
        (c.prototype.removeListener = function (t, e, r, i) {
          var o = n ? n + t : t;
          if (!this._events[o]) return this;
          if (!e) return a(this, o), this;
          var c = this._events[o];
          if (c.fn)
            c.fn !== e ||
              (i && !c.once) ||
              (r && c.context !== r) ||
              a(this, o);
          else {
            for (var u = 0, l = [], s = c.length; u < s; u++)
              (c[u].fn !== e ||
                (i && !c[u].once) ||
                (r && c[u].context !== r)) &&
                l.push(c[u]);
            l.length
              ? (this._events[o] = 1 === l.length ? l[0] : l)
              : a(this, o);
          }
          return this;
        }),
        (c.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = n ? n + t : t), this._events[e] && a(this, e))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (c.prototype.off = c.prototype.removeListener),
        (c.prototype.addListener = c.prototype.on),
        (c.prefixed = n),
        (c.EventEmitter = c),
        (t.exports = c);
    },
    31170: (t) => {
      t.exports = function (t, e, n) {
        switch (n.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, n[0]);
          case 2:
            return t.call(e, n[0], n[1]);
          case 3:
            return t.call(e, n[0], n[1], n[2]);
        }
        return t.apply(e, n);
      };
    },
    27676: (t) => {
      t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
          if (!e(t[n], n, t)) return !1;
        return !0;
      };
    },
    45967: (t) => {
      t.exports = function (t) {
        return t.split('');
      };
    },
    71775: (t, e, n) => {
      var r = n(5654);
      t.exports = function (t, e, n) {
        '__proto__' == e && r
          ? r(t, e, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0
            })
          : (t[e] = n);
      };
    },
    45652: (t, e, n) => {
      var r = n(94664),
        i = n(76516)(r);
      t.exports = i;
    },
    24746: (t, e, n) => {
      var r = n(45652);
      t.exports = function (t, e) {
        var n = !0;
        return (
          r(t, function (t, r, i) {
            return (n = !!e(t, r, i));
          }),
          n
        );
      };
    },
    79742: (t, e, n) => {
      var r = n(19841);
      t.exports = function (t, e, n) {
        for (var i = -1, o = t.length; ++i < o; ) {
          var a = t[i],
            c = e(a);
          if (null != c && (void 0 === u ? c === c && !r(c) : n(c, u)))
            var u = c,
              l = a;
        }
        return l;
      };
    },
    80755: (t, e, n) => {
      var r = n(48895),
        i = n(77116);
      t.exports = function t(e, n, o, a, c) {
        var u = -1,
          l = e.length;
        for (o || (o = i), c || (c = []); ++u < l; ) {
          var s = e[u];
          n > 0 && o(s)
            ? n > 1
              ? t(s, n - 1, o, a, c)
              : r(c, s)
            : a || (c[c.length] = s);
        }
        return c;
      };
    },
    94258: (t, e, n) => {
      var r = n(55906)();
      t.exports = r;
    },
    94664: (t, e, n) => {
      var r = n(94258),
        i = n(28673);
      t.exports = function (t, e) {
        return t && r(t, e, i);
      };
    },
    52969: (t, e, n) => {
      var r = n(35324),
        i = n(70914);
      t.exports = function (t, e) {
        for (var n = 0, o = (e = r(e, t)).length; null != t && n < o; )
          t = t[i(e[n++])];
        return n && n == o ? t : void 0;
      };
    },
    97498: (t) => {
      t.exports = function (t, e) {
        return t > e;
      };
    },
    27894: (t) => {
      t.exports = function (t, e) {
        return null != t && e in Object(t);
      };
    },
    86532: (t, e, n) => {
      var r = n(5538),
        i = n(26989);
      t.exports = function (t, e, n, o) {
        var a = n.length,
          c = a,
          u = !o;
        if (null == t) return !c;
        for (t = Object(t); a--; ) {
          var l = n[a];
          if (u && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
        }
        for (; ++a < c; ) {
          var s = (l = n[a])[0],
            f = t[s],
            p = l[1];
          if (u && l[2]) {
            if (void 0 === f && !(s in t)) return !1;
          } else {
            var h = new r();
            if (o) var d = o(f, p, s, t, e, h);
            if (!(void 0 === d ? i(p, f, 3, o, h) : d)) return !1;
          }
        }
        return !0;
      };
    },
    9096: (t, e, n) => {
      var r = n(39256),
        i = n(15029),
        o = n(33279),
        a = n(54052),
        c = n(63932);
      t.exports = function (t) {
        return 'function' == typeof t
          ? t
          : null == t
          ? o
          : 'object' == typeof t
          ? a(t)
            ? i(t[0], t[1])
            : r(t)
          : c(t);
      };
    },
    50061: (t) => {
      t.exports = function (t, e) {
        return t < e;
      };
    },
    38883: (t, e, n) => {
      var r = n(45652),
        i = n(6571);
      t.exports = function (t, e) {
        var n = -1,
          o = i(t) ? Array(t.length) : [];
        return (
          r(t, function (t, r, i) {
            o[++n] = e(t, r, i);
          }),
          o
        );
      };
    },
    39256: (t, e, n) => {
      var r = n(86532),
        i = n(23781),
        o = n(91310);
      t.exports = function (t) {
        var e = i(t);
        return 1 == e.length && e[0][2]
          ? o(e[0][0], e[0][1])
          : function (n) {
              return n === t || r(n, t, e);
            };
      };
    },
    15029: (t, e, n) => {
      var r = n(26989),
        i = n(33097),
        o = n(53366),
        a = n(62597),
        c = n(9417),
        u = n(91310),
        l = n(70914);
      t.exports = function (t, e) {
        return a(t) && c(e)
          ? u(l(t), e)
          : function (n) {
              var a = i(n, t);
              return void 0 === a && a === e ? o(n, t) : r(e, a, 3);
            };
      };
    },
    12536: (t, e, n) => {
      var r = n(50149),
        i = n(52969),
        o = n(9096),
        a = n(38883),
        c = n(60320),
        u = n(47574),
        l = n(65893),
        s = n(33279),
        f = n(54052);
      t.exports = function (t, e, n) {
        e = e.length
          ? r(e, function (t) {
              return f(t)
                ? function (e) {
                    return i(e, 1 === t.length ? t[0] : t);
                  }
                : t;
            })
          : [s];
        var p = -1;
        e = r(e, u(o));
        var h = a(t, function (t, n, i) {
          return {
            criteria: r(e, function (e) {
              return e(t);
            }),
            index: ++p,
            value: t
          };
        });
        return c(h, function (t, e) {
          return l(t, e, n);
        });
      };
    },
    10396: (t) => {
      t.exports = function (t) {
        return function (e) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    52866: (t, e, n) => {
      var r = n(52969);
      t.exports = function (t) {
        return function (e) {
          return r(e, t);
        };
      };
    },
    39676: (t) => {
      var e = Math.ceil,
        n = Math.max;
      t.exports = function (t, r, i, o) {
        for (var a = -1, c = n(e((r - t) / (i || 1)), 0), u = Array(c); c--; )
          (u[o ? c : ++a] = t), (t += i);
        return u;
      };
    },
    55647: (t, e, n) => {
      var r = n(33279),
        i = n(55636),
        o = n(46350);
      t.exports = function (t, e) {
        return o(i(t, e, r), t + '');
      };
    },
    28325: (t, e, n) => {
      var r = n(22541),
        i = n(5654),
        o = n(33279),
        a = i
          ? function (t, e) {
              return i(t, 'toString', {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0
              });
            }
          : o;
      t.exports = a;
    },
    53871: (t) => {
      t.exports = function (t, e, n) {
        var r = -1,
          i = t.length;
        e < 0 && (e = -e > i ? 0 : i + e),
          (n = n > i ? i : n) < 0 && (n += i),
          (i = e > n ? 0 : (n - e) >>> 0),
          (e >>>= 0);
        for (var o = Array(i); ++r < i; ) o[r] = t[r + e];
        return o;
      };
    },
    22165: (t, e, n) => {
      var r = n(45652);
      t.exports = function (t, e) {
        var n;
        return (
          r(t, function (t, r, i) {
            return !(n = e(t, r, i));
          }),
          !!n
        );
      };
    },
    60320: (t) => {
      t.exports = function (t, e) {
        var n = t.length;
        for (t.sort(e); n--; ) t[n] = t[n].value;
        return t;
      };
    },
    61141: (t, e, n) => {
      var r = n(10143),
        i = /^\s+/;
      t.exports = function (t) {
        return t ? t.slice(0, r(t) + 1).replace(i, '') : t;
      };
    },
    35324: (t, e, n) => {
      var r = n(54052),
        i = n(62597),
        o = n(14079),
        a = n(41069);
      t.exports = function (t, e) {
        return r(t) ? t : i(t, e) ? [t] : o(a(t));
      };
    },
    28189: (t, e, n) => {
      var r = n(53871);
      t.exports = function (t, e, n) {
        var i = t.length;
        return (n = void 0 === n ? i : n), !e && n >= i ? t : r(t, e, n);
      };
    },
    16599: (t, e, n) => {
      var r = n(19841);
      t.exports = function (t, e) {
        if (t !== e) {
          var n = void 0 !== t,
            i = null === t,
            o = t === t,
            a = r(t),
            c = void 0 !== e,
            u = null === e,
            l = e === e,
            s = r(e);
          if (
            (!u && !s && !a && t > e) ||
            (a && c && l && !u && !s) ||
            (i && c && l) ||
            (!n && l) ||
            !o
          )
            return 1;
          if (
            (!i && !a && !s && t < e) ||
            (s && n && o && !i && !a) ||
            (u && n && o) ||
            (!c && o) ||
            !l
          )
            return -1;
        }
        return 0;
      };
    },
    65893: (t, e, n) => {
      var r = n(16599);
      t.exports = function (t, e, n) {
        for (
          var i = -1,
            o = t.criteria,
            a = e.criteria,
            c = o.length,
            u = n.length;
          ++i < c;

        ) {
          var l = r(o[i], a[i]);
          if (l) return i >= u ? l : l * ('desc' == n[i] ? -1 : 1);
        }
        return t.index - e.index;
      };
    },
    76516: (t, e, n) => {
      var r = n(6571);
      t.exports = function (t, e) {
        return function (n, i) {
          if (null == n) return n;
          if (!r(n)) return t(n, i);
          for (
            var o = n.length, a = e ? o : -1, c = Object(n);
            (e ? a-- : ++a < o) && !1 !== i(c[a], a, c);

          );
          return n;
        };
      };
    },
    55906: (t) => {
      t.exports = function (t) {
        return function (e, n, r) {
          for (var i = -1, o = Object(e), a = r(e), c = a.length; c--; ) {
            var u = a[t ? c : ++i];
            if (!1 === n(o[u], u, o)) break;
          }
          return e;
        };
      };
    },
    57676: (t, e, n) => {
      var r = n(28189),
        i = n(36311),
        o = n(39115),
        a = n(41069);
      t.exports = function (t) {
        return function (e) {
          e = a(e);
          var n = i(e) ? o(e) : void 0,
            c = n ? n[0] : e.charAt(0),
            u = n ? r(n, 1).join('') : e.slice(1);
          return c[t]() + u;
        };
      };
    },
    69995: (t, e, n) => {
      var r = n(9096),
        i = n(6571),
        o = n(28673);
      t.exports = function (t) {
        return function (e, n, a) {
          var c = Object(e);
          if (!i(e)) {
            var u = r(n, 3);
            (e = o(e)),
              (n = function (t) {
                return u(c[t], t, c);
              });
          }
          var l = t(e, n, a);
          return l > -1 ? c[u ? e[l] : l] : void 0;
        };
      };
    },
    3331: (t, e, n) => {
      var r = n(39676),
        i = n(60929),
        o = n(37303);
      t.exports = function (t) {
        return function (e, n, a) {
          return (
            a && 'number' != typeof a && i(e, n, a) && (n = a = void 0),
            (e = o(e)),
            void 0 === n ? ((n = e), (e = 0)) : (n = o(n)),
            (a = void 0 === a ? (e < n ? 1 : -1) : o(a)),
            r(e, n, a, t)
          );
        };
      };
    },
    5654: (t, e, n) => {
      var r = n(87937),
        i = (function () {
          try {
            var t = r(Object, 'defineProperty');
            return t({}, '', {}), t;
          } catch (e) {}
        })();
      t.exports = i;
    },
    23781: (t, e, n) => {
      var r = n(9417),
        i = n(28673);
      t.exports = function (t) {
        for (var e = i(t), n = e.length; n--; ) {
          var o = e[n],
            a = t[o];
          e[n] = [o, a, r(a)];
        }
        return e;
      };
    },
    85990: (t, e, n) => {
      var r = n(13028)(Object.getPrototypeOf, Object);
      t.exports = r;
    },
    99057: (t, e, n) => {
      var r = n(35324),
        i = n(22777),
        o = n(54052),
        a = n(69194),
        c = n(56173),
        u = n(70914);
      t.exports = function (t, e, n) {
        for (var l = -1, s = (e = r(e, t)).length, f = !1; ++l < s; ) {
          var p = u(e[l]);
          if (!(f = null != t && n(t, p))) break;
          t = t[p];
        }
        return f || ++l != s
          ? f
          : !!(s = null == t ? 0 : t.length) &&
              c(s) &&
              a(p, s) &&
              (o(t) || i(t));
      };
    },
    36311: (t) => {
      var e = RegExp(
        '[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]'
      );
      t.exports = function (t) {
        return e.test(t);
      };
    },
    77116: (t, e, n) => {
      var r = n(9812),
        i = n(22777),
        o = n(54052),
        a = r ? r.isConcatSpreadable : void 0;
      t.exports = function (t) {
        return o(t) || i(t) || !!(a && t && t[a]);
      };
    },
    60929: (t, e, n) => {
      var r = n(93211),
        i = n(6571),
        o = n(69194),
        a = n(46686);
      t.exports = function (t, e, n) {
        if (!a(n)) return !1;
        var c = typeof e;
        return (
          !!('number' == c
            ? i(n) && o(e, n.length)
            : 'string' == c && e in n) && r(n[e], t)
        );
      };
    },
    62597: (t, e, n) => {
      var r = n(54052),
        i = n(19841),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
      t.exports = function (t, e) {
        if (r(t)) return !1;
        var n = typeof t;
        return (
          !(
            'number' != n &&
            'symbol' != n &&
            'boolean' != n &&
            null != t &&
            !i(t)
          ) ||
          a.test(t) ||
          !o.test(t) ||
          (null != e && t in Object(e))
        );
      };
    },
    9417: (t, e, n) => {
      var r = n(46686);
      t.exports = function (t) {
        return t === t && !r(t);
      };
    },
    91310: (t) => {
      t.exports = function (t, e) {
        return function (n) {
          return null != n && n[t] === e && (void 0 !== e || t in Object(n));
        };
      };
    },
    88259: (t, e, n) => {
      var r = n(15797);
      t.exports = function (t) {
        var e = r(t, function (t) {
            return 500 === n.size && n.clear(), t;
          }),
          n = e.cache;
        return e;
      };
    },
    55636: (t, e, n) => {
      var r = n(31170),
        i = Math.max;
      t.exports = function (t, e, n) {
        return (
          (e = i(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            for (
              var o = arguments, a = -1, c = i(o.length - e, 0), u = Array(c);
              ++a < c;

            )
              u[a] = o[e + a];
            a = -1;
            for (var l = Array(e + 1); ++a < e; ) l[a] = o[a];
            return (l[e] = n(u)), r(t, this, l);
          }
        );
      };
    },
    46350: (t, e, n) => {
      var r = n(28325),
        i = n(86578)(r);
      t.exports = i;
    },
    86578: (t) => {
      var e = Date.now;
      t.exports = function (t) {
        var n = 0,
          r = 0;
        return function () {
          var i = e(),
            o = 16 - (i - r);
          if (((r = i), o > 0)) {
            if (++n >= 800) return arguments[0];
          } else n = 0;
          return t.apply(void 0, arguments);
        };
      };
    },
    39115: (t, e, n) => {
      var r = n(45967),
        i = n(36311),
        o = n(50715);
      t.exports = function (t) {
        return i(t) ? o(t) : r(t);
      };
    },
    14079: (t, e, n) => {
      var r = n(88259),
        i =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        a = r(function (t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(''),
            t.replace(i, function (t, n, r, i) {
              e.push(r ? i.replace(o, '$1') : n || t);
            }),
            e
          );
        });
      t.exports = a;
    },
    70914: (t, e, n) => {
      var r = n(19841);
      t.exports = function (t) {
        if ('string' == typeof t || r(t)) return t;
        var e = t + '';
        return '0' == e && 1 / t == -1 / 0 ? '-0' : e;
      };
    },
    10143: (t) => {
      var e = /\s/;
      t.exports = function (t) {
        for (var n = t.length; n-- && e.test(t.charAt(n)); );
        return n;
      };
    },
    50715: (t) => {
      var e = '\\ud800-\\udfff',
        n = '[' + e + ']',
        r = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
        i = '\\ud83c[\\udffb-\\udfff]',
        o = '[^' + e + ']',
        a = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        c = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        u = '(?:' + r + '|' + i + ')' + '?',
        l = '[\\ufe0e\\ufe0f]?',
        s =
          l + u + ('(?:\\u200d(?:' + [o, a, c].join('|') + ')' + l + u + ')*'),
        f = '(?:' + [o + r + '?', r, a, c, n].join('|') + ')',
        p = RegExp(i + '(?=' + i + ')|' + f + s, 'g');
      t.exports = function (t) {
        return t.match(p) || [];
      };
    },
    22541: (t) => {
      t.exports = function (t) {
        return function () {
          return t;
        };
      };
    },
    93950: (t, e, n) => {
      var r = n(46686),
        i = n(4757),
        o = n(40801),
        a = Math.max,
        c = Math.min;
      t.exports = function (t, e, n) {
        var u,
          l,
          s,
          f,
          p,
          h,
          d = 0,
          y = !1,
          v = !1,
          m = !0;
        if ('function' != typeof t) throw new TypeError('Expected a function');
        function g(e) {
          var n = u,
            r = l;
          return (u = l = void 0), (d = e), (f = t.apply(r, n));
        }
        function b(t) {
          var n = t - h;
          return void 0 === h || n >= e || n < 0 || (v && t - d >= s);
        }
        function x() {
          var t = i();
          if (b(t)) return w(t);
          p = setTimeout(
            x,
            (function (t) {
              var n = e - (t - h);
              return v ? c(n, s - (t - d)) : n;
            })(t)
          );
        }
        function w(t) {
          return (p = void 0), m && u ? g(t) : ((u = l = void 0), f);
        }
        function O() {
          var t = i(),
            n = b(t);
          if (((u = arguments), (l = this), (h = t), n)) {
            if (void 0 === p)
              return (function (t) {
                return (d = t), (p = setTimeout(x, e)), y ? g(t) : f;
              })(h);
            if (v) return clearTimeout(p), (p = setTimeout(x, e)), g(h);
          }
          return void 0 === p && (p = setTimeout(x, e)), f;
        }
        return (
          (e = o(e) || 0),
          r(n) &&
            ((y = !!n.leading),
            (s = (v = 'maxWait' in n) ? a(o(n.maxWait) || 0, e) : s),
            (m = 'trailing' in n ? !!n.trailing : m)),
          (O.cancel = function () {
            void 0 !== p && clearTimeout(p), (d = 0), (u = h = l = p = void 0);
          }),
          (O.flush = function () {
            return void 0 === p ? f : w(i());
          }),
          O
        );
      };
    },
    17002: (t, e, n) => {
      var r = n(27676),
        i = n(24746),
        o = n(9096),
        a = n(54052),
        c = n(60929);
      t.exports = function (t, e, n) {
        var u = a(t) ? r : i;
        return n && c(t, e, n) && (e = void 0), u(t, o(e, 3));
      };
    },
    76609: (t, e, n) => {
      var r = n(69995)(n(32520));
      t.exports = r;
    },
    32520: (t, e, n) => {
      var r = n(75816),
        i = n(9096),
        o = n(99140),
        a = Math.max;
      t.exports = function (t, e, n) {
        var c = null == t ? 0 : t.length;
        if (!c) return -1;
        var u = null == n ? 0 : o(n);
        return u < 0 && (u = a(c + u, 0)), r(t, i(e, 3), u);
      };
    },
    63538: (t, e, n) => {
      var r = n(80755),
        i = n(33411);
      t.exports = function (t, e) {
        return r(i(t, e), 1);
      };
    },
    33097: (t, e, n) => {
      var r = n(52969);
      t.exports = function (t, e, n) {
        var i = null == t ? void 0 : r(t, e);
        return void 0 === i ? n : i;
      };
    },
    53366: (t, e, n) => {
      var r = n(27894),
        i = n(99057);
      t.exports = function (t, e) {
        return null != t && i(t, e, r);
      };
    },
    33279: (t) => {
      t.exports = function (t) {
        return t;
      };
    },
    96361: (t, e, n) => {
      var r = n(16913),
        i = n(22761);
      t.exports = function (t) {
        return !0 === t || !1 === t || (i(t) && '[object Boolean]' == r(t));
      };
    },
    35268: (t, e, n) => {
      var r = n(79160);
      t.exports = function (t) {
        return r(t) && t != +t;
      };
    },
    79686: (t) => {
      t.exports = function (t) {
        return null == t;
      };
    },
    79160: (t, e, n) => {
      var r = n(16913),
        i = n(22761);
      t.exports = function (t) {
        return 'number' == typeof t || (i(t) && '[object Number]' == r(t));
      };
    },
    12322: (t, e, n) => {
      var r = n(16913),
        i = n(85990),
        o = n(22761),
        a = Function.prototype,
        c = Object.prototype,
        u = a.toString,
        l = c.hasOwnProperty,
        s = u.call(Object);
      t.exports = function (t) {
        if (!o(t) || '[object Object]' != r(t)) return !1;
        var e = i(t);
        if (null === e) return !0;
        var n = l.call(e, 'constructor') && e.constructor;
        return 'function' == typeof n && n instanceof n && u.call(n) == s;
      };
    },
    90620: (t, e, n) => {
      var r = n(16913),
        i = n(54052),
        o = n(22761);
      t.exports = function (t) {
        return (
          'string' == typeof t || (!i(t) && o(t) && '[object String]' == r(t))
        );
      };
    },
    74065: (t) => {
      t.exports = function (t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0;
      };
    },
    33411: (t, e, n) => {
      var r = n(50149),
        i = n(9096),
        o = n(38883),
        a = n(54052);
      t.exports = function (t, e) {
        return (a(t) ? r : o)(t, i(e, 3));
      };
    },
    91733: (t, e, n) => {
      var r = n(71775),
        i = n(94664),
        o = n(9096);
      t.exports = function (t, e) {
        var n = {};
        return (
          (e = o(e, 3)),
          i(t, function (t, i, o) {
            r(n, i, e(t, i, o));
          }),
          n
        );
      };
    },
    50539: (t, e, n) => {
      var r = n(79742),
        i = n(97498),
        o = n(33279);
      t.exports = function (t) {
        return t && t.length ? r(t, o, i) : void 0;
      };
    },
    22794: (t, e, n) => {
      var r = n(79742),
        i = n(97498),
        o = n(9096);
      t.exports = function (t, e) {
        return t && t.length ? r(t, o(e, 2), i) : void 0;
      };
    },
    15797: (t, e, n) => {
      var r = n(64816);
      function i(t, e) {
        if ('function' != typeof t || (null != e && 'function' != typeof e))
          throw new TypeError('Expected a function');
        var n = function () {
          var r = arguments,
            i = e ? e.apply(this, r) : r[0],
            o = n.cache;
          if (o.has(i)) return o.get(i);
          var a = t.apply(this, r);
          return (n.cache = o.set(i, a) || o), a;
        };
        return (n.cache = new (i.Cache || r)()), n;
      }
      (i.Cache = r), (t.exports = i);
    },
    76745: (t, e, n) => {
      var r = n(79742),
        i = n(50061),
        o = n(33279);
      t.exports = function (t) {
        return t && t.length ? r(t, o, i) : void 0;
      };
    },
    59364: (t, e, n) => {
      var r = n(79742),
        i = n(9096),
        o = n(50061);
      t.exports = function (t, e) {
        return t && t.length ? r(t, i(e, 2), o) : void 0;
      };
    },
    4757: (t, e, n) => {
      var r = n(56552);
      t.exports = function () {
        return r.Date.now();
      };
    },
    63932: (t, e, n) => {
      var r = n(10396),
        i = n(52866),
        o = n(62597),
        a = n(70914);
      t.exports = function (t) {
        return o(t) ? r(a(t)) : i(t);
      };
    },
    96604: (t, e, n) => {
      var r = n(3331)();
      t.exports = r;
    },
    24597: (t, e, n) => {
      var r = n(52587),
        i = n(9096),
        o = n(22165),
        a = n(54052),
        c = n(60929);
      t.exports = function (t, e, n) {
        var u = a(t) ? r : o;
        return n && c(t, e, n) && (e = void 0), u(t, i(e, 3));
      };
    },
    87424: (t, e, n) => {
      var r = n(80755),
        i = n(12536),
        o = n(55647),
        a = n(60929),
        c = o(function (t, e) {
          if (null == t) return [];
          var n = e.length;
          return (
            n > 1 && a(t, e[0], e[1])
              ? (e = [])
              : n > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]),
            i(t, r(e, 1), [])
          );
        });
      t.exports = c;
    },
    79889: (t, e, n) => {
      var r = n(93950),
        i = n(46686);
      t.exports = function (t, e, n) {
        var o = !0,
          a = !0;
        if ('function' != typeof t) throw new TypeError('Expected a function');
        return (
          i(n) &&
            ((o = 'leading' in n ? !!n.leading : o),
            (a = 'trailing' in n ? !!n.trailing : a)),
          r(t, e, { leading: o, maxWait: e, trailing: a })
        );
      };
    },
    37303: (t, e, n) => {
      var r = n(40801),
        i = 1 / 0;
      t.exports = function (t) {
        return t
          ? (t = r(t)) === i || t === -1 / 0
            ? 17976931348623157e292 * (t < 0 ? -1 : 1)
            : t === t
            ? t
            : 0
          : 0 === t
          ? t
          : 0;
      };
    },
    99140: (t, e, n) => {
      var r = n(37303);
      t.exports = function (t) {
        var e = r(t),
          n = e % 1;
        return e === e ? (n ? e - n : e) : 0;
      };
    },
    40801: (t, e, n) => {
      var r = n(61141),
        i = n(46686),
        o = n(19841),
        a = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        l = parseInt;
      t.exports = function (t) {
        if ('number' == typeof t) return t;
        if (o(t)) return NaN;
        if (i(t)) {
          var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
          t = i(e) ? e + '' : e;
        }
        if ('string' != typeof t) return 0 === t ? t : +t;
        t = r(t);
        var n = c.test(t);
        return n || u.test(t) ? l(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t;
      };
    },
    20977: (t, e, n) => {
      var r = n(9096),
        i = n(64416);
      t.exports = function (t, e) {
        return t && t.length ? i(t, r(e, 2)) : [];
      };
    },
    643: (t, e, n) => {
      var r = n(57676)('toUpperCase');
      t.exports = r;
    },
    21578: (t, e, n) => {
      'use strict';
      n.d(e, { Ay: () => re });
      var r = n(65043),
        i = n(65173),
        o = n.n(i),
        a = Object.getOwnPropertyNames,
        c = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty;
      function l(t, e) {
        return function (n, r, i) {
          return t(n, r, i) && e(n, r, i);
        };
      }
      function s(t) {
        return function (e, n, r) {
          if (!e || !n || 'object' !== typeof e || 'object' !== typeof n)
            return t(e, n, r);
          var i = r.cache,
            o = i.get(e),
            a = i.get(n);
          if (o && a) return o === n && a === e;
          i.set(e, n), i.set(n, e);
          var c = t(e, n, r);
          return i.delete(e), i.delete(n), c;
        };
      }
      function f(t) {
        return a(t).concat(c(t));
      }
      var p =
        Object.hasOwn ||
        function (t, e) {
          return u.call(t, e);
        };
      function h(t, e) {
        return t || e ? t === e : t === e || (t !== t && e !== e);
      }
      var d = '_owner',
        y = Object.getOwnPropertyDescriptor,
        v = Object.keys;
      function m(t, e, n) {
        var r = t.length;
        if (e.length !== r) return !1;
        for (; r-- > 0; ) if (!n.equals(t[r], e[r], r, r, t, e, n)) return !1;
        return !0;
      }
      function g(t, e) {
        return h(t.getTime(), e.getTime());
      }
      function b(t, e, n) {
        if (t.size !== e.size) return !1;
        for (
          var r, i, o = {}, a = t.entries(), c = 0;
          (r = a.next()) && !r.done;

        ) {
          for (
            var u = e.entries(), l = !1, s = 0;
            (i = u.next()) && !i.done;

          ) {
            var f = r.value,
              p = f[0],
              h = f[1],
              d = i.value,
              y = d[0],
              v = d[1];
            l ||
              o[s] ||
              !(l =
                n.equals(p, y, c, s, t, e, n) &&
                n.equals(h, v, p, y, t, e, n)) ||
              (o[s] = !0),
              s++;
          }
          if (!l) return !1;
          c++;
        }
        return !0;
      }
      function x(t, e, n) {
        var r,
          i = v(t),
          o = i.length;
        if (v(e).length !== o) return !1;
        for (; o-- > 0; ) {
          if (
            (r = i[o]) === d &&
            (t.$$typeof || e.$$typeof) &&
            t.$$typeof !== e.$$typeof
          )
            return !1;
          if (!p(e, r) || !n.equals(t[r], e[r], r, r, t, e, n)) return !1;
        }
        return !0;
      }
      function w(t, e, n) {
        var r,
          i,
          o,
          a = f(t),
          c = a.length;
        if (f(e).length !== c) return !1;
        for (; c-- > 0; ) {
          if (
            (r = a[c]) === d &&
            (t.$$typeof || e.$$typeof) &&
            t.$$typeof !== e.$$typeof
          )
            return !1;
          if (!p(e, r)) return !1;
          if (!n.equals(t[r], e[r], r, r, t, e, n)) return !1;
          if (
            ((i = y(t, r)),
            (o = y(e, r)),
            (i || o) &&
              (!i ||
                !o ||
                i.configurable !== o.configurable ||
                i.enumerable !== o.enumerable ||
                i.writable !== o.writable))
          )
            return !1;
        }
        return !0;
      }
      function O(t, e) {
        return h(t.valueOf(), e.valueOf());
      }
      function A(t, e) {
        return t.source === e.source && t.flags === e.flags;
      }
      function S(t, e, n) {
        if (t.size !== e.size) return !1;
        for (var r, i, o = {}, a = t.values(); (r = a.next()) && !r.done; ) {
          for (var c = e.values(), u = !1, l = 0; (i = c.next()) && !i.done; )
            u ||
              o[l] ||
              !(u = n.equals(r.value, i.value, r.value, i.value, t, e, n)) ||
              (o[l] = !0),
              l++;
          if (!u) return !1;
        }
        return !0;
      }
      function j(t, e) {
        var n = t.length;
        if (e.length !== n) return !1;
        for (; n-- > 0; ) if (t[n] !== e[n]) return !1;
        return !0;
      }
      var P = '[object Arguments]',
        E = '[object Boolean]',
        k = '[object Date]',
        M = '[object Map]',
        T = '[object Number]',
        C = '[object Object]',
        _ = '[object RegExp]',
        I = '[object Set]',
        D = '[object String]',
        N = Array.isArray,
        B =
          'function' === typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView
            : null,
        R = Object.assign,
        L = Object.prototype.toString.call.bind(Object.prototype.toString);
      var F = z();
      z({ strict: !0 }),
        z({ circular: !0 }),
        z({ circular: !0, strict: !0 }),
        z({
          createInternalComparator: function () {
            return h;
          }
        }),
        z({
          strict: !0,
          createInternalComparator: function () {
            return h;
          }
        }),
        z({
          circular: !0,
          createInternalComparator: function () {
            return h;
          }
        }),
        z({
          circular: !0,
          createInternalComparator: function () {
            return h;
          },
          strict: !0
        });
      function z(t) {
        void 0 === t && (t = {});
        var e,
          n = t.circular,
          r = void 0 !== n && n,
          i = t.createInternalComparator,
          o = t.createState,
          a = t.strict,
          c = void 0 !== a && a,
          u = (function (t) {
            var e = t.circular,
              n = t.createCustomConfig,
              r = t.strict,
              i = {
                areArraysEqual: r ? w : m,
                areDatesEqual: g,
                areMapsEqual: r ? l(b, w) : b,
                areObjectsEqual: r ? w : x,
                arePrimitiveWrappersEqual: O,
                areRegExpsEqual: A,
                areSetsEqual: r ? l(S, w) : S,
                areTypedArraysEqual: r ? w : j
              };
            if ((n && (i = R({}, i, n(i))), e)) {
              var o = s(i.areArraysEqual),
                a = s(i.areMapsEqual),
                c = s(i.areObjectsEqual),
                u = s(i.areSetsEqual);
              i = R({}, i, {
                areArraysEqual: o,
                areMapsEqual: a,
                areObjectsEqual: c,
                areSetsEqual: u
              });
            }
            return i;
          })(t),
          f = (function (t) {
            var e = t.areArraysEqual,
              n = t.areDatesEqual,
              r = t.areMapsEqual,
              i = t.areObjectsEqual,
              o = t.arePrimitiveWrappersEqual,
              a = t.areRegExpsEqual,
              c = t.areSetsEqual,
              u = t.areTypedArraysEqual;
            return function (t, l, s) {
              if (t === l) return !0;
              if (
                null == t ||
                null == l ||
                'object' !== typeof t ||
                'object' !== typeof l
              )
                return t !== t && l !== l;
              var f = t.constructor;
              if (f !== l.constructor) return !1;
              if (f === Object) return i(t, l, s);
              if (N(t)) return e(t, l, s);
              if (null != B && B(t)) return u(t, l, s);
              if (f === Date) return n(t, l, s);
              if (f === RegExp) return a(t, l, s);
              if (f === Map) return r(t, l, s);
              if (f === Set) return c(t, l, s);
              var p = L(t);
              return p === k
                ? n(t, l, s)
                : p === _
                ? a(t, l, s)
                : p === M
                ? r(t, l, s)
                : p === I
                ? c(t, l, s)
                : p === C
                ? 'function' !== typeof t.then &&
                  'function' !== typeof l.then &&
                  i(t, l, s)
                : p === P
                ? i(t, l, s)
                : (p === E || p === T || p === D) && o(t, l, s);
            };
          })(u);
        return (function (t) {
          var e = t.circular,
            n = t.comparator,
            r = t.createState,
            i = t.equals,
            o = t.strict;
          if (r)
            return function (t, a) {
              var c = r(),
                u = c.cache,
                l = void 0 === u ? (e ? new WeakMap() : void 0) : u,
                s = c.meta;
              return n(t, a, { cache: l, equals: i, meta: s, strict: o });
            };
          if (e)
            return function (t, e) {
              return n(t, e, {
                cache: new WeakMap(),
                equals: i,
                meta: void 0,
                strict: o
              });
            };
          var a = { cache: void 0, equals: i, meta: void 0, strict: o };
          return function (t, e) {
            return n(t, e, a);
          };
        })({
          circular: r,
          comparator: f,
          createState: o,
          equals: i
            ? i(f)
            : ((e = f),
              function (t, n, r, i, o, a, c) {
                return e(t, n, c);
              }),
          strict: c
        });
      }
      function U(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = -1;
        requestAnimationFrame(function r(i) {
          n < 0 && (n = i),
            i - n > e
              ? (t(i), (n = -1))
              : (function (t) {
                  'undefined' !== typeof requestAnimationFrame &&
                    requestAnimationFrame(t);
                })(r);
        });
      }
      function W(t) {
        return (
          (W =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          W(t)
        );
      }
      function X(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t) {
            if (
              ('undefined' !== typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ('string' === typeof t) return q(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return q(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function q(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function K() {
        var t = function () {
            return null;
          },
          e = !1,
          n = function n(r) {
            if (!e) {
              if (Array.isArray(r)) {
                if (!r.length) return;
                var i = X(r),
                  o = i[0],
                  a = i.slice(1);
                return 'number' === typeof o
                  ? void U(n.bind(null, a), o)
                  : (n(o), void U(n.bind(null, a)));
              }
              'object' === W(r) && t(r), 'function' === typeof r && r();
            }
          };
        return {
          stop: function () {
            e = !0;
          },
          start: function (t) {
            (e = !1), n(t);
          },
          subscribe: function (e) {
            return (
              (t = e),
              function () {
                t = function () {
                  return null;
                };
              }
            );
          }
        };
      }
      function H(t) {
        return (
          (H =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          H(t)
        );
      }
      function V(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function G(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? V(Object(n), !0).forEach(function (e) {
                Y(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : V(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function Y(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' !== H(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' !== H(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' === H(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      var J = function (t) {
          return t;
        },
        Z = function (t, e) {
          return Object.keys(e).reduce(function (n, r) {
            return G(G({}, n), {}, Y({}, r, t(r, e[r])));
          }, {});
        },
        $ = function (t, e, n) {
          return t
            .map(function (t) {
              return ''
                .concat(
                  ((r = t),
                  r.replace(/([A-Z])/g, function (t) {
                    return '-'.concat(t.toLowerCase());
                  })),
                  ' '
                )
                .concat(e, 'ms ')
                .concat(n);
              var r;
            })
            .join(',');
        };
      function Q(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != n) {
              var r,
                i,
                o,
                a,
                c = [],
                u = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return c;
            }
          })(t, e) ||
          et(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function tt(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return nt(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' !== typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          et(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function et(t, e) {
        if (t) {
          if ('string' === typeof t) return nt(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? nt(t, e)
              : void 0
          );
        }
      }
      function nt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var rt = 1e-4,
        it = function (t, e) {
          return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1];
        },
        ot = function (t, e) {
          return t
            .map(function (t, n) {
              return t * Math.pow(e, n);
            })
            .reduce(function (t, e) {
              return t + e;
            });
        },
        at = function (t, e) {
          return function (n) {
            var r = it(t, e);
            return ot(r, n);
          };
        },
        ct = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3];
          if (1 === e.length)
            switch (e[0]) {
              case 'linear':
                (r = 0), (i = 0), (o = 1), (a = 1);
                break;
              case 'ease':
                (r = 0.25), (i = 0.1), (o = 0.25), (a = 1);
                break;
              case 'ease-in':
                (r = 0.42), (i = 0), (o = 1), (a = 1);
                break;
              case 'ease-out':
                (r = 0.42), (i = 0), (o = 0.58), (a = 1);
                break;
              case 'ease-in-out':
                (r = 0), (i = 0), (o = 0.58), (a = 1);
                break;
              default:
                var c = e[0].split('(');
                if (
                  'cubic-bezier' === c[0] &&
                  4 === c[1].split(')')[0].split(',').length
                ) {
                  var u = Q(
                    c[1]
                      .split(')')[0]
                      .split(',')
                      .map(function (t) {
                        return parseFloat(t);
                      }),
                    4
                  );
                  (r = u[0]), (i = u[1]), (o = u[2]), (a = u[3]);
                }
            }
          [r, o, i, a].every(function (t) {
            return 'number' === typeof t && t >= 0 && t <= 1;
          });
          var l,
            s,
            f = at(r, o),
            p = at(i, a),
            h =
              ((l = r),
              (s = o),
              function (t) {
                var e = it(l, s),
                  n = [].concat(
                    tt(
                      e
                        .map(function (t, e) {
                          return t * e;
                        })
                        .slice(1)
                    ),
                    [0]
                  );
                return ot(n, t);
              }),
            d = function (t) {
              for (var e, n = t > 1 ? 1 : t, r = n, i = 0; i < 8; ++i) {
                var o = f(r) - n,
                  a = h(r);
                if (Math.abs(o - n) < rt || a < rt) return p(r);
                r = (e = r - o / a) > 1 ? 1 : e < 0 ? 0 : e;
              }
              return p(r);
            };
          return (d.isStepper = !1), d;
        },
        ut = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var r = e[0];
          if ('string' === typeof r)
            switch (r) {
              case 'ease':
              case 'ease-in-out':
              case 'ease-out':
              case 'ease-in':
              case 'linear':
                return ct(r);
              case 'spring':
                return (function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e = t.stiff,
                    n = void 0 === e ? 100 : e,
                    r = t.damping,
                    i = void 0 === r ? 8 : r,
                    o = t.dt,
                    a = void 0 === o ? 17 : o,
                    c = function (t, e, r) {
                      var o = r + ((-(t - e) * n - r * i) * a) / 1e3,
                        c = (r * a) / 1e3 + t;
                      return Math.abs(c - e) < rt && Math.abs(o) < rt
                        ? [e, 0]
                        : [c, o];
                    };
                  return (c.isStepper = !0), (c.dt = a), c;
                })();
              default:
                if ('cubic-bezier' === r.split('(')[0]) return ct(r);
            }
          return 'function' === typeof r ? r : null;
        };
      function lt(t) {
        return (
          (lt =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          lt(t)
        );
      }
      function st(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return vt(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' !== typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          yt(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function ft(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function pt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ft(Object(n), !0).forEach(function (e) {
                ht(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : ft(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function ht(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' !== lt(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' !== lt(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' === lt(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function dt(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != n) {
              var r,
                i,
                o,
                a,
                c = [],
                u = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return c;
            }
          })(t, e) ||
          yt(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function yt(t, e) {
        if (t) {
          if ('string' === typeof t) return vt(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? vt(t, e)
              : void 0
          );
        }
      }
      function vt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var mt = function (t, e, n) {
          return t + (e - t) * n;
        },
        gt = function (t) {
          return t.from !== t.to;
        },
        bt = function t(e, n, r) {
          var i = Z(function (t, n) {
            if (gt(n)) {
              var r = dt(e(n.from, n.to, n.velocity), 2),
                i = r[0],
                o = r[1];
              return pt(pt({}, n), {}, { from: i, velocity: o });
            }
            return n;
          }, n);
          return r < 1
            ? Z(function (t, e) {
                return gt(e)
                  ? pt(
                      pt({}, e),
                      {},
                      {
                        velocity: mt(e.velocity, i[t].velocity, r),
                        from: mt(e.from, i[t].from, r)
                      }
                    )
                  : e;
              }, n)
            : t(e, i, r - 1);
        };
      const xt = function (t, e, n, r, i) {
        var o,
          a,
          c,
          u,
          l =
            ((o = t),
            (a = e),
            [Object.keys(o), Object.keys(a)].reduce(function (t, e) {
              return t.filter(function (t) {
                return e.includes(t);
              });
            })),
          s = l.reduce(function (n, r) {
            return pt(pt({}, n), {}, ht({}, r, [t[r], e[r]]));
          }, {}),
          f = l.reduce(function (n, r) {
            return pt(
              pt({}, n),
              {},
              ht({}, r, { from: t[r], velocity: 0, to: e[r] })
            );
          }, {}),
          p = -1,
          h = function () {
            return null;
          };
        return (
          (h = n.isStepper
            ? function (r) {
                c || (c = r);
                var o = (r - c) / n.dt;
                (f = bt(n, f, o)),
                  i(
                    pt(
                      pt(pt({}, t), e),
                      Z(function (t, e) {
                        return e.from;
                      }, f)
                    )
                  ),
                  (c = r),
                  Object.values(f).filter(gt).length &&
                    (p = requestAnimationFrame(h));
              }
            : function (o) {
                u || (u = o);
                var a = (o - u) / r,
                  c = Z(function (t, e) {
                    return mt.apply(void 0, st(e).concat([n(a)]));
                  }, s);
                if ((i(pt(pt(pt({}, t), e), c)), a < 1))
                  p = requestAnimationFrame(h);
                else {
                  var l = Z(function (t, e) {
                    return mt.apply(void 0, st(e).concat([n(1)]));
                  }, s);
                  i(pt(pt(pt({}, t), e), l));
                }
              }),
          function () {
            return (
              requestAnimationFrame(h),
              function () {
                cancelAnimationFrame(p);
              }
            );
          }
        );
      };
      function wt(t) {
        return (
          (wt =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          wt(t)
        );
      }
      var Ot = [
        'children',
        'begin',
        'duration',
        'attributeName',
        'easing',
        'isActive',
        'steps',
        'from',
        'to',
        'canBegin',
        'onAnimationEnd',
        'shouldReAnimate',
        'onAnimationReStart'
      ];
      function At(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function St(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return jt(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' !== typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ('string' === typeof t) return jt(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return jt(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function jt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Pt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Et(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Pt(Object(n), !0).forEach(function (e) {
                kt(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Pt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function kt(t, e, n) {
        return (
          (e = Tt(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function Mt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, Tt(r.key), r);
        }
      }
      function Tt(t) {
        var e = (function (t, e) {
          if ('object' !== wt(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' !== wt(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' === wt(e) ? e : String(e);
      }
      function Ct(t, e) {
        return (
          (Ct = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Ct(t, e)
        );
      }
      function _t(t) {
        var e = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Nt(t);
          if (e) {
            var i = Nt(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return It(this, n);
        };
      }
      function It(t, e) {
        if (e && ('object' === wt(e) || 'function' === typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return Dt(t);
      }
      function Dt(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Nt(t) {
        return (
          (Nt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Nt(t)
        );
      }
      var Bt = (function (t) {
        !(function (t, e) {
          if ('function' !== typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            e && Ct(t, e);
        })(a, t);
        var e,
          n,
          i,
          o = _t(a);
        function a(t, e) {
          var n;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, a);
          var r = (n = o.call(this, t, e)).props,
            i = r.isActive,
            c = r.attributeName,
            u = r.from,
            l = r.to,
            s = r.steps,
            f = r.children,
            p = r.duration;
          if (
            ((n.handleStyleChange = n.handleStyleChange.bind(Dt(n))),
            (n.changeStyle = n.changeStyle.bind(Dt(n))),
            !i || p <= 0)
          )
            return (
              (n.state = { style: {} }),
              'function' === typeof f && (n.state = { style: l }),
              It(n)
            );
          if (s && s.length) n.state = { style: s[0].style };
          else if (u) {
            if ('function' === typeof f) return (n.state = { style: u }), It(n);
            n.state = { style: c ? kt({}, c, u) : u };
          } else n.state = { style: {} };
          return n;
        }
        return (
          (e = a),
          (n = [
            {
              key: 'componentDidMount',
              value: function () {
                var t = this.props,
                  e = t.isActive,
                  n = t.canBegin;
                (this.mounted = !0), e && n && this.runAnimation(this.props);
              }
            },
            {
              key: 'componentDidUpdate',
              value: function (t) {
                var e = this.props,
                  n = e.isActive,
                  r = e.canBegin,
                  i = e.attributeName,
                  o = e.shouldReAnimate,
                  a = e.to,
                  c = e.from,
                  u = this.state.style;
                if (r)
                  if (n) {
                    if (!(F(t.to, a) && t.canBegin && t.isActive)) {
                      var l = !t.canBegin || !t.isActive;
                      this.manager && this.manager.stop(),
                        this.stopJSAnimation && this.stopJSAnimation();
                      var s = l || o ? c : t.to;
                      if (this.state && u) {
                        var f = { style: i ? kt({}, i, s) : s };
                        ((i && u[i] !== s) || (!i && u !== s)) &&
                          this.setState(f);
                      }
                      this.runAnimation(
                        Et(Et({}, this.props), {}, { from: s, begin: 0 })
                      );
                    }
                  } else {
                    var p = { style: i ? kt({}, i, a) : a };
                    this.state &&
                      u &&
                      ((i && u[i] !== a) || (!i && u !== a)) &&
                      this.setState(p);
                  }
              }
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.mounted = !1;
                var t = this.props.onAnimationEnd;
                this.unSubscribe && this.unSubscribe(),
                  this.manager && (this.manager.stop(), (this.manager = null)),
                  this.stopJSAnimation && this.stopJSAnimation(),
                  t && t();
              }
            },
            {
              key: 'handleStyleChange',
              value: function (t) {
                this.changeStyle(t);
              }
            },
            {
              key: 'changeStyle',
              value: function (t) {
                this.mounted && this.setState({ style: t });
              }
            },
            {
              key: 'runJSAnimation',
              value: function (t) {
                var e = this,
                  n = t.from,
                  r = t.to,
                  i = t.duration,
                  o = t.easing,
                  a = t.begin,
                  c = t.onAnimationEnd,
                  u = t.onAnimationStart,
                  l = xt(n, r, ut(o), i, this.changeStyle);
                this.manager.start([
                  u,
                  a,
                  function () {
                    e.stopJSAnimation = l();
                  },
                  i,
                  c
                ]);
              }
            },
            {
              key: 'runStepAnimation',
              value: function (t) {
                var e = this,
                  n = t.steps,
                  r = t.begin,
                  i = t.onAnimationStart,
                  o = n[0],
                  a = o.style,
                  c = o.duration,
                  u = void 0 === c ? 0 : c;
                return this.manager.start(
                  [i].concat(
                    St(
                      n.reduce(
                        function (t, r, i) {
                          if (0 === i) return t;
                          var o = r.duration,
                            a = r.easing,
                            c = void 0 === a ? 'ease' : a,
                            u = r.style,
                            l = r.properties,
                            s = r.onAnimationEnd,
                            f = i > 0 ? n[i - 1] : r,
                            p = l || Object.keys(u);
                          if ('function' === typeof c || 'spring' === c)
                            return [].concat(St(t), [
                              e.runJSAnimation.bind(e, {
                                from: f.style,
                                to: u,
                                duration: o,
                                easing: c
                              }),
                              o
                            ]);
                          var h = $(p, o, c),
                            d = Et(
                              Et(Et({}, f.style), u),
                              {},
                              { transition: h }
                            );
                          return [].concat(St(t), [d, o, s]).filter(J);
                        },
                        [a, Math.max(u, r)]
                      )
                    ),
                    [t.onAnimationEnd]
                  )
                );
              }
            },
            {
              key: 'runAnimation',
              value: function (t) {
                this.manager || (this.manager = K());
                var e = t.begin,
                  n = t.duration,
                  r = t.attributeName,
                  i = t.to,
                  o = t.easing,
                  a = t.onAnimationStart,
                  c = t.onAnimationEnd,
                  u = t.steps,
                  l = t.children,
                  s = this.manager;
                if (
                  ((this.unSubscribe = s.subscribe(this.handleStyleChange)),
                  'function' !== typeof o &&
                    'function' !== typeof l &&
                    'spring' !== o)
                )
                  if (u.length > 1) this.runStepAnimation(t);
                  else {
                    var f = r ? kt({}, r, i) : i,
                      p = $(Object.keys(f), n, o);
                    s.start([a, e, Et(Et({}, f), {}, { transition: p }), n, c]);
                  }
                else this.runJSAnimation(t);
              }
            },
            {
              key: 'render',
              value: function () {
                var t = this.props,
                  e = t.children,
                  n = (t.begin, t.duration),
                  i = (t.attributeName, t.easing, t.isActive),
                  o =
                    (t.steps,
                    t.from,
                    t.to,
                    t.canBegin,
                    t.onAnimationEnd,
                    t.shouldReAnimate,
                    t.onAnimationReStart,
                    At(t, Ot)),
                  a = r.Children.count(e),
                  c = this.state.style;
                if ('function' === typeof e) return e(c);
                if (!i || 0 === a || n <= 0) return e;
                var u = function (t) {
                  var e = t.props,
                    n = e.style,
                    i = void 0 === n ? {} : n,
                    a = e.className;
                  return (0, r.cloneElement)(
                    t,
                    Et(Et({}, o), {}, { style: Et(Et({}, i), c), className: a })
                  );
                };
                return 1 === a
                  ? u(r.Children.only(e))
                  : r.createElement(
                      'div',
                      null,
                      r.Children.map(e, function (t) {
                        return u(t);
                      })
                    );
              }
            }
          ]) && Mt(e.prototype, n),
          i && Mt(e, i),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          a
        );
      })(r.PureComponent);
      (Bt.displayName = 'Animate'),
        (Bt.defaultProps = {
          begin: 0,
          duration: 1e3,
          from: '',
          to: '',
          attributeName: '',
          easing: 'ease',
          isActive: !0,
          canBegin: !0,
          steps: [],
          onAnimationEnd: function () {},
          onAnimationStart: function () {}
        }),
        (Bt.propTypes = {
          from: o().oneOfType([o().object, o().string]),
          to: o().oneOfType([o().object, o().string]),
          attributeName: o().string,
          duration: o().number,
          begin: o().number,
          easing: o().oneOfType([o().string, o().func]),
          steps: o().arrayOf(
            o().shape({
              duration: o().number.isRequired,
              style: o().object.isRequired,
              easing: o().oneOfType([
                o().oneOf([
                  'ease',
                  'ease-in',
                  'ease-out',
                  'ease-in-out',
                  'linear'
                ]),
                o().func
              ]),
              properties: o().arrayOf('string'),
              onAnimationEnd: o().func
            })
          ),
          children: o().oneOfType([o().node, o().func]),
          isActive: o().bool,
          canBegin: o().bool,
          onAnimationEnd: o().func,
          shouldReAnimate: o().bool,
          onAnimationStart: o().func,
          onAnimationReStart: o().func
        });
      const Rt = Bt;
      var Lt = n(4754),
        Ft = n(88692),
        zt = ['children', 'appearOptions', 'enterOptions', 'leaveOptions'];
      function Ut(t) {
        return (
          (Ut =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          Ut(t)
        );
      }
      function Wt() {
        return (
          (Wt = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          Wt.apply(this, arguments)
        );
      }
      function Xt(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function qt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Kt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? qt(Object(n), !0).forEach(function (e) {
                Zt(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : qt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function Ht(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, $t(r.key), r);
        }
      }
      function Vt(t, e) {
        return (
          (Vt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Vt(t, e)
        );
      }
      function Gt(t) {
        var e = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Jt(t);
          if (e) {
            var i = Jt(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ('object' === Ut(e) || 'function' === typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return Yt(t);
          })(this, n);
        };
      }
      function Yt(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Jt(t) {
        return (
          (Jt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Jt(t)
        );
      }
      function Zt(t, e, n) {
        return (
          (e = $t(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function $t(t) {
        var e = (function (t, e) {
          if ('object' !== Ut(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' !== Ut(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' === Ut(e) ? e : String(e);
      }
      var Qt = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.steps,
            n = t.duration;
          return e && e.length
            ? e.reduce(function (t, e) {
                return (
                  t +
                  (Number.isFinite(e.duration) && e.duration > 0
                    ? e.duration
                    : 0)
                );
              }, 0)
            : Number.isFinite(n)
            ? n
            : 0;
        },
        te = (function (t) {
          !(function (t, e) {
            if ('function' !== typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 }
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && Vt(t, e);
          })(a, t);
          var e,
            n,
            i,
            o = Gt(a);
          function a() {
            var t;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, a),
              Zt(Yt((t = o.call(this))), 'handleEnter', function (e, n) {
                var r = t.props,
                  i = r.appearOptions,
                  o = r.enterOptions;
                t.handleStyleActive(n ? i : o);
              }),
              Zt(Yt(t), 'handleExit', function () {
                var e = t.props.leaveOptions;
                t.handleStyleActive(e);
              }),
              (t.state = { isActive: !1 }),
              t
            );
          }
          return (
            (e = a),
            (n = [
              {
                key: 'handleStyleActive',
                value: function (t) {
                  if (t) {
                    var e = t.onAnimationEnd
                      ? function () {
                          t.onAnimationEnd();
                        }
                      : null;
                    this.setState(
                      Kt(Kt({}, t), {}, { onAnimationEnd: e, isActive: !0 })
                    );
                  }
                }
              },
              {
                key: 'parseTimeout',
                value: function () {
                  var t = this.props,
                    e = t.appearOptions,
                    n = t.enterOptions,
                    r = t.leaveOptions;
                  return Qt(e) + Qt(n) + Qt(r);
                }
              },
              {
                key: 'render',
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.children,
                    i =
                      (e.appearOptions,
                      e.enterOptions,
                      e.leaveOptions,
                      Xt(e, zt));
                  return r.createElement(
                    Ft.Ay,
                    Wt({}, i, {
                      onEnter: this.handleEnter,
                      onExit: this.handleExit,
                      timeout: this.parseTimeout()
                    }),
                    function () {
                      return r.createElement(Rt, t.state, r.Children.only(n));
                    }
                  );
                }
              }
            ]) && Ht(e.prototype, n),
            i && Ht(e, i),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            a
          );
        })(r.Component);
      te.propTypes = {
        appearOptions: o().object,
        enterOptions: o().object,
        leaveOptions: o().object,
        children: o().element
      };
      const ee = te;
      function ne(t) {
        var e = t.component,
          n = t.children,
          i = t.appear,
          o = t.enter,
          a = t.leave;
        return r.createElement(
          Lt.A,
          { component: e },
          r.Children.map(n, function (t, e) {
            return r.createElement(
              ee,
              {
                appearOptions: i,
                enterOptions: o,
                leaveOptions: a,
                key: 'child-'.concat(e)
              },
              t
            );
          })
        );
      }
      (ne.propTypes = {
        appear: o().object,
        enter: o().object,
        leave: o().object,
        children: o().oneOfType([o().array, o().element]),
        component: o().any
      }),
        (ne.defaultProps = { component: 'span' });
      const re = Rt;
    },
    38643: (t, e, n) => {
      'use strict';
      n.d(e, { y: () => K });
      var r = n(65043),
        i = n(35007),
        o = n(21578),
        a = n(19853),
        c = n.n(a),
        u = n(79686),
        l = n.n(u),
        s = n(94020),
        f = n(38813),
        p = n(17869),
        h = n(81519),
        d = n(76307),
        y = n(240),
        v = n(6015),
        m = n(20202),
        g = n(17287),
        b = n(3404),
        x = n(70879),
        w = ['x', 'y'];
      function O(t) {
        return (
          (O =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          O(t)
        );
      }
      function A() {
        return (
          (A = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          A.apply(this, arguments)
        );
      }
      function S(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function j(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? S(Object(n), !0).forEach(function (e) {
                P(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function P(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != O(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != O(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == O(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function E(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function k(t, e) {
        var n = t.x,
          r = t.y,
          i = E(t, w),
          o = ''.concat(n),
          a = parseInt(o, 10),
          c = ''.concat(r),
          u = parseInt(c, 10),
          l = ''.concat(e.height || i.height),
          s = parseInt(l, 10),
          f = ''.concat(e.width || i.width),
          p = parseInt(f, 10);
        return j(
          j(j(j(j({}, e), i), a ? { x: a } : {}), u ? { y: u } : {}),
          {},
          { height: s, width: p, name: e.name, radius: e.radius }
        );
      }
      function M(t) {
        return r.createElement(
          x.yp,
          A(
            {
              shapeType: 'rectangle',
              propTransformer: k,
              activeClassName: 'recharts-active-bar'
            },
            t
          )
        );
      }
      var T,
        C = ['value', 'background'];
      function _(t) {
        return (
          (_ =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          _(t)
        );
      }
      function I(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function D() {
        return (
          (D = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          D.apply(this, arguments)
        );
      }
      function N(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function B(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? N(Object(n), !0).forEach(function (e) {
                X(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function R(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, q(r.key), r);
        }
      }
      function L(t, e, n) {
        return (
          (e = z(e)),
          (function (t, e) {
            if (e && ('object' === _(e) || 'function' === typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return U(t);
          })(
            t,
            F()
              ? Reflect.construct(e, n || [], z(t).constructor)
              : e.apply(t, n)
          )
        );
      }
      function F() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (F = function () {
          return !!t;
        })();
      }
      function z(t) {
        return (
          (z = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          z(t)
        );
      }
      function U(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function W(t, e) {
        return (
          (W = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          W(t, e)
        );
      }
      function X(t, e, n) {
        return (
          (e = q(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function q(t) {
        var e = (function (t, e) {
          if ('object' != _(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' != _(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' == _(e) ? e : String(e);
      }
      var K = (function (t) {
        function e() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, e);
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
          return (
            X(U((t = L(this, e, [].concat(r)))), 'state', {
              isAnimationFinished: !1
            }),
            X(U(t), 'id', (0, d.NF)('recharts-bar-')),
            X(U(t), 'handleAnimationEnd', function () {
              var e = t.props.onAnimationEnd;
              t.setState({ isAnimationFinished: !0 }), e && e();
            }),
            X(U(t), 'handleAnimationStart', function () {
              var e = t.props.onAnimationStart;
              t.setState({ isAnimationFinished: !1 }), e && e();
            }),
            t
          );
        }
        var n, a, u;
        return (
          (function (t, e) {
            if ('function' !== typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 }
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && W(t, e);
          })(e, t),
          (n = e),
          (u = [
            {
              key: 'getDerivedStateFromProps',
              value: function (t, e) {
                return t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curData: t.data,
                      prevData: e.curData
                    }
                  : t.data !== e.curData
                  ? { curData: t.data }
                  : null;
              }
            }
          ]),
          (a = [
            {
              key: 'renderRectanglesStatically',
              value: function (t) {
                var e = this,
                  n = this.props,
                  i = n.shape,
                  o = n.dataKey,
                  a = n.activeIndex,
                  c = n.activeBar,
                  u = (0, y.J9)(this.props, !1);
                return (
                  t &&
                  t.map(function (t, n) {
                    var l = n === a,
                      f = l ? c : i,
                      p = B(
                        B(B({}, u), t),
                        {},
                        {
                          isActive: l,
                          option: f,
                          index: n,
                          dataKey: o,
                          onAnimationStart: e.handleAnimationStart,
                          onAnimationEnd: e.handleAnimationEnd
                        }
                      );
                    return r.createElement(
                      s.W,
                      D(
                        { className: 'recharts-bar-rectangle' },
                        (0, g.XC)(e.props, t, n),
                        {
                          key: 'rectangle-'
                            .concat(
                              null === t || void 0 === t ? void 0 : t.x,
                              '-'
                            )
                            .concat(
                              null === t || void 0 === t ? void 0 : t.y,
                              '-'
                            )
                            .concat(
                              null === t || void 0 === t ? void 0 : t.value
                            )
                        }
                      ),
                      r.createElement(M, p)
                    );
                  })
                );
              }
            },
            {
              key: 'renderRectanglesWithAnimation',
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.data,
                  i = e.layout,
                  a = e.isAnimationActive,
                  c = e.animationBegin,
                  u = e.animationDuration,
                  l = e.animationEasing,
                  f = e.animationId,
                  p = this.state.prevData;
                return r.createElement(
                  o.Ay,
                  {
                    begin: c,
                    duration: u,
                    isActive: a,
                    easing: l,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: 'bar-'.concat(f),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart
                  },
                  function (e) {
                    var o = e.t,
                      a = n.map(function (t, e) {
                        var n = p && p[e];
                        if (n) {
                          var r = (0, d.Dj)(n.x, t.x),
                            a = (0, d.Dj)(n.y, t.y),
                            c = (0, d.Dj)(n.width, t.width),
                            u = (0, d.Dj)(n.height, t.height);
                          return B(
                            B({}, t),
                            {},
                            { x: r(o), y: a(o), width: c(o), height: u(o) }
                          );
                        }
                        if ('horizontal' === i) {
                          var l = (0, d.Dj)(0, t.height)(o);
                          return B(
                            B({}, t),
                            {},
                            { y: t.y + t.height - l, height: l }
                          );
                        }
                        var s = (0, d.Dj)(0, t.width)(o);
                        return B(B({}, t), {}, { width: s });
                      });
                    return r.createElement(
                      s.W,
                      null,
                      t.renderRectanglesStatically(a)
                    );
                  }
                );
              }
            },
            {
              key: 'renderRectangles',
              value: function () {
                var t = this.props,
                  e = t.data,
                  n = t.isAnimationActive,
                  r = this.state.prevData;
                return !(n && e && e.length) || (r && c()(r, e))
                  ? this.renderRectanglesStatically(e)
                  : this.renderRectanglesWithAnimation();
              }
            },
            {
              key: 'renderBackground',
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.data,
                  i = e.dataKey,
                  o = e.activeIndex,
                  a = (0, y.J9)(this.props.background, !1);
                return n.map(function (e, n) {
                  e.value;
                  var c = e.background,
                    u = I(e, C);
                  if (!c) return null;
                  var l = B(
                    B(
                      B(B(B({}, u), {}, { fill: '#eee' }, c), a),
                      (0, g.XC)(t.props, e, n)
                    ),
                    {},
                    {
                      onAnimationStart: t.handleAnimationStart,
                      onAnimationEnd: t.handleAnimationEnd,
                      dataKey: i,
                      index: n,
                      key: 'background-bar-'.concat(n),
                      className: 'recharts-bar-background-rectangle'
                    }
                  );
                  return r.createElement(
                    M,
                    D({ option: t.props.background, isActive: n === o }, l)
                  );
                });
              }
            },
            {
              key: 'renderErrorBar',
              value: function (t, e) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var n = this.props,
                  i = n.data,
                  o = n.xAxis,
                  a = n.yAxis,
                  c = n.layout,
                  u = n.children,
                  l = (0, y.aS)(u, f.u);
                if (!l) return null;
                var p = 'vertical' === c ? i[0].height / 2 : i[0].width / 2,
                  h = function (t, e) {
                    var n = Array.isArray(t.value) ? t.value[1] : t.value;
                    return {
                      x: t.x,
                      y: t.y,
                      value: n,
                      errorVal: (0, m.kr)(t, e)
                    };
                  },
                  d = { clipPath: t ? 'url(#clipPath-'.concat(e, ')') : null };
                return r.createElement(
                  s.W,
                  d,
                  l.map(function (t) {
                    return r.cloneElement(t, {
                      key: 'error-bar-'.concat(e, '-').concat(t.props.dataKey),
                      data: i,
                      xAxis: o,
                      yAxis: a,
                      layout: c,
                      offset: p,
                      dataPointFormatter: h
                    });
                  })
                );
              }
            },
            {
              key: 'render',
              value: function () {
                var t = this.props,
                  e = t.hide,
                  n = t.data,
                  o = t.className,
                  a = t.xAxis,
                  c = t.yAxis,
                  u = t.left,
                  f = t.top,
                  p = t.width,
                  d = t.height,
                  y = t.isAnimationActive,
                  v = t.background,
                  m = t.id;
                if (e || !n || !n.length) return null;
                var g = this.state.isAnimationFinished,
                  b = (0, i.A)('recharts-bar', o),
                  x = a && a.allowDataOverflow,
                  w = c && c.allowDataOverflow,
                  O = x || w,
                  A = l()(m) ? this.id : m;
                return r.createElement(
                  s.W,
                  { className: b },
                  x || w
                    ? r.createElement(
                        'defs',
                        null,
                        r.createElement(
                          'clipPath',
                          { id: 'clipPath-'.concat(A) },
                          r.createElement('rect', {
                            x: x ? u : u - p / 2,
                            y: w ? f : f - d / 2,
                            width: x ? p : 2 * p,
                            height: w ? d : 2 * d
                          })
                        )
                      )
                    : null,
                  r.createElement(
                    s.W,
                    {
                      className: 'recharts-bar-rectangles',
                      clipPath: O ? 'url(#clipPath-'.concat(A, ')') : null
                    },
                    v ? this.renderBackground() : null,
                    this.renderRectangles()
                  ),
                  this.renderErrorBar(O, A),
                  (!y || g) && h.Z.renderCallByParent(this.props, n)
                );
              }
            }
          ]) && R(n.prototype, a),
          u && R(n, u),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          e
        );
      })(r.PureComponent);
      (T = K),
        X(K, 'displayName', 'Bar'),
        X(K, 'defaultProps', {
          xAxisId: 0,
          yAxisId: 0,
          legendType: 'rect',
          minPointSize: 0,
          hide: !1,
          data: [],
          layout: 'vertical',
          activeBar: !1,
          isAnimationActive: !v.m.isSsr,
          animationBegin: 0,
          animationDuration: 400,
          animationEasing: 'ease'
        }),
        X(K, 'getComposedData', function (t) {
          var e = t.props,
            n = t.item,
            r = t.barPosition,
            i = t.bandSize,
            o = t.xAxis,
            a = t.yAxis,
            c = t.xAxisTicks,
            u = t.yAxisTicks,
            l = t.stackedData,
            s = t.dataStartIndex,
            f = t.displayedData,
            h = t.offset,
            v = (0, m.xi)(r, n);
          if (!v) return null;
          var g = e.layout,
            x = n.props,
            w = x.dataKey,
            O = x.children,
            A = x.minPointSize,
            S = 'horizontal' === g ? a : o,
            j = l ? S.scale.domain() : null,
            P = (0, m.DW)({ numericAxis: S }),
            E = (0, y.aS)(O, p.f),
            k = f.map(function (t, e) {
              var r, f, p, h, y, x;
              l
                ? (r = (0, m._f)(l[s + e], j))
                : ((r = (0, m.kr)(t, w)), Array.isArray(r) || (r = [P, r]));
              var O = (function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                return function (n, r) {
                  if ('number' === typeof t) return t;
                  var i = 'number' === typeof n;
                  return i ? t(n, r) : (i || (0, b.A)(!1), e);
                };
              })(A, T.defaultProps.minPointSize)(r[1], e);
              if ('horizontal' === g) {
                var S,
                  k = [a.scale(r[0]), a.scale(r[1])],
                  M = k[0],
                  C = k[1];
                (f = (0, m.y2)({
                  axis: o,
                  ticks: c,
                  bandSize: i,
                  offset: v.offset,
                  entry: t,
                  index: e
                })),
                  (p =
                    null !== (S = null !== C && void 0 !== C ? C : M) &&
                    void 0 !== S
                      ? S
                      : void 0),
                  (h = v.size);
                var _ = M - C;
                if (
                  ((y = Number.isNaN(_) ? 0 : _),
                  (x = { x: f, y: a.y, width: h, height: a.height }),
                  Math.abs(O) > 0 && Math.abs(y) < Math.abs(O))
                ) {
                  var I = (0, d.sA)(y || O) * (Math.abs(O) - Math.abs(y));
                  (p -= I), (y += I);
                }
              } else {
                var D = [o.scale(r[0]), o.scale(r[1])],
                  N = D[0],
                  R = D[1];
                if (
                  ((f = N),
                  (p = (0, m.y2)({
                    axis: a,
                    ticks: u,
                    bandSize: i,
                    offset: v.offset,
                    entry: t,
                    index: e
                  })),
                  (h = R - N),
                  (y = v.size),
                  (x = { x: o.x, y: p, width: o.width, height: y }),
                  Math.abs(O) > 0 && Math.abs(h) < Math.abs(O))
                )
                  h += (0, d.sA)(h || O) * (Math.abs(O) - Math.abs(h));
              }
              return B(
                B(
                  B({}, t),
                  {},
                  {
                    x: f,
                    y: p,
                    width: h,
                    height: y,
                    value: l ? r : r[1],
                    payload: t,
                    background: x
                  },
                  E && E[e] && E[e].props
                ),
                {},
                {
                  tooltipPayload: [(0, m.zb)(n, t)],
                  tooltipPosition: { x: f + h / 2, y: p + y / 2 }
                }
              );
            });
          return B({ data: k, layout: g }, h);
        });
    },
    57671: (t, e, n) => {
      'use strict';
      n.d(e, { u: () => _ });
      var r = n(65043),
        i = n(11629),
        o = n.n(i),
        a = n(33097),
        c = n.n(a),
        u = n(35007),
        l = n(45248),
        s = n(94020),
        f = n(84140),
        p = n(92647),
        h = n(76307),
        d = n(17287),
        y = n(240),
        v = n(98854),
        m = ['viewBox'],
        g = ['viewBox'],
        b = ['ticks'];
      function x(t) {
        return (
          (x =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          x(t)
        );
      }
      function w() {
        return (
          (w = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          w.apply(this, arguments)
        );
      }
      function O(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function A(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? O(Object(n), !0).forEach(function (e) {
                T(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function S(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function j(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, C(r.key), r);
        }
      }
      function P(t, e, n) {
        return (
          (e = k(e)),
          (function (t, e) {
            if (e && ('object' === x(e) || 'function' === typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(
            t,
            E()
              ? Reflect.construct(e, n || [], k(t).constructor)
              : e.apply(t, n)
          )
        );
      }
      function E() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (E = function () {
          return !!t;
        })();
      }
      function k(t) {
        return (
          (k = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          k(t)
        );
      }
      function M(t, e) {
        return (
          (M = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          M(t, e)
        );
      }
      function T(t, e, n) {
        return (
          (e = C(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function C(t) {
        var e = (function (t, e) {
          if ('object' != x(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' != x(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' == x(e) ? e : String(e);
      }
      var _ = (function (t) {
        function e(t) {
          var n;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
            ((n = P(this, e, [t])).state = { fontSize: '', letterSpacing: '' }),
            n
          );
        }
        var n, i, a;
        return (
          (function (t, e) {
            if ('function' !== typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 }
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && M(t, e);
          })(e, t),
          (n = e),
          (a = [
            {
              key: 'renderTickItem',
              value: function (t, e, n) {
                return r.isValidElement(t)
                  ? r.cloneElement(t, e)
                  : o()(t)
                  ? t(e)
                  : r.createElement(
                      f.E,
                      w({}, e, {
                        className: 'recharts-cartesian-axis-tick-value'
                      }),
                      n
                    );
              }
            }
          ]),
          (i = [
            {
              key: 'shouldComponentUpdate',
              value: function (t, e) {
                var n = t.viewBox,
                  r = S(t, m),
                  i = this.props,
                  o = i.viewBox,
                  a = S(i, g);
                return (
                  !(0, l.b)(n, o) || !(0, l.b)(r, a) || !(0, l.b)(e, this.state)
                );
              }
            },
            {
              key: 'componentDidMount',
              value: function () {
                var t = this.layerReference;
                if (t) {
                  var e = t.getElementsByClassName(
                    'recharts-cartesian-axis-tick-value'
                  )[0];
                  e &&
                    this.setState({
                      fontSize: window.getComputedStyle(e).fontSize,
                      letterSpacing: window.getComputedStyle(e).letterSpacing
                    });
                }
              }
            },
            {
              key: 'getTickLineCoord',
              value: function (t) {
                var e,
                  n,
                  r,
                  i,
                  o,
                  a,
                  c = this.props,
                  u = c.x,
                  l = c.y,
                  s = c.width,
                  f = c.height,
                  p = c.orientation,
                  d = c.tickSize,
                  y = c.mirror,
                  v = c.tickMargin,
                  m = y ? -1 : 1,
                  g = t.tickSize || d,
                  b = (0, h.Et)(t.tickCoord) ? t.tickCoord : t.coordinate;
                switch (p) {
                  case 'top':
                    (e = n = t.coordinate),
                      (a = (r = (i = l + +!y * f) - m * g) - m * v),
                      (o = b);
                    break;
                  case 'left':
                    (r = i = t.coordinate),
                      (o = (e = (n = u + +!y * s) - m * g) - m * v),
                      (a = b);
                    break;
                  case 'right':
                    (r = i = t.coordinate),
                      (o = (e = (n = u + +y * s) + m * g) + m * v),
                      (a = b);
                    break;
                  default:
                    (e = n = t.coordinate),
                      (a = (r = (i = l + +y * f) + m * g) + m * v),
                      (o = b);
                }
                return {
                  line: { x1: e, y1: r, x2: n, y2: i },
                  tick: { x: o, y: a }
                };
              }
            },
            {
              key: 'getTickTextAnchor',
              value: function () {
                var t,
                  e = this.props,
                  n = e.orientation,
                  r = e.mirror;
                switch (n) {
                  case 'left':
                    t = r ? 'start' : 'end';
                    break;
                  case 'right':
                    t = r ? 'end' : 'start';
                    break;
                  default:
                    t = 'middle';
                }
                return t;
              }
            },
            {
              key: 'getTickVerticalAnchor',
              value: function () {
                var t = this.props,
                  e = t.orientation,
                  n = t.mirror,
                  r = 'end';
                switch (e) {
                  case 'left':
                  case 'right':
                    r = 'middle';
                    break;
                  case 'top':
                    r = n ? 'start' : 'end';
                    break;
                  default:
                    r = n ? 'end' : 'start';
                }
                return r;
              }
            },
            {
              key: 'renderAxisLine',
              value: function () {
                var t = this.props,
                  e = t.x,
                  n = t.y,
                  i = t.width,
                  o = t.height,
                  a = t.orientation,
                  l = t.mirror,
                  s = t.axisLine,
                  f = A(
                    A(A({}, (0, y.J9)(this.props, !1)), (0, y.J9)(s, !1)),
                    {},
                    { fill: 'none' }
                  );
                if ('top' === a || 'bottom' === a) {
                  var p = +(('top' === a && !l) || ('bottom' === a && l));
                  f = A(
                    A({}, f),
                    {},
                    { x1: e, y1: n + p * o, x2: e + i, y2: n + p * o }
                  );
                } else {
                  var h = +(('left' === a && !l) || ('right' === a && l));
                  f = A(
                    A({}, f),
                    {},
                    { x1: e + h * i, y1: n, x2: e + h * i, y2: n + o }
                  );
                }
                return r.createElement(
                  'line',
                  w({}, f, {
                    className: (0, u.A)(
                      'recharts-cartesian-axis-line',
                      c()(s, 'className')
                    )
                  })
                );
              }
            },
            {
              key: 'renderTicks',
              value: function (t, n, i) {
                var a = this,
                  l = this.props,
                  f = l.tickLine,
                  p = l.stroke,
                  h = l.tick,
                  m = l.tickFormatter,
                  g = l.unit,
                  b = (0, v.f)(A(A({}, this.props), {}, { ticks: t }), n, i),
                  x = this.getTickTextAnchor(),
                  O = this.getTickVerticalAnchor(),
                  S = (0, y.J9)(this.props, !1),
                  j = (0, y.J9)(h, !1),
                  P = A(A({}, S), {}, { fill: 'none' }, (0, y.J9)(f, !1)),
                  E = b.map(function (t, n) {
                    var i = a.getTickLineCoord(t),
                      l = i.line,
                      y = i.tick,
                      v = A(
                        A(
                          A(
                            A({ textAnchor: x, verticalAnchor: O }, S),
                            {},
                            { stroke: 'none', fill: p },
                            j
                          ),
                          y
                        ),
                        {},
                        {
                          index: n,
                          payload: t,
                          visibleTicksCount: b.length,
                          tickFormatter: m
                        }
                      );
                    return r.createElement(
                      s.W,
                      w(
                        {
                          className: 'recharts-cartesian-axis-tick',
                          key: 'tick-'
                            .concat(t.value, '-')
                            .concat(t.coordinate, '-')
                            .concat(t.tickCoord)
                        },
                        (0, d.XC)(a.props, t, n)
                      ),
                      f &&
                        r.createElement(
                          'line',
                          w({}, P, l, {
                            className: (0, u.A)(
                              'recharts-cartesian-axis-tick-line',
                              c()(f, 'className')
                            )
                          })
                        ),
                      h &&
                        e.renderTickItem(
                          h,
                          v,
                          ''
                            .concat(o()(m) ? m(t.value, n) : t.value)
                            .concat(g || '')
                        )
                    );
                  });
                return r.createElement(
                  'g',
                  { className: 'recharts-cartesian-axis-ticks' },
                  E
                );
              }
            },
            {
              key: 'render',
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.axisLine,
                  i = e.width,
                  a = e.height,
                  c = e.ticksGenerator,
                  l = e.className;
                if (e.hide) return null;
                var f = this.props,
                  h = f.ticks,
                  d = S(f, b),
                  y = h;
                return (
                  o()(c) && (y = h && h.length > 0 ? c(this.props) : c(d)),
                  i <= 0 || a <= 0 || !y || !y.length
                    ? null
                    : r.createElement(
                        s.W,
                        {
                          className: (0, u.A)('recharts-cartesian-axis', l),
                          ref: function (e) {
                            t.layerReference = e;
                          }
                        },
                        n && this.renderAxisLine(),
                        this.renderTicks(
                          y,
                          this.state.fontSize,
                          this.state.letterSpacing
                        ),
                        p.J.renderCallByParent(this.props)
                      )
                );
              }
            }
          ]) && j(n.prototype, i),
          a && j(n, a),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          e
        );
      })(r.Component);
      T(_, 'displayName', 'CartesianAxis'),
        T(_, 'defaultProps', {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          viewBox: { x: 0, y: 0, width: 0, height: 0 },
          orientation: 'bottom',
          ticks: [],
          stroke: '#666',
          tickLine: !0,
          axisLine: !0,
          tick: !0,
          mirror: !1,
          minTickGap: 5,
          tickSize: 6,
          tickMargin: 2,
          interval: 'preserveEnd'
        });
    },
    87734: (t, e, n) => {
      'use strict';
      n.d(e, { d: () => T });
      var r = n(65043),
        i = n(11629),
        o = n.n(i),
        a = n(155),
        c = n(76307),
        u = n(240),
        l = n(20202),
        s = n(98854),
        f = n(57671),
        p = n(52103),
        h = ['x1', 'y1', 'x2', 'y2', 'key'],
        d = ['offset'];
      function y(t) {
        return (
          (y =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          y(t)
        );
      }
      function v(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function m(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? v(Object(n), !0).forEach(function (e) {
                g(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function g(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != y(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != y(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == y(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function b() {
        return (
          (b = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          b.apply(this, arguments)
        );
      }
      function x(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      var w = function (t) {
        var e = t.fill;
        if (!e || 'none' === e) return null;
        var n = t.fillOpacity,
          i = t.x,
          o = t.y,
          a = t.width,
          c = t.height;
        return r.createElement('rect', {
          x: i,
          y: o,
          width: a,
          height: c,
          stroke: 'none',
          fill: e,
          fillOpacity: n,
          className: 'recharts-cartesian-grid-bg'
        });
      };
      function O(t, e) {
        var n;
        if (r.isValidElement(t)) n = r.cloneElement(t, e);
        else if (o()(t)) n = t(e);
        else {
          var i = e.x1,
            a = e.y1,
            c = e.x2,
            l = e.y2,
            s = e.key,
            f = x(e, h),
            p = (0, u.J9)(f, !1),
            y = (p.offset, x(p, d));
          n = r.createElement(
            'line',
            b({}, y, { x1: i, y1: a, x2: c, y2: l, fill: 'none', key: s })
          );
        }
        return n;
      }
      function A(t) {
        var e = t.x,
          n = t.width,
          i = t.horizontal,
          o = void 0 === i || i,
          a = t.horizontalPoints;
        if (!o || !a || !a.length) return null;
        var c = a.map(function (r, i) {
          var a = m(
            m({}, t),
            {},
            { x1: e, y1: r, x2: e + n, y2: r, key: 'line-'.concat(i), index: i }
          );
          return O(o, a);
        });
        return r.createElement(
          'g',
          { className: 'recharts-cartesian-grid-horizontal' },
          c
        );
      }
      function S(t) {
        var e = t.y,
          n = t.height,
          i = t.vertical,
          o = void 0 === i || i,
          a = t.verticalPoints;
        if (!o || !a || !a.length) return null;
        var c = a.map(function (r, i) {
          var a = m(
            m({}, t),
            {},
            { x1: r, y1: e, x2: r, y2: e + n, key: 'line-'.concat(i), index: i }
          );
          return O(o, a);
        });
        return r.createElement(
          'g',
          { className: 'recharts-cartesian-grid-vertical' },
          c
        );
      }
      function j(t) {
        var e = t.horizontalFill,
          n = t.fillOpacity,
          i = t.x,
          o = t.y,
          a = t.width,
          c = t.height,
          u = t.horizontalPoints,
          l = t.horizontal;
        if (!(void 0 === l || l) || !e || !e.length) return null;
        var s = u
          .map(function (t) {
            return Math.round(t + o - o);
          })
          .sort(function (t, e) {
            return t - e;
          });
        o !== s[0] && s.unshift(0);
        var f = s.map(function (t, u) {
          var l = !s[u + 1] ? o + c - t : s[u + 1] - t;
          if (l <= 0) return null;
          var f = u % e.length;
          return r.createElement('rect', {
            key: 'react-'.concat(u),
            y: t,
            x: i,
            height: l,
            width: a,
            stroke: 'none',
            fill: e[f],
            fillOpacity: n,
            className: 'recharts-cartesian-grid-bg'
          });
        });
        return r.createElement(
          'g',
          { className: 'recharts-cartesian-gridstripes-horizontal' },
          f
        );
      }
      function P(t) {
        var e = t.vertical,
          n = void 0 === e || e,
          i = t.verticalFill,
          o = t.fillOpacity,
          a = t.x,
          c = t.y,
          u = t.width,
          l = t.height,
          s = t.verticalPoints;
        if (!n || !i || !i.length) return null;
        var f = s
          .map(function (t) {
            return Math.round(t + a - a);
          })
          .sort(function (t, e) {
            return t - e;
          });
        a !== f[0] && f.unshift(0);
        var p = f.map(function (t, e) {
          var n = !f[e + 1] ? a + u - t : f[e + 1] - t;
          if (n <= 0) return null;
          var s = e % i.length;
          return r.createElement('rect', {
            key: 'react-'.concat(e),
            x: t,
            y: c,
            width: n,
            height: l,
            stroke: 'none',
            fill: i[s],
            fillOpacity: o,
            className: 'recharts-cartesian-grid-bg'
          });
        });
        return r.createElement(
          'g',
          { className: 'recharts-cartesian-gridstripes-vertical' },
          p
        );
      }
      var E = function (t, e) {
          var n = t.xAxis,
            r = t.width,
            i = t.height,
            o = t.offset;
          return (0, l.PW)(
            (0, s.f)(
              m(
                m(m({}, f.u.defaultProps), n),
                {},
                {
                  ticks: (0, l.Rh)(n, !0),
                  viewBox: { x: 0, y: 0, width: r, height: i }
                }
              )
            ),
            o.left,
            o.left + o.width,
            e
          );
        },
        k = function (t, e) {
          var n = t.yAxis,
            r = t.width,
            i = t.height,
            o = t.offset;
          return (0, l.PW)(
            (0, s.f)(
              m(
                m(m({}, f.u.defaultProps), n),
                {},
                {
                  ticks: (0, l.Rh)(n, !0),
                  viewBox: { x: 0, y: 0, width: r, height: i }
                }
              )
            ),
            o.top,
            o.top + o.height,
            e
          );
        },
        M = {
          horizontal: !0,
          vertical: !0,
          horizontalPoints: [],
          verticalPoints: [],
          stroke: '#ccc',
          fill: 'none',
          verticalFill: [],
          horizontalFill: []
        };
      function T(t) {
        var e,
          n,
          i,
          u,
          l,
          s,
          f = (0, p.yi)(),
          h = (0, p.rY)(),
          d = (0, p.hj)(),
          v = m(
            m({}, t),
            {},
            {
              stroke: null !== (e = t.stroke) && void 0 !== e ? e : M.stroke,
              fill: null !== (n = t.fill) && void 0 !== n ? n : M.fill,
              horizontal:
                null !== (i = t.horizontal) && void 0 !== i ? i : M.horizontal,
              horizontalFill:
                null !== (u = t.horizontalFill) && void 0 !== u
                  ? u
                  : M.horizontalFill,
              vertical:
                null !== (l = t.vertical) && void 0 !== l ? l : M.vertical,
              verticalFill:
                null !== (s = t.verticalFill) && void 0 !== s
                  ? s
                  : M.verticalFill,
              x: (0, c.Et)(t.x) ? t.x : d.left,
              y: (0, c.Et)(t.y) ? t.y : d.top,
              width: (0, c.Et)(t.width) ? t.width : d.width,
              height: (0, c.Et)(t.height) ? t.height : d.height
            }
          ),
          g = v.x,
          x = v.y,
          O = v.width,
          T = v.height,
          C = v.syncWithTicks,
          _ = v.horizontalValues,
          I = v.verticalValues,
          D = (0, p.pj)(),
          N = (0, p.$G)();
        if (
          !(0, c.Et)(O) ||
          O <= 0 ||
          !(0, c.Et)(T) ||
          T <= 0 ||
          !(0, c.Et)(g) ||
          g !== +g ||
          !(0, c.Et)(x) ||
          x !== +x
        )
          return null;
        var B = v.verticalCoordinatesGenerator || E,
          R = v.horizontalCoordinatesGenerator || k,
          L = v.horizontalPoints,
          F = v.verticalPoints;
        if ((!L || !L.length) && o()(R)) {
          var z = _ && _.length,
            U = R(
              {
                yAxis: N ? m(m({}, N), {}, { ticks: z ? _ : N.ticks }) : void 0,
                width: f,
                height: h,
                offset: d
              },
              !!z || C
            );
          (0, a.R)(
            Array.isArray(U),
            'horizontalCoordinatesGenerator should return Array but instead it returned ['.concat(
              y(U),
              ']'
            )
          ),
            Array.isArray(U) && (L = U);
        }
        if ((!F || !F.length) && o()(B)) {
          var W = I && I.length,
            X = B(
              {
                xAxis: D ? m(m({}, D), {}, { ticks: W ? I : D.ticks }) : void 0,
                width: f,
                height: h,
                offset: d
              },
              !!W || C
            );
          (0, a.R)(
            Array.isArray(X),
            'verticalCoordinatesGenerator should return Array but instead it returned ['.concat(
              y(X),
              ']'
            )
          ),
            Array.isArray(X) && (F = X);
        }
        return r.createElement(
          'g',
          { className: 'recharts-cartesian-grid' },
          r.createElement(w, {
            fill: v.fill,
            fillOpacity: v.fillOpacity,
            x: v.x,
            y: v.y,
            width: v.width,
            height: v.height
          }),
          r.createElement(
            A,
            b({}, v, { offset: d, horizontalPoints: L, xAxis: D, yAxis: N })
          ),
          r.createElement(
            S,
            b({}, v, { offset: d, verticalPoints: F, xAxis: D, yAxis: N })
          ),
          r.createElement(j, b({}, v, { horizontalPoints: L })),
          r.createElement(P, b({}, v, { verticalPoints: F }))
        );
      }
      T.displayName = 'CartesianGrid';
    },
    38813: (t, e, n) => {
      'use strict';
      n.d(e, { u: () => p });
      var r = n(65043),
        i = n(3404),
        o = n(94020),
        a = n(240),
        c = [
          'offset',
          'layout',
          'width',
          'dataKey',
          'data',
          'dataPointFormatter',
          'xAxis',
          'yAxis'
        ];
      function u() {
        return (
          (u = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          u.apply(this, arguments)
        );
      }
      function l(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != n) {
              var r,
                i,
                o,
                a,
                c = [],
                u = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' === typeof t) return s(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return s(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function s(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function f(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function p(t) {
        var e = t.offset,
          n = t.layout,
          s = t.width,
          p = t.dataKey,
          h = t.data,
          d = t.dataPointFormatter,
          y = t.xAxis,
          v = t.yAxis,
          m = f(t, c),
          g = (0, a.J9)(m, !1);
        'x' === t.direction && 'number' !== y.type && (0, i.A)(!1);
        var b = h.map(function (t) {
          var i = d(t, p),
            a = i.x,
            c = i.y,
            f = i.value,
            h = i.errorVal;
          if (!h) return null;
          var m,
            b,
            x = [];
          if (Array.isArray(h)) {
            var w = l(h, 2);
            (m = w[0]), (b = w[1]);
          } else m = b = h;
          if ('vertical' === n) {
            var O = y.scale,
              A = c + e,
              S = A + s,
              j = A - s,
              P = O(f - m),
              E = O(f + b);
            x.push({ x1: E, y1: S, x2: E, y2: j }),
              x.push({ x1: P, y1: A, x2: E, y2: A }),
              x.push({ x1: P, y1: S, x2: P, y2: j });
          } else if ('horizontal' === n) {
            var k = v.scale,
              M = a + e,
              T = M - s,
              C = M + s,
              _ = k(f - m),
              I = k(f + b);
            x.push({ x1: T, y1: I, x2: C, y2: I }),
              x.push({ x1: M, y1: _, x2: M, y2: I }),
              x.push({ x1: T, y1: _, x2: C, y2: _ });
          }
          return r.createElement(
            o.W,
            u(
              {
                className: 'recharts-errorBar',
                key: 'bar-'.concat(
                  x.map(function (t) {
                    return ''
                      .concat(t.x1, '-')
                      .concat(t.x2, '-')
                      .concat(t.y1, '-')
                      .concat(t.y2);
                  })
                )
              },
              g
            ),
            x.map(function (t) {
              return r.createElement(
                'line',
                u({}, t, {
                  key: 'line-'
                    .concat(t.x1, '-')
                    .concat(t.x2, '-')
                    .concat(t.y1, '-')
                    .concat(t.y2)
                })
              );
            })
          );
        });
        return r.createElement(o.W, { className: 'recharts-errorBars' }, b);
      }
      (p.defaultProps = {
        stroke: 'black',
        strokeWidth: 1.5,
        width: 5,
        offset: 0,
        layout: 'horizontal'
      }),
        (p.displayName = 'ErrorBar');
    },
    90168: (t, e, n) => {
      'use strict';
      n.d(e, { N: () => R });
      var r = n(65043),
        i = n(21578),
        o = n(11629),
        a = n.n(o),
        c = n(79686),
        u = n.n(c),
        l = n(19853),
        s = n.n(l),
        f = n(35007),
        p = n(68471),
        h = n(68892),
        d = n(94020),
        y = n(81519),
        v = n(38813),
        m = n(76307),
        g = n(240),
        b = n(6015),
        x = n(20202),
        w = ['type', 'layout', 'connectNulls', 'ref'];
      function O(t) {
        return (
          (O =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          O(t)
        );
      }
      function A(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function S() {
        return (
          (S = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          S.apply(this, arguments)
        );
      }
      function j(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function P(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? j(Object(n), !0).forEach(function (e) {
                N(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function E(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return k(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' !== typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ('string' === typeof t) return k(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return k(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function k(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function M(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, B(r.key), r);
        }
      }
      function T(t, e, n) {
        return (
          (e = _(e)),
          (function (t, e) {
            if (e && ('object' === O(e) || 'function' === typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return I(t);
          })(
            t,
            C()
              ? Reflect.construct(e, n || [], _(t).constructor)
              : e.apply(t, n)
          )
        );
      }
      function C() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (C = function () {
          return !!t;
        })();
      }
      function _(t) {
        return (
          (_ = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          _(t)
        );
      }
      function I(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function D(t, e) {
        return (
          (D = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          D(t, e)
        );
      }
      function N(t, e, n) {
        return (
          (e = B(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function B(t) {
        var e = (function (t, e) {
          if ('object' != O(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' != O(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' == O(e) ? e : String(e);
      }
      var R = (function (t) {
        function e() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, e);
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
          return (
            N(I((t = T(this, e, [].concat(r)))), 'state', {
              isAnimationFinished: !0,
              totalLength: 0
            }),
            N(I(t), 'generateSimpleStrokeDasharray', function (t, e) {
              return ''.concat(e, 'px ').concat(t - e, 'px');
            }),
            N(I(t), 'getStrokeDasharray', function (n, r, i) {
              var o = i.reduce(function (t, e) {
                return t + e;
              });
              if (!o) return t.generateSimpleStrokeDasharray(r, n);
              for (
                var a = Math.floor(n / o),
                  c = n % o,
                  u = r - n,
                  l = [],
                  s = 0,
                  f = 0;
                s < i.length;
                f += i[s], ++s
              )
                if (f + i[s] > c) {
                  l = [].concat(E(i.slice(0, s)), [c - f]);
                  break;
                }
              var p = l.length % 2 === 0 ? [0, u] : [u];
              return []
                .concat(E(e.repeat(i, a)), E(l), p)
                .map(function (t) {
                  return ''.concat(t, 'px');
                })
                .join(', ');
            }),
            N(I(t), 'id', (0, m.NF)('recharts-line-')),
            N(I(t), 'pathRef', function (e) {
              t.mainCurve = e;
            }),
            N(I(t), 'handleAnimationEnd', function () {
              t.setState({ isAnimationFinished: !0 }),
                t.props.onAnimationEnd && t.props.onAnimationEnd();
            }),
            N(I(t), 'handleAnimationStart', function () {
              t.setState({ isAnimationFinished: !1 }),
                t.props.onAnimationStart && t.props.onAnimationStart();
            }),
            t
          );
        }
        var n, o, c;
        return (
          (function (t, e) {
            if ('function' !== typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 }
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && D(t, e);
          })(e, t),
          (n = e),
          (c = [
            {
              key: 'getDerivedStateFromProps',
              value: function (t, e) {
                return t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curPoints: t.points,
                      prevPoints: e.curPoints
                    }
                  : t.points !== e.curPoints
                  ? { curPoints: t.points }
                  : null;
              }
            },
            {
              key: 'repeat',
              value: function (t, e) {
                for (
                  var n = t.length % 2 !== 0 ? [].concat(E(t), [0]) : t,
                    r = [],
                    i = 0;
                  i < e;
                  ++i
                )
                  r = [].concat(E(r), E(n));
                return r;
              }
            },
            {
              key: 'renderDotItem',
              value: function (t, e) {
                var n;
                if (r.isValidElement(t)) n = r.cloneElement(t, e);
                else if (a()(t)) n = t(e);
                else {
                  var i = (0, f.A)(
                    'recharts-line-dot',
                    'boolean' !== typeof t ? t.className : ''
                  );
                  n = r.createElement(h.c, S({}, e, { className: i }));
                }
                return n;
              }
            }
          ]),
          (o = [
            {
              key: 'componentDidMount',
              value: function () {
                if (this.props.isAnimationActive) {
                  var t = this.getTotalLength();
                  this.setState({ totalLength: t });
                }
              }
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                if (this.props.isAnimationActive) {
                  var t = this.getTotalLength();
                  t !== this.state.totalLength &&
                    this.setState({ totalLength: t });
                }
              }
            },
            {
              key: 'getTotalLength',
              value: function () {
                var t = this.mainCurve;
                try {
                  return (t && t.getTotalLength && t.getTotalLength()) || 0;
                } catch (e) {
                  return 0;
                }
              }
            },
            {
              key: 'renderErrorBar',
              value: function (t, e) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var n = this.props,
                  i = n.points,
                  o = n.xAxis,
                  a = n.yAxis,
                  c = n.layout,
                  u = n.children,
                  l = (0, g.aS)(u, v.u);
                if (!l) return null;
                var s = function (t, e) {
                    return {
                      x: t.x,
                      y: t.y,
                      value: t.value,
                      errorVal: (0, x.kr)(t.payload, e)
                    };
                  },
                  f = { clipPath: t ? 'url(#clipPath-'.concat(e, ')') : null };
                return r.createElement(
                  d.W,
                  f,
                  l.map(function (t) {
                    return r.cloneElement(t, {
                      key: 'bar-'.concat(t.props.dataKey),
                      data: i,
                      xAxis: o,
                      yAxis: a,
                      layout: c,
                      dataPointFormatter: s
                    });
                  })
                );
              }
            },
            {
              key: 'renderDots',
              value: function (t, n, i) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var o = this.props,
                  a = o.dot,
                  c = o.points,
                  u = o.dataKey,
                  l = (0, g.J9)(this.props, !1),
                  s = (0, g.J9)(a, !0),
                  f = c.map(function (t, n) {
                    var r = P(
                      P(P({ key: 'dot-'.concat(n), r: 3 }, l), s),
                      {},
                      {
                        value: t.value,
                        dataKey: u,
                        cx: t.x,
                        cy: t.y,
                        index: n,
                        payload: t.payload
                      }
                    );
                    return e.renderDotItem(a, r);
                  }),
                  p = {
                    clipPath: t
                      ? 'url(#clipPath-'.concat(n ? '' : 'dots-').concat(i, ')')
                      : null
                  };
                return r.createElement(
                  d.W,
                  S({ className: 'recharts-line-dots', key: 'dots' }, p),
                  f
                );
              }
            },
            {
              key: 'renderCurveStatically',
              value: function (t, e, n, i) {
                var o = this.props,
                  a = o.type,
                  c = o.layout,
                  u = o.connectNulls,
                  l = (o.ref, A(o, w)),
                  s = P(
                    P(
                      P({}, (0, g.J9)(l, !0)),
                      {},
                      {
                        fill: 'none',
                        className: 'recharts-line-curve',
                        clipPath: e ? 'url(#clipPath-'.concat(n, ')') : null,
                        points: t
                      },
                      i
                    ),
                    {},
                    { type: a, layout: c, connectNulls: u }
                  );
                return r.createElement(
                  p.I,
                  S({}, s, { pathRef: this.pathRef })
                );
              }
            },
            {
              key: 'renderCurveWithAnimation',
              value: function (t, e) {
                var n = this,
                  o = this.props,
                  a = o.points,
                  c = o.strokeDasharray,
                  u = o.isAnimationActive,
                  l = o.animationBegin,
                  s = o.animationDuration,
                  f = o.animationEasing,
                  p = o.animationId,
                  h = o.animateNewValues,
                  d = o.width,
                  y = o.height,
                  v = this.state,
                  g = v.prevPoints,
                  b = v.totalLength;
                return r.createElement(
                  i.Ay,
                  {
                    begin: l,
                    duration: s,
                    isActive: u,
                    easing: f,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: 'line-'.concat(p),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart
                  },
                  function (r) {
                    var i = r.t;
                    if (g) {
                      var o = g.length / a.length,
                        u = a.map(function (t, e) {
                          var n = Math.floor(e * o);
                          if (g[n]) {
                            var r = g[n],
                              a = (0, m.Dj)(r.x, t.x),
                              c = (0, m.Dj)(r.y, t.y);
                            return P(P({}, t), {}, { x: a(i), y: c(i) });
                          }
                          if (h) {
                            var u = (0, m.Dj)(2 * d, t.x),
                              l = (0, m.Dj)(y / 2, t.y);
                            return P(P({}, t), {}, { x: u(i), y: l(i) });
                          }
                          return P(P({}, t), {}, { x: t.x, y: t.y });
                        });
                      return n.renderCurveStatically(u, t, e);
                    }
                    var l,
                      s = (0, m.Dj)(0, b)(i);
                    if (c) {
                      var f = ''
                        .concat(c)
                        .split(/[,\s]+/gim)
                        .map(function (t) {
                          return parseFloat(t);
                        });
                      l = n.getStrokeDasharray(s, b, f);
                    } else l = n.generateSimpleStrokeDasharray(b, s);
                    return n.renderCurveStatically(a, t, e, {
                      strokeDasharray: l
                    });
                  }
                );
              }
            },
            {
              key: 'renderCurve',
              value: function (t, e) {
                var n = this.props,
                  r = n.points,
                  i = n.isAnimationActive,
                  o = this.state,
                  a = o.prevPoints,
                  c = o.totalLength;
                return i && r && r.length && ((!a && c > 0) || !s()(a, r))
                  ? this.renderCurveWithAnimation(t, e)
                  : this.renderCurveStatically(r, t, e);
              }
            },
            {
              key: 'render',
              value: function () {
                var t,
                  e = this.props,
                  n = e.hide,
                  i = e.dot,
                  o = e.points,
                  a = e.className,
                  c = e.xAxis,
                  l = e.yAxis,
                  s = e.top,
                  p = e.left,
                  h = e.width,
                  v = e.height,
                  m = e.isAnimationActive,
                  b = e.id;
                if (n || !o || !o.length) return null;
                var x = this.state.isAnimationFinished,
                  w = 1 === o.length,
                  O = (0, f.A)('recharts-line', a),
                  A = c && c.allowDataOverflow,
                  S = l && l.allowDataOverflow,
                  j = A || S,
                  P = u()(b) ? this.id : b,
                  E =
                    null !== (t = (0, g.J9)(i, !1)) && void 0 !== t
                      ? t
                      : { r: 3, strokeWidth: 2 },
                  k = E.r,
                  M = void 0 === k ? 3 : k,
                  T = E.strokeWidth,
                  C = void 0 === T ? 2 : T,
                  _ = ((0, g.ON)(i) ? i : {}).clipDot,
                  I = void 0 === _ || _,
                  D = 2 * M + C;
                return r.createElement(
                  d.W,
                  { className: O },
                  A || S
                    ? r.createElement(
                        'defs',
                        null,
                        r.createElement(
                          'clipPath',
                          { id: 'clipPath-'.concat(P) },
                          r.createElement('rect', {
                            x: A ? p : p - h / 2,
                            y: S ? s : s - v / 2,
                            width: A ? h : 2 * h,
                            height: S ? v : 2 * v
                          })
                        ),
                        !I &&
                          r.createElement(
                            'clipPath',
                            { id: 'clipPath-dots-'.concat(P) },
                            r.createElement('rect', {
                              x: p - D / 2,
                              y: s - D / 2,
                              width: h + D,
                              height: v + D
                            })
                          )
                      )
                    : null,
                  !w && this.renderCurve(j, P),
                  this.renderErrorBar(j, P),
                  (w || i) && this.renderDots(j, I, P),
                  (!m || x) && y.Z.renderCallByParent(this.props, o)
                );
              }
            }
          ]) && M(n.prototype, o),
          c && M(n, c),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          e
        );
      })(r.PureComponent);
      N(R, 'displayName', 'Line'),
        N(R, 'defaultProps', {
          xAxisId: 0,
          yAxisId: 0,
          connectNulls: !1,
          activeDot: !0,
          dot: !0,
          legendType: 'line',
          stroke: '#3182bd',
          strokeWidth: 1,
          fill: '#fff',
          points: [],
          isAnimationActive: !b.m.isSsr,
          animateNewValues: !0,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: 'ease',
          hide: !1,
          label: !1
        }),
        N(R, 'getComposedData', function (t) {
          var e = t.props,
            n = t.xAxis,
            r = t.yAxis,
            i = t.xAxisTicks,
            o = t.yAxisTicks,
            a = t.dataKey,
            c = t.bandSize,
            l = t.displayedData,
            s = t.offset,
            f = e.layout;
          return P(
            {
              points: l.map(function (t, e) {
                var l = (0, x.kr)(t, a);
                return 'horizontal' === f
                  ? {
                      x: (0, x.nb)({
                        axis: n,
                        ticks: i,
                        bandSize: c,
                        entry: t,
                        index: e
                      }),
                      y: u()(l) ? null : r.scale(l),
                      value: l,
                      payload: t
                    }
                  : {
                      x: u()(l) ? null : n.scale(l),
                      y: (0, x.nb)({
                        axis: r,
                        ticks: o,
                        bandSize: c,
                        entry: t,
                        index: e
                      }),
                      value: l,
                      payload: t
                    };
              }),
              layout: f
            },
            s
          );
        });
    },
    52185: (t, e, n) => {
      'use strict';
      n.d(e, { W: () => l });
      var r = n(65043),
        i = n(35007),
        o = n(52103),
        a = n(57671),
        c = n(20202);
      function u() {
        return (
          (u = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          u.apply(this, arguments)
        );
      }
      var l = function (t) {
        var e = t.xAxisId,
          n = (0, o.yi)(),
          l = (0, o.rY)(),
          s = (0, o.AF)(e);
        return null == s
          ? null
          : r.createElement(
              a.u,
              u({}, s, {
                className: (0, i.A)(
                  'recharts-'.concat(s.axisType, ' ').concat(s.axisType),
                  s.className
                ),
                viewBox: { x: 0, y: 0, width: n, height: l },
                ticksGenerator: function (t) {
                  return (0, c.Rh)(t, !0);
                }
              })
            );
      };
      (l.displayName = 'XAxis'),
        (l.defaultProps = {
          allowDecimals: !0,
          hide: !1,
          orientation: 'bottom',
          width: 0,
          height: 30,
          mirror: !1,
          xAxisId: 0,
          tickCount: 5,
          type: 'category',
          padding: { left: 0, right: 0 },
          allowDataOverflow: !1,
          scale: 'auto',
          reversed: !1,
          allowDuplicatedCategory: !0
        });
    },
    6026: (t, e, n) => {
      'use strict';
      n.d(e, { h: () => l });
      var r = n(65043),
        i = n(35007),
        o = n(52103),
        a = n(57671),
        c = n(20202);
      function u() {
        return (
          (u = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          u.apply(this, arguments)
        );
      }
      var l = function (t) {
        var e = t.yAxisId,
          n = (0, o.yi)(),
          l = (0, o.rY)(),
          s = (0, o.Nk)(e);
        return null == s
          ? null
          : r.createElement(
              a.u,
              u({}, s, {
                className: (0, i.A)(
                  'recharts-'.concat(s.axisType, ' ').concat(s.axisType),
                  s.className
                ),
                viewBox: { x: 0, y: 0, width: n, height: l },
                ticksGenerator: function (t) {
                  return (0, c.Rh)(t, !0);
                }
              })
            );
      };
      (l.displayName = 'YAxis'),
        (l.defaultProps = {
          allowDuplicatedCategory: !0,
          allowDecimals: !0,
          hide: !1,
          orientation: 'left',
          width: 60,
          height: 0,
          mirror: !1,
          yAxisId: 0,
          tickCount: 5,
          type: 'number',
          padding: { top: 0, bottom: 0 },
          allowDataOverflow: !1,
          scale: 'auto',
          reversed: !1
        });
    },
    98854: (t, e, n) => {
      'use strict';
      n.d(e, { f: () => y });
      var r = n(11629),
        i = n.n(r),
        o = n(76307),
        a = n(17213),
        c = n(6015),
        u = n(3831);
      function l(t, e, n) {
        if (e < 1) return [];
        if (1 === e && void 0 === n) return t;
        for (var r = [], i = 0; i < t.length; i += e) {
          if (void 0 !== n && !0 !== n(t[i])) return;
          r.push(t[i]);
        }
        return r;
      }
      function s(t, e, n, r, i) {
        if (t * e < t * r || t * e > t * i) return !1;
        var o = n();
        return t * (e - (t * o) / 2 - r) >= 0 && t * (e + (t * o) / 2 - i) <= 0;
      }
      function f(t) {
        return (
          (f =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          f(t)
        );
      }
      function p(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? p(Object(n), !0).forEach(function (e) {
                d(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function d(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != f(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != f(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == f(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function y(t, e, n) {
        var r = t.tick,
          f = t.ticks,
          p = t.viewBox,
          d = t.minTickGap,
          y = t.orientation,
          v = t.interval,
          m = t.tickFormatter,
          g = t.unit,
          b = t.angle;
        if (!f || !f.length || !r) return [];
        if ((0, o.Et)(v) || c.m.isSsr)
          return (function (t, e) {
            return l(t, e + 1);
          })(f, 'number' === typeof v && (0, o.Et)(v) ? v : 0);
        var x = [],
          w = 'top' === y || 'bottom' === y ? 'width' : 'height',
          O =
            g && 'width' === w
              ? (0, a.Pu)(g, { fontSize: e, letterSpacing: n })
              : { width: 0, height: 0 },
          A = function (t, r) {
            var o = i()(m) ? m(t.value, r) : t.value;
            return 'width' === w
              ? (function (t, e, n) {
                  var r = {
                    width: t.width + e.width,
                    height: t.height + e.height
                  };
                  return (0, u.bx)(r, n);
                })((0, a.Pu)(o, { fontSize: e, letterSpacing: n }), O, b)
              : (0, a.Pu)(o, { fontSize: e, letterSpacing: n })[w];
          },
          S = f.length >= 2 ? (0, o.sA)(f[1].coordinate - f[0].coordinate) : 1,
          j = (function (t, e, n) {
            var r = 'width' === n,
              i = t.x,
              o = t.y,
              a = t.width,
              c = t.height;
            return 1 === e
              ? { start: r ? i : o, end: r ? i + a : o + c }
              : { start: r ? i + a : o + c, end: r ? i : o };
          })(p, S, w);
        return 'equidistantPreserveStart' === v
          ? (function (t, e, n, r, i) {
              for (
                var o,
                  a = (r || []).slice(),
                  c = e.start,
                  u = e.end,
                  f = 0,
                  p = 1,
                  h = c,
                  d = function () {
                    var e = null === r || void 0 === r ? void 0 : r[f];
                    if (void 0 === e) return { v: l(r, p) };
                    var o,
                      a = f,
                      d = function () {
                        return void 0 === o && (o = n(e, a)), o;
                      },
                      y = e.coordinate,
                      v = 0 === f || s(t, y, d, h, u);
                    v || ((f = 0), (h = c), (p += 1)),
                      v && ((h = y + t * (d() / 2 + i)), (f += p));
                  };
                p <= a.length;

              )
                if ((o = d())) return o.v;
              return [];
            })(S, j, A, f, d)
          : ((x =
              'preserveStart' === v || 'preserveStartEnd' === v
                ? (function (t, e, n, r, i, o) {
                    var a = (r || []).slice(),
                      c = a.length,
                      u = e.start,
                      l = e.end;
                    if (o) {
                      var f = r[c - 1],
                        p = n(f, c - 1),
                        d = t * (f.coordinate + (t * p) / 2 - l);
                      (a[c - 1] = f =
                        h(
                          h({}, f),
                          {},
                          {
                            tickCoord:
                              d > 0 ? f.coordinate - d * t : f.coordinate
                          }
                        )),
                        s(
                          t,
                          f.tickCoord,
                          function () {
                            return p;
                          },
                          u,
                          l
                        ) &&
                          ((l = f.tickCoord - t * (p / 2 + i)),
                          (a[c - 1] = h(h({}, f), {}, { isShow: !0 })));
                    }
                    for (
                      var y = o ? c - 1 : c,
                        v = function (e) {
                          var r,
                            o = a[e],
                            c = function () {
                              return void 0 === r && (r = n(o, e)), r;
                            };
                          if (0 === e) {
                            var f = t * (o.coordinate - (t * c()) / 2 - u);
                            a[e] = o = h(
                              h({}, o),
                              {},
                              {
                                tickCoord:
                                  f < 0 ? o.coordinate - f * t : o.coordinate
                              }
                            );
                          } else
                            a[e] = o = h(
                              h({}, o),
                              {},
                              { tickCoord: o.coordinate }
                            );
                          s(t, o.tickCoord, c, u, l) &&
                            ((u = o.tickCoord + t * (c() / 2 + i)),
                            (a[e] = h(h({}, o), {}, { isShow: !0 })));
                        },
                        m = 0;
                      m < y;
                      m++
                    )
                      v(m);
                    return a;
                  })(S, j, A, f, d, 'preserveStartEnd' === v)
                : (function (t, e, n, r, i) {
                    for (
                      var o = (r || []).slice(),
                        a = o.length,
                        c = e.start,
                        u = e.end,
                        l = function (e) {
                          var r,
                            l = o[e],
                            f = function () {
                              return void 0 === r && (r = n(l, e)), r;
                            };
                          if (e === a - 1) {
                            var p = t * (l.coordinate + (t * f()) / 2 - u);
                            o[e] = l = h(
                              h({}, l),
                              {},
                              {
                                tickCoord:
                                  p > 0 ? l.coordinate - p * t : l.coordinate
                              }
                            );
                          } else
                            o[e] = l = h(
                              h({}, l),
                              {},
                              { tickCoord: l.coordinate }
                            );
                          s(t, l.tickCoord, f, c, u) &&
                            ((u = l.tickCoord - t * (f() / 2 + i)),
                            (o[e] = h(h({}, l), {}, { isShow: !0 })));
                        },
                        f = a - 1;
                      f >= 0;
                      f--
                    )
                      l(f);
                    return o;
                  })(S, j, A, f, d)),
            x.filter(function (t) {
              return t.isShow;
            }));
      }
    },
    82291: (t, e, n) => {
      'use strict';
      n.d(e, { E: () => u });
      var r = n(88420),
        i = n(38643),
        o = n(52185),
        a = n(6026),
        c = n(3831),
        u = (0, r.gu)({
          chartName: 'BarChart',
          GraphicalChild: i.y,
          defaultTooltipEventType: 'axis',
          validateTooltipEventTypes: ['axis', 'item'],
          axisComponents: [
            { axisType: 'xAxis', AxisComp: o.W },
            { axisType: 'yAxis', AxisComp: a.h }
          ],
          formatAxisMap: c.pr
        });
    },
    75748: (t, e, n) => {
      'use strict';
      n.d(e, { b: () => u });
      var r = n(88420),
        i = n(90168),
        o = n(52185),
        a = n(6026),
        c = n(3831),
        u = (0, r.gu)({
          chartName: 'LineChart',
          GraphicalChild: i.N,
          axisComponents: [
            { axisType: 'xAxis', AxisComp: o.W },
            { axisType: 'yAxis', AxisComp: a.h }
          ],
          formatAxisMap: c.pr
        });
    },
    60163: (t, e, n) => {
      'use strict';
      n.d(e, { r: () => rt });
      var r = n(88420),
        i = n(65043),
        o = n(11629),
        a = n.n(o),
        c = n(94020),
        u = n(68892),
        l = n(35007),
        s = n(240),
        f = ['points', 'className', 'baseLinePoints', 'connectNulls'];
      function p() {
        return (
          (p = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          p.apply(this, arguments)
        );
      }
      function h(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function d(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return y(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' !== typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ('string' === typeof t) return y(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return y(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var v = function (t) {
          return t && t.x === +t.x && t.y === +t.y;
        },
        m = function (t, e) {
          var n = (function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              e = [[]];
            return (
              t.forEach(function (t) {
                v(t)
                  ? e[e.length - 1].push(t)
                  : e[e.length - 1].length > 0 && e.push([]);
              }),
              v(t[0]) && e[e.length - 1].push(t[0]),
              e[e.length - 1].length <= 0 && (e = e.slice(0, -1)),
              e
            );
          })(t);
          e &&
            (n = [
              n.reduce(function (t, e) {
                return [].concat(d(t), d(e));
              }, [])
            ]);
          var r = n
            .map(function (t) {
              return t.reduce(function (t, e, n) {
                return ''
                  .concat(t)
                  .concat(0 === n ? 'M' : 'L')
                  .concat(e.x, ',')
                  .concat(e.y);
              }, '');
            })
            .join('');
          return 1 === n.length ? ''.concat(r, 'Z') : r;
        },
        g = function (t) {
          var e = t.points,
            n = t.className,
            r = t.baseLinePoints,
            o = t.connectNulls,
            a = h(t, f);
          if (!e || !e.length) return null;
          var c = (0, l.A)('recharts-polygon', n);
          if (r && r.length) {
            var u = a.stroke && 'none' !== a.stroke,
              d = (function (t, e, n) {
                var r = m(t, n);
                return ''
                  .concat('Z' === r.slice(-1) ? r.slice(0, -1) : r, 'L')
                  .concat(m(e.reverse(), n).slice(1));
              })(e, r, o);
            return i.createElement(
              'g',
              { className: c },
              i.createElement(
                'path',
                p({}, (0, s.J9)(a, !0), {
                  fill: 'Z' === d.slice(-1) ? a.fill : 'none',
                  stroke: 'none',
                  d: d
                })
              ),
              u
                ? i.createElement(
                    'path',
                    p({}, (0, s.J9)(a, !0), { fill: 'none', d: m(e, o) })
                  )
                : null,
              u
                ? i.createElement(
                    'path',
                    p({}, (0, s.J9)(a, !0), { fill: 'none', d: m(r, o) })
                  )
                : null
            );
          }
          var y = m(e, o);
          return i.createElement(
            'path',
            p({}, (0, s.J9)(a, !0), {
              fill: 'Z' === y.slice(-1) ? a.fill : 'none',
              className: c,
              d: y
            })
          );
        },
        b = n(84140),
        x = n(17287),
        w = n(60165);
      function O(t) {
        return (
          (O =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          O(t)
        );
      }
      function A() {
        return (
          (A = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          A.apply(this, arguments)
        );
      }
      function S(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function j(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? S(Object(n), !0).forEach(function (e) {
                C(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function P(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, _(r.key), r);
        }
      }
      function E(t, e, n) {
        return (
          (e = M(e)),
          (function (t, e) {
            if (e && ('object' === O(e) || 'function' === typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(
            t,
            k()
              ? Reflect.construct(e, n || [], M(t).constructor)
              : e.apply(t, n)
          )
        );
      }
      function k() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (k = function () {
          return !!t;
        })();
      }
      function M(t) {
        return (
          (M = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          M(t)
        );
      }
      function T(t, e) {
        return (
          (T = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          T(t, e)
        );
      }
      function C(t, e, n) {
        return (
          (e = _(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function _(t) {
        var e = (function (t, e) {
          if ('object' != O(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' != O(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' == O(e) ? e : String(e);
      }
      var I = Math.PI / 180,
        D = 1e-5,
        N = (function (t) {
          function e() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
              E(this, e, arguments)
            );
          }
          var n, r, o;
          return (
            (function (t, e) {
              if ('function' !== typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 }
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && T(t, e);
            })(e, t),
            (n = e),
            (o = [
              {
                key: 'renderTickItem',
                value: function (t, e, n) {
                  return i.isValidElement(t)
                    ? i.cloneElement(t, e)
                    : a()(t)
                    ? t(e)
                    : i.createElement(
                        b.E,
                        A({}, e, {
                          className: 'recharts-polar-angle-axis-tick-value'
                        }),
                        n
                      );
                }
              }
            ]),
            (r = [
              {
                key: 'getTickLineCoord',
                value: function (t) {
                  var e = this.props,
                    n = e.cx,
                    r = e.cy,
                    i = e.radius,
                    o = e.orientation,
                    a = e.tickSize || 8,
                    c = (0, w.IZ)(n, r, i, t.coordinate),
                    u = (0, w.IZ)(
                      n,
                      r,
                      i + ('inner' === o ? -1 : 1) * a,
                      t.coordinate
                    );
                  return { x1: c.x, y1: c.y, x2: u.x, y2: u.y };
                }
              },
              {
                key: 'getTickTextAnchor',
                value: function (t) {
                  var e = this.props.orientation,
                    n = Math.cos(-t.coordinate * I);
                  return n > D
                    ? 'outer' === e
                      ? 'start'
                      : 'end'
                    : n < -D
                    ? 'outer' === e
                      ? 'end'
                      : 'start'
                    : 'middle';
                }
              },
              {
                key: 'renderAxisLine',
                value: function () {
                  var t = this.props,
                    e = t.cx,
                    n = t.cy,
                    r = t.radius,
                    o = t.axisLine,
                    a = t.axisLineType,
                    c = j(
                      j({}, (0, s.J9)(this.props, !1)),
                      {},
                      { fill: 'none' },
                      (0, s.J9)(o, !1)
                    );
                  if ('circle' === a)
                    return i.createElement(
                      u.c,
                      A({ className: 'recharts-polar-angle-axis-line' }, c, {
                        cx: e,
                        cy: n,
                        r: r
                      })
                    );
                  var l = this.props.ticks.map(function (t) {
                    return (0, w.IZ)(e, n, r, t.coordinate);
                  });
                  return i.createElement(
                    g,
                    A({ className: 'recharts-polar-angle-axis-line' }, c, {
                      points: l
                    })
                  );
                }
              },
              {
                key: 'renderTicks',
                value: function () {
                  var t = this,
                    n = this.props,
                    r = n.ticks,
                    o = n.tick,
                    a = n.tickLine,
                    u = n.tickFormatter,
                    l = n.stroke,
                    f = (0, s.J9)(this.props, !1),
                    p = (0, s.J9)(o, !1),
                    h = j(j({}, f), {}, { fill: 'none' }, (0, s.J9)(a, !1)),
                    d = r.map(function (n, r) {
                      var s = t.getTickLineCoord(n),
                        d = j(
                          j(
                            j({ textAnchor: t.getTickTextAnchor(n) }, f),
                            {},
                            { stroke: 'none', fill: l },
                            p
                          ),
                          {},
                          { index: r, payload: n, x: s.x2, y: s.y2 }
                        );
                      return i.createElement(
                        c.W,
                        A(
                          {
                            className: 'recharts-polar-angle-axis-tick',
                            key: 'tick-'.concat(n.coordinate)
                          },
                          (0, x.XC)(t.props, n, r)
                        ),
                        a &&
                          i.createElement(
                            'line',
                            A(
                              {
                                className: 'recharts-polar-angle-axis-tick-line'
                              },
                              h,
                              s
                            )
                          ),
                        o && e.renderTickItem(o, d, u ? u(n.value, r) : n.value)
                      );
                    });
                  return i.createElement(
                    c.W,
                    { className: 'recharts-polar-angle-axis-ticks' },
                    d
                  );
                }
              },
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = t.ticks,
                    n = t.radius,
                    r = t.axisLine;
                  return n <= 0 || !e || !e.length
                    ? null
                    : i.createElement(
                        c.W,
                        { className: 'recharts-polar-angle-axis' },
                        r && this.renderAxisLine(),
                        this.renderTicks()
                      );
                }
              }
            ]) && P(n.prototype, r),
            o && P(n, o),
            Object.defineProperty(n, 'prototype', { writable: !1 }),
            e
          );
        })(i.PureComponent);
      C(N, 'displayName', 'PolarAngleAxis'),
        C(N, 'axisType', 'angleAxis'),
        C(N, 'defaultProps', {
          type: 'category',
          angleAxisId: 0,
          scale: 'auto',
          cx: 0,
          cy: 0,
          orientation: 'outer',
          axisLine: !0,
          tickLine: !0,
          tickSize: 8,
          tick: !0,
          hide: !1,
          allowDuplicatedCategory: !0
        });
      var B = n(22794),
        R = n.n(B),
        L = n(59364),
        F = n.n(L),
        z = n(92647),
        U = ['cx', 'cy', 'angle', 'ticks', 'axisLine'],
        W = ['ticks', 'tick', 'angle', 'tickFormatter', 'stroke'];
      function X(t) {
        return (
          (X =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          X(t)
        );
      }
      function q() {
        return (
          (q = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          q.apply(this, arguments)
        );
      }
      function K(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function H(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? K(Object(n), !0).forEach(function (e) {
                Q(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function V(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function G(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, tt(r.key), r);
        }
      }
      function Y(t, e, n) {
        return (
          (e = Z(e)),
          (function (t, e) {
            if (e && ('object' === X(e) || 'function' === typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(
            t,
            J()
              ? Reflect.construct(e, n || [], Z(t).constructor)
              : e.apply(t, n)
          )
        );
      }
      function J() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (J = function () {
          return !!t;
        })();
      }
      function Z(t) {
        return (
          (Z = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Z(t)
        );
      }
      function $(t, e) {
        return (
          ($ = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          $(t, e)
        );
      }
      function Q(t, e, n) {
        return (
          (e = tt(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function tt(t) {
        var e = (function (t, e) {
          if ('object' != X(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' != X(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' == X(e) ? e : String(e);
      }
      var et = (function (t) {
        function e() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
            Y(this, e, arguments)
          );
        }
        var n, r, o;
        return (
          (function (t, e) {
            if ('function' !== typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 }
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && $(t, e);
          })(e, t),
          (n = e),
          (o = [
            {
              key: 'renderTickItem',
              value: function (t, e, n) {
                return i.isValidElement(t)
                  ? i.cloneElement(t, e)
                  : a()(t)
                  ? t(e)
                  : i.createElement(
                      b.E,
                      q({}, e, {
                        className: 'recharts-polar-radius-axis-tick-value'
                      }),
                      n
                    );
              }
            }
          ]),
          (r = [
            {
              key: 'getTickValueCoord',
              value: function (t) {
                var e = t.coordinate,
                  n = this.props,
                  r = n.angle,
                  i = n.cx,
                  o = n.cy;
                return (0, w.IZ)(i, o, e, r);
              }
            },
            {
              key: 'getTickTextAnchor',
              value: function () {
                var t;
                switch (this.props.orientation) {
                  case 'left':
                    t = 'end';
                    break;
                  case 'right':
                    t = 'start';
                    break;
                  default:
                    t = 'middle';
                }
                return t;
              }
            },
            {
              key: 'getViewBox',
              value: function () {
                var t = this.props,
                  e = t.cx,
                  n = t.cy,
                  r = t.angle,
                  i = t.ticks,
                  o = R()(i, function (t) {
                    return t.coordinate || 0;
                  });
                return {
                  cx: e,
                  cy: n,
                  startAngle: r,
                  endAngle: r,
                  innerRadius:
                    F()(i, function (t) {
                      return t.coordinate || 0;
                    }).coordinate || 0,
                  outerRadius: o.coordinate || 0
                };
              }
            },
            {
              key: 'renderAxisLine',
              value: function () {
                var t = this.props,
                  e = t.cx,
                  n = t.cy,
                  r = t.angle,
                  o = t.ticks,
                  a = t.axisLine,
                  c = V(t, U),
                  u = o.reduce(
                    function (t, e) {
                      return [
                        Math.min(t[0], e.coordinate),
                        Math.max(t[1], e.coordinate)
                      ];
                    },
                    [1 / 0, -1 / 0]
                  ),
                  l = (0, w.IZ)(e, n, u[0], r),
                  f = (0, w.IZ)(e, n, u[1], r),
                  p = H(
                    H(
                      H({}, (0, s.J9)(c, !1)),
                      {},
                      { fill: 'none' },
                      (0, s.J9)(a, !1)
                    ),
                    {},
                    { x1: l.x, y1: l.y, x2: f.x, y2: f.y }
                  );
                return i.createElement(
                  'line',
                  q({ className: 'recharts-polar-radius-axis-line' }, p)
                );
              }
            },
            {
              key: 'renderTicks',
              value: function () {
                var t = this,
                  n = this.props,
                  r = n.ticks,
                  o = n.tick,
                  a = n.angle,
                  u = n.tickFormatter,
                  l = n.stroke,
                  f = V(n, W),
                  p = this.getTickTextAnchor(),
                  h = (0, s.J9)(f, !1),
                  d = (0, s.J9)(o, !1),
                  y = r.map(function (n, r) {
                    var s = t.getTickValueCoord(n),
                      f = H(
                        H(
                          H(
                            H(
                              {
                                textAnchor: p,
                                transform: 'rotate('
                                  .concat(90 - a, ', ')
                                  .concat(s.x, ', ')
                                  .concat(s.y, ')')
                              },
                              h
                            ),
                            {},
                            { stroke: 'none', fill: l },
                            d
                          ),
                          {},
                          { index: r },
                          s
                        ),
                        {},
                        { payload: n }
                      );
                    return i.createElement(
                      c.W,
                      q(
                        {
                          className: 'recharts-polar-radius-axis-tick',
                          key: 'tick-'.concat(n.coordinate)
                        },
                        (0, x.XC)(t.props, n, r)
                      ),
                      e.renderTickItem(o, f, u ? u(n.value, r) : n.value)
                    );
                  });
                return i.createElement(
                  c.W,
                  { className: 'recharts-polar-radius-axis-ticks' },
                  y
                );
              }
            },
            {
              key: 'render',
              value: function () {
                var t = this.props,
                  e = t.ticks,
                  n = t.axisLine,
                  r = t.tick;
                return e && e.length
                  ? i.createElement(
                      c.W,
                      { className: 'recharts-polar-radius-axis' },
                      n && this.renderAxisLine(),
                      r && this.renderTicks(),
                      z.J.renderCallByParent(this.props, this.getViewBox())
                    )
                  : null;
              }
            }
          ]) && G(n.prototype, r),
          o && G(n, o),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          e
        );
      })(i.PureComponent);
      Q(et, 'displayName', 'PolarRadiusAxis'),
        Q(et, 'axisType', 'radiusAxis'),
        Q(et, 'defaultProps', {
          type: 'number',
          radiusAxisId: 0,
          cx: 0,
          cy: 0,
          angle: 0,
          orientation: 'right',
          stroke: '#ccc',
          axisLine: !0,
          tick: !0,
          tickCount: 5,
          allowDataOverflow: !1,
          scale: 'auto',
          allowDuplicatedCategory: !0
        });
      var nt = n(4240),
        rt = (0, r.gu)({
          chartName: 'PieChart',
          GraphicalChild: nt.F,
          validateTooltipEventTypes: ['item'],
          defaultTooltipEventType: 'item',
          legendContent: 'children',
          axisComponents: [
            { axisType: 'angleAxis', AxisComp: N },
            { axisType: 'radiusAxis', AxisComp: et }
          ],
          formatAxisMap: w.pr,
          defaultProps: {
            layout: 'centric',
            startAngle: 0,
            endAngle: 360,
            cx: '50%',
            cy: '50%',
            innerRadius: 0,
            outerRadius: '80%'
          }
        });
    },
    88420: (t, e, n) => {
      'use strict';
      n.d(e, { gu: () => _e });
      var r = n(65043),
        i = n(79686),
        o = n.n(i),
        a = n(11629),
        c = n.n(a),
        u = n(96604),
        l = n.n(u),
        s = n(33097),
        f = n.n(s),
        p = n(87424),
        h = n.n(p),
        d = n(79889),
        y = n.n(d),
        v = n(35007),
        m = n(3404),
        g = n(94794),
        b = n(94020),
        x = n(86150),
        w = n(21327),
        O = n(68892),
        A = n(84342),
        S = n(240),
        j = n(2099),
        P = n(84140),
        E = n(20202),
        k = n(76307);
      function M(t) {
        return (
          (M =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          M(t)
        );
      }
      function T(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function C(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? T(Object(n), !0).forEach(function (e) {
                _(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function _(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != M(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != M(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == M(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      var I = ['Webkit', 'Moz', 'O', 'ms'];
      function D(t) {
        return (
          (D =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          D(t)
        );
      }
      function N() {
        return (
          (N = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          N.apply(this, arguments)
        );
      }
      function B(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function R(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? B(Object(n), !0).forEach(function (e) {
                q(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function L(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, K(r.key), r);
        }
      }
      function F(t, e, n) {
        return (
          (e = U(e)),
          (function (t, e) {
            if (e && ('object' === D(e) || 'function' === typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return W(t);
          })(
            t,
            z()
              ? Reflect.construct(e, n || [], U(t).constructor)
              : e.apply(t, n)
          )
        );
      }
      function z() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (z = function () {
          return !!t;
        })();
      }
      function U(t) {
        return (
          (U = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          U(t)
        );
      }
      function W(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function X(t, e) {
        return (
          (X = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          X(t, e)
        );
      }
      function q(t, e, n) {
        return (
          (e = K(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function K(t) {
        var e = (function (t, e) {
          if ('object' != D(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' != D(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' == D(e) ? e : String(e);
      }
      var H = function (t) {
          return t.changedTouches && !!t.changedTouches.length;
        },
        V = (function (t) {
          function e(t) {
            var n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
              q(W((n = F(this, e, [t]))), 'handleDrag', function (t) {
                n.leaveTimer &&
                  (clearTimeout(n.leaveTimer), (n.leaveTimer = null)),
                  n.state.isTravellerMoving
                    ? n.handleTravellerMove(t)
                    : n.state.isSlideMoving && n.handleSlideDrag(t);
              }),
              q(W(n), 'handleTouchMove', function (t) {
                null != t.changedTouches &&
                  t.changedTouches.length > 0 &&
                  n.handleDrag(t.changedTouches[0]);
              }),
              q(W(n), 'handleDragEnd', function () {
                n.setState(
                  { isTravellerMoving: !1, isSlideMoving: !1 },
                  function () {
                    var t = n.props,
                      e = t.endIndex,
                      r = t.onDragEnd,
                      i = t.startIndex;
                    null === r ||
                      void 0 === r ||
                      r({ endIndex: e, startIndex: i });
                  }
                ),
                  n.detachDragEndListener();
              }),
              q(W(n), 'handleLeaveWrapper', function () {
                (n.state.isTravellerMoving || n.state.isSlideMoving) &&
                  (n.leaveTimer = window.setTimeout(
                    n.handleDragEnd,
                    n.props.leaveTimeOut
                  ));
              }),
              q(W(n), 'handleEnterSlideOrTraveller', function () {
                n.setState({ isTextActive: !0 });
              }),
              q(W(n), 'handleLeaveSlideOrTraveller', function () {
                n.setState({ isTextActive: !1 });
              }),
              q(W(n), 'handleSlideDragStart', function (t) {
                var e = H(t) ? t.changedTouches[0] : t;
                n.setState({
                  isTravellerMoving: !1,
                  isSlideMoving: !0,
                  slideMoveStartX: e.pageX
                }),
                  n.attachDragEndListener();
              }),
              (n.travellerDragStartHandlers = {
                startX: n.handleTravellerDragStart.bind(W(n), 'startX'),
                endX: n.handleTravellerDragStart.bind(W(n), 'endX')
              }),
              (n.state = {}),
              n
            );
          }
          var n, i, o;
          return (
            (function (t, e) {
              if ('function' !== typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 }
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && X(t, e);
            })(e, t),
            (n = e),
            (o = [
              {
                key: 'renderDefaultTraveller',
                value: function (t) {
                  var e = t.x,
                    n = t.y,
                    i = t.width,
                    o = t.height,
                    a = t.stroke,
                    c = Math.floor(n + o / 2) - 1;
                  return r.createElement(
                    r.Fragment,
                    null,
                    r.createElement('rect', {
                      x: e,
                      y: n,
                      width: i,
                      height: o,
                      fill: a,
                      stroke: 'none'
                    }),
                    r.createElement('line', {
                      x1: e + 1,
                      y1: c,
                      x2: e + i - 1,
                      y2: c,
                      fill: 'none',
                      stroke: '#fff'
                    }),
                    r.createElement('line', {
                      x1: e + 1,
                      y1: c + 2,
                      x2: e + i - 1,
                      y2: c + 2,
                      fill: 'none',
                      stroke: '#fff'
                    })
                  );
                }
              },
              {
                key: 'renderTraveller',
                value: function (t, n) {
                  return r.isValidElement(t)
                    ? r.cloneElement(t, n)
                    : c()(t)
                    ? t(n)
                    : e.renderDefaultTraveller(n);
                }
              },
              {
                key: 'getDerivedStateFromProps',
                value: function (t, e) {
                  var n = t.data,
                    r = t.width,
                    i = t.x,
                    o = t.travellerWidth,
                    a = t.updateId,
                    c = t.startIndex,
                    u = t.endIndex;
                  if (n !== e.prevData || a !== e.prevUpdateId)
                    return R(
                      {
                        prevData: n,
                        prevTravellerWidth: o,
                        prevUpdateId: a,
                        prevX: i,
                        prevWidth: r
                      },
                      n && n.length
                        ? (function (t) {
                            var e = t.data,
                              n = t.startIndex,
                              r = t.endIndex,
                              i = t.x,
                              o = t.width,
                              a = t.travellerWidth;
                            if (!e || !e.length) return {};
                            var c = e.length,
                              u = (0, j.z)()
                                .domain(l()(0, c))
                                .range([i, i + o - a]),
                              s = u.domain().map(function (t) {
                                return u(t);
                              });
                            return {
                              isTextActive: !1,
                              isSlideMoving: !1,
                              isTravellerMoving: !1,
                              isTravellerFocused: !1,
                              startX: u(n),
                              endX: u(r),
                              scale: u,
                              scaleValues: s
                            };
                          })({
                            data: n,
                            width: r,
                            x: i,
                            travellerWidth: o,
                            startIndex: c,
                            endIndex: u
                          })
                        : { scale: null, scaleValues: null }
                    );
                  if (
                    e.scale &&
                    (r !== e.prevWidth ||
                      i !== e.prevX ||
                      o !== e.prevTravellerWidth)
                  ) {
                    e.scale.range([i, i + r - o]);
                    var s = e.scale.domain().map(function (t) {
                      return e.scale(t);
                    });
                    return {
                      prevData: n,
                      prevTravellerWidth: o,
                      prevUpdateId: a,
                      prevX: i,
                      prevWidth: r,
                      startX: e.scale(t.startIndex),
                      endX: e.scale(t.endIndex),
                      scaleValues: s
                    };
                  }
                  return null;
                }
              },
              {
                key: 'getIndexInRange',
                value: function (t, e) {
                  for (var n = 0, r = t.length - 1; r - n > 1; ) {
                    var i = Math.floor((n + r) / 2);
                    t[i] > e ? (r = i) : (n = i);
                  }
                  return e >= t[r] ? r : n;
                }
              }
            ]),
            (i = [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.leaveTimer &&
                    (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                    this.detachDragEndListener();
                }
              },
              {
                key: 'getIndex',
                value: function (t) {
                  var n = t.startX,
                    r = t.endX,
                    i = this.state.scaleValues,
                    o = this.props,
                    a = o.gap,
                    c = o.data.length - 1,
                    u = Math.min(n, r),
                    l = Math.max(n, r),
                    s = e.getIndexInRange(i, u),
                    f = e.getIndexInRange(i, l);
                  return {
                    startIndex: s - (s % a),
                    endIndex: f === c ? c : f - (f % a)
                  };
                }
              },
              {
                key: 'getTextOfTick',
                value: function (t) {
                  var e = this.props,
                    n = e.data,
                    r = e.tickFormatter,
                    i = e.dataKey,
                    o = (0, E.kr)(n[t], i, t);
                  return c()(r) ? r(o, t) : o;
                }
              },
              {
                key: 'attachDragEndListener',
                value: function () {
                  window.addEventListener('mouseup', this.handleDragEnd, !0),
                    window.addEventListener('touchend', this.handleDragEnd, !0),
                    window.addEventListener('mousemove', this.handleDrag, !0);
                }
              },
              {
                key: 'detachDragEndListener',
                value: function () {
                  window.removeEventListener('mouseup', this.handleDragEnd, !0),
                    window.removeEventListener(
                      'touchend',
                      this.handleDragEnd,
                      !0
                    ),
                    window.removeEventListener(
                      'mousemove',
                      this.handleDrag,
                      !0
                    );
                }
              },
              {
                key: 'handleSlideDrag',
                value: function (t) {
                  var e = this.state,
                    n = e.slideMoveStartX,
                    r = e.startX,
                    i = e.endX,
                    o = this.props,
                    a = o.x,
                    c = o.width,
                    u = o.travellerWidth,
                    l = o.startIndex,
                    s = o.endIndex,
                    f = o.onChange,
                    p = t.pageX - n;
                  p > 0
                    ? (p = Math.min(p, a + c - u - i, a + c - u - r))
                    : p < 0 && (p = Math.max(p, a - r, a - i));
                  var h = this.getIndex({ startX: r + p, endX: i + p });
                  (h.startIndex === l && h.endIndex === s) || !f || f(h),
                    this.setState({
                      startX: r + p,
                      endX: i + p,
                      slideMoveStartX: t.pageX
                    });
                }
              },
              {
                key: 'handleTravellerDragStart',
                value: function (t, e) {
                  var n = H(e) ? e.changedTouches[0] : e;
                  this.setState({
                    isSlideMoving: !1,
                    isTravellerMoving: !0,
                    movingTravellerId: t,
                    brushMoveStartX: n.pageX
                  }),
                    this.attachDragEndListener();
                }
              },
              {
                key: 'handleTravellerMove',
                value: function (t) {
                  var e = this.state,
                    n = e.brushMoveStartX,
                    r = e.movingTravellerId,
                    i = e.endX,
                    o = e.startX,
                    a = this.state[r],
                    c = this.props,
                    u = c.x,
                    l = c.width,
                    s = c.travellerWidth,
                    f = c.onChange,
                    p = c.gap,
                    h = c.data,
                    d = { startX: this.state.startX, endX: this.state.endX },
                    y = t.pageX - n;
                  y > 0
                    ? (y = Math.min(y, u + l - s - a))
                    : y < 0 && (y = Math.max(y, u - a)),
                    (d[r] = a + y);
                  var v = this.getIndex(d),
                    m = v.startIndex,
                    g = v.endIndex;
                  this.setState(
                    q(q({}, r, a + y), 'brushMoveStartX', t.pageX),
                    function () {
                      f &&
                        (function () {
                          var t = h.length - 1;
                          return (
                            ('startX' === r &&
                              (i > o ? m % p === 0 : g % p === 0)) ||
                            (i < o && g === t) ||
                            ('endX' === r &&
                              (i > o ? g % p === 0 : m % p === 0)) ||
                            (i > o && g === t)
                          );
                        })() &&
                        f(v);
                    }
                  );
                }
              },
              {
                key: 'handleTravellerMoveKeyboard',
                value: function (t, e) {
                  var n = this,
                    r = this.state,
                    i = r.scaleValues,
                    o = r.startX,
                    a = r.endX,
                    c = this.state[e],
                    u = i.indexOf(c);
                  if (-1 !== u) {
                    var l = u + t;
                    if (!(-1 === l || l >= i.length)) {
                      var s = i[l];
                      ('startX' === e && s >= a) ||
                        ('endX' === e && s <= o) ||
                        this.setState(q({}, e, s), function () {
                          n.props.onChange(
                            n.getIndex({
                              startX: n.state.startX,
                              endX: n.state.endX
                            })
                          );
                        });
                    }
                  }
                }
              },
              {
                key: 'renderBackground',
                value: function () {
                  var t = this.props,
                    e = t.x,
                    n = t.y,
                    i = t.width,
                    o = t.height,
                    a = t.fill,
                    c = t.stroke;
                  return r.createElement('rect', {
                    stroke: c,
                    fill: a,
                    x: e,
                    y: n,
                    width: i,
                    height: o
                  });
                }
              },
              {
                key: 'renderPanorama',
                value: function () {
                  var t = this.props,
                    e = t.x,
                    n = t.y,
                    i = t.width,
                    o = t.height,
                    a = t.data,
                    c = t.children,
                    u = t.padding,
                    l = r.Children.only(c);
                  return l
                    ? r.cloneElement(l, {
                        x: e,
                        y: n,
                        width: i,
                        height: o,
                        margin: u,
                        compact: !0,
                        data: a
                      })
                    : null;
                }
              },
              {
                key: 'renderTravellerLayer',
                value: function (t, n) {
                  var i = this,
                    o = this.props,
                    a = o.y,
                    c = o.travellerWidth,
                    u = o.height,
                    l = o.traveller,
                    s = o.ariaLabel,
                    f = o.data,
                    p = o.startIndex,
                    h = o.endIndex,
                    d = Math.max(t, this.props.x),
                    y = R(
                      R({}, (0, S.J9)(this.props, !1)),
                      {},
                      { x: d, y: a, width: c, height: u }
                    ),
                    v =
                      s ||
                      'Min value: '
                        .concat(f[p].name, ', Max value: ')
                        .concat(f[h].name);
                  return r.createElement(
                    b.W,
                    {
                      tabIndex: 0,
                      role: 'slider',
                      'aria-label': v,
                      'aria-valuenow': t,
                      className: 'recharts-brush-traveller',
                      onMouseEnter: this.handleEnterSlideOrTraveller,
                      onMouseLeave: this.handleLeaveSlideOrTraveller,
                      onMouseDown: this.travellerDragStartHandlers[n],
                      onTouchStart: this.travellerDragStartHandlers[n],
                      onKeyDown: function (t) {
                        ['ArrowLeft', 'ArrowRight'].includes(t.key) &&
                          (t.preventDefault(),
                          t.stopPropagation(),
                          i.handleTravellerMoveKeyboard(
                            'ArrowRight' === t.key ? 1 : -1,
                            n
                          ));
                      },
                      onFocus: function () {
                        i.setState({ isTravellerFocused: !0 });
                      },
                      onBlur: function () {
                        i.setState({ isTravellerFocused: !1 });
                      },
                      style: { cursor: 'col-resize' }
                    },
                    e.renderTraveller(l, y)
                  );
                }
              },
              {
                key: 'renderSlide',
                value: function (t, e) {
                  var n = this.props,
                    i = n.y,
                    o = n.height,
                    a = n.stroke,
                    c = n.travellerWidth,
                    u = Math.min(t, e) + c,
                    l = Math.max(Math.abs(e - t) - c, 0);
                  return r.createElement('rect', {
                    className: 'recharts-brush-slide',
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.handleSlideDragStart,
                    onTouchStart: this.handleSlideDragStart,
                    style: { cursor: 'move' },
                    stroke: 'none',
                    fill: a,
                    fillOpacity: 0.2,
                    x: u,
                    y: i,
                    width: l,
                    height: o
                  });
                }
              },
              {
                key: 'renderText',
                value: function () {
                  var t = this.props,
                    e = t.startIndex,
                    n = t.endIndex,
                    i = t.y,
                    o = t.height,
                    a = t.travellerWidth,
                    c = t.stroke,
                    u = this.state,
                    l = u.startX,
                    s = u.endX,
                    f = { pointerEvents: 'none', fill: c };
                  return r.createElement(
                    b.W,
                    { className: 'recharts-brush-texts' },
                    r.createElement(
                      P.E,
                      N(
                        {
                          textAnchor: 'end',
                          verticalAnchor: 'middle',
                          x: Math.min(l, s) - 5,
                          y: i + o / 2
                        },
                        f
                      ),
                      this.getTextOfTick(e)
                    ),
                    r.createElement(
                      P.E,
                      N(
                        {
                          textAnchor: 'start',
                          verticalAnchor: 'middle',
                          x: Math.max(l, s) + a + 5,
                          y: i + o / 2
                        },
                        f
                      ),
                      this.getTextOfTick(n)
                    )
                  );
                }
              },
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = t.data,
                    n = t.className,
                    i = t.children,
                    o = t.x,
                    a = t.y,
                    c = t.width,
                    u = t.height,
                    l = t.alwaysShowText,
                    s = this.state,
                    f = s.startX,
                    p = s.endX,
                    h = s.isTextActive,
                    d = s.isSlideMoving,
                    y = s.isTravellerMoving,
                    m = s.isTravellerFocused;
                  if (
                    !e ||
                    !e.length ||
                    !(0, k.Et)(o) ||
                    !(0, k.Et)(a) ||
                    !(0, k.Et)(c) ||
                    !(0, k.Et)(u) ||
                    c <= 0 ||
                    u <= 0
                  )
                    return null;
                  var g = (0, v.A)('recharts-brush', n),
                    x = 1 === r.Children.count(i),
                    w = (function (t, e) {
                      if (!t) return null;
                      var n = t.replace(/(\w)/, function (t) {
                          return t.toUpperCase();
                        }),
                        r = I.reduce(function (t, r) {
                          return C(C({}, t), {}, _({}, r + n, e));
                        }, {});
                      return (r[t] = e), r;
                    })('userSelect', 'none');
                  return r.createElement(
                    b.W,
                    {
                      className: g,
                      onMouseLeave: this.handleLeaveWrapper,
                      onTouchMove: this.handleTouchMove,
                      style: w
                    },
                    this.renderBackground(),
                    x && this.renderPanorama(),
                    this.renderSlide(f, p),
                    this.renderTravellerLayer(f, 'startX'),
                    this.renderTravellerLayer(p, 'endX'),
                    (h || d || y || m || l) && this.renderText()
                  );
                }
              }
            ]) && L(n.prototype, i),
            o && L(n, o),
            Object.defineProperty(n, 'prototype', { writable: !1 }),
            e
          );
        })(r.PureComponent);
      q(V, 'displayName', 'Brush'),
        q(V, 'defaultProps', {
          height: 40,
          travellerWidth: 5,
          gap: 1,
          fill: '#fff',
          stroke: '#666',
          padding: { top: 1, right: 1, bottom: 1, left: 1 },
          leaveTimeOut: 1e3,
          alwaysShowText: !1
        });
      var G = n(17213),
        Y = n(27165),
        J = n(92647),
        Z = function (t, e) {
          var n = t.alwaysShow,
            r = t.ifOverflow;
          return n && (r = 'extendDomain'), r === e;
        },
        $ = n(3831),
        Q = n(155);
      function tt(t) {
        return (
          (tt =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          tt(t)
        );
      }
      function et() {
        return (
          (et = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          et.apply(this, arguments)
        );
      }
      function nt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function rt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? nt(Object(n), !0).forEach(function (e) {
                it(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : nt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function it(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != tt(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != tt(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == tt(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function ot(t) {
        var e = t.x,
          n = t.y,
          i = t.r,
          o = t.alwaysShow,
          a = t.clipPathId,
          c = (0, k.vh)(e),
          u = (0, k.vh)(n);
        if (
          ((0, Q.R)(
            void 0 === o,
            'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
          ),
          !c || !u)
        )
          return null;
        var l = (function (t) {
          var e = t.x,
            n = t.y,
            r = t.xAxis,
            i = t.yAxis,
            o = (0, $.P2)({ x: r.scale, y: i.scale }),
            a = o.apply({ x: e, y: n }, { bandAware: !0 });
          return Z(t, 'discard') && !o.isInRange(a) ? null : a;
        })(t);
        if (!l) return null;
        var s = l.x,
          f = l.y,
          p = t.shape,
          h = t.className,
          d = rt(
            rt(
              { clipPath: Z(t, 'hidden') ? 'url(#'.concat(a, ')') : void 0 },
              (0, S.J9)(t, !0)
            ),
            {},
            { cx: s, cy: f }
          );
        return r.createElement(
          b.W,
          { className: (0, v.A)('recharts-reference-dot', h) },
          ot.renderDot(p, d),
          J.J.renderCallByParent(t, {
            x: s - i,
            y: f - i,
            width: 2 * i,
            height: 2 * i
          })
        );
      }
      (ot.displayName = 'ReferenceDot'),
        (ot.defaultProps = {
          isFront: !1,
          ifOverflow: 'discard',
          xAxisId: 0,
          yAxisId: 0,
          r: 10,
          fill: '#fff',
          stroke: '#ccc',
          fillOpacity: 1,
          strokeWidth: 1
        }),
        (ot.renderDot = function (t, e) {
          return r.isValidElement(t)
            ? r.cloneElement(t, e)
            : c()(t)
            ? t(e)
            : r.createElement(
                O.c,
                et({}, e, {
                  cx: e.cx,
                  cy: e.cy,
                  className: 'recharts-reference-dot-dot'
                })
              );
        });
      var at = n(24597),
        ct = n.n(at),
        ut = n(52103);
      function lt(t) {
        return (
          (lt =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          lt(t)
        );
      }
      function st(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ft(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? st(Object(n), !0).forEach(function (e) {
                pt(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : st(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function pt(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != lt(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != lt(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == lt(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function ht(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != n) {
              var r,
                i,
                o,
                a,
                c = [],
                u = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' === typeof t) return dt(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return dt(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function dt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function yt() {
        return (
          (yt = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          yt.apply(this, arguments)
        );
      }
      function vt(t) {
        var e = t.x,
          n = t.y,
          i = t.segment,
          o = t.xAxisId,
          a = t.yAxisId,
          u = t.shape,
          l = t.className,
          s = t.alwaysShow,
          f = (0, ut.Yp)(),
          p = (0, ut.AF)(o),
          h = (0, ut.Nk)(a),
          d = (0, ut.sk)();
        if (!f || !d) return null;
        (0, Q.R)(
          void 0 === s,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
        );
        var y = (function (t, e, n, r, i, o, a, c, u) {
          var l = i.x,
            s = i.y,
            f = i.width,
            p = i.height;
          if (n) {
            var h = u.y,
              d = t.y.apply(h, { position: o });
            if (Z(u, 'discard') && !t.y.isInRange(d)) return null;
            var y = [
              { x: l + f, y: d },
              { x: l, y: d }
            ];
            return 'left' === c ? y.reverse() : y;
          }
          if (e) {
            var v = u.x,
              m = t.x.apply(v, { position: o });
            if (Z(u, 'discard') && !t.x.isInRange(m)) return null;
            var g = [
              { x: m, y: s + p },
              { x: m, y: s }
            ];
            return 'top' === a ? g.reverse() : g;
          }
          if (r) {
            var b = u.segment.map(function (e) {
              return t.apply(e, { position: o });
            });
            return Z(u, 'discard') &&
              ct()(b, function (e) {
                return !t.isInRange(e);
              })
              ? null
              : b;
          }
          return null;
        })(
          (0, $.P2)({ x: p.scale, y: h.scale }),
          (0, k.vh)(e),
          (0, k.vh)(n),
          i && 2 === i.length,
          d,
          t.position,
          p.orientation,
          h.orientation,
          t
        );
        if (!y) return null;
        var m = ht(y, 2),
          g = m[0],
          x = g.x,
          w = g.y,
          O = m[1],
          A = O.x,
          j = O.y,
          P = ft(
            ft(
              { clipPath: Z(t, 'hidden') ? 'url(#'.concat(f, ')') : void 0 },
              (0, S.J9)(t, !0)
            ),
            {},
            { x1: x, y1: w, x2: A, y2: j }
          );
        return r.createElement(
          b.W,
          { className: (0, v.A)('recharts-reference-line', l) },
          (function (t, e) {
            return r.isValidElement(t)
              ? r.cloneElement(t, e)
              : c()(t)
              ? t(e)
              : r.createElement(
                  'line',
                  yt({}, e, { className: 'recharts-reference-line-line' })
                );
          })(u, P),
          J.J.renderCallByParent(t, (0, $.vh)({ x1: x, y1: w, x2: A, y2: j }))
        );
      }
      function mt(t) {
        return (
          (mt =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          mt(t)
        );
      }
      function gt() {
        return (
          (gt = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          gt.apply(this, arguments)
        );
      }
      function bt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function xt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? bt(Object(n), !0).forEach(function (e) {
                wt(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : bt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function wt(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != mt(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != mt(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == mt(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      (vt.displayName = 'ReferenceLine'),
        (vt.defaultProps = {
          isFront: !1,
          ifOverflow: 'discard',
          xAxisId: 0,
          yAxisId: 0,
          fill: 'none',
          stroke: '#ccc',
          fillOpacity: 1,
          strokeWidth: 1,
          position: 'middle'
        });
      function Ot(t) {
        var e = t.x1,
          n = t.x2,
          i = t.y1,
          o = t.y2,
          a = t.className,
          c = t.alwaysShow,
          u = t.clipPathId;
        (0, Q.R)(
          void 0 === c,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
        );
        var l = (0, k.vh)(e),
          s = (0, k.vh)(n),
          f = (0, k.vh)(i),
          p = (0, k.vh)(o),
          h = t.shape;
        if (!l && !s && !f && !p && !h) return null;
        var d = (function (t, e, n, r, i) {
          var o = i.x1,
            a = i.x2,
            c = i.y1,
            u = i.y2,
            l = i.xAxis,
            s = i.yAxis;
          if (!l || !s) return null;
          var f = (0, $.P2)({ x: l.scale, y: s.scale }),
            p = {
              x: t ? f.x.apply(o, { position: 'start' }) : f.x.rangeMin,
              y: n ? f.y.apply(c, { position: 'start' }) : f.y.rangeMin
            },
            h = {
              x: e ? f.x.apply(a, { position: 'end' }) : f.x.rangeMax,
              y: r ? f.y.apply(u, { position: 'end' }) : f.y.rangeMax
            };
          return !Z(i, 'discard') || (f.isInRange(p) && f.isInRange(h))
            ? (0, $.sl)(p, h)
            : null;
        })(l, s, f, p, t);
        if (!d && !h) return null;
        var y = Z(t, 'hidden') ? 'url(#'.concat(u, ')') : void 0;
        return r.createElement(
          b.W,
          { className: (0, v.A)('recharts-reference-area', a) },
          Ot.renderRect(h, xt(xt({ clipPath: y }, (0, S.J9)(t, !0)), d)),
          J.J.renderCallByParent(t, d)
        );
      }
      function At(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return St(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' !== typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ('string' === typeof t) return St(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return St(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function St(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      (Ot.displayName = 'ReferenceArea'),
        (Ot.defaultProps = {
          isFront: !1,
          ifOverflow: 'discard',
          xAxisId: 0,
          yAxisId: 0,
          r: 10,
          fill: '#ccc',
          fillOpacity: 0.5,
          stroke: 'none',
          strokeWidth: 1
        }),
        (Ot.renderRect = function (t, e) {
          return r.isValidElement(t)
            ? r.cloneElement(t, e)
            : c()(t)
            ? t(e)
            : r.createElement(
                A.M,
                gt({}, e, { className: 'recharts-reference-area-rect' })
              );
        });
      var jt = function (t, e, n, r, i) {
          var o = (0, S.aS)(t, vt),
            a = (0, S.aS)(t, ot),
            c = [].concat(At(o), At(a)),
            u = (0, S.aS)(t, Ot),
            l = ''.concat(r, 'Id'),
            s = r[0],
            f = e;
          if (
            (c.length &&
              (f = c.reduce(function (t, e) {
                if (
                  e.props[l] === n &&
                  Z(e.props, 'extendDomain') &&
                  (0, k.Et)(e.props[s])
                ) {
                  var r = e.props[s];
                  return [Math.min(t[0], r), Math.max(t[1], r)];
                }
                return t;
              }, f)),
            u.length)
          ) {
            var p = ''.concat(s, '1'),
              h = ''.concat(s, '2');
            f = u.reduce(function (t, e) {
              if (
                e.props[l] === n &&
                Z(e.props, 'extendDomain') &&
                (0, k.Et)(e.props[p]) &&
                (0, k.Et)(e.props[h])
              ) {
                var r = e.props[p],
                  i = e.props[h];
                return [Math.min(t[0], r, i), Math.max(t[1], r, i)];
              }
              return t;
            }, f);
          }
          return (
            i &&
              i.length &&
              (f = i.reduce(function (t, e) {
                return (0, k.Et)(e)
                  ? [Math.min(t[0], e), Math.max(t[1], e)]
                  : t;
              }, f)),
            f
          );
        },
        Pt = n(60165),
        Et = n(45248),
        kt = n(17283),
        Mt = new (n.n(kt)())(),
        Tt = 'recharts.syncMouseEvents',
        Ct = n(17287);
      function _t(t) {
        return (
          (_t =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          _t(t)
        );
      }
      function It(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, Nt(r.key), r);
        }
      }
      function Dt(t, e, n) {
        return (
          (e = Nt(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function Nt(t) {
        var e = (function (t, e) {
          if ('object' != _t(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' != _t(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' == _t(e) ? e : String(e);
      }
      var Bt = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            Dt(this, 'activeIndex', 0),
            Dt(this, 'coordinateList', []),
            Dt(this, 'layout', 'horizontal');
        }
        var e, n, r;
        return (
          (e = t),
          (n = [
            {
              key: 'setDetails',
              value: function (t) {
                var e,
                  n = t.coordinateList,
                  r = void 0 === n ? null : n,
                  i = t.container,
                  o = void 0 === i ? null : i,
                  a = t.layout,
                  c = void 0 === a ? null : a,
                  u = t.offset,
                  l = void 0 === u ? null : u,
                  s = t.mouseHandlerCallback,
                  f = void 0 === s ? null : s;
                (this.coordinateList =
                  null !==
                    (e =
                      null !== r && void 0 !== r ? r : this.coordinateList) &&
                  void 0 !== e
                    ? e
                    : []),
                  (this.container =
                    null !== o && void 0 !== o ? o : this.container),
                  (this.layout = null !== c && void 0 !== c ? c : this.layout),
                  (this.offset = null !== l && void 0 !== l ? l : this.offset),
                  (this.mouseHandlerCallback =
                    null !== f && void 0 !== f ? f : this.mouseHandlerCallback),
                  (this.activeIndex = Math.min(
                    Math.max(this.activeIndex, 0),
                    this.coordinateList.length - 1
                  ));
              }
            },
            {
              key: 'focus',
              value: function () {
                this.spoofMouse();
              }
            },
            {
              key: 'keyboardEvent',
              value: function (t) {
                if (0 !== this.coordinateList.length)
                  switch (t.key) {
                    case 'ArrowRight':
                      if ('horizontal' !== this.layout) return;
                      (this.activeIndex = Math.min(
                        this.activeIndex + 1,
                        this.coordinateList.length - 1
                      )),
                        this.spoofMouse();
                      break;
                    case 'ArrowLeft':
                      if ('horizontal' !== this.layout) return;
                      (this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                        this.spoofMouse();
                  }
              }
            },
            {
              key: 'setIndex',
              value: function (t) {
                this.activeIndex = t;
              }
            },
            {
              key: 'spoofMouse',
              value: function () {
                var t, e;
                if (
                  'horizontal' === this.layout &&
                  0 !== this.coordinateList.length
                ) {
                  var n = this.container.getBoundingClientRect(),
                    r = n.x,
                    i = n.y,
                    o = n.height,
                    a = this.coordinateList[this.activeIndex].coordinate,
                    c =
                      (null === (t = window) || void 0 === t
                        ? void 0
                        : t.scrollX) || 0,
                    u =
                      (null === (e = window) || void 0 === e
                        ? void 0
                        : e.scrollY) || 0,
                    l = r + a + c,
                    s = i + this.offset.top + o / 2 + u;
                  this.mouseHandlerCallback({ pageX: l, pageY: s });
                }
              }
            }
          ]) && It(e.prototype, n),
          r && It(e, r),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t
        );
      })();
      var Rt = n(70879),
        Lt = n(68471);
      function Ft(t) {
        return (
          (Ft =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          Ft(t)
        );
      }
      var zt = ['x', 'y', 'top', 'left', 'width', 'height', 'className'];
      function Ut() {
        return (
          (Ut = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          Ut.apply(this, arguments)
        );
      }
      function Wt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Xt(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != Ft(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != Ft(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == Ft(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function qt(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      var Kt = function (t, e, n, r, i, o) {
          return 'M'
            .concat(t, ',')
            .concat(i, 'v')
            .concat(r, 'M')
            .concat(o, ',')
            .concat(e, 'h')
            .concat(n);
        },
        Ht = function (t) {
          var e = t.x,
            n = void 0 === e ? 0 : e,
            i = t.y,
            o = void 0 === i ? 0 : i,
            a = t.top,
            c = void 0 === a ? 0 : a,
            u = t.left,
            l = void 0 === u ? 0 : u,
            s = t.width,
            f = void 0 === s ? 0 : s,
            p = t.height,
            h = void 0 === p ? 0 : p,
            d = t.className,
            y = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? Wt(Object(n), !0).forEach(function (e) {
                      Xt(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : Wt(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(n, e)
                      );
                    });
              }
              return t;
            })({ x: n, y: o, top: c, left: l, width: f, height: h }, qt(t, zt));
          return (0, k.Et)(n) &&
            (0, k.Et)(o) &&
            (0, k.Et)(f) &&
            (0, k.Et)(h) &&
            (0, k.Et)(c) &&
            (0, k.Et)(l)
            ? r.createElement(
                'path',
                Ut({}, (0, S.J9)(y, !0), {
                  className: (0, v.A)('recharts-cross', d),
                  d: Kt(n, o, f, h, c, l)
                })
              )
            : null;
        };
      function Vt(t) {
        var e = t.cx,
          n = t.cy,
          r = t.radius,
          i = t.startAngle,
          o = t.endAngle;
        return {
          points: [(0, Pt.IZ)(e, n, r, i), (0, Pt.IZ)(e, n, r, o)],
          cx: e,
          cy: n,
          radius: r,
          startAngle: i,
          endAngle: o
        };
      }
      var Gt = n(677);
      function Yt(t, e, n) {
        var r, i, o, a;
        if ('horizontal' === t)
          (o = r = e.x), (i = n.top), (a = n.top + n.height);
        else if ('vertical' === t)
          (a = i = e.y), (r = n.left), (o = n.left + n.width);
        else if (null != e.cx && null != e.cy) {
          if ('centric' !== t) return Vt(e);
          var c = e.cx,
            u = e.cy,
            l = e.innerRadius,
            s = e.outerRadius,
            f = e.angle,
            p = (0, Pt.IZ)(c, u, l, f),
            h = (0, Pt.IZ)(c, u, s, f);
          (r = p.x), (i = p.y), (o = h.x), (a = h.y);
        }
        return [
          { x: r, y: i },
          { x: o, y: a }
        ];
      }
      function Jt(t) {
        return (
          (Jt =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          Jt(t)
        );
      }
      function Zt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function $t(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Zt(Object(n), !0).forEach(function (e) {
                Qt(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Zt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function Qt(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != Jt(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != Jt(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == Jt(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function te(t) {
        var e,
          n = t.element,
          i = t.tooltipEventType,
          o = t.isActive,
          a = t.activeCoordinate,
          c = t.activePayload,
          u = t.offset,
          l = t.activeTooltipIndex,
          s = t.tooltipAxisBandSize,
          f = t.layout,
          p = t.chartName;
        if (
          !n ||
          !n.props.cursor ||
          !o ||
          !a ||
          ('ScatterChart' !== p && 'axis' !== i)
        )
          return null;
        var h = Lt.I;
        if ('ScatterChart' === p) (e = a), (h = Ht);
        else if ('BarChart' === p)
          (e = (function (t, e, n, r) {
            var i = r / 2;
            return {
              stroke: 'none',
              fill: '#ccc',
              x: 'horizontal' === t ? e.x - i : n.left + 0.5,
              y: 'horizontal' === t ? n.top + 0.5 : e.y - i,
              width: 'horizontal' === t ? r : n.width - 1,
              height: 'horizontal' === t ? n.height - 1 : r
            };
          })(f, a, u, s)),
            (h = A.M);
        else if ('radial' === f) {
          var d = Vt(a),
            y = d.cx,
            v = d.cy,
            m = d.radius;
          (e = {
            cx: y,
            cy: v,
            startAngle: d.startAngle,
            endAngle: d.endAngle,
            innerRadius: m,
            outerRadius: m
          }),
            (h = Gt.h);
        } else (e = { points: Yt(f, a, u) }), (h = Lt.I);
        var g = $t(
          $t(
            $t($t({ stroke: '#ccc', pointerEvents: 'none' }, u), e),
            (0, S.J9)(n.props.cursor, !1)
          ),
          {},
          { payload: c, payloadIndex: l, className: 'recharts-tooltip-cursor' }
        );
        return (0, r.isValidElement)(n.props.cursor)
          ? (0, r.cloneElement)(n.props.cursor, g)
          : (0, r.createElement)(h, g);
      }
      var ee = ['item'],
        ne = [
          'children',
          'className',
          'width',
          'height',
          'style',
          'compact',
          'title',
          'desc'
        ];
      function re(t) {
        return (
          (re =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          re(t)
        );
      }
      function ie() {
        return (
          (ie = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          ie.apply(this, arguments)
        );
      }
      function oe(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != n) {
              var r,
                i,
                o,
                a,
                c = [],
                u = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return c;
            }
          })(t, e) ||
          de(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function ae(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function ce(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, be(r.key), r);
        }
      }
      function ue(t, e, n) {
        return (
          (e = se(e)),
          (function (t, e) {
            if (e && ('object' === re(e) || 'function' === typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return fe(t);
          })(
            t,
            le()
              ? Reflect.construct(e, n || [], se(t).constructor)
              : e.apply(t, n)
          )
        );
      }
      function le() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (le = function () {
          return !!t;
        })();
      }
      function se(t) {
        return (
          (se = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          se(t)
        );
      }
      function fe(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function pe(t, e) {
        return (
          (pe = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          pe(t, e)
        );
      }
      function he(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return ye(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' !== typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          de(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function de(t, e) {
        if (t) {
          if ('string' === typeof t) return ye(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? ye(t, e)
              : void 0
          );
        }
      }
      function ye(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function ve(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function me(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ve(Object(n), !0).forEach(function (e) {
                ge(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : ve(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function ge(t, e, n) {
        return (
          (e = be(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function be(t) {
        var e = (function (t, e) {
          if ('object' != re(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' != re(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' == re(e) ? e : String(e);
      }
      var xe = { xAxis: ['bottom', 'top'], yAxis: ['left', 'right'] },
        we = { width: '100%', height: '100%' },
        Oe = { x: 0, y: 0 };
      function Ae(t) {
        return t;
      }
      var Se = function (t, e) {
        var n = e.graphicalItems,
          r = e.dataStartIndex,
          i = e.dataEndIndex,
          o = (null !== n && void 0 !== n ? n : []).reduce(function (t, e) {
            var n = e.props.data;
            return n && n.length ? [].concat(he(t), he(n)) : t;
          }, []);
        return o.length > 0
          ? o
          : t && t.length && (0, k.Et)(r) && (0, k.Et)(i)
          ? t.slice(r, i + 1)
          : [];
      };
      function je(t) {
        return 'number' === t ? [0, 'auto'] : void 0;
      }
      var Pe = function (t, e, n, r) {
          var i = t.graphicalItems,
            o = t.tooltipAxis,
            a = Se(e, t);
          return n < 0 || !i || !i.length || n >= a.length
            ? null
            : i.reduce(function (i, c) {
                var u,
                  l,
                  s = null !== (u = c.props.data) && void 0 !== u ? u : e;
                if (
                  (s &&
                    t.dataStartIndex + t.dataEndIndex !== 0 &&
                    (s = s.slice(t.dataStartIndex, t.dataEndIndex + 1)),
                  o.dataKey && !o.allowDuplicatedCategory)
                ) {
                  var f = void 0 === s ? a : s;
                  l = (0, k.eP)(f, o.dataKey, r);
                } else l = (s && s[n]) || a[n];
                return l ? [].concat(he(i), [(0, E.zb)(c, l)]) : i;
              }, []);
        },
        Ee = function (t, e, n, r) {
          var i = r || { x: t.chartX, y: t.chartY },
            o = (function (t, e) {
              return 'horizontal' === e
                ? t.x
                : 'vertical' === e
                ? t.y
                : 'centric' === e
                ? t.angle
                : t.radius;
            })(i, n),
            a = t.orderedTooltipTicks,
            c = t.tooltipAxis,
            u = t.tooltipTicks,
            l = (0, E.gH)(o, a, u, c);
          if (l >= 0 && u) {
            var s = u[l] && u[l].value,
              f = Pe(t, e, l, s),
              p = (function (t, e, n, r) {
                var i = e.find(function (t) {
                  return t && t.index === n;
                });
                if (i) {
                  if ('horizontal' === t) return { x: i.coordinate, y: r.y };
                  if ('vertical' === t) return { x: r.x, y: i.coordinate };
                  if ('centric' === t) {
                    var o = i.coordinate,
                      a = r.radius;
                    return me(
                      me(me({}, r), (0, Pt.IZ)(r.cx, r.cy, a, o)),
                      {},
                      { angle: o, radius: a }
                    );
                  }
                  var c = i.coordinate,
                    u = r.angle;
                  return me(
                    me(me({}, r), (0, Pt.IZ)(r.cx, r.cy, c, u)),
                    {},
                    { angle: u, radius: c }
                  );
                }
                return Oe;
              })(n, a, l, i);
            return {
              activeTooltipIndex: l,
              activeLabel: s,
              activePayload: f,
              activeCoordinate: p
            };
          }
          return null;
        },
        ke = function (t, e) {
          var n = e.axes,
            r = e.graphicalItems,
            i = e.axisType,
            a = e.axisIdKey,
            c = e.stackGroups,
            u = e.dataStartIndex,
            s = e.dataEndIndex,
            f = t.layout,
            p = t.children,
            h = t.stackOffset,
            d = (0, E._L)(f, i);
          return n.reduce(function (e, n) {
            var y,
              v = n.props,
              m = v.type,
              g = v.dataKey,
              b = v.allowDataOverflow,
              x = v.allowDuplicatedCategory,
              w = v.scale,
              O = v.ticks,
              A = v.includeHidden,
              S = n.props[a];
            if (e[S]) return e;
            var j,
              P,
              M,
              T = Se(t.data, {
                graphicalItems: r.filter(function (t) {
                  return t.props[a] === S;
                }),
                dataStartIndex: u,
                dataEndIndex: s
              }),
              C = T.length;
            (function (t, e, n) {
              if ('number' === n && !0 === e && Array.isArray(t)) {
                var r = null === t || void 0 === t ? void 0 : t[0],
                  i = null === t || void 0 === t ? void 0 : t[1];
                if (r && i && (0, k.Et)(r) && (0, k.Et)(i)) return !0;
              }
              return !1;
            })(n.props.domain, b, m) &&
              ((j = (0, E.AQ)(n.props.domain, null, b)),
              !d ||
                ('number' !== m && 'auto' === w) ||
                (M = (0, E.Ay)(T, g, 'category')));
            var _ = je(m);
            if (!j || 0 === j.length) {
              var I,
                D = null !== (I = n.props.domain) && void 0 !== I ? I : _;
              if (g) {
                if (((j = (0, E.Ay)(T, g, m)), 'category' === m && d)) {
                  var N = (0, k.CG)(j);
                  x && N
                    ? ((P = j), (j = l()(0, C)))
                    : x ||
                      (j = (0, E.KC)(D, j, n).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 ? t : [].concat(he(t), [e]);
                      }, []));
                } else if ('category' === m)
                  j = x
                    ? j.filter(function (t) {
                        return '' !== t && !o()(t);
                      })
                    : (0, E.KC)(D, j, n).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 || '' === e || o()(e)
                          ? t
                          : [].concat(he(t), [e]);
                      }, []);
                else if ('number' === m) {
                  var B = (0, E.A1)(
                    T,
                    r.filter(function (t) {
                      return t.props[a] === S && (A || !t.props.hide);
                    }),
                    g,
                    i,
                    f
                  );
                  B && (j = B);
                }
                !d ||
                  ('number' !== m && 'auto' === w) ||
                  (M = (0, E.Ay)(T, g, 'category'));
              } else
                j = d
                  ? l()(0, C)
                  : c && c[S] && c[S].hasStack && 'number' === m
                  ? 'expand' === h
                    ? [0, 1]
                    : (0, E.Mk)(c[S].stackGroups, u, s)
                  : (0, E.vf)(
                      T,
                      r.filter(function (t) {
                        return t.props[a] === S && (A || !t.props.hide);
                      }),
                      m,
                      f,
                      !0
                    );
              if ('number' === m)
                (j = jt(p, j, S, i, O)), D && (j = (0, E.AQ)(D, j, b));
              else if ('category' === m && D) {
                var R = D;
                j.every(function (t) {
                  return R.indexOf(t) >= 0;
                }) && (j = R);
              }
            }
            return me(
              me({}, e),
              {},
              ge(
                {},
                S,
                me(
                  me({}, n.props),
                  {},
                  {
                    axisType: i,
                    domain: j,
                    categoricalDomain: M,
                    duplicateDomain: P,
                    originalDomain:
                      null !== (y = n.props.domain) && void 0 !== y ? y : _,
                    isCategorical: d,
                    layout: f
                  }
                )
              )
            );
          }, {});
        },
        Me = function (t, e) {
          var n = e.axisType,
            r = void 0 === n ? 'xAxis' : n,
            i = e.AxisComp,
            o = e.graphicalItems,
            a = e.stackGroups,
            c = e.dataStartIndex,
            u = e.dataEndIndex,
            s = t.children,
            p = ''.concat(r, 'Id'),
            h = (0, S.aS)(s, i),
            d = {};
          return (
            h && h.length
              ? (d = ke(t, {
                  axes: h,
                  graphicalItems: o,
                  axisType: r,
                  axisIdKey: p,
                  stackGroups: a,
                  dataStartIndex: c,
                  dataEndIndex: u
                }))
              : o &&
                o.length &&
                (d = (function (t, e) {
                  var n = e.graphicalItems,
                    r = e.Axis,
                    i = e.axisType,
                    o = e.axisIdKey,
                    a = e.stackGroups,
                    c = e.dataStartIndex,
                    u = e.dataEndIndex,
                    s = t.layout,
                    p = t.children,
                    h = Se(t.data, {
                      graphicalItems: n,
                      dataStartIndex: c,
                      dataEndIndex: u
                    }),
                    d = h.length,
                    y = (0, E._L)(s, i),
                    v = -1;
                  return n.reduce(function (t, e) {
                    var m,
                      g = e.props[o],
                      b = je('number');
                    return t[g]
                      ? t
                      : (v++,
                        y
                          ? (m = l()(0, d))
                          : a && a[g] && a[g].hasStack
                          ? ((m = (0, E.Mk)(a[g].stackGroups, c, u)),
                            (m = jt(p, m, g, i)))
                          : ((m = (0, E.AQ)(
                              b,
                              (0, E.vf)(
                                h,
                                n.filter(function (t) {
                                  return t.props[o] === g && !t.props.hide;
                                }),
                                'number',
                                s
                              ),
                              r.defaultProps.allowDataOverflow
                            )),
                            (m = jt(p, m, g, i))),
                        me(
                          me({}, t),
                          {},
                          ge(
                            {},
                            g,
                            me(
                              me({ axisType: i }, r.defaultProps),
                              {},
                              {
                                hide: !0,
                                orientation: f()(
                                  xe,
                                  ''.concat(i, '.').concat(v % 2),
                                  null
                                ),
                                domain: m,
                                originalDomain: b,
                                isCategorical: y,
                                layout: s
                              }
                            )
                          )
                        ));
                  }, {});
                })(t, {
                  Axis: i,
                  graphicalItems: o,
                  axisType: r,
                  axisIdKey: p,
                  stackGroups: a,
                  dataStartIndex: c,
                  dataEndIndex: u
                })),
            d
          );
        },
        Te = function (t) {
          var e = t.children,
            n = t.defaultShowTooltip,
            r = (0, S.BU)(e, V),
            i = 0,
            o = 0;
          return (
            t.data && 0 !== t.data.length && (o = t.data.length - 1),
            r &&
              r.props &&
              (r.props.startIndex >= 0 && (i = r.props.startIndex),
              r.props.endIndex >= 0 && (o = r.props.endIndex)),
            {
              chartX: 0,
              chartY: 0,
              dataStartIndex: i,
              dataEndIndex: o,
              activeTooltipIndex: -1,
              isTooltipActive: Boolean(n)
            }
          );
        },
        Ce = function (t) {
          return 'horizontal' === t
            ? { numericAxisName: 'yAxis', cateAxisName: 'xAxis' }
            : 'vertical' === t
            ? { numericAxisName: 'xAxis', cateAxisName: 'yAxis' }
            : 'centric' === t
            ? { numericAxisName: 'radiusAxis', cateAxisName: 'angleAxis' }
            : { numericAxisName: 'angleAxis', cateAxisName: 'radiusAxis' };
        },
        _e = function (t) {
          var e,
            n = t.chartName,
            i = t.GraphicalChild,
            a = t.defaultTooltipEventType,
            u = void 0 === a ? 'axis' : a,
            l = t.validateTooltipEventTypes,
            s = void 0 === l ? ['axis'] : l,
            p = t.axisComponents,
            d = t.legendContent,
            j = t.formatAxisMap,
            P = t.defaultProps,
            M = function (t, e) {
              var n = e.graphicalItems,
                r = e.stackGroups,
                i = e.offset,
                a = e.updateId,
                c = e.dataStartIndex,
                u = e.dataEndIndex,
                l = t.barSize,
                s = t.layout,
                f = t.barGap,
                h = t.barCategoryGap,
                d = t.maxBarSize,
                y = Ce(s),
                v = y.numericAxisName,
                g = y.cateAxisName,
                b = (function (t) {
                  return (
                    !(!t || !t.length) &&
                    t.some(function (t) {
                      var e = (0, S.Mn)(t && t.type);
                      return e && e.indexOf('Bar') >= 0;
                    })
                  );
                })(n),
                x = b && (0, E.tA)({ barSize: l, stackGroups: r }),
                w = [];
              return (
                n.forEach(function (n, l) {
                  var y = Se(t.data, {
                      graphicalItems: [n],
                      dataStartIndex: c,
                      dataEndIndex: u
                    }),
                    b = n.props,
                    O = b.dataKey,
                    A = b.maxBarSize,
                    j = n.props[''.concat(v, 'Id')],
                    P = n.props[''.concat(g, 'Id')],
                    k = p.reduce(function (t, r) {
                      var i = e[''.concat(r.axisType, 'Map')],
                        o = n.props[''.concat(r.axisType, 'Id')];
                      (i && i[o]) || 'zAxis' === r.axisType || (0, m.A)(!1);
                      var a = i[o];
                      return me(
                        me({}, t),
                        {},
                        ge(
                          ge({}, r.axisType, a),
                          ''.concat(r.axisType, 'Ticks'),
                          (0, E.Rh)(a)
                        )
                      );
                    }, {}),
                    M = k[g],
                    T = k[''.concat(g, 'Ticks')],
                    C =
                      r &&
                      r[j] &&
                      r[j].hasStack &&
                      (0, E.kA)(n, r[j].stackGroups),
                    _ = (0, S.Mn)(n.type).indexOf('Bar') >= 0,
                    I = (0, E.Hj)(M, T),
                    D = [];
                  if (_) {
                    var N,
                      B,
                      R = o()(A) ? d : A,
                      L =
                        null !==
                          (N =
                            null !== (B = (0, E.Hj)(M, T, !0)) && void 0 !== B
                              ? B
                              : R) && void 0 !== N
                          ? N
                          : 0;
                    (D = (0, E.BX)({
                      barGap: f,
                      barCategoryGap: h,
                      bandSize: L !== I ? L : I,
                      sizeList: x[P],
                      maxBarSize: R
                    })),
                      L !== I &&
                        (D = D.map(function (t) {
                          return me(
                            me({}, t),
                            {},
                            {
                              position: me(
                                me({}, t.position),
                                {},
                                { offset: t.position.offset - L / 2 }
                              )
                            }
                          );
                        }));
                  }
                  var F = n && n.type && n.type.getComposedData;
                  F &&
                    w.push({
                      props: me(
                        me(
                          {},
                          F(
                            me(
                              me({}, k),
                              {},
                              {
                                displayedData: y,
                                props: t,
                                dataKey: O,
                                item: n,
                                bandSize: I,
                                barPosition: D,
                                offset: i,
                                stackedData: C,
                                layout: s,
                                dataStartIndex: c,
                                dataEndIndex: u
                              }
                            )
                          )
                        ),
                        {},
                        ge(
                          ge(
                            ge({ key: n.key || 'item-'.concat(l) }, v, k[v]),
                            g,
                            k[g]
                          ),
                          'animationId',
                          a
                        )
                      ),
                      childIndex: (0, S.AW)(n, t.children),
                      item: n
                    });
                }),
                w
              );
            },
            T = function (t, e) {
              var r = t.props,
                o = t.dataStartIndex,
                a = t.dataEndIndex,
                c = t.updateId;
              if (!(0, S.Me)({ props: r })) return null;
              var u = r.children,
                l = r.layout,
                s = r.stackOffset,
                d = r.data,
                y = r.reverseStackOrder,
                v = Ce(l),
                m = v.numericAxisName,
                g = v.cateAxisName,
                b = (0, S.aS)(u, i),
                x = (0, E.Mn)(
                  d,
                  b,
                  ''.concat(m, 'Id'),
                  ''.concat(g, 'Id'),
                  s,
                  y
                ),
                O = p.reduce(function (t, e) {
                  var n = ''.concat(e.axisType, 'Map');
                  return me(
                    me({}, t),
                    {},
                    ge(
                      {},
                      n,
                      Me(
                        r,
                        me(
                          me({}, e),
                          {},
                          {
                            graphicalItems: b,
                            stackGroups: e.axisType === m && x,
                            dataStartIndex: o,
                            dataEndIndex: a
                          }
                        )
                      )
                    )
                  );
                }, {}),
                A = (function (t, e) {
                  var n = t.props,
                    r = t.graphicalItems,
                    i = t.xAxisMap,
                    o = void 0 === i ? {} : i,
                    a = t.yAxisMap,
                    c = void 0 === a ? {} : a,
                    u = n.width,
                    l = n.height,
                    s = n.children,
                    p = n.margin || {},
                    h = (0, S.BU)(s, V),
                    d = (0, S.BU)(s, w.s),
                    y = Object.keys(c).reduce(
                      function (t, e) {
                        var n = c[e],
                          r = n.orientation;
                        return n.mirror || n.hide
                          ? t
                          : me(me({}, t), {}, ge({}, r, t[r] + n.width));
                      },
                      { left: p.left || 0, right: p.right || 0 }
                    ),
                    v = Object.keys(o).reduce(
                      function (t, e) {
                        var n = o[e],
                          r = n.orientation;
                        return n.mirror || n.hide
                          ? t
                          : me(
                              me({}, t),
                              {},
                              ge({}, r, f()(t, ''.concat(r)) + n.height)
                            );
                      },
                      { top: p.top || 0, bottom: p.bottom || 0 }
                    ),
                    m = me(me({}, v), y),
                    g = m.bottom;
                  h && (m.bottom += h.props.height || V.defaultProps.height),
                    d && e && (m = (0, E.s0)(m, r, n, e));
                  var b = u - m.left - m.right,
                    x = l - m.top - m.bottom;
                  return me(
                    me({ brushBottom: g }, m),
                    {},
                    { width: Math.max(b, 0), height: Math.max(x, 0) }
                  );
                })(
                  me(me({}, O), {}, { props: r, graphicalItems: b }),
                  null === e || void 0 === e ? void 0 : e.legendBBox
                );
              Object.keys(O).forEach(function (t) {
                O[t] = j(r, O[t], A, t.replace('Map', ''), n);
              });
              var P = (function (t) {
                  var e = (0, k.lX)(t),
                    n = (0, E.Rh)(e, !1, !0);
                  return {
                    tooltipTicks: n,
                    orderedTooltipTicks: h()(n, function (t) {
                      return t.coordinate;
                    }),
                    tooltipAxis: e,
                    tooltipAxisBandSize: (0, E.Hj)(e, n)
                  };
                })(O[''.concat(g, 'Map')]),
                T = M(
                  r,
                  me(
                    me({}, O),
                    {},
                    {
                      dataStartIndex: o,
                      dataEndIndex: a,
                      updateId: c,
                      graphicalItems: b,
                      stackGroups: x,
                      offset: A
                    }
                  )
                );
              return me(
                me(
                  {
                    formattedGraphicalItems: T,
                    graphicalItems: b,
                    offset: A,
                    stackGroups: x
                  },
                  P
                ),
                O
              );
            };
          return (
            (e = (function (t) {
              function e(t) {
                var i, a, u;
                return (
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, e),
                  ge(
                    fe((u = ue(this, e, [t]))),
                    'eventEmitterSymbol',
                    Symbol('rechartsEventEmitter')
                  ),
                  ge(fe(u), 'accessibilityManager', new Bt()),
                  ge(fe(u), 'handleLegendBBoxUpdate', function (t) {
                    if (t) {
                      var e = u.state,
                        n = e.dataStartIndex,
                        r = e.dataEndIndex,
                        i = e.updateId;
                      u.setState(
                        me(
                          { legendBBox: t },
                          T(
                            {
                              props: u.props,
                              dataStartIndex: n,
                              dataEndIndex: r,
                              updateId: i
                            },
                            me(me({}, u.state), {}, { legendBBox: t })
                          )
                        )
                      );
                    }
                  }),
                  ge(fe(u), 'handleReceiveSyncEvent', function (t, e, n) {
                    if (u.props.syncId === t) {
                      if (
                        n === u.eventEmitterSymbol &&
                        'function' !== typeof u.props.syncMethod
                      )
                        return;
                      u.applySyncEvent(e);
                    }
                  }),
                  ge(fe(u), 'handleBrushChange', function (t) {
                    var e = t.startIndex,
                      n = t.endIndex;
                    if (
                      e !== u.state.dataStartIndex ||
                      n !== u.state.dataEndIndex
                    ) {
                      var r = u.state.updateId;
                      u.setState(function () {
                        return me(
                          { dataStartIndex: e, dataEndIndex: n },
                          T(
                            {
                              props: u.props,
                              dataStartIndex: e,
                              dataEndIndex: n,
                              updateId: r
                            },
                            u.state
                          )
                        );
                      }),
                        u.triggerSyncEvent({
                          dataStartIndex: e,
                          dataEndIndex: n
                        });
                    }
                  }),
                  ge(fe(u), 'handleMouseEnter', function (t) {
                    var e = u.getMouseInfo(t);
                    if (e) {
                      var n = me(me({}, e), {}, { isTooltipActive: !0 });
                      u.setState(n), u.triggerSyncEvent(n);
                      var r = u.props.onMouseEnter;
                      c()(r) && r(n, t);
                    }
                  }),
                  ge(fe(u), 'triggeredAfterMouseMove', function (t) {
                    var e = u.getMouseInfo(t),
                      n = e
                        ? me(me({}, e), {}, { isTooltipActive: !0 })
                        : { isTooltipActive: !1 };
                    u.setState(n), u.triggerSyncEvent(n);
                    var r = u.props.onMouseMove;
                    c()(r) && r(n, t);
                  }),
                  ge(fe(u), 'handleItemMouseEnter', function (t) {
                    u.setState(function () {
                      return {
                        isTooltipActive: !0,
                        activeItem: t,
                        activePayload: t.tooltipPayload,
                        activeCoordinate: t.tooltipPosition || {
                          x: t.cx,
                          y: t.cy
                        }
                      };
                    });
                  }),
                  ge(fe(u), 'handleItemMouseLeave', function () {
                    u.setState(function () {
                      return { isTooltipActive: !1 };
                    });
                  }),
                  ge(fe(u), 'handleMouseMove', function (t) {
                    t.persist(), u.throttleTriggeredAfterMouseMove(t);
                  }),
                  ge(fe(u), 'handleMouseLeave', function (t) {
                    u.throttleTriggeredAfterMouseMove.cancel();
                    var e = { isTooltipActive: !1 };
                    u.setState(e), u.triggerSyncEvent(e);
                    var n = u.props.onMouseLeave;
                    c()(n) && n(e, t);
                  }),
                  ge(fe(u), 'handleOuterEvent', function (t) {
                    var e,
                      n = (0, S.X_)(t),
                      r = f()(u.props, ''.concat(n));
                    n &&
                      c()(r) &&
                      r(
                        null !==
                          (e = /.*touch.*/i.test(n)
                            ? u.getMouseInfo(t.changedTouches[0])
                            : u.getMouseInfo(t)) && void 0 !== e
                          ? e
                          : {},
                        t
                      );
                  }),
                  ge(fe(u), 'handleClick', function (t) {
                    var e = u.getMouseInfo(t);
                    if (e) {
                      var n = me(me({}, e), {}, { isTooltipActive: !0 });
                      u.setState(n), u.triggerSyncEvent(n);
                      var r = u.props.onClick;
                      c()(r) && r(n, t);
                    }
                  }),
                  ge(fe(u), 'handleMouseDown', function (t) {
                    var e = u.props.onMouseDown;
                    c()(e) && e(u.getMouseInfo(t), t);
                  }),
                  ge(fe(u), 'handleMouseUp', function (t) {
                    var e = u.props.onMouseUp;
                    c()(e) && e(u.getMouseInfo(t), t);
                  }),
                  ge(fe(u), 'handleTouchMove', function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      u.throttleTriggeredAfterMouseMove(t.changedTouches[0]);
                  }),
                  ge(fe(u), 'handleTouchStart', function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      u.handleMouseDown(t.changedTouches[0]);
                  }),
                  ge(fe(u), 'handleTouchEnd', function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      u.handleMouseUp(t.changedTouches[0]);
                  }),
                  ge(fe(u), 'triggerSyncEvent', function (t) {
                    void 0 !== u.props.syncId &&
                      Mt.emit(Tt, u.props.syncId, t, u.eventEmitterSymbol);
                  }),
                  ge(fe(u), 'applySyncEvent', function (t) {
                    var e = u.props,
                      n = e.layout,
                      r = e.syncMethod,
                      i = u.state.updateId,
                      o = t.dataStartIndex,
                      a = t.dataEndIndex;
                    if (
                      void 0 !== t.dataStartIndex ||
                      void 0 !== t.dataEndIndex
                    )
                      u.setState(
                        me(
                          { dataStartIndex: o, dataEndIndex: a },
                          T(
                            {
                              props: u.props,
                              dataStartIndex: o,
                              dataEndIndex: a,
                              updateId: i
                            },
                            u.state
                          )
                        )
                      );
                    else if (void 0 !== t.activeTooltipIndex) {
                      var c = t.chartX,
                        l = t.chartY,
                        s = t.activeTooltipIndex,
                        f = u.state,
                        p = f.offset,
                        h = f.tooltipTicks;
                      if (!p) return;
                      if ('function' === typeof r) s = r(h, t);
                      else if ('value' === r) {
                        s = -1;
                        for (var d = 0; d < h.length; d++)
                          if (h[d].value === t.activeLabel) {
                            s = d;
                            break;
                          }
                      }
                      var y = me(me({}, p), {}, { x: p.left, y: p.top }),
                        v = Math.min(c, y.x + y.width),
                        m = Math.min(l, y.y + y.height),
                        g = h[s] && h[s].value,
                        b = Pe(u.state, u.props.data, s),
                        x = h[s]
                          ? {
                              x: 'horizontal' === n ? h[s].coordinate : v,
                              y: 'horizontal' === n ? m : h[s].coordinate
                            }
                          : Oe;
                      u.setState(
                        me(
                          me({}, t),
                          {},
                          {
                            activeLabel: g,
                            activeCoordinate: x,
                            activePayload: b,
                            activeTooltipIndex: s
                          }
                        )
                      );
                    } else u.setState(t);
                  }),
                  ge(fe(u), 'renderCursor', function (t) {
                    var e,
                      i = u.state,
                      o = i.isTooltipActive,
                      a = i.activeCoordinate,
                      c = i.activePayload,
                      l = i.offset,
                      s = i.activeTooltipIndex,
                      f = i.tooltipAxisBandSize,
                      p = u.getTooltipEventType(),
                      h = null !== (e = t.props.active) && void 0 !== e ? e : o,
                      d = u.props.layout,
                      y = t.key || '_recharts-cursor';
                    return r.createElement(te, {
                      key: y,
                      activeCoordinate: a,
                      activePayload: c,
                      activeTooltipIndex: s,
                      chartName: n,
                      element: t,
                      isActive: h,
                      layout: d,
                      offset: l,
                      tooltipAxisBandSize: f,
                      tooltipEventType: p
                    });
                  }),
                  ge(fe(u), 'renderPolarAxis', function (t, e, n) {
                    var i = f()(t, 'type.axisType'),
                      o = f()(u.state, ''.concat(i, 'Map')),
                      a = o && o[t.props[''.concat(i, 'Id')]];
                    return (0,
                    r.cloneElement)(t, me(me({}, a), {}, { className: i, key: t.key || ''.concat(e, '-').concat(n), ticks: (0, E.Rh)(a, !0) }));
                  }),
                  ge(fe(u), 'renderPolarGrid', function (t) {
                    var e = t.props,
                      n = e.radialLines,
                      i = e.polarAngles,
                      o = e.polarRadius,
                      a = u.state,
                      c = a.radiusAxisMap,
                      l = a.angleAxisMap,
                      s = (0, k.lX)(c),
                      f = (0, k.lX)(l),
                      p = f.cx,
                      h = f.cy,
                      d = f.innerRadius,
                      y = f.outerRadius;
                    return (0, r.cloneElement)(t, {
                      polarAngles: Array.isArray(i)
                        ? i
                        : (0, E.Rh)(f, !0).map(function (t) {
                            return t.coordinate;
                          }),
                      polarRadius: Array.isArray(o)
                        ? o
                        : (0, E.Rh)(s, !0).map(function (t) {
                            return t.coordinate;
                          }),
                      cx: p,
                      cy: h,
                      innerRadius: d,
                      outerRadius: y,
                      key: t.key || 'polar-grid',
                      radialLines: n
                    });
                  }),
                  ge(fe(u), 'renderLegend', function () {
                    var t = u.state.formattedGraphicalItems,
                      e = u.props,
                      n = e.children,
                      i = e.width,
                      o = e.height,
                      a = u.props.margin || {},
                      c = i - (a.left || 0) - (a.right || 0),
                      l = (0, Y.g)({
                        children: n,
                        formattedGraphicalItems: t,
                        legendWidth: c,
                        legendContent: d
                      });
                    if (!l) return null;
                    var s = l.item,
                      f = ae(l, ee);
                    return (0,
                    r.cloneElement)(s, me(me({}, f), {}, { chartWidth: i, chartHeight: o, margin: a, onBBoxUpdate: u.handleLegendBBoxUpdate }));
                  }),
                  ge(fe(u), 'renderTooltip', function () {
                    var t,
                      e = u.props,
                      n = e.children,
                      i = e.accessibilityLayer,
                      o = (0, S.BU)(n, x.m);
                    if (!o) return null;
                    var a = u.state,
                      c = a.isTooltipActive,
                      l = a.activeCoordinate,
                      s = a.activePayload,
                      f = a.activeLabel,
                      p = a.offset,
                      h = null !== (t = o.props.active) && void 0 !== t ? t : c;
                    return (0,
                    r.cloneElement)(o, { viewBox: me(me({}, p), {}, { x: p.left, y: p.top }), active: h, label: f, payload: h ? s : [], coordinate: l, accessibilityLayer: i });
                  }),
                  ge(fe(u), 'renderBrush', function (t) {
                    var e = u.props,
                      n = e.margin,
                      i = e.data,
                      o = u.state,
                      a = o.offset,
                      c = o.dataStartIndex,
                      l = o.dataEndIndex,
                      s = o.updateId;
                    return (0,
                    r.cloneElement)(t, { key: t.key || '_recharts-brush', onChange: (0, E.HQ)(u.handleBrushChange, t.props.onChange), data: i, x: (0, k.Et)(t.props.x) ? t.props.x : a.left, y: (0, k.Et)(t.props.y) ? t.props.y : a.top + a.height + a.brushBottom - (n.bottom || 0), width: (0, k.Et)(t.props.width) ? t.props.width : a.width, startIndex: c, endIndex: l, updateId: 'brush-'.concat(s) });
                  }),
                  ge(fe(u), 'renderReferenceElement', function (t, e, n) {
                    if (!t) return null;
                    var i = fe(u).clipPathId,
                      o = u.state,
                      a = o.xAxisMap,
                      c = o.yAxisMap,
                      l = o.offset,
                      s = t.props,
                      f = s.xAxisId,
                      p = s.yAxisId;
                    return (0,
                    r.cloneElement)(t, { key: t.key || ''.concat(e, '-').concat(n), xAxis: a[f], yAxis: c[p], viewBox: { x: l.left, y: l.top, width: l.width, height: l.height }, clipPathId: i });
                  }),
                  ge(fe(u), 'renderActivePoints', function (t) {
                    var n = t.item,
                      r = t.activePoint,
                      i = t.basePoint,
                      o = t.childIndex,
                      a = t.isRange,
                      c = [],
                      u = n.props.key,
                      l = n.item.props,
                      s = l.activeDot,
                      f = me(
                        me(
                          {
                            index: o,
                            dataKey: l.dataKey,
                            cx: r.x,
                            cy: r.y,
                            r: 4,
                            fill: (0, E.Ps)(n.item),
                            strokeWidth: 2,
                            stroke: '#fff',
                            payload: r.payload,
                            value: r.value,
                            key: ''.concat(u, '-activePoint-').concat(o)
                          },
                          (0, S.J9)(s, !1)
                        ),
                        (0, Ct._U)(s)
                      );
                    return (
                      c.push(e.renderActiveDot(s, f)),
                      i
                        ? c.push(
                            e.renderActiveDot(
                              s,
                              me(
                                me({}, f),
                                {},
                                {
                                  cx: i.x,
                                  cy: i.y,
                                  key: ''.concat(u, '-basePoint-').concat(o)
                                }
                              )
                            )
                          )
                        : a && c.push(null),
                      c
                    );
                  }),
                  ge(fe(u), 'renderGraphicChild', function (t, e, n) {
                    var i = u.filterFormatItem(t, e, n);
                    if (!i) return null;
                    var a = u.getTooltipEventType(),
                      c = u.state,
                      l = c.isTooltipActive,
                      s = c.tooltipAxis,
                      f = c.activeTooltipIndex,
                      p = c.activeLabel,
                      h = u.props.children,
                      d = (0, S.BU)(h, x.m),
                      y = i.props,
                      v = y.points,
                      m = y.isRange,
                      g = y.baseLine,
                      b = i.item.props,
                      w = b.activeDot,
                      O = b.hide,
                      A = b.activeBar,
                      j = b.activeShape,
                      P = Boolean(!O && l && d && (w || A || j)),
                      M = {};
                    'axis' !== a && d && 'click' === d.props.trigger
                      ? (M = {
                          onClick: (0, E.HQ)(
                            u.handleItemMouseEnter,
                            t.props.onClick
                          )
                        })
                      : 'axis' !== a &&
                        (M = {
                          onMouseLeave: (0, E.HQ)(
                            u.handleItemMouseLeave,
                            t.props.onMouseLeave
                          ),
                          onMouseEnter: (0, E.HQ)(
                            u.handleItemMouseEnter,
                            t.props.onMouseEnter
                          )
                        });
                    var T = (0, r.cloneElement)(t, me(me({}, i.props), M));
                    if (P) {
                      if (!(f >= 0)) {
                        var C,
                          _ = (
                            null !==
                              (C = u.getItemByXY(u.state.activeCoordinate)) &&
                            void 0 !== C
                              ? C
                              : { graphicalItem: T }
                          ).graphicalItem,
                          I = _.item,
                          D = void 0 === I ? t : I,
                          N = _.childIndex,
                          B = me(
                            me(me({}, i.props), M),
                            {},
                            { activeIndex: N }
                          );
                        return [(0, r.cloneElement)(D, B), null, null];
                      }
                      var R, L;
                      if (s.dataKey && !s.allowDuplicatedCategory) {
                        var F =
                          'function' === typeof s.dataKey
                            ? function (t) {
                                return 'function' === typeof s.dataKey
                                  ? s.dataKey(t.payload)
                                  : null;
                              }
                            : 'payload.'.concat(s.dataKey.toString());
                        (R = (0, k.eP)(v, F, p)),
                          (L = m && g && (0, k.eP)(g, F, p));
                      } else
                        (R = null === v || void 0 === v ? void 0 : v[f]),
                          (L = m && g && g[f]);
                      if (j || A) {
                        var z =
                          void 0 !== t.props.activeIndex
                            ? t.props.activeIndex
                            : f;
                        return [
                          (0, r.cloneElement)(
                            t,
                            me(me(me({}, i.props), M), {}, { activeIndex: z })
                          ),
                          null,
                          null
                        ];
                      }
                      if (!o()(R))
                        return [T].concat(
                          he(
                            u.renderActivePoints({
                              item: i,
                              activePoint: R,
                              basePoint: L,
                              childIndex: f,
                              isRange: m
                            })
                          )
                        );
                    }
                    return m ? [T, null, null] : [T, null];
                  }),
                  ge(fe(u), 'renderCustomized', function (t, e, n) {
                    return (0,
                    r.cloneElement)(t, me(me({ key: 'recharts-customized-'.concat(n) }, u.props), u.state));
                  }),
                  ge(fe(u), 'renderMap', {
                    CartesianGrid: { handler: Ae, once: !0 },
                    ReferenceArea: { handler: u.renderReferenceElement },
                    ReferenceLine: { handler: Ae },
                    ReferenceDot: { handler: u.renderReferenceElement },
                    XAxis: { handler: Ae },
                    YAxis: { handler: Ae },
                    Brush: { handler: u.renderBrush, once: !0 },
                    Bar: { handler: u.renderGraphicChild },
                    Line: { handler: u.renderGraphicChild },
                    Area: { handler: u.renderGraphicChild },
                    Radar: { handler: u.renderGraphicChild },
                    RadialBar: { handler: u.renderGraphicChild },
                    Scatter: { handler: u.renderGraphicChild },
                    Pie: { handler: u.renderGraphicChild },
                    Funnel: { handler: u.renderGraphicChild },
                    Tooltip: { handler: u.renderCursor, once: !0 },
                    PolarGrid: { handler: u.renderPolarGrid, once: !0 },
                    PolarAngleAxis: { handler: u.renderPolarAxis },
                    PolarRadiusAxis: { handler: u.renderPolarAxis },
                    Customized: { handler: u.renderCustomized }
                  }),
                  (u.clipPathId = ''.concat(
                    null !== (i = t.id) && void 0 !== i
                      ? i
                      : (0, k.NF)('recharts'),
                    '-clip'
                  )),
                  (u.throttleTriggeredAfterMouseMove = y()(
                    u.triggeredAfterMouseMove,
                    null !== (a = t.throttleDelay) && void 0 !== a
                      ? a
                      : 1e3 / 60
                  )),
                  (u.state = {}),
                  u
                );
              }
              var i, a, l;
              return (
                (function (t, e) {
                  if ('function' !== typeof e && null !== e)
                    throw new TypeError(
                      'Super expression must either be null or a function'
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 }
                  })),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    e && pe(t, e);
                })(e, t),
                (i = e),
                (a = [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      var t, e;
                      this.addListener(),
                        this.accessibilityManager.setDetails({
                          container: this.container,
                          offset: {
                            left:
                              null !== (t = this.props.margin.left) &&
                              void 0 !== t
                                ? t
                                : 0,
                            top:
                              null !== (e = this.props.margin.top) &&
                              void 0 !== e
                                ? e
                                : 0
                          },
                          coordinateList: this.state.tooltipTicks,
                          mouseHandlerCallback: this.triggeredAfterMouseMove,
                          layout: this.props.layout
                        }),
                        this.displayDefaultTooltip();
                    }
                  },
                  {
                    key: 'displayDefaultTooltip',
                    value: function () {
                      var t = this.props,
                        e = t.children,
                        n = t.data,
                        r = t.height,
                        i = t.layout,
                        o = (0, S.BU)(e, x.m);
                      if (o) {
                        var a = o.props.defaultIndex;
                        if (
                          !(
                            'number' !== typeof a ||
                            a < 0 ||
                            a > this.state.tooltipTicks.length
                          )
                        ) {
                          var c =
                              this.state.tooltipTicks[a] &&
                              this.state.tooltipTicks[a].value,
                            u = Pe(this.state, n, a, c),
                            l = this.state.tooltipTicks[a].coordinate,
                            s = (this.state.offset.top + r) / 2,
                            f =
                              'horizontal' === i
                                ? { x: l, y: s }
                                : { y: l, x: s },
                            p = this.state.formattedGraphicalItems.find(
                              function (t) {
                                return 'Scatter' === t.item.type.name;
                              }
                            );
                          p &&
                            ((f = me(
                              me({}, f),
                              p.props.points[a].tooltipPosition
                            )),
                            (u = p.props.points[a].tooltipPayload));
                          var h = {
                            activeTooltipIndex: a,
                            isTooltipActive: !0,
                            activeLabel: c,
                            activePayload: u,
                            activeCoordinate: f
                          };
                          this.setState(h),
                            this.renderCursor(o),
                            this.accessibilityManager.setIndex(a);
                        }
                      }
                    }
                  },
                  {
                    key: 'getSnapshotBeforeUpdate',
                    value: function (t, e) {
                      return this.props.accessibilityLayer
                        ? (this.state.tooltipTicks !== e.tooltipTicks &&
                            this.accessibilityManager.setDetails({
                              coordinateList: this.state.tooltipTicks
                            }),
                          this.props.layout !== t.layout &&
                            this.accessibilityManager.setDetails({
                              layout: this.props.layout
                            }),
                          this.props.margin !== t.margin &&
                            this.accessibilityManager.setDetails({
                              offset: {
                                left:
                                  null !== (n = this.props.margin.left) &&
                                  void 0 !== n
                                    ? n
                                    : 0,
                                top:
                                  null !== (r = this.props.margin.top) &&
                                  void 0 !== r
                                    ? r
                                    : 0
                              }
                            }),
                          null)
                        : null;
                      var n, r;
                    }
                  },
                  {
                    key: 'componentDidUpdate',
                    value: function (t) {
                      (0, S.OV)(
                        [(0, S.BU)(t.children, x.m)],
                        [(0, S.BU)(this.props.children, x.m)]
                      ) || this.displayDefaultTooltip();
                    }
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function () {
                      this.removeListener(),
                        this.throttleTriggeredAfterMouseMove.cancel();
                    }
                  },
                  {
                    key: 'getTooltipEventType',
                    value: function () {
                      var t = (0, S.BU)(this.props.children, x.m);
                      if (t && 'boolean' === typeof t.props.shared) {
                        var e = t.props.shared ? 'axis' : 'item';
                        return s.indexOf(e) >= 0 ? e : u;
                      }
                      return u;
                    }
                  },
                  {
                    key: 'getMouseInfo',
                    value: function (t) {
                      if (!this.container) return null;
                      var e = this.container,
                        n = e.getBoundingClientRect(),
                        r = (0, G.A3)(n),
                        i = {
                          chartX: Math.round(t.pageX - r.left),
                          chartY: Math.round(t.pageY - r.top)
                        },
                        o = n.width / e.offsetWidth || 1,
                        a = this.inRange(i.chartX, i.chartY, o);
                      if (!a) return null;
                      var c = this.state,
                        u = c.xAxisMap,
                        l = c.yAxisMap;
                      if ('axis' !== this.getTooltipEventType() && u && l) {
                        var s = (0, k.lX)(u).scale,
                          f = (0, k.lX)(l).scale,
                          p = s && s.invert ? s.invert(i.chartX) : null,
                          h = f && f.invert ? f.invert(i.chartY) : null;
                        return me(me({}, i), {}, { xValue: p, yValue: h });
                      }
                      var d = Ee(
                        this.state,
                        this.props.data,
                        this.props.layout,
                        a
                      );
                      return d ? me(me({}, i), d) : null;
                    }
                  },
                  {
                    key: 'inRange',
                    value: function (t, e) {
                      var n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 1,
                        r = this.props.layout,
                        i = t / n,
                        o = e / n;
                      if ('horizontal' === r || 'vertical' === r) {
                        var a = this.state.offset;
                        return i >= a.left &&
                          i <= a.left + a.width &&
                          o >= a.top &&
                          o <= a.top + a.height
                          ? { x: i, y: o }
                          : null;
                      }
                      var c = this.state,
                        u = c.angleAxisMap,
                        l = c.radiusAxisMap;
                      if (u && l) {
                        var s = (0, k.lX)(u);
                        return (0, Pt.yy)({ x: i, y: o }, s);
                      }
                      return null;
                    }
                  },
                  {
                    key: 'parseEventsOfWrapper',
                    value: function () {
                      var t = this.props.children,
                        e = this.getTooltipEventType(),
                        n = (0, S.BU)(t, x.m),
                        r = {};
                      return (
                        n &&
                          'axis' === e &&
                          (r =
                            'click' === n.props.trigger
                              ? { onClick: this.handleClick }
                              : {
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseMove: this.handleMouseMove,
                                  onMouseLeave: this.handleMouseLeave,
                                  onTouchMove: this.handleTouchMove,
                                  onTouchStart: this.handleTouchStart,
                                  onTouchEnd: this.handleTouchEnd
                                }),
                        me(
                          me({}, (0, Ct._U)(this.props, this.handleOuterEvent)),
                          r
                        )
                      );
                    }
                  },
                  {
                    key: 'addListener',
                    value: function () {
                      Mt.on(Tt, this.handleReceiveSyncEvent);
                    }
                  },
                  {
                    key: 'removeListener',
                    value: function () {
                      Mt.removeListener(Tt, this.handleReceiveSyncEvent);
                    }
                  },
                  {
                    key: 'filterFormatItem',
                    value: function (t, e, n) {
                      for (
                        var r = this.state.formattedGraphicalItems,
                          i = 0,
                          o = r.length;
                        i < o;
                        i++
                      ) {
                        var a = r[i];
                        if (
                          a.item === t ||
                          a.props.key === t.key ||
                          (e === (0, S.Mn)(a.item.type) && n === a.childIndex)
                        )
                          return a;
                      }
                      return null;
                    }
                  },
                  {
                    key: 'renderClipPath',
                    value: function () {
                      var t = this.clipPathId,
                        e = this.state.offset,
                        n = e.left,
                        i = e.top,
                        o = e.height,
                        a = e.width;
                      return r.createElement(
                        'defs',
                        null,
                        r.createElement(
                          'clipPath',
                          { id: t },
                          r.createElement('rect', {
                            x: n,
                            y: i,
                            height: o,
                            width: a
                          })
                        )
                      );
                    }
                  },
                  {
                    key: 'getXScales',
                    value: function () {
                      var t = this.state.xAxisMap;
                      return t
                        ? Object.entries(t).reduce(function (t, e) {
                            var n = oe(e, 2),
                              r = n[0],
                              i = n[1];
                            return me(me({}, t), {}, ge({}, r, i.scale));
                          }, {})
                        : null;
                    }
                  },
                  {
                    key: 'getYScales',
                    value: function () {
                      var t = this.state.yAxisMap;
                      return t
                        ? Object.entries(t).reduce(function (t, e) {
                            var n = oe(e, 2),
                              r = n[0],
                              i = n[1];
                            return me(me({}, t), {}, ge({}, r, i.scale));
                          }, {})
                        : null;
                    }
                  },
                  {
                    key: 'getXScaleByAxisId',
                    value: function (t) {
                      var e;
                      return null === (e = this.state.xAxisMap) ||
                        void 0 === e ||
                        null === (e = e[t]) ||
                        void 0 === e
                        ? void 0
                        : e.scale;
                    }
                  },
                  {
                    key: 'getYScaleByAxisId',
                    value: function (t) {
                      var e;
                      return null === (e = this.state.yAxisMap) ||
                        void 0 === e ||
                        null === (e = e[t]) ||
                        void 0 === e
                        ? void 0
                        : e.scale;
                    }
                  },
                  {
                    key: 'getItemByXY',
                    value: function (t) {
                      var e = this.state,
                        n = e.formattedGraphicalItems,
                        r = e.activeItem;
                      if (n && n.length)
                        for (var i = 0, o = n.length; i < o; i++) {
                          var a = n[i],
                            c = a.props,
                            u = a.item,
                            l = (0, S.Mn)(u.type);
                          if ('Bar' === l) {
                            var s = (c.data || []).find(function (e) {
                              return (0, A.J)(t, e);
                            });
                            if (s) return { graphicalItem: a, payload: s };
                          } else if ('RadialBar' === l) {
                            var f = (c.data || []).find(function (e) {
                              return (0, Pt.yy)(t, e);
                            });
                            if (f) return { graphicalItem: a, payload: f };
                          } else if (
                            (0, Rt.NE)(a, r) ||
                            (0, Rt.nZ)(a, r) ||
                            (0, Rt.xQ)(a, r)
                          ) {
                            var p = (0, Rt.GG)({
                                graphicalItem: a,
                                activeTooltipItem: r,
                                itemData: u.props.data
                              }),
                              h =
                                void 0 === u.props.activeIndex
                                  ? p
                                  : u.props.activeIndex;
                            return {
                              graphicalItem: me(
                                me({}, a),
                                {},
                                { childIndex: h }
                              ),
                              payload: (0, Rt.xQ)(a, r)
                                ? u.props.data[p]
                                : a.props.data[p]
                            };
                          }
                        }
                      return null;
                    }
                  },
                  {
                    key: 'render',
                    value: function () {
                      var t,
                        e = this;
                      if (!(0, S.Me)(this)) return null;
                      var n,
                        i,
                        o = this.props,
                        a = o.children,
                        c = o.className,
                        u = o.width,
                        l = o.height,
                        s = o.style,
                        f = o.compact,
                        p = o.title,
                        h = o.desc,
                        d = ae(o, ne),
                        y = (0, S.J9)(d, !1);
                      if (f)
                        return r.createElement(
                          ut.DR,
                          {
                            state: this.state,
                            width: this.props.width,
                            height: this.props.height,
                            clipPathId: this.clipPathId
                          },
                          r.createElement(
                            g.u,
                            ie({}, y, {
                              width: u,
                              height: l,
                              title: p,
                              desc: h
                            }),
                            this.renderClipPath(),
                            (0, S.ee)(a, this.renderMap)
                          )
                        );
                      this.props.accessibilityLayer &&
                        ((y.tabIndex =
                          null !== (n = this.props.tabIndex) && void 0 !== n
                            ? n
                            : 0),
                        (y.role =
                          null !== (i = this.props.role) && void 0 !== i
                            ? i
                            : 'application'),
                        (y.onKeyDown = function (t) {
                          e.accessibilityManager.keyboardEvent(t);
                        }),
                        (y.onFocus = function () {
                          e.accessibilityManager.focus();
                        }));
                      var m = this.parseEventsOfWrapper();
                      return r.createElement(
                        ut.DR,
                        {
                          state: this.state,
                          width: this.props.width,
                          height: this.props.height,
                          clipPathId: this.clipPathId
                        },
                        r.createElement(
                          'div',
                          ie(
                            {
                              className: (0, v.A)('recharts-wrapper', c),
                              style: me(
                                {
                                  position: 'relative',
                                  cursor: 'default',
                                  width: u,
                                  height: l
                                },
                                s
                              )
                            },
                            m,
                            {
                              ref: function (t) {
                                e.container = t;
                              },
                              role:
                                null !== (t = y.role) && void 0 !== t
                                  ? t
                                  : 'region'
                            }
                          ),
                          r.createElement(
                            g.u,
                            ie({}, y, {
                              width: u,
                              height: l,
                              title: p,
                              desc: h,
                              style: we
                            }),
                            this.renderClipPath(),
                            (0, S.ee)(a, this.renderMap)
                          ),
                          this.renderLegend(),
                          this.renderTooltip()
                        )
                      );
                    }
                  }
                ]),
                a && ce(i.prototype, a),
                l && ce(i, l),
                Object.defineProperty(i, 'prototype', { writable: !1 }),
                e
              );
            })(r.Component)),
            ge(e, 'displayName', n),
            ge(
              e,
              'defaultProps',
              me(
                {
                  layout: 'horizontal',
                  stackOffset: 'none',
                  barCategoryGap: '10%',
                  barGap: 4,
                  margin: { top: 5, right: 5, bottom: 5, left: 5 },
                  reverseStackOrder: !1,
                  syncMethod: 'index'
                },
                P
              )
            ),
            ge(e, 'getDerivedStateFromProps', function (t, e) {
              var n = t.dataKey,
                r = t.data,
                i = t.children,
                a = t.width,
                c = t.height,
                u = t.layout,
                l = t.stackOffset,
                s = t.margin,
                f = e.dataStartIndex,
                p = e.dataEndIndex;
              if (void 0 === e.updateId) {
                var h = Te(t);
                return me(
                  me(
                    me({}, h),
                    {},
                    { updateId: 0 },
                    T(me(me({ props: t }, h), {}, { updateId: 0 }), e)
                  ),
                  {},
                  {
                    prevDataKey: n,
                    prevData: r,
                    prevWidth: a,
                    prevHeight: c,
                    prevLayout: u,
                    prevStackOffset: l,
                    prevMargin: s,
                    prevChildren: i
                  }
                );
              }
              if (
                n !== e.prevDataKey ||
                r !== e.prevData ||
                a !== e.prevWidth ||
                c !== e.prevHeight ||
                u !== e.prevLayout ||
                l !== e.prevStackOffset ||
                !(0, Et.b)(s, e.prevMargin)
              ) {
                var d = Te(t),
                  y = {
                    chartX: e.chartX,
                    chartY: e.chartY,
                    isTooltipActive: e.isTooltipActive
                  },
                  v = me(me({}, Ee(e, r, u)), {}, { updateId: e.updateId + 1 }),
                  m = me(me(me({}, d), y), v);
                return me(
                  me(me({}, m), T(me({ props: t }, m), e)),
                  {},
                  {
                    prevDataKey: n,
                    prevData: r,
                    prevWidth: a,
                    prevHeight: c,
                    prevLayout: u,
                    prevStackOffset: l,
                    prevMargin: s,
                    prevChildren: i
                  }
                );
              }
              if (!(0, S.OV)(i, e.prevChildren)) {
                var g,
                  b,
                  x,
                  w,
                  O = (0, S.BU)(i, V),
                  A =
                    O &&
                    null !==
                      (g =
                        null === (b = O.props) || void 0 === b
                          ? void 0
                          : b.startIndex) &&
                    void 0 !== g
                      ? g
                      : f,
                  j =
                    O &&
                    null !==
                      (x =
                        null === (w = O.props) || void 0 === w
                          ? void 0
                          : w.endIndex) &&
                    void 0 !== x
                      ? x
                      : p,
                  P = A !== f || j !== p,
                  E = !o()(r) && !P ? e.updateId : e.updateId + 1;
                return me(
                  me(
                    { updateId: E },
                    T(
                      me(
                        me({ props: t }, e),
                        {},
                        { updateId: E, dataStartIndex: A, dataEndIndex: j }
                      ),
                      e
                    )
                  ),
                  {},
                  { prevChildren: i, dataStartIndex: A, dataEndIndex: j }
                );
              }
              return null;
            }),
            ge(e, 'renderActiveDot', function (t, e) {
              var n;
              return (
                (n = (0, r.isValidElement)(t)
                  ? (0, r.cloneElement)(t, e)
                  : c()(t)
                  ? t(e)
                  : r.createElement(O.c, e)),
                r.createElement(
                  b.W,
                  { className: 'recharts-active-dot', key: e.key },
                  n
                )
              );
            }),
            e
          );
        };
    },
    17869: (t, e, n) => {
      'use strict';
      n.d(e, { f: () => r });
      var r = function (t) {
        return null;
      };
      r.displayName = 'Cell';
    },
    92647: (t, e, n) => {
      'use strict';
      n.d(e, { J: () => M });
      var r = n(65043),
        i = n(79686),
        o = n.n(i),
        a = n(11629),
        c = n.n(a),
        u = n(46686),
        l = n.n(u),
        s = n(35007),
        f = n(84140),
        p = n(240),
        h = n(76307),
        d = n(60165);
      function y(t) {
        return (
          (y =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          y(t)
        );
      }
      var v = ['offset'];
      function m(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return g(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' !== typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ('string' === typeof t) return g(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return g(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function g(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function b(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function x(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function w(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? x(Object(n), !0).forEach(function (e) {
                O(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : x(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function O(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != y(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != y(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == y(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function A() {
        return (
          (A = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          A.apply(this, arguments)
        );
      }
      var S = function (t) {
          var e = t.value,
            n = t.formatter,
            r = o()(t.children) ? e : t.children;
          return c()(n) ? n(r) : r;
        },
        j = function (t, e, n) {
          var i,
            a,
            c = t.position,
            u = t.viewBox,
            l = t.offset,
            f = t.className,
            p = u,
            y = p.cx,
            v = p.cy,
            m = p.innerRadius,
            g = p.outerRadius,
            b = p.startAngle,
            x = p.endAngle,
            w = p.clockWise,
            O = (m + g) / 2,
            S = (function (t, e) {
              return (0, h.sA)(e - t) * Math.min(Math.abs(e - t), 360);
            })(b, x),
            j = S >= 0 ? 1 : -1;
          'insideStart' === c
            ? ((i = b + j * l), (a = w))
            : 'insideEnd' === c
            ? ((i = x - j * l), (a = !w))
            : 'end' === c && ((i = x + j * l), (a = w)),
            (a = S <= 0 ? a : !a);
          var P = (0, d.IZ)(y, v, O, i),
            E = (0, d.IZ)(y, v, O, i + 359 * (a ? 1 : -1)),
            k = 'M'
              .concat(P.x, ',')
              .concat(P.y, '\n    A')
              .concat(O, ',')
              .concat(O, ',0,1,')
              .concat(a ? 0 : 1, ',\n    ')
              .concat(E.x, ',')
              .concat(E.y),
            M = o()(t.id) ? (0, h.NF)('recharts-radial-line-') : t.id;
          return r.createElement(
            'text',
            A({}, n, {
              dominantBaseline: 'central',
              className: (0, s.A)('recharts-radial-bar-label', f)
            }),
            r.createElement(
              'defs',
              null,
              r.createElement('path', { id: M, d: k })
            ),
            r.createElement('textPath', { xlinkHref: '#'.concat(M) }, e)
          );
        },
        P = function (t) {
          var e = t.viewBox,
            n = t.offset,
            r = t.position,
            i = e,
            o = i.cx,
            a = i.cy,
            c = i.innerRadius,
            u = i.outerRadius,
            l = (i.startAngle + i.endAngle) / 2;
          if ('outside' === r) {
            var s = (0, d.IZ)(o, a, u + n, l),
              f = s.x;
            return {
              x: f,
              y: s.y,
              textAnchor: f >= o ? 'start' : 'end',
              verticalAnchor: 'middle'
            };
          }
          if ('center' === r)
            return {
              x: o,
              y: a,
              textAnchor: 'middle',
              verticalAnchor: 'middle'
            };
          if ('centerTop' === r)
            return {
              x: o,
              y: a,
              textAnchor: 'middle',
              verticalAnchor: 'start'
            };
          if ('centerBottom' === r)
            return { x: o, y: a, textAnchor: 'middle', verticalAnchor: 'end' };
          var p = (c + u) / 2,
            h = (0, d.IZ)(o, a, p, l);
          return {
            x: h.x,
            y: h.y,
            textAnchor: 'middle',
            verticalAnchor: 'middle'
          };
        },
        E = function (t) {
          var e = t.viewBox,
            n = t.parentViewBox,
            r = t.offset,
            i = t.position,
            o = e,
            a = o.x,
            c = o.y,
            u = o.width,
            s = o.height,
            f = s >= 0 ? 1 : -1,
            p = f * r,
            d = f > 0 ? 'end' : 'start',
            y = f > 0 ? 'start' : 'end',
            v = u >= 0 ? 1 : -1,
            m = v * r,
            g = v > 0 ? 'end' : 'start',
            b = v > 0 ? 'start' : 'end';
          if ('top' === i)
            return w(
              w(
                {},
                {
                  x: a + u / 2,
                  y: c - f * r,
                  textAnchor: 'middle',
                  verticalAnchor: d
                }
              ),
              n ? { height: Math.max(c - n.y, 0), width: u } : {}
            );
          if ('bottom' === i)
            return w(
              w(
                {},
                {
                  x: a + u / 2,
                  y: c + s + p,
                  textAnchor: 'middle',
                  verticalAnchor: y
                }
              ),
              n
                ? { height: Math.max(n.y + n.height - (c + s), 0), width: u }
                : {}
            );
          if ('left' === i) {
            var x = {
              x: a - m,
              y: c + s / 2,
              textAnchor: g,
              verticalAnchor: 'middle'
            };
            return w(
              w({}, x),
              n ? { width: Math.max(x.x - n.x, 0), height: s } : {}
            );
          }
          if ('right' === i) {
            var O = {
              x: a + u + m,
              y: c + s / 2,
              textAnchor: b,
              verticalAnchor: 'middle'
            };
            return w(
              w({}, O),
              n ? { width: Math.max(n.x + n.width - O.x, 0), height: s } : {}
            );
          }
          var A = n ? { width: u, height: s } : {};
          return 'insideLeft' === i
            ? w(
                {
                  x: a + m,
                  y: c + s / 2,
                  textAnchor: b,
                  verticalAnchor: 'middle'
                },
                A
              )
            : 'insideRight' === i
            ? w(
                {
                  x: a + u - m,
                  y: c + s / 2,
                  textAnchor: g,
                  verticalAnchor: 'middle'
                },
                A
              )
            : 'insideTop' === i
            ? w(
                {
                  x: a + u / 2,
                  y: c + p,
                  textAnchor: 'middle',
                  verticalAnchor: y
                },
                A
              )
            : 'insideBottom' === i
            ? w(
                {
                  x: a + u / 2,
                  y: c + s - p,
                  textAnchor: 'middle',
                  verticalAnchor: d
                },
                A
              )
            : 'insideTopLeft' === i
            ? w({ x: a + m, y: c + p, textAnchor: b, verticalAnchor: y }, A)
            : 'insideTopRight' === i
            ? w({ x: a + u - m, y: c + p, textAnchor: g, verticalAnchor: y }, A)
            : 'insideBottomLeft' === i
            ? w({ x: a + m, y: c + s - p, textAnchor: b, verticalAnchor: d }, A)
            : 'insideBottomRight' === i
            ? w(
                {
                  x: a + u - m,
                  y: c + s - p,
                  textAnchor: g,
                  verticalAnchor: d
                },
                A
              )
            : l()(i) &&
              ((0, h.Et)(i.x) || (0, h._3)(i.x)) &&
              ((0, h.Et)(i.y) || (0, h._3)(i.y))
            ? w(
                {
                  x: a + (0, h.F4)(i.x, u),
                  y: c + (0, h.F4)(i.y, s),
                  textAnchor: 'end',
                  verticalAnchor: 'end'
                },
                A
              )
            : w(
                {
                  x: a + u / 2,
                  y: c + s / 2,
                  textAnchor: 'middle',
                  verticalAnchor: 'middle'
                },
                A
              );
        },
        k = function (t) {
          return 'cx' in t && (0, h.Et)(t.cx);
        };
      function M(t) {
        var e,
          n = t.offset,
          i = w({ offset: void 0 === n ? 5 : n }, b(t, v)),
          a = i.viewBox,
          u = i.position,
          l = i.value,
          h = i.children,
          d = i.content,
          y = i.className,
          m = void 0 === y ? '' : y,
          g = i.textBreakAll;
        if (!a || (o()(l) && o()(h) && !(0, r.isValidElement)(d) && !c()(d)))
          return null;
        if ((0, r.isValidElement)(d)) return (0, r.cloneElement)(d, i);
        if (c()(d)) {
          if (((e = (0, r.createElement)(d, i)), (0, r.isValidElement)(e)))
            return e;
        } else e = S(i);
        var x = k(a),
          O = (0, p.J9)(i, !0);
        if (x && ('insideStart' === u || 'insideEnd' === u || 'end' === u))
          return j(i, e, O);
        var M = x ? P(i) : E(i);
        return r.createElement(
          f.E,
          A({ className: (0, s.A)('recharts-label', m) }, O, M, {
            breakAll: g
          }),
          e
        );
      }
      M.displayName = 'Label';
      var T = function (t) {
        var e = t.cx,
          n = t.cy,
          r = t.angle,
          i = t.startAngle,
          o = t.endAngle,
          a = t.r,
          c = t.radius,
          u = t.innerRadius,
          l = t.outerRadius,
          s = t.x,
          f = t.y,
          p = t.top,
          d = t.left,
          y = t.width,
          v = t.height,
          m = t.clockWise,
          g = t.labelViewBox;
        if (g) return g;
        if ((0, h.Et)(y) && (0, h.Et)(v)) {
          if ((0, h.Et)(s) && (0, h.Et)(f))
            return { x: s, y: f, width: y, height: v };
          if ((0, h.Et)(p) && (0, h.Et)(d))
            return { x: p, y: d, width: y, height: v };
        }
        return (0, h.Et)(s) && (0, h.Et)(f)
          ? { x: s, y: f, width: 0, height: 0 }
          : (0, h.Et)(e) && (0, h.Et)(n)
          ? {
              cx: e,
              cy: n,
              startAngle: i || r || 0,
              endAngle: o || r || 0,
              innerRadius: u || 0,
              outerRadius: l || c || a || 0,
              clockWise: m
            }
          : t.viewBox
          ? t.viewBox
          : {};
      };
      (M.parseViewBox = T),
        (M.renderCallByParent = function (t, e) {
          var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!t || (!t.children && n && !t.label)) return null;
          var i = t.children,
            o = T(t),
            a = (0, p.aS)(i, M).map(function (t, n) {
              return (0,
              r.cloneElement)(t, { viewBox: e || o, key: 'label-'.concat(n) });
            });
          if (!n) return a;
          var u = (function (t, e) {
            return t
              ? !0 === t
                ? r.createElement(M, { key: 'label-implicit', viewBox: e })
                : (0, h.vh)(t)
                ? r.createElement(M, {
                    key: 'label-implicit',
                    viewBox: e,
                    value: t
                  })
                : (0, r.isValidElement)(t)
                ? t.type === M
                  ? (0, r.cloneElement)(t, {
                      key: 'label-implicit',
                      viewBox: e
                    })
                  : r.createElement(M, {
                      key: 'label-implicit',
                      content: t,
                      viewBox: e
                    })
                : c()(t)
                ? r.createElement(M, {
                    key: 'label-implicit',
                    content: t,
                    viewBox: e
                  })
                : l()(t)
                ? r.createElement(
                    M,
                    A({ viewBox: e }, t, { key: 'label-implicit' })
                  )
                : null
              : null;
          })(t.label, e || o);
          return [u].concat(m(a));
        });
    },
    81519: (t, e, n) => {
      'use strict';
      n.d(e, { Z: () => E });
      var r = n(65043),
        i = n(79686),
        o = n.n(i),
        a = n(46686),
        c = n.n(a),
        u = n(11629),
        l = n.n(u),
        s = n(74065),
        f = n.n(s),
        p = n(92647),
        h = n(94020),
        d = n(240),
        y = n(20202);
      function v(t) {
        return (
          (v =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          v(t)
        );
      }
      var m = ['valueAccessor'],
        g = ['data', 'dataKey', 'clockWise', 'id', 'textBreakAll'];
      function b(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return x(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' !== typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ('string' === typeof t) return x(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return x(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function x(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function w() {
        return (
          (w = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          w.apply(this, arguments)
        );
      }
      function O(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function A(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? O(Object(n), !0).forEach(function (e) {
                S(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function S(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != v(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != v(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == v(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function j(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      var P = function (t) {
        return Array.isArray(t.value) ? f()(t.value) : t.value;
      };
      function E(t) {
        var e = t.valueAccessor,
          n = void 0 === e ? P : e,
          i = j(t, m),
          a = i.data,
          c = i.dataKey,
          u = i.clockWise,
          l = i.id,
          s = i.textBreakAll,
          f = j(i, g);
        return a && a.length
          ? r.createElement(
              h.W,
              { className: 'recharts-label-list' },
              a.map(function (t, e) {
                var i = o()(c) ? n(t, e) : (0, y.kr)(t && t.payload, c),
                  a = o()(l) ? {} : { id: ''.concat(l, '-').concat(e) };
                return r.createElement(
                  p.J,
                  w({}, (0, d.J9)(t, !0), f, a, {
                    parentViewBox: t.parentViewBox,
                    value: i,
                    textBreakAll: s,
                    viewBox: p.J.parseViewBox(
                      o()(u) ? t : A(A({}, t), {}, { clockWise: u })
                    ),
                    key: 'label-'.concat(e),
                    index: e
                  })
                );
              })
            )
          : null;
      }
      (E.displayName = 'LabelList'),
        (E.renderCallByParent = function (t, e) {
          var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!t || (!t.children && n && !t.label)) return null;
          var i = t.children,
            o = (0, d.aS)(i, E).map(function (t, n) {
              return (0,
              r.cloneElement)(t, { data: e, key: 'labelList-'.concat(n) });
            });
          return n
            ? [
                (function (t, e) {
                  return t
                    ? !0 === t
                      ? r.createElement(E, {
                          key: 'labelList-implicit',
                          data: e
                        })
                      : r.isValidElement(t) || l()(t)
                      ? r.createElement(E, {
                          key: 'labelList-implicit',
                          data: e,
                          content: t
                        })
                      : c()(t)
                      ? r.createElement(
                          E,
                          w({ data: e }, t, { key: 'labelList-implicit' })
                        )
                      : null
                    : null;
                })(t.label, e)
              ].concat(b(o))
            : o;
        });
    },
    21327: (t, e, n) => {
      'use strict';
      n.d(e, { s: () => F });
      var r = n(65043),
        i = n(11629),
        o = n.n(i),
        a = n(35007),
        c = n(155),
        u = n(94794),
        l = n(41985),
        s = n(17287);
      function f(t) {
        return (
          (f =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          f(t)
        );
      }
      function p() {
        return (
          (p = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          p.apply(this, arguments)
        );
      }
      function h(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, x(r.key), r);
        }
      }
      function y(t, e, n) {
        return (
          (e = m(e)),
          (function (t, e) {
            if (e && ('object' === f(e) || 'function' === typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(
            t,
            v()
              ? Reflect.construct(e, n || [], m(t).constructor)
              : e.apply(t, n)
          )
        );
      }
      function v() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (v = function () {
          return !!t;
        })();
      }
      function m(t) {
        return (
          (m = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          m(t)
        );
      }
      function g(t, e) {
        return (
          (g = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          g(t, e)
        );
      }
      function b(t, e, n) {
        return (
          (e = x(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function x(t) {
        var e = (function (t, e) {
          if ('object' != f(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' != f(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' == f(e) ? e : String(e);
      }
      var w = 32,
        O = (function (t) {
          function e() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
              y(this, e, arguments)
            );
          }
          var n, i, f;
          return (
            (function (t, e) {
              if ('function' !== typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 }
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && g(t, e);
            })(e, t),
            (n = e),
            (i = [
              {
                key: 'renderIcon',
                value: function (t) {
                  var e = this.props.inactiveColor,
                    n = 16,
                    i = w / 6,
                    o = w / 3,
                    a = t.inactive ? e : t.color;
                  if ('plainline' === t.type)
                    return r.createElement('line', {
                      strokeWidth: 4,
                      fill: 'none',
                      stroke: a,
                      strokeDasharray: t.payload.strokeDasharray,
                      x1: 0,
                      y1: n,
                      x2: w,
                      y2: n,
                      className: 'recharts-legend-icon'
                    });
                  if ('line' === t.type)
                    return r.createElement('path', {
                      strokeWidth: 4,
                      fill: 'none',
                      stroke: a,
                      d: 'M0,'
                        .concat(n, 'h')
                        .concat(o, '\n            A')
                        .concat(i, ',')
                        .concat(i, ',0,1,1,')
                        .concat(2 * o, ',')
                        .concat(n, '\n            H')
                        .concat(w, 'M')
                        .concat(2 * o, ',')
                        .concat(n, '\n            A')
                        .concat(i, ',')
                        .concat(i, ',0,1,1,')
                        .concat(o, ',')
                        .concat(n),
                      className: 'recharts-legend-icon'
                    });
                  if ('rect' === t.type)
                    return r.createElement('path', {
                      stroke: 'none',
                      fill: a,
                      d: 'M0,'
                        .concat(4, 'h')
                        .concat(w, 'v')
                        .concat(24, 'h')
                        .concat(-32, 'z'),
                      className: 'recharts-legend-icon'
                    });
                  if (r.isValidElement(t.legendIcon)) {
                    var c = (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2
                          ? h(Object(n), !0).forEach(function (e) {
                              b(t, e, n[e]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              t,
                              Object.getOwnPropertyDescriptors(n)
                            )
                          : h(Object(n)).forEach(function (e) {
                              Object.defineProperty(
                                t,
                                e,
                                Object.getOwnPropertyDescriptor(n, e)
                              );
                            });
                      }
                      return t;
                    })({}, t);
                    return delete c.legendIcon, r.cloneElement(t.legendIcon, c);
                  }
                  return r.createElement(l.i, {
                    fill: a,
                    cx: n,
                    cy: n,
                    size: w,
                    sizeType: 'diameter',
                    type: t.type
                  });
                }
              },
              {
                key: 'renderItems',
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.payload,
                    i = e.iconSize,
                    l = e.layout,
                    f = e.formatter,
                    h = e.inactiveColor,
                    d = { x: 0, y: 0, width: w, height: w },
                    y = {
                      display: 'horizontal' === l ? 'inline-block' : 'block',
                      marginRight: 10
                    },
                    v = {
                      display: 'inline-block',
                      verticalAlign: 'middle',
                      marginRight: 4
                    };
                  return n.map(function (e, n) {
                    var l = e.formatter || f,
                      m = (0, a.A)(
                        b(
                          b(
                            { 'recharts-legend-item': !0 },
                            'legend-item-'.concat(n),
                            !0
                          ),
                          'inactive',
                          e.inactive
                        )
                      );
                    if ('none' === e.type) return null;
                    var g = o()(e.value) ? null : e.value;
                    (0,
                    c.R)(!o()(e.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
                    var x = e.inactive ? h : e.color;
                    return r.createElement(
                      'li',
                      p(
                        {
                          className: m,
                          style: y,
                          key: 'legend-item-'.concat(n)
                        },
                        (0, s.XC)(t.props, e, n)
                      ),
                      r.createElement(
                        u.u,
                        { width: i, height: i, viewBox: d, style: v },
                        t.renderIcon(e)
                      ),
                      r.createElement(
                        'span',
                        {
                          className: 'recharts-legend-item-text',
                          style: { color: x }
                        },
                        l ? l(g, e, n) : g
                      )
                    );
                  });
                }
              },
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = t.payload,
                    n = t.layout,
                    i = t.align;
                  if (!e || !e.length) return null;
                  var o = {
                    padding: 0,
                    margin: 0,
                    textAlign: 'horizontal' === n ? i : 'left'
                  };
                  return r.createElement(
                    'ul',
                    { className: 'recharts-default-legend', style: o },
                    this.renderItems()
                  );
                }
              }
            ]),
            i && d(n.prototype, i),
            f && d(n, f),
            Object.defineProperty(n, 'prototype', { writable: !1 }),
            e
          );
        })(r.PureComponent);
      b(O, 'displayName', 'Legend'),
        b(O, 'defaultProps', {
          iconSize: 14,
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'middle',
          inactiveColor: '#ccc'
        });
      var A = n(76307),
        S = n(22598);
      function j(t) {
        return (
          (j =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          j(t)
        );
      }
      var P = ['ref'];
      function E(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? E(Object(n), !0).forEach(function (e) {
                N(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function M(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, B(r.key), r);
        }
      }
      function T(t, e, n) {
        return (
          (e = _(e)),
          (function (t, e) {
            if (e && ('object' === j(e) || 'function' === typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return I(t);
          })(
            t,
            C()
              ? Reflect.construct(e, n || [], _(t).constructor)
              : e.apply(t, n)
          )
        );
      }
      function C() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (C = function () {
          return !!t;
        })();
      }
      function _(t) {
        return (
          (_ = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          _(t)
        );
      }
      function I(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function D(t, e) {
        return (
          (D = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          D(t, e)
        );
      }
      function N(t, e, n) {
        return (
          (e = B(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function B(t) {
        var e = (function (t, e) {
          if ('object' != j(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' != j(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' == j(e) ? e : String(e);
      }
      function R(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function L(t) {
        return t.value;
      }
      var F = (function (t) {
        function e() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, e);
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
          return (
            N(I((t = T(this, e, [].concat(r)))), 'lastBoundingBox', {
              width: -1,
              height: -1
            }),
            t
          );
        }
        var n, i, o;
        return (
          (function (t, e) {
            if ('function' !== typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 }
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && D(t, e);
          })(e, t),
          (n = e),
          (o = [
            {
              key: 'getWithHeight',
              value: function (t, e) {
                var n = t.props.layout;
                return 'vertical' === n && (0, A.Et)(t.props.height)
                  ? { height: t.props.height }
                  : 'horizontal' === n
                  ? { width: t.props.width || e }
                  : null;
              }
            }
          ]),
          (i = [
            {
              key: 'componentDidMount',
              value: function () {
                this.updateBBox();
              }
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                this.updateBBox();
              }
            },
            {
              key: 'getBBox',
              value: function () {
                if (
                  this.wrapperNode &&
                  this.wrapperNode.getBoundingClientRect
                ) {
                  var t = this.wrapperNode.getBoundingClientRect();
                  return (
                    (t.height = this.wrapperNode.offsetHeight),
                    (t.width = this.wrapperNode.offsetWidth),
                    t
                  );
                }
                return null;
              }
            },
            {
              key: 'updateBBox',
              value: function () {
                var t = this.props.onBBoxUpdate,
                  e = this.getBBox();
                e
                  ? (Math.abs(e.width - this.lastBoundingBox.width) > 1 ||
                      Math.abs(e.height - this.lastBoundingBox.height) > 1) &&
                    ((this.lastBoundingBox.width = e.width),
                    (this.lastBoundingBox.height = e.height),
                    t && t(e))
                  : (-1 === this.lastBoundingBox.width &&
                      -1 === this.lastBoundingBox.height) ||
                    ((this.lastBoundingBox.width = -1),
                    (this.lastBoundingBox.height = -1),
                    t && t(null));
              }
            },
            {
              key: 'getBBoxSnapshot',
              value: function () {
                return this.lastBoundingBox.width >= 0 &&
                  this.lastBoundingBox.height >= 0
                  ? k({}, this.lastBoundingBox)
                  : { width: 0, height: 0 };
              }
            },
            {
              key: 'getDefaultPosition',
              value: function (t) {
                var e,
                  n,
                  r = this.props,
                  i = r.layout,
                  o = r.align,
                  a = r.verticalAlign,
                  c = r.margin,
                  u = r.chartWidth,
                  l = r.chartHeight;
                return (
                  (t &&
                    ((void 0 !== t.left && null !== t.left) ||
                      (void 0 !== t.right && null !== t.right))) ||
                    (e =
                      'center' === o && 'vertical' === i
                        ? {
                            left: ((u || 0) - this.getBBoxSnapshot().width) / 2
                          }
                        : 'right' === o
                        ? { right: (c && c.right) || 0 }
                        : { left: (c && c.left) || 0 }),
                  (t &&
                    ((void 0 !== t.top && null !== t.top) ||
                      (void 0 !== t.bottom && null !== t.bottom))) ||
                    (n =
                      'middle' === a
                        ? {
                            top: ((l || 0) - this.getBBoxSnapshot().height) / 2
                          }
                        : 'bottom' === a
                        ? { bottom: (c && c.bottom) || 0 }
                        : { top: (c && c.top) || 0 }),
                  k(k({}, e), n)
                );
              }
            },
            {
              key: 'render',
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.content,
                  i = e.width,
                  o = e.height,
                  a = e.wrapperStyle,
                  c = e.payloadUniqBy,
                  u = e.payload,
                  l = k(
                    k(
                      {
                        position: 'absolute',
                        width: i || 'auto',
                        height: o || 'auto'
                      },
                      this.getDefaultPosition(a)
                    ),
                    a
                  );
                return r.createElement(
                  'div',
                  {
                    className: 'recharts-legend-wrapper',
                    style: l,
                    ref: function (e) {
                      t.wrapperNode = e;
                    }
                  },
                  (function (t, e) {
                    if (r.isValidElement(t)) return r.cloneElement(t, e);
                    if ('function' === typeof t) return r.createElement(t, e);
                    e.ref;
                    var n = R(e, P);
                    return r.createElement(O, n);
                  })(
                    n,
                    k(k({}, this.props), {}, { payload: (0, S.s)(u, c, L) })
                  )
                );
              }
            }
          ]) && M(n.prototype, i),
          o && M(n, o),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          e
        );
      })(r.PureComponent);
      N(F, 'displayName', 'Legend'),
        N(F, 'defaultProps', {
          iconSize: 14,
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        });
    },
    84140: (t, e, n) => {
      'use strict';
      n.d(e, { E: () => F });
      var r = n(65043),
        i = n(79686),
        o = n.n(i),
        a = n(35007),
        c = n(76307),
        u = n(6015),
        l = n(240),
        s = n(17213);
      function f(t) {
        return (
          (f =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          f(t)
        );
      }
      function p(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != n) {
              var r,
                i,
                o,
                a,
                c = [],
                u = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' === typeof t) return h(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return h(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function d(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, y(r.key), r);
        }
      }
      function y(t) {
        var e = (function (t, e) {
          if ('object' != f(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' != f(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' == f(e) ? e : String(e);
      }
      var v = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        m = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        g = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
        b = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
        x = {
          cm: 96 / 2.54,
          mm: 96 / 25.4,
          pt: 96 / 72,
          pc: 16,
          in: 96,
          Q: 96 / 101.6,
          px: 1
        },
        w = Object.keys(x),
        O = 'NaN';
      var A = (function () {
        function t(e, n) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.num = e),
            (this.unit = n),
            (this.num = e),
            (this.unit = n),
            Number.isNaN(e) && (this.unit = ''),
            '' === n || g.test(n) || ((this.num = NaN), (this.unit = '')),
            w.includes(n) &&
              ((this.num = (function (t, e) {
                return t * x[e];
              })(e, n)),
              (this.unit = 'px'));
        }
        var e, n, r;
        return (
          (e = t),
          (r = [
            {
              key: 'parse',
              value: function (e) {
                var n,
                  r = p(null !== (n = b.exec(e)) && void 0 !== n ? n : [], 3),
                  i = r[1],
                  o = r[2];
                return new t(
                  parseFloat(i),
                  null !== o && void 0 !== o ? o : ''
                );
              }
            }
          ]),
          (n = [
            {
              key: 'add',
              value: function (e) {
                return this.unit !== e.unit
                  ? new t(NaN, '')
                  : new t(this.num + e.num, this.unit);
              }
            },
            {
              key: 'subtract',
              value: function (e) {
                return this.unit !== e.unit
                  ? new t(NaN, '')
                  : new t(this.num - e.num, this.unit);
              }
            },
            {
              key: 'multiply',
              value: function (e) {
                return '' !== this.unit && '' !== e.unit && this.unit !== e.unit
                  ? new t(NaN, '')
                  : new t(this.num * e.num, this.unit || e.unit);
              }
            },
            {
              key: 'divide',
              value: function (e) {
                return '' !== this.unit && '' !== e.unit && this.unit !== e.unit
                  ? new t(NaN, '')
                  : new t(this.num / e.num, this.unit || e.unit);
              }
            },
            {
              key: 'toString',
              value: function () {
                return ''.concat(this.num).concat(this.unit);
              }
            },
            {
              key: 'isNaN',
              value: function () {
                return Number.isNaN(this.num);
              }
            }
          ]) && d(e.prototype, n),
          r && d(e, r),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t
        );
      })();
      function S(t) {
        if (t.includes(O)) return O;
        for (var e = t; e.includes('*') || e.includes('/'); ) {
          var n,
            r = p(null !== (n = v.exec(e)) && void 0 !== n ? n : [], 4),
            i = r[1],
            o = r[2],
            a = r[3],
            c = A.parse(null !== i && void 0 !== i ? i : ''),
            u = A.parse(null !== a && void 0 !== a ? a : ''),
            l = '*' === o ? c.multiply(u) : c.divide(u);
          if (l.isNaN()) return O;
          e = e.replace(v, l.toString());
        }
        for (; e.includes('+') || /.-\d+(?:\.\d+)?/.test(e); ) {
          var s,
            f = p(null !== (s = m.exec(e)) && void 0 !== s ? s : [], 4),
            h = f[1],
            d = f[2],
            y = f[3],
            g = A.parse(null !== h && void 0 !== h ? h : ''),
            b = A.parse(null !== y && void 0 !== y ? y : ''),
            x = '+' === d ? g.add(b) : g.subtract(b);
          if (x.isNaN()) return O;
          e = e.replace(m, x.toString());
        }
        return e;
      }
      var j = /\(([^()]*)\)/;
      function P(t) {
        var e = t.replace(/\s+/g, '');
        return (
          (e = (function (t) {
            for (var e = t; e.includes('('); ) {
              var n = p(j.exec(e), 2)[1];
              e = e.replace(j, S(n));
            }
            return e;
          })(e)),
          (e = S(e))
        );
      }
      function E(t) {
        var e = (function (t) {
          try {
            return P(t);
          } catch (e) {
            return O;
          }
        })(t.slice(5, -1));
        return e === O ? '' : e;
      }
      var k = [
          'x',
          'y',
          'lineHeight',
          'capHeight',
          'scaleToFit',
          'textAnchor',
          'verticalAnchor',
          'fill'
        ],
        M = ['dx', 'dy', 'angle', 'className', 'breakAll'];
      function T() {
        return (
          (T = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          T.apply(this, arguments)
        );
      }
      function C(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function _(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != n) {
              var r,
                i,
                o,
                a,
                c = [],
                u = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' === typeof t) return I(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return I(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function I(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var D = /[ \f\n\r\t\v\u2028\u2029]+/,
        N = function (t) {
          var e = t.children,
            n = t.breakAll,
            r = t.style;
          try {
            var i = [];
            return (
              o()(e) ||
                (i = n ? e.toString().split('') : e.toString().split(D)),
              {
                wordsWithComputedWidth: i.map(function (t) {
                  return { word: t, width: (0, s.Pu)(t, r).width };
                }),
                spaceWidth: n ? 0 : (0, s.Pu)('\xa0', r).width
              }
            );
          } catch (a) {
            return null;
          }
        },
        B = function (t) {
          return [{ words: o()(t) ? [] : t.toString().split(D) }];
        },
        R = function (t) {
          var e = t.width,
            n = t.scaleToFit,
            r = t.children,
            i = t.style,
            o = t.breakAll,
            a = t.maxLines;
          if ((e || n) && !u.m.isSsr) {
            var l = N({ breakAll: o, children: r, style: i });
            return l
              ? (function (t, e, n, r, i) {
                  var o = t.maxLines,
                    a = t.children,
                    u = t.style,
                    l = t.breakAll,
                    s = (0, c.Et)(o),
                    f = a,
                    p = function () {
                      return (
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : []
                      ).reduce(function (t, e) {
                        var o = e.word,
                          a = e.width,
                          c = t[t.length - 1];
                        if (
                          c &&
                          (null == r || i || c.width + a + n < Number(r))
                        )
                          c.words.push(o), (c.width += a + n);
                        else {
                          var u = { words: [o], width: a };
                          t.push(u);
                        }
                        return t;
                      }, []);
                    },
                    h = p(e);
                  if (!s) return h;
                  for (
                    var d,
                      y = function (t) {
                        var e = f.slice(0, t),
                          n = N({
                            breakAll: l,
                            style: u,
                            children: e + '\u2026'
                          }).wordsWithComputedWidth,
                          i = p(n),
                          a =
                            i.length > o ||
                            (function (t) {
                              return t.reduce(function (t, e) {
                                return t.width > e.width ? t : e;
                              });
                            })(i).width > Number(r);
                        return [a, i];
                      },
                      v = 0,
                      m = f.length - 1,
                      g = 0;
                    v <= m && g <= f.length - 1;

                  ) {
                    var b = Math.floor((v + m) / 2),
                      x = _(y(b - 1), 2),
                      w = x[0],
                      O = x[1],
                      A = _(y(b), 1)[0];
                    if (
                      (w || A || (v = b + 1), w && A && (m = b - 1), !w && A)
                    ) {
                      d = O;
                      break;
                    }
                    g++;
                  }
                  return d || h;
                })(
                  { breakAll: o, children: r, maxLines: a, style: i },
                  l.wordsWithComputedWidth,
                  l.spaceWidth,
                  e,
                  n
                )
              : B(r);
          }
          return B(r);
        },
        L = '#808080',
        F = function (t) {
          var e = t.x,
            n = void 0 === e ? 0 : e,
            i = t.y,
            o = void 0 === i ? 0 : i,
            u = t.lineHeight,
            s = void 0 === u ? '1em' : u,
            f = t.capHeight,
            p = void 0 === f ? '0.71em' : f,
            h = t.scaleToFit,
            d = void 0 !== h && h,
            y = t.textAnchor,
            v = void 0 === y ? 'start' : y,
            m = t.verticalAnchor,
            g = void 0 === m ? 'end' : m,
            b = t.fill,
            x = void 0 === b ? L : b,
            w = C(t, k),
            O = (0, r.useMemo)(
              function () {
                return R({
                  breakAll: w.breakAll,
                  children: w.children,
                  maxLines: w.maxLines,
                  scaleToFit: d,
                  style: w.style,
                  width: w.width
                });
              },
              [w.breakAll, w.children, w.maxLines, d, w.style, w.width]
            ),
            A = w.dx,
            S = w.dy,
            j = w.angle,
            P = w.className,
            _ = w.breakAll,
            I = C(w, M);
          if (!(0, c.vh)(n) || !(0, c.vh)(o)) return null;
          var D,
            N = n + ((0, c.Et)(A) ? A : 0),
            B = o + ((0, c.Et)(S) ? S : 0);
          switch (g) {
            case 'start':
              D = E('calc('.concat(p, ')'));
              break;
            case 'middle':
              D = E(
                'calc('
                  .concat((O.length - 1) / 2, ' * -')
                  .concat(s, ' + (')
                  .concat(p, ' / 2))')
              );
              break;
            default:
              D = E('calc('.concat(O.length - 1, ' * -').concat(s, ')'));
          }
          var F = [];
          if (d) {
            var z = O[0].width,
              U = w.width;
            F.push('scale('.concat(((0, c.Et)(U) ? U / z : 1) / z, ')'));
          }
          return (
            j &&
              F.push('rotate('.concat(j, ', ').concat(N, ', ').concat(B, ')')),
            F.length && (I.transform = F.join(' ')),
            r.createElement(
              'text',
              T({}, (0, l.J9)(I, !0), {
                x: N,
                y: B,
                className: (0, a.A)('recharts-text', P),
                textAnchor: v,
                fill: x.includes('url') ? L : x
              }),
              O.map(function (t, e) {
                var n = t.words.join(_ ? '' : ' ');
                return r.createElement(
                  'tspan',
                  { x: N, dy: 0 === e ? D : s, key: n },
                  n
                );
              })
            )
          );
        };
    },
    86150: (t, e, n) => {
      'use strict';
      n.d(e, { m: () => J });
      var r = n(65043),
        i = n(87424),
        o = n.n(i),
        a = n(79686),
        c = n.n(a),
        u = n(35007),
        l = n(76307);
      function s(t) {
        return (
          (s =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          s(t)
        );
      }
      function f() {
        return (
          (f = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          f.apply(this, arguments)
        );
      }
      function p(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != n) {
              var r,
                i,
                o,
                a,
                c = [],
                u = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' === typeof t) return h(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return h(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function d(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function y(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? d(Object(n), !0).forEach(function (e) {
                v(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function v(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != s(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != s(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == s(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function m(t) {
        return Array.isArray(t) && (0, l.vh)(t[0]) && (0, l.vh)(t[1])
          ? t.join(' ~ ')
          : t;
      }
      var g = function (t) {
        var e = t.separator,
          n = void 0 === e ? ' : ' : e,
          i = t.contentStyle,
          a = void 0 === i ? {} : i,
          s = t.itemStyle,
          h = void 0 === s ? {} : s,
          d = t.labelStyle,
          v = void 0 === d ? {} : d,
          g = t.payload,
          b = t.formatter,
          x = t.itemSorter,
          w = t.wrapperClassName,
          O = t.labelClassName,
          A = t.label,
          S = t.labelFormatter,
          j = t.accessibilityLayer,
          P = void 0 !== j && j,
          E = y(
            {
              margin: 0,
              padding: 10,
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              whiteSpace: 'nowrap'
            },
            a
          ),
          k = y({ margin: 0 }, v),
          M = !c()(A),
          T = M ? A : '',
          C = (0, u.A)('recharts-default-tooltip', w),
          _ = (0, u.A)('recharts-tooltip-label', O);
        M && S && void 0 !== g && null !== g && (T = S(A, g));
        var I = P ? { role: 'status', 'aria-live': 'assertive' } : {};
        return r.createElement(
          'div',
          f({ className: C, style: E }, I),
          r.createElement(
            'p',
            { className: _, style: k },
            r.isValidElement(T) ? T : ''.concat(T)
          ),
          (function () {
            if (g && g.length) {
              var t = (x ? o()(g, x) : g).map(function (t, e) {
                if ('none' === t.type) return null;
                var i = y(
                    {
                      display: 'block',
                      paddingTop: 4,
                      paddingBottom: 4,
                      color: t.color || '#000'
                    },
                    h
                  ),
                  o = t.formatter || b || m,
                  a = t.value,
                  c = t.name,
                  u = a,
                  s = c;
                if (o && null != u && null != s) {
                  var f = o(a, c, t, e, g);
                  if (Array.isArray(f)) {
                    var d = p(f, 2);
                    (u = d[0]), (s = d[1]);
                  } else u = f;
                }
                return r.createElement(
                  'li',
                  {
                    className: 'recharts-tooltip-item',
                    key: 'tooltip-item-'.concat(e),
                    style: i
                  },
                  (0, l.vh)(s)
                    ? r.createElement(
                        'span',
                        { className: 'recharts-tooltip-item-name' },
                        s
                      )
                    : null,
                  (0, l.vh)(s)
                    ? r.createElement(
                        'span',
                        { className: 'recharts-tooltip-item-separator' },
                        n
                      )
                    : null,
                  r.createElement(
                    'span',
                    { className: 'recharts-tooltip-item-value' },
                    u
                  ),
                  r.createElement(
                    'span',
                    { className: 'recharts-tooltip-item-unit' },
                    t.unit || ''
                  )
                );
              });
              return r.createElement(
                'ul',
                {
                  className: 'recharts-tooltip-item-list',
                  style: { padding: 0, margin: 0 }
                },
                t
              );
            }
            return null;
          })()
        );
      };
      function b(t) {
        return (
          (b =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          b(t)
        );
      }
      function x(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != b(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != b(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == b(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      var w = 'recharts-tooltip-wrapper',
        O = { visibility: 'hidden' };
      function A(t) {
        var e = t.coordinate,
          n = t.translateX,
          r = t.translateY;
        return (0, u.A)(
          w,
          x(
            x(
              x(
                x(
                  {},
                  ''.concat(w, '-right'),
                  (0, l.Et)(n) && e && (0, l.Et)(e.x) && n >= e.x
                ),
                ''.concat(w, '-left'),
                (0, l.Et)(n) && e && (0, l.Et)(e.x) && n < e.x
              ),
              ''.concat(w, '-bottom'),
              (0, l.Et)(r) && e && (0, l.Et)(e.y) && r >= e.y
            ),
            ''.concat(w, '-top'),
            (0, l.Et)(r) && e && (0, l.Et)(e.y) && r < e.y
          )
        );
      }
      function S(t) {
        var e = t.allowEscapeViewBox,
          n = t.coordinate,
          r = t.key,
          i = t.offsetTopLeft,
          o = t.position,
          a = t.reverseDirection,
          c = t.tooltipDimension,
          u = t.viewBox,
          s = t.viewBoxDimension;
        if (o && (0, l.Et)(o[r])) return o[r];
        var f = n[r] - c - i,
          p = n[r] + i;
        return e[r]
          ? a[r]
            ? f
            : p
          : a[r]
          ? f < u[r]
            ? Math.max(p, u[r])
            : Math.max(f, u[r])
          : p + c > u[r] + s
          ? Math.max(f, u[r])
          : Math.max(p, u[r]);
      }
      function j(t) {
        return (
          (j =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          j(t)
        );
      }
      function P(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function E(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? P(Object(n), !0).forEach(function (e) {
                D(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function k(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, N(r.key), r);
        }
      }
      function M(t, e, n) {
        return (
          (e = C(e)),
          (function (t, e) {
            if (e && ('object' === j(e) || 'function' === typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return _(t);
          })(
            t,
            T()
              ? Reflect.construct(e, n || [], C(t).constructor)
              : e.apply(t, n)
          )
        );
      }
      function T() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (T = function () {
          return !!t;
        })();
      }
      function C(t) {
        return (
          (C = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          C(t)
        );
      }
      function _(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function I(t, e) {
        return (
          (I = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          I(t, e)
        );
      }
      function D(t, e, n) {
        return (
          (e = N(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function N(t) {
        var e = (function (t, e) {
          if ('object' != j(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' != j(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' == j(e) ? e : String(e);
      }
      var B = (function (t) {
          function e() {
            var t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, e);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              D(_((t = M(this, e, [].concat(r)))), 'state', {
                dismissed: !1,
                dismissedAtCoordinate: { x: 0, y: 0 }
              }),
              D(_(t), 'lastBoundingBox', { width: -1, height: -1 }),
              D(_(t), 'handleKeyDown', function (e) {
                var n, r, i, o;
                'Escape' === e.key &&
                  t.setState({
                    dismissed: !0,
                    dismissedAtCoordinate: {
                      x:
                        null !==
                          (n =
                            null === (r = t.props.coordinate) || void 0 === r
                              ? void 0
                              : r.x) && void 0 !== n
                          ? n
                          : 0,
                      y:
                        null !==
                          (i =
                            null === (o = t.props.coordinate) || void 0 === o
                              ? void 0
                              : o.y) && void 0 !== i
                          ? i
                          : 0
                    }
                  });
              }),
              t
            );
          }
          var n, i, o;
          return (
            (function (t, e) {
              if ('function' !== typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 }
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && I(t, e);
            })(e, t),
            (n = e),
            (i = [
              {
                key: 'updateBBox',
                value: function () {
                  if (
                    this.wrapperNode &&
                    this.wrapperNode.getBoundingClientRect
                  ) {
                    var t = this.wrapperNode.getBoundingClientRect();
                    (Math.abs(t.width - this.lastBoundingBox.width) > 1 ||
                      Math.abs(t.height - this.lastBoundingBox.height) > 1) &&
                      ((this.lastBoundingBox.width = t.width),
                      (this.lastBoundingBox.height = t.height));
                  } else
                    (-1 === this.lastBoundingBox.width &&
                      -1 === this.lastBoundingBox.height) ||
                      ((this.lastBoundingBox.width = -1),
                      (this.lastBoundingBox.height = -1));
                }
              },
              {
                key: 'componentDidMount',
                value: function () {
                  document.addEventListener('keydown', this.handleKeyDown),
                    this.updateBBox();
                }
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  document.removeEventListener('keydown', this.handleKeyDown);
                }
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  var t, e;
                  this.props.active && this.updateBBox(),
                    this.state.dismissed &&
                      (((null === (t = this.props.coordinate) || void 0 === t
                        ? void 0
                        : t.x) === this.state.dismissedAtCoordinate.x &&
                        (null === (e = this.props.coordinate) || void 0 === e
                          ? void 0
                          : e.y) === this.state.dismissedAtCoordinate.y) ||
                        (this.state.dismissed = !1));
                }
              },
              {
                key: 'render',
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.active,
                    i = e.allowEscapeViewBox,
                    o = e.animationDuration,
                    a = e.animationEasing,
                    c = e.children,
                    u = e.coordinate,
                    l = e.hasPayload,
                    s = e.isAnimationActive,
                    f = e.offset,
                    p = e.position,
                    h = e.reverseDirection,
                    d = e.useTranslate3d,
                    y = e.viewBox,
                    v = e.wrapperStyle,
                    m = (function (t) {
                      var e,
                        n,
                        r = t.allowEscapeViewBox,
                        i = t.coordinate,
                        o = t.offsetTopLeft,
                        a = t.position,
                        c = t.reverseDirection,
                        u = t.tooltipBox,
                        l = t.useTranslate3d,
                        s = t.viewBox;
                      return {
                        cssProperties:
                          u.height > 0 && u.width > 0 && i
                            ? (function (t) {
                                var e = t.translateX,
                                  n = t.translateY;
                                return {
                                  transform: t.useTranslate3d
                                    ? 'translate3d('
                                        .concat(e, 'px, ')
                                        .concat(n, 'px, 0)')
                                    : 'translate('
                                        .concat(e, 'px, ')
                                        .concat(n, 'px)')
                                };
                              })({
                                translateX: (e = S({
                                  allowEscapeViewBox: r,
                                  coordinate: i,
                                  key: 'x',
                                  offsetTopLeft: o,
                                  position: a,
                                  reverseDirection: c,
                                  tooltipDimension: u.width,
                                  viewBox: s,
                                  viewBoxDimension: s.width
                                })),
                                translateY: (n = S({
                                  allowEscapeViewBox: r,
                                  coordinate: i,
                                  key: 'y',
                                  offsetTopLeft: o,
                                  position: a,
                                  reverseDirection: c,
                                  tooltipDimension: u.height,
                                  viewBox: s,
                                  viewBoxDimension: s.height
                                })),
                                useTranslate3d: l
                              })
                            : O,
                        cssClasses: A({
                          translateX: e,
                          translateY: n,
                          coordinate: i
                        })
                      };
                    })({
                      allowEscapeViewBox: i,
                      coordinate: u,
                      offsetTopLeft: f,
                      position: p,
                      reverseDirection: h,
                      tooltipBox: {
                        height: this.lastBoundingBox.height,
                        width: this.lastBoundingBox.width
                      },
                      useTranslate3d: d,
                      viewBox: y
                    }),
                    g = m.cssClasses,
                    b = m.cssProperties,
                    x = E(
                      E(
                        {
                          transition:
                            s && n
                              ? 'transform '.concat(o, 'ms ').concat(a)
                              : void 0
                        },
                        b
                      ),
                      {},
                      {
                        pointerEvents: 'none',
                        visibility:
                          !this.state.dismissed && n && l
                            ? 'visible'
                            : 'hidden',
                        position: 'absolute',
                        top: 0,
                        left: 0
                      },
                      v
                    );
                  return r.createElement(
                    'div',
                    {
                      tabIndex: -1,
                      className: g,
                      style: x,
                      ref: function (e) {
                        t.wrapperNode = e;
                      }
                    },
                    c
                  );
                }
              }
            ]) && k(n.prototype, i),
            o && k(n, o),
            Object.defineProperty(n, 'prototype', { writable: !1 }),
            e
          );
        })(r.PureComponent),
        R = n(6015),
        L = n(22598);
      function F(t) {
        return (
          (F =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          F(t)
        );
      }
      function z(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function U(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? z(Object(n), !0).forEach(function (e) {
                V(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function W(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, G(r.key), r);
        }
      }
      function X(t, e, n) {
        return (
          (e = K(e)),
          (function (t, e) {
            if (e && ('object' === F(e) || 'function' === typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(
            t,
            q()
              ? Reflect.construct(e, n || [], K(t).constructor)
              : e.apply(t, n)
          )
        );
      }
      function q() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (q = function () {
          return !!t;
        })();
      }
      function K(t) {
        return (
          (K = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          K(t)
        );
      }
      function H(t, e) {
        return (
          (H = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          H(t, e)
        );
      }
      function V(t, e, n) {
        return (
          (e = G(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function G(t) {
        var e = (function (t, e) {
          if ('object' != F(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' != F(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' == F(e) ? e : String(e);
      }
      function Y(t) {
        return t.dataKey;
      }
      var J = (function (t) {
        function e() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
            X(this, e, arguments)
          );
        }
        var n, i, o;
        return (
          (function (t, e) {
            if ('function' !== typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 }
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && H(t, e);
          })(e, t),
          (n = e),
          (i = [
            {
              key: 'render',
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.active,
                  i = e.allowEscapeViewBox,
                  o = e.animationDuration,
                  a = e.animationEasing,
                  c = e.content,
                  u = e.coordinate,
                  l = e.filterNull,
                  s = e.isAnimationActive,
                  f = e.offset,
                  p = e.payload,
                  h = e.payloadUniqBy,
                  d = e.position,
                  y = e.reverseDirection,
                  v = e.useTranslate3d,
                  m = e.viewBox,
                  b = e.wrapperStyle,
                  x = null !== p && void 0 !== p ? p : [];
                l &&
                  x.length &&
                  (x = (0, L.s)(
                    p.filter(function (e) {
                      return (
                        null != e.value &&
                        (!0 !== e.hide || t.props.includeHidden)
                      );
                    }),
                    h,
                    Y
                  ));
                var w = x.length > 0;
                return r.createElement(
                  B,
                  {
                    allowEscapeViewBox: i,
                    animationDuration: o,
                    animationEasing: a,
                    isAnimationActive: s,
                    active: n,
                    coordinate: u,
                    hasPayload: w,
                    offset: f,
                    position: d,
                    reverseDirection: y,
                    useTranslate3d: v,
                    viewBox: m,
                    wrapperStyle: b
                  },
                  (function (t, e) {
                    return r.isValidElement(t)
                      ? r.cloneElement(t, e)
                      : 'function' === typeof t
                      ? r.createElement(t, e)
                      : r.createElement(g, e);
                  })(c, U(U({}, this.props), {}, { payload: x }))
                );
              }
            }
          ]) && W(n.prototype, i),
          o && W(n, o),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          e
        );
      })(r.PureComponent);
      V(J, 'displayName', 'Tooltip'),
        V(J, 'defaultProps', {
          accessibilityLayer: !1,
          allowEscapeViewBox: { x: !1, y: !1 },
          animationDuration: 400,
          animationEasing: 'ease',
          contentStyle: {},
          coordinate: { x: 0, y: 0 },
          cursor: !0,
          cursorStyle: {},
          filterNull: !0,
          isAnimationActive: !R.m.isSsr,
          itemStyle: {},
          labelStyle: {},
          offset: 10,
          reverseDirection: { x: !1, y: !1 },
          separator: ' : ',
          trigger: 'hover',
          useTranslate3d: !1,
          viewBox: { x: 0, y: 0, height: 0, width: 0 },
          wrapperStyle: {}
        });
    },
    94020: (t, e, n) => {
      'use strict';
      n.d(e, { W: () => l });
      var r = n(65043),
        i = n(35007),
        o = n(240),
        a = ['children', 'className'];
      function c() {
        return (
          (c = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          c.apply(this, arguments)
        );
      }
      function u(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      var l = r.forwardRef(function (t, e) {
        var n = t.children,
          l = t.className,
          s = u(t, a),
          f = (0, i.A)('recharts-layer', l);
        return r.createElement(
          'g',
          c({ className: f }, (0, o.J9)(s, !0), { ref: e }),
          n
        );
      });
    },
    94794: (t, e, n) => {
      'use strict';
      n.d(e, { u: () => l });
      var r = n(65043),
        i = n(35007),
        o = n(240),
        a = [
          'children',
          'width',
          'height',
          'viewBox',
          'className',
          'style',
          'title',
          'desc'
        ];
      function c() {
        return (
          (c = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          c.apply(this, arguments)
        );
      }
      function u(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function l(t) {
        var e = t.children,
          n = t.width,
          l = t.height,
          s = t.viewBox,
          f = t.className,
          p = t.style,
          h = t.title,
          d = t.desc,
          y = u(t, a),
          v = s || { width: n, height: l, x: 0, y: 0 },
          m = (0, i.A)('recharts-surface', f);
        return r.createElement(
          'svg',
          c({}, (0, o.J9)(y, !0, 'svg'), {
            className: m,
            width: n,
            height: l,
            style: p,
            viewBox: ''
              .concat(v.x, ' ')
              .concat(v.y, ' ')
              .concat(v.width, ' ')
              .concat(v.height)
          }),
          r.createElement('title', null, h),
          r.createElement('desc', null, d),
          e
        );
      }
    },
    52103: (t, e, n) => {
      'use strict';
      n.d(e, {
        DR: () => b,
        pj: () => O,
        rY: () => k,
        yi: () => E,
        Yp: () => x,
        hj: () => P,
        sk: () => j,
        AF: () => w,
        Nk: () => S,
        $G: () => A
      });
      var r = n(65043),
        i = n(3404),
        o = n(76609),
        a = n.n(o),
        c = n(17002),
        u = n.n(c),
        l = n(15797),
        s = n.n(l)()(
          function (t) {
            return { x: t.left, y: t.top, width: t.width, height: t.height };
          },
          function (t) {
            return ['l', t.left, 't', t.top, 'w', t.width, 'h', t.height].join(
              ''
            );
          }
        ),
        f = n(76307);
      var p = (0, r.createContext)(void 0),
        h = (0, r.createContext)(void 0),
        d = (0, r.createContext)(void 0),
        y = (0, r.createContext)({}),
        v = (0, r.createContext)(void 0),
        m = (0, r.createContext)(0),
        g = (0, r.createContext)(0),
        b = function (t) {
          var e = t.state,
            n = e.xAxisMap,
            i = e.yAxisMap,
            o = e.offset,
            a = t.clipPathId,
            c = t.children,
            u = t.width,
            l = t.height,
            f = s(o);
          return r.createElement(
            p.Provider,
            { value: n },
            r.createElement(
              h.Provider,
              { value: i },
              r.createElement(
                y.Provider,
                { value: o },
                r.createElement(
                  d.Provider,
                  { value: f },
                  r.createElement(
                    v.Provider,
                    { value: a },
                    r.createElement(
                      m.Provider,
                      { value: l },
                      r.createElement(g.Provider, { value: u }, c)
                    )
                  )
                )
              )
            )
          );
        },
        x = function () {
          return (0, r.useContext)(v);
        };
      var w = function (t) {
          var e = (0, r.useContext)(p);
          null == e && (0, i.A)(!1);
          var n = e[t];
          return null == n && (0, i.A)(!1), n;
        },
        O = function () {
          var t = (0, r.useContext)(p);
          return (0, f.lX)(t);
        },
        A = function () {
          var t = (0, r.useContext)(h);
          return (
            a()(t, function (t) {
              return u()(t.domain, Number.isFinite);
            }) || (0, f.lX)(t)
          );
        },
        S = function (t) {
          var e = (0, r.useContext)(h);
          null == e && (0, i.A)(!1);
          var n = e[t];
          return null == n && (0, i.A)(!1), n;
        },
        j = function () {
          return (0, r.useContext)(d);
        },
        P = function () {
          return (0, r.useContext)(y);
        },
        E = function () {
          return (0, r.useContext)(g);
        },
        k = function () {
          return (0, r.useContext)(m);
        };
    },
    4240: (t, e, n) => {
      'use strict';
      n.d(e, { F: () => U });
      var r,
        i = n(65043),
        o = n(21578),
        a = n(33097),
        c = n.n(a),
        u = n(19853),
        l = n.n(u),
        s = n(79686),
        f = n.n(s),
        p = n(11629),
        h = n.n(p),
        d = n(35007),
        y = n(94020),
        v = n(68471),
        m = n(84140),
        g = n(92647),
        b = n(81519),
        x = n(17869),
        w = n(240),
        O = n(6015),
        A = n(60165),
        S = n(76307),
        j = n(20202),
        P = n(155),
        E = n(17287),
        k = n(70879);
      function M(t) {
        return (
          (M =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          M(t)
        );
      }
      function T() {
        return (
          (T = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          T.apply(this, arguments)
        );
      }
      function C(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? C(Object(n), !0).forEach(function (e) {
                F(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function I(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, z(r.key), r);
        }
      }
      function D(t, e, n) {
        return (
          (e = B(e)),
          (function (t, e) {
            if (e && ('object' === M(e) || 'function' === typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return R(t);
          })(
            t,
            N()
              ? Reflect.construct(e, n || [], B(t).constructor)
              : e.apply(t, n)
          )
        );
      }
      function N() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (N = function () {
          return !!t;
        })();
      }
      function B(t) {
        return (
          (B = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          B(t)
        );
      }
      function R(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function L(t, e) {
        return (
          (L = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          L(t, e)
        );
      }
      function F(t, e, n) {
        return (
          (e = z(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function z(t) {
        var e = (function (t, e) {
          if ('object' != M(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' != M(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' == M(e) ? e : String(e);
      }
      var U = (function (t) {
        function e(t) {
          var n;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
            F(R((n = D(this, e, [t]))), 'pieRef', null),
            F(R(n), 'sectorRefs', []),
            F(R(n), 'id', (0, S.NF)('recharts-pie-')),
            F(R(n), 'handleAnimationEnd', function () {
              var t = n.props.onAnimationEnd;
              n.setState({ isAnimationFinished: !0 }), h()(t) && t();
            }),
            F(R(n), 'handleAnimationStart', function () {
              var t = n.props.onAnimationStart;
              n.setState({ isAnimationFinished: !1 }), h()(t) && t();
            }),
            (n.state = {
              isAnimationFinished: !t.isAnimationActive,
              prevIsAnimationActive: t.isAnimationActive,
              prevAnimationId: t.animationId,
              sectorToFocus: 0
            }),
            n
          );
        }
        var n, r, a;
        return (
          (function (t, e) {
            if ('function' !== typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 }
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && L(t, e);
          })(e, t),
          (n = e),
          (a = [
            {
              key: 'getDerivedStateFromProps',
              value: function (t, e) {
                return e.prevIsAnimationActive !== t.isAnimationActive
                  ? {
                      prevIsAnimationActive: t.isAnimationActive,
                      prevAnimationId: t.animationId,
                      curSectors: t.sectors,
                      prevSectors: [],
                      isAnimationFinished: !0
                    }
                  : t.isAnimationActive && t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curSectors: t.sectors,
                      prevSectors: e.curSectors,
                      isAnimationFinished: !0
                    }
                  : t.sectors !== e.curSectors
                  ? { curSectors: t.sectors, isAnimationFinished: !0 }
                  : null;
              }
            },
            {
              key: 'getTextAnchor',
              value: function (t, e) {
                return t > e ? 'start' : t < e ? 'end' : 'middle';
              }
            },
            {
              key: 'renderLabelLineItem',
              value: function (t, e) {
                return i.isValidElement(t)
                  ? i.cloneElement(t, e)
                  : h()(t)
                  ? t(e)
                  : i.createElement(
                      v.I,
                      T({}, e, {
                        type: 'linear',
                        className: 'recharts-pie-label-line'
                      })
                    );
              }
            },
            {
              key: 'renderLabelItem',
              value: function (t, e, n) {
                if (i.isValidElement(t)) return i.cloneElement(t, e);
                var r = n;
                return h()(t) && ((r = t(e)), i.isValidElement(r))
                  ? r
                  : i.createElement(
                      m.E,
                      T({}, e, {
                        alignmentBaseline: 'middle',
                        className: 'recharts-pie-label-text'
                      }),
                      r
                    );
              }
            }
          ]),
          (r = [
            {
              key: 'isActiveIndex',
              value: function (t) {
                var e = this.props.activeIndex;
                return Array.isArray(e) ? -1 !== e.indexOf(t) : t === e;
              }
            },
            {
              key: 'hasActiveIndex',
              value: function () {
                var t = this.props.activeIndex;
                return Array.isArray(t) ? 0 !== t.length : t || 0 === t;
              }
            },
            {
              key: 'renderLabels',
              value: function (t) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var n = this.props,
                  r = n.label,
                  o = n.labelLine,
                  a = n.dataKey,
                  c = n.valueKey,
                  u = (0, w.J9)(this.props, !1),
                  l = (0, w.J9)(r, !1),
                  s = (0, w.J9)(o, !1),
                  p = (r && r.offsetRadius) || 20,
                  h = t.map(function (t, n) {
                    var h = (t.startAngle + t.endAngle) / 2,
                      d = (0, A.IZ)(t.cx, t.cy, t.outerRadius + p, h),
                      v = _(
                        _(_(_({}, u), t), {}, { stroke: 'none' }, l),
                        {},
                        { index: n, textAnchor: e.getTextAnchor(d.x, t.cx) },
                        d
                      ),
                      m = _(
                        _(
                          _(_({}, u), t),
                          {},
                          { fill: 'none', stroke: t.fill },
                          s
                        ),
                        {},
                        {
                          index: n,
                          points: [(0, A.IZ)(t.cx, t.cy, t.outerRadius, h), d],
                          key: 'line'
                        }
                      ),
                      g = a;
                    return (
                      f()(a) && f()(c) ? (g = 'value') : f()(a) && (g = c),
                      i.createElement(
                        y.W,
                        {
                          key: 'label-'
                            .concat(t.startAngle, '-')
                            .concat(t.endAngle, '-')
                            .concat(t.midAngle, '-')
                            .concat(n)
                        },
                        o && e.renderLabelLineItem(o, m),
                        e.renderLabelItem(r, v, (0, j.kr)(t, g))
                      )
                    );
                  });
                return i.createElement(
                  y.W,
                  { className: 'recharts-pie-labels' },
                  h
                );
              }
            },
            {
              key: 'renderSectorsStatically',
              value: function (t) {
                var e = this,
                  n = this.props,
                  r = n.activeShape,
                  o = n.blendStroke,
                  a = n.inactiveShape;
                return t.map(function (n, c) {
                  if (
                    0 ===
                      (null === n || void 0 === n ? void 0 : n.startAngle) &&
                    0 === (null === n || void 0 === n ? void 0 : n.endAngle) &&
                    1 !== t.length
                  )
                    return null;
                  var u = e.isActiveIndex(c),
                    l = a && e.hasActiveIndex() ? a : null,
                    s = u ? r : l,
                    f = _(
                      _({}, n),
                      {},
                      { stroke: o ? n.fill : n.stroke, tabIndex: -1 }
                    );
                  return i.createElement(
                    y.W,
                    T(
                      {
                        ref: function (t) {
                          t &&
                            !e.sectorRefs.includes(t) &&
                            e.sectorRefs.push(t);
                        },
                        tabIndex: -1,
                        className: 'recharts-pie-sector'
                      },
                      (0, E.XC)(e.props, n, c),
                      {
                        key: 'sector-'
                          .concat(
                            null === n || void 0 === n ? void 0 : n.startAngle,
                            '-'
                          )
                          .concat(
                            null === n || void 0 === n ? void 0 : n.endAngle,
                            '-'
                          )
                          .concat(n.midAngle, '-')
                          .concat(c)
                      }
                    ),
                    i.createElement(
                      k.yp,
                      T({ option: s, isActive: u, shapeType: 'sector' }, f)
                    )
                  );
                });
              }
            },
            {
              key: 'renderSectorsWithAnimation',
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.sectors,
                  r = e.isAnimationActive,
                  a = e.animationBegin,
                  u = e.animationDuration,
                  l = e.animationEasing,
                  s = e.animationId,
                  f = this.state,
                  p = f.prevSectors,
                  h = f.prevIsAnimationActive;
                return i.createElement(
                  o.Ay,
                  {
                    begin: a,
                    duration: u,
                    isActive: r,
                    easing: l,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: 'pie-'.concat(s, '-').concat(h),
                    onAnimationStart: this.handleAnimationStart,
                    onAnimationEnd: this.handleAnimationEnd
                  },
                  function (e) {
                    var r = e.t,
                      o = [],
                      a = (n && n[0]).startAngle;
                    return (
                      n.forEach(function (t, e) {
                        var n = p && p[e],
                          i = e > 0 ? c()(t, 'paddingAngle', 0) : 0;
                        if (n) {
                          var u = (0, S.Dj)(
                              n.endAngle - n.startAngle,
                              t.endAngle - t.startAngle
                            ),
                            l = _(
                              _({}, t),
                              {},
                              { startAngle: a + i, endAngle: a + u(r) + i }
                            );
                          o.push(l), (a = l.endAngle);
                        } else {
                          var s = t.endAngle,
                            f = t.startAngle,
                            h = (0, S.Dj)(0, s - f)(r),
                            d = _(
                              _({}, t),
                              {},
                              { startAngle: a + i, endAngle: a + h + i }
                            );
                          o.push(d), (a = d.endAngle);
                        }
                      }),
                      i.createElement(y.W, null, t.renderSectorsStatically(o))
                    );
                  }
                );
              }
            },
            {
              key: 'attachKeyboardHandlers',
              value: function (t) {
                var e = this;
                t.onkeydown = function (t) {
                  if (!t.altKey)
                    switch (t.key) {
                      case 'ArrowLeft':
                        var n = ++e.state.sectorToFocus % e.sectorRefs.length;
                        e.sectorRefs[n].focus(),
                          e.setState({ sectorToFocus: n });
                        break;
                      case 'ArrowRight':
                        var r =
                          --e.state.sectorToFocus < 0
                            ? e.sectorRefs.length - 1
                            : e.state.sectorToFocus % e.sectorRefs.length;
                        e.sectorRefs[r].focus(),
                          e.setState({ sectorToFocus: r });
                        break;
                      case 'Escape':
                        e.sectorRefs[e.state.sectorToFocus].blur(),
                          e.setState({ sectorToFocus: 0 });
                    }
                };
              }
            },
            {
              key: 'renderSectors',
              value: function () {
                var t = this.props,
                  e = t.sectors,
                  n = t.isAnimationActive,
                  r = this.state.prevSectors;
                return !(n && e && e.length) || (r && l()(r, e))
                  ? this.renderSectorsStatically(e)
                  : this.renderSectorsWithAnimation();
              }
            },
            {
              key: 'componentDidMount',
              value: function () {
                this.pieRef && this.attachKeyboardHandlers(this.pieRef);
              }
            },
            {
              key: 'render',
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.hide,
                  r = e.sectors,
                  o = e.className,
                  a = e.label,
                  c = e.cx,
                  u = e.cy,
                  l = e.innerRadius,
                  s = e.outerRadius,
                  f = e.isAnimationActive,
                  p = this.state.isAnimationFinished;
                if (
                  n ||
                  !r ||
                  !r.length ||
                  !(0, S.Et)(c) ||
                  !(0, S.Et)(u) ||
                  !(0, S.Et)(l) ||
                  !(0, S.Et)(s)
                )
                  return null;
                var h = (0, d.A)('recharts-pie', o);
                return i.createElement(
                  y.W,
                  {
                    tabIndex: this.props.rootTabIndex,
                    className: h,
                    ref: function (e) {
                      t.pieRef = e;
                    }
                  },
                  this.renderSectors(),
                  a && this.renderLabels(r),
                  g.J.renderCallByParent(this.props, null, !1),
                  (!f || p) && b.Z.renderCallByParent(this.props, r, !1)
                );
              }
            }
          ]) && I(n.prototype, r),
          a && I(n, a),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          e
        );
      })(i.PureComponent);
      (r = U),
        F(U, 'displayName', 'Pie'),
        F(U, 'defaultProps', {
          stroke: '#fff',
          fill: '#808080',
          legendType: 'rect',
          cx: '50%',
          cy: '50%',
          startAngle: 0,
          endAngle: 360,
          innerRadius: 0,
          outerRadius: '80%',
          paddingAngle: 0,
          labelLine: !0,
          hide: !1,
          minAngle: 0,
          isAnimationActive: !O.m.isSsr,
          animationBegin: 400,
          animationDuration: 1500,
          animationEasing: 'ease',
          nameKey: 'name',
          blendStroke: !1,
          rootTabIndex: 0
        }),
        F(U, 'parseDeltaAngle', function (t, e) {
          return (0, S.sA)(e - t) * Math.min(Math.abs(e - t), 360);
        }),
        F(U, 'getRealPieData', function (t) {
          var e = t.props,
            n = e.data,
            r = e.children,
            i = (0, w.J9)(t.props, !1),
            o = (0, w.aS)(r, x.f);
          return n && n.length
            ? n.map(function (t, e) {
                return _(_(_({ payload: t }, i), t), o && o[e] && o[e].props);
              })
            : o && o.length
            ? o.map(function (t) {
                return _(_({}, i), t.props);
              })
            : [];
        }),
        F(U, 'parseCoordinateOfPie', function (t, e) {
          var n = e.top,
            r = e.left,
            i = e.width,
            o = e.height,
            a = (0, A.lY)(i, o);
          return {
            cx: r + (0, S.F4)(t.props.cx, i, i / 2),
            cy: n + (0, S.F4)(t.props.cy, o, o / 2),
            innerRadius: (0, S.F4)(t.props.innerRadius, a, 0),
            outerRadius: (0, S.F4)(t.props.outerRadius, a, 0.8 * a),
            maxRadius: t.props.maxRadius || Math.sqrt(i * i + o * o) / 2
          };
        }),
        F(U, 'getComposedData', function (t) {
          var e = t.item,
            n = t.offset,
            i = r.getRealPieData(e);
          if (!i || !i.length) return null;
          var o = e.props,
            a = o.cornerRadius,
            c = o.startAngle,
            u = o.endAngle,
            l = o.paddingAngle,
            s = o.dataKey,
            p = o.nameKey,
            h = o.valueKey,
            d = o.tooltipType,
            y = Math.abs(e.props.minAngle),
            v = r.parseCoordinateOfPie(e, n),
            m = r.parseDeltaAngle(c, u),
            g = Math.abs(m),
            b = s;
          f()(s) && f()(h)
            ? ((0, P.R)(
                !1,
                'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0'
              ),
              (b = 'value'))
            : f()(s) &&
              ((0, P.R)(
                !1,
                'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0'
              ),
              (b = h));
          var x,
            w,
            O = i.filter(function (t) {
              return 0 !== (0, j.kr)(t, b, 0);
            }).length,
            E = g - O * y - (g >= 360 ? O : O - 1) * l,
            k = i.reduce(function (t, e) {
              var n = (0, j.kr)(e, b, 0);
              return t + ((0, S.Et)(n) ? n : 0);
            }, 0);
          k > 0 &&
            (x = i.map(function (t, e) {
              var n,
                r = (0, j.kr)(t, b, 0),
                i = (0, j.kr)(t, p, e),
                o = ((0, S.Et)(r) ? r : 0) / k,
                u =
                  (n = e
                    ? w.endAngle + (0, S.sA)(m) * l * (0 !== r ? 1 : 0)
                    : c) +
                  (0, S.sA)(m) * ((0 !== r ? y : 0) + o * E),
                s = (n + u) / 2,
                f = (v.innerRadius + v.outerRadius) / 2,
                h = [{ name: i, value: r, payload: t, dataKey: b, type: d }],
                g = (0, A.IZ)(v.cx, v.cy, f, s);
              return (w = _(
                _(
                  _(
                    {
                      percent: o,
                      cornerRadius: a,
                      name: i,
                      tooltipPayload: h,
                      midAngle: s,
                      middleRadius: f,
                      tooltipPosition: g
                    },
                    t
                  ),
                  v
                ),
                {},
                {
                  value: (0, j.kr)(t, b),
                  startAngle: n,
                  endAngle: u,
                  payload: t,
                  paddingAngle: (0, S.sA)(m) * l
                }
              ));
            }));
          return _(_({}, v), {}, { sectors: x, data: i });
        });
    },
    68471: (t, e, n) => {
      'use strict';
      n.d(e, { I: () => G });
      var r = n(65043);
      function i() {}
      function o(t, e, n) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + e) / 6,
          (t._y0 + 4 * t._y1 + n) / 6
        );
      }
      function a(t) {
        this._context = t;
      }
      function c(t) {
        this._context = t;
      }
      function u(t) {
        this._context = t;
      }
      (a.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              o(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, e) {
          switch (((t = +t), (e = +e), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6
                );
            default:
              o(this, t, e);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e);
        }
      }),
        (c.prototype = {
          areaStart: i,
          areaEnd: i,
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._x3 =
              this._x4 =
              this._y0 =
              this._y1 =
              this._y2 =
              this._y3 =
              this._y4 =
                NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x2, this._y2),
                  this._context.closePath();
                break;
              case 2:
                this._context.moveTo(
                  (this._x2 + 2 * this._x3) / 3,
                  (this._y2 + 2 * this._y3) / 3
                ),
                  this._context.lineTo(
                    (this._x3 + 2 * this._x2) / 3,
                    (this._y3 + 2 * this._y2) / 3
                  ),
                  this._context.closePath();
                break;
              case 3:
                this.point(this._x2, this._y2),
                  this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4);
            }
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1), (this._x2 = t), (this._y2 = e);
                break;
              case 1:
                (this._point = 2), (this._x3 = t), (this._y3 = e);
                break;
              case 2:
                (this._point = 3),
                  (this._x4 = t),
                  (this._y4 = e),
                  this._context.moveTo(
                    (this._x0 + 4 * this._x1 + t) / 6,
                    (this._y0 + 4 * this._y1 + e) / 6
                  );
                break;
              default:
                o(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          }
        }),
        (u.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 3 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                var n = (this._x0 + 4 * this._x1 + t) / 6,
                  r = (this._y0 + 4 * this._y1 + e) / 6;
                this._line
                  ? this._context.lineTo(n, r)
                  : this._context.moveTo(n, r);
                break;
              case 3:
                this._point = 4;
              default:
                o(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          }
        });
      class l {
        constructor(t, e) {
          (this._context = t), (this._x = e);
        }
        areaStart() {
          this._line = 0;
        }
        areaEnd() {
          this._line = NaN;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        }
        point(t, e) {
          switch (((t = +t), (e = +e), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
            default:
              this._x
                ? this._context.bezierCurveTo(
                    (this._x0 = (this._x0 + t) / 2),
                    this._y0,
                    this._x0,
                    e,
                    t,
                    e
                  )
                : this._context.bezierCurveTo(
                    this._x0,
                    (this._y0 = (this._y0 + e) / 2),
                    t,
                    this._y0,
                    t,
                    e
                  );
          }
          (this._x0 = t), (this._y0 = e);
        }
      }
      function s(t) {
        this._context = t;
      }
      function f(t) {
        this._context = t;
      }
      function p(t) {
        return new f(t);
      }
      function h(t) {
        return t < 0 ? -1 : 1;
      }
      function d(t, e, n) {
        var r = t._x1 - t._x0,
          i = e - t._x1,
          o = (t._y1 - t._y0) / (r || (i < 0 && -0)),
          a = (n - t._y1) / (i || (r < 0 && -0)),
          c = (o * i + a * r) / (r + i);
        return (
          (h(o) + h(a)) *
            Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(c)) || 0
        );
      }
      function y(t, e) {
        var n = t._x1 - t._x0;
        return n ? ((3 * (t._y1 - t._y0)) / n - e) / 2 : e;
      }
      function v(t, e, n) {
        var r = t._x0,
          i = t._y0,
          o = t._x1,
          a = t._y1,
          c = (o - r) / 3;
        t._context.bezierCurveTo(r + c, i + c * e, o - c, a - c * n, o, a);
      }
      function m(t) {
        this._context = t;
      }
      function g(t) {
        this._context = new b(t);
      }
      function b(t) {
        this._context = t;
      }
      function x(t) {
        this._context = t;
      }
      function w(t) {
        var e,
          n,
          r = t.length - 1,
          i = new Array(r),
          o = new Array(r),
          a = new Array(r);
        for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < r - 1; ++e)
          (i[e] = 1), (o[e] = 4), (a[e] = 4 * t[e] + 2 * t[e + 1]);
        for (
          i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], e = 1;
          e < r;
          ++e
        )
          (n = i[e] / o[e - 1]), (o[e] -= n), (a[e] -= n * a[e - 1]);
        for (i[r - 1] = a[r - 1] / o[r - 1], e = r - 2; e >= 0; --e)
          i[e] = (a[e] - i[e + 1]) / o[e];
        for (o[r - 1] = (t[r] + i[r - 1]) / 2, e = 0; e < r - 1; ++e)
          o[e] = 2 * t[e + 1] - i[e + 1];
        return [i, o];
      }
      function O(t, e) {
        (this._context = t), (this._t = e);
      }
      (s.prototype = {
        areaStart: i,
        areaEnd: i,
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          this._point && this._context.closePath();
        },
        point: function (t, e) {
          (t = +t),
            (e = +e),
            this._point
              ? this._context.lineTo(t, e)
              : ((this._point = 1), this._context.moveTo(t, e));
        }
      }),
        (f.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, e)
                    : this._context.moveTo(t, e);
                break;
              case 1:
                this._point = 2;
              default:
                this._context.lineTo(t, e);
            }
          }
        }),
        (m.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
              case 3:
                v(this, this._t0, y(this, this._t0));
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            var n = NaN;
            if (((e = +e), (t = +t) !== this._x1 || e !== this._y1)) {
              switch (this._point) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, e)
                      : this._context.moveTo(t, e);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3), v(this, y(this, (n = d(this, t, e))), n);
                  break;
                default:
                  v(this, this._t0, (n = d(this, t, e)));
              }
              (this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = e),
                (this._t0 = n);
            }
          }
        }),
        ((g.prototype = Object.create(m.prototype)).point = function (t, e) {
          m.prototype.point.call(this, e, t);
        }),
        (b.prototype = {
          moveTo: function (t, e) {
            this._context.moveTo(e, t);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (t, e) {
            this._context.lineTo(e, t);
          },
          bezierCurveTo: function (t, e, n, r, i, o) {
            this._context.bezierCurveTo(e, t, r, n, o, i);
          }
        }),
        (x.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = []), (this._y = []);
          },
          lineEnd: function () {
            var t = this._x,
              e = this._y,
              n = t.length;
            if (n)
              if (
                (this._line
                  ? this._context.lineTo(t[0], e[0])
                  : this._context.moveTo(t[0], e[0]),
                2 === n)
              )
                this._context.lineTo(t[1], e[1]);
              else
                for (var r = w(t), i = w(e), o = 0, a = 1; a < n; ++o, ++a)
                  this._context.bezierCurveTo(
                    r[0][o],
                    i[0][o],
                    r[1][o],
                    i[1][o],
                    t[a],
                    e[a]
                  );
            (this._line || (0 !== this._line && 1 === n)) &&
              this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null);
          },
          point: function (t, e) {
            this._x.push(+t), this._y.push(+e);
          }
        }),
        (O.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = this._y = NaN), (this._point = 0);
          },
          lineEnd: function () {
            0 < this._t &&
              this._t < 1 &&
              2 === this._point &&
              this._context.lineTo(this._x, this._y),
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
              this._line >= 0 &&
                ((this._t = 1 - this._t), (this._line = 1 - this._line));
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, e)
                    : this._context.moveTo(t, e);
                break;
              case 1:
                this._point = 2;
              default:
                if (this._t <= 0)
                  this._context.lineTo(this._x, e), this._context.lineTo(t, e);
                else {
                  var n = this._x * (1 - this._t) + t * this._t;
                  this._context.lineTo(n, this._y), this._context.lineTo(n, e);
                }
            }
            (this._x = t), (this._y = e);
          }
        });
      var A = n(99236),
        S = n(13809),
        j = n(17371);
      function P(t) {
        return t[0];
      }
      function E(t) {
        return t[1];
      }
      function k(t, e) {
        var n = (0, S.A)(!0),
          r = null,
          i = p,
          o = null,
          a = (0, j.i)(c);
        function c(c) {
          var u,
            l,
            s,
            f = (c = (0, A.A)(c)).length,
            p = !1;
          for (null == r && (o = i((s = a()))), u = 0; u <= f; ++u)
            !(u < f && n((l = c[u]), u, c)) === p &&
              ((p = !p) ? o.lineStart() : o.lineEnd()),
              p && o.point(+t(l, u, c), +e(l, u, c));
          if (s) return (o = null), s + '' || null;
        }
        return (
          (t = 'function' === typeof t ? t : void 0 === t ? P : (0, S.A)(t)),
          (e = 'function' === typeof e ? e : void 0 === e ? E : (0, S.A)(e)),
          (c.x = function (e) {
            return arguments.length
              ? ((t = 'function' === typeof e ? e : (0, S.A)(+e)), c)
              : t;
          }),
          (c.y = function (t) {
            return arguments.length
              ? ((e = 'function' === typeof t ? t : (0, S.A)(+t)), c)
              : e;
          }),
          (c.defined = function (t) {
            return arguments.length
              ? ((n = 'function' === typeof t ? t : (0, S.A)(!!t)), c)
              : n;
          }),
          (c.curve = function (t) {
            return arguments.length ? ((i = t), null != r && (o = i(r)), c) : i;
          }),
          (c.context = function (t) {
            return arguments.length
              ? (null == t ? (r = o = null) : (o = i((r = t))), c)
              : r;
          }),
          c
        );
      }
      function M(t, e, n) {
        var r = null,
          i = (0, S.A)(!0),
          o = null,
          a = p,
          c = null,
          u = (0, j.i)(l);
        function l(l) {
          var s,
            f,
            p,
            h,
            d,
            y = (l = (0, A.A)(l)).length,
            v = !1,
            m = new Array(y),
            g = new Array(y);
          for (null == o && (c = a((d = u()))), s = 0; s <= y; ++s) {
            if (!(s < y && i((h = l[s]), s, l)) === v)
              if ((v = !v)) (f = s), c.areaStart(), c.lineStart();
              else {
                for (c.lineEnd(), c.lineStart(), p = s - 1; p >= f; --p)
                  c.point(m[p], g[p]);
                c.lineEnd(), c.areaEnd();
              }
            v &&
              ((m[s] = +t(h, s, l)),
              (g[s] = +e(h, s, l)),
              c.point(r ? +r(h, s, l) : m[s], n ? +n(h, s, l) : g[s]));
          }
          if (d) return (c = null), d + '' || null;
        }
        function s() {
          return k().defined(i).curve(a).context(o);
        }
        return (
          (t = 'function' === typeof t ? t : void 0 === t ? P : (0, S.A)(+t)),
          (e =
            'function' === typeof e
              ? e
              : void 0 === e
              ? (0, S.A)(0)
              : (0, S.A)(+e)),
          (n = 'function' === typeof n ? n : void 0 === n ? E : (0, S.A)(+n)),
          (l.x = function (e) {
            return arguments.length
              ? ((t = 'function' === typeof e ? e : (0, S.A)(+e)),
                (r = null),
                l)
              : t;
          }),
          (l.x0 = function (e) {
            return arguments.length
              ? ((t = 'function' === typeof e ? e : (0, S.A)(+e)), l)
              : t;
          }),
          (l.x1 = function (t) {
            return arguments.length
              ? ((r =
                  null == t
                    ? null
                    : 'function' === typeof t
                    ? t
                    : (0, S.A)(+t)),
                l)
              : r;
          }),
          (l.y = function (t) {
            return arguments.length
              ? ((e = 'function' === typeof t ? t : (0, S.A)(+t)),
                (n = null),
                l)
              : e;
          }),
          (l.y0 = function (t) {
            return arguments.length
              ? ((e = 'function' === typeof t ? t : (0, S.A)(+t)), l)
              : e;
          }),
          (l.y1 = function (t) {
            return arguments.length
              ? ((n =
                  null == t
                    ? null
                    : 'function' === typeof t
                    ? t
                    : (0, S.A)(+t)),
                l)
              : n;
          }),
          (l.lineX0 = l.lineY0 =
            function () {
              return s().x(t).y(e);
            }),
          (l.lineY1 = function () {
            return s().x(t).y(n);
          }),
          (l.lineX1 = function () {
            return s().x(r).y(e);
          }),
          (l.defined = function (t) {
            return arguments.length
              ? ((i = 'function' === typeof t ? t : (0, S.A)(!!t)), l)
              : i;
          }),
          (l.curve = function (t) {
            return arguments.length ? ((a = t), null != o && (c = a(o)), l) : a;
          }),
          (l.context = function (t) {
            return arguments.length
              ? (null == t ? (o = c = null) : (c = a((o = t))), l)
              : o;
          }),
          l
        );
      }
      var T = n(643),
        C = n.n(T),
        _ = n(11629),
        I = n.n(_),
        D = n(35007),
        N = n(17287),
        B = n(240),
        R = n(76307);
      function L(t) {
        return (
          (L =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          L(t)
        );
      }
      function F() {
        return (
          (F = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          F.apply(this, arguments)
        );
      }
      function z(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function U(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? z(Object(n), !0).forEach(function (e) {
                W(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function W(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != L(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != L(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == L(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      var X = {
          curveBasisClosed: function (t) {
            return new c(t);
          },
          curveBasisOpen: function (t) {
            return new u(t);
          },
          curveBasis: function (t) {
            return new a(t);
          },
          curveBumpX: function (t) {
            return new l(t, !0);
          },
          curveBumpY: function (t) {
            return new l(t, !1);
          },
          curveLinearClosed: function (t) {
            return new s(t);
          },
          curveLinear: p,
          curveMonotoneX: function (t) {
            return new m(t);
          },
          curveMonotoneY: function (t) {
            return new g(t);
          },
          curveNatural: function (t) {
            return new x(t);
          },
          curveStep: function (t) {
            return new O(t, 0.5);
          },
          curveStepAfter: function (t) {
            return new O(t, 1);
          },
          curveStepBefore: function (t) {
            return new O(t, 0);
          }
        },
        q = function (t) {
          return t.x === +t.x && t.y === +t.y;
        },
        K = function (t) {
          return t.x;
        },
        H = function (t) {
          return t.y;
        },
        V = function (t) {
          var e,
            n = t.type,
            r = void 0 === n ? 'linear' : n,
            i = t.points,
            o = void 0 === i ? [] : i,
            a = t.baseLine,
            c = t.layout,
            u = t.connectNulls,
            l = void 0 !== u && u,
            s = (function (t, e) {
              if (I()(t)) return t;
              var n = 'curve'.concat(C()(t));
              return ('curveMonotone' !== n && 'curveBump' !== n) || !e
                ? X[n] || p
                : X[''.concat(n).concat('vertical' === e ? 'Y' : 'X')];
            })(r, c),
            f = l
              ? o.filter(function (t) {
                  return q(t);
                })
              : o;
          if (Array.isArray(a)) {
            var h = l
                ? a.filter(function (t) {
                    return q(t);
                  })
                : a,
              d = f.map(function (t, e) {
                return U(U({}, t), {}, { base: h[e] });
              });
            return (
              (e =
                'vertical' === c
                  ? M()
                      .y(H)
                      .x1(K)
                      .x0(function (t) {
                        return t.base.x;
                      })
                  : M()
                      .x(K)
                      .y1(H)
                      .y0(function (t) {
                        return t.base.y;
                      }))
                .defined(q)
                .curve(s),
              e(d)
            );
          }
          return (
            (e =
              'vertical' === c && (0, R.Et)(a)
                ? M().y(H).x1(K).x0(a)
                : (0, R.Et)(a)
                ? M().x(K).y1(H).y0(a)
                : k().x(K).y(H))
              .defined(q)
              .curve(s),
            e(f)
          );
        },
        G = function (t) {
          var e = t.className,
            n = t.points,
            i = t.path,
            o = t.pathRef;
          if ((!n || !n.length) && !i) return null;
          var a = n && n.length ? V(t) : i;
          return r.createElement(
            'path',
            F({}, (0, B.J9)(t, !1), (0, N._U)(t), {
              className: (0, D.A)('recharts-curve', e),
              d: a,
              ref: o
            })
          );
        };
    },
    68892: (t, e, n) => {
      'use strict';
      n.d(e, { c: () => u });
      var r = n(65043),
        i = n(35007),
        o = n(17287),
        a = n(240);
      function c() {
        return (
          (c = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          c.apply(this, arguments)
        );
      }
      var u = function (t) {
        var e = t.cx,
          n = t.cy,
          u = t.r,
          l = t.className,
          s = (0, i.A)('recharts-dot', l);
        return e === +e && n === +n && u === +u
          ? r.createElement(
              'circle',
              c({}, (0, a.J9)(t, !1), (0, o._U)(t), {
                className: s,
                cx: e,
                cy: n,
                r: u
              })
            )
          : null;
      };
    },
    84342: (t, e, n) => {
      'use strict';
      n.d(e, { J: () => y, M: () => m });
      var r = n(65043),
        i = n(35007),
        o = n(21578),
        a = n(240);
      function c(t) {
        return (
          (c =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          c(t)
        );
      }
      function u() {
        return (
          (u = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          u.apply(this, arguments)
        );
      }
      function l(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != n) {
              var r,
                i,
                o,
                a,
                c = [],
                u = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' === typeof t) return s(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return s(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function s(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function f(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(n), !0).forEach(function (e) {
                h(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function h(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != c(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != c(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == c(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      var d = function (t, e, n, r, i) {
          var o,
            a = Math.min(Math.abs(n) / 2, Math.abs(r) / 2),
            c = r >= 0 ? 1 : -1,
            u = n >= 0 ? 1 : -1,
            l = (r >= 0 && n >= 0) || (r < 0 && n < 0) ? 1 : 0;
          if (a > 0 && i instanceof Array) {
            for (var s = [0, 0, 0, 0], f = 0; f < 4; f++)
              s[f] = i[f] > a ? a : i[f];
            (o = 'M'.concat(t, ',').concat(e + c * s[0])),
              s[0] > 0 &&
                (o += 'A '
                  .concat(s[0], ',')
                  .concat(s[0], ',0,0,')
                  .concat(l, ',')
                  .concat(t + u * s[0], ',')
                  .concat(e)),
              (o += 'L '.concat(t + n - u * s[1], ',').concat(e)),
              s[1] > 0 &&
                (o += 'A '
                  .concat(s[1], ',')
                  .concat(s[1], ',0,0,')
                  .concat(l, ',\n        ')
                  .concat(t + n, ',')
                  .concat(e + c * s[1])),
              (o += 'L '.concat(t + n, ',').concat(e + r - c * s[2])),
              s[2] > 0 &&
                (o += 'A '
                  .concat(s[2], ',')
                  .concat(s[2], ',0,0,')
                  .concat(l, ',\n        ')
                  .concat(t + n - u * s[2], ',')
                  .concat(e + r)),
              (o += 'L '.concat(t + u * s[3], ',').concat(e + r)),
              s[3] > 0 &&
                (o += 'A '
                  .concat(s[3], ',')
                  .concat(s[3], ',0,0,')
                  .concat(l, ',\n        ')
                  .concat(t, ',')
                  .concat(e + r - c * s[3])),
              (o += 'Z');
          } else if (a > 0 && i === +i && i > 0) {
            var p = Math.min(a, i);
            o = 'M '
              .concat(t, ',')
              .concat(e + c * p, '\n            A ')
              .concat(p, ',')
              .concat(p, ',0,0,')
              .concat(l, ',')
              .concat(t + u * p, ',')
              .concat(e, '\n            L ')
              .concat(t + n - u * p, ',')
              .concat(e, '\n            A ')
              .concat(p, ',')
              .concat(p, ',0,0,')
              .concat(l, ',')
              .concat(t + n, ',')
              .concat(e + c * p, '\n            L ')
              .concat(t + n, ',')
              .concat(e + r - c * p, '\n            A ')
              .concat(p, ',')
              .concat(p, ',0,0,')
              .concat(l, ',')
              .concat(t + n - u * p, ',')
              .concat(e + r, '\n            L ')
              .concat(t + u * p, ',')
              .concat(e + r, '\n            A ')
              .concat(p, ',')
              .concat(p, ',0,0,')
              .concat(l, ',')
              .concat(t, ',')
              .concat(e + r - c * p, ' Z');
          } else
            o = 'M '
              .concat(t, ',')
              .concat(e, ' h ')
              .concat(n, ' v ')
              .concat(r, ' h ')
              .concat(-n, ' Z');
          return o;
        },
        y = function (t, e) {
          if (!t || !e) return !1;
          var n = t.x,
            r = t.y,
            i = e.x,
            o = e.y,
            a = e.width,
            c = e.height;
          if (Math.abs(a) > 0 && Math.abs(c) > 0) {
            var u = Math.min(i, i + a),
              l = Math.max(i, i + a),
              s = Math.min(o, o + c),
              f = Math.max(o, o + c);
            return n >= u && n <= l && r >= s && r <= f;
          }
          return !1;
        },
        v = {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          radius: 0,
          isAnimationActive: !1,
          isUpdateAnimationActive: !1,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: 'ease'
        },
        m = function (t) {
          var e = p(p({}, v), t),
            n = (0, r.useRef)(),
            c = l((0, r.useState)(-1), 2),
            s = c[0],
            f = c[1];
          (0, r.useEffect)(function () {
            if (n.current && n.current.getTotalLength)
              try {
                var t = n.current.getTotalLength();
                t && f(t);
              } catch (e) {}
          }, []);
          var h = e.x,
            y = e.y,
            m = e.width,
            g = e.height,
            b = e.radius,
            x = e.className,
            w = e.animationEasing,
            O = e.animationDuration,
            A = e.animationBegin,
            S = e.isAnimationActive,
            j = e.isUpdateAnimationActive;
          if (
            h !== +h ||
            y !== +y ||
            m !== +m ||
            g !== +g ||
            0 === m ||
            0 === g
          )
            return null;
          var P = (0, i.A)('recharts-rectangle', x);
          return j
            ? r.createElement(
                o.Ay,
                {
                  canBegin: s > 0,
                  from: { width: m, height: g, x: h, y: y },
                  to: { width: m, height: g, x: h, y: y },
                  duration: O,
                  animationEasing: w,
                  isActive: j
                },
                function (t) {
                  var i = t.width,
                    c = t.height,
                    l = t.x,
                    f = t.y;
                  return r.createElement(
                    o.Ay,
                    {
                      canBegin: s > 0,
                      from: '0px '.concat(-1 === s ? 1 : s, 'px'),
                      to: ''.concat(s, 'px 0px'),
                      attributeName: 'strokeDasharray',
                      begin: A,
                      duration: O,
                      isActive: S,
                      easing: w
                    },
                    r.createElement(
                      'path',
                      u({}, (0, a.J9)(e, !0), {
                        className: P,
                        d: d(l, f, i, c, b),
                        ref: n
                      })
                    )
                  );
                }
              )
            : r.createElement(
                'path',
                u({}, (0, a.J9)(e, !0), { className: P, d: d(h, y, m, g, b) })
              );
        };
    },
    677: (t, e, n) => {
      'use strict';
      n.d(e, { h: () => v });
      var r = n(65043),
        i = n(35007),
        o = n(240),
        a = n(60165),
        c = n(76307);
      function u(t) {
        return (
          (u =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          u(t)
        );
      }
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          l.apply(this, arguments)
        );
      }
      function s(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(n), !0).forEach(function (e) {
                p(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function p(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != u(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != u(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == u(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      var h = function (t) {
          var e = t.cx,
            n = t.cy,
            r = t.radius,
            i = t.angle,
            o = t.sign,
            c = t.isExternal,
            u = t.cornerRadius,
            l = t.cornerIsExternal,
            s = u * (c ? 1 : -1) + r,
            f = Math.asin(u / s) / a.Kg,
            p = l ? i : i + o * f,
            h = l ? i - o * f : i;
          return {
            center: (0, a.IZ)(e, n, s, p),
            circleTangency: (0, a.IZ)(e, n, r, p),
            lineTangency: (0, a.IZ)(e, n, s * Math.cos(f * a.Kg), h),
            theta: f
          };
        },
        d = function (t) {
          var e = t.cx,
            n = t.cy,
            r = t.innerRadius,
            i = t.outerRadius,
            o = t.startAngle,
            u = (function (t, e) {
              return (0, c.sA)(e - t) * Math.min(Math.abs(e - t), 359.999);
            })(o, t.endAngle),
            l = o + u,
            s = (0, a.IZ)(e, n, i, o),
            f = (0, a.IZ)(e, n, i, l),
            p = 'M '
              .concat(s.x, ',')
              .concat(s.y, '\n    A ')
              .concat(i, ',')
              .concat(i, ',0,\n    ')
              .concat(+(Math.abs(u) > 180), ',')
              .concat(+(o > l), ',\n    ')
              .concat(f.x, ',')
              .concat(f.y, '\n  ');
          if (r > 0) {
            var h = (0, a.IZ)(e, n, r, o),
              d = (0, a.IZ)(e, n, r, l);
            p += 'L '
              .concat(d.x, ',')
              .concat(d.y, '\n            A ')
              .concat(r, ',')
              .concat(r, ',0,\n            ')
              .concat(+(Math.abs(u) > 180), ',')
              .concat(+(o <= l), ',\n            ')
              .concat(h.x, ',')
              .concat(h.y, ' Z');
          } else p += 'L '.concat(e, ',').concat(n, ' Z');
          return p;
        },
        y = {
          cx: 0,
          cy: 0,
          innerRadius: 0,
          outerRadius: 0,
          startAngle: 0,
          endAngle: 0,
          cornerRadius: 0,
          forceCornerRadius: !1,
          cornerIsExternal: !1
        },
        v = function (t) {
          var e = f(f({}, y), t),
            n = e.cx,
            a = e.cy,
            u = e.innerRadius,
            s = e.outerRadius,
            p = e.cornerRadius,
            v = e.forceCornerRadius,
            m = e.cornerIsExternal,
            g = e.startAngle,
            b = e.endAngle,
            x = e.className;
          if (s < u || g === b) return null;
          var w,
            O = (0, i.A)('recharts-sector', x),
            A = s - u,
            S = (0, c.F4)(p, A, 0, !0);
          return (
            (w =
              S > 0 && Math.abs(g - b) < 360
                ? (function (t) {
                    var e = t.cx,
                      n = t.cy,
                      r = t.innerRadius,
                      i = t.outerRadius,
                      o = t.cornerRadius,
                      a = t.forceCornerRadius,
                      u = t.cornerIsExternal,
                      l = t.startAngle,
                      s = t.endAngle,
                      f = (0, c.sA)(s - l),
                      p = h({
                        cx: e,
                        cy: n,
                        radius: i,
                        angle: l,
                        sign: f,
                        cornerRadius: o,
                        cornerIsExternal: u
                      }),
                      y = p.circleTangency,
                      v = p.lineTangency,
                      m = p.theta,
                      g = h({
                        cx: e,
                        cy: n,
                        radius: i,
                        angle: s,
                        sign: -f,
                        cornerRadius: o,
                        cornerIsExternal: u
                      }),
                      b = g.circleTangency,
                      x = g.lineTangency,
                      w = g.theta,
                      O = u ? Math.abs(l - s) : Math.abs(l - s) - m - w;
                    if (O < 0)
                      return a
                        ? 'M '
                            .concat(v.x, ',')
                            .concat(v.y, '\n        a')
                            .concat(o, ',')
                            .concat(o, ',0,0,1,')
                            .concat(2 * o, ',0\n        a')
                            .concat(o, ',')
                            .concat(o, ',0,0,1,')
                            .concat(2 * -o, ',0\n      ')
                        : d({
                            cx: e,
                            cy: n,
                            innerRadius: r,
                            outerRadius: i,
                            startAngle: l,
                            endAngle: s
                          });
                    var A = 'M '
                      .concat(v.x, ',')
                      .concat(v.y, '\n    A')
                      .concat(o, ',')
                      .concat(o, ',0,0,')
                      .concat(+(f < 0), ',')
                      .concat(y.x, ',')
                      .concat(y.y, '\n    A')
                      .concat(i, ',')
                      .concat(i, ',0,')
                      .concat(+(O > 180), ',')
                      .concat(+(f < 0), ',')
                      .concat(b.x, ',')
                      .concat(b.y, '\n    A')
                      .concat(o, ',')
                      .concat(o, ',0,0,')
                      .concat(+(f < 0), ',')
                      .concat(x.x, ',')
                      .concat(x.y, '\n  ');
                    if (r > 0) {
                      var S = h({
                          cx: e,
                          cy: n,
                          radius: r,
                          angle: l,
                          sign: f,
                          isExternal: !0,
                          cornerRadius: o,
                          cornerIsExternal: u
                        }),
                        j = S.circleTangency,
                        P = S.lineTangency,
                        E = S.theta,
                        k = h({
                          cx: e,
                          cy: n,
                          radius: r,
                          angle: s,
                          sign: -f,
                          isExternal: !0,
                          cornerRadius: o,
                          cornerIsExternal: u
                        }),
                        M = k.circleTangency,
                        T = k.lineTangency,
                        C = k.theta,
                        _ = u ? Math.abs(l - s) : Math.abs(l - s) - E - C;
                      if (_ < 0 && 0 === o)
                        return ''.concat(A, 'L').concat(e, ',').concat(n, 'Z');
                      A += 'L'
                        .concat(T.x, ',')
                        .concat(T.y, '\n      A')
                        .concat(o, ',')
                        .concat(o, ',0,0,')
                        .concat(+(f < 0), ',')
                        .concat(M.x, ',')
                        .concat(M.y, '\n      A')
                        .concat(r, ',')
                        .concat(r, ',0,')
                        .concat(+(_ > 180), ',')
                        .concat(+(f > 0), ',')
                        .concat(j.x, ',')
                        .concat(j.y, '\n      A')
                        .concat(o, ',')
                        .concat(o, ',0,0,')
                        .concat(+(f < 0), ',')
                        .concat(P.x, ',')
                        .concat(P.y, 'Z');
                    } else A += 'L'.concat(e, ',').concat(n, 'Z');
                    return A;
                  })({
                    cx: n,
                    cy: a,
                    innerRadius: u,
                    outerRadius: s,
                    cornerRadius: Math.min(S, A / 2),
                    forceCornerRadius: v,
                    cornerIsExternal: m,
                    startAngle: g,
                    endAngle: b
                  })
                : d({
                    cx: n,
                    cy: a,
                    innerRadius: u,
                    outerRadius: s,
                    startAngle: g,
                    endAngle: b
                  })),
            r.createElement(
              'path',
              l({}, (0, o.J9)(e, !0), { className: O, d: w, role: 'img' })
            )
          );
        };
    },
    41985: (t, e, n) => {
      'use strict';
      n.d(e, { i: () => U });
      var r = n(65043),
        i = n(643),
        o = n.n(i);
      Math.abs, Math.atan2;
      const a = Math.cos,
        c = (Math.max, Math.min, Math.sin),
        u = Math.sqrt,
        l = Math.PI,
        s = 2 * l;
      const f = {
          draw(t, e) {
            const n = u(e / l);
            t.moveTo(n, 0), t.arc(0, 0, n, 0, s);
          }
        },
        p = {
          draw(t, e) {
            const n = u(e / 5) / 2;
            t.moveTo(-3 * n, -n),
              t.lineTo(-n, -n),
              t.lineTo(-n, -3 * n),
              t.lineTo(n, -3 * n),
              t.lineTo(n, -n),
              t.lineTo(3 * n, -n),
              t.lineTo(3 * n, n),
              t.lineTo(n, n),
              t.lineTo(n, 3 * n),
              t.lineTo(-n, 3 * n),
              t.lineTo(-n, n),
              t.lineTo(-3 * n, n),
              t.closePath();
          }
        },
        h = u(1 / 3),
        d = 2 * h,
        y = {
          draw(t, e) {
            const n = u(e / d),
              r = n * h;
            t.moveTo(0, -n),
              t.lineTo(r, 0),
              t.lineTo(0, n),
              t.lineTo(-r, 0),
              t.closePath();
          }
        },
        v = {
          draw(t, e) {
            const n = u(e),
              r = -n / 2;
            t.rect(r, r, n, n);
          }
        },
        m = c(l / 10) / c((7 * l) / 10),
        g = c(s / 10) * m,
        b = -a(s / 10) * m,
        x = {
          draw(t, e) {
            const n = u(0.8908130915292852 * e),
              r = g * n,
              i = b * n;
            t.moveTo(0, -n), t.lineTo(r, i);
            for (let o = 1; o < 5; ++o) {
              const e = (s * o) / 5,
                u = a(e),
                l = c(e);
              t.lineTo(l * n, -u * n), t.lineTo(u * r - l * i, l * r + u * i);
            }
            t.closePath();
          }
        },
        w = u(3),
        O = {
          draw(t, e) {
            const n = -u(e / (3 * w));
            t.moveTo(0, 2 * n),
              t.lineTo(-w * n, -n),
              t.lineTo(w * n, -n),
              t.closePath();
          }
        },
        A = -0.5,
        S = u(3) / 2,
        j = 1 / u(12),
        P = 3 * (j / 2 + 1),
        E = {
          draw(t, e) {
            const n = u(e / P),
              r = n / 2,
              i = n * j,
              o = r,
              a = n * j + n,
              c = -o,
              l = a;
            t.moveTo(r, i),
              t.lineTo(o, a),
              t.lineTo(c, l),
              t.lineTo(A * r - S * i, S * r + A * i),
              t.lineTo(A * o - S * a, S * o + A * a),
              t.lineTo(A * c - S * l, S * c + A * l),
              t.lineTo(A * r + S * i, A * i - S * r),
              t.lineTo(A * o + S * a, A * a - S * o),
              t.lineTo(A * c + S * l, A * l - S * c),
              t.closePath();
          }
        };
      var k = n(13809),
        M = n(17371);
      u(3), u(3);
      var T = n(35007),
        C = n(240);
      function _(t) {
        return (
          (_ =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          _(t)
        );
      }
      var I = ['type', 'size', 'sizeType'];
      function D() {
        return (
          (D = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          D.apply(this, arguments)
        );
      }
      function N(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function B(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? N(Object(n), !0).forEach(function (e) {
                R(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function R(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != _(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != _(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == _(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function L(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      var F = {
          symbolCircle: f,
          symbolCross: p,
          symbolDiamond: y,
          symbolSquare: v,
          symbolStar: x,
          symbolTriangle: O,
          symbolWye: E
        },
        z = Math.PI / 180,
        U = function (t) {
          var e = t.type,
            n = void 0 === e ? 'circle' : e,
            i = t.size,
            a = void 0 === i ? 64 : i,
            c = t.sizeType,
            u = void 0 === c ? 'area' : c,
            l = B(B({}, L(t, I)), {}, { type: n, size: a, sizeType: u }),
            s = l.className,
            p = l.cx,
            h = l.cy,
            d = (0, C.J9)(l, !0);
          return p === +p && h === +h && a === +a
            ? r.createElement(
                'path',
                D({}, d, {
                  className: (0, T.A)('recharts-symbols', s),
                  transform: 'translate('.concat(p, ', ').concat(h, ')'),
                  d: (function () {
                    var t = (function (t) {
                        var e = 'symbol'.concat(o()(t));
                        return F[e] || f;
                      })(n),
                      e = (function (t, e) {
                        let n = null,
                          r = (0, M.i)(i);
                        function i() {
                          let i;
                          if (
                            (n || (n = i = r()),
                            t
                              .apply(this, arguments)
                              .draw(n, +e.apply(this, arguments)),
                            i)
                          )
                            return (n = null), i + '' || null;
                        }
                        return (
                          (t = 'function' === typeof t ? t : (0, k.A)(t || f)),
                          (e =
                            'function' === typeof e
                              ? e
                              : (0, k.A)(void 0 === e ? 64 : +e)),
                          (i.type = function (e) {
                            return arguments.length
                              ? ((t =
                                  'function' === typeof e ? e : (0, k.A)(e)),
                                i)
                              : t;
                          }),
                          (i.size = function (t) {
                            return arguments.length
                              ? ((e =
                                  'function' === typeof t ? t : (0, k.A)(+t)),
                                i)
                              : e;
                          }),
                          (i.context = function (t) {
                            return arguments.length
                              ? ((n = null == t ? null : t), i)
                              : n;
                          }),
                          i
                        );
                      })()
                        .type(t)
                        .size(
                          (function (t, e, n) {
                            if ('area' === e) return t;
                            switch (n) {
                              case 'cross':
                                return (5 * t * t) / 9;
                              case 'diamond':
                                return (0.5 * t * t) / Math.sqrt(3);
                              case 'square':
                                return t * t;
                              case 'star':
                                var r = 18 * z;
                                return (
                                  1.25 *
                                  t *
                                  t *
                                  (Math.tan(r) -
                                    Math.tan(2 * r) * Math.pow(Math.tan(r), 2))
                                );
                              case 'triangle':
                                return (Math.sqrt(3) * t * t) / 4;
                              case 'wye':
                                return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
                              default:
                                return (Math.PI * t * t) / 4;
                            }
                          })(a, u, n)
                        );
                    return e();
                  })()
                })
              )
            : null;
        };
      U.registerSymbol = function (t, e) {
        F['symbol'.concat(o()(t))] = e;
      };
    },
    70879: (t, e, n) => {
      'use strict';
      n.d(e, {
        yp: () => R,
        GG: () => q,
        NE: () => L,
        nZ: () => F,
        xQ: () => z
      });
      var r = n(65043),
        i = n(11629),
        o = n.n(i),
        a = n(12322),
        c = n.n(a),
        u = n(96361),
        l = n.n(u),
        s = n(19853),
        f = n.n(s),
        p = n(84342),
        h = n(35007),
        d = n(21578),
        y = n(240);
      function v(t) {
        return (
          (v =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          v(t)
        );
      }
      function m() {
        return (
          (m = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          m.apply(this, arguments)
        );
      }
      function g(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != n) {
              var r,
                i,
                o,
                a,
                c = [],
                u = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' === typeof t) return b(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return b(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function b(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function x(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function w(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? x(Object(n), !0).forEach(function (e) {
                O(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : x(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function O(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != v(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != v(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == v(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      var A = function (t, e, n, r, i) {
          var o,
            a = n - r;
          return (
            (o = 'M '.concat(t, ',').concat(e)),
            (o += 'L '.concat(t + n, ',').concat(e)),
            (o += 'L '.concat(t + n - a / 2, ',').concat(e + i)),
            (o += 'L '.concat(t + n - a / 2 - r, ',').concat(e + i)),
            (o += 'L '.concat(t, ',').concat(e, ' Z'))
          );
        },
        S = {
          x: 0,
          y: 0,
          upperWidth: 0,
          lowerWidth: 0,
          height: 0,
          isUpdateAnimationActive: !1,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: 'ease'
        },
        j = function (t) {
          var e = w(w({}, S), t),
            n = (0, r.useRef)(),
            i = g((0, r.useState)(-1), 2),
            o = i[0],
            a = i[1];
          (0, r.useEffect)(function () {
            if (n.current && n.current.getTotalLength)
              try {
                var t = n.current.getTotalLength();
                t && a(t);
              } catch (e) {}
          }, []);
          var c = e.x,
            u = e.y,
            l = e.upperWidth,
            s = e.lowerWidth,
            f = e.height,
            p = e.className,
            v = e.animationEasing,
            b = e.animationDuration,
            x = e.animationBegin,
            O = e.isUpdateAnimationActive;
          if (
            c !== +c ||
            u !== +u ||
            l !== +l ||
            s !== +s ||
            f !== +f ||
            (0 === l && 0 === s) ||
            0 === f
          )
            return null;
          var j = (0, h.A)('recharts-trapezoid', p);
          return O
            ? r.createElement(
                d.Ay,
                {
                  canBegin: o > 0,
                  from: { upperWidth: 0, lowerWidth: 0, height: f, x: c, y: u },
                  to: { upperWidth: l, lowerWidth: s, height: f, x: c, y: u },
                  duration: b,
                  animationEasing: v,
                  isActive: O
                },
                function (t) {
                  var i = t.upperWidth,
                    a = t.lowerWidth,
                    c = t.height,
                    u = t.x,
                    l = t.y;
                  return r.createElement(
                    d.Ay,
                    {
                      canBegin: o > 0,
                      from: '0px '.concat(-1 === o ? 1 : o, 'px'),
                      to: ''.concat(o, 'px 0px'),
                      attributeName: 'strokeDasharray',
                      begin: x,
                      duration: b,
                      easing: v
                    },
                    r.createElement(
                      'path',
                      m({}, (0, y.J9)(e, !0), {
                        className: j,
                        d: A(u, l, i, a, c),
                        ref: n
                      })
                    )
                  );
                }
              )
            : r.createElement(
                'g',
                null,
                r.createElement(
                  'path',
                  m({}, (0, y.J9)(e, !0), { className: j, d: A(c, u, l, s, f) })
                )
              );
        },
        P = n(677),
        E = n(94020),
        k = n(41985),
        M = [
          'option',
          'shapeType',
          'propTransformer',
          'activeClassName',
          'isActive'
        ];
      function T(t) {
        return (
          (T =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          T(t)
        );
      }
      function C(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function _(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function I(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? _(Object(n), !0).forEach(function (e) {
                D(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function D(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != T(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != T(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == T(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function N(t, e) {
        return I(I({}, e), t);
      }
      function B(t) {
        var e = t.shapeType,
          n = t.elementProps;
        switch (e) {
          case 'rectangle':
            return r.createElement(p.M, n);
          case 'trapezoid':
            return r.createElement(j, n);
          case 'sector':
            return r.createElement(P.h, n);
          case 'symbols':
            if (
              (function (t, e) {
                return 'symbols' === t;
              })(e)
            )
              return r.createElement(k.i, n);
            break;
          default:
            return null;
        }
      }
      function R(t) {
        var e,
          n = t.option,
          i = t.shapeType,
          a = t.propTransformer,
          u = void 0 === a ? N : a,
          s = t.activeClassName,
          f = void 0 === s ? 'recharts-active-shape' : s,
          p = t.isActive,
          h = C(t, M);
        if ((0, r.isValidElement)(n))
          e = (0, r.cloneElement)(
            n,
            I(
              I({}, h),
              (function (t) {
                return (0, r.isValidElement)(t) ? t.props : t;
              })(n)
            )
          );
        else if (o()(n)) e = n(h);
        else if (c()(n) && !l()(n)) {
          var d = u(n, h);
          e = r.createElement(B, { shapeType: i, elementProps: d });
        } else {
          var y = h;
          e = r.createElement(B, { shapeType: i, elementProps: y });
        }
        return p ? r.createElement(E.W, { className: f }, e) : e;
      }
      function L(t, e) {
        return null != e && 'trapezoids' in t.props;
      }
      function F(t, e) {
        return null != e && 'sectors' in t.props;
      }
      function z(t, e) {
        return null != e && 'points' in t.props;
      }
      function U(t, e) {
        var n,
          r,
          i =
            t.x ===
              (null === e ||
              void 0 === e ||
              null === (n = e.labelViewBox) ||
              void 0 === n
                ? void 0
                : n.x) || t.x === e.x,
          o =
            t.y ===
              (null === e ||
              void 0 === e ||
              null === (r = e.labelViewBox) ||
              void 0 === r
                ? void 0
                : r.y) || t.y === e.y;
        return i && o;
      }
      function W(t, e) {
        var n = t.endAngle === e.endAngle,
          r = t.startAngle === e.startAngle;
        return n && r;
      }
      function X(t, e) {
        var n = t.x === e.x,
          r = t.y === e.y,
          i = t.z === e.z;
        return n && r && i;
      }
      function q(t) {
        var e = t.activeTooltipItem,
          n = t.graphicalItem,
          r = t.itemData,
          i = (function (t, e) {
            var n;
            return (
              L(t, e)
                ? (n = 'trapezoids')
                : F(t, e)
                ? (n = 'sectors')
                : z(t, e) && (n = 'points'),
              n
            );
          })(n, e),
          o = (function (t, e) {
            var n, r;
            return L(t, e)
              ? null === (n = e.tooltipPayload) ||
                void 0 === n ||
                null === (n = n[0]) ||
                void 0 === n ||
                null === (n = n.payload) ||
                void 0 === n
                ? void 0
                : n.payload
              : F(t, e)
              ? null === (r = e.tooltipPayload) ||
                void 0 === r ||
                null === (r = r[0]) ||
                void 0 === r ||
                null === (r = r.payload) ||
                void 0 === r
                ? void 0
                : r.payload
              : z(t, e)
              ? e.payload
              : {};
          })(n, e),
          a = r.filter(function (t, r) {
            var a = f()(o, t),
              c = n.props[i].filter(function (t) {
                var r = (function (t, e) {
                  var n;
                  return (
                    L(t, e) ? (n = U) : F(t, e) ? (n = W) : z(t, e) && (n = X),
                    n
                  );
                })(n, e);
                return r(t, e);
              }),
              u = n.props[i].indexOf(c[c.length - 1]);
            return a && r === u;
          });
        return r.indexOf(a[a.length - 1]);
      }
    },
    3831: (t, e, n) => {
      'use strict';
      n.d(e, {
        P2: () => w,
        bx: () => O,
        pr: () => m,
        sl: () => g,
        vh: () => b
      });
      var r = n(91733),
        i = n.n(r),
        o = n(17002),
        a = n.n(o),
        c = n(20202),
        u = n(240),
        l = n(76307),
        s = n(38643);
      function f(t) {
        return (
          (f =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          f(t)
        );
      }
      function p(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, v(r.key), r);
        }
      }
      function h(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(n), !0).forEach(function (e) {
                y(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function y(t, e, n) {
        return (
          (e = v(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function v(t) {
        var e = (function (t, e) {
          if ('object' != f(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' != f(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' == f(e) ? e : String(e);
      }
      var m = function (t, e, n, r, i) {
          var o = t.width,
            a = t.height,
            f = t.layout,
            p = t.children,
            h = Object.keys(e),
            v = {
              left: n.left,
              leftMirror: n.left,
              right: o - n.right,
              rightMirror: o - n.right,
              top: n.top,
              topMirror: n.top,
              bottom: a - n.bottom,
              bottomMirror: a - n.bottom
            },
            m = !!(0, u.BU)(p, s.y);
          return h.reduce(function (o, a) {
            var u,
              s,
              p,
              h,
              g,
              b = e[a],
              x = b.orientation,
              w = b.domain,
              O = b.padding,
              A = void 0 === O ? {} : O,
              S = b.mirror,
              j = b.reversed,
              P = ''.concat(x).concat(S ? 'Mirror' : '');
            if (
              'number' === b.type &&
              ('gap' === b.padding || 'no-gap' === b.padding)
            ) {
              var E = w[1] - w[0],
                k = 1 / 0,
                M = b.categoricalDomain.sort();
              M.forEach(function (t, e) {
                e > 0 && (k = Math.min((t || 0) - (M[e - 1] || 0), k));
              });
              var T = k / E,
                C = 'vertical' === b.layout ? n.height : n.width;
              if (
                ('gap' === b.padding && (u = (T * C) / 2),
                'no-gap' === b.padding)
              ) {
                var _ = (0, l.F4)(t.barCategoryGap, T * C),
                  I = (T * C) / 2;
                u = I - _ - ((I - _) / C) * _;
              }
            }
            (s =
              'xAxis' === r
                ? [
                    n.left + (A.left || 0) + (u || 0),
                    n.left + n.width - (A.right || 0) - (u || 0)
                  ]
                : 'yAxis' === r
                ? 'horizontal' === f
                  ? [n.top + n.height - (A.bottom || 0), n.top + (A.top || 0)]
                  : [
                      n.top + (A.top || 0) + (u || 0),
                      n.top + n.height - (A.bottom || 0) - (u || 0)
                    ]
                : b.range),
              j && (s = [s[1], s[0]]);
            var D = (0, c.W7)(b, i, m),
              N = D.scale,
              B = D.realScaleType;
            N.domain(w).range(s), (0, c.YB)(N);
            var R = (0, c.w7)(N, d(d({}, b), {}, { realScaleType: B }));
            'xAxis' === r
              ? ((g = ('top' === x && !S) || ('bottom' === x && S)),
                (p = n.left),
                (h = v[P] - g * b.height))
              : 'yAxis' === r &&
                ((g = ('left' === x && !S) || ('right' === x && S)),
                (p = v[P] - g * b.width),
                (h = n.top));
            var L = d(
              d(d({}, b), R),
              {},
              {
                realScaleType: B,
                x: p,
                y: h,
                scale: N,
                width: 'xAxis' === r ? n.width : b.width,
                height: 'yAxis' === r ? n.height : b.height
              }
            );
            return (
              (L.bandSize = (0, c.Hj)(L, R)),
              b.hide || 'xAxis' !== r
                ? b.hide || (v[P] += (g ? -1 : 1) * L.width)
                : (v[P] += (g ? -1 : 1) * L.height),
              d(d({}, o), {}, y({}, a, L))
            );
          }, {});
        },
        g = function (t, e) {
          var n = t.x,
            r = t.y,
            i = e.x,
            o = e.y;
          return {
            x: Math.min(n, i),
            y: Math.min(r, o),
            width: Math.abs(i - n),
            height: Math.abs(o - r)
          };
        },
        b = function (t) {
          var e = t.x1,
            n = t.y1,
            r = t.x2,
            i = t.y2;
          return g({ x: e, y: n }, { x: r, y: i });
        },
        x = (function () {
          function t(e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              (this.scale = e);
          }
          var e, n, r;
          return (
            (e = t),
            (n = [
              {
                key: 'domain',
                get: function () {
                  return this.scale.domain;
                }
              },
              {
                key: 'range',
                get: function () {
                  return this.scale.range;
                }
              },
              {
                key: 'rangeMin',
                get: function () {
                  return this.range()[0];
                }
              },
              {
                key: 'rangeMax',
                get: function () {
                  return this.range()[1];
                }
              },
              {
                key: 'bandwidth',
                get: function () {
                  return this.scale.bandwidth;
                }
              },
              {
                key: 'apply',
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = e.bandAware,
                    r = e.position;
                  if (void 0 !== t) {
                    if (r)
                      switch (r) {
                        case 'start':
                        default:
                          return this.scale(t);
                        case 'middle':
                          var i = this.bandwidth ? this.bandwidth() / 2 : 0;
                          return this.scale(t) + i;
                        case 'end':
                          var o = this.bandwidth ? this.bandwidth() : 0;
                          return this.scale(t) + o;
                      }
                    if (n) {
                      var a = this.bandwidth ? this.bandwidth() / 2 : 0;
                      return this.scale(t) + a;
                    }
                    return this.scale(t);
                  }
                }
              },
              {
                key: 'isInRange',
                value: function (t) {
                  var e = this.range(),
                    n = e[0],
                    r = e[e.length - 1];
                  return n <= r ? t >= n && t <= r : t >= r && t <= n;
                }
              }
            ]),
            (r = [
              {
                key: 'create',
                value: function (e) {
                  return new t(e);
                }
              }
            ]),
            n && p(e.prototype, n),
            r && p(e, r),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t
          );
        })();
      y(x, 'EPS', 1e-4);
      var w = function (t) {
        var e = Object.keys(t).reduce(function (e, n) {
          return d(d({}, e), {}, y({}, n, x.create(t[n])));
        }, {});
        return d(
          d({}, e),
          {},
          {
            apply: function (t) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = n.bandAware,
                o = n.position;
              return i()(t, function (t, n) {
                return e[n].apply(t, { bandAware: r, position: o });
              });
            },
            isInRange: function (t) {
              return a()(t, function (t, n) {
                return e[n].isInRange(t);
              });
            }
          }
        );
      };
      var O = function (t) {
        var e = t.width,
          n = t.height,
          r = (function (t) {
            return ((t % 180) + 180) % 180;
          })(
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          ),
          i = (r * Math.PI) / 180,
          o = Math.atan(n / e),
          a = i > o && i < Math.PI - o ? n / Math.sin(i) : e / Math.cos(i);
        return Math.abs(a);
      };
    },
    20202: (t, e, n) => {
      'use strict';
      n.d(e, {
        s0: () => wo,
        gH: () => mo,
        YB: () => _o,
        HQ: () => Mo,
        xi: () => Io,
        Hj: () => Vo,
        BX: () => xo,
        tA: () => bo,
        DW: () => Uo,
        y2: () => zo,
        nb: () => Fo,
        PW: () => Po,
        Ay: () => vo,
        vf: () => So,
        Mk: () => Xo,
        Ps: () => go,
        Mn: () => Ro,
        kA: () => Wo,
        Rh: () => Eo,
        w7: () => Lo,
        zb: () => Yo,
        kr: () => yo,
        _L: () => jo,
        KC: () => Go,
        A1: () => Ao,
        W7: () => To,
        AQ: () => Ho,
        _f: () => Do
      });
      var r = {};
      n.r(r),
        n.d(r, {
          scaleBand: () => i.A,
          scaleDiverging: () => Qr,
          scaleDivergingLog: () => ti,
          scaleDivergingPow: () => ni,
          scaleDivergingSqrt: () => ri,
          scaleDivergingSymlog: () => ei,
          scaleIdentity: () => Kt,
          scaleImplicit: () => oe.h,
          scaleLinear: () => qt,
          scaleLog: () => te,
          scaleOrdinal: () => oe.A,
          scalePoint: () => i.z,
          scalePow: () => se,
          scaleQuantile: () => Oe,
          scaleQuantize: () => Ae,
          scaleRadial: () => he,
          scaleSequential: () => Hr,
          scaleSequentialLog: () => Vr,
          scaleSequentialPow: () => Yr,
          scaleSequentialQuantile: () => Zr,
          scaleSequentialSqrt: () => Jr,
          scaleSequentialSymlog: () => Gr,
          scaleSqrt: () => fe,
          scaleSymlog: () => ie,
          scaleThreshold: () => Se,
          scaleTime: () => Wr,
          scaleUtc: () => Xr,
          tickFormat: () => Wt
        });
      var i = n(2099);
      const o = Math.sqrt(50),
        a = Math.sqrt(10),
        c = Math.sqrt(2);
      function u(t, e, n) {
        const r = (e - t) / Math.max(0, n),
          i = Math.floor(Math.log10(r)),
          l = r / Math.pow(10, i),
          s = l >= o ? 10 : l >= a ? 5 : l >= c ? 2 : 1;
        let f, p, h;
        return (
          i < 0
            ? ((h = Math.pow(10, -i) / s),
              (f = Math.round(t * h)),
              (p = Math.round(e * h)),
              f / h < t && ++f,
              p / h > e && --p,
              (h = -h))
            : ((h = Math.pow(10, i) * s),
              (f = Math.round(t / h)),
              (p = Math.round(e / h)),
              f * h < t && ++f,
              p * h > e && --p),
          p < f && 0.5 <= n && n < 2 ? u(t, e, 2 * n) : [f, p, h]
        );
      }
      function l(t, e, n) {
        if (!((n = +n) > 0)) return [];
        if ((t = +t) === (e = +e)) return [t];
        const r = e < t,
          [i, o, a] = r ? u(e, t, n) : u(t, e, n);
        if (!(o >= i)) return [];
        const c = o - i + 1,
          l = new Array(c);
        if (r)
          if (a < 0) for (let u = 0; u < c; ++u) l[u] = (o - u) / -a;
          else for (let u = 0; u < c; ++u) l[u] = (o - u) * a;
        else if (a < 0) for (let u = 0; u < c; ++u) l[u] = (i + u) / -a;
        else for (let u = 0; u < c; ++u) l[u] = (i + u) * a;
        return l;
      }
      function s(t, e, n) {
        return u((t = +t), (e = +e), (n = +n))[2];
      }
      function f(t, e, n) {
        n = +n;
        const r = (e = +e) < (t = +t),
          i = r ? s(e, t, n) : s(t, e, n);
        return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
      }
      function p(t, e) {
        return null == t || null == e
          ? NaN
          : t < e
          ? -1
          : t > e
          ? 1
          : t >= e
          ? 0
          : NaN;
      }
      function h(t, e) {
        return null == t || null == e
          ? NaN
          : e < t
          ? -1
          : e > t
          ? 1
          : e >= t
          ? 0
          : NaN;
      }
      function d(t) {
        let e, n, r;
        function i(t, r) {
          let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : t.length;
          if (i < o) {
            if (0 !== e(r, r)) return o;
            do {
              const e = (i + o) >>> 1;
              n(t[e], r) < 0 ? (i = e + 1) : (o = e);
            } while (i < o);
          }
          return i;
        }
        return (
          2 !== t.length
            ? ((e = p), (n = (e, n) => p(t(e), n)), (r = (e, n) => t(e) - n))
            : ((e = t === p || t === h ? t : y), (n = t), (r = t)),
          {
            left: i,
            center: function (t, e) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0;
              const o = i(
                t,
                e,
                n,
                (arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : t.length) - 1
              );
              return o > n && r(t[o - 1], e) > -r(t[o], e) ? o - 1 : o;
            },
            right: function (t, r) {
              let i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : t.length;
              if (i < o) {
                if (0 !== e(r, r)) return o;
                do {
                  const e = (i + o) >>> 1;
                  n(t[e], r) <= 0 ? (i = e + 1) : (o = e);
                } while (i < o);
              }
              return i;
            }
          }
        );
      }
      function y() {
        return 0;
      }
      function v(t) {
        return null === t ? NaN : +t;
      }
      const m = d(p),
        g = m.right,
        b = (m.left, d(v).center, g);
      function x(t, e, n) {
        (t.prototype = e.prototype = n), (n.constructor = t);
      }
      function w(t, e) {
        var n = Object.create(t.prototype);
        for (var r in e) n[r] = e[r];
        return n;
      }
      function O() {}
      var A = 0.7,
        S = 1 / A,
        j = '\\s*([+-]?\\d+)\\s*',
        P = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
        E = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
        k = /^#([0-9a-f]{3,8})$/,
        M = new RegExp(
          '^rgb\\('.concat(j, ',').concat(j, ',').concat(j, '\\)$')
        ),
        T = new RegExp(
          '^rgb\\('.concat(E, ',').concat(E, ',').concat(E, '\\)$')
        ),
        C = new RegExp(
          '^rgba\\('
            .concat(j, ',')
            .concat(j, ',')
            .concat(j, ',')
            .concat(P, '\\)$')
        ),
        _ = new RegExp(
          '^rgba\\('
            .concat(E, ',')
            .concat(E, ',')
            .concat(E, ',')
            .concat(P, '\\)$')
        ),
        I = new RegExp(
          '^hsl\\('.concat(P, ',').concat(E, ',').concat(E, '\\)$')
        ),
        D = new RegExp(
          '^hsla\\('
            .concat(P, ',')
            .concat(E, ',')
            .concat(E, ',')
            .concat(P, '\\)$')
        ),
        N = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074
        };
      function B() {
        return this.rgb().formatHex();
      }
      function R() {
        return this.rgb().formatRgb();
      }
      function L(t) {
        var e, n;
        return (
          (t = (t + '').trim().toLowerCase()),
          (e = k.exec(t))
            ? ((n = e[1].length),
              (e = parseInt(e[1], 16)),
              6 === n
                ? F(e)
                : 3 === n
                ? new W(
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    ((15 & e) << 4) | (15 & e),
                    1
                  )
                : 8 === n
                ? z(
                    (e >> 24) & 255,
                    (e >> 16) & 255,
                    (e >> 8) & 255,
                    (255 & e) / 255
                  )
                : 4 === n
                ? z(
                    ((e >> 12) & 15) | ((e >> 8) & 240),
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    (((15 & e) << 4) | (15 & e)) / 255
                  )
                : null)
            : (e = M.exec(t))
            ? new W(e[1], e[2], e[3], 1)
            : (e = T.exec(t))
            ? new W(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                1
              )
            : (e = C.exec(t))
            ? z(e[1], e[2], e[3], e[4])
            : (e = _.exec(t))
            ? z(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                e[4]
              )
            : (e = I.exec(t))
            ? G(e[1], e[2] / 100, e[3] / 100, 1)
            : (e = D.exec(t))
            ? G(e[1], e[2] / 100, e[3] / 100, e[4])
            : N.hasOwnProperty(t)
            ? F(N[t])
            : 'transparent' === t
            ? new W(NaN, NaN, NaN, 0)
            : null
        );
      }
      function F(t) {
        return new W((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function z(t, e, n, r) {
        return r <= 0 && (t = e = n = NaN), new W(t, e, n, r);
      }
      function U(t, e, n, r) {
        return 1 === arguments.length
          ? ((i = t) instanceof O || (i = L(i)),
            i ? new W((i = i.rgb()).r, i.g, i.b, i.opacity) : new W())
          : new W(t, e, n, null == r ? 1 : r);
        var i;
      }
      function W(t, e, n, r) {
        (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
      }
      function X() {
        return '#'.concat(V(this.r)).concat(V(this.g)).concat(V(this.b));
      }
      function q() {
        const t = K(this.opacity);
        return ''
          .concat(1 === t ? 'rgb(' : 'rgba(')
          .concat(H(this.r), ', ')
          .concat(H(this.g), ', ')
          .concat(H(this.b))
          .concat(1 === t ? ')' : ', '.concat(t, ')'));
      }
      function K(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function H(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function V(t) {
        return ((t = H(t)) < 16 ? '0' : '') + t.toString(16);
      }
      function G(t, e, n, r) {
        return (
          r <= 0
            ? (t = e = n = NaN)
            : n <= 0 || n >= 1
            ? (t = e = NaN)
            : e <= 0 && (t = NaN),
          new J(t, e, n, r)
        );
      }
      function Y(t) {
        if (t instanceof J) return new J(t.h, t.s, t.l, t.opacity);
        if ((t instanceof O || (t = L(t)), !t)) return new J();
        if (t instanceof J) return t;
        var e = (t = t.rgb()).r / 255,
          n = t.g / 255,
          r = t.b / 255,
          i = Math.min(e, n, r),
          o = Math.max(e, n, r),
          a = NaN,
          c = o - i,
          u = (o + i) / 2;
        return (
          c
            ? ((a =
                e === o
                  ? (n - r) / c + 6 * (n < r)
                  : n === o
                  ? (r - e) / c + 2
                  : (e - n) / c + 4),
              (c /= u < 0.5 ? o + i : 2 - o - i),
              (a *= 60))
            : (c = u > 0 && u < 1 ? 0 : a),
          new J(a, c, u, t.opacity)
        );
      }
      function J(t, e, n, r) {
        (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
      }
      function Z(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function $(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function Q(t, e, n) {
        return (
          255 *
          (t < 60
            ? e + ((n - e) * t) / 60
            : t < 180
            ? n
            : t < 240
            ? e + ((n - e) * (240 - t)) / 60
            : e)
        );
      }
      function tt(t, e, n, r, i) {
        var o = t * t,
          a = o * t;
        return (
          ((1 - 3 * t + 3 * o - a) * e +
            (4 - 6 * o + 3 * a) * n +
            (1 + 3 * t + 3 * o - 3 * a) * r +
            a * i) /
          6
        );
      }
      x(O, L, {
        copy(t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: B,
        formatHex: B,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return Y(this).formatHsl();
        },
        formatRgb: R,
        toString: R
      }),
        x(
          W,
          U,
          w(O, {
            brighter(t) {
              return (
                (t = null == t ? S : Math.pow(S, t)),
                new W(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? A : Math.pow(A, t)),
                new W(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new W(H(this.r), H(this.g), H(this.b), K(this.opacity));
            },
            displayable() {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: X,
            formatHex: X,
            formatHex8: function () {
              return '#'
                .concat(V(this.r))
                .concat(V(this.g))
                .concat(V(this.b))
                .concat(V(255 * (isNaN(this.opacity) ? 1 : this.opacity)));
            },
            formatRgb: q,
            toString: q
          })
        ),
        x(
          J,
          function (t, e, n, r) {
            return 1 === arguments.length
              ? Y(t)
              : new J(t, e, n, null == r ? 1 : r);
          },
          w(O, {
            brighter(t) {
              return (
                (t = null == t ? S : Math.pow(S, t)),
                new J(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? A : Math.pow(A, t)),
                new J(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              var t = (this.h % 360) + 360 * (this.h < 0),
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < 0.5 ? n : 1 - n) * e,
                i = 2 * n - r;
              return new W(
                Q(t >= 240 ? t - 240 : t + 120, i, r),
                Q(t, i, r),
                Q(t < 120 ? t + 240 : t - 120, i, r),
                this.opacity
              );
            },
            clamp() {
              return new J(Z(this.h), $(this.s), $(this.l), K(this.opacity));
            },
            displayable() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl() {
              const t = K(this.opacity);
              return ''
                .concat(1 === t ? 'hsl(' : 'hsla(')
                .concat(Z(this.h), ', ')
                .concat(100 * $(this.s), '%, ')
                .concat(100 * $(this.l), '%')
                .concat(1 === t ? ')' : ', '.concat(t, ')'));
            }
          })
        );
      const et = (t) => () => t;
      function nt(t, e) {
        return function (n) {
          return t + n * e;
        };
      }
      function rt(t) {
        return 1 === (t = +t)
          ? it
          : function (e, n) {
              return n - e
                ? (function (t, e, n) {
                    return (
                      (t = Math.pow(t, n)),
                      (e = Math.pow(e, n) - t),
                      (n = 1 / n),
                      function (r) {
                        return Math.pow(t + r * e, n);
                      }
                    );
                  })(e, n, t)
                : et(isNaN(e) ? n : e);
            };
      }
      function it(t, e) {
        var n = e - t;
        return n ? nt(t, n) : et(isNaN(t) ? e : t);
      }
      const ot = (function t(e) {
        var n = rt(e);
        function r(t, e) {
          var r = n((t = U(t)).r, (e = U(e)).r),
            i = n(t.g, e.g),
            o = n(t.b, e.b),
            a = it(t.opacity, e.opacity);
          return function (e) {
            return (
              (t.r = r(e)),
              (t.g = i(e)),
              (t.b = o(e)),
              (t.opacity = a(e)),
              t + ''
            );
          };
        }
        return (r.gamma = t), r;
      })(1);
      function at(t) {
        return function (e) {
          var n,
            r,
            i = e.length,
            o = new Array(i),
            a = new Array(i),
            c = new Array(i);
          for (n = 0; n < i; ++n)
            (r = U(e[n])),
              (o[n] = r.r || 0),
              (a[n] = r.g || 0),
              (c[n] = r.b || 0);
          return (
            (o = t(o)),
            (a = t(a)),
            (c = t(c)),
            (r.opacity = 1),
            function (t) {
              return (r.r = o(t)), (r.g = a(t)), (r.b = c(t)), r + '';
            }
          );
        };
      }
      at(function (t) {
        var e = t.length - 1;
        return function (n) {
          var r =
              n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), e - 1) : Math.floor(n * e),
            i = t[r],
            o = t[r + 1],
            a = r > 0 ? t[r - 1] : 2 * i - o,
            c = r < e - 1 ? t[r + 2] : 2 * o - i;
          return tt((n - r / e) * e, a, i, o, c);
        };
      }),
        at(function (t) {
          var e = t.length;
          return function (n) {
            var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
              i = t[(r + e - 1) % e],
              o = t[r % e],
              a = t[(r + 1) % e],
              c = t[(r + 2) % e];
            return tt((n - r / e) * e, i, o, a, c);
          };
        });
      function ct(t, e) {
        var n,
          r = e ? e.length : 0,
          i = t ? Math.min(r, t.length) : 0,
          o = new Array(i),
          a = new Array(r);
        for (n = 0; n < i; ++n) o[n] = yt(t[n], e[n]);
        for (; n < r; ++n) a[n] = e[n];
        return function (t) {
          for (n = 0; n < i; ++n) a[n] = o[n](t);
          return a;
        };
      }
      function ut(t, e) {
        var n = new Date();
        return (
          (t = +t),
          (e = +e),
          function (r) {
            return n.setTime(t * (1 - r) + e * r), n;
          }
        );
      }
      function lt(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (n) {
            return t * (1 - n) + e * n;
          }
        );
      }
      function st(t, e) {
        var n,
          r = {},
          i = {};
        for (n in ((null !== t && 'object' === typeof t) || (t = {}),
        (null !== e && 'object' === typeof e) || (e = {}),
        e))
          n in t ? (r[n] = yt(t[n], e[n])) : (i[n] = e[n]);
        return function (t) {
          for (n in r) i[n] = r[n](t);
          return i;
        };
      }
      var ft = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        pt = new RegExp(ft.source, 'g');
      function ht(t, e) {
        var n,
          r,
          i,
          o = (ft.lastIndex = pt.lastIndex = 0),
          a = -1,
          c = [],
          u = [];
        for (t += '', e += ''; (n = ft.exec(t)) && (r = pt.exec(e)); )
          (i = r.index) > o &&
            ((i = e.slice(o, i)), c[a] ? (c[a] += i) : (c[++a] = i)),
            (n = n[0]) === (r = r[0])
              ? c[a]
                ? (c[a] += r)
                : (c[++a] = r)
              : ((c[++a] = null), u.push({ i: a, x: lt(n, r) })),
            (o = pt.lastIndex);
        return (
          o < e.length && ((i = e.slice(o)), c[a] ? (c[a] += i) : (c[++a] = i)),
          c.length < 2
            ? u[0]
              ? (function (t) {
                  return function (e) {
                    return t(e) + '';
                  };
                })(u[0].x)
              : (function (t) {
                  return function () {
                    return t;
                  };
                })(e)
            : ((e = u.length),
              function (t) {
                for (var n, r = 0; r < e; ++r) c[(n = u[r]).i] = n.x(t);
                return c.join('');
              })
        );
      }
      function dt(t, e) {
        e || (e = []);
        var n,
          r = t ? Math.min(e.length, t.length) : 0,
          i = e.slice();
        return function (o) {
          for (n = 0; n < r; ++n) i[n] = t[n] * (1 - o) + e[n] * o;
          return i;
        };
      }
      function yt(t, e) {
        var n,
          r,
          i = typeof e;
        return null == e || 'boolean' === i
          ? et(e)
          : ('number' === i
              ? lt
              : 'string' === i
              ? (n = L(e))
                ? ((e = n), ot)
                : ht
              : e instanceof L
              ? ot
              : e instanceof Date
              ? ut
              : ((r = e),
                !ArrayBuffer.isView(r) || r instanceof DataView
                  ? Array.isArray(e)
                    ? ct
                    : ('function' !== typeof e.valueOf &&
                        'function' !== typeof e.toString) ||
                      isNaN(e)
                    ? st
                    : lt
                  : dt))(t, e);
      }
      function vt(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (n) {
            return Math.round(t * (1 - n) + e * n);
          }
        );
      }
      function mt(t) {
        return +t;
      }
      var gt = [0, 1];
      function bt(t) {
        return t;
      }
      function xt(t, e) {
        return (e -= t = +t)
          ? function (n) {
              return (n - t) / e;
            }
          : ((n = isNaN(e) ? NaN : 0.5),
            function () {
              return n;
            });
        var n;
      }
      function wt(t, e, n) {
        var r = t[0],
          i = t[1],
          o = e[0],
          a = e[1];
        return (
          i < r
            ? ((r = xt(i, r)), (o = n(a, o)))
            : ((r = xt(r, i)), (o = n(o, a))),
          function (t) {
            return o(r(t));
          }
        );
      }
      function Ot(t, e, n) {
        var r = Math.min(t.length, e.length) - 1,
          i = new Array(r),
          o = new Array(r),
          a = -1;
        for (
          t[r] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
          ++a < r;

        )
          (i[a] = xt(t[a], t[a + 1])), (o[a] = n(e[a], e[a + 1]));
        return function (e) {
          var n = b(t, e, 1, r) - 1;
          return o[n](i[n](e));
        };
      }
      function At(t, e) {
        return e
          .domain(t.domain())
          .range(t.range())
          .interpolate(t.interpolate())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function St() {
        var t,
          e,
          n,
          r,
          i,
          o,
          a = gt,
          c = gt,
          u = yt,
          l = bt;
        function s() {
          var t = Math.min(a.length, c.length);
          return (
            l !== bt &&
              (l = (function (t, e) {
                var n;
                return (
                  t > e && ((n = t), (t = e), (e = n)),
                  function (n) {
                    return Math.max(t, Math.min(e, n));
                  }
                );
              })(a[0], a[t - 1])),
            (r = t > 2 ? Ot : wt),
            (i = o = null),
            f
          );
        }
        function f(e) {
          return null == e || isNaN((e = +e))
            ? n
            : (i || (i = r(a.map(t), c, u)))(t(l(e)));
        }
        return (
          (f.invert = function (n) {
            return l(e((o || (o = r(c, a.map(t), lt)))(n)));
          }),
          (f.domain = function (t) {
            return arguments.length
              ? ((a = Array.from(t, mt)), s())
              : a.slice();
          }),
          (f.range = function (t) {
            return arguments.length ? ((c = Array.from(t)), s()) : c.slice();
          }),
          (f.rangeRound = function (t) {
            return (c = Array.from(t)), (u = vt), s();
          }),
          (f.clamp = function (t) {
            return arguments.length ? ((l = !!t || bt), s()) : l !== bt;
          }),
          (f.interpolate = function (t) {
            return arguments.length ? ((u = t), s()) : u;
          }),
          (f.unknown = function (t) {
            return arguments.length ? ((n = t), f) : n;
          }),
          function (n, r) {
            return (t = n), (e = r), s();
          }
        );
      }
      function jt() {
        return St()(bt, bt);
      }
      var Pt,
        Et = n(94402),
        kt =
          /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function Mt(t) {
        if (!(e = kt.exec(t))) throw new Error('invalid format: ' + t);
        var e;
        return new Tt({
          fill: e[1],
          align: e[2],
          sign: e[3],
          symbol: e[4],
          zero: e[5],
          width: e[6],
          comma: e[7],
          precision: e[8] && e[8].slice(1),
          trim: e[9],
          type: e[10]
        });
      }
      function Tt(t) {
        (this.fill = void 0 === t.fill ? ' ' : t.fill + ''),
          (this.align = void 0 === t.align ? '>' : t.align + ''),
          (this.sign = void 0 === t.sign ? '-' : t.sign + ''),
          (this.symbol = void 0 === t.symbol ? '' : t.symbol + ''),
          (this.zero = !!t.zero),
          (this.width = void 0 === t.width ? void 0 : +t.width),
          (this.comma = !!t.comma),
          (this.precision = void 0 === t.precision ? void 0 : +t.precision),
          (this.trim = !!t.trim),
          (this.type = void 0 === t.type ? '' : t.type + '');
      }
      function Ct(t, e) {
        if (
          (n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
            'e'
          )) < 0
        )
          return null;
        var n,
          r = t.slice(0, n);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)];
      }
      function _t(t) {
        return (t = Ct(Math.abs(t))) ? t[1] : NaN;
      }
      function It(t, e) {
        var n = Ct(t, e);
        if (!n) return t + '';
        var r = n[0],
          i = n[1];
        return i < 0
          ? '0.' + new Array(-i).join('0') + r
          : r.length > i + 1
          ? r.slice(0, i + 1) + '.' + r.slice(i + 1)
          : r + new Array(i - r.length + 2).join('0');
      }
      (Mt.prototype = Tt.prototype),
        (Tt.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? '0' : '') +
            (void 0 === this.width ? '' : Math.max(1, 0 | this.width)) +
            (this.comma ? ',' : '') +
            (void 0 === this.precision
              ? ''
              : '.' + Math.max(0, 0 | this.precision)) +
            (this.trim ? '~' : '') +
            this.type
          );
        });
      const Dt = {
        '%': (t, e) => (100 * t).toFixed(e),
        b: (t) => Math.round(t).toString(2),
        c: (t) => t + '',
        d: function (t) {
          return Math.abs((t = Math.round(t))) >= 1e21
            ? t.toLocaleString('en').replace(/,/g, '')
            : t.toString(10);
        },
        e: (t, e) => t.toExponential(e),
        f: (t, e) => t.toFixed(e),
        g: (t, e) => t.toPrecision(e),
        o: (t) => Math.round(t).toString(8),
        p: (t, e) => It(100 * t, e),
        r: It,
        s: function (t, e) {
          var n = Ct(t, e);
          if (!n) return t + '';
          var r = n[0],
            i = n[1],
            o = i - (Pt = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
            a = r.length;
          return o === a
            ? r
            : o > a
            ? r + new Array(o - a + 1).join('0')
            : o > 0
            ? r.slice(0, o) + '.' + r.slice(o)
            : '0.' +
              new Array(1 - o).join('0') +
              Ct(t, Math.max(0, e + o - 1))[0];
        },
        X: (t) => Math.round(t).toString(16).toUpperCase(),
        x: (t) => Math.round(t).toString(16)
      };
      function Nt(t) {
        return t;
      }
      var Bt,
        Rt,
        Lt,
        Ft = Array.prototype.map,
        zt = [
          'y',
          'z',
          'a',
          'f',
          'p',
          'n',
          '\xb5',
          'm',
          '',
          'k',
          'M',
          'G',
          'T',
          'P',
          'E',
          'Z',
          'Y'
        ];
      function Ut(t) {
        var e,
          n,
          r =
            void 0 === t.grouping || void 0 === t.thousands
              ? Nt
              : ((e = Ft.call(t.grouping, Number)),
                (n = t.thousands + ''),
                function (t, r) {
                  for (
                    var i = t.length, o = [], a = 0, c = e[0], u = 0;
                    i > 0 &&
                    c > 0 &&
                    (u + c + 1 > r && (c = Math.max(1, r - u)),
                    o.push(t.substring((i -= c), i + c)),
                    !((u += c + 1) > r));

                  )
                    c = e[(a = (a + 1) % e.length)];
                  return o.reverse().join(n);
                }),
          i = void 0 === t.currency ? '' : t.currency[0] + '',
          o = void 0 === t.currency ? '' : t.currency[1] + '',
          a = void 0 === t.decimal ? '.' : t.decimal + '',
          c =
            void 0 === t.numerals
              ? Nt
              : (function (t) {
                  return function (e) {
                    return e.replace(/[0-9]/g, function (e) {
                      return t[+e];
                    });
                  };
                })(Ft.call(t.numerals, String)),
          u = void 0 === t.percent ? '%' : t.percent + '',
          l = void 0 === t.minus ? '\u2212' : t.minus + '',
          s = void 0 === t.nan ? 'NaN' : t.nan + '';
        function f(t) {
          var e = (t = Mt(t)).fill,
            n = t.align,
            f = t.sign,
            p = t.symbol,
            h = t.zero,
            d = t.width,
            y = t.comma,
            v = t.precision,
            m = t.trim,
            g = t.type;
          'n' === g
            ? ((y = !0), (g = 'g'))
            : Dt[g] || (void 0 === v && (v = 12), (m = !0), (g = 'g')),
            (h || ('0' === e && '=' === n)) && ((h = !0), (e = '0'), (n = '='));
          var b =
              '$' === p
                ? i
                : '#' === p && /[boxX]/.test(g)
                ? '0' + g.toLowerCase()
                : '',
            x = '$' === p ? o : /[%p]/.test(g) ? u : '',
            w = Dt[g],
            O = /[defgprs%]/.test(g);
          function A(t) {
            var i,
              o,
              u,
              p = b,
              A = x;
            if ('c' === g) (A = w(t) + A), (t = '');
            else {
              var S = (t = +t) < 0 || 1 / t < 0;
              if (
                ((t = isNaN(t) ? s : w(Math.abs(t), v)),
                m &&
                  (t = (function (t) {
                    t: for (var e, n = t.length, r = 1, i = -1; r < n; ++r)
                      switch (t[r]) {
                        case '.':
                          i = e = r;
                          break;
                        case '0':
                          0 === i && (i = r), (e = r);
                          break;
                        default:
                          if (!+t[r]) break t;
                          i > 0 && (i = 0);
                      }
                    return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t;
                  })(t)),
                S && 0 === +t && '+' !== f && (S = !1),
                (p =
                  (S ? ('(' === f ? f : l) : '-' === f || '(' === f ? '' : f) +
                  p),
                (A =
                  ('s' === g ? zt[8 + Pt / 3] : '') +
                  A +
                  (S && '(' === f ? ')' : '')),
                O)
              )
                for (i = -1, o = t.length; ++i < o; )
                  if (48 > (u = t.charCodeAt(i)) || u > 57) {
                    (A = (46 === u ? a + t.slice(i + 1) : t.slice(i)) + A),
                      (t = t.slice(0, i));
                    break;
                  }
            }
            y && !h && (t = r(t, 1 / 0));
            var j = p.length + t.length + A.length,
              P = j < d ? new Array(d - j + 1).join(e) : '';
            switch (
              (y &&
                h &&
                ((t = r(P + t, P.length ? d - A.length : 1 / 0)), (P = '')),
              n)
            ) {
              case '<':
                t = p + t + A + P;
                break;
              case '=':
                t = p + P + t + A;
                break;
              case '^':
                t = P.slice(0, (j = P.length >> 1)) + p + t + A + P.slice(j);
                break;
              default:
                t = P + p + t + A;
            }
            return c(t);
          }
          return (
            (v =
              void 0 === v
                ? 6
                : /[gprs]/.test(g)
                ? Math.max(1, Math.min(21, v))
                : Math.max(0, Math.min(20, v))),
            (A.toString = function () {
              return t + '';
            }),
            A
          );
        }
        return {
          format: f,
          formatPrefix: function (t, e) {
            var n = f((((t = Mt(t)).type = 'f'), t)),
              r = 3 * Math.max(-8, Math.min(8, Math.floor(_t(e) / 3))),
              i = Math.pow(10, -r),
              o = zt[8 + r / 3];
            return function (t) {
              return n(i * t) + o;
            };
          }
        };
      }
      function Wt(t, e, n, r) {
        var i,
          o = f(t, e, n);
        switch ((r = Mt(null == r ? ',f' : r)).type) {
          case 's':
            var a = Math.max(Math.abs(t), Math.abs(e));
            return (
              null != r.precision ||
                isNaN(
                  (i = (function (t, e) {
                    return Math.max(
                      0,
                      3 * Math.max(-8, Math.min(8, Math.floor(_t(e) / 3))) -
                        _t(Math.abs(t))
                    );
                  })(o, a))
                ) ||
                (r.precision = i),
              Lt(r, a)
            );
          case '':
          case 'e':
          case 'g':
          case 'p':
          case 'r':
            null != r.precision ||
              isNaN(
                (i = (function (t, e) {
                  return (
                    (t = Math.abs(t)),
                    (e = Math.abs(e) - t),
                    Math.max(0, _t(e) - _t(t)) + 1
                  );
                })(o, Math.max(Math.abs(t), Math.abs(e))))
              ) ||
              (r.precision = i - ('e' === r.type));
            break;
          case 'f':
          case '%':
            null != r.precision ||
              isNaN(
                (i = (function (t) {
                  return Math.max(0, -_t(Math.abs(t)));
                })(o))
              ) ||
              (r.precision = i - 2 * ('%' === r.type));
        }
        return Rt(r);
      }
      function Xt(t) {
        var e = t.domain;
        return (
          (t.ticks = function (t) {
            var n = e();
            return l(n[0], n[n.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, n) {
            var r = e();
            return Wt(r[0], r[r.length - 1], null == t ? 10 : t, n);
          }),
          (t.nice = function (n) {
            null == n && (n = 10);
            var r,
              i,
              o = e(),
              a = 0,
              c = o.length - 1,
              u = o[a],
              l = o[c],
              f = 10;
            for (
              l < u && ((i = u), (u = l), (l = i), (i = a), (a = c), (c = i));
              f-- > 0;

            ) {
              if ((i = s(u, l, n)) === r) return (o[a] = u), (o[c] = l), e(o);
              if (i > 0)
                (u = Math.floor(u / i) * i), (l = Math.ceil(l / i) * i);
              else {
                if (!(i < 0)) break;
                (u = Math.ceil(u * i) / i), (l = Math.floor(l * i) / i);
              }
              r = i;
            }
            return t;
          }),
          t
        );
      }
      function qt() {
        var t = jt();
        return (
          (t.copy = function () {
            return At(t, qt());
          }),
          Et.C.apply(t, arguments),
          Xt(t)
        );
      }
      function Kt(t) {
        var e;
        function n(t) {
          return null == t || isNaN((t = +t)) ? e : t;
        }
        return (
          (n.invert = n),
          (n.domain = n.range =
            function (e) {
              return arguments.length
                ? ((t = Array.from(e, mt)), n)
                : t.slice();
            }),
          (n.unknown = function (t) {
            return arguments.length ? ((e = t), n) : e;
          }),
          (n.copy = function () {
            return Kt(t).unknown(e);
          }),
          (t = arguments.length ? Array.from(t, mt) : [0, 1]),
          Xt(n)
        );
      }
      function Ht(t, e) {
        var n,
          r = 0,
          i = (t = t.slice()).length - 1,
          o = t[r],
          a = t[i];
        return (
          a < o && ((n = r), (r = i), (i = n), (n = o), (o = a), (a = n)),
          (t[r] = e.floor(o)),
          (t[i] = e.ceil(a)),
          t
        );
      }
      function Vt(t) {
        return Math.log(t);
      }
      function Gt(t) {
        return Math.exp(t);
      }
      function Yt(t) {
        return -Math.log(-t);
      }
      function Jt(t) {
        return -Math.exp(-t);
      }
      function Zt(t) {
        return isFinite(t) ? +('1e' + t) : t < 0 ? 0 : t;
      }
      function $t(t) {
        return (e, n) => -t(-e, n);
      }
      function Qt(t) {
        const e = t(Vt, Gt),
          n = e.domain;
        let r,
          i,
          o = 10;
        function a() {
          return (
            (r = (function (t) {
              return t === Math.E
                ? Math.log
                : (10 === t && Math.log10) ||
                    (2 === t && Math.log2) ||
                    ((t = Math.log(t)), (e) => Math.log(e) / t);
            })(o)),
            (i = (function (t) {
              return 10 === t
                ? Zt
                : t === Math.E
                ? Math.exp
                : (e) => Math.pow(t, e);
            })(o)),
            n()[0] < 0 ? ((r = $t(r)), (i = $t(i)), t(Yt, Jt)) : t(Vt, Gt),
            e
          );
        }
        return (
          (e.base = function (t) {
            return arguments.length ? ((o = +t), a()) : o;
          }),
          (e.domain = function (t) {
            return arguments.length ? (n(t), a()) : n();
          }),
          (e.ticks = (t) => {
            const e = n();
            let a = e[0],
              c = e[e.length - 1];
            const u = c < a;
            u && ([a, c] = [c, a]);
            let s,
              f,
              p = r(a),
              h = r(c);
            const d = null == t ? 10 : +t;
            let y = [];
            if (!(o % 1) && h - p < d) {
              if (((p = Math.floor(p)), (h = Math.ceil(h)), a > 0)) {
                for (; p <= h; ++p)
                  for (s = 1; s < o; ++s)
                    if (((f = p < 0 ? s / i(-p) : s * i(p)), !(f < a))) {
                      if (f > c) break;
                      y.push(f);
                    }
              } else
                for (; p <= h; ++p)
                  for (s = o - 1; s >= 1; --s)
                    if (((f = p > 0 ? s / i(-p) : s * i(p)), !(f < a))) {
                      if (f > c) break;
                      y.push(f);
                    }
              2 * y.length < d && (y = l(a, c, d));
            } else y = l(p, h, Math.min(h - p, d)).map(i);
            return u ? y.reverse() : y;
          }),
          (e.tickFormat = (t, n) => {
            if (
              (null == t && (t = 10),
              null == n && (n = 10 === o ? 's' : ','),
              'function' !== typeof n &&
                (o % 1 || null != (n = Mt(n)).precision || (n.trim = !0),
                (n = Rt(n))),
              t === 1 / 0)
            )
              return n;
            const a = Math.max(1, (o * t) / e.ticks().length);
            return (t) => {
              let e = t / i(Math.round(r(t)));
              return e * o < o - 0.5 && (e *= o), e <= a ? n(t) : '';
            };
          }),
          (e.nice = () =>
            n(
              Ht(n(), {
                floor: (t) => i(Math.floor(r(t))),
                ceil: (t) => i(Math.ceil(r(t)))
              })
            )),
          e
        );
      }
      function te() {
        const t = Qt(St()).domain([1, 10]);
        return (
          (t.copy = () => At(t, te()).base(t.base())),
          Et.C.apply(t, arguments),
          t
        );
      }
      function ee(t) {
        return function (e) {
          return Math.sign(e) * Math.log1p(Math.abs(e / t));
        };
      }
      function ne(t) {
        return function (e) {
          return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
        };
      }
      function re(t) {
        var e = 1,
          n = t(ee(e), ne(e));
        return (
          (n.constant = function (n) {
            return arguments.length ? t(ee((e = +n)), ne(e)) : e;
          }),
          Xt(n)
        );
      }
      function ie() {
        var t = re(St());
        return (
          (t.copy = function () {
            return At(t, ie()).constant(t.constant());
          }),
          Et.C.apply(t, arguments)
        );
      }
      (Bt = Ut({ thousands: ',', grouping: [3], currency: ['$', ''] })),
        (Rt = Bt.format),
        (Lt = Bt.formatPrefix);
      var oe = n(35186);
      function ae(t) {
        return function (e) {
          return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
        };
      }
      function ce(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
      }
      function ue(t) {
        return t < 0 ? -t * t : t * t;
      }
      function le(t) {
        var e = t(bt, bt),
          n = 1;
        return (
          (e.exponent = function (e) {
            return arguments.length
              ? 1 === (n = +e)
                ? t(bt, bt)
                : 0.5 === n
                ? t(ce, ue)
                : t(ae(n), ae(1 / n))
              : n;
          }),
          Xt(e)
        );
      }
      function se() {
        var t = le(St());
        return (
          (t.copy = function () {
            return At(t, se()).exponent(t.exponent());
          }),
          Et.C.apply(t, arguments),
          t
        );
      }
      function fe() {
        return se.apply(null, arguments).exponent(0.5);
      }
      function pe(t) {
        return Math.sign(t) * t * t;
      }
      function he() {
        var t,
          e = jt(),
          n = [0, 1],
          r = !1;
        function i(n) {
          var i = (function (t) {
            return Math.sign(t) * Math.sqrt(Math.abs(t));
          })(e(n));
          return isNaN(i) ? t : r ? Math.round(i) : i;
        }
        return (
          (i.invert = function (t) {
            return e.invert(pe(t));
          }),
          (i.domain = function (t) {
            return arguments.length ? (e.domain(t), i) : e.domain();
          }),
          (i.range = function (t) {
            return arguments.length
              ? (e.range((n = Array.from(t, mt)).map(pe)), i)
              : n.slice();
          }),
          (i.rangeRound = function (t) {
            return i.range(t).round(!0);
          }),
          (i.round = function (t) {
            return arguments.length ? ((r = !!t), i) : r;
          }),
          (i.clamp = function (t) {
            return arguments.length ? (e.clamp(t), i) : e.clamp();
          }),
          (i.unknown = function (e) {
            return arguments.length ? ((t = e), i) : t;
          }),
          (i.copy = function () {
            return he(e.domain(), n).round(r).clamp(e.clamp()).unknown(t);
          }),
          Et.C.apply(i, arguments),
          Xt(i)
        );
      }
      function de(t, e) {
        let n;
        if (void 0 === e)
          for (const r of t)
            null != r && (n < r || (void 0 === n && r >= r)) && (n = r);
        else {
          let r = -1;
          for (let i of t)
            null != (i = e(i, ++r, t)) &&
              (n < i || (void 0 === n && i >= i)) &&
              (n = i);
        }
        return n;
      }
      function ye(t, e) {
        let n;
        if (void 0 === e)
          for (const r of t)
            null != r && (n > r || (void 0 === n && r >= r)) && (n = r);
        else {
          let r = -1;
          for (let i of t)
            null != (i = e(i, ++r, t)) &&
              (n > i || (void 0 === n && i >= i)) &&
              (n = i);
        }
        return n;
      }
      function ve() {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
        if (t === p) return me;
        if ('function' !== typeof t)
          throw new TypeError('compare is not a function');
        return (e, n) => {
          const r = t(e, n);
          return r || 0 === r ? r : (0 === t(n, n)) - (0 === t(e, e));
        };
      }
      function me(t, e) {
        return (
          (null == t || !(t >= t)) - (null == e || !(e >= e)) ||
          (t < e ? -1 : t > e ? 1 : 0)
        );
      }
      function ge(t, e) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 1 / 0,
          i = arguments.length > 4 ? arguments[4] : void 0;
        if (
          ((e = Math.floor(e)),
          (n = Math.floor(Math.max(0, n))),
          (r = Math.floor(Math.min(t.length - 1, r))),
          !(n <= e && e <= r))
        )
          return t;
        for (i = void 0 === i ? me : ve(i); r > n; ) {
          if (r - n > 600) {
            const o = r - n + 1,
              a = e - n + 1,
              c = Math.log(o),
              u = 0.5 * Math.exp((2 * c) / 3),
              l =
                0.5 *
                Math.sqrt((c * u * (o - u)) / o) *
                (a - o / 2 < 0 ? -1 : 1);
            ge(
              t,
              e,
              Math.max(n, Math.floor(e - (a * u) / o + l)),
              Math.min(r, Math.floor(e + ((o - a) * u) / o + l)),
              i
            );
          }
          const o = t[e];
          let a = n,
            c = r;
          for (be(t, n, e), i(t[r], o) > 0 && be(t, n, r); a < c; ) {
            for (be(t, a, c), ++a, --c; i(t[a], o) < 0; ) ++a;
            for (; i(t[c], o) > 0; ) --c;
          }
          0 === i(t[n], o) ? be(t, n, c) : (++c, be(t, c, r)),
            c <= e && (n = c + 1),
            e <= c && (r = c - 1);
        }
        return t;
      }
      function be(t, e, n) {
        const r = t[e];
        (t[e] = t[n]), (t[n] = r);
      }
      function xe(t, e, n) {
        if (
          ((t = Float64Array.from(
            (function* (t, e) {
              if (void 0 === e)
                for (let n of t) null != n && (n = +n) >= n && (yield n);
              else {
                let n = -1;
                for (let r of t)
                  null != (r = e(r, ++n, t)) && (r = +r) >= r && (yield r);
              }
            })(t, n)
          )),
          (r = t.length) && !isNaN((e = +e)))
        ) {
          if (e <= 0 || r < 2) return ye(t);
          if (e >= 1) return de(t);
          var r,
            i = (r - 1) * e,
            o = Math.floor(i),
            a = de(ge(t, o).subarray(0, o + 1));
          return a + (ye(t.subarray(o + 1)) - a) * (i - o);
        }
      }
      function we(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v;
        if ((r = t.length) && !isNaN((e = +e))) {
          if (e <= 0 || r < 2) return +n(t[0], 0, t);
          if (e >= 1) return +n(t[r - 1], r - 1, t);
          var r,
            i = (r - 1) * e,
            o = Math.floor(i),
            a = +n(t[o], o, t);
          return a + (+n(t[o + 1], o + 1, t) - a) * (i - o);
        }
      }
      function Oe() {
        var t,
          e = [],
          n = [],
          r = [];
        function i() {
          var t = 0,
            i = Math.max(1, n.length);
          for (r = new Array(i - 1); ++t < i; ) r[t - 1] = we(e, t / i);
          return o;
        }
        function o(e) {
          return null == e || isNaN((e = +e)) ? t : n[b(r, e)];
        }
        return (
          (o.invertExtent = function (t) {
            var i = n.indexOf(t);
            return i < 0
              ? [NaN, NaN]
              : [
                  i > 0 ? r[i - 1] : e[0],
                  i < r.length ? r[i] : e[e.length - 1]
                ];
          }),
          (o.domain = function (t) {
            if (!arguments.length) return e.slice();
            e = [];
            for (let n of t) null == n || isNaN((n = +n)) || e.push(n);
            return e.sort(p), i();
          }),
          (o.range = function (t) {
            return arguments.length ? ((n = Array.from(t)), i()) : n.slice();
          }),
          (o.unknown = function (e) {
            return arguments.length ? ((t = e), o) : t;
          }),
          (o.quantiles = function () {
            return r.slice();
          }),
          (o.copy = function () {
            return Oe().domain(e).range(n).unknown(t);
          }),
          Et.C.apply(o, arguments)
        );
      }
      function Ae() {
        var t,
          e = 0,
          n = 1,
          r = 1,
          i = [0.5],
          o = [0, 1];
        function a(e) {
          return null != e && e <= e ? o[b(i, e, 0, r)] : t;
        }
        function c() {
          var t = -1;
          for (i = new Array(r); ++t < r; )
            i[t] = ((t + 1) * n - (t - r) * e) / (r + 1);
          return a;
        }
        return (
          (a.domain = function (t) {
            return arguments.length
              ? (([e, n] = t), (e = +e), (n = +n), c())
              : [e, n];
          }),
          (a.range = function (t) {
            return arguments.length
              ? ((r = (o = Array.from(t)).length - 1), c())
              : o.slice();
          }),
          (a.invertExtent = function (t) {
            var a = o.indexOf(t);
            return a < 0
              ? [NaN, NaN]
              : a < 1
              ? [e, i[0]]
              : a >= r
              ? [i[r - 1], n]
              : [i[a - 1], i[a]];
          }),
          (a.unknown = function (e) {
            return arguments.length ? ((t = e), a) : a;
          }),
          (a.thresholds = function () {
            return i.slice();
          }),
          (a.copy = function () {
            return Ae().domain([e, n]).range(o).unknown(t);
          }),
          Et.C.apply(Xt(a), arguments)
        );
      }
      function Se() {
        var t,
          e = [0.5],
          n = [0, 1],
          r = 1;
        function i(i) {
          return null != i && i <= i ? n[b(e, i, 0, r)] : t;
        }
        return (
          (i.domain = function (t) {
            return arguments.length
              ? ((e = Array.from(t)), (r = Math.min(e.length, n.length - 1)), i)
              : e.slice();
          }),
          (i.range = function (t) {
            return arguments.length
              ? ((n = Array.from(t)), (r = Math.min(e.length, n.length - 1)), i)
              : n.slice();
          }),
          (i.invertExtent = function (t) {
            var r = n.indexOf(t);
            return [e[r - 1], e[r]];
          }),
          (i.unknown = function (e) {
            return arguments.length ? ((t = e), i) : t;
          }),
          (i.copy = function () {
            return Se().domain(e).range(n).unknown(t);
          }),
          Et.C.apply(i, arguments)
        );
      }
      const je = 1e3,
        Pe = 6e4,
        Ee = 36e5,
        ke = 864e5,
        Me = 6048e5,
        Te = 2592e6,
        Ce = 31536e6,
        _e = new Date(),
        Ie = new Date();
      function De(t, e, n, r) {
        function i(e) {
          return t((e = 0 === arguments.length ? new Date() : new Date(+e))), e;
        }
        return (
          (i.floor = (e) => (t((e = new Date(+e))), e)),
          (i.ceil = (n) => (t((n = new Date(n - 1))), e(n, 1), t(n), n)),
          (i.round = (t) => {
            const e = i(t),
              n = i.ceil(t);
            return t - e < n - t ? e : n;
          }),
          (i.offset = (t, n) => (
            e((t = new Date(+t)), null == n ? 1 : Math.floor(n)), t
          )),
          (i.range = (n, r, o) => {
            const a = [];
            if (
              ((n = i.ceil(n)),
              (o = null == o ? 1 : Math.floor(o)),
              !(n < r) || !(o > 0))
            )
              return a;
            let c;
            do {
              a.push((c = new Date(+n))), e(n, o), t(n);
            } while (c < n && n < r);
            return a;
          }),
          (i.filter = (n) =>
            De(
              (e) => {
                if (e >= e) for (; t(e), !n(e); ) e.setTime(e - 1);
              },
              (t, r) => {
                if (t >= t)
                  if (r < 0) for (; ++r <= 0; ) for (; e(t, -1), !n(t); );
                  else for (; --r >= 0; ) for (; e(t, 1), !n(t); );
              }
            )),
          n &&
            ((i.count = (e, r) => (
              _e.setTime(+e),
              Ie.setTime(+r),
              t(_e),
              t(Ie),
              Math.floor(n(_e, Ie))
            )),
            (i.every = (t) => (
              (t = Math.floor(t)),
              isFinite(t) && t > 0
                ? t > 1
                  ? i.filter(
                      r ? (e) => r(e) % t === 0 : (e) => i.count(0, e) % t === 0
                    )
                  : i
                : null
            ))),
          i
        );
      }
      const Ne = De(
        () => {},
        (t, e) => {
          t.setTime(+t + e);
        },
        (t, e) => e - t
      );
      Ne.every = (t) => (
        (t = Math.floor(t)),
        isFinite(t) && t > 0
          ? t > 1
            ? De(
                (e) => {
                  e.setTime(Math.floor(e / t) * t);
                },
                (e, n) => {
                  e.setTime(+e + n * t);
                },
                (e, n) => (n - e) / t
              )
            : Ne
          : null
      );
      Ne.range;
      const Be = De(
          (t) => {
            t.setTime(t - t.getMilliseconds());
          },
          (t, e) => {
            t.setTime(+t + e * je);
          },
          (t, e) => (e - t) / je,
          (t) => t.getUTCSeconds()
        ),
        Re =
          (Be.range,
          De(
            (t) => {
              t.setTime(t - t.getMilliseconds() - t.getSeconds() * je);
            },
            (t, e) => {
              t.setTime(+t + e * Pe);
            },
            (t, e) => (e - t) / Pe,
            (t) => t.getMinutes()
          )),
        Le =
          (Re.range,
          De(
            (t) => {
              t.setUTCSeconds(0, 0);
            },
            (t, e) => {
              t.setTime(+t + e * Pe);
            },
            (t, e) => (e - t) / Pe,
            (t) => t.getUTCMinutes()
          )),
        Fe =
          (Le.range,
          De(
            (t) => {
              t.setTime(
                t -
                  t.getMilliseconds() -
                  t.getSeconds() * je -
                  t.getMinutes() * Pe
              );
            },
            (t, e) => {
              t.setTime(+t + e * Ee);
            },
            (t, e) => (e - t) / Ee,
            (t) => t.getHours()
          )),
        ze =
          (Fe.range,
          De(
            (t) => {
              t.setUTCMinutes(0, 0, 0);
            },
            (t, e) => {
              t.setTime(+t + e * Ee);
            },
            (t, e) => (e - t) / Ee,
            (t) => t.getUTCHours()
          )),
        Ue =
          (ze.range,
          De(
            (t) => t.setHours(0, 0, 0, 0),
            (t, e) => t.setDate(t.getDate() + e),
            (t, e) =>
              (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Pe) /
              ke,
            (t) => t.getDate() - 1
          )),
        We =
          (Ue.range,
          De(
            (t) => {
              t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCDate(t.getUTCDate() + e);
            },
            (t, e) => (e - t) / ke,
            (t) => t.getUTCDate() - 1
          )),
        Xe =
          (We.range,
          De(
            (t) => {
              t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCDate(t.getUTCDate() + e);
            },
            (t, e) => (e - t) / ke,
            (t) => Math.floor(t / ke)
          ));
      Xe.range;
      function qe(t) {
        return De(
          (e) => {
            e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
              e.setHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setDate(t.getDate() + 7 * e);
          },
          (t, e) =>
            (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Pe) / Me
        );
      }
      const Ke = qe(0),
        He = qe(1),
        Ve = qe(2),
        Ge = qe(3),
        Ye = qe(4),
        Je = qe(5),
        Ze = qe(6);
      Ke.range, He.range, Ve.range, Ge.range, Ye.range, Je.range, Ze.range;
      function $e(t) {
        return De(
          (e) => {
            e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
              e.setUTCHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setUTCDate(t.getUTCDate() + 7 * e);
          },
          (t, e) => (e - t) / Me
        );
      }
      const Qe = $e(0),
        tn = $e(1),
        en = $e(2),
        nn = $e(3),
        rn = $e(4),
        on = $e(5),
        an = $e(6),
        cn =
          (Qe.range,
          tn.range,
          en.range,
          nn.range,
          rn.range,
          on.range,
          an.range,
          De(
            (t) => {
              t.setDate(1), t.setHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setMonth(t.getMonth() + e);
            },
            (t, e) =>
              e.getMonth() -
              t.getMonth() +
              12 * (e.getFullYear() - t.getFullYear()),
            (t) => t.getMonth()
          )),
        un =
          (cn.range,
          De(
            (t) => {
              t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCMonth(t.getUTCMonth() + e);
            },
            (t, e) =>
              e.getUTCMonth() -
              t.getUTCMonth() +
              12 * (e.getUTCFullYear() - t.getUTCFullYear()),
            (t) => t.getUTCMonth()
          )),
        ln =
          (un.range,
          De(
            (t) => {
              t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setFullYear(t.getFullYear() + e);
            },
            (t, e) => e.getFullYear() - t.getFullYear(),
            (t) => t.getFullYear()
          ));
      ln.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? De(
              (e) => {
                e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                  e.setMonth(0, 1),
                  e.setHours(0, 0, 0, 0);
              },
              (e, n) => {
                e.setFullYear(e.getFullYear() + n * t);
              }
            )
          : null;
      ln.range;
      const sn = De(
        (t) => {
          t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCFullYear(t.getUTCFullYear() + e);
        },
        (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
        (t) => t.getUTCFullYear()
      );
      sn.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? De(
              (e) => {
                e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                  e.setUTCMonth(0, 1),
                  e.setUTCHours(0, 0, 0, 0);
              },
              (e, n) => {
                e.setUTCFullYear(e.getUTCFullYear() + n * t);
              }
            )
          : null;
      sn.range;
      function fn(t, e, n, r, i, o) {
        const a = [
          [Be, 1, je],
          [Be, 5, 5e3],
          [Be, 15, 15e3],
          [Be, 30, 3e4],
          [o, 1, Pe],
          [o, 5, 3e5],
          [o, 15, 9e5],
          [o, 30, 18e5],
          [i, 1, Ee],
          [i, 3, 108e5],
          [i, 6, 216e5],
          [i, 12, 432e5],
          [r, 1, ke],
          [r, 2, 1728e5],
          [n, 1, Me],
          [e, 1, Te],
          [e, 3, 7776e6],
          [t, 1, Ce]
        ];
        function c(e, n, r) {
          const i = Math.abs(n - e) / r,
            o = d((t) => {
              let [, , e] = t;
              return e;
            }).right(a, i);
          if (o === a.length) return t.every(f(e / Ce, n / Ce, r));
          if (0 === o) return Ne.every(Math.max(f(e, n, r), 1));
          const [c, u] = a[i / a[o - 1][2] < a[o][2] / i ? o - 1 : o];
          return c.every(u);
        }
        return [
          function (t, e, n) {
            const r = e < t;
            r && ([t, e] = [e, t]);
            const i = n && 'function' === typeof n.range ? n : c(t, e, n),
              o = i ? i.range(t, +e + 1) : [];
            return r ? o.reverse() : o;
          },
          c
        ];
      }
      const [pn, hn] = fn(sn, un, Qe, Xe, ze, Le),
        [dn, yn] = fn(ln, cn, Ke, Ue, Fe, Re);
      function vn(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          return e.setFullYear(t.y), e;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function mn(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          return e.setUTCFullYear(t.y), e;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function gn(t, e, n) {
        return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
      }
      var bn,
        xn,
        wn,
        On = { '-': '', _: ' ', 0: '0' },
        An = /^\s*\d+/,
        Sn = /^%/,
        jn = /[\\^$*+?|[\]().{}]/g;
      function Pn(t, e, n) {
        var r = t < 0 ? '-' : '',
          i = (r ? -t : t) + '',
          o = i.length;
        return r + (o < n ? new Array(n - o + 1).join(e) + i : i);
      }
      function En(t) {
        return t.replace(jn, '\\$&');
      }
      function kn(t) {
        return new RegExp('^(?:' + t.map(En).join('|') + ')', 'i');
      }
      function Mn(t) {
        return new Map(t.map((t, e) => [t.toLowerCase(), e]));
      }
      function Tn(t, e, n) {
        var r = An.exec(e.slice(n, n + 1));
        return r ? ((t.w = +r[0]), n + r[0].length) : -1;
      }
      function Cn(t, e, n) {
        var r = An.exec(e.slice(n, n + 1));
        return r ? ((t.u = +r[0]), n + r[0].length) : -1;
      }
      function _n(t, e, n) {
        var r = An.exec(e.slice(n, n + 2));
        return r ? ((t.U = +r[0]), n + r[0].length) : -1;
      }
      function In(t, e, n) {
        var r = An.exec(e.slice(n, n + 2));
        return r ? ((t.V = +r[0]), n + r[0].length) : -1;
      }
      function Dn(t, e, n) {
        var r = An.exec(e.slice(n, n + 2));
        return r ? ((t.W = +r[0]), n + r[0].length) : -1;
      }
      function Nn(t, e, n) {
        var r = An.exec(e.slice(n, n + 4));
        return r ? ((t.y = +r[0]), n + r[0].length) : -1;
      }
      function Bn(t, e, n) {
        var r = An.exec(e.slice(n, n + 2));
        return r
          ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length)
          : -1;
      }
      function Rn(t, e, n) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
        return r
          ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || '00'))), n + r[0].length)
          : -1;
      }
      function Ln(t, e, n) {
        var r = An.exec(e.slice(n, n + 1));
        return r ? ((t.q = 3 * r[0] - 3), n + r[0].length) : -1;
      }
      function Fn(t, e, n) {
        var r = An.exec(e.slice(n, n + 2));
        return r ? ((t.m = r[0] - 1), n + r[0].length) : -1;
      }
      function zn(t, e, n) {
        var r = An.exec(e.slice(n, n + 2));
        return r ? ((t.d = +r[0]), n + r[0].length) : -1;
      }
      function Un(t, e, n) {
        var r = An.exec(e.slice(n, n + 3));
        return r ? ((t.m = 0), (t.d = +r[0]), n + r[0].length) : -1;
      }
      function Wn(t, e, n) {
        var r = An.exec(e.slice(n, n + 2));
        return r ? ((t.H = +r[0]), n + r[0].length) : -1;
      }
      function Xn(t, e, n) {
        var r = An.exec(e.slice(n, n + 2));
        return r ? ((t.M = +r[0]), n + r[0].length) : -1;
      }
      function qn(t, e, n) {
        var r = An.exec(e.slice(n, n + 2));
        return r ? ((t.S = +r[0]), n + r[0].length) : -1;
      }
      function Kn(t, e, n) {
        var r = An.exec(e.slice(n, n + 3));
        return r ? ((t.L = +r[0]), n + r[0].length) : -1;
      }
      function Hn(t, e, n) {
        var r = An.exec(e.slice(n, n + 6));
        return r ? ((t.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
      }
      function Vn(t, e, n) {
        var r = Sn.exec(e.slice(n, n + 1));
        return r ? n + r[0].length : -1;
      }
      function Gn(t, e, n) {
        var r = An.exec(e.slice(n));
        return r ? ((t.Q = +r[0]), n + r[0].length) : -1;
      }
      function Yn(t, e, n) {
        var r = An.exec(e.slice(n));
        return r ? ((t.s = +r[0]), n + r[0].length) : -1;
      }
      function Jn(t, e) {
        return Pn(t.getDate(), e, 2);
      }
      function Zn(t, e) {
        return Pn(t.getHours(), e, 2);
      }
      function $n(t, e) {
        return Pn(t.getHours() % 12 || 12, e, 2);
      }
      function Qn(t, e) {
        return Pn(1 + Ue.count(ln(t), t), e, 3);
      }
      function tr(t, e) {
        return Pn(t.getMilliseconds(), e, 3);
      }
      function er(t, e) {
        return tr(t, e) + '000';
      }
      function nr(t, e) {
        return Pn(t.getMonth() + 1, e, 2);
      }
      function rr(t, e) {
        return Pn(t.getMinutes(), e, 2);
      }
      function ir(t, e) {
        return Pn(t.getSeconds(), e, 2);
      }
      function or(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e;
      }
      function ar(t, e) {
        return Pn(Ke.count(ln(t) - 1, t), e, 2);
      }
      function cr(t) {
        var e = t.getDay();
        return e >= 4 || 0 === e ? Ye(t) : Ye.ceil(t);
      }
      function ur(t, e) {
        return (
          (t = cr(t)), Pn(Ye.count(ln(t), t) + (4 === ln(t).getDay()), e, 2)
        );
      }
      function lr(t) {
        return t.getDay();
      }
      function sr(t, e) {
        return Pn(He.count(ln(t) - 1, t), e, 2);
      }
      function fr(t, e) {
        return Pn(t.getFullYear() % 100, e, 2);
      }
      function pr(t, e) {
        return Pn((t = cr(t)).getFullYear() % 100, e, 2);
      }
      function hr(t, e) {
        return Pn(t.getFullYear() % 1e4, e, 4);
      }
      function dr(t, e) {
        var n = t.getDay();
        return Pn(
          (t = n >= 4 || 0 === n ? Ye(t) : Ye.ceil(t)).getFullYear() % 1e4,
          e,
          4
        );
      }
      function yr(t) {
        var e = t.getTimezoneOffset();
        return (
          (e > 0 ? '-' : ((e *= -1), '+')) +
          Pn((e / 60) | 0, '0', 2) +
          Pn(e % 60, '0', 2)
        );
      }
      function vr(t, e) {
        return Pn(t.getUTCDate(), e, 2);
      }
      function mr(t, e) {
        return Pn(t.getUTCHours(), e, 2);
      }
      function gr(t, e) {
        return Pn(t.getUTCHours() % 12 || 12, e, 2);
      }
      function br(t, e) {
        return Pn(1 + We.count(sn(t), t), e, 3);
      }
      function xr(t, e) {
        return Pn(t.getUTCMilliseconds(), e, 3);
      }
      function wr(t, e) {
        return xr(t, e) + '000';
      }
      function Or(t, e) {
        return Pn(t.getUTCMonth() + 1, e, 2);
      }
      function Ar(t, e) {
        return Pn(t.getUTCMinutes(), e, 2);
      }
      function Sr(t, e) {
        return Pn(t.getUTCSeconds(), e, 2);
      }
      function jr(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e;
      }
      function Pr(t, e) {
        return Pn(Qe.count(sn(t) - 1, t), e, 2);
      }
      function Er(t) {
        var e = t.getUTCDay();
        return e >= 4 || 0 === e ? rn(t) : rn.ceil(t);
      }
      function kr(t, e) {
        return (
          (t = Er(t)), Pn(rn.count(sn(t), t) + (4 === sn(t).getUTCDay()), e, 2)
        );
      }
      function Mr(t) {
        return t.getUTCDay();
      }
      function Tr(t, e) {
        return Pn(tn.count(sn(t) - 1, t), e, 2);
      }
      function Cr(t, e) {
        return Pn(t.getUTCFullYear() % 100, e, 2);
      }
      function _r(t, e) {
        return Pn((t = Er(t)).getUTCFullYear() % 100, e, 2);
      }
      function Ir(t, e) {
        return Pn(t.getUTCFullYear() % 1e4, e, 4);
      }
      function Dr(t, e) {
        var n = t.getUTCDay();
        return Pn(
          (t = n >= 4 || 0 === n ? rn(t) : rn.ceil(t)).getUTCFullYear() % 1e4,
          e,
          4
        );
      }
      function Nr() {
        return '+0000';
      }
      function Br() {
        return '%';
      }
      function Rr(t) {
        return +t;
      }
      function Lr(t) {
        return Math.floor(+t / 1e3);
      }
      function Fr(t) {
        return new Date(t);
      }
      function zr(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function Ur(t, e, n, r, i, o, a, c, u, l) {
        var s = jt(),
          f = s.invert,
          p = s.domain,
          h = l('.%L'),
          d = l(':%S'),
          y = l('%I:%M'),
          v = l('%I %p'),
          m = l('%a %d'),
          g = l('%b %d'),
          b = l('%B'),
          x = l('%Y');
        function w(t) {
          return (
            u(t) < t
              ? h
              : c(t) < t
              ? d
              : a(t) < t
              ? y
              : o(t) < t
              ? v
              : r(t) < t
              ? i(t) < t
                ? m
                : g
              : n(t) < t
              ? b
              : x
          )(t);
        }
        return (
          (s.invert = function (t) {
            return new Date(f(t));
          }),
          (s.domain = function (t) {
            return arguments.length ? p(Array.from(t, zr)) : p().map(Fr);
          }),
          (s.ticks = function (e) {
            var n = p();
            return t(n[0], n[n.length - 1], null == e ? 10 : e);
          }),
          (s.tickFormat = function (t, e) {
            return null == e ? w : l(e);
          }),
          (s.nice = function (t) {
            var n = p();
            return (
              (t && 'function' === typeof t.range) ||
                (t = e(n[0], n[n.length - 1], null == t ? 10 : t)),
              t ? p(Ht(n, t)) : s
            );
          }),
          (s.copy = function () {
            return At(s, Ur(t, e, n, r, i, o, a, c, u, l));
          }),
          s
        );
      }
      function Wr() {
        return Et.C.apply(
          Ur(dn, yn, ln, cn, Ke, Ue, Fe, Re, Be, xn).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2)
          ]),
          arguments
        );
      }
      function Xr() {
        return Et.C.apply(
          Ur(pn, hn, sn, un, Qe, We, ze, Le, Be, wn).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2)
          ]),
          arguments
        );
      }
      function qr() {
        var t,
          e,
          n,
          r,
          i,
          o = 0,
          a = 1,
          c = bt,
          u = !1;
        function l(e) {
          return null == e || isNaN((e = +e))
            ? i
            : c(
                0 === n
                  ? 0.5
                  : ((e = (r(e) - t) * n), u ? Math.max(0, Math.min(1, e)) : e)
              );
        }
        function s(t) {
          return function (e) {
            var n, r;
            return arguments.length
              ? (([n, r] = e), (c = t(n, r)), l)
              : [c(0), c(1)];
          };
        }
        return (
          (l.domain = function (i) {
            return arguments.length
              ? (([o, a] = i),
                (t = r((o = +o))),
                (e = r((a = +a))),
                (n = t === e ? 0 : 1 / (e - t)),
                l)
              : [o, a];
          }),
          (l.clamp = function (t) {
            return arguments.length ? ((u = !!t), l) : u;
          }),
          (l.interpolator = function (t) {
            return arguments.length ? ((c = t), l) : c;
          }),
          (l.range = s(yt)),
          (l.rangeRound = s(vt)),
          (l.unknown = function (t) {
            return arguments.length ? ((i = t), l) : i;
          }),
          function (i) {
            return (
              (r = i),
              (t = i(o)),
              (e = i(a)),
              (n = t === e ? 0 : 1 / (e - t)),
              l
            );
          }
        );
      }
      function Kr(t, e) {
        return e
          .domain(t.domain())
          .interpolator(t.interpolator())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function Hr() {
        var t = Xt(qr()(bt));
        return (
          (t.copy = function () {
            return Kr(t, Hr());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function Vr() {
        var t = Qt(qr()).domain([1, 10]);
        return (
          (t.copy = function () {
            return Kr(t, Vr()).base(t.base());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function Gr() {
        var t = re(qr());
        return (
          (t.copy = function () {
            return Kr(t, Gr()).constant(t.constant());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function Yr() {
        var t = le(qr());
        return (
          (t.copy = function () {
            return Kr(t, Yr()).exponent(t.exponent());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function Jr() {
        return Yr.apply(null, arguments).exponent(0.5);
      }
      function Zr() {
        var t = [],
          e = bt;
        function n(n) {
          if (null != n && !isNaN((n = +n)))
            return e((b(t, n, 1) - 1) / (t.length - 1));
        }
        return (
          (n.domain = function (e) {
            if (!arguments.length) return t.slice();
            t = [];
            for (let n of e) null == n || isNaN((n = +n)) || t.push(n);
            return t.sort(p), n;
          }),
          (n.interpolator = function (t) {
            return arguments.length ? ((e = t), n) : e;
          }),
          (n.range = function () {
            return t.map((n, r) => e(r / (t.length - 1)));
          }),
          (n.quantiles = function (e) {
            return Array.from({ length: e + 1 }, (n, r) => xe(t, r / e));
          }),
          (n.copy = function () {
            return Zr(e).domain(t);
          }),
          Et.K.apply(n, arguments)
        );
      }
      function $r() {
        var t,
          e,
          n,
          r,
          i,
          o,
          a,
          c = 0,
          u = 0.5,
          l = 1,
          s = 1,
          f = bt,
          p = !1;
        function h(t) {
          return isNaN((t = +t))
            ? a
            : ((t = 0.5 + ((t = +o(t)) - e) * (s * t < s * e ? r : i)),
              f(p ? Math.max(0, Math.min(1, t)) : t));
        }
        function d(t) {
          return function (e) {
            var n, r, i;
            return arguments.length
              ? (([n, r, i] = e),
                (f = (function (t, e) {
                  void 0 === e && ((e = t), (t = yt));
                  for (
                    var n = 0,
                      r = e.length - 1,
                      i = e[0],
                      o = new Array(r < 0 ? 0 : r);
                    n < r;

                  )
                    o[n] = t(i, (i = e[++n]));
                  return function (t) {
                    var e = Math.max(0, Math.min(r - 1, Math.floor((t *= r))));
                    return o[e](t - e);
                  };
                })(t, [n, r, i])),
                h)
              : [f(0), f(0.5), f(1)];
          };
        }
        return (
          (h.domain = function (a) {
            return arguments.length
              ? (([c, u, l] = a),
                (t = o((c = +c))),
                (e = o((u = +u))),
                (n = o((l = +l))),
                (r = t === e ? 0 : 0.5 / (e - t)),
                (i = e === n ? 0 : 0.5 / (n - e)),
                (s = e < t ? -1 : 1),
                h)
              : [c, u, l];
          }),
          (h.clamp = function (t) {
            return arguments.length ? ((p = !!t), h) : p;
          }),
          (h.interpolator = function (t) {
            return arguments.length ? ((f = t), h) : f;
          }),
          (h.range = d(yt)),
          (h.rangeRound = d(vt)),
          (h.unknown = function (t) {
            return arguments.length ? ((a = t), h) : a;
          }),
          function (a) {
            return (
              (o = a),
              (t = a(c)),
              (e = a(u)),
              (n = a(l)),
              (r = t === e ? 0 : 0.5 / (e - t)),
              (i = e === n ? 0 : 0.5 / (n - e)),
              (s = e < t ? -1 : 1),
              h
            );
          }
        );
      }
      function Qr() {
        var t = Xt($r()(bt));
        return (
          (t.copy = function () {
            return Kr(t, Qr());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function ti() {
        var t = Qt($r()).domain([0.1, 1, 10]);
        return (
          (t.copy = function () {
            return Kr(t, ti()).base(t.base());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function ei() {
        var t = re($r());
        return (
          (t.copy = function () {
            return Kr(t, ei()).constant(t.constant());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function ni() {
        var t = le($r());
        return (
          (t.copy = function () {
            return Kr(t, ni()).exponent(t.exponent());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function ri() {
        return ni.apply(null, arguments).exponent(0.5);
      }
      function ii(t, e) {
        if ((i = t.length) > 1)
          for (var n, r, i, o = 1, a = t[e[0]], c = a.length; o < i; ++o)
            for (r = a, a = t[e[o]], n = 0; n < c; ++n)
              a[n][1] += a[n][0] = isNaN(r[n][1]) ? r[n][0] : r[n][1];
      }
      !(function (t) {
        (bn = (function (t) {
          var e = t.dateTime,
            n = t.date,
            r = t.time,
            i = t.periods,
            o = t.days,
            a = t.shortDays,
            c = t.months,
            u = t.shortMonths,
            l = kn(i),
            s = Mn(i),
            f = kn(o),
            p = Mn(o),
            h = kn(a),
            d = Mn(a),
            y = kn(c),
            v = Mn(c),
            m = kn(u),
            g = Mn(u),
            b = {
              a: function (t) {
                return a[t.getDay()];
              },
              A: function (t) {
                return o[t.getDay()];
              },
              b: function (t) {
                return u[t.getMonth()];
              },
              B: function (t) {
                return c[t.getMonth()];
              },
              c: null,
              d: Jn,
              e: Jn,
              f: er,
              g: pr,
              G: dr,
              H: Zn,
              I: $n,
              j: Qn,
              L: tr,
              m: nr,
              M: rr,
              p: function (t) {
                return i[+(t.getHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getMonth() / 3);
              },
              Q: Rr,
              s: Lr,
              S: ir,
              u: or,
              U: ar,
              V: ur,
              w: lr,
              W: sr,
              x: null,
              X: null,
              y: fr,
              Y: hr,
              Z: yr,
              '%': Br
            },
            x = {
              a: function (t) {
                return a[t.getUTCDay()];
              },
              A: function (t) {
                return o[t.getUTCDay()];
              },
              b: function (t) {
                return u[t.getUTCMonth()];
              },
              B: function (t) {
                return c[t.getUTCMonth()];
              },
              c: null,
              d: vr,
              e: vr,
              f: wr,
              g: _r,
              G: Dr,
              H: mr,
              I: gr,
              j: br,
              L: xr,
              m: Or,
              M: Ar,
              p: function (t) {
                return i[+(t.getUTCHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getUTCMonth() / 3);
              },
              Q: Rr,
              s: Lr,
              S: Sr,
              u: jr,
              U: Pr,
              V: kr,
              w: Mr,
              W: Tr,
              x: null,
              X: null,
              y: Cr,
              Y: Ir,
              Z: Nr,
              '%': Br
            },
            w = {
              a: function (t, e, n) {
                var r = h.exec(e.slice(n));
                return r
                  ? ((t.w = d.get(r[0].toLowerCase())), n + r[0].length)
                  : -1;
              },
              A: function (t, e, n) {
                var r = f.exec(e.slice(n));
                return r
                  ? ((t.w = p.get(r[0].toLowerCase())), n + r[0].length)
                  : -1;
              },
              b: function (t, e, n) {
                var r = m.exec(e.slice(n));
                return r
                  ? ((t.m = g.get(r[0].toLowerCase())), n + r[0].length)
                  : -1;
              },
              B: function (t, e, n) {
                var r = y.exec(e.slice(n));
                return r
                  ? ((t.m = v.get(r[0].toLowerCase())), n + r[0].length)
                  : -1;
              },
              c: function (t, n, r) {
                return S(t, e, n, r);
              },
              d: zn,
              e: zn,
              f: Hn,
              g: Bn,
              G: Nn,
              H: Wn,
              I: Wn,
              j: Un,
              L: Kn,
              m: Fn,
              M: Xn,
              p: function (t, e, n) {
                var r = l.exec(e.slice(n));
                return r
                  ? ((t.p = s.get(r[0].toLowerCase())), n + r[0].length)
                  : -1;
              },
              q: Ln,
              Q: Gn,
              s: Yn,
              S: qn,
              u: Cn,
              U: _n,
              V: In,
              w: Tn,
              W: Dn,
              x: function (t, e, r) {
                return S(t, n, e, r);
              },
              X: function (t, e, n) {
                return S(t, r, e, n);
              },
              y: Bn,
              Y: Nn,
              Z: Rn,
              '%': Vn
            };
          function O(t, e) {
            return function (n) {
              var r,
                i,
                o,
                a = [],
                c = -1,
                u = 0,
                l = t.length;
              for (n instanceof Date || (n = new Date(+n)); ++c < l; )
                37 === t.charCodeAt(c) &&
                  (a.push(t.slice(u, c)),
                  null != (i = On[(r = t.charAt(++c))])
                    ? (r = t.charAt(++c))
                    : (i = 'e' === r ? ' ' : '0'),
                  (o = e[r]) && (r = o(n, i)),
                  a.push(r),
                  (u = c + 1));
              return a.push(t.slice(u, c)), a.join('');
            };
          }
          function A(t, e) {
            return function (n) {
              var r,
                i,
                o = gn(1900, void 0, 1);
              if (S(o, t, (n += ''), 0) != n.length) return null;
              if ('Q' in o) return new Date(o.Q);
              if ('s' in o) return new Date(1e3 * o.s + ('L' in o ? o.L : 0));
              if (
                (e && !('Z' in o) && (o.Z = 0),
                'p' in o && (o.H = (o.H % 12) + 12 * o.p),
                void 0 === o.m && (o.m = 'q' in o ? o.q : 0),
                'V' in o)
              ) {
                if (o.V < 1 || o.V > 53) return null;
                'w' in o || (o.w = 1),
                  'Z' in o
                    ? ((i = (r = mn(gn(o.y, 0, 1))).getUTCDay()),
                      (r = i > 4 || 0 === i ? tn.ceil(r) : tn(r)),
                      (r = We.offset(r, 7 * (o.V - 1))),
                      (o.y = r.getUTCFullYear()),
                      (o.m = r.getUTCMonth()),
                      (o.d = r.getUTCDate() + ((o.w + 6) % 7)))
                    : ((i = (r = vn(gn(o.y, 0, 1))).getDay()),
                      (r = i > 4 || 0 === i ? He.ceil(r) : He(r)),
                      (r = Ue.offset(r, 7 * (o.V - 1))),
                      (o.y = r.getFullYear()),
                      (o.m = r.getMonth()),
                      (o.d = r.getDate() + ((o.w + 6) % 7)));
              } else
                ('W' in o || 'U' in o) &&
                  ('w' in o || (o.w = 'u' in o ? o.u % 7 : 'W' in o ? 1 : 0),
                  (i =
                    'Z' in o
                      ? mn(gn(o.y, 0, 1)).getUTCDay()
                      : vn(gn(o.y, 0, 1)).getDay()),
                  (o.m = 0),
                  (o.d =
                    'W' in o
                      ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7)
                      : o.w + 7 * o.U - ((i + 6) % 7)));
              return 'Z' in o
                ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), mn(o))
                : vn(o);
            };
          }
          function S(t, e, n, r) {
            for (var i, o, a = 0, c = e.length, u = n.length; a < c; ) {
              if (r >= u) return -1;
              if (37 === (i = e.charCodeAt(a++))) {
                if (
                  ((i = e.charAt(a++)),
                  !(o = w[i in On ? e.charAt(a++) : i]) || (r = o(t, n, r)) < 0)
                )
                  return -1;
              } else if (i != n.charCodeAt(r++)) return -1;
            }
            return r;
          }
          return (
            (b.x = O(n, b)),
            (b.X = O(r, b)),
            (b.c = O(e, b)),
            (x.x = O(n, x)),
            (x.X = O(r, x)),
            (x.c = O(e, x)),
            {
              format: function (t) {
                var e = O((t += ''), b);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
              parse: function (t) {
                var e = A((t += ''), !1);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
              utcFormat: function (t) {
                var e = O((t += ''), x);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
              utcParse: function (t) {
                var e = A((t += ''), !0);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              }
            }
          );
        })(t)),
          (xn = bn.format),
          bn.parse,
          (wn = bn.utcFormat),
          bn.utcParse;
      })({
        dateTime: '%x, %X',
        date: '%-m/%-d/%Y',
        time: '%-I:%M:%S %p',
        periods: ['AM', 'PM'],
        days: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        shortMonths: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ]
      });
      var oi = n(99236),
        ai = n(13809);
      function ci(t) {
        for (var e = t.length, n = new Array(e); --e >= 0; ) n[e] = e;
        return n;
      }
      function ui(t, e) {
        return t[e];
      }
      function li(t) {
        const e = [];
        return (e.key = t), e;
      }
      var si = n(50539),
        fi = n.n(si),
        pi = n(76745),
        hi = n.n(pi),
        di = n(79686),
        yi = n.n(di),
        vi = n(11629),
        mi = n.n(vi),
        gi = n(90620),
        bi = n.n(gi),
        xi = n(33097),
        wi = n.n(xi),
        Oi = n(63538),
        Ai = n.n(Oi),
        Si = n(35268),
        ji = n.n(Si),
        Pi = n(643),
        Ei = n.n(Pi),
        ki = n(19853),
        Mi = n.n(ki),
        Ti = n(87424),
        Ci = n.n(Ti),
        _i = n(98210),
        Ii = n.n(_i);
      function Di(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Ni(t);
          })(t) ||
          (function (t) {
            if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ('string' === typeof t) return Ni(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Ni(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Ni(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var Bi = function (t) {
          return t;
        },
        Ri = { '@@functional/placeholder': !0 },
        Li = function (t) {
          return t === Ri;
        },
        Fi = function (t) {
          return function e() {
            return 0 === arguments.length ||
              (1 === arguments.length &&
                Li(arguments.length <= 0 ? void 0 : arguments[0]))
              ? e
              : t.apply(void 0, arguments);
          };
        },
        zi = function t(e, n) {
          return 1 === e
            ? n
            : Fi(function () {
                for (
                  var r = arguments.length, i = new Array(r), o = 0;
                  o < r;
                  o++
                )
                  i[o] = arguments[o];
                var a = i.filter(function (t) {
                  return t !== Ri;
                }).length;
                return a >= e
                  ? n.apply(void 0, i)
                  : t(
                      e - a,
                      Fi(function () {
                        for (
                          var t = arguments.length, e = new Array(t), r = 0;
                          r < t;
                          r++
                        )
                          e[r] = arguments[r];
                        var o = i.map(function (t) {
                          return Li(t) ? e.shift() : t;
                        });
                        return n.apply(void 0, Di(o).concat(e));
                      })
                    );
              });
        },
        Ui = function (t) {
          return zi(t.length, t);
        },
        Wi = function (t, e) {
          for (var n = [], r = t; r < e; ++r) n[r - t] = r;
          return n;
        },
        Xi = Ui(function (t, e) {
          return Array.isArray(e)
            ? e.map(t)
            : Object.keys(e)
                .map(function (t) {
                  return e[t];
                })
                .map(t);
        }),
        qi = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          if (!e.length) return Bi;
          var r = e.reverse(),
            i = r[0],
            o = r.slice(1);
          return function () {
            return o.reduce(function (t, e) {
              return e(t);
            }, i.apply(void 0, arguments));
          };
        },
        Ki = function (t) {
          return Array.isArray(t) ? t.reverse() : t.split('').reverse.join('');
        },
        Hi = function (t) {
          var e = null,
            n = null;
          return function () {
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return e &&
              i.every(function (t, n) {
                return t === e[n];
              })
              ? n
              : ((e = i), (n = t.apply(void 0, i)));
          };
        };
      const Vi = {
        rangeStep: function (t, e, n) {
          for (var r = new (Ii())(t), i = 0, o = []; r.lt(e) && i < 1e5; )
            o.push(r.toNumber()), (r = r.add(n)), i++;
          return o;
        },
        getDigitCount: function (t) {
          return 0 === t
            ? 1
            : Math.floor(new (Ii())(t).abs().log(10).toNumber()) + 1;
        },
        interpolateNumber: Ui(function (t, e, n) {
          var r = +t;
          return r + n * (+e - r);
        }),
        uninterpolateNumber: Ui(function (t, e, n) {
          var r = e - +t;
          return (n - t) / (r = r || 1 / 0);
        }),
        uninterpolateTruncation: Ui(function (t, e, n) {
          var r = e - +t;
          return (r = r || 1 / 0), Math.max(0, Math.min(1, (n - t) / r));
        })
      };
      function Gi(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Zi(t);
          })(t) ||
          (function (t) {
            if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          Ji(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Yi(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if (
              'undefined' === typeof Symbol ||
              !(Symbol.iterator in Object(t))
            )
              return;
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = t[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !e || n.length !== e);
                r = !0
              );
            } catch (u) {
              (i = !0), (o = u);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(t, e) ||
          Ji(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Ji(t, e) {
        if (t) {
          if ('string' === typeof t) return Zi(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Zi(t, e)
              : void 0
          );
        }
      }
      function Zi(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function $i(t) {
        var e = Yi(t, 2),
          n = e[0],
          r = e[1],
          i = n,
          o = r;
        return n > r && ((i = r), (o = n)), [i, o];
      }
      function Qi(t, e, n) {
        if (t.lte(0)) return new (Ii())(0);
        var r = Vi.getDigitCount(t.toNumber()),
          i = new (Ii())(10).pow(r),
          o = t.div(i),
          a = 1 !== r ? 0.05 : 0.1,
          c = new (Ii())(Math.ceil(o.div(a).toNumber())).add(n).mul(a).mul(i);
        return e ? c : new (Ii())(Math.ceil(c));
      }
      function to(t, e, n) {
        var r = 1,
          i = new (Ii())(t);
        if (!i.isint() && n) {
          var o = Math.abs(t);
          o < 1
            ? ((r = new (Ii())(10).pow(Vi.getDigitCount(t) - 1)),
              (i = new (Ii())(Math.floor(i.div(r).toNumber())).mul(r)))
            : o > 1 && (i = new (Ii())(Math.floor(t)));
        } else
          0 === t
            ? (i = new (Ii())(Math.floor((e - 1) / 2)))
            : n || (i = new (Ii())(Math.floor(t)));
        var a = Math.floor((e - 1) / 2);
        return qi(
          Xi(function (t) {
            return i.add(new (Ii())(t - a).mul(r)).toNumber();
          }),
          Wi
        )(0, e);
      }
      function eo(t, e, n, r) {
        var i =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        if (!Number.isFinite((e - t) / (n - 1)))
          return {
            step: new (Ii())(0),
            tickMin: new (Ii())(0),
            tickMax: new (Ii())(0)
          };
        var o,
          a = Qi(new (Ii())(e).sub(t).div(n - 1), r, i);
        o =
          t <= 0 && e >= 0
            ? new (Ii())(0)
            : (o = new (Ii())(t).add(e).div(2)).sub(new (Ii())(o).mod(a));
        var c = Math.ceil(o.sub(t).div(a).toNumber()),
          u = Math.ceil(new (Ii())(e).sub(o).div(a).toNumber()),
          l = c + u + 1;
        return l > n
          ? eo(t, e, n, r, i + 1)
          : (l < n &&
              ((u = e > 0 ? u + (n - l) : u), (c = e > 0 ? c : c + (n - l))),
            {
              step: a,
              tickMin: o.sub(new (Ii())(c).mul(a)),
              tickMax: o.add(new (Ii())(u).mul(a))
            });
      }
      var no = Hi(function (t) {
          var e = Yi(t, 2),
            n = e[0],
            r = e[1],
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 6,
            o =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            a = Math.max(i, 2),
            c = Yi($i([n, r]), 2),
            u = c[0],
            l = c[1];
          if (u === -1 / 0 || l === 1 / 0) {
            var s =
              l === 1 / 0
                ? [u].concat(
                    Gi(
                      Wi(0, i - 1).map(function () {
                        return 1 / 0;
                      })
                    )
                  )
                : [].concat(
                    Gi(
                      Wi(0, i - 1).map(function () {
                        return -1 / 0;
                      })
                    ),
                    [l]
                  );
            return n > r ? Ki(s) : s;
          }
          if (u === l) return to(u, i, o);
          var f = eo(u, l, a, o),
            p = f.step,
            h = f.tickMin,
            d = f.tickMax,
            y = Vi.rangeStep(h, d.add(new (Ii())(0.1).mul(p)), p);
          return n > r ? Ki(y) : y;
        }),
        ro =
          (Hi(function (t) {
            var e = Yi(t, 2),
              n = e[0],
              r = e[1],
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 6,
              o =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a = Math.max(i, 2),
              c = Yi($i([n, r]), 2),
              u = c[0],
              l = c[1];
            if (u === -1 / 0 || l === 1 / 0) return [n, r];
            if (u === l) return to(u, i, o);
            var s = Qi(new (Ii())(l).sub(u).div(a - 1), o, 0),
              f = qi(
                Xi(function (t) {
                  return new (Ii())(u).add(new (Ii())(t).mul(s)).toNumber();
                }),
                Wi
              )(0, a).filter(function (t) {
                return t >= u && t <= l;
              });
            return n > r ? Ki(f) : f;
          }),
          Hi(function (t, e) {
            var n = Yi(t, 2),
              r = n[0],
              i = n[1],
              o =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a = Yi($i([r, i]), 2),
              c = a[0],
              u = a[1];
            if (c === -1 / 0 || u === 1 / 0) return [r, i];
            if (c === u) return [c];
            var l = Math.max(e, 2),
              s = Qi(new (Ii())(u).sub(c).div(l - 1), o, 0),
              f = [].concat(
                Gi(
                  Vi.rangeStep(
                    new (Ii())(c),
                    new (Ii())(u).sub(new (Ii())(0.99).mul(s)),
                    s
                  )
                ),
                [u]
              );
            return r > i ? Ki(f) : f;
          })),
        io = n(38813),
        oo = n(76307),
        ao = n(240),
        co = n(27165);
      function uo(t) {
        return (
          (uo =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          uo(t)
        );
      }
      function lo(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function so(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? lo(Object(n), !0).forEach(function (e) {
                fo(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : lo(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function fo(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != uo(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != uo(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == uo(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function po(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return ho(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' !== typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ('string' === typeof t) return ho(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ho(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function ho(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function yo(t, e, n) {
        return yi()(t) || yi()(e)
          ? n
          : (0, oo.vh)(e)
          ? wi()(t, e, n)
          : mi()(e)
          ? e(t)
          : n;
      }
      function vo(t, e, n, r) {
        var i = Ai()(t, function (t) {
          return yo(t, e);
        });
        if ('number' === n) {
          var o = i.filter(function (t) {
            return (0, oo.Et)(t) || parseFloat(t);
          });
          return o.length ? [hi()(o), fi()(o)] : [1 / 0, -1 / 0];
        }
        return (
          r
            ? i.filter(function (t) {
                return !yi()(t);
              })
            : i
        ).map(function (t) {
          return (0, oo.vh)(t) || t instanceof Date ? t : '';
        });
      }
      var mo = function (t) {
          var e,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            r = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0,
            o = -1,
            a =
              null !== (e = null === n || void 0 === n ? void 0 : n.length) &&
              void 0 !== e
                ? e
                : 0;
          if (a <= 1) return 0;
          if (
            i &&
            'angleAxis' === i.axisType &&
            Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6
          )
            for (var c = i.range, u = 0; u < a; u++) {
              var l = u > 0 ? r[u - 1].coordinate : r[a - 1].coordinate,
                s = r[u].coordinate,
                f = u >= a - 1 ? r[0].coordinate : r[u + 1].coordinate,
                p = void 0;
              if ((0, oo.sA)(s - l) !== (0, oo.sA)(f - s)) {
                var h = [];
                if ((0, oo.sA)(f - s) === (0, oo.sA)(c[1] - c[0])) {
                  p = f;
                  var d = s + c[1] - c[0];
                  (h[0] = Math.min(d, (d + l) / 2)),
                    (h[1] = Math.max(d, (d + l) / 2));
                } else {
                  p = l;
                  var y = f + c[1] - c[0];
                  (h[0] = Math.min(s, (y + s) / 2)),
                    (h[1] = Math.max(s, (y + s) / 2));
                }
                var v = [Math.min(s, (p + s) / 2), Math.max(s, (p + s) / 2)];
                if ((t > v[0] && t <= v[1]) || (t >= h[0] && t <= h[1])) {
                  o = r[u].index;
                  break;
                }
              } else {
                var m = Math.min(l, f),
                  g = Math.max(l, f);
                if (t > (m + s) / 2 && t <= (g + s) / 2) {
                  o = r[u].index;
                  break;
                }
              }
            }
          else
            for (var b = 0; b < a; b++)
              if (
                (0 === b && t <= (n[b].coordinate + n[b + 1].coordinate) / 2) ||
                (b > 0 &&
                  b < a - 1 &&
                  t > (n[b].coordinate + n[b - 1].coordinate) / 2 &&
                  t <= (n[b].coordinate + n[b + 1].coordinate) / 2) ||
                (b === a - 1 && t > (n[b].coordinate + n[b - 1].coordinate) / 2)
              ) {
                o = n[b].index;
                break;
              }
          return o;
        },
        go = function (t) {
          var e,
            n = t.type.displayName,
            r = t.props,
            i = r.stroke,
            o = r.fill;
          switch (n) {
            case 'Line':
              e = i;
              break;
            case 'Area':
            case 'Radar':
              e = i && 'none' !== i ? i : o;
              break;
            default:
              e = o;
          }
          return e;
        },
        bo = function (t) {
          var e = t.barSize,
            n = t.stackGroups,
            r = void 0 === n ? {} : n;
          if (!r) return {};
          for (var i = {}, o = Object.keys(r), a = 0, c = o.length; a < c; a++)
            for (
              var u = r[o[a]].stackGroups,
                l = Object.keys(u),
                s = 0,
                f = l.length;
              s < f;
              s++
            ) {
              var p = u[l[s]],
                h = p.items,
                d = p.cateAxisId,
                y = h.filter(function (t) {
                  return (0, ao.Mn)(t.type).indexOf('Bar') >= 0;
                });
              if (y && y.length) {
                var v = y[0].props.barSize,
                  m = y[0].props[d];
                i[m] || (i[m] = []),
                  i[m].push({
                    item: y[0],
                    stackList: y.slice(1),
                    barSize: yi()(v) ? e : v
                  });
              }
            }
          return i;
        },
        xo = function (t) {
          var e = t.barGap,
            n = t.barCategoryGap,
            r = t.bandSize,
            i = t.sizeList,
            o = void 0 === i ? [] : i,
            a = t.maxBarSize,
            c = o.length;
          if (c < 1) return null;
          var u,
            l = (0, oo.F4)(e, r, 0, !0),
            s = [];
          if (o[0].barSize === +o[0].barSize) {
            var f = !1,
              p = r / c,
              h = o.reduce(function (t, e) {
                return t + e.barSize || 0;
              }, 0);
            (h += (c - 1) * l) >= r && ((h -= (c - 1) * l), (l = 0)),
              h >= r && p > 0 && ((f = !0), (h = c * (p *= 0.9)));
            var d = { offset: (((r - h) / 2) | 0) - l, size: 0 };
            u = o.reduce(function (t, e) {
              var n = {
                  item: e.item,
                  position: {
                    offset: d.offset + d.size + l,
                    size: f ? p : e.barSize
                  }
                },
                r = [].concat(po(t), [n]);
              return (
                (d = r[r.length - 1].position),
                e.stackList &&
                  e.stackList.length &&
                  e.stackList.forEach(function (t) {
                    r.push({ item: t, position: d });
                  }),
                r
              );
            }, s);
          } else {
            var y = (0, oo.F4)(n, r, 0, !0);
            r - 2 * y - (c - 1) * l <= 0 && (l = 0);
            var v = (r - 2 * y - (c - 1) * l) / c;
            v > 1 && (v >>= 0);
            var m = a === +a ? Math.min(v, a) : v;
            u = o.reduce(function (t, e, n) {
              var r = [].concat(po(t), [
                {
                  item: e.item,
                  position: { offset: y + (v + l) * n + (v - m) / 2, size: m }
                }
              ]);
              return (
                e.stackList &&
                  e.stackList.length &&
                  e.stackList.forEach(function (t) {
                    r.push({ item: t, position: r[r.length - 1].position });
                  }),
                r
              );
            }, s);
          }
          return u;
        },
        wo = function (t, e, n, r) {
          var i = n.children,
            o = n.width,
            a = n.margin,
            c = o - (a.left || 0) - (a.right || 0),
            u = (0, co.g)({ children: i, legendWidth: c });
          if (u) {
            var l = r || {},
              s = l.width,
              f = l.height,
              p = u.align,
              h = u.verticalAlign,
              d = u.layout;
            if (
              ('vertical' === d || ('horizontal' === d && 'middle' === h)) &&
              'center' !== p &&
              (0, oo.Et)(t[p])
            )
              return so(so({}, t), {}, fo({}, p, t[p] + (s || 0)));
            if (
              ('horizontal' === d || ('vertical' === d && 'center' === p)) &&
              'middle' !== h &&
              (0, oo.Et)(t[h])
            )
              return so(so({}, t), {}, fo({}, h, t[h] + (f || 0)));
          }
          return t;
        },
        Oo = function (t, e, n, r, i) {
          var o = e.props.children,
            a = (0, ao.aS)(o, io.u).filter(function (t) {
              return (function (t, e, n) {
                return (
                  !!yi()(e) ||
                  ('horizontal' === t
                    ? 'yAxis' === e
                    : 'vertical' === t || 'x' === n
                    ? 'xAxis' === e
                    : 'y' !== n || 'yAxis' === e)
                );
              })(r, i, t.props.direction);
            });
          if (a && a.length) {
            var c = a.map(function (t) {
              return t.props.dataKey;
            });
            return t.reduce(
              function (t, e) {
                var r = yo(e, n);
                if (yi()(r)) return t;
                var i = Array.isArray(r) ? [hi()(r), fi()(r)] : [r, r],
                  o = c.reduce(
                    function (t, n) {
                      var r = yo(e, n, 0),
                        o = i[0] - Math.abs(Array.isArray(r) ? r[0] : r),
                        a = i[1] + Math.abs(Array.isArray(r) ? r[1] : r);
                      return [Math.min(o, t[0]), Math.max(a, t[1])];
                    },
                    [1 / 0, -1 / 0]
                  );
                return [Math.min(o[0], t[0]), Math.max(o[1], t[1])];
              },
              [1 / 0, -1 / 0]
            );
          }
          return null;
        },
        Ao = function (t, e, n, r, i) {
          var o = e
            .map(function (e) {
              return Oo(t, e, n, i, r);
            })
            .filter(function (t) {
              return !yi()(t);
            });
          return o && o.length
            ? o.reduce(
                function (t, e) {
                  return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
                },
                [1 / 0, -1 / 0]
              )
            : null;
        },
        So = function (t, e, n, r, i) {
          var o = e.map(function (e) {
            var o = e.props.dataKey;
            return ('number' === n && o && Oo(t, e, o, r)) || vo(t, o, n, i);
          });
          if ('number' === n)
            return o.reduce(
              function (t, e) {
                return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
              },
              [1 / 0, -1 / 0]
            );
          var a = {};
          return o.reduce(function (t, e) {
            for (var n = 0, r = e.length; n < r; n++)
              a[e[n]] || ((a[e[n]] = !0), t.push(e[n]));
            return t;
          }, []);
        },
        jo = function (t, e) {
          return (
            ('horizontal' === t && 'xAxis' === e) ||
            ('vertical' === t && 'yAxis' === e) ||
            ('centric' === t && 'angleAxis' === e) ||
            ('radial' === t && 'radiusAxis' === e)
          );
        },
        Po = function (t, e, n, r) {
          if (r)
            return t.map(function (t) {
              return t.coordinate;
            });
          var i,
            o,
            a = t.map(function (t) {
              return (
                t.coordinate === e && (i = !0),
                t.coordinate === n && (o = !0),
                t.coordinate
              );
            });
          return i || a.push(e), o || a.push(n), a;
        },
        Eo = function (t, e, n) {
          if (!t) return null;
          var r = t.scale,
            i = t.duplicateDomain,
            o = t.type,
            a = t.range,
            c = 'scaleBand' === t.realScaleType ? r.bandwidth() / 2 : 2,
            u =
              (e || n) && 'category' === o && r.bandwidth
                ? r.bandwidth() / c
                : 0;
          return (
            (u =
              'angleAxis' === t.axisType &&
              (null === a || void 0 === a ? void 0 : a.length) >= 2
                ? 2 * (0, oo.sA)(a[0] - a[1]) * u
                : u),
            e && (t.ticks || t.niceTicks)
              ? (t.ticks || t.niceTicks)
                  .map(function (t) {
                    var e = i ? i.indexOf(t) : t;
                    return { coordinate: r(e) + u, value: t, offset: u };
                  })
                  .filter(function (t) {
                    return !ji()(t.coordinate);
                  })
              : t.isCategorical && t.categoricalDomain
              ? t.categoricalDomain.map(function (t, e) {
                  return {
                    coordinate: r(t) + u,
                    value: t,
                    index: e,
                    offset: u
                  };
                })
              : r.ticks && !n
              ? r.ticks(t.tickCount).map(function (t) {
                  return { coordinate: r(t) + u, value: t, offset: u };
                })
              : r.domain().map(function (t, e) {
                  return {
                    coordinate: r(t) + u,
                    value: i ? i[t] : t,
                    index: e,
                    offset: u
                  };
                })
          );
        },
        ko = new WeakMap(),
        Mo = function (t, e) {
          if ('function' !== typeof e) return t;
          ko.has(t) || ko.set(t, new WeakMap());
          var n = ko.get(t);
          if (n.has(e)) return n.get(e);
          var r = function () {
            t.apply(void 0, arguments), e.apply(void 0, arguments);
          };
          return n.set(e, r), r;
        },
        To = function (t, e, n) {
          var o = t.scale,
            a = t.type,
            c = t.layout,
            u = t.axisType;
          if ('auto' === o)
            return 'radial' === c && 'radiusAxis' === u
              ? { scale: i.A(), realScaleType: 'band' }
              : 'radial' === c && 'angleAxis' === u
              ? { scale: qt(), realScaleType: 'linear' }
              : 'category' === a &&
                e &&
                (e.indexOf('LineChart') >= 0 ||
                  e.indexOf('AreaChart') >= 0 ||
                  (e.indexOf('ComposedChart') >= 0 && !n))
              ? { scale: i.z(), realScaleType: 'point' }
              : 'category' === a
              ? { scale: i.A(), realScaleType: 'band' }
              : { scale: qt(), realScaleType: 'linear' };
          if (bi()(o)) {
            var l = 'scale'.concat(Ei()(o));
            return {
              scale: (r[l] || i.z)(),
              realScaleType: r[l] ? l : 'point'
            };
          }
          return mi()(o)
            ? { scale: o }
            : { scale: i.z(), realScaleType: 'point' };
        },
        Co = 1e-4,
        _o = function (t) {
          var e = t.domain();
          if (e && !(e.length <= 2)) {
            var n = e.length,
              r = t.range(),
              i = Math.min(r[0], r[1]) - Co,
              o = Math.max(r[0], r[1]) + Co,
              a = t(e[0]),
              c = t(e[n - 1]);
            (a < i || a > o || c < i || c > o) && t.domain([e[0], e[n - 1]]);
          }
        },
        Io = function (t, e) {
          if (!t) return null;
          for (var n = 0, r = t.length; n < r; n++)
            if (t[n].item === e) return t[n].position;
          return null;
        },
        Do = function (t, e) {
          if (!e || 2 !== e.length || !(0, oo.Et)(e[0]) || !(0, oo.Et)(e[1]))
            return t;
          var n = Math.min(e[0], e[1]),
            r = Math.max(e[0], e[1]),
            i = [t[0], t[1]];
          return (
            (!(0, oo.Et)(t[0]) || t[0] < n) && (i[0] = n),
            (!(0, oo.Et)(t[1]) || t[1] > r) && (i[1] = r),
            i[0] > r && (i[0] = r),
            i[1] < n && (i[1] = n),
            i
          );
        },
        No = {
          sign: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var n = 0, r = t[0].length; n < r; ++n)
                for (var i = 0, o = 0, a = 0; a < e; ++a) {
                  var c = ji()(t[a][n][1]) ? t[a][n][0] : t[a][n][1];
                  c >= 0
                    ? ((t[a][n][0] = i), (t[a][n][1] = i + c), (i = t[a][n][1]))
                    : ((t[a][n][0] = o),
                      (t[a][n][1] = o + c),
                      (o = t[a][n][1]));
                }
          },
          expand: function (t, e) {
            if ((r = t.length) > 0) {
              for (var n, r, i, o = 0, a = t[0].length; o < a; ++o) {
                for (i = n = 0; n < r; ++n) i += t[n][o][1] || 0;
                if (i) for (n = 0; n < r; ++n) t[n][o][1] /= i;
              }
              ii(t, e);
            }
          },
          none: ii,
          silhouette: function (t, e) {
            if ((n = t.length) > 0) {
              for (var n, r = 0, i = t[e[0]], o = i.length; r < o; ++r) {
                for (var a = 0, c = 0; a < n; ++a) c += t[a][r][1] || 0;
                i[r][1] += i[r][0] = -c / 2;
              }
              ii(t, e);
            }
          },
          wiggle: function (t, e) {
            if ((i = t.length) > 0 && (r = (n = t[e[0]]).length) > 0) {
              for (var n, r, i, o = 0, a = 1; a < r; ++a) {
                for (var c = 0, u = 0, l = 0; c < i; ++c) {
                  for (
                    var s = t[e[c]],
                      f = s[a][1] || 0,
                      p = (f - (s[a - 1][1] || 0)) / 2,
                      h = 0;
                    h < c;
                    ++h
                  ) {
                    var d = t[e[h]];
                    p += (d[a][1] || 0) - (d[a - 1][1] || 0);
                  }
                  (u += f), (l += p * f);
                }
                (n[a - 1][1] += n[a - 1][0] = o), u && (o -= l / u);
              }
              (n[a - 1][1] += n[a - 1][0] = o), ii(t, e);
            }
          },
          positive: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var n = 0, r = t[0].length; n < r; ++n)
                for (var i = 0, o = 0; o < e; ++o) {
                  var a = ji()(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
                  a >= 0
                    ? ((t[o][n][0] = i), (t[o][n][1] = i + a), (i = t[o][n][1]))
                    : ((t[o][n][0] = 0), (t[o][n][1] = 0));
                }
          }
        },
        Bo = function (t, e, n) {
          var r = e.map(function (t) {
              return t.props.dataKey;
            }),
            i = No[n],
            o = (function () {
              var t = (0, ai.A)([]),
                e = ci,
                n = ii,
                r = ui;
              function i(i) {
                var o,
                  a,
                  c = Array.from(t.apply(this, arguments), li),
                  u = c.length,
                  l = -1;
                for (const t of i)
                  for (o = 0, ++l; o < u; ++o)
                    (c[o][l] = [0, +r(t, c[o].key, l, i)]).data = t;
                for (o = 0, a = (0, oi.A)(e(c)); o < u; ++o) c[a[o]].index = o;
                return n(c, a), c;
              }
              return (
                (i.keys = function (e) {
                  return arguments.length
                    ? ((t =
                        'function' === typeof e ? e : (0, ai.A)(Array.from(e))),
                      i)
                    : t;
                }),
                (i.value = function (t) {
                  return arguments.length
                    ? ((r = 'function' === typeof t ? t : (0, ai.A)(+t)), i)
                    : r;
                }),
                (i.order = function (t) {
                  return arguments.length
                    ? ((e =
                        null == t
                          ? ci
                          : 'function' === typeof t
                          ? t
                          : (0, ai.A)(Array.from(t))),
                      i)
                    : e;
                }),
                (i.offset = function (t) {
                  return arguments.length ? ((n = null == t ? ii : t), i) : n;
                }),
                i
              );
            })()
              .keys(r)
              .value(function (t, e) {
                return +yo(t, e, 0);
              })
              .order(ci)
              .offset(i);
          return o(t);
        },
        Ro = function (t, e, n, r, i, o) {
          if (!t) return null;
          var a = (o ? e.reverse() : e).reduce(function (t, e) {
            var i = e.props,
              o = i.stackId;
            if (i.hide) return t;
            var a = e.props[n],
              c = t[a] || { hasStack: !1, stackGroups: {} };
            if ((0, oo.vh)(o)) {
              var u = c.stackGroups[o] || {
                numericAxisId: n,
                cateAxisId: r,
                items: []
              };
              u.items.push(e), (c.hasStack = !0), (c.stackGroups[o] = u);
            } else c.stackGroups[(0, oo.NF)('_stackId_')] = { numericAxisId: n, cateAxisId: r, items: [e] };
            return so(so({}, t), {}, fo({}, a, c));
          }, {});
          return Object.keys(a).reduce(function (e, o) {
            var c = a[o];
            if (c.hasStack) {
              c.stackGroups = Object.keys(c.stackGroups).reduce(function (
                e,
                o
              ) {
                var a = c.stackGroups[o];
                return so(
                  so({}, e),
                  {},
                  fo({}, o, {
                    numericAxisId: n,
                    cateAxisId: r,
                    items: a.items,
                    stackedData: Bo(t, a.items, i)
                  })
                );
              },
              {});
            }
            return so(so({}, e), {}, fo({}, o, c));
          }, {});
        },
        Lo = function (t, e) {
          var n = e.realScaleType,
            r = e.type,
            i = e.tickCount,
            o = e.originalDomain,
            a = e.allowDecimals,
            c = n || e.scale;
          if ('auto' !== c && 'linear' !== c) return null;
          if (
            i &&
            'number' === r &&
            o &&
            ('auto' === o[0] || 'auto' === o[1])
          ) {
            var u = t.domain();
            if (!u.length) return null;
            var l = no(u, i, a);
            return t.domain([hi()(l), fi()(l)]), { niceTicks: l };
          }
          if (i && 'number' === r) {
            var s = t.domain();
            return { niceTicks: ro(s, i, a) };
          }
          return null;
        };
      function Fo(t) {
        var e = t.axis,
          n = t.ticks,
          r = t.bandSize,
          i = t.entry,
          o = t.index,
          a = t.dataKey;
        if ('category' === e.type) {
          if (!e.allowDuplicatedCategory && e.dataKey && !yi()(i[e.dataKey])) {
            var c = (0, oo.eP)(n, 'value', i[e.dataKey]);
            if (c) return c.coordinate + r / 2;
          }
          return n[o] ? n[o].coordinate + r / 2 : null;
        }
        var u = yo(i, yi()(a) ? e.dataKey : a);
        return yi()(u) ? null : e.scale(u);
      }
      var zo = function (t) {
          var e = t.axis,
            n = t.ticks,
            r = t.offset,
            i = t.bandSize,
            o = t.entry,
            a = t.index;
          if ('category' === e.type) return n[a] ? n[a].coordinate + r : null;
          var c = yo(o, e.dataKey, e.domain[a]);
          return yi()(c) ? null : e.scale(c) - i / 2 + r;
        },
        Uo = function (t) {
          var e = t.numericAxis,
            n = e.scale.domain();
          if ('number' === e.type) {
            var r = Math.min(n[0], n[1]),
              i = Math.max(n[0], n[1]);
            return r <= 0 && i >= 0 ? 0 : i < 0 ? i : r;
          }
          return n[0];
        },
        Wo = function (t, e) {
          var n = t.props.stackId;
          if ((0, oo.vh)(n)) {
            var r = e[n];
            if (r) {
              var i = r.items.indexOf(t);
              return i >= 0 ? r.stackedData[i] : null;
            }
          }
          return null;
        },
        Xo = function (t, e, n) {
          return Object.keys(t)
            .reduce(
              function (r, i) {
                var o = t[i].stackedData.reduce(
                  function (t, r) {
                    var i = r.slice(e, n + 1).reduce(
                      function (t, e) {
                        return [
                          hi()(e.concat([t[0]]).filter(oo.Et)),
                          fi()(e.concat([t[1]]).filter(oo.Et))
                        ];
                      },
                      [1 / 0, -1 / 0]
                    );
                    return [Math.min(t[0], i[0]), Math.max(t[1], i[1])];
                  },
                  [1 / 0, -1 / 0]
                );
                return [Math.min(o[0], r[0]), Math.max(o[1], r[1])];
              },
              [1 / 0, -1 / 0]
            )
            .map(function (t) {
              return t === 1 / 0 || t === -1 / 0 ? 0 : t;
            });
        },
        qo = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        Ko = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        Ho = function (t, e, n) {
          if (mi()(t)) return t(e, n);
          if (!Array.isArray(t)) return e;
          var r = [];
          if ((0, oo.Et)(t[0])) r[0] = n ? t[0] : Math.min(t[0], e[0]);
          else if (qo.test(t[0])) {
            var i = +qo.exec(t[0])[1];
            r[0] = e[0] - i;
          } else mi()(t[0]) ? (r[0] = t[0](e[0])) : (r[0] = e[0]);
          if ((0, oo.Et)(t[1])) r[1] = n ? t[1] : Math.max(t[1], e[1]);
          else if (Ko.test(t[1])) {
            var o = +Ko.exec(t[1])[1];
            r[1] = e[1] + o;
          } else mi()(t[1]) ? (r[1] = t[1](e[1])) : (r[1] = e[1]);
          return r;
        },
        Vo = function (t, e, n) {
          if (t && t.scale && t.scale.bandwidth) {
            var r = t.scale.bandwidth();
            if (!n || r > 0) return r;
          }
          if (t && e && e.length >= 2) {
            for (
              var i = Ci()(e, function (t) {
                  return t.coordinate;
                }),
                o = 1 / 0,
                a = 1,
                c = i.length;
              a < c;
              a++
            ) {
              var u = i[a],
                l = i[a - 1];
              o = Math.min((u.coordinate || 0) - (l.coordinate || 0), o);
            }
            return o === 1 / 0 ? 0 : o;
          }
          return n ? void 0 : 0;
        },
        Go = function (t, e, n) {
          return t && t.length
            ? Mi()(t, wi()(n, 'type.defaultProps.domain'))
              ? e
              : t
            : e;
        },
        Yo = function (t, e) {
          var n = t.props,
            r = n.dataKey,
            i = n.name,
            o = n.unit,
            a = n.formatter,
            c = n.tooltipType,
            u = n.chartType,
            l = n.hide;
          return so(
            so({}, (0, ao.J9)(t, !1)),
            {},
            {
              dataKey: r,
              unit: o,
              formatter: a,
              name: i || r,
              color: go(t),
              value: yo(e, r),
              type: c,
              payload: e,
              chartType: u,
              hide: l
            }
          );
        };
    },
    17213: (t, e, n) => {
      'use strict';
      n.d(e, { A3: () => p, Pu: () => f });
      var r = n(6015);
      function i(t) {
        return (
          (i =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          i(t)
        );
      }
      function o(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(n), !0).forEach(function (e) {
                c(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function c(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != i(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != i(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == i(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      var u = { widthCache: {}, cacheCount: 0 },
        l = {
          position: 'absolute',
          top: '-20000px',
          left: 0,
          padding: 0,
          margin: 0,
          border: 'none',
          whiteSpace: 'pre'
        },
        s = 'recharts_measurement_span';
      var f = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (void 0 === t || null === t || r.m.isSsr)
            return { width: 0, height: 0 };
          var n = (function (t) {
              var e = a({}, t);
              return (
                Object.keys(e).forEach(function (t) {
                  e[t] || delete e[t];
                }),
                e
              );
            })(e),
            i = JSON.stringify({ text: t, copyStyle: n });
          if (u.widthCache[i]) return u.widthCache[i];
          try {
            var o = document.getElementById(s);
            o ||
              ((o = document.createElement('span')).setAttribute('id', s),
              o.setAttribute('aria-hidden', 'true'),
              document.body.appendChild(o));
            var c = a(a({}, l), n);
            Object.assign(o.style, c), (o.textContent = ''.concat(t));
            var f = o.getBoundingClientRect(),
              p = { width: f.width, height: f.height };
            return (
              (u.widthCache[i] = p),
              ++u.cacheCount > 2e3 && ((u.cacheCount = 0), (u.widthCache = {})),
              p
            );
          } catch (h) {
            return { width: 0, height: 0 };
          }
        },
        p = function (t) {
          return {
            top: t.top + window.scrollY - document.documentElement.clientTop,
            left: t.left + window.scrollX - document.documentElement.clientLeft
          };
        };
    },
    76307: (t, e, n) => {
      'use strict';
      n.d(e, {
        CG: () => b,
        Dj: () => x,
        Et: () => h,
        F4: () => m,
        NF: () => v,
        _3: () => p,
        eP: () => w,
        lX: () => g,
        sA: () => f,
        vh: () => d
      });
      var r = n(90620),
        i = n.n(r),
        o = n(35268),
        a = n.n(o),
        c = n(33097),
        u = n.n(c),
        l = n(79160),
        s = n.n(l),
        f = function (t) {
          return 0 === t ? 0 : t > 0 ? 1 : -1;
        },
        p = function (t) {
          return i()(t) && t.indexOf('%') === t.length - 1;
        },
        h = function (t) {
          return s()(t) && !a()(t);
        },
        d = function (t) {
          return h(t) || i()(t);
        },
        y = 0,
        v = function (t) {
          var e = ++y;
          return ''.concat(t || '').concat(e);
        },
        m = function (t, e) {
          var n,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!h(t) && !i()(t)) return r;
          if (p(t)) {
            var c = t.indexOf('%');
            n = (e * parseFloat(t.slice(0, c))) / 100;
          } else n = +t;
          return a()(n) && (n = r), o && n > e && (n = e), n;
        },
        g = function (t) {
          if (!t) return null;
          var e = Object.keys(t);
          return e && e.length ? t[e[0]] : null;
        },
        b = function (t) {
          if (!Array.isArray(t)) return !1;
          for (var e = t.length, n = {}, r = 0; r < e; r++) {
            if (n[t[r]]) return !0;
            n[t[r]] = !0;
          }
          return !1;
        },
        x = function (t, e) {
          return h(t) && h(e)
            ? function (n) {
                return t + n * (e - t);
              }
            : function () {
                return e;
              };
        };
      function w(t, e, n) {
        return t && t.length
          ? t.find(function (t) {
              return t && ('function' === typeof e ? e(t) : u()(t, e)) === n;
            })
          : null;
      }
    },
    6015: (t, e, n) => {
      'use strict';
      n.d(e, { m: () => r });
      var r = {
        isSsr: !(
          'undefined' !== typeof window &&
          window.document &&
          window.document.createElement &&
          window.setTimeout
        ),
        get: function (t) {
          return r[t];
        },
        set: function (t, e) {
          if ('string' === typeof t) r[t] = e;
          else {
            var n = Object.keys(t);
            n &&
              n.length &&
              n.forEach(function (e) {
                r[e] = t[e];
              });
          }
        }
      };
    },
    155: (t, e, n) => {
      'use strict';
      n.d(e, { R: () => r });
      var r = function (t, e) {
        for (
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
          i < n;
          i++
        )
          r[i - 2] = arguments[i];
      };
    },
    60165: (t, e, n) => {
      'use strict';
      n.d(e, {
        IZ: () => y,
        Kg: () => h,
        lY: () => v,
        pr: () => m,
        yy: () => x
      });
      var r = n(79686),
        i = n.n(r),
        o = n(76307),
        a = n(20202);
      function c(t) {
        return (
          (c =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          c(t)
        );
      }
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                s(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function s(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != c(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != c(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == c(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function f(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != n) {
              var r,
                i,
                o,
                a,
                c = [],
                u = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' === typeof t) return p(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return p(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function p(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var h = Math.PI / 180,
        d = function (t) {
          return (180 * t) / Math.PI;
        },
        y = function (t, e, n, r) {
          return { x: t + Math.cos(-h * r) * n, y: e + Math.sin(-h * r) * n };
        },
        v = function (t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { top: 0, right: 0, bottom: 0, left: 0 };
          return (
            Math.min(
              Math.abs(t - (n.left || 0) - (n.right || 0)),
              Math.abs(e - (n.top || 0) - (n.bottom || 0))
            ) / 2
          );
        },
        m = function (t, e, n, r, c) {
          var u = t.width,
            p = t.height,
            h = t.startAngle,
            d = t.endAngle,
            y = (0, o.F4)(t.cx, u, u / 2),
            m = (0, o.F4)(t.cy, p, p / 2),
            g = v(u, p, n),
            b = (0, o.F4)(t.innerRadius, g, 0),
            x = (0, o.F4)(t.outerRadius, g, 0.8 * g);
          return Object.keys(e).reduce(function (t, n) {
            var o,
              u = e[n],
              p = u.domain,
              v = u.reversed;
            if (i()(u.range))
              'angleAxis' === r
                ? (o = [h, d])
                : 'radiusAxis' === r && (o = [b, x]),
                v && (o = [o[1], o[0]]);
            else {
              var g = f((o = u.range), 2);
              (h = g[0]), (d = g[1]);
            }
            var w = (0, a.W7)(u, c),
              O = w.realScaleType,
              A = w.scale;
            A.domain(p).range(o), (0, a.YB)(A);
            var S = (0, a.w7)(A, l(l({}, u), {}, { realScaleType: O })),
              j = l(
                l(l({}, u), S),
                {},
                {
                  range: o,
                  radius: x,
                  realScaleType: O,
                  scale: A,
                  cx: y,
                  cy: m,
                  innerRadius: b,
                  outerRadius: x,
                  startAngle: h,
                  endAngle: d
                }
              );
            return l(l({}, t), {}, s({}, n, j));
          }, {});
        },
        g = function (t, e) {
          var n = t.x,
            r = t.y,
            i = e.cx,
            o = e.cy,
            a = (function (t, e) {
              var n = t.x,
                r = t.y,
                i = e.x,
                o = e.y;
              return Math.sqrt(Math.pow(n - i, 2) + Math.pow(r - o, 2));
            })({ x: n, y: r }, { x: i, y: o });
          if (a <= 0) return { radius: a };
          var c = (n - i) / a,
            u = Math.acos(c);
          return (
            r > o && (u = 2 * Math.PI - u),
            { radius: a, angle: d(u), angleInRadian: u }
          );
        },
        b = function (t, e) {
          var n = e.startAngle,
            r = e.endAngle,
            i = Math.floor(n / 360),
            o = Math.floor(r / 360);
          return t + 360 * Math.min(i, o);
        },
        x = function (t, e) {
          var n = t.x,
            r = t.y,
            i = g({ x: n, y: r }, e),
            o = i.radius,
            a = i.angle,
            c = e.innerRadius,
            u = e.outerRadius;
          if (o < c || o > u) return !1;
          if (0 === o) return !0;
          var s,
            f = (function (t) {
              var e = t.startAngle,
                n = t.endAngle,
                r = Math.floor(e / 360),
                i = Math.floor(n / 360),
                o = Math.min(r, i);
              return { startAngle: e - 360 * o, endAngle: n - 360 * o };
            })(e),
            p = f.startAngle,
            h = f.endAngle,
            d = a;
          if (p <= h) {
            for (; d > h; ) d -= 360;
            for (; d < p; ) d += 360;
            s = d >= p && d <= h;
          } else {
            for (; d > p; ) d -= 360;
            for (; d < h; ) d += 360;
            s = d >= h && d <= p;
          }
          return s ? l(l({}, e), {}, { radius: o, angle: b(d, e) }) : null;
        };
    },
    240: (t, e, n) => {
      'use strict';
      n.d(e, {
        AW: () => L,
        BU: () => k,
        J9: () => I,
        Me: () => M,
        Mn: () => A,
        ON: () => _,
        OV: () => D,
        X_: () => R,
        aS: () => E,
        ee: () => B
      });
      var r = n(33097),
        i = n.n(r),
        o = n(79686),
        a = n.n(o),
        c = n(90620),
        u = n.n(c),
        l = n(11629),
        s = n.n(l),
        f = n(46686),
        p = n.n(f),
        h = n(65043),
        d = n(2086),
        y = n(76307),
        v = n(45248),
        m = n(17287),
        g = ['children'],
        b = ['children'];
      function x(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function w(t) {
        return (
          (w =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          w(t)
        );
      }
      var O = {
          click: 'onClick',
          mousedown: 'onMouseDown',
          mouseup: 'onMouseUp',
          mouseover: 'onMouseOver',
          mousemove: 'onMouseMove',
          mouseout: 'onMouseOut',
          mouseenter: 'onMouseEnter',
          mouseleave: 'onMouseLeave',
          touchcancel: 'onTouchCancel',
          touchend: 'onTouchEnd',
          touchmove: 'onTouchMove',
          touchstart: 'onTouchStart'
        },
        A = function (t) {
          return 'string' === typeof t
            ? t
            : t
            ? t.displayName || t.name || 'Component'
            : '';
        },
        S = null,
        j = null,
        P = function t(e) {
          if (e === S && Array.isArray(j)) return j;
          var n = [];
          return (
            h.Children.forEach(e, function (e) {
              a()(e) ||
                ((0, d.isFragment)(e)
                  ? (n = n.concat(t(e.props.children)))
                  : n.push(e));
            }),
            (j = n),
            (S = e),
            n
          );
        };
      function E(t, e) {
        var n = [],
          r = [];
        return (
          (r = Array.isArray(e)
            ? e.map(function (t) {
                return A(t);
              })
            : [A(e)]),
          P(t).forEach(function (t) {
            var e = i()(t, 'type.displayName') || i()(t, 'type.name');
            -1 !== r.indexOf(e) && n.push(t);
          }),
          n
        );
      }
      function k(t, e) {
        var n = E(t, e);
        return n && n[0];
      }
      var M = function (t) {
          if (!t || !t.props) return !1;
          var e = t.props,
            n = e.width,
            r = e.height;
          return !(!(0, y.Et)(n) || n <= 0 || !(0, y.Et)(r) || r <= 0);
        },
        T = [
          'a',
          'altGlyph',
          'altGlyphDef',
          'altGlyphItem',
          'animate',
          'animateColor',
          'animateMotion',
          'animateTransform',
          'circle',
          'clipPath',
          'color-profile',
          'cursor',
          'defs',
          'desc',
          'ellipse',
          'feBlend',
          'feColormatrix',
          'feComponentTransfer',
          'feComposite',
          'feConvolveMatrix',
          'feDiffuseLighting',
          'feDisplacementMap',
          'feDistantLight',
          'feFlood',
          'feFuncA',
          'feFuncB',
          'feFuncG',
          'feFuncR',
          'feGaussianBlur',
          'feImage',
          'feMerge',
          'feMergeNode',
          'feMorphology',
          'feOffset',
          'fePointLight',
          'feSpecularLighting',
          'feSpotLight',
          'feTile',
          'feTurbulence',
          'filter',
          'font',
          'font-face',
          'font-face-format',
          'font-face-name',
          'font-face-url',
          'foreignObject',
          'g',
          'glyph',
          'glyphRef',
          'hkern',
          'image',
          'line',
          'lineGradient',
          'marker',
          'mask',
          'metadata',
          'missing-glyph',
          'mpath',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'radialGradient',
          'rect',
          'script',
          'set',
          'stop',
          'style',
          'svg',
          'switch',
          'symbol',
          'text',
          'textPath',
          'title',
          'tref',
          'tspan',
          'use',
          'view',
          'vkern'
        ],
        C = function (t) {
          return t && t.type && u()(t.type) && T.indexOf(t.type) >= 0;
        },
        _ = function (t) {
          return t && 'object' === w(t) && 'cx' in t && 'cy' in t && 'r' in t;
        },
        I = function (t, e, n) {
          if (!t || 'function' === typeof t || 'boolean' === typeof t)
            return null;
          var r = t;
          if (((0, h.isValidElement)(t) && (r = t.props), !p()(r))) return null;
          var i = {};
          return (
            Object.keys(r).forEach(function (t) {
              var o;
              (function (t, e, n, r) {
                var i,
                  o =
                    null !==
                      (i =
                        null === m.VU || void 0 === m.VU ? void 0 : m.VU[r]) &&
                    void 0 !== i
                      ? i
                      : [];
                return (
                  (!s()(t) && ((r && o.includes(e)) || m.QQ.includes(e))) ||
                  (n && m.j2.includes(e))
                );
              })(null === (o = r) || void 0 === o ? void 0 : o[t], t, e, n) &&
                (i[t] = r[t]);
            }),
            i
          );
        },
        D = function t(e, n) {
          if (e === n) return !0;
          var r = h.Children.count(e);
          if (r !== h.Children.count(n)) return !1;
          if (0 === r) return !0;
          if (1 === r)
            return N(Array.isArray(e) ? e[0] : e, Array.isArray(n) ? n[0] : n);
          for (var i = 0; i < r; i++) {
            var o = e[i],
              a = n[i];
            if (Array.isArray(o) || Array.isArray(a)) {
              if (!t(o, a)) return !1;
            } else if (!N(o, a)) return !1;
          }
          return !0;
        },
        N = function (t, e) {
          if (a()(t) && a()(e)) return !0;
          if (!a()(t) && !a()(e)) {
            var n = t.props || {},
              r = n.children,
              i = x(n, g),
              o = e.props || {},
              c = o.children,
              u = x(o, b);
            return r && c
              ? (0, v.b)(i, u) && D(r, c)
              : !r && !c && (0, v.b)(i, u);
          }
          return !1;
        },
        B = function (t, e) {
          var n = [],
            r = {};
          return (
            P(t).forEach(function (t, i) {
              if (C(t)) n.push(t);
              else if (t) {
                var o = A(t.type),
                  a = e[o] || {},
                  c = a.handler,
                  u = a.once;
                if (c && (!u || !r[o])) {
                  var l = c(t, o, i);
                  n.push(l), (r[o] = !0);
                }
              }
            }),
            n
          );
        },
        R = function (t) {
          var e = t && t.type;
          return e && O[e] ? O[e] : null;
        },
        L = function (t, e) {
          return P(e).indexOf(t);
        };
    },
    45248: (t, e, n) => {
      'use strict';
      function r(t, e) {
        for (var n in t)
          if (
            {}.hasOwnProperty.call(t, n) &&
            (!{}.hasOwnProperty.call(e, n) || t[n] !== e[n])
          )
            return !1;
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r) && !{}.hasOwnProperty.call(t, r))
            return !1;
        return !0;
      }
      n.d(e, { b: () => r });
    },
    27165: (t, e, n) => {
      'use strict';
      n.d(e, { g: () => s });
      var r = n(21327),
        i = n(20202),
        o = n(240);
      function a(t) {
        return (
          (a =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          a(t)
        );
      }
      function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(n), !0).forEach(function (e) {
                l(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function l(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != a(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' != a(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == a(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      var s = function (t) {
        var e,
          n = t.children,
          a = t.formattedGraphicalItems,
          c = t.legendWidth,
          l = t.legendContent,
          s = (0, o.BU)(n, r.s);
        return s
          ? ((e =
              s.props && s.props.payload
                ? s.props && s.props.payload
                : 'children' === l
                ? (a || []).reduce(function (t, e) {
                    var n = e.item,
                      r = e.props,
                      i = r.sectors || r.data || [];
                    return t.concat(
                      i.map(function (t) {
                        return {
                          type: s.props.iconType || n.props.legendType,
                          value: t.name,
                          color: t.fill,
                          payload: t
                        };
                      })
                    );
                  }, [])
                : (a || []).map(function (t) {
                    var e = t.item,
                      n = e.props,
                      r = n.dataKey,
                      o = n.name,
                      a = n.legendType;
                    return {
                      inactive: n.hide,
                      dataKey: r,
                      type: s.props.iconType || a || 'square',
                      color: (0, i.Ps)(e),
                      value: o || r,
                      payload: e.props
                    };
                  })),
            u(
              u(u({}, s.props), r.s.getWithHeight(s, c)),
              {},
              { payload: e, item: s }
            ))
          : null;
      };
    },
    22598: (t, e, n) => {
      'use strict';
      n.d(e, { s: () => c });
      var r = n(20977),
        i = n.n(r),
        o = n(11629),
        a = n.n(o);
      function c(t, e, n) {
        return !0 === e ? i()(t, n) : a()(e) ? i()(t, e) : t;
      }
    },
    17287: (t, e, n) => {
      'use strict';
      n.d(e, {
        QQ: () => c,
        VU: () => l,
        XC: () => p,
        _U: () => f,
        j2: () => s
      });
      var r = n(65043),
        i = n(46686),
        o = n.n(i);
      function a(t) {
        return (
          (a =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          a(t)
        );
      }
      var c = [
          'aria-activedescendant',
          'aria-atomic',
          'aria-autocomplete',
          'aria-busy',
          'aria-checked',
          'aria-colcount',
          'aria-colindex',
          'aria-colspan',
          'aria-controls',
          'aria-current',
          'aria-describedby',
          'aria-details',
          'aria-disabled',
          'aria-errormessage',
          'aria-expanded',
          'aria-flowto',
          'aria-haspopup',
          'aria-hidden',
          'aria-invalid',
          'aria-keyshortcuts',
          'aria-label',
          'aria-labelledby',
          'aria-level',
          'aria-live',
          'aria-modal',
          'aria-multiline',
          'aria-multiselectable',
          'aria-orientation',
          'aria-owns',
          'aria-placeholder',
          'aria-posinset',
          'aria-pressed',
          'aria-readonly',
          'aria-relevant',
          'aria-required',
          'aria-roledescription',
          'aria-rowcount',
          'aria-rowindex',
          'aria-rowspan',
          'aria-selected',
          'aria-setsize',
          'aria-sort',
          'aria-valuemax',
          'aria-valuemin',
          'aria-valuenow',
          'aria-valuetext',
          'className',
          'color',
          'height',
          'id',
          'lang',
          'max',
          'media',
          'method',
          'min',
          'name',
          'style',
          'target',
          'width',
          'role',
          'tabIndex',
          'accentHeight',
          'accumulate',
          'additive',
          'alignmentBaseline',
          'allowReorder',
          'alphabetic',
          'amplitude',
          'arabicForm',
          'ascent',
          'attributeName',
          'attributeType',
          'autoReverse',
          'azimuth',
          'baseFrequency',
          'baselineShift',
          'baseProfile',
          'bbox',
          'begin',
          'bias',
          'by',
          'calcMode',
          'capHeight',
          'clip',
          'clipPath',
          'clipPathUnits',
          'clipRule',
          'colorInterpolation',
          'colorInterpolationFilters',
          'colorProfile',
          'colorRendering',
          'contentScriptType',
          'contentStyleType',
          'cursor',
          'cx',
          'cy',
          'd',
          'decelerate',
          'descent',
          'diffuseConstant',
          'direction',
          'display',
          'divisor',
          'dominantBaseline',
          'dur',
          'dx',
          'dy',
          'edgeMode',
          'elevation',
          'enableBackground',
          'end',
          'exponent',
          'externalResourcesRequired',
          'fill',
          'fillOpacity',
          'fillRule',
          'filter',
          'filterRes',
          'filterUnits',
          'floodColor',
          'floodOpacity',
          'focusable',
          'fontFamily',
          'fontSize',
          'fontSizeAdjust',
          'fontStretch',
          'fontStyle',
          'fontVariant',
          'fontWeight',
          'format',
          'from',
          'fx',
          'fy',
          'g1',
          'g2',
          'glyphName',
          'glyphOrientationHorizontal',
          'glyphOrientationVertical',
          'glyphRef',
          'gradientTransform',
          'gradientUnits',
          'hanging',
          'horizAdvX',
          'horizOriginX',
          'href',
          'ideographic',
          'imageRendering',
          'in2',
          'in',
          'intercept',
          'k1',
          'k2',
          'k3',
          'k4',
          'k',
          'kernelMatrix',
          'kernelUnitLength',
          'kerning',
          'keyPoints',
          'keySplines',
          'keyTimes',
          'lengthAdjust',
          'letterSpacing',
          'lightingColor',
          'limitingConeAngle',
          'local',
          'markerEnd',
          'markerHeight',
          'markerMid',
          'markerStart',
          'markerUnits',
          'markerWidth',
          'mask',
          'maskContentUnits',
          'maskUnits',
          'mathematical',
          'mode',
          'numOctaves',
          'offset',
          'opacity',
          'operator',
          'order',
          'orient',
          'orientation',
          'origin',
          'overflow',
          'overlinePosition',
          'overlineThickness',
          'paintOrder',
          'panose1',
          'pathLength',
          'patternContentUnits',
          'patternTransform',
          'patternUnits',
          'pointerEvents',
          'pointsAtX',
          'pointsAtY',
          'pointsAtZ',
          'preserveAlpha',
          'preserveAspectRatio',
          'primitiveUnits',
          'r',
          'radius',
          'refX',
          'refY',
          'renderingIntent',
          'repeatCount',
          'repeatDur',
          'requiredExtensions',
          'requiredFeatures',
          'restart',
          'result',
          'rotate',
          'rx',
          'ry',
          'seed',
          'shapeRendering',
          'slope',
          'spacing',
          'specularConstant',
          'specularExponent',
          'speed',
          'spreadMethod',
          'startOffset',
          'stdDeviation',
          'stemh',
          'stemv',
          'stitchTiles',
          'stopColor',
          'stopOpacity',
          'strikethroughPosition',
          'strikethroughThickness',
          'string',
          'stroke',
          'strokeDasharray',
          'strokeDashoffset',
          'strokeLinecap',
          'strokeLinejoin',
          'strokeMiterlimit',
          'strokeOpacity',
          'strokeWidth',
          'surfaceScale',
          'systemLanguage',
          'tableValues',
          'targetX',
          'targetY',
          'textAnchor',
          'textDecoration',
          'textLength',
          'textRendering',
          'to',
          'transform',
          'u1',
          'u2',
          'underlinePosition',
          'underlineThickness',
          'unicode',
          'unicodeBidi',
          'unicodeRange',
          'unitsPerEm',
          'vAlphabetic',
          'values',
          'vectorEffect',
          'version',
          'vertAdvY',
          'vertOriginX',
          'vertOriginY',
          'vHanging',
          'vIdeographic',
          'viewTarget',
          'visibility',
          'vMathematical',
          'widths',
          'wordSpacing',
          'writingMode',
          'x1',
          'x2',
          'x',
          'xChannelSelector',
          'xHeight',
          'xlinkActuate',
          'xlinkArcrole',
          'xlinkHref',
          'xlinkRole',
          'xlinkShow',
          'xlinkTitle',
          'xlinkType',
          'xmlBase',
          'xmlLang',
          'xmlns',
          'xmlnsXlink',
          'xmlSpace',
          'y1',
          'y2',
          'y',
          'yChannelSelector',
          'z',
          'zoomAndPan',
          'ref',
          'key',
          'angle'
        ],
        u = ['points', 'pathLength'],
        l = { svg: ['viewBox', 'children'], polygon: u, polyline: u },
        s = [
          'dangerouslySetInnerHTML',
          'onCopy',
          'onCopyCapture',
          'onCut',
          'onCutCapture',
          'onPaste',
          'onPasteCapture',
          'onCompositionEnd',
          'onCompositionEndCapture',
          'onCompositionStart',
          'onCompositionStartCapture',
          'onCompositionUpdate',
          'onCompositionUpdateCapture',
          'onFocus',
          'onFocusCapture',
          'onBlur',
          'onBlurCapture',
          'onChange',
          'onChangeCapture',
          'onBeforeInput',
          'onBeforeInputCapture',
          'onInput',
          'onInputCapture',
          'onReset',
          'onResetCapture',
          'onSubmit',
          'onSubmitCapture',
          'onInvalid',
          'onInvalidCapture',
          'onLoad',
          'onLoadCapture',
          'onError',
          'onErrorCapture',
          'onKeyDown',
          'onKeyDownCapture',
          'onKeyPress',
          'onKeyPressCapture',
          'onKeyUp',
          'onKeyUpCapture',
          'onAbort',
          'onAbortCapture',
          'onCanPlay',
          'onCanPlayCapture',
          'onCanPlayThrough',
          'onCanPlayThroughCapture',
          'onDurationChange',
          'onDurationChangeCapture',
          'onEmptied',
          'onEmptiedCapture',
          'onEncrypted',
          'onEncryptedCapture',
          'onEnded',
          'onEndedCapture',
          'onLoadedData',
          'onLoadedDataCapture',
          'onLoadedMetadata',
          'onLoadedMetadataCapture',
          'onLoadStart',
          'onLoadStartCapture',
          'onPause',
          'onPauseCapture',
          'onPlay',
          'onPlayCapture',
          'onPlaying',
          'onPlayingCapture',
          'onProgress',
          'onProgressCapture',
          'onRateChange',
          'onRateChangeCapture',
          'onSeeked',
          'onSeekedCapture',
          'onSeeking',
          'onSeekingCapture',
          'onStalled',
          'onStalledCapture',
          'onSuspend',
          'onSuspendCapture',
          'onTimeUpdate',
          'onTimeUpdateCapture',
          'onVolumeChange',
          'onVolumeChangeCapture',
          'onWaiting',
          'onWaitingCapture',
          'onAuxClick',
          'onAuxClickCapture',
          'onClick',
          'onClickCapture',
          'onContextMenu',
          'onContextMenuCapture',
          'onDoubleClick',
          'onDoubleClickCapture',
          'onDrag',
          'onDragCapture',
          'onDragEnd',
          'onDragEndCapture',
          'onDragEnter',
          'onDragEnterCapture',
          'onDragExit',
          'onDragExitCapture',
          'onDragLeave',
          'onDragLeaveCapture',
          'onDragOver',
          'onDragOverCapture',
          'onDragStart',
          'onDragStartCapture',
          'onDrop',
          'onDropCapture',
          'onMouseDown',
          'onMouseDownCapture',
          'onMouseEnter',
          'onMouseLeave',
          'onMouseMove',
          'onMouseMoveCapture',
          'onMouseOut',
          'onMouseOutCapture',
          'onMouseOver',
          'onMouseOverCapture',
          'onMouseUp',
          'onMouseUpCapture',
          'onSelect',
          'onSelectCapture',
          'onTouchCancel',
          'onTouchCancelCapture',
          'onTouchEnd',
          'onTouchEndCapture',
          'onTouchMove',
          'onTouchMoveCapture',
          'onTouchStart',
          'onTouchStartCapture',
          'onPointerDown',
          'onPointerDownCapture',
          'onPointerMove',
          'onPointerMoveCapture',
          'onPointerUp',
          'onPointerUpCapture',
          'onPointerCancel',
          'onPointerCancelCapture',
          'onPointerEnter',
          'onPointerEnterCapture',
          'onPointerLeave',
          'onPointerLeaveCapture',
          'onPointerOver',
          'onPointerOverCapture',
          'onPointerOut',
          'onPointerOutCapture',
          'onGotPointerCapture',
          'onGotPointerCaptureCapture',
          'onLostPointerCapture',
          'onLostPointerCaptureCapture',
          'onScroll',
          'onScrollCapture',
          'onWheel',
          'onWheelCapture',
          'onAnimationStart',
          'onAnimationStartCapture',
          'onAnimationEnd',
          'onAnimationEndCapture',
          'onAnimationIteration',
          'onAnimationIterationCapture',
          'onTransitionEnd',
          'onTransitionEndCapture'
        ],
        f = function (t, e) {
          if (!t || 'function' === typeof t || 'boolean' === typeof t)
            return null;
          var n = t;
          if (((0, r.isValidElement)(t) && (n = t.props), !o()(n))) return null;
          var i = {};
          return (
            Object.keys(n).forEach(function (t) {
              s.includes(t) &&
                (i[t] =
                  e ||
                  function (e) {
                    return n[t](n, e);
                  });
            }),
            i
          );
        },
        p = function (t, e, n) {
          if (!o()(t) || 'object' !== a(t)) return null;
          var r = null;
          return (
            Object.keys(t).forEach(function (i) {
              var o = t[i];
              s.includes(i) &&
                'function' === typeof o &&
                (r || (r = {}),
                (r[i] = (function (t, e, n) {
                  return function (r) {
                    return t(e, n, r), null;
                  };
                })(o, e, n)));
            }),
            r
          );
        };
    },
    2099: (t, e, n) => {
      'use strict';
      n.d(e, { A: () => o, z: () => c });
      var r = n(94402),
        i = n(35186);
      function o() {
        var t,
          e,
          n = (0, i.A)().unknown(void 0),
          a = n.domain,
          c = n.range,
          u = 0,
          l = 1,
          s = !1,
          f = 0,
          p = 0,
          h = 0.5;
        function d() {
          var n = a().length,
            r = l < u,
            i = r ? l : u,
            o = r ? u : l;
          (t = (o - i) / Math.max(1, n - f + 2 * p)),
            s && (t = Math.floor(t)),
            (i += (o - i - t * (n - f)) * h),
            (e = t * (1 - f)),
            s && ((i = Math.round(i)), (e = Math.round(e)));
          var d = (function (t, e, n) {
            (t = +t),
              (e = +e),
              (n =
                (i = arguments.length) < 2
                  ? ((e = t), (t = 0), 1)
                  : i < 3
                  ? 1
                  : +n);
            for (
              var r = -1,
                i = 0 | Math.max(0, Math.ceil((e - t) / n)),
                o = new Array(i);
              ++r < i;

            )
              o[r] = t + r * n;
            return o;
          })(n).map(function (e) {
            return i + t * e;
          });
          return c(r ? d.reverse() : d);
        }
        return (
          delete n.unknown,
          (n.domain = function (t) {
            return arguments.length ? (a(t), d()) : a();
          }),
          (n.range = function (t) {
            return arguments.length
              ? (([u, l] = t), (u = +u), (l = +l), d())
              : [u, l];
          }),
          (n.rangeRound = function (t) {
            return ([u, l] = t), (u = +u), (l = +l), (s = !0), d();
          }),
          (n.bandwidth = function () {
            return e;
          }),
          (n.step = function () {
            return t;
          }),
          (n.round = function (t) {
            return arguments.length ? ((s = !!t), d()) : s;
          }),
          (n.padding = function (t) {
            return arguments.length ? ((f = Math.min(1, (p = +t))), d()) : f;
          }),
          (n.paddingInner = function (t) {
            return arguments.length ? ((f = Math.min(1, t)), d()) : f;
          }),
          (n.paddingOuter = function (t) {
            return arguments.length ? ((p = +t), d()) : p;
          }),
          (n.align = function (t) {
            return arguments.length
              ? ((h = Math.max(0, Math.min(1, t))), d())
              : h;
          }),
          (n.copy = function () {
            return o(a(), [u, l])
              .round(s)
              .paddingInner(f)
              .paddingOuter(p)
              .align(h);
          }),
          r.C.apply(d(), arguments)
        );
      }
      function a(t) {
        var e = t.copy;
        return (
          (t.padding = t.paddingOuter),
          delete t.paddingInner,
          delete t.paddingOuter,
          (t.copy = function () {
            return a(e());
          }),
          t
        );
      }
      function c() {
        return a(o.apply(null, arguments).paddingInner(1));
      }
    },
    94402: (t, e, n) => {
      'use strict';
      function r(t, e) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t);
            break;
          default:
            this.range(e).domain(t);
        }
        return this;
      }
      function i(t, e) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            'function' === typeof t ? this.interpolator(t) : this.range(t);
            break;
          default:
            this.domain(t),
              'function' === typeof e ? this.interpolator(e) : this.range(e);
        }
        return this;
      }
      n.d(e, { C: () => r, K: () => i });
    },
    35186: (t, e, n) => {
      'use strict';
      n.d(e, { A: () => s, h: () => l });
      class r extends Map {
        constructor(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
          if (
            (super(),
            Object.defineProperties(this, {
              _intern: { value: new Map() },
              _key: { value: e }
            }),
            null != t)
          )
            for (const [n, r] of t) this.set(n, r);
        }
        get(t) {
          return super.get(i(this, t));
        }
        has(t) {
          return super.has(i(this, t));
        }
        set(t, e) {
          return super.set(o(this, t), e);
        }
        delete(t) {
          return super.delete(a(this, t));
        }
      }
      Set;
      function i(t, e) {
        let { _intern: n, _key: r } = t;
        const i = r(e);
        return n.has(i) ? n.get(i) : e;
      }
      function o(t, e) {
        let { _intern: n, _key: r } = t;
        const i = r(e);
        return n.has(i) ? n.get(i) : (n.set(i, e), e);
      }
      function a(t, e) {
        let { _intern: n, _key: r } = t;
        const i = r(e);
        return n.has(i) && ((e = n.get(i)), n.delete(i)), e;
      }
      function c(t) {
        return null !== t && 'object' === typeof t ? t.valueOf() : t;
      }
      var u = n(94402);
      const l = Symbol('implicit');
      function s() {
        var t = new r(),
          e = [],
          n = [],
          i = l;
        function o(r) {
          let o = t.get(r);
          if (void 0 === o) {
            if (i !== l) return i;
            t.set(r, (o = e.push(r) - 1));
          }
          return n[o % n.length];
        }
        return (
          (o.domain = function (n) {
            if (!arguments.length) return e.slice();
            (e = []), (t = new r());
            for (const r of n) t.has(r) || t.set(r, e.push(r) - 1);
            return o;
          }),
          (o.range = function (t) {
            return arguments.length ? ((n = Array.from(t)), o) : n.slice();
          }),
          (o.unknown = function (t) {
            return arguments.length ? ((i = t), o) : i;
          }),
          (o.copy = function () {
            return s(e, n).unknown(i);
          }),
          u.C.apply(o, arguments),
          o
        );
      }
    },
    99236: (t, e, n) => {
      'use strict';
      n.d(e, { A: () => r });
      Array.prototype.slice;
      function r(t) {
        return 'object' === typeof t && 'length' in t ? t : Array.from(t);
      }
    },
    13809: (t, e, n) => {
      'use strict';
      function r(t) {
        return function () {
          return t;
        };
      }
      n.d(e, { A: () => r });
    },
    17371: (t, e, n) => {
      'use strict';
      n.d(e, { i: () => S });
      var r,
        i,
        o,
        a,
        c,
        u,
        l,
        s,
        f,
        p,
        h,
        d,
        y,
        v,
        m = n(57528);
      const g = Math.PI,
        b = 2 * g,
        x = 1e-6,
        w = b - x;
      function O(t) {
        this._ += t[0];
        for (let e = 1, n = t.length; e < n; ++e) this._ += arguments[e] + t[e];
      }
      class A {
        constructor(t) {
          (this._x0 = this._y0 = this._x1 = this._y1 = null),
            (this._ = ''),
            (this._append =
              null == t
                ? O
                : (function (t) {
                    let e = Math.floor(t);
                    if (!(e >= 0))
                      throw new Error('invalid digits: '.concat(t));
                    if (e > 15) return O;
                    const n = 10 ** e;
                    return function (t) {
                      this._ += t[0];
                      for (let e = 1, r = t.length; e < r; ++e)
                        this._ += Math.round(arguments[e] * n) / n + t[e];
                    };
                  })(t));
        }
        moveTo(t, e) {
          this._append(
            r || (r = (0, m.A)(['M', ',', ''])),
            (this._x0 = this._x1 = +t),
            (this._y0 = this._y1 = +e)
          );
        }
        closePath() {
          null !== this._x1 &&
            ((this._x1 = this._x0),
            (this._y1 = this._y0),
            this._append(i || (i = (0, m.A)(['Z']))));
        }
        lineTo(t, e) {
          this._append(
            o || (o = (0, m.A)(['L', ',', ''])),
            (this._x1 = +t),
            (this._y1 = +e)
          );
        }
        quadraticCurveTo(t, e, n, r) {
          this._append(
            a || (a = (0, m.A)(['Q', ',', ',', ',', ''])),
            +t,
            +e,
            (this._x1 = +n),
            (this._y1 = +r)
          );
        }
        bezierCurveTo(t, e, n, r, i, o) {
          this._append(
            c || (c = (0, m.A)(['C', ',', ',', ',', ',', ',', ''])),
            +t,
            +e,
            +n,
            +r,
            (this._x1 = +i),
            (this._y1 = +o)
          );
        }
        arcTo(t, e, n, r, i) {
          if (((t = +t), (e = +e), (n = +n), (r = +r), (i = +i) < 0))
            throw new Error('negative radius: '.concat(i));
          let o = this._x1,
            a = this._y1,
            c = n - t,
            p = r - e,
            h = o - t,
            d = a - e,
            y = h * h + d * d;
          if (null === this._x1)
            this._append(
              u || (u = (0, m.A)(['M', ',', ''])),
              (this._x1 = t),
              (this._y1 = e)
            );
          else if (y > x)
            if (Math.abs(d * c - p * h) > x && i) {
              let u = n - o,
                l = r - a,
                v = c * c + p * p,
                b = u * u + l * l,
                w = Math.sqrt(v),
                O = Math.sqrt(y),
                A =
                  i * Math.tan((g - Math.acos((v + y - b) / (2 * w * O))) / 2),
                S = A / O,
                j = A / w;
              Math.abs(S - 1) > x &&
                this._append(
                  s || (s = (0, m.A)(['L', ',', ''])),
                  t + S * h,
                  e + S * d
                ),
                this._append(
                  f || (f = (0, m.A)(['A', ',', ',0,0,', ',', ',', ''])),
                  i,
                  i,
                  +(d * u > h * l),
                  (this._x1 = t + j * c),
                  (this._y1 = e + j * p)
                );
            } else
              this._append(
                l || (l = (0, m.A)(['L', ',', ''])),
                (this._x1 = t),
                (this._y1 = e)
              );
          else;
        }
        arc(t, e, n, r, i, o) {
          if (((t = +t), (e = +e), (o = !!o), (n = +n) < 0))
            throw new Error('negative radius: '.concat(n));
          let a = n * Math.cos(r),
            c = n * Math.sin(r),
            u = t + a,
            l = e + c,
            s = 1 ^ o,
            f = o ? r - i : i - r;
          null === this._x1
            ? this._append(p || (p = (0, m.A)(['M', ',', ''])), u, l)
            : (Math.abs(this._x1 - u) > x || Math.abs(this._y1 - l) > x) &&
              this._append(h || (h = (0, m.A)(['L', ',', ''])), u, l),
            n &&
              (f < 0 && (f = (f % b) + b),
              f > w
                ? this._append(
                    d ||
                      (d = (0, m.A)([
                        'A',
                        ',',
                        ',0,1,',
                        ',',
                        ',',
                        'A',
                        ',',
                        ',0,1,',
                        ',',
                        ',',
                        ''
                      ])),
                    n,
                    n,
                    s,
                    t - a,
                    e - c,
                    n,
                    n,
                    s,
                    (this._x1 = u),
                    (this._y1 = l)
                  )
                : f > x &&
                  this._append(
                    y || (y = (0, m.A)(['A', ',', ',0,', ',', ',', ',', ''])),
                    n,
                    n,
                    +(f >= g),
                    s,
                    (this._x1 = t + n * Math.cos(i)),
                    (this._y1 = e + n * Math.sin(i))
                  ));
        }
        rect(t, e, n, r) {
          this._append(
            v || (v = (0, m.A)(['M', ',', 'h', 'v', 'h', 'Z'])),
            (this._x0 = this._x1 = +t),
            (this._y0 = this._y1 = +e),
            (n = +n),
            +r,
            -n
          );
        }
        toString() {
          return this._;
        }
      }
      function S(t) {
        let e = 3;
        return (
          (t.digits = function (n) {
            if (!arguments.length) return e;
            if (null == n) e = null;
            else {
              const t = Math.floor(n);
              if (!(t >= 0)) throw new RangeError('invalid digits: '.concat(n));
              e = t;
            }
            return t;
          }),
          () => new A(e)
        );
      }
      A.prototype;
    },
    35007: (t, e, n) => {
      'use strict';
      function r(t) {
        var e,
          n,
          i = '';
        if ('string' == typeof t || 'number' == typeof t) i += t;
        else if ('object' == typeof t)
          if (Array.isArray(t)) {
            var o = t.length;
            for (e = 0; e < o; e++)
              t[e] && (n = r(t[e])) && (i && (i += ' '), (i += n));
          } else for (n in t) t[n] && (i && (i += ' '), (i += n));
        return i;
      }
      n.d(e, { A: () => i });
      const i = function () {
        for (var t, e, n = 0, i = '', o = arguments.length; n < o; n++)
          (t = arguments[n]) && (e = r(t)) && (i && (i += ' '), (i += e));
        return i;
      };
    },
    3404: (t, e, n) => {
      'use strict';
      n.d(e, { A: () => o });
      var r = !0,
        i = 'Invariant failed';
      function o(t, e) {
        if (!t) {
          if (r) throw new Error(i);
          var n = 'function' === typeof e ? e() : e,
            o = n ? ''.concat(i, ': ').concat(n) : i;
          throw new Error(o);
        }
      }
    }
  }
]);
//# sourceMappingURL=373.9cef3d25.chunk.js.map
