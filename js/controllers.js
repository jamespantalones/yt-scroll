(function() {
    "use strict";
    var e;
    e = angular.module("ytControllers", []);
    e.controller("IndexCtrl", [ "$scope", "$http", "contentfulClient", function(e, t, n) {
        e.features = "";
        return n.entries({
            content_type: "tGyjv9K8h2kiGAW6qe2WI",
            include: 1
        }).then(function(t) {
            console.log(t);
            return e.features = t;
        });
    } ]);
    e.controller("DetailCtrl", [ "$scope", "$routeParams", "$http", "$location", "contentfulClient", "$sce", "heightService", function(e, t, n, r, o, l, i) {
        var s;
        s = new Showdown.converter();
        e.player = {};
        e.playerVars = {
            controls: 0,
            autoplay: 0,
            modestbranding: 1,
            showinfo: 0,
            hd: 1
        };
        e.$on("youtube.player.ready", function(t, n) {
            return e.player = n;
        });
        return o.entries({
            "sys.id": t.featureId,
            include: 10
        }).then(function(t) {
            var n, r, o, u, a, d;
            e.feature = t[0];
            e.fields = e.feature.fields;
            console.log(e.fields);
            d = e.fields.youTubeListItems;
            for (u = 0, a = d.length; u < a; u++) {
                n = d[u];
                r = n.fields.bodyText;
                r = s.makeHtml(r);
            }
            e.trust = function(e) {
                return l.trustAsHtml(e);
            };
            e.fields.introText = s.makeHtml(e.fields.introText);
            e.items = e.fields.youTubeListItems;
            o = e.fields.heroImage.fields.file.url;
            e.video = e.items[0].fields.youTubeVideoId;
            e.coverBg = {
                background: "url(http:" + o + ")",
                backgroundSize: "51%"
            };
            return setTimeout(i.sendHeight, 2e3);
        });
    } ]);
}).call(this);