'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [703],
  {
    67902: (e, i, l) => {
      l.d(i, { A: () => o });
      var n = l(34535),
        t = l(69869);
      const o = (0, n.Ay)(t.A)(
        () =>
          '\n    .MuiTabs-scrollableX {\n    overflow-x: auto !important;\n      }\n  '
      );
    },
    94220: (e, i, l) => {
      l.d(i, { A: () => r, L: () => s });
      var n = l(82907),
        t = l(52404),
        o = l(65043),
        a = l(36110);
      function r(e) {
        const { isEmployer: i } = (0, a.n)();
        if (!e) return {};
        const { data: l, isLoading: o } = (0, n.useQuery)(
          ['application-getById', e],
          async () => t.DG.getById(e),
          {
            retry: 1,
            refetchOnWindowFocus: !1,
            keepPreviousData: !0,
            enabled: i
          }
        );
        return {
          data: null === l || void 0 === l ? void 0 : l.data,
          isLoading: o
        };
      }
      function s(e) {
        const [i, l] = (0, o.useState)([]),
          {
            data: a,
            isLoading: r,
            refetch: s
          } = (0, n.useQuery)(
            ['application-getByIdList', JSON.stringify(e)],
            async () => {
              if (!e.length) return [];
              Promise.allSettled(e.map((e) => t.DG.getById(e)))
                .then((e) => {
                  const i = e
                    .filter((e) => 'fulfilled' === e.status)
                    .map((e) => e.value);
                  l(i);
                })
                .catch((e) => console.log(e));
            },
            { retry: 1, refetchOnWindowFocus: !1, keepPreviousData: !0 }
          );
        return {
          data:
            null === i || void 0 === i
              ? void 0
              : i.map((e) => (null === e || void 0 === e ? void 0 : e.data)),
          isLoading: r,
          refetch: s
        };
      }
    },
    23703: (e, i, l) => {
      l.r(i), l.d(i, { default: () => G });
      var n = l(19252),
        t = l(68903),
        o = l(12110),
        a = l(79958),
        r = l(39336),
        s = l(26494),
        d = l(24056),
        u = l(82907),
        c = l(52404),
        v = l(36110);
      const p = (e) => {
        var i;
        const { isEmployer: l } = (0, v.n)(),
          {
            data: n,
            isLoading: t,
            refetch: o,
            isFetching: a
          } = (0, u.useQuery)(
            [
              'application-getList',
              null === e || void 0 === e ? void 0 : e.page,
              null === e || void 0 === e ? void 0 : e.status,
              null === e || void 0 === e ? void 0 : e.matchingScore
            ],
            () => c.DG.get({ params: e }),
            {
              keepPreviousData: !0,
              retry: 1,
              refetchOnWindowFocus: !1,
              enabled: l
            }
          );
        return {
          data:
            (null === n || void 0 === n || null === (i = n.data) || void 0 === i
              ? void 0
              : i.map((e) => ({ ...e, id: e.application_id }))) || [],
          isLoading: t,
          refetch: o,
          isFetching: a
        };
      };
      var h = l(19464),
        g = l(28800),
        f = l(85865),
        m = l(11906),
        y = l(81637),
        x = l(59162);
      const A = () => {
        const e = (0, u.useQueryClient)(),
          { toast: i } = (0, v.n)(),
          { isLoading: l, mutateAsync: n } = (0, u.useMutation)(
            (e) => {
              let [i, l] = e;
              return c.zP.update(i, l);
            },
            {
              onSuccess: (l) => {
                200 === l.status
                  ? (e.invalidateQueries(['application-getList']),
                    i.success({ massage: l.message }))
                  : i.error({ massage: l.message });
              },
              onError: (e) => {
                i.error({ massage: e.response.data.message });
              }
            }
          );
        return { onSaveApplicationStatus: n, isLoading: l };
      };
      var b = l(65043),
        S = l(49768),
        j = l(94220),
        P = l(42445),
        C = l(21886),
        _ = l(3553),
        w = l(84391),
        L = l(83462),
        k = l(26600),
        I = l(17392),
        T = l(35316),
        z = l(74802),
        D = l(19193),
        F = l(60427),
        N = l(70579);
      const W = function (e) {
        let { profile: i } = e;
        const l = document.createElement('div'),
          n = (0, w.H)(l);
        document.body.appendChild(l),
          n.render(
            (0, N.jsx)(F.A, {
              children: (0, N.jsxs)(L.A, {
                open: !0,
                fullWidth: !0,
                maxWidth: 'md',
                children: [
                  (0, N.jsxs)(k.A, {
                    sx: {
                      textAlign: 'center',
                      fontWeight: 700,
                      fontSize: '1.3rem'
                    },
                    children: [
                      'H\u1ed3 s\u01a1 ng\u01b0\u1eddi d\xf9ng',
                      (0, N.jsx)(I.A, {
                        'aria-label': 'close',
                        onClick: () => {
                          n.unmount();
                        },
                        sx: {
                          position: 'absolute',
                          right: 14,
                          top: 14,
                          color: (e) => e.palette.grey[500]
                        },
                        children: (0, N.jsx)(z.A, {})
                      })
                    ]
                  }),
                  (0, N.jsx)(r.A, { sx: { bgcolor: '#B6FFFA', height: 2 } }),
                  (0, N.jsx)(T.A, {
                    children: (0, N.jsx)(D.A, {
                      user: i,
                      bgcolor: 'none',
                      showTitle: !1
                    })
                  })
                ]
              })
            })
          );
      };
      var O = l(95382),
        J = l(94006),
        R = l(56743);
      const E = [
        {
          field: 'name',
          headerName: 'T\xean h\u1ed3 s\u01a1',
          minWidth: 220,
          renderCell: (e) => {
            var i, l, n;
            const t =
                null !== e &&
                void 0 !== e &&
                null !== (i = e.row) &&
                void 0 !== i &&
                i.CV
                  ? null === e ||
                    void 0 === e ||
                    null === (l = e.row) ||
                    void 0 === l
                    ? void 0
                    : l.CV
                  : '#',
              { data: o } =
                ((0, b.useMemo)(() => t || '#', [t]),
                (0, j.A)(
                  null === e ||
                    void 0 === e ||
                    null === (n = e.row) ||
                    void 0 === n
                    ? void 0
                    : n.id
                ));
            return (0, N.jsx)(f.A, {
              sx: {
                color: '#319fce',
                ':hover': { textDecoration: 'none', cursor: 'pointer' },
                textDecoration: 'none'
              },
              onClick: () => {
                W({ profile: o });
              },
              children: e.value
            });
          },
          sortable: !0
        },
        {
          field: 'jobTitle',
          headerName: 'V\u1ecb tr\xed \u1ee9ng tuy\u1ec3n',
          minWidth: 400,
          renderCell: (e) => {
            if (e.value)
              return (0, N.jsx)(f.A, {
                sx: {
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'wrap',
                  lineHeight: '1.5',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                },
                children: e.value
              });
          },
          sortable: !0
        },
        {
          field: 'applicationType',
          headerName: 'Lo\u1ea1i h\u1ed3 s\u01a1',
          minWidth: 150,
          sortable: !0
        },
        {
          field: 'status',
          headerName: 'Tr\u1ea1ng th\xe1i tuy\u1ec3n d\u1ee5ng',
          minWidth: 180,
          renderCell: (e) => {
            var i;
            const { onSaveApplicationStatus: l } = A(),
              [n, t] = (0, b.useState)(null);
            (0, b.useEffect)(() => {
              var i;
              if (!e.value || !x.J2) return;
              const l =
                null === (i = x.J2.find((i) => i.label === e.value)) ||
                void 0 === i
                  ? void 0
                  : i.value;
              t(l);
            }, [e.value]);
            return (0, N.jsx)(S.A, {
              value: n,
              options: x.J2,
              onChange: (i) => {
                l([e.id, { status: i.target.value }]).then(() => {
                  t(i.target.value);
                });
              },
              sx: {
                color:
                  null === (i = x.J2.find((e) => e.value === n)) || void 0 === i
                    ? void 0
                    : i.optionColor
              }
            });
          },
          sortable: !0
        },
        {
          field: 'matchingScore',
          headerName: '\u0110\u1ed9 ph\xf9 h\u1ee3p',
          minWidth: 150,
          align: 'center',
          headerAlign: 'center',
          renderCell: (e) => {
            let i = '';
            return (
              e.value >= P.IF
                ? (i = 'Cao')
                : e.value >= P.$I && e.value < P.IF
                ? (i = 'Trung b\xecnh')
                : e.value >= P.ay && e.value < P.$I
                ? (i = 'Th\u1ea5p')
                : e.value < 0 && (i = 'Kh\xf4ng ph\xf9 h\u1ee3p'),
              void 0 === e.value || null === e.value
                ? (0, N.jsx)(f.A, {
                    sx: { color: 'text.disabled', fontStyle: 'italic' },
                    children: 'Ch\u01b0a x\xe1c \u0111\u1ecbnh'
                  })
                : (0, N.jsx)(h.A, {
                    sx: {
                      width: '90%',
                      borderRadius: 2,
                      p: 1,
                      bgcolor:
                        e.value >= P.IF
                          ? '#ffc107'
                          : e.value >= P.$I
                          ? '#A1C398'
                          : e.value >= P.ay
                          ? '#b5b5b5'
                          : '#efefef',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    },
                    children: i
                  })
            );
          },
          sortable: !0
        }
      ];
      function B(e) {
        var i;
        const {
            pageSize: l,
            data: n,
            currentPage: o,
            totalPages: a,
            handlePageChange: r
          } = e,
          [s, d] = (0, b.useState)([]),
          [u, c] = (0, b.useState)(!1),
          [v, p] = (0, b.useState)([]),
          [w, L] = (0, b.useState)(!1),
          [k, I] = (0, b.useState)(!1),
          [T, z] = (0, b.useState)(!1),
          [D, F] = (0, b.useState)([]),
          [W, B] = (0, b.useState)(!1),
          [M, Q] = (0, b.useState)({ signal: !1, resultData: null }),
          [H, G] = (0, b.useState)([]),
          $ =
            null === n || void 0 === n
              ? void 0
              : n.map((e) =>
                  null === e || void 0 === e ? void 0 : e.application_id
                );
        console.log(H);
        const q = [
            ...new Set(
              null === n || void 0 === n
                ? void 0
                : n.map((e) => {
                    var i;
                    return null === e ||
                      void 0 === e ||
                      null === (i = e.jobPosting) ||
                      void 0 === i
                      ? void 0
                      : i.postId;
                  })
            )
          ],
          { jobs: V, isLoading: K } = (0, C.B)(q),
          { data: X, isLoading: U, refetch: Y } = (0, j.L)($),
          { onSaveApplicationStatus: Z } = A(),
          ee = async (e) => {
            d(e);
          },
          ie = (e) => {
            c(e);
          },
          le = (e, i) => {
            Q({ signal: e, resultData: i });
          },
          ne = async (e) => {
            const i = await (0, P.d8)(e),
              l = te(i);
            ae(l);
          },
          te = (e) =>
            s.map((i) => {
              var l;
              const n = oe(i, e);
              return {
                ...i,
                employee_Profile: {
                  ...(null === i || void 0 === i ? void 0 : i.employee_Profile),
                  application: {
                    ...(null === i ||
                    void 0 === i ||
                    null === (l = i.employee_Profile) ||
                    void 0 === l
                      ? void 0
                      : l.application),
                    matchingScore: n
                  }
                }
              };
            }),
          oe = (e, i) => {
            var l, n;
            const t = i.find(
              (i) =>
                (null === i || void 0 === i ? void 0 : i.id) ===
                (null === e || void 0 === e ? void 0 : e.id)
            );
            var o, a, r, s, d, u;
            return void 0 !== (null === t || void 0 === t ? void 0 : t.result)
              ? void 0 !==
                (null === e ||
                void 0 === e ||
                null === (o = e.employee_Profile) ||
                void 0 === o ||
                null === (a = o.application) ||
                void 0 === a
                  ? void 0
                  : a.matchingScore)
                ? (null === e ||
                  void 0 === e ||
                  null === (r = e.employee_Profile) ||
                  void 0 === r ||
                  null === (s = r.application) ||
                  void 0 === s
                    ? void 0
                    : s.matchingScore) + t.result
                : t.result
              : !w &&
                ((null !== e &&
                  void 0 !== e &&
                  null !== (l = e.employee_Profile) &&
                  void 0 !== l &&
                  l.online_profile) ||
                  (null !== e &&
                    void 0 !== e &&
                    null !== (n = e.employee_Profile) &&
                    void 0 !== n &&
                    n.attached_document))
              ? (0, P._h)(
                  null === e || void 0 === e ? void 0 : e.employer_Requirement,
                  null === e || void 0 === e ? void 0 : e.employee_Profile
                )
              : null === e ||
                void 0 === e ||
                null === (d = e.employee_Profile) ||
                void 0 === d ||
                null === (u = d.application) ||
                void 0 === u
              ? void 0
              : u.matchingScore;
          },
          ae = (e) => {
            if (!w) {
              const i = e.filter((e) => {
                var i;
                return (
                  (null === e ||
                  void 0 === e ||
                  null === (i = e.employee_Profile.application) ||
                  void 0 === i
                    ? void 0
                    : i.matchingScore) >= P.ay
                );
              });
              F(i);
            }
            d(e);
            const i = e.map((e) => {
              var i;
              return {
                ...(null === e ||
                void 0 === e ||
                null === (i = e.employee_Profile) ||
                void 0 === i
                  ? void 0
                  : i.application),
                id: e.id
              };
            });
            p((e) =>
              e.map(
                (e) =>
                  i.find(
                    (i) =>
                      (null === i || void 0 === i ? void 0 : i.id) ===
                      (null === e || void 0 === e ? void 0 : e.id)
                  ) || e
              )
            ),
              W && (w ? (k ? T || z(!0) : I(!0)) : L(!0));
          },
          re = () =>
            null === n || void 0 === n
              ? void 0
              : n
                  .map((e) => {
                    var i, l, n;
                    const t =
                        null === V || void 0 === V
                          ? void 0
                          : V.find((i) => {
                              var l;
                              return (
                                (null === i || void 0 === i
                                  ? void 0
                                  : i.postId) ===
                                (null === e ||
                                void 0 === e ||
                                null === (l = e.jobPosting) ||
                                void 0 === l
                                  ? void 0
                                  : l.postId)
                              );
                            }),
                      o =
                        null === X || void 0 === X
                          ? void 0
                          : X.find((i) => {
                              var l;
                              return (
                                (null === i ||
                                void 0 === i ||
                                null === (l = i.application) ||
                                void 0 === l
                                  ? void 0
                                  : l.application_id) ===
                                (null === e || void 0 === e
                                  ? void 0
                                  : e.application_id)
                              );
                            });
                    if (!t || !o) return null;
                    const a = (0, P.MO)(t),
                      r = (0, P.kF)(o);
                    return {
                      id:
                        null === e || void 0 === e ? void 0 : e.application_id,
                      employer_Requirement: a,
                      employee_Profile: {
                        ...r,
                        application: {
                          ...r.application,
                          jobTitle:
                            null === t || void 0 === t ? void 0 : t.jobTitle,
                          keywords:
                            null !== r &&
                            void 0 !== r &&
                            null !== (i = r.application) &&
                            void 0 !== i &&
                            i.keywords
                              ? null === r ||
                                void 0 === r ||
                                null === (l = r.application) ||
                                void 0 === l
                                ? void 0
                                : l.keywords
                              : null !== r && void 0 !== r && r.online_profile
                              ? null === o || void 0 === o
                                ? void 0
                                : o.online_profile.keywords
                              : null === r ||
                                void 0 === r ||
                                null === (n = r.attached_document) ||
                                void 0 === n
                              ? void 0
                              : n.keywords
                        }
                      }
                    };
                  })
                  .filter(Boolean),
          se = () => {
            if (w)
              !k && D.length > 0
                ? (0, P.NQ)({
                    round: 2,
                    handleAnalyzeResult: ne,
                    setIsAnalyzing: ie,
                    passRoundProfiles: D
                  })
                : T
                ? (Promise.all(
                    v
                      .filter((e) => H.includes(e.id))
                      .map((e) => Z([e.id, { matchingScore: e.matchingScore }]))
                  ).then(() => {
                    Y();
                  }),
                  B(!1),
                  L(!1),
                  I(!1),
                  z(!1),
                  c(!1),
                  F([]),
                  Q({ signal: !1, resultData: null }),
                  d(re()),
                  console.log('Finished All'))
                : (0, P.NQ)({
                    round: 3,
                    handleAnalyzeResult: ne,
                    setIsAnalyzing: ie,
                    passRoundProfiles: D
                  });
            else {
              const e = s
                .filter((e) => (console.log(e.id, H), H.includes(e.id)))
                .map((e) => ({
                  ...e,
                  employee_Profile: {
                    ...e.employee_Profile,
                    application: {
                      ...e.employee_Profile.application,
                      matchingScore: null
                    }
                  }
                }));
              console.log('resetScoreList', e),
                d(e),
                (0, P.NQ)({
                  round: 1,
                  handleAnalyzeResult: ne,
                  setIsAnalyzing: ie,
                  resetMatchingScoreList: e,
                  setAnalyzedProfile: ee,
                  handleGoToAnalyzeResult: le
                });
            }
          };
        (0, b.useEffect)(() => {
          M.signal && ne(M.resultData);
        }, [M.signal]),
          (0, b.useEffect)(() => {
            if (!V.length || !X.length || W) return;
            const e = re(),
              i =
                null === e || void 0 === e
                  ? void 0
                  : e.map(
                      (e) => (
                        (e.employee_Profile.application.id = e.id),
                        e.employee_Profile.application
                      )
                    );
            JSON.stringify(i) !== JSON.stringify(v) &&
              (console.log('showList', i), p(() => i)),
              JSON.stringify(e) !== JSON.stringify(s) && d(e);
          }, [JSON.stringify(n), JSON.stringify(V), JSON.stringify(X)]),
          (0, b.useEffect)(() => {
            W && se();
          }, [W, w, k, T]);
        const [de, ue] = (0, b.useState)(null),
          ce = () => {
            Promise.all(H.map((e) => Z([e, { status: de }]))).then(() => {
              Y();
            });
          };
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(h.A, {
              sx: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'right',
                gap: 2
              },
              children: (0, N.jsxs)(t.Ay, {
                container: !0,
                sx: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'right',
                  gap: 2
                },
                children: [
                  (0, N.jsx)(t.Ay, {
                    item: !0,
                    xs: 1,
                    children: (0, N.jsxs)(f.A, {
                      fontWeight: 700,
                      children: ['\u0110\xe3 ch\u1ecdn: ', H.length]
                    })
                  }),
                  (0, N.jsx)(t.Ay, {
                    item: !0,
                    xs: 1.5,
                    children: (0, N.jsx)(S.A, {
                      options: x.J2,
                      onChange: (e) => {
                        ue(e.target.value);
                      },
                      value: H.length > 0 ? de : '',
                      sx: {
                        color:
                          null === (i = x.J2.find((e) => e.value === de)) ||
                          void 0 === i
                            ? void 0
                            : i.optionColor
                      },
                      disabled: !H.length,
                      label: 'Duy\u1ec7t nhanh'
                    })
                  }),
                  (0, N.jsx)(t.Ay, {
                    item: !0,
                    xs: 0.7,
                    children: (0, N.jsx)(m.A, {
                      variant: 'contained',
                      size: 'small',
                      color: 'info',
                      sx: { py: 1, px: 0 },
                      onClick: () => {
                        (0, J.A)({
                          selectedId: '_',
                          handleConfirm: ce,
                          message:
                            'Chuy\u1ec3n c\xe1c h\u1ed3 s\u01a1 \u0111\xe3 ch\u1ecdn sang tr\u1ea1ng th\xe1i '.concat(
                              R.q0[de],
                              '?'
                            )
                        });
                      },
                      disabled: !H.length || !de,
                      children: (0, N.jsx)(O.A, { sx: { fontSize: 15 } })
                    })
                  }),
                  (0, N.jsxs)(t.Ay, {
                    item: !0,
                    container: !0,
                    xs: 1.7,
                    sx: { display: 'flex', alignItems: 'center' },
                    children: [
                      (0, N.jsx)(t.Ay, {
                        item: !0,
                        xs: !0,
                        children: (0, N.jsx)(m.A, {
                          onClick: () => B(H.length > 0),
                          variant: 'contained',
                          size: 'small',
                          disabled: W || !H.length,
                          fullWidth: !0,
                          sx: { py: 1, px: 0 },
                          children: H.length
                            ? W
                              ? '\u0110ang ph\xe2n t\xedch'
                              : 'Ph\xe2n t\xedch nhanh'
                            : 'Ch\u01b0a ch\u1ecdn h\u1ed3 s\u01a1'
                        })
                      }),
                      (0, N.jsx)(t.Ay, {
                        item: !0,
                        xs: 2,
                        children:
                          u && (0, N.jsx)(y.A, { size: 18, color: 'secondary' })
                      })
                    ]
                  })
                ]
              })
            }),
            (0, N.jsx)(g.A, {
              rows: v,
              columns: E,
              initialState: {
                pagination: { paginationModel: { pageSize: l } }
              },
              hideFooter: !0,
              sx: { height: '74vh', width: '100%' },
              checkboxSelection: !0,
              rowSelection: !0,
              onRowSelectionModelChange: (e) => {
                G(e);
              },
              loading: U || K
            }),
            (0, N.jsx)(_.A, {
              currentPage: o,
              totalPages: a,
              handlePageChange: r,
              disabled: W
            })
          ]
        });
      }
      const M = (e) => {
        var i;
        const { isEmployer: l } = (0, v.n)(),
          { data: n, isLoading: t } = (0, u.useQuery)(
            [
              'application-getList',
              null === e || void 0 === e ? void 0 : e.page,
              null === e || void 0 === e ? void 0 : e.status
            ],
            () => c.D$.get({ params: e }),
            {
              retry: 1,
              refetchOnWindowFocus: !1,
              keepPreviousData: !0,
              enabled: l
            }
          );
        return {
          totalResults:
            null === n || void 0 === n || null === (i = n.data) || void 0 === i
              ? void 0
              : i.totalResults,
          isLoading: t
        };
      };
      var Q = l(67902);
      const H = [
          { label: 'T\u1ea5t c\u1ea3', value: '' },
          { label: '\u0110\xe3 duy\u1ec7t', value: '\u0110\xe3 duy\u1ec7t' },
          { label: 'Ch\u1edd duy\u1ec7t', value: 'Ch\u1edd duy\u1ec7t' },
          { label: 'T\u1eeb ch\u1ed1i', value: 'T\u1eeb ch\u1ed1i' },
          { label: 'H\u1ebft h\u1ea1n', value: 'H\u1ebft h\u1ea1n' }
        ],
        G = () => {
          const [e, i] = (0, b.useState)({ currentPage: 1, currentTab: '' }),
            { data: l, isLoading: u } = p({
              page: e.currentPage,
              num: 9,
              status: e.currentTab
            }),
            { totalResults: c, isLoading: v } = M({ status: e.currentTab }),
            h = Math.ceil(c / 9) || 1;
          if ((console.log('rerender 1'), !u && !v))
            return (0, N.jsx)(n.A, {
              maxWidth: 'xl',
              children: (0, N.jsx)(t.Ay, {
                container: !0,
                direction: 'row',
                justifyContent: 'center',
                alignItems: 'stretch',
                spacing: 3,
                marginTop: 0,
                children: (0, N.jsx)(t.Ay, {
                  item: !0,
                  xs: 12,
                  children: (0, N.jsxs)(o.A, {
                    children: [
                      (0, N.jsx)(a.A, {
                        title: 'Danh S\xe1ch \u1ee9ng vi\xean'
                      }),
                      (0, N.jsx)(r.A, {}),
                      (0, N.jsxs)(s.A, {
                        children: [
                          (0, N.jsx)(Q.A, {
                            onChange: (e, l) => {
                              i(() => ({ currentPage: 1, currentTab: l }));
                            },
                            value: e.currentTab,
                            variant: 'scrollable',
                            scrollButtons: 'auto',
                            textColor: 'primary',
                            indicatorColor: 'primary',
                            sx: {
                              display: 'inline-flex',
                              borderBottom: 1,
                              borderColor: 'divider'
                            },
                            children: H.map((e) =>
                              (0, N.jsx)(
                                d.A,
                                { label: e.label, value: e.value },
                                e.value
                              )
                            )
                          }),
                          (0, N.jsx)(B, {
                            data: l,
                            pageSize: 9,
                            currentPage: e.currentPage,
                            totalPages: h,
                            handlePageChange: (e) => {
                              i((i) => ({ ...i, currentPage: e }));
                            }
                          })
                        ]
                      })
                    ]
                  })
                })
              })
            });
        };
    },
    95382: (e, i, l) => {
      var n = l(32392);
      i.A = void 0;
      var t = n(l(40039)),
        o = l(70579),
        a = (0, t.default)(
          (0, o.jsx)('path', {
            d: 'M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'
          }),
          'Check'
        );
      i.A = a;
    }
  }
]);
//# sourceMappingURL=703.cbaf4bf6.chunk.js.map
