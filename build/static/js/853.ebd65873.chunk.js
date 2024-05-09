'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [853],
  {
    30604: (e, o, i) => {
      i.d(o, { A: () => d });
      var t = i(65043),
        n = i(51318),
        l = i(70579);
      const s = { textDecoration: 'none', color: '#551a8b' },
        r = (e) => {
          e.currentTarget.style.color = '#FF7D55';
        },
        d = (0, t.forwardRef)((e, o) => {
          const { to: i, children: t, sx: d } = e;
          return (0, l.jsx)(n.N_, {
            ...e,
            to: i,
            style: { ...s, ...d },
            onMouseEnter: r,
            onMouseLeave: (e) =>
              ((e, o) => {
                e.currentTarget.style.color = o || '#551a8b';
              })(e, null === d || void 0 === d ? void 0 : d.color),
            children: t
          });
        });
    },
    20860: (e, o, i) => {
      i.d(o, { A: () => v });
      var t = i(68903),
        n = i(67784),
        l = i(51787),
        s = i(53404),
        r = i(65043),
        d = i(66360),
        a = i(30604),
        c = i(49768),
        u = i(59162),
        x = i(54367),
        p = i(70579);
      const h = [{ label: 'T\u1ea5t c\u1ea3', value: '' }, ...u.VL];
      function v(e) {
        let { to: o, sx: i } = e;
        const [u, v] = (0, r.useState)(''),
          [f, g] = (0, r.useState)('');
        return (0, p.jsxs)(t.Ay, {
          container: !0,
          display: 'flex',
          sx: { border: '1px solid #98E4FF', borderRadius: '5px', ...i },
          children: [
            (0, p.jsx)(t.Ay, {
              item: !0,
              xs: 8,
              children: (0, p.jsx)(n.A, {
                value: u,
                onChange: (e) => {
                  v(() => e.target.value);
                },
                InputProps: {
                  startAdornment: (0, p.jsx)(l.A, {
                    position: 'start',
                    children: (0, p.jsx)(d.A, {})
                  })
                },
                placeholder:
                  'Nh\u1eadp v\u1ecb tr\xed mu\u1ed1n \u1ee9ng tuy\u1ec3n',
                fullWidth: !0,
                sx: {
                  backgroundColor: 'white',
                  boxShadow: '2px 2px 6px #98E4FF'
                }
              })
            }),
            (0, p.jsx)(t.Ay, {
              item: !0,
              xs: 2,
              children: (0, p.jsx)(c.A, {
                options: h,
                onChange: (e) => {
                  g(() => e.target.value);
                },
                label: 'Ngh\u1ec1 nghi\u1ec7p',
                placeholder: 'Ngh\u1ec1 nghi\u1ec7p',
                fullWidth: !0,
                sx: {
                  backgroundColor: 'white',
                  boxShadow: '2px 2px 6px #98E4FF',
                  borderRadius: '0px'
                },
                labelmargintop: '5px',
                size: 'medium'
              })
            }),
            (0, p.jsx)(t.Ay, {
              item: !0,
              xs: 2,
              children: (0, p.jsx)(a.A, {
                to: u
                  ? ''
                      .concat(o, '/')
                      .concat((0, x.O)(f) || 'Tat-ca', '?search=')
                      .concat(u)
                  : '',
                sx: { color: '#000' },
                state: {
                  jobTitle: null === u || void 0 === u ? void 0 : u.trim(),
                  profession: f,
                  pageTitle: u
                },
                children: (0, p.jsxs)(s.A, {
                  variant: 'contained',
                  sx: { opacity: 0.8, height: '100%', borderRadius: '0px' },
                  fullWidth: !0,
                  children: [(0, p.jsx)(d.A, {}), 'T\xecm ki\u1ebfm']
                })
              })
            })
          ]
        });
      }
    },
    60853: (e, o, i) => {
      i.r(o), i.d(o, { default: () => A });
      var t = i(65043),
        n = i(19252),
        l = i(85865),
        s = i(68903),
        r = i(19464),
        d = i(14701),
        a = i(82907),
        c = i(36228),
        u = i(36110);
      const x = (e) => {
        const { isEmployer: o } = (0, u.n)(),
          {
            data: i,
            isLoading: t,
            refetch: n
          } = (0, a.useQuery)(
            [
              'get-AllEmployees',
              null === e || void 0 === e ? void 0 : e.page,
              null === e || void 0 === e ? void 0 : e.profession,
              null === e || void 0 === e ? void 0 : e.experience,
              null === e || void 0 === e ? void 0 : e.degree,
              null === e || void 0 === e ? void 0 : e.employmentType,
              null === e || void 0 === e ? void 0 : e.sex,
              null === e || void 0 === e ? void 0 : e.jobTitle,
              null === e || void 0 === e ? void 0 : e.currentPosition,
              null === e || void 0 === e ? void 0 : e.positionLevel
            ],
            () => {
              for (const i in e)
                ('T\u1ea5t c\u1ea3' !== e[i] && void 0 !== e[i]) || (e[i] = '');
              const o = {
                ...e,
                currentPosition:
                  null === e || void 0 === e ? void 0 : e.positionLevel
              };
              return delete o.positionLevel, c.G9.get({ params: o });
            },
            {
              keepPreviousData: !0,
              retry: 1,
              refetchOnWindowFocus: !1,
              enabled: o
            }
          );
        return {
          profile: (null === i || void 0 === i ? void 0 : i.data) || [],
          isLoading: t,
          refetch: n
        };
      };
      var p = i(20860),
        h = i(98785),
        v = i(86971),
        f = i(62237),
        g = i(70579);
      function j() {
        const [e, o] = (0, t.useState)(1),
          [i, a] = (0, t.useState)(null),
          { state: c } = (0, v.zy)(),
          u = c,
          { profile: j, isLoading: A } = x({
            page: e,
            num: 12,
            ...i,
            profession: null === u || void 0 === u ? void 0 : u.profession,
            jobTitle: null === u || void 0 === u ? void 0 : u.jobTitle
          });
        return A
          ? (0, g.jsx)(f.A, {})
          : (0, g.jsxs)(n.A, {
              sx: { p: 3 },
              children: [
                (0, g.jsx)(l.A, {
                  mb: 2,
                  fontSize: 22,
                  fontWeight: 700,
                  children: 'T\xecm ki\u1ebfm \u1ee9ng vi\xean'
                }),
                (0, g.jsx)(p.A, {
                  to: '/employer/find-profiles',
                  sx: { my: 3 }
                }),
                (0, g.jsx)(h.A, {
                  handleFilter: (e) => {
                    a((o) => ({ ...o, ...e }));
                  }
                }),
                (0, g.jsxs)(n.A, {
                  sx: { mb: 3, p: 3, bgcolor: '#fbfeff', minHeight: '65vh' },
                  children: [
                    (0, g.jsx)(s.Ay, {
                      container: !0,
                      spacing: 1,
                      children: j.map((e, o) =>
                        (0, g.jsx)(
                          s.Ay,
                          {
                            item: !0,
                            xs: 12,
                            sm: 6,
                            md: 3,
                            children: (0, g.jsx)(r.A, {
                              sx: { display: 'flex', justifyContent: 'center' },
                              children: (0, g.jsx)(d.A, { profile: e })
                            })
                          },
                          o
                        )
                      )
                    }),
                    0 === (null === j || void 0 === j ? void 0 : j.length) &&
                      (0, g.jsx)(r.A, {
                        sx: { display: 'flex', justifyContent: 'center' },
                        children: (0, g.jsx)(l.A, {
                          mt: 10,
                          textAlign: 'center',
                          fontStyle: 'italic',
                          color: '#9999',
                          children:
                            'Kh\xf4ng t\xecm \u0111\u01b0\u1ee3c h\u1ed3 s\u01a1 ph\xf9 h\u1ee3p'
                        })
                      })
                  ]
                })
              ]
            });
      }
      function A() {
        return (0, g.jsx)(j, {});
      }
    },
    66360: (e, o, i) => {
      var t = i(24994);
      o.A = void 0;
      var n = t(i(40039)),
        l = i(70579),
        s = (0, n.default)(
          (0, l.jsx)('path', {
            d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
          }),
          'Search'
        );
      o.A = s;
    }
  }
]);
//# sourceMappingURL=853.ebd65873.chunk.js.map
