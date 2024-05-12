(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [701],
  {
    49768: (e, o, l) => {
      'use strict';
      l.d(o, { A: () => a });
      l(65043);
      var i = l(79190),
        n = l(32143),
        t = l(53193),
        r = l(72221),
        d = l(70579);
      function a(e) {
        const { options: o = [], label: l, labelmargintop: a = 0 } = e;
        return (0, d.jsxs)(t.A, {
          fullWidth: !0,
          children: [
            (0, d.jsx)(i.A, { size: 'small', sx: { mt: a }, children: l }),
            (0, d.jsx)(r.A, {
              size: 'small',
              ...e,
              children: o.map((e, o) =>
                (0, d.jsx)(n.A, { value: e.value, children: e.label }, o)
              )
            })
          ]
        });
      }
    },
    52404: (e, o, l) => {
      'use strict';
      l.d(o, { D$: () => d, DG: () => t, mi: () => n, zP: () => r });
      var i = l(22626);
      const n = new i.A('employee/applications'),
        t = new i.A('employer/applications'),
        r = new i.A('employer/applications'),
        d = new i.A('employer/applications/totalResults');
    },
    21886: (e, o, l) => {
      'use strict';
      l.d(o, { A: () => d, B: () => a });
      var i = l(82907),
        n = l(53679),
        t = l(36110),
        r = l(65043);
      function d(e) {
        if (!e) return {};
        const {
            data: o,
            isLoading: l,
            isFetching: t
          } = (0, i.useQuery)(['job-getById', e], async () => n.Y$.getById(e), {
            retry: 1,
            refetchOnWindowFocus: !1
          }),
          [d, a] = (0, r.useState)();
        return (
          (0, r.useEffect)(() => {
            if (null !== o && void 0 !== o && o.data) {
              var e, l;
              const i = {
                ...(null === o || void 0 === o ? void 0 : o.data),
                sex:
                  null ===
                  (null === o ||
                  void 0 === o ||
                  null === (e = o.data) ||
                  void 0 === e
                    ? void 0
                    : e.sex)
                    ? 'T\u1ea5t c\u1ea3'
                    : null === o ||
                      void 0 === o ||
                      null === (l = o.data) ||
                      void 0 === l
                    ? void 0
                    : l.sex
              };
              a(i);
            }
          }, [JSON.stringify(o)]),
          { data: d, isLoading: l, isFetching: t }
        );
      }
      function a(e) {
        const { isEmployer: o } = (0, t.n)(),
          [l, d] = (0, r.useState)([]),
          { data: a, isLoading: s } = (0, i.useQuery)(
            ['jobs-getByIdList', JSON.stringify(e)],
            async () => {
              if (!e.length) return [];
              Promise.allSettled(e.map((e) => n.Y$.getById(e)))
                .then((e) => {
                  const o = e
                    .filter((e) => 'fulfilled' === e.status)
                    .map((e) => e.value);
                  d(o);
                })
                .catch((e) => console.log(e));
            },
            {
              retry: 1,
              refetchOnWindowFocus: !1,
              keepPreviousData: !0,
              enabled: o
            }
          );
        return {
          jobs:
            (null === l || void 0 === l
              ? void 0
              : l.map((e) => {
                  var o, l, i;
                  return {
                    ...(null === e || void 0 === e ? void 0 : e.data),
                    id:
                      null === e ||
                      void 0 === e ||
                      null === (o = e.data) ||
                      void 0 === o
                        ? void 0
                        : o.postId,
                    sex:
                      null ===
                      (null === e ||
                      void 0 === e ||
                      null === (l = e.data) ||
                      void 0 === l
                        ? void 0
                        : l.sex)
                        ? 'T\u1ea5t c\u1ea3'
                        : null === e ||
                          void 0 === e ||
                          null === (i = e.data) ||
                          void 0 === i
                        ? void 0
                        : i.sex
                  };
                })) || [],
          isLoading: s
        };
      }
    },
    78910: (e, o, l) => {
      'use strict';
      l.d(o, { V: () => t, Z: () => i });
      const i = (e, o) => {
        if (e.length <= 0 && !Boolean(e[0])) return;
        const l = e[0],
          i = l.indexOf('[');
        if (-1 === i)
          return void console.log(
            "Kh\xf4ng t\xecm th\u1ea5y k\xfd t\u1ef1 '['"
          );
        const n = l.lastIndexOf(']');
        if (-1 === n)
          return void console.log(
            "Kh\xf4ng t\xecm th\u1ea5y k\xfd t\u1ef1 ']'"
          );
        const t = l.substring(i + 1, n).replace(/["]/g, '');
        console.log('extractedString: ', t);
        const r = t.replace(/[_!@#$%^&*;|<>'"\n\t\r]/g, '');
        console.log('jsonString: ', r);
        const d = r.split(',');
        console.log('keywordArray', d);
        const a = d.slice(0, 20);
        return (
          console.log(
            'keywordList?.join(',
            ')',
            null === a || void 0 === a ? void 0 : a.join(', ')
          ),
          null === a || void 0 === a ? void 0 : a.join(', ')
        );
      };
      const n = (e, o, l) => {
        if ('online' === o) {
          var i;
          const o = e;
          return {
            jobTitle: null === o || void 0 === o ? void 0 : o.jobTitle,
            profession: null === o || void 0 === o ? void 0 : o.profession,
            work_experiences:
              null === o || void 0 === o
                ? void 0
                : o.work_experiences.map((e) => ({
                    jobTitle: e.jobTitle,
                    jobDescription: e.jobDescription
                  })),
            education_informations:
              null === o || void 0 === o
                ? void 0
                : o.education_informations.map((e) => e.specialization),
            another_degrees:
              null === o ||
              void 0 === o ||
              null === (i = o.another_degrees) ||
              void 0 === i
                ? void 0
                : i.map((e) => e.degreeName)
          };
        }
        return {
          jobTitle: null === e || void 0 === e ? void 0 : e.jobTitle,
          profession: null === e || void 0 === e ? void 0 : e.profession,
          cvContent: l
        };
      };
      function t(e, o, l) {
        return n(e, o, l);
      }
    },
    42445: (e, o, l) => {
      'use strict';
      l.d(o, {
        IF: () => f,
        ay: () => p,
        $I: () => m,
        _h: () => w,
        d8: () => O,
        MO: () => h,
        kF: () => b,
        NQ: () => A
      });
      var i = l(19290),
        n = l(25650),
        t = l(91401),
        r = l(69570),
        d = l(60386),
        a = l(56743);
      var s = l(60446),
        u = l.n(s),
        c = l(95796),
        v = l(78910);
      const p = 30,
        m = 80,
        f = 110,
        y = async (e, o) =>
          Promise.all(
            e.map(async (e) => ({
              ...e,
              employee_Profile: await o(e.employee_Profile)
            }))
          ),
        _ = (e) =>
          e
            .filter((e) => e.employee_Profile)
            .map((e) => {
              let { employee_Profile: o, employer_Requirement: l } = e;
              return { employee_Profile: o, employer_Requirement: l };
            }),
        g = (e) => {
          if (!e) return null;
          const o = e.replace(/[^\w\s,+()@.:\/-]/g, '').replace(/\s+/g, ' ');
          return o || null;
        },
        h = (e) => ({
          id: null === e || void 0 === e ? void 0 : e.postId,
          jobTitle: null === e || void 0 === e ? void 0 : e.jobTitle,
          profession: null === e || void 0 === e ? void 0 : e.profession,
          jobDescription: (0, n.Cu)(
            null === e || void 0 === e ? void 0 : e.jobDescription
          ),
          jobRequirements: (0, n.Cu)(
            null === e || void 0 === e ? void 0 : e.jobRequirements
          ),
          benefits: (0, n.Cu)(null === e || void 0 === e ? void 0 : e.benefits),
          workAddress: null === e || void 0 === e ? void 0 : e.workAddress,
          minAge: null === e || void 0 === e ? void 0 : e.minAge,
          maxAge: null === e || void 0 === e ? void 0 : e.maxAge,
          sex: null === e || void 0 === e ? void 0 : e.sex,
          requiredSkills:
            null === e || void 0 === e ? void 0 : e.requiredSkills,
          employmentType:
            null === e || void 0 === e ? void 0 : e.employmentType,
          degree: null === e || void 0 === e ? void 0 : e.degree,
          experience: null === e || void 0 === e ? void 0 : e.experience,
          positionLevel: null === e || void 0 === e ? void 0 : e.positionLevel,
          keywords: null === e || void 0 === e ? void 0 : e.keywords
        }),
        b = (e) => {
          var o, l;
          return {
            ...e,
            personal_information: {
              dob:
                null === e ||
                void 0 === e ||
                null === (o = e.personal_information) ||
                void 0 === o
                  ? void 0
                  : o.dob,
              sex:
                null === e ||
                void 0 === e ||
                null === (l = e.personal_information) ||
                void 0 === l
                  ? void 0
                  : l.sex
            }
          };
        },
        w = (e, o) => {
          const {
              personal_information: l,
              online_profile: i,
              attached_document: n
            } = o,
            t = u()(
              null === l || void 0 === l ? void 0 : l.dob,
              'YYYY-MM-DD'
            ).isValid()
              ? u()(null === l || void 0 === l ? void 0 : l.dob, 'YYYY-MM-DD')
              : u()(null === l || void 0 === l ? void 0 : l.dob, 'DD-MM-YYYY'),
            r = u()().year() - t.year();
          return (null !== (null === e || void 0 === e ? void 0 : e.sex) &&
            (null === e || void 0 === e ? void 0 : e.sex) !==
              (null === l || void 0 === l ? void 0 : l.sex)) ||
            (null === e || void 0 === e ? void 0 : e.minAge) > r ||
            (null === e || void 0 === e ? void 0 : e.maxAge) < r ||
            (i && !P(i, e)) ||
            (n && !P(n, e))
            ? -10
            : 30;
        },
        P = (e, o) => {
          const { profession: l, degree: i, experience: n } = e,
            t = l.split(', '),
            r = o.profession.split(', ');
          return (
            !!t.some((e) => r.includes(e)) &&
            ((d = i),
            (s = null === o || void 0 === o ? void 0 : o.degree),
            !(
              (Object.values(a.Ry).indexOf(d) > Object.values(a.Ry).indexOf(s)
                ? -1
                : 1) < 0
            ) &&
              !(
                (function (e, o) {
                  return Object.values(a.Je).indexOf(e) >
                    Object.values(a.Je).indexOf(e)
                    ? -1
                    : 1;
                })(n, null === o || void 0 === o || o.experience) < 0
              ))
          );
          var d, s;
        },
        j = async (e, o) => {
          try {
            const o = await (0, r.TL)(e),
              l = await fetch(o);
            if (!l.ok) throw new Error('Failed to fetch file');
            const i = await l.blob();
            return (0, d.A)(i);
          } catch (l) {
            return console.error('Error fetching data:', l), null;
          }
        },
        k = async (e) => {
          if (null !== e && void 0 !== e && e.attached_document) {
            const o = await j(e.attached_document.CV),
              l = g(o);
            return l
              ? { ...e, attached_document: { ...e.attached_document, CV: l } }
              : null;
          }
          return null;
        },
        x = async (e) => {
          var o, l;
          if (
            'N\u1ed9p nhanh' ===
              (null === e ||
              void 0 === e ||
              null === (o = e.application) ||
              void 0 === o
                ? void 0
                : o.applicationType) &&
            null !== e &&
            void 0 !== e &&
            null !== (l = e.application) &&
            void 0 !== l &&
            l.CV
          ) {
            const o = await j(e.application.CV),
              l = g(o);
            return l ? { ...e, application: { ...e.application, CV: l } } : e;
          }
          return null;
        },
        A = async (e) => {
          let {
            round: o,
            handleAnalyzeResult: l,
            setIsAnalyzing: n,
            setAnalyzedProfile: r,
            passRoundProfiles: d,
            resetMatchingScoreList: a,
            handleGoToAnalyzeResult: s
          } = e;
          switch ((n(!0), o)) {
            case 1:
              await (async (e, o, l, n) => {
                console.log('Start round 1');
                const r = e.filter((e) => {
                    var o;
                    return null ===
                      (o = e.employee_Profile.attached_document) || void 0 === o
                      ? void 0
                      : o.CV;
                  }),
                  d = e.filter((e) => {
                    var o;
                    return (
                      !(
                        null !== (o = e.employee_Profile) &&
                        void 0 !== o &&
                        o.online_profile
                      ) && !e.employee_Profile.attached_document
                    );
                  }),
                  a = await y(r, k),
                  s = await y(d, x),
                  u = _(a),
                  c = _(s),
                  v = ((e, o, l) =>
                    e.map((e) => {
                      const i = ((e, o, l) =>
                        o.find(
                          (o) => o.employee_Profile.application.id === e
                        ) ||
                        l.find((o) => o.employee_Profile.application.id === e))(
                        e.id,
                        o,
                        l
                      );
                      return i ? { ...e, ...i } : e;
                    }))(e, c, u);
                console.log('cvContentProfile', v);
                const p = await (0, t.A)(i.Rj, c).catch(() => []);
                o(v), null !== p && void 0 !== p && n(!0, p);
              })(a, r, 0, s);
              break;
            case 2:
              await (async (e, o) => {
                console.log('Start round 2');
                const l = e.map((e) => {
                  var o, l, i;
                  let n;
                  var t, r, d, a, s, u, c, v, p;
                  if (
                    null !== e &&
                    void 0 !== e &&
                    null !== (o = e.employee_Profile) &&
                    void 0 !== o &&
                    o.online_profile
                  )
                    n = {
                      jobTitle:
                        null === e ||
                        void 0 === e ||
                        null === (t = e.employee_Profile) ||
                        void 0 === t ||
                        null === (r = t.online_profile) ||
                        void 0 === r
                          ? void 0
                          : r.jobTitle,
                      skills:
                        null === e ||
                        void 0 === e ||
                        null === (d = e.employee_Profile) ||
                        void 0 === d
                          ? void 0
                          : d.online_profile.skills,
                      another_degree:
                        null === e ||
                        void 0 === e ||
                        null === (a = e.employee_Profile) ||
                        void 0 === a ||
                        null === (s = a.online_profile.another_degree) ||
                        void 0 === s
                          ? void 0
                          : s.map((e) => e.Name),
                      education_informations:
                        null === e ||
                        void 0 === e ||
                        null === (u = e.employee_Profile) ||
                        void 0 === u ||
                        null ===
                          (c = u.online_profile.education_informations) ||
                        void 0 === c
                          ? void 0
                          : c.map((e) => e.degreeName),
                      work_experiences:
                        null === e ||
                        void 0 === e ||
                        null === (v = e.employee_Profile) ||
                        void 0 === v ||
                        null === (p = v.online_profile.work_experiences) ||
                        void 0 === p
                          ? void 0
                          : p.map((e) => ({
                              jobTitle:
                                null === e || void 0 === e
                                  ? void 0
                                  : e.jobTitle,
                              jobDescription:
                                null === e || void 0 === e
                                  ? void 0
                                  : e.jobDescription
                            }))
                    };
                  else if (
                    null !== e &&
                    void 0 !== e &&
                    null !== (l = e.employee_Profile) &&
                    void 0 !== l &&
                    l.attached_document
                  ) {
                    var m, f;
                    n = {
                      skills:
                        null === e ||
                        void 0 === e ||
                        null === (m = e.employee_Profile) ||
                        void 0 === m
                          ? void 0
                          : m.attached_document.skills,
                      CV:
                        null === e ||
                        void 0 === e ||
                        null === (f = e.employee_Profile) ||
                        void 0 === f
                          ? void 0
                          : f.attached_document.CV
                    };
                  } else {
                    var y;
                    n =
                      null === e ||
                      void 0 === e ||
                      null === (y = e.employee_Profile) ||
                      void 0 === y
                        ? void 0
                        : y.application.CV;
                  }
                  return {
                    employer_Requirement: {
                      requiredSkills: e.employer_Requirement.requiredSkills
                    },
                    employee_Profile: {
                      profile: n,
                      application_id:
                        null === e ||
                        void 0 === e ||
                        null === (i = e.employee_Profile) ||
                        void 0 === i
                          ? void 0
                          : i.application.application_id
                    }
                  };
                });
                console.log(l);
                const n = await (0, t.s)(
                  await Promise.all(
                    l.map(async (e) => {
                      const o = await (0, t.A)(
                        i.dl,
                        [e.employee_Profile.profile],
                        null,
                        { 58: 5, 60: 5 }
                      );
                      let l;
                      return (
                        o.length > 0 && (l = (0, v.Z)(o).split(',')),
                        console.log(l),
                        {
                          id: e.employee_Profile.application_id,
                          employer_Requirement:
                            e.employer_Requirement.requiredSkills.split(','),
                          employee_Profile: l
                        }
                      );
                    })
                  )
                );
                console.log(n);
                const r = n.map((e) => {
                  const o = e.employer_Requirement.filter((o) =>
                    e.employee_Profile.some(
                      (e) => (0, c.Omf)(e.result, o.result) > 0.6
                    )
                  );
                  return (
                    console.log(o),
                    {
                      id: e.id,
                      result: (100 / e.employer_Requirement.length) * o.length
                    }
                  );
                });
                console.log(r), o(r.map((e) => JSON.stringify(e)));
              })(d, l);
              break;
            case 3:
              await (async (e, o) => {
                console.log('Start round 3');
                const l = await (0, t.s)(
                  e.map((e) => ({
                    id: e.id,
                    employer_Requirement:
                      e.employer_Requirement.keywords.split(','),
                    employee_Profile:
                      e.employee_Profile.application.keywords.split(',')
                  }))
                );
                o(
                  (
                    await Promise.all(
                      l.map(async (e) => {
                        let o = e.employee_Profile.reduce(
                          (o, l) =>
                            e.employer_Requirement.some(
                              (e) => (0, c.Omf)(l.result, e.result) > 0.7
                            )
                              ? o + 5
                              : o,
                          0
                        );
                        const l = await Promise.all(
                            e.employer_Requirement
                              .filter(
                                (o) =>
                                  !e.employee_Profile.some(
                                    (e) => (0, c.Omf)(e.result, o.result) > 0.6
                                  )
                              )
                              .map(async (e) => e.word)
                          ),
                          n = await (0, t.A)(
                            i.dl +
                              'H\xe3y vi\u1ebft l\u1ea1i t\u1eebng k\u0129 n\u0103ng \u1edf d\u1ea1ng t\u1eeb kh\xf3a, vi\u1ebft hoa ch\u1eef c\xe1i \u0111\u1ea7u v\xe0 h\xe3y d\u1ecbch c\xe1c k\u0129 n\u0103ng sang ti\u1ebfng Vi\u1ec7t.\n',
                            [l],
                            null,
                            { 58: 5, 60: 5 }
                          );
                        let r;
                        n.length > 0 && (r = (0, v.Z)(n).split(','));
                        const d =
                          l.length > 0
                            ? '\u0110\u1ec3 t\u0103ng t\u1ec9 l\u1ec7 \u0111\u1eadu b\u1ea1n c\xf3 th\u1ec3 trang b\u1ecb th\xeam k\u0129 n\u0103ng: '.concat(
                                [...new Set(r)].slice(0, 4).join(', ')
                              )
                            : 'H\u1ed3 s\u01a1 c\u1ee7a b\u1ea1n \u0111\xe3 \u0111\xe1p \u1ee9ng y\xeau c\u1ea7u c\u1ee7a tin tuy\u1ec3n d\u1ee5ng n\xe0y';
                        return { id: e.id, result: o, hints: d };
                      })
                    )
                  ).map((e) => JSON.stringify(e))
                );
              })(d, l);
          }
        },
        O = async (e) => Promise.all(e.map(async (e) => e && JSON.parse(e)));
    },
    17406: () => {},
    69851: () => {},
    38586: () => {},
    76149: () => {},
    60933: () => {},
    9193: () => {},
    41234: () => {}
  }
]);
//# sourceMappingURL=701.5ffa6686.chunk.js.map
