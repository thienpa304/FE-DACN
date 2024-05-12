'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [635],
  {
    29773: (e, o, i) => {
      i.d(o, { A: () => s });
      var n = i(34535),
        t = (i(65043), i(51318)),
        a = i(70579);
      const l = (0, n.Ay)(t.N_)((e) => {
          let { theme: o } = e;
          return {
            textDecoration: 'none',
            color: o.colors.info.dark,
            '&:active': { color: o.colors.primary.light },
            '&:visited': { color: o.colors.info.dark }
          };
        }),
        s = (e) => (0, a.jsx)(l, { ...e });
    },
    65099: (e, o, i) => {
      i.d(o, { BZ: () => a, XS: () => n, YP: () => l, tR: () => t });
      const n = {
          companyAvatar:
            'https://th.bing.com/th/id/OIP.EK1rvrib-MWNflZRM2XiDQHaH_?pid=ImgDet&w=183&h=197&c=7&dpr=1.3',
          companyCover:
            'https://png.pngtree.com/background/20210706/original/pngtree-business-background-white-collar-jobs-picture-image_216619.jpg'
        },
        t = {
          acceptTypes: ['image/jpeg', 'image/png', 'image/gif'],
          acceptSize: 1048576
        },
        a = { acceptTypes: ['application/pdf'], acceptSize: 2097152 },
        l = {
          acceptTypes: ['image/jpeg', 'image/png', 'image/gif'],
          acceptSize: 4194304
        };
    },
    82656: (e, o, i) => {
      i.d(o, { C: () => t, c: () => a });
      var n = i(22626);
      const t = new n.A('get-information-company-by-user'),
        a = new n.A('employee/follow-company');
    },
    56530: (e, o, i) => {
      i.d(o, { A: () => k });
      var n = i(65043),
        t = i(34535),
        a = i(12110),
        l = i(79958),
        s = i(19464),
        r = i(81045),
        c = i(85865),
        d = i(26494),
        p = i(63657),
        x = i(22200),
        h = i(29773),
        m = i(65099),
        y = i(25441),
        u = i(11906),
        v = i(36110),
        g = i(82907),
        A = i(82656);
      const f = () => {
        const e = (0, g.useQueryClient)(),
          { toast: o } = (0, v.n)(),
          { mutate: i, isLoading: n } = (0, g.useMutation)(
            (e) => {
              let [o] = e;
              return A.c.create({ employerId: o });
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
          { companyFollow: t } = (0, y.A)(),
          { onFollowCompanyById: a } = f(),
          { isEmployee: l } = (0, v.n)(),
          [r, c] = (0, n.useState)(!1);
        if (
          ((0, n.useEffect)(() => {
            (null === t || void 0 === t
              ? void 0
              : t.find((e) => e.employerId === i)) && c(!0);
          }, [t, i]),
          i && l)
        )
          return (0, b.jsx)(s.A, {
            onClick: () => (a([i]), void c(!r)),
            sx: { display: 'flex', alignItem: 'center', ...o },
            children: (0, b.jsx)(u.A, {
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
      const O = (0, t.Ay)('img')({
        width: '100%',
        height: '120px',
        objectFit: 'cover'
      });
      const k = function (e) {
        let { company: o, employerId: i } = e;
        const [t, y] = (0, n.useState)(
          (null === o || void 0 === o ? void 0 : o.logo) || m.XS.companyAvatar
        );
        return (0, b.jsxs)(a.A, {
          sx: {
            border: 1,
            borderRadius: '3px',
            borderColor: '#98E4FF',
            height: '350px'
          },
          children: [
            (0, b.jsx)(l.A, {
              sx: {
                py: 1,
                color: '#aa720a',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                whiteSpace: 'normal'
              },
              title: (0, b.jsxs)(s.A, {
                children: [
                  (0, b.jsx)(O, {
                    src:
                      (null === o || void 0 === o ? void 0 : o.banner) ||
                      m.XS.companyCover,
                    alt: 'cover'
                  }),
                  (0, b.jsxs)(s.A, {
                    display: 'flex',
                    gap: 2,
                    children: [
                      (0, b.jsx)(r.A, {
                        src: t,
                        sx: {
                          width: 100,
                          height: 100,
                          borderRadius: '5px',
                          objectFit: 'cover'
                        }
                      }),
                      (0, b.jsxs)(s.A, {
                        sx: { pt: 2, display: 'flex', flexDirection: 'column' },
                        children: [
                          (0, b.jsx)(c.A, {
                            component: h.A,
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
              children: (0, b.jsxs)(s.A, {
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                children: [
                  (0, b.jsxs)(s.A, {
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
                  (0, b.jsxs)(s.A, {
                    display: 'flex',
                    my: 1,
                    children: [
                      (0, b.jsx)(x.A, {
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
      i.d(o, { A: () => l });
      var n = i(82907),
        t = i(82656),
        a = i(36110);
      const l = (e) => {
        var o;
        const { isEmployee: i } = (0, a.n)(),
          {
            data: l,
            isLoading: s,
            refetch: r
          } = (0, n.useQuery)(
            ['get-FollowCompany', null === e || void 0 === e ? void 0 : e.page],
            () => t.c.get({ params: e }),
            {
              keepPreviousData: !0,
              retry: 1,
              refetchOnWindowFocus: !1,
              enabled: i
            }
          );
        return {
          companyFollow:
            null === l || void 0 === l || null === (o = l.data) || void 0 === o
              ? void 0
              : o.followCompany,
          isLoading: s,
          refetch: r
        };
      };
    },
    64016: (e, o, i) => {
      i.r(o), i.d(o, { default: () => d });
      var n = i(19252),
        t = i(85865),
        a = i(68903),
        l = i(62237),
        s = i(56530),
        r = i(25441),
        c = i(70579);
      function d() {
        const { companyFollow: e, isLoading: o } = (0, r.A)();
        return o
          ? (0, c.jsx)(l.A, {})
          : null !== e && void 0 !== e && e.length
          ? (0, c.jsxs)(n.A, {
              sx: { p: 3 },
              children: [
                (0, c.jsx)(t.A, {
                  mb: 2,
                  fontSize: 22,
                  fontWeight: 700,
                  children: 'C\xf4ng ty \u0111\xe3 theo d\xf5i'
                }),
                (0, c.jsx)(a.Ay, {
                  container: !0,
                  mb: 3,
                  spacing: 2,
                  children:
                    null === e || void 0 === e
                      ? void 0
                      : e.map((e, o) =>
                          (0, c.jsx)(
                            a.Ay,
                            {
                              item: !0,
                              xs: 12,
                              sm: 4,
                              children: (0, c.jsx)(
                                s.A,
                                {
                                  company: e,
                                  employerId:
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.employerId
                                },
                                o
                              )
                            },
                            e.postId
                          )
                        )
                })
              ]
            })
          : (0, c.jsx)(n.A, {
              sx: {
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              },
              children: (0, c.jsx)(t.A, {
                fontSize: 18,
                fontStyle: 'italic',
                color: '#9999',
                children:
                  'B\u1ea1n ch\u01b0a theo d\xf5i c\xf4ng ty n\xe0o c\u1ea3'
              })
            });
      }
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
          var t = 0;
          t < (null === e || void 0 === e ? void 0 : e.length);
          t++
        )
          o[e[t]]
            ? (n += o[e[t]])
            : i.includes(e[t])
            ? n.endsWith('-') || (n += '-')
            : (n += e[t]);
        return n;
      }
      i.d(o, { O: () => n });
    },
    22200: (e, o, i) => {
      var n = i(32392);
      o.A = void 0;
      var t = n(i(40039)),
        a = i(70579),
        l = (0, t.default)(
          [
            (0, a.jsx)(
              'path',
              {
                d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z'
              },
              '0'
            ),
            (0, a.jsx)('circle', { cx: '12', cy: '9', r: '2.5' }, '1')
          ],
          'LocationOnOutlined'
        );
      o.A = l;
    },
    63657: (e, o, i) => {
      var n = i(32392);
      o.A = void 0;
      var t = n(i(40039)),
        a = i(70579),
        l = (0, t.default)(
          [
            (0, a.jsx)(
              'path',
              {
                d: 'M18 11c1.49 0 2.87.47 4 1.26V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h7.68c-.43-.91-.68-1.92-.68-3 0-3.87 3.13-7 7-7zm-8-7h4v2h-4V4z'
              },
              '0'
            ),
            (0, a.jsx)(
              'path',
              {
                d: 'M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85-.7.71z'
              },
              '1'
            )
          ],
          'WorkHistory'
        );
      o.A = l;
    }
  }
]);
//# sourceMappingURL=635.67e797ee.chunk.js.map
