'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [551],
  {
    46783: (o, e, i) => {
      i.d(e, { A: () => r });
      var l = i(65043),
        t = i(16520),
        a = i(59454),
        n = i(19464),
        s = i(70579);
      function r(o) {
        const { isFollow: e } = o,
          [i, r] = (0, l.useState)(e);
        return (
          (0, l.useEffect)(() => {
            r(e);
          }, [e]),
          (0, s.jsx)(n.A, {
            onClick: (o) => {
              r((o) => !o);
            },
            sx: { display: 'flex', alignItem: 'center' },
            children: i
              ? (0, s.jsx)(t.A, {
                  sx: {
                    display: 'flex',
                    color: 'red',
                    '&:hover': { color: 'darkred' }
                  }
                })
              : (0, s.jsx)(a.A, {
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
    29773: (o, e, i) => {
      i.d(e, { A: () => s });
      var l = i(34535),
        t = (i(65043), i(51318)),
        a = i(70579);
      const n = (0, l.Ay)(t.N_)((o) => {
          let { theme: e } = o;
          return {
            textDecoration: 'none',
            color: e.colors.info.dark,
            '&:active': { color: e.colors.primary.light },
            '&:visited': { color: e.colors.info.dark }
          };
        }),
        s = (o) => (0, a.jsx)(n, { ...o });
    },
    65099: (o, e, i) => {
      i.d(e, { BZ: () => a, XS: () => l, YP: () => n, tR: () => t });
      const l = {
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
        n = {
          acceptTypes: ['image/jpeg', 'image/png', 'image/gif'],
          acceptSize: 4194304
        };
    },
    55517: (o, e, i) => {
      i.d(e, { A: () => u });
      var l = i(65043),
        t = i(2384),
        a = i(19464),
        n = i(82907),
        s = i(36110),
        r = i(53679);
      const d = () => {
        const o = (0, n.useQueryClient)(),
          { toast: e } = (0, s.n)(),
          { mutate: i, isLoading: l } = (0, n.useMutation)(
            (o) => {
              let [e] = o;
              return r.Ew.create({ jobPosting: e });
            },
            {
              onSuccess: (i) => {
                200 === i.status
                  ? (o.invalidateQueries(['get-FollowJobs']),
                    e.success({ massage: i.message }))
                  : e.error({ massage: i.message });
              },
              onError: (o) => {
                e.error({ massage: o.response.data.message });
              }
            }
          );
        return { onFollowJobById: i, isLoading: l };
      };
      var c = i(46783),
        v = i(70579);
      function u(o) {
        const { job: e, sx: i } = o,
          { jobFollow: n } = (0, t.A)(),
          { onFollowJobById: r } = d(),
          { isEmployee: u } = (0, s.n)(),
          [x, p] = (0, l.useState)(!1);
        if (
          ((0, l.useEffect)(() => {
            (null === n || void 0 === n
              ? void 0
              : n.find(
                  (o) =>
                    o.postId ===
                    (null === e || void 0 === e ? void 0 : e.postId)
                )) && p(!0);
          }, [n, e]),
          e && u)
        )
          return (0, v.jsx)(a.A, {
            onClick: () => {
              return (
                (o = null === e || void 0 === e ? void 0 : e.postId),
                r([o]),
                void p((o) => !o)
              );
              var o;
            },
            sx: { display: 'flex', alignItem: 'center', ...i },
            children: (0, v.jsx)(c.A, { isFollow: x })
          });
      }
    },
    17796: (o, e, i) => {
      i.d(e, { A: () => y });
      var l = i(65043),
        t = i(12110),
        a = i(79958),
        n = i(19464),
        s = i(26494),
        r = i(68903),
        d = i(81045),
        c = i(85865),
        v = i(51726),
        u = i(15505),
        x = i(22200),
        p = i(29773),
        h = i(65099),
        m = i(55517),
        A = i(54367),
        g = i(70579);
      const y = function (o) {
        var e, i;
        let { job: y } = o;
        const [j, f] = (0, l.useState)(
          (null === y ||
          void 0 === y ||
          null === (e = y.employer) ||
          void 0 === e
            ? void 0
            : e.logo) || h.XS.companyAvatar
        );
        return (0, g.jsxs)(t.A, {
          sx: {
            border: 1,
            borderRadius: '3px',
            borderColor: '#98E4FF',
            height: 170
          },
          children: [
            (0, g.jsx)(a.A, {
              sx: {
                py: 1,
                color: '#aa720a',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                whiteSpace: 'normal',
                height: '3.5em'
              },
              title: (0, g.jsxs)(n.A, {
                display: 'flex',
                children: [
                  (0, g.jsx)(n.A, {
                    component: p.A,
                    to: '/job/'
                      .concat(
                        (0, A.O)(
                          null === y || void 0 === y ? void 0 : y.jobTitle
                        ),
                        '?id='
                      )
                      .concat(
                        btoa(null === y || void 0 === y ? void 0 : y.postId)
                      ),
                    state: {
                      postId: null === y || void 0 === y ? void 0 : y.postId
                    },
                    flex: 1,
                    sx: { ':hover': { color: '#ce8b0e' } },
                    children: null === y || void 0 === y ? void 0 : y.jobTitle
                  }),
                  (0, g.jsx)(m.A, { job: y })
                ]
              })
            }),
            (0, g.jsx)(s.A, {
              sx: { display: 'flex', flexDirection: 'row', gap: 4, pt: 1 },
              children: (0, g.jsxs)(r.Ay, {
                container: !0,
                spacing: 2,
                children: [
                  (0, g.jsx)(r.Ay, {
                    item: !0,
                    md: 4,
                    sm: 6,
                    xs: 3,
                    children: (0, g.jsx)(d.A, {
                      src: j,
                      variant: 'rounded',
                      sx: { width: 100, height: 90, objectFit: 'cover' }
                    })
                  }),
                  (0, g.jsx)(r.Ay, {
                    item: !0,
                    md: 8,
                    sm: 6,
                    xs: 9,
                    children: (0, g.jsxs)(n.A, {
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      children: [
                        (0, g.jsxs)(n.A, {
                          display: 'flex',
                          children: [
                            (0, g.jsx)(v.A, {
                              sx: { maxHeight: 20, color: 'grey.700' }
                            }),
                            (0, g.jsx)(c.A, {
                              sx: {
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2,
                                whiteSpace: 'normal',
                                maxWidth: '90%'
                              },
                              children:
                                null === y ||
                                void 0 === y ||
                                null === (i = y.employer) ||
                                void 0 === i
                                  ? void 0
                                  : i.companyName
                            })
                          ]
                        }),
                        (0, g.jsxs)(n.A, {
                          display: 'flex',
                          children: [
                            (0, g.jsx)(u.A, {
                              sx: { maxHeight: 20, color: 'grey.700' }
                            }),
                            (0, g.jsx)(c.A, {
                              color: 'secondary',
                              fontWeight: 700,
                              children:
                                (null !== y && void 0 !== y && y.minSalary) ||
                                (null !== y && void 0 !== y && y.maxSalary)
                                  ? ''
                                      .concat(
                                        (null === y || void 0 === y
                                          ? void 0
                                          : y.minSalary) ||
                                          'Th\u01b0\u01a1ng l\u01b0\u1ee3ng',
                                        ' - '
                                      )
                                      .concat(
                                        (null === y || void 0 === y
                                          ? void 0
                                          : y.maxSalary) ||
                                          'Th\u01b0\u01a1ng l\u01b0\u1ee3ng',
                                        ' tri\u1ec7u'
                                      )
                                  : 'Th\u01b0\u01a1ng l\u01b0\u1ee3ng'
                            })
                          ]
                        }),
                        (0, g.jsxs)(n.A, {
                          display: 'flex',
                          children: [
                            (0, g.jsx)(x.A, {
                              sx: { maxHeight: 18, color: 'grey.700' }
                            }),
                            (0, g.jsx)(c.A, {
                              sx: {
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                maxWidth: '90%'
                              },
                              children:
                                null === y || void 0 === y
                                  ? void 0
                                  : y.workAddress
                            })
                          ]
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
    },
    2384: (o, e, i) => {
      i.d(e, { A: () => n });
      var l = i(82907),
        t = i(53679),
        a = i(36110);
      const n = (o) => {
        var e;
        const { isEmployee: i } = (0, a.n)(),
          {
            data: n,
            isLoading: s,
            refetch: r
          } = (0, l.useQuery)(
            ['get-FollowJobs', null === o || void 0 === o ? void 0 : o.page],
            () => t.Ew.get({ params: o }),
            {
              keepPreviousData: !0,
              retry: 1,
              refetchOnWindowFocus: !1,
              enabled: i
            }
          );
        return {
          jobFollow:
            null === n || void 0 === n || null === (e = n.data) || void 0 === e
              ? void 0
              : e.jobs,
          isLoading: s,
          refetch: r
        };
      };
    },
    70551: (o, e, i) => {
      i.r(e), i.d(e, { default: () => v });
      var l = i(19252),
        t = i(85865),
        a = i(68903),
        n = i(65043),
        s = i(62237),
        r = i(17796),
        d = i(2384),
        c = i(70579);
      function v() {
        const { jobFollow: o, isLoading: e } = (0, d.A)(),
          [i, v] = (0, n.useState)([]);
        return (
          (0, n.useEffect)(() => {
            const e =
              null === o || void 0 === o
                ? void 0
                : o.map((o) => ({
                    maxSalary:
                      null === o || void 0 === o ? void 0 : o.maxSalary,
                    minSalary:
                      null === o || void 0 === o ? void 0 : o.minSalary,
                    postId: null === o || void 0 === o ? void 0 : o.postId,
                    workAddress:
                      null === o || void 0 === o ? void 0 : o.workAddress,
                    jobTitle: null === o || void 0 === o ? void 0 : o.jobTitle,
                    employer: {
                      companyName:
                        null === o || void 0 === o ? void 0 : o.companyName,
                      logo: null === o || void 0 === o ? void 0 : o.logo
                    }
                  }));
            v(() => e);
          }, [o]),
          e
            ? (0, c.jsx)(s.A, {})
            : null !== o && void 0 !== o && o.length
            ? (0, c.jsxs)(l.A, {
                sx: { p: 3 },
                children: [
                  (0, c.jsx)(t.A, {
                    mb: 2,
                    fontSize: 22,
                    fontWeight: 700,
                    children: 'Vi\u1ec7c l\xe0m \u0111\xe3 theo d\xf5i'
                  }),
                  (0, c.jsx)(a.Ay, {
                    container: !0,
                    spacing: 2,
                    children:
                      null === i || void 0 === i
                        ? void 0
                        : i.map((o, e) =>
                            (0, c.jsx)(
                              a.Ay,
                              {
                                item: !0,
                                xs: 12,
                                sm: 4,
                                children: (0, c.jsx)(r.A, { job: o }, e)
                              },
                              o.postId
                            )
                          )
                  })
                ]
              })
            : (0, c.jsx)(l.A, {
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
                    'B\u1ea1n ch\u01b0a theo d\xf5i tin tuy\u1ec3n d\u1ee5ng n\xe0o c\u1ea3'
                })
              })
        );
      }
    },
    54367: (o, e, i) => {
      function l(o) {
        const e = {
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
        let l = '';
        for (
          var t = 0;
          t < (null === o || void 0 === o ? void 0 : o.length);
          t++
        )
          e[o[t]]
            ? (l += e[o[t]])
            : i.includes(o[t])
            ? l.endsWith('-') || (l += '-')
            : (l += o[t]);
        return l;
      }
      i.d(e, { O: () => l });
    },
    59454: (o, e, i) => {
      var l = i(32392);
      e.A = void 0;
      var t = l(i(40039)),
        a = i(70579),
        n = (0, t.default)(
          (0, a.jsx)('path', {
            d: 'M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z'
          }),
          'FavoriteBorder'
        );
      e.A = n;
    },
    15505: (o, e, i) => {
      var l = i(32392);
      e.A = void 0;
      var t = l(i(40039)),
        a = i(70579),
        n = (0, t.default)(
          (0, a.jsx)('path', {
            d: 'M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z'
          }),
          'LocalAtm'
        );
      e.A = n;
    },
    22200: (o, e, i) => {
      var l = i(32392);
      e.A = void 0;
      var t = l(i(40039)),
        a = i(70579),
        n = (0, t.default)(
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
      e.A = n;
    }
  }
]);
//# sourceMappingURL=551.b9b2cbd0.chunk.js.map
