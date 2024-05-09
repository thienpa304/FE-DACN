'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [7878],
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
      t.r(o), t.d(o, { default: () => y });
      var a = t(16325),
        i = t(72812),
        r = t(60587),
        e = t(19464),
        s = t(19252),
        d = t(55376),
        l = t(68903),
        c = t(87488),
        g = t(85865),
        u = t(24858),
        m = t(51318),
        h = t(33173),
        x = t(95851),
        p = t(19185),
        A = t(82907),
        v = t(86971),
        f = t(62482),
        I = t(36110);
      const b = () => {
        const { toast: n } = (0, I.n)(),
          {
            user: { userId: o }
          } = (0, I.n)(),
          t = (0, v.Zp)();
        o && t('/');
        const { mutate: a, isLoading: i } = (0, A.useMutation)(f.h.create, {
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
        L = t(70579);
      function y() {
        const { onRegister: n, isLoading: o } = b(),
          [t] = (0, m.ok)();
        let A = t.get('role');
        Object.values(p.X).includes(A) || (A = p.X.EMPLOYEE);
        const {
          control: v,
          handleSubmit: f,
          formState: { errors: I }
        } = (0, u.mN)({});
        return (0, L.jsxs)(L.Fragment, {
          children: [
            (0, L.jsx)(e.A, {
              sx: {
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: -1,
                backgroundImage: 'url('.concat(j, ')'),
                backgroundSize: 'cover'
              }
            }),
            (0, L.jsxs)(s.A, {
              component: 'main',
              maxWidth: 'xs',
              sx: { ml: 25, my: 15 },
              children: [
                (0, L.jsx)(d.Ay, {}),
                (0, L.jsxs)(e.A, {
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
                    (0, L.jsx)(r.A, {
                      sx: { m: 1, bgcolor: 'secondary.main' },
                      children: (0, L.jsx)(a.A, {})
                    }),
                    (0, L.jsxs)(g.A, {
                      component: 'h1',
                      variant: 'h5',
                      children: [
                        '\u0110\u0103ng k\xfd v\u1edbi',
                        ' ',
                        'employer' === A.toLowerCase()
                          ? 'Nh\xe0 tuy\u1ec3n d\u1ee5ng'
                          : 'Ng\u01b0\u1eddi t\xecm vi\u1ec7c'
                      ]
                    }),
                    (0, L.jsxs)(e.A, {
                      component: 'form',
                      noValidate: !0,
                      sx: { mt: 1 },
                      children: [
                        (0, L.jsx)(h.A, {
                          element: (0, L.jsx)(x.A, {}),
                          control: v,
                          errors: I,
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
                        (0, L.jsx)(h.A, {
                          element: (0, L.jsx)(x.A, {}),
                          control: v,
                          errors: I,
                          margin: 'normal',
                          required: !0,
                          fullWidth: !0,
                          name: 'password',
                          label: 'M\u1eadt kh\u1ea9u',
                          type: 'password',
                          id: 'password',
                          autoComplete: 'current-password'
                        }),
                        (0, L.jsx)(h.A, {
                          element: (0, L.jsx)(x.A, {}),
                          control: v,
                          errors: I,
                          margin: 'normal',
                          required: !0,
                          fullWidth: !0,
                          name: 'confirmPassword',
                          label: 'Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u',
                          type: 'password',
                          id: 'confirm-password',
                          autoComplete: 'current-password'
                        }),
                        (0, L.jsx)(i.A, {
                          onClick: f((o) => {
                            n({ ...o, role: A || p.X.EMPLOYEE });
                          }),
                          loading: o,
                          fullWidth: !0,
                          variant: 'contained',
                          sx: { mt: 3, mb: 2 },
                          children: '\u0110\u0103ng k\xed'
                        }),
                        (0, L.jsxs)(l.Ay, {
                          container: !0,
                          children: [
                            (0, L.jsx)(l.Ay, {
                              item: !0,
                              xs: !0,
                              children: (0, L.jsx)(c.A, {
                                href: '#',
                                variant: 'body2',
                                fontWeight: 700,
                                color: 'secondary',
                                children: 'Qu\xean m\u1eadt kh\u1ea9u?'
                              })
                            }),
                            (0, L.jsx)(l.Ay, {
                              item: !0,
                              children: (0, L.jsx)(c.A, {
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
      var a = t(24994);
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
    72812: (n, o, t) => {
      t.d(o, { A: () => I });
      var a = t(98587),
        i = t(58168),
        r = t(65043),
        e = t(6803),
        s = t(45879),
        d = t(68606),
        l = t(34535),
        c = t(72876),
        g = t(53404),
        u = t(81637),
        m = t(32400);
      function h(n) {
        return (0, m.Ay)('MuiLoadingButton', n);
      }
      const x = (0, t(57056).A)('MuiLoadingButton', [
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
      const A = [
          'children',
          'disabled',
          'id',
          'loading',
          'loadingIndicator',
          'loadingPosition',
          'variant'
        ],
        v = (0, l.Ay)(g.A, {
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
              ['& .'.concat(x.startIconLoadingStart)]: o.startIconLoadingStart
            },
            o.endIconLoadingEnd && {
              ['& .'.concat(x.endIconLoadingEnd)]: o.endIconLoadingEnd
            }
          ]
        })((n) => {
          let { ownerState: o, theme: t } = n;
          return (0, i.A)(
            {
              ['& .'
                .concat(x.startIconLoadingStart, ', & .')
                .concat(x.endIconLoadingEnd)]: {
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
              ['&.'.concat(x.loading)]: { color: 'transparent' }
            },
            'start' === o.loadingPosition &&
              o.fullWidth && {
                ['& .'
                  .concat(x.startIconLoadingStart, ', & .')
                  .concat(x.endIconLoadingEnd)]: {
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
                  .concat(x.startIconLoadingStart, ', & .')
                  .concat(x.endIconLoadingEnd)]: {
                  transition: t.transitions.create(['opacity'], {
                    duration: t.transitions.duration.short
                  }),
                  opacity: 0,
                  marginLeft: -8
                }
              }
          );
        }),
        f = (0, l.Ay)('div', {
          name: 'MuiLoadingButton',
          slot: 'LoadingIndicator',
          overridesResolver: (n, o) => {
            const { ownerState: t } = n;
            return [
              o.loadingIndicator,
              o['loadingIndicator'.concat((0, e.A)(t.loadingPosition))]
            ];
          }
        })((n) => {
          let { theme: o, ownerState: t } = n;
          return (0, i.A)(
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
        I = r.forwardRef(function (n, o) {
          const t = (0, c.A)({ props: n, name: 'MuiLoadingButton' }),
            {
              children: l,
              disabled: g = !1,
              id: m,
              loading: x = !1,
              loadingIndicator: I,
              loadingPosition: b = 'center',
              variant: j = 'text'
            } = t,
            L = (0, a.A)(t, A),
            y = (0, s.A)(m),
            w =
              null != I
                ? I
                : (0, p.jsx)(u.A, {
                    'aria-labelledby': y,
                    color: 'inherit',
                    size: 16
                  }),
            S = (0, i.A)({}, t, {
              disabled: g,
              loading: x,
              loadingIndicator: w,
              loadingPosition: b,
              variant: j
            }),
            P = ((n) => {
              const { loading: o, loadingPosition: t, classes: a } = n,
                r = {
                  root: ['root', o && 'loading'],
                  startIcon: [o && 'startIconLoading'.concat((0, e.A)(t))],
                  endIcon: [o && 'endIconLoading'.concat((0, e.A)(t))],
                  loadingIndicator: [
                    'loadingIndicator',
                    o && 'loadingIndicator'.concat((0, e.A)(t))
                  ]
                },
                s = (0, d.A)(r, h, a);
              return (0, i.A)({}, a, s);
            })(S);
          return (0,
          p.jsx)(v, (0, i.A)({ disabled: g || x, id: y, ref: o }, L, { variant: j, classes: P, ownerState: S, children: 'end' === S.loadingPosition ? (0, p.jsxs)(r.Fragment, { children: [l, x && (0, p.jsx)(f, { className: P.loadingIndicator, ownerState: S, children: w })] }) : (0, p.jsxs)(r.Fragment, { children: [x && (0, p.jsx)(f, { className: P.loadingIndicator, ownerState: S, children: w }), l] }) }));
        });
    },
    73383: (n, o, t) => {
      n.exports =
        t.p + 'static/media/background-image.e26997f9c2e3c3d03a8c.png';
    }
  }
]);
//# sourceMappingURL=7878.cebc4e1a.chunk.js.map
