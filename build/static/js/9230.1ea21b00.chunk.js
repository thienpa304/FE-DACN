'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [9230],
  {
    67002: (e, n, i) => {
      i.d(n, { A: () => d });
      var t = i(89302),
        r = i(898),
        s = i(58390),
        o = i(60446),
        l = i.n(o),
        a = i(70579);
      function d(e) {
        return (0, a.jsx)(s.$, {
          dateAdapter: t.R,
          children: (0, a.jsx)(r.l, {
            format: 'DD/MM/YYYY',
            ...e,
            value: e.value ? l()(e.value) : null,
            slotProps: { textField: { size: 'small', fullWidth: !0 } }
          })
        });
      }
    },
    97753: (e, n, i) => {
      i.d(n, { A: () => a });
      var t = i(34535),
        r = i(19252),
        s = i(19464),
        o = i(70579);
      const l = (0, t.Ay)(r.A)((e) => {
        let { theme: n } = e;
        return '\n        margin-top: '.concat(n.spacing(4), ';\n');
      });
      const a = function () {
        return (0, o.jsx)(l, {
          className: 'footer-wrapper',
          children: (0, o.jsx)(s.A, {
            pb: 2,
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            textAlign: { xs: 'center', md: 'left' },
            justifyContent: 'space-between'
          })
        });
      };
    },
    58555: (e, n, i) => {
      i.d(n, { A: () => o });
      var t = i(65043),
        r = i(89577),
        s = i(70579);
      const o = t.forwardRef(function (e, n) {
        const { onChange: i, ...t } = e;
        return (0, s.jsx)(r.HG, {
          ...t,
          getInputRef: n,
          onValueChange: (n) => {
            i({ target: { name: e.name, value: n.value } });
          },
          thousandSeparator: !0,
          valueIsNumericString: !0
        });
      });
    },
    49768: (e, n, i) => {
      i.d(n, { A: () => a });
      i(65043);
      var t = i(79190),
        r = i(32143),
        s = i(53193),
        o = i(72221),
        l = i(70579);
      function a(e) {
        const { options: n = [], label: i, labelmargintop: a = 0 } = e;
        return (0, l.jsxs)(s.A, {
          fullWidth: !0,
          children: [
            (0, l.jsx)(t.A, { size: 'small', sx: { mt: a }, children: i }),
            (0, l.jsx)(o.A, {
              size: 'small',
              ...e,
              children: n.map((e, n) =>
                (0, l.jsx)(r.A, { value: e.value, children: e.label }, n)
              )
            })
          ]
        });
      }
    },
    95851: (e, n, i) => {
      i.d(n, { A: () => s });
      var t = i(67784),
        r = i(70579);
      const s = (e) => (0, r.jsx)(t.A, { size: 'small', fullWidth: !0, ...e });
    },
    89230: (e, n, i) => {
      i.d(n, { A: () => _ });
      var t = i(65043),
        r = i(19464),
        s = i(19252),
        o = i(68903),
        l = i(12110),
        a = i(79958),
        d = i(39336),
        c = i(26494),
        u = i(85865),
        m = i(51787),
        p = i(27600),
        x = i(53404),
        A = i(81637),
        j = i(24858),
        g = i(60446),
        h = i.n(g),
        v = i(62237),
        f = i(17913),
        y = i(19290),
        b = i(33173),
        S = i(49768),
        q = i(54494),
        k = i(95851),
        T = i(58555),
        w = i(97753),
        C = i(82907),
        D = i(36110),
        I = i(53679),
        L = i(86971);
      const P = () => {
        const { toast: e } = (0, D.n)(),
          n = (0, L.Zp)(),
          { mutate: i, isLoading: t } = (0, C.useMutation)(I.L8.create, {
            onSuccess: (i) => {
              200 === i.status
                ? (e.success({ massage: i.message }),
                  n('/employer/recruitment/list'))
                : e.error({ massage: i.message });
            },
            onError: (n) => {
              e.error({ massage: n.response.data.message });
            }
          });
        return { onSaveData: i, isLoading: t };
      };
      var R = i(21886);
      const N = () => {
        const e = (0, C.useQueryClient)(),
          { toast: n } = (0, D.n)(),
          i = (0, L.Zp)(),
          { mutate: t, isLoading: r } = (0, C.useMutation)(
            (e) => {
              let [n, i] = e;
              return I.L8.update(n, i);
            },
            {
              onSuccess: (t) => {
                200 === t.status
                  ? (e.invalidateQueries(['job-getById']),
                    n.success({ massage: t.message }),
                    i('/employer/recruitment/list'))
                  : n.error({ massage: t.message });
              },
              onError: (e) => {
                n.error({ massage: e.response.data.message });
              }
            }
          );
        return { onSaveDataById: t, isLoading: r };
      };
      var B = i(67002),
        O = i(25650),
        V = i(78910),
        M = i(3435),
        W = i(91401),
        E = i(24524),
        F = i(70579);
      const J = {
          sex: '',
          positionLevel: '',
          degree: '',
          employmentType: '',
          experience: '',
          jobDescription: '',
          jobRequirements: '',
          benefits: '',
          profession: '',
          email: '',
          name: '',
          address: '',
          phone: '',
          contactAddress: '',
          requiredSkills: ''
        },
        _ = (e) => {
          var n, i;
          let { title: g, selectedId: C } = e;
          const { onSaveData: D } = P(),
            { onSaveDataById: I } = N(),
            { data: L, isLoading: _, isFetching: Y } = (0, R.A)(C),
            [z, H] = (0, t.useState)([]),
            [Q, Z] = (0, t.useState)(!1),
            [$, K] = (0, t.useState)(''),
            [G, X] = (0, t.useState)(null),
            [U, ee] = (0, t.useState)(null),
            [ne, ie] = (0, t.useState)([]),
            { profile: te } = (0, M.A)(),
            re = (t.useRef(null), (0, j.mN)({ defaultValues: J })),
            {
              control: se,
              reset: oe,
              formState: { errors: le },
              handleSubmit: ae
            } = re,
            de = async (e) => {
              const n = {
                jobDescription: (0, O.Cu)(JSON.stringify(e.jobDescription)),
                jobRequirements: (0, O.Cu)(JSON.stringify(e.jobRequirements))
              };
              K(JSON.stringify(n)), Z(!0);
              const i = await (0, W.A)(y.OZ, [n], null, { 58: 5, 60: 5 });
              H(i);
            };
          return (
            (0, t.useEffect)(() => {
              L
                ? oe(L)
                : C ||
                  oe({
                    name: null === te || void 0 === te ? void 0 : te.name,
                    email: null === te || void 0 === te ? void 0 : te.email,
                    phone: null === te || void 0 === te ? void 0 : te.phone,
                    contactAddress:
                      null === te || void 0 === te ? void 0 : te.address
                  });
            }, [JSON.stringify(L), JSON.stringify(te)]),
            (0, t.useEffect)(() => {
              if (z.length > 0 && z[0]) {
                const e = (0, V.Z)(z),
                  n = G.requiredSkills + ', ' + e;
                C ? I([C, { ...G, keywords: n }]) : D({ ...G, keywords: n });
              }
              Z(!1);
            }, [z]),
            Y
              ? (0, F.jsx)(v.A, {})
              : (0, F.jsxs)(r.A, {
                  id: 'form-create',
                  children: [
                    (0, F.jsx)(j.Op, {
                      ...re,
                      children: (0, F.jsx)(s.A, {
                        maxWidth: 'xl',
                        children: (0, F.jsx)(o.Ay, {
                          container: !0,
                          direction: 'row',
                          justifyContent: 'center',
                          alignItems: 'stretch',
                          spacing: 3,
                          marginTop: 0,
                          children: (0, F.jsx)(o.Ay, {
                            item: !0,
                            xs: 12,
                            children: (0, F.jsxs)(l.A, {
                              children: [
                                (0, F.jsx)(a.A, {
                                  title:
                                    g || 'T\u1ea1o Tin Tuy\u1ec3n D\u1ee5ng'
                                }),
                                (0, F.jsx)(d.A, {}),
                                (0, F.jsxs)(c.A, {
                                  children: [
                                    (0, F.jsx)(u.A, {
                                      variant: 'h6',
                                      marginBottom: 2,
                                      children: 'Th\xf4ng tin c\u01a1 b\u1ea3n'
                                    }),
                                    (0, F.jsxs)(o.Ay, {
                                      container: !0,
                                      spacing: 3,
                                      children: [
                                        (0, F.jsx)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          children: (0, F.jsx)(b.A, {
                                            element: (0, F.jsx)(k.A, {}),
                                            control: se,
                                            errors: le,
                                            required: !0,
                                            id: 'jobTitle',
                                            label: 'Ch\u1ee9c danh',
                                            placeholder:
                                              'V\u1ecb tr\xed hi\u1ec3n th\u1ecb \u0111\u0103ng tuy\u1ec3n',
                                            name: 'jobTitle',
                                            inputProps: { maxLength: 300 },
                                            multiline: !0,
                                            minRows: 1
                                          })
                                        }),
                                        (0, F.jsx)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          children: (0, F.jsx)(b.A, {
                                            element: (0, F.jsx)(E.A, {
                                              limitTags: 7,
                                              options: f.VL.map((e) => e.value)
                                            }),
                                            defaultValue:
                                              null === L ||
                                              void 0 === L ||
                                              null === (n = L.profession) ||
                                              void 0 === n
                                                ? void 0
                                                : n.split(', '),
                                            control: se,
                                            errors: le,
                                            id: 'profession',
                                            label: 'Ngh\u1ec1 nghi\u1ec7p',
                                            name: 'profession',
                                            required: !0
                                          })
                                        }),
                                        (0, F.jsx)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          md: 4,
                                          children: (0, F.jsx)(b.A, {
                                            element: (0, F.jsx)(S.A, {}),
                                            options: f.pX,
                                            control: se,
                                            errors: le,
                                            id: 'employmentType',
                                            label:
                                              'H\xecnh th\u1ee9c l\xe0m vi\u1ec7c',
                                            name: 'employmentType',
                                            required: !0
                                          })
                                        }),
                                        (0, F.jsx)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          md: 4,
                                          children: (0, F.jsx)(b.A, {
                                            options: f.$P,
                                            element: (0, F.jsx)(S.A, {}),
                                            control: se,
                                            errors: le,
                                            id: 'degree',
                                            label: 'B\u1eb1ng c\u1ea5p',
                                            name: 'degree',
                                            required: !0
                                          })
                                        }),
                                        (0, F.jsx)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          md: 4,
                                          children: (0, F.jsx)(b.A, {
                                            options: f.P7,
                                            element: (0, F.jsx)(S.A, {}),
                                            control: se,
                                            errors: le,
                                            id: 'experience',
                                            label: 'Kinh nghi\u1ec7m',
                                            name: 'experience',
                                            required: !0
                                          })
                                        }),
                                        (0, F.jsx)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          md: 4,
                                          children: (0, F.jsx)(b.A, {
                                            options: f.F1,
                                            element: (0, F.jsx)(S.A, {}),
                                            control: se,
                                            errors: le,
                                            id: 'positionLevel',
                                            label: 'C\u1ea5p b\u1eadc',
                                            name: 'positionLevel',
                                            required: !0
                                          })
                                        }),
                                        (0, F.jsx)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          md: 2,
                                          children: (0, F.jsx)(b.A, {
                                            element: (0, F.jsx)(k.A, {
                                              InputProps: {
                                                inputProps: { min: 0 }
                                              }
                                            }),
                                            control: se,
                                            errors: le,
                                            id: 'minAge',
                                            label:
                                              '\u0110\u1ed9 tu\u1ed5i t\u1ed1i thi\u1ec3u',
                                            name: 'minAge',
                                            type: 'number',
                                            pattern: 'integer',
                                            required: !0
                                          })
                                        }),
                                        (0, F.jsx)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          md: 2,
                                          children: (0, F.jsx)(b.A, {
                                            element: (0, F.jsx)(k.A, {
                                              InputProps: {
                                                inputProps: { min: 0 }
                                              }
                                            }),
                                            control: se,
                                            errors: le,
                                            id: 'maxAge',
                                            label:
                                              '\u0110\u1ed9 tu\u1ed5i t\u1ed1i \u0111a',
                                            type: 'number',
                                            name: 'maxAge',
                                            pattern: 'integer',
                                            required: !0
                                          })
                                        }),
                                        (0, F.jsx)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          md: 4,
                                          children: (0, F.jsx)(b.A, {
                                            options: f.eW,
                                            element: (0, F.jsx)(S.A, {}),
                                            control: se,
                                            errors: le,
                                            id: 'sex',
                                            label:
                                              'Y\xeau c\u1ea7u gi\u1edbi t\xednh',
                                            name: 'sex',
                                            required: !0
                                          })
                                        }),
                                        (0, F.jsxs)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          md: 4,
                                          children: [
                                            (0, F.jsx)(b.A, {
                                              element: (0, F.jsx)(k.A, {}),
                                              control: se,
                                              errors: le,
                                              id: 'numberOfVacancies',
                                              label:
                                                'S\u1ed1 l\u01b0\u1ee3ng tuy\u1ec3n',
                                              name: 'numberOfVacancies',
                                              required: !0,
                                              type: 'number',
                                              pattern: 'integer',
                                              InputProps: {
                                                inputProps: { min: 1 }
                                              }
                                            }),
                                            ' '
                                          ]
                                        }),
                                        (0, F.jsxs)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          md: 4,
                                          children: [
                                            (0, F.jsx)(b.A, {
                                              element: (0, F.jsx)(k.A, {}),
                                              control: se,
                                              errors: le,
                                              id: 'trialPeriod',
                                              label:
                                                'Th\u1eddi giai th\u1eed vi\u1ec7c',
                                              name: 'trialPeriod',
                                              required: !0,
                                              type: 'number',
                                              pattern: 'integer',
                                              InputProps: {
                                                inputProps: { min: 1 },
                                                endAdornment: (0, F.jsx)(m.A, {
                                                  position: 'end',
                                                  children: 'th\xe1ng'
                                                })
                                              }
                                            }),
                                            ' '
                                          ]
                                        }),
                                        (0, F.jsx)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          md: 4,
                                          children: (0, F.jsx)(b.A, {
                                            element: (0, F.jsx)(B.A, {
                                              minDate: h()()
                                            }),
                                            control: se,
                                            errors: le,
                                            id: 'applicationDeadline',
                                            label:
                                              'H\u1ea1n n\u1ed9p h\u1ed3 s\u01a1',
                                            name: 'applicationDeadline',
                                            required: !0
                                          })
                                        }),
                                        (0, F.jsx)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          md: 4,
                                          children: (0, F.jsx)(b.A, {
                                            element: (0, F.jsx)(k.A, {}),
                                            control: se,
                                            errors: le,
                                            id: 'minSalary',
                                            label:
                                              'M\u1ee9c l\u01b0\u01a1ng t\u1ed1i thi\u1ec3u',
                                            name: 'minSalary',
                                            type: 'number',
                                            pattern: 'integer',
                                            required: !0,
                                            InputProps: {
                                              inputProps: { min: 1 },
                                              inputComponent: T.A,
                                              endAdornment: (0, F.jsx)(m.A, {
                                                position: 'end',
                                                children: 'tri\u1ec7u VN\u0110'
                                              })
                                            }
                                          })
                                        }),
                                        (0, F.jsx)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          md: 4,
                                          children: (0, F.jsx)(b.A, {
                                            element: (0, F.jsx)(k.A, {}),
                                            control: se,
                                            errors: le,
                                            id: 'maxSalary',
                                            label:
                                              'M\u1ee9c l\u01b0\u01a1ng t\u1ed1i \u0111a',
                                            name: 'maxSalary',
                                            type: 'number',
                                            pattern: 'integer',
                                            required: !0,
                                            InputProps: {
                                              inputProps: { min: 1 },
                                              inputComponent: T.A,
                                              endAdornment: (0, F.jsx)(m.A, {
                                                position: 'end',
                                                children: 'tri\u1ec7u VN\u0110'
                                              })
                                            }
                                          })
                                        }),
                                        (0, F.jsx)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          children: (0, F.jsx)(b.A, {
                                            element: (0, F.jsx)(k.A, {}),
                                            control: se,
                                            errors: le,
                                            id: 'workAddress',
                                            label:
                                              '\u0110\u1ecba ch\u1ec9 l\xe0m vi\u1ec7c',
                                            name: 'workAddress',
                                            required: !0,
                                            multiline: !0,
                                            minRows: 2
                                          })
                                        }),
                                        (0, F.jsxs)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          children: [
                                            (0, F.jsx)(r.A, {
                                              display: 'flex',
                                              marginBottom: 1,
                                              children:
                                                ne.find(
                                                  (e) => 'requiredSkills' === e
                                                ) &&
                                                (0, F.jsx)(u.A, {
                                                  color: 'error',
                                                  fontWeight: 700,
                                                  fontStyle: 'italic',
                                                  textAlign: 'center',
                                                  flex: 1,
                                                  children:
                                                    '* Vui l\xf2ng nh\u1eadp y\xeau c\u1ea7u k\u0129 n\u0103ng'
                                                })
                                            }),
                                            (0, F.jsx)(b.A, {
                                              element: (0, F.jsx)(E.A, {
                                                freeSolo: !0,
                                                limitTags: 7,
                                                options: f.J3.map(
                                                  (e) => e.value
                                                )
                                              }),
                                              defaultValue:
                                                null === L ||
                                                void 0 === L ||
                                                null ===
                                                  (i = L.requiredSkills) ||
                                                void 0 === i
                                                  ? void 0
                                                  : i.split(', '),
                                              control: se,
                                              errors: le,
                                              id: 'requiredSkills',
                                              label:
                                                'K\u0129 n\u0103ng b\u1eaft bu\u1ed9c',
                                              name: 'requiredSkills',
                                              required: !0
                                            }),
                                            (0, F.jsx)(u.A, {
                                              fontSize: 12,
                                              color: 'secondary',
                                              fontStyle: 'italic',
                                              sx: {
                                                display: 'flex',
                                                justifyContent: 'center'
                                              },
                                              children:
                                                'H\xe3y li\u1ec7t k\xea t\u1ed1i \u0111a 10 t\u1eeb kh\xf3a. V\xed d\u1ee5: Python, ReactJS, HTML, Go... S\u1ebd gi\xfap h\u1ec7 th\u1ed1ng t\xecm ki\u1ebfm \u0111\u01b0\u1ee3c h\u1ed3 s\u01a1 ph\xf9 h\u1ee3p v\u1edbi doanh nghi\u1ec7p b\u1ea1n nh\u1ea5t'
                                            })
                                          ]
                                        })
                                      ]
                                    }),
                                    (0, F.jsxs)(r.A, {
                                      display: 'flex',
                                      marginBottom: 1,
                                      marginTop: 4,
                                      children: [
                                        (0, F.jsx)(u.A, {
                                          variant: 'h6',
                                          children:
                                            'M\xf4 t\u1ea3 c\xf4ng vi\u1ec7c'
                                        }),
                                        ne.find(
                                          (e) => 'jobDescription' === e
                                        ) &&
                                          (0, F.jsx)(u.A, {
                                            color: 'error',
                                            fontWeight: 700,
                                            fontStyle: 'italic',
                                            textAlign: 'center',
                                            flex: 1,
                                            children:
                                              '* Vui l\xf2ng nh\u1eadp m\xf4 t\u1ea3 c\xf4ng vi\u1ec7c'
                                          })
                                      ]
                                    }),
                                    (0, F.jsx)(b.A, {
                                      element: (0, F.jsx)(q.A, {}),
                                      control: se,
                                      errors: le,
                                      id: 'jobDescription',
                                      name: 'jobDescription',
                                      required: !0
                                    }),
                                    (0, F.jsxs)(r.A, {
                                      display: 'flex',
                                      marginBottom: 1,
                                      marginTop: 4,
                                      children: [
                                        (0, F.jsx)(u.A, {
                                          variant: 'h6',
                                          children:
                                            'Y\xeau c\u1ea7u c\xf4ng vi\u1ec7c'
                                        }),
                                        ne.find(
                                          (e) => 'jobRequirements' === e
                                        ) &&
                                          (0, F.jsx)(u.A, {
                                            color: 'error',
                                            fontWeight: 700,
                                            fontStyle: 'italic',
                                            textAlign: 'center',
                                            flex: 1,
                                            children:
                                              '* Vui l\xf2ng nh\u1eadp y\xeau c\u1ea7u c\xf4ng vi\u1ec7c'
                                          })
                                      ]
                                    }),
                                    (0, F.jsx)(b.A, {
                                      element: (0, F.jsx)(q.A, {}),
                                      control: se,
                                      errors: le,
                                      id: 'jobRequirements',
                                      name: 'jobRequirements',
                                      required: !0
                                    }),
                                    (0, F.jsxs)(r.A, {
                                      display: 'flex',
                                      marginBottom: 1,
                                      marginTop: 4,
                                      children: [
                                        (0, F.jsx)(u.A, {
                                          variant: 'h6',
                                          children: 'Quy\u1ec1n l\u1ee3i'
                                        }),
                                        ne.find((e) => 'benefits' === e) &&
                                          (0, F.jsx)(u.A, {
                                            color: 'error',
                                            fontWeight: 700,
                                            fontStyle: 'italic',
                                            textAlign: 'center',
                                            flex: 1,
                                            children:
                                              '* Vui l\xf2ng nh\u1eadp quy\u1ec1n l\u1ee3i c\xf4ng vi\u1ec7c'
                                          })
                                      ]
                                    }),
                                    (0, F.jsx)(b.A, {
                                      element: (0, F.jsx)(q.A, {}),
                                      control: se,
                                      errors: le,
                                      id: 'benefits',
                                      name: 'benefits',
                                      required: !0
                                    }),
                                    (0, F.jsx)(u.A, {
                                      variant: 'h6',
                                      marginBottom: 1,
                                      marginTop: 4,
                                      children:
                                        'Th\xf4ng tin ng\u01b0\u1eddi li\xean h\u1ec7'
                                    }),
                                    (0, F.jsxs)(o.Ay, {
                                      container: !0,
                                      spacing: 3,
                                      children: [
                                        (0, F.jsx)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          md: 4,
                                          children: (0, F.jsx)(b.A, {
                                            element: (0, F.jsx)(k.A, {}),
                                            control: se,
                                            errors: le,
                                            id: 'name',
                                            label: 'H\u1ecd v\xe0 t\xean',
                                            name: 'name',
                                            required: !0
                                          })
                                        }),
                                        ' ',
                                        (0, F.jsx)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          md: 4,
                                          children: (0, F.jsx)(b.A, {
                                            element: (0, F.jsx)(k.A, {}),
                                            control: se,
                                            errors: le,
                                            id: 'email',
                                            label: 'Email',
                                            name: 'email',
                                            required: !0,
                                            pattern: 'email'
                                          })
                                        }),
                                        (0, F.jsx)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          md: 4,
                                          children: (0, F.jsx)(b.A, {
                                            element: (0, F.jsx)(k.A, {}),
                                            control: se,
                                            errors: le,
                                            required: !0,
                                            id: 'phone',
                                            label: '\u0110i\u1ec7n tho\u1ea1i',
                                            name: 'phone',
                                            pattern: 'phone'
                                          })
                                        }),
                                        (0, F.jsx)(o.Ay, {
                                          item: !0,
                                          xs: 12,
                                          md: 8,
                                          children: (0, F.jsx)(b.A, {
                                            element: (0, F.jsx)(k.A, {}),
                                            control: se,
                                            errors: le,
                                            required: !0,
                                            id: 'contactAddress',
                                            label:
                                              '\u0110\u1ecba ch\u1ec9 li\xean h\u1ec7',
                                            name: 'contactAddress',
                                            multiline: !0,
                                            minRows: 1
                                          })
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                (0, F.jsx)(p.A, {
                                  children: (0, F.jsx)(o.Ay, {
                                    container: !0,
                                    justifyContent: 'end',
                                    marginBottom: 1,
                                    marginRight: 1,
                                    children: (0, F.jsx)(x.A, {
                                      onClick: ae((e) => {
                                        console.log(e);
                                        const n = {
                                            jobDescription: 'jobDescription',
                                            jobRequirements: 'jobRequirements',
                                            benefits: 'benefits'
                                          },
                                          i = [];
                                        for (const [t, r] of Object.entries(n))
                                          (0, O.i)(
                                            null === e || void 0 === e
                                              ? void 0
                                              : e[t]
                                          ) ||
                                            (ie((e) => [...e, r]), i.push(r));
                                        i.length ||
                                          (X({
                                            ...e,
                                            requiredSkills: Array.isArray(
                                              e.requiredSkills
                                            )
                                              ? e.requiredSkills
                                                  .map((e) => e.value || e)
                                                  .join(', ')
                                              : e.requiredSkills,
                                            sex:
                                              'T\u1ea5t c\u1ea3' === e.sex
                                                ? null
                                                : e.sex,
                                            profession: Array.isArray(
                                              e.profession
                                            )
                                              ? e.profession
                                                  .map((e) => e.value || e)
                                                  .join(', ')
                                              : e.profession
                                          }),
                                          de(e));
                                      }),
                                      color: 'success',
                                      variant: 'contained',
                                      sx: { minWidth: 100 },
                                      children: C ? 'L\u01b0u' : 'T\u1ea1o'
                                    })
                                  })
                                }),
                                Q && (0, F.jsx)(A.A, { sx: { mx: '50%' } })
                              ]
                            })
                          })
                        })
                      })
                    }),
                    (0, F.jsx)(w.A, {})
                  ]
                })
          );
        };
    },
    21886: (e, n, i) => {
      i.d(n, { A: () => l, B: () => a });
      var t = i(82907),
        r = i(53679),
        s = i(36110),
        o = i(65043);
      function l(e) {
        if (!e) return {};
        const {
            data: n,
            isLoading: i,
            isFetching: s
          } = (0, t.useQuery)(['job-getById', e], async () => r.Y$.getById(e), {
            retry: 1,
            refetchOnWindowFocus: !1
          }),
          [l, a] = (0, o.useState)();
        return (
          (0, o.useEffect)(() => {
            if (null !== n && void 0 !== n && n.data) {
              var e, i;
              const t = {
                ...(null === n || void 0 === n ? void 0 : n.data),
                sex:
                  null ===
                  (null === n ||
                  void 0 === n ||
                  null === (e = n.data) ||
                  void 0 === e
                    ? void 0
                    : e.sex)
                    ? 'T\u1ea5t c\u1ea3'
                    : null === n ||
                      void 0 === n ||
                      null === (i = n.data) ||
                      void 0 === i
                    ? void 0
                    : i.sex
              };
              a(t);
            }
          }, [JSON.stringify(n)]),
          { data: l, isLoading: i, isFetching: s }
        );
      }
      function a(e) {
        const { isEmployer: n } = (0, s.n)(),
          [i, l] = (0, o.useState)([]),
          { data: a, isLoading: d } = (0, t.useQuery)(
            ['jobs-getByIdList', JSON.stringify(e)],
            async () => {
              if (!e.length) return [];
              Promise.allSettled(e.map((e) => r.Y$.getById(e)))
                .then((e) => {
                  const n = e
                    .filter((e) => 'fulfilled' === e.status)
                    .map((e) => e.value);
                  l(n);
                })
                .catch((e) => console.log(e));
            },
            {
              retry: 1,
              refetchOnWindowFocus: !1,
              keepPreviousData: !0,
              enabled: n
            }
          );
        return {
          jobs:
            (null === i || void 0 === i
              ? void 0
              : i.map((e) => {
                  var n, i, t;
                  return {
                    ...(null === e || void 0 === e ? void 0 : e.data),
                    id:
                      null === e ||
                      void 0 === e ||
                      null === (n = e.data) ||
                      void 0 === n
                        ? void 0
                        : n.postId,
                    sex:
                      null ===
                      (null === e ||
                      void 0 === e ||
                      null === (i = e.data) ||
                      void 0 === i
                        ? void 0
                        : i.sex)
                        ? 'T\u1ea5t c\u1ea3'
                        : null === e ||
                          void 0 === e ||
                          null === (t = e.data) ||
                          void 0 === t
                        ? void 0
                        : t.sex
                  };
                })) || [],
          isLoading: d
        };
      }
    },
    78910: (e, n, i) => {
      i.d(n, { V: () => s, Z: () => t });
      const t = (e, n) => {
        if (e.length <= 0 && !Boolean(e[0])) return;
        const i = e[0],
          t = i.indexOf('[');
        if (-1 === t)
          return void console.log(
            "Kh\xf4ng t\xecm th\u1ea5y k\xfd t\u1ef1 '['"
          );
        const r = i.lastIndexOf(']');
        if (-1 === r)
          return void console.log(
            "Kh\xf4ng t\xecm th\u1ea5y k\xfd t\u1ef1 ']'"
          );
        const s = i.substring(t + 1, r).replace(/["]/g, '');
        console.log('extractedString: ', s);
        const o = s.replace(/[_!@#$%^&*;|<>'"\n\t\r]/g, '');
        console.log('jsonString: ', o);
        const l = o.split(',');
        console.log('keywordArray', l);
        const a = l.slice(0, 20);
        return (
          console.log(
            'keywordList?.join(',
            ')',
            null === a || void 0 === a ? void 0 : a.join(', ')
          ),
          null === a || void 0 === a ? void 0 : a.join(', ')
        );
      };
      const r = (e, n, i) => {
        if ('online' === n) {
          var t;
          const n = e;
          return {
            jobTitle: null === n || void 0 === n ? void 0 : n.jobTitle,
            profession: null === n || void 0 === n ? void 0 : n.profession,
            work_experiences:
              null === n || void 0 === n
                ? void 0
                : n.work_experiences.map((e) => ({
                    jobTitle: e.jobTitle,
                    jobDescription: e.jobDescription
                  })),
            education_informations:
              null === n || void 0 === n
                ? void 0
                : n.education_informations.map((e) => e.specialization),
            another_degrees:
              null === n ||
              void 0 === n ||
              null === (t = n.another_degrees) ||
              void 0 === t
                ? void 0
                : t.map((e) => e.degreeName)
          };
        }
        return {
          jobTitle: null === e || void 0 === e ? void 0 : e.jobTitle,
          profession: null === e || void 0 === e ? void 0 : e.profession,
          cvContent: i
        };
      };
      function s(e, n, i) {
        return r(e, n, i);
      }
    },
    27600: (e, n, i) => {
      i.d(n, { A: () => A });
      var t = i(98587),
        r = i(58168),
        s = i(65043),
        o = i(88795),
        l = i(68606),
        a = i(34535),
        d = i(72876),
        c = i(32400);
      function u(e) {
        return (0, c.Ay)('MuiCardActions', e);
      }
      (0, i(57056).A)('MuiCardActions', ['root', 'spacing']);
      var m = i(70579);
      const p = ['disableSpacing', 'className'],
        x = (0, a.Ay)('div', {
          name: 'MuiCardActions',
          slot: 'Root',
          overridesResolver: (e, n) => {
            const { ownerState: i } = e;
            return [n.root, !i.disableSpacing && n.spacing];
          }
        })((e) => {
          let { ownerState: n } = e;
          return (0, r.A)(
            { display: 'flex', alignItems: 'center', padding: 8 },
            !n.disableSpacing && {
              '& > :not(:first-of-type)': { marginLeft: 8 }
            }
          );
        }),
        A = s.forwardRef(function (e, n) {
          const i = (0, d.A)({ props: e, name: 'MuiCardActions' }),
            { disableSpacing: s = !1, className: a } = i,
            c = (0, t.A)(i, p),
            A = (0, r.A)({}, i, { disableSpacing: s }),
            j = ((e) => {
              const { classes: n, disableSpacing: i } = e,
                t = { root: ['root', !i && 'spacing'] };
              return (0, l.A)(t, u, n);
            })(A);
          return (0,
          m.jsx)(x, (0, r.A)({ className: (0, o.A)(j.root, a), ownerState: A, ref: n }, c));
        });
    }
  }
]);
//# sourceMappingURL=9230.1ea21b00.chunk.js.map
