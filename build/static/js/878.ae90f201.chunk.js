'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [878],
  {
    95851: (n, o, t) => {
      t.d(o, { A: () => r });
      var a = t(67784),
        i = t(70579);
      const r = (n) => (0, i.jsx)(a.A, { size: 'small', fullWidth: !0, ...n });
    },
    62482: (n, o, t) => {
      t.d(o, { H: () => i, h: () => r });
      var a = t(22626);
      const i = new a.A('login'),
        r = new a.A('register');
    },
    47878: (n, o, t) => {
      t.r(o), t.d(o, { default: () => L });
      var a = t(16325),
        i = t(70930),
        r = t(81045),
        e = t(19464),
        s = t(19252),
        d = t(55376),
        c = t(68903),
        l = t(88446),
        g = t(85865),
        u = t(24858),
        h = t(51318),
        m = t(33173),
        p = t(95851),
        x = t(19185),
        f = t(82907),
        v = t(86971),
        A = t(62482),
        b = t(36110);
      const I = () => {
        const { toast: n } = (0, b.n)(),
          {
            user: { userId: o }
          } = (0, b.n)(),
          t = (0, v.Zp)();
        o && t('/');
        const { mutate: a, isLoading: i } = (0, f.useMutation)(A.h.create, {
          onSuccess: (o) => {
            200 === o.status
              ? (n.success({ massage: o.message }), t('/login'))
              : n.error({ massage: o.message });
          },
          onError: (o) => {
            n.error({ massage: o.response.data.message });
          }
        });
        return { onRegister: a, isLoading: i };
      };
      var j = t(73383),
        y = t(70579);
      function L() {
        const { onRegister: n, isLoading: o } = I(),
          [t] = (0, h.ok)();
        let f = t.get('role');
        Object.values(x.X).includes(f) || (f = x.X.EMPLOYEE);
        const {
          control: v,
          handleSubmit: A,
          formState: { errors: b }
        } = (0, u.mN)({});
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)(e.A, {
              sx: {
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: -1,
                backgroundImage: 'url('.concat(j, ')'),
                backgroundSize: 'cover'
              }
            }),
            (0, y.jsxs)(s.A, {
              component: 'main',
              maxWidth: 'xs',
              sx: { ml: 25, my: 15 },
              children: [
                (0, y.jsx)(d.Ay, {}),
                (0, y.jsxs)(e.A, {
                  sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    bgcolor: 'white',
                    p: 3,
                    border: 1,
                    borderColor: '#79b6cc',
                    borderRadius: 2,
                    boxShadow: '2px 2px 6px #98E4FF'
                  },
                  children: [
                    (0, y.jsx)(r.A, {
                      sx: { m: 1, bgcolor: 'secondary.main' },
                      children: (0, y.jsx)(a.A, {})
                    }),
                    (0, y.jsxs)(g.A, {
                      component: 'h1',
                      variant: 'h5',
                      children: [
                        '\u0110\u0103ng k\xfd v\u1edbi',
                        ' ',
                        'employer' === f.toLowerCase()
                          ? 'Nh\xe0 tuy\u1ec3n d\u1ee5ng'
                          : 'Ng\u01b0\u1eddi t\xecm vi\u1ec7c'
                      ]
                    }),
                    (0, y.jsxs)(e.A, {
                      component: 'form',
                      noValidate: !0,
                      sx: { mt: 1 },
                      children: [
                        (0, y.jsx)(m.A, {
                          element: (0, y.jsx)(p.A, {}),
                          control: v,
                          errors: b,
                          margin: 'normal',
                          required: !0,
                          fullWidth: !0,
                          id: 'email',
                          label: '\u0110\u1ecba ch\u1ec9 email',
                          name: 'email',
                          pattern: 'email',
                          autoComplete: 'email',
                          autoFocus: !0
                        }),
                        (0, y.jsx)(m.A, {
                          element: (0, y.jsx)(p.A, {}),
                          control: v,
                          errors: b,
                          margin: 'normal',
                          required: !0,
                          fullWidth: !0,
                          name: 'password',
                          label: 'M\u1eadt kh\u1ea9u',
                          type: 'password',
                          id: 'password',
                          autoComplete: 'current-password'
                        }),
                        (0, y.jsx)(m.A, {
                          element: (0, y.jsx)(p.A, {}),
                          control: v,
                          errors: b,
                          margin: 'normal',
                          required: !0,
                          fullWidth: !0,
                          name: 'confirmPassword',
                          label: 'Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u',
                          type: 'password',
                          id: 'confirm-password',
                          autoComplete: 'current-password'
                        }),
                        (0, y.jsx)(i.A, {
                          onClick: A((o) => {
                            n({ ...o, role: f || x.X.EMPLOYEE });
                          }),
                          loading: o,
                          fullWidth: !0,
                          variant: 'contained',
                          sx: { mt: 3, mb: 2 },
                          children: '\u0110\u0103ng k\xed'
                        }),
                        (0, y.jsxs)(c.Ay, {
                          container: !0,
                          children: [
                            (0, y.jsx)(c.Ay, {
                              item: !0,
                              xs: !0,
                              children: (0, y.jsx)(l.A, {
                                href: '#',
                                variant: 'body2',
                                fontWeight: 700,
                                color: 'secondary',
                                children: 'Qu\xean m\u1eadt kh\u1ea9u?'
                              })
                            }),
                            (0, y.jsx)(c.Ay, {
                              item: !0,
                              children: (0, y.jsx)(l.A, {
                                href: '/login',
                                variant: 'body2',
                                fontWeight: 700,
                                color: 'secondary',
                                children: '\u0110\u0103ng nh\u1eadp'
                              })
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        });
      }
    },
    16325: (n, o, t) => {
      var a = t(32392);
      o.A = void 0;
      var i = a(t(40039)),
        r = t(70579),
        e = (0, i.default)(
          (0, r.jsx)('path', {
            d: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'
          }),
          'LockOutlined'
        );
      o.A = e;
    },
    70930: (n, o, t) => {
      function a() {
        return (
          (a = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var o = 1; o < arguments.length; o++) {
                  var t = arguments[o];
                  for (var a in t)
                    Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
                }
                return n;
              }),
          a.apply(this, arguments)
        );
      }
      t.d(o, { A: () => A });
      var i = t(65043),
        r = t(6803),
        e = t(45879),
        s = t(68606),
        d = t(34535),
        c = t(72876),
        l = t(11906),
        g = t(81637),
        u = t(32400);
      function h(n) {
        return (0, u.Ay)('MuiLoadingButton', n);
      }
      const m = (0, t(57056).A)('MuiLoadingButton', [
        'root',
        'loading',
        'loadingIndicator',
        'loadingIndicatorCenter',
        'loadingIndicatorStart',
        'loadingIndicatorEnd',
        'endIconLoadingEnd',
        'startIconLoadingStart'
      ]);
      var p = t(70579);
      const x = [
          'children',
          'disabled',
          'id',
          'loading',
          'loadingIndicator',
          'loadingPosition',
          'variant'
        ],
        f = (0, d.Ay)(l.A, {
          shouldForwardProp: (n) =>
            ((n) =>
              'ownerState' !== n &&
              'theme' !== n &&
              'sx' !== n &&
              'as' !== n &&
              'classes' !== n)(n) || 'classes' === n,
          name: 'MuiLoadingButton',
          slot: 'Root',
          overridesResolver: (n, o) => [
            o.root,
            o.startIconLoadingStart && {
              ['& .'.concat(m.startIconLoadingStart)]: o.startIconLoadingStart
            },
            o.endIconLoadingEnd && {
              ['& .'.concat(m.endIconLoadingEnd)]: o.endIconLoadingEnd
            }
          ]
        })((n) => {
          let { ownerState: o, theme: t } = n;
          return a(
            {
              ['& .'
                .concat(m.startIconLoadingStart, ', & .')
                .concat(m.endIconLoadingEnd)]: {
                transition: t.transitions.create(['opacity'], {
                  duration: t.transitions.duration.short
                }),
                opacity: 0
              }
            },
            'center' === o.loadingPosition && {
              transition: t.transitions.create(
                ['background-color', 'box-shadow', 'border-color'],
                { duration: t.transitions.duration.short }
              ),
              ['&.'.concat(m.loading)]: { color: 'transparent' }
            },
            'start' === o.loadingPosition &&
              o.fullWidth && {
                ['& .'
                  .concat(m.startIconLoadingStart, ', & .')
                  .concat(m.endIconLoadingEnd)]: {
                  transition: t.transitions.create(['opacity'], {
                    duration: t.transitions.duration.short
                  }),
                  opacity: 0,
                  marginRight: -8
                }
              },
            'end' === o.loadingPosition &&
              o.fullWidth && {
                ['& .'
                  .concat(m.startIconLoadingStart, ', & .')
                  .concat(m.endIconLoadingEnd)]: {
                  transition: t.transitions.create(['opacity'], {
                    duration: t.transitions.duration.short
                  }),
                  opacity: 0,
                  marginLeft: -8
                }
              }
          );
        }),
        v = (0, d.Ay)('div', {
          name: 'MuiLoadingButton',
          slot: 'LoadingIndicator',
          overridesResolver: (n, o) => {
            const { ownerState: t } = n;
            return [
              o.loadingIndicator,
              o['loadingIndicator'.concat((0, r.A)(t.loadingPosition))]
            ];
          }
        })((n) => {
          let { theme: o, ownerState: t } = n;
          return a(
            { position: 'absolute', visibility: 'visible', display: 'flex' },
            'start' === t.loadingPosition &&
              ('outlined' === t.variant || 'contained' === t.variant) && {
                left: 'small' === t.size ? 10 : 14
              },
            'start' === t.loadingPosition &&
              'text' === t.variant && { left: 6 },
            'center' === t.loadingPosition && {
              left: '50%',
              transform: 'translate(-50%)',
              color: o.palette.action.disabled
            },
            'end' === t.loadingPosition &&
              ('outlined' === t.variant || 'contained' === t.variant) && {
                right: 'small' === t.size ? 10 : 14
              },
            'end' === t.loadingPosition && 'text' === t.variant && { right: 6 },
            'start' === t.loadingPosition &&
              t.fullWidth && { position: 'relative', left: -10 },
            'end' === t.loadingPosition &&
              t.fullWidth && { position: 'relative', right: -10 }
          );
        }),
        A = i.forwardRef(function (n, o) {
          const t = (0, c.A)({ props: n, name: 'MuiLoadingButton' }),
            {
              children: d,
              disabled: l = !1,
              id: u,
              loading: m = !1,
              loadingIndicator: A,
              loadingPosition: b = 'center',
              variant: I = 'text'
            } = t,
            j = (function (n, o) {
              if (null == n) return {};
              var t = {};
              for (var a in n)
                if (Object.prototype.hasOwnProperty.call(n, a)) {
                  if (o.indexOf(a) >= 0) continue;
                  t[a] = n[a];
                }
              return t;
            })(t, x),
            y = (0, e.A)(u),
            L =
              null != A
                ? A
                : (0, p.jsx)(g.A, {
                    'aria-labelledby': y,
                    color: 'inherit',
                    size: 16
                  }),
            w = a({}, t, {
              disabled: l,
              loading: m,
              loadingIndicator: L,
              loadingPosition: b,
              variant: I
            }),
            P = ((n) => {
              const { loading: o, loadingPosition: t, classes: i } = n,
                e = {
                  root: ['root', o && 'loading'],
                  startIcon: [o && 'startIconLoading'.concat((0, r.A)(t))],
                  endIcon: [o && 'endIconLoading'.concat((0, r.A)(t))],
                  loadingIndicator: [
                    'loadingIndicator',
                    o && 'loadingIndicator'.concat((0, r.A)(t))
                  ]
                };
              return a({}, i, (0, s.A)(e, h, i));
            })(w);
          return (0,
          p.jsx)(f, a({ disabled: l || m, id: y, ref: o }, j, { variant: I, classes: P, ownerState: w, children: 'end' === w.loadingPosition ? (0, p.jsxs)(i.Fragment, { children: [d, m && (0, p.jsx)(v, { className: P.loadingIndicator, ownerState: w, children: L })] }) : (0, p.jsxs)(i.Fragment, { children: [m && (0, p.jsx)(v, { className: P.loadingIndicator, ownerState: w, children: L }), d] }) }));
        });
    },
    73383: (n, o, t) => {
      n.exports =
        t.p + 'static/media/background-image.e26997f9c2e3c3d03a8c.png';
    }
  }
]);
//# sourceMappingURL=878.ae90f201.chunk.js.map
