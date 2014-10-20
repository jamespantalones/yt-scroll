(function(e, t, r) {
    "use strict";
    function n(e) {
        var r = [];
        o(r, t.noop).chars(e);
        return r.join("");
    }
    function a(e) {
        var t = {};
        e = e.split(",");
        var r;
        for (r = 0; r < e.length; r++) t[e[r]] = !0;
        return t;
    }
    function s(e, r) {
        function n(e, n, s, c) {
            n = t.lowercase(n);
            if (z[n]) for (;o.last() && C[o.last()]; ) a("", o.last());
            y[n] && o.last() == n && a("", n);
            (c = x[n] || !!c) || o.push(n);
            var l = {};
            s.replace(p, function(e, t, r, n, a) {
                l[t] = i(r || n || a || "");
            });
            r.start && r.start(n, l, c);
        }
        function a(e, n) {
            var a = 0, s;
            if (n = t.lowercase(n)) for (a = o.length - 1; 0 <= a && o[a] != n; a--) ;
            if (0 <= a) {
                for (s = o.length - 1; s >= a; s--) r.end && r.end(o[s]);
                o.length = a;
            }
        }
        "string" !== typeof e && (e = null === e || "undefined" === typeof e ? "" : "" + e);
        var s, c, o = [], v = e, w;
        for (o.last = function() {
            return o[o.length - 1];
        }; e; ) {
            w = "";
            c = !0;
            if (o.last() && k[o.last()]) e = e.replace(RegExp("(.*)<\\s*\\/\\s*" + o.last() + "[^>]*>", "i"), function(e, t) {
                t = t.replace(g, "$1").replace(b, "$1");
                r.chars && r.chars(i(t));
                return "";
            }), a("", o.last()); else {
                if (0 === e.indexOf("<!--")) s = e.indexOf("--", 4), 0 <= s && e.lastIndexOf("-->", s) === s && (r.comment && r.comment(e.substring(4, s)), 
                e = e.substring(s + 3), c = !1); else if (m.test(e)) {
                    if (s = e.match(m)) e = e.replace(s[0], ""), c = !1;
                } else if (d.test(e)) {
                    if (s = e.match(f)) e = e.substring(s[0].length), s[0].replace(f, a), c = !1;
                } else h.test(e) && ((s = e.match(u)) ? (s[4] && (e = e.substring(s[0].length), 
                s[0].replace(u, n)), c = !1) : (w += "<", e = e.substring(1)));
                c && (s = e.indexOf("<"), w += 0 > s ? e : e.substring(0, s), e = 0 > s ? "" : e.substring(s), 
                r.chars && r.chars(i(w)));
            }
            if (e == v) throw l("badparse", e);
            v = e;
        }
        a();
    }
    function i(e) {
        if (!e) return "";
        var t = O.exec(e);
        e = t[1];
        var r = t[3];
        if (t = t[2]) F.innerHTML = t.replace(/</g, "&lt;"), t = "textContent" in F ? F.textContent : F.innerText;
        return e + t + r;
    }
    function c(e) {
        return e.replace(/&/g, "&amp;").replace(v, function(e) {
            var t = e.charCodeAt(0);
            e = e.charCodeAt(1);
            return "&#" + (1024 * (t - 55296) + (e - 56320) + 65536) + ";";
        }).replace(w, function(e) {
            return "&#" + e.charCodeAt(0) + ";";
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function o(e, r) {
        var n = !1, a = t.bind(e, e.push);
        return {
            start: function(e, s, i) {
                e = t.lowercase(e);
                !n && k[e] && (n = e);
                n || !0 !== A[e] || (a("<"), a(e), t.forEach(s, function(n, s) {
                    var i = t.lowercase(s), o = "img" === e && "src" === i || "background" === i;
                    !0 !== E[i] || !0 === D[i] && !r(n, o) || (a(" "), a(s), a('="'), a(c(n)), a('"'));
                }), a(i ? "/>" : ">"));
            },
            end: function(e) {
                e = t.lowercase(e);
                n || !0 !== A[e] || (a("</"), a(e), a(">"));
                e == n && (n = !1);
            },
            chars: function(e) {
                n || a(c(e));
            }
        };
    }
    var l = t.$$minErr("$sanitize"), u = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/, f = /^<\/\s*([\w:-]+)[^>]*>/, p = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, h = /^</, d = /^<\//, g = /\x3c!--(.*?)--\x3e/g, m = /<!DOCTYPE([^>]*?)>/i, b = /<!\[CDATA\[(.*?)]]\x3e/g, v = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, w = /([^\#-~| |!])/g, x = a("area,br,col,hr,img,wbr");
    e = a("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");
    r = a("rp,rt");
    var y = t.extend({}, r, e), z = t.extend({}, e, a("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")), C = t.extend({}, r, a("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")), k = a("script,style"), A = t.extend({}, x, z, C, y), D = a("background,cite,href,longdesc,src,usemap"), E = t.extend({}, D, a("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")), F = document.createElement("pre"), O = /^(\s*)([\s\S]*?)(\s*)$/;
    t.module("ngSanitize", []).provider("$sanitize", function() {
        this.$get = [ "$$sanitizeUri", function(e) {
            return function(t) {
                var r = [];
                s(t, o(r, function(t, r) {
                    return !/^unsafe/.test(e(t, r));
                }));
                return r.join("");
            };
        } ];
    });
    t.module("ngSanitize").filter("linky", [ "$sanitize", function(e) {
        var r = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/, a = /^mailto:/;
        return function(s, i) {
            function c(e) {
                e && f.push(n(e));
            }
            function o(e, r) {
                f.push("<a ");
                t.isDefined(i) && (f.push('target="'), f.push(i), f.push('" '));
                f.push('href="');
                f.push(e);
                f.push('">');
                c(r);
                f.push("</a>");
            }
            if (!s) return s;
            for (var l, u = s, f = [], p, h; l = u.match(r); ) p = l[0], l[2] == l[3] && (p = "mailto:" + p), 
            h = l.index, c(u.substr(0, h)), o(p, l[0].replace(a, "")), u = u.substring(h + l[0].length);
            c(u);
            return e(f.join(""));
        };
    } ]);
})(window, window.angular);