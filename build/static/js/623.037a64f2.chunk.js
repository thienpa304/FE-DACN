'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [623],
  {
    80881: (e, n, s) => {
      s.d(n, { A: () => o });
      var i = s(19464),
        t = s(11906),
        l = s(70579);
      function o(e) {
        const { handleSubmit: n, handleCancel: s } = e;
        return (0, l.jsxs)(i.A, {
          display: 'flex',
          justifyContent: 'center',
          sx: { gap: 3 },
          children: [
            (0, l.jsx)(t.A, {
              onClick: s,
              variant: 'outlined',
              color: 'secondary',
              sx: { width: 120 },
              children: 'H\u1ee7y'
            }),
            (0, l.jsx)(t.A, {
              color: 'success',
              onClick: n,
              variant: 'contained',
              sx: { width: 120 },
              children: 'X\xe1c nh\u1eadn'
            })
          ]
        });
      }
    },
    67002: (e, n, s) => {
      s.d(n, { A: () => c });
      var i = s(89302),
        t = s(898),
        l = s(58390),
        o = s(60446),
        r = s.n(o),
        a = s(70579);
      function c(e) {
        return (0, a.jsx)(l.$, {
          dateAdapter: i.R,
          children: (0, a.jsx)(t.l, {
            format: 'DD/MM/YYYY',
            ...e,
            value: e.value ? r()(e.value) : null,
            slotProps: { textField: { size: 'small', fullWidth: !0 } }
          })
        });
      }
    },
    63656: (e, n, s) => {
      s.d(n, { A: () => r });
      s(65043);
      var i = s(11906),
        t = s(85865),
        l = s(36134),
        o = s(70579);
      function r(e) {
        return (0, o.jsx)(i.A, {
          ...e,
          variant: 'outlined',
          color: 'secondary',
          startIcon: (0, o.jsx)(l.A, { fontSize: 'large' }),
          sx: { borderRadius: 5 },
          children: (0, o.jsx)(t.A, {
            textTransform: 'none',
            children: 'Ch\u1ec9nh s\u1eeda'
          })
        });
      }
    },
    46783: (e, n, s) => {
      s.d(n, { A: () => a });
      var i = s(65043),
        t = s(16520),
        l = s(59454),
        o = s(19464),
        r = s(70579);
      function a(e) {
        const { isFollow: n } = e,
          [s, a] = (0, i.useState)(n);
        return (
          (0, i.useEffect)(() => {
            a(n);
          }, [n]),
          (0, r.jsx)(o.A, {
            onClick: (e) => {
              a((e) => !e);
            },
            sx: { display: 'flex', alignItem: 'center' },
            children: s
              ? (0, r.jsx)(t.A, {
                  sx: {
                    display: 'flex',
                    color: 'red',
                    '&:hover': { color: 'darkred' }
                  }
                })
              : (0, r.jsx)(l.A, {
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
    30604: (e, n, s) => {
      s.d(n, { A: () => a });
      var i = s(65043),
        t = s(51318),
        l = s(70579);
      const o = { textDecoration: 'none', color: '#551a8b' },
        r = (e) => {
          e.currentTarget.style.color = '#FF7D55';
        },
        a = (0, i.forwardRef)((e, n) => {
          const { to: s, children: i, sx: a } = e;
          return (0, l.jsx)(t.N_, {
            ...e,
            to: s,
            style: { ...o, ...a },
            onMouseEnter: r,
            onMouseLeave: (e) =>
              ((e, n) => {
                e.currentTarget.style.color = n || '#551a8b';
              })(e, null === a || void 0 === a ? void 0 : a.color),
            children: i
          });
        });
    },
    95851: (e, n, s) => {
      s.d(n, { A: () => l });
      var i = s(67784),
        t = s(70579);
      const l = (e) => (0, t.jsx)(i.A, { size: 'small', fullWidth: !0, ...e });
    },
    65099: (e, n, s) => {
      s.d(n, { BZ: () => l, XS: () => i, YP: () => o, tR: () => t });
      const i = {
          companyAvatar:
            'https://th.bing.com/th/id/OIP.EK1rvrib-MWNflZRM2XiDQHaH_?pid=ImgDet&w=183&h=197&c=7&dpr=1.3',
          companyCover:
            'https://png.pngtree.com/background/20210706/original/pngtree-business-background-white-collar-jobs-picture-image_216619.jpg'
        },
        t = {
          acceptTypes: ['image/jpeg', 'image/png', 'image/gif'],
          acceptSize: 1048576
        },
        l = { acceptTypes: ['application/pdf'], acceptSize: 2097152 },
        o = {
          acceptTypes: ['image/jpeg', 'image/png', 'image/gif'],
          acceptSize: 4194304
        };
    },
    72974: (e, n, s) => {
      s.d(n, { A: () => c });
      var i = s(82907),
        t = s(52105),
        l = s(65043),
        o = s(75614),
        r = s(36110),
        a = s(32109);
      const c = () => {
        const { isEmployee: e } = (0, r.n)(),
          { setProfile: n } = (0, a.A)(),
          s = Boolean((0, o.getAccessToken)()),
          {
            data: c,
            isLoading: d,
            isSuccess: x,
            refetch: h
          } = (0, i.useQuery)(['get-AttachedDocument'], t.hT.get, {
            retry: (e, n) => 400 !== n.response.status && e < 2,
            refetchOnWindowFocus: !1,
            enabled: s && e
          });
        return (
          (0, l.useEffect)(() => {
            c && n(c.data);
          }, [x]),
          {
            attachedDocument: null === c || void 0 === c ? void 0 : c.data,
            isLoading: d,
            refetch: h
          }
        );
      };
    },
    54262: (e, n, s) => {
      s.d(n, { A: () => c });
      var i = s(82907),
        t = s(52105),
        l = s(65043),
        o = s(75614),
        r = s(36110),
        a = s(35644);
      const c = () => {
        const { isEmployee: e } = (0, r.n)(),
          { setProfile: n } = (0, a.A)(),
          s = Boolean((0, o.getAccessToken)()),
          {
            data: c,
            isLoading: d,
            isSuccess: x,
            refetch: h
          } = (0, i.useQuery)(['get-OnlineProfile'], t.w0.get, {
            retry: (e, n) => 400 !== n.response.status && e < 2,
            refetchOnWindowFocus: !1,
            enabled: s && e
          });
        return (
          (0, l.useEffect)(() => {
            c && x && n(null === c || void 0 === c ? void 0 : c.data);
          }, [x]),
          {
            onlineProfile: null === c || void 0 === c ? void 0 : c.data,
            isLoading: d,
            refetch: h
          }
        );
      };
    },
    21430: (e, n, s) => {
      s.d(n, { A: () => h });
      var i = s(19464),
        t = s(85865),
        l = s(94074),
        o = s(6897),
        r = s(51726),
        a = s(54367),
        c = s(30604),
        d = s(70579);
      const x = (e) => [
        {
          label: 'T\xean c\xf4ng ty',
          value: null === e || void 0 === e ? void 0 : e.companyName
        },
        {
          label: '\u0110\u1ecba ch\u1ec9 c\xf4ng ty',
          value: null === e || void 0 === e ? void 0 : e.companyLocation
        },
        {
          label: 'L\u0129nh v\u1ef1c',
          value: null === e || void 0 === e ? void 0 : e.careerField
        },
        {
          label: 'Gi\u1edbi thi\u1ec7u doanh nghi\u1ec7p',
          value: null === e || void 0 === e ? void 0 : e.description
        }
      ];
      function h(e) {
        var n;
        const { sx: s, company: h } = e;
        return (0, d.jsxs)(l.A, {
          sx: { px: 5, ...s },
          children: [
            (0, d.jsxs)(i.A, {
              display: 'flex',
              justifyContent: 'space-between',
              children: [
                (0, d.jsxs)(i.A, {
                  display: 'flex',
                  children: [
                    (0, d.jsx)(r.A, { color: 'primary', sx: { fontSize: 56 } }),
                    (0, d.jsx)(t.A, {
                      fontWeight: 700,
                      fontSize: 22,
                      lineHeight: 3,
                      children: 'Th\xf4ng tin c\xf4ng ty'
                    })
                  ]
                }),
                (0, d.jsx)(c.A, {
                  to: '/company/'
                    .concat(
                      (0, a.O)(
                        null === h || void 0 === h ? void 0 : h.companyName
                      ),
                      '?id='
                    )
                    .concat(
                      btoa(null === h || void 0 === h ? void 0 : h.userId)
                    ),
                  sx: {
                    textDecoration: 'none',
                    alignItems: 'center',
                    alignContent: 'center'
                  },
                  children: 'Xem trang c\xf4ng ty'
                })
              ]
            }),
            null === (n = x(h)) || void 0 === n
              ? void 0
              : n.map((e, n) => (0, d.jsx)(o.F_, { item: e }, n))
          ]
        });
      }
    },
    55517: (e, n, s) => {
      s.d(n, { A: () => h });
      var i = s(65043),
        t = s(2384),
        l = s(19464),
        o = s(82907),
        r = s(36110),
        a = s(53679);
      const c = () => {
        const e = (0, o.useQueryClient)(),
          { toast: n } = (0, r.n)(),
          { mutate: s, isLoading: i } = (0, o.useMutation)(
            (e) => {
              let [n] = e;
              return a.Ew.create({ jobPosting: n });
            },
            {
              onSuccess: (s) => {
                200 === s.status
                  ? (e.invalidateQueries(['get-FollowJobs']),
                    n.success({ massage: s.message }))
                  : n.error({ massage: s.message });
              },
              onError: (e) => {
                n.error({ massage: e.response.data.message });
              }
            }
          );
        return { onFollowJobById: s, isLoading: i };
      };
      var d = s(46783),
        x = s(70579);
      function h(e) {
        const { job: n, sx: s } = e,
          { jobFollow: o } = (0, t.A)(),
          { onFollowJobById: a } = c(),
          { isEmployee: h } = (0, r.n)(),
          [u, m] = (0, i.useState)(!1);
        if (
          ((0, i.useEffect)(() => {
            (null === o || void 0 === o
              ? void 0
              : o.find(
                  (e) =>
                    e.postId ===
                    (null === n || void 0 === n ? void 0 : n.postId)
                )) && m(!0);
          }, [o, n]),
          n && h)
        )
          return (0, x.jsx)(l.A, {
            onClick: () => {
              return (
                (e = null === n || void 0 === n ? void 0 : n.postId),
                a([e]),
                void m((e) => !e)
              );
              var e;
            },
            sx: { display: 'flex', alignItem: 'center', ...s },
            children: (0, x.jsx)(d.A, { isFollow: u })
          });
      }
    },
    2384: (e, n, s) => {
      s.d(n, { A: () => o });
      var i = s(82907),
        t = s(53679),
        l = s(36110);
      const o = (e) => {
        var n;
        const { isEmployee: s } = (0, l.n)(),
          {
            data: o,
            isLoading: r,
            refetch: a
          } = (0, i.useQuery)(
            ['get-FollowJobs', null === e || void 0 === e ? void 0 : e.page],
            () => t.Ew.get({ params: e }),
            {
              keepPreviousData: !0,
              retry: 1,
              refetchOnWindowFocus: !1,
              enabled: s
            }
          );
        return {
          jobFollow:
            null === o || void 0 === o || null === (n = o.data) || void 0 === n
              ? void 0
              : n.jobs,
          isLoading: r,
          refetch: a
        };
      };
    },
    70737: (e, n, s) => {
      s.d(n, { A: () => o });
      var i = s(82907),
        t = s(36110),
        l = s(15001);
      const o = () => {
        const e = (0, i.useQueryClient)(),
          { toast: n } = (0, t.n)(),
          s = l.OY.create,
          { mutate: o, isLoading: r } = (0, i.useMutation)(s, {
            onSuccess: (s) => {
              200 === s.status
                ? (e.invalidateQueries('get-Profile'),
                  n.success({ massage: s.message }))
                : n.error({ massage: s.message });
            },
            onError: (e) => {
              n.error({ massage: e.response.data.message });
            }
          });
        return { onSaveData: o, isLoading: r };
      };
    },
    6897: (e, n, s) => {
      s.d(n, { F_: () => z, Ay: () => O });
      var i = s(65043),
        t = s(34535),
        l = s(68903),
        o = s(85865),
        r = s(11906),
        a = s(19252),
        c = s(19464),
        d = s(83462),
        x = s(26600),
        h = s(35316),
        u = s(24858),
        m = s(67002),
        A = s(33173),
        p = s(49768),
        j = s(17913),
        y = s(60446),
        g = s.n(y),
        f = s(70737),
        v = s(82907),
        b = s(36110),
        S = s(15001);
      const C = () => {
        const e = (0, v.useQueryClient)(),
          { toast: n } = (0, b.n)(),
          s = S.ex.create,
          { mutate: i, isLoading: t } = (0, v.useMutation)(s, {
            onSuccess: (s) => {
              200 === s.status
                ? (e.invalidateQueries('get-Company'),
                  n.success({ massage: s.message }))
                : n.error({ massage: s.message });
            },
            onError: (e) => {
              n.error({ massage: e.response.data.message });
            }
          });
        return { onSaveData: i, isLoading: t };
      };
      var I = s(95851),
        k = s(25650),
        w = s(80881),
        _ = s(65073),
        D = s(24524),
        W = s(70579);
      function E(e) {
        var n;
        const { isEmployee: s } = (0, b.n)(),
          { close: i, user: t } = e,
          { onSaveData: o } = (0, f.A)(),
          {
            control: r,
            handleSubmit: a,
            formState: { errors: d }
          } = (0, u.mN)({
            defaultValues: {
              ...t,
              dob: (0, k.vd)(t.dob, 'DD-MM-YYYY', 'DD-MM-YYYY'),
              sex:
                null === (n = j.im.find((e) => e.label === t.sex)) ||
                void 0 === n
                  ? void 0
                  : n.value,
              isMarried: t.isMarried
                ? '\u0110\xe3 k\u1ebft h\xf4n'
                : '\u0110\u1ed9c th\xe2n'
            }
          });
        return (0, W.jsxs)(c.A, {
          sx: { p: 3 },
          children: [
            (0, W.jsxs)(l.Ay, {
              container: !0,
              spacing: 3,
              mb: 4,
              children: [
                (0, W.jsx)(l.Ay, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  children: (0, W.jsx)(A.A, {
                    element: (0, W.jsx)(I.A, {}),
                    control: r,
                    errors: d,
                    fullWidth: !0,
                    id: 'name',
                    label: 'H\u1ecd v\xe0 t\xean',
                    name: 'name'
                  })
                }),
                (0, W.jsx)(l.Ay, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  children: (0, W.jsx)(A.A, {
                    element: (0, W.jsx)(I.A, {}),
                    control: r,
                    errors: d,
                    disabled: !0,
                    fullWidth: !0,
                    id: 'email',
                    label: 'Email',
                    name: 'email'
                  })
                }),
                (0, W.jsx)(l.Ay, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: (0, W.jsx)(A.A, {
                    element: (0, W.jsx)(I.A, {}),
                    control: r,
                    errors: d,
                    fullWidth: !0,
                    id: 'phone',
                    label: 'S\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
                    name: 'phone',
                    pattern: 'phone'
                  })
                }),
                (0, W.jsx)(l.Ay, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: (0, W.jsx)(A.A, {
                    element: (0, W.jsx)(I.A, {}),
                    control: r,
                    errors: d,
                    fullWidth: !0,
                    id: 'address',
                    label: '\u0110\u1ecba ch\u1ec9',
                    name: 'address'
                  })
                }),
                (0, W.jsx)(l.Ay, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  children: (0, W.jsx)(A.A, {
                    element: (0, W.jsx)(m.A, { maxDate: g()() }),
                    control: r,
                    errors: d,
                    fullWidth: !0,
                    id: 'dob',
                    label: 'Ng\xe0y sinh',
                    name: 'dob',
                    required: !0
                  })
                }),
                (0, W.jsx)(l.Ay, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  children: (0, W.jsx)(A.A, {
                    element: (0, W.jsx)(p.A, {}),
                    options: j.im,
                    control: r,
                    errors: d,
                    fullWidth: !0,
                    id: 'sex',
                    label: 'Gi\u1edbi t\xednh',
                    name: 'sex'
                  })
                }),
                s &&
                  (0, W.jsx)(l.Ay, {
                    item: !0,
                    xs: 12,
                    sm: 6,
                    children: (0, W.jsx)(A.A, {
                      element: (0, W.jsx)(p.A, {}),
                      options: j.Fg,
                      control: r,
                      errors: d,
                      fullWidth: !0,
                      id: 'isMarried',
                      label: 'T\xecnh tr\u1ea1ng h\xf4n nh\xe2n',
                      name: 'isMarried'
                    })
                  })
              ]
            }),
            (0, W.jsx)(w.A, {
              handleSubmit: a(async (e) => {
                const n = (0, k._g)(e.dob),
                  s = '\u0110\xe3 k\u1ebft h\xf4n' === e.isMarried ? '1' : '0',
                  t = { ...e, dob: n, isMarried: s };
                o(t), (0, _.gV)(t), i();
              }),
              handleCancel: () => i()
            })
          ]
        });
      }
      function F(e) {
        const { close: n, user: s } = e,
          { onSaveData: i } = C(),
          {
            control: t,
            handleSubmit: o,
            formState: { errors: r }
          } = (0, u.mN)({ defaultValues: { ...s } });
        return (0, W.jsxs)(c.A, {
          sx: { p: 3 },
          children: [
            (0, W.jsxs)(l.Ay, {
              container: !0,
              spacing: 3,
              mb: 4,
              children: [
                (0, W.jsx)(l.Ay, {
                  item: !0,
                  xs: 12,
                  children: (0, W.jsx)(A.A, {
                    element: (0, W.jsx)(I.A, {}),
                    control: t,
                    errors: r,
                    fullWidth: !0,
                    id: 'companyName',
                    label: 'T\xean c\xf4ng ty',
                    name: 'companyName',
                    multiline: !0,
                    required: !0
                  })
                }),
                (0, W.jsx)(l.Ay, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  children: (0, W.jsx)(A.A, {
                    element: (0, W.jsx)(I.A, {}),
                    control: t,
                    errors: r,
                    fullWidth: !0,
                    id: 'taxCode',
                    label: 'M\xe3 s\u1ed1 thu\u1ebf',
                    name: 'taxCode',
                    required: !0
                  })
                }),
                (0, W.jsx)(l.Ay, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  children: (0, W.jsx)(A.A, {
                    element: (0, W.jsx)(I.A, {}),
                    control: t,
                    errors: r,
                    fullWidth: !0,
                    id: 'companyLocation',
                    label: '\u0110\u1ecba ch\u1ec9',
                    name: 'companyLocation',
                    required: !0
                  })
                }),
                (0, W.jsx)(l.Ay, {
                  item: !0,
                  xs: 12,
                  children: (0, W.jsx)(A.A, {
                    element: (0, W.jsx)(D.A, {
                      size: 'small',
                      freeSolo: !0,
                      options: j.Pd,
                      autoComplete: !0,
                      autoSelect: !0,
                      autoHighlight: !0,
                      multiple: !1,
                      defaultValue:
                        null === s || void 0 === s ? void 0 : s.careerField
                    }),
                    control: t,
                    errors: r,
                    fullWidth: !0,
                    name: 'careerField',
                    label: 'L\u0129nh v\u1ef1c'
                  })
                }),
                (0, W.jsx)(l.Ay, {
                  item: !0,
                  xs: 12,
                  children: (0, W.jsx)(A.A, {
                    element: (0, W.jsx)(I.A, {}),
                    control: t,
                    errors: r,
                    fullWidth: !0,
                    multiline: !0,
                    maxRows: 6,
                    minRows: 3,
                    id: 'description',
                    label: 'M\xf4 t\u1ea3 c\xf4ng ty',
                    name: 'description',
                    required: !0
                  })
                })
              ]
            }),
            (0, W.jsx)(w.A, {
              handleSubmit: o((e) => {
                console.log(e.careerField), i(e), n();
              }),
              handleCancel: () => n()
            })
          ]
        });
      }
      var T = s(63656);
      const M = (0, t.Ay)(l.Ay)((e) => {
          let { theme: n } = e;
          return {
            fontFamily: n.typography.fontFamily,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            minHeight: 50
          };
        }),
        P = (0, t.Ay)(l.Ay)((e) => {
          let { theme: n } = e;
          return {
            fontFamily: n.typography.fontFamily,
            display: 'flex',
            alignItems: 'center'
          };
        }),
        z = (e) => {
          const { item: n } = e,
            [s, t] = (0, i.useState)(!1);
          return (0, W.jsxs)(l.Ay, {
            container: !0,
            sx: { borderTop: 1, borderColor: 'grey.300' },
            children: [
              'Gi\u1edbi thi\u1ec7u doanh nghi\u1ec7p' !== n.label &&
                (0, W.jsxs)(W.Fragment, {
                  children: [
                    (0, W.jsx)(M, {
                      item: !0,
                      xs: 6,
                      md: 4,
                      children: n.label
                    }),
                    (0, W.jsx)(P, {
                      item: !0,
                      xs: 6,
                      md: 8,
                      children: (0, W.jsx)(o.A, {
                        lineHeight: 2,
                        children: n.value
                      })
                    })
                  ]
                }),
              'Gi\u1edbi thi\u1ec7u doanh nghi\u1ec7p' === n.label &&
                (0, W.jsxs)(W.Fragment, {
                  children: [
                    (0, W.jsx)(M, { item: !0, xs: 12, children: n.label }),
                    (0, W.jsx)(P, {
                      item: !0,
                      xs: 12,
                      children: (0, W.jsx)(o.A, {
                        lineHeight: 2,
                        sx: {
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: s ? 100 : 3,
                          WebkitBoxOrient: 'vertical'
                        },
                        children: n.value
                      })
                    }),
                    (0, W.jsx)(r.A, {
                      onClick: () => {
                        t((e) => !e);
                      },
                      sx: { mx: 'auto' },
                      color: 'secondary',
                      children: s ? 'Thu g\u1ecdn' : '\u0110\u1ecdc th\xeam'
                    })
                  ]
                })
            ]
          });
        };
      function O(e) {
        const { user: n, data: s, title: t, editIcon: l, openForm: r } = e,
          [u, m] = (0, i.useState)(!1),
          A = () => {
            m(!1);
          },
          p =
            'User' === r
              ? (0, W.jsx)(E, { close: A, user: n })
              : (0, W.jsx)(F, { close: A, user: n });
        return (0, W.jsxs)(a.A, {
          sx: { paddingX: 2 },
          children: [
            (0, W.jsxs)(c.A, {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              children: [
                (0, W.jsxs)(c.A, {
                  display: 'flex',
                  children: [
                    l,
                    (0, W.jsx)(c.A, {
                      children: (0, W.jsx)(o.A, {
                        fontWeight: 700,
                        fontSize: 22,
                        lineHeight: 3,
                        children: t
                      })
                    })
                  ]
                }),
                (0, W.jsx)(T.A, { onClick: () => m(!0) }),
                (0, W.jsxs)(d.A, {
                  open: u,
                  fullWidth: !0,
                  maxWidth: 'md',
                  children: [
                    (0, W.jsx)(x.A, {
                      sx: {
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: '1.3rem'
                      },
                      children: t
                    }),
                    (0, W.jsx)(h.A, { children: p })
                  ]
                })
              ]
            }),
            (0, W.jsx)(c.A, {
              sx: { mt: 1 },
              children: s.map((e, n) => (0, W.jsx)(z, { item: e }, n))
            })
          ]
        });
      }
    },
    56623: (e, n, s) => {
      s.r(n), s.d(n, { default: () => Ye });
      var i = s(19252),
        t = s(65043),
        l = s(81045),
        o = s(68903),
        r = s(19464),
        a = s(11906),
        c = s(97707),
        d = s(55134),
        x = s(75678),
        h = s(41302),
        u = s(19974),
        m = s(34535),
        A = s(83462),
        p = s(26600),
        j = s(35316),
        y = s(85865),
        g = s(29347),
        f = s(39336),
        v = s(24858),
        b = s(33173),
        S = s(95851),
        C = s(58147),
        I = s(41369),
        k = s(62954),
        w = s(43845),
        _ = s(63471),
        D = s(10611),
        W = s(70579);
      const E = function (e) {
        return (0, W.jsxs)(r.A, {
          sx: { display: 'flex', alignItems: 'center' },
          children: [
            (0, W.jsx)(r.A, {
              sx: { width: '100%', mr: 1 },
              children: (0, W.jsx)(D.A, { variant: 'determinate', ...e })
            }),
            (0, W.jsx)(r.A, {
              sx: { minWidth: 35 },
              children: (0, W.jsx)(y.A, {
                variant: 'body2',
                color: 'text.secondary',
                children: ''.concat(Math.round(e.value), '%')
              })
            })
          ]
        });
      };
      var F = s(60446),
        T = s.n(F),
        M = s(56743),
        P = s(69570);
      const z = (0, m.Ay)('input')({ display: 'none' }),
        O = (0, m.Ay)(a.A)((e) => {
          let { theme: n } = e;
          return { backgroundColor: n.colors.primary.lighter };
        }),
        Y = (0, m.Ay)(w.A)((e) => {
          let { theme: n } = e;
          return { borderRadius: 6 };
        });
      const R = function (e) {
        const { label: n, sx: s, onChange: i, setIsChecked: l, setUrl: o } = e,
          [a, c] = (0, t.useState)(),
          [d, x] = (0, t.useState)(),
          [h, u] = (0, t.useState)(null);
        console.log(a, d);
        const m = (e) => {
          if (!e) return;
          let n = T()(new Date()).format('DDMMYYYY');
          const s = (0, C.KR)(
              I.I,
              '/userDocument/'.concat(e.name, '-').concat(n)
            ),
            t = (0, C.bp)(s, e);
          t.on(
            'state_changed',
            (e) => {
              const n = Math.round((e.bytesTransferred / e.totalBytes) * 100);
              u(n);
            },
            (e) => console.log(e),
            () => {
              (0, C.qk)(t.snapshot.ref).then((e) => {
                u(null), x(() => e), o(e), i(e);
              });
            }
          ),
            l(M.Xr.cv_enclosed);
        };
        return (0, W.jsxs)('div', {
          children: [
            (0, W.jsxs)(O, {
              component: 'label',
              variant: 'contained',
              startIcon: (0, W.jsx)(k.A, {}),
              sx: s,
              children: [
                n || 'Upload file',
                (0, W.jsx)(z, {
                  type: 'file',
                  onChange: async (e) => {
                    (0, P.Vr)(d).then(() => {
                      const n = e.target.files[0];
                      n && (c(() => n), m(n));
                    });
                  },
                  accept: 'application/pdf'
                })
              ]
            }),
            (0, W.jsxs)(r.A, {
              marginTop: 2,
              children: [
                null !== h && (0, W.jsx)(E, { value: h }),
                d &&
                  a &&
                  (0, W.jsx)(Y, {
                    label: a.name,
                    onDelete: async () => {
                      d &&
                        (0, P.Vr)(d).then(() => {
                          c(() => null), l('');
                        });
                    },
                    deleteIcon: (0, W.jsx)(_.A, {}),
                    variant: 'outlined'
                  })
              ]
            })
          ]
        });
      };
      var N = s(22505),
        L = s(82907),
        H = s(36110),
        X = s(86971),
        U = s(52404);
      const V = () => {
        const { toast: e } = (0, H.n)(),
          { mutate: n, isLoading: s } =
            ((0, X.Zp)(),
            (0, L.useMutation)(U.mi.create, {
              onSuccess: (n) => {
                200 === n.status
                  ? e.success({
                      massage: '\u1ee8ng tuy\u1ec3n th\xe0nh c\xf4ng'
                    })
                  : e.error({ massage: n.message });
              },
              onError: (n) => {
                e.error({ massage: n.response.data.message });
              }
            }));
        return { onSaveData: n, isLoading: s };
      };
      var q = s(54262),
        Q = s(72974),
        G = s(3435),
        B = s(51238),
        J = s(35644),
        K = s(32109),
        Z = s(81637),
        $ = s(58729),
        ee = s(42445);
      function ne(e) {
        const {
            selectedProfile: n,
            job: s,
            profileType: i,
            setShowResult: l,
            showResult: o,
            fileUrl: c,
            setHintsMessage: d
          } = e,
          { user: x } = (0, H.n)(),
          [h, u] = (0, t.useState)(!1),
          [m, A] = (0, t.useState)(!1),
          [p, j] = (0, t.useState)(null),
          [y, g] = (0, t.useState)([]),
          [f, v] = (0, t.useState)(!1),
          [b, S] = (0, t.useState)(!1),
          [C, I] = (0, t.useState)(!1),
          [k, w] = (0, t.useState)(null),
          [_, D] = (0, t.useState)({ signal: !1, resultData: null }),
          [E, F] = (0, t.useState)(''),
          T = () => {
            d(E),
              u(!1),
              v(!1),
              S(!1),
              I(!1),
              l(!0),
              A(!1),
              g([]),
              D({ signal: !1, resultData: null });
          },
          P = async (e) => {
            j(e[0]);
          },
          z = (e) => {
            A(e);
          },
          O = (e, n) => {
            D({ signal: e, resultData: n });
          },
          Y = async (e) => {
            if ((console.log('result', e), e && e[0])) {
              const n = JSON.parse(e[0]),
                s = null === n || void 0 === n ? void 0 : n.result;
              F(null === n || void 0 === n ? void 0 : n.hints), w((e) => e + s);
            } else {
              var n, s;
              if (
                (null !== p &&
                  void 0 !== p &&
                  null !== (n = p.employee_Profile) &&
                  void 0 !== n &&
                  n.online_profile) ||
                (null !== p &&
                  void 0 !== p &&
                  null !== (s = p.employee_Profile) &&
                  void 0 !== s &&
                  s.attached_document)
              ) {
                const e = (0, ee._h)(
                  null === p || void 0 === p ? void 0 : p.employer_Requirement,
                  null === p || void 0 === p ? void 0 : p.employee_Profile
                );
                console.log('matchingScore', e),
                  w(() => e),
                  e >= ee.ay
                    ? g(() => [p])
                    : (F(
                        'H\u1ed3 s\u01a1 c\u1ee7a b\u1ea1n c\xf3 v\u1ebb ch\u01b0a \u0111\xe1p \u1ee9ng c\xe1c y\xeau c\u1ea7u c\u01a1 b\u1ea3n nh\u01b0: Gi\u1edbi t\xednh, \u0111\u1ed9 tu\u1ed5i ng\xe0nh ngh\u1ec1, tr\xecnh \u0111\u1ed9, kinh nghi\u1ec7m'
                      ),
                      A(!1));
              }
            }
            h && (f ? (b ? C || I(!0) : S(!0)) : v(!0));
          };
        return (
          (0, t.useEffect)(() => {
            console.log('analyzedProfile', p), _.signal && h && Y(_.resultData);
          }, [_.signal]),
          (0, t.useEffect)(() => {
            var e, t;
            let l;
            l =
              i === M.Xr.online_profile
                ? { personal_information: x, online_profile: n }
                : i === M.Xr.attached_document
                ? { personal_information: x, attached_document: n }
                : {
                    application: {
                      id: 1,
                      CV: c,
                      applicationType: 'N\u1ed9p nhanh'
                    }
                  };
            const o = {
              id: 1,
              employee_Profile: (0, ee.kF)(l),
              employer_Requirement: (0, ee.MO)(s)
            };
            if (
              (j(() => o),
              console.log('data', o, i, l),
              (null !== o &&
                void 0 !== o &&
                null !== (e = o.employee_Profile) &&
                void 0 !== e &&
                e.online_profile) ||
                (null !== o &&
                  void 0 !== o &&
                  null !== (t = o.employee_Profile) &&
                  void 0 !== t &&
                  t.attached_document))
            ) {
              var r, a, d, h;
              const e =
                  (null === o ||
                  void 0 === o ||
                  null === (r = o.employee_Profile) ||
                  void 0 === r ||
                  null === (a = r.online_profile) ||
                  void 0 === a
                    ? void 0
                    : a.keywords) ||
                  (null === o ||
                  void 0 === o ||
                  null === (d = o.employee_Profile) ||
                  void 0 === d ||
                  null === (h = d.attached_document) ||
                  void 0 === h
                    ? void 0
                    : h.keywords),
                n = {
                  ...o,
                  employee_Profile: {
                    ...o.employee_Profile,
                    application: {
                      id: 1,
                      keywords: e,
                      applicationType: i,
                      matchingScore: null
                    }
                  }
                };
              j(() => n), console.log(n);
            }
          }, [JSON.stringify(s), n, c]),
          (0, t.useEffect)(() => {
            console.log(p),
              h &&
                n &&
                (w(null),
                l(!1),
                (0, ee.NQ)({
                  round: 1,
                  handleAnalyzeResult: Y,
                  setIsAnalyzing: z,
                  setAnalyzedProfile: P,
                  resetMatchingScoreList: [p],
                  handleGoToAnalyzeResult: O
                }));
          }, [h]),
          (0, t.useEffect)(() => {
            h &&
              (f && !b
                ? (console.log('passRoundProfiles', y),
                  y.length > 0
                    ? (0, ee.NQ)({
                        round: 2,
                        handleAnalyzeResult: Y,
                        setIsAnalyzing: z,
                        passRoundProfiles: y
                      })
                    : (T(), console.log('Finised All')))
                : b && !C
                ? (console.log('Round 2 finished'),
                  (0, ee.NQ)({
                    round: 3,
                    handleAnalyzeResult: Y,
                    setIsAnalyzing: z,
                    passRoundProfiles: y
                  }))
                : C &&
                  (console.log('Round 3 finished'),
                  T(),
                  console.log('Finised All')));
          }, [f, b, C]),
          (0, t.useEffect)(() => {
            console.log(k);
          }, [k]),
          (0, W.jsxs)(r.A, {
            display: 'flex',
            sx: { alignItems: 'center', gap: 1 },
            children: [
              (0, W.jsxs)(a.A, {
                onClick: () => {
                  u(!0);
                },
                variant: 'contained',
                color: 'primary',
                sx: { minWidth: 200 },
                disabled: o || m,
                children: [
                  (0, W.jsx)($.A, { fontSize: 'small' }),
                  'Ph\xe2n t\xedch \u0111\u1ed9 ph\xf9 h\u1ee3p'
                ]
              }),
              m && (0, W.jsx)(Z.A, {}),
              o &&
                (0, W.jsx)(r.A, {
                  sx: {
                    width: 150,
                    borderRadius: 3,
                    p: 1,
                    bgcolor:
                      k >= ee.IF
                        ? '#ffc107'
                        : k >= ee.$I
                        ? '#4caf50'
                        : k >= ee.ay
                        ? '#b5b5b5'
                        : '#efefef',
                    display: 'flex',
                    justifyContent: 'center'
                  },
                  children:
                    k >= ee.IF
                      ? 'Cao'
                      : k >= ee.$I
                      ? 'Trung b\xecnh'
                      : k >= ee.ay
                      ? 'Th\u1ea5p'
                      : 'Kh\xf4ng ph\xf9 h\u1ee3p'
                })
            ]
          })
        );
      }
      const se = (0, m.Ay)('div')(() => ({
          fontWeight: 600,
          fontSize: 18,
          margin: '5px 0'
        })),
        ie = (0, m.Ay)('div')((e) => {
          let { theme: n } = e;
          return {
            fontWeight: 400,
            fontSize: 12,
            color: n.colors.alpha.black[70]
          };
        });
      function te(e) {
        const { onSaveData: n } = V(),
          {
            open: s,
            onClose: i,
            position: l,
            company: c,
            postId: d,
            job: x
          } = e,
          { profile: h } = (0, G.A)(),
          { onlineProfile: u } = (0, q.A)(),
          { attachedDocument: m } = (0, Q.A)(),
          { profile: C, setProfile: I } = (0, J.A)(),
          { profile: k, setProfile: w } = (0, K.A)(),
          [_, D] = (0, t.useState)(''),
          [E, F] = (0, t.useState)(!1),
          [T, z] = (0, t.useState)(null),
          [O, Y] = (0, t.useState)(!1),
          [L, H] = (0, t.useState)(''),
          [X, U] = (0, t.useState)(''),
          Z = { width: '100%', px: 1, color: '#000' },
          {
            control: $,
            handleSubmit: ee,
            reset: te,
            formState: { errors: le }
          } = (0, v.mN)({ defaultValues: {} }),
          oe = () => {
            L && (0, P.Vr)(L), D(null), U(null), Y(null), i();
          },
          re = (e) => {
            D(e), U('');
          };
        return (
          (0, t.useEffect)(() => {
            te(h),
              Y(!1),
              _ === M.Xr.online_profile && z(C),
              _ === M.Xr.attached_document && z(k),
              _ === M.Xr.cv_enclosed && z(x);
          }, [_]),
          (0, W.jsx)('div', {
            children: (0, W.jsxs)(A.A, {
              open: s,
              onClose: oe,
              maxWidth: 'md',
              fullWidth: !0,
              children: [
                (0, W.jsxs)(p.A, {
                  children: [
                    (0, W.jsx)(ie, {
                      children: ' V\u1ecb tr\xed \u1ee9ng tuy\u1ec3n'
                    }),
                    (0, W.jsx)(se, { children: l }),
                    c && (0, W.jsx)(ie, { children: c })
                  ]
                }),
                (0, W.jsxs)(j.A, {
                  children: [
                    (0, W.jsxs)(o.Ay, {
                      container: !0,
                      spacing: 2,
                      children: [
                        (0, W.jsx)(o.Ay, {
                          item: !0,
                          xs: 12,
                          md: 6,
                          lg: 4,
                          children: (0, W.jsx)(a.A, {
                            startIcon: (0, W.jsx)(N.A, {}),
                            variant: 'contained',
                            disabled: !u,
                            fullWidth: !0,
                            onClick: () => re(M.Xr.online_profile),
                            sx: [
                              Z,
                              {
                                bgcolor:
                                  _ === M.Xr.online_profile
                                    ? '#f29c00'
                                    : '#fff6e5'
                              }
                            ],
                            children: u
                              ? 'H\u1ed3 s\u01a1 tr\u1ef1c tuy\u1ebfn'
                              : (0, W.jsx)('em', {
                                  children:
                                    'Ch\u01b0a c\xf3 h\u1ed3 s\u01a1 tr\u1ef1c tuy\u1ebfn'
                                })
                          })
                        }),
                        (0, W.jsx)(o.Ay, {
                          item: !0,
                          xs: 12,
                          md: 6,
                          lg: 4,
                          children: (0, W.jsx)(a.A, {
                            startIcon: (0, W.jsx)(N.A, {}),
                            variant: 'contained',
                            fullWidth: !0,
                            disabled: !m,
                            onClick: () => re(M.Xr.attached_document),
                            sx: [
                              Z,
                              {
                                bgcolor:
                                  _ === M.Xr.attached_document
                                    ? '#f29c00'
                                    : '#fff6e5'
                              }
                            ],
                            children: m
                              ? 'H\u1ed3 s\u01a1 \u0111\xednh k\xe8m'
                              : (0, W.jsx)('em', {
                                  children:
                                    'Ch\u01b0a c\xf3 h\u1ed3 s\u01a1 \u0111\xednh k\xe8m'
                                })
                          })
                        }),
                        (0, W.jsx)(o.Ay, {
                          item: !0,
                          xs: 12,
                          lg: 4,
                          children: (0, W.jsx)(b.A, {
                            control: $,
                            errors: le,
                            id: 'CV',
                            name: 'CV',
                            label:
                              'T\u1ea3i l\xean h\u1ed3 s\u01a1 c\xf3 s\u1eb5n',
                            children: (0, W.jsx)(R, {
                              sx: [
                                Z,
                                {
                                  bgcolor:
                                    _ === M.Xr.cv_enclosed
                                      ? '#f29c00'
                                      : '#fff6e5'
                                }
                              ],
                              setIsChecked: D,
                              setUrl: H
                            })
                          })
                        })
                      ]
                    }),
                    E &&
                      (0, W.jsx)(y.A, {
                        color: 'error',
                        mb: 3,
                        fontWeight: 700,
                        fontStyle: 'italic',
                        children:
                          '* Vui l\xf2ng ch\u1ecdn lo\u1ea1i h\u1ed3 s\u01a1 c\u1ea7n g\u1eedi !'
                      }),
                    (0, W.jsxs)(o.Ay, {
                      container: !0,
                      spacing: 3,
                      children: [
                        (0, W.jsx)(o.Ay, {
                          item: !0,
                          xs: 12,
                          children: (0, W.jsx)(b.A, {
                            element: (0, W.jsx)(S.A, {}),
                            control: $,
                            errors: le,
                            required: !0,
                            id: 'name',
                            label: 'H\u1ecd v\xe0 t\xean',
                            name: 'name'
                          })
                        }),
                        (0, W.jsx)(o.Ay, {
                          item: !0,
                          xs: 12,
                          children: (0, W.jsx)(b.A, {
                            element: (0, W.jsx)(S.A, {}),
                            control: $,
                            errors: le,
                            required: !0,
                            id: 'email',
                            label: 'Email',
                            name: 'email',
                            pattern: 'email'
                          })
                        }),
                        (0, W.jsx)(o.Ay, {
                          item: !0,
                          xs: 12,
                          children: (0, W.jsx)(b.A, {
                            element: (0, W.jsx)(S.A, {}),
                            control: $,
                            errors: le,
                            required: !0,
                            id: 'phone',
                            label: 'S\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
                            name: 'phone',
                            pattern: 'phone'
                          })
                        })
                      ]
                    })
                  ]
                }),
                (0, W.jsxs)(g.A, {
                  sx: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    px: 2
                  },
                  children: [
                    (0, W.jsx)(ne, {
                      job: x,
                      selectedProfile: T,
                      profileType: _,
                      setShowResult: Y,
                      showResult: O,
                      fileUrl: L,
                      setHintsMessage: U
                    }),
                    (0, W.jsxs)(r.A, {
                      sx: { display: 'flex', columnGap: 2 },
                      children: [
                        (0, W.jsx)(a.A, {
                          onClick: oe,
                          variant: 'outlined',
                          color: 'secondary',
                          children: 'H\u1ee7y'
                        }),
                        (0, W.jsx)(a.A, {
                          onClick: ee((e) => {
                            if (!_) return void F(!0);
                            let s = '';
                            _ === M.Xr.cv_enclosed
                              ? (s = e.CV)
                              : (L && (0, P.Vr)(L), (s = '#' + (0, B.A)())),
                              n({ ...e, postId: d, applicationType: _, CV: s }),
                              Y(null),
                              i();
                          }),
                          variant: 'contained',
                          color: 'info',
                          children: 'N\u1ed9p h\u1ed3 s\u01a1'
                        })
                      ]
                    })
                  ]
                }),
                X &&
                  (0, W.jsxs)(r.A, {
                    mb: 1,
                    p: 2,
                    gap: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    children: [
                      (0, W.jsx)(f.A, { sx: { mb: 1, color: '#f29c00' } }),
                      (0, W.jsx)(y.A, {
                        fontWeight: 700,
                        fontSize: 18,
                        children: 'G\u1ee3i \xfd:'
                      }),
                      (0, W.jsx)(y.A, {
                        fontStyle: 'italic',
                        mx: 2,
                        children: X
                      })
                    ]
                  })
              ]
            })
          })
        );
      }
      var le = s(65099),
        oe = s(51318),
        re = s(55517),
        ae = s(94074),
        ce = s(54367);
      const de = (0, m.Ay)(l.A)((e) => {
          let { theme: n } = e;
          return {
            width: 150,
            height: 150,
            objectFit: 'contain',
            borderRadius: '5px'
          };
        }),
        xe = (0, m.Ay)('h3')((e) => {
          let { theme: n } = e;
          return {
            fontWeight: 400,
            fontSize: 16,
            color: n.colors.alpha.black[70]
          };
        }),
        he = (0, m.Ay)('h3')(() => ({ fontWeight: 600, fontSize: 18 })),
        ue = (0, m.Ay)('span')((e) => {
          let { theme: n } = e;
          return { color: n.colors.alpha.black[70] };
        }),
        me = (0, m.Ay)('span')((e) => {
          let { theme: n } = e;
          return { color: n.colors.alpha.black[100], marginLeft: 5 };
        }),
        Ae = (e) => {
          var n, s, i, l, m;
          let { data: A } = e;
          const { isEmployee: p, isEmployer: j, isAdmin: y } = (0, H.n)(),
            [g, f] = (0, t.useState)(!1),
            v = (0, X.Zp)();
          return (0, W.jsxs)(ae.A, {
            sx: { px: 5, pb: 5, mb: 2 },
            children: [
              (0, W.jsxs)(o.Ay, {
                container: !0,
                children: [
                  (0, W.jsx)(o.Ay, {
                    item: !0,
                    xs: 12,
                    md: 2,
                    display: 'flex',
                    alignItems: 'center',
                    children: (0, W.jsx)(de, {
                      src:
                        (null === A ||
                        void 0 === A ||
                        null === (n = A.employer) ||
                        void 0 === n
                          ? void 0
                          : n.logo) || le.XS.companyAvatar
                    })
                  }),
                  (0, W.jsx)(o.Ay, {
                    item: !0,
                    xs: 12,
                    md: 10,
                    children: (0, W.jsxs)(r.A, {
                      children: [
                        (0, W.jsx)(oe.N_, {
                          to: '/company/'
                            .concat(
                              (0, ce.O)(
                                null === A ||
                                  void 0 === A ||
                                  null === (s = A.employer) ||
                                  void 0 === s
                                  ? void 0
                                  : s.companyName
                              ),
                              '?id='
                            )
                            .concat(
                              btoa(
                                null === A ||
                                  void 0 === A ||
                                  null === (i = A.employer) ||
                                  void 0 === i
                                  ? void 0
                                  : i.userId.toString()
                              )
                            ),
                          style: { textDecoration: 'none' },
                          children: (0, W.jsx)(xe, {
                            children:
                              null === A ||
                              void 0 === A ||
                              null === (l = A.employer) ||
                              void 0 === l
                                ? void 0
                                : l.companyName
                          })
                        }),
                        (0, W.jsx)(he, { children: A.jobTitle }),
                        (0, W.jsxs)(o.Ay, {
                          container: !0,
                          spacing: 1,
                          children: [
                            (0, W.jsx)(o.Ay, {
                              item: !0,
                              xs: 12,
                              md: 6,
                              children: (0, W.jsxs)(o.Ay, {
                                container: !0,
                                alignItems: 'center',
                                children: [
                                  (0, W.jsx)(d.A, {
                                    color: 'primary',
                                    sx: { margin: '0 5px' }
                                  }),
                                  (0, W.jsx)(ue, {
                                    children: ' M\u1ee9c l\u01b0\u01a1ng : '
                                  }),
                                  (0, W.jsxs)(me, {
                                    children: [
                                      A.minSalary,
                                      ' - ',
                                      A.maxSalary,
                                      ' tri\u1ec7u'
                                    ]
                                  })
                                ]
                              })
                            }),
                            (0, W.jsx)(o.Ay, {
                              item: !0,
                              xs: 12,
                              md: 6,
                              children: (0, W.jsxs)(o.Ay, {
                                container: !0,
                                alignItems: 'center',
                                children: [
                                  (0, W.jsx)(c.A, {
                                    color: 'primary',
                                    sx: { margin: '0 5px' }
                                  }),
                                  (0, W.jsx)(ue, {
                                    children:
                                      ' H\u1ea1n n\u1ed9p h\u1ed3 s\u01a1 : '
                                  }),
                                  (0, W.jsx)(me, {
                                    children: A.applicationDeadline
                                  })
                                ]
                              })
                            }),
                            (0, W.jsx)(o.Ay, {
                              item: !0,
                              xs: 12,
                              md: 6,
                              children: (0, W.jsxs)(o.Ay, {
                                container: !0,
                                alignItems: 'center',
                                children: [
                                  (0, W.jsx)(h.A, {
                                    color: 'primary',
                                    sx: { margin: '0 5px' }
                                  }),
                                  (0, W.jsx)(ue, {
                                    children: ' \u0110\u1ed9 tu\u1ed5i : '
                                  }),
                                  (0, W.jsxs)(me, {
                                    children: [A.minAge, ' - ', A.maxAge]
                                  })
                                ]
                              })
                            }),
                            (0, W.jsx)(o.Ay, {
                              item: !0,
                              xs: 12,
                              md: 6,
                              children: (0, W.jsxs)(o.Ay, {
                                container: !0,
                                alignItems: 'center',
                                children: [
                                  (0, W.jsx)(u.A, {
                                    color: 'primary',
                                    sx: { margin: '0 5px' }
                                  }),
                                  (0, W.jsx)(ue, {
                                    children:
                                      ' Khu v\u1ef1c \u1ee9ng tuy\u1ec3n : '
                                  }),
                                  (0, W.jsx)(me, { children: A.contactAddress })
                                ]
                              })
                            })
                          ]
                        }),
                        !j &&
                          !y &&
                          (0, W.jsxs)(r.A, {
                            sx: {
                              marginTop: 2,
                              display: 'flex',
                              gap: 2,
                              alignItems: 'center'
                            },
                            children: [
                              (0, W.jsx)(a.A, {
                                onClick: p
                                  ? () => {
                                      f(!0);
                                    }
                                  : () => {
                                      v('/login', {
                                        state: {
                                          from: window.location.pathname,
                                          postId: A.postId
                                        }
                                      });
                                    },
                                variant: 'contained',
                                startIcon: (0, W.jsx)(x.A, {}),
                                color: 'info',
                                children: 'N\u1ed9p h\u1ed3 s\u01a1'
                              }),
                              (0, W.jsx)(re.A, { job: A })
                            ]
                          })
                      ]
                    })
                  })
                ]
              }),
              (0, W.jsx)(te, {
                open: g,
                postId: A.postId,
                onClose: () => {
                  f(!1);
                },
                position: A.jobTitle,
                company:
                  null === A ||
                  void 0 === A ||
                  null === (m = A.employer) ||
                  void 0 === m
                    ? void 0
                    : m.companyName,
                job: A
              })
            ]
          });
        };
      var pe = s(69869),
        je = s(51720),
        ye = s(42744),
        ge = s(18923),
        fe = s(76378),
        ve = s(72023),
        be = s(37991),
        Se = s(390),
        Ce = s(71322),
        Ie = s(23851),
        ke = s(48734),
        we = s(34334),
        _e = s(23500);
      const De = (0, m.Ay)(r.A)((e) => {
          let { theme: n } = e;
          return {
            padding: 10,
            backgroundColor: '#F0FFF0',
            color: n.colors.alpha.black[100],
            borderRadius: 6
          };
        }),
        We = (0, m.Ay)(l.A)((e) => {
          let { theme: n } = e;
          return { backgroundColor: '#e6f6e6', color: '#006400' };
        }),
        Ee = (e) => {
          let { data: n } = e;
          return (0, W.jsxs)(i.A, {
            children: [
              (0, W.jsx)(y.A, {
                variant: 'h3',
                fontSize: 22,
                noWrap: !0,
                marginBottom: 2.5,
                children: 'Th\xf4ng tin chung'
              }),
              (0, W.jsxs)(De, {
                children: [
                  (0, W.jsxs)(o.Ay, {
                    container: !0,
                    sx: { my: 0.5 },
                    children: [
                      (0, W.jsx)(o.Ay, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: (0, W.jsxs)(Ce.Ay, {
                          children: [
                            (0, W.jsx)(Ie.A, {
                              children: (0, W.jsx)(We, {
                                children: (0, W.jsx)(c.A, {})
                              })
                            }),
                            (0, W.jsx)(ke.A, {
                              primary: T()(n.createAt).format('YYYY-MM-DD'),
                              secondary: 'Ng\xe0y \u0111\u0103ng'
                            })
                          ]
                        })
                      }),
                      (0, W.jsx)(o.Ay, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: (0, W.jsxs)(Ce.Ay, {
                          children: [
                            (0, W.jsx)(Ie.A, {
                              children: (0, W.jsx)(We, {
                                children: (0, W.jsx)(ge.A, {})
                              })
                            }),
                            (0, W.jsx)(ke.A, {
                              primary: ''.concat(n.trialPeriod, ' th\xe1ng'),
                              secondary: 'Th\u1eddi gian th\u1eed vi\u1ec7c'
                            })
                          ]
                        })
                      }),
                      (0, W.jsx)(o.Ay, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: (0, W.jsxs)(Ce.Ay, {
                          children: [
                            (0, W.jsx)(Ie.A, {
                              children: (0, W.jsx)(We, {
                                children: (0, W.jsx)(ve.A, {})
                              })
                            }),
                            (0, W.jsx)(ke.A, {
                              primary: n.positionLevel,
                              secondary: 'C\u1ea5p b\u1eadc'
                            })
                          ]
                        })
                      })
                    ]
                  }),
                  (0, W.jsx)(f.A, {
                    sx: { width: '90%', margin: 'auto', my: 1 }
                  }),
                  (0, W.jsxs)(o.Ay, {
                    container: !0,
                    sx: { my: 0.5 },
                    children: [
                      (0, W.jsx)(o.Ay, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: (0, W.jsxs)(Ce.Ay, {
                          children: [
                            (0, W.jsx)(Ie.A, {
                              children: (0, W.jsx)(We, {
                                children: (0, W.jsx)(be.A, {})
                              })
                            }),
                            (0, W.jsx)(ke.A, {
                              primary: n.numberOfVacancies,
                              secondary: 'S\u1ed1 l\u01b0\u1ee3ng tuy\u1ec3n'
                            })
                          ]
                        })
                      }),
                      (0, W.jsx)(o.Ay, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: (0, W.jsxs)(Ce.Ay, {
                          children: [
                            (0, W.jsx)(Ie.A, {
                              children: (0, W.jsx)(We, {
                                children: (0, W.jsx)(ye.A, {})
                              })
                            }),
                            (0, W.jsx)(ke.A, {
                              primary: n.employmentType,
                              secondary: 'H\xecnh th\u1ee9c l\xe0m vi\u1ec7c'
                            })
                          ]
                        })
                      }),
                      (0, W.jsx)(o.Ay, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: (0, W.jsxs)(Ce.Ay, {
                          children: [
                            (0, W.jsx)(Ie.A, {
                              children: (0, W.jsx)(We, {
                                children: (0, W.jsx)(Se.A, {})
                              })
                            }),
                            (0, W.jsx)(ke.A, {
                              primary: n.sex,
                              secondary: 'Gi\u1edbi t\xednh'
                            })
                          ]
                        })
                      })
                    ]
                  }),
                  (0, W.jsx)(f.A, {
                    sx: { width: '90%', margin: 'auto', my: 1 }
                  }),
                  (0, W.jsxs)(o.Ay, {
                    container: !0,
                    sx: { my: 0.5 },
                    children: [
                      (0, W.jsx)(o.Ay, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: (0, W.jsxs)(Ce.Ay, {
                          children: [
                            (0, W.jsx)(Ie.A, {
                              children: (0, W.jsx)(We, {
                                children: (0, W.jsx)(fe.A, {})
                              })
                            }),
                            (0, W.jsx)(ke.A, {
                              primary: n.degree,
                              secondary: 'Y\xeau c\u1ea7u b\u1eb1ng c\u1ea5p'
                            })
                          ]
                        })
                      }),
                      (0, W.jsx)(o.Ay, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: (0, W.jsxs)(Ce.Ay, {
                          children: [
                            (0, W.jsx)(Ie.A, {
                              children: (0, W.jsx)(We, {
                                children: (0, W.jsx)(je.A, {})
                              })
                            }),
                            (0, W.jsx)(ke.A, {
                              primary: n.experience,
                              secondary: 'Y\xeau c\u1ea7u kinh nghi\u1ec7m'
                            })
                          ]
                        })
                      }),
                      (0, W.jsx)(o.Ay, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: (0, W.jsxs)(Ce.Ay, {
                          children: [
                            (0, W.jsx)(Ie.A, {
                              children: (0, W.jsx)(We, {
                                children: (0, W.jsx)(_e.A, {})
                              })
                            }),
                            (0, W.jsx)(ke.A, {
                              primary: ''
                                .concat(n.minAge, ' - ')
                                .concat(n.maxAge),
                              secondary: '\u0110\u1ed9 tu\u1ed5i'
                            })
                          ]
                        })
                      })
                    ]
                  })
                ]
              }),
              (0, W.jsx)(y.A, {
                variant: 'h3',
                fontSize: 22,
                noWrap: !0,
                marginTop: 2.5,
                children: 'K\u0129 n\u0103ng b\u1eaft bu\u1ed9c'
              }),
              (0, W.jsx)(y.A, { marginTop: 2.5, children: n.requiredSkills }),
              (0, W.jsx)(y.A, {
                variant: 'h3',
                fontSize: 22,
                noWrap: !0,
                marginTop: 2.5,
                children: 'M\xf4 t\u1ea3 c\xf4ng vi\u1ec7c'
              }),
              (0, W.jsx)(r.A, {
                children: (0, W.jsx)(we.r, { content: n.jobDescription })
              }),
              (0, W.jsx)(y.A, {
                variant: 'h3',
                fontSize: 22,
                noWrap: !0,
                marginTop: 2.5,
                children: 'Y\xeau c\u1ea7u c\xf4ng vi\u1ec7c'
              }),
              (0, W.jsx)(r.A, {
                children: (0, W.jsx)(we.r, { content: n.jobRequirements })
              }),
              (0, W.jsx)(y.A, {
                variant: 'h3',
                fontSize: 22,
                noWrap: !0,
                marginTop: 2.5,
                children: 'Quy\u1ec1n l\u1ee3i'
              }),
              (0, W.jsx)(r.A, {
                children: (0, W.jsx)(we.r, { content: n.benefits })
              }),
              (0, W.jsx)(y.A, {
                variant: 'h3',
                fontSize: 22,
                noWrap: !0,
                marginTop: 2.5,
                children: '\u0110\u1ecba \u0111i\u1ec3m l\xe0m vi\u1ec7c'
              }),
              (0, W.jsxs)(o.Ay, {
                container: !0,
                alignItems: 'center',
                marginTop: 2,
                children: [
                  (0, W.jsx)(u.A, { color: 'primary', sx: { marginRight: 1 } }),
                  (0, W.jsx)('div', { children: n.workAddress })
                ]
              })
            ]
          });
        };
      var Fe = s(9971),
        Te = s(74674);
      const Me = () => {
        const { itemDetail: e } = (0, Fe.G)(Te.qk),
          n = (0, Fe.j)();
        return {
          itemDetail: e,
          setItemDetail: (e) => {
            n((0, Te.J6)(e));
          }
        };
      };
      (0, m.Ay)(pe.A)(
        () =>
          '\n    .MuiTabs-scrollableX {\n      overflow-x: auto !important;\n    }, \n'
      );
      const Pe = function () {
        const { itemDetail: e } = Me(),
          { isEmployer: n } = (0, H.n)(),
          [s, i] = (0, t.useState)('info_job');
        return (0, W.jsx)(ae.A, {
          sx: { py: 3, mb: 2 },
          children: (0, W.jsx)(Ee, { data: e })
        });
      };
      var ze = s(21886),
        Oe = s(21430);
      const Ye = () => {
        const [e, n] = (0, oe.ok)(),
          s = atob(e.get('id')),
          { setItemDetail: l, itemDetail: o } = Me(),
          { data: r } = (0, ze.A)(s);
        return (
          (0, t.useEffect)(() => {
            l(r);
          }, [r]),
          (0, W.jsxs)(i.A, {
            sx: { paddingY: 2 },
            children: [
              (0, W.jsx)(Ae, { data: o }),
              (0, W.jsx)(Pe, {}),
              (0, W.jsx)(Oe.A, {
                sx: { mt: 2 },
                company: null === r || void 0 === r ? void 0 : r.employer
              })
            ]
          })
        );
      };
    },
    54367: (e, n, s) => {
      function i(e) {
        const n = {
            '\xe0': 'a',
            '\xe1': 'a',
            '\u1ea3': 'a',
            '\xe3': 'a',
            '\u1ea1': 'a',
            '\u0103': 'a',
            '\u1eaf': 'a',
            '\u1eb1': 'a',
            '\u1eb3': 'a',
            '\u1eb5': 'a',
            '\u1eb7': 'a',
            '\xe2': 'a',
            '\u1ea5': 'a',
            '\u1ea7': 'a',
            '\u1ea9': 'a',
            '\u1eab': 'a',
            '\u1ead': 'a',
            '\u0111': 'd',
            '\xe8': 'e',
            '\xe9': 'e',
            '\u1ebb': 'e',
            '\u1ebd': 'e',
            '\u1eb9': 'e',
            '\xea': 'e',
            '\u1ebf': 'e',
            '\u1ec1': 'e',
            '\u1ec3': 'e',
            '\u1ec5': 'e',
            '\u1ec7': 'e',
            '\xec': 'i',
            '\xed': 'i',
            '\u1ec9': 'i',
            '\u0129': 'i',
            '\u1ecb': 'i',
            '\xf2': 'o',
            '\xf3': 'o',
            '\u1ecf': 'o',
            '\xf5': 'o',
            '\u1ecd': 'o',
            '\xf4': 'o',
            '\u1ed1': 'o',
            '\u1ed3': 'o',
            '\u1ed5': 'o',
            '\u1ed7': 'o',
            '\u1ed9': 'o',
            '\u01a1': 'o',
            '\u1edb': 'o',
            '\u1edd': 'o',
            '\u1edf': 'o',
            '\u1ee1': 'o',
            '\u1ee3': 'o',
            '\xf9': 'u',
            '\xfa': 'u',
            '\u1ee7': 'u',
            '\u0169': 'u',
            '\u1ee5': 'u',
            '\u01b0': 'u',
            '\u1ee9': 'u',
            '\u1eeb': 'u',
            '\u1eed': 'u',
            '\u1eef': 'u',
            '\u1ef1': 'u',
            '\u1ef3': 'y',
            '\xfd': 'y',
            '\u1ef7': 'y',
            '\u1ef9': 'y',
            '\u1ef5': 'y',
            '\xc0': 'A',
            '\xc1': 'A',
            '\u1ea2': 'A',
            '\xc3': 'A',
            '\u1ea0': 'A',
            '\u0102': 'A',
            '\u1eae': 'A',
            '\u1eb0': 'A',
            '\u1eb2': 'A',
            '\u1eb4': 'A',
            '\u1eb6': 'A',
            '\xc2': 'A',
            '\u1ea4': 'A',
            '\u1ea6': 'A',
            '\u1ea8': 'A',
            '\u1eaa': 'A',
            '\u1eac': 'A',
            '\u0110': 'D',
            '\xc8': 'E',
            '\xc9': 'E',
            '\u1eba': 'E',
            '\u1ebc': 'E',
            '\u1eb8': 'E',
            '\xca': 'E',
            '\u1ebe': 'E',
            '\u1ec0': 'E',
            '\u1ec2': 'E',
            '\u1ec4': 'E',
            '\u1ec6': 'E',
            '\xcc': 'I',
            '\xcd': 'I',
            '\u1ec8': 'I',
            '\u0128': 'I',
            '\u1eca': 'I',
            '\xd2': 'O',
            '\xd3': 'O',
            '\u1ece': 'O',
            '\xd5': 'O',
            '\u1ecc': 'O',
            '\xd4': 'O',
            '\u1ed0': 'O',
            '\u1ed2': 'O',
            '\u1ed4': 'O',
            '\u1ed6': 'O',
            '\u1ed8': 'O',
            '\u01a0': 'O',
            '\u1eda': 'O',
            '\u1edc': 'O',
            '\u1ede': 'O',
            '\u1ee0': 'O',
            '\u1ee2': 'O',
            '\xd9': 'U',
            '\xda': 'U',
            '\u1ee6': 'U',
            '\u0168': 'U',
            '\u1ee4': 'U',
            '\u01af': 'U',
            '\u1ee8': 'U',
            '\u1eea': 'U',
            '\u1eec': 'U',
            '\u1eee': 'U',
            '\u1ef0': 'U',
            '\u1ef2': 'Y',
            '\xdd': 'Y',
            '\u1ef6': 'Y',
            '\u1ef8': 'Y',
            '\u1ef4': 'Y'
          },
          s = [
            '!',
            '@',
            '#',
            '$',
            '%',
            '^',
            '&',
            '*',
            '_',
            '-',
            '+',
            '=',
            '{',
            '}',
            '[',
            ']',
            '|',
            '\\',
            ':',
            ';',
            '"',
            "'",
            '<',
            '>',
            ',',
            '.',
            '/',
            '?',
            ' '
          ];
        let i = '';
        for (
          var t = 0;
          t < (null === e || void 0 === e ? void 0 : e.length);
          t++
        )
          n[e[t]]
            ? (i += n[e[t]])
            : s.includes(e[t])
            ? i.endsWith('-') || (i += '-')
            : (i += e[t]);
        return i;
      }
      s.d(n, { O: () => i });
    }
  }
]);
//# sourceMappingURL=623.037a64f2.chunk.js.map
