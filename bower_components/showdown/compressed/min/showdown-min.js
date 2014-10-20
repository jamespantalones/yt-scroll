var Showdown = {
    extensions: {}
}, forEach = Showdown.forEach = function(e, n) {
    if (typeof e.forEach == "function") e.forEach(n); else {
        var r, t = e.length;
        for (r = 0; r < t; r++) n(e[r], r, e);
    }
}, stdExtName = function(e) {
    return e.replace(/[_-]||\s/g, "").toLowerCase();
};

Showdown.converter = function(e) {
    var n, r, t, a = 0, c = [], o = [];
    if (typeof module != "undefind" && typeof exports != "undefined" && typeof require != "undefind") {
        var l = require("fs");
        if (l) {
            var u = l.readdirSync((__dirname || ".") + "/extensions").filter(function(e) {
                return ~e.indexOf(".js");
            }).map(function(e) {
                return e.replace(/\.js$/, "");
            });
            Showdown.forEach(u, function(e) {
                var n = stdExtName(e);
                Showdown.extensions[n] = require("./extensions/" + e);
            });
        }
    }
    e && e.extensions && Showdown.forEach(e.extensions, function(e) {
        typeof e == "string" && (e = Showdown.extensions[stdExtName(e)]);
        if (typeof e != "function") throw "Extension '" + e + "' could not be loaded.  It was either not found or is not a valid extension.";
        Showdown.forEach(e(this), function(e) {
            e.type ? e.type === "language" || e.type === "lang" ? c.push(e) : (e.type === "output" || e.type === "html") && o.push(e) : o.push(e);
        });
    }), this.makeHtml = function(e) {
        return n = {}, r = {}, t = [], e = e.replace(/~/g, "~T"), e = e.replace(/\$/g, "~D"), 
        e = e.replace(/\r\n/g, "\n"), e = e.replace(/\r/g, "\n"), e = "\n\n" + e + "\n\n", 
        e = D(e), e = e.replace(/^[ \t]+$/gm, ""), Showdown.forEach(c, function(n) {
            e = i(n, e);
        }), e = _(e), e = f(e), e = p(e), e = d(e), e = N(e), e = e.replace(/~D/g, "$$"), 
        e = e.replace(/~T/g, "~"), Showdown.forEach(o, function(n) {
            e = i(n, e);
        }), e;
    };
    var i = function(e, n) {
        if (e.regex) {
            var r = new RegExp(e.regex, "g");
            return n.replace(r, e.replace);
        }
        if (e.filter) return e.filter(n);
    }, p = function(e) {
        return e += "~0", e = e.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm, function(e, t, a, c, o) {
            return t = t.toLowerCase(), n[t] = z(a), c ? c + o : (o && (r[t] = o.replace(/"/g, "&quot;")), 
            "");
        }), e = e.replace(/~0/, ""), e;
    }, f = function(e) {
        e = e.replace(/\n/g, "\n\n");
        var n = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside", r = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside";
        return e = e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, g), 
        e = e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm, g), 
        e = e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, g), e = e.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g, g), 
        e = e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, g), e = e.replace(/\n\n/g, "\n"), 
        e;
    }, g = function(e, n) {
        var r = n;
        return r = r.replace(/\n\n/g, "\n"), r = r.replace(/^\n/, ""), r = r.replace(/\n+$/g, ""), 
        r = "\n\n~K" + (t.push(r) - 1) + "K\n\n", r;
    }, d = function(e) {
        e = x(e);
        var n = q("<hr />");
        return e = e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, n), e = e.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, n), 
        e = e.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm, n), e = y(e), e = b(e), e = A(e), 
        e = f(e), e = L(e), e;
    }, s = function(e) {
        return e = C(e), e = h(e), e = j(e), e = w(e), e = m(e), e = B(e), e = z(e), e = k(e), 
        e = e.replace(/  +\n/g, " <br />\n"), e;
    }, h = function(e) {
        var n = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;
        return e = e.replace(n, function(e) {
            var n = e.replace(/(.)<\/?code>(?=.)/g, "$1`");
            return n = I(n, "\\`*_"), n;
        }), e;
    }, m = function(e) {
        return e = e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, v), 
        e = e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, v), 
        e = e.replace(/(\[([^\[\]]+)\])()()()()()/g, v), e;
    }, v = function(e, t, a, c, o, l, u, i) {
        i == undefined && (i = "");
        var p = t, f = a, g = c.toLowerCase(), d = o, s = i;
        if (d == "") {
            g == "" && (g = f.toLowerCase().replace(/ ?\n/g, " ")), d = "#" + g;
            if (n[g] != undefined) d = n[g], r[g] != undefined && (s = r[g]); else {
                if (!(p.search(/\(\s*\)$/m) > -1)) return p;
                d = "";
            }
        }
        d = I(d, "*_");
        var h = '<a href="' + d + '"';
        return s != "" && (s = s.replace(/"/g, "&quot;"), s = I(s, "*_"), h += ' title="' + s + '"'), 
        h += ">" + f + "</a>", h;
    }, w = function(e) {
        return e = e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, S), e = e.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, S), 
        e;
    }, S = function(e, t, a, c, o, l, u, i) {
        var p = t, f = a, g = c.toLowerCase(), d = o, s = i;
        s || (s = "");
        if (d == "") {
            g == "" && (g = f.toLowerCase().replace(/ ?\n/g, " ")), d = "#" + g;
            if (n[g] == undefined) return p;
            d = n[g], r[g] != undefined && (s = r[g]);
        }
        f = f.replace(/"/g, "&quot;"), d = I(d, "*_");
        var h = '<img src="' + d + '" alt="' + f + '"';
        return s = s.replace(/"/g, "&quot;"), s = I(s, "*_"), h += ' title="' + s + '"', 
        h += " />", h;
    }, x = function(e) {
        function n(e) {
            return e.replace(/[^\w]/g, "").toLowerCase();
        }
        return e = e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function(e, r) {
            return q('<h1 id="' + n(r) + '">' + s(r) + "</h1>");
        }), e = e.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function(e, r) {
            return q('<h2 id="' + n(r) + '">' + s(r) + "</h2>");
        }), e = e.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function(e, r, t) {
            var a = r.length;
            return q("<h" + a + ' id="' + n(t) + '">' + s(t) + "</h" + a + ">");
        }), e;
    }, E, y = function(e) {
        e += "~0";
        var n = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
        return a ? e = e.replace(n, function(e, n, r) {
            var t = n, a = r.search(/[*+-]/g) > -1 ? "ul" : "ol";
            t = t.replace(/\n{2,}/g, "\n\n\n");
            var c = E(t);
            return c = c.replace(/\s+$/, ""), c = "<" + a + ">" + c + "</" + a + ">\n", c;
        }) : (n = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g, 
        e = e.replace(n, function(e, n, r, t) {
            var a = n, c = r, o = t.search(/[*+-]/g) > -1 ? "ul" : "ol", c = c.replace(/\n{2,}/g, "\n\n\n"), l = E(c);
            return l = a + "<" + o + ">\n" + l + "</" + o + ">\n", l;
        })), e = e.replace(/~0/, ""), e;
    };
    E = function(e) {
        return a++, e = e.replace(/\n{2,}$/, "\n"), e += "~0", e = e.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm, function(e, n, r, t, a) {
            var c = a, o = n, l = r;
            return o || c.search(/\n{2,}/) > -1 ? c = d(R(c)) : (c = y(R(c)), c = c.replace(/\n$/, ""), 
            c = s(c)), "<li>" + c + "</li>\n";
        }), e = e.replace(/~0/g, ""), a--, e;
    };
    var b = function(e) {
        return e += "~0", e = e.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function(e, n, r) {
            var t = n, a = r;
            return t = K(R(t)), t = D(t), t = t.replace(/^\n+/g, ""), t = t.replace(/\n+$/g, ""), 
            t = "<pre><code>" + t + "\n</code></pre>", q(t) + a;
        }), e = e.replace(/~0/, ""), e;
    }, _ = function(e) {
        return e += "~0", e = e.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function(e, n, r) {
            var t = n, a = r;
            return a = K(a), a = D(a), a = a.replace(/^\n+/g, ""), a = a.replace(/\n+$/g, ""), 
            a = "<pre><code" + (t ? ' class="' + t + '"' : "") + ">" + a + "\n</code></pre>", 
            q(a);
        }), e = e.replace(/~0/, ""), e;
    }, q = function(e) {
        return e = e.replace(/(^\n+|\n+$)/g, ""), "\n\n~K" + (t.push(e) - 1) + "K\n\n";
    }, C = function(e) {
        return e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(e, n, r, t, a) {
            var c = t;
            return c = c.replace(/^([ \t]*)/g, ""), c = c.replace(/[ \t]*$/g, ""), c = K(c), 
            n + "<code>" + c + "</code>";
        }), e;
    }, K = function(e) {
        return e = e.replace(/&/g, "&amp;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), 
        e = I(e, "*_{}[]\\", !1), e;
    }, k = function(e) {
        return e = e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, "<strong>$2</strong>"), 
        e = e.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>"), e;
    }, A = function(e) {
        return e = e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, function(e, n) {
            var r = n;
            return r = r.replace(/^[ \t]*>[ \t]?/gm, "~0"), r = r.replace(/~0/g, ""), r = r.replace(/^[ \t]+$/gm, ""), 
            r = d(r), r = r.replace(/(^|\n)/g, "$1  "), r = r.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(e, n) {
                var r = n;
                return r = r.replace(/^  /gm, "~0"), r = r.replace(/~0/g, ""), r;
            }), q("<blockquote>\n" + r + "\n</blockquote>");
        }), e;
    }, L = function(e) {
        e = e.replace(/^\n+/g, ""), e = e.replace(/\n+$/g, "");
        var n = e.split(/\n{2,}/g), r = [], a = n.length;
        for (var c = 0; c < a; c++) {
            var o = n[c];
            o.search(/~K(\d+)K/g) >= 0 ? r.push(o) : o.search(/\S/) >= 0 && (o = s(o), o = o.replace(/^([ \t]*)/g, "<p>"), 
            o += "</p>", r.push(o));
        }
        a = r.length;
        for (var c = 0; c < a; c++) while (r[c].search(/~K(\d+)K/) >= 0) {
            var l = t[RegExp.$1];
            l = l.replace(/\$/g, "$$$$"), r[c] = r[c].replace(/~K\d+K/, l);
        }
        return r.join("\n\n");
    }, z = function(e) {
        return e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), e = e.replace(/<(?![a-z\/?\$!])/gi, "&lt;"), 
        e;
    }, j = function(e) {
        return e = e.replace(/\\(\\)/g, T), e = e.replace(/\\([`*_{}\[\]()>#+-.!])/g, T), 
        e;
    }, B = function(e) {
        return e = e.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi, '<a href="$1">$1</a>'), 
        e = e.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, function(e, n) {
            return M(N(n));
        }), e;
    }, M = function(e) {
        var n = [ function(e) {
            return "&#" + e.charCodeAt(0) + ";";
        }, function(e) {
            return "&#x" + e.charCodeAt(0).toString(16) + ";";
        }, function(e) {
            return e;
        } ];
        return e = "mailto:" + e, e = e.replace(/./g, function(e) {
            if (e == "@") e = n[Math.floor(Math.random() * 2)](e); else if (e != ":") {
                var r = Math.random();
                e = r > .9 ? n[2](e) : r > .45 ? n[1](e) : n[0](e);
            }
            return e;
        }), e = '<a href="' + e + '">' + e + "</a>", e = e.replace(/">.+:/g, '">'), e;
    }, N = function(e) {
        return e = e.replace(/~E(\d+)E/g, function(e, n) {
            var r = parseInt(n);
            return String.fromCharCode(r);
        }), e;
    }, R = function(e) {
        return e = e.replace(/^(\t|[ ]{1,4})/gm, "~0"), e = e.replace(/~0/g, ""), e;
    }, D = function(e) {
        return e = e.replace(/\t(?=\t)/g, "    "), e = e.replace(/\t/g, "~A~B"), e = e.replace(/~B(.+?)~A/g, function(e, n, r) {
            var t = n, a = 4 - t.length % 4;
            for (var c = 0; c < a; c++) t += " ";
            return t;
        }), e = e.replace(/~A/g, "    "), e = e.replace(/~B/g, ""), e;
    }, I = function(e, n, r) {
        var t = "([" + n.replace(/([\[\]\\])/g, "\\$1") + "])";
        r && (t = "\\\\" + t);
        var a = new RegExp(t, "g");
        return e = e.replace(a, T), e;
    }, T = function(e, n) {
        var r = n.charCodeAt(0);
        return "~E" + r + "E";
    };
}, typeof module != "undefined" && (module.exports = Showdown), typeof define == "function" && define.amd && define("showdown", function() {
    return Showdown;
});