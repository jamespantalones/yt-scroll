(function(e, t, n) {
    "use strict";
    t.mock = {};
    t.mock.$BrowserProvider = function() {
        this.$get = function() {
            return new t.mock.$Browser();
        };
    };
    t.mock.$Browser = function() {
        var e = this;
        this.isMock = true;
        e.$$url = "http://server/";
        e.$$lastUrl = e.$$url;
        e.pollFns = [];
        e.$$completeOutstandingRequest = t.noop;
        e.$$incOutstandingRequestCount = t.noop;
        e.onUrlChange = function(t) {
            e.pollFns.push(function() {
                if (e.$$lastUrl != e.$$url) {
                    e.$$lastUrl = e.$$url;
                    t(e.$$url);
                }
            });
            return t;
        };
        e.$$checkUrlChange = t.noop;
        e.cookieHash = {};
        e.lastCookieHash = {};
        e.deferredFns = [];
        e.deferredNextId = 0;
        e.defer = function(t, n) {
            n = n || 0;
            e.deferredFns.push({
                time: e.defer.now + n,
                fn: t,
                id: e.deferredNextId
            });
            e.deferredFns.sort(function(e, t) {
                return e.time - t.time;
            });
            return e.deferredNextId++;
        };
        e.defer.now = 0;
        e.defer.cancel = function(r) {
            var o;
            t.forEach(e.deferredFns, function(e, t) {
                if (e.id === r) o = t;
            });
            if (o !== n) {
                e.deferredFns.splice(o, 1);
                return true;
            }
            return false;
        };
        e.defer.flush = function(n) {
            if (t.isDefined(n)) {
                e.defer.now += n;
            } else {
                if (e.deferredFns.length) {
                    e.defer.now = e.deferredFns[e.deferredFns.length - 1].time;
                } else {
                    throw new Error("No deferred tasks to be flushed");
                }
            }
            while (e.deferredFns.length && e.deferredFns[0].time <= e.defer.now) {
                e.deferredFns.shift().fn();
            }
        };
        e.$$baseHref = "";
        e.baseHref = function() {
            return this.$$baseHref;
        };
    };
    t.mock.$Browser.prototype = {
        poll: function g() {
            t.forEach(this.pollFns, function(e) {
                e();
            });
        },
        addPollFn: function(e) {
            this.pollFns.push(e);
            return e;
        },
        url: function(e, t) {
            if (e) {
                this.$$url = e;
                return this;
            }
            return this.$$url;
        },
        cookies: function(e, n) {
            if (e) {
                if (t.isUndefined(n)) {
                    delete this.cookieHash[e];
                } else {
                    if (t.isString(n) && n.length <= 4096) {
                        this.cookieHash[e] = n;
                    }
                }
            } else {
                if (!t.equals(this.cookieHash, this.lastCookieHash)) {
                    this.lastCookieHash = t.copy(this.cookieHash);
                    this.cookieHash = t.copy(this.cookieHash);
                }
                return this.cookieHash;
            }
        },
        notifyWhenNoOutstandingRequests: function(e) {
            e();
        }
    };
    t.mock.$ExceptionHandlerProvider = function() {
        var e;
        this.mode = function(t) {
            switch (t) {
              case "rethrow":
                e = function(e) {
                    throw e;
                };
                break;

              case "log":
                var n = [];
                e = function(e) {
                    if (arguments.length == 1) {
                        n.push(e);
                    } else {
                        n.push([].slice.call(arguments, 0));
                    }
                };
                e.errors = n;
                break;

              default:
                throw new Error("Unknown mode '" + t + "', only 'log'/'rethrow' modes are allowed!");
            }
        };
        this.$get = function() {
            return e;
        };
        this.mode("rethrow");
    };
    t.mock.$LogProvider = function() {
        var e = true;
        function n(e, t, n) {
            return e.concat(Array.prototype.slice.call(t, n));
        }
        this.debugEnabled = function(n) {
            if (t.isDefined(n)) {
                e = n;
                return this;
            } else {
                return e;
            }
        };
        this.$get = function() {
            var r = {
                log: function() {
                    r.log.logs.push(n([], arguments, 0));
                },
                warn: function() {
                    r.warn.logs.push(n([], arguments, 0));
                },
                info: function() {
                    r.info.logs.push(n([], arguments, 0));
                },
                error: function() {
                    r.error.logs.push(n([], arguments, 0));
                },
                debug: function() {
                    if (e) {
                        r.debug.logs.push(n([], arguments, 0));
                    }
                }
            };
            r.reset = function() {
                r.log.logs = [];
                r.info.logs = [];
                r.warn.logs = [];
                r.error.logs = [];
                r.debug.logs = [];
            };
            r.assertEmpty = function() {
                var e = [];
                t.forEach([ "error", "warn", "info", "log", "debug" ], function(n) {
                    t.forEach(r[n].logs, function(r) {
                        t.forEach(r, function(t) {
                            e.push("MOCK $log (" + n + "): " + String(t) + "\n" + (t.stack || ""));
                        });
                    });
                });
                if (e.length) {
                    e.unshift("Expected $log to be empty! Either a message was logged unexpectedly, or " + "an expected log message was not checked and removed:");
                    e.push("");
                    throw new Error(e.join("\n---------\n"));
                }
            };
            r.reset();
            return r;
        };
    };
    t.mock.$IntervalProvider = function() {
        this.$get = [ "$rootScope", "$q", function(e, r) {
            var o = [], i = 0, s = 0;
            var a = function(a, u, c, f) {
                var l = r.defer(), d = l.promise, h = 0, g = t.isDefined(f) && !f;
                c = t.isDefined(c) ? c : 0;
                d.then(null, null, a);
                d.$$intervalId = i;
                function p() {
                    l.notify(h++);
                    if (c > 0 && h >= c) {
                        var r;
                        l.resolve(h);
                        t.forEach(o, function(e, t) {
                            if (e.id === d.$$intervalId) r = t;
                        });
                        if (r !== n) {
                            o.splice(r, 1);
                        }
                    }
                    if (!g) e.$apply();
                }
                o.push({
                    nextTime: s + u,
                    delay: u,
                    fn: p,
                    id: i,
                    deferred: l
                });
                o.sort(function(e, t) {
                    return e.nextTime - t.nextTime;
                });
                i++;
                return d;
            };
            a.cancel = function(e) {
                if (!e) return false;
                var r;
                t.forEach(o, function(t, n) {
                    if (t.id === e.$$intervalId) r = n;
                });
                if (r !== n) {
                    o[r].deferred.reject("canceled");
                    o.splice(r, 1);
                    return true;
                }
                return false;
            };
            a.flush = function(e) {
                s += e;
                while (o.length && o[0].nextTime <= s) {
                    var t = o[0];
                    t.fn();
                    t.nextTime += t.delay;
                    o.sort(function(e, t) {
                        return e.nextTime - t.nextTime;
                    });
                }
                return e;
            };
            return a;
        } ];
    };
    var r = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?:\:?(\d\d)(?:\:?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;
    function o(e) {
        var t;
        if (t = e.match(r)) {
            var n = new Date(0), o = 0, s = 0;
            if (t[9]) {
                o = i(t[9] + t[10]);
                s = i(t[9] + t[11]);
            }
            n.setUTCFullYear(i(t[1]), i(t[2]) - 1, i(t[3]));
            n.setUTCHours(i(t[4] || 0) - o, i(t[5] || 0) - s, i(t[6] || 0), i(t[7] || 0));
            return n;
        }
        return e;
    }
    function i(e) {
        return parseInt(e, 10);
    }
    function s(e, t, n) {
        var r = "";
        if (e < 0) {
            r = "-";
            e = -e;
        }
        e = "" + e;
        while (e.length < t) e = "0" + e;
        if (n) e = e.substr(e.length - t);
        return r + e;
    }
    t.mock.TzDate = function(e, n) {
        var r = new Date(0);
        if (t.isString(n)) {
            var i = n;
            r.origDate = o(n);
            n = r.origDate.getTime();
            if (isNaN(n)) throw {
                name: "Illegal Argument",
                message: "Arg '" + i + "' passed into TzDate constructor is not a valid date string"
            };
        } else {
            r.origDate = new Date(n);
        }
        var a = new Date(n).getTimezoneOffset();
        r.offsetDiff = a * 60 * 1e3 - e * 1e3 * 60 * 60;
        r.date = new Date(n + r.offsetDiff);
        r.getTime = function() {
            return r.date.getTime() - r.offsetDiff;
        };
        r.toLocaleDateString = function() {
            return r.date.toLocaleDateString();
        };
        r.getFullYear = function() {
            return r.date.getFullYear();
        };
        r.getMonth = function() {
            return r.date.getMonth();
        };
        r.getDate = function() {
            return r.date.getDate();
        };
        r.getHours = function() {
            return r.date.getHours();
        };
        r.getMinutes = function() {
            return r.date.getMinutes();
        };
        r.getSeconds = function() {
            return r.date.getSeconds();
        };
        r.getMilliseconds = function() {
            return r.date.getMilliseconds();
        };
        r.getTimezoneOffset = function() {
            return e * 60;
        };
        r.getUTCFullYear = function() {
            return r.origDate.getUTCFullYear();
        };
        r.getUTCMonth = function() {
            return r.origDate.getUTCMonth();
        };
        r.getUTCDate = function() {
            return r.origDate.getUTCDate();
        };
        r.getUTCHours = function() {
            return r.origDate.getUTCHours();
        };
        r.getUTCMinutes = function() {
            return r.origDate.getUTCMinutes();
        };
        r.getUTCSeconds = function() {
            return r.origDate.getUTCSeconds();
        };
        r.getUTCMilliseconds = function() {
            return r.origDate.getUTCMilliseconds();
        };
        r.getDay = function() {
            return r.date.getDay();
        };
        if (r.toISOString) {
            r.toISOString = function() {
                return s(r.origDate.getUTCFullYear(), 4) + "-" + s(r.origDate.getUTCMonth() + 1, 2) + "-" + s(r.origDate.getUTCDate(), 2) + "T" + s(r.origDate.getUTCHours(), 2) + ":" + s(r.origDate.getUTCMinutes(), 2) + ":" + s(r.origDate.getUTCSeconds(), 2) + "." + s(r.origDate.getUTCMilliseconds(), 3) + "Z";
            };
        }
        var u = [ "getUTCDay", "getYear", "setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds", "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCMonth", "setUTCSeconds", "setYear", "toDateString", "toGMTString", "toJSON", "toLocaleFormat", "toLocaleString", "toLocaleTimeString", "toSource", "toString", "toTimeString", "toUTCString", "valueOf" ];
        t.forEach(u, function(e) {
            r[e] = function() {
                throw new Error("Method '" + e + "' is not implemented in the TzDate mock");
            };
        });
        return r;
    };
    t.mock.TzDate.prototype = Date.prototype;
    t.mock.animate = t.module("ngAnimateMock", [ "ng" ]).config([ "$provide", function(e) {
        var n = [];
        e.value("$$animateReflow", function(e) {
            var t = n.length;
            n.push(e);
            return function r() {
                n.splice(t, 1);
            };
        });
        e.decorator("$animate", function(e, r) {
            var o = {
                queue: [],
                enabled: e.enabled,
                triggerCallbacks: function() {
                    r.flush();
                },
                triggerReflow: function() {
                    t.forEach(n, function(e) {
                        e();
                    });
                    n = [];
                }
            };
            t.forEach([ "enter", "leave", "move", "addClass", "removeClass", "setClass" ], function(t) {
                o[t] = function() {
                    o.queue.push({
                        event: t,
                        element: arguments[0],
                        args: arguments
                    });
                    e[t].apply(e, arguments);
                };
            });
            return o;
        });
    } ]);
    t.mock.dump = function(e) {
        return n(e);
        function n(e) {
            var o;
            if (t.isElement(e)) {
                e = t.element(e);
                o = t.element("<div></div>");
                t.forEach(e, function(e) {
                    o.append(t.element(e).clone());
                });
                o = o.html();
            } else if (t.isArray(e)) {
                o = [];
                t.forEach(e, function(e) {
                    o.push(n(e));
                });
                o = "[ " + o.join(", ") + " ]";
            } else if (t.isObject(e)) {
                if (t.isFunction(e.$eval) && t.isFunction(e.$apply)) {
                    o = r(e);
                } else if (e instanceof Error) {
                    o = e.stack || "" + e.name + ": " + e.message;
                } else {
                    o = t.toJson(e, true);
                }
            } else {
                o = String(e);
            }
            return o;
        }
        function r(e, n) {
            n = n || "  ";
            var o = [ n + "Scope(" + e.$id + "): {" ];
            for (var i in e) {
                if (Object.prototype.hasOwnProperty.call(e, i) && !i.match(/^(\$|this)/)) {
                    o.push("  " + i + ": " + t.toJson(e[i]));
                }
            }
            var s = e.$$childHead;
            while (s) {
                o.push(r(s, n + "  "));
                s = s.$$nextSibling;
            }
            o.push("}");
            return o.join("\n" + n);
        }
    };
    t.mock.$HttpBackendProvider = function() {
        this.$get = [ "$rootScope", a ];
    };
    function a(e, r, o) {
        var i = [], s = [], a = [], c = t.bind(a, a.push), l = t.copy;
        function d(e, n, r, o) {
            if (t.isFunction(e)) return e;
            return function() {
                return t.isNumber(e) ? [ e, n, r, o ] : [ 200, e, n ];
            };
        }
        function h(e, u, d, h, g, p, m) {
            var v = new f(), w = s[0], k = false;
            function E(e) {
                return t.isString(e) || t.isFunction(e) || e instanceof RegExp ? e : t.toJson(e);
            }
            function T(t) {
                if (!o && p && p.then) p.then(i);
                return r;
                function r() {
                    var n = t.response(e, u, d, g);
                    v.$$respHeaders = n[2];
                    h(l(n[0]), l(n[1]), v.getAllResponseHeaders(), l(n[3] || ""));
                }
                function i() {
                    for (var e = 0, t = a.length; e < t; e++) {
                        if (a[e] === r) {
                            a.splice(e, 1);
                            h(-1, n, "");
                            break;
                        }
                    }
                }
            }
            if (w && w.match(e, u)) {
                if (!w.matchData(d)) throw new Error("Expected " + w + " with different data\n" + "EXPECTED: " + E(w.data) + "\nGOT:      " + d);
                if (!w.matchHeaders(g)) throw new Error("Expected " + w + " with different headers\n" + "EXPECTED: " + E(w.headers) + "\nGOT:      " + E(g));
                s.shift();
                if (w.response) {
                    a.push(T(w));
                    return;
                }
                k = true;
            }
            var D = -1, C;
            while (C = i[++D]) {
                if (C.match(e, u, d, g || {})) {
                    if (C.response) {
                        (o ? o.defer : c)(T(C));
                    } else if (C.passThrough) {
                        r(e, u, d, h, g, p, m);
                    } else throw new Error("No response defined !");
                    return;
                }
            }
            throw k ? new Error("No response defined !") : new Error("Unexpected request: " + e + " " + u + "\n" + (w ? "Expected " + w : "No more request expected"));
        }
        h.when = function(e, t, n, r) {
            var s = new u(e, t, n, r), a = {
                respond: function(e, t, n, r) {
                    s.response = d(e, t, n, r);
                }
            };
            if (o) {
                a.passThrough = function() {
                    s.passThrough = true;
                };
            }
            i.push(s);
            return a;
        };
        g("when");
        h.expect = function(e, t, n, r) {
            var o = new u(e, t, n, r);
            s.push(o);
            return {
                respond: function(e, t, n, r) {
                    o.response = d(e, t, n, r);
                }
            };
        };
        g("expect");
        h.flush = function(n) {
            e.$digest();
            if (!a.length) throw new Error("No pending request to flush !");
            if (t.isDefined(n)) {
                while (n--) {
                    if (!a.length) throw new Error("No more pending request to flush !");
                    a.shift()();
                }
            } else {
                while (a.length) {
                    a.shift()();
                }
            }
            h.verifyNoOutstandingExpectation();
        };
        h.verifyNoOutstandingExpectation = function() {
            e.$digest();
            if (s.length) {
                throw new Error("Unsatisfied requests: " + s.join(", "));
            }
        };
        h.verifyNoOutstandingRequest = function() {
            if (a.length) {
                throw new Error("Unflushed requests: " + a.length);
            }
        };
        h.resetExpectations = function() {
            s.length = 0;
            a.length = 0;
        };
        return h;
        function g(e) {
            t.forEach([ "GET", "DELETE", "JSONP" ], function(t) {
                h[e + t] = function(r, o) {
                    return h[e](t, r, n, o);
                };
            });
            t.forEach([ "PUT", "POST", "PATCH" ], function(t) {
                h[e + t] = function(n, r, o) {
                    return h[e](t, n, r, o);
                };
            });
        }
    }
    function u(e, n, r, o) {
        this.data = r;
        this.headers = o;
        this.match = function(n, r, o, i) {
            if (e != n) return false;
            if (!this.matchUrl(r)) return false;
            if (t.isDefined(o) && !this.matchData(o)) return false;
            if (t.isDefined(i) && !this.matchHeaders(i)) return false;
            return true;
        };
        this.matchUrl = function(e) {
            if (!n) return true;
            if (t.isFunction(n.test)) return n.test(e);
            return n == e;
        };
        this.matchHeaders = function(e) {
            if (t.isUndefined(o)) return true;
            if (t.isFunction(o)) return o(e);
            return t.equals(o, e);
        };
        this.matchData = function(e) {
            if (t.isUndefined(r)) return true;
            if (r && t.isFunction(r.test)) return r.test(e);
            if (r && t.isFunction(r)) return r(e);
            if (r && !t.isString(r)) return t.equals(r, t.fromJson(e));
            return r == e;
        };
        this.toString = function() {
            return e + " " + n;
        };
    }
    function c() {
        return new f();
    }
    function f() {
        f.$$lastInstance = this;
        this.open = function(e, t, n) {
            this.$$method = e;
            this.$$url = t;
            this.$$async = n;
            this.$$reqHeaders = {};
            this.$$respHeaders = {};
        };
        this.send = function(e) {
            this.$$data = e;
        };
        this.setRequestHeader = function(e, t) {
            this.$$reqHeaders[e] = t;
        };
        this.getResponseHeader = function(e) {
            var r = this.$$respHeaders[e];
            if (r) return r;
            e = t.lowercase(e);
            r = this.$$respHeaders[e];
            if (r) return r;
            r = n;
            t.forEach(this.$$respHeaders, function(n, o) {
                if (!r && t.lowercase(o) == e) r = n;
            });
            return r;
        };
        this.getAllResponseHeaders = function() {
            var e = [];
            t.forEach(this.$$respHeaders, function(t, n) {
                e.push(n + ": " + t);
            });
            return e.join("\n");
        };
        this.abort = t.noop;
    }
    t.mock.$TimeoutDecorator = function(e, n) {
        e.flush = function(e) {
            n.defer.flush(e);
        };
        e.verifyNoPendingTasks = function() {
            if (n.deferredFns.length) {
                throw new Error("Deferred tasks to flush (" + n.deferredFns.length + "): " + r(n.deferredFns));
            }
        };
        function r(e) {
            var n = [];
            t.forEach(e, function(e) {
                n.push("{id: " + e.id + ", " + "time: " + e.time + "}");
            });
            return n.join(", ");
        }
        return e;
    };
    t.mock.$RAFDecorator = function(e) {
        var t = [];
        var n = function(e) {
            var n = t.length;
            t.push(e);
            return function() {
                t.splice(n, 1);
            };
        };
        n.supported = e.supported;
        n.flush = function() {
            if (t.length === 0) {
                throw new Error("No rAF callbacks present");
            }
            var e = t.length;
            for (var n = 0; n < e; n++) {
                t[n]();
            }
            t = [];
        };
        return n;
    };
    t.mock.$AsyncCallbackDecorator = function(e) {
        var n = [];
        var r = function(e) {
            n.push(e);
        };
        r.flush = function() {
            t.forEach(n, function(e) {
                e();
            });
            n = [];
        };
        return r;
    };
    t.mock.$RootElementProvider = function() {
        this.$get = function() {
            return t.element("<div ng-app></div>");
        };
    };
    t.module("ngMock", [ "ng" ]).provider({
        $browser: t.mock.$BrowserProvider,
        $exceptionHandler: t.mock.$ExceptionHandlerProvider,
        $log: t.mock.$LogProvider,
        $interval: t.mock.$IntervalProvider,
        $httpBackend: t.mock.$HttpBackendProvider,
        $rootElement: t.mock.$RootElementProvider
    }).config([ "$provide", function(e) {
        e.decorator("$timeout", t.mock.$TimeoutDecorator);
        e.decorator("$$rAF", t.mock.$RAFDecorator);
        e.decorator("$$asyncCallback", t.mock.$AsyncCallbackDecorator);
    } ]);
    t.module("ngMockE2E", [ "ng" ]).config([ "$provide", function(e) {
        e.decorator("$httpBackend", t.mock.e2e.$httpBackendDecorator);
    } ]);
    t.mock.e2e = {};
    t.mock.e2e.$httpBackendDecorator = [ "$rootScope", "$delegate", "$browser", a ];
    t.mock.clearDataCache = function() {
        var e, n = t.element.cache;
        for (e in n) {
            if (Object.prototype.hasOwnProperty.call(n, e)) {
                var r = n[e].handle;
                r && t.element(r.elem).off();
                delete n[e];
            }
        }
    };
    if (e.jasmine || e.mocha) {
        var l = null, d = function() {
            return !!l;
        };
        (e.beforeEach || e.setup)(function() {
            l = this;
        });
        (e.afterEach || e.teardown)(function() {
            var e = l.$injector;
            t.forEach(l.$modules, function(e) {
                if (e && e.$$hashKey) {
                    e.$$hashKey = n;
                }
            });
            l.$injector = null;
            l.$modules = null;
            l = null;
            if (e) {
                e.get("$rootElement").off();
                e.get("$browser").pollFns.length = 0;
            }
            t.mock.clearDataCache();
            t.forEach(t.element.fragments, function(e, n) {
                delete t.element.fragments[n];
            });
            f.$$lastInstance = null;
            t.forEach(t.callbacks, function(e, n) {
                delete t.callbacks[n];
            });
            t.callbacks.counter = 0;
        });
        e.module = t.mock.module = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return d() ? n() : n;
            function n() {
                if (l.$injector) {
                    throw new Error("Injector already created, can not register a module!");
                } else {
                    var n = l.$modules || (l.$modules = []);
                    t.forEach(e, function(e) {
                        if (t.isObject(e) && !t.isArray(e)) {
                            n.push(function(n) {
                                t.forEach(e, function(e, t) {
                                    n.value(t, e);
                                });
                            });
                        } else {
                            n.push(e);
                        }
                    });
                }
            }
        };
        var h = function(e, t) {
            this.message = e.message;
            this.name = e.name;
            if (e.line) this.line = e.line;
            if (e.sourceId) this.sourceId = e.sourceId;
            if (e.stack && t) this.stack = e.stack + "\n" + t.stack;
            if (e.stackArray) this.stackArray = e.stackArray;
        };
        h.prototype.toString = Error.prototype.toString;
        e.inject = t.mock.inject = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            var n = new Error("Declaration Location");
            return d() ? r.call(l) : r;
            function r() {
                var r = l.$modules || [];
                r.unshift("ngMock");
                r.unshift("ng");
                var o = l.$injector;
                if (!o) {
                    o = l.$injector = t.injector(r);
                }
                for (var i = 0, s = e.length; i < s; i++) {
                    try {
                        o.invoke(e[i] || t.noop, this);
                    } catch (a) {
                        if (a.stack && n) {
                            throw new h(a, n);
                        }
                        throw a;
                    } finally {
                        n = null;
                    }
                }
            }
        };
    }
})(window, window.angular);