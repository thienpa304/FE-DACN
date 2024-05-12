'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [713],
  {
    29773: (e, t, n) => {
      n.d(t, { A: () => o });
      var a = n(34535),
        l = (n(65043), n(51318)),
        i = n(70579);
      const r = (0, a.Ay)(l.N_)((e) => {
          let { theme: t } = e;
          return {
            textDecoration: 'none',
            color: t.colors.info.dark,
            '&:active': { color: t.colors.primary.light },
            '&:visited': { color: t.colors.info.dark }
          };
        }),
        o = (e) => (0, i.jsx)(r, { ...e });
    },
    67902: (e, t, n) => {
      n.d(t, { A: () => i });
      var a = n(34535),
        l = n(69869);
      const i = (0, a.Ay)(l.A)(
        () =>
          '\n    .MuiTabs-scrollableX {\n    overflow-x: auto !important;\n      }\n  '
      );
    },
    65499: (e, t, n) => {
      n.d(t, { L: () => i });
      var a = n(34535),
        l = n(85865);
      const i = (0, a.Ay)(l.A)((e) => {
        let { theme: t } = e;
        return {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        };
      });
    },
    1676: (e, t, n) => {
      n.d(t, { A: () => r });
      var a = n(82907),
        l = n(53679),
        i = n(36110);
      const r = (e) => {
        var t, n, r;
        const { isEmployer: o } = (0, i.n)(),
          { data: s, isLoading: d } = (0, a.useQuery)(
            [
              'jobOwner-getList',
              null === e || void 0 === e ? void 0 : e.status,
              null === e || void 0 === e ? void 0 : e.page
            ],
            () => l.L8.get({ params: e }),
            {
              retry: 1,
              refetchOnWindowFocus: !1,
              keepPreviousData: !0,
              enabled: o
            }
          );
        return {
          jobs:
            (null === s ||
            void 0 === s ||
            null === (t = s.data) ||
            void 0 === t ||
            null === (n = t.result) ||
            void 0 === n
              ? void 0
              : n.map((e) => ({ ...e, id: e.postId }))) || [],
          totalResults:
            (null === s || void 0 === s || null === (r = s.data) || void 0 === r
              ? void 0
              : r.totalResults) || 0,
          isLoading: d
        };
      };
    },
    57745: (e, t, n) => {
      n.d(t, { A: () => E, O: () => O });
      var a = n(29773),
        l = n(28800),
        i = n(57796),
        r = n(68903),
        o = n(43845),
        s = n(17392),
        d = n(77739),
        c = n(86971),
        u = n(59162),
        h = n(65499),
        v = n(60446),
        A = n.n(v),
        m = n(10697),
        g = n(82907),
        x = n(36110),
        p = n(53679);
      const j = () => {
        const e = (0, g.useQueryClient)(),
          { toast: t } = (0, x.n)(),
          { mutate: n, isLoading: a } = (0, g.useMutation)(
            (e) => {
              let [t] = e;
              return p.L8.remove(t);
            },
            {
              onSuccess: (n) => {
                200 === n.status
                  ? (e.invalidateQueries(['jobOwner-getList']),
                    t.success({ massage: n.message }))
                  : t.error({ massage: n.message });
              },
              onError: (e) => {
                t.error({ massage: e.response.data.message });
              }
            }
          );
        return { onDeleteById: n, isLoading: a };
      };
      var y = n(94006),
        b = n(54367),
        f = n(70579);
      const O = (e) => {
          var t, n, l;
          const o = (0, b.O)(
              null === e || void 0 === e || null === (t = e.row) || void 0 === t
                ? void 0
                : t.jobTitle
            ),
            u = (0, c.Zp)();
          return (0, f.jsx)(f.Fragment, {
            children: (0, f.jsxs)(r.Ay, {
              container: !0,
              alignItems: 'center',
              children: [
                (0, f.jsx)(r.Ay, {
                  item: !0,
                  xs: 1,
                  children: (0, f.jsx)(d.A, {
                    title: 'Xem tr\u1ef1c ti\u1ebfp',
                    children: (0, f.jsx)(s.A, {
                      size: 'small',
                      onClick: () => {
                        var t, n;
                        u(
                          '/job/'
                            .concat(o, '?id=')
                            .concat(
                              btoa(
                                null === e ||
                                  void 0 === e ||
                                  null === (t = e.row) ||
                                  void 0 === t
                                  ? void 0
                                  : t.postId
                              )
                            ),
                          {
                            state: {
                              postId:
                                null === e ||
                                void 0 === e ||
                                null === (n = e.row) ||
                                void 0 === n
                                  ? void 0
                                  : n.postId
                            }
                          }
                        );
                      },
                      children: (0, f.jsx)(i.A, {
                        sx: { width: 18, height: 18, color: 'gray' }
                      })
                    })
                  })
                }),
                (0, f.jsx)(r.Ay, {
                  item: !0,
                  xs: 11,
                  children: (0, f.jsx)(a.A, {
                    to: '/employer/recruitment/list/'.concat(
                      (0, b.O)(
                        null === e ||
                          void 0 === e ||
                          null === (n = e.row) ||
                          void 0 === n
                          ? void 0
                          : n.jobTitle
                      )
                    ),
                    state: {
                      postId:
                        null === e ||
                        void 0 === e ||
                        null === (l = e.row) ||
                        void 0 === l
                          ? void 0
                          : l.postId
                    },
                    children: (0, f.jsxs)(h.L, { children: [' ', e.value] })
                  })
                })
              ]
            })
          });
        },
        C = (e) => {
          const t = A()(null === e || void 0 === e ? void 0 : e.value).format(
            'DD/MM/YYYY'
          );
          return (0, f.jsx)(f.Fragment, { children: t });
        },
        w = [
          {
            field: 'jobTitle',
            headerName: 'T\xean tin \u0111\u0103ng',
            minWidth: 400,
            maxWidth: 450,
            headerAlign: 'center',
            renderCell: O
          },
          {
            field: 'createAt',
            headerName: 'Ng\xe0y \u0111\u0103ng tin',
            minWidth: 150,
            headerAlign: 'center',
            align: 'center',
            renderCell: C,
            sortable: !0
          },
          {
            field: 'applicationDeadline',
            headerName: 'H\u1ea1n n\u1ed9p h\u1ed3 s\u01a1',
            minWidth: 150,
            headerAlign: 'center',
            align: 'center',
            renderCell: C,
            sortable: !0
          },
          {
            field: 'submissionCount',
            headerName: 'L\u01b0\u1ee3t n\u1ed9p',
            minWidth: 100,
            headerAlign: 'center',
            align: 'center',
            sortable: !0
          },
          {
            field: 'view',
            headerName: 'L\u01b0\u1ee3t xem',
            minWidth: 100,
            headerAlign: 'center',
            align: 'center',
            sortable: !0
          },
          {
            field: 'status',
            headerName: 'Tr\u1ea1ng th\xe1i',
            minWidth: 120,
            headerAlign: 'center',
            align: 'center',
            renderCell: (e) => {
              const t = u.J2.find((t) => t.label === e.value).color;
              return (0, f.jsx)(o.A, {
                label: e.value,
                size: 'small',
                color: t,
                variant: 'outlined'
              });
            },
            sortable: !0
          },
          {
            field: 'action',
            headerName: 'X\xf3a tin \u0111\u0103ng',
            minWidth: 120,
            headerAlign: 'center',
            align: 'center',
            renderCell: (e) => {
              const { onDeleteById: t } = j(),
                n = (e) => {
                  t([e]);
                };
              return (0, f.jsx)(f.Fragment, {
                children: (0, f.jsx)(s.A, {
                  onClick: () =>
                    ((e) => {
                      (0, y.A)({ selectedId: e.id, handleConfirm: n });
                    })(e),
                  children: (0, f.jsx)(m.A, {})
                })
              });
            }
          }
        ];
      function E(e) {
        let { data: t, pageSize: n } = e;
        return (0, f.jsx)(l.A, {
          rows: t,
          columns: w,
          initialState: { pagination: { paginationModel: { pageSize: n } } },
          hideFooter: !0,
          sx: { height: '74vh', width: '100%' }
        });
      }
    },
    38713: (e, t, n) => {
      n.r(t), n.d(t, { default: () => j });
      var a = n(19252),
        l = n(68903),
        i = n(12110),
        r = n(79958),
        o = n(11906),
        s = n(39336),
        d = n(26494),
        c = n(24056),
        u = n(65043),
        h = n(51318),
        v = n(1676),
        A = n(57745),
        m = n(67902),
        g = n(3553),
        x = n(70579);
      const p = [
          { label: 'T\u1ea5t c\u1ea3', value: '' },
          { label: '\u0110\xe3 duy\u1ec7t', value: '\u0110\xe3 duy\u1ec7t' },
          { label: 'Ch\u1edd duy\u1ec7t', value: 'Ch\u1edd duy\u1ec7t' },
          { label: 'T\u1eeb ch\u1ed1i', value: 'T\u1eeb ch\u1ed1i' },
          { label: 'H\u1ebft h\u1ea1n', value: 'H\u1ebft h\u1ea1n' }
        ],
        j = () => {
          const [e, t] = (0, u.useState)(''),
            [n, j] = (0, u.useState)(1),
            { jobs: y, totalResults: b } = (0, v.A)({
              status: e,
              page: n,
              num: 9
            }),
            f = Math.ceil(b / 9) || 1;
          return (0, x.jsx)(a.A, {
            maxWidth: 'xl',
            children: (0, x.jsx)(l.Ay, {
              container: !0,
              direction: 'row',
              justifyContent: 'center',
              alignItems: 'stretch',
              spacing: 3,
              marginTop: 0,
              children: (0, x.jsx)(l.Ay, {
                item: !0,
                xs: 12,
                children: (0, x.jsxs)(i.A, {
                  children: [
                    (0, x.jsx)(r.A, {
                      title: 'Danh S\xe1ch Tin Tuy\u1ec3n D\u1ee5ng',
                      action: (0, x.jsx)(h.N_, {
                        to: '/employer/recruitment/create',
                        children: (0, x.jsx)(o.A, {
                          variant: 'contained',
                          size: 'small',
                          sx: { my: 0 },
                          children: 'T\u1ea1o tin tuy\u1ec3n d\u1ee5ng'
                        })
                      })
                    }),
                    (0, x.jsx)(s.A, {}),
                    (0, x.jsxs)(d.A, {
                      children: [
                        (0, x.jsx)(m.A, {
                          onChange: (e, n) => {
                            t(n), j(1);
                          },
                          value: e,
                          variant: 'scrollable',
                          scrollButtons: 'auto',
                          textColor: 'primary',
                          indicatorColor: 'primary',
                          sx: {
                            borderBottom: 1,
                            borderColor: 'divider',
                            display: 'inline-flex'
                          },
                          children: p.map((e) =>
                            (0, x.jsx)(
                              c.A,
                              { label: e.label, value: e.value },
                              e.value
                            )
                          )
                        }),
                        (0, x.jsx)(A.A, { data: y || [], pageSize: 9 }),
                        (0, x.jsx)(g.A, {
                          currentPage: n,
                          totalPages: f,
                          handlePageChange: j
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
    54367: (e, t, n) => {
      function a(e) {
        const t = {
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
          n = [
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
        let a = '';
        for (
          var l = 0;
          l < (null === e || void 0 === e ? void 0 : e.length);
          l++
        )
          t[e[l]]
            ? (a += t[e[l]])
            : n.includes(e[l])
            ? a.endsWith('-') || (a += '-')
            : (a += e[l]);
        return a;
      }
      n.d(t, { O: () => a });
    },
    10697: (e, t, n) => {
      var a = n(32392);
      t.A = void 0;
      var l = a(n(40039)),
        i = n(70579),
        r = (0, l.default)(
          (0, i.jsx)('path', {
            d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z'
          }),
          'DeleteOutline'
        );
      t.A = r;
    },
    57796: (e, t, n) => {
      var a = n(32392);
      t.A = void 0;
      var l = a(n(40039)),
        i = n(70579),
        r = (0, l.default)(
          (0, i.jsx)('path', {
            d: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'
          }),
          'RemoveRedEye'
        );
      t.A = r;
    }
  }
]);
//# sourceMappingURL=713.ef2f85a0.chunk.js.map
