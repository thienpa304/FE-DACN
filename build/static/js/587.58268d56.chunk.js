'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [587],
  {
    10587: (n, t, o) => {
      o.r(t), o.d(t, { default: () => p });
      var i = o(65043),
        a = o(68903),
        e = o(19464),
        r = o(85865),
        s = o(19252),
        d = o(53404),
        c = o(94692),
        l = o(29490),
        g = o(67963),
        h = o(72812),
        u = o(34535),
        x = o(70579);
      const m = (0, u.Ay)(a.Ay)((n) => {
          let { theme: t } = n;
          return '\n    background: '.concat(t.colors.gradients.black1, ';\n');
        }),
        A = (0, u.Ay)(e.A)(
          () =>
            '\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n'
        ),
        f = (0, u.Ay)(r.A)((n) => {
          let { theme: t } = n;
          return '\n      color: '.concat(t.colors.alpha.white[100], ';\n');
        }),
        v = (0, u.Ay)(r.A)((n) => {
          let { theme: t } = n;
          return '\n      color: '.concat(t.colors.alpha.white[70], ';\n');
        });
      const p = function () {
        const [n, t] = (0, i.useState)(!1);
        return (0, x.jsxs)(x.Fragment, {
          children: [
            (0, x.jsx)(l.mg, {
              children: (0, x.jsx)('title', { children: 'Status - 500' })
            }),
            (0, x.jsx)(A, {
              children: (0, x.jsxs)(a.Ay, {
                container: !0,
                sx: { height: '100%' },
                alignItems: 'stretch',
                spacing: 0,
                children: [
                  (0, x.jsx)(a.Ay, {
                    xs: 12,
                    md: 6,
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    item: !0,
                    children: (0, x.jsx)(s.A, {
                      maxWidth: 'sm',
                      children: (0, x.jsxs)(e.A, {
                        textAlign: 'center',
                        children: [
                          (0, x.jsx)('img', {
                            alt: '500',
                            height: 260,
                            src: '/static/images/status/500.svg'
                          }),
                          (0, x.jsx)(r.A, {
                            variant: 'h2',
                            sx: { my: 2 },
                            children:
                              'There was an error, please try again later'
                          }),
                          (0, x.jsx)(r.A, {
                            variant: 'h4',
                            color: 'text.secondary',
                            fontWeight: 'normal',
                            sx: { mb: 4 },
                            children:
                              'The server encountered an internal error and was not able to complete your request'
                          }),
                          (0, x.jsx)(h.A, {
                            onClick: function () {
                              t(!0);
                            },
                            loading: n,
                            variant: 'outlined',
                            color: 'primary',
                            startIcon: (0, x.jsx)(g.A, {}),
                            children: 'Refresh view'
                          }),
                          (0, x.jsx)(d.A, {
                            href: '/overview',
                            variant: 'contained',
                            sx: { ml: 1 },
                            children: 'Go back'
                          })
                        ]
                      })
                    })
                  }),
                  (0, x.jsx)(c.A, {
                    mdDown: !0,
                    children: (0, x.jsx)(m, {
                      xs: 12,
                      md: 6,
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      item: !0,
                      children: (0, x.jsx)(s.A, {
                        maxWidth: 'sm',
                        children: (0, x.jsxs)(e.A, {
                          textAlign: 'center',
                          children: [
                            (0, x.jsx)(f, {
                              variant: 'h1',
                              sx: { my: 2 },
                              children:
                                'Tokyo Free White React Typescript Admin Dashboard'
                            }),
                            (0, x.jsx)(v, {
                              variant: 'h4',
                              fontWeight: 'normal',
                              sx: { mb: 4 },
                              children:
                                'High performance React template built with lots of powerful Material-UI components across multiple product niches for fast & perfect apps development processes.'
                            }),
                            (0, x.jsx)(d.A, {
                              href: '/overview',
                              size: 'large',
                              variant: 'contained',
                              children: 'Overview'
                            })
                          ]
                        })
                      })
                    })
                  })
                ]
              })
            })
          ]
        });
      };
    },
    67963: (n, t, o) => {
      var i = o(24994);
      t.A = void 0;
      var a = i(o(40039)),
        e = o(70579),
        r = (0, a.default)(
          (0, e.jsx)('path', {
            d: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'
          }),
          'RefreshTwoTone'
        );
      t.A = r;
    },
    72812: (n, t, o) => {
      o.d(t, { A: () => I });
      var i = o(98587),
        a = o(58168),
        e = o(65043),
        r = o(6803),
        s = o(45879),
        d = o(68606),
        c = o(34535),
        l = o(72876),
        g = o(53404),
        h = o(81637),
        u = o(32400);
      function x(n) {
        return (0, u.Ay)('MuiLoadingButton', n);
      }
      const m = (0, o(57056).A)('MuiLoadingButton', [
        'root',
        'loading',
        'loadingIndicator',
        'loadingIndicatorCenter',
        'loadingIndicatorStart',
        'loadingIndicatorEnd',
        'endIconLoadingEnd',
        'startIconLoadingStart'
      ]);
      var A = o(70579);
      const f = [
          'children',
          'disabled',
          'id',
          'loading',
          'loadingIndicator',
          'loadingPosition',
          'variant'
        ],
        v = (0, c.Ay)(g.A, {
          shouldForwardProp: (n) =>
            ((n) =>
              'ownerState' !== n &&
              'theme' !== n &&
              'sx' !== n &&
              'as' !== n &&
              'classes' !== n)(n) || 'classes' === n,
          name: 'MuiLoadingButton',
          slot: 'Root',
          overridesResolver: (n, t) => [
            t.root,
            t.startIconLoadingStart && {
              ['& .'.concat(m.startIconLoadingStart)]: t.startIconLoadingStart
            },
            t.endIconLoadingEnd && {
              ['& .'.concat(m.endIconLoadingEnd)]: t.endIconLoadingEnd
            }
          ]
        })((n) => {
          let { ownerState: t, theme: o } = n;
          return (0, a.A)(
            {
              ['& .'
                .concat(m.startIconLoadingStart, ', & .')
                .concat(m.endIconLoadingEnd)]: {
                transition: o.transitions.create(['opacity'], {
                  duration: o.transitions.duration.short
                }),
                opacity: 0
              }
            },
            'center' === t.loadingPosition && {
              transition: o.transitions.create(
                ['background-color', 'box-shadow', 'border-color'],
                { duration: o.transitions.duration.short }
              ),
              ['&.'.concat(m.loading)]: { color: 'transparent' }
            },
            'start' === t.loadingPosition &&
              t.fullWidth && {
                ['& .'
                  .concat(m.startIconLoadingStart, ', & .')
                  .concat(m.endIconLoadingEnd)]: {
                  transition: o.transitions.create(['opacity'], {
                    duration: o.transitions.duration.short
                  }),
                  opacity: 0,
                  marginRight: -8
                }
              },
            'end' === t.loadingPosition &&
              t.fullWidth && {
                ['& .'
                  .concat(m.startIconLoadingStart, ', & .')
                  .concat(m.endIconLoadingEnd)]: {
                  transition: o.transitions.create(['opacity'], {
                    duration: o.transitions.duration.short
                  }),
                  opacity: 0,
                  marginLeft: -8
                }
              }
          );
        }),
        p = (0, c.Ay)('div', {
          name: 'MuiLoadingButton',
          slot: 'LoadingIndicator',
          overridesResolver: (n, t) => {
            const { ownerState: o } = n;
            return [
              t.loadingIndicator,
              t['loadingIndicator'.concat((0, r.A)(o.loadingPosition))]
            ];
          }
        })((n) => {
          let { theme: t, ownerState: o } = n;
          return (0, a.A)(
            { position: 'absolute', visibility: 'visible', display: 'flex' },
            'start' === o.loadingPosition &&
              ('outlined' === o.variant || 'contained' === o.variant) && {
                left: 'small' === o.size ? 10 : 14
              },
            'start' === o.loadingPosition &&
              'text' === o.variant && { left: 6 },
            'center' === o.loadingPosition && {
              left: '50%',
              transform: 'translate(-50%)',
              color: t.palette.action.disabled
            },
            'end' === o.loadingPosition &&
              ('outlined' === o.variant || 'contained' === o.variant) && {
                right: 'small' === o.size ? 10 : 14
              },
            'end' === o.loadingPosition && 'text' === o.variant && { right: 6 },
            'start' === o.loadingPosition &&
              o.fullWidth && { position: 'relative', left: -10 },
            'end' === o.loadingPosition &&
              o.fullWidth && { position: 'relative', right: -10 }
          );
        }),
        I = e.forwardRef(function (n, t) {
          const o = (0, l.A)({ props: n, name: 'MuiLoadingButton' }),
            {
              children: c,
              disabled: g = !1,
              id: u,
              loading: m = !1,
              loadingIndicator: I,
              loadingPosition: y = 'center',
              variant: j = 'text'
            } = o,
            w = (0, i.A)(o, f),
            L = (0, s.A)(u),
            b =
              null != I
                ? I
                : (0, A.jsx)(h.A, {
                    'aria-labelledby': L,
                    color: 'inherit',
                    size: 16
                  }),
            P = (0, a.A)({}, o, {
              disabled: g,
              loading: m,
              loadingIndicator: b,
              loadingPosition: y,
              variant: j
            }),
            S = ((n) => {
              const { loading: t, loadingPosition: o, classes: i } = n,
                e = {
                  root: ['root', t && 'loading'],
                  startIcon: [t && 'startIconLoading'.concat((0, r.A)(o))],
                  endIcon: [t && 'endIconLoading'.concat((0, r.A)(o))],
                  loadingIndicator: [
                    'loadingIndicator',
                    t && 'loadingIndicator'.concat((0, r.A)(o))
                  ]
                },
                s = (0, d.A)(e, x, i);
              return (0, a.A)({}, i, s);
            })(P);
          return (0,
          A.jsx)(v, (0, a.A)({ disabled: g || m, id: L, ref: t }, w, { variant: j, classes: S, ownerState: P, children: 'end' === P.loadingPosition ? (0, A.jsxs)(e.Fragment, { children: [c, m && (0, A.jsx)(p, { className: S.loadingIndicator, ownerState: P, children: b })] }) : (0, A.jsxs)(e.Fragment, { children: [m && (0, A.jsx)(p, { className: S.loadingIndicator, ownerState: P, children: b }), c] }) }));
        });
    }
  }
]);
//# sourceMappingURL=587.58268d56.chunk.js.map
