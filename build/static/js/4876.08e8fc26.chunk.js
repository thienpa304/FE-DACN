'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [4876],
  {
    34876: (e, n, t) => {
      t.r(n), t.d(n, { default: () => x });
      var s = t(54567),
        a = t(65043),
        i = t(19252),
        l = t(19464),
        o = t(85865),
        r = t(68903),
        c = t(3553),
        d = t(56530),
        u = t(51726),
        y = t(70579);
      const p = function (e) {
        const { pageTitle: n, sx: t, numOfJobPerPage: s, queryCompanys: p } = e,
          { companyList: g, totalResults: h } = p({ num: 9, page: 1 }),
          [m, x] = (0, a.useState)(1),
          f = s || 15,
          v = Math.ceil(h / f) || 1;
        return (0, y.jsxs)(i.A, {
          disableGutters: !0,
          maxWidth: 'lg',
          sx: { py: 3, ...t },
          children: [
            (0, y.jsx)(l.A, {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
              children: (0, y.jsxs)(l.A, {
                display: 'flex',
                justifyContent: 'space-between',
                children: [
                  (0, y.jsx)(u.A, {
                    color: 'primary',
                    sx: { fontSize: 40, mr: 1 }
                  }),
                  (0, y.jsx)(o.A, {
                    variant: 'h3',
                    display: 'flex',
                    alignItems: 'center',
                    children: n
                  })
                ]
              })
            }),
            (0, y.jsxs)(i.A, {
              sx: { mb: 3, py: 3, bgcolor: '#fbfeff' },
              children: [
                (0, y.jsxs)(o.A, {
                  fontSize: 18,
                  mb: 2,
                  children: [
                    'Danh s\xe1ch c\xf4ng ty',
                    (0, y.jsxs)(l.A, {
                      sx: { color: '#ce8b0e', display: 'inline', ml: 1 },
                      children: ['(', h || 0, ')']
                    }),
                    ' '
                  ]
                }),
                (0, y.jsx)(r.Ay, {
                  container: !0,
                  spacing: 2,
                  minHeight: 300,
                  children:
                    null !== g && void 0 !== g && g.length
                      ? g.map((e, n) =>
                          (0, y.jsx)(
                            r.Ay,
                            {
                              item: !0,
                              xs: 4,
                              children: (0, y.jsx)(d.A, {
                                company: e,
                                employerId:
                                  null === e || void 0 === e ? void 0 : e.userId
                              })
                            },
                            null === e || void 0 === e ? void 0 : e.userId
                          )
                        )
                      : (0, y.jsx)(o.A, {
                          fontStyle: 'italic',
                          margin: 'auto',
                          children: 'Ch\u01b0a c\xf3 c\xf4ng ty n\xe0o'
                        })
                })
              ]
            }),
            (0, y.jsx)(c.A, {
              totalPages: v,
              currentPage: m,
              handlePageChange: (e) => {
                x(e);
              }
            })
          ]
        });
      };
      var g = t(82907),
        h = t(15001);
      const m = (e) => {
        var n, t;
        const {
          data: s,
          isLoading: a,
          refetch: i
        } = (0, g.useQuery)(
          ['get-CompanyList', null === e || void 0 === e ? void 0 : e.page],
          () => h.yb.get({ params: e }),
          { retry: 1, refetchOnWindowFocus: !1 }
        );
        return {
          companyList:
            null === s || void 0 === s || null === (n = s.data) || void 0 === n
              ? void 0
              : n.companyList,
          totalResults:
            null === s || void 0 === s || null === (t = s.data) || void 0 === t
              ? void 0
              : t.totalCompany,
          isLoading: a,
          refetch: i
        };
      };
      const x = function () {
        return (0, y.jsx)(p, {
          pageTitle: 'C\xf4ng ty \u0111ang tuy\u1ec3n d\u1ee5ng',
          queryJobs: s.A,
          queryCompanys: m
        });
      };
    }
  }
]);
//# sourceMappingURL=4876.08e8fc26.chunk.js.map
