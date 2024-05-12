'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [616],
  {
    55289: (e, t, n) => {
      n.d(t, { A: () => d });
      var i = n(82907),
        s = n(36110),
        o = n(52105),
        a = n(86971);
      const d = () => {
        const e = (0, i.useQueryClient)(),
          t = (0, a.Zp)(),
          { toast: n } = (0, s.n)(),
          { mutate: d, isLoading: r } = (0, i.useMutation)(
            (e) => o.hT.updateWithoutId(e),
            {
              onSuccess: (i) => {
                200 === i.status
                  ? (e.invalidateQueries('get-AttachedDocument'),
                    n.success({ massage: i.message }),
                    t('/employee/recruitment-profile'))
                  : n.error({ massage: i.message });
              },
              onError: (e) => {
                n.error({ massage: e.response.data.message });
              }
            }
          );
        return { onUpdateData: d, isLoading: r };
      };
    },
    72974: (e, t, n) => {
      n.d(t, { A: () => l });
      var i = n(82907),
        s = n(52105),
        o = n(65043),
        a = n(75614),
        d = n(36110),
        r = n(32109);
      const l = () => {
        const { isEmployee: e } = (0, d.n)(),
          { setProfile: t } = (0, r.A)(),
          n = Boolean((0, a.getAccessToken)()),
          {
            data: l,
            isLoading: c,
            isSuccess: h,
            refetch: u
          } = (0, i.useQuery)(['get-AttachedDocument'], s.hT.get, {
            retry: (e, t) => 400 !== t.response.status && e < 2,
            refetchOnWindowFocus: !1,
            enabled: n && e
          });
        return (
          (0, o.useEffect)(() => {
            l && t(l.data);
          }, [h]),
          {
            attachedDocument: null === l || void 0 === l ? void 0 : l.data,
            isLoading: c,
            refetch: u
          }
        );
      };
    },
    59497: (e, t, n) => {
      n.d(t, { A: () => a });
      var i = n(82907),
        s = n(36110),
        o = n(52105);
      const a = () => {
        const e = (0, i.useQueryClient)(),
          { toast: t } = (0, s.n)(),
          {
            mutate: n,
            isLoading: a,
            isSuccess: d
          } = (0, i.useMutation)((e) => o.w0.updateWithoutId(e), {
            onSuccess: (n) => {
              200 === n.status
                ? (e.invalidateQueries('get-OnlineProfile'),
                  t.success({ massage: n.message }))
                : t.error({ massage: n.message });
            },
            onError: (e) => {
              t.error({ massage: e.response.data.message });
            }
          });
        return { onUpdateData: n, isSuccess: d };
      };
    },
    54262: (e, t, n) => {
      n.d(t, { A: () => l });
      var i = n(82907),
        s = n(52105),
        o = n(65043),
        a = n(75614),
        d = n(36110),
        r = n(35644);
      const l = () => {
        const { isEmployee: e } = (0, d.n)(),
          { setProfile: t } = (0, r.A)(),
          n = Boolean((0, a.getAccessToken)()),
          {
            data: l,
            isLoading: c,
            isSuccess: h,
            refetch: u
          } = (0, i.useQuery)(['get-OnlineProfile'], s.w0.get, {
            retry: (e, t) => 400 !== t.response.status && e < 2,
            refetchOnWindowFocus: !1,
            enabled: n && e
          });
        return (
          (0, o.useEffect)(() => {
            l && h && t(null === l || void 0 === l ? void 0 : l.data);
          }, [h]),
          {
            onlineProfile: null === l || void 0 === l ? void 0 : l.data,
            isLoading: c,
            refetch: u
          }
        );
      };
    },
    48616: (e, t, n) => {
      n.r(t), n.d(t, { default: () => y });
      var i = n(34535),
        s = n(19464),
        o = n(85865),
        a = n(68903),
        d = n(88911),
        r = n(19042),
        l = n(11906),
        c = n(19252),
        h = n(60907),
        u = n(3519),
        p = n(54262),
        g = n(59497),
        m = n(72974),
        f = n(55289),
        v = n(70579);
      const A = (0, i.Ay)(s.A)((e) => {
          let { theme: t } = e;
          return {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            paddingInline: 20,
            borderRadius: 2,
            marginTop: 10,
            marginBottom: 40,
            boxShadow: '2px 2px 6px #aae2f7'
          };
        }),
        x = (0, i.Ay)(s.A)((e) => {
          let { theme: t } = e;
          return {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 120,
            height: 50,
            paddingInline: 15,
            fontSize: 15,
            color: 'gray'
          };
        }),
        j = (e) => {
          let {
            title: t,
            id: n,
            profile: i,
            isHidden: c,
            linkTo: h,
            onUpdateData: p
          } = e;
          return (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsx)(o.A, { fontSize: 18, fontWeight: 700, children: t }),
              (0, v.jsx)(A, {
                bgcolor: '#ffff',
                children: (0, v.jsxs)(a.Ay, {
                  container: !0,
                  children: [
                    (0, v.jsxs)(a.Ay, {
                      item: !0,
                      xs: 6,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      height: 150,
                      children: [
                        (0, v.jsx)('img', {
                          title: n,
                          src:
                            'online' === n
                              ? 'https://cdn-icons-png.flaticon.com/128/1309/1309245.png'
                              : 'https://cdn-icons-png.flaticon.com/512/3135/3135796.png',
                          width: 100,
                          color: 'secondary'
                        }),
                        (0, v.jsx)(o.A, {
                          variant: 'h4',
                          children:
                            null === i || void 0 === i ? void 0 : i.jobTitle
                        })
                      ]
                    }),
                    (0, v.jsx)(a.Ay, {
                      item: !0,
                      xs: 6,
                      display: 'flex',
                      alignItems: 'center',
                      children: (0, v.jsxs)(d.A, {
                        direction: 'row',
                        divider: (0, v.jsx)(s.A, {
                          component: 'hr',
                          border: 1,
                          borderColor: 'grey.300'
                        }),
                        children: [
                          (0, v.jsxs)(x, {
                            children: [
                              'L\u01b0\u1ee3t xem: ',
                              null === i || void 0 === i ? void 0 : i.view
                            ]
                          }),
                          (0, v.jsxs)(x, {
                            children: [
                              'Cho ph\xe9p t\xecm ki\u1ebfm',
                              (0, v.jsx)(r.A, {
                                checked: !c,
                                onChange: () => {
                                  p({ ...i, isHidden: !c });
                                },
                                name: 'isHidden'.concat(n)
                              })
                            ]
                          }),
                          (0, v.jsx)(x, {
                            children: (0, v.jsx)(l.A, {
                              href: h,
                              variant: 'outlined',
                              color: 'secondary',
                              startIcon: (0, v.jsx)(u.A, {}),
                              children: 'C\u1eadp nh\u1eadt h\u1ed3 s\u01a1'
                            })
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
      function y() {
        const { onlineProfile: e } = (0, p.A)(),
          { attachedDocument: t } = (0, m.A)(),
          { onUpdateData: n } = (0, g.A)(),
          { onUpdateData: i } = (0, f.A)(),
          s = [
            {
              id: 'online',
              title: 'H\u1ed3 s\u01a1 tr\u1ef1c tuy\u1ebfn',
              profile: e,
              isHidden:
                void 0 === (null === e || void 0 === e ? void 0 : e.isHidden) ||
                (null === e || void 0 === e ? void 0 : e.isHidden),
              linkTo: '/employee/online-profile',
              onUpdateData: n
            },
            {
              id: 'attach',
              title: 'H\u1ed3 s\u01a1 \u0111\xednh k\xe8m',
              profile: t,
              isHidden:
                void 0 === (null === t || void 0 === t ? void 0 : t.isHidden) ||
                (null === t || void 0 === t ? void 0 : t.isHidden),
              linkTo: '/employee/attachment-profile',
              onUpdateData: i
            }
          ];
        return (0, v.jsxs)(c.A, {
          children: [
            (0, v.jsx)(o.A, {
              mt: 3,
              fontSize: 22,
              fontWeight: 700,
              children: 'H\u1ed3 s\u01a1 c\u1ee7a b\u1ea1n'
            }),
            (0, v.jsxs)(A, {
              height: 120,
              children: [
                (0, v.jsx)(h.A, { fontSize: 'large', color: 'secondary' }),
                (0, v.jsx)(o.A, {
                  fontSize: 13,
                  lineHeight: 2,
                  color: 'secondary',
                  children: (0, v.jsxs)('ul', {
                    children: [
                      (0, v.jsx)('li', {
                        children:
                          'B\u1ea1n c\xf3 th\u1ec3 t\u1ea1o t\u1ed1i \u0111a 02 h\u1ed3 s\u01a1.'
                      }),
                      (0, v.jsx)('li', {
                        children:
                          'B\u1eadt "Cho ph\xe9p t\xecm ki\u1ebfm" s\u1ebd t\u0103ng t\u1ed1i \u0111a c\u01a1 h\u1ed9i \u0111\u01b0\u1ee3c Nh\xe0 tuy\u1ec3n d\u1ee5ng li\xean h\u1ec7 v\u1edbi b\u1ea1n.'
                      })
                    ]
                  })
                })
              ]
            }),
            s.map((e) => (0, v.jsx)(j, { ...e }, e.id))
          ]
        });
      }
    },
    3519: (e, t, n) => {
      var i = n(32392);
      t.A = void 0;
      var s = i(n(40039)),
        o = n(70579),
        a = (0, s.default)(
          (0, o.jsx)('path', {
            d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'
          }),
          'ModeEdit'
        );
      t.A = a;
    },
    60907: (e, t, n) => {
      var i = n(32392);
      t.A = void 0;
      var s = i(n(40039)),
        o = n(70579),
        a = (0, s.default)(
          (0, o.jsx)('path', {
            d: 'M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm-2-1h8v-2H5v2zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5zm4.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6l-.63 1.37zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94L19 6z'
          }),
          'TipsAndUpdates'
        );
      t.A = a;
    }
  }
]);
//# sourceMappingURL=616.e3ba4c8e.chunk.js.map
