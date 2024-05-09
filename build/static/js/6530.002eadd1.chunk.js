'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [6530],
  {
    29773: (e, t, s) => {
      s.d(t, { A: () => i });
      s(65043);
      var o = s(51318),
        a = s(34535),
        n = s(70579);
      const c = (0, a.Ay)(o.N_)((e) => {
          let { theme: t } = e;
          return {
            textDecoration: 'none',
            color: t.colors.info.dark,
            '&:active': { color: t.colors.primary.light },
            '&:visited': { color: t.colors.info.dark }
          };
        }),
        i = (e) => (0, n.jsx)(c, { ...e });
    },
    65099: (e, t, s) => {
      s.d(t, { BZ: () => n, XS: () => o, YP: () => c, tR: () => a });
      const o = {
          companyAvatar:
            'https://th.bing.com/th/id/OIP.EK1rvrib-MWNflZRM2XiDQHaH_?pid=ImgDet&w=183&h=197&c=7&dpr=1.3',
          companyCover:
            'https://png.pngtree.com/background/20210706/original/pngtree-business-background-white-collar-jobs-picture-image_216619.jpg'
        },
        a = {
          acceptTypes: ['image/jpeg', 'image/png', 'image/gif'],
          acceptSize: 1048576
        },
        n = { acceptTypes: ['application/pdf'], acceptSize: 2097152 },
        c = {
          acceptTypes: ['image/jpeg', 'image/png', 'image/gif'],
          acceptSize: 4194304
        };
    },
    82656: (e, t, s) => {
      s.d(t, { C: () => a, c: () => n });
      var o = s(22626);
      const a = new o.A('get-information-company-by-user'),
        n = new o.A('employee/follow-company');
    },
    56530: (e, t, s) => {
      s.d(t, { A: () => O });
      var o = s(65043),
        a = s(12110),
        n = s(79958),
        c = s(19464),
        i = s(60587),
        r = s(85865),
        l = s(26494),
        d = s(63657),
        p = s(22200),
        h = s(29773),
        u = s(65099),
        m = s(48267),
        y = s(25441),
        f = s(53404),
        v = s(36110),
        g = s(82907),
        x = s(82656);
      const A = () => {
        const e = (0, g.useQueryClient)(),
          { toast: t } = (0, v.n)(),
          { mutate: s, isLoading: o } = (0, g.useMutation)(
            (e) => {
              let [t] = e;
              return x.c.create({ employerId: t });
            },
            {
              onSuccess: (s) => {
                200 === s.status
                  ? (e.invalidateQueries(['get-FollowCompany']),
                    t.success({ massage: s.message }))
                  : t.error({ massage: s.message });
              },
              onError: (e) => {
                t.error({ massage: e.response.data.message });
              }
            }
          );
        return { onFollowCompanyById: s, isLoading: o };
      };
      var C = s(70579);
      function b(e) {
        const { sx: t, employerId: s } = e,
          { companyFollow: a } = (0, y.A)(),
          { onFollowCompanyById: n } = A(),
          { isEmployee: i } = (0, v.n)(),
          [r, l] = (0, o.useState)(!1);
        if (
          ((0, o.useEffect)(() => {
            (null === a || void 0 === a
              ? void 0
              : a.find((e) => e.employerId === s)) && l(!0);
          }, [a, s]),
          s && i)
        )
          return (0, C.jsx)(c.A, {
            onClick: () => (n([s]), void l(!r)),
            sx: { display: 'flex', alignItem: 'center', ...t },
            children: (0, C.jsx)(f.A, {
              sx: {
                display: 'flex',
                bgcolor: r ? '#e5e7eb' : 'primary',
                '&:hover': { bgcolor: r ? '#c0c2c5' : '' },
                width: 120
              },
              size: 'small',
              variant: 'contained',
              children: r ? '\u0110ang theo d\xf5i' : 'Theo d\xf5i'
            })
          });
      }
      var S = s(54367);
      const j = (0, m.A)((e) => ({
        coverImage: { width: '100%', height: '120px', objectFit: 'cover' },
        paper: {
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }));
      const O = function (e) {
        let { company: t, employerId: s } = e;
        const m = j(),
          [y, f] = (0, o.useState)(
            (null === t || void 0 === t ? void 0 : t.logo) || u.XS.companyAvatar
          );
        return (0, C.jsxs)(a.A, {
          sx: {
            border: 1,
            borderRadius: '3px',
            borderColor: '#98E4FF',
            height: '350px'
          },
          children: [
            (0, C.jsx)(n.A, {
              sx: {
                py: 1,
                color: '#aa720a',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                whiteSpace: 'normal'
              },
              title: (0, C.jsxs)(c.A, {
                children: [
                  (0, C.jsx)('img', {
                    src:
                      (null === t || void 0 === t ? void 0 : t.banner) ||
                      u.XS.companyCover,
                    alt: 'cover',
                    className: m.coverImage
                  }),
                  (0, C.jsxs)(c.A, {
                    display: 'flex',
                    gap: 2,
                    children: [
                      (0, C.jsx)(i.A, {
                        src: y,
                        sx: {
                          width: 100,
                          height: 100,
                          borderRadius: '5px',
                          objectFit: 'cover'
                        }
                      }),
                      (0, C.jsxs)(c.A, {
                        sx: { pt: 2, display: 'flex', flexDirection: 'column' },
                        children: [
                          (0, C.jsx)(r.A, {
                            component: h.A,
                            to: '/company/'
                              .concat(
                                (0, S.O)(
                                  null === t || void 0 === t
                                    ? void 0
                                    : t.companyName
                                ),
                                '?id='
                              )
                              .concat(btoa(s.toString())),
                            sx: {
                              ':hover': { color: '#ce8b0e' },
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 3,
                              lineHeight: 1.5,
                              height: 65
                            },
                            fontWeight: 700,
                            children:
                              null === t || void 0 === t
                                ? void 0
                                : t.companyName
                          }),
                          (0, C.jsx)(b, {
                            employerId: s,
                            sx: {
                              display: 'flex',
                              alignSelf: 'end',
                              justifySelf: 'self-end'
                            }
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            }),
            (0, C.jsx)(l.A, {
              sx: { px: 2, py: 1 },
              children: (0, C.jsxs)(c.A, {
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                children: [
                  (0, C.jsxs)(c.A, {
                    display: 'flex',
                    children: [
                      (0, C.jsx)(d.A, {
                        sx: { maxHeight: 20, color: 'grey.700' }
                      }),
                      (0, C.jsxs)(r.A, {
                        sx: {
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 1
                        },
                        children: [
                          'L\u0129nh v\u1ef1c: ',
                          null === t || void 0 === t ? void 0 : t.careerField
                        ]
                      })
                    ]
                  }),
                  (0, C.jsxs)(c.A, {
                    display: 'flex',
                    my: 1,
                    children: [
                      (0, C.jsx)(p.A, {
                        sx: { maxHeight: 18, color: 'grey.700' }
                      }),
                      (0, C.jsxs)(r.A, {
                        sx: {
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 2
                        },
                        children: [
                          '\u0110\u1ecba \u0111i\u1ec3m: ',
                          null === t || void 0 === t
                            ? void 0
                            : t.companyLocation
                        ]
                      })
                    ]
                  })
                ]
              })
            })
          ]
        });
      };
    },
    25441: (e, t, s) => {
      s.d(t, { A: () => c });
      var o = s(82907),
        a = s(82656),
        n = s(36110);
      const c = (e) => {
        var t;
        const { isEmployee: s } = (0, n.n)(),
          {
            data: c,
            isLoading: i,
            refetch: r
          } = (0, o.useQuery)(
            ['get-FollowCompany', null === e || void 0 === e ? void 0 : e.page],
            () => a.c.get({ params: e }),
            {
              keepPreviousData: !0,
              retry: 1,
              refetchOnWindowFocus: !1,
              enabled: s
            }
          );
        return {
          companyFollow:
            null === c || void 0 === c || null === (t = c.data) || void 0 === t
              ? void 0
              : t.followCompany,
          isLoading: i,
          refetch: r
        };
      };
    },
    54367: (e, t, s) => {
      function o(e) {
        const t = {
            '\xe0': 'a',
            '\xe1': 'a',
            '\u1ea3': 'a',
            '\xe3': 'a',
            '\u1ea1': 'a',
            '\u0103': 'a',
            '\u1eaf': 'a',
            '\u1eb1': 'a',
            '\u1eb3': 'a',
            '\u1eb5': 'a',
            '\u1eb7': 'a',
            '\xe2': 'a',
            '\u1ea5': 'a',
            '\u1ea7': 'a',
            '\u1ea9': 'a',
            '\u1eab': 'a',
            '\u1ead': 'a',
            '\u0111': 'd',
            '\xe8': 'e',
            '\xe9': 'e',
            '\u1ebb': 'e',
            '\u1ebd': 'e',
            '\u1eb9': 'e',
            '\xea': 'e',
            '\u1ebf': 'e',
            '\u1ec1': 'e',
            '\u1ec3': 'e',
            '\u1ec5': 'e',
            '\u1ec7': 'e',
            '\xec': 'i',
            '\xed': 'i',
            '\u1ec9': 'i',
            '\u0129': 'i',
            '\u1ecb': 'i',
            '\xf2': 'o',
            '\xf3': 'o',
            '\u1ecf': 'o',
            '\xf5': 'o',
            '\u1ecd': 'o',
            '\xf4': 'o',
            '\u1ed1': 'o',
            '\u1ed3': 'o',
            '\u1ed5': 'o',
            '\u1ed7': 'o',
            '\u1ed9': 'o',
            '\u01a1': 'o',
            '\u1edb': 'o',
            '\u1edd': 'o',
            '\u1edf': 'o',
            '\u1ee1': 'o',
            '\u1ee3': 'o',
            '\xf9': 'u',
            '\xfa': 'u',
            '\u1ee7': 'u',
            '\u0169': 'u',
            '\u1ee5': 'u',
            '\u01b0': 'u',
            '\u1ee9': 'u',
            '\u1eeb': 'u',
            '\u1eed': 'u',
            '\u1eef': 'u',
            '\u1ef1': 'u',
            '\u1ef3': 'y',
            '\xfd': 'y',
            '\u1ef7': 'y',
            '\u1ef9': 'y',
            '\u1ef5': 'y',
            '\xc0': 'A',
            '\xc1': 'A',
            '\u1ea2': 'A',
            '\xc3': 'A',
            '\u1ea0': 'A',
            '\u0102': 'A',
            '\u1eae': 'A',
            '\u1eb0': 'A',
            '\u1eb2': 'A',
            '\u1eb4': 'A',
            '\u1eb6': 'A',
            '\xc2': 'A',
            '\u1ea4': 'A',
            '\u1ea6': 'A',
            '\u1ea8': 'A',
            '\u1eaa': 'A',
            '\u1eac': 'A',
            '\u0110': 'D',
            '\xc8': 'E',
            '\xc9': 'E',
            '\u1eba': 'E',
            '\u1ebc': 'E',
            '\u1eb8': 'E',
            '\xca': 'E',
            '\u1ebe': 'E',
            '\u1ec0': 'E',
            '\u1ec2': 'E',
            '\u1ec4': 'E',
            '\u1ec6': 'E',
            '\xcc': 'I',
            '\xcd': 'I',
            '\u1ec8': 'I',
            '\u0128': 'I',
            '\u1eca': 'I',
            '\xd2': 'O',
            '\xd3': 'O',
            '\u1ece': 'O',
            '\xd5': 'O',
            '\u1ecc': 'O',
            '\xd4': 'O',
            '\u1ed0': 'O',
            '\u1ed2': 'O',
            '\u1ed4': 'O',
            '\u1ed6': 'O',
            '\u1ed8': 'O',
            '\u01a0': 'O',
            '\u1eda': 'O',
            '\u1edc': 'O',
            '\u1ede': 'O',
            '\u1ee0': 'O',
            '\u1ee2': 'O',
            '\xd9': 'U',
            '\xda': 'U',
            '\u1ee6': 'U',
            '\u0168': 'U',
            '\u1ee4': 'U',
            '\u01af': 'U',
            '\u1ee8': 'U',
            '\u1eea': 'U',
            '\u1eec': 'U',
            '\u1eee': 'U',
            '\u1ef0': 'U',
            '\u1ef2': 'Y',
            '\xdd': 'Y',
            '\u1ef6': 'Y',
            '\u1ef8': 'Y',
            '\u1ef4': 'Y'
          },
          s = [
            '!',
            '@',
            '#',
            '$',
            '%',
            '^',
            '&',
            '*',
            '_',
            '-',
            '+',
            '=',
            '{',
            '}',
            '[',
            ']',
            '|',
            '\\',
            ':',
            ';',
            '"',
            "'",
            '<',
            '>',
            ',',
            '.',
            '/',
            '?',
            ' '
          ];
        let o = '';
        for (
          var a = 0;
          a < (null === e || void 0 === e ? void 0 : e.length);
          a++
        )
          t[e[a]]
            ? (o += t[e[a]])
            : s.includes(e[a])
            ? o.endsWith('-') || (o += '-')
            : (o += e[a]);
        return o;
      }
      s.d(t, { O: () => o });
    },
    22200: (e, t, s) => {
      var o = s(24994);
      t.A = void 0;
      var a = o(s(40039)),
        n = s(70579),
        c = (0, a.default)(
          [
            (0, n.jsx)(
              'path',
              {
                d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z'
              },
              '0'
            ),
            (0, n.jsx)('circle', { cx: '12', cy: '9', r: '2.5' }, '1')
          ],
          'LocationOnOutlined'
        );
      t.A = c;
    },
    63657: (e, t, s) => {
      var o = s(24994);
      t.A = void 0;
      var a = o(s(40039)),
        n = s(70579),
        c = (0, a.default)(
          [
            (0, n.jsx)(
              'path',
              {
                d: 'M18 11c1.49 0 2.87.47 4 1.26V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h7.68c-.43-.91-.68-1.92-.68-3 0-3.87 3.13-7 7-7zm-8-7h4v2h-4V4z'
              },
              '0'
            ),
            (0, n.jsx)(
              'path',
              {
                d: 'M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85-.7.71z'
              },
              '1'
            )
          ],
          'WorkHistory'
        );
      t.A = c;
    },
    48267: (e, t, s) => {
      s.d(t, { A: () => x });
      var o = s(98587),
        a = s(58168),
        n = s(65043),
        c = s(98176);
      function i() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const { baseClasses: t, newClasses: s, Component: o } = e;
        if (!s) return t;
        const n = (0, a.A)({}, t);
        return (
          Object.keys(s).forEach((e) => {
            s[e] && (n[e] = ''.concat(t[e], ' ').concat(s[e]));
          }),
          n
        );
      }
      const r = {
        set: (e, t, s, o) => {
          let a = e.get(t);
          a || ((a = new Map()), e.set(t, a)), a.set(s, o);
        },
        get: (e, t, s) => {
          const o = e.get(t);
          return o ? o.get(s) : void 0;
        },
        delete: (e, t, s) => {
          e.get(t).delete(s);
        }
      };
      var l = s(18959),
        d = s(93135);
      let p = -1e9;
      var h = s(43216),
        u = s(90410);
      const m = ['variant'];
      function y(e) {
        return 0 === e.length;
      }
      function f(e) {
        const t = 'function' === typeof e;
        return {
          create: (s, n) => {
            let c;
            try {
              c = t ? e(s) : e;
            } catch (d) {
              throw d;
            }
            if (
              !n ||
              !s.components ||
              !s.components[n] ||
              (!s.components[n].styleOverrides && !s.components[n].variants)
            )
              return c;
            const i = s.components[n].styleOverrides || {},
              r = s.components[n].variants || [],
              l = (0, a.A)({}, c);
            return (
              Object.keys(i).forEach((e) => {
                l[e] = (0, h.A)(l[e] || {}, i[e]);
              }),
              r.forEach((e) => {
                const t = (function (e) {
                  const { variant: t } = e,
                    s = (0, o.A)(e, m);
                  let a = t || '';
                  return (
                    Object.keys(s)
                      .sort()
                      .forEach((t) => {
                        a +=
                          'color' === t
                            ? y(a)
                              ? e[t]
                              : (0, u.A)(e[t])
                            : ''
                                .concat(y(a) ? t : (0, u.A)(t))
                                .concat((0, u.A)(e[t].toString()));
                      }),
                    a
                  );
                })(e.props);
                l[t] = (0, h.A)(l[t] || {}, e.style);
              }),
              l
            );
          },
          options: {}
        };
      }
      const v = {},
        g = ['name', 'classNamePrefix', 'Component', 'defaultTheme'];
      function x(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
            name: s,
            classNamePrefix: h,
            Component: u,
            defaultTheme: m = v
          } = t,
          y = (0, o.A)(t, g),
          x = f(e),
          A = s || h || 'makeStyles';
        x.options = {
          index: ((p += 1), p),
          name: s,
          meta: A,
          classNamePrefix: A
        };
        return function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = (0, l.A)() || m,
            o = (0, a.A)({}, n.useContext(d.si), y),
            p = n.useRef(),
            h = n.useRef();
          !(function (e, t) {
            const s = n.useRef([]);
            let o;
            const a = n.useMemo(() => ({}), t);
            s.current !== a && ((s.current = a), (o = e())),
              n.useEffect(
                () => () => {
                  o && o();
                },
                [a]
              );
          })(() => {
            const n = {
              name: s,
              state: {},
              stylesCreator: x,
              stylesOptions: o,
              theme: t
            };
            return (
              (function (e, t) {
                let {
                  state: s,
                  theme: o,
                  stylesOptions: n,
                  stylesCreator: l,
                  name: d
                } = e;
                if (n.disableGeneration) return;
                let p = r.get(n.sheetsManager, l, o);
                p ||
                  ((p = { refs: 0, staticSheet: null, dynamicStyles: null }),
                  r.set(n.sheetsManager, l, o, p));
                const h = (0, a.A)({}, l.options, n, {
                  theme: o,
                  flip:
                    'boolean' === typeof n.flip ? n.flip : 'rtl' === o.direction
                });
                h.generateId = h.serverGenerateClassName || h.generateClassName;
                const u = n.sheetsRegistry;
                if (0 === p.refs) {
                  let e;
                  n.sheetsCache && (e = r.get(n.sheetsCache, l, o));
                  const t = l.create(o, d);
                  e ||
                    ((e = n.jss.createStyleSheet(t, (0, a.A)({ link: !1 }, h))),
                    e.attach(),
                    n.sheetsCache && r.set(n.sheetsCache, l, o, e)),
                    u && u.add(e),
                    (p.staticSheet = e),
                    (p.dynamicStyles = (0, c.ih)(t));
                }
                if (p.dynamicStyles) {
                  const e = n.jss.createStyleSheet(
                    p.dynamicStyles,
                    (0, a.A)({ link: !0 }, h)
                  );
                  e.update(t),
                    e.attach(),
                    (s.dynamicSheet = e),
                    (s.classes = i({
                      baseClasses: p.staticSheet.classes,
                      newClasses: e.classes
                    })),
                    u && u.add(e);
                } else s.classes = p.staticSheet.classes;
                p.refs += 1;
              })(n, e),
              (h.current = !1),
              (p.current = n),
              () => {
                !(function (e) {
                  let {
                    state: t,
                    theme: s,
                    stylesOptions: o,
                    stylesCreator: a
                  } = e;
                  if (o.disableGeneration) return;
                  const n = r.get(o.sheetsManager, a, s);
                  n.refs -= 1;
                  const c = o.sheetsRegistry;
                  0 === n.refs &&
                    (r.delete(o.sheetsManager, a, s),
                    o.jss.removeStyleSheet(n.staticSheet),
                    c && c.remove(n.staticSheet)),
                    t.dynamicSheet &&
                      (o.jss.removeStyleSheet(t.dynamicSheet),
                      c && c.remove(t.dynamicSheet));
                })(n);
              }
            );
          }, [t, x]),
            n.useEffect(() => {
              h.current &&
                (function (e, t) {
                  let { state: s } = e;
                  s.dynamicSheet && s.dynamicSheet.update(t);
                })(p.current, e),
                (h.current = !0);
            });
          const f = (function (e, t, s) {
            let { state: o, stylesOptions: a } = e;
            if (a.disableGeneration) return t || {};
            o.cacheClasses ||
              (o.cacheClasses = { value: null, lastProp: null, lastJSS: {} });
            let n = !1;
            return (
              o.classes !== o.cacheClasses.lastJSS &&
                ((o.cacheClasses.lastJSS = o.classes), (n = !0)),
              t !== o.cacheClasses.lastProp &&
                ((o.cacheClasses.lastProp = t), (n = !0)),
              n &&
                (o.cacheClasses.value = i({
                  baseClasses: o.cacheClasses.lastJSS,
                  newClasses: t,
                  Component: s
                })),
              o.cacheClasses.value
            );
          })(p.current, e.classes, u);
          return f;
        };
      }
    }
  }
]);
//# sourceMappingURL=6530.002eadd1.chunk.js.map
