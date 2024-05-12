'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [836],
  {
    80881: (e, n, a) => {
      a.d(n, { A: () => i });
      var t = a(19464),
        s = a(11906),
        r = a(70579);
      function i(e) {
        const { handleSubmit: n, handleCancel: a } = e;
        return (0, r.jsxs)(t.A, {
          display: 'flex',
          justifyContent: 'center',
          sx: { gap: 3 },
          children: [
            (0, r.jsx)(s.A, {
              onClick: a,
              variant: 'outlined',
              color: 'secondary',
              sx: { width: 120 },
              children: 'H\u1ee7y'
            }),
            (0, r.jsx)(s.A, {
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
    67002: (e, n, a) => {
      a.d(n, { A: () => c });
      var t = a(89302),
        s = a(898),
        r = a(58390),
        i = a(60446),
        l = a.n(i),
        o = a(70579);
      function c(e) {
        return (0, o.jsx)(r.$, {
          dateAdapter: t.R,
          children: (0, o.jsx)(s.l, {
            format: 'DD/MM/YYYY',
            ...e,
            value: e.value ? l()(e.value) : null,
            slotProps: { textField: { size: 'small', fullWidth: !0 } }
          })
        });
      }
    },
    63656: (e, n, a) => {
      a.d(n, { A: () => l });
      a(65043);
      var t = a(11906),
        s = a(85865),
        r = a(36134),
        i = a(70579);
      function l(e) {
        return (0, i.jsx)(t.A, {
          ...e,
          variant: 'outlined',
          color: 'secondary',
          startIcon: (0, i.jsx)(r.A, { fontSize: 'large' }),
          sx: { borderRadius: 5 },
          children: (0, i.jsx)(s.A, {
            textTransform: 'none',
            children: 'Ch\u1ec9nh s\u1eeda'
          })
        });
      }
    },
    97753: (e, n, a) => {
      a.d(n, { A: () => o });
      var t = a(34535),
        s = a(19252),
        r = a(19464),
        i = a(70579);
      const l = (0, t.Ay)(s.A)((e) => {
        let { theme: n } = e;
        return '\n        margin-top: '.concat(n.spacing(4), ';\n');
      });
      const o = function () {
        return (0, i.jsx)(l, {
          className: 'footer-wrapper',
          children: (0, i.jsx)(r.A, {
            pb: 2,
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            textAlign: { xs: 'center', md: 'left' },
            justifyContent: 'space-between'
          })
        });
      };
    },
    49768: (e, n, a) => {
      a.d(n, { A: () => o });
      a(65043);
      var t = a(79190),
        s = a(32143),
        r = a(53193),
        i = a(72221),
        l = a(70579);
      function o(e) {
        const { options: n = [], label: a, labelmargintop: o = 0 } = e;
        return (0, l.jsxs)(r.A, {
          fullWidth: !0,
          children: [
            (0, l.jsx)(t.A, { size: 'small', sx: { mt: o }, children: a }),
            (0, l.jsx)(i.A, {
              size: 'small',
              ...e,
              children: n.map((e, n) =>
                (0, l.jsx)(s.A, { value: e.value, children: e.label }, n)
              )
            })
          ]
        });
      }
    },
    67902: (e, n, a) => {
      a.d(n, { A: () => r });
      var t = a(34535),
        s = a(69869);
      const r = (0, t.Ay)(s.A)(
        () =>
          '\n    .MuiTabs-scrollableX {\n    overflow-x: auto !important;\n      }\n  '
      );
    },
    95851: (e, n, a) => {
      a.d(n, { A: () => r });
      var t = a(67784),
        s = a(70579);
      const r = (e) => (0, s.jsx)(t.A, { size: 'small', fullWidth: !0, ...e });
    },
    52247: (e, n, a) => {
      a.d(n, {
        ZK: () => d,
        n7: () => o,
        nb: () => m,
        qz: () => c,
        rN: () => l
      });
      var t = a(85865),
        s = a(65099),
        r = a(70579);
      const i = (e, n, a, s) => {
          const i = new RegExp(''.concat(s, '/'), 'g');
          return (0, r.jsxs)(t.A, {
            color: 'error',
            my: 1,
            fontWeight: 700,
            fontSize: 13,
            children: [
              e,
              ' ph\u1ea3i c\xf3 \u0111\u1ecbnh d\u1ea1ng\xa0',
              n.join(', ').replace(i, '.'),
              ' v\xe0 dung l\u01b0\u1ee3ng',
              ' ',
              ' <='.concat(a / 1024 / 1024, 'MB')
            ]
          });
        },
        l = i(
          '\u1ea2nh \u0111\u1ea1i di\u1ec7n',
          s.tR.acceptTypes,
          s.tR.acceptSize,
          'image'
        ),
        o = i('\u1ea2nh b\xeca', s.YP.acceptTypes, s.YP.acceptSize, 'image'),
        c = i('CV', s.BZ.acceptTypes, s.BZ.acceptSize, 'application'),
        d = (0, r.jsx)(t.A, {
          color: 'error',
          my: 1,
          fontWeight: 700,
          fontSize: 13,
          children:
            'R\u1ea5t ti\u1ebfc, h\u1ec7 th\u1ed1ng ch\u1ec9 c\xf3 th\u1ec3 ph\xe2n t\xedch h\u1ed3 s\u01a1 ch\u1ee9a t\u1ed1i \u0111a 4000 t\u1eeb. Vui l\xf2ng t\u1ea3i h\u1ed3 s\u01a1 kh\xe1c !'
        }),
        m = (0, r.jsx)(t.A, {
          color: 'error',
          my: 1,
          fontWeight: 700,
          fontSize: 13,
          children:
            'Kh\xf4ng nh\u1eadn di\u1ec7n \u0111\u01b0\u1ee3c n\u1ed9i dung trong file h\u1ed3 s\u01a1 c\u1ee7a b\u1ea1n. Vui l\xf2ng t\u1ea3i h\u1ed3 s\u01a1 kh\xe1c !'
        });
    },
    65099: (e, n, a) => {
      a.d(n, { BZ: () => r, XS: () => t, YP: () => i, tR: () => s });
      const t = {
          companyAvatar:
            'https://th.bing.com/th/id/OIP.EK1rvrib-MWNflZRM2XiDQHaH_?pid=ImgDet&w=183&h=197&c=7&dpr=1.3',
          companyCover:
            'https://png.pngtree.com/background/20210706/original/pngtree-business-background-white-collar-jobs-picture-image_216619.jpg'
        },
        s = {
          acceptTypes: ['image/jpeg', 'image/png', 'image/gif'],
          acceptSize: 1048576
        },
        r = { acceptTypes: ['application/pdf'], acceptSize: 2097152 },
        i = {
          acceptTypes: ['image/jpeg', 'image/png', 'image/gif'],
          acceptSize: 4194304
        };
    },
    25172: (e, n, a) => {
      a.d(n, { A: () => i });
      var t = a(82907),
        s = a(36110),
        r = a(15001);
      const i = () => {
        const { toast: e, setUserApp: n } = (0, s.n)(),
          a = r.nZ.create,
          { mutate: i, isLoading: l } = (0, t.useMutation)(a, {
            onSuccess: (a) => {
              200 === a.status
                ? (e.success({ massage: a.message }),
                  n({ avatar: a.data.avatar }))
                : e.error({ massage: a.message });
            },
            onError: (n) => {
              e.error({ massage: n.response.data.message });
            }
          });
        return { onSaveData: i, isLoading: l };
      };
    },
    70737: (e, n, a) => {
      a.d(n, { A: () => i });
      var t = a(82907),
        s = a(36110),
        r = a(15001);
      const i = () => {
        const e = (0, t.useQueryClient)(),
          { toast: n } = (0, s.n)(),
          a = r.OY.create,
          { mutate: i, isLoading: l } = (0, t.useMutation)(a, {
            onSuccess: (a) => {
              200 === a.status
                ? (e.invalidateQueries('get-Profile'),
                  n.success({ massage: a.message }))
                : n.error({ massage: a.message });
            },
            onError: (e) => {
              n.error({ massage: e.response.data.message });
            }
          });
        return { onSaveData: i, isLoading: l };
      };
    },
    6897: (e, n, a) => {
      a.d(n, { F_: () => V, Ay: () => Y });
      var t = a(65043),
        s = a(34535),
        r = a(68903),
        i = a(85865),
        l = a(11906),
        o = a(19252),
        c = a(19464),
        d = a(83462),
        m = a(26600),
        h = a(35316),
        u = a(24858),
        x = a(67002),
        p = a(33173),
        v = a(49768),
        g = a(17913),
        A = a(60446),
        j = a.n(A),
        y = a(70737),
        f = a(82907),
        b = a(36110),
        S = a(15001);
      const z = () => {
        const e = (0, f.useQueryClient)(),
          { toast: n } = (0, b.n)(),
          a = S.ex.create,
          { mutate: t, isLoading: s } = (0, f.useMutation)(a, {
            onSuccess: (a) => {
              200 === a.status
                ? (e.invalidateQueries('get-Company'),
                  n.success({ massage: a.message }))
                : n.error({ massage: a.message });
            },
            onError: (e) => {
              n.error({ massage: e.response.data.message });
            }
          });
        return { onSaveData: t, isLoading: s };
      };
      var C = a(95851),
        M = a(25650),
        L = a(80881),
        w = a(65073),
        W = a(24524),
        F = a(70579);
      function D(e) {
        var n;
        const { isEmployee: a } = (0, b.n)(),
          { close: t, user: s } = e,
          { onSaveData: i } = (0, y.A)(),
          {
            control: l,
            handleSubmit: o,
            formState: { errors: d }
          } = (0, u.mN)({
            defaultValues: {
              ...s,
              dob: (0, M.vd)(s.dob, 'DD-MM-YYYY', 'DD-MM-YYYY'),
              sex:
                null === (n = g.im.find((e) => e.label === s.sex)) ||
                void 0 === n
                  ? void 0
                  : n.value,
              isMarried: s.isMarried
                ? '\u0110\xe3 k\u1ebft h\xf4n'
                : '\u0110\u1ed9c th\xe2n'
            }
          });
        return (0, F.jsxs)(c.A, {
          sx: { p: 3 },
          children: [
            (0, F.jsxs)(r.Ay, {
              container: !0,
              spacing: 3,
              mb: 4,
              children: [
                (0, F.jsx)(r.Ay, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  children: (0, F.jsx)(p.A, {
                    element: (0, F.jsx)(C.A, {}),
                    control: l,
                    errors: d,
                    fullWidth: !0,
                    id: 'name',
                    label: 'H\u1ecd v\xe0 t\xean',
                    name: 'name'
                  })
                }),
                (0, F.jsx)(r.Ay, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  children: (0, F.jsx)(p.A, {
                    element: (0, F.jsx)(C.A, {}),
                    control: l,
                    errors: d,
                    disabled: !0,
                    fullWidth: !0,
                    id: 'email',
                    label: 'Email',
                    name: 'email'
                  })
                }),
                (0, F.jsx)(r.Ay, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: (0, F.jsx)(p.A, {
                    element: (0, F.jsx)(C.A, {}),
                    control: l,
                    errors: d,
                    fullWidth: !0,
                    id: 'phone',
                    label: 'S\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
                    name: 'phone',
                    pattern: 'phone'
                  })
                }),
                (0, F.jsx)(r.Ay, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: (0, F.jsx)(p.A, {
                    element: (0, F.jsx)(C.A, {}),
                    control: l,
                    errors: d,
                    fullWidth: !0,
                    id: 'address',
                    label: '\u0110\u1ecba ch\u1ec9',
                    name: 'address'
                  })
                }),
                (0, F.jsx)(r.Ay, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  children: (0, F.jsx)(p.A, {
                    element: (0, F.jsx)(x.A, { maxDate: j()() }),
                    control: l,
                    errors: d,
                    fullWidth: !0,
                    id: 'dob',
                    label: 'Ng\xe0y sinh',
                    name: 'dob',
                    required: !0
                  })
                }),
                (0, F.jsx)(r.Ay, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  children: (0, F.jsx)(p.A, {
                    element: (0, F.jsx)(v.A, {}),
                    options: g.im,
                    control: l,
                    errors: d,
                    fullWidth: !0,
                    id: 'sex',
                    label: 'Gi\u1edbi t\xednh',
                    name: 'sex'
                  })
                }),
                a &&
                  (0, F.jsx)(r.Ay, {
                    item: !0,
                    xs: 12,
                    sm: 6,
                    children: (0, F.jsx)(p.A, {
                      element: (0, F.jsx)(v.A, {}),
                      options: g.Fg,
                      control: l,
                      errors: d,
                      fullWidth: !0,
                      id: 'isMarried',
                      label: 'T\xecnh tr\u1ea1ng h\xf4n nh\xe2n',
                      name: 'isMarried'
                    })
                  })
              ]
            }),
            (0, F.jsx)(L.A, {
              handleSubmit: o(async (e) => {
                const n = (0, M._g)(e.dob),
                  a = '\u0110\xe3 k\u1ebft h\xf4n' === e.isMarried ? '1' : '0',
                  s = { ...e, dob: n, isMarried: a };
                i(s), (0, w.gV)(s), t();
              }),
              handleCancel: () => t()
            })
          ]
        });
      }
      function T(e) {
        const { close: n, user: a } = e,
          { onSaveData: t } = z(),
          {
            control: s,
            handleSubmit: i,
            formState: { errors: l }
          } = (0, u.mN)({ defaultValues: { ...a } });
        return (0, F.jsxs)(c.A, {
          sx: { p: 3 },
          children: [
            (0, F.jsxs)(r.Ay, {
              container: !0,
              spacing: 3,
              mb: 4,
              children: [
                (0, F.jsx)(r.Ay, {
                  item: !0,
                  xs: 12,
                  children: (0, F.jsx)(p.A, {
                    element: (0, F.jsx)(C.A, {}),
                    control: s,
                    errors: l,
                    fullWidth: !0,
                    id: 'companyName',
                    label: 'T\xean c\xf4ng ty',
                    name: 'companyName',
                    multiline: !0,
                    required: !0
                  })
                }),
                (0, F.jsx)(r.Ay, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  children: (0, F.jsx)(p.A, {
                    element: (0, F.jsx)(C.A, {}),
                    control: s,
                    errors: l,
                    fullWidth: !0,
                    id: 'taxCode',
                    label: 'M\xe3 s\u1ed1 thu\u1ebf',
                    name: 'taxCode',
                    required: !0
                  })
                }),
                (0, F.jsx)(r.Ay, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  children: (0, F.jsx)(p.A, {
                    element: (0, F.jsx)(C.A, {}),
                    control: s,
                    errors: l,
                    fullWidth: !0,
                    id: 'companyLocation',
                    label: '\u0110\u1ecba ch\u1ec9',
                    name: 'companyLocation',
                    required: !0
                  })
                }),
                (0, F.jsx)(r.Ay, {
                  item: !0,
                  xs: 12,
                  children: (0, F.jsx)(p.A, {
                    element: (0, F.jsx)(W.A, {
                      size: 'small',
                      freeSolo: !0,
                      options: g.Pd,
                      autoComplete: !0,
                      autoSelect: !0,
                      autoHighlight: !0,
                      multiple: !1,
                      defaultValue:
                        null === a || void 0 === a ? void 0 : a.careerField
                    }),
                    control: s,
                    errors: l,
                    fullWidth: !0,
                    name: 'careerField',
                    label: 'L\u0129nh v\u1ef1c'
                  })
                }),
                (0, F.jsx)(r.Ay, {
                  item: !0,
                  xs: 12,
                  children: (0, F.jsx)(p.A, {
                    element: (0, F.jsx)(C.A, {}),
                    control: s,
                    errors: l,
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
            (0, F.jsx)(L.A, {
              handleSubmit: i((e) => {
                console.log(e.careerField), t(e), n();
              }),
              handleCancel: () => n()
            })
          ]
        });
      }
      var k = a(63656);
      const H = (0, s.Ay)(r.Ay)((e) => {
          let { theme: n } = e;
          return {
            fontFamily: n.typography.fontFamily,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            minHeight: 50
          };
        }),
        I = (0, s.Ay)(r.Ay)((e) => {
          let { theme: n } = e;
          return {
            fontFamily: n.typography.fontFamily,
            display: 'flex',
            alignItems: 'center'
          };
        }),
        V = (e) => {
          const { item: n } = e,
            [a, s] = (0, t.useState)(!1);
          return (0, F.jsxs)(r.Ay, {
            container: !0,
            sx: { borderTop: 1, borderColor: 'grey.300' },
            children: [
              'Gi\u1edbi thi\u1ec7u doanh nghi\u1ec7p' !== n.label &&
                (0, F.jsxs)(F.Fragment, {
                  children: [
                    (0, F.jsx)(H, {
                      item: !0,
                      xs: 6,
                      md: 4,
                      children: n.label
                    }),
                    (0, F.jsx)(I, {
                      item: !0,
                      xs: 6,
                      md: 8,
                      children: (0, F.jsx)(i.A, {
                        lineHeight: 2,
                        children: n.value
                      })
                    })
                  ]
                }),
              'Gi\u1edbi thi\u1ec7u doanh nghi\u1ec7p' === n.label &&
                (0, F.jsxs)(F.Fragment, {
                  children: [
                    (0, F.jsx)(H, { item: !0, xs: 12, children: n.label }),
                    (0, F.jsx)(I, {
                      item: !0,
                      xs: 12,
                      children: (0, F.jsx)(i.A, {
                        lineHeight: 2,
                        sx: {
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: a ? 100 : 3,
                          WebkitBoxOrient: 'vertical'
                        },
                        children: n.value
                      })
                    }),
                    (0, F.jsx)(l.A, {
                      onClick: () => {
                        s((e) => !e);
                      },
                      sx: { mx: 'auto' },
                      color: 'secondary',
                      children: a ? 'Thu g\u1ecdn' : '\u0110\u1ecdc th\xeam'
                    })
                  ]
                })
            ]
          });
        };
      function Y(e) {
        const { user: n, data: a, title: s, editIcon: r, openForm: l } = e,
          [u, x] = (0, t.useState)(!1),
          p = () => {
            x(!1);
          },
          v =
            'User' === l
              ? (0, F.jsx)(D, { close: p, user: n })
              : (0, F.jsx)(T, { close: p, user: n });
        return (0, F.jsxs)(o.A, {
          sx: { paddingX: 2 },
          children: [
            (0, F.jsxs)(c.A, {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              children: [
                (0, F.jsxs)(c.A, {
                  display: 'flex',
                  children: [
                    r,
                    (0, F.jsx)(c.A, {
                      children: (0, F.jsx)(i.A, {
                        fontWeight: 700,
                        fontSize: 22,
                        lineHeight: 3,
                        children: s
                      })
                    })
                  ]
                }),
                (0, F.jsx)(k.A, { onClick: () => x(!0) }),
                (0, F.jsxs)(d.A, {
                  open: u,
                  fullWidth: !0,
                  maxWidth: 'md',
                  children: [
                    (0, F.jsx)(m.A, {
                      sx: {
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: '1.3rem'
                      },
                      children: s
                    }),
                    (0, F.jsx)(h.A, { children: v })
                  ]
                })
              ]
            }),
            (0, F.jsx)(c.A, {
              sx: { mt: 1 },
              children: a.map((e, n) => (0, F.jsx)(V, { item: e }, n))
            })
          ]
        });
      }
    },
    58836: (e, n, a) => {
      a.r(n), a.d(n, { default: () => J });
      var t = a(65043),
        s = a(29490),
        r = a(19252),
        i = a(68903),
        l = a(24056),
        o = a(97753),
        c = a(34535),
        d = a(19464),
        m = a(10507),
        h = a(3435),
        u = a(6897),
        x = a(85865),
        p = a(81045),
        v = a(11906),
        g = a(81637),
        A = a(91281),
        j = a(44046),
        y = a(99562),
        f = a(37999),
        b = a(17392),
        S = a(36110),
        z = a(69570),
        C = a(24858),
        M = a(33173),
        L = a(65099),
        w = a(25172),
        W = a(52247),
        F = a(70579);
      const D = (0, c.Ay)('input')({ display: 'none' });
      function T() {
        const { user: e } = (0, S.n)(),
          { onSaveData: n, isLoading: a } = (0, w.A)(),
          { acceptTypes: s, acceptSize: l } = L.tR,
          [o, c] = (0, t.useState)(!0),
          [m, h] = (0, t.useState)({ avatar: '', error: !1, imageFile: null });
        (0, t.useEffect)(() => {
          u();
        }, [e]);
        const u = () => {
            var n;
            h({
              ...m,
              avatar:
                null === e ||
                void 0 === e ||
                null === (n = e.avatar) ||
                void 0 === n
                  ? void 0
                  : n.replace(' ', '')
            }),
              c(!0);
          },
          T = (e) => {
            const n = e.target.files[0];
            if (!n) return;
            if (!s.includes(n.type) || n.size > l)
              return void h({ ...m, error: !0 });
            const a = URL.createObjectURL(n);
            h({ avatar: a, error: !1, imageFile: n }), c(!1);
          },
          { control: k, handleSubmit: H } = (0, C.mN)({
            defaultValues: { ...e }
          });
        return (0, F.jsxs)(r.A, {
          children: [
            (0, F.jsxs)(d.A, {
              display: 'flex',
              sx: { pb: 1, borderBottom: 1, borderColor: 'grey.300' },
              children: [
                (0, F.jsx)(f.A, { color: 'primary', sx: { fontSize: 40 } }),
                (0, F.jsx)(x.A, {
                  fontWeight: 700,
                  fontSize: 22,
                  lineHeight: 2,
                  children: 'H\u1ed3 s\u01a1 c\u1ee7a t\xf4i'
                })
              ]
            }),
            (0, F.jsx)(d.A, {
              mt: 2,
              children: (0, F.jsxs)(i.Ay, {
                container: !0,
                columnSpacing: { sm: 1 },
                children: [
                  (0, F.jsxs)(i.Ay, {
                    item: !0,
                    xs: 6,
                    md: 4,
                    display: 'flex',
                    flexWrap: 'wrap',
                    children: [
                      (0, F.jsxs)(d.A, {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignContent: 'center',
                        justifyItems: 'center',
                        rowGap: 0.5,
                        children: [
                          (0, F.jsxs)(b.A, {
                            component: 'label',
                            sx: { borderRadius: 10 },
                            children: [
                              (0, F.jsx)(p.A, {
                                alt: e.name,
                                src: m.avatar,
                                sx: {
                                  width: 120,
                                  height: 120,
                                  bgcolor: '#a0b9cfc2'
                                }
                              }),
                              (0, F.jsx)(M.A, {
                                element: (0, F.jsx)(D, {
                                  type: 'file',
                                  accept: 'image/*'
                                }),
                                control: k,
                                name: 'userAvatar',
                                id: 'userAvatar',
                                onChange: T
                              })
                            ]
                          }),
                          !m.avatar &&
                            (0, F.jsx)('label', {
                              htmlFor: 'userAvatar',
                              children: (0, F.jsxs)(v.A, {
                                component: 'label',
                                size: 'small',
                                startIcon: (0, F.jsx)(A.A, {}),
                                variant: 'outlined',
                                color: 'secondary',
                                children: [
                                  (0, F.jsx)(M.A, {
                                    element: (0, F.jsx)(D, {
                                      type: 'file',
                                      accept: 'image/*'
                                    }),
                                    control: k,
                                    name: 'userAvatar',
                                    id: 'userAvatar',
                                    onChange: T
                                  }),
                                  'T\u1ea3i l\xean'
                                ]
                              })
                            }),
                          m.avatar &&
                            (0, F.jsxs)(F.Fragment, {
                              children: [
                                !o &&
                                  !a &&
                                  (0, F.jsx)(v.A, {
                                    component: 'label',
                                    onClick: H(async (e) => {
                                      const a = await (0, z.QM)(
                                        m.imageFile
                                      ).catch(() => '');
                                      h({ ...m, avatar: a, error: !1 });
                                      const t = { ...e, avatar: a };
                                      n(t), c(!0);
                                    }),
                                    size: 'small',
                                    startIcon: (0, F.jsx)(y.A, {}),
                                    variant: 'outlined',
                                    color: 'secondary',
                                    children: 'L\u01b0u'
                                  }),
                                a
                                  ? (0, F.jsx)(g.A, { size: 20 })
                                  : o &&
                                    (0, F.jsx)(v.A, {
                                      component: 'label',
                                      onClick: H(async (e) => {
                                        await (0, z.Vr)(m.avatar),
                                          h({ ...m, avatar: null, error: !1 });
                                        const a = { ...e, avatar: ' ' };
                                        n(a);
                                      }),
                                      size: 'small',
                                      startIcon: (0, F.jsx)(j.A, {}),
                                      variant: 'outlined',
                                      color: 'secondary',
                                      children: 'X\xf3a'
                                    })
                              ]
                            })
                        ]
                      }),
                      m.error && W.rN
                    ]
                  }),
                  (0, F.jsx)(i.Ay, {
                    item: !0,
                    xs: 6,
                    md: 8,
                    children: (0, F.jsxs)(d.A, {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      sx: { lineHeight: 200 },
                      children: [
                        (0, F.jsx)(x.A, {
                          fontSize: 18,
                          fontWeight: 700,
                          lineHeight: 3,
                          children: e.name
                        }),
                        (0, F.jsxs)(x.A, { children: ['Phone: ', e.phone] }),
                        (0, F.jsxs)(x.A, { children: ['Email: ', e.email] })
                      ]
                    })
                  })
                ]
              })
            })
          ]
        });
      }
      var k = a(60446),
        H = a.n(k);
      const I = (0, c.Ay)(d.A)((e) => {
        let { theme: n } = e;
        return {
          background: '#ffff',
          padding: n.spacing(2),
          marginBottom: n.spacing(4),
          boxShadow: '2px 2px 6px #aae2f7'
        };
      });
      function V() {
        const { isEmployee: e } = (0, S.n)(),
          { userProfile: n } = (0, h.A)(),
          a =
            null !== n && void 0 !== n && n.isMarried
              ? '\u0110\xe3 k\u1ebft h\xf4n'
              : '\u0110\u1ed9c th\xe2n',
          t = H()(
            null === n || void 0 === n ? void 0 : n.dob,
            'DD-MM-YYYY'
          ).isValid()
            ? null === n || void 0 === n
              ? void 0
              : n.dob
            : null,
          s = [
            {
              label: 'H\u1ecd v\xe0 t\xean',
              value: null === n || void 0 === n ? void 0 : n.name
            },
            {
              label: 'Gi\u1edbi t\xednh',
              value: null === n || void 0 === n ? void 0 : n.sex
            },
            { label: 'Ng\xe0y sinh', value: t },
            {
              label: 'Email',
              value: null === n || void 0 === n ? void 0 : n.email
            },
            {
              label: 'S\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
              value: null === n || void 0 === n ? void 0 : n.phone
            },
            { label: 'T\xecnh tr\u1ea1ng h\xf4n nh\xe2n', value: a },
            {
              label: '\u0110\u1ecba ch\u1ec9',
              value: null === n || void 0 === n ? void 0 : n.address
            }
          ];
        return (
          e ||
            s.splice(
              s.findIndex(
                (e) => 'T\xecnh tr\u1ea1ng h\xf4n nh\xe2n' === e.label
              ),
              1
            ),
          (0, F.jsxs)(F.Fragment, {
            children: [
              (0, F.jsx)(I, { children: (0, F.jsx)(T, {}) }),
              (0, F.jsx)(I, {
                children: (0, F.jsx)(u.Ay, {
                  user: n,
                  data: s,
                  title: 'Th\xf4ng tin c\xe1 nh\xe2n',
                  editIcon: (0, F.jsx)(m.A, {
                    color: 'primary',
                    sx: { fontSize: 60 }
                  }),
                  openForm: 'User'
                })
              })
            ]
          })
        );
      }
      var Y = a(51726),
        E = a(82907),
        R = a(15001);
      const N = () => {
        const { isEmployer: e } = (0, S.n)(),
          { data: n, isLoading: a } = (0, E.useQuery)('get-Company', R.K5.get, {
            retry: 1,
            refetchOnWindowFocus: !1,
            enabled: e
          });
        return {
          company: null === n || void 0 === n ? void 0 : n.data,
          isLoading: a
        };
      };
      var X = a(63336),
        B = a(45424),
        O = a(32143);
      const P = () => {
          const { toast: e } = (0, S.n)(),
            n = R.vU.create,
            { mutate: a, isLoading: t } = (0, E.useMutation)(n, {
              onSuccess: (n) => {
                200 === n.status
                  ? e.success({ massage: n.message })
                  : e.error({ massage: n.message });
              },
              onError: (n) => {
                e.error({ massage: n.response.data.message });
              }
            });
          return { onSaveData: a, isLoading: t };
        },
        _ = () => {
          const { toast: e } = (0, S.n)(),
            n = R.eB.create,
            { mutate: a, isLoading: t } = (0, E.useMutation)(n, {
              onSuccess: (n) => {
                200 === n.status
                  ? e.success({ massage: n.message })
                  : e.error({ massage: n.message });
              },
              onError: (n) => {
                e.error({ massage: n.response.data.message });
              }
            });
          return { onSaveData: a, isLoading: t };
        },
        U = (0, c.Ay)('img')({
          width: '100%',
          height: '280px',
          objectFit: 'cover'
        }),
        G = (0, c.Ay)(X.A)({
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }),
        Q = (0, c.Ay)('input')({ display: 'none' });
      const q = function () {
          const { user: e } = (0, S.n)(),
            { company: n } = N(),
            { companyAvatarType: a, companyCoverType: s } = z.KG,
            { onSaveData: i } = P(),
            { onSaveData: l } = _(),
            o = { img: '', error: !1 },
            [c, m] = (0, t.useState)({ ...o, img: L.XS.companyAvatar }),
            [h, u] = (0, t.useState)({ ...o, img: L.XS.companyCover }),
            [g, A] = (0, t.useState)(null),
            y = Boolean(g),
            f = async (e, n, a, t) => {
              const s = 'cover' === t ? h : c,
                r = e.target.files[0];
              if (!r) return;
              const o = a.acceptTypes,
                d = a.acceptSize;
              if (!o.includes(r.type) || r.size > d)
                return void n({ ...s, error: !0 });
              const m = URL.createObjectURL(r),
                u = await (0, z.QM)(r).catch(() => '');
              'avatar' === t ? i({ logo: u }) : l({ banner: u }),
                n({ img: m, error: !1 });
            },
            C = async (e, a, t) => {
              const s = 'cover' === t ? h : c,
                r = 'cover' === t ? L.XS.companyCover : L.XS.companyAvatar;
              'avatar' === t
                ? await (0, z.Vr)(
                    null === n || void 0 === n ? void 0 : n.logo
                  ).then(() => i({ logo: ' ' }))
                : await (0, z.Vr)(
                    null === n || void 0 === n ? void 0 : n.banner
                  ).then(() => l({ banner: ' ' })),
                a({ ...s, img: r, error: !1 });
            },
            M = (e) => {
              A(e.currentTarget);
            },
            w = () => {
              A(null);
            };
          return (
            (0, t.useEffect)(() => {
              (async () => {
                var e, a;
                m({
                  ...c,
                  img:
                    null !== n &&
                    void 0 !== n &&
                    null !== (e = n.logo) &&
                    void 0 !== e &&
                    e.trim()
                      ? null === n || void 0 === n
                        ? void 0
                        : n.logo
                      : L.XS.companyAvatar
                }),
                  u({
                    ...h,
                    img:
                      null !== n &&
                      void 0 !== n &&
                      null !== (a = n.banner) &&
                      void 0 !== a &&
                      a.trim()
                        ? null === n || void 0 === n
                          ? void 0
                          : n.banner
                        : L.XS.companyCover
                  });
              })();
            }, [e, n]),
            (0, F.jsxs)(F.Fragment, {
              children: [
                (0, F.jsxs)(G, {
                  elevation: 12,
                  children: [
                    (0, F.jsx)(U, { src: h.img, alt: 'cover' }),
                    (0, F.jsx)(v.A, {
                      color: 'primary',
                      variant: 'contained',
                      sx: {
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        zIndex: 1,
                        opacity: 0.8
                      },
                      onClick: M,
                      children: 'Ch\u1ec9nh s\u1eeda \u1ea3nh b\xeca'
                    }),
                    (0, F.jsxs)(B.A, {
                      open: y,
                      onClose: w,
                      anchorEl: g,
                      elevation: 24,
                      children: [
                        (0, F.jsxs)(O.A, {
                          sx: { fontWeight: 700 },
                          children: [
                            (0, F.jsx)('label', {
                              htmlFor: 'cover',
                              children: 'T\u1ea3i \u1ea3nh m\u1edbi'
                            }),
                            (0, F.jsx)(Q, {
                              id: 'cover',
                              type: 'file',
                              accept: 'image/*',
                              onChange: (e) => {
                                f(e, u, L.YP, 'cover'), w();
                              }
                            })
                          ]
                        }),
                        h.img !== L.XS.companyCover &&
                          (0, F.jsx)(O.A, {
                            sx: { fontWeight: 700 },
                            onClick: (e) => {
                              C(0, u, 'cover'), w();
                            },
                            children: 'G\u1ee1'
                          })
                      ]
                    })
                  ]
                }),
                (0, F.jsxs)(r.A, {
                  sx: { display: 'flex', alignItems: 'center' },
                  children: [
                    (0, F.jsxs)(d.A, {
                      sx: { flex: 1, display: 'flex', alignItems: 'center' },
                      children: [
                        (0, F.jsxs)(d.A, {
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          children: [
                            (0, F.jsxs)(b.A, {
                              component: 'label',
                              sx: { borderRadius: 10, mt: -5 },
                              children: [
                                (0, F.jsx)(p.A, {
                                  src: c.img,
                                  sx: {
                                    width: 120,
                                    height: 120,
                                    bgcolor: '#fff',
                                    border: 2,
                                    borderColor: 'grey.300'
                                  }
                                }),
                                (0, F.jsx)(Q, {
                                  id: 'avatar',
                                  type: 'file',
                                  accept: 'image/*',
                                  onChange: (e) => f(e, m, L.tR, 'avatar')
                                })
                              ]
                            }),
                            c.img !== L.XS.companyAvatar &&
                              (0, F.jsx)(v.A, {
                                component: 'label',
                                onClick: (e) => {
                                  C(0, m, 'avatar');
                                },
                                size: 'small',
                                startIcon: (0, F.jsx)(j.A, {}),
                                variant: 'contained',
                                color: 'primary',
                                sx: { mt: -2, opacity: 0.7 },
                                children: 'X\xf3a'
                              })
                          ]
                        }),
                        (0, F.jsx)(x.A, {
                          variant: 'h3',
                          children:
                            null === n || void 0 === n ? void 0 : n.companyName
                        })
                      ]
                    }),
                    (0, F.jsxs)(d.A, {
                      children: [h.error && W.n7, c.error && W.rN]
                    })
                  ]
                })
              ]
            })
          );
        },
        Z = (0, c.Ay)(d.A)((e) => {
          let { theme: n } = e;
          return {
            background: '#ffff',
            padding: n.spacing(2),
            marginBottom: n.spacing(4),
            boxShadow: '2px 2px 6px #aae2f7'
          };
        });
      function K() {
        const { company: e } = N();
        return (0, F.jsxs)(F.Fragment, {
          children: [
            (0, F.jsx)(Z, { sx: { p: 0, pb: 2 }, children: (0, F.jsx)(q, {}) }),
            (0, F.jsx)(Z, {
              children: (0, F.jsx)(u.Ay, {
                user: e,
                data: ((e) => [
                  {
                    label: 'T\xean c\xf4ng ty',
                    value: null === e || void 0 === e ? void 0 : e.companyName
                  },
                  {
                    label: '\u0110\u1ecba ch\u1ec9 c\xf4ng ty',
                    value:
                      null === e || void 0 === e ? void 0 : e.companyLocation
                  },
                  {
                    label: 'L\u0129nh v\u1ef1c',
                    value: null === e || void 0 === e ? void 0 : e.careerField
                  },
                  {
                    label: 'M\xe3 s\u1ed1 thu\u1ebf',
                    value: null === e || void 0 === e ? void 0 : e.taxCode
                  },
                  {
                    label: 'Gi\u1edbi thi\u1ec7u doanh nghi\u1ec7p',
                    value: null === e || void 0 === e ? void 0 : e.description
                  }
                ])(e),
                title: 'Th\xf4ng tin c\xf4ng ty',
                editIcon: (0, F.jsx)(Y.A, {
                  color: 'primary',
                  sx: { fontSize: 56 }
                }),
                openForm: 'Company'
              })
            })
          ]
        });
      }
      var $ = a(67902);
      function J() {
        const { isEmployer: e } = (0, S.n)(),
          [n, a] = (0, t.useState)('info_account'),
          c = [
            {
              value: 'info_account',
              label: 'Th\xf4ng tin c\xe1 nh\xe2n',
              show: !0
            },
            { value: 'info_company', label: 'Th\xf4ng tin c\xf4ng ty', show: e }
          ];
        return (0, F.jsxs)(F.Fragment, {
          children: [
            (0, F.jsx)(s.mg, {
              children: (0, F.jsx)('title', {
                children: 'User Settings - Applications'
              })
            }),
            (0, F.jsx)(r.A, {
              maxWidth: 'md',
              sx: { marginTop: 4 },
              children: (0, F.jsxs)(i.Ay, {
                container: !0,
                direction: 'row',
                justifyContent: 'center',
                alignItems: 'stretch',
                spacing: 3,
                children: [
                  (0, F.jsx)(i.Ay, {
                    item: !0,
                    xs: 12,
                    children: (0, F.jsx)($.A, {
                      onChange: (e, n) => {
                        a(n);
                      },
                      value: n,
                      variant: 'scrollable',
                      scrollButtons: 'auto',
                      textColor: 'primary',
                      indicatorColor: 'primary',
                      sx: { borderBottom: 2, borderColor: 'grey.300', mb: -2 },
                      children: c
                        .filter((e) => e.show)
                        .map((e) =>
                          (0, F.jsx)(
                            l.A,
                            { label: e.label, value: e.value },
                            e.value
                          )
                        )
                    })
                  }),
                  (0, F.jsxs)(i.Ay, {
                    item: !0,
                    xs: 12,
                    children: [
                      'info_account' === n && (0, F.jsx)(V, {}),
                      'info_company' === n && (0, F.jsx)(K, {})
                    ]
                  })
                ]
              })
            }),
            (0, F.jsx)(o.A, {})
          ]
        });
      }
    },
    91281: (e, n, a) => {
      var t = a(32392);
      n.A = void 0;
      var s = t(a(40039)),
        r = a(70579),
        i = (0, s.default)(
          (0, r.jsx)('path', {
            d: 'M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z'
          }),
          'AddPhotoAlternateOutlined'
        );
      n.A = i;
    },
    36134: (e, n, a) => {
      var t = a(32392);
      n.A = void 0;
      var s = t(a(40039)),
        r = a(70579),
        i = (0, s.default)(
          (0, r.jsx)('path', {
            d: 'm20 7 .94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zM8.5 7l.94-2.06L11.5 4l-2.06-.94L8.5 1l-.94 2.06L5.5 4l2.06.94zM20 12.5l-.94 2.06-2.06.94 2.06.94.94 2.06.94-2.06L23 15.5l-2.06-.94zm-2.29-3.38-2.83-2.83c-.2-.19-.45-.29-.71-.29-.26 0-.51.1-.71.29L2.29 17.46c-.39.39-.39 1.02 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l11.17-11.17c.39-.39.39-1.03 0-1.42zm-3.54-.7 1.41 1.41L14.41 11 13 9.59l1.17-1.17zM5.83 19.59l-1.41-1.41L11.59 11 13 12.41l-7.17 7.18z'
          }),
          'AutoFixHighOutlined'
        );
      n.A = i;
    },
    44046: (e, n, a) => {
      var t = a(32392);
      n.A = void 0;
      var s = t(a(40039)),
        r = a(70579),
        i = (0, s.default)(
          (0, r.jsx)('path', {
            d: 'M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
          }),
          'DoNotDisturbOnOutlined'
        );
      n.A = i;
    },
    10507: (e, n, a) => {
      var t = a(32392);
      n.A = void 0;
      var s = t(a(40039)),
        r = a(70579),
        i = (0, s.default)(
          (0, r.jsx)('path', {
            d: 'M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z'
          }),
          'ListAltOutlined'
        );
      n.A = i;
    },
    37999: (e, n, a) => {
      var t = a(32392);
      n.A = void 0;
      var s = t(a(40039)),
        r = a(70579),
        i = (0, s.default)(
          (0, r.jsx)('path', {
            d: 'M17 10.43V2H7v8.43c0 .35.18.68.49.86l4.18 2.51-.99 2.34-3.41.29 2.59 2.24L9.07 22 12 20.23 14.93 22l-.78-3.33 2.59-2.24-3.41-.29-.99-2.34 4.18-2.51c.3-.18.48-.5.48-.86zm-4 1.8-1 .6-1-.6V3h2v9.23z'
          }),
          'MilitaryTech'
        );
      n.A = i;
    },
    99562: (e, n, a) => {
      var t = a(32392);
      n.A = void 0;
      var s = t(a(40039)),
        r = a(70579),
        i = (0, s.default)(
          (0, r.jsx)('path', {
            d: 'M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10L22 5.18zm-2.21 5.04c.13.57.21 1.17.21 1.78 0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44C16.1 2.67 14.13 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.19-.22-2.33-.6-3.39l-1.61 1.61z'
          }),
          'TaskAlt'
        );
      n.A = i;
    }
  }
]);
//# sourceMappingURL=836.e71ef4a3.chunk.js.map
