/*! For license information please see 5796.3ebf195a.chunk.js.LICENSE.txt */
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [5796],
  {
    74497: function (t, n) {
      var e;
      !(function (r) {
        'use strict';
        var u =
            Math.cosh ||
            function (t) {
              return Math.abs(t) < 1e-9
                ? 1 - t
                : 0.5 * (Math.exp(t) + Math.exp(-t));
            },
          i =
            Math.sinh ||
            function (t) {
              return Math.abs(t) < 1e-9
                ? t
                : 0.5 * (Math.exp(t) - Math.exp(-t));
            },
          o = function () {
            throw SyntaxError('Invalid Param');
          };
        function s(t, n) {
          var e = Math.abs(t),
            r = Math.abs(n);
          return 0 === t
            ? Math.log(r)
            : 0 === n
            ? Math.log(e)
            : e < 3e3 && r < 3e3
            ? 0.5 * Math.log(t * t + n * n)
            : ((t /= 2), (n /= 2), 0.5 * Math.log(t * t + n * n) + Math.LN2);
        }
        function a(t, n) {
          if (!(this instanceof a)) return new a(t, n);
          var e = (function (t, n) {
            var e = { re: 0, im: 0 };
            if (void 0 === t || null === t) e.re = e.im = 0;
            else if (void 0 !== n) (e.re = t), (e.im = n);
            else
              switch (typeof t) {
                case 'object':
                  if ('im' in t && 're' in t) (e.re = t.re), (e.im = t.im);
                  else if ('abs' in t && 'arg' in t) {
                    if (!Number.isFinite(t.abs) && Number.isFinite(t.arg))
                      return a.INFINITY;
                    (e.re = t.abs * Math.cos(t.arg)),
                      (e.im = t.abs * Math.sin(t.arg));
                  } else if ('r' in t && 'phi' in t) {
                    if (!Number.isFinite(t.r) && Number.isFinite(t.phi))
                      return a.INFINITY;
                    (e.re = t.r * Math.cos(t.phi)),
                      (e.im = t.r * Math.sin(t.phi));
                  } else 2 === t.length ? ((e.re = t[0]), (e.im = t[1])) : o();
                  break;
                case 'string':
                  e.im = e.re = 0;
                  var r = t.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),
                    u = 1,
                    i = 0;
                  null === r && o();
                  for (var s = 0; s < r.length; s++) {
                    var c = r[s];
                    ' ' === c ||
                      '\t' === c ||
                      '\n' === c ||
                      ('+' === c
                        ? u++
                        : '-' === c
                        ? i++
                        : 'i' === c || 'I' === c
                        ? (u + i === 0 && o(),
                          ' ' === r[s + 1] || isNaN(r[s + 1])
                            ? (e.im += parseFloat((i % 2 ? '-' : '') + '1'))
                            : ((e.im += parseFloat(
                                (i % 2 ? '-' : '') + r[s + 1]
                              )),
                              s++),
                          (u = i = 0))
                        : ((u + i === 0 || isNaN(c)) && o(),
                          'i' === r[s + 1] || 'I' === r[s + 1]
                            ? ((e.im += parseFloat((i % 2 ? '-' : '') + c)),
                              s++)
                            : (e.re += parseFloat((i % 2 ? '-' : '') + c)),
                          (u = i = 0)));
                  }
                  u + i > 0 && o();
                  break;
                case 'number':
                  (e.im = 0), (e.re = t);
                  break;
                default:
                  o();
              }
            return isNaN(e.re) || isNaN(e.im), e;
          })(t, n);
          (this.re = e.re), (this.im = e.im);
        }
        (a.prototype = {
          re: 0,
          im: 0,
          sign: function () {
            var t = this.abs();
            return new a(this.re / t, this.im / t);
          },
          add: function (t, n) {
            var e = new a(t, n);
            return this.isInfinite() && e.isInfinite()
              ? a.NAN
              : this.isInfinite() || e.isInfinite()
              ? a.INFINITY
              : new a(this.re + e.re, this.im + e.im);
          },
          sub: function (t, n) {
            var e = new a(t, n);
            return this.isInfinite() && e.isInfinite()
              ? a.NAN
              : this.isInfinite() || e.isInfinite()
              ? a.INFINITY
              : new a(this.re - e.re, this.im - e.im);
          },
          mul: function (t, n) {
            var e = new a(t, n);
            return (this.isInfinite() && e.isZero()) ||
              (this.isZero() && e.isInfinite())
              ? a.NAN
              : this.isInfinite() || e.isInfinite()
              ? a.INFINITY
              : 0 === e.im && 0 === this.im
              ? new a(this.re * e.re, 0)
              : new a(
                  this.re * e.re - this.im * e.im,
                  this.re * e.im + this.im * e.re
                );
          },
          div: function (t, n) {
            var e = new a(t, n);
            if (
              (this.isZero() && e.isZero()) ||
              (this.isInfinite() && e.isInfinite())
            )
              return a.NAN;
            if (this.isInfinite() || e.isZero()) return a.INFINITY;
            if (this.isZero() || e.isInfinite()) return a.ZERO;
            (t = this.re), (n = this.im);
            var r,
              u,
              i = e.re,
              o = e.im;
            return 0 === o
              ? new a(t / i, n / i)
              : Math.abs(i) < Math.abs(o)
              ? new a((t * (u = i / o) + n) / (r = i * u + o), (n * u - t) / r)
              : new a((t + n * (u = o / i)) / (r = o * u + i), (n - t * u) / r);
          },
          pow: function (t, n) {
            var e = new a(t, n);
            if (((t = this.re), (n = this.im), e.isZero())) return a.ONE;
            if (0 === e.im) {
              if (0 === n && t > 0) return new a(Math.pow(t, e.re), 0);
              if (0 === t)
                switch (((e.re % 4) + 4) % 4) {
                  case 0:
                    return new a(Math.pow(n, e.re), 0);
                  case 1:
                    return new a(0, Math.pow(n, e.re));
                  case 2:
                    return new a(-Math.pow(n, e.re), 0);
                  case 3:
                    return new a(0, -Math.pow(n, e.re));
                }
            }
            if (0 === t && 0 === n && e.re > 0 && e.im >= 0) return a.ZERO;
            var r = Math.atan2(n, t),
              u = s(t, n);
            return (
              (t = Math.exp(e.re * u - e.im * r)),
              (n = e.im * u + e.re * r),
              new a(t * Math.cos(n), t * Math.sin(n))
            );
          },
          sqrt: function () {
            var t,
              n,
              e = this.re,
              r = this.im,
              u = this.abs();
            if (e >= 0) {
              if (0 === r) return new a(Math.sqrt(e), 0);
              t = 0.5 * Math.sqrt(2 * (u + e));
            } else t = Math.abs(r) / Math.sqrt(2 * (u - e));
            return (
              (n =
                e <= 0
                  ? 0.5 * Math.sqrt(2 * (u - e))
                  : Math.abs(r) / Math.sqrt(2 * (u + e))),
              new a(t, r < 0 ? -n : n)
            );
          },
          exp: function () {
            var t = Math.exp(this.re);
            return this.im, new a(t * Math.cos(this.im), t * Math.sin(this.im));
          },
          expm1: function () {
            var t = this.re,
              n = this.im;
            return new a(
              Math.expm1(t) * Math.cos(n) +
                (function (t) {
                  var n = Math.PI / 4;
                  if (-n > t || t > n) return Math.cos(t) - 1;
                  var e = t * t;
                  return (
                    e *
                    (e *
                      (e *
                        (e *
                          (e *
                            (e *
                              (e * (e / 20922789888e3 - 1 / 87178291200) +
                                1 / 479001600) -
                              1 / 3628800) +
                            1 / 40320) -
                          1 / 720) +
                        1 / 24) -
                      0.5)
                  );
                })(n),
              Math.exp(t) * Math.sin(n)
            );
          },
          log: function () {
            var t = this.re,
              n = this.im;
            return new a(s(t, n), Math.atan2(n, t));
          },
          abs: function () {
            return (function (t, n) {
              var e = Math.abs(t),
                r = Math.abs(n);
              return e < 3e3 && r < 3e3
                ? Math.sqrt(e * e + r * r)
                : (e < r ? ((e = r), (r = t / n)) : (r = n / t),
                  e * Math.sqrt(1 + r * r));
            })(this.re, this.im);
          },
          arg: function () {
            return Math.atan2(this.im, this.re);
          },
          sin: function () {
            var t = this.re,
              n = this.im;
            return new a(Math.sin(t) * u(n), Math.cos(t) * i(n));
          },
          cos: function () {
            var t = this.re,
              n = this.im;
            return new a(Math.cos(t) * u(n), -Math.sin(t) * i(n));
          },
          tan: function () {
            var t = 2 * this.re,
              n = 2 * this.im,
              e = Math.cos(t) + u(n);
            return new a(Math.sin(t) / e, i(n) / e);
          },
          cot: function () {
            var t = 2 * this.re,
              n = 2 * this.im,
              e = Math.cos(t) - u(n);
            return new a(-Math.sin(t) / e, i(n) / e);
          },
          sec: function () {
            var t = this.re,
              n = this.im,
              e = 0.5 * u(2 * n) + 0.5 * Math.cos(2 * t);
            return new a((Math.cos(t) * u(n)) / e, (Math.sin(t) * i(n)) / e);
          },
          csc: function () {
            var t = this.re,
              n = this.im,
              e = 0.5 * u(2 * n) - 0.5 * Math.cos(2 * t);
            return new a((Math.sin(t) * u(n)) / e, (-Math.cos(t) * i(n)) / e);
          },
          asin: function () {
            var t = this.re,
              n = this.im,
              e = new a(n * n - t * t + 1, -2 * t * n).sqrt(),
              r = new a(e.re - n, e.im + t).log();
            return new a(r.im, -r.re);
          },
          acos: function () {
            var t = this.re,
              n = this.im,
              e = new a(n * n - t * t + 1, -2 * t * n).sqrt(),
              r = new a(e.re - n, e.im + t).log();
            return new a(Math.PI / 2 - r.im, r.re);
          },
          atan: function () {
            var t = this.re,
              n = this.im;
            if (0 === t) {
              if (1 === n) return new a(0, 1 / 0);
              if (-1 === n) return new a(0, -1 / 0);
            }
            var e = t * t + (1 - n) * (1 - n),
              r = new a((1 - n * n - t * t) / e, (-2 * t) / e).log();
            return new a(-0.5 * r.im, 0.5 * r.re);
          },
          acot: function () {
            var t = this.re,
              n = this.im;
            if (0 === n) return new a(Math.atan2(1, t), 0);
            var e = t * t + n * n;
            return 0 !== e
              ? new a(t / e, -n / e).atan()
              : new a(0 !== t ? t / 0 : 0, 0 !== n ? -n / 0 : 0).atan();
          },
          asec: function () {
            var t = this.re,
              n = this.im;
            if (0 === t && 0 === n) return new a(0, 1 / 0);
            var e = t * t + n * n;
            return 0 !== e
              ? new a(t / e, -n / e).acos()
              : new a(0 !== t ? t / 0 : 0, 0 !== n ? -n / 0 : 0).acos();
          },
          acsc: function () {
            var t = this.re,
              n = this.im;
            if (0 === t && 0 === n) return new a(Math.PI / 2, 1 / 0);
            var e = t * t + n * n;
            return 0 !== e
              ? new a(t / e, -n / e).asin()
              : new a(0 !== t ? t / 0 : 0, 0 !== n ? -n / 0 : 0).asin();
          },
          sinh: function () {
            var t = this.re,
              n = this.im;
            return new a(i(t) * Math.cos(n), u(t) * Math.sin(n));
          },
          cosh: function () {
            var t = this.re,
              n = this.im;
            return new a(u(t) * Math.cos(n), i(t) * Math.sin(n));
          },
          tanh: function () {
            var t = 2 * this.re,
              n = 2 * this.im,
              e = u(t) + Math.cos(n);
            return new a(i(t) / e, Math.sin(n) / e);
          },
          coth: function () {
            var t = 2 * this.re,
              n = 2 * this.im,
              e = u(t) - Math.cos(n);
            return new a(i(t) / e, -Math.sin(n) / e);
          },
          csch: function () {
            var t = this.re,
              n = this.im,
              e = Math.cos(2 * n) - u(2 * t);
            return new a(
              (-2 * i(t) * Math.cos(n)) / e,
              (2 * u(t) * Math.sin(n)) / e
            );
          },
          sech: function () {
            var t = this.re,
              n = this.im,
              e = Math.cos(2 * n) + u(2 * t);
            return new a(
              (2 * u(t) * Math.cos(n)) / e,
              (-2 * i(t) * Math.sin(n)) / e
            );
          },
          asinh: function () {
            var t = this.im;
            (this.im = -this.re), (this.re = t);
            var n = this.asin();
            return (
              (this.re = -this.im),
              (this.im = t),
              (t = n.re),
              (n.re = -n.im),
              (n.im = t),
              n
            );
          },
          acosh: function () {
            var t = this.acos();
            if (t.im <= 0) {
              var n = t.re;
              (t.re = -t.im), (t.im = n);
            } else {
              n = t.im;
              (t.im = -t.re), (t.re = n);
            }
            return t;
          },
          atanh: function () {
            var t = this.re,
              n = this.im,
              e = t > 1 && 0 === n,
              r = 1 - t,
              u = 1 + t,
              i = r * r + n * n,
              o =
                0 !== i
                  ? new a((u * r - n * n) / i, (n * r + u * n) / i)
                  : new a(-1 !== t ? t / 0 : 0, 0 !== n ? n / 0 : 0),
              c = o.re;
            return (
              (o.re = s(o.re, o.im) / 2),
              (o.im = Math.atan2(o.im, c) / 2),
              e && (o.im = -o.im),
              o
            );
          },
          acoth: function () {
            var t = this.re,
              n = this.im;
            if (0 === t && 0 === n) return new a(0, Math.PI / 2);
            var e = t * t + n * n;
            return 0 !== e
              ? new a(t / e, -n / e).atanh()
              : new a(0 !== t ? t / 0 : 0, 0 !== n ? -n / 0 : 0).atanh();
          },
          acsch: function () {
            var t = this.re,
              n = this.im;
            if (0 === n)
              return new a(
                0 !== t ? Math.log(t + Math.sqrt(t * t + 1)) : 1 / 0,
                0
              );
            var e = t * t + n * n;
            return 0 !== e
              ? new a(t / e, -n / e).asinh()
              : new a(0 !== t ? t / 0 : 0, 0 !== n ? -n / 0 : 0).asinh();
          },
          asech: function () {
            var t = this.re,
              n = this.im;
            if (this.isZero()) return a.INFINITY;
            var e = t * t + n * n;
            return 0 !== e
              ? new a(t / e, -n / e).acosh()
              : new a(0 !== t ? t / 0 : 0, 0 !== n ? -n / 0 : 0).acosh();
          },
          inverse: function () {
            if (this.isZero()) return a.INFINITY;
            if (this.isInfinite()) return a.ZERO;
            var t = this.re,
              n = this.im,
              e = t * t + n * n;
            return new a(t / e, -n / e);
          },
          conjugate: function () {
            return new a(this.re, -this.im);
          },
          neg: function () {
            return new a(-this.re, -this.im);
          },
          ceil: function (t) {
            return (
              (t = Math.pow(10, t || 0)),
              new a(Math.ceil(this.re * t) / t, Math.ceil(this.im * t) / t)
            );
          },
          floor: function (t) {
            return (
              (t = Math.pow(10, t || 0)),
              new a(Math.floor(this.re * t) / t, Math.floor(this.im * t) / t)
            );
          },
          round: function (t) {
            return (
              (t = Math.pow(10, t || 0)),
              new a(Math.round(this.re * t) / t, Math.round(this.im * t) / t)
            );
          },
          equals: function (t, n) {
            var e = new a(t, n);
            return (
              Math.abs(e.re - this.re) <= a.EPSILON &&
              Math.abs(e.im - this.im) <= a.EPSILON
            );
          },
          clone: function () {
            return new a(this.re, this.im);
          },
          toString: function () {
            var t = this.re,
              n = this.im,
              e = '';
            return this.isNaN()
              ? 'NaN'
              : this.isInfinite()
              ? 'Infinity'
              : (Math.abs(t) < a.EPSILON && (t = 0),
                Math.abs(n) < a.EPSILON && (n = 0),
                0 === n
                  ? e + t
                  : (0 !== t
                      ? ((e += t),
                        (e += ' '),
                        n < 0 ? ((n = -n), (e += '-')) : (e += '+'),
                        (e += ' '))
                      : n < 0 && ((n = -n), (e += '-')),
                    1 !== n && (e += n),
                    e + 'i'));
          },
          toVector: function () {
            return [this.re, this.im];
          },
          valueOf: function () {
            return 0 === this.im ? this.re : null;
          },
          isNaN: function () {
            return isNaN(this.re) || isNaN(this.im);
          },
          isZero: function () {
            return 0 === this.im && 0 === this.re;
          },
          isFinite: function () {
            return isFinite(this.re) && isFinite(this.im);
          },
          isInfinite: function () {
            return !(this.isNaN() || this.isFinite());
          }
        }),
          (a.ZERO = new a(0, 0)),
          (a.ONE = new a(1, 0)),
          (a.I = new a(0, 1)),
          (a.PI = new a(Math.PI, 0)),
          (a.E = new a(Math.E, 0)),
          (a.INFINITY = new a(1 / 0, 1 / 0)),
          (a.NAN = new a(NaN, NaN)),
          (a.EPSILON = 1e-15),
          void 0 ===
            (e = function () {
              return a;
            }.apply(n, [])) || (t.exports = e);
      })();
    },
    81937: function (t) {
      !(function (n) {
        'use strict';
        var e = { s: 1, n: 0, d: 1 };
        function r(t, n) {
          if (isNaN((t = parseInt(t, 10)))) throw f();
          return t * n;
        }
        function u(t, n) {
          if (0 === n) throw c();
          var e = Object.create(a.prototype);
          e.s = t < 0 ? -1 : 1;
          var r = s((t = t < 0 ? -t : t), n);
          return (e.n = t / r), (e.d = n / r), e;
        }
        function i(t) {
          for (var n = {}, e = t, r = 2, u = 4; u <= e; ) {
            for (; e % r === 0; ) (e /= r), (n[r] = (n[r] || 0) + 1);
            u += 1 + 2 * r++;
          }
          return (
            e !== t
              ? e > 1 && (n[e] = (n[e] || 0) + 1)
              : (n[t] = (n[t] || 0) + 1),
            n
          );
        }
        var o = function (t, n) {
          var u,
            i = 0,
            o = 1,
            s = 1,
            a = 0,
            D = 0,
            l = 0,
            p = 1,
            d = 1,
            m = 0,
            g = 1,
            F = 1,
            w = 1,
            v = 1e7;
          if (void 0 === t || null === t);
          else if (void 0 !== n) {
            if (((s = (i = t) * (o = n)), i % 1 !== 0 || o % 1 !== 0))
              throw h();
          } else
            switch (typeof t) {
              case 'object':
                if ('d' in t && 'n' in t)
                  (i = t.n), (o = t.d), 's' in t && (i *= t.s);
                else {
                  if (!(0 in t)) throw f();
                  (i = t[0]), 1 in t && (o = t[1]);
                }
                s = i * o;
                break;
              case 'number':
                if ((t < 0 && ((s = t), (t = -t)), t % 1 === 0)) i = t;
                else if (t > 0) {
                  for (
                    t >= 1 &&
                    (t /= d =
                      Math.pow(10, Math.floor(1 + Math.log(t) / Math.LN10)));
                    g <= v && w <= v;

                  ) {
                    if (t === (u = (m + F) / (g + w))) {
                      g + w <= v
                        ? ((i = m + F), (o = g + w))
                        : w > g
                        ? ((i = F), (o = w))
                        : ((i = m), (o = g));
                      break;
                    }
                    t > u ? ((m += F), (g += w)) : ((F += m), (w += g)),
                      g > v ? ((i = F), (o = w)) : ((i = m), (o = g));
                  }
                  i *= d;
                } else (isNaN(t) || isNaN(n)) && (o = i = NaN);
                break;
              case 'string':
                if (null === (g = t.match(/\d+|./g))) throw f();
                if (
                  ('-' === g[m] ? ((s = -1), m++) : '+' === g[m] && m++,
                  g.length === m + 1
                    ? (D = r(g[m++], s))
                    : '.' === g[m + 1] || '.' === g[m]
                    ? ('.' !== g[m] && (a = r(g[m++], s)),
                      (++m + 1 === g.length ||
                        ('(' === g[m + 1] && ')' === g[m + 3]) ||
                        ("'" === g[m + 1] && "'" === g[m + 3])) &&
                        ((D = r(g[m], s)),
                        (p = Math.pow(10, g[m].length)),
                        m++),
                      (('(' === g[m] && ')' === g[m + 2]) ||
                        ("'" === g[m] && "'" === g[m + 2])) &&
                        ((l = r(g[m + 1], s)),
                        (d = Math.pow(10, g[m + 1].length) - 1),
                        (m += 3)))
                    : '/' === g[m + 1] || ':' === g[m + 1]
                    ? ((D = r(g[m], s)), (p = r(g[m + 2], 1)), (m += 3))
                    : '/' === g[m + 3] &&
                      ' ' === g[m + 1] &&
                      ((a = r(g[m], s)),
                      (D = r(g[m + 2], s)),
                      (p = r(g[m + 4], 1)),
                      (m += 5)),
                  g.length <= m)
                ) {
                  s = i = l + (o = p * d) * a + d * D;
                  break;
                }
              default:
                throw f();
            }
          if (0 === o) throw c();
          (e.s = s < 0 ? -1 : 1), (e.n = Math.abs(i)), (e.d = Math.abs(o));
        };
        function s(t, n) {
          if (!t) return n;
          if (!n) return t;
          for (;;) {
            if (!(t %= n)) return n;
            if (!(n %= t)) return t;
          }
        }
        function a(t, n) {
          if ((o(t, n), !(this instanceof a))) return u(e.s * e.n, e.d);
          (t = s(e.d, e.n)),
            (this.s = e.s),
            (this.n = e.n / t),
            (this.d = e.d / t);
        }
        var c = function () {
            return new Error('Division by Zero');
          },
          f = function () {
            return new Error('Invalid argument');
          },
          h = function () {
            return new Error('Parameters must be integer');
          };
        (a.prototype = {
          s: 1,
          n: 0,
          d: 1,
          abs: function () {
            return u(this.n, this.d);
          },
          neg: function () {
            return u(-this.s * this.n, this.d);
          },
          add: function (t, n) {
            return (
              o(t, n),
              u(this.s * this.n * e.d + e.s * this.d * e.n, this.d * e.d)
            );
          },
          sub: function (t, n) {
            return (
              o(t, n),
              u(this.s * this.n * e.d - e.s * this.d * e.n, this.d * e.d)
            );
          },
          mul: function (t, n) {
            return o(t, n), u(this.s * e.s * this.n * e.n, this.d * e.d);
          },
          div: function (t, n) {
            return o(t, n), u(this.s * e.s * this.n * e.d, this.d * e.n);
          },
          clone: function () {
            return u(this.s * this.n, this.d);
          },
          mod: function (t, n) {
            if (isNaN(this.n) || isNaN(this.d)) return new a(NaN);
            if (void 0 === t) return u((this.s * this.n) % this.d, 1);
            if ((o(t, n), 0 === e.n && 0 === this.d)) throw c();
            return u((this.s * (e.d * this.n)) % (e.n * this.d), e.d * this.d);
          },
          gcd: function (t, n) {
            return o(t, n), u(s(e.n, this.n) * s(e.d, this.d), e.d * this.d);
          },
          lcm: function (t, n) {
            return (
              o(t, n),
              0 === e.n && 0 === this.n
                ? u(0, 1)
                : u(e.n * this.n, s(e.n, this.n) * s(e.d, this.d))
            );
          },
          ceil: function (t) {
            return (
              (t = Math.pow(10, t || 0)),
              isNaN(this.n) || isNaN(this.d)
                ? new a(NaN)
                : u(Math.ceil((t * this.s * this.n) / this.d), t)
            );
          },
          floor: function (t) {
            return (
              (t = Math.pow(10, t || 0)),
              isNaN(this.n) || isNaN(this.d)
                ? new a(NaN)
                : u(Math.floor((t * this.s * this.n) / this.d), t)
            );
          },
          round: function (t) {
            return (
              (t = Math.pow(10, t || 0)),
              isNaN(this.n) || isNaN(this.d)
                ? new a(NaN)
                : u(Math.round((t * this.s * this.n) / this.d), t)
            );
          },
          inverse: function () {
            return u(this.s * this.d, this.n);
          },
          pow: function (t, n) {
            if ((o(t, n), 1 === e.d))
              return e.s < 0
                ? u(Math.pow(this.s * this.d, e.n), Math.pow(this.n, e.n))
                : u(Math.pow(this.s * this.n, e.n), Math.pow(this.d, e.n));
            if (this.s < 0) return null;
            var r = i(this.n),
              s = i(this.d),
              a = 1,
              c = 1;
            for (var f in r)
              if ('1' !== f) {
                if ('0' === f) {
                  a = 0;
                  break;
                }
                if (((r[f] *= e.n), r[f] % e.d !== 0)) return null;
                (r[f] /= e.d), (a *= Math.pow(f, r[f]));
              }
            for (var f in s)
              if ('1' !== f) {
                if (((s[f] *= e.n), s[f] % e.d !== 0)) return null;
                (s[f] /= e.d), (c *= Math.pow(f, s[f]));
              }
            return e.s < 0 ? u(c, a) : u(a, c);
          },
          equals: function (t, n) {
            return o(t, n), this.s * this.n * e.d === e.s * e.n * this.d;
          },
          compare: function (t, n) {
            o(t, n);
            var r = this.s * this.n * e.d - e.s * e.n * this.d;
            return (0 < r) - (r < 0);
          },
          simplify: function (t) {
            if (isNaN(this.n) || isNaN(this.d)) return this;
            t = t || 0.001;
            for (
              var n = this.abs(), e = n.toContinued(), r = 1;
              r < e.length;
              r++
            ) {
              for (var i = u(e[r - 1], 1), o = r - 2; o >= 0; o--)
                i = i.inverse().add(e[o]);
              if (Math.abs(i.sub(n).valueOf()) < t) return i.mul(this.s);
            }
            return this;
          },
          divisible: function (t, n) {
            return (
              o(t, n), !(!(e.n * this.d) || (this.n * e.d) % (e.n * this.d))
            );
          },
          valueOf: function () {
            return (this.s * this.n) / this.d;
          },
          toFraction: function (t) {
            var n,
              e = '',
              r = this.n,
              u = this.d;
            return (
              this.s < 0 && (e += '-'),
              1 === u
                ? (e += r)
                : (t &&
                    (n = Math.floor(r / u)) > 0 &&
                    ((e += n), (e += ' '), (r %= u)),
                  (e += r),
                  (e += '/'),
                  (e += u)),
              e
            );
          },
          toLatex: function (t) {
            var n,
              e = '',
              r = this.n,
              u = this.d;
            return (
              this.s < 0 && (e += '-'),
              1 === u
                ? (e += r)
                : (t && (n = Math.floor(r / u)) > 0 && ((e += n), (r %= u)),
                  (e += '\\frac{'),
                  (e += r),
                  (e += '}{'),
                  (e += u),
                  (e += '}')),
              e
            );
          },
          toContinued: function () {
            var t,
              n = this.n,
              e = this.d,
              r = [];
            if (isNaN(n) || isNaN(e)) return r;
            do {
              r.push(Math.floor(n / e)), (t = n % e), (n = e), (e = t);
            } while (1 !== n);
            return r;
          },
          toString: function (t) {
            var n = this.n,
              e = this.d;
            if (isNaN(n) || isNaN(e)) return 'NaN';
            t = t || 15;
            var r = (function (t, n) {
                for (; n % 2 === 0; n /= 2);
                for (; n % 5 === 0; n /= 5);
                if (1 === n) return 0;
                for (var e = 10 % n, r = 1; 1 !== e; r++)
                  if (((e = (10 * e) % n), r > 2e3)) return 0;
                return r;
              })(0, e),
              u = (function (t, n, e) {
                for (
                  var r = 1,
                    u = (function (t, n, e) {
                      for (var r = 1; n > 0; t = (t * t) % e, n >>= 1)
                        1 & n && (r = (r * t) % e);
                      return r;
                    })(10, e, n),
                    i = 0;
                  i < 300;
                  i++
                ) {
                  if (r === u) return i;
                  (r = (10 * r) % n), (u = (10 * u) % n);
                }
                return 0;
              })(0, e, r),
              i = this.s < 0 ? '-' : '';
            if (((i += (n / e) | 0), (n %= e), (n *= 10) && (i += '.'), r)) {
              for (var o = u; o--; ) (i += (n / e) | 0), (n %= e), (n *= 10);
              i += '(';
              for (o = r; o--; ) (i += (n / e) | 0), (n %= e), (n *= 10);
              i += ')';
            } else
              for (o = t; n && o--; ) (i += (n / e) | 0), (n %= e), (n *= 10);
            return i;
          }
        }),
          Object.defineProperty(a, '__esModule', { value: !0 }),
          (a.default = a),
          (a.Fraction = a),
          (t.exports = a);
      })();
    },
    15939: (t) => {
      t.exports = function t(n, e) {
        'use strict';
        var r,
          u,
          i =
            /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
          o = /(^[ ]*|[ ]*$)/g,
          s =
            /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
          a = /^0x[0-9a-f]+$/i,
          c = /^0/,
          f = function (n) {
            return (t.insensitive && ('' + n).toLowerCase()) || '' + n;
          },
          h = f(n).replace(o, '') || '',
          D = f(e).replace(o, '') || '',
          l = h
            .replace(i, '\0$1\0')
            .replace(/\0$/, '')
            .replace(/^\0/, '')
            .split('\0'),
          p = D.replace(i, '\0$1\0')
            .replace(/\0$/, '')
            .replace(/^\0/, '')
            .split('\0'),
          d =
            parseInt(h.match(a), 16) ||
            (1 !== l.length && h.match(s) && Date.parse(h)),
          m =
            parseInt(D.match(a), 16) ||
            (d && D.match(s) && Date.parse(D)) ||
            null;
        if (m) {
          if (d < m) return -1;
          if (d > m) return 1;
        }
        for (var g = 0, F = Math.max(l.length, p.length); g < F; g++) {
          if (
            ((r = (!(l[g] || '').match(c) && parseFloat(l[g])) || l[g] || 0),
            (u = (!(p[g] || '').match(c) && parseFloat(p[g])) || p[g] || 0),
            isNaN(r) !== isNaN(u))
          )
            return isNaN(r) ? 1 : -1;
          if ((typeof r !== typeof u && ((r += ''), (u += '')), r < u))
            return -1;
          if (r > u) return 1;
        }
        return 0;
      };
    },
    34334: (t, n, e) => {
      var r = e(17359),
        u = e(77066),
        i = e(29016),
        o = e(69538),
        s = e(6288),
        a = e(45262),
        c = e(22430);
      (c.alea = r),
        (c.xor128 = u),
        (c.xorwow = i),
        (c.xorshift7 = o),
        (c.xor4096 = s),
        (c.tychei = a),
        (t.exports = c);
    },
    17359: function (t, n, e) {
      var r;
      !(function (t, u, i) {
        function o(t) {
          var n = this,
            e = (function () {
              var t = 4022871197,
                n = function (n) {
                  n = String(n);
                  for (var e = 0; e < n.length; e++) {
                    var r = 0.02519603282416938 * (t += n.charCodeAt(e));
                    (r -= t = r >>> 0),
                      (t = (r *= t) >>> 0),
                      (t += 4294967296 * (r -= t));
                  }
                  return 2.3283064365386963e-10 * (t >>> 0);
                };
              return n;
            })();
          (n.next = function () {
            var t = 2091639 * n.s0 + 2.3283064365386963e-10 * n.c;
            return (n.s0 = n.s1), (n.s1 = n.s2), (n.s2 = t - (n.c = 0 | t));
          }),
            (n.c = 1),
            (n.s0 = e(' ')),
            (n.s1 = e(' ')),
            (n.s2 = e(' ')),
            (n.s0 -= e(t)),
            n.s0 < 0 && (n.s0 += 1),
            (n.s1 -= e(t)),
            n.s1 < 0 && (n.s1 += 1),
            (n.s2 -= e(t)),
            n.s2 < 0 && (n.s2 += 1),
            (e = null);
        }
        function s(t, n) {
          return (n.c = t.c), (n.s0 = t.s0), (n.s1 = t.s1), (n.s2 = t.s2), n;
        }
        function a(t, n) {
          var e = new o(t),
            r = n && n.state,
            u = e.next;
          return (
            (u.int32 = function () {
              return (4294967296 * e.next()) | 0;
            }),
            (u.double = function () {
              return u() + 11102230246251565e-32 * ((2097152 * u()) | 0);
            }),
            (u.quick = u),
            r &&
              ('object' == typeof r && s(r, e),
              (u.state = function () {
                return s(e, {});
              })),
            u
          );
        }
        u && u.exports
          ? (u.exports = a)
          : e.amdD && e.amdO
          ? void 0 ===
              (r = function () {
                return a;
              }.call(n, e, n, u)) || (u.exports = r)
          : (this.alea = a);
      })(0, (t = e.nmd(t)), e.amdD);
    },
    45262: function (t, n, e) {
      var r;
      !(function (t, u, i) {
        function o(t) {
          var n = this,
            e = '';
          (n.next = function () {
            var t = n.b,
              e = n.c,
              r = n.d,
              u = n.a;
            return (
              (t = (t << 25) ^ (t >>> 7) ^ e),
              (e = (e - r) | 0),
              (r = (r << 24) ^ (r >>> 8) ^ u),
              (u = (u - t) | 0),
              (n.b = t = (t << 20) ^ (t >>> 12) ^ e),
              (n.c = e = (e - r) | 0),
              (n.d = (r << 16) ^ (e >>> 16) ^ u),
              (n.a = (u - t) | 0)
            );
          }),
            (n.a = 0),
            (n.b = 0),
            (n.c = -1640531527),
            (n.d = 1367130551),
            t === Math.floor(t)
              ? ((n.a = (t / 4294967296) | 0), (n.b = 0 | t))
              : (e += t);
          for (var r = 0; r < e.length + 20; r++)
            (n.b ^= 0 | e.charCodeAt(r)), n.next();
        }
        function s(t, n) {
          return (n.a = t.a), (n.b = t.b), (n.c = t.c), (n.d = t.d), n;
        }
        function a(t, n) {
          var e = new o(t),
            r = n && n.state,
            u = function () {
              return (e.next() >>> 0) / 4294967296;
            };
          return (
            (u.double = function () {
              do {
                var t =
                  ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) /
                  (1 << 21);
              } while (0 === t);
              return t;
            }),
            (u.int32 = e.next),
            (u.quick = u),
            r &&
              ('object' == typeof r && s(r, e),
              (u.state = function () {
                return s(e, {});
              })),
            u
          );
        }
        u && u.exports
          ? (u.exports = a)
          : e.amdD && e.amdO
          ? void 0 ===
              (r = function () {
                return a;
              }.call(n, e, n, u)) || (u.exports = r)
          : (this.tychei = a);
      })(0, (t = e.nmd(t)), e.amdD);
    },
    77066: function (t, n, e) {
      var r;
      !(function (t, u, i) {
        function o(t) {
          var n = this,
            e = '';
          (n.x = 0),
            (n.y = 0),
            (n.z = 0),
            (n.w = 0),
            (n.next = function () {
              var t = n.x ^ (n.x << 11);
              return (
                (n.x = n.y),
                (n.y = n.z),
                (n.z = n.w),
                (n.w ^= (n.w >>> 19) ^ t ^ (t >>> 8))
              );
            }),
            t === (0 | t) ? (n.x = t) : (e += t);
          for (var r = 0; r < e.length + 64; r++)
            (n.x ^= 0 | e.charCodeAt(r)), n.next();
        }
        function s(t, n) {
          return (n.x = t.x), (n.y = t.y), (n.z = t.z), (n.w = t.w), n;
        }
        function a(t, n) {
          var e = new o(t),
            r = n && n.state,
            u = function () {
              return (e.next() >>> 0) / 4294967296;
            };
          return (
            (u.double = function () {
              do {
                var t =
                  ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) /
                  (1 << 21);
              } while (0 === t);
              return t;
            }),
            (u.int32 = e.next),
            (u.quick = u),
            r &&
              ('object' == typeof r && s(r, e),
              (u.state = function () {
                return s(e, {});
              })),
            u
          );
        }
        u && u.exports
          ? (u.exports = a)
          : e.amdD && e.amdO
          ? void 0 ===
              (r = function () {
                return a;
              }.call(n, e, n, u)) || (u.exports = r)
          : (this.xor128 = a);
      })(0, (t = e.nmd(t)), e.amdD);
    },
    6288: function (t, n, e) {
      var r;
      !(function (t, u, i) {
        function o(t) {
          var n = this;
          (n.next = function () {
            var t,
              e,
              r = n.w,
              u = n.X,
              i = n.i;
            return (
              (n.w = r = (r + 1640531527) | 0),
              (e = u[(i + 34) & 127]),
              (t = u[(i = (i + 1) & 127)]),
              (e ^= e << 13),
              (t ^= t << 17),
              (e ^= e >>> 15),
              (t ^= t >>> 12),
              (e = u[i] = e ^ t),
              (n.i = i),
              (e + (r ^ (r >>> 16))) | 0
            );
          }),
            (function (t, n) {
              var e,
                r,
                u,
                i,
                o,
                s = [],
                a = 128;
              for (
                n === (0 | n)
                  ? ((r = n), (n = null))
                  : ((n += '\0'), (r = 0), (a = Math.max(a, n.length))),
                  u = 0,
                  i = -32;
                i < a;
                ++i
              )
                n && (r ^= n.charCodeAt((i + 32) % n.length)),
                  0 === i && (o = r),
                  (r ^= r << 10),
                  (r ^= r >>> 15),
                  (r ^= r << 4),
                  (r ^= r >>> 13),
                  i >= 0 &&
                    ((o = (o + 1640531527) | 0),
                    (u = 0 == (e = s[127 & i] ^= r + o) ? u + 1 : 0));
              for (
                u >= 128 && (s[127 & ((n && n.length) || 0)] = -1),
                  u = 127,
                  i = 512;
                i > 0;
                --i
              )
                (r = s[(u + 34) & 127]),
                  (e = s[(u = (u + 1) & 127)]),
                  (r ^= r << 13),
                  (e ^= e << 17),
                  (r ^= r >>> 15),
                  (e ^= e >>> 12),
                  (s[u] = r ^ e);
              (t.w = o), (t.X = s), (t.i = u);
            })(n, t);
        }
        function s(t, n) {
          return (n.i = t.i), (n.w = t.w), (n.X = t.X.slice()), n;
        }
        function a(t, n) {
          null == t && (t = +new Date());
          var e = new o(t),
            r = n && n.state,
            u = function () {
              return (e.next() >>> 0) / 4294967296;
            };
          return (
            (u.double = function () {
              do {
                var t =
                  ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) /
                  (1 << 21);
              } while (0 === t);
              return t;
            }),
            (u.int32 = e.next),
            (u.quick = u),
            r &&
              (r.X && s(r, e),
              (u.state = function () {
                return s(e, {});
              })),
            u
          );
        }
        u && u.exports
          ? (u.exports = a)
          : e.amdD && e.amdO
          ? void 0 ===
              (r = function () {
                return a;
              }.call(n, e, n, u)) || (u.exports = r)
          : (this.xor4096 = a);
      })(0, (t = e.nmd(t)), e.amdD);
    },
    69538: function (t, n, e) {
      var r;
      !(function (t, u, i) {
        function o(t) {
          var n = this;
          (n.next = function () {
            var t,
              e,
              r = n.x,
              u = n.i;
            return (
              (t = r[u]),
              (e = (t ^= t >>> 7) ^ (t << 24)),
              (e ^= (t = r[(u + 1) & 7]) ^ (t >>> 10)),
              (e ^= (t = r[(u + 3) & 7]) ^ (t >>> 3)),
              (e ^= (t = r[(u + 4) & 7]) ^ (t << 7)),
              (t = r[(u + 7) & 7]),
              (e ^= (t ^= t << 13) ^ (t << 9)),
              (r[u] = e),
              (n.i = (u + 1) & 7),
              e
            );
          }),
            (function (t, n) {
              var e,
                r = [];
              if (n === (0 | n)) r[0] = n;
              else
                for (n = '' + n, e = 0; e < n.length; ++e)
                  r[7 & e] =
                    (r[7 & e] << 15) ^
                    ((n.charCodeAt(e) + r[(e + 1) & 7]) << 13);
              for (; r.length < 8; ) r.push(0);
              for (e = 0; e < 8 && 0 === r[e]; ++e);
              for (
                8 == e ? (r[7] = -1) : r[e], t.x = r, t.i = 0, e = 256;
                e > 0;
                --e
              )
                t.next();
            })(n, t);
        }
        function s(t, n) {
          return (n.x = t.x.slice()), (n.i = t.i), n;
        }
        function a(t, n) {
          null == t && (t = +new Date());
          var e = new o(t),
            r = n && n.state,
            u = function () {
              return (e.next() >>> 0) / 4294967296;
            };
          return (
            (u.double = function () {
              do {
                var t =
                  ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) /
                  (1 << 21);
              } while (0 === t);
              return t;
            }),
            (u.int32 = e.next),
            (u.quick = u),
            r &&
              (r.x && s(r, e),
              (u.state = function () {
                return s(e, {});
              })),
            u
          );
        }
        u && u.exports
          ? (u.exports = a)
          : e.amdD && e.amdO
          ? void 0 ===
              (r = function () {
                return a;
              }.call(n, e, n, u)) || (u.exports = r)
          : (this.xorshift7 = a);
      })(0, (t = e.nmd(t)), e.amdD);
    },
    29016: function (t, n, e) {
      var r;
      !(function (t, u, i) {
        function o(t) {
          var n = this,
            e = '';
          (n.next = function () {
            var t = n.x ^ (n.x >>> 2);
            return (
              (n.x = n.y),
              (n.y = n.z),
              (n.z = n.w),
              (n.w = n.v),
              ((n.d = (n.d + 362437) | 0) +
                (n.v = n.v ^ (n.v << 4) ^ t ^ (t << 1))) |
                0
            );
          }),
            (n.x = 0),
            (n.y = 0),
            (n.z = 0),
            (n.w = 0),
            (n.v = 0),
            t === (0 | t) ? (n.x = t) : (e += t);
          for (var r = 0; r < e.length + 64; r++)
            (n.x ^= 0 | e.charCodeAt(r)),
              r == e.length && (n.d = (n.x << 10) ^ (n.x >>> 4)),
              n.next();
        }
        function s(t, n) {
          return (
            (n.x = t.x),
            (n.y = t.y),
            (n.z = t.z),
            (n.w = t.w),
            (n.v = t.v),
            (n.d = t.d),
            n
          );
        }
        function a(t, n) {
          var e = new o(t),
            r = n && n.state,
            u = function () {
              return (e.next() >>> 0) / 4294967296;
            };
          return (
            (u.double = function () {
              do {
                var t =
                  ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) /
                  (1 << 21);
              } while (0 === t);
              return t;
            }),
            (u.int32 = e.next),
            (u.quick = u),
            r &&
              ('object' == typeof r && s(r, e),
              (u.state = function () {
                return s(e, {});
              })),
            u
          );
        }
        u && u.exports
          ? (u.exports = a)
          : e.amdD && e.amdO
          ? void 0 ===
              (r = function () {
                return a;
              }.call(n, e, n, u)) || (u.exports = r)
          : (this.xorwow = a);
      })(0, (t = e.nmd(t)), e.amdD);
    },
    22430: function (t, n, e) {
      var r;
      !(function (u, i, o) {
        var s,
          a = 256,
          c = o.pow(a, 6),
          f = o.pow(2, 52),
          h = 2 * f,
          D = a - 1;
        function l(t, n, e) {
          var r = [],
            D = g(
              m(
                (n = 1 == n ? { entropy: !0 } : n || {}).entropy
                  ? [t, F(i)]
                  : null == t
                  ? (function () {
                      try {
                        var t;
                        return (
                          s && (t = s.randomBytes)
                            ? (t = t(a))
                            : ((t = new Uint8Array(a)),
                              (u.crypto || u.msCrypto).getRandomValues(t)),
                          F(t)
                        );
                      } catch (r) {
                        var n = u.navigator,
                          e = n && n.plugins;
                        return [+new Date(), u, e, u.screen, F(i)];
                      }
                    })()
                  : t,
                3
              ),
              r
            ),
            l = new p(r),
            w = function () {
              for (var t = l.g(6), n = c, e = 0; t < f; )
                (t = (t + e) * a), (n *= a), (e = l.g(1));
              for (; t >= h; ) (t /= 2), (n /= 2), (e >>>= 1);
              return (t + e) / n;
            };
          return (
            (w.int32 = function () {
              return 0 | l.g(4);
            }),
            (w.quick = function () {
              return l.g(4) / 4294967296;
            }),
            (w.double = w),
            g(F(l.S), i),
            (
              n.pass ||
              e ||
              function (t, n, e, r) {
                return (
                  r &&
                    (r.S && d(r, l),
                    (t.state = function () {
                      return d(l, {});
                    })),
                  e ? ((o.random = t), n) : t
                );
              }
            )(w, D, 'global' in n ? n.global : this == o, n.state)
          );
        }
        function p(t) {
          var n,
            e = t.length,
            r = this,
            u = 0,
            i = (r.i = r.j = 0),
            o = (r.S = []);
          for (e || (t = [e++]); u < a; ) o[u] = u++;
          for (u = 0; u < a; u++)
            (o[u] = o[(i = D & (i + t[u % e] + (n = o[u])))]), (o[i] = n);
          (r.g = function (t) {
            for (var n, e = 0, u = r.i, i = r.j, o = r.S; t--; )
              (n = o[(u = D & (u + 1))]),
                (e =
                  e * a + o[D & ((o[u] = o[(i = D & (i + n))]) + (o[i] = n))]);
            return (r.i = u), (r.j = i), e;
          })(a);
        }
        function d(t, n) {
          return (n.i = t.i), (n.j = t.j), (n.S = t.S.slice()), n;
        }
        function m(t, n) {
          var e,
            r = [],
            u = typeof t;
          if (n && 'object' == u)
            for (e in t)
              try {
                r.push(m(t[e], n - 1));
              } catch (i) {}
          return r.length ? r : 'string' == u ? t : t + '\0';
        }
        function g(t, n) {
          for (var e, r = t + '', u = 0; u < r.length; )
            n[D & u] = D & ((e ^= 19 * n[D & u]) + r.charCodeAt(u++));
          return F(n);
        }
        function F(t) {
          return String.fromCharCode.apply(0, t);
        }
        if ((g(o.random(), i), t.exports)) {
          t.exports = l;
          try {
            s = e(41234);
          } catch (w) {}
        } else
          void 0 ===
            (r = function () {
              return l;
            }.call(n, e, n, t)) || (t.exports = r);
      })('undefined' !== typeof self ? self : this, [], Math);
    },
    45422: function (t) {
      t.exports = (function () {
        'use strict';
        function t() {
          return !0;
        }
        function n() {
          return !1;
        }
        function e() {}
        const r = 'Argument is not a typed-function.';
        function u() {
          function i(t) {
            return (
              'object' === typeof t && null !== t && t.constructor === Object
            );
          }
          const o = [
              {
                name: 'number',
                test: function (t) {
                  return 'number' === typeof t;
                }
              },
              {
                name: 'string',
                test: function (t) {
                  return 'string' === typeof t;
                }
              },
              {
                name: 'boolean',
                test: function (t) {
                  return 'boolean' === typeof t;
                }
              },
              {
                name: 'Function',
                test: function (t) {
                  return 'function' === typeof t;
                }
              },
              { name: 'Array', test: Array.isArray },
              {
                name: 'Date',
                test: function (t) {
                  return t instanceof Date;
                }
              },
              {
                name: 'RegExp',
                test: function (t) {
                  return t instanceof RegExp;
                }
              },
              { name: 'Object', test: i },
              {
                name: 'null',
                test: function (t) {
                  return null === t;
                }
              },
              {
                name: 'undefined',
                test: function (t) {
                  return void 0 === t;
                }
              }
            ],
            s = { name: 'any', test: t, isAny: !0 };
          let a,
            c,
            f = 0,
            h = { createCount: 0 };
          function D(t) {
            const n = a.get(t);
            if (n) return n;
            let e = 'Unknown type "' + t + '"';
            const r = t.toLowerCase();
            let u;
            for (u of c)
              if (u.toLowerCase() === r) {
                e += '. Did you mean "' + u + '" ?';
                break;
              }
            throw new TypeError(e);
          }
          function l(t) {
            let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'any';
            const e = n ? D(n).index : c.length,
              r = [];
            for (let i = 0; i < t.length; ++i) {
              if (
                !t[i] ||
                'string' !== typeof t[i].name ||
                'function' !== typeof t[i].test
              )
                throw new TypeError(
                  'Object with properties {name: string, test: function} expected'
                );
              const n = t[i].name;
              if (a.has(n))
                throw new TypeError('Duplicate type name "' + n + '"');
              r.push(n),
                a.set(n, {
                  name: n,
                  test: t[i].test,
                  isAny: t[i].isAny,
                  index: e + i,
                  conversionsTo: []
                });
            }
            const u = c.slice(e);
            c = c.slice(0, e).concat(r).concat(u);
            for (let i = e + r.length; i < c.length; ++i) a.get(c[i]).index = i;
          }
          function p() {
            (a = new Map()), (c = []), (f = 0), l([s], !1);
          }
          function d() {
            let t;
            for (t of c) a.get(t).conversionsTo = [];
            f = 0;
          }
          function m(t) {
            const n = c.filter((n) => {
              const e = a.get(n);
              return !e.isAny && e.test(t);
            });
            return n.length ? n : ['any'];
          }
          function g(t) {
            return t && 'function' === typeof t && '_typedFunctionData' in t;
          }
          function F(t, n, e) {
            if (!g(t)) throw new TypeError(r);
            const u = e && e.exact,
              i = x(Array.isArray(n) ? n.join(',') : n),
              o = E(i);
            if (!u || o in t.signatures) {
              const n = t._typedFunctionData.signatureMap.get(o);
              if (n) return n;
            }
            const s = i.length;
            let a, c;
            if (u) {
              let n;
              for (n in ((a = []), t.signatures))
                a.push(t._typedFunctionData.signatureMap.get(n));
            } else a = t._typedFunctionData.signatures;
            for (let r = 0; r < s; ++r) {
              const t = i[r],
                n = [];
              let e;
              for (e of a) {
                const u = M(e.params, r);
                if (u && (!t.restParam || u.restParam)) {
                  if (!u.hasAny) {
                    const n = C(u);
                    if (t.types.some((t) => !n.has(t.name))) continue;
                  }
                  n.push(e);
                }
              }
              if (((a = n), 0 === a.length)) break;
            }
            for (c of a) if (c.params.length <= s) return c;
            throw new TypeError(
              'Signature not found (signature: ' +
                (t.name || 'unnamed') +
                '(' +
                E(i, ', ') +
                '))'
            );
          }
          function w(t, n, e) {
            return F(t, n, e).implementation;
          }
          function v(t, n) {
            const e = D(n);
            if (e.test(t)) return t;
            const r = e.conversionsTo;
            if (0 === r.length)
              throw new Error('There are no conversions to ' + n + ' defined.');
            for (let u = 0; u < r.length; u++)
              if (D(r[u].from).test(t)) return r[u].convert(t);
            throw new Error('Cannot convert ' + t + ' to ' + n);
          }
          function E(t) {
            let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : ',';
            return t.map((t) => t.name).join(n);
          }
          function A(t) {
            const n = 0 === t.indexOf('...'),
              e = (n ? (t.length > 3 ? t.slice(3) : 'any') : t)
                .split('|')
                .map((t) => D(t.trim()));
            let r = !1,
              u = n ? '...' : '';
            return {
              types: e.map(function (t) {
                return (
                  (r = t.isAny || r),
                  (u += t.name + '|'),
                  {
                    name: t.name,
                    typeIndex: t.index,
                    test: t.test,
                    isAny: t.isAny,
                    conversion: null,
                    conversionIndex: -1
                  }
                );
              }),
              name: u.slice(0, -1),
              hasAny: r,
              hasConversion: !1,
              restParam: n
            };
          }
          function y(t) {
            const n = P(t.types.map((t) => t.name));
            let e = t.hasAny,
              r = t.name;
            const u = n.map(function (t) {
              const n = D(t.from);
              return (
                (e = n.isAny || e),
                (r += '|' + t.from),
                {
                  name: t.from,
                  typeIndex: n.index,
                  test: n.test,
                  isAny: n.isAny,
                  conversion: t,
                  conversionIndex: t.index
                }
              );
            });
            return {
              types: t.types.concat(u),
              name: r,
              hasAny: e,
              hasConversion: u.length > 0,
              restParam: t.restParam
            };
          }
          function C(t) {
            return (
              t.typeSet ||
                ((t.typeSet = new Set()),
                t.types.forEach((n) => t.typeSet.add(n.name))),
              t.typeSet
            );
          }
          function x(t) {
            const n = [];
            if ('string' !== typeof t)
              throw new TypeError('Signatures must be strings');
            const e = t.trim();
            if ('' === e) return n;
            const r = e.split(',');
            for (let u = 0; u < r.length; ++u) {
              const t = A(r[u].trim());
              if (t.restParam && u !== r.length - 1)
                throw new SyntaxError(
                  'Unexpected rest parameter "' +
                    r[u] +
                    '": only allowed for the last parameter'
                );
              if (0 === t.types.length) return null;
              n.push(t);
            }
            return n;
          }
          function B(t) {
            const n = W(t);
            return !!n && n.restParam;
          }
          function b(n) {
            if (n && 0 !== n.types.length) {
              if (1 === n.types.length) return D(n.types[0].name).test;
              if (2 === n.types.length) {
                const t = D(n.types[0].name).test,
                  e = D(n.types[1].name).test;
                return function (n) {
                  return t(n) || e(n);
                };
              }
              {
                const t = n.types.map(function (t) {
                  return D(t.name).test;
                });
                return function (n) {
                  for (let e = 0; e < t.length; e++) if (t[e](n)) return !0;
                  return !1;
                };
              }
            }
            return t;
          }
          function N(t) {
            let n, e, r;
            if (B(t)) {
              n = X(t).map(b);
              const e = n.length,
                r = b(W(t)),
                u = function (t) {
                  for (let n = e; n < t.length; n++) if (!r(t[n])) return !1;
                  return !0;
                };
              return function (t) {
                for (let e = 0; e < n.length; e++) if (!n[e](t[e])) return !1;
                return u(t) && t.length >= e + 1;
              };
            }
            return 0 === t.length
              ? function (t) {
                  return 0 === t.length;
                }
              : 1 === t.length
              ? ((e = b(t[0])),
                function (t) {
                  return e(t[0]) && 1 === t.length;
                })
              : 2 === t.length
              ? ((e = b(t[0])),
                (r = b(t[1])),
                function (t) {
                  return e(t[0]) && r(t[1]) && 2 === t.length;
                })
              : ((n = t.map(b)),
                function (t) {
                  for (let e = 0; e < n.length; e++) if (!n[e](t[e])) return !1;
                  return t.length === n.length;
                });
          }
          function M(t, n) {
            return n < t.length ? t[n] : B(t) ? W(t) : null;
          }
          function _(t, n) {
            const e = M(t, n);
            return e ? C(e) : new Set();
          }
          function S(t) {
            return null === t.conversion || void 0 === t.conversion;
          }
          function O(t, n) {
            const e = new Set();
            return (
              t.forEach((t) => {
                const r = _(t.params, n);
                let u;
                for (u of r) e.add(u);
              }),
              e.has('any') ? ['any'] : Array.from(e)
            );
          }
          function T(t, n, e) {
            let r, u;
            const i = t || 'unnamed';
            let o,
              s = e;
            for (o = 0; o < n.length; o++) {
              const t = [];
              if (
                (s.forEach((e) => {
                  const r = b(M(e.params, o));
                  (o < e.params.length || B(e.params)) && r(n[o]) && t.push(e);
                }),
                0 === t.length)
              ) {
                if (((u = O(s, o)), u.length > 0)) {
                  const t = m(n[o]);
                  return (
                    (r = new TypeError(
                      'Unexpected type of argument in function ' +
                        i +
                        ' (expected: ' +
                        u.join(' or ') +
                        ', actual: ' +
                        t.join(' | ') +
                        ', index: ' +
                        o +
                        ')'
                    )),
                    (r.data = {
                      category: 'wrongType',
                      fn: i,
                      index: o,
                      actual: t,
                      expected: u
                    }),
                    r
                  );
                }
              } else s = t;
            }
            const a = s.map(function (t) {
              return B(t.params) ? 1 / 0 : t.params.length;
            });
            if (n.length < Math.min.apply(null, a))
              return (
                (u = O(s, o)),
                (r = new TypeError(
                  'Too few arguments in function ' +
                    i +
                    ' (expected: ' +
                    u.join(' or ') +
                    ', index: ' +
                    n.length +
                    ')'
                )),
                (r.data = {
                  category: 'tooFewArgs',
                  fn: i,
                  index: n.length,
                  expected: u
                }),
                r
              );
            const c = Math.max.apply(null, a);
            if (n.length > c)
              return (
                (r = new TypeError(
                  'Too many arguments in function ' +
                    i +
                    ' (expected: ' +
                    c +
                    ', actual: ' +
                    n.length +
                    ')'
                )),
                (r.data = {
                  category: 'tooManyArgs',
                  fn: i,
                  index: n.length,
                  expectedLength: c
                }),
                r
              );
            const f = [];
            for (let h = 0; h < n.length; ++h) f.push(m(n[h]).join('|'));
            return (
              (r = new TypeError(
                'Arguments of type "' +
                  f.join(', ') +
                  '" do not match any of the defined signatures of function ' +
                  i +
                  '.'
              )),
              (r.data = { category: 'mismatch', actual: f }),
              r
            );
          }
          function z(t) {
            let n = c.length + 1;
            for (let e = 0; e < t.types.length; e++)
              S(t.types[e]) && (n = Math.min(n, t.types[e].typeIndex));
            return n;
          }
          function I(t) {
            let n = f + 1;
            for (let e = 0; e < t.types.length; e++)
              S(t.types[e]) || (n = Math.min(n, t.types[e].conversionIndex));
            return n;
          }
          function j(t, n) {
            if (t.hasAny) {
              if (!n.hasAny) return 1;
            } else if (n.hasAny) return -1;
            if (t.restParam) {
              if (!n.restParam) return 1;
            } else if (n.restParam) return -1;
            if (t.hasConversion) {
              if (!n.hasConversion) return 1;
            } else if (n.hasConversion) return -1;
            const e = z(t) - z(n);
            if (e < 0) return -1;
            if (e > 0) return 1;
            const r = I(t) - I(n);
            return r < 0 ? -1 : r > 0 ? 1 : 0;
          }
          function k(t, n) {
            const e = t.params,
              r = n.params,
              u = W(e),
              i = W(r),
              o = B(e),
              s = B(r);
            if (o && u.hasAny) {
              if (!s || !i.hasAny) return 1;
            } else if (s && i.hasAny) return -1;
            let a,
              c = 0,
              f = 0;
            for (a of e) a.hasAny && ++c, a.hasConversion && ++f;
            let h = 0,
              D = 0;
            for (a of r) a.hasAny && ++h, a.hasConversion && ++D;
            if (c !== h) return c - h;
            if (o && u.hasConversion) {
              if (!s || !i.hasConversion) return 1;
            } else if (s && i.hasConversion) return -1;
            if (f !== D) return f - D;
            if (o) {
              if (!s) return 1;
            } else if (s) return -1;
            const l = (e.length - r.length) * (o ? -1 : 1);
            if (0 !== l) return l;
            const p = [];
            let d,
              m = 0;
            for (let g = 0; g < e.length; ++g) {
              const t = j(e[g], r[g]);
              p.push(t), (m += t);
            }
            if (0 !== m) return m;
            for (d of p) if (0 !== d) return d;
            return 0;
          }
          function P(t) {
            if (0 === t.length) return [];
            const n = t.map(D);
            t.length > 1 && n.sort((t, n) => t.index - n.index);
            let e = n[0].conversionsTo;
            if (1 === t.length) return e;
            e = e.concat([]);
            const r = new Set(t);
            for (let u = 1; u < n.length; ++u) {
              let t;
              for (t of n[u].conversionsTo)
                r.has(t.from) || (e.push(t), r.add(t.from));
            }
            return e;
          }
          function q(t, n) {
            let e = n;
            if (t.some((t) => t.hasConversion)) {
              const r = B(t),
                u = t.map(R);
              e = function () {
                const t = [],
                  e = r ? arguments.length - 1 : arguments.length;
                for (let n = 0; n < e; n++) t[n] = u[n](arguments[n]);
                return r && (t[e] = arguments[e].map(u[e])), n.apply(this, t);
              };
            }
            let r = e;
            if (B(t)) {
              const n = t.length - 1;
              r = function () {
                return e.apply(
                  this,
                  G(arguments, 0, n).concat([G(arguments, n)])
                );
              };
            }
            return r;
          }
          function R(t) {
            let n, e, r, u;
            const i = [],
              o = [];
            switch (
              (t.types.forEach(function (t) {
                t.conversion &&
                  (i.push(D(t.conversion.from).test),
                  o.push(t.conversion.convert));
              }),
              o.length)
            ) {
              case 0:
                return function (t) {
                  return t;
                };
              case 1:
                return (
                  (n = i[0]),
                  (r = o[0]),
                  function (t) {
                    return n(t) ? r(t) : t;
                  }
                );
              case 2:
                return (
                  (n = i[0]),
                  (e = i[1]),
                  (r = o[0]),
                  (u = o[1]),
                  function (t) {
                    return n(t) ? r(t) : e(t) ? u(t) : t;
                  }
                );
              default:
                return function (t) {
                  for (let n = 0; n < o.length; n++)
                    if (i[n](t)) return o[n](t);
                  return t;
                };
            }
          }
          function U(t) {
            function n(t, e, r) {
              if (e < t.length) {
                const u = t[e];
                let i = [];
                if (u.restParam) {
                  const t = u.types.filter(S);
                  t.length < u.types.length &&
                    i.push({
                      types: t,
                      name: '...' + t.map((t) => t.name).join('|'),
                      hasAny: t.some((t) => t.isAny),
                      hasConversion: !1,
                      restParam: !0
                    }),
                    i.push(u);
                } else
                  i = u.types.map(function (t) {
                    return {
                      types: [t],
                      name: t.name,
                      hasAny: t.isAny,
                      hasConversion: t.conversion,
                      restParam: !1
                    };
                  });
                return Q(i, function (u) {
                  return n(t, e + 1, r.concat([u]));
                });
              }
              return [r];
            }
            return n(t, 0, []);
          }
          function Z(t, n) {
            const e = Math.max(t.length, n.length);
            for (let s = 0; s < e; s++) {
              const e = _(t, s),
                r = _(n, s);
              let u,
                i = !1;
              for (u of r)
                if (e.has(u)) {
                  i = !0;
                  break;
                }
              if (!i) return !1;
            }
            const r = t.length,
              u = n.length,
              i = B(t),
              o = B(n);
            return i ? (o ? r === u : u >= r) : o ? r >= u : r === u;
          }
          function L(t) {
            return t.map((t) =>
              ut(t)
                ? et(t.referToSelf.callback)
                : rt(t)
                ? nt(t.referTo.references, t.referTo.callback)
                : t
            );
          }
          function $(t, n, e) {
            const r = [];
            let u;
            for (u of t) {
              let t = e[u];
              if ('number' !== typeof t)
                throw new TypeError(
                  'No definition for referenced signature "' + u + '"'
                );
              if (((t = n[t]), 'function' !== typeof t)) return !1;
              r.push(t);
            }
            return r;
          }
          function V(t, n, e) {
            const r = L(t),
              u = new Array(r.length).fill(!1);
            let i = !0;
            for (; i; ) {
              i = !1;
              let t = !0;
              for (let o = 0; o < r.length; ++o) {
                if (u[o]) continue;
                const s = r[o];
                if (ut(s))
                  (r[o] = s.referToSelf.callback(e)),
                    (r[o].referToSelf = s.referToSelf),
                    (u[o] = !0),
                    (t = !1);
                else if (rt(s)) {
                  const e = $(s.referTo.references, r, n);
                  e
                    ? ((r[o] = s.referTo.callback.apply(this, e)),
                      (r[o].referTo = s.referTo),
                      (u[o] = !0),
                      (t = !1))
                    : (i = !0);
                }
              }
              if (t && i)
                throw new SyntaxError(
                  'Circular reference detected in resolving typed.referTo'
                );
            }
            return r;
          }
          function H(t) {
            const n = /\bthis(\(|\.signatures\b)/;
            Object.keys(t).forEach((e) => {
              const r = t[e];
              if (n.test(r.toString()))
                throw new SyntaxError(
                  'Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.'
                );
            });
          }
          function J(t, r) {
            if ((h.createCount++, 0 === Object.keys(r).length))
              throw new SyntaxError('No signatures provided');
            h.warnAgainstDeprecatedThis && H(r);
            const u = [],
              i = [],
              o = {},
              s = [];
            let a;
            for (a in r) {
              if (!Object.prototype.hasOwnProperty.call(r, a)) continue;
              const t = x(a);
              if (!t) continue;
              u.forEach(function (n) {
                if (Z(n, t))
                  throw new TypeError(
                    'Conflicting signatures "' + E(n) + '" and "' + E(t) + '".'
                  );
              }),
                u.push(t);
              const n = i.length;
              i.push(r[a]);
              const e = t.map(y);
              let c;
              for (c of U(e)) {
                const t = E(c);
                s.push({ params: c, name: t, fn: n }),
                  c.every((t) => !t.hasConversion) && (o[t] = n);
              }
            }
            s.sort(k);
            const c = V(i, o, at);
            let f;
            for (f in o)
              Object.prototype.hasOwnProperty.call(o, f) && (o[f] = c[o[f]]);
            const D = [],
              l = new Map();
            for (f of s)
              l.has(f.name) || ((f.fn = c[f.fn]), D.push(f), l.set(f.name, f));
            const p = D[0] && D[0].params.length <= 2 && !B(D[0].params),
              d = D[1] && D[1].params.length <= 2 && !B(D[1].params),
              m = D[2] && D[2].params.length <= 2 && !B(D[2].params),
              g = D[3] && D[3].params.length <= 2 && !B(D[3].params),
              F = D[4] && D[4].params.length <= 2 && !B(D[4].params),
              w = D[5] && D[5].params.length <= 2 && !B(D[5].params),
              v = p && d && m && g && F && w;
            for (let n = 0; n < D.length; ++n) D[n].test = N(D[n].params);
            const A = p ? b(D[0].params[0]) : n,
              C = d ? b(D[1].params[0]) : n,
              M = m ? b(D[2].params[0]) : n,
              _ = g ? b(D[3].params[0]) : n,
              S = F ? b(D[4].params[0]) : n,
              O = w ? b(D[5].params[0]) : n,
              T = p ? b(D[0].params[1]) : n,
              z = d ? b(D[1].params[1]) : n,
              I = m ? b(D[2].params[1]) : n,
              j = g ? b(D[3].params[1]) : n,
              P = F ? b(D[4].params[1]) : n,
              R = w ? b(D[5].params[1]) : n;
            for (let n = 0; n < D.length; ++n)
              D[n].implementation = q(D[n].params, D[n].fn);
            const L = p ? D[0].implementation : e,
              $ = d ? D[1].implementation : e,
              J = m ? D[2].implementation : e,
              Y = g ? D[3].implementation : e,
              X = F ? D[4].implementation : e,
              W = w ? D[5].implementation : e,
              G = p ? D[0].params.length : -1,
              K = d ? D[1].params.length : -1,
              Q = m ? D[2].params.length : -1,
              tt = g ? D[3].params.length : -1,
              nt = F ? D[4].params.length : -1,
              et = w ? D[5].params.length : -1,
              rt = v ? 6 : 0,
              ut = D.length,
              it = D.map((t) => t.test),
              ot = D.map((t) => t.implementation),
              st = function () {
                for (let t = rt; t < ut; t++)
                  if (it[t](arguments)) return ot[t].apply(this, arguments);
                return h.onMismatch(t, arguments, D);
              };
            function at(t, n) {
              return arguments.length === G && A(t) && T(n)
                ? L.apply(this, arguments)
                : arguments.length === K && C(t) && z(n)
                ? $.apply(this, arguments)
                : arguments.length === Q && M(t) && I(n)
                ? J.apply(this, arguments)
                : arguments.length === tt && _(t) && j(n)
                ? Y.apply(this, arguments)
                : arguments.length === nt && S(t) && P(n)
                ? X.apply(this, arguments)
                : arguments.length === et && O(t) && R(n)
                ? W.apply(this, arguments)
                : st.apply(this, arguments);
            }
            try {
              Object.defineProperty(at, 'name', { value: t });
            } catch (ct) {}
            return (
              (at.signatures = o),
              (at._typedFunctionData = { signatures: D, signatureMap: l }),
              at
            );
          }
          function Y(t, n, e) {
            throw T(t, n, e);
          }
          function X(t) {
            return G(t, 0, t.length - 1);
          }
          function W(t) {
            return t[t.length - 1];
          }
          function G(t, n, e) {
            return Array.prototype.slice.call(t, n, e);
          }
          function K(t, n) {
            for (let e = 0; e < t.length; e++) if (n(t[e])) return t[e];
          }
          function Q(t, n) {
            return Array.prototype.concat.apply([], t.map(n));
          }
          function tt() {
            const t = X(arguments).map((t) => E(x(t))),
              n = W(arguments);
            if ('function' !== typeof n)
              throw new TypeError(
                'Callback function expected as last argument'
              );
            return nt(t, n);
          }
          function nt(t, n) {
            return { referTo: { references: t, callback: n } };
          }
          function et(t) {
            if ('function' !== typeof t)
              throw new TypeError(
                'Callback function expected as first argument'
              );
            return { referToSelf: { callback: t } };
          }
          function rt(t) {
            return (
              t &&
              'object' === typeof t.referTo &&
              Array.isArray(t.referTo.references) &&
              'function' === typeof t.referTo.callback
            );
          }
          function ut(t) {
            return (
              t &&
              'object' === typeof t.referToSelf &&
              'function' === typeof t.referToSelf.callback
            );
          }
          function it(t, n) {
            if (!t) return n;
            if (n && n !== t) {
              const e = new Error(
                'Function names do not match (expected: ' +
                  t +
                  ', actual: ' +
                  n +
                  ')'
              );
              throw ((e.data = { actual: n, expected: t }), e);
            }
            return t;
          }
          function ot(t) {
            let n;
            for (const e in t)
              Object.prototype.hasOwnProperty.call(t, e) &&
                (g(t[e]) || 'string' === typeof t[e].signature) &&
                (n = it(n, t[e].name));
            return n;
          }
          function st(t, n) {
            let e;
            for (e in n)
              if (Object.prototype.hasOwnProperty.call(n, e)) {
                if (e in t && n[e] !== t[e]) {
                  const r = new Error('Signature "' + e + '" is defined twice');
                  throw (
                    ((r.data = {
                      signature: e,
                      sourceFunction: n[e],
                      destFunction: t[e]
                    }),
                    r)
                  );
                }
                t[e] = n[e];
              }
          }
          p(), l(o);
          const at = h;
          function ct(t) {
            if (
              !t ||
              'string' !== typeof t.from ||
              'string' !== typeof t.to ||
              'function' !== typeof t.convert
            )
              throw new TypeError(
                'Object with properties {from: string, to: string, convert: function} expected'
              );
            if (t.to === t.from)
              throw new SyntaxError(
                'Illegal to define conversion from "' + t.from + '" to itself.'
              );
          }
          return (
            (h = function (t) {
              const n = 'string' === typeof t;
              let e = n ? t : '';
              const r = {};
              for (let u = n ? 1 : 0; u < arguments.length; ++u) {
                const t = arguments[u];
                let o,
                  s = {};
                if (
                  ('function' === typeof t
                    ? ((o = t.name),
                      'string' === typeof t.signature
                        ? (s[t.signature] = t)
                        : g(t) && (s = t.signatures))
                    : i(t) && ((s = t), n || (o = ot(t))),
                  0 === Object.keys(s).length)
                ) {
                  const n = new TypeError(
                    "Argument to 'typed' at index " +
                      u +
                      ' is not a (typed) function, nor an object with signatures as keys and functions as values.'
                  );
                  throw ((n.data = { index: u, argument: t }), n);
                }
                n || (e = it(e, o)), st(r, s);
              }
              return J(e || '', r);
            }),
            (h.create = u),
            (h.createCount = at.createCount),
            (h.onMismatch = Y),
            (h.throwMismatchError = Y),
            (h.createError = T),
            (h.clear = p),
            (h.clearConversions = d),
            (h.addTypes = l),
            (h._findType = D),
            (h.referTo = tt),
            (h.referToSelf = et),
            (h.convert = v),
            (h.findSignature = F),
            (h.find = w),
            (h.isTypedFunction = g),
            (h.warnAgainstDeprecatedThis = !0),
            (h.addType = function (t, n) {
              let e = 'any';
              !1 !== n && a.has('Object') && (e = 'Object'), h.addTypes([t], e);
            }),
            (h.addConversion = function (t) {
              ct(t);
              const n = D(t.to);
              if (
                !n.conversionsTo.every(function (n) {
                  return n.from !== t.from;
                })
              )
                throw new Error(
                  'There is already a conversion from "' +
                    t.from +
                    '" to "' +
                    n.name +
                    '"'
                );
              n.conversionsTo.push({
                from: t.from,
                convert: t.convert,
                index: f++
              });
            }),
            (h.addConversions = function (t) {
              t.forEach(h.addConversion);
            }),
            (h.removeConversion = function (t) {
              ct(t);
              const n = D(t.to),
                e = K(n.conversionsTo, (n) => n.from === t.from);
              if (!e)
                throw new Error(
                  'Attempt to remove nonexistent conversion from ' +
                    t.from +
                    ' to ' +
                    t.to
                );
              if (e.convert !== t.convert)
                throw new Error(
                  'Conversion to remove does not match existing conversion'
                );
              const r = n.conversionsTo.indexOf(e);
              n.conversionsTo.splice(r, 1);
            }),
            (h.resolve = function (t, n) {
              if (!g(t)) throw new TypeError(r);
              const e = t._typedFunctionData.signatures;
              for (let r = 0; r < e.length; ++r) if (e[r].test(n)) return e[r];
              return null;
            }),
            h
          );
        }
        return u();
      })();
    },
    95796: (t, n, e) => {
      'use strict';
      function r() {
        return (
          (r = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var n = 1; n < arguments.length; n++) {
                  var e = arguments[n];
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                }
                return t;
              }),
          r.apply(this, arguments)
        );
      }
      e.d(n, { Omf: () => Qu });
      var u = {
          epsilon: 1e-12,
          matrix: 'Matrix',
          number: 'number',
          precision: 64,
          predictable: !1,
          randomSeed: null
        },
        i = ['Matrix', 'Array'],
        o = ['number', 'BigNumber', 'Fraction'];
      var s = function (t) {
        if (t)
          throw new Error(
            "The global config is readonly. \nPlease create a mathjs instance if you want to change the default configuration. \nExample:\n\n  import { create, all } from 'mathjs';\n  const mathjs = create(all);\n  mathjs.config({ number: 'BigNumber' });\n"
          );
        return Object.freeze(u);
      };
      r(s, u, { MATRIX_OPTIONS: i, NUMBER_OPTIONS: o });
      var a,
        c,
        f = 9e15,
        h = 1e9,
        D = '0123456789abcdef',
        l =
          '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',
        p =
          '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',
        d = {
          precision: 20,
          rounding: 4,
          modulo: 1,
          toExpNeg: -7,
          toExpPos: 21,
          minE: -f,
          maxE: f,
          crypto: !1
        },
        m = !0,
        g = '[DecimalError] ',
        F = g + 'Invalid argument: ',
        w = g + 'Precision limit exceeded',
        v = g + 'crypto unavailable',
        E = '[object Decimal]',
        A = Math.floor,
        y = Math.pow,
        C = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        x = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        B = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        b = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        N = 1e7,
        M = 7,
        _ = l.length - 1,
        S = p.length - 1,
        O = { toStringTag: E };
      function T(t) {
        var n,
          e,
          r,
          u = t.length - 1,
          i = '',
          o = t[0];
        if (u > 0) {
          for (i += o, n = 1; n < u; n++)
            (r = t[n] + ''), (e = M - r.length) && (i += $(e)), (i += r);
          (o = t[n]), (e = M - (r = o + '').length) && (i += $(e));
        } else if (0 === o) return '0';
        for (; o % 10 === 0; ) o /= 10;
        return i + o;
      }
      function z(t, n, e) {
        if (t !== ~~t || t < n || t > e) throw Error(F + t);
      }
      function I(t, n, e, r) {
        var u, i, o, s;
        for (i = t[0]; i >= 10; i /= 10) --n;
        return (
          --n < 0
            ? ((n += M), (u = 0))
            : ((u = Math.ceil((n + 1) / M)), (n %= M)),
          (i = y(10, M - n)),
          (s = t[u] % i | 0),
          null == r
            ? n < 3
              ? (0 == n ? (s = (s / 100) | 0) : 1 == n && (s = (s / 10) | 0),
                (o =
                  (e < 4 && 99999 == s) ||
                  (e > 3 && 49999 == s) ||
                  5e4 == s ||
                  0 == s))
              : (o =
                  (((e < 4 && s + 1 == i) || (e > 3 && s + 1 == i / 2)) &&
                    ((t[u + 1] / i / 100) | 0) == y(10, n - 2) - 1) ||
                  ((s == i / 2 || 0 == s) && 0 == ((t[u + 1] / i / 100) | 0)))
            : n < 4
            ? (0 == n
                ? (s = (s / 1e3) | 0)
                : 1 == n
                ? (s = (s / 100) | 0)
                : 2 == n && (s = (s / 10) | 0),
              (o = ((r || e < 4) && 9999 == s) || (!r && e > 3 && 4999 == s)))
            : (o =
                (((r || e < 4) && s + 1 == i) ||
                  (!r && e > 3 && s + 1 == i / 2)) &&
                ((t[u + 1] / i / 1e3) | 0) == y(10, n - 3) - 1),
          o
        );
      }
      function j(t, n, e) {
        for (var r, u, i = [0], o = 0, s = t.length; o < s; ) {
          for (u = i.length; u--; ) i[u] *= n;
          for (i[0] += D.indexOf(t.charAt(o++)), r = 0; r < i.length; r++)
            i[r] > e - 1 &&
              (void 0 === i[r + 1] && (i[r + 1] = 0),
              (i[r + 1] += (i[r] / e) | 0),
              (i[r] %= e));
        }
        return i.reverse();
      }
      (O.absoluteValue = O.abs =
        function () {
          var t = new this.constructor(this);
          return t.s < 0 && (t.s = 1), P(t);
        }),
        (O.ceil = function () {
          return P(new this.constructor(this), this.e + 1, 2);
        }),
        (O.clampedTo = O.clamp =
          function (t, n) {
            var e = this,
              r = e.constructor;
            if (((t = new r(t)), (n = new r(n)), !t.s || !n.s))
              return new r(NaN);
            if (t.gt(n)) throw Error(F + n);
            return e.cmp(t) < 0 ? t : e.cmp(n) > 0 ? n : new r(e);
          }),
        (O.comparedTo = O.cmp =
          function (t) {
            var n,
              e,
              r,
              u,
              i = this,
              o = i.d,
              s = (t = new i.constructor(t)).d,
              a = i.s,
              c = t.s;
            if (!o || !s)
              return a && c
                ? a !== c
                  ? a
                  : o === s
                  ? 0
                  : !o ^ (a < 0)
                  ? 1
                  : -1
                : NaN;
            if (!o[0] || !s[0]) return o[0] ? a : s[0] ? -c : 0;
            if (a !== c) return a;
            if (i.e !== t.e) return (i.e > t.e) ^ (a < 0) ? 1 : -1;
            for (n = 0, e = (r = o.length) < (u = s.length) ? r : u; n < e; ++n)
              if (o[n] !== s[n]) return (o[n] > s[n]) ^ (a < 0) ? 1 : -1;
            return r === u ? 0 : (r > u) ^ (a < 0) ? 1 : -1;
          }),
        (O.cosine = O.cos =
          function () {
            var t,
              n,
              e = this,
              r = e.constructor;
            return e.d
              ? e.d[0]
                ? ((t = r.precision),
                  (n = r.rounding),
                  (r.precision = t + Math.max(e.e, e.sd()) + M),
                  (r.rounding = 1),
                  (e = (function (t, n) {
                    var e, r, u;
                    if (n.isZero()) return n;
                    (r = n.d.length),
                      r < 32
                        ? (u = (1 / tt(4, (e = Math.ceil(r / 3)))).toString())
                        : ((e = 16), (u = '2.3283064365386962890625e-10'));
                    (t.precision += e), (n = Q(t, 1, n.times(u), new t(1)));
                    for (var i = e; i--; ) {
                      var o = n.times(n);
                      n = o.times(o).minus(o).times(8).plus(1);
                    }
                    return (t.precision -= e), n;
                  })(r, nt(r, e))),
                  (r.precision = t),
                  (r.rounding = n),
                  P(2 == c || 3 == c ? e.neg() : e, t, n, !0))
                : new r(1)
              : new r(NaN);
          }),
        (O.cubeRoot = O.cbrt =
          function () {
            var t,
              n,
              e,
              r,
              u,
              i,
              o,
              s,
              a,
              c,
              f = this,
              h = f.constructor;
            if (!f.isFinite() || f.isZero()) return new h(f);
            for (
              m = !1,
                (i = f.s * y(f.s * f, 1 / 3)) && Math.abs(i) != 1 / 0
                  ? (r = new h(i.toString()))
                  : ((e = T(f.d)),
                    (i = ((t = f.e) - e.length + 1) % 3) &&
                      (e += 1 == i || -2 == i ? '0' : '00'),
                    (i = y(e, 1 / 3)),
                    (t = A((t + 1) / 3) - (t % 3 == (t < 0 ? -1 : 2))),
                    ((r = new h(
                      (e =
                        i == 1 / 0
                          ? '5e' + t
                          : (e = i.toExponential()).slice(
                              0,
                              e.indexOf('e') + 1
                            ) + t)
                    )).s = f.s)),
                o = (t = h.precision) + 3;
              ;

            )
              if (
                ((c = (a = (s = r).times(s).times(s)).plus(f)),
                (r = k(c.plus(f).times(s), c.plus(a), o + 2, 1)),
                T(s.d).slice(0, o) === (e = T(r.d)).slice(0, o))
              ) {
                if (
                  '9999' != (e = e.slice(o - 3, o + 1)) &&
                  (u || '4999' != e)
                ) {
                  (+e && (+e.slice(1) || '5' != e.charAt(0))) ||
                    (P(r, t + 1, 1), (n = !r.times(r).times(r).eq(f)));
                  break;
                }
                if (!u && (P(s, t + 1, 0), s.times(s).times(s).eq(f))) {
                  r = s;
                  break;
                }
                (o += 4), (u = 1);
              }
            return (m = !0), P(r, t, h.rounding, n);
          }),
        (O.decimalPlaces = O.dp =
          function () {
            var t,
              n = this.d,
              e = NaN;
            if (n) {
              if (((e = ((t = n.length - 1) - A(this.e / M)) * M), (t = n[t])))
                for (; t % 10 == 0; t /= 10) e--;
              e < 0 && (e = 0);
            }
            return e;
          }),
        (O.dividedBy = O.div =
          function (t) {
            return k(this, new this.constructor(t));
          }),
        (O.dividedToIntegerBy = O.divToInt =
          function (t) {
            var n = this.constructor;
            return P(k(this, new n(t), 0, 1, 1), n.precision, n.rounding);
          }),
        (O.equals = O.eq =
          function (t) {
            return 0 === this.cmp(t);
          }),
        (O.floor = function () {
          return P(new this.constructor(this), this.e + 1, 3);
        }),
        (O.greaterThan = O.gt =
          function (t) {
            return this.cmp(t) > 0;
          }),
        (O.greaterThanOrEqualTo = O.gte =
          function (t) {
            var n = this.cmp(t);
            return 1 == n || 0 === n;
          }),
        (O.hyperbolicCosine = O.cosh =
          function () {
            var t,
              n,
              e,
              r,
              u,
              i = this,
              o = i.constructor,
              s = new o(1);
            if (!i.isFinite()) return new o(i.s ? 1 / 0 : NaN);
            if (i.isZero()) return s;
            (e = o.precision),
              (r = o.rounding),
              (o.precision = e + Math.max(i.e, i.sd()) + 4),
              (o.rounding = 1),
              (u = i.d.length) < 32
                ? (n = (1 / tt(4, (t = Math.ceil(u / 3)))).toString())
                : ((t = 16), (n = '2.3283064365386962890625e-10')),
              (i = Q(o, 1, i.times(n), new o(1), !0));
            for (var a, c = t, f = new o(8); c--; )
              (a = i.times(i)), (i = s.minus(a.times(f.minus(a.times(f)))));
            return P(i, (o.precision = e), (o.rounding = r), !0);
          }),
        (O.hyperbolicSine = O.sinh =
          function () {
            var t,
              n,
              e,
              r,
              u = this,
              i = u.constructor;
            if (!u.isFinite() || u.isZero()) return new i(u);
            if (
              ((n = i.precision),
              (e = i.rounding),
              (i.precision = n + Math.max(u.e, u.sd()) + 4),
              (i.rounding = 1),
              (r = u.d.length) < 3)
            )
              u = Q(i, 2, u, u, !0);
            else {
              (t = (t = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | t),
                (u = Q(i, 2, (u = u.times(1 / tt(5, t))), u, !0));
              for (var o, s = new i(5), a = new i(16), c = new i(20); t--; )
                (o = u.times(u)),
                  (u = u.times(s.plus(o.times(a.times(o).plus(c)))));
            }
            return (i.precision = n), (i.rounding = e), P(u, n, e, !0);
          }),
        (O.hyperbolicTangent = O.tanh =
          function () {
            var t,
              n,
              e = this,
              r = e.constructor;
            return e.isFinite()
              ? e.isZero()
                ? new r(e)
                : ((t = r.precision),
                  (n = r.rounding),
                  (r.precision = t + 7),
                  (r.rounding = 1),
                  k(e.sinh(), e.cosh(), (r.precision = t), (r.rounding = n)))
              : new r(e.s);
          }),
        (O.inverseCosine = O.acos =
          function () {
            var t,
              n = this,
              e = n.constructor,
              r = n.abs().cmp(1),
              u = e.precision,
              i = e.rounding;
            return -1 !== r
              ? 0 === r
                ? n.isNeg()
                  ? Z(e, u, i)
                  : new e(0)
                : new e(NaN)
              : n.isZero()
              ? Z(e, u + 4, i).times(0.5)
              : ((e.precision = u + 6),
                (e.rounding = 1),
                (n = n.asin()),
                (t = Z(e, u + 4, i).times(0.5)),
                (e.precision = u),
                (e.rounding = i),
                t.minus(n));
          }),
        (O.inverseHyperbolicCosine = O.acosh =
          function () {
            var t,
              n,
              e = this,
              r = e.constructor;
            return e.lte(1)
              ? new r(e.eq(1) ? 0 : NaN)
              : e.isFinite()
              ? ((t = r.precision),
                (n = r.rounding),
                (r.precision = t + Math.max(Math.abs(e.e), e.sd()) + 4),
                (r.rounding = 1),
                (m = !1),
                (e = e.times(e).minus(1).sqrt().plus(e)),
                (m = !0),
                (r.precision = t),
                (r.rounding = n),
                e.ln())
              : new r(e);
          }),
        (O.inverseHyperbolicSine = O.asinh =
          function () {
            var t,
              n,
              e = this,
              r = e.constructor;
            return !e.isFinite() || e.isZero()
              ? new r(e)
              : ((t = r.precision),
                (n = r.rounding),
                (r.precision = t + 2 * Math.max(Math.abs(e.e), e.sd()) + 6),
                (r.rounding = 1),
                (m = !1),
                (e = e.times(e).plus(1).sqrt().plus(e)),
                (m = !0),
                (r.precision = t),
                (r.rounding = n),
                e.ln());
          }),
        (O.inverseHyperbolicTangent = O.atanh =
          function () {
            var t,
              n,
              e,
              r,
              u = this,
              i = u.constructor;
            return u.isFinite()
              ? u.e >= 0
                ? new i(u.abs().eq(1) ? u.s / 0 : u.isZero() ? u : NaN)
                : ((t = i.precision),
                  (n = i.rounding),
                  (r = u.sd()),
                  Math.max(r, t) < 2 * -u.e - 1
                    ? P(new i(u), t, n, !0)
                    : ((i.precision = e = r - u.e),
                      (u = k(u.plus(1), new i(1).minus(u), e + t, 1)),
                      (i.precision = t + 4),
                      (i.rounding = 1),
                      (u = u.ln()),
                      (i.precision = t),
                      (i.rounding = n),
                      u.times(0.5)))
              : new i(NaN);
          }),
        (O.inverseSine = O.asin =
          function () {
            var t,
              n,
              e,
              r,
              u = this,
              i = u.constructor;
            return u.isZero()
              ? new i(u)
              : ((n = u.abs().cmp(1)),
                (e = i.precision),
                (r = i.rounding),
                -1 !== n
                  ? 0 === n
                    ? (((t = Z(i, e + 4, r).times(0.5)).s = u.s), t)
                    : new i(NaN)
                  : ((i.precision = e + 6),
                    (i.rounding = 1),
                    (u = u
                      .div(new i(1).minus(u.times(u)).sqrt().plus(1))
                      .atan()),
                    (i.precision = e),
                    (i.rounding = r),
                    u.times(2)));
          }),
        (O.inverseTangent = O.atan =
          function () {
            var t,
              n,
              e,
              r,
              u,
              i,
              o,
              s,
              a,
              c = this,
              f = c.constructor,
              h = f.precision,
              D = f.rounding;
            if (c.isFinite()) {
              if (c.isZero()) return new f(c);
              if (c.abs().eq(1) && h + 4 <= S)
                return ((o = Z(f, h + 4, D).times(0.25)).s = c.s), o;
            } else {
              if (!c.s) return new f(NaN);
              if (h + 4 <= S)
                return ((o = Z(f, h + 4, D).times(0.5)).s = c.s), o;
            }
            for (
              f.precision = s = h + 10,
                f.rounding = 1,
                t = e = Math.min(28, (s / M + 2) | 0);
              t;
              --t
            )
              c = c.div(c.times(c).plus(1).sqrt().plus(1));
            for (
              m = !1,
                n = Math.ceil(s / M),
                r = 1,
                a = c.times(c),
                o = new f(c),
                u = c;
              -1 !== t;

            )
              if (
                ((u = u.times(a)),
                (i = o.minus(u.div((r += 2)))),
                (u = u.times(a)),
                void 0 !== (o = i.plus(u.div((r += 2)))).d[n])
              )
                for (t = n; o.d[t] === i.d[t] && t--; );
            return (
              e && (o = o.times(2 << (e - 1))),
              (m = !0),
              P(o, (f.precision = h), (f.rounding = D), !0)
            );
          }),
        (O.isFinite = function () {
          return !!this.d;
        }),
        (O.isInteger = O.isInt =
          function () {
            return !!this.d && A(this.e / M) > this.d.length - 2;
          }),
        (O.isNaN = function () {
          return !this.s;
        }),
        (O.isNegative = O.isNeg =
          function () {
            return this.s < 0;
          }),
        (O.isPositive = O.isPos =
          function () {
            return this.s > 0;
          }),
        (O.isZero = function () {
          return !!this.d && 0 === this.d[0];
        }),
        (O.lessThan = O.lt =
          function (t) {
            return this.cmp(t) < 0;
          }),
        (O.lessThanOrEqualTo = O.lte =
          function (t) {
            return this.cmp(t) < 1;
          }),
        (O.logarithm = O.log =
          function (t) {
            var n,
              e,
              r,
              u,
              i,
              o,
              s,
              a,
              c = this,
              f = c.constructor,
              h = f.precision,
              D = f.rounding;
            if (null == t) (t = new f(10)), (n = !0);
            else {
              if (((e = (t = new f(t)).d), t.s < 0 || !e || !e[0] || t.eq(1)))
                return new f(NaN);
              n = t.eq(10);
            }
            if (((e = c.d), c.s < 0 || !e || !e[0] || c.eq(1)))
              return new f(
                e && !e[0] ? -1 / 0 : 1 != c.s ? NaN : e ? 0 : 1 / 0
              );
            if (n)
              if (e.length > 1) i = !0;
              else {
                for (u = e[0]; u % 10 === 0; ) u /= 10;
                i = 1 !== u;
              }
            if (
              ((m = !1),
              (o = X(c, (s = h + 5))),
              (r = n ? U(f, s + 10) : X(t, s)),
              I((a = k(o, r, s, 1)).d, (u = h), D))
            )
              do {
                if (
                  ((o = X(c, (s += 10))),
                  (r = n ? U(f, s + 10) : X(t, s)),
                  (a = k(o, r, s, 1)),
                  !i)
                ) {
                  +T(a.d).slice(u + 1, u + 15) + 1 == 1e14 &&
                    (a = P(a, h + 1, 0));
                  break;
                }
              } while (I(a.d, (u += 10), D));
            return (m = !0), P(a, h, D);
          }),
        (O.minus = O.sub =
          function (t) {
            var n,
              e,
              r,
              u,
              i,
              o,
              s,
              a,
              c,
              f,
              h,
              D,
              l = this,
              p = l.constructor;
            if (((t = new p(t)), !l.d || !t.d))
              return (
                l.s && t.s
                  ? l.d
                    ? (t.s = -t.s)
                    : (t = new p(t.d || l.s !== t.s ? l : NaN))
                  : (t = new p(NaN)),
                t
              );
            if (l.s != t.s) return (t.s = -t.s), l.plus(t);
            if (
              ((c = l.d),
              (D = t.d),
              (s = p.precision),
              (a = p.rounding),
              !c[0] || !D[0])
            ) {
              if (D[0]) t.s = -t.s;
              else {
                if (!c[0]) return new p(3 === a ? -0 : 0);
                t = new p(l);
              }
              return m ? P(t, s, a) : t;
            }
            if (
              ((e = A(t.e / M)), (f = A(l.e / M)), (c = c.slice()), (i = f - e))
            ) {
              for (
                (h = i < 0)
                  ? ((n = c), (i = -i), (o = D.length))
                  : ((n = D), (e = f), (o = c.length)),
                  i > (r = Math.max(Math.ceil(s / M), o) + 2) &&
                    ((i = r), (n.length = 1)),
                  n.reverse(),
                  r = i;
                r--;

              )
                n.push(0);
              n.reverse();
            } else {
              for (
                (h = (r = c.length) < (o = D.length)) && (o = r), r = 0;
                r < o;
                r++
              )
                if (c[r] != D[r]) {
                  h = c[r] < D[r];
                  break;
                }
              i = 0;
            }
            for (
              h && ((n = c), (c = D), (D = n), (t.s = -t.s)),
                o = c.length,
                r = D.length - o;
              r > 0;
              --r
            )
              c[o++] = 0;
            for (r = D.length; r > i; ) {
              if (c[--r] < D[r]) {
                for (u = r; u && 0 === c[--u]; ) c[u] = N - 1;
                --c[u], (c[r] += N);
              }
              c[r] -= D[r];
            }
            for (; 0 === c[--o]; ) c.pop();
            for (; 0 === c[0]; c.shift()) --e;
            return c[0]
              ? ((t.d = c), (t.e = R(c, e)), m ? P(t, s, a) : t)
              : new p(3 === a ? -0 : 0);
          }),
        (O.modulo = O.mod =
          function (t) {
            var n,
              e = this,
              r = e.constructor;
            return (
              (t = new r(t)),
              !e.d || !t.s || (t.d && !t.d[0])
                ? new r(NaN)
                : !t.d || (e.d && !e.d[0])
                ? P(new r(e), r.precision, r.rounding)
                : ((m = !1),
                  9 == r.modulo
                    ? ((n = k(e, t.abs(), 0, 3, 1)).s *= t.s)
                    : (n = k(e, t, 0, r.modulo, 1)),
                  (n = n.times(t)),
                  (m = !0),
                  e.minus(n))
            );
          }),
        (O.naturalExponential = O.exp =
          function () {
            return Y(this);
          }),
        (O.naturalLogarithm = O.ln =
          function () {
            return X(this);
          }),
        (O.negated = O.neg =
          function () {
            var t = new this.constructor(this);
            return (t.s = -t.s), P(t);
          }),
        (O.plus = O.add =
          function (t) {
            var n,
              e,
              r,
              u,
              i,
              o,
              s,
              a,
              c,
              f,
              h = this,
              D = h.constructor;
            if (((t = new D(t)), !h.d || !t.d))
              return (
                h.s && t.s
                  ? h.d || (t = new D(t.d || h.s === t.s ? h : NaN))
                  : (t = new D(NaN)),
                t
              );
            if (h.s != t.s) return (t.s = -t.s), h.minus(t);
            if (
              ((c = h.d),
              (f = t.d),
              (s = D.precision),
              (a = D.rounding),
              !c[0] || !f[0])
            )
              return f[0] || (t = new D(h)), m ? P(t, s, a) : t;
            if (
              ((i = A(h.e / M)), (r = A(t.e / M)), (c = c.slice()), (u = i - r))
            ) {
              for (
                u < 0
                  ? ((e = c), (u = -u), (o = f.length))
                  : ((e = f), (r = i), (o = c.length)),
                  u > (o = (i = Math.ceil(s / M)) > o ? i + 1 : o + 1) &&
                    ((u = o), (e.length = 1)),
                  e.reverse();
                u--;

              )
                e.push(0);
              e.reverse();
            }
            for (
              (o = c.length) - (u = f.length) < 0 &&
                ((u = o), (e = f), (f = c), (c = e)),
                n = 0;
              u;

            )
              (n = ((c[--u] = c[u] + f[u] + n) / N) | 0), (c[u] %= N);
            for (n && (c.unshift(n), ++r), o = c.length; 0 == c[--o]; ) c.pop();
            return (t.d = c), (t.e = R(c, r)), m ? P(t, s, a) : t;
          }),
        (O.precision = O.sd =
          function (t) {
            var n,
              e = this;
            if (void 0 !== t && t !== !!t && 1 !== t && 0 !== t)
              throw Error(F + t);
            return (
              e.d
                ? ((n = L(e.d)), t && e.e + 1 > n && (n = e.e + 1))
                : (n = NaN),
              n
            );
          }),
        (O.round = function () {
          var t = this,
            n = t.constructor;
          return P(new n(t), t.e + 1, n.rounding);
        }),
        (O.sine = O.sin =
          function () {
            var t,
              n,
              e = this,
              r = e.constructor;
            return e.isFinite()
              ? e.isZero()
                ? new r(e)
                : ((t = r.precision),
                  (n = r.rounding),
                  (r.precision = t + Math.max(e.e, e.sd()) + M),
                  (r.rounding = 1),
                  (e = (function (t, n) {
                    var e,
                      r = n.d.length;
                    if (r < 3) return n.isZero() ? n : Q(t, 2, n, n);
                    (e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e),
                      (n = n.times(1 / tt(5, e))),
                      (n = Q(t, 2, n, n));
                    for (
                      var u, i = new t(5), o = new t(16), s = new t(20);
                      e--;

                    )
                      (u = n.times(n)),
                        (n = n.times(i.plus(u.times(o.times(u).minus(s)))));
                    return n;
                  })(r, nt(r, e))),
                  (r.precision = t),
                  (r.rounding = n),
                  P(c > 2 ? e.neg() : e, t, n, !0))
              : new r(NaN);
          }),
        (O.squareRoot = O.sqrt =
          function () {
            var t,
              n,
              e,
              r,
              u,
              i,
              o = this,
              s = o.d,
              a = o.e,
              c = o.s,
              f = o.constructor;
            if (1 !== c || !s || !s[0])
              return new f(!c || (c < 0 && (!s || s[0])) ? NaN : s ? o : 1 / 0);
            for (
              m = !1,
                0 == (c = Math.sqrt(+o)) || c == 1 / 0
                  ? (((n = T(s)).length + a) % 2 == 0 && (n += '0'),
                    (c = Math.sqrt(n)),
                    (a = A((a + 1) / 2) - (a < 0 || a % 2)),
                    (r = new f(
                      (n =
                        c == 1 / 0
                          ? '5e' + a
                          : (n = c.toExponential()).slice(
                              0,
                              n.indexOf('e') + 1
                            ) + a)
                    )))
                  : (r = new f(c.toString())),
                e = (a = f.precision) + 3;
              ;

            )
              if (
                ((r = (i = r).plus(k(o, i, e + 2, 1)).times(0.5)),
                T(i.d).slice(0, e) === (n = T(r.d)).slice(0, e))
              ) {
                if (
                  '9999' != (n = n.slice(e - 3, e + 1)) &&
                  (u || '4999' != n)
                ) {
                  (+n && (+n.slice(1) || '5' != n.charAt(0))) ||
                    (P(r, a + 1, 1), (t = !r.times(r).eq(o)));
                  break;
                }
                if (!u && (P(i, a + 1, 0), i.times(i).eq(o))) {
                  r = i;
                  break;
                }
                (e += 4), (u = 1);
              }
            return (m = !0), P(r, a, f.rounding, t);
          }),
        (O.tangent = O.tan =
          function () {
            var t,
              n,
              e = this,
              r = e.constructor;
            return e.isFinite()
              ? e.isZero()
                ? new r(e)
                : ((t = r.precision),
                  (n = r.rounding),
                  (r.precision = t + 10),
                  (r.rounding = 1),
                  ((e = e.sin()).s = 1),
                  (e = k(e, new r(1).minus(e.times(e)).sqrt(), t + 10, 0)),
                  (r.precision = t),
                  (r.rounding = n),
                  P(2 == c || 4 == c ? e.neg() : e, t, n, !0))
              : new r(NaN);
          }),
        (O.times = O.mul =
          function (t) {
            var n,
              e,
              r,
              u,
              i,
              o,
              s,
              a,
              c,
              f = this,
              h = f.constructor,
              D = f.d,
              l = (t = new h(t)).d;
            if (((t.s *= f.s), !D || !D[0] || !l || !l[0]))
              return new h(
                !t.s || (D && !D[0] && !l) || (l && !l[0] && !D)
                  ? NaN
                  : D && l
                  ? 0 * t.s
                  : t.s / 0
              );
            for (
              e = A(f.e / M) + A(t.e / M),
                (a = D.length) < (c = l.length) &&
                  ((i = D), (D = l), (l = i), (o = a), (a = c), (c = o)),
                i = [],
                r = o = a + c;
              r--;

            )
              i.push(0);
            for (r = c; --r >= 0; ) {
              for (n = 0, u = a + r; u > r; )
                (s = i[u] + l[r] * D[u - r - 1] + n),
                  (i[u--] = s % N | 0),
                  (n = (s / N) | 0);
              i[u] = (i[u] + n) % N | 0;
            }
            for (; !i[--o]; ) i.pop();
            return (
              n ? ++e : i.shift(),
              (t.d = i),
              (t.e = R(i, e)),
              m ? P(t, h.precision, h.rounding) : t
            );
          }),
        (O.toBinary = function (t, n) {
          return et(this, 2, t, n);
        }),
        (O.toDecimalPlaces = O.toDP =
          function (t, n) {
            var e = this,
              r = e.constructor;
            return (
              (e = new r(e)),
              void 0 === t
                ? e
                : (z(t, 0, h),
                  void 0 === n ? (n = r.rounding) : z(n, 0, 8),
                  P(e, t + e.e + 1, n))
            );
          }),
        (O.toExponential = function (t, n) {
          var e,
            r = this,
            u = r.constructor;
          return (
            void 0 === t
              ? (e = q(r, !0))
              : (z(t, 0, h),
                void 0 === n ? (n = u.rounding) : z(n, 0, 8),
                (e = q((r = P(new u(r), t + 1, n)), !0, t + 1))),
            r.isNeg() && !r.isZero() ? '-' + e : e
          );
        }),
        (O.toFixed = function (t, n) {
          var e,
            r,
            u = this,
            i = u.constructor;
          return (
            void 0 === t
              ? (e = q(u))
              : (z(t, 0, h),
                void 0 === n ? (n = i.rounding) : z(n, 0, 8),
                (e = q((r = P(new i(u), t + u.e + 1, n)), !1, t + r.e + 1))),
            u.isNeg() && !u.isZero() ? '-' + e : e
          );
        }),
        (O.toFraction = function (t) {
          var n,
            e,
            r,
            u,
            i,
            o,
            s,
            a,
            c,
            f,
            h,
            D,
            l = this,
            p = l.d,
            d = l.constructor;
          if (!p) return new d(l);
          if (
            ((c = e = new d(1)),
            (r = a = new d(0)),
            (o = (i = (n = new d(r)).e = L(p) - l.e - 1) % M),
            (n.d[0] = y(10, o < 0 ? M + o : o)),
            null == t)
          )
            t = i > 0 ? n : c;
          else {
            if (!(s = new d(t)).isInt() || s.lt(c)) throw Error(F + s);
            t = s.gt(n) ? (i > 0 ? n : c) : s;
          }
          for (
            m = !1,
              s = new d(T(p)),
              f = d.precision,
              d.precision = i = p.length * M * 2;
            (h = k(s, n, 0, 1, 1)), 1 != (u = e.plus(h.times(r))).cmp(t);

          )
            (e = r),
              (r = u),
              (u = c),
              (c = a.plus(h.times(u))),
              (a = u),
              (u = n),
              (n = s.minus(h.times(u))),
              (s = u);
          return (
            (u = k(t.minus(e), r, 0, 1, 1)),
            (a = a.plus(u.times(c))),
            (e = e.plus(u.times(r))),
            (a.s = c.s = l.s),
            (D =
              k(c, r, i, 1).minus(l).abs().cmp(k(a, e, i, 1).minus(l).abs()) < 1
                ? [c, r]
                : [a, e]),
            (d.precision = f),
            (m = !0),
            D
          );
        }),
        (O.toHexadecimal = O.toHex =
          function (t, n) {
            return et(this, 16, t, n);
          }),
        (O.toNearest = function (t, n) {
          var e = this,
            r = e.constructor;
          if (((e = new r(e)), null == t)) {
            if (!e.d) return e;
            (t = new r(1)), (n = r.rounding);
          } else {
            if (
              ((t = new r(t)),
              void 0 === n ? (n = r.rounding) : z(n, 0, 8),
              !e.d)
            )
              return t.s ? e : t;
            if (!t.d) return t.s && (t.s = e.s), t;
          }
          return (
            t.d[0]
              ? ((m = !1), (e = k(e, t, 0, n, 1).times(t)), (m = !0), P(e))
              : ((t.s = e.s), (e = t)),
            e
          );
        }),
        (O.toNumber = function () {
          return +this;
        }),
        (O.toOctal = function (t, n) {
          return et(this, 8, t, n);
        }),
        (O.toPower = O.pow =
          function (t) {
            var n,
              e,
              r,
              u,
              i,
              o,
              s = this,
              a = s.constructor,
              c = +(t = new a(t));
            if (!s.d || !t.d || !s.d[0] || !t.d[0]) return new a(y(+s, c));
            if ((s = new a(s)).eq(1)) return s;
            if (((r = a.precision), (i = a.rounding), t.eq(1)))
              return P(s, r, i);
            if (
              (n = A(t.e / M)) >= t.d.length - 1 &&
              (e = c < 0 ? -c : c) <= 9007199254740991
            )
              return (
                (u = V(a, s, e, r)), t.s < 0 ? new a(1).div(u) : P(u, r, i)
              );
            if ((o = s.s) < 0) {
              if (n < t.d.length - 1) return new a(NaN);
              if (
                (0 == (1 & t.d[n]) && (o = 1),
                0 == s.e && 1 == s.d[0] && 1 == s.d.length)
              )
                return (s.s = o), s;
            }
            return (n =
              0 != (e = y(+s, c)) && isFinite(e)
                ? new a(e + '').e
                : A(c * (Math.log('0.' + T(s.d)) / Math.LN10 + s.e + 1))) >
              a.maxE + 1 || n < a.minE - 1
              ? new a(n > 0 ? o / 0 : 0)
              : ((m = !1),
                (a.rounding = s.s = 1),
                (e = Math.min(12, (n + '').length)),
                (u = Y(t.times(X(s, r + e)), r)).d &&
                  I((u = P(u, r + 5, 1)).d, r, i) &&
                  ((n = r + 10),
                  +T((u = P(Y(t.times(X(s, n + e)), n), n + 5, 1)).d).slice(
                    r + 1,
                    r + 15
                  ) +
                    1 ==
                    1e14 && (u = P(u, r + 1, 0))),
                (u.s = o),
                (m = !0),
                (a.rounding = i),
                P(u, r, i));
          }),
        (O.toPrecision = function (t, n) {
          var e,
            r = this,
            u = r.constructor;
          return (
            void 0 === t
              ? (e = q(r, r.e <= u.toExpNeg || r.e >= u.toExpPos))
              : (z(t, 1, h),
                void 0 === n ? (n = u.rounding) : z(n, 0, 8),
                (e = q(
                  (r = P(new u(r), t, n)),
                  t <= r.e || r.e <= u.toExpNeg,
                  t
                ))),
            r.isNeg() && !r.isZero() ? '-' + e : e
          );
        }),
        (O.toSignificantDigits = O.toSD =
          function (t, n) {
            var e = this.constructor;
            return (
              void 0 === t
                ? ((t = e.precision), (n = e.rounding))
                : (z(t, 1, h), void 0 === n ? (n = e.rounding) : z(n, 0, 8)),
              P(new e(this), t, n)
            );
          }),
        (O.toString = function () {
          var t = this,
            n = t.constructor,
            e = q(t, t.e <= n.toExpNeg || t.e >= n.toExpPos);
          return t.isNeg() && !t.isZero() ? '-' + e : e;
        }),
        (O.truncated = O.trunc =
          function () {
            return P(new this.constructor(this), this.e + 1, 1);
          }),
        (O.valueOf = O.toJSON =
          function () {
            var t = this,
              n = t.constructor,
              e = q(t, t.e <= n.toExpNeg || t.e >= n.toExpPos);
            return t.isNeg() ? '-' + e : e;
          });
      var k = (function () {
        function t(t, n, e) {
          var r,
            u = 0,
            i = t.length;
          for (t = t.slice(); i--; )
            (r = t[i] * n + u), (t[i] = r % e | 0), (u = (r / e) | 0);
          return u && t.unshift(u), t;
        }
        function n(t, n, e, r) {
          var u, i;
          if (e != r) i = e > r ? 1 : -1;
          else
            for (u = i = 0; u < e; u++)
              if (t[u] != n[u]) {
                i = t[u] > n[u] ? 1 : -1;
                break;
              }
          return i;
        }
        function e(t, n, e, r) {
          for (var u = 0; e--; )
            (t[e] -= u),
              (u = t[e] < n[e] ? 1 : 0),
              (t[e] = u * r + t[e] - n[e]);
          for (; !t[0] && t.length > 1; ) t.shift();
        }
        return function (r, u, i, o, s, c) {
          var f,
            h,
            D,
            l,
            p,
            d,
            m,
            g,
            F,
            w,
            v,
            E,
            y,
            C,
            x,
            B,
            b,
            _,
            S,
            O,
            T = r.constructor,
            z = r.s == u.s ? 1 : -1,
            I = r.d,
            j = u.d;
          if (!I || !I[0] || !j || !j[0])
            return new T(
              r.s && u.s && (I ? !j || I[0] != j[0] : j)
                ? (I && 0 == I[0]) || !j
                  ? 0 * z
                  : z / 0
                : NaN
            );
          for (
            c
              ? ((p = 1), (h = r.e - u.e))
              : ((c = N), (p = M), (h = A(r.e / p) - A(u.e / p))),
              S = j.length,
              b = I.length,
              w = (F = new T(z)).d = [],
              D = 0;
            j[D] == (I[D] || 0);
            D++
          );
          if (
            (j[D] > (I[D] || 0) && h--,
            null == i
              ? ((C = i = T.precision), (o = T.rounding))
              : (C = s ? i + (r.e - u.e) + 1 : i),
            C < 0)
          )
            w.push(1), (d = !0);
          else {
            if (((C = (C / p + 2) | 0), (D = 0), 1 == S)) {
              for (l = 0, j = j[0], C++; (D < b || l) && C--; D++)
                (x = l * c + (I[D] || 0)),
                  (w[D] = (x / j) | 0),
                  (l = x % j | 0);
              d = l || D < b;
            } else {
              for (
                (l = (c / (j[0] + 1)) | 0) > 1 &&
                  ((j = t(j, l, c)),
                  (I = t(I, l, c)),
                  (S = j.length),
                  (b = I.length)),
                  B = S,
                  E = (v = I.slice(0, S)).length;
                E < S;

              )
                v[E++] = 0;
              (O = j.slice()).unshift(0), (_ = j[0]), j[1] >= c / 2 && ++_;
              do {
                (l = 0),
                  (f = n(j, v, S, E)) < 0
                    ? ((y = v[0]),
                      S != E && (y = y * c + (v[1] || 0)),
                      (l = (y / _) | 0) > 1
                        ? (l >= c && (l = c - 1),
                          1 ==
                            (f = n(
                              (m = t(j, l, c)),
                              v,
                              (g = m.length),
                              (E = v.length)
                            )) && (l--, e(m, S < g ? O : j, g, c)))
                        : (0 == l && (f = l = 1), (m = j.slice())),
                      (g = m.length) < E && m.unshift(0),
                      e(v, m, E, c),
                      -1 == f &&
                        (f = n(j, v, S, (E = v.length))) < 1 &&
                        (l++, e(v, S < E ? O : j, E, c)),
                      (E = v.length))
                    : 0 === f && (l++, (v = [0])),
                  (w[D++] = l),
                  f && v[0] ? (v[E++] = I[B] || 0) : ((v = [I[B]]), (E = 1));
              } while ((B++ < b || void 0 !== v[0]) && C--);
              d = void 0 !== v[0];
            }
            w[0] || w.shift();
          }
          if (1 == p) (F.e = h), (a = d);
          else {
            for (D = 1, l = w[0]; l >= 10; l /= 10) D++;
            (F.e = D + h * p - 1), P(F, s ? i + F.e + 1 : i, o, d);
          }
          return F;
        };
      })();
      function P(t, n, e, r) {
        var u,
          i,
          o,
          s,
          a,
          c,
          f,
          h,
          D,
          l = t.constructor;
        t: if (null != n) {
          if (!(h = t.d)) return t;
          for (u = 1, s = h[0]; s >= 10; s /= 10) u++;
          if ((i = n - u) < 0)
            (i += M),
              (o = n),
              (a = ((f = h[(D = 0)]) / y(10, u - o - 1)) % 10 | 0);
          else if ((D = Math.ceil((i + 1) / M)) >= (s = h.length)) {
            if (!r) break t;
            for (; s++ <= D; ) h.push(0);
            (f = a = 0), (u = 1), (o = (i %= M) - M + 1);
          } else {
            for (f = s = h[D], u = 1; s >= 10; s /= 10) u++;
            a =
              (o = (i %= M) - M + u) < 0 ? 0 : (f / y(10, u - o - 1)) % 10 | 0;
          }
          if (
            ((r =
              r ||
              n < 0 ||
              void 0 !== h[D + 1] ||
              (o < 0 ? f : f % y(10, u - o - 1))),
            (c =
              e < 4
                ? (a || r) && (0 == e || e == (t.s < 0 ? 3 : 2))
                : a > 5 ||
                  (5 == a &&
                    (4 == e ||
                      r ||
                      (6 == e &&
                        (i > 0 ? (o > 0 ? f / y(10, u - o) : 0) : h[D - 1]) %
                          10 &
                          1) ||
                      e == (t.s < 0 ? 8 : 7)))),
            n < 1 || !h[0])
          )
            return (
              (h.length = 0),
              c
                ? ((n -= t.e + 1),
                  (h[0] = y(10, (M - (n % M)) % M)),
                  (t.e = -n || 0))
                : (h[0] = t.e = 0),
              t
            );
          if (
            (0 == i
              ? ((h.length = D), (s = 1), D--)
              : ((h.length = D + 1),
                (s = y(10, M - i)),
                (h[D] = o > 0 ? ((f / y(10, u - o)) % y(10, o) | 0) * s : 0)),
            c)
          )
            for (;;) {
              if (0 == D) {
                for (i = 1, o = h[0]; o >= 10; o /= 10) i++;
                for (o = h[0] += s, s = 1; o >= 10; o /= 10) s++;
                i != s && (t.e++, h[0] == N && (h[0] = 1));
                break;
              }
              if (((h[D] += s), h[D] != N)) break;
              (h[D--] = 0), (s = 1);
            }
          for (i = h.length; 0 === h[--i]; ) h.pop();
        }
        return (
          m &&
            (t.e > l.maxE
              ? ((t.d = null), (t.e = NaN))
              : t.e < l.minE && ((t.e = 0), (t.d = [0]))),
          t
        );
      }
      function q(t, n, e) {
        if (!t.isFinite()) return W(t);
        var r,
          u = t.e,
          i = T(t.d),
          o = i.length;
        return (
          n
            ? (e && (r = e - o) > 0
                ? (i = i.charAt(0) + '.' + i.slice(1) + $(r))
                : o > 1 && (i = i.charAt(0) + '.' + i.slice(1)),
              (i = i + (t.e < 0 ? 'e' : 'e+') + t.e))
            : u < 0
            ? ((i = '0.' + $(-u - 1) + i), e && (r = e - o) > 0 && (i += $(r)))
            : u >= o
            ? ((i += $(u + 1 - o)),
              e && (r = e - u - 1) > 0 && (i = i + '.' + $(r)))
            : ((r = u + 1) < o && (i = i.slice(0, r) + '.' + i.slice(r)),
              e && (r = e - o) > 0 && (u + 1 === o && (i += '.'), (i += $(r)))),
          i
        );
      }
      function R(t, n) {
        var e = t[0];
        for (n *= M; e >= 10; e /= 10) n++;
        return n;
      }
      function U(t, n, e) {
        if (n > _) throw ((m = !0), e && (t.precision = e), Error(w));
        return P(new t(l), n, 1, !0);
      }
      function Z(t, n, e) {
        if (n > S) throw Error(w);
        return P(new t(p), n, e, !0);
      }
      function L(t) {
        var n = t.length - 1,
          e = n * M + 1;
        if ((n = t[n])) {
          for (; n % 10 == 0; n /= 10) e--;
          for (n = t[0]; n >= 10; n /= 10) e++;
        }
        return e;
      }
      function $(t) {
        for (var n = ''; t--; ) n += '0';
        return n;
      }
      function V(t, n, e, r) {
        var u,
          i = new t(1),
          o = Math.ceil(r / M + 4);
        for (m = !1; ; ) {
          if (
            (e % 2 && rt((i = i.times(n)).d, o) && (u = !0),
            0 === (e = A(e / 2)))
          ) {
            (e = i.d.length - 1), u && 0 === i.d[e] && ++i.d[e];
            break;
          }
          rt((n = n.times(n)).d, o);
        }
        return (m = !0), i;
      }
      function H(t) {
        return 1 & t.d[t.d.length - 1];
      }
      function J(t, n, e) {
        for (var r, u = new t(n[0]), i = 0; ++i < n.length; ) {
          if (!(r = new t(n[i])).s) {
            u = r;
            break;
          }
          u[e](r) && (u = r);
        }
        return u;
      }
      function Y(t, n) {
        var e,
          r,
          u,
          i,
          o,
          s,
          a,
          c = 0,
          f = 0,
          h = 0,
          D = t.constructor,
          l = D.rounding,
          p = D.precision;
        if (!t.d || !t.d[0] || t.e > 17)
          return new D(
            t.d
              ? t.d[0]
                ? t.s < 0
                  ? 0
                  : 1 / 0
                : 1
              : t.s
              ? t.s < 0
                ? 0
                : t
              : NaN
          );
        for (
          null == n ? ((m = !1), (a = p)) : (a = n), s = new D(0.03125);
          t.e > -2;

        )
          (t = t.times(s)), (h += 5);
        for (
          a += r = ((Math.log(y(2, h)) / Math.LN10) * 2 + 5) | 0,
            e = i = o = new D(1),
            D.precision = a;
          ;

        ) {
          if (
            ((i = P(i.times(t), a, 1)),
            (e = e.times(++f)),
            T((s = o.plus(k(i, e, a, 1))).d).slice(0, a) === T(o.d).slice(0, a))
          ) {
            for (u = h; u--; ) o = P(o.times(o), a, 1);
            if (null != n) return (D.precision = p), o;
            if (!(c < 3 && I(o.d, a - r, l, c)))
              return P(o, (D.precision = p), l, (m = !0));
            (D.precision = a += 10), (e = i = s = new D(1)), (f = 0), c++;
          }
          o = s;
        }
      }
      function X(t, n) {
        var e,
          r,
          u,
          i,
          o,
          s,
          a,
          c,
          f,
          h,
          D,
          l = 1,
          p = t,
          d = p.d,
          g = p.constructor,
          F = g.rounding,
          w = g.precision;
        if (p.s < 0 || !d || !d[0] || (!p.e && 1 == d[0] && 1 == d.length))
          return new g(d && !d[0] ? -1 / 0 : 1 != p.s ? NaN : d ? 0 : p);
        if (
          (null == n ? ((m = !1), (f = w)) : (f = n),
          (g.precision = f += 10),
          (r = (e = T(d)).charAt(0)),
          !(Math.abs((i = p.e)) < 15e14))
        )
          return (
            (c = U(g, f + 2, w).times(i + '')),
            (p = X(new g(r + '.' + e.slice(1)), f - 10).plus(c)),
            (g.precision = w),
            null == n ? P(p, w, F, (m = !0)) : p
          );
        for (; (r < 7 && 1 != r) || (1 == r && e.charAt(1) > 3); )
          (r = (e = T((p = p.times(t)).d)).charAt(0)), l++;
        for (
          i = p.e,
            r > 1
              ? ((p = new g('0.' + e)), i++)
              : (p = new g(r + '.' + e.slice(1))),
            h = p,
            a = o = p = k(p.minus(1), p.plus(1), f, 1),
            D = P(p.times(p), f, 1),
            u = 3;
          ;

        ) {
          if (
            ((o = P(o.times(D), f, 1)),
            T((c = a.plus(k(o, new g(u), f, 1))).d).slice(0, f) ===
              T(a.d).slice(0, f))
          ) {
            if (
              ((a = a.times(2)),
              0 !== i && (a = a.plus(U(g, f + 2, w).times(i + ''))),
              (a = k(a, new g(l), f, 1)),
              null != n)
            )
              return (g.precision = w), a;
            if (!I(a.d, f - 10, F, s))
              return P(a, (g.precision = w), F, (m = !0));
            (g.precision = f += 10),
              (c = o = p = k(h.minus(1), h.plus(1), f, 1)),
              (D = P(p.times(p), f, 1)),
              (u = s = 1);
          }
          (a = c), (u += 2);
        }
      }
      function W(t) {
        return String((t.s * t.s) / 0);
      }
      function G(t, n) {
        var e, r, u;
        for (
          (e = n.indexOf('.')) > -1 && (n = n.replace('.', '')),
            (r = n.search(/e/i)) > 0
              ? (e < 0 && (e = r),
                (e += +n.slice(r + 1)),
                (n = n.substring(0, r)))
              : e < 0 && (e = n.length),
            r = 0;
          48 === n.charCodeAt(r);
          r++
        );
        for (u = n.length; 48 === n.charCodeAt(u - 1); --u);
        if ((n = n.slice(r, u))) {
          if (
            ((u -= r),
            (t.e = e = e - r - 1),
            (t.d = []),
            (r = (e + 1) % M),
            e < 0 && (r += M),
            r < u)
          ) {
            for (r && t.d.push(+n.slice(0, r)), u -= M; r < u; )
              t.d.push(+n.slice(r, (r += M)));
            (n = n.slice(r)), (r = M - n.length);
          } else r -= u;
          for (; r--; ) n += '0';
          t.d.push(+n),
            m &&
              (t.e > t.constructor.maxE
                ? ((t.d = null), (t.e = NaN))
                : t.e < t.constructor.minE && ((t.e = 0), (t.d = [0])));
        } else (t.e = 0), (t.d = [0]);
        return t;
      }
      function K(t, n) {
        var e, r, u, i, o, s, a, c, f;
        if (n.indexOf('_') > -1) {
          if (((n = n.replace(/(\d)_(?=\d)/g, '$1')), b.test(n)))
            return G(t, n);
        } else if ('Infinity' === n || 'NaN' === n)
          return +n || (t.s = NaN), (t.e = NaN), (t.d = null), t;
        if (x.test(n)) (e = 16), (n = n.toLowerCase());
        else if (C.test(n)) e = 2;
        else {
          if (!B.test(n)) throw Error(F + n);
          e = 8;
        }
        for (
          (i = n.search(/p/i)) > 0
            ? ((a = +n.slice(i + 1)), (n = n.substring(2, i)))
            : (n = n.slice(2)),
            o = (i = n.indexOf('.')) >= 0,
            r = t.constructor,
            o &&
              ((i = (s = (n = n.replace('.', '')).length) - i),
              (u = V(r, new r(e), i, 2 * i))),
            i = f = (c = j(n, e, N)).length - 1;
          0 === c[i];
          --i
        )
          c.pop();
        return i < 0
          ? new r(0 * t.s)
          : ((t.e = R(c, f)),
            (t.d = c),
            (m = !1),
            o && (t = k(t, u, 4 * s)),
            a && (t = t.times(Math.abs(a) < 54 ? y(2, a) : $t.pow(2, a))),
            (m = !0),
            t);
      }
      function Q(t, n, e, r, u) {
        var i,
          o,
          s,
          a,
          c = t.precision,
          f = Math.ceil(c / M);
        for (m = !1, a = e.times(e), s = new t(r); ; ) {
          if (
            ((o = k(s.times(a), new t(n++ * n++), c, 1)),
            (s = u ? r.plus(o) : r.minus(o)),
            (r = k(o.times(a), new t(n++ * n++), c, 1)),
            void 0 !== (o = s.plus(r)).d[f])
          ) {
            for (i = f; o.d[i] === s.d[i] && i--; );
            if (-1 == i) break;
          }
          (i = s), (s = r), (r = o), (o = i);
        }
        return (m = !0), (o.d.length = f + 1), o;
      }
      function tt(t, n) {
        for (var e = t; --n; ) e *= t;
        return e;
      }
      function nt(t, n) {
        var e,
          r = n.s < 0,
          u = Z(t, t.precision, 1),
          i = u.times(0.5);
        if ((n = n.abs()).lte(i)) return (c = r ? 4 : 1), n;
        if ((e = n.divToInt(u)).isZero()) c = r ? 3 : 2;
        else {
          if ((n = n.minus(e.times(u))).lte(i))
            return (c = H(e) ? (r ? 2 : 3) : r ? 4 : 1), n;
          c = H(e) ? (r ? 1 : 4) : r ? 3 : 2;
        }
        return n.minus(u).abs();
      }
      function et(t, n, e, r) {
        var u,
          i,
          o,
          s,
          c,
          f,
          l,
          p,
          d,
          m = t.constructor,
          g = void 0 !== e;
        if (
          (g
            ? (z(e, 1, h), void 0 === r ? (r = m.rounding) : z(r, 0, 8))
            : ((e = m.precision), (r = m.rounding)),
          t.isFinite())
        ) {
          for (
            g
              ? ((u = 2), 16 == n ? (e = 4 * e - 3) : 8 == n && (e = 3 * e - 2))
              : (u = n),
              (o = (l = q(t)).indexOf('.')) >= 0 &&
                ((l = l.replace('.', '')),
                ((d = new m(1)).e = l.length - o),
                (d.d = j(q(d), 10, u)),
                (d.e = d.d.length)),
              i = c = (p = j(l, 10, u)).length;
            0 == p[--c];

          )
            p.pop();
          if (p[0]) {
            if (
              (o < 0
                ? i--
                : (((t = new m(t)).d = p),
                  (t.e = i),
                  (p = (t = k(t, d, e, r, 0, u)).d),
                  (i = t.e),
                  (f = a)),
              (o = p[e]),
              (s = u / 2),
              (f = f || void 0 !== p[e + 1]),
              (f =
                r < 4
                  ? (void 0 !== o || f) && (0 === r || r === (t.s < 0 ? 3 : 2))
                  : o > s ||
                    (o === s &&
                      (4 === r ||
                        f ||
                        (6 === r && 1 & p[e - 1]) ||
                        r === (t.s < 0 ? 8 : 7)))),
              (p.length = e),
              f)
            )
              for (; ++p[--e] > u - 1; ) (p[e] = 0), e || (++i, p.unshift(1));
            for (c = p.length; !p[c - 1]; --c);
            for (o = 0, l = ''; o < c; o++) l += D.charAt(p[o]);
            if (g) {
              if (c > 1)
                if (16 == n || 8 == n) {
                  for (o = 16 == n ? 4 : 3, --c; c % o; c++) l += '0';
                  for (c = (p = j(l, u, n)).length; !p[c - 1]; --c);
                  for (o = 1, l = '1.'; o < c; o++) l += D.charAt(p[o]);
                } else l = l.charAt(0) + '.' + l.slice(1);
              l = l + (i < 0 ? 'p' : 'p+') + i;
            } else if (i < 0) {
              for (; ++i; ) l = '0' + l;
              l = '0.' + l;
            } else if (++i > c) for (i -= c; i--; ) l += '0';
            else i < c && (l = l.slice(0, i) + '.' + l.slice(i));
          } else l = g ? '0p+0' : '0';
          l = (16 == n ? '0x' : 2 == n ? '0b' : 8 == n ? '0o' : '') + l;
        } else l = W(t);
        return t.s < 0 ? '-' + l : l;
      }
      function rt(t, n) {
        if (t.length > n) return (t.length = n), !0;
      }
      function ut(t) {
        return new this(t).abs();
      }
      function it(t) {
        return new this(t).acos();
      }
      function ot(t) {
        return new this(t).acosh();
      }
      function st(t, n) {
        return new this(t).plus(n);
      }
      function at(t) {
        return new this(t).asin();
      }
      function ct(t) {
        return new this(t).asinh();
      }
      function ft(t) {
        return new this(t).atan();
      }
      function ht(t) {
        return new this(t).atanh();
      }
      function Dt(t, n) {
        (t = new this(t)), (n = new this(n));
        var e,
          r = this.precision,
          u = this.rounding,
          i = r + 4;
        return (
          t.s && n.s
            ? t.d || n.d
              ? !n.d || t.isZero()
                ? ((e = n.s < 0 ? Z(this, r, u) : new this(0)).s = t.s)
                : !t.d || n.isZero()
                ? ((e = Z(this, i, 1).times(0.5)).s = t.s)
                : n.s < 0
                ? ((this.precision = i),
                  (this.rounding = 1),
                  (e = this.atan(k(t, n, i, 1))),
                  (n = Z(this, i, 1)),
                  (this.precision = r),
                  (this.rounding = u),
                  (e = t.s < 0 ? e.minus(n) : e.plus(n)))
                : (e = this.atan(k(t, n, i, 1)))
              : ((e = Z(this, i, 1).times(n.s > 0 ? 0.25 : 0.75)).s = t.s)
            : (e = new this(NaN)),
          e
        );
      }
      function lt(t) {
        return new this(t).cbrt();
      }
      function pt(t) {
        return P((t = new this(t)), t.e + 1, 2);
      }
      function dt(t, n, e) {
        return new this(t).clamp(n, e);
      }
      function mt(t) {
        if (!t || 'object' !== typeof t) throw Error(g + 'Object expected');
        var n,
          e,
          r,
          u = !0 === t.defaults,
          i = [
            'precision',
            1,
            h,
            'rounding',
            0,
            8,
            'toExpNeg',
            -f,
            0,
            'toExpPos',
            0,
            f,
            'maxE',
            0,
            f,
            'minE',
            -f,
            0,
            'modulo',
            0,
            9
          ];
        for (n = 0; n < i.length; n += 3)
          if (((e = i[n]), u && (this[e] = d[e]), void 0 !== (r = t[e]))) {
            if (!(A(r) === r && r >= i[n + 1] && r <= i[n + 2]))
              throw Error(F + e + ': ' + r);
            this[e] = r;
          }
        if (((e = 'crypto'), u && (this[e] = d[e]), void 0 !== (r = t[e]))) {
          if (!0 !== r && !1 !== r && 0 !== r && 1 !== r)
            throw Error(F + e + ': ' + r);
          if (r) {
            if (
              'undefined' == typeof crypto ||
              !crypto ||
              (!crypto.getRandomValues && !crypto.randomBytes)
            )
              throw Error(v);
            this[e] = !0;
          } else this[e] = !1;
        }
        return this;
      }
      function gt(t) {
        return new this(t).cos();
      }
      function Ft(t) {
        return new this(t).cosh();
      }
      function wt(t, n) {
        return new this(t).div(n);
      }
      function vt(t) {
        return new this(t).exp();
      }
      function Et(t) {
        return P((t = new this(t)), t.e + 1, 3);
      }
      function At() {
        var t,
          n,
          e = new this(0);
        for (m = !1, t = 0; t < arguments.length; )
          if ((n = new this(arguments[t++])).d) e.d && (e = e.plus(n.times(n)));
          else {
            if (n.s) return (m = !0), new this(1 / 0);
            e = n;
          }
        return (m = !0), e.sqrt();
      }
      function yt(t) {
        return t instanceof $t || (t && t.toStringTag === E) || !1;
      }
      function Ct(t) {
        return new this(t).ln();
      }
      function xt(t, n) {
        return new this(t).log(n);
      }
      function Bt(t) {
        return new this(t).log(2);
      }
      function bt(t) {
        return new this(t).log(10);
      }
      function Nt() {
        return J(this, arguments, 'lt');
      }
      function Mt() {
        return J(this, arguments, 'gt');
      }
      function _t(t, n) {
        return new this(t).mod(n);
      }
      function St(t, n) {
        return new this(t).mul(n);
      }
      function Ot(t, n) {
        return new this(t).pow(n);
      }
      function Tt(t) {
        var n,
          e,
          r,
          u,
          i = 0,
          o = new this(1),
          s = [];
        if (
          (void 0 === t ? (t = this.precision) : z(t, 1, h),
          (r = Math.ceil(t / M)),
          this.crypto)
        )
          if (crypto.getRandomValues)
            for (n = crypto.getRandomValues(new Uint32Array(r)); i < r; )
              (u = n[i]) >= 429e7
                ? (n[i] = crypto.getRandomValues(new Uint32Array(1))[0])
                : (s[i++] = u % 1e7);
          else {
            if (!crypto.randomBytes) throw Error(v);
            for (n = crypto.randomBytes((r *= 4)); i < r; )
              (u =
                n[i] +
                (n[i + 1] << 8) +
                (n[i + 2] << 16) +
                ((127 & n[i + 3]) << 24)) >= 214e7
                ? crypto.randomBytes(4).copy(n, i)
                : (s.push(u % 1e7), (i += 4));
            i = r / 4;
          }
        else for (; i < r; ) s[i++] = (1e7 * Math.random()) | 0;
        for (
          r = s[--i],
            t %= M,
            r && t && ((u = y(10, M - t)), (s[i] = ((r / u) | 0) * u));
          0 === s[i];
          i--
        )
          s.pop();
        if (i < 0) (e = 0), (s = [0]);
        else {
          for (e = -1; 0 === s[0]; e -= M) s.shift();
          for (r = 1, u = s[0]; u >= 10; u /= 10) r++;
          r < M && (e -= M - r);
        }
        return (o.e = e), (o.d = s), o;
      }
      function zt(t) {
        return P((t = new this(t)), t.e + 1, this.rounding);
      }
      function It(t) {
        return (t = new this(t)).d ? (t.d[0] ? t.s : 0 * t.s) : t.s || NaN;
      }
      function jt(t) {
        return new this(t).sin();
      }
      function kt(t) {
        return new this(t).sinh();
      }
      function Pt(t) {
        return new this(t).sqrt();
      }
      function qt(t, n) {
        return new this(t).sub(n);
      }
      function Rt() {
        var t = 0,
          n = arguments,
          e = new this(n[t]);
        for (m = !1; e.s && ++t < n.length; ) e = e.plus(n[t]);
        return (m = !0), P(e, this.precision, this.rounding);
      }
      function Ut(t) {
        return new this(t).tan();
      }
      function Zt(t) {
        return new this(t).tanh();
      }
      function Lt(t) {
        return P((t = new this(t)), t.e + 1, 1);
      }
      (O[Symbol.for('nodejs.util.inspect.custom')] = O.toString),
        (O[Symbol.toStringTag] = 'Decimal');
      var $t = (O.constructor = (function t(n) {
        var e, r, u;
        function i(t) {
          var n,
            e,
            r,
            u = this;
          if (!(u instanceof i)) return new i(t);
          if (((u.constructor = i), yt(t)))
            return (
              (u.s = t.s),
              void (m
                ? !t.d || t.e > i.maxE
                  ? ((u.e = NaN), (u.d = null))
                  : t.e < i.minE
                  ? ((u.e = 0), (u.d = [0]))
                  : ((u.e = t.e), (u.d = t.d.slice()))
                : ((u.e = t.e), (u.d = t.d ? t.d.slice() : t.d)))
            );
          if ('number' === (r = typeof t)) {
            if (0 === t)
              return (u.s = 1 / t < 0 ? -1 : 1), (u.e = 0), void (u.d = [0]);
            if (
              (t < 0 ? ((t = -t), (u.s = -1)) : (u.s = 1), t === ~~t && t < 1e7)
            ) {
              for (n = 0, e = t; e >= 10; e /= 10) n++;
              return void (m
                ? n > i.maxE
                  ? ((u.e = NaN), (u.d = null))
                  : n < i.minE
                  ? ((u.e = 0), (u.d = [0]))
                  : ((u.e = n), (u.d = [t]))
                : ((u.e = n), (u.d = [t])));
            }
            return 0 * t !== 0
              ? (t || (u.s = NaN), (u.e = NaN), void (u.d = null))
              : G(u, t.toString());
          }
          if ('string' !== r) throw Error(F + t);
          return (
            45 === (e = t.charCodeAt(0))
              ? ((t = t.slice(1)), (u.s = -1))
              : (43 === e && (t = t.slice(1)), (u.s = 1)),
            b.test(t) ? G(u, t) : K(u, t)
          );
        }
        if (
          ((i.prototype = O),
          (i.ROUND_UP = 0),
          (i.ROUND_DOWN = 1),
          (i.ROUND_CEIL = 2),
          (i.ROUND_FLOOR = 3),
          (i.ROUND_HALF_UP = 4),
          (i.ROUND_HALF_DOWN = 5),
          (i.ROUND_HALF_EVEN = 6),
          (i.ROUND_HALF_CEIL = 7),
          (i.ROUND_HALF_FLOOR = 8),
          (i.EUCLID = 9),
          (i.config = i.set = mt),
          (i.clone = t),
          (i.isDecimal = yt),
          (i.abs = ut),
          (i.acos = it),
          (i.acosh = ot),
          (i.add = st),
          (i.asin = at),
          (i.asinh = ct),
          (i.atan = ft),
          (i.atanh = ht),
          (i.atan2 = Dt),
          (i.cbrt = lt),
          (i.ceil = pt),
          (i.clamp = dt),
          (i.cos = gt),
          (i.cosh = Ft),
          (i.div = wt),
          (i.exp = vt),
          (i.floor = Et),
          (i.hypot = At),
          (i.ln = Ct),
          (i.log = xt),
          (i.log10 = bt),
          (i.log2 = Bt),
          (i.max = Nt),
          (i.min = Mt),
          (i.mod = _t),
          (i.mul = St),
          (i.pow = Ot),
          (i.random = Tt),
          (i.round = zt),
          (i.sign = It),
          (i.sin = jt),
          (i.sinh = kt),
          (i.sqrt = Pt),
          (i.sub = qt),
          (i.sum = Rt),
          (i.tan = Ut),
          (i.tanh = Zt),
          (i.trunc = Lt),
          void 0 === n && (n = {}),
          n && !0 !== n.defaults)
        )
          for (
            u = [
              'precision',
              'rounding',
              'toExpNeg',
              'toExpPos',
              'maxE',
              'minE',
              'modulo',
              'crypto'
            ],
              e = 0;
            e < u.length;

          )
            n.hasOwnProperty((r = u[e++])) || (n[r] = this[r]);
        return i.config(n), i;
      })(d));
      (l = new $t(l)), (p = new $t(p));
      const Vt = $t;
      function Ht(t) {
        return 'number' === typeof t;
      }
      function Jt(t) {
        return (
          !(
            !t ||
            'object' !== typeof t ||
            'function' !== typeof t.constructor
          ) &&
          ((!0 === t.isBigNumber &&
            'object' === typeof t.constructor.prototype &&
            !0 === t.constructor.prototype.isBigNumber) ||
            ('function' === typeof t.constructor.isDecimal &&
              !0 === t.constructor.isDecimal(t)))
        );
      }
      function Yt(t) {
        return (
          (t &&
            'object' === typeof t &&
            !0 === Object.getPrototypeOf(t).isComplex) ||
          !1
        );
      }
      function Xt(t) {
        return (
          (t &&
            'object' === typeof t &&
            !0 === Object.getPrototypeOf(t).isFraction) ||
          !1
        );
      }
      function Wt(t) {
        return (t && !0 === t.constructor.prototype.isUnit) || !1;
      }
      function Gt(t) {
        return 'string' === typeof t;
      }
      var Kt = Array.isArray;
      function Qt(t) {
        return (t && !0 === t.constructor.prototype.isMatrix) || !1;
      }
      function tn(t) {
        return Array.isArray(t) || Qt(t);
      }
      function nn(t) {
        return (
          (t && t.isDenseMatrix && !0 === t.constructor.prototype.isMatrix) ||
          !1
        );
      }
      function en(t) {
        return (
          (t && t.isSparseMatrix && !0 === t.constructor.prototype.isMatrix) ||
          !1
        );
      }
      function rn(t) {
        return (t && !0 === t.constructor.prototype.isRange) || !1;
      }
      function un(t) {
        return (t && !0 === t.constructor.prototype.isIndex) || !1;
      }
      function on(t) {
        return 'boolean' === typeof t;
      }
      function sn(t) {
        return (t && !0 === t.constructor.prototype.isResultSet) || !1;
      }
      function an(t) {
        return (t && !0 === t.constructor.prototype.isHelp) || !1;
      }
      function cn(t) {
        return 'function' === typeof t;
      }
      function fn(t) {
        return t instanceof Date;
      }
      function hn(t) {
        return t instanceof RegExp;
      }
      function Dn(t) {
        return !(
          !t ||
          'object' !== typeof t ||
          t.constructor !== Object ||
          Yt(t) ||
          Xt(t)
        );
      }
      function ln(t) {
        return null === t;
      }
      function pn(t) {
        return void 0 === t;
      }
      function dn(t) {
        return (
          (t &&
            !0 === t.isAccessorNode &&
            !0 === t.constructor.prototype.isNode) ||
          !1
        );
      }
      function mn(t) {
        return (
          (t &&
            !0 === t.isArrayNode &&
            !0 === t.constructor.prototype.isNode) ||
          !1
        );
      }
      function gn(t) {
        return (
          (t &&
            !0 === t.isAssignmentNode &&
            !0 === t.constructor.prototype.isNode) ||
          !1
        );
      }
      function Fn(t) {
        return (
          (t &&
            !0 === t.isBlockNode &&
            !0 === t.constructor.prototype.isNode) ||
          !1
        );
      }
      function wn(t) {
        return (
          (t &&
            !0 === t.isConditionalNode &&
            !0 === t.constructor.prototype.isNode) ||
          !1
        );
      }
      function vn(t) {
        return (
          (t &&
            !0 === t.isConstantNode &&
            !0 === t.constructor.prototype.isNode) ||
          !1
        );
      }
      function En(t) {
        return (
          (t &&
            !0 === t.isFunctionAssignmentNode &&
            !0 === t.constructor.prototype.isNode) ||
          !1
        );
      }
      function An(t) {
        return (
          (t &&
            !0 === t.isFunctionNode &&
            !0 === t.constructor.prototype.isNode) ||
          !1
        );
      }
      function yn(t) {
        return (
          (t &&
            !0 === t.isIndexNode &&
            !0 === t.constructor.prototype.isNode) ||
          !1
        );
      }
      function Cn(t) {
        return (
          (t && !0 === t.isNode && !0 === t.constructor.prototype.isNode) || !1
        );
      }
      function xn(t) {
        return (
          (t &&
            !0 === t.isObjectNode &&
            !0 === t.constructor.prototype.isNode) ||
          !1
        );
      }
      function Bn(t) {
        return (
          (t &&
            !0 === t.isOperatorNode &&
            !0 === t.constructor.prototype.isNode) ||
          !1
        );
      }
      function bn(t) {
        return (
          (t &&
            !0 === t.isParenthesisNode &&
            !0 === t.constructor.prototype.isNode) ||
          !1
        );
      }
      function Nn(t) {
        return (
          (t &&
            !0 === t.isRangeNode &&
            !0 === t.constructor.prototype.isNode) ||
          !1
        );
      }
      function Mn(t) {
        return (
          (t &&
            !0 === t.isRelationalNode &&
            !0 === t.constructor.prototype.isNode) ||
          !1
        );
      }
      function _n(t) {
        return (
          (t &&
            !0 === t.isSymbolNode &&
            !0 === t.constructor.prototype.isNode) ||
          !1
        );
      }
      function Sn(t) {
        return (t && !0 === t.constructor.prototype.isChain) || !1;
      }
      function On(t) {
        var n = typeof t;
        return 'object' === n
          ? null === t
            ? 'null'
            : Jt(t)
            ? 'BigNumber'
            : t.constructor && t.constructor.name
            ? t.constructor.name
            : 'Object'
          : n;
      }
      function Tn(t) {
        var n = typeof t;
        if (
          'number' === n ||
          'string' === n ||
          'boolean' === n ||
          null === t ||
          void 0 === t
        )
          return t;
        if ('function' === typeof t.clone) return t.clone();
        if (Array.isArray(t))
          return t.map(function (t) {
            return Tn(t);
          });
        if (t instanceof Date) return new Date(t.valueOf());
        if (Jt(t)) return t;
        if (Dn(t))
          return (function (t, n) {
            var e = {};
            for (var r in t) In(t, r) && (e[r] = n(t[r]));
            return e;
          })(t, Tn);
        throw new TypeError(
          'Cannot clone: unknown type of value (value: '.concat(t, ')')
        );
      }
      function zn(t, n) {
        var e, r, u;
        if (Array.isArray(t)) {
          if (!Array.isArray(n)) return !1;
          if (t.length !== n.length) return !1;
          for (r = 0, u = t.length; r < u; r++) if (!zn(t[r], n[r])) return !1;
          return !0;
        }
        if ('function' === typeof t) return t === n;
        if (t instanceof Object) {
          if (Array.isArray(n) || !(n instanceof Object)) return !1;
          for (e in t) if (!(e in n) || !zn(t[e], n[e])) return !1;
          for (e in n) if (!(e in t)) return !1;
          return !0;
        }
        return t === n;
      }
      function In(t, n) {
        return t && Object.hasOwnProperty.call(t, n);
      }
      function jn(t, n, e, r) {
        function u(r) {
          var u = (function (t, n) {
            for (var e = {}, r = 0; r < n.length; r++) {
              var u = n[r],
                i = t[u];
              void 0 !== i && (e[u] = i);
            }
            return e;
          })(r, n.map(kn));
          return (
            (function (t, n, e) {
              var r = n
                .filter(
                  (t) =>
                    !(function (t) {
                      return t && '?' === t[0];
                    })(t)
                )
                .every((t) => void 0 !== e[t]);
              if (!r) {
                var u = n.filter((t) => void 0 === e[t]);
                throw new Error(
                  'Cannot create function "'.concat(t, '", ') +
                    'some dependencies are missing: '.concat(
                      u.map((t) => '"'.concat(t, '"')).join(', '),
                      '.'
                    )
                );
              }
            })(t, n, r),
            e(u)
          );
        }
        return (
          (u.isFactory = !0),
          (u.fn = t),
          (u.dependencies = n.slice().sort()),
          r && (u.meta = r),
          u
        );
      }
      function kn(t) {
        return t && '?' === t[0] ? t.slice(1) : t;
      }
      var Pn = jn(
          'BigNumber',
          ['?on', 'config'],
          (t) => {
            var { on: n, config: e } = t,
              r = Vt.clone({ precision: e.precision, modulo: Vt.EUCLID });
            return (
              (r.prototype = Object.create(r.prototype)),
              (r.prototype.type = 'BigNumber'),
              (r.prototype.isBigNumber = !0),
              (r.prototype.toJSON = function () {
                return { mathjs: 'BigNumber', value: this.toString() };
              }),
              (r.fromJSON = function (t) {
                return new r(t.value);
              }),
              n &&
                n('config', function (t, n) {
                  t.precision !== n.precision &&
                    r.config({ precision: t.precision });
                }),
              r
            );
          },
          { isClass: !0 }
        ),
        qn = e(74497);
      function Rn(t) {
        return 'boolean' === typeof t || (!!isFinite(t) && t === Math.round(t));
      }
      var Un =
          Math.sign ||
          function (t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
          },
        Zn =
          Math.log2 ||
          function (t) {
            return Math.log(t) / Math.LN2;
          },
        Ln =
          Math.log10 ||
          function (t) {
            return Math.log(t) / Math.LN10;
          },
        $n =
          (Math.log1p,
          Math.cbrt ||
            function (t) {
              if (0 === t) return t;
              var n,
                e = t < 0;
              return (
                e && (t = -t),
                (n = isFinite(t)
                  ? (t / ((n = Math.exp(Math.log(t) / 3)) * n) + 2 * n) / 3
                  : t),
                e ? -n : n
              );
            }),
        Vn =
          Math.expm1 ||
          function (t) {
            return t >= 2e-4 || t <= -2e-4
              ? Math.exp(t) - 1
              : t + (t * t) / 2 + (t * t * t) / 6;
          };
      function Hn(t, n, e) {
        var r = { 2: '0b', 8: '0o', 16: '0x' }[n],
          u = '';
        if (e) {
          if (e < 1) throw new Error('size must be in greater than 0');
          if (!Rn(e)) throw new Error('size must be an integer');
          if (t > 2 ** (e - 1) - 1 || t < -(2 ** (e - 1)))
            throw new Error(
              'Value must be in range [-2^'
                .concat(e - 1, ', 2^')
                .concat(e - 1, '-1]')
            );
          if (!Rn(t)) throw new Error('Value must be an integer');
          t < 0 && (t += 2 ** e), (u = 'i'.concat(e));
        }
        var i = '';
        return (
          t < 0 && ((t = -t), (i = '-')),
          ''.concat(i).concat(r).concat(t.toString(n)).concat(u)
        );
      }
      function Jn(t, n) {
        if ('function' === typeof n) return n(t);
        if (t === 1 / 0) return 'Infinity';
        if (t === -1 / 0) return '-Infinity';
        if (isNaN(t)) return 'NaN';
        var { notation: e, precision: r, wordSize: u } = Yn(n);
        switch (e) {
          case 'fixed':
            return Wn(t, r);
          case 'exponential':
            return Gn(t, r);
          case 'engineering':
            return (function (t, n) {
              if (isNaN(t) || !isFinite(t)) return String(t);
              var e = Xn(t),
                r = Kn(e, n),
                u = r.exponent,
                i = r.coefficients,
                o = u % 3 === 0 ? u : u < 0 ? u - 3 - (u % 3) : u - (u % 3);
              if (Ht(n))
                for (; n > i.length || u - o + 1 > i.length; ) i.push(0);
              else
                for (
                  var s = Math.abs(u - o) - (i.length - 1), a = 0;
                  a < s;
                  a++
                )
                  i.push(0);
              var c = Math.abs(u - o),
                f = 1;
              for (; c > 0; ) f++, c--;
              var h = i.slice(f).join(''),
                D = (Ht(n) && h.length) || h.match(/[1-9]/) ? '.' + h : '',
                l =
                  i.slice(0, f).join('') +
                  D +
                  'e' +
                  (u >= 0 ? '+' : '') +
                  o.toString();
              return r.sign + l;
            })(t, r);
          case 'bin':
            return Hn(t, 2, u);
          case 'oct':
            return Hn(t, 8, u);
          case 'hex':
            return Hn(t, 16, u);
          case 'auto':
            return (function (t, n, e) {
              if (isNaN(t) || !isFinite(t)) return String(t);
              var r = se(null === e || void 0 === e ? void 0 : e.lowerExp, -3),
                u = se(null === e || void 0 === e ? void 0 : e.upperExp, 5),
                i = Xn(t),
                o = n ? Kn(i, n) : i;
              if (o.exponent < r || o.exponent >= u) return Gn(t, n);
              var s = o.coefficients,
                a = o.exponent;
              s.length < n && (s = s.concat(Qn(n - s.length))),
                (s = s.concat(
                  Qn(a - s.length + 1 + (s.length < n ? n - s.length : 0))
                ));
              var c = a > 0 ? a : 0;
              return (
                c < (s = Qn(-a).concat(s)).length - 1 &&
                  s.splice(c + 1, 0, '.'),
                o.sign + s.join('')
              );
            })(t, r, n).replace(/((\.\d*?)(0+))($|e)/, function () {
              var t = arguments[2],
                n = arguments[4];
              return '.' !== t ? t + n : n;
            });
          default:
            throw new Error(
              'Unknown notation "' +
                e +
                '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.'
            );
        }
      }
      function Yn(t) {
        var n,
          e,
          r = 'auto';
        if (void 0 !== t)
          if (Ht(t)) n = t;
          else if (Jt(t)) n = t.toNumber();
          else {
            if (!Dn(t))
              throw new Error(
                'Unsupported type of options, number, BigNumber, or object expected'
              );
            void 0 !== t.precision &&
              (n = oe(t.precision, () => {
                throw new Error(
                  'Option "precision" must be a number or BigNumber'
                );
              })),
              void 0 !== t.wordSize &&
                (e = oe(t.wordSize, () => {
                  throw new Error(
                    'Option "wordSize" must be a number or BigNumber'
                  );
                })),
              t.notation && (r = t.notation);
          }
        return { notation: r, precision: n, wordSize: e };
      }
      function Xn(t) {
        var n = String(t)
          .toLowerCase()
          .match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
        if (!n) throw new SyntaxError('Invalid number ' + t);
        var e = n[1],
          r = n[2],
          u = parseFloat(n[4] || '0'),
          i = r.indexOf('.');
        u += -1 !== i ? i - 1 : r.length - 1;
        var o = r
          .replace('.', '')
          .replace(/^0*/, function (t) {
            return (u -= t.length), '';
          })
          .replace(/0*$/, '')
          .split('')
          .map(function (t) {
            return parseInt(t);
          });
        return (
          0 === o.length && (o.push(0), u++),
          { sign: e, coefficients: o, exponent: u }
        );
      }
      function Wn(t, n) {
        if (isNaN(t) || !isFinite(t)) return String(t);
        var e = Xn(t),
          r = 'number' === typeof n ? Kn(e, e.exponent + 1 + n) : e,
          u = r.coefficients,
          i = r.exponent + 1,
          o = i + (n || 0);
        return (
          u.length < o && (u = u.concat(Qn(o - u.length))),
          i < 0 && ((u = Qn(1 - i).concat(u)), (i = 1)),
          i < u.length && u.splice(i, 0, 0 === i ? '0.' : '.'),
          r.sign + u.join('')
        );
      }
      function Gn(t, n) {
        if (isNaN(t) || !isFinite(t)) return String(t);
        var e = Xn(t),
          r = n ? Kn(e, n) : e,
          u = r.coefficients,
          i = r.exponent;
        u.length < n && (u = u.concat(Qn(n - u.length)));
        var o = u.shift();
        return (
          r.sign +
          o +
          (u.length > 0 ? '.' + u.join('') : '') +
          'e' +
          (i >= 0 ? '+' : '') +
          i
        );
      }
      function Kn(t, n) {
        for (
          var e = {
              sign: t.sign,
              coefficients: t.coefficients,
              exponent: t.exponent
            },
            r = e.coefficients;
          n <= 0;

        )
          r.unshift(0), e.exponent++, n++;
        if (r.length > n && r.splice(n, r.length - n)[0] >= 5) {
          var u = n - 1;
          for (r[u]++; 10 === r[u]; )
            r.pop(), 0 === u && (r.unshift(0), e.exponent++, u++), r[--u]++;
        }
        return e;
      }
      function Qn(t) {
        for (var n = [], e = 0; e < t; e++) n.push(0);
        return n;
      }
      var te = Number.EPSILON || 2220446049250313e-31;
      function ne(t, n, e) {
        if (null === e || void 0 === e) return t === n;
        if (t === n) return !0;
        if (isNaN(t) || isNaN(n)) return !1;
        if (isFinite(t) && isFinite(n)) {
          var r = Math.abs(t - n);
          return r <= te || r <= Math.max(Math.abs(t), Math.abs(n)) * e;
        }
        return !1;
      }
      var ee =
          Math.acosh ||
          function (t) {
            return Math.log(Math.sqrt(t * t - 1) + t);
          },
        re =
          Math.asinh ||
          function (t) {
            return Math.log(Math.sqrt(t * t + 1) + t);
          },
        ue =
          Math.atanh ||
          function (t) {
            return Math.log((1 + t) / (1 - t)) / 2;
          },
        ie =
          (Math.cosh,
          Math.sinh ||
            function (t) {
              return (Math.exp(t) - Math.exp(-t)) / 2;
            });
      Math.tanh;
      function oe(t, n) {
        return Ht(t) ? t : Jt(t) ? t.toNumber() : void n();
      }
      function se(t, n) {
        return Ht(t) ? t : Jt(t) ? t.toNumber() : n;
      }
      var ae = jn(
        'Complex',
        [],
        () => (
          Object.defineProperty(qn, 'name', { value: 'Complex' }),
          (qn.prototype.constructor = qn),
          (qn.prototype.type = 'Complex'),
          (qn.prototype.isComplex = !0),
          (qn.prototype.toJSON = function () {
            return { mathjs: 'Complex', re: this.re, im: this.im };
          }),
          (qn.prototype.toPolar = function () {
            return { r: this.abs(), phi: this.arg() };
          }),
          (qn.prototype.format = function (t) {
            var n = this.im,
              e = this.re,
              r = Jn(this.re, t),
              u = Jn(this.im, t),
              i = Ht(t) ? t : t ? t.precision : null;
            if (null !== i) {
              var o = Math.pow(10, -i);
              Math.abs(e / n) < o && (e = 0), Math.abs(n / e) < o && (n = 0);
            }
            return 0 === n
              ? r
              : 0 === e
              ? 1 === n
                ? 'i'
                : -1 === n
                ? '-i'
                : u + 'i'
              : n < 0
              ? -1 === n
                ? r + ' - i'
                : r + ' - ' + u.substring(1) + 'i'
              : 1 === n
              ? r + ' + i'
              : r + ' + ' + u + 'i';
          }),
          (qn.fromPolar = function (t) {
            switch (arguments.length) {
              case 1:
                var n = arguments[0];
                if ('object' === typeof n) return qn(n);
                throw new TypeError(
                  'Input has to be an object with r and phi keys.'
                );
              case 2:
                var e = arguments[0],
                  r = arguments[1];
                if (Ht(e)) {
                  if (
                    (Wt(r) && r.hasBase('ANGLE') && (r = r.toNumber('rad')),
                    Ht(r))
                  )
                    return new qn({ r: e, phi: r });
                  throw new TypeError('Phi is not a number nor an angle unit.');
                }
                throw new TypeError('Radius r is not a number.');
              default:
                throw new SyntaxError(
                  'Wrong number of arguments in function fromPolar'
                );
            }
          }),
          (qn.prototype.valueOf = qn.prototype.toString),
          (qn.fromJSON = function (t) {
            return new qn(t);
          }),
          (qn.compare = function (t, n) {
            return t.re > n.re
              ? 1
              : t.re < n.re
              ? -1
              : t.im > n.im
              ? 1
              : t.im < n.im
              ? -1
              : 0;
          }),
          qn
        ),
        { isClass: !0 }
      );
      function ce(t) {
        var n = 0,
          e = 1,
          r = Object.create(null),
          u = Object.create(null),
          i = 0,
          o = function (t) {
            var o = u[t];
            if (o && (delete r[o], delete u[t], --n, e === o)) {
              if (!n) return (i = 0), void (e = 1);
              for (; !Object.prototype.hasOwnProperty.call(r, ++e); );
            }
          };
        return (
          (t = Math.abs(t)),
          {
            hit: function (s) {
              var a = u[s],
                c = ++i;
              if (((r[c] = s), (u[s] = c), !a)) {
                if (++n <= t) return;
                return (s = r[e]), o(s), s;
              }
              if ((delete r[a], e === a))
                for (; !Object.prototype.hasOwnProperty.call(r, ++e); );
            },
            delete: o,
            clear: function () {
              (n = i = 0),
                (e = 1),
                (r = Object.create(null)),
                (u = Object.create(null));
            }
          }
        );
      }
      function fe(t) {
        var { hasher: n, limit: e } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          (e = null == e ? Number.POSITIVE_INFINITY : e),
          (n = null == n ? JSON.stringify : n),
          function r() {
            'object' !== typeof r.cache &&
              (r.cache = {
                values: new Map(),
                lru: ce(e || Number.POSITIVE_INFINITY)
              });
            for (var u = [], i = 0; i < arguments.length; i++)
              u[i] = arguments[i];
            var o = n(u);
            if (r.cache.values.has(o))
              return r.cache.lru.hit(o), r.cache.values.get(o);
            var s = t.apply(t, u);
            return (
              r.cache.values.set(o, s),
              r.cache.values.delete(r.cache.lru.hit(o)),
              s
            );
          }
        );
      }
      function he(t) {
        return Object.keys(t.signatures || {}).reduce(function (t, n) {
          var e = (n.match(/,/g) || []).length + 1;
          return Math.max(t, e);
        }, -1);
      }
      fe(
        function (t) {
          return new t(1).exp();
        },
        { hasher: le }
      ),
        fe(
          function (t) {
            return new t(1).plus(new t(5).sqrt()).div(2);
          },
          { hasher: le }
        );
      var De = fe(
        function (t) {
          return t.acos(-1);
        },
        { hasher: le }
      );
      fe(
        function (t) {
          return De(t).times(2);
        },
        { hasher: le }
      );
      function le(t) {
        return t[0].precision;
      }
      Math.PI, Math.PI, Math.E;
      pe('fineStructure', 0.0072973525693),
        pe('weakMixingAngle', 0.2229),
        pe('efimovFactor', 22.7),
        pe('sackurTetrode', -1.16487052358);
      function pe(t, n) {
        return jn(t, ['config', 'BigNumber'], (t) => {
          var { config: e, BigNumber: r } = t;
          return 'BigNumber' === e.number ? new r(n) : n;
        });
      }
      var de = e(81937),
        me = jn(
          'Fraction',
          [],
          () => (
            Object.defineProperty(de, 'name', { value: 'Fraction' }),
            (de.prototype.constructor = de),
            (de.prototype.type = 'Fraction'),
            (de.prototype.isFraction = !0),
            (de.prototype.toJSON = function () {
              return { mathjs: 'Fraction', n: this.s * this.n, d: this.d };
            }),
            (de.fromJSON = function (t) {
              return new de(t);
            }),
            de
          ),
          { isClass: !0 }
        ),
        ge = jn(
          'Matrix',
          [],
          () => {
            function t() {
              if (!(this instanceof t))
                throw new SyntaxError(
                  'Constructor must be called with the new operator'
                );
            }
            return (
              (t.prototype.type = 'Matrix'),
              (t.prototype.isMatrix = !0),
              (t.prototype.storage = function () {
                throw new Error('Cannot invoke storage on a Matrix interface');
              }),
              (t.prototype.datatype = function () {
                throw new Error('Cannot invoke datatype on a Matrix interface');
              }),
              (t.prototype.create = function (t, n) {
                throw new Error('Cannot invoke create on a Matrix interface');
              }),
              (t.prototype.subset = function (t, n, e) {
                throw new Error('Cannot invoke subset on a Matrix interface');
              }),
              (t.prototype.get = function (t) {
                throw new Error('Cannot invoke get on a Matrix interface');
              }),
              (t.prototype.set = function (t, n, e) {
                throw new Error('Cannot invoke set on a Matrix interface');
              }),
              (t.prototype.resize = function (t, n) {
                throw new Error('Cannot invoke resize on a Matrix interface');
              }),
              (t.prototype.reshape = function (t, n) {
                throw new Error('Cannot invoke reshape on a Matrix interface');
              }),
              (t.prototype.clone = function () {
                throw new Error('Cannot invoke clone on a Matrix interface');
              }),
              (t.prototype.size = function () {
                throw new Error('Cannot invoke size on a Matrix interface');
              }),
              (t.prototype.map = function (t, n) {
                throw new Error('Cannot invoke map on a Matrix interface');
              }),
              (t.prototype.forEach = function (t) {
                throw new Error('Cannot invoke forEach on a Matrix interface');
              }),
              (t.prototype[Symbol.iterator] = function () {
                throw new Error('Cannot iterate a Matrix interface');
              }),
              (t.prototype.toArray = function () {
                throw new Error('Cannot invoke toArray on a Matrix interface');
              }),
              (t.prototype.valueOf = function () {
                throw new Error('Cannot invoke valueOf on a Matrix interface');
              }),
              (t.prototype.format = function (t) {
                throw new Error('Cannot invoke format on a Matrix interface');
              }),
              (t.prototype.toString = function () {
                throw new Error('Cannot invoke toString on a Matrix interface');
              }),
              t
            );
          },
          { isClass: !0 }
        );
      function Fe(t, n, e) {
        var r = new (0, t.constructor)(2),
          u = '';
        if (e) {
          if (e < 1) throw new Error('size must be in greater than 0');
          if (!Rn(e)) throw new Error('size must be an integer');
          if (
            t.greaterThan(r.pow(e - 1).sub(1)) ||
            t.lessThan(r.pow(e - 1).mul(-1))
          )
            throw new Error(
              'Value must be in range [-2^'
                .concat(e - 1, ', 2^')
                .concat(e - 1, '-1]')
            );
          if (!t.isInteger()) throw new Error('Value must be an integer');
          t.lessThan(0) && (t = t.add(r.pow(e))), (u = 'i'.concat(e));
        }
        switch (n) {
          case 2:
            return ''.concat(t.toBinary()).concat(u);
          case 8:
            return ''.concat(t.toOctal()).concat(u);
          case 16:
            return ''.concat(t.toHexadecimal()).concat(u);
          default:
            throw new Error('Base '.concat(n, ' not supported '));
        }
      }
      function we(t, n) {
        if ('function' === typeof n) return n(t);
        if (!t.isFinite())
          return t.isNaN() ? 'NaN' : t.gt(0) ? 'Infinity' : '-Infinity';
        var { notation: e, precision: r, wordSize: u } = Yn(n);
        switch (e) {
          case 'fixed':
            return (function (t, n) {
              return t.toFixed(n);
            })(t, r);
          case 'exponential':
            return ve(t, r);
          case 'engineering':
            return (function (t, n) {
              var e = t.e,
                r = e % 3 === 0 ? e : e < 0 ? e - 3 - (e % 3) : e - (e % 3),
                u = t.mul(Math.pow(10, -r)),
                i = u.toPrecision(n);
              if (-1 !== i.indexOf('e')) {
                i = new (0, t.constructor)(i).toFixed();
              }
              return i + 'e' + (e >= 0 ? '+' : '') + r.toString();
            })(t, r);
          case 'bin':
            return Fe(t, 2, u);
          case 'oct':
            return Fe(t, 8, u);
          case 'hex':
            return Fe(t, 16, u);
          case 'auto':
            var i = Ee(null === n || void 0 === n ? void 0 : n.lowerExp, -3),
              o = Ee(null === n || void 0 === n ? void 0 : n.upperExp, 5);
            if (t.isZero()) return '0';
            var s = t.toSignificantDigits(r),
              a = s.e;
            return (a >= i && a < o ? s.toFixed() : ve(t, r)).replace(
              /((\.\d*?)(0+))($|e)/,
              function () {
                var t = arguments[2],
                  n = arguments[4];
                return '.' !== t ? t + n : n;
              }
            );
          default:
            throw new Error(
              'Unknown notation "' +
                e +
                '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.'
            );
        }
      }
      function ve(t, n) {
        return void 0 !== n ? t.toExponential(n - 1) : t.toExponential();
      }
      function Ee(t, n) {
        return Ht(t) ? t : Jt(t) ? t.toNumber() : n;
      }
      function Ae(t, n) {
        var e = (function (t, n) {
          if ('number' === typeof t) return Jn(t, n);
          if (Jt(t)) return we(t, n);
          if (
            (function (t) {
              return (
                (t &&
                  'object' === typeof t &&
                  'number' === typeof t.s &&
                  'number' === typeof t.n &&
                  'number' === typeof t.d) ||
                !1
              );
            })(t)
          )
            return n && 'decimal' === n.fraction
              ? t.toString()
              : t.s * t.n + '/' + t.d;
          if (Array.isArray(t)) return xe(t, n);
          if (Gt(t)) return ye(t);
          if ('function' === typeof t)
            return t.syntax ? String(t.syntax) : 'function';
          if (t && 'object' === typeof t) {
            return 'function' === typeof t.format
              ? t.format(n)
              : t && t.toString(n) !== {}.toString()
              ? t.toString(n)
              : '{' +
                Object.keys(t)
                  .map((e) => ye(e) + ': ' + Ae(t[e], n))
                  .join(', ') +
                '}';
          }
          return String(t);
        })(t, n);
        return n &&
          'object' === typeof n &&
          'truncate' in n &&
          e.length > n.truncate
          ? e.substring(0, n.truncate - 3) + '...'
          : e;
      }
      function ye(t) {
        for (var n = String(t), e = '', r = 0; r < n.length; ) {
          var u = n.charAt(r);
          (e += u in Ce ? Ce[u] : u), r++;
        }
        return '"' + e + '"';
      }
      var Ce = {
        '"': '\\"',
        '\\': '\\\\',
        '\b': '\\b',
        '\f': '\\f',
        '\n': '\\n',
        '\r': '\\r',
        '\t': '\\t'
      };
      function xe(t, n) {
        if (Array.isArray(t)) {
          for (var e = '[', r = t.length, u = 0; u < r; u++)
            0 !== u && (e += ', '), (e += xe(t[u], n));
          return (e += ']');
        }
        return Ae(t, n);
      }
      function Be(t, n) {
        if (!Gt(t))
          throw new TypeError(
            'Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: ' +
              On(t) +
              ', index: 0)'
          );
        if (!Gt(n))
          throw new TypeError(
            'Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: ' +
              On(n) +
              ', index: 1)'
          );
        return t === n ? 0 : t > n ? 1 : -1;
      }
      function be(t, n, e) {
        if (!(this instanceof be))
          throw new SyntaxError(
            'Constructor must be called with the new operator'
          );
        (this.actual = t),
          (this.expected = n),
          (this.relation = e),
          (this.message =
            'Dimension mismatch (' +
            (Array.isArray(t) ? '[' + t.join(', ') + ']' : t) +
            ' ' +
            (this.relation || '!=') +
            ' ' +
            (Array.isArray(n) ? '[' + n.join(', ') + ']' : n) +
            ')'),
          (this.stack = new Error().stack);
      }
      function Ne(t, n, e) {
        if (!(this instanceof Ne))
          throw new SyntaxError(
            'Constructor must be called with the new operator'
          );
        (this.index = t),
          arguments.length < 3
            ? ((this.min = 0), (this.max = n))
            : ((this.min = n), (this.max = e)),
          void 0 !== this.min && this.index < this.min
            ? (this.message =
                'Index out of range (' + this.index + ' < ' + this.min + ')')
            : void 0 !== this.max && this.index >= this.max
            ? (this.message =
                'Index out of range (' +
                this.index +
                ' > ' +
                (this.max - 1) +
                ')')
            : (this.message = 'Index out of range (' + this.index + ')'),
          (this.stack = new Error().stack);
      }
      function Me(t) {
        for (var n = []; Array.isArray(t); ) n.push(t.length), (t = t[0]);
        return n;
      }
      function _e(t, n, e) {
        var r,
          u = t.length;
        if (u !== n[e]) throw new be(u, n[e]);
        if (e < n.length - 1) {
          var i = e + 1;
          for (r = 0; r < u; r++) {
            var o = t[r];
            if (!Array.isArray(o)) throw new be(n.length - 1, n.length, '<');
            _e(t[r], n, i);
          }
        } else
          for (r = 0; r < u; r++)
            if (Array.isArray(t[r])) throw new be(n.length + 1, n.length, '>');
      }
      function Se(t, n) {
        if (0 === n.length) {
          if (Array.isArray(t)) throw new be(t.length, 0);
        } else _e(t, n, 0);
      }
      function Oe(t, n) {
        if (void 0 !== t) {
          if (!Ht(t) || !Rn(t))
            throw new TypeError('Index must be an integer (value: ' + t + ')');
          if (t < 0 || ('number' === typeof n && t >= n)) throw new Ne(t, n);
        }
      }
      function Te(t, n, e) {
        if (!Array.isArray(n)) throw new TypeError('Array expected');
        if (0 === n.length)
          throw new Error('Resizing to scalar is not supported');
        return (
          n.forEach(function (t) {
            if (!Ht(t) || !Rn(t) || t < 0)
              throw new TypeError(
                'Invalid size, must contain positive integers (size: ' +
                  Ae(n) +
                  ')'
              );
          }),
          (Ht(t) || Jt(t)) && (t = [t]),
          ze(t, n, 0, void 0 !== e ? e : 0),
          t
        );
      }
      function ze(t, n, e, r) {
        var u,
          i,
          o = t.length,
          s = n[e],
          a = Math.min(o, s);
        if (((t.length = s), e < n.length - 1)) {
          var c = e + 1;
          for (u = 0; u < a; u++)
            (i = t[u]),
              Array.isArray(i) || ((i = [i]), (t[u] = i)),
              ze(i, n, c, r);
          for (u = a; u < s; u++) (i = []), (t[u] = i), ze(i, n, c, r);
        } else {
          for (u = 0; u < a; u++) for (; Array.isArray(t[u]); ) t[u] = t[u][0];
          for (u = a; u < s; u++) t[u] = r;
        }
      }
      function Ie(t, n) {
        var e = Re(t),
          r = e.length;
        if (!Array.isArray(t) || !Array.isArray(n))
          throw new TypeError('Array expected');
        if (0 === n.length) throw new be(0, r, '!=');
        var u = ke((n = je(n, r)));
        if (r !== u) throw new be(u, r, '!=');
        try {
          return (function (t, n) {
            for (var e, r = t, u = n.length - 1; u > 0; u--) {
              var i = n[u];
              e = [];
              for (var o = r.length / i, s = 0; s < o; s++)
                e.push(r.slice(s * i, (s + 1) * i));
              r = e;
            }
            return r;
          })(e, n);
        } catch (i) {
          if (i instanceof be) throw new be(u, r, '!=');
          throw i;
        }
      }
      function je(t, n) {
        var e = ke(t),
          r = t.slice(),
          u = t.indexOf(-1);
        if (t.indexOf(-1, u + 1) >= 0)
          throw new Error('More than one wildcard in sizes');
        if (u >= 0) {
          if (!(n % e === 0))
            throw new Error(
              'Could not replace wildcard, since ' +
                n +
                ' is no multiple of ' +
                -e
            );
          r[u] = -n / e;
        }
        return r;
      }
      function ke(t) {
        return t.reduce((t, n) => t * n, 1);
      }
      function Pe(t, n, e, r) {
        var u = r || Me(t);
        if (e) for (var i = 0; i < e; i++) (t = [t]), u.unshift(1);
        for (t = qe(t, n, 0); u.length < n; ) u.push(1);
        return t;
      }
      function qe(t, n, e) {
        var r, u;
        if (Array.isArray(t)) {
          var i = e + 1;
          for (r = 0, u = t.length; r < u; r++) t[r] = qe(t[r], n, i);
        } else for (var o = e; o < n; o++) t = [t];
        return t;
      }
      function Re(t) {
        if (!Array.isArray(t)) return t;
        var n = [];
        return (
          t.forEach(function t(e) {
            Array.isArray(e) ? e.forEach(t) : n.push(e);
          }),
          n
        );
      }
      function Ue(t, n) {
        for (var e, r = 0, u = 0; u < t.length; u++) {
          var i = t[u],
            o = Array.isArray(i);
          if ((0 === u && o && (r = i.length), o && i.length !== r)) return;
          var s = o ? Ue(i, n) : n(i);
          if (void 0 === e) e = s;
          else if (e !== s) return 'mixed';
        }
        return e;
      }
      function Ze(t, n, e, r) {
        if (r < e) {
          if (t.length !== n.length) throw new be(t.length, n.length);
          for (var u = [], i = 0; i < t.length; i++)
            u[i] = Ze(t[i], n[i], e, r + 1);
          return u;
        }
        return t.concat(n);
      }
      function Le() {
        var t = Array.prototype.slice.call(arguments, 0, -1),
          n = Array.prototype.slice.call(arguments, -1);
        if (1 === t.length) return t[0];
        if (t.length > 1)
          return t.slice(1).reduce(function (t, e) {
            return Ze(t, e, n, 0);
          }, t[0]);
        throw new Error('Wrong number of arguments in function concat');
      }
      function $e() {
        for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
          n[e] = arguments[e];
        for (
          var r = n.map((t) => t.length),
            u = Math.max(...r),
            i = new Array(u).fill(null),
            o = 0;
          o < n.length;
          o++
        )
          for (var s = n[o], a = r[o], c = 0; c < a; c++) {
            var f = u - a + c;
            s[c] > i[f] && (i[f] = s[c]);
          }
        for (var h = 0; h < n.length; h++) Ve(n[h], i);
        return i;
      }
      function Ve(t, n) {
        for (var e = n.length, r = t.length, u = 0; u < r; u++) {
          var i = e - r + u;
          if ((t[u] < n[i] && t[u] > 1) || t[u] > n[i])
            throw new Error(
              'shape missmatch: missmatch is found in arg with shape ('
                .concat(t, ') not possible to broadcast dimension ')
                .concat(r, ' with size ')
                .concat(t[u], ' to size ')
                .concat(n[i])
            );
        }
      }
      function He(t, n) {
        var e = Me(t);
        if (zn(e, n)) return t;
        Ve(e, n);
        var u,
          i,
          o,
          s = $e(e, n),
          a = s.length,
          c = [...Array(a - e.length).fill(1), ...e],
          f = (function (t) {
            return r([], t);
          })(t);
        e.length < a && (e = Me((f = Ie(f, c))));
        for (var h = 0; h < a; h++)
          e[h] < s[h] &&
            ((u = f),
            (i = s[h]),
            (o = h),
            (e = Me((f = Le(...Array(i).fill(u), o)))));
        return f;
      }
      (be.prototype = new RangeError()),
        (be.prototype.constructor = RangeError),
        (be.prototype.name = 'DimensionError'),
        (be.prototype.isDimensionError = !0),
        (Ne.prototype = new RangeError()),
        (Ne.prototype.constructor = RangeError),
        (Ne.prototype.name = 'IndexError'),
        (Ne.prototype.isIndexError = !0);
      var Je = jn(
          'DenseMatrix',
          ['Matrix'],
          (t) => {
            var { Matrix: n } = t;
            function e(t, n) {
              if (!(this instanceof e))
                throw new SyntaxError(
                  'Constructor must be called with the new operator'
                );
              if (n && !Gt(n)) throw new Error('Invalid datatype: ' + n);
              if (Qt(t))
                'DenseMatrix' === t.type
                  ? ((this._data = Tn(t._data)),
                    (this._size = Tn(t._size)),
                    (this._datatype = n || t._datatype))
                  : ((this._data = t.toArray()),
                    (this._size = t.size()),
                    (this._datatype = n || t._datatype));
              else if (t && Kt(t.data) && Kt(t.size))
                (this._data = t.data),
                  (this._size = t.size),
                  Se(this._data, this._size),
                  (this._datatype = n || t.datatype);
              else if (Kt(t))
                (this._data = s(t)),
                  (this._size = Me(this._data)),
                  Se(this._data, this._size),
                  (this._datatype = n);
              else {
                if (t)
                  throw new TypeError(
                    'Unsupported type of data (' + On(t) + ')'
                  );
                (this._data = []), (this._size = [0]), (this._datatype = n);
              }
            }
            function r(t, n, e, u) {
              var i = u === e - 1,
                o = n.dimension(u);
              return i
                ? o
                    .map(function (n) {
                      return Oe(n, t.length), t[n];
                    })
                    .valueOf()
                : o
                    .map(function (i) {
                      return Oe(i, t.length), r(t[i], n, e, u + 1);
                    })
                    .valueOf();
            }
            function u(t, n, e, r, i) {
              var o = i === r - 1,
                s = n.dimension(i);
              o
                ? s.forEach(function (n, r) {
                    Oe(n), (t[n] = e[r[0]]);
                  })
                : s.forEach(function (o, s) {
                    Oe(o), u(t[o], n, e[s[0]], r, i + 1);
                  });
            }
            function i(t, n, e) {
              if (0 === n.length) {
                for (var r = t._data; Kt(r); ) r = r[0];
                return r;
              }
              return (
                (t._size = n.slice(0)), (t._data = Te(t._data, t._size, e)), t
              );
            }
            function o(t, n, e) {
              for (var r = t._size.slice(0), u = !1; r.length < n.length; )
                r.push(0), (u = !0);
              for (var o = 0, s = n.length; o < s; o++)
                n[o] > r[o] && ((r[o] = n[o]), (u = !0));
              u && i(t, r, e);
            }
            function s(t) {
              return Qt(t) ? s(t.valueOf()) : Kt(t) ? t.map(s) : t;
            }
            return (
              (e.prototype = new n()),
              (e.prototype.createDenseMatrix = function (t, n) {
                return new e(t, n);
              }),
              Object.defineProperty(e, 'name', { value: 'DenseMatrix' }),
              (e.prototype.constructor = e),
              (e.prototype.type = 'DenseMatrix'),
              (e.prototype.isDenseMatrix = !0),
              (e.prototype.getDataType = function () {
                return Ue(this._data, On);
              }),
              (e.prototype.storage = function () {
                return 'dense';
              }),
              (e.prototype.datatype = function () {
                return this._datatype;
              }),
              (e.prototype.create = function (t, n) {
                return new e(t, n);
              }),
              (e.prototype.subset = function (t, n, i) {
                switch (arguments.length) {
                  case 1:
                    return (function (t, n) {
                      if (!un(n)) throw new TypeError('Invalid index');
                      var u = n.isScalar();
                      if (u) return t.get(n.min());
                      var i = n.size();
                      if (i.length !== t._size.length)
                        throw new be(i.length, t._size.length);
                      for (
                        var o = n.min(), s = n.max(), a = 0, c = t._size.length;
                        a < c;
                        a++
                      )
                        Oe(o[a], t._size[a]), Oe(s[a], t._size[a]);
                      return new e(r(t._data, n, i.length, 0), t._datatype);
                    })(this, t);
                  case 2:
                  case 3:
                    return (function (t, n, e, r) {
                      if (!n || !0 !== n.isIndex)
                        throw new TypeError('Invalid index');
                      var i,
                        s = n.size(),
                        a = n.isScalar();
                      Qt(e) ? ((i = e.size()), (e = e.valueOf())) : (i = Me(e));
                      if (a) {
                        if (0 !== i.length)
                          throw new TypeError('Scalar expected');
                        t.set(n.min(), e, r);
                      } else {
                        if (!zn(i, s))
                          try {
                            i = Me(
                              (e = 0 === i.length ? He([e], s) : He(e, s))
                            );
                          } catch (p) {}
                        if (s.length < t._size.length)
                          throw new be(s.length, t._size.length, '<');
                        if (i.length < s.length) {
                          for (var c = 0, f = 0; 1 === s[c] && 1 === i[c]; )
                            c++;
                          for (; 1 === s[c]; ) f++, c++;
                          e = Pe(e, s.length, f, i);
                        }
                        if (!zn(s, i)) throw new be(s, i, '>');
                        var h = n.max().map(function (t) {
                          return t + 1;
                        });
                        o(t, h, r);
                        var D = s.length,
                          l = 0;
                        u(t._data, n, e, D, l);
                      }
                      return t;
                    })(this, t, n, i);
                  default:
                    throw new SyntaxError('Wrong number of arguments');
                }
              }),
              (e.prototype.get = function (t) {
                if (!Kt(t)) throw new TypeError('Array expected');
                if (t.length !== this._size.length)
                  throw new be(t.length, this._size.length);
                for (var n = 0; n < t.length; n++) Oe(t[n], this._size[n]);
                for (var e = this._data, r = 0, u = t.length; r < u; r++) {
                  var i = t[r];
                  Oe(i, e.length), (e = e[i]);
                }
                return e;
              }),
              (e.prototype.set = function (t, n, e) {
                if (!Kt(t)) throw new TypeError('Array expected');
                if (t.length < this._size.length)
                  throw new be(t.length, this._size.length, '<');
                var r,
                  u,
                  i,
                  s = t.map(function (t) {
                    return t + 1;
                  });
                o(this, s, e);
                var a = this._data;
                for (r = 0, u = t.length - 1; r < u; r++)
                  Oe((i = t[r]), a.length), (a = a[i]);
                return Oe((i = t[t.length - 1]), a.length), (a[i] = n), this;
              }),
              (e.prototype.resize = function (t, n, e) {
                if (!tn(t)) throw new TypeError('Array or Matrix expected');
                var r = t
                  .valueOf()
                  .map((t) => (Array.isArray(t) && 1 === t.length ? t[0] : t));
                return i(e ? this.clone() : this, r, n);
              }),
              (e.prototype.reshape = function (t, n) {
                var e = n ? this.clone() : this;
                e._data = Ie(e._data, t);
                var r = e._size.reduce((t, n) => t * n);
                return (e._size = je(t, r)), e;
              }),
              (e.prototype.clone = function () {
                return new e({
                  data: Tn(this._data),
                  size: Tn(this._size),
                  datatype: this._datatype
                });
              }),
              (e.prototype.size = function () {
                return this._size.slice(0);
              }),
              (e.prototype.map = function (t) {
                var n = this,
                  r = he(t),
                  u = (function e(u, i) {
                    return Kt(u)
                      ? u.map(function (t, n) {
                          return e(t, i.concat(n));
                        })
                      : 1 === r
                      ? t(u)
                      : 2 === r
                      ? t(u, i)
                      : t(u, i, n);
                  })(this._data, []);
                return new e(u, void 0 !== this._datatype ? Ue(u, On) : void 0);
              }),
              (e.prototype.forEach = function (t) {
                var n = this;
                !(function e(r, u) {
                  Kt(r)
                    ? r.forEach(function (t, n) {
                        e(t, u.concat(n));
                      })
                    : t(r, u, n);
                })(this._data, []);
              }),
              (e.prototype[Symbol.iterator] = function* () {
                yield* (function* t(n, e) {
                  if (Kt(n))
                    for (var r = 0; r < n.length; r++)
                      yield* t(n[r], e.concat(r));
                  else yield { value: n, index: e };
                })(this._data, []);
              }),
              (e.prototype.rows = function () {
                var t = [];
                if (2 !== this.size().length)
                  throw new TypeError(
                    'Rows can only be returned for a 2D matrix.'
                  );
                var n = this._data;
                for (var r of n) t.push(new e([r], this._datatype));
                return t;
              }),
              (e.prototype.columns = function () {
                var t = this,
                  n = [],
                  r = this.size();
                if (2 !== r.length)
                  throw new TypeError(
                    'Rows can only be returned for a 2D matrix.'
                  );
                for (
                  var u = this._data,
                    i = function (r) {
                      var i = u.map((t) => [t[r]]);
                      n.push(new e(i, t._datatype));
                    },
                    o = 0;
                  o < r[1];
                  o++
                )
                  i(o);
                return n;
              }),
              (e.prototype.toArray = function () {
                return Tn(this._data);
              }),
              (e.prototype.valueOf = function () {
                return this._data;
              }),
              (e.prototype.format = function (t) {
                return Ae(this._data, t);
              }),
              (e.prototype.toString = function () {
                return Ae(this._data);
              }),
              (e.prototype.toJSON = function () {
                return {
                  mathjs: 'DenseMatrix',
                  data: this._data,
                  size: this._size,
                  datatype: this._datatype
                };
              }),
              (e.prototype.diagonal = function (t) {
                if (t) {
                  if ((Jt(t) && (t = t.toNumber()), !Ht(t) || !Rn(t)))
                    throw new TypeError(
                      'The parameter k must be an integer number'
                    );
                } else t = 0;
                for (
                  var n = t > 0 ? t : 0,
                    r = t < 0 ? -t : 0,
                    u = this._size[0],
                    i = this._size[1],
                    o = Math.min(u - r, i - n),
                    s = [],
                    a = 0;
                  a < o;
                  a++
                )
                  s[a] = this._data[a + r][a + n];
                return new e({ data: s, size: [o], datatype: this._datatype });
              }),
              (e.diagonal = function (t, n, r, u) {
                if (!Kt(t))
                  throw new TypeError('Array expected, size parameter');
                if (2 !== t.length)
                  throw new Error('Only two dimensions matrix are supported');
                if (
                  ((t = t.map(function (t) {
                    if (
                      (Jt(t) && (t = t.toNumber()), !Ht(t) || !Rn(t) || t < 1)
                    )
                      throw new Error('Size values must be positive integers');
                    return t;
                  })),
                  r)
                ) {
                  if ((Jt(r) && (r = r.toNumber()), !Ht(r) || !Rn(r)))
                    throw new TypeError(
                      'The parameter k must be an integer number'
                    );
                } else r = 0;
                var i,
                  o = r > 0 ? r : 0,
                  s = r < 0 ? -r : 0,
                  a = t[0],
                  c = t[1],
                  f = Math.min(a - s, c - o);
                if (Kt(n)) {
                  if (n.length !== f)
                    throw new Error('Invalid value array length');
                  i = function (t) {
                    return n[t];
                  };
                } else if (Qt(n)) {
                  var h = n.size();
                  if (1 !== h.length || h[0] !== f)
                    throw new Error('Invalid matrix length');
                  i = function (t) {
                    return n.get([t]);
                  };
                } else
                  i = function () {
                    return n;
                  };
                u || (u = Jt(i(0)) ? i(0).mul(0) : 0);
                var D = [];
                if (t.length > 0) {
                  D = Te(D, t, u);
                  for (var l = 0; l < f; l++) D[l + s][l + o] = i(l);
                }
                return new e({ data: D, size: [a, c] });
              }),
              (e.fromJSON = function (t) {
                return new e(t);
              }),
              (e.prototype.swapRows = function (t, n) {
                if (!Ht(t) || !Rn(t) || !Ht(n) || !Rn(n))
                  throw new Error('Row index must be positive integers');
                if (2 !== this._size.length)
                  throw new Error('Only two dimensional matrix is supported');
                return (
                  Oe(t, this._size[0]),
                  Oe(n, this._size[0]),
                  e._swapRows(t, n, this._data),
                  this
                );
              }),
              (e._swapRows = function (t, n, e) {
                var r = e[t];
                (e[t] = e[n]), (e[n] = r);
              }),
              e
            );
          },
          { isClass: !0 }
        ),
        Ye = e(45422);
      function Xe(t, n) {
        if (Qe(t) && Ge(t, n)) return t[n];
        if ('function' === typeof t[n] && Ke(t, n))
          throw new Error('Cannot access method "' + n + '" as a property');
        throw new Error('No access to property "' + n + '"');
      }
      function We(t, n, e) {
        if (Qe(t) && Ge(t, n)) return (t[n] = e), e;
        throw new Error('No access to property "' + n + '"');
      }
      function Ge(t, n) {
        return (
          !(!t || 'object' !== typeof t) &&
          (!!In(tr, n) ||
            (!(n in Object.prototype) && !(n in Function.prototype)))
        );
      }
      function Ke(t, n) {
        return (
          null !== t &&
          void 0 !== t &&
          'function' === typeof t[n] &&
          !(
            In(t, n) &&
            Object.getPrototypeOf &&
            n in Object.getPrototypeOf(t)
          ) &&
          (!!In(nr, n) ||
            (!(n in Object.prototype) && !(n in Function.prototype)))
        );
      }
      function Qe(t) {
        return 'object' === typeof t && t && t.constructor === Object;
      }
      var tr = { length: !0, name: !0 },
        nr = { toString: !0, valueOf: !0, toLocaleString: !0 };
      class er {
        constructor(t) {
          (this.wrappedObject = t), (this[Symbol.iterator] = this.entries);
        }
        keys() {
          return Object.keys(this.wrappedObject).values();
        }
        get(t) {
          return Xe(this.wrappedObject, t);
        }
        set(t, n) {
          return We(this.wrappedObject, t, n), this;
        }
        has(t) {
          return (n = this.wrappedObject), t in n;
          var n;
        }
        entries() {
          return rr(this.keys(), (t) => [t, this.get(t)]);
        }
        forEach(t) {
          for (var n of this.keys()) t(this.get(n), n, this);
        }
        delete(t) {
          delete this.wrappedObject[t];
        }
        clear() {
          for (var t of this.keys()) this.delete(t);
        }
        get size() {
          return Object.keys(this.wrappedObject).length;
        }
      }
      function rr(t, n) {
        return {
          next: () => {
            var e = t.next();
            return e.done ? e : { value: n(e.value), done: !1 };
          }
        };
      }
      function ur(t) {
        return (
          !!t &&
          (t instanceof Map ||
            t instanceof er ||
            ('function' === typeof t.set &&
              'function' === typeof t.get &&
              'function' === typeof t.keys &&
              'function' === typeof t.has))
        );
      }
      var ir = function () {
          return (ir = Ye.create), Ye;
        },
        or = jn(
          'typed',
          ['?BigNumber', '?Complex', '?DenseMatrix', '?Fraction'],
          function (t) {
            var { BigNumber: n, Complex: e, DenseMatrix: r, Fraction: u } = t,
              i = ir();
            return (
              i.clear(),
              i.addTypes([
                { name: 'number', test: Ht },
                { name: 'Complex', test: Yt },
                { name: 'BigNumber', test: Jt },
                { name: 'Fraction', test: Xt },
                { name: 'Unit', test: Wt },
                {
                  name: 'identifier',
                  test: (t) =>
                    Gt &&
                    /^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(
                      t
                    )
                },
                { name: 'string', test: Gt },
                { name: 'Chain', test: Sn },
                { name: 'Array', test: Kt },
                { name: 'Matrix', test: Qt },
                { name: 'DenseMatrix', test: nn },
                { name: 'SparseMatrix', test: en },
                { name: 'Range', test: rn },
                { name: 'Index', test: un },
                { name: 'boolean', test: on },
                { name: 'ResultSet', test: sn },
                { name: 'Help', test: an },
                { name: 'function', test: cn },
                { name: 'Date', test: fn },
                { name: 'RegExp', test: hn },
                { name: 'null', test: ln },
                { name: 'undefined', test: pn },
                { name: 'AccessorNode', test: dn },
                { name: 'ArrayNode', test: mn },
                { name: 'AssignmentNode', test: gn },
                { name: 'BlockNode', test: Fn },
                { name: 'ConditionalNode', test: wn },
                { name: 'ConstantNode', test: vn },
                { name: 'FunctionNode', test: An },
                { name: 'FunctionAssignmentNode', test: En },
                { name: 'IndexNode', test: yn },
                { name: 'Node', test: Cn },
                { name: 'ObjectNode', test: xn },
                { name: 'OperatorNode', test: Bn },
                { name: 'ParenthesisNode', test: bn },
                { name: 'RangeNode', test: Nn },
                { name: 'RelationalNode', test: Mn },
                { name: 'SymbolNode', test: _n },
                { name: 'Map', test: ur },
                { name: 'Object', test: Dn }
              ]),
              i.addConversions([
                {
                  from: 'number',
                  to: 'BigNumber',
                  convert: function (t) {
                    if (
                      (n || sr(t),
                      t
                        .toExponential()
                        .replace(/e.*$/, '')
                        .replace(/^0\.?0*|\./, '').length > 15)
                    )
                      throw new TypeError(
                        'Cannot implicitly convert a number with >15 significant digits to BigNumber (value: ' +
                          t +
                          '). Use function bignumber(x) to convert to BigNumber.'
                      );
                    return new n(t);
                  }
                },
                {
                  from: 'number',
                  to: 'Complex',
                  convert: function (t) {
                    return e || ar(t), new e(t, 0);
                  }
                },
                {
                  from: 'BigNumber',
                  to: 'Complex',
                  convert: function (t) {
                    return e || ar(t), new e(t.toNumber(), 0);
                  }
                },
                {
                  from: 'Fraction',
                  to: 'BigNumber',
                  convert: function (t) {
                    throw new TypeError(
                      'Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.'
                    );
                  }
                },
                {
                  from: 'Fraction',
                  to: 'Complex',
                  convert: function (t) {
                    return e || ar(t), new e(t.valueOf(), 0);
                  }
                },
                {
                  from: 'number',
                  to: 'Fraction',
                  convert: function (t) {
                    u || cr(t);
                    var n = new u(t);
                    if (n.valueOf() !== t)
                      throw new TypeError(
                        'Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: ' +
                          t +
                          '). Use function fraction(x) to convert to Fraction.'
                      );
                    return n;
                  }
                },
                {
                  from: 'string',
                  to: 'number',
                  convert: function (t) {
                    var n = Number(t);
                    if (isNaN(n))
                      throw new Error('Cannot convert "' + t + '" to a number');
                    return n;
                  }
                },
                {
                  from: 'string',
                  to: 'BigNumber',
                  convert: function (t) {
                    n || sr(t);
                    try {
                      return new n(t);
                    } catch (e) {
                      throw new Error(
                        'Cannot convert "' + t + '" to BigNumber'
                      );
                    }
                  }
                },
                {
                  from: 'string',
                  to: 'Fraction',
                  convert: function (t) {
                    u || cr(t);
                    try {
                      return new u(t);
                    } catch (n) {
                      throw new Error('Cannot convert "' + t + '" to Fraction');
                    }
                  }
                },
                {
                  from: 'string',
                  to: 'Complex',
                  convert: function (t) {
                    e || ar(t);
                    try {
                      return new e(t);
                    } catch (n) {
                      throw new Error('Cannot convert "' + t + '" to Complex');
                    }
                  }
                },
                {
                  from: 'boolean',
                  to: 'number',
                  convert: function (t) {
                    return +t;
                  }
                },
                {
                  from: 'boolean',
                  to: 'BigNumber',
                  convert: function (t) {
                    return n || sr(t), new n(+t);
                  }
                },
                {
                  from: 'boolean',
                  to: 'Fraction',
                  convert: function (t) {
                    return u || cr(t), new u(+t);
                  }
                },
                {
                  from: 'boolean',
                  to: 'string',
                  convert: function (t) {
                    return String(t);
                  }
                },
                {
                  from: 'Array',
                  to: 'Matrix',
                  convert: function (t) {
                    return (
                      r ||
                        (function () {
                          throw new Error(
                            "Cannot convert array into a Matrix: no class 'DenseMatrix' provided"
                          );
                        })(),
                      new r(t)
                    );
                  }
                },
                {
                  from: 'Matrix',
                  to: 'Array',
                  convert: function (t) {
                    return t.valueOf();
                  }
                }
              ]),
              (i.onMismatch = (t, n, e) => {
                var r = i.createError(t, n, e);
                if (
                  ['wrongType', 'mismatch'].includes(r.data.category) &&
                  1 === n.length &&
                  tn(n[0]) &&
                  e.some((t) => !t.params.includes(','))
                ) {
                  var u = new TypeError(
                    "Function '".concat(
                      t,
                      "' doesn't apply to matrices. To call it "
                    ) +
                      "elementwise on a matrix 'M', try 'map(M, ".concat(
                        t,
                        ")'."
                      )
                  );
                  throw ((u.data = r.data), u);
                }
                throw r;
              }),
              (i.onMismatch = (t, n, e) => {
                var r = i.createError(t, n, e);
                if (
                  ['wrongType', 'mismatch'].includes(r.data.category) &&
                  1 === n.length &&
                  tn(n[0]) &&
                  e.some((t) => !t.params.includes(','))
                ) {
                  var u = new TypeError(
                    "Function '".concat(
                      t,
                      "' doesn't apply to matrices. To call it "
                    ) +
                      "elementwise on a matrix 'M', try 'map(M, ".concat(
                        t,
                        ")'."
                      )
                  );
                  throw ((u.data = r.data), u);
                }
                throw r;
              }),
              i
            );
          }
        );
      function sr(t) {
        throw new Error(
          'Cannot convert value '.concat(
            t,
            " into a BigNumber: no class 'BigNumber' provided"
          )
        );
      }
      function ar(t) {
        throw new Error(
          'Cannot convert value '.concat(
            t,
            " into a Complex number: no class 'Complex' provided"
          )
        );
      }
      function cr(t) {
        throw new Error(
          'Cannot convert value '.concat(
            t,
            " into a Fraction, no class 'Fraction' provided."
          )
        );
      }
      function fr(t, n, e) {
        return t && 'function' === typeof t.map
          ? t.map(function (t) {
              return fr(t, n, e);
            })
          : n(t);
      }
      var hr = 'number',
        Dr = 'number, number';
      function lr(t) {
        return Math.abs(t);
      }
      function pr(t, n) {
        return t + n;
      }
      function dr(t, n) {
        return t - n;
      }
      function mr(t, n) {
        return t * n;
      }
      function gr(t) {
        return -t;
      }
      function Fr(t) {
        return t;
      }
      function wr(t) {
        return $n(t);
      }
      function vr(t) {
        return t * t * t;
      }
      function Er(t) {
        return Math.exp(t);
      }
      function Ar(t) {
        return Vn(t);
      }
      function yr(t, n) {
        if (!Rn(t) || !Rn(n))
          throw new Error('Parameters in function lcm must be integer numbers');
        if (0 === t || 0 === n) return 0;
        for (var e, r = t * n; 0 !== n; ) (n = t % (e = n)), (t = e);
        return Math.abs(r / t);
      }
      function Cr(t) {
        return Ln(t);
      }
      function xr(t) {
        return Zn(t);
      }
      function Br(t) {
        return Un(t);
      }
      function br(t) {
        return t * t;
      }
      function Nr(t, n) {
        var e,
          r,
          u,
          i = 0,
          o = 1,
          s = 1,
          a = 0;
        if (!Rn(t) || !Rn(n))
          throw new Error(
            'Parameters in function xgcd must be integer numbers'
          );
        for (; n; )
          (u = t - (r = Math.floor(t / n)) * n),
            (e = i),
            (i = o - r * i),
            (o = e),
            (e = s),
            (s = a - r * s),
            (a = e),
            (t = n),
            (n = u);
        return t < 0 ? [-t, -o, -a] : [t, t ? o : 0, a];
      }
      function Mr(t, n) {
        return (t * t < 1 && n === 1 / 0) || (t * t > 1 && n === -1 / 0)
          ? 0
          : Math.pow(t, n);
      }
      (lr.signature = hr),
        (pr.signature = Dr),
        (dr.signature = Dr),
        (mr.signature = Dr),
        (gr.signature = hr),
        (Fr.signature = hr),
        (wr.signature = hr),
        (vr.signature = hr),
        (Er.signature = hr),
        (Ar.signature = hr),
        (yr.signature = Dr),
        (Cr.signature = hr),
        (xr.signature = hr),
        (Br.signature = hr),
        (br.signature = hr),
        (Nr.signature = Dr),
        (Mr.signature = Dr);
      var _r = 'number';
      function Sr(t) {
        return ee(t);
      }
      function Or(t) {
        return Math.atan(1 / t);
      }
      function Tr(t) {
        return isFinite(t)
          ? (Math.log((t + 1) / t) + Math.log(t / (t - 1))) / 2
          : 0;
      }
      function zr(t) {
        return Math.asin(1 / t);
      }
      function Ir(t) {
        var n = 1 / t;
        return Math.log(n + Math.sqrt(n * n + 1));
      }
      function jr(t) {
        return Math.acos(1 / t);
      }
      function kr(t) {
        var n = 1 / t,
          e = Math.sqrt(n * n - 1);
        return Math.log(e + n);
      }
      function Pr(t) {
        return re(t);
      }
      function qr(t) {
        return ue(t);
      }
      function Rr(t) {
        return 1 / Math.tan(t);
      }
      function Ur(t) {
        var n = Math.exp(2 * t);
        return (n + 1) / (n - 1);
      }
      function Zr(t) {
        return 1 / Math.sin(t);
      }
      function Lr(t) {
        return 0 === t
          ? Number.POSITIVE_INFINITY
          : Math.abs(2 / (Math.exp(t) - Math.exp(-t))) * Un(t);
      }
      function $r(t) {
        return 1 / Math.cos(t);
      }
      function Vr(t) {
        return 2 / (Math.exp(t) + Math.exp(-t));
      }
      function Hr(t) {
        return ie(t);
      }
      (Sr.signature = _r),
        (Or.signature = _r),
        (Tr.signature = _r),
        (zr.signature = _r),
        (Ir.signature = _r),
        (jr.signature = _r),
        (kr.signature = _r),
        (Pr.signature = _r),
        (qr.signature = _r),
        (Rr.signature = _r),
        (Ur.signature = _r),
        (Zr.signature = _r),
        (Lr.signature = _r),
        ($r.signature = _r),
        (Vr.signature = _r),
        (Hr.signature = _r);
      var Jr = 'addScalar',
        Yr = jn(Jr, ['typed'], (t) => {
          var { typed: n } = t;
          return n(Jr, {
            'number, number': pr,
            'Complex, Complex': function (t, n) {
              return t.add(n);
            },
            'BigNumber, BigNumber': function (t, n) {
              return t.plus(n);
            },
            'Fraction, Fraction': function (t, n) {
              return t.add(n);
            },
            'Unit, Unit': n.referToSelf((t) => (e, r) => {
              if (null === e.value || void 0 === e.value)
                throw new Error(
                  'Parameter x contains a unit with undefined value'
                );
              if (null === r.value || void 0 === r.value)
                throw new Error(
                  'Parameter y contains a unit with undefined value'
                );
              if (!e.equalBase(r)) throw new Error('Units do not match');
              var u = e.clone();
              return (
                (u.value = n.find(t, [u.valueType(), r.valueType()])(
                  u.value,
                  r.value
                )),
                (u.fixPrefix = !1),
                u
              );
            })
          });
        });
      var Xr = 'number, number';
      function Wr(t, n) {
        if (!Rn(t) || !Rn(n))
          throw new Error('Integers expected in function bitAnd');
        return t & n;
      }
      function Gr(t) {
        if (!Rn(t)) throw new Error('Integer expected in function bitNot');
        return ~t;
      }
      function Kr(t, n) {
        if (!Rn(t) || !Rn(n))
          throw new Error('Integers expected in function bitOr');
        return t | n;
      }
      function Qr(t, n) {
        if (!Rn(t) || !Rn(n))
          throw new Error('Integers expected in function bitXor');
        return t ^ n;
      }
      function tu(t, n) {
        if (!Rn(t) || !Rn(n))
          throw new Error('Integers expected in function leftShift');
        return t << n;
      }
      function nu(t, n) {
        if (!Rn(t) || !Rn(n))
          throw new Error('Integers expected in function rightArithShift');
        return t >> n;
      }
      function eu(t, n) {
        if (!Rn(t) || !Rn(n))
          throw new Error('Integers expected in function rightLogShift');
        return t >>> n;
      }
      (Wr.signature = Xr),
        (Gr.signature = 'number'),
        (Kr.signature = Xr),
        (Qr.signature = Xr),
        (tu.signature = Xr),
        (nu.signature = Xr),
        (eu.signature = Xr);
      function ru(t, n) {
        if (n < t) return 1;
        if (n === t) return n;
        var e = (n + t) >> 1;
        return ru(t, e) * ru(e + 1, n);
      }
      function uu(t, n) {
        if (!Rn(t) || t < 0)
          throw new TypeError(
            'Positive integer value expected in function combinations'
          );
        if (!Rn(n) || n < 0)
          throw new TypeError(
            'Positive integer value expected in function combinations'
          );
        if (n > t) throw new TypeError('k must be less than or equal to n');
        for (
          var e = t - n,
            r = 1,
            u = 2,
            i = n < e ? n : e,
            o = n < e ? e + 1 : n + 1;
          o <= t;
          ++o
        )
          for (r *= o; u <= i && r % u === 0; ) (r /= u), ++u;
        return u <= i && (r /= ru(u, i)), r;
      }
      uu.signature = 'number, number';
      var iu = 'conj',
        ou = jn(iu, ['typed'], (t) => {
          var { typed: n } = t;
          return n(iu, {
            'number | BigNumber | Fraction': (t) => t,
            Complex: (t) => t.conjugate(),
            'Array | Matrix': n.referToSelf((t) => (n) => fr(n, t))
          });
        });
      function su(t, n, e) {
        if (null === e || void 0 === e) return t.eq(n);
        if (t.eq(n)) return !0;
        if (t.isNaN() || n.isNaN()) return !1;
        if (t.isFinite() && n.isFinite()) {
          var r = t.minus(n).abs();
          if (r.isZero()) return !0;
          var u = t.constructor.max(t.abs(), n.abs());
          return r.lte(u.times(e));
        }
        return !1;
      }
      var au = jn('compareUnits', ['typed'], (t) => {
          var { typed: n } = t;
          return {
            'Unit, Unit': n.referToSelf((t) => (e, r) => {
              if (!e.equalBase(r))
                throw new Error('Cannot compare units with different base');
              return n.find(t, [e.valueType(), r.valueType()])(
                e.value,
                r.value
              );
            })
          };
        }),
        cu = 'equalScalar',
        fu = jn(cu, ['typed', 'config'], (t) => {
          var { typed: n, config: e } = t,
            r = au({ typed: n });
          return n(
            cu,
            {
              'boolean, boolean': function (t, n) {
                return t === n;
              },
              'number, number': function (t, n) {
                return ne(t, n, e.epsilon);
              },
              'BigNumber, BigNumber': function (t, n) {
                return t.eq(n) || su(t, n, e.epsilon);
              },
              'Fraction, Fraction': function (t, n) {
                return t.equals(n);
              },
              'Complex, Complex': function (t, n) {
                return (function (t, n, e) {
                  return ne(t.re, n.re, e) && ne(t.im, n.im, e);
                })(t, n, e.epsilon);
              }
            },
            r
          );
        });
      jn(cu, ['typed', 'config'], (t) => {
        var { typed: n, config: e } = t;
        return n(cu, {
          'number, number': function (t, n) {
            return ne(t, n, e.epsilon);
          }
        });
      }),
        Math.pow(2, 53);
      jn('hex', ['typed', 'format'], (t) => {
        var { typed: n, format: e } = t;
        return n('hex', {
          'number | BigNumber': function (t) {
            return e(t, { notation: 'hex' });
          },
          'number | BigNumber, number | BigNumber': function (t, n) {
            return e(t, { notation: 'hex', wordSize: n });
          }
        });
      });
      var hu = 'number';
      function Du(t) {
        return t < 0;
      }
      function lu(t) {
        return t > 0;
      }
      function pu(t) {
        return 0 === t;
      }
      function du(t) {
        return Number.isNaN(t);
      }
      (Du.signature = hu),
        (lu.signature = hu),
        (pu.signature = hu),
        (du.signature = hu);
      function mu(t) {
        var n;
        if (Rn(t))
          return t <= 0
            ? isFinite(t)
              ? 1 / 0
              : NaN
            : t > 171
            ? 1 / 0
            : ru(1, t - 1);
        if (t < 0.5) return Math.PI / (Math.sin(Math.PI * t) * mu(1 - t));
        if (t >= 171.35) return 1 / 0;
        if (t > 85) {
          var e = t * t,
            r = e * t,
            u = r * t,
            i = u * t;
          return (
            Math.sqrt((2 * Math.PI) / t) *
            Math.pow(t / Math.E, t) *
            (1 +
              1 / (12 * t) +
              1 / (288 * e) -
              139 / (51840 * r) -
              571 / (2488320 * u) +
              163879 / (209018880 * i) +
              5246819 / (75246796800 * i * t))
          );
        }
        --t, (n = Fu[0]);
        for (var o = 1; o < Fu.length; ++o) n += Fu[o] / (t + o);
        var s = t + gu + 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(s, t + 0.5) * Math.exp(-s) * n;
      }
      mu.signature = 'number';
      var gu = 4.7421875,
        Fu = [
          0.9999999999999971, 57.15623566586292, -59.59796035547549,
          14.136097974741746, -0.4919138160976202, 3399464998481189e-20,
          4652362892704858e-20, -9837447530487956e-20, 0.0001580887032249125,
          -0.00021026444172410488, 0.00021743961811521265,
          -0.0001643181065367639, 8441822398385275e-20, -26190838401581408e-21,
          36899182659531625e-22
        ],
        wu = 0.9189385332046728,
        vu = [
          1.000000000190015, 76.18009172947146, -86.50532032941678,
          24.01409824083091, -1.231739572450155, 0.001208650973866179,
          -5395239384953e-18
        ];
      function Eu(t) {
        if (t < 0) return NaN;
        if (0 === t) return 1 / 0;
        if (!isFinite(t)) return t;
        if (t < 0.5)
          return Math.log(Math.PI / Math.sin(Math.PI * t)) - Eu(1 - t);
        for (var n = (t -= 1) + 5 + 0.5, e = vu[0], r = 6; r >= 1; r--)
          e += vu[r] / (t + r);
        return wu + (t + 0.5) * Math.log(n) - n + Math.log(e);
      }
      Eu.signature = 'number';
      var Au = jn('multiplyScalar', ['typed'], (t) => {
          var { typed: n } = t;
          return n('multiplyScalar', {
            'number, number': mr,
            'Complex, Complex': function (t, n) {
              return t.mul(n);
            },
            'BigNumber, BigNumber': function (t, n) {
              return t.times(n);
            },
            'Fraction, Fraction': function (t, n) {
              return t.mul(n);
            },
            'number | Fraction | BigNumber | Complex, Unit': (t, n) =>
              n.multiply(t),
            'Unit, number | Fraction | BigNumber | Complex | Unit': (t, n) =>
              t.multiply(n)
          });
        }),
        yu = 'number, number';
      function Cu(t) {
        return !t;
      }
      function xu(t, n) {
        return !(!t && !n);
      }
      function Bu(t, n) {
        return !!t !== !!n;
      }
      function bu(t, n) {
        return !(!t || !n);
      }
      (Cu.signature = 'number'),
        (xu.signature = yu),
        (Bu.signature = yu),
        (bu.signature = yu);
      jn('oct', ['typed', 'format'], (t) => {
        var { typed: n, format: e } = t;
        return n('oct', {
          'number | BigNumber': function (t) {
            return e(t, { notation: 'oct' });
          },
          'number | BigNumber, number | BigNumber': function (t, n) {
            return e(t, { notation: 'oct', wordSize: n });
          }
        });
      });
      var Nu = e(34334);
      Date.now();
      var Mu = jn(
        'SparseMatrix',
        ['typed', 'equalScalar', 'Matrix'],
        (t) => {
          var { typed: n, equalScalar: e, Matrix: r } = t;
          function u(t, n) {
            if (!(this instanceof u))
              throw new SyntaxError(
                'Constructor must be called with the new operator'
              );
            if (n && !Gt(n)) throw new Error('Invalid datatype: ' + n);
            if (Qt(t))
              !(function (t, n, e) {
                'SparseMatrix' === n.type
                  ? ((t._values = n._values ? Tn(n._values) : void 0),
                    (t._index = Tn(n._index)),
                    (t._ptr = Tn(n._ptr)),
                    (t._size = Tn(n._size)),
                    (t._datatype = e || n._datatype))
                  : i(t, n.valueOf(), e || n._datatype);
              })(this, t, n);
            else if (t && Kt(t.index) && Kt(t.ptr) && Kt(t.size))
              (this._values = t.values),
                (this._index = t.index),
                (this._ptr = t.ptr),
                (this._size = t.size),
                (this._datatype = n || t.datatype);
            else if (Kt(t)) i(this, t, n);
            else {
              if (t)
                throw new TypeError('Unsupported type of data (' + On(t) + ')');
              (this._values = []),
                (this._index = []),
                (this._ptr = [0]),
                (this._size = [0, 0]),
                (this._datatype = n);
            }
          }
          function i(t, r, u) {
            (t._values = []), (t._index = []), (t._ptr = []), (t._datatype = u);
            var i = r.length,
              o = 0,
              s = e,
              a = 0;
            if (
              (Gt(u) && ((s = n.find(e, [u, u]) || e), (a = n.convert(0, u))),
              i > 0)
            ) {
              var c = 0;
              do {
                t._ptr.push(t._index.length);
                for (var f = 0; f < i; f++) {
                  var h = r[f];
                  if (Kt(h)) {
                    if (
                      (0 === c && o < h.length && (o = h.length), c < h.length)
                    ) {
                      var D = h[c];
                      s(D, a) || (t._values.push(D), t._index.push(f));
                    }
                  } else
                    0 === c && o < 1 && (o = 1),
                      s(h, a) || (t._values.push(h), t._index.push(f));
                }
                c++;
              } while (c < o);
            }
            t._ptr.push(t._index.length), (t._size = [i, o]);
          }
          function o(t, n, e, r) {
            if (e - n === 0) return e;
            for (var u = n; u < e; u++) if (r[u] === t) return u;
            return n;
          }
          function s(t, n, e, r, u, i, o) {
            u.splice(t, 0, r), i.splice(t, 0, n);
            for (var s = e + 1; s < o.length; s++) o[s]++;
          }
          function a(t, r, u, i) {
            var o = i || 0,
              s = e,
              a = 0;
            Gt(t._datatype) &&
              ((s = n.find(e, [t._datatype, t._datatype]) || e),
              (a = n.convert(0, t._datatype)),
              (o = n.convert(o, t._datatype)));
            var c,
              f,
              h,
              D = !s(o, a),
              l = t._size[0],
              p = t._size[1];
            if (u > p) {
              for (f = p; f < u; f++)
                if (((t._ptr[f] = t._values.length), D))
                  for (c = 0; c < l; c++) t._values.push(o), t._index.push(c);
              t._ptr[u] = t._values.length;
            } else
              u < p &&
                (t._ptr.splice(u + 1, p - u),
                t._values.splice(t._ptr[u], t._values.length),
                t._index.splice(t._ptr[u], t._index.length));
            if (((p = u), r > l)) {
              if (D) {
                var d = 0;
                for (f = 0; f < p; f++) {
                  (t._ptr[f] = t._ptr[f] + d), (h = t._ptr[f + 1] + d);
                  var m = 0;
                  for (c = l; c < r; c++, m++)
                    t._values.splice(h + m, 0, o),
                      t._index.splice(h + m, 0, c),
                      d++;
                }
                t._ptr[p] = t._values.length;
              }
            } else if (r < l) {
              var g = 0;
              for (f = 0; f < p; f++) {
                t._ptr[f] = t._ptr[f] - g;
                var F = t._ptr[f],
                  w = t._ptr[f + 1] - g;
                for (h = F; h < w; h++)
                  (c = t._index[h]) > r - 1 &&
                    (t._values.splice(h, 1), t._index.splice(h, 1), g++);
              }
              t._ptr[f] = t._values.length;
            }
            return (t._size[0] = r), (t._size[1] = u), t;
          }
          function c(t, n, e, r, u) {
            var i,
              o,
              s = r[0],
              a = r[1],
              c = [];
            for (i = 0; i < s; i++)
              for (c[i] = [], o = 0; o < a; o++) c[i][o] = 0;
            for (o = 0; o < a; o++)
              for (var f = e[o], h = e[o + 1], D = f; D < h; D++)
                c[(i = n[D])][o] = t ? (u ? Tn(t[D]) : t[D]) : 1;
            return c;
          }
          return (
            (u.prototype = new r()),
            (u.prototype.createSparseMatrix = function (t, n) {
              return new u(t, n);
            }),
            Object.defineProperty(u, 'name', { value: 'SparseMatrix' }),
            (u.prototype.constructor = u),
            (u.prototype.type = 'SparseMatrix'),
            (u.prototype.isSparseMatrix = !0),
            (u.prototype.getDataType = function () {
              return Ue(this._values, On);
            }),
            (u.prototype.storage = function () {
              return 'sparse';
            }),
            (u.prototype.datatype = function () {
              return this._datatype;
            }),
            (u.prototype.create = function (t, n) {
              return new u(t, n);
            }),
            (u.prototype.density = function () {
              var t = this._size[0],
                n = this._size[1];
              return 0 !== t && 0 !== n ? this._index.length / (t * n) : 0;
            }),
            (u.prototype.subset = function (t, n, e) {
              if (!this._values)
                throw new Error(
                  'Cannot invoke subset on a Pattern only matrix'
                );
              switch (arguments.length) {
                case 1:
                  return (function (t, n) {
                    if (!un(n)) throw new TypeError('Invalid index');
                    if (n.isScalar()) return t.get(n.min());
                    var e,
                      r,
                      i,
                      o,
                      s = n.size();
                    if (s.length !== t._size.length)
                      throw new be(s.length, t._size.length);
                    var a = n.min(),
                      c = n.max();
                    for (e = 0, r = t._size.length; e < r; e++)
                      Oe(a[e], t._size[e]), Oe(c[e], t._size[e]);
                    var f = t._values,
                      h = t._index,
                      D = t._ptr,
                      l = n.dimension(0),
                      p = n.dimension(1),
                      d = [],
                      m = [];
                    l.forEach(function (t, n) {
                      (m[t] = n[0]), (d[t] = !0);
                    });
                    var g = f ? [] : void 0,
                      F = [],
                      w = [];
                    return (
                      p.forEach(function (t) {
                        for (
                          w.push(F.length), i = D[t], o = D[t + 1];
                          i < o;
                          i++
                        )
                          (e = h[i]),
                            !0 === d[e] && (F.push(m[e]), g && g.push(f[i]));
                      }),
                      w.push(F.length),
                      new u({
                        values: g,
                        index: F,
                        ptr: w,
                        size: s,
                        datatype: t._datatype
                      })
                    );
                  })(this, t);
                case 2:
                case 3:
                  return (function (t, n, e, r) {
                    if (!n || !0 !== n.isIndex)
                      throw new TypeError('Invalid index');
                    var u,
                      i = n.size(),
                      o = n.isScalar();
                    Qt(e) ? ((u = e.size()), (e = e.toArray())) : (u = Me(e));
                    if (o) {
                      if (0 !== u.length)
                        throw new TypeError('Scalar expected');
                      t.set(n.min(), e, r);
                    } else {
                      if (1 !== i.length && 2 !== i.length)
                        throw new be(i.length, t._size.length, '<');
                      if (u.length < i.length) {
                        for (var s = 0, a = 0; 1 === i[s] && 1 === u[s]; ) s++;
                        for (; 1 === i[s]; ) a++, s++;
                        e = Pe(e, i.length, a, u);
                      }
                      if (!zn(i, u)) throw new be(i, u, '>');
                      if (1 === i.length) {
                        n.dimension(0).forEach(function (n, u) {
                          Oe(n), t.set([n, 0], e[u[0]], r);
                        });
                      } else {
                        var c = n.dimension(0),
                          f = n.dimension(1);
                        c.forEach(function (n, u) {
                          Oe(n),
                            f.forEach(function (i, o) {
                              Oe(i), t.set([n, i], e[u[0]][o[0]], r);
                            });
                        });
                      }
                    }
                    return t;
                  })(this, t, n, e);
                default:
                  throw new SyntaxError('Wrong number of arguments');
              }
            }),
            (u.prototype.get = function (t) {
              if (!Kt(t)) throw new TypeError('Array expected');
              if (t.length !== this._size.length)
                throw new be(t.length, this._size.length);
              if (!this._values)
                throw new Error('Cannot invoke get on a Pattern only matrix');
              var n = t[0],
                e = t[1];
              Oe(n, this._size[0]), Oe(e, this._size[1]);
              var r = o(n, this._ptr[e], this._ptr[e + 1], this._index);
              return r < this._ptr[e + 1] && this._index[r] === n
                ? this._values[r]
                : 0;
            }),
            (u.prototype.set = function (t, r, u) {
              if (!Kt(t)) throw new TypeError('Array expected');
              if (t.length !== this._size.length)
                throw new be(t.length, this._size.length);
              if (!this._values)
                throw new Error('Cannot invoke set on a Pattern only matrix');
              var i = t[0],
                c = t[1],
                f = this._size[0],
                h = this._size[1],
                D = e,
                l = 0;
              Gt(this._datatype) &&
                ((D = n.find(e, [this._datatype, this._datatype]) || e),
                (l = n.convert(0, this._datatype))),
                (i > f - 1 || c > h - 1) &&
                  (a(this, Math.max(i + 1, f), Math.max(c + 1, h), u),
                  (f = this._size[0]),
                  (h = this._size[1])),
                Oe(i, f),
                Oe(c, h);
              var p = o(i, this._ptr[c], this._ptr[c + 1], this._index);
              return (
                p < this._ptr[c + 1] && this._index[p] === i
                  ? D(r, l)
                    ? (function (t, n, e, r, u) {
                        e.splice(t, 1), r.splice(t, 1);
                        for (var i = n + 1; i < u.length; i++) u[i]--;
                      })(p, c, this._values, this._index, this._ptr)
                    : (this._values[p] = r)
                  : D(r, l) ||
                    s(p, i, c, r, this._values, this._index, this._ptr),
                this
              );
            }),
            (u.prototype.resize = function (t, n, e) {
              if (!tn(t)) throw new TypeError('Array or Matrix expected');
              var r = t
                .valueOf()
                .map((t) => (Array.isArray(t) && 1 === t.length ? t[0] : t));
              if (2 !== r.length)
                throw new Error('Only two dimensions matrix are supported');
              return (
                r.forEach(function (t) {
                  if (!Ht(t) || !Rn(t) || t < 0)
                    throw new TypeError(
                      'Invalid size, must contain positive integers (size: ' +
                        Ae(r) +
                        ')'
                    );
                }),
                a(e ? this.clone() : this, r[0], r[1], n)
              );
            }),
            (u.prototype.reshape = function (t, n) {
              if (!Kt(t)) throw new TypeError('Array expected');
              if (2 !== t.length)
                throw new Error(
                  'Sparse matrices can only be reshaped in two dimensions'
                );
              t.forEach(function (n) {
                if (!Ht(n) || !Rn(n) || n <= -2 || 0 === n)
                  throw new TypeError(
                    'Invalid size, must contain positive integers or -1 (size: ' +
                      Ae(t) +
                      ')'
                  );
              });
              var e = this._size[0] * this._size[1];
              if (e !== (t = je(t, e))[0] * t[1])
                throw new Error(
                  'Reshaping sparse matrix will result in the wrong number of elements'
                );
              var r = n ? this.clone() : this;
              if (this._size[0] === t[0] && this._size[1] === t[1]) return r;
              for (var u = [], i = 0; i < r._ptr.length; i++)
                for (var a = 0; a < r._ptr[i + 1] - r._ptr[i]; a++) u.push(i);
              for (
                var c = r._values.slice(), f = r._index.slice(), h = 0;
                h < r._index.length;
                h++
              ) {
                var D = f[h],
                  l = u[h],
                  p = D * r._size[1] + l;
                (u[h] = p % t[1]), (f[h] = Math.floor(p / t[1]));
              }
              (r._values.length = 0),
                (r._index.length = 0),
                (r._ptr.length = t[1] + 1),
                (r._size = t.slice());
              for (var d = 0; d < r._ptr.length; d++) r._ptr[d] = 0;
              for (var m = 0; m < c.length; m++) {
                var g = f[m],
                  F = u[m],
                  w = c[m];
                s(
                  o(g, r._ptr[F], r._ptr[F + 1], r._index),
                  g,
                  F,
                  w,
                  r._values,
                  r._index,
                  r._ptr
                );
              }
              return r;
            }),
            (u.prototype.clone = function () {
              return new u({
                values: this._values ? Tn(this._values) : void 0,
                index: Tn(this._index),
                ptr: Tn(this._ptr),
                size: Tn(this._size),
                datatype: this._datatype
              });
            }),
            (u.prototype.size = function () {
              return this._size.slice(0);
            }),
            (u.prototype.map = function (t, r) {
              if (!this._values)
                throw new Error('Cannot invoke map on a Pattern only matrix');
              var i = this,
                o = this._size[0],
                s = this._size[1],
                a = he(t);
              return (function (t, r, i, o, s, a, c) {
                var f = [],
                  h = [],
                  D = [],
                  l = e,
                  p = 0;
                Gt(t._datatype) &&
                  ((l = n.find(e, [t._datatype, t._datatype]) || e),
                  (p = n.convert(0, t._datatype)));
                for (
                  var d = function (t, n, e) {
                      (t = a(t, n, e)), l(t, p) || (f.push(t), h.push(n));
                    },
                    m = o;
                  m <= s;
                  m++
                ) {
                  D.push(f.length);
                  var g = t._ptr[m],
                    F = t._ptr[m + 1];
                  if (c)
                    for (var w = g; w < F; w++) {
                      var v = t._index[w];
                      v >= r && v <= i && d(t._values[w], v - r, m - o);
                    }
                  else {
                    for (var E = {}, A = g; A < F; A++) {
                      E[t._index[A]] = t._values[A];
                    }
                    for (var y = r; y <= i; y++) {
                      d(y in E ? E[y] : 0, y - r, m - o);
                    }
                  }
                }
                return (
                  D.push(f.length),
                  new u({
                    values: f,
                    index: h,
                    ptr: D,
                    size: [i - r + 1, s - o + 1]
                  })
                );
              })(
                this,
                0,
                o - 1,
                0,
                s - 1,
                function (n, e, r) {
                  return 1 === a
                    ? t(n)
                    : 2 === a
                    ? t(n, [e, r])
                    : t(n, [e, r], i);
                },
                r
              );
            }),
            (u.prototype.forEach = function (t, n) {
              if (!this._values)
                throw new Error(
                  'Cannot invoke forEach on a Pattern only matrix'
                );
              for (
                var e = this._size[0], r = this._size[1], u = 0;
                u < r;
                u++
              ) {
                var i = this._ptr[u],
                  o = this._ptr[u + 1];
                if (n)
                  for (var s = i; s < o; s++) {
                    var a = this._index[s];
                    t(this._values[s], [a, u], this);
                  }
                else {
                  for (var c = {}, f = i; f < o; f++) {
                    c[this._index[f]] = this._values[f];
                  }
                  for (var h = 0; h < e; h++) {
                    t(h in c ? c[h] : 0, [h, u], this);
                  }
                }
              }
            }),
            (u.prototype[Symbol.iterator] = function* () {
              if (!this._values)
                throw new Error('Cannot iterate a Pattern only matrix');
              for (var t = this._size[1], n = 0; n < t; n++)
                for (
                  var e = this._ptr[n], r = this._ptr[n + 1], u = e;
                  u < r;
                  u++
                ) {
                  var i = this._index[u];
                  yield { value: this._values[u], index: [i, n] };
                }
            }),
            (u.prototype.toArray = function () {
              return c(this._values, this._index, this._ptr, this._size, !0);
            }),
            (u.prototype.valueOf = function () {
              return c(this._values, this._index, this._ptr, this._size, !1);
            }),
            (u.prototype.format = function (t) {
              for (
                var n = this._size[0],
                  e = this._size[1],
                  r = this.density(),
                  u =
                    'Sparse Matrix [' +
                    Ae(n, t) +
                    ' x ' +
                    Ae(e, t) +
                    '] density: ' +
                    Ae(r, t) +
                    '\n',
                  i = 0;
                i < e;
                i++
              )
                for (
                  var o = this._ptr[i], s = this._ptr[i + 1], a = o;
                  a < s;
                  a++
                ) {
                  u +=
                    '\n    (' +
                    Ae(this._index[a], t) +
                    ', ' +
                    Ae(i, t) +
                    ') ==> ' +
                    (this._values ? Ae(this._values[a], t) : 'X');
                }
              return u;
            }),
            (u.prototype.toString = function () {
              return Ae(this.toArray());
            }),
            (u.prototype.toJSON = function () {
              return {
                mathjs: 'SparseMatrix',
                values: this._values,
                index: this._index,
                ptr: this._ptr,
                size: this._size,
                datatype: this._datatype
              };
            }),
            (u.prototype.diagonal = function (t) {
              if (t) {
                if ((Jt(t) && (t = t.toNumber()), !Ht(t) || !Rn(t)))
                  throw new TypeError(
                    'The parameter k must be an integer number'
                  );
              } else t = 0;
              var n = t > 0 ? t : 0,
                e = t < 0 ? -t : 0,
                r = this._size[0],
                i = this._size[1],
                o = Math.min(r - e, i - n),
                s = [],
                a = [],
                c = [];
              c[0] = 0;
              for (var f = n; f < i && s.length < o; f++)
                for (
                  var h = this._ptr[f], D = this._ptr[f + 1], l = h;
                  l < D;
                  l++
                ) {
                  var p = this._index[l];
                  if (p === f - n + e) {
                    s.push(this._values[l]), (a[s.length - 1] = p - e);
                    break;
                  }
                }
              return (
                c.push(s.length),
                new u({ values: s, index: a, ptr: c, size: [o, 1] })
              );
            }),
            (u.fromJSON = function (t) {
              return new u(t);
            }),
            (u.diagonal = function (t, r, i, o, s) {
              if (!Kt(t)) throw new TypeError('Array expected, size parameter');
              if (2 !== t.length)
                throw new Error('Only two dimensions matrix are supported');
              if (
                ((t = t.map(function (t) {
                  if ((Jt(t) && (t = t.toNumber()), !Ht(t) || !Rn(t) || t < 1))
                    throw new Error('Size values must be positive integers');
                  return t;
                })),
                i)
              ) {
                if ((Jt(i) && (i = i.toNumber()), !Ht(i) || !Rn(i)))
                  throw new TypeError(
                    'The parameter k must be an integer number'
                  );
              } else i = 0;
              var a = e,
                c = 0;
              Gt(s) && ((a = n.find(e, [s, s]) || e), (c = n.convert(0, s)));
              var f,
                h = i > 0 ? i : 0,
                D = i < 0 ? -i : 0,
                l = t[0],
                p = t[1],
                d = Math.min(l - D, p - h);
              if (Kt(r)) {
                if (r.length !== d)
                  throw new Error('Invalid value array length');
                f = function (t) {
                  return r[t];
                };
              } else if (Qt(r)) {
                var m = r.size();
                if (1 !== m.length || m[0] !== d)
                  throw new Error('Invalid matrix length');
                f = function (t) {
                  return r.get([t]);
                };
              } else
                f = function () {
                  return r;
                };
              for (var g = [], F = [], w = [], v = 0; v < p; v++) {
                w.push(g.length);
                var E = v - h;
                if (E >= 0 && E < d) {
                  var A = f(E);
                  a(A, c) || (F.push(E + D), g.push(A));
                }
              }
              return (
                w.push(g.length),
                new u({ values: g, index: F, ptr: w, size: [l, p] })
              );
            }),
            (u.prototype.swapRows = function (t, n) {
              if (!Ht(t) || !Rn(t) || !Ht(n) || !Rn(n))
                throw new Error('Row index must be positive integers');
              if (2 !== this._size.length)
                throw new Error('Only two dimensional matrix is supported');
              return (
                Oe(t, this._size[0]),
                Oe(n, this._size[0]),
                u._swapRows(
                  t,
                  n,
                  this._size[1],
                  this._values,
                  this._index,
                  this._ptr
                ),
                this
              );
            }),
            (u._forEachRow = function (t, n, e, r, u) {
              for (var i = r[t], o = r[t + 1], s = i; s < o; s++) u(e[s], n[s]);
            }),
            (u._swapRows = function (t, n, e, r, u, i) {
              for (var s = 0; s < e; s++) {
                var a = i[s],
                  c = i[s + 1],
                  f = o(t, a, c, u),
                  h = o(n, a, c, u);
                if (f < c && h < c && u[f] === t && u[h] === n) {
                  if (r) {
                    var D = r[f];
                    (r[f] = r[h]), (r[h] = D);
                  }
                } else if (f < c && u[f] === t && (h >= c || u[h] !== n)) {
                  var l = r ? r[f] : void 0;
                  u.splice(h, 0, n),
                    r && r.splice(h, 0, l),
                    u.splice(h <= f ? f + 1 : f, 1),
                    r && r.splice(h <= f ? f + 1 : f, 1);
                } else if (h < c && u[h] === n && (f >= c || u[f] !== t)) {
                  var p = r ? r[h] : void 0;
                  u.splice(f, 0, t),
                    r && r.splice(f, 0, p),
                    u.splice(f <= h ? h + 1 : h, 1),
                    r && r.splice(f <= h ? h + 1 : h, 1);
                }
              }
            }),
            u
          );
        },
        { isClass: !0 }
      );
      jn('bin', ['typed', 'format'], (t) => {
        var { typed: n, format: e } = t;
        return n('bin', {
          'number | BigNumber': function (t) {
            return e(t, { notation: 'bin' });
          },
          'number | BigNumber, number | BigNumber': function (t, n) {
            return e(t, { notation: 'bin', wordSize: n });
          }
        });
      });
      var _u = 'matrix',
        Su = jn(_u, ['typed', 'Matrix', 'DenseMatrix', 'SparseMatrix'], (t) => {
          var { typed: n, Matrix: e, DenseMatrix: r, SparseMatrix: u } = t;
          return n(_u, {
            '': function () {
              return i([]);
            },
            string: function (t) {
              return i([], t);
            },
            'string, string': function (t, n) {
              return i([], t, n);
            },
            Array: function (t) {
              return i(t);
            },
            Matrix: function (t) {
              return i(t, t.storage());
            },
            'Array | Matrix, string': i,
            'Array | Matrix, string, string': i
          });
          function i(t, n, e) {
            if ('dense' === n || 'default' === n || void 0 === n)
              return new r(t, e);
            if ('sparse' === n) return new u(t, e);
            throw new TypeError(
              'Unknown matrix type ' + JSON.stringify(n) + '.'
            );
          }
        });
      function Ou() {
        throw new Error('No "matrix" implementation available');
      }
      var Tu = 'size',
        zu = jn(Tu, ['typed', 'config', '?matrix'], (t) => {
          var { typed: n, config: e, matrix: r } = t;
          return n(Tu, {
            Matrix: function (t) {
              return t.create(t.size());
            },
            Array: Me,
            string: function (t) {
              return 'Array' === e.matrix ? [t.length] : r([t.length]);
            },
            'number | Complex | BigNumber | Unit | boolean | null': function (
              t
            ) {
              return 'Array' === e.matrix ? [] : r ? r([]) : Ou();
            }
          });
        }),
        Iu = 'equal';
      jn(Iu, ['typed', 'equalScalar'], (t) => {
        var { typed: n, equalScalar: e } = t;
        return n(Iu, {
          'any, any': function (t, n) {
            return null === t
              ? null === n
              : null === n
              ? null === t
              : void 0 === t
              ? void 0 === n
              : void 0 === n
              ? void 0 === t
              : e(t, n);
          }
        });
      });
      function ju(t, n, e, r) {
        if (!(this instanceof ju))
          throw new SyntaxError(
            'Constructor must be called with the new operator'
          );
        (this.fn = t),
          (this.count = n),
          (this.min = e),
          (this.max = r),
          (this.message =
            'Wrong number of arguments in function ' +
            t +
            ' (' +
            n +
            ' provided, ' +
            e +
            (void 0 !== r && null !== r ? '-' + r : '') +
            ' expected)'),
          (this.stack = new Error().stack);
      }
      (ju.prototype = new Error()),
        (ju.prototype.constructor = Error),
        (ju.prototype.name = 'ArgumentsError'),
        (ju.prototype.isArgumentsError = !0);
      var ku = 'unequal';
      jn(ku, ['typed', 'equalScalar'], (t) => {
        var { typed: n, equalScalar: e } = t;
        return n(ku, {
          'any, any': function (t, n) {
            return null === t
              ? null !== n
              : null === n
              ? null !== t
              : void 0 === t
              ? void 0 !== n
              : void 0 === n
              ? void 0 !== t
              : !e(t, n);
          }
        });
      });
      Be.signature = 'any, any';
      var Pu = jn(
          'dot',
          ['typed', 'addScalar', 'multiplyScalar', 'conj', 'size'],
          (t) => {
            var {
              typed: n,
              addScalar: e,
              multiplyScalar: r,
              conj: u,
              size: i
            } = t;
            return n('dot', {
              'Array | DenseMatrix, Array | DenseMatrix': function (t, i) {
                var a = o(t, i),
                  c = Qt(t) ? t._data : t,
                  f = Qt(t) ? t._datatype || t.getDataType() : void 0,
                  h = Qt(i) ? i._data : i,
                  D = Qt(i) ? i._datatype || i.getDataType() : void 0,
                  l = 2 === s(t).length,
                  p = 2 === s(i).length,
                  d = e,
                  m = r;
                if (
                  f &&
                  D &&
                  f === D &&
                  'string' === typeof f &&
                  'mixed' !== f
                ) {
                  var g = f;
                  (d = n.find(e, [g, g])), (m = n.find(r, [g, g]));
                }
                if (!l && !p) {
                  for (var F = m(u(c[0]), h[0]), w = 1; w < a; w++)
                    F = d(F, m(u(c[w]), h[w]));
                  return F;
                }
                if (!l && p) {
                  for (var v = m(u(c[0]), h[0][0]), E = 1; E < a; E++)
                    v = d(v, m(u(c[E]), h[E][0]));
                  return v;
                }
                if (l && !p) {
                  for (var A = m(u(c[0][0]), h[0]), y = 1; y < a; y++)
                    A = d(A, m(u(c[y][0]), h[y]));
                  return A;
                }
                if (l && p) {
                  for (var C = m(u(c[0][0]), h[0][0]), x = 1; x < a; x++)
                    C = d(C, m(u(c[x][0]), h[x][0]));
                  return C;
                }
              },
              'SparseMatrix, SparseMatrix': function (t, n) {
                o(t, n);
                var u = t._index,
                  i = t._values,
                  s = n._index,
                  a = n._values,
                  c = 0,
                  f = e,
                  h = r,
                  D = 0,
                  l = 0;
                for (; D < u.length && l < s.length; ) {
                  var p = u[D],
                    d = s[l];
                  p < d
                    ? D++
                    : p > d
                    ? l++
                    : p === d && ((c = f(c, h(i[D], a[l]))), D++, l++);
                }
                return c;
              }
            });
            function o(t, n) {
              var e,
                r,
                u = s(t),
                i = s(n);
              if (1 === u.length) e = u[0];
              else {
                if (2 !== u.length || 1 !== u[1])
                  throw new RangeError(
                    'Expected a column vector, instead got a matrix of size (' +
                      u.join(', ') +
                      ')'
                  );
                e = u[0];
              }
              if (1 === i.length) r = i[0];
              else {
                if (2 !== i.length || 1 !== i[1])
                  throw new RangeError(
                    'Expected a column vector, instead got a matrix of size (' +
                      i.join(', ') +
                      ')'
                  );
                r = i[0];
              }
              if (e !== r)
                throw new RangeError(
                  'Vectors must have equal length (' + e + ' != ' + r + ')'
                );
              if (0 === e)
                throw new RangeError(
                  'Cannot calculate the dot product of empty vectors'
                );
              return e;
            }
            function s(t) {
              return Qt(t) ? t.size() : i(t);
            }
          }
        ),
        qu = 'number | BigNumber | Fraction | Matrix | Array';
      ''.concat(qu, ', ').concat(qu, ', ...').concat(qu);
      e(15939);
      var Ru = Pn({ config: s }),
        Uu = ae({}),
        Zu = me({}),
        Lu = ge({}),
        $u = Je({ Matrix: Lu }),
        Vu = or({ BigNumber: Ru, Complex: Uu, DenseMatrix: $u, Fraction: Zu }),
        Hu = Yr({ typed: Vu }),
        Ju = ou({ typed: Vu }),
        Yu = fu({ config: s, typed: Vu }),
        Xu = Au({ typed: Vu }),
        Wu = Mu({ Matrix: Lu, equalScalar: Yu, typed: Vu }),
        Gu = Su({ DenseMatrix: $u, Matrix: Lu, SparseMatrix: Wu, typed: Vu }),
        Ku = zu({ matrix: Gu, config: s, typed: Vu }),
        Qu = Pu({
          addScalar: Hu,
          conj: Ju,
          multiplyScalar: Xu,
          size: Ku,
          typed: Vu
        });
    }
  }
]);
//# sourceMappingURL=5796.3ebf195a.chunk.js.map
