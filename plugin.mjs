var kt = Object.defineProperty,
  Pt = Object.defineProperties;
var It = Object.getOwnPropertyDescriptors;
var M = Object.getOwnPropertySymbols;
var Nt = Object.prototype.hasOwnProperty,
  bt = Object.prototype.propertyIsEnumerable;
var z = (u, o, c) =>
    o in u
      ? kt(u, o, { enumerable: !0, configurable: !0, writable: !0, value: c })
      : (u[o] = c),
  Z = (u, o) => {
    for (var c in o || (o = {})) Nt.call(o, c) && z(u, c, o[c]);
    if (M) for (var c of M(o)) bt.call(o, c) && z(u, c, o[c]);
    return u;
  },
  B = (u, o) => Pt(u, It(o));
var $ = (u, o, c) => (z(u, typeof o != "symbol" ? o + "" : o, c), c);
(function () {
  "use strict";
  const u = [];
  for (let e = 0; e < 256; ++e) u.push((e + 256).toString(16).slice(1));
  typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  function o(e) {
    try {
      const { pathname: t, search: n } = new URL(e);
      return `${t}${n}`;
    } catch (t) {
      return e;
    }
  }
  function c(e, t) {
    const n = o(e.attr("href")),
      r = e.text().trim();
    return { path: n, name: t ? t(r) : r };
  }
  function D(e) {
    const [t, n, r] = e.split("/");
    return new Date(`00:00 ${n}/${t}/${r}`).getTime();
  }
  function V(e) {
    e = e.trim().toLowerCase().replace(".", "");
    const t = parseFloat(e);
    if (Number.isNaN(t)) return null;
    switch (e[e.length - 1]) {
      case "k":
        return t * 1e3;
      case "m":
        return t * 1e6;
      case "g":
        return t * 1e9;
      default:
        return t;
    }
  }
  const H = /^Chương|Chapter|Chap\.?\s+/i;
  function O(e) {
    return e.replace(H, "").trim();
  }
  const J = /\.[a-z]{2,4}$/i;
  function P(e) {
    return e.replace(J, "");
  }
  function tt(e) {
    return Object.assign(self, { __DEFINE_API__: e }), e;
  }
  function et(e) {
    return Object.assign(self, { __DEFINE_PACKAGE__: e }), e;
  }
  function W(e) {
    const t = parseDom(e);
    return t("img")
      .toArray()
      .map((r) => ({ src: t(r).attr("src") }));
  }
  const I = "https://hentaivn.tv",
    X = [
      { value: "ngay", match: "danh-sach.html?sort=0", name: { vi: "Ngày" } },
      { value: "week", match: "danh-sach.html?sort=1", name: { vi: "Tuần" } },
      { value: "month", match: "danh-sach.html?sort=2", name: { vi: "Tháng" } },
      { value: "all", match: "danh-sach.html?sort=3", name: { vi: "Tất" } },
      {
        value: "hot",
        match: "danh-sach.html?sort=4",
        name: { vi: "Thịnh hành" },
      },
    ],
    nt = [
      {
        name: "Server 1",
        has: () => !0,
        parse: (e) =>
          post({
            url: "https://hentaivn.tv/ajax_load_server.php",
            data: { server_id: e.ep_id, server_type: "1" },
          }).then((t) =>
            W(t.data).map((n) =>
              AppInfo.extension ? `${n.src}#hentaivn_extra` : n.src
            )
          ),
      },
      {
        name: "Server 2",
        has: () => !0,
        parse: (e) =>
          post({
            url: "https://hentaivn.tv/ajax_load_server.php",
            data: { server_id: e.ep_id, server_type: "2" },
          }).then((t) =>
            W(t.data).map((n) =>
              AppInfo.extension ? `${n.src}#hentaivn_extra` : n.src
            )
          ),
      },
    ];
  function d(e, t, n) {
    const r = e(
      t.find((a) => e(a).find(".info").text().trim().toLowerCase() === n)
    );
    return r.find(".info").eq(0).remove(), r;
  }
  const K = "hentaivn",
    rt = "Hentai VN",
    at = "1.0.8",
    st = "Plugin Hentai VN",
    ot = "deptrai",
    it = "https://fb.com/animehay.fanpage",
    ct =
      "data:image/png;base64,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",
    N = K;
  et({
    id: K,
    name: rt,
    favicon: ct,
    version: at,
    description: st,
    author: ot,
    homepage: it,
    isNSFW: !0,
    language: "vi",
    get support() {
      return AppInfo.extension || AppInfo.mode === "capacitor";
    },
    updatedAt: 1700038814248,
  });
  const mt = /\/the-loai-(\d+)-(.+)$/i;
  function G(e) {
    e = P(e);
    const t = e.match(mt);
    if (!t || !t[1] || !t[2]) throw new Error("Invalid URL");
    return { name: "genre", params: { sourceId: N, type: `${t[2]}-${t[1]}` } };
  }
  const ht = /\d+-doc-truyen-/i,
    pt = /\d+-\d+-xem-truyen-/i;
  function b(e, t) {
    if (((e = P(e)), ht.test(e))) {
      const n = e.match(/\/(\d+)-doc-truyen-(.+)$/i);
      if (!n || !n[1] || !n[2]) throw new Error("Invalid URL");
      return {
        name: "comic",
        params: { sourceId: N, comic: `${n[2]}-${n[1]}` },
      };
    } else if (pt.test(e)) {
      const n = e.match(
        /\/(\d+)-(\d+)-xem-truyen-(.*?)(?:(?:-chap-(\d+))|(?:-(oneshot(?:-.*)?)?))?$/i
      );
      let r = "";
      if (
        !n ||
        !n[1] ||
        !n[2] ||
        !n[3] ||
        (!n[4] && !n[5] && (!t || !(r = e.replace(P(t), "").slice(1))))
      )
        throw (
          (console.log("parse-route-comic: " + e), new Error("Invalid URL"))
        );
      return {
        name: "comic chap",
        params: {
          sourceId: N,
          comic: `${n[3]}-${n[1]}`,
          chap: `${n[4] || n[5] || r}-i${n[2]}`,
        },
      };
    }
    throw new Error("Invalid URL");
  }
  function ut(e, t) {
    var R, F, U, C;
    const n = b(t.find("a").eq(0).attr("href")),
      r = t.find("img").attr("data-srcset"),
      a = t.find(".box-description"),
      i = a.find("a").eq(0).text().trim(),
      s = a.find("p").toArray(),
      h = d(e, s, "tên khác:").text().trim(),
      m = d(e, s, "thể loại:")
        .find(".tag")
        .toArray()
        .map((E) => {
          const v = e(E),
            { name: w, path: A } = c(v),
            k = G(A),
            Y = v.attr("title");
          return { route: k, name: w, description: Y };
        }),
      p = null,
      l = null,
      f = "",
      g = b(a.find("a").eq(1).attr("href"), a.find("a").eq(0).attr("href")),
      _ = [
        {
          route: g,
          name: O(a.find("a").eq(1).text()),
          id: g.params.chap,
          updated_at: null,
          views: null,
        },
      ],
      x = V(
        (F =
          (R = d(e, s, "lượt xem:").text().match(/(\d+)/)) == null
            ? void 0
            : R[1]) != null
          ? F
          : "0"
      ),
      L = null,
      q = V(
        (C =
          (U = d(e, s, "like:").text().match(/(\d+)/)) == null
            ? void 0
            : U[1]) != null
          ? C
          : "0"
      );
    return {
      route: n,
      image: r,
      name: i,
      othername: h,
      tags: m,
      status: p,
      author: l,
      description: f,
      last_chapters: _,
      views: x,
      comments: L,
      likes: q,
      label: null,
    };
  }
  function dt(e) {
    if (e.includes("404 Not Found</h1>")) throw new Error("not_found");
    const t = parseDom(e),
      n = t("h1.bar-title-list").text().replace("Danh sách truyện: ", ""),
      r = t(".block-item").eq(0).find("p").eq(0).text().trim(),
      a = parseInt(t(".pagination > li > b").text().trim()) || 1,
      i = parseInt(t(".pagination > li").eq(-3).text().trim()) || 1,
      s = t(".main .block-item .item")
        .toArray()
        .map((m) => {
          const p = t(m);
          return ut(t, p);
        });
    return {
      name: n,
      description: r,
      curPage: a,
      maxPage: i,
      items: s,
      filters: [],
    };
  }
  async function y(e, t) {
    var s;
    const n = new URL(e, I);
    n.searchParams.set("page", t.toString());
    let r;
    n.searchParams.get("sort") &&
      (r =
        (s = [
          "view=0;view0=0;view2=0;view3=0;view4=0;view5=1",
          "view=0;view0=0;view2=1;view3=0;view4=0;view5=0",
          "view=0;view0=0;view2=0;view3=1;view4=0;view5=0",
          "view=1;view0=0;view2=0;view3=0;view4=0;view5=0",
          "view=0;view0=1;view2=0;view3=0;view4=0;view5=0",
        ][parseInt(n.searchParams.get("sort") + "")]) != null
          ? s
          : "view=0;view0=0;view2=0;view3=0;view4=0;view5=1");
    const [a, i] = await Promise.all([
      get({ url: n.href, headers: r ? { "c-cookie": r } : void 0 }).then(
        ({ data: h }) => dt(h)
      ),
      post({ url: `${I}/tag_box.php`, data: { tagid: "1" } }).then(
        ({ data: h }) => {
          const m = parseDom(h);
          return [
            {
              type: "Thể loại",
              select: m("a")
                .toArray()
                .map((p) => {
                  const l = m(p),
                    f = l.text().trim(),
                    g = G(l.attr("href"));
                  return { name: f, route: g };
                }),
            },
            {
              type: "Sắp xếp",
              key: "sort",
              items: [
                { name: "Ngày", value: "0" },
                { name: "Tuần", value: "1" },
                { name: "Tháng", value: "2" },
                { name: "Tất", value: "3" },
                { name: "Thịnh hành", value: "4" },
              ],
            },
          ];
        }
      ),
    ]);
    return Object.assign(a, { filters: i });
  }
  async function lt() {
    const [e, t] = await Promise.all([
      y("danh-sach.html?sort=4", 1),
      y("chap-moi.html", 1),
    ]);
    return {
      sliders: e.items.slice(0, 7),
      hot: e.items.slice(7),
      last_update: t.items,
    };
  }
  function gt(e, t) {
    if (e.includes("404 Not Found</h1>")) throw new Error("not_found");
    const n = parseDom(e);
    return n("tr")
      .toArray()
      .map((r) => {
        const a = n(r),
          i = O(a.find("h2").text()),
          s = b(a.find("a").attr("href"), t),
          h = s.params.sourceId,
          m = D(a.find("td").last().text());
        return { name: i, route: s, id: h, updated_at: m, views: null };
      });
  }
  async function T(e, t) {
    const { data: n } = await get({
      url: `https://hentaivn.tv/list-showchapter.php?idchapshow=${e}&idlinkanime=${t}`,
    });
    return gt(n, t);
  }
  function ft(e) {
    var C, E;
    if (e.includes("404 Not Found</h1>")) throw new Error("not_found");
    const t = parseDom(e),
      n = t("h1[itemprop=name]").text().trim(),
      r = n.slice(0, n.lastIndexOf("-") >>> -1),
      a = t(".page-info > p").toArray(),
      i = d(t, a, "tên khác:").text().trim(),
      s = parseInt(t("#myInputxx").attr("value")).toString(),
      h = D(t(".page-info > span").last().find("i").text()),
      m = t("img[rel=image_src]").attr("src"),
      p = d(t, a, "tác giả:")
        .find("a")
        .toArray()
        .map((v) => {
          const { name: w, path: A } = c(t(v)),
            k = {
              name: "author",
              params: { sourceId: N, type: P(A.slice(A.indexOf("=") + 1)) },
            };
          return { name: w, route: k };
        }),
      l = d(t, a, "tình trạng:").text(),
      f = d(t, a, "thể loại:")
        .find("a")
        .toArray()
        .map((v) => {
          var j;
          const w = t(v),
            { name: A, path: k } = c(w),
            Y = G(k),
            Ct = (j = w.attr("title")) != null ? j : void 0;
          return { name: A, route: Y, description: Ct };
        }),
      g = parseInt(d(t, a, "lượt xem:").text().replace(/\./g, "")),
      _ = { cur: 0, max: 0, count: 0 },
      x = null,
      L = parseInt(t(".but_like").text().replace(/\./g, "")),
      q =
        (E =
          (C = d(t, a, "nội dung:").next().html()) == null
            ? void 0
            : C.trim()) != null
          ? E
          : "";
    return {
      name: r,
      othername: i,
      manga_id: s,
      updated_at: h,
      image: m,
      author: p,
      status: l,
      genres: f,
      views: g,
      rate: _,
      follows: x,
      likes: L,
      description: q,
      chapters: [],
      comments: [],
      comments_count: 0,
      comments_pages: 0,
    };
  }
  async function vt(e) {
    var a;
    const t = e.match(/(\d+)$/);
    if (!t) throw new Error("not_found");
    e =
      t[1] +
      "-doc-truyen-" +
      e.slice(0, (((a = t.index) != null ? a : -1) >>> 0) - 1);
    const [n, r] = await Promise.all([
      get({ url: `${I}/${e}.html` }).then(({ data: i }) => ft(i)),
      T(t[1], e.slice(t[1].length + 1)),
    ]);
    return Object.assign(n, { chapters: r }), n;
  }
  function wt(e) {
    if (e.includes("404 Not Found</h1>")) throw new Error("not_found");
    const t = parseDom(e),
      { name: n, path: r } = c(t(".bar-title-episode a")),
      a = o(t('meta[property="og:url"]').attr("content")).match(
        /\/(\d+)-(\d+)-.*/
      );
    if (!(a != null && a[1]) || !(a != null && a[2]))
      throw new Error("not_found");
    const [i, s] = [parseInt(a[1]).toString(), parseInt(a[2]).toString()],
      h = new Date(e.match(/"dateModified": "([^\s]+)"/)[1]).getTime(),
      m = t('meta[itemprop="image"]').attr("content"),
      p = b(r),
      l = t("#image img")
        .toArray()
        .map((x) => ({ src: t(x).attr("data-src") }));
    return {
      name: n,
      manga_id: i,
      ep_id: s,
      updated_at: h,
      image: m,
      path_manga: p,
      pages: l,
      comments: [],
      comments_count: 0,
      comments_pages: 0,
    };
  }
  async function Q(e, t, n) {
    var m;
    const r = e.match(/(\d+)$/);
    if (!r) throw new Error("not_found");
    const [a, i] = [
      r[1],
      e.slice(0, (((m = r.index) != null ? m : -1) >>> 0) - 1),
    ];
    if (n) {
      const { data: p } = await get({
        url: `https://hentaivn.tv/${a}-${t.slice(
          (t.indexOf("-i") >>> 0) + 2
        )}-xem-truyen-${i}-chap-1.html`,
      });
      return wt(p);
    }
    const [s, h] = await Promise.all([Q(e, t, !0), T(r[1], i)]);
    return B(Z({}, s), { chapters: h });
  }
  function S(e, t) {
    return y(`tim-kiem-truyen.html?key=${e}`, t);
  }
  function At(e, t) {
    return S(e, t).then((n) =>
      n.items.map((r) => {
        const {
          route: a,
          name: i,
          image: s,
          last_chapters: h,
          othername: m,
          tags: p,
        } = r;
        return {
          route: a,
          name: i,
          image: s,
          last_chapter: h[0].name,
          othername: m,
          tags: p,
        };
      })
    );
  }
  class yt {
    constructor() {
      $(this, "Rankings", X);
      $(this, "Servers", nt);
    }
    async setup() {
      AppInfo.extension && (await setReferrers({ "#hentaivn": I }));
    }
    async index() {
      return lt();
    }
    async getComic(t) {
      return vt(t);
    }
    async getComicChapter(t, n, r) {
      return Q(t, n, r);
    }
    async getComicComments() {
      return { comments: [], comments_count: 0, comments_pages: 0 };
    }
    async getListChapters(t, n) {
      return T(t, n);
    }
    searchQuickly(t, n) {
      return At(t, n);
    }
    async search(t, n) {
      return S(t, n);
    }
    async getRanking(t, n) {
      const r = X.find((a) => a.value === t);
      if (!r) throw new Error("not_found");
      return y(r.match, n);
    }
    async getCategory(t, n) {
      const r = t.match(/-(\d+)$/);
      if (t && !r) throw new Error("not_found");
      return y(
        t ? `the-loai-${t.slice(0, r.index)}-${r[1]}.html` : "danh-sach.html",
        n
      );
    }
  }
  tt(yt);
})();
