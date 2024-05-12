'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [587],
  {
    10587: (n, t, o) => {
      o.r(t), o.d(t, { default: () => A });
      var i = o(65043),
        a = o(68903),
        e = o(19464),
        r = o(85865),
        s = o(19252),
        d = o(11906),
        c = o(94692),
        l = o(29490),
        g = o(67963),
        h = o(70930),
        u = o(34535),
        f = o(70579);
      const x = (0, u.Ay)(a.Ay)((n) => {
          let { theme: t } = n;
          return '\n    background: '.concat(t.colors.gradients.black1, ';\n');
        }),
        m = (0, u.Ay)(e.A)(
          () =>
            '\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n'
        ),
        p = (0, u.Ay)(r.A)((n) => {
          let { theme: t } = n;
          return '\n      color: '.concat(t.colors.alpha.white[100], ';\n');
        }),
        v = (0, u.Ay)(r.A)((n) => {
          let { theme: t } = n;
          return '\n      color: '.concat(t.colors.alpha.white[70], ';\n');
        });
      const A = function () {
        const [n, t] = (0, i.useState)(!1);
        return (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsx)(l.mg, {
              children: (0, f.jsx)('title', { children: 'Status - 500' })
            }),
            (0, f.jsx)(m, {
              children: (0, f.jsxs)(a.Ay, {
                container: !0,
                sx: { height: '100%' },
                alignItems: 'stretch',
                spacing: 0,
                children: [
                  (0, f.jsx)(a.Ay, {
                    xs: 12,
                    md: 6,
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    item: !0,
                    children: (0, f.jsx)(s.A, {
                      maxWidth: 'sm',
                      children: (0, f.jsxs)(e.A, {
                        textAlign: 'center',
                        children: [
                          (0, f.jsx)('img', {
                            alt: '500',
                            height: 260,
                            src: '/static/images/status/500.svg'
                          }),
                          (0, f.jsx)(r.A, {
                            variant: 'h2',
                            sx: { my: 2 },
                            children:
                              'There was an error, please try again later'
                          }),
                          (0, f.jsx)(r.A, {
                            variant: 'h4',
                            color: 'text.secondary',
                            fontWeight: 'normal',
                            sx: { mb: 4 },
                            children:
                              'The server encountered an internal error and was not able to complete your request'
                          }),
                          (0, f.jsx)(h.A, {
                            onClick: function () {
                              t(!0);
                            },
                            loading: n,
                            variant: 'outlined',
                            color: 'primary',
                            startIcon: (0, f.jsx)(g.A, {}),
                            children: 'Refresh view'
                          }),
                          (0, f.jsx)(d.A, {
                            href: '/overview',
                            variant: 'contained',
                            sx: { ml: 1 },
                            children: 'Go back'
                          })
                        ]
                      })
                    })
                  }),
                  (0, f.jsx)(c.A, {
                    mdDown: !0,
                    children: (0, f.jsx)(x, {
                      xs: 12,
                      md: 6,
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      item: !0,
                      children: (0, f.jsx)(s.A, {
                        maxWidth: 'sm',
                        children: (0, f.jsxs)(e.A, {
                          textAlign: 'center',
                          children: [
                            (0, f.jsx)(p, {
                              variant: 'h1',
                              sx: { my: 2 },
                              children:
                                'Tokyo Free White React Typescript Admin Dashboard'
                            }),
                            (0, f.jsx)(v, {
                              variant: 'h4',
                              fontWeight: 'normal',
                              sx: { mb: 4 },
                              children:
                                'High performance React template built with lots of powerful Material-UI components across multiple product niches for fast & perfect apps development processes.'
                            }),
                            (0, f.jsx)(d.A, {
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
      var i = o(32392);
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
    70930: (n, t, o) => {
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var t = 1; t < arguments.length; t++) {
                  var o = arguments[t];
                  for (var i in o)
                    Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
                }
                return n;
              }),
          i.apply(this, arguments)
        );
      }
      o.d(t, { A: () => A });
      var a = o(65043),
        e = o(6803),
        r = o(45879),
        s = o(68606),
        d = o(34535),
        c = o(72876),
        l = o(11906),
        g = o(81637),
        h = o(32400);
      function u(n) {
        return (0, h.Ay)('MuiLoadingButton', n);
      }
      const f = (0, o(57056).A)('MuiLoadingButton', [
        'root',
        'loading',
        'loadingIndicator',
        'loadingIndicatorCenter',
        'loadingIndicatorStart',
        'loadingIndicatorEnd',
        'endIconLoadingEnd',
        'startIconLoadingStart'
      ]);
      var x = o(70579);
      const m = [
          'children',
          'disabled',
          'id',
          'loading',
          'loadingIndicator',
          'loadingPosition',
          'variant'
        ],
        p = (0, d.Ay)(l.A, {
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
              ['& .'.concat(f.startIconLoadingStart)]: t.startIconLoadingStart
            },
            t.endIconLoadingEnd && {
              ['& .'.concat(f.endIconLoadingEnd)]: t.endIconLoadingEnd
            }
          ]
        })((n) => {
          let { ownerState: t, theme: o } = n;
          return i(
            {
              ['& .'
                .concat(f.startIconLoadingStart, ', & .')
                .concat(f.endIconLoadingEnd)]: {
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
              ['&.'.concat(f.loading)]: { color: 'transparent' }
            },
            'start' === t.loadingPosition &&
              t.fullWidth && {
                ['& .'
                  .concat(f.startIconLoadingStart, ', & .')
                  .concat(f.endIconLoadingEnd)]: {
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
                  .concat(f.startIconLoadingStart, ', & .')
                  .concat(f.endIconLoadingEnd)]: {
                  transition: o.transitions.create(['opacity'], {
                    duration: o.transitions.duration.short
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
          overridesResolver: (n, t) => {
            const { ownerState: o } = n;
            return [
              t.loadingIndicator,
              t['loadingIndicator'.concat((0, e.A)(o.loadingPosition))]
            ];
          }
        })((n) => {
          let { theme: t, ownerState: o } = n;
          return i(
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
        A = a.forwardRef(function (n, t) {
          const o = (0, c.A)({ props: n, name: 'MuiLoadingButton' }),
            {
              children: d,
              disabled: l = !1,
              id: h,
              loading: f = !1,
              loadingIndicator: A,
              loadingPosition: y = 'center',
              variant: I = 'text'
            } = o,
            j = (function (n, t) {
              if (null == n) return {};
              var o = {};
              for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                  if (t.indexOf(i) >= 0) continue;
                  o[i] = n[i];
                }
              return o;
            })(o, m),
            b = (0, r.A)(h),
            w =
              null != A
                ? A
                : (0, x.jsx)(g.A, {
                    'aria-labelledby': b,
                    color: 'inherit',
                    size: 16
                  }),
            L = i({}, o, {
              disabled: l,
              loading: f,
              loadingIndicator: w,
              loadingPosition: y,
              variant: I
            }),
            P = ((n) => {
              const { loading: t, loadingPosition: o, classes: a } = n,
                r = {
                  root: ['root', t && 'loading'],
                  startIcon: [t && 'startIconLoading'.concat((0, e.A)(o))],
                  endIcon: [t && 'endIconLoading'.concat((0, e.A)(o))],
                  loadingIndicator: [
                    'loadingIndicator',
                    t && 'loadingIndicator'.concat((0, e.A)(o))
                  ]
                };
              return i({}, a, (0, s.A)(r, u, a));
            })(L);
          return (0,
          x.jsx)(p, i({ disabled: l || f, id: b, ref: t }, j, { variant: I, classes: P, ownerState: L, children: 'end' === L.loadingPosition ? (0, x.jsxs)(a.Fragment, { children: [d, f && (0, x.jsx)(v, { className: P.loadingIndicator, ownerState: L, children: w })] }) : (0, x.jsxs)(a.Fragment, { children: [f && (0, x.jsx)(v, { className: P.loadingIndicator, ownerState: L, children: w }), d] }) }));
        });
    }
  }
]);
//# sourceMappingURL=587.3e84ab66.chunk.js.map
