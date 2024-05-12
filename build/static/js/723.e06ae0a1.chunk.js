'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [723],
  {
    97753: (e, r, n) => {
      n.d(r, { A: () => o });
      var t = n(34535),
        s = n(19252),
        a = n(19464),
        i = n(70579);
      const c = (0, t.Ay)(s.A)((e) => {
        let { theme: r } = e;
        return '\n        margin-top: '.concat(r.spacing(4), ';\n');
      });
      const o = function () {
        return (0, i.jsx)(c, {
          className: 'footer-wrapper',
          children: (0, i.jsx)(a.A, {
            pb: 2,
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            textAlign: { xs: 'center', md: 'left' },
            justifyContent: 'space-between'
          })
        });
      };
    },
    34723: (e, r, n) => {
      n.r(r), n.d(r, { default: () => ie });
      var t = n(65043),
        s = n(29490),
        a = n(34535),
        i = n(19464),
        c = n(19252),
        o = n(70579);
      const l = (0, a.Ay)(i.A)((e) => {
          let { theme: r } = e;
          return '\n        padding: '.concat(r.spacing(4), ';\n');
        }),
        d = (e) => {
          let { children: r } = e;
          return (0, o.jsx)(l, {
            className: 'MuiPageTitle-wrapper',
            children: (0, o.jsx)(c.A, { maxWidth: 'lg', children: r })
          });
        };
      var h = n(69869),
        p = n(68903),
        x = n(24056),
        y = n(97753),
        A = n(27600),
        j = n(12110),
        m = n(79958),
        g = n(81045),
        u = n(17392),
        v = n(88446),
        b = n(85865),
        f = n(36591),
        w = n(39336),
        k = n(11906),
        P = n(70573),
        T = n(3144),
        C = n(88361),
        B = n(24551),
        S = n(43024);
      const z = (0, a.Ay)('span')((e) => {
          let { theme: r } = e;
          return '\n      display: inline-block;\n      align-items: center;\n\n      &.flexItem {\n        display: inline-flex;\n      }\n      \n      &.MuiText {\n\n        &-black {\n          color: '
            .concat(
              r.palette.common.black,
              '\n        }\n\n        &-primary {\n          color: '
            )
            .concat(
              r.palette.primary.main,
              '\n        }\n        \n        &-secondary {\n          color: '
            )
            .concat(
              r.palette.secondary.main,
              '\n        }\n        \n        &-success {\n          color: '
            )
            .concat(
              r.palette.success.main,
              '\n        }\n        \n        &-warning {\n          color: '
            )
            .concat(
              r.palette.warning.main,
              '\n        }\n              \n        &-error {\n          color: '
            )
            .concat(
              r.palette.error.main,
              '\n        }\n        \n        &-info {\n          color: '
            )
            .concat(r.palette.info.main, '\n        }\n      }\n');
        }),
        D = (e) => {
          let {
            className: r,
            color: n = 'secondary',
            flex: t,
            children: s,
            ...a
          } = e;
          return (0, o.jsx)(z, {
            className: (0, S.A)('MuiText-' + n, { flexItem: t }),
            ...a,
            children: s
          });
        },
        I = (0, a.Ay)(A.A)((e) => {
          let { theme: r } = e;
          return '\n     background: '
            .concat(r.colors.alpha.black[5], ';\n     padding: ')
            .concat(r.spacing(3), ';\n');
        });
      const M = function () {
        return (0, o.jsxs)(j.A, {
          children: [
            (0, o.jsx)(m.A, {
              avatar: (0, o.jsx)(g.A, { src: '/static/images/avatars/5.jpg' }),
              action: (0, o.jsx)(u.A, {
                color: 'primary',
                children: (0, o.jsx)(P.A, { fontSize: 'medium' })
              }),
              titleTypographyProps: { variant: 'h4' },
              subheaderTypographyProps: { variant: 'subtitle2' },
              title: 'Allison Lipshutz',
              subheader: (0, o.jsxs)(o.Fragment, {
                children: [
                  'Managing Partner,',
                  ' ',
                  (0, o.jsx)(v.A, {
                    href: '#',
                    underline: 'hover',
                    children: '#software'
                  }),
                  ',',
                  ' ',
                  (0, o.jsx)(v.A, {
                    href: '#',
                    underline: 'hover',
                    children: '#managers'
                  }),
                  ', Google Inc.'
                ]
              })
            }),
            (0, o.jsx)(i.A, {
              px: 3,
              pb: 2,
              children: (0, o.jsx)(b.A, {
                variant: 'h4',
                fontWeight: 'normal',
                children:
                  'Welcome to organizing your remote office for maximum productivity.'
              })
            }),
            (0, o.jsx)(f.A, {
              sx: { minHeight: 280 },
              image: '/static/images/placeholders/covers/6.jpg',
              title: 'Card Cover'
            }),
            (0, o.jsxs)(i.A, {
              p: 3,
              children: [
                (0, o.jsx)(b.A, {
                  variant: 'h2',
                  sx: { pb: 1 },
                  children:
                    'Organizing Your Remote Office for Maximum Productivity'
                }),
                (0, o.jsxs)(b.A, {
                  variant: 'subtitle2',
                  children: [
                    (0, o.jsx)(v.A, {
                      href: '#',
                      underline: 'hover',
                      children: 'example.com'
                    }),
                    ' ',
                    '\u2022 4 mins read'
                  ]
                })
              ]
            }),
            (0, o.jsx)(w.A, {}),
            (0, o.jsxs)(I, {
              sx: {
                display: { xs: 'block', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'space-between'
              },
              children: [
                (0, o.jsxs)(i.A, {
                  children: [
                    (0, o.jsx)(k.A, {
                      startIcon: (0, o.jsx)(T.A, {}),
                      variant: 'contained',
                      children: 'Like'
                    }),
                    (0, o.jsx)(k.A, {
                      startIcon: (0, o.jsx)(C.A, {}),
                      variant: 'outlined',
                      sx: { mx: 2 },
                      children: 'Comment'
                    }),
                    (0, o.jsx)(k.A, {
                      startIcon: (0, o.jsx)(B.A, {}),
                      variant: 'outlined',
                      children: 'Share'
                    })
                  ]
                }),
                (0, o.jsx)(i.A, {
                  sx: { mt: { xs: 2, md: 0 } },
                  children: (0, o.jsxs)(b.A, {
                    variant: 'subtitle2',
                    component: 'span',
                    children: [
                      (0, o.jsx)(D, {
                        color: 'black',
                        children: (0, o.jsx)('b', { children: '485' })
                      }),
                      ' ',
                      'reactions \u2022',
                      ' ',
                      (0, o.jsx)(D, {
                        color: 'black',
                        children: (0, o.jsx)('b', { children: '63' })
                      }),
                      ' ',
                      'comments'
                    ]
                  })
                })
              ]
            })
          ]
        });
      };
      var H = n(35721),
        R = n(71322),
        F = n(48734),
        N = n(19042);
      const W = function () {
        const [e, r] = (0, t.useState)({
            checkedA: !0,
            checkedB: !1,
            checkedC: !0,
            checkedD: !1
          }),
          n = (n) => {
            r({ ...e, [n.target.name]: n.target.checked });
          };
        return (0, o.jsxs)(p.Ay, {
          container: !0,
          spacing: 3,
          children: [
            (0, o.jsxs)(p.Ay, {
              item: !0,
              xs: 12,
              children: [
                (0, o.jsxs)(i.A, {
                  pb: 2,
                  children: [
                    (0, o.jsx)(b.A, { variant: 'h3', children: 'Account' }),
                    (0, o.jsx)(b.A, {
                      variant: 'subtitle2',
                      children: 'Choose what notifications you want to receive'
                    })
                  ]
                }),
                (0, o.jsx)(j.A, {
                  children: (0, o.jsxs)(H.A, {
                    children: [
                      (0, o.jsxs)(R.Ay, {
                        sx: { p: 3 },
                        children: [
                          (0, o.jsx)(F.A, {
                            primaryTypographyProps: {
                              variant: 'h5',
                              gutterBottom: !0
                            },
                            secondaryTypographyProps: {
                              variant: 'subtitle2',
                              lineHeight: 1
                            },
                            primary: 'Widthdraw Activity',
                            secondary:
                              'Receive an email when a widthdrawal is made'
                          }),
                          (0, o.jsx)(N.A, {
                            color: 'primary',
                            checked: e.checkedA,
                            onChange: n,
                            name: 'checkedA'
                          })
                        ]
                      }),
                      (0, o.jsx)(w.A, { component: 'li' }),
                      (0, o.jsxs)(R.Ay, {
                        sx: { p: 3 },
                        children: [
                          (0, o.jsx)(F.A, {
                            primaryTypographyProps: {
                              variant: 'h5',
                              gutterBottom: !0
                            },
                            secondaryTypographyProps: {
                              variant: 'subtitle2',
                              lineHeight: 1
                            },
                            primary: 'Weekly Report',
                            secondary:
                              'Receive account status weekly report in your inbox'
                          }),
                          (0, o.jsx)(N.A, {
                            color: 'primary',
                            checked: e.checkedB,
                            onChange: n,
                            name: 'checkedB'
                          })
                        ]
                      })
                    ]
                  })
                })
              ]
            }),
            (0, o.jsxs)(p.Ay, {
              item: !0,
              xs: 12,
              children: [
                (0, o.jsxs)(i.A, {
                  pb: 2,
                  children: [
                    (0, o.jsx)(b.A, { variant: 'h3', children: 'Orders' }),
                    (0, o.jsx)(b.A, {
                      variant: 'subtitle2',
                      children:
                        'Receive email notifications related to your orders activity'
                    })
                  ]
                }),
                (0, o.jsx)(j.A, {
                  children: (0, o.jsxs)(H.A, {
                    children: [
                      (0, o.jsxs)(R.Ay, {
                        sx: { p: 3 },
                        children: [
                          (0, o.jsx)(F.A, {
                            primaryTypographyProps: {
                              variant: 'h5',
                              gutterBottom: !0
                            },
                            secondaryTypographyProps: {
                              variant: 'subtitle2',
                              lineHeight: 1
                            },
                            primary: 'Failed Payment',
                            secondary: 'Get a message when a payment fails'
                          }),
                          (0, o.jsx)(N.A, {
                            color: 'primary',
                            checked: e.checkedC,
                            onChange: n,
                            name: 'checkedC'
                          })
                        ]
                      }),
                      (0, o.jsx)(w.A, { component: 'li' }),
                      (0, o.jsxs)(R.Ay, {
                        sx: { p: 3 },
                        children: [
                          (0, o.jsx)(F.A, {
                            primaryTypographyProps: {
                              variant: 'h5',
                              gutterBottom: !0
                            },
                            secondaryTypographyProps: {
                              variant: 'subtitle2',
                              lineHeight: 1
                            },
                            primary: 'Order Status Update',
                            secondary:
                              'Whenever an order is updated, get a notification on your phone'
                          }),
                          (0, o.jsx)(N.A, {
                            color: 'primary',
                            checked: e.checkedD,
                            onChange: n,
                            name: 'checkedD'
                          })
                        ]
                      })
                    ]
                  })
                })
              ]
            })
          ]
        });
      };
      var G = n(26240),
        E = n(23851),
        L = n(79650),
        O = n(71806),
        Y = n(84882),
        U = n(28076),
        _ = n(10039),
        K = n(73460),
        X = n(77739),
        q = n(7167),
        J = n(65944),
        Q = n(60677),
        V = n(19170),
        Z = n(41635),
        $ = n(67545),
        ee = n(84021);
      const re = (0, a.Ay)(k.A)((e) => {
          let { theme: r } = e;
          return '\n     background: '
            .concat(r.colors.error.main, ';\n     color: ')
            .concat(
              r.palette.error.contrastText,
              ';\n\n     &:hover {\n        background: '
            )
            .concat(r.colors.error.dark, ';\n     }\n    ');
        }),
        ne = (0, a.Ay)(g.A)((e) => {
          let { theme: r } = e;
          return '\n    background: '
            .concat(r.colors.success.light, ';\n    width: ')
            .concat(r.spacing(5), ';\n    height: ')
            .concat(r.spacing(5), ';\n');
        }),
        te = (0, a.Ay)(g.A)((e) => {
          let { theme: r } = e;
          return '\n    width: '
            .concat(r.spacing(5), ';\n    height: ')
            .concat(r.spacing(5), ';\n');
        });
      const se = function () {
          const e = (0, G.A)(),
            [r, n] = (0, t.useState)(2),
            [s, a] = (0, t.useState)(10),
            c = [
              {
                id: 1,
                browser: ' Safari/537.36',
                ipaddress: '3.70.73.142',
                location: 'United States',
                date: (0, V.A)(new Date(), 2).getTime()
              },
              {
                id: 2,
                browser: 'Chrome/36.0.1985.67',
                ipaddress: '138.13.136.179',
                location: 'China',
                date: (0, V.A)(new Date(), 6).getTime()
              },
              {
                id: 3,
                browser: 'Googlebot/2.1',
                ipaddress: '119.229.170.253',
                location: 'China',
                date: (0, Z.A)(new Date(), 15).getTime()
              },
              {
                id: 4,
                browser: 'AppleWebKit/535.1',
                ipaddress: '206.8.99.49',
                location: 'Philippines',
                date: (0, V.A)(new Date(), 4).getTime()
              },
              {
                id: 5,
                browser: 'Mozilla/5.0',
                ipaddress: '235.40.59.85',
                location: 'China',
                date: (0, $.A)(new Date(), 3).getTime()
              }
            ];
          return (0, o.jsxs)(p.Ay, {
            container: !0,
            spacing: 3,
            children: [
              (0, o.jsxs)(p.Ay, {
                item: !0,
                xs: 12,
                children: [
                  (0, o.jsxs)(i.A, {
                    pb: 2,
                    children: [
                      (0, o.jsx)(b.A, {
                        variant: 'h3',
                        children: 'Social Accounts'
                      }),
                      (0, o.jsx)(b.A, {
                        variant: 'subtitle2',
                        children: 'Manage connected social accounts options'
                      })
                    ]
                  }),
                  (0, o.jsx)(j.A, {
                    children: (0, o.jsx)(H.A, {
                      children: (0, o.jsxs)(R.Ay, {
                        sx: { p: 3 },
                        children: [
                          (0, o.jsx)(E.A, {
                            sx: { pr: 2 },
                            children: (0, o.jsx)(te, {
                              src: '/static/images/logo/google.svg'
                            })
                          }),
                          (0, o.jsx)(F.A, {
                            primaryTypographyProps: {
                              variant: 'h5',
                              gutterBottom: !0
                            },
                            secondaryTypographyProps: {
                              variant: 'subtitle2',
                              lineHeight: 1
                            },
                            primary: 'Google',
                            secondary:
                              'A Google account hasn\u2019t been yet added to your account'
                          }),
                          (0, o.jsx)(k.A, {
                            color: 'secondary',
                            size: 'large',
                            variant: 'contained',
                            children: 'Connect'
                          })
                        ]
                      })
                    })
                  })
                ]
              }),
              (0, o.jsx)(p.Ay, {
                item: !0,
                xs: 12,
                children: (0, o.jsx)(j.A, {
                  children: (0, o.jsxs)(H.A, {
                    children: [
                      (0, o.jsxs)(R.Ay, {
                        sx: { p: 3 },
                        children: [
                          (0, o.jsx)(E.A, {
                            sx: { pr: 2 },
                            children: (0, o.jsx)(ne, {
                              children: (0, o.jsx)(J.A, {})
                            })
                          }),
                          (0, o.jsx)(F.A, {
                            primaryTypographyProps: {
                              variant: 'h5',
                              gutterBottom: !0
                            },
                            secondaryTypographyProps: {
                              variant: 'subtitle2',
                              lineHeight: 1
                            },
                            primary: 'Facebook',
                            secondary:
                              'Your Facebook account has been successfully connected'
                          }),
                          (0, o.jsx)(re, {
                            size: 'large',
                            variant: 'contained',
                            children: 'Revoke access'
                          })
                        ]
                      }),
                      (0, o.jsx)(w.A, { component: 'li' }),
                      (0, o.jsxs)(R.Ay, {
                        sx: { p: 3 },
                        children: [
                          (0, o.jsx)(E.A, {
                            sx: { pr: 2 },
                            children: (0, o.jsx)(ne, {
                              children: (0, o.jsx)(J.A, {})
                            })
                          }),
                          (0, o.jsx)(F.A, {
                            primaryTypographyProps: {
                              variant: 'h5',
                              gutterBottom: !0
                            },
                            secondaryTypographyProps: {
                              variant: 'subtitle2',
                              lineHeight: 1
                            },
                            primary: 'Twitter',
                            secondary:
                              'Your Twitter account was last syncronized 6 days ago'
                          }),
                          (0, o.jsx)(re, {
                            size: 'large',
                            variant: 'contained',
                            children: 'Revoke access'
                          })
                        ]
                      })
                    ]
                  })
                })
              }),
              (0, o.jsxs)(p.Ay, {
                item: !0,
                xs: 12,
                children: [
                  (0, o.jsxs)(i.A, {
                    pb: 2,
                    children: [
                      (0, o.jsx)(b.A, { variant: 'h3', children: 'Security' }),
                      (0, o.jsx)(b.A, {
                        variant: 'subtitle2',
                        children: 'Change your security preferences below'
                      })
                    ]
                  }),
                  (0, o.jsx)(j.A, {
                    children: (0, o.jsxs)(H.A, {
                      children: [
                        (0, o.jsxs)(R.Ay, {
                          sx: { p: 3 },
                          children: [
                            (0, o.jsx)(F.A, {
                              primaryTypographyProps: {
                                variant: 'h5',
                                gutterBottom: !0
                              },
                              secondaryTypographyProps: {
                                variant: 'subtitle2',
                                lineHeight: 1
                              },
                              primary: 'Change Password',
                              secondary: 'You can change your password here'
                            }),
                            (0, o.jsx)(k.A, {
                              size: 'large',
                              variant: 'outlined',
                              children: 'Change password'
                            })
                          ]
                        }),
                        (0, o.jsx)(w.A, { component: 'li' }),
                        (0, o.jsxs)(R.Ay, {
                          sx: { p: 3 },
                          children: [
                            (0, o.jsx)(F.A, {
                              primaryTypographyProps: {
                                variant: 'h5',
                                gutterBottom: !0
                              },
                              secondaryTypographyProps: {
                                variant: 'subtitle2',
                                lineHeight: 1
                              },
                              primary: 'Two-Factor Authentication',
                              secondary:
                                'Enable PIN verification for all sign in attempts'
                            }),
                            (0, o.jsx)(N.A, { color: 'primary' })
                          ]
                        })
                      ]
                    })
                  })
                ]
              }),
              (0, o.jsx)(p.Ay, {
                item: !0,
                xs: 12,
                children: (0, o.jsxs)(j.A, {
                  children: [
                    (0, o.jsx)(m.A, {
                      subheaderTypographyProps: {},
                      titleTypographyProps: {},
                      title: 'Access Logs',
                      subheader: 'Recent sign in activity logs'
                    }),
                    (0, o.jsx)(w.A, {}),
                    (0, o.jsx)(L.A, {
                      children: (0, o.jsxs)(O.A, {
                        children: [
                          (0, o.jsx)(Y.A, {
                            children: (0, o.jsxs)(U.A, {
                              children: [
                                (0, o.jsx)(_.A, { children: 'Browser' }),
                                (0, o.jsx)(_.A, { children: 'IP Address' }),
                                (0, o.jsx)(_.A, { children: 'Location' }),
                                (0, o.jsx)(_.A, { children: 'Date/Time' }),
                                (0, o.jsx)(_.A, {
                                  align: 'right',
                                  children: 'Actions'
                                })
                              ]
                            })
                          }),
                          (0, o.jsx)(K.A, {
                            children: c.map((r) =>
                              (0, o.jsxs)(
                                U.A,
                                {
                                  hover: !0,
                                  children: [
                                    (0, o.jsx)(_.A, { children: r.browser }),
                                    (0, o.jsx)(_.A, { children: r.ipaddress }),
                                    (0, o.jsx)(_.A, { children: r.location }),
                                    (0, o.jsx)(_.A, {
                                      children: (0, ee.A)(
                                        r.date,
                                        'dd MMMM, yyyy - h:mm:ss a'
                                      )
                                    }),
                                    (0, o.jsx)(_.A, {
                                      align: 'right',
                                      children: (0, o.jsx)(X.A, {
                                        placement: 'top',
                                        title: 'Delete',
                                        arrow: !0,
                                        children: (0, o.jsx)(u.A, {
                                          sx: {
                                            '&:hover': {
                                              background: e.colors.error.lighter
                                            },
                                            color: e.palette.error.main
                                          },
                                          color: 'inherit',
                                          size: 'small',
                                          children: (0, o.jsx)(Q.A, {
                                            fontSize: 'small'
                                          })
                                        })
                                      })
                                    })
                                  ]
                                },
                                r.id
                              )
                            )
                          })
                        ]
                      })
                    }),
                    (0, o.jsx)(i.A, {
                      p: 2,
                      children: (0, o.jsx)(q.A, {
                        component: 'div',
                        count: 100,
                        page: r,
                        onPageChange: (e, r) => {
                          n(r);
                        },
                        rowsPerPage: s,
                        onRowsPerPageChange: (e) => {
                          a(parseInt(e.target.value, 10)), n(0);
                        }
                      })
                    })
                  ]
                })
              })
            ]
          });
        },
        ae = (0, a.Ay)(h.A)(
          () =>
            '\n    .MuiTabs-scrollableX {\n      overflow-x: auto !important;\n    }\n'
        );
      const ie = function () {
        const [e, r] = (0, t.useState)('activity');
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(s.mg, {
              children: (0, o.jsx)('title', {
                children: 'User Settings - Applications'
              })
            }),
            (0, o.jsx)(d, {}),
            (0, o.jsx)(c.A, {
              maxWidth: 'lg',
              children: (0, o.jsxs)(p.Ay, {
                container: !0,
                direction: 'row',
                justifyContent: 'center',
                alignItems: 'stretch',
                spacing: 3,
                children: [
                  (0, o.jsx)(p.Ay, {
                    item: !0,
                    xs: 12,
                    children: (0, o.jsx)(ae, {
                      onChange: (e, n) => {
                        r(n);
                      },
                      value: e,
                      variant: 'scrollable',
                      scrollButtons: 'auto',
                      textColor: 'primary',
                      indicatorColor: 'primary',
                      children: [
                        { value: 'activity', label: 'Activity' },
                        { value: 'edit_profile', label: 'Edit Profile' },
                        { value: 'notifications', label: 'Notifications' },
                        { value: 'security', label: 'Passwords/Security' }
                      ].map((e) =>
                        (0, o.jsx)(
                          x.A,
                          { label: e.label, value: e.value },
                          e.value
                        )
                      )
                    })
                  }),
                  (0, o.jsxs)(p.Ay, {
                    item: !0,
                    xs: 12,
                    children: [
                      'activity' === e && (0, o.jsx)(M, {}),
                      'notifications' === e && (0, o.jsx)(W, {}),
                      'security' === e && (0, o.jsx)(se, {})
                    ]
                  })
                ]
              })
            }),
            (0, o.jsx)(y.A, {})
          ]
        });
      };
    }
  }
]);
//# sourceMappingURL=723.e06ae0a1.chunk.js.map
