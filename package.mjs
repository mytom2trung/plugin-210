var __DEFINE_PACKAGE__ = (function (t) {
  "use strict";
  const n = "hentaivn",
    i = "Hentai VN",
    e = "1.0.8",
    r = "Plugin Hentai VN",
    s = "deptrai",
    o = "https://fb.com/animehay.fanpage",
    a = [];
  for (let A = 0; A < 256; ++A) a.push((A + 256).toString(16).slice(1));
  typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  function c(A) {
    return Object.assign(self, { __DEFINE_PACKAGE__: A }), A;
  }
  const p =
      "data:image/png;base64,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",
    P = n,
    N = c({
      id: n,
      name: i,
      favicon: p,
      version: e,
      description: r,
      author: s,
      homepage: o,
      isNSFW: !0,
      language: "vi",
      get support() {
        return AppInfo.extension || AppInfo.mode === "capacitor";
      },
      updatedAt: 1700038814071,
    });
  return (
    (t.meta = N),
    (t.sourceId = P),
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
    t
  );
})({});
