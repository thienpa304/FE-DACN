(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [964],
  {
    97691: (e, s, t) => {
      'use strict';
      t.d(s, { A: () => o });
      t(65043);
      var n = t(85865),
        i = t(70579);
      const o = (e) => {
        let { acceptTypes: s, acceptSize_MB: t } = e;
        return (0, i.jsxs)(n.A, {
          fontSize: 13,
          color: 'grey.600',
          mt: 1,
          children: [
            '\u0110\u1ecbnh d\u1ea1ng file ',
            s.join(', ').replace(/application\//g, '.'),
            ' v\xe0 dung l\u01b0\u1ee3ng ',
            ' <= '.concat(t, ' MB')
          ]
        });
      };
    },
    55289: (e, s, t) => {
      'use strict';
      t.d(s, { A: () => r });
      var n = t(82907),
        i = t(36110),
        o = t(52105),
        l = t(86971);
      const r = () => {
        const e = (0, n.useQueryClient)(),
          s = (0, l.Zp)(),
          { toast: t } = (0, i.n)(),
          { mutate: r, isLoading: a } = (0, n.useMutation)(
            (e) => o.hT.updateWithoutId(e),
            {
              onSuccess: (n) => {
                200 === n.status
                  ? (e.invalidateQueries('get-AttachedDocument'),
                    t.success({ massage: n.message }),
                    s('/employee/recruitment-profile'))
                  : t.error({ massage: n.message });
              },
              onError: (e) => {
                t.error({ massage: e.response.data.message });
              }
            }
          );
        return { onUpdateData: r, isLoading: a };
      };
    },
    72974: (e, s, t) => {
      'use strict';
      t.d(s, { A: () => c });
      var n = t(82907),
        i = t(52105),
        o = t(65043),
        l = t(75614),
        r = t(36110),
        a = t(32109);
      const c = () => {
        const { isEmployee: e } = (0, r.n)(),
          { setProfile: s } = (0, a.A)(),
          t = Boolean((0, l.getAccessToken)()),
          {
            data: c,
            isLoading: d,
            isSuccess: u,
            refetch: h
          } = (0, n.useQuery)(['get-AttachedDocument'], i.hT.get, {
            retry: (e, s) => 400 !== s.response.status && e < 2,
            refetchOnWindowFocus: !1,
            enabled: t && e
          });
        return (
          (0, o.useEffect)(() => {
            c && s(c.data);
          }, [u]),
          {
            attachedDocument: null === c || void 0 === c ? void 0 : c.data,
            isLoading: d,
            refetch: h
          }
        );
      };
    },
    23508: (e, s, t) => {
      'use strict';
      t.r(s), t.d(s, { default: () => K });
      var n = t(65043),
        i = t(34535),
        o = t(19464),
        l = t(19252),
        r = t(85865),
        a = t(68903),
        c = t(11906),
        d = t(12220),
        u = t(39336),
        h = t(81637),
        p = t(44046),
        f = t(34233),
        x = t(62954),
        A = t(33173),
        m = t(24858),
        v = t(36110),
        j = t(69570),
        g = t(65099),
        y = t(32109),
        C = t(52247),
        w = t(97691),
        k = t(70579);
      const V = (0, i.Ay)('input')({ display: 'none' }),
        S = g.BZ.acceptTypes,
        b = g.BZ.acceptSize / 1024 / 1024,
        z = (e) => {
          var s;
          const { user: t } = (0, v.n)(),
            { setProfile: i, profile: a } = (0, y.A)(),
            { acceptTypes: d, acceptSize: z } = g.BZ,
            T = { ...t },
            [L, D] = (0, n.useState)(!1),
            [E, M] = (0, n.useState)(null),
            [B, F] = (0, n.useState)({ file: null, url: '' }),
            { control: I } = (0, m.mN)({ defaultValues: T });
          (0, n.useEffect)(() => {
            P();
          }, [a]);
          const P = async () => {
              const e = await (0, j.TL)(
                null === a || void 0 === a ? void 0 : a.CV
              ).catch(() => '');
              F({ url: e, file: null });
            },
            Q = async (e) => {
              M(!1), D(!0);
              const s = e.target.files[0];
              if (s && d.includes(s.type) && s.size <= z) {
                const e = await (0, j.QM)(s);
                F({ url: e, file: s }), i({ CV: e });
              } else M(!0);
              D(!1);
            };
          return (0, k.jsxs)(l.A, {
            id: 'cv',
            children: [
              (0, k.jsx)(o.A, {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                children: (0, k.jsx)(o.A, {
                  display: 'flex',
                  children: (0, k.jsx)(r.A, {
                    fontWeight: 700,
                    fontSize: 21,
                    lineHeight: 3,
                    children: 'T\u1ea3i CV \u0111\xednh k\xe8m'
                  })
                })
              }),
              (0, k.jsx)(u.A, {}),
              (0, k.jsxs)(o.A, {
                py: 2,
                children: [
                  !(null !== B && void 0 !== B && B.url) &&
                    (0, k.jsxs)(o.A, {
                      children: [
                        (0, k.jsx)(r.A, {
                          mb: 2,
                          color: 'grey.700',
                          children: (0, k.jsx)('em', {
                            children:
                              '* Vui l\xf2ng g\u1eedi l\xean CV xin vi\u1ec7c c\u1ee7a b\u1ea1n !'
                          })
                        }),
                        E && C.qz,
                        (0, k.jsx)('label', {
                          htmlFor: 'CV',
                          children: (0, k.jsxs)(c.A, {
                            component: 'label',
                            startIcon: (0, k.jsx)(x.A, {}),
                            variant: 'outlined',
                            color: 'secondary',
                            children: [
                              (0, k.jsx)(A.A, {
                                element: (0, k.jsx)(V, {
                                  type: 'file',
                                  accept: '.pdf'
                                }),
                                control: I,
                                name: 'CV',
                                id: 'CV',
                                label: 'CV \u0111\xednh k\xe8m',
                                onChange: Q,
                                required: !0
                              }),
                              'T\u1ea3i file'
                            ]
                          })
                        }),
                        L && (0, k.jsx)(h.A, {})
                      ]
                    }),
                  (null === B || void 0 === B ? void 0 : B.url) &&
                    (0, k.jsxs)(o.A, {
                      children: [
                        (0, k.jsxs)(o.A, {
                          display: 'flex',
                          children: [
                            (0, k.jsx)(f.A, {
                              sx: { width: 50, height: 50 },
                              color: 'info'
                            }),
                            (0, k.jsxs)(o.A, {
                              justifyContent: 'left',
                              component: c.A,
                              color: 'inherit',
                              width: '50%',
                              onClick: () => {
                                window.open(B.url, '_blank');
                              },
                              children: [
                                (null === B ||
                                void 0 === B ||
                                null === (s = B.file) ||
                                void 0 === s
                                  ? void 0
                                  : s.name) ||
                                  ' CV cho v\u1ecb tr\xed c\xf4ng vi\u1ec7c '.concat(
                                    (null === a || void 0 === a
                                      ? void 0
                                      : a.jobTitle) || ''
                                  ),
                                L && (0, k.jsx)(h.A, {})
                              ]
                            }),
                            E && C.qz
                          ]
                        }),
                        (0, k.jsxs)(o.A, {
                          display: 'flex',
                          children: [
                            (0, k.jsxs)(c.A, {
                              component: 'label',
                              startIcon: (0, k.jsx)(x.A, {}),
                              variant: 'text',
                              color: 'secondary',
                              children: [
                                (0, k.jsx)(A.A, {
                                  element: (0, k.jsx)(V, {
                                    type: 'file',
                                    accept: '.pdf'
                                  }),
                                  control: I,
                                  name: 'CV',
                                  id: 'CV',
                                  label: 'CV \u0111\xednh k\xe8m',
                                  onChange: Q
                                }),
                                'T\u1ea3i file'
                              ]
                            }),
                            (0, k.jsx)(c.A, {
                              component: 'label',
                              onClick: () => {
                                M(!1),
                                  D(!0),
                                  (0, j.Vr)(B.url),
                                  F({ url: '', file: null }),
                                  i({ CV: '' }),
                                  D(!1);
                              },
                              startIcon: (0, k.jsx)(p.A, {}),
                              variant: 'text',
                              color: 'secondary',
                              children: 'X\xf3a file'
                            })
                          ]
                        })
                      ]
                    }),
                  (0, k.jsx)(w.A, { acceptTypes: S, acceptSize_MB: b })
                ]
              })
            ]
          });
        };
      var T = t(52047),
        L = t(37130),
        D = t(17913),
        E = t(25650);
      function M() {
        const { setProfile: e, profile: s } = (0, y.A)(),
          [t, i] = (0, n.useState)(null),
          o = {
            profession: D.VL,
            workAddress: D.mo,
            positionLevel: D.F1,
            degree: D.$P,
            experience: D.P7,
            workingForm: D.pX
          };
        return (
          (0, n.useEffect)(() => {
            var e;
            i(
              ((e = s),
              {
                ...e,
                profession: (0, E.NX)(
                  null === e || void 0 === e ? void 0 : e.profession,
                  o.profession
                ),
                workAddress: (0, E.NX)(
                  null === e || void 0 === e ? void 0 : e.workAddress,
                  o.workAddress
                )
              })
            );
          }, [s]),
          (0, k.jsx)(L.A, {
            data: t,
            options: o,
            onSubmit: (s) => {
              e({ ...s });
            }
          })
        );
      }
      const B = n.memo(M);
      var F = t(39045),
        I = t(47298),
        P = t(76391),
        Q = t(82907),
        Z = t(52105),
        N = t(86971);
      const _ = () => {
        const e = (0, Q.useQueryClient)(),
          s = (0, N.Zp)(),
          { toast: t } = (0, v.n)(),
          n = Z.hT.create,
          { mutate: i, isLoading: o } = (0, Q.useMutation)(n, {
            onSuccess: (n) => {
              200 === n.status
                ? (e.invalidateQueries('get-AttachedDocument'),
                  t.success({ massage: n.message }),
                  s('/employee/recruitment-profile'))
                : t.error({ massage: n.message });
            },
            onError: (e) => {
              t.error({ massage: e.response.data.message });
            }
          });
        return { onSaveData: i, isLoading: o };
      };
      var H = t(55289),
        U = t(72974),
        W = t(62237),
        X = t(9052),
        q = t(91401),
        O = t(19290),
        J = t(60386),
        R = t(78910);
      const $ = (0, i.Ay)(o.A)((e) => {
          let { theme: s } = e;
          return {
            background: '#ffff',
            marginBottom: s.spacing(4),
            boxShadow: '2px 2px 6px #aae2f7'
          };
        }),
        G = [
          {
            icon: (0, k.jsx)(I.A, { sx: { width: 20 } }),
            title: 'T\u1ea3i CV \u0111\xednh k\xe8m',
            id: 'cv'
          },
          {
            icon: (0, k.jsx)(I.A, { sx: { width: 20 } }),
            title: 'Th\xf4ng tin c\xe1 nh\xe2n',
            id: 'personal'
          },
          {
            icon: (0, k.jsx)(P.A, { sx: { width: 20 } }),
            title: 'Th\xf4ng tin chung',
            id: 'general'
          }
        ];
      function K() {
        const { onSaveData: e } = _(),
          { onUpdateData: s } = (0, H.A)(),
          { setProfile: t, profile: i } = (0, y.A)(),
          { attachedDocument: o, isLoading: u } = (0, U.A)(),
          h = (0, N.Zp)(),
          [p, f] = (0, n.useState)(!1),
          [x, A] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            p && h('/employee/recruitment-profile');
          }, [p]),
          u
            ? (0, k.jsx)(W.A, {})
            : (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsxs)(l.A, {
                    children: [
                      (0, k.jsx)(r.A, {
                        mt: 3,
                        fontSize: 22,
                        fontWeight: 700,
                        children: 'T\u1ea1o h\u1ed3 s\u01a1 \u0111\xednh k\xe8m'
                      }),
                      (0, k.jsxs)(a.Ay, {
                        container: !0,
                        columnSpacing: 2,
                        mt: 2,
                        children: [
                          (0, k.jsx)(a.Ay, {
                            item: !0,
                            xs: 10,
                            children: G.map((e) =>
                              (0, k.jsxs)(
                                $,
                                {
                                  children: [
                                    'cv' === e.id && (0, k.jsx)(z, {}),
                                    'personal' === e.id && (0, k.jsx)(T.A, {}),
                                    'general' === e.id && (0, k.jsx)(B, {})
                                  ]
                                },
                                e.id
                              )
                            )
                          }),
                          (0, k.jsx)(a.Ay, {
                            item: !0,
                            xs: 2,
                            children: (0, k.jsx)($, {
                              width: 200,
                              position: 'sticky',
                              top: 60,
                              children: (0, k.jsx)(F.A, { sections: G })
                            })
                          })
                        ]
                      })
                    ]
                  }),
                  (0, k.jsxs)(X.A, {
                    children: [
                      (0, k.jsx)(c.A, {
                        onClick: () => {
                          h('/employee/recruitment-profile');
                        },
                        variant: 'outlined',
                        color: 'secondary',
                        sx: { width: 200 },
                        children: 'Quay l\u1ea1i'
                      }),
                      (0, k.jsx)(c.A, {
                        variant: 'contained',
                        sx: { width: 200 },
                        onClick: async () => {
                          if (null !== i && void 0 !== i && i.CV) {
                            A(!0);
                            try {
                              const t = await (0, j.TL)(
                                  null === i || void 0 === i ? void 0 : i.CV
                                ),
                                n = await fetch(t);
                              if (null === n || void 0 === n || !n.ok)
                                throw new Error('Failed to fetch file');
                              const o = await (null === n || void 0 === n
                                  ? void 0
                                  : n.blob()),
                                l = await (0, J.A)(o),
                                r = (0, R.V)(i, 'document', l);
                              (0, q.A)(O.uz, [r], null, { 58: 5, 60: 5 }).then(
                                (t) => {
                                  const n = (0, R.Z)(t, JSON.stringify(r));
                                  null !== i && void 0 !== i && i.userId
                                    ? s({
                                        ...i,
                                        keywords:
                                          (null === i || void 0 === i
                                            ? void 0
                                            : i.skills) +
                                          ', ' +
                                          n
                                      })
                                    : e({
                                        ...i,
                                        keywords:
                                          (null === i || void 0 === i
                                            ? void 0
                                            : i.skills) +
                                          ', ' +
                                          n
                                      }),
                                    f(!0),
                                    A(!1);
                                }
                              );
                            } catch (t) {
                              console.error('Error creating local URL:', t),
                                A(!1);
                            }
                          }
                        },
                        children: 'L\u01b0u h\u1ed3 s\u01a1'
                      })
                    ]
                  }),
                  (0, k.jsx)(d.A, {
                    sx: { color: '#fff', zIndex: (e) => e.zIndex.drawer + 1 },
                    open: x,
                    children: (0, k.jsx)(W.A, {})
                  })
                ]
              })
        );
      }
    },
    62954: (e, s, t) => {
      'use strict';
      var n = t(32392);
      s.A = void 0;
      var i = n(t(40039)),
        o = t(70579),
        l = (0, i.default)(
          (0, o.jsx)('path', {
            d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z'
          }),
          'CloudUpload'
        );
      s.A = l;
    },
    34233: (e, s, t) => {
      'use strict';
      var n = t(32392);
      s.A = void 0;
      var i = n(t(40039)),
        o = t(70579),
        l = (0, i.default)(
          (0, o.jsx)('path', {
            d: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-2 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8H8v-.57c0-.81.48-1.53 1.22-1.85.85-.37 1.79-.58 2.78-.58.99 0 1.93.21 2.78.58.74.32 1.22 1.04 1.22 1.85V18z'
          }),
          'ContactPage'
        );
      s.A = l;
    },
    17406: () => {},
    69851: () => {},
    38586: () => {},
    76149: () => {},
    60933: () => {},
    9193: () => {}
  }
]);
//# sourceMappingURL=964.b0c3cc30.chunk.js.map
