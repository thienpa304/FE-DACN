'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [5],
  {
    92386: (e, t, n) => {
      n.r(t), n.d(t, { default: () => p });
      var r = n(19464),
        s = n(74050),
        i = n(11906),
        l = n(19252),
        a = n(85865),
        h = n(12110),
        c = n(53193),
        o = n(51787),
        d = n(39336),
        x = n(29490),
        m = n(14324),
        A = n(34535),
        u = n(70579);
      const j = (0, A.Ay)(r.A)((e) => {
          let { theme: t } = e;
          return '\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n';
        }),
        g = (0, A.Ay)(s.A)((e) => {
          let { theme: t } = e;
          return '\n    background-color: '.concat(
            t.colors.alpha.white[100],
            ';\n'
          );
        }),
        f = (0, A.Ay)(i.A)((e) => {
          let { theme: t } = e;
          return '\n    margin-right: -'.concat(t.spacing(1), ';\n');
        });
      const p = function () {
        return (0, u.jsxs)(u.Fragment, {
          children: [
            (0, u.jsx)(x.mg, {
              children: (0, u.jsx)('title', { children: 'Status - 404' })
            }),
            (0, u.jsx)(j, {
              children: (0, u.jsxs)(l.A, {
                maxWidth: 'md',
                children: [
                  (0, u.jsxs)(r.A, {
                    textAlign: 'center',
                    children: [
                      (0, u.jsx)('img', {
                        alt: '404',
                        height: 180,
                        src: '/static/images/status/404.svg'
                      }),
                      (0, u.jsx)(a.A, {
                        variant: 'h2',
                        sx: { my: 2 },
                        children: "The page you were looking for doesn't exist."
                      }),
                      (0, u.jsx)(a.A, {
                        variant: 'h4',
                        color: 'text.secondary',
                        fontWeight: 'normal',
                        sx: { mb: 4 },
                        children:
                          "It's on us, we moved the content to a different page. The search below should help!"
                      })
                    ]
                  }),
                  (0, u.jsx)(l.A, {
                    maxWidth: 'sm',
                    children: (0, u.jsxs)(h.A, {
                      sx: { textAlign: 'center', mt: 3, p: 4 },
                      children: [
                        (0, u.jsx)(c.A, {
                          variant: 'outlined',
                          fullWidth: !0,
                          children: (0, u.jsx)(g, {
                            type: 'text',
                            placeholder: 'Search terms here...',
                            endAdornment: (0, u.jsx)(o.A, {
                              position: 'end',
                              children: (0, u.jsx)(f, {
                                variant: 'contained',
                                size: 'small',
                                children: 'Search'
                              })
                            }),
                            startAdornment: (0, u.jsx)(o.A, {
                              position: 'start',
                              children: (0, u.jsx)(m.A, {})
                            })
                          })
                        }),
                        (0, u.jsx)(d.A, { sx: { my: 4 }, children: 'OR' }),
                        (0, u.jsx)(i.A, {
                          href: '/overview',
                          variant: 'outlined',
                          children: 'Go to homepage'
                        })
                      ]
                    })
                  })
                ]
              })
            })
          ]
        });
      };
    },
    14324: (e, t, n) => {
      var r = n(32392);
      t.A = void 0;
      var s = r(n(40039)),
        i = n(70579),
        l = (0, s.default)(
          (0, i.jsx)('path', {
            d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
          }),
          'SearchTwoTone'
        );
      t.A = l;
    }
  }
]);
//# sourceMappingURL=5.3b3c41cd.chunk.js.map
