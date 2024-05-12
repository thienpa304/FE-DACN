'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [876],
  {
    29773: (e, o, i) => {
      i.d(o, { A: () => l });
      var n = i(34535),
        a = (i(65043), i(51318)),
        t = i(70579);
      const s = (0, n.Ay)(a.N_)((e) => {
          let { theme: o } = e;
          return {
            textDecoration: 'none',
            color: o.colors.info.dark,
            '&:active': { color: o.colors.primary.light },
            '&:visited': { color: o.colors.info.dark }
          };
        }),
        l = (e) => (0, t.jsx)(s, { ...e });
    },
    65099: (e, o, i) => {
      i.d(o, { BZ: () => t, XS: () => n, YP: () => s, tR: () => a });
      const n = {
          companyAvatar:
            'https://th.bing.com/th/id/OIP.EK1rvrib-MWNflZRM2XiDQHaH_?pid=ImgDet&w=183&h=197&c=7&dpr=1.3',
          companyCover:
            'https://png.pngtree.com/background/20210706/original/pngtree-business-background-white-collar-jobs-picture-image_216619.jpg'
        },
        a = {
          acceptTypes: ['image/jpeg', 'image/png', 'image/gif'],
          acceptSize: 1048576
        },
        t = { acceptTypes: ['application/pdf'], acceptSize: 2097152 },
        s = {
          acceptTypes: ['image/jpeg', 'image/png', 'image/gif'],
          acceptSize: 4194304
        };
    },
    82656: (e, o, i) => {
      i.d(o, { C: () => a, c: () => t });
      var n = i(22626);
      const a = new n.A('get-information-company-by-user'),
        t = new n.A('employee/follow-company');
    },
    56530: (e, o, i) => {
      i.d(o, { A: () => C });
      var n = i(65043),
        a = i(34535),
        t = i(12110),
        s = i(79958),
        l = i(19464),
        r = i(81045),
        c = i(85865),
        d = i(26494),
        p = i(63657),
        u = i(22200),
        y = i(29773),
        m = i(65099),
        x = i(25441),
        h = i(11906),
        g = i(36110),
        v = i(82907),
        f = i(82656);
      const A = () => {
        const e = (0, v.useQueryClient)(),
          { toast: o } = (0, g.n)(),
          { mutate: i, isLoading: n } = (0, v.useMutation)(
            (e) => {
              let [o] = e;
              return f.c.create({ employerId: o });
            },
            {
              onSuccess: (i) => {
                200 === i.status
                  ? (e.invalidateQueries(['get-FollowCompany']),
                    o.success({ massage: i.message }))
                  : o.error({ massage: i.message });
              },
              onError: (e) => {
                o.error({ massage: e.response.data.message });
              }
            }
          );
        return { onFollowCompanyById: i, isLoading: n };
      };
      var b = i(70579);
      function j(e) {
        const { sx: o, employerId: i } = e,
          { companyFollow: a } = (0, x.A)(),
          { onFollowCompanyById: t } = A(),
          { isEmployee: s } = (0, g.n)(),
          [r, c] = (0, n.useState)(!1);
        if (
          ((0, n.useEffect)(() => {
            (null === a || void 0 === a
              ? void 0
              : a.find((e) => e.employerId === i)) && c(!0);
          }, [a, i]),
          i && s)
        )
          return (0, b.jsx)(l.A, {
            onClick: () => (t([i]), void c(!r)),
            sx: { display: 'flex', alignItem: 'center', ...o },
            children: (0, b.jsx)(h.A, {
              sx: {
                display: 'flex',
                bgcolor: r ? '#e5e7eb' : 'primary',
                '&:hover': { bgcolor: r ? '#c0c2c5' : '' },
                width: 120
              },
              size: 'small',
              variant: 'contained',
              children: r ? '\u0110ang theo d\xf5i' : 'Theo d\xf5i'
            })
          });
      }
      var w = i(54367);
      const O = (0, a.Ay)('img')({
        width: '100%',
        height: '120px',
        objectFit: 'cover'
      });
      const C = function (e) {
        let { company: o, employerId: i } = e;
        const [a, x] = (0, n.useState)(
          (null === o || void 0 === o ? void 0 : o.logo) || m.XS.companyAvatar
        );
        return (0, b.jsxs)(t.A, {
          sx: {
            border: 1,
            borderRadius: '3px',
            borderColor: '#98E4FF',
            height: '350px'
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
              title: (0, b.jsxs)(l.A, {
                children: [
                  (0, b.jsx)(O, {
                    src:
                      (null === o || void 0 === o ? void 0 : o.banner) ||
                      m.XS.companyCover,
                    alt: 'cover'
                  }),
                  (0, b.jsxs)(l.A, {
                    display: 'flex',
                    gap: 2,
                    children: [
                      (0, b.jsx)(r.A, {
                        src: a,
                        sx: {
                          width: 100,
                          height: 100,
                          borderRadius: '5px',
                          objectFit: 'cover'
                        }
                      }),
                      (0, b.jsxs)(l.A, {
                        sx: { pt: 2, display: 'flex', flexDirection: 'column' },
                        children: [
                          (0, b.jsx)(c.A, {
                            component: y.A,
                            to: '/company/'
                              .concat(
                                (0, w.O)(
                                  null === o || void 0 === o
                                    ? void 0
                                    : o.companyName
                                ),
                                '?id='
                              )
                              .concat(btoa(i.toString())),
                            sx: {
                              ':hover': { color: '#ce8b0e' },
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 3,
                              lineHeight: 1.5,
                              height: 65
                            },
                            fontWeight: 700,
                            children:
                              null === o || void 0 === o
                                ? void 0
                                : o.companyName
                          }),
                          (0, b.jsx)(j, {
                            employerId: i,
                            sx: {
                              display: 'flex',
                              alignSelf: 'end',
                              justifySelf: 'self-end'
                            }
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            }),
            (0, b.jsx)(d.A, {
              sx: { px: 2, py: 1 },
              children: (0, b.jsxs)(l.A, {
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                children: [
                  (0, b.jsxs)(l.A, {
                    display: 'flex',
                    children: [
                      (0, b.jsx)(p.A, {
                        sx: { maxHeight: 20, color: 'grey.700' }
                      }),
                      (0, b.jsxs)(c.A, {
                        sx: {
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 1
                        },
                        children: [
                          'L\u0129nh v\u1ef1c: ',
                          null === o || void 0 === o ? void 0 : o.careerField
                        ]
                      })
                    ]
                  }),
                  (0, b.jsxs)(l.A, {
                    display: 'flex',
                    my: 1,
                    children: [
                      (0, b.jsx)(u.A, {
                        sx: { maxHeight: 18, color: 'grey.700' }
                      }),
                      (0, b.jsxs)(c.A, {
                        sx: {
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 2
                        },
                        children: [
                          '\u0110\u1ecba \u0111i\u1ec3m: ',
                          null === o || void 0 === o
                            ? void 0
                            : o.companyLocation
                        ]
                      })
                    ]
                  })
                ]
              })
            })
          ]
        });
      };
    },
    25441: (e, o, i) => {
      i.d(o, { A: () => s });
      var n = i(82907),
        a = i(82656),
        t = i(36110);
      const s = (e) => {
        var o;
        const { isEmployee: i } = (0, t.n)(),
          {
            data: s,
            isLoading: l,
            refetch: r
          } = (0, n.useQuery)(
            ['get-FollowCompany', null === e || void 0 === e ? void 0 : e.page],
            () => a.c.get({ params: e }),
            {
              keepPreviousData: !0,
              retry: 1,
              refetchOnWindowFocus: !1,
              enabled: i
            }
          );
        return {
          companyFollow:
            null === s || void 0 === s || null === (o = s.data) || void 0 === o
              ? void 0
              : o.followCompany,
          isLoading: l,
          refetch: r
        };
      };
    },
    34876: (e, o, i) => {
      i.r(o), i.d(o, { default: () => g });
      var n = i(54567),
        a = i(65043),
        t = i(19252),
        s = i(19464),
        l = i(85865),
        r = i(68903),
        c = i(3553),
        d = i(56530),
        p = i(51726),
        u = i(70579);
      const y = function (e) {
        const { pageTitle: o, sx: i, numOfJobPerPage: n, queryCompanys: y } = e,
          { companyList: m, totalResults: x } = y({ num: 9, page: 1 }),
          [h, g] = (0, a.useState)(1),
          v = n || 15,
          f = Math.ceil(x / v) || 1;
        return (0, u.jsxs)(t.A, {
          disableGutters: !0,
          maxWidth: 'lg',
          sx: { py: 3, ...i },
          children: [
            (0, u.jsx)(s.A, {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
              children: (0, u.jsxs)(s.A, {
                display: 'flex',
                justifyContent: 'space-between',
                children: [
                  (0, u.jsx)(p.A, {
                    color: 'primary',
                    sx: { fontSize: 40, mr: 1 }
                  }),
                  (0, u.jsx)(l.A, {
                    variant: 'h3',
                    display: 'flex',
                    alignItems: 'center',
                    children: o
                  })
                ]
              })
            }),
            (0, u.jsxs)(t.A, {
              sx: { mb: 3, py: 3, bgcolor: '#fbfeff' },
              children: [
                (0, u.jsxs)(l.A, {
                  fontSize: 18,
                  mb: 2,
                  children: [
                    'Danh s\xe1ch c\xf4ng ty',
                    (0, u.jsxs)(s.A, {
                      sx: { color: '#ce8b0e', display: 'inline', ml: 1 },
                      children: ['(', x || 0, ')']
                    }),
                    ' '
                  ]
                }),
                (0, u.jsx)(r.Ay, {
                  container: !0,
                  spacing: 2,
                  minHeight: 300,
                  children:
                    null !== m && void 0 !== m && m.length
                      ? m.map((e, o) =>
                          (0, u.jsx)(
                            r.Ay,
                            {
                              item: !0,
                              xs: 4,
                              children: (0, u.jsx)(d.A, {
                                company: e,
                                employerId:
                                  null === e || void 0 === e ? void 0 : e.userId
                              })
                            },
                            null === e || void 0 === e ? void 0 : e.userId
                          )
                        )
                      : (0, u.jsx)(l.A, {
                          fontStyle: 'italic',
                          margin: 'auto',
                          children: 'Ch\u01b0a c\xf3 c\xf4ng ty n\xe0o'
                        })
                })
              ]
            }),
            (0, u.jsx)(c.A, {
              totalPages: f,
              currentPage: h,
              handlePageChange: (e) => {
                g(e);
              }
            })
          ]
        });
      };
      var m = i(82907),
        x = i(15001);
      const h = (e) => {
        var o, i;
        const {
          data: n,
          isLoading: a,
          refetch: t
        } = (0, m.useQuery)(
          ['get-CompanyList', null === e || void 0 === e ? void 0 : e.page],
          () => x.yb.get({ params: e }),
          { retry: 1, refetchOnWindowFocus: !1 }
        );
        return {
          companyList:
            null === n || void 0 === n || null === (o = n.data) || void 0 === o
              ? void 0
              : o.companyList,
          totalResults:
            null === n || void 0 === n || null === (i = n.data) || void 0 === i
              ? void 0
              : i.totalCompany,
          isLoading: a,
          refetch: t
        };
      };
      const g = function () {
        return (0, u.jsx)(y, {
          pageTitle: 'C\xf4ng ty \u0111ang tuy\u1ec3n d\u1ee5ng',
          queryJobs: n.A,
          queryCompanys: h
        });
      };
    },
    54367: (e, o, i) => {
      function n(e) {
        const o = {
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
          i = [
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
        let n = '';
        for (
          var a = 0;
          a < (null === e || void 0 === e ? void 0 : e.length);
          a++
        )
          o[e[a]]
            ? (n += o[e[a]])
            : i.includes(e[a])
            ? n.endsWith('-') || (n += '-')
            : (n += e[a]);
        return n;
      }
      i.d(o, { O: () => n });
    },
    22200: (e, o, i) => {
      var n = i(32392);
      o.A = void 0;
      var a = n(i(40039)),
        t = i(70579),
        s = (0, a.default)(
          [
            (0, t.jsx)(
              'path',
              {
                d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z'
              },
              '0'
            ),
            (0, t.jsx)('circle', { cx: '12', cy: '9', r: '2.5' }, '1')
          ],
          'LocationOnOutlined'
        );
      o.A = s;
    },
    63657: (e, o, i) => {
      var n = i(32392);
      o.A = void 0;
      var a = n(i(40039)),
        t = i(70579),
        s = (0, a.default)(
          [
            (0, t.jsx)(
              'path',
              {
                d: 'M18 11c1.49 0 2.87.47 4 1.26V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h7.68c-.43-.91-.68-1.92-.68-3 0-3.87 3.13-7 7-7zm-8-7h4v2h-4V4z'
              },
              '0'
            ),
            (0, t.jsx)(
              'path',
              {
                d: 'M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85-.7.71z'
              },
              '1'
            )
          ],
          'WorkHistory'
        );
      o.A = s;
    }
  }
]);
//# sourceMappingURL=876.b9336894.chunk.js.map
