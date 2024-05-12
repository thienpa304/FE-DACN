'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [388],
  {
    38388: (e, o, n) => {
      n.r(o), n.d(o, { default: () => u });
      var s = n(54567),
        t = n(86971),
        a = n(64188),
        c = n(59162),
        l = n(54367),
        i = n(51318),
        r = n(70579);
      const u = function () {
        var e;
        const { state: o, pathname: n } = (0, t.zy)(),
          { id: u } = (0, t.g)(),
          d =
            null === (e = c.AJ.find((e) => (0, l.O)(e.name) === u)) ||
            void 0 === e
              ? void 0
              : e.name;
        console.log(d);
        const [f, p] = (0, i.ok)(),
          g = f.get('search');
        return (
          console.log(g),
          (0, r.jsx)(a.A, {
            pageTitle: 'Vi\u1ec7c l\xe0m: '.concat(g || d),
            profession: d,
            jobTitle: g,
            queryJobs: s.A
          })
        );
      };
    }
  }
]);
//# sourceMappingURL=388.cc79c69d.chunk.js.map
