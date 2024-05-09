'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [4256],
  {
    46783: (e, i, l) => {
      l.d(i, { A: () => t });
      var o = l(65043),
        s = l(16520),
        r = l(59454),
        n = l(19464),
        d = l(70579);
      function t(e) {
        const { isFollow: i } = e,
          [l, t] = (0, o.useState)(i);
        return (
          (0, o.useEffect)(() => {
            t(i);
          }, [i]),
          (0, d.jsx)(n.A, {
            onClick: (e) => {
              t((e) => !e);
            },
            sx: { display: 'flex', alignItem: 'center' },
            children: l
              ? (0, d.jsx)(s.A, {
                  sx: {
                    display: 'flex',
                    color: 'red',
                    '&:hover': { color: 'darkred' }
                  }
                })
              : (0, d.jsx)(r.A, {
                  sx: {
                    display: 'flex',
                    color: 'red',
                    '&:hover': { color: 'darkred' }
                  }
                })
          })
        );
      }
    },
    24688: (e, i, l) => {
      l.d(i, { z: () => z, g: () => S });
      var o = l(12110),
        s = l(79958),
        r = l(19464),
        n = l(85865),
        d = l(26494),
        t = l(60587),
        a = l(83462),
        v = l(26600),
        c = l(17392),
        x = l(39336),
        u = l(35316),
        h = l(74802),
        f = l(65043),
        p = l(54955),
        m = l(82907),
        y = l(36110),
        A = l(36228);
      const g = () => {
        const e = (0, m.useQueryClient)(),
          { toast: i } = (0, y.n)(),
          { mutate: l, isLoading: o } = (0, m.useMutation)(
            (e) => {
              let [i, l] = e;
              return A._U.create({ employeeId: i, isOnlineProfile: l });
            },
            {
              onSuccess: (l) => {
                200 === l.status
                  ? (e.invalidateQueries(['get-FollowEmployees']),
                    i.success({ massage: l.message }))
                  : i.error({ massage: l.message });
              },
              onError: (e) => {
                i.error({ massage: e.response.data.message });
              }
            }
          );
        return { onFollowEmployeeById: l, isLoading: o };
      };
      var j = l(46783),
        b = l(70579);
      function w(e) {
        const { employeeProfile: i, sx: l } = e,
          { employeeFollow: o } = (0, p.A)(),
          { onFollowEmployeeById: s } = g(),
          { isEmployer: n } = (0, y.n)(),
          [d, t] = (0, f.useState)(!1);
        if (
          ((0, f.useEffect)(() => {
            const e =
              null === o || void 0 === o
                ? void 0
                : o.find((e) => {
                    return (
                      (o = i),
                      !!(l = e) &&
                        (void 0 !== o.isOnlineProfile
                          ? (null === l || void 0 === l ? void 0 : l.userId) ===
                              (null === o || void 0 === o
                                ? void 0
                                : o.userId) &&
                            (null === l || void 0 === l
                              ? void 0
                              : l.isOnlineProfile) === o.isOnlineProfile
                          : (null === l || void 0 === l ? void 0 : l.userId) ===
                              (null === o || void 0 === o
                                ? void 0
                                : o.userId) &&
                            (null === l || void 0 === l
                              ? void 0
                              : l.isOnlineProfile) ===
                              (void 0 ===
                                (null === o || void 0 === o ? void 0 : o.CV)))
                    );
                    var l, o;
                  });
            console.log(e), e && t(!0);
          }, [JSON.stringify(o), JSON.stringify(i)]),
          i && n)
        )
          return (0, b.jsx)(r.A, {
            onClick: () => {
              return (
                (e = null === i || void 0 === i ? void 0 : i.userId),
                (l =
                  (null !== i && void 0 !== i && i.CV) ||
                  (void 0 !==
                    (null === i || void 0 === i ? void 0 : i.isOnlineProfile) &&
                    !(null === i || void 0 === i ? void 0 : i.isOnlineProfile))
                    ? '0'
                    : '1'),
                s([e, l]),
                void t((e) => !e)
              );
              var e, l;
            },
            sx: { display: 'flex', alignItem: 'center', ...l },
            children: (0, b.jsx)(j.A, { isFollow: d })
          });
      }
      var O = l(19193),
        k = l(63657),
        P = l(52177),
        C = l(76300),
        L = l(39423),
        W = l(58729),
        F = l(15505);
      const z = (e) => {
          let { profile: i, setSelectedProfile: l } = e;
          return (0, b.jsxs)(o.A, {
            sx: {
              border: 1,
              borderRadius: '3px',
              borderColor: '#98E4FF',
              height: '430px',
              width: '100%'
            },
            children: [
              (0, b.jsx)(s.A, {
                sx: {
                  py: 1,
                  color: '#aa720a',
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                  whiteSpace: 'normal'
                },
                title: (0, b.jsx)(b.Fragment, {
                  children: (0, b.jsxs)(r.A, {
                    sx: {
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      height: 55
                    },
                    children: [
                      (0, b.jsx)(n.A, {
                        sx: {
                          ':hover': { color: '#ce8b0e', cursor: 'pointer' },
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 2,
                          lineHeight: 1.5,
                          flex: 1
                        },
                        fontWeight: 700,
                        fontSize: 18,
                        onClick: () => {
                          l(i);
                        },
                        children:
                          null === i || void 0 === i ? void 0 : i.jobTitle
                      }),
                      (0, b.jsx)(w, { employeeProfile: i })
                    ]
                  })
                })
              }),
              (0, b.jsxs)(d.A, {
                sx: { px: 2, py: 1 },
                children: [
                  (0, b.jsxs)(r.A, {
                    display: 'flex',
                    gap: 2,
                    mb: 2,
                    children: [
                      (0, b.jsx)(t.A, {
                        src: i.avatar,
                        sx: {
                          width: 100,
                          height: 100,
                          borderColor: '#98E4FF',
                          borderRadius: '5px',
                          objectFit: 'cover'
                        }
                      }),
                      (0, b.jsxs)(r.A, {
                        sx: { display: 'flex', flexDirection: 'column', pt: 2 },
                        children: [
                          (0, b.jsx)(n.A, {
                            sx: {
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 2,
                              height: 52
                            },
                            fontWeight: 700,
                            fontSize: 15,
                            children:
                              null === i || void 0 === i ? void 0 : i.name
                          }),
                          (0, b.jsxs)(r.A, {
                            display: 'flex',
                            children: [
                              (0, b.jsx)(F.A, {
                                sx: { maxHeight: 20, color: 'grey.700' }
                              }),
                              (0, b.jsxs)(n.A, {
                                sx: {
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  display: '-webkit-box',
                                  WebkitBoxOrient: 'vertical',
                                  WebkitLineClamp: 1,
                                  fontWeight: 700
                                },
                                children: [
                                  null === i || void 0 === i
                                    ? void 0
                                    : i.desiredSalary,
                                  ' Tri\u1ec7u'
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  (0, b.jsxs)(r.A, {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    children: [
                      (0, b.jsxs)(r.A, {
                        display: 'flex',
                        children: [
                          (0, b.jsx)(k.A, {
                            sx: { maxHeight: 20, color: 'grey.700' }
                          }),
                          (0, b.jsx)(n.A, {
                            sx: {
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 1
                            },
                            children:
                              null === i || void 0 === i ? void 0 : i.profession
                          })
                        ]
                      }),
                      (0, b.jsxs)(r.A, {
                        display: 'flex',
                        children: [
                          (0, b.jsx)(P.A, {
                            sx: { maxHeight: 20, color: 'grey.700' }
                          }),
                          (0, b.jsx)(n.A, {
                            sx: {
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 1
                            },
                            children:
                              null === i || void 0 === i
                                ? void 0
                                : i.currentPosition
                          })
                        ]
                      }),
                      (0, b.jsxs)(r.A, {
                        display: 'flex',
                        children: [
                          (0, b.jsx)(L.A, {
                            sx: { maxHeight: 18, color: 'grey.700' }
                          }),
                          (0, b.jsxs)(n.A, {
                            sx: {
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 1
                            },
                            children: [
                              'Kinh nghi\u1ec7m: ',
                              null === i || void 0 === i ? void 0 : i.experience
                            ]
                          })
                        ]
                      }),
                      (0, b.jsxs)(r.A, {
                        display: 'flex',
                        children: [
                          (0, b.jsx)(C.A, {
                            sx: { maxHeight: 18, color: 'grey.700' }
                          }),
                          (0, b.jsxs)(n.A, {
                            sx: {
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 1
                            },
                            children: [
                              'Tr\xecnh \u0111\u1ed9: ',
                              null === i || void 0 === i ? void 0 : i.degree
                            ]
                          })
                        ]
                      }),
                      (0, b.jsxs)(r.A, {
                        display: 'flex',
                        children: [
                          (0, b.jsx)(W.A, {
                            sx: { maxHeight: 18, color: 'grey.700' }
                          }),
                          (0, b.jsxs)(n.A, {
                            sx: {
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 2
                            },
                            children: [
                              'K\u1ef9 n\u0103ng: ',
                              null === i || void 0 === i ? void 0 : i.skills
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
        },
        S = (e) => {
          let { selectedProfile: i, setSelectedProfile: l } = e;
          return (0, b.jsxs)(a.A, {
            open: null !== i,
            fullWidth: !0,
            maxWidth: 'md',
            children: [
              (0, b.jsxs)(v.A, {
                sx: {
                  textAlign: 'center',
                  fontWeight: 700,
                  fontSize: '1.3rem'
                },
                children: [
                  'H\u1ed3 s\u01a1',
                  (0, b.jsx)(c.A, {
                    'aria-label': 'close',
                    onClick: () => {
                      l(null);
                    },
                    sx: {
                      position: 'absolute',
                      right: 14,
                      top: 14,
                      color: (e) => e.palette.grey[500]
                    },
                    children: (0, b.jsx)(h.A, {})
                  })
                ]
              }),
              (0, b.jsx)(x.A, { sx: { bgcolor: '#B6FFFA', height: 2 } }),
              (0, b.jsx)(u.A, {
                children: (0, b.jsx)(O.A, {
                  user: i,
                  bgcolor: 'none',
                  showTitle: !1
                })
              })
            ]
          });
        };
    },
    36228: (e, i, l) => {
      l.d(i, {
        G9: () => s,
        OE: () => d,
        _U: () => n,
        eZ: () => t,
        wF: () => r
      });
      var o = l(22626);
      const s = new o.A('employer/employees'),
        r =
          (new o.A('employer/employees/totalResults'),
          new o.A('employer/employees/sortbykeywords')),
        n = new o.A('employer/save-employee'),
        d = new o.A('user/online-profile'),
        t = new o.A('user/attached-document');
    },
    54955: (e, i, l) => {
      l.d(i, { A: () => n });
      var o = l(82907),
        s = l(36228),
        r = l(36110);
      const n = (e) => {
        const { isEmployer: i } = (0, r.n)(),
          {
            data: l,
            isLoading: n,
            refetch: d
          } = (0, o.useQuery)(
            [
              'get-FollowEmployees',
              null === e || void 0 === e ? void 0 : e.page
            ],
            () => s._U.get({ params: e }),
            {
              keepPreviousData: !0,
              retry: 1,
              refetchOnWindowFocus: !1,
              enabled: i
            }
          );
        return {
          employeeFollow: null === l || void 0 === l ? void 0 : l.data,
          isLoading: n,
          refetch: d
        };
      };
    },
    64256: (e, i, l) => {
      l.r(i), l.d(i, { default: () => m });
      var o = l(19252),
        s = l(85865),
        r = l(68903),
        n = l(65043),
        d = l(62237),
        t = l(24688),
        a = l(82907),
        v = l(36228),
        c = l(36110);
      const x = (e) => {
          const { isEmployer: i } = (0, c.n)(),
            {
              data: l,
              isLoading: o,
              refetch: s
            } = (0, a.useQuery)(
              [
                'get-FollowOnlineProfile',
                null === e || void 0 === e ? void 0 : e.userId,
                null === e || void 0 === e ? void 0 : e.isOnlineProfile
              ],
              () => v.OE.get({ params: e }),
              {
                keepPreviousData: !0,
                retry: 1,
                refetchOnWindowFocus: !1,
                enabled:
                  i &&
                  void 0 !== (null === e || void 0 === e ? void 0 : e.userId) &&
                  (null === e || void 0 === e ? void 0 : e.isOnlineProfile)
              }
            );
          return (
            console.log(
              i &&
                void 0 !== (null === e || void 0 === e ? void 0 : e.userId) &&
                (null === e || void 0 === e ? void 0 : e.isOnlineProfile)
            ),
            {
              onlineProfile: null === l || void 0 === l ? void 0 : l.data,
              isLoading: o,
              refetch: s
            }
          );
        },
        u = (e) => {
          const { isEmployer: i } = (0, c.n)(),
            {
              data: l,
              isLoading: o,
              refetch: s
            } = (0, a.useQuery)(
              [
                'get-FollowDocumentProfile',
                null === e || void 0 === e ? void 0 : e.userId,
                null === e || void 0 === e ? void 0 : e.isOnlineProfile
              ],
              () => v.eZ.get({ params: e }),
              {
                keepPreviousData: !0,
                retry: 1,
                refetchOnWindowFocus: !1,
                enabled:
                  i &&
                  void 0 !== (null === e || void 0 === e ? void 0 : e.userId) &&
                  !1 ===
                    (null === e || void 0 === e ? void 0 : e.isOnlineProfile)
              }
            );
          return (
            console.log(
              i &&
                void 0 !== (null === e || void 0 === e ? void 0 : e.userId) &&
                !1 === (null === e || void 0 === e ? void 0 : e.isOnlineProfile)
            ),
            {
              documentProfile: null === l || void 0 === l ? void 0 : l.data,
              isLoading: o,
              refetch: s
            }
          );
        };
      var h = l(70579);
      const f = function (e) {
        let { profile: i } = e;
        const [l, o] = (0, n.useState)(null),
          [s, r] = (0, n.useState)(null),
          { onlineProfile: d } = x({
            userId: null === l || void 0 === l ? void 0 : l.userId,
            isOnlineProfile:
              null === l || void 0 === l ? void 0 : l.isOnlineProfile
          }),
          { documentProfile: a } = u({
            userId: null === l || void 0 === l ? void 0 : l.userId,
            isOnlineProfile:
              null === l || void 0 === l ? void 0 : l.isOnlineProfile
          }),
          v = { ...i, ...i.file };
        return (
          delete v.file,
          (0, n.useEffect)(() => {
            if (!d) return;
            const {
              name: e,
              email: i,
              dob: l,
              phone: o,
              sex: s,
              isMarried: n,
              avatar: t,
              address: a,
              ...v
            } = d;
            r({
              personal_information: {
                name: e,
                email: i,
                dob: l,
                phone: o,
                sex: s,
                isMarried: n,
                avatar: t,
                address: a
              },
              online_profile: v
            });
          }, [JSON.stringify(d)]),
          (0, n.useEffect)(() => {
            if (!a) return;
            const {
              name: e,
              email: i,
              dob: l,
              phone: o,
              sex: s,
              isMarried: n,
              avatar: d,
              address: t,
              ...v
            } = a;
            r({
              personal_information: {
                name: e,
                email: i,
                dob: l,
                phone: o,
                sex: s,
                isMarried: n,
                avatar: d,
                address: t
              },
              attached_document: v
            });
          }, [JSON.stringify(a)]),
          (0, h.jsxs)(h.Fragment, {
            children: [
              (0, h.jsx)(t.z, { profile: v, setSelectedProfile: o }),
              (0, h.jsx)(t.g, {
                selectedProfile: s,
                setSelectedProfile: () => {
                  o(null), r(null);
                }
              })
            ]
          })
        );
      };
      var p = l(54955);
      function m() {
        const { employeeFollow: e, isLoading: i } = (0, p.A)(),
          [l, t] = (0, n.useState)(e);
        return (
          (0, n.useEffect)(() => {
            const i = null === e || void 0 === e ? void 0 : e.map((e) => ({}));
            t(() => i);
          }, [e]),
          i
            ? (0, h.jsx)(d.A, {})
            : (0, h.jsxs)(o.A, {
                sx: { p: 3 },
                children: [
                  (0, h.jsx)(s.A, {
                    mb: 2,
                    fontSize: 22,
                    fontWeight: 700,
                    children: 'H\u1ed3 s\u01a1 \u0111\xe3 l\u01b0u'
                  }),
                  null !== e && void 0 !== e && e.length
                    ? (0, h.jsx)(r.Ay, {
                        container: !0,
                        mb: 3,
                        spacing: 2,
                        children:
                          null === e || void 0 === e
                            ? void 0
                            : e.map((e, i) =>
                                (0, h.jsx)(
                                  r.Ay,
                                  {
                                    item: !0,
                                    xs: 12,
                                    sm: 6,
                                    md: 3,
                                    children: (0, h.jsx)(f, { profile: e })
                                  },
                                  i
                                )
                              )
                      })
                    : (0, h.jsx)(o.A, {
                        sx: {
                          height: '70vh',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        },
                        children: (0, h.jsx)(s.A, {
                          fontSize: 18,
                          fontStyle: 'italic',
                          color: '#9999',
                          children:
                            'B\u1ea1n ch\u01b0a theo d\xf5i h\u1ed3 s\u01a1 n\xe0o c\u1ea3'
                        })
                      })
                ]
              })
        );
      }
    },
    39423: (e, i, l) => {
      var o = l(24994);
      i.A = void 0;
      var s = o(l(40039)),
        r = l(70579),
        n = (0, s.default)(
          [
            (0, r.jsx)(
              'path',
              {
                d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
              },
              '0'
            ),
            (0, r.jsx)(
              'path',
              { d: 'M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z' },
              '1'
            )
          ],
          'AccessTime'
        );
      i.A = n;
    },
    59454: (e, i, l) => {
      var o = l(24994);
      i.A = void 0;
      var s = o(l(40039)),
        r = l(70579),
        n = (0, s.default)(
          (0, r.jsx)('path', {
            d: 'M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z'
          }),
          'FavoriteBorder'
        );
      i.A = n;
    },
    58729: (e, i, l) => {
      var o = l(24994);
      i.A = void 0;
      var s = o(l(40039)),
        r = l(70579),
        n = (0, s.default)(
          (0, r.jsx)('path', {
            d: 'M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'
          }),
          'Grade'
        );
      i.A = n;
    },
    15505: (e, i, l) => {
      var o = l(24994);
      i.A = void 0;
      var s = o(l(40039)),
        r = l(70579),
        n = (0, s.default)(
          (0, r.jsx)('path', {
            d: 'M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z'
          }),
          'LocalAtm'
        );
      i.A = n;
    },
    52177: (e, i, l) => {
      var o = l(24994);
      i.A = void 0;
      var s = o(l(40039)),
        r = l(70579),
        n = (0, s.default)(
          (0, r.jsx)('path', {
            d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'
          }),
          'Person'
        );
      i.A = n;
    },
    76300: (e, i, l) => {
      var o = l(24994);
      i.A = void 0;
      var s = o(l(40039)),
        r = l(70579),
        n = (0, s.default)(
          (0, r.jsx)('path', {
            d: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z'
          }),
          'School'
        );
      i.A = n;
    },
    63657: (e, i, l) => {
      var o = l(24994);
      i.A = void 0;
      var s = o(l(40039)),
        r = l(70579),
        n = (0, s.default)(
          [
            (0, r.jsx)(
              'path',
              {
                d: 'M18 11c1.49 0 2.87.47 4 1.26V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h7.68c-.43-.91-.68-1.92-.68-3 0-3.87 3.13-7 7-7zm-8-7h4v2h-4V4z'
              },
              '0'
            ),
            (0, r.jsx)(
              'path',
              {
                d: 'M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85-.7.71z'
              },
              '1'
            )
          ],
          'WorkHistory'
        );
      i.A = n;
    }
  }
]);
//# sourceMappingURL=4256.e4f82fcf.chunk.js.map
