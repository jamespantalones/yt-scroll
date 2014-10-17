(function($) {
    "use strict";
    function t(t) {
        var e = t.data("width"), a = t.data("height"), i = t.data("ratio"), l = t.data("youtube-id"), o = t.data("thumbnail"), d = [ "16", "9" ], s = 0, n = t.data("parameters") || "";
        if (typeof e === "undefined" || typeof a === "undefined") {
            a = 0;
            e = "100%";
            d = i.split(":")[1] / i.split(":")[0] * 100;
            s = d + "%";
        }
        t.css({
            position: "relative",
            height: a,
            width: e,
            "padding-top": s,
            background: "url(" + o + ") center center no-repeat",
            cursor: "pointer",
            "background-size": "cover"
        }).html('<p id="lazyYT-title-' + l + '" class="lazyYT-title"></p><div class="lazyYT-button"></div>').addClass("lazyYT-image-loaded");
        $.getJSON("https://gdata.youtube.com/feeds/api/videos/" + l + "?v=2&alt=json", function(t) {
            $("#lazyYT-title-" + l).text(t.entry.title.$t);
        });
        t.on("click", function(i) {
            i.preventDefault();
            if (!t.hasClass("lazyYT-video-loaded") && t.hasClass("lazyYT-image-loaded")) {
                t.html('<iframe width="' + e + '" height="' + a + '" src="//www.youtube.com/embed/' + l + "?autoplay=1&" + n + '" style="position:absolute; top:0; left:0; width:100%; height:100%;" frameborder="0" allowfullscreen></iframe>').removeClass("lazyYT-image-loaded").addClass("lazyYT-video-loaded");
            }
        });
    }
    $.fn.lazyYT = function() {
        return this.each(function() {
            var e = $(this).css("cursor", "pointer");
            t(e);
        });
    };
})(jQuery);