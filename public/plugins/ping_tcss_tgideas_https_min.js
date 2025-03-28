(function() {
  "use strict";
  function _typeof(e) {
      return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
      }
      : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      )(e)
  }
  function _objectWithoutPropertiesLoose(e, t) {
      if (null == e)
          return {};
      var o, n, r = {}, i = Object.keys(e);
      for (n = 0; n < i.length; n++)
          o = i[n],
          t.indexOf(o) >= 0 || (r[o] = e[o]);
      return r
  }
  function _objectWithoutProperties(e, t) {
      if (null == e)
          return {};
      var o, n, r = _objectWithoutPropertiesLoose(e, t);
      if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
              o = i[n],
              t.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(e, o) && (r[o] = e[o])
      }
      return r
  }
  function finallyConstructor(e) {
      var t = this.constructor;
      return this.then((function(o) {
          return t.resolve(e()).then((function() {
              return o
          }
          ))
      }
      ), (function(o) {
          return t.resolve(e()).then((function() {
              return t.reject(o)
          }
          ))
      }
      ))
  }
  function allSettled(e) {
      return new this((function(t, o) {
          if (!e || void 0 === e.length)
              return o(new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
          var n = Array.prototype.slice.call(e);
          if (0 === n.length)
              return t([]);
          var r = n.length;
          function i(e, o) {
              if (o && ("object" == typeof o || "function" == typeof o)) {
                  var s = o.then;
                  if ("function" == typeof s)
                      return void s.call(o, (function(t) {
                          i(e, t)
                      }
                      ), (function(o) {
                          n[e] = {
                              status: "rejected",
                              reason: o
                          },
                          0 == --r && t(n)
                      }
                      ))
              }
              n[e] = {
                  status: "fulfilled",
                  value: o
              },
              0 == --r && t(n)
          }
          for (var s = 0; s < n.length; s++)
              i(s, n[s])
      }
      ))
  }
  var setTimeoutFunc = setTimeout;
  function isArray(e) {
      return Boolean(e && void 0 !== e.length)
  }
  function noop() {}
  function bind(e, t) {
      return function() {
          e.apply(t, arguments)
      }
  }
  function Promise$1(e) {
      if (!(this instanceof Promise$1))
          throw new TypeError("Promises must be constructed via new");
      if ("function" != typeof e)
          throw new TypeError("not a function");
      this._state = 0,
      this._handled = !1,
      this._value = void 0,
      this._deferreds = [],
      doResolve(e, this)
  }
  function handle(e, t) {
      for (; 3 === e._state; )
          e = e._value;
      0 !== e._state ? (e._handled = !0,
      Promise$1._immediateFn((function() {
          var o = 1 === e._state ? t.onFulfilled : t.onRejected;
          if (null !== o) {
              var n;
              try {
                  n = o(e._value)
              } catch (e) {
                  return void reject(t.promise, e)
              }
              resolve(t.promise, n)
          } else
              (1 === e._state ? resolve : reject)(t.promise, e._value)
      }
      ))) : e._deferreds.push(t)
  }
  function resolve(e, t) {
      try {
          if (t === e)
              throw new TypeError("A promise cannot be resolved with itself.");
          if (t && ("object" == typeof t || "function" == typeof t)) {
              var o = t.then;
              if (t instanceof Promise$1)
                  return e._state = 3,
                  e._value = t,
                  void finale(e);
              if ("function" == typeof o)
                  return void doResolve(bind(o, t), e)
          }
          e._state = 1,
          e._value = t,
          finale(e)
      } catch (t) {
          reject(e, t)
      }
  }
  function reject(e, t) {
      e._state = 2,
      e._value = t,
      finale(e)
  }
  function finale(e) {
      2 === e._state && 0 === e._deferreds.length && Promise$1._immediateFn((function() {
          e._handled || Promise$1._unhandledRejectionFn(e._value)
      }
      ));
      for (var t = 0, o = e._deferreds.length; t < o; t++)
          handle(e, e._deferreds[t]);
      e._deferreds = null
  }
  function Handler(e, t, o) {
      this.onFulfilled = "function" == typeof e ? e : null,
      this.onRejected = "function" == typeof t ? t : null,
      this.promise = o
  }
  function doResolve(e, t) {
      var o = !1;
      try {
          e((function(e) {
              o || (o = !0,
              resolve(t, e))
          }
          ), (function(e) {
              o || (o = !0,
              reject(t, e))
          }
          ))
      } catch (e) {
          if (o)
              return;
          o = !0,
          reject(t, e)
      }
  }
  Promise$1.prototype["catch"] = function(e) {
      return this.then(null, e)
  }
  ,
  Promise$1.prototype.then = function(e, t) {
      var o = new this.constructor(noop);
      return handle(this, new Handler(e,t,o)),
      o
  }
  ,
  Promise$1.prototype["finally"] = finallyConstructor,
  Promise$1.all = function(e) {
      return new Promise$1((function(t, o) {
          if (!isArray(e))
              return o(new TypeError("Promise.all accepts an array"));
          var n = Array.prototype.slice.call(e);
          if (0 === n.length)
              return t([]);
          var r = n.length;
          function i(e, s) {
              try {
                  if (s && ("object" == typeof s || "function" == typeof s)) {
                      var a = s.then;
                      if ("function" == typeof a)
                          return void a.call(s, (function(t) {
                              i(e, t)
                          }
                          ), o)
                  }
                  n[e] = s,
                  0 == --r && t(n)
              } catch (e) {
                  o(e)
              }
          }
          for (var s = 0; s < n.length; s++)
              i(s, n[s])
      }
      ))
  }
  ,
  Promise$1.allSettled = allSettled,
  Promise$1.resolve = function(e) {
      return e && "object" == typeof e && e.constructor === Promise$1 ? e : new Promise$1((function(t) {
          t(e)
      }
      ))
  }
  ,
  Promise$1.reject = function(e) {
      return new Promise$1((function(t, o) {
          o(e)
      }
      ))
  }
  ,
  Promise$1.race = function(e) {
      return new Promise$1((function(t, o) {
          if (!isArray(e))
              return o(new TypeError("Promise.race accepts an array"));
          for (var n = 0, r = e.length; n < r; n++)
              Promise$1.resolve(e[n]).then(t, o)
      }
      ))
  }
  ,
  Promise$1._immediateFn = "function" == typeof setImmediate && function(e) {
      setImmediate(e)
  }
  || function(e) {
      setTimeoutFunc(e, 0)
  }
  ,
  Promise$1._unhandledRejectionFn = function(e) {
      "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
  }
  ;
  var globalNS = function() {
      if ("undefined" != typeof self)
          return self;
      if ("undefined" != typeof window)
          return window;
      if ("undefined" != typeof global)
          return global;
      throw new Error("unable to locate global object")
  }();
  "function" != typeof globalNS.Promise ? globalNS.Promise = Promise$1 : globalNS.Promise.prototype["finally"] ? globalNS.Promise.allSettled || (globalNS.Promise.allSettled = allSettled) : globalNS.Promise.prototype["finally"] = finallyConstructor;
  var _excluded = ["_ver", "rdm", "rurl", "rarg", "scr", "scl", "lang", "java", "pf", "tz", "flash", "ct", "ext", "hurlcn", "reserved1", "tt"], c;
  (function() {
      function t(e) {
          this.url = [],
          this.init(e)
      }
      var g, l, n, f, x, w, p, B, k, q, u, y, z = 0, A = 0;
      window.Tcss = {},
      Tcss._ver = "tcss.3.4.6.8";
      var v = "function" == typeof tracert && "function" == typeof pgvGetColumn && "function" == typeof pgvGetTopic && "function" == typeof pgvGetDomainInfo && "function" == typeof pgvGetRefInfo;
      if (void 0 === r)
          var r = 1;
      window.__PTTbtnBuffer = [],
      window.PTTSendClick = function() {
          if (arguments.length > 0) {
              var e = [].slice.call(arguments);
              __PTTbtnBuffer.push(e),
              console.warn("\u7ec4\u4ef6\u76d1\u6d4b\u5230\u60a8\u5728pgvMain\u6267\u884c\u524d\u5df2\u7ecf\u5c1d\u8bd5\u89e6\u53d1PTTsendClick\uff0c\u8bf7\u786e\u4fdd\u4f60\u7684\u4ee3\u7801\u4e2d\u6709\u6267\u884cpgvMain\uff0c\u5426\u5219\u5c06\u4e0d\u4f1a\u6709\u4efb\u4f55\u7684\u6570\u636e\u4e0a\u62a5")
          }
      }
      ,
      window.__PTTDmp = null,
      window.__PTTreportBuffer = {
          args: [],
          resolve: [],
          reject: []
      },
      window.__SlugDmp = function(e) {
          __PTTDmp = this,
          __PTTDmp.args = e,
          __PTTDmp.report = function(e) {
              return e && __PTTreportBuffer.args.push(e),
              new Promise((function(e, t) {
                  __PTTreportBuffer.resolve.push(e),
                  __PTTreportBuffer.reject.push(t)
              }
              ))
          }
      }
      ,
      t.prototype = {
          init: function(e) {
              if (f = e || {},
              g = document,
              !f.statIframe && window != top)
                  try {
                      g = top.document
                  } catch (e) {}
              void 0 === g && (g = document),
              l = g.location,
              n = g.body,
              v && (Tcss.d = g,
              Tcss.l = l),
              q = [],
              u = [],
              y = []
          },
          PTTInfo: function() {
              window.PTTRun = new PTT,
              PTTRun.virtualURL = this.getDomainInfo().replace(/dm=|\&url=/g, "");
              var e = []
                , t = [];
              e.push("pttplat=" + PTTRun.plat),
              e.push("pttsitetype=" + (PTTRun.project ? PTTRun.project : "") + PTTRun.siteType),
              e.push("pttpagetype=" + PTTRun.pageType),
              e.push("pttpagename=" + encodeURIComponent(PTTRun.pageName)),
              e.push("pttrefer=" + encodeURIComponent(PTTRun.from)),
              t.push("project=" + (PTTRun.project ? PTTRun.project.split("_")[0] : "")),
              t.push("sitetype=" + PTTRun.siteType.split("_")[0]),
              t.push("pagetype=" + PTTRun.pageType),
              t.push("pagename=" + encodeURIComponent(PTTRun.pageName)),
              t.push("osact=" + PTTRun.siteType.split("_")[1]),
              t.push("refer=" + encodeURIComponent(PTTRun.from)),
              e.push("systemInfo=" + encodeURIComponent(PTTRun.PTTSystem + PTTRun.PTTSystemVer)),
              e.push("browserInfo=" + encodeURIComponent(PTTRun.detectBrowser)),
              e.push("devicesize=" + encodeURIComponent(PTTRun.PTTPixelWidth + "x" + PTTRun.PTTPixelHeight)),
              e.push("viewsize=" + encodeURIComponent(PTTRun.PTTViewPixelWidth + "x" + PTTRun.PTTViewPixelHeight)),
              e.push("netType=" + encodeURIComponent(PTTRun.PTTNetType));
              var o = e.join("&").trimAll();
              return PTTRun.getData("PTTdebug") && "0" == PTTRun.getData("PTTdebug") || console.log(decodeURI(t.join(";\n"))),
              o
          },
          run: function() {
              var e, t;
              e = (new Date).getTime();
              var o = escape(this.PTTInfo());
              h.init(),
              this.url.push(this.getDomainInfo()),
              this.coverCookie(),
              h.setCookie("ssid"),
              h.save(),
              this.url.unshift("https://pingfore." + this.getCookieSetDomain(x) + "/pingd?"),
              this.url.push(this.getRefInfo(f));
              try {
                  navigator.cookieEnabled ? this.url.push("&pvid=" + h.setCookie("pgv_pvid", !0)) : this.url.push("&pvid=NoCookie")
              } catch (e) {
                  this.url.push("&pvid=NoCookie")
              }
              this.url.push(this.getMainEnvInfo()),
              this.url.push(this.getExtendEnvInfo()),
              Tcss.pgUserType = "",
              (f.pgUserType || f.reserved2) && (t = f.pgUserType || f.reserved2,
              t = escape(t.substring(0, 256)),
              Tcss.pgUserType = t,
              y.push("pu=" + Tcss.pgUserType)),
              v && (pgvGetColumn(),
              pgvGetTopic(),
              this.url.push("&column=" + Tcss.column + "&subject=" + Tcss.subject),
              tracert()),
              this.url.push("&vs=" + Tcss._ver),
              h.setCookie("ts_uid", !0),
              t = (new Date).getTime(),
              q.push("tm=" + (t - e)),
              z && q.push("ch=" + z),
              f.extParam && f.extParam,
              this.url.push("&ext=" + o),
              this.url.push("&hurlcn=" + escape(u.join(";"))),
              this.url.push("&rand=" + Math.round(1e5 * Math.random())),
              "undefined" == typeof _speedMark ? this.url.push("&reserved1=-1") : this.url.push("&reserved1=" + (new Date - _speedMark)),
              (e = this.getSud()) && y.push("su=" + escape(e.substring(0, 256))),
              this.url.push("&tt=" + escape(y.join(";"))),
              this.sendInfo(this.url.join("")),
              1 == A && ((e = this.getParameter("tcss_rp_dm", g.URL)) != Tcss.dm && (e = this.url.join("").replace(/\?dm=(.*?)\&/, "?dm=" + e + "&"),
              this.sendInfo(e))),
              f.hot && (document.attachEvent ? document.attachEvent("onclick", (function(e) {
                  pgvWatchClick(e)
              }
              )) : document.addEventListener("click", (function(e) {
                  pgvWatchClick(e)
              }
              ), !1)),
              f.repeatApplay && "true" == f.repeatApplay && void 0 !== r && (r = 1)
          },
          getSud: function() {
              return f.sessionUserType ? f.sessionUserType : this.getParameter(f.sudParamName || "sessionUserType", g.URL)
          },
          coverCookie: function() {
              if (f.crossDomain && "on" == f.crossDomain) {
                  var e = this.getParameter("tcss_uid", g.URL)
                    , t = this.getParameter("tcss_sid", g.URL)
                    , o = this.getParameter("tcss_refer", g.URL)
                    , n = this.getParameter("tcss_last", g.URL);
                  t && e && (A = 1,
                  h.setCookie("ssid", !1, t),
                  h.save(),
                  h.setCookie("ts_refer", !0, o),
                  h.setCookie("ts_last", !0, n),
                  h.setCookie("pgv_pvid", !0, e))
              }
          },
          getDomainInfo: function(e) {
              var t;
              return t = l.hostname.toLowerCase(),
              f.virtualDomain && (u.push("ad=" + t),
              t = f.virtualDomain),
              this.getCurrentUrl(),
              Tcss.dm = t,
              v && pgvGetDomainInfo(),
              x = Tcss.dm,
              w || (w = this.getCookieSetDomain(l.hostname.toLowerCase()),
              v && (Tcss.domainToSet = w)),
              e && (Tcss.dm += ".hot"),
              "dm=" + Tcss.dm + "&url=" + Tcss.url
          },
          getCurrentUrl: function() {
              var e = ""
                , t = "-";
              e = escape(l.pathname);
              if ("" != l.search && (t = escape(l.search.substr(1))),
              f.senseParam) {
                  var o = this.getParameter(f.senseParam, g.URL);
                  o && (e += "_" + o)
              }
              f.virtualURL && (u.push("au=" + e),
              e = f.virtualURL),
              Tcss.url = e.replace(/\/\//, "/"),
              Tcss.arg = t
          },
          returnReferParams: function(e) {
              var t = document.createElement("a");
              t.href = e;
              var o = [];
              return o.push(e),
              o.push(t.protocol),
              o.push(t.hostname),
              o.push(t.port),
              o.push(t.pathname),
              o.push(t.search),
              o.push(t.hash),
              o
          },
          getRefInfo: function(e) {
              var t, o, n = "-", r = "-", i = g.referrer;
              return e = this.getParameter(e.tagParamName || "ADTAG", g.URL),
              -1 < (t = i.indexOf("://")) && (t = this.returnReferParams(i)) && (n = t[2],
              r = t[4]),
              -1 != i.indexOf("?") && (t = i.indexOf("?") + 1,
              i.substr(t)),
              i = n,
              f.virtualRefDomain && ("-" != n && u.push("ard=" + n),
              n = f.virtualRefDomain),
              f.virtualRefURL && ("-" != r && u.push("aru=" + escape(r)),
              r = f.virtualRefURL),
              e && (o = n + r,
              n = "ADTAG",
              r = e),
              p = n,
              B = escape(r),
              ("-" == p || "ADTAG" == p && "-" == i) && ("-" != (n = h.get("ts_last=", !0)) && q.push("ls=" + n)),
              h.setCookie("ts_last", !0, escape((l.hostname + l.pathname).substring(0, 128))),
              "-" != (n = h.get("ts_refer=", !0)) && q.push("rf=" + n),
              i = l.hostname,
              f.inner && (i = "," + i + "," + f.inner + ","),
              "-" == p || -1 < ("," + i + ",").indexOf(p) || 1 == A || ((r = escape((p + r).substring(0, 128))) != n && (z = 2),
              h.setCookie("ts_refer", !0, r)),
              Tcss.rdm = p,
              Tcss.rurl = B.replace(/\/\//, "/"),
              Tcss.rarg = "-",
              v && pgvGetRefInfo(),
              o ? "&rdm=" + Tcss.rdm + "&rurl=" + Tcss.rurl + "&rarg=" + Tcss.rarg + "&or=" + o : "&rdm=" + Tcss.rdm + "&rurl=" + Tcss.rurl + "&rarg=" + Tcss.rarg
          },
          getMainEnvInfo: function() {
              var e = "";
              try {
                  var t = "-"
                    , o = "-"
                    , n = "-"
                    , r = navigator;
                  self.screen && (t = screen.width + "x" + screen.height,
                  o = screen.colorDepth + "-bit"),
                  r.language ? n = r.language.toLowerCase() : r.browserLanguage && (n = r.browserLanguage.toLowerCase()),
                  e = "&scr=" + t + "&scl=" + o + "&lang=" + n + "&java=" + (r.javaEnabled() ? 1 : 0) + "&pf=" + r.platform + "&tz=" + (new Date).getTimezoneOffset() / 60
              } catch (e) {} finally {
                  return e
              }
          },
          getExtendEnvInfo: function() {
              var e = "";
              try {
                  var t = l.href
                    , o = "-";
                  e = e + "&flash=" + this.getFlashInfo();
                  n.addBehavior && (n.addBehavior("#default#homePage"),
                  n.isHomePage(t) && (e += "&hp=Y")),
                  n.addBehavior && (n.addBehavior("#default#clientCaps"),
                  o = n.connectionType),
                  e += "&ct=" + o
              } catch (e) {} finally {
                  return e
              }
          },
          getFlashInfo: function getFlashInfo() {
              var a = "-"
                , c = navigator;
              try {
                  if (c.plugins && c.plugins.length) {
                      for (var b = 0; b < c.plugins.length; b++)
                          if (-1 < c.plugins[b].name.indexOf("Shockwave Flash")) {
                              a = c.plugins[b].description.split("Shockwave Flash ")[1];
                              break
                          }
                  } else if (window.ActiveXObject)
                      for (b = 12; 5 <= b; b--)
                          try {
                              if (eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + b + "');")) {
                                  a = b + ".0";
                                  break
                              }
                          } catch (e) {}
              } catch (e) {}
              return a
          },
          getParameter: function(e, t) {
              if (e && t) {
                  var o = t.match(new RegExp("(\\?|#|&)" + e + "=([^&^#]*)(#|&|$)"));
                  return o ? o[2] : ""
              }
              return ""
          },
          getCookieSetDomain: function(e) {
              var t, o, n = [];
              for (o = t = 0; o < e.length; o++)
                  "." == e.charAt(o) && (n[t] = o,
                  t++);
              return t = n.length,
              -1 < e.indexOf(".cn") && t--,
              o = "qq.com",
              1 == t ? o = e : 1 < t && (o = e.substring(n[t - 2] + 1)),
              o
          },
          watchClick: function(e) {
              try {
                  var o, n = !0, r = "";
                  switch ((o = window.event ? window.event.srcElement : e.target).tagName) {
                  case "A":
                      r = "<A href=" + o.href + ">" + o.innerHTML + "</a>";
                      break;
                  case "IMG":
                      r = "<IMG src=" + o.src + ">";
                      break;
                  case "INPUT":
                      r = "<INPUT type=" + o.type + " value=" + o.value + ">";
                      break;
                  case "BUTTON":
                      r = "<BUTTON>" + o.innerText + "</BUTTON>";
                      break;
                  case "SELECT":
                      r = "SELECT";
                      break;
                  default:
                      n = !1
                  }
                  if (n) {
                      var i = new t(f)
                        , s = i.getElementPos(o);
                      if (f.coordinateId) {
                          var a = i.getElementPos(document.getElementById(f.coordinateId));
                          s.x -= a.x
                      }
                      i.url.push(i.getDomainInfo(!0)),
                      i.url.push("&hottag=" + escape(r)),
                      i.url.push("&hotx=" + s.x),
                      i.url.push("&hoty=" + s.y),
                      i.url.push("&rand=" + Math.round(1e5 * Math.random())),
                      i.url.unshift("https://pingfore." + this.getCookieSetDomain(x) + "/pingd?"),
                      i.sendInfo(i.url.join(""))
                  }
              } catch (e) {}
          },
          getElementPos: function(e) {
              if (null === e.parentNode || "none" == e.style.display)
                  return !1;
              var t = navigator.userAgent.toLowerCase()
                , o = null
                , n = [];
              if (e.getBoundingClientRect)
                  return t = e.getBoundingClientRect(),
                  e = Math.max(document.documentElement.scrollTop, document.body.scrollTop),
                  o = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
                  {
                      x: t.left + o - document.body.clientLeft,
                      y: t.top + e - document.body.clientTop
                  };
              if (document.getBoxObjectFor)
                  n = [(t = document.getBoxObjectFor(e)).x - (e.style.borderLeftWidth ? Math.floor(e.style.borderLeftWidth) : 0), t.y - (e.style.borderTopWidth ? Math.floor(e.style.borderTopWidth) : 0)];
              else {
                  if (n = [e.offsetLeft, e.offsetTop],
                  (o = e.offsetParent) != e)
                      for (; o; )
                          n[0] += o.offsetLeft,
                          n[1] += o.offsetTop,
                          o = o.offsetParent;
                  (-1 < t.indexOf("opera") || -1 < t.indexOf("safari") && "absolute" == e.style.position) && (n[0] -= document.body.offsetLeft,
                  n[1] -= document.body.offsetTop)
              }
              for (o = e.parentNode ? e.parentNode : null; o && "BODY" != o.tagName && "HTML" != o.tagName; )
                  n[0] -= o.scrollLeft,
                  n[1] -= o.scrollTop,
                  o = o.parentNode ? o.parentNode : null;
              return {
                  x: n[0],
                  y: n[1]
              }
          },
          pgvGetArgs: function() {
              this.getDomainInfo();
              var e = [];
              return e.push("tcss_rp_dm=" + Tcss.dm),
              e.push("tcss_uid=" + h.get("pgv_pvid=", !0)),
              e.push("tcss_sid=" + h.get("ssid=", !0)),
              e.push("tcss_refer=" + h.get("ts_refer=", !0)),
              e.push("tcss_last=" + h.get("ts_last=", !0)),
              e.join("&")
          },
          sendClickForPTT: function() {
              f.hottag && (this.url.push(this.getDomainInfo(!0)),
              this.url.push("&hottag=" + f.hottag),
              this.url.push("&hotx=9999&hoty=9999"),
              this.url.push("&rand=" + Math.round(1e5 * Math.random())),
              this.url.unshift("https://pingfore." + this.getCookieSetDomain(x) + "/pingd?"),
              this.sendInfo(this.url.join("")))
          },
          sendInfo: function(e) {
              !window.navigator.sendBeacon || /iphone|ipad/g.test(PTTRun.PTTSystem) && (parseInt(PTTRun.PTTSystemVer) < 13 || "dcv_qq" == PTTRun.plat) || /majiang.qq.com|hlddz.qq.com/g.test(PTTRun.virtualURL) ? (k = new Image(1,1),
              Tcss.img = k,
              k.onload = k.onerror = k.onabort = function() {
                  k.onload = k.onerror = k.onabort = null,
                  Tcss.img = null
              }
              ,
              k.src = e.slice(0, 3e3)) : window.navigator.sendBeacon(e)
          }
      };
      var h = {
          sck: [],
          sco: {},
          init: function() {
              if ("-" != (e = this.get("pgv_info=", !0)))
                  for (var e = e.split("&"), t = 0; t < e.length; t++) {
                      var o = e[t].split("=");
                      this.set(o[0], unescape(o[1]))
                  }
          },
          get: function(e, t) {
              var o, n = t ? g.cookie : this.get("pgv_info=", !0), r = "-";
              if (-1 < (o = n.indexOf(e))) {
                  if (o += e.length,
                  -1 == (r = n.indexOf(";", o)) && (r = n.length),
                  !t) {
                      var i = n.indexOf("&", o);
                      -1 < i && (r = Math.min(r, i))
                  }
                  r = n.substring(o, r)
              } else
                  "pgv_info=" == e && "sessionStorage"in window ? r = sessionStorage.getItem("pgv_info") || "-" : "pgv_pvid=" == e && "localStorage"in window && (r = localStorage.getItem("pgv_pvid") || "-");
              return r
          },
          set: function(e, t) {
              this.sco[e] = t;
              for (var o = !1, n = this.sck.length, r = 0; r < n; r++)
                  if (e == this.sck[r]) {
                      o = !0;
                      break
                  }
              o || this.sck.push(e)
          },
          setCookie: function(e, t, o) {
              var n = l.hostname
                , r = h.get(e + "=", t);
              if ("-" != r || o)
                  r = o || r;
              else {
                  switch (e) {
                  case "ts_uid":
                      q.push("nw=1");
                      break;
                  case "ssid":
                      z = 1
                  }
                  r = t ? "" : "s",
                  o = (new Date).getUTCMilliseconds(),
                  r += Math.round(2147483647 * Math.abs(Math.random() - 1)) * o % 1e10
              }
              if ("ssid" == e ? (console.log("ssid", r),
              "sessionStorage"in window && sessionStorage.setItem("pgv_info", "ssid=" + r)) : "pgv_pvid" == e && "localStorage"in window && localStorage.setItem(e, r),
              t)
                  switch (e) {
                  case "ts_uid":
                      this.saveCookie(e + "=" + r, n, this.getExpires(1051200));
                      break;
                  case "ts_refer":
                      this.saveCookie(e + "=" + r, n, this.getExpires(259200));
                      break;
                  case "ts_last":
                      this.saveCookie(e + "=" + r, n, this.getExpires(30));
                      break;
                  default:
                      this.saveCookie(e + "=" + r, w, "expires=Sun, 18 Jan 2038 00:00:00 GMT;")
                  }
              else
                  this.set(e, r);
              return r
          },
          getExpires: function(e) {
              var t = new Date;
              return t.setTime(t.getTime() + 6e4 * e),
              "expires=" + t.toGMTString()
          },
          save: function() {
              if (f.sessionSpan) {
                  var e = new Date;
                  e.setTime(e.getTime() + 6e4 * f.sessionSpan)
              }
              for (var t = "", o = this.sck.length, n = 0; n < o; n++)
                  t += this.sck[n] + "=" + this.sco[this.sck[n]] + "&";
              t = "pgv_info=" + t.substr(0, t.length - 1),
              o = "",
              e && (o = "expires=" + e.toGMTString()),
              this.saveCookie(t, w, o)
          },
          saveCookie: function(e, t, o) {
              g.cookie = e + ";path=/;domain=" + t + ";" + o + ("http:" == location.protocol || "ActiveXObject"in window ? "" : ";SameSite=None; Secure")
          }
      };
      window.pgvMain = function(e, o) {
          var n = "";
          o ? (n = o,
          Tcss._ver = "tcsso.3.4.6.8") : (n = e,
          Tcss._ver = "tcss.3.4.6.8");
          try {
              if (v && ("undefined" != typeof pvRepeatCount && 1 == pvRepeatCount ? (r = 1,
              pvRepeatCount = 2) : r = 2),
              1 == r) {
                  if (r = 2,
                  Tcss.virtualRefDomain && (n.virtualRefDomain = Tcss.virtualRefDomain),
                  Tcss.virtualRefURL && (n.virtualRefURL = Tcss.virtualRefURL),
                  new t(n).run(),
                  n && n.virtualDomain && (Tcss.virtualRefDomain = n.virtualDomain),
                  n && n.virtualURL && (Tcss.virtualRefURL = n.virtualURL),
                  "undefined" != typeof PTTDate)
                      PTTRun.newStayTime(Math.round(new Date - PTTDate)),
                      PTTDate = new Date;
                  else {
                      window.PTTDate = new Date;
                      var i = "onpagehide"in window ? "pagehide" : "unload";
                      PTTRun.addEvent(window, i, (function() {
                          PTTRun.newStayTime(Math.round(new Date - PTTDate)),
                          function() {
                              var e = window.performance;
                              if (e) {
                                  var t = e.timing
                                    , o = {}
                                    , n = PTTRun.PTTSystem + PTTRun.PTTSystemVer + "|||" + PTTRun.detectBrowser + "|||" + PTTRun.PTTNetType;
                                  o.loadpage = (t.loadEventEnd - t.navigationStart) / 1e3;
                                  var r = o.loadpage > 5 ? "C" : o.loadpage > 3 ? "B" : o.loadpage > 1 ? "A" : "S";
                                  PTTRun.quality1 = r,
                                  __MossoSendClick("pttloadpage", r, n, PTTRun.virtualURL),
                                  o.domready = (t.domComplete - t.responseEnd) / 1e3;
                                  var i = o.domready < 1 ? "S" : "A";
                                  __MossoSendClick("pttdomready", i, n, PTTRun.virtualURL),
                                  o.blank = (t.domInteractive - t.navigationStart) / 1e3;
                                  var s = o.blank > 1.5 ? "C" : o.blank > 1 ? "B" : o.blank > .5 ? "A" : "S";
                                  __MossoSendClick("pttblank", s, n, PTTRun.virtualURL)
                              } else
                                  console.log("\u4f60\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 performance \u63a5\u53e3")
                          }()
                      }
                      ))
                  }
                  __PTTDmp && !PTTinitDmp.isInit && PTTinitDmp(__PTTDmp),
                  PTTRun.autoSend();
                  var s = /([^.]+)\.[^.]+\.com/i.exec(PTTRun.virtualURL);
                  s || console.warn("\u975eQQ\u57df\u4e0b\u7684\u6570\u636e\u4e0a\u62a5\u6709\u53ef\u80fd\u65e0\u6548\uff0c\u8bf7\u9a8c\u8bc1");
                  var a = location.search || PTTRun.getData("tokenParams");
                  "sessionStorage"in window && (a = sessionStorage.tokenParams || sessionStorage.dataSearch || location.search || PTTRun.getData("tokenParams")),
                  a && PTTRun.setDatatoqq("tokenParams", a),
                  PTTSendReport({
                      game: s ? s[1] : "cptest",
                      searchUrl: a,
                      action: "pv",
                      eventCode: "pv"
                  })
              }
              for (var c = 0, u = __PTTbtnBuffer.length; c < u; c++)
                  PTTSendClick.apply(this, __PTTbtnBuffer[c]);
              __PTTbtnBuffer.length = 0;
              for (c = 0,
              u = __PTTreportBuffer.args.length; c < u; c++)
                  "Promise"in window && PTTSendReport(__PTTreportBuffer.args[c]).then(__PTTreportBuffer.resolve[c])["catch"](__PTTreportBuffer.reject[c]);
              __PTTreportBuffer = null,
              "function" == typeof PTTCallback && PTTCallback(),
              window.onerror = function() {
                  __MossoSendClick("ptterror", arguments[0] + "|||" + arguments[1].split("?")[0] + "|||" + arguments[2], PTTRun.PTTSystem + PTTRun.PTTSystemVer + "|||" + PTTRun.detectBrowser + "|||" + PTTRun.PTTNetType, PTTRun.virtualURL)
              }
          } catch (e) {}
      }
      ,
      window.pgvSendClickForPTT = function(e) {
          new t(e).sendClickForPTT()
      }
      ,
      window.pgvSendClick = function(e) {
          if ("undefined" != typeof setSite && "undefined" != typeof PTTSendClick) {
              var t = e.hottag ? e.hottag.split(".") : 0;
              if (e.hottag && t.length >= 2) {
                  var o = t[t.length - 2].trimAll()
                    , n = t[t.length - 1].trimAll();
                  console.log(decodeURI(o + ":" + n))
              } else
                  console.error("PTT\u7ec4\u4ef6\u63d0\u793a\uff1a\u60a8\u7684\u6309\u94ae\u53c2\u6570\u6709\u8bef");
              PTTSendClick(o, n, "\u65e7\u57cb\u70b9")
          } else
              pgvSendClickForPTT(e)
      }
      ,
      window.pgvWatchClick = function(e) {
          new t(e).watchClick(e)
      }
      ,
      window.pgvGetArgs = function(e) {
          return new t(e).pgvGetArgs()
      }
      ,
      window.PTT = function() {
          !("stopLog"in window) && console.log("\u60a8\u6b63\u5728\u4f7f\u7528PTT\u6570\u636e\u4e0a\u62a5\u7ec4\u4ef6\uff0c\u5e2e\u52a9\u6587\u6863\u53c2\u9605:http://tgideas.qq.com/ptt/");
          var e = this;
          e.PTTDomain = document.referrer,
          e.addEvent = function(e, t, o) {
              e.attachEvent ? e.attachEvent("on" + t, o) : e.addEventListener(t, o, !1)
          }
          ,
          e.getParameterByName = function(e) {
              e = e.toLowerCase().replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
              var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search.toLowerCase());
              return null == t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
          }
          ,
          e.getData = function(e) {
              e += "=";
              for (var t = document.cookie.split(";"), o = 0, n = t.length; o < n; o++) {
                  for (var r = t[o]; " " == r.charAt(0); )
                      r = r.substring(1, r.length);
                  if (0 == r.indexOf(e))
                      return unescape(r.substring(e.length, r.length))
              }
              return !1
          }
          ,
          e.setData = function(e, t, o, n) {
              o = o || 0,
              n = n || "/";
              var r = ""
                , i = location.hostname.split(".");
              i = i.length > 3 ? i.slice(i.length - 3).join(".") : location.hostname,
              0 != o && ((r = new Date).setTime(r.getTime() + 1e3 * o * 60 * 60 * 24),
              r = "; expires=" + r.toGMTString()),
              document.cookie = e + "=" + escape(t) + r + "; path=" + n + ";domain=." + i + ("ActiveXObject"in window ? "" : ";SameSite=Lax;")
          }
          ,
          e.setDatatoqq = function(e, t) {
              document.cookie = e + "=" + escape(t) + "; path=/;domain=.qq.com" + ("ActiveXObject"in window ? "" : ";SameSite=Lax;")
          }
          ,
          e.getSession = function(e) {
              if (window.sessionStorage)
                  return sessionStorage.getItem(e);
              e += "=";
              for (var t = document.cookie.split(";"), o = 0, n = t.length; o < n; o++) {
                  for (var r = t[o]; " " == r.charAt(0); )
                      r = r.substring(1, r.length);
                  if (0 == r.indexOf(e))
                      return unescape(r.substring(e.length, r.length))
              }
              return !1
          }
          ,
          String.prototype.trimAll = function() {
              return this.replace(/\s/g, "")
          }
          ,
          Number.prototype.replace = function() {
              return this + ""
          }
          ,
          Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
              for (var t = 0, o = this.length; t < o; t++)
                  if (this[t] == e)
                      return t;
              return -1
          }
          ),
          e.splitVirtualStr = function(e) {
              var t = ["", ""];
              return e && (e = (e = e.replace(/^\/\/|^https:\/\/|^http:\/\//, "")).replace(/\/\//g, "/"),
              /^\//.test(e) ? t[1] = e : -1 == e.indexOf("/") ? t[0] = e : (t[0] = e.substring(0, e.indexOf("/")),
              t[1] = e.substring(e.indexOf("/"), e.length))),
              t
          }
          ,
          window.__MossoSendClick = function(t, o, n, r) {
              if ("undefined" == typeof setSite)
                  return console.error("PTT\u7ec4\u4ef6\u63d0\u793a\uff1a\u60a8\u9700\u8981\u5728\u9875\u9762\u91cc\u914d\u7f6esetSite,\u5426\u5219\u5c06\u65e0\u6cd5\u91c7\u96c6\u7edf\u8ba1\u6570\u636e,\u6587\u6863\u53c2\u9605:http://tgideas.qq.com/ptt/"),
                  !1;
              t = "" == t || void 0 === t ? "" : "_" + t.replace(/_|\./g, "*-*"),
              o = "" == o || void 0 === o ? "" : "_" + o.replace(/_|\./g, "*-*"),
              n = void 0 === n ? "" : n.replace(/_|\./g, "*-*");
              var i = (e.plat + "." + e.project + e.siteType + "." + e.pageType + t + o + "_" + n + "." + e.from).trimAll();
              i = encodeURIComponent(i),
              "1" == e.getData("PTTdebug") && console.log(decodeURI("a:" + i));
              var s = e.splitVirtualStr(r);
              pgvSendClickForPTT({
                  hottag: i,
                  virtualDomain: s[0],
                  virtualURL: s[1]
              })
          }
          ,
          window.PTTSendClick = function(t, o, n, r) {
              if ("undefined" == typeof setSite)
                  return console.error("PTT\u7ec4\u4ef6\u63d0\u793a\uff1a\u60a8\u9700\u8981\u5728\u9875\u9762\u91cc\u914d\u7f6esetSite,\u5426\u5219\u5c06\u65e0\u6cd5\u91c7\u96c6\u7edf\u8ba1\u6570\u636e,\u6587\u6863\u53c2\u9605:http://tgideas.qq.com/ptt/"),
                  !1;
              -1 != ["weekloop", "reach", "route", "osav", "actav", "browserinfo", "devicesize", "viewsize", "mc", "systeminfo", "nettype", "user", "osuser", "ossysuser", "actuser", "hotspot", "exposure", "newstaytime", "ptterror", "pttloadpage", "pttdomready", "pttblank"].indexOf(t.toLowerCase().trimAll()) && (console.warn('\u7531\u4e8e\u60a8\u7684\u6309\u94ae\u540d\u79f0\u4e0eMOSSO\u7cfb\u7edf\u4fdd\u7559\u540d\u79f0\u96f7\u540c\uff0c\u7ec4\u4ef6\u5c06\u628a\u540d\u79f0\u4e3a\uff1a"' + t + '"\u7684\u6309\u94ae\u91cd\u65b0\u547d\u540d\u4e3a\uff1a"' + t + 'clash"'),
              t += "clash"),
              r = r || PTTRun.virtualURL,
              __MossoSendClick(t, o, n, r);
              var i = "" == t || void 0 === t ? "" : t.replace(/_|\./g, "*-*")
                , s = "" == o || void 0 === o ? "" : "_" + o.replace(/_|\./g, "*-*")
                , a = void 0 === n ? "" : n.replace(/_|\./g, "*-*");
              PTTSendReport({
                  action: "btn",
                  hottag: i + s + "_" + a,
                  eventCode: void 0 === o ? "" : o.replace(/_|\./g, "*-*")
              });
              var c = "" == o || void 0 === o ? "." + e.from : "." + o
                , u = "" == t || void 0 === t ? "" : "." + t
                , d = e.project + e.oldSiteType + "." + e.pageType + u + c;
              d = d.trimAll(),
              e.getData("PTTdebug") && "0" == e.getData("PTTdebug") || console.log(decodeURI("b:" + d));
              var l = e.splitVirtualStr(r);
              pgvSendClickForPTT({
                  hottag: d,
                  virtualDomain: l[0],
                  virtualURL: l[1]
              })
          }
          ,
          window.PTTDebug = function(t) {
              e.setData("PTTdebug", t)
          }
          ,
          e.unitParams = function() {
              var t, o, n, r, i, s = navigator.userAgent.toLowerCase();
              e.osact = function() {
                  if ("undefined" == typeof setSite)
                      return !1;
                  var t = 0
                    , o = ["0", "1", "m", "pc", "ingame"];
                  return (setSite.osact || "" != e.getParameterByName("osact")) && (t = (setSite.osact + "").trimAll() || e.getParameterByName("osact").trimAll(),
                  -1 == o.indexOf(t) && (console.warn("\u60a8\u8bbe\u7f6e\u7684osact\u503c\u8d85\u51fa\u8303\u56f4\uff0c\u8bf7\u5728" + o.join(",") + "\u4e2d\u9009\u62e9\u4e00\u4e2a,\u5426\u5219\u5c06\u4ee50\u4ee3\u66ff"),
                  t = 0)),
                  t
              }(),
              e.project = (t = ["base", "ingame", "doujin", "match", "story", "history", "fans", "coming", "bbs", "mct", "skin", "other", "hero", "commerce", "version", "brand", "ip", "community", "netbar", "important", "app"],
              /\/zlkdatasys\/mct\/proj_[1-9]\d*\/index.shtml/.test(location.pathname) ? "mct_" : "undefined" != typeof setSite && void 0 === setSite.project ? void 0 !== setSite.siteType && "os" == setSite.siteType.toLowerCase() ? "base_" : "other_" : setSite.project && -1 != t.indexOf(setSite.project.trimAll()) ? setSite.project.trimAll() + "_" : (console.error("PTT\u7ec4\u4ef6\u63d0\u793a\uff1a\u60a8\u8bbe\u7f6e\u7684project\u53c2\u6570\u503c\u6709\u8bef\uff0c\u76ee\u524d\u53ea\u5141\u8bb8\u8bbe\u7f6e\u503c\u4e3a:" + t.join(",") + "\u8bf7\u68c0\u67e5"),
              "other_")),
              e.siteType = function() {
                  if ("undefined" != typeof setSite && void 0 !== setSite.siteType) {
                      if (/^\/(m\/)?(index.s?html?)?$/.test(location.pathname) && "0" != e.osact)
                          return "os_" + e.osact;
                      if (/\/zlkdatasys\/mct\/proj_[1-9]\d*\/index.shtml/.test(location.pathname))
                          return "proj" + location.pathname.replace(/[^0-9]/g, "") + "_" + e.osact;
                      var t = setSite.siteType.toLowerCase().replace(/_|\./g, "*-*");
                      return "0" != e.osact ? "1" == e.osact ? t + "_osact" : t + "_" + e.osact : t + "_0"
                  }
                  console.error("PTT\u7ec4\u4ef6\u63d0\u793a\uff1a\u60a8\u8fd8\u672a\u914d\u7f6esetSite.siteType\u7684\u503c,\u5c06\u65e0\u6cd5\u91c7\u96c6\u7edf\u8ba1\u6570\u636e,\u6587\u6863\u53c2\u9605:http://tgideas.qq.com/ptt/")
              }(),
              e.pageType = function() {
                  if ("undefined" != typeof setSite && void 0 !== setSite.pageType) {
                      if (/\/zlkdatasys\/mct\/proj_[1-9]\d*\/index.shtml/.test(location.pathname)) {
                          var t = e.getParameterByName("media");
                          return "index" + ("" == t ? "" : "-" + t)
                      }
                      return setSite.pageType.replace(/_|\./g, "*-*")
                  }
                  console.error("PTT\u7ec4\u4ef6\u63d0\u793a\uff1a\u60a8\u9700\u8981\u914d\u7f6esetSite.pageType\u7684\u503c,\u5426\u5219\u5c06\u65e0\u6cd5\u91c7\u96c6\u7edf\u8ba1\u6570\u636e,\u6587\u6863\u53c2\u9605:http://tgideas.qq.com/ptt/")
              }(),
              e.pageName = function() {
                  if ("undefined" != typeof setSite && void 0 !== setSite.pageName) {
                      if (/\/zlkdatasys\/mct\/proj_[1-9]\d*\/index.shtml/.test(location.pathname)) {
                          var t = e.getParameterByName("media");
                          return "\u6e20\u9053\u843d\u5730\u9875" + ("" == t ? "" : "-" + t)
                      }
                      return setSite.pageName.replace(/_|\./g, "*-*")
                  }
              }(),
              e.ingame = -1 == s.indexOf("msdk") && -1 == s.indexOf("15d60") && -1 == s.indexOf("16A366") && -1 == s.indexOf("tiem") && -1 == s.indexOf("ingame") && "undefined" == typeof pandora || -1 != s.indexOf("gamehelper") ? 0 : 1,
              e.plat = e.ingame ? -1 != s.indexOf("tiem") ? "dcv_tiem" : "dcv_ingame" : -1 != s.indexOf("qq/") ? "dcv_qq" : -1 != s.indexOf("micromessenge") ? "dcv_wx" : -1 != s.indexOf("gamehelper") || -1 != s.indexOf("lolapp") ? "dcv_helper" : -1 != s.indexOf("weibo") ? "dcv_weibo" : -1 != s.indexOf("qqlivebrowser") ? "dcv_qqvideo" : -1 != s.indexOf("qzone") ? "dcv_qzone" : -1 != s.indexOf("yyb_version") ? "dcv_yyb" : -1 != s.indexOf("qqnews") ? "dcv_qqnews" : -1 != s.indexOf("qnreading") ? "dcv_ttkb" : s.indexOf("iphone") > -1 || s.indexOf("ipad") > -1 || s.indexOf("ipod") > -1 || s.indexOf("android") > -1 ? "dcv_other" : "dcv_pc",
              e.from = function() {
                  var t = "other"
                    , o = e.getSession("channel");
                  if (void 0 !== e.PTTDomain && (t = "" == e.PTTDomain ? "direct" : -1 != e.PTTDomain.indexOf(location.hostname) ? "internal" : e.PTTDomain.indexOf("baidu.com") > -1 ? "seo_baidu" : e.PTTDomain.indexOf("sogou.com") > -1 ? "seo_sogou" : e.PTTDomain.indexOf("sm.cn") > -1 ? "seo_sm" : e.PTTDomain.indexOf("so.com") > -1 ? "seo_360" : e.PTTDomain.indexOf("bing.com") > -1 ? "seo_bing" : e.PTTDomain.indexOf("google.com") > -1 ? "seo_google" : "other_" + e.PTTDomain.match(/([a-zA-Z0-9\._-]+\.[a-zA-Z]{2,6})/, "")[0].replace(/\./g, "_")),
                  e.getParameterByName("adtag")) {
                      for (var n = [], r = e.getParameterByName("adtag").split("."), i = 0, s = r.length; i < s; i++)
                          i < 4 && n.push(r[i]);
                      t = n = "adtag_" + n.join("_")
                  }
                  return o && (-1 != o.indexOf("seo") && (t = o),
                  "wx" == o && (t = "wx_nemu")),
                  t
              }(),
              e.oldSiteType = "os" == e.siteType.split("_")[0] ? "dcv_pc" == e.plat ? "gwpc" : "1" == e.ingame ? "ingame" : "gwm" : e.siteType,
              e.weekloop = function() {
                  var t = new Date
                    , o = t.getFullYear()
                    , n = t.getMonth()
                    , r = t.getDate()
                    , i = 24 * (new Date(o,0,1).getDay() + 1) * 60 * 60 * 1e3
                    , s = Math.ceil(Math.ceil((new Date(o,n,r) - new Date(o,0,1) + i) / 1e3 / 60 / 60 / 24) / 7)
                    , a = e.getData("weekloop");
                  if (a && a.split("-")[3] == s)
                      e.PTTWeekloop = "";
                  else {
                      var c = a ? a.split("-") : ["0", "0", "0", "0"]
                        , u = 0;
                      if (s > c[3])
                          u = s - c[3] - 1;
                      else {
                          var d = 53;
                          29 == new Date(o - 1,1,29).getDate() && 6 == new Date(o - 1,0,1).getDay() && (d = 54);
                          u = d - c[3] + s - 1
                      }
                      for (var l = 0; l < u; l++)
                          c.push("0");
                      c.push(s + ""),
                      c.splice(0, c.length - 4),
                      e.PTTWeekloop = c.join("-"),
                      e.setData("weekloop", e.PTTWeekloop, 365),
                      __MossoSendClick("weekloop", e.PTTWeekloop, "\u5468\u7559\u5b58", PTTRun.virtualURL)
                  }
              }
              ,
              e.classifyUser = function(e) {
                  var t = [];
                  if (e > 6 && e < 14)
                      t.push("is8-14daysUser", "8-14\u7559");
                  else if (e > 14 && e < 29)
                      t.push("is16-29daysUser", "16-29\u7559");
                  else
                      switch (e) {
                      case 0:
                          t.push("is1daysUser", "\u5f53\u65e5\u56de\u8bbf2");
                          break;
                      case 1:
                          t.push("is2daysUser", "\u6b21\u7559");
                          break;
                      case 2:
                          t.push("is3daysUser", "3\u7559");
                          break;
                      case 3:
                          t.push("is4daysUser", "4\u7559");
                          break;
                      case 4:
                          t.push("is5daysUser", "5\u7559");
                          break;
                      case 5:
                          t.push("is6daysUser", "6\u7559");
                          break;
                      case 6:
                          t.push("is1weekUser", "\u5468\u7559");
                          break;
                      case 14:
                          t.push("is15daysUser", "15\u7559");
                          break;
                      case 29:
                          t.push("is1MonthUser", "\u6708\u7559");
                          break;
                      default:
                          t.push("more1Month", "\u8001\u7528\u6237")
                      }
                  return t
              }
              ,
              e.inOneHostDate = (o = "isHostDate",
              n = e.getData(o),
              r = Math.floor(((new Date).getTime() - 60 * (new Date).getTimezoneOffset() * 1e3) / 1e3 / 60 / 60 / 24),
              (!n || r - n >= 1) && (e.setData(o, r, 365),
              1)),
              e.inOneOsSysDate = function() {
                  var t = "isOsSysDate"
                    , o = e.getData(t)
                    , n = Math.floor(((new Date).getTime() - 60 * (new Date).getTimezoneOffset() * 1e3) / 1e3 / 60 / 60 / 24);
                  return (!o || n - o >= 1) && (e.setData(t, n, 365),
                  1)
              }
              ,
              e.inOneDate = function() {
                  var t = "os" == e.siteType.split("_")[0] || /^\/(m\/)?(index.s?html?)?$/.test(location.pathname) ? "isOsDate" : "isActDate"
                    , o = "os" == e.siteType.split("_")[0] || /^\/(m\/)?(index.s?html?)?$/.test(location.pathname) ? "" : location.pathname.substring(0, location.pathname.lastIndexOf("/") + 1)
                    , n = e.getData(t)
                    , r = Math.floor(((new Date).getTime() - 60 * (new Date).getTimezoneOffset() * 1e3) / 1e3 / 60 / 60 / 24);
                  return (!n || r - n >= 1) && (e.setData(t, r, 365, o),
                  1)
              }
              ,
              e.oldUser = function() {
                  if (e.inOneHostDate) {
                      var t = []
                        , o = e.getData("PTTuserFirstTime");
                      if (o) {
                          var n = (new Date).getTime() - 60 * (new Date).getTimezoneOffset() * 1e3 - o;
                          n = parseInt(n / 864e5),
                          t = e.classifyUser(n)
                      } else {
                          var r = 1e3 * Math.floor(((new Date).getTime() - 60 * (new Date).getTimezoneOffset() * 1e3) / 1e3 / 60 / 60 / 24) * 60 * 60 * 24;
                          e.setData("PTTuserFirstTime", r, 365),
                          t.push("newUsers", "\u65b0\u7528\u6237")
                      }
                      return t
                  }
                  return !1
              }(),
              e.osSysUser = function() {
                  if (("os" == e.siteType.split("_")[0] || "0" != e.osact && "mct_" != e.project || /^\/(m\/)?(index.s?html?)?$/.test(location.pathname)) && e.inOneOsSysDate()) {
                      var t = []
                        , o = e.getData("PTTosSysFirstTime");
                      if (o) {
                          var n = (new Date).getTime() - 60 * (new Date).getTimezoneOffset() * 1e3 - o;
                          n = parseInt(n / 864e5),
                          t = e.classifyUser(n)
                      } else {
                          var r = 1e3 * Math.floor(((new Date).getTime() - 60 * (new Date).getTimezoneOffset() * 1e3) / 1e3 / 60 / 60 / 24) * 60 * 60 * 24;
                          e.setData("PTTosSysFirstTime", r, 365),
                          t.push("newUsers", "\u65b0\u7528\u6237")
                      }
                      return t
                  }
                  return !1
              }(),
              e.actOldUser = function() {
                  if (e.PTTOsUser = [],
                  e.PTTActUser = [],
                  e.inOneDate()) {
                      var t, o, n, r = [];
                      "os" == e.siteType.split("_")[0] || /^\/(m\/)?(index.s?html?)?$/.test(location.pathname) ? (t = "PTTosFirstTime",
                      o = "osUser",
                      n = "") : (t = "PTTactFirstTime",
                      o = "actUser",
                      n = location.pathname.substring(0, location.pathname.lastIndexOf("/") + 1));
                      var i = e.getData(t);
                      if (i) {
                          var s = (new Date).getTime() - 60 * (new Date).getTimezoneOffset() * 1e3 - i;
                          s = parseInt(s / 864e5),
                          r = e.classifyUser(s)
                      } else {
                          var a = 1e3 * Math.floor(((new Date).getTime() - 60 * (new Date).getTimezoneOffset() * 1e3) / 1e3 / 60 / 60 / 24) * 60 * 60 * 24;
                          e.setData(t, a, 365, n),
                          r.push("newUsers", "\u65b0\u7528\u6237")
                      }
                      return "osUser" == o ? e.PTTOsUser = r : e.PTTActUser = r,
                      r.push(o),
                      r
                  }
                  return !1
              }(),
              e.routeLine = function() {
                  if ("undefined" == typeof setSite || void 0 === setSite.siteType)
                      return !1;
                  var t = (e.splitVirtualStr(PTTRun.virtualURL)[0] || location.hostname).replace(/\./g, "") + "routeLine";
                  if (e.haveRoute = !0,
                  e.PTTRoute = e.getData(t) ? e.getData(t) + "_" : "",
                  !(e.PTTRoute.split("_").length <= 7))
                      return e.haveRoute = !1,
                      "";
                  var o = /^os_/.test(e.siteType) ? e.pageType : e.siteType.split("_")[0];
                  e.PTTRoute = e.PTTRoute + o,
                  e.setDatatoqq(t, e.PTTRoute),
                  __MossoSendClick("route", e.PTTRoute, "\u8def\u5f84", PTTRun.virtualURL)
              }
              ,
              e.PTTSystem = (i = navigator.platform.toLowerCase(),
              -1 != s.indexOf("android") ? "android" : -1 != s.indexOf("iphone") ? "iphone" : -1 != s.indexOf("ipad") ? "ipad" : -1 != s.indexOf("ipod") ? "ipod" : "win32" == i || "windows" == i ? "windows" : "mac68k" == i || "macppc" == i || "macintosh" == i || "macintel" == i ? "mac" : "x11" == i ? "unix" : "other"),
              e.PTTSystemVer = function() {
                  var t = "";
                  switch (e.PTTSystem) {
                  case "android":
                      var o = "android";
                      t = -1 != s.indexOf("android/") ? s.substr(s.indexOf(o) + 8, s.indexOf(" ", s.indexOf(o)) - s.indexOf(o) - 8).split(" ")[0] : s.substr(s.indexOf(o) + 8, s.indexOf(";", s.indexOf(o)) - s.indexOf(o) - 8).split(" ")[0];
                      break;
                  case "iphone":
                      var n = "iphone os";
                      t = s.substr(s.indexOf(n) + 10, s.indexOf(" like ", s.indexOf(n)) - s.indexOf(n) - 10);
                      break;
                  case "windows":
                      t = s.indexOf("windows nt 5.0") > -1 || s.indexOf("windows 2000") > -1 ? "win2000" : s.indexOf("windows nt 5.1") > -1 || s.indexOf("windows xp") > -1 ? "winXP" : s.indexOf("windows nt 5.2") > -1 || s.indexOf("windows 2003") > -1 ? "win2003" : s.indexOf("windows nt 6.0") > -1 || s.indexOf("windows vista") > -1 ? "winVista" : s.indexOf("windows nt 6.1") > -1 || s.indexOf("windows 7") > -1 ? "win7" : s.indexOf("windows nt 6.2") > -1 || s.indexOf("windows 8") > -1 ? "win8" : s.indexOf("windows nt 10") > -1 || s.indexOf("windows 10") > -1 ? "win10" : "other";
                      break;
                  case "ipad":
                      var r = "cpu os";
                      t = s.substr(s.indexOf(r) + 7, s.indexOf(" like ", s.indexOf(r)) - s.indexOf(r) - 7);
                      break;
                  case "mac":
                      var i = "intel mac os x";
                      t = s.substr(s.indexOf(i) + 15, s.indexOf(")", s.indexOf(i)) - s.indexOf(i) - 15);
                      break;
                  case "ipod":
                      t = s.substr(s.indexOf(n) + 10, s.indexOf(" like ", s.indexOf(n)) - s.indexOf(n) - 10);
                      break;
                  default:
                      t = "unknown"
                  }
                  return t
              }(),
              e.detectBrowser = function() {
                  var t = ""
                    , o = ""
                    , n = ""
                    , r = e.PTTSystem;
                  switch ("android" == r || "iphone" == r || "ipad" == r || "ipod" == r ? "mobile" : "pc") {
                  case "mobile":
                      /msdk/.test(s) ? (t = "msdk",
                      n = /(msdk)[=. -\/]?(\d+[\._]?\d*)/.exec(s)) : /tiem/.test(s) ? (t = "tiem",
                      n = /(tiem ingame browser)[=. -\/]?(\d+[\._]?\d*)/.exec(s)) : /micromessenger/.test(s) ? (t = "weixin",
                      n = /(micromessenger)[=. -\/]?(\d+[\._]?\d*)/.exec(s)) : /qq\//.test(s) ? (t = "qq",
                      n = /(qq\/)[=. -\/]?(\d+[\._]?\d*)/.exec(s)) : /mqqbrowser/.test(s) ? (t = "mqqbrowser",
                      n = /(mqqbrowser)[=. -\/]?(\d+[\._]?\d*)/.exec(s)) : /weibo/.test(s) ? (t = "sina",
                      n = /(applewebkit)[=. -\/]?(\d+[\._]?\d*)/.exec(s)) : /ucbrowser/.test(s) ? (t = "uc",
                      n = /(ucbrowser)[=. -\/]?(\d+[\._]?\d*)/.exec(s)) : /baiduboxapp/.test(s) ? (t = "baidubrowser",
                      n = /(baiduboxapp)[=. -\/]?(\d+[\._]?\d*)/.exec(s)) : /chrome|crios/.test(s) ? (t = "chrome",
                      n = /(chrome|crios)[=. -\/]?(\d+[\._]?\d*)/.exec(s)) : /android/.test(s) ? (t = "original",
                      -1 != s.indexOf("applewebkit/") ? n = /(applewebkit)[=. -\/]?(\d+[\._]?\d*)/.exec(s) : o = "unmobile") : /mac os x/.test(s) ? (t = "safari",
                      n = /(applewebkit)[=. -\/]?(\d+[\._]?\d*)/.exec(s)) : (t = s.trimAll(),
                      o = "unmobile"),
                      o = "unmobile" != o ? n ? n[2] : "unmobile" : o;
                      break;
                  case "pc":
                      /msie \d+\.\d+/.test(s) ? (t = "ie",
                      o = (n = /ms(ie) (\d+\.\d+)/.exec(s)) ? n[2] : "unwindow") : -1 != s.indexOf("trident/7.0") ? (t = "ie",
                      o = "11") : /qqbrowser\/\d+/.test(s) ? (n = /(qqbrowser)[=. -\/]?(\d+[\._]?\d*)/.exec(s),
                      t = "qqbrowser",
                      /qbcore\/\d+/.test(s) && (t = "inqq"),
                      /micromessenger\/\d+/.test(s) && (t = "inweixin"),
                      o = n ? n[2] : "unwindow") : /ubrowser\/\d+/.test(s) ? (t = "ubrowser",
                      o = (n = /(ubrowser)[=. -\/]?(\d+[\._]?\d*)/.exec(s)) ? n[2] : "unwindow") : /maxthon\/\d+/.test(s) ? (t = "maxthon",
                      o = (n = /(maxthon)[=. -\/]?(\d+[\._]?\d*)/.exec(s)) ? n[2] : "unwindow") : /2345explorer\/\d+/.test(s) ? (t = "2345explorer",
                      o = (n = /(2345explorer)[=. -\/]?(\d+[\._]?\d*)/.exec(s)) ? n[2] : "unwindow") : -1 != s.indexOf("metasr") ? (t = "sogou",
                      o = (n = /(chrome)[=. -\/]?(\d+[\._]?\d*)/.exec(s)) ? n[2] : "1.0") : /chrome\/\d+/.test(s) ? (t = "chrome",
                      o = (n = /(chrome)[=. -\/]?(\d+[\._]?\d*)/.exec(s)) ? n[2] : "unwindow") : /firefox(\/\d+\.\d+)/.test(s) ? (t = "firefox",
                      o = (n = /(firefox)[=. -\/]?(\d+[\._]?\d*)/.exec(s)) ? n[2] : "unwindow") : /version\/(\d+\.\d) (safari)/.test(s) ? (t = "safari",
                      o = (n = /version\/(\d+\.\d) (safari)/.exec(s)) ? n[1] : "unwindow") : /opera.+version\/\d+\.\d+/.test(s) ? (t = "opera",
                      o = (n = /(opera).+version\/(\d+)\.\d+/.exec(s)) ? n[2] : "unwindow") : (t = "unknown",
                      o = "unwindow");
                      break;
                  default:
                      t = "unknown",
                      o = "unkown"
                  }
                  return e.PTTBrowser = t,
                  e.PTTBrowserVer = o,
                  e.PTTBrowser + e.PTTBrowserVer
              }(),
              e.PTTNetType = function() {
                  var e = "nettype/"
                    , t = "";
                  if (-1 != s.indexOf(e)) {
                      var o = -1 == s.indexOf(" ", s.indexOf(e)) ? 20 : s.indexOf(" ", s.indexOf(e)) - s.indexOf(e) - 8;
                      t = s.substr(s.indexOf(e) + 8, o)
                  } else
                      t = void 0 !== navigator.connection && void 0 !== navigator.connection.type ? navigator.connection.type : -1 != s.indexOf("iphone") || -1 != s.indexOf("ipad") || -1 != s.indexOf("ipod") || -1 != s.indexOf("android") ? "mobileUnknown" : "PCNetwork";
                  return t
              }(),
              e.getPixel = function() {
                  var t = document.documentElement.clientWidth
                    , o = document.documentElement.clientHeight
                    , n = window.devicePixelRatio ? window.devicePixelRatio : 1;
                  if (-1 != s.indexOf("iphone") || -1 != s.indexOf("ipad") || -1 != s.indexOf("ipod") || -1 != s.indexOf("android")) {
                      var r = window.screen.width
                        , i = t
                        , a = window.screen.height
                        , c = ""
                        , u = "";
                      if (Math.max(r, a) == i ? (c = r,
                      u = a) : (u = t / r * a,
                      c = i),
                      c > u) {
                          var d = u;
                          u = c,
                          c = d
                      }
                      if (t > o) {
                          var l = o;
                          o = t,
                          t = l
                      }
                  } else
                      c = window.screen.width,
                      u = window.screen.height;
                  e.PTTPixelWidth = parseInt(c * n),
                  e.PTTPixelHeight = parseInt(u * n),
                  e.PTTViewPixelWidth = parseInt(t * n),
                  e.PTTViewPixelHeight = parseInt(o * n)
              }()
          }
          ,
          e.unitParams(),
          e.autoSend = function() {
              e.routeLine(),
              e.weekloop(),
              __MossoSendClick("systemInfo", e.PTTSystem + e.PTTSystemVer, "\u7cfb\u7edf\u4fe1\u606f", PTTRun.virtualURL),
              __MossoSendClick("browserInfo", e.detectBrowser, "\u6d4f\u89c8\u5668\u4fe1\u606f", PTTRun.virtualURL),
              __MossoSendClick("devicesize", e.PTTPixelWidth + "x" + e.PTTPixelHeight, "\u8bbe\u5907\u5c3a\u5bf8", PTTRun.virtualURL),
              __MossoSendClick("viewsize", e.PTTViewPixelWidth + "x" + e.PTTViewPixelHeight, "\u53ef\u89c6\u5c3a\u5bf8", PTTRun.virtualURL),
              __MossoSendClick("netType", e.PTTNetType, "\u7f51\u7edc\u7c7b\u578b", PTTRun.virtualURL),
              e.oldUser && __MossoSendClick("user", e.oldUser[0], e.oldUser[1], PTTRun.virtualURL),
              e.osSysUser && __MossoSendClick("osSysUser", e.osSysUser[0], e.osSysUser[1], PTTRun.virtualURL),
              e.actOldUser && __MossoSendClick(e.actOldUser[2], e.actOldUser[0], e.actOldUser[1], PTTRun.virtualURL),
              e.exposure(window)
          }
          ,
          e.exposure = function(t) {
              var o = []
                , n = "function" == typeof t.MutationObserver;
              function r(r, s, a) {
                  var c = {
                      container: t.document.body,
                      offset: 0
                  };
                  void 0 !== s && "function" != typeof s || (a = s,
                  s = {});
                  for (var u = c.container = s.container || c.container, d = c.offset = s.offset || c.offset, l = 0; l < o.length; l++)
                      if (o[l].container === u)
                          return o[l].isInViewport(r, d, a);
                  return o[o.push(function(o) {
                      var r = function() {
                          var e = [];
                          function t(t, o, n) {
                              r(t) || e.push([t, o, n])
                          }
                          function o(t) {
                              var o = n(t);
                              -1 !== o && e.splice(o, 1)
                          }
                          function n(t) {
                              for (var o = e.length - 1; o >= 0; o--)
                                  if (e[o][0] === t)
                                      return o;
                              return -1
                          }
                          function r(e) {
                              return -1 !== n(e)
                          }
                          function i(t) {
                              return function() {
                                  for (var o = e.length - 1; o >= 0; o--)
                                      t.apply(this, e[o])
                              }
                          }
                          return {
                              add: t,
                              remove: o,
                              isWatched: r,
                              checkAll: i
                          }
                      }()
                        , s = o === t.document.body ? t : o
                        , a = (c = r.checkAll(m),
                      u = 15,
                      function() {
                          var e = this
                            , t = arguments
                            , o = d && !l;
                          function n() {
                              l = null,
                              d || c.apply(e, t)
                          }
                          clearTimeout(l),
                          l = setTimeout(n, u),
                          o && c.apply(e, t)
                      }
                      );
                      var c, u, d, l;
                      e.addEvent(s, "scroll", a),
                      s === t && e.addEvent(t, "resize", a);
                      n && function(e, t, o) {
                          var n = new MutationObserver(s)
                            , r = Array.prototype.filter
                            , i = Array.prototype.concat;
                          function s(e) {
                              !0 === e.some(a) && setTimeout(o, 0)
                          }
                          function a(t) {
                              var o = i.call([], Array.prototype.slice.call(t.addedNodes), t.target);
                              return r.call(o, e.isWatched).length > 0
                          }
                          n.observe(t, {
                              childList: !0,
                              subtree: !0,
                              attributes: !0
                          })
                      }(r, o, a);
                      function p(e, t, o) {
                          if (!o)
                              return h(e, t);
                          var n = f(e, t, o);
                          return n.watch(),
                          n
                      }
                      function f(e, t, o) {
                          function n() {
                              r.add(e, t, o)
                          }
                          function i() {
                              r.remove(e)
                          }
                          return {
                              watch: n,
                              dispose: i
                          }
                      }
                      function m(e, t, o) {
                          h(e, t) && (r.remove(e),
                          o(e))
                      }
                      function h(e, n) {
                          if (!i(t.document.documentElement, e) || !i(t.document.documentElement, o))
                              return !1;
                          if (!e.offsetWidth || !e.offsetHeight)
                              return !1;
                          var r = e.getBoundingClientRect()
                            , s = {};
                          if (o === t.document.body)
                              s = {
                                  top: -n,
                                  left: -n,
                                  right: t.document.documentElement.clientWidth + n,
                                  bottom: t.document.documentElement.clientHeight + n
                              };
                          else {
                              var a = o.getBoundingClientRect();
                              s = {
                                  top: a.top - n,
                                  left: a.left - n,
                                  right: a.right + n,
                                  bottom: a.bottom + n
                              }
                          }
                          return r.right >= s.left && r.left <= s.right && r.bottom >= s.top && r.top <= s.bottom
                      }
                      return setInterval(a, 150),
                      {
                          container: o,
                          isInViewport: p
                      }
                  }(u)) - 1].isInViewport(r, d, a)
              }
              var i = t.document.documentElement.compareDocumentPosition ? function(e, t) {
                  return !!(16 & e.compareDocumentPosition(t))
              }
              : t.document.documentElement.contains ? function(e, t) {
                  return e !== t && !!e.contains && e.contains(t)
              }
              : function(e, t) {
                  for (; t = t.parentNode; )
                      if (t === e)
                          return !0;
                  return !1
              }
              ;
              var s, a = document.currentScript || (s = document.getElementsByTagName("script"))[s.length - 1];
              function c(e, t) {
                  t || (t = location.href),
                  e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                  var o = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
                  return null == o ? null : o[1]
              }
              c("prefix", a.src);
              var u, d, l, p, f, m, h = parseInt(c("autorun", a.src) || 1), T = function(o) {
                  for (var n = function(e) {
                      var o = [];
                      if ("function" == typeof t.document.querySelectorAll)
                          o = Array.prototype.slice.call(t.document.querySelectorAll("[" + e + "]"));
                      else
                          for (var n = document.getElementsByTagName("*"), r = 0; r < n.length; r++) {
                              var i = n[r];
                              i.getAttribute(e) && o.push(i)
                          }
                      return o
                  }("exposure-tag"), i = 0; i < n.length; i++)
                      !function() {
                          var t = i
                            , o = n[t].getAttribute("exposure-tag").split(",");
                          e.addEvent(n[t], "click", (function() {
                              __MossoSendClick && __MossoSendClick("hotspot", o[0], o[1], PTTRun.virtualURL)
                          }
                          ))
                      }(),
                      r(n[i], (function(e) {
                          var t = e.getAttribute("exposure-tag").split(",");
                          __MossoSendClick && __MossoSendClick("exposure", t[0], t[1], PTTRun.virtualURL)
                      }
                      ))
              }, g = (d = [],
              l = document,
              p = l.documentElement.doScroll,
              f = "DOMContentLoaded",
              (m = (p ? /^loaded|^c/ : /^loaded|^i|^c/).test(l.readyState)) || e.addEvent(l, f, u = function() {
                  for (l.removeEventListener(f, u),
                  m = 1; u = d.shift(); )
                      u()
              }
              ),
              function(e) {
                  m ? setTimeout(e, 0) : d.push(e)
              }
              );
              h ? g((function() {
                  T()
              }
              )) : (window.exposure = {},
              exposure.run = function(e) {
                  T()
              }
              )
          }
          ,
          e.newStayTime = function(e) {
              for (var t = [0, 3, 7, 10, 15, 30, 60, 90, 120, 180, 300, 600, 900, 1800, 3600], o = "infinite", n = Math.round(e / 1e3), r = 1, i = t.length; r < i; r++)
                  if (n < t[r]) {
                      o = t[r - 1];
                      break
                  }
              __MossoSendClick("newStayTime", "" + o, "\u505c\u7559\u65f6\u957f", PTTRun.virtualURL),
              window.PTTSendReport({
                  action: "timeline",
                  hottag: "newstaytime_" + e + "_\u505c\u7559\u65f6\u957f",
                  staytime: e,
                  eventCode: "newstaytime"
              }, !1)
          }
      }
  }
  )(),
  window.console = window.console || (c = {},
  c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function() {}
  ,
  c),
  window.PTTinitDmp = function(e) {
      var t = e
        , o = {}
        , n = {};
      t.args = t.args || {},
      PTTinitDmp.isInit = !0,
      window.__dmpQueue = [],
      t.sendXHR = function(e, t) {
          var o = void 0 === t || t
            , n = "POST"
            , r = "//dmplog.qq.com/gingame/report/click"
            , i = (t = o,
          /(chrome)[=. -\/]?(\d+)([\._]?\d*)/.exec(navigator.userAgent.toLocaleLowerCase()));
          if (i && /action=timeline/.test(e) && Number(i[2]) >= 78)
              return navigator.sendBeacon(r + "?" + e),
              !1;
          if (e.length < 2e3 && (n = "GET",
          r += "?" + e,
          e = null),
          "XDomainRequest"in window)
              (s = new XDomainRequest).open(n, r),
              s.send();
          else {
              var s = new XMLHttpRequest;
              if (s.open(n, r, t),
              t && (s.timeout = 1500,
              s.ontimeout = function(e) {
                  console.log("PTTreport timeout:", e)
              }
              ),
              s.withCredentials = !1,
              s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
              s.send(e),
              o && "Promise"in window)
                  return new Promise((function(e, t) {
                      s.onreadystatechange = function() {
                          var o;
                          4 == s.readyState && (s.status >= 200 && s.status < 300 || 304 == s.status ? (o = JSON.parse(s.responseText),
                          e(o)) : t(s.readyState))
                      }
                  }
                  ))
          }
      }
      ,
      t.stringify = function(e) {
          var t = "";
          return Object.keys || (Object.keys = function(e) {
              if (e !== Object(e))
                  throw new TypeError("Object.keys called on a non-object");
              var t, o = [];
              for (t in e)
                  Object.prototype.hasOwnProperty.call(e, t) && o.push(t);
              return o
          }
          ),
          Object.entries || (Object.entries = function(e) {
              for (var t = Object.keys(e), o = t.length, n = new Array(o); o--; )
                  n[o] = [t[o], e[t[o]]];
              return n
          }
          ),
          "function" != typeof Array.prototype.forEach && (Array.prototype.forEach = function(e, t) {
              for (var o = 0, n = this.length; o < n; o++)
                  "function" == typeof e && Object.prototype.hasOwnProperty.call(this, o) && e.call(t, this[o], o, this)
          }
          ),
          Object.entries(e).forEach((function(e) {
              t += "&".concat(e[0], "=").concat(encodeURIComponent(e[1]))
          }
          )),
          t.replace(/^&/, "")
      }
      ,
      t.parseQuery = function(e) {
          e = e.replace(/\?/g, "");
          for (var t = /([^=&\s]+)[=\s]*([^&\s]*)/g, o = {}; t.exec(e); )
              o[RegExp.$1] = RegExp.$2;
          return o
      }
      ,
      t.getUrlParam = function(e, t) {
          var o = new RegExp("(\\?|&)" + e + "=([^&#]*)","i").exec(t || location.href);
          return null != o ? decodeURIComponent(o[2]) : ""
      }
      ,
      t._sourceIdHandler = function(e) {
          for (var t = (e || location.hash).replace(/^#?\//, "").replace(/\?(.)*/, "").split("/"), o = 0; o < 5; o++)
              t.length < o && t.push("0"),
              4 == o ? t[o] = "page" : 0 != o || t[o] || (t[o] = "index");
          return t.join(".")
      }
      ,
      t._titleHandler = function(e, t) {
          return e = -1 !== String(t).indexOf(",") ? e.replace(/\|/g, "-") : e.replace(/\|/g, "-").replace(/\,/g, "\uff0c")
      }
      ,
      t.getQQ = function() {
          for (var e = ["uin_cookie", "adid", "uin", "clientuin", "pt2gguin", "zzpaneluin"], t = 0, o = e.length; t < o; t++) {
              var n = PTTRun.getData(e[t]);
              if (n)
                  return n
          }
          return ""
      }
      ,
      t.searchObj = t.parseQuery(t.args.searchUrl || location.search),
      t.init = function() {
          var e = PTTRun;
          o = {
              pttplat: e.plat,
              pttproject: e.project.split("_")[0],
              pttpagetype: e.pageType,
              pttsitetype: e.siteType.split("_")[0],
              pttosact: e.osact,
              pttpagename: e.pageName,
              pttrefer: e.from
          };
          var r = [];
          r.push("pttplat=".concat(e.plat)),
          r.push("pttproject=".concat(e.project ? e.project : "").concat(e.siteType)),
          r.push("pttpagetype=".concat(e.pageType)),
          r.push("pttpagename=".concat(encodeURIComponent(e.pageName))),
          r.push("pttrefer=".concat(encodeURIComponent(e.from)));
          var i = [];
          e.PTTWeekloop ? i.push("weekloop_".concat(e.PTTWeekloop, "_\u5468\u7559\u5b58")) : i.push(""),
          e.haveRoute ? i.push("route_".concat(e.PTTRoute, "_\u8def\u5f84")) : i.push(""),
          e.oldUser[0] ? i.push("user_".concat(e.oldUser[0], "_").concat(e.oldUser[1])) : i.push(""),
          e.PTTOsUser[0] ? i.push("osUser_".concat(e.PTTOsUser[0], "_").concat(e.PTTOsUser[1])) : i.push(""),
          e.osSysUser[0] ? i.push("osSysUser_".concat(e.osSysUser[0], "_").concat(e.osSysUser[1])) : i.push(""),
          e.PTTActUser[0] ? i.push("actUser_".concat(e.PTTActUser[0], "_").concat(e.PTTActUser[1])) : i.push(""),
          i.push("browserInfo_".concat(e.detectBrowser, "_\u6d4f\u89c8\u5668\u4fe1\u606f")),
          i.push("devicesize_".concat(e.PTTPixelWidth, "x").concat(e.PTTPixelHeight, "_\u8bbe\u5907\u5c3a\u5bf8")),
          i.push("viewsize_".concat(e.PTTViewPixelWidth, "x").concat(e.PTTViewPixelHeight, "_\u53ef\u89c6\u5c3a\u5bf8")),
          i.push("systemInfo_".concat(e.PTTSystem + e.PTTSystemVer, "_\u7cfb\u7edf\u4fe1\u606f")),
          i.push("netType_".concat(e.PTTNetType, "_\u7f51\u7edc\u7c7b\u578b"));
          var s = e.getData("pgv_info") || sessionStorage.getItem("pgv_info")
            , a = e.getData("pgv_pvid") || localStorage.getItem("pgv_pvid") || "-";
          n = {
              sid: s && s.split("&")[0].split("ssid=")[1] || "-",
              pvid: a,
              _ver: Tcss._ver,
              qq: t.getQQ(),
              dm: Tcss.dm.replace(/.hot/, "") || null,
              url: Tcss.url,
              rdm: Tcss.rdm,
              rurl: Tcss.rurl,
              hottag: i.join(";"),
              hotx: "9999",
              hoty: "9999",
              rarg: "",
              scr: "".concat(e.PTTPixelWidth, "x").concat(e.PTTPixelHeight),
              scl: _typeof(screen.colorDepth) ? screen.colorDepth + "-bit" : "24-bit",
              lang: (navigator.language || navigator.browserLanguage).toLowerCase(),
              java: "javaEnabled"in navigator && navigator.javaEnabled() ? 1 : 0,
              pf: navigator.platform,
              tz: (new Date).getTimezoneOffset() / 60,
              flash: "-",
              ct: "-",
              ext: r.join("&").trimAll(),
              hurlcn: "",
              reserved1: "-1",
              tt: ""
          }
      }
      ,
      t.init(),
      t.report = function(e, r) {
          var i = ["nfsm.qq.com", "party.qq.com", "unite.qq.com", "ymzx.qq.com", "hssm.qq.com", "dg.qq.com", "pvp.qq.com", "dna.qq.com", "zhuoyao.qq.com", "jxqy.qq.com", "hlddz.qq.com", "hyrz.qq.com", "speedm.qq.com", "majiang.qq.com", "wepop.qq.com", "wmsj.qq.com", "hongjing.qq.com", "hyrzol.qq.com", "slg.qq.com", "hdl.qq.com", "swy.qq.com", "x5m.qq.com", "gp.qq.com", "cfm.qq.com", "quanyou.qq.com", "wpzs.qq.com", "longzhu.qq.com", "jx3.qq.com", "wdqy.qq.com", "lgwx.qq.com", "dp.qq.com", "yw.qq.com", "zyhx.qq.com", "ddzzq.qq.com", "soc.qq.com", "cslz.qq.com", "chessrush.qq.com", "activitiestest.ingame.qq.com", "qyn.qq.com", "mir.qq.com", "mhzx.qq.com", "jieba.qq.com", "hongjing.qq.com", "x5m.qq.com", "lgwx.qq.com", "zyhx.qq.com", "www.pubgmobile.com", "raz.qq.com", "k.qq.com", "ysyy.qq.com", "bwzy.qq.com", "xk.qq.com", "lr.qq.com", "wjyz.qq.com", "sds.qq.com", "mt4.qq.com", "ylzt.qq.com", "qjjx.qq.com", "3.qq.com", "zjzk.qq.com", "roblox.qq.com", "zqnba.qq.com", "lycq.qq.com", "shihun.qq.com", "xyjue.qq.com", "hwz.qq.com", "djwk.qq.com", "shuang.qq.com", "f.qq.com", "grsm.qq.com", "ysj.qq.com", "codm.qq.com", "soc.qq.com", "birds.qq.com", "qmzg2.qq.com", "ffm.qq.com", "hx.qq.com", "football.qq.com", "3s.qq.com", "jxqy2.qq.com", "xj4.qq.com", "xycq.qq.com", "moli.qq.com", "cqsj.qq.com", "cqsj3d.qq.com", "3d.qq.com", "peng.qq.com", "wangchao.qq.com", "666.qq.com", "yxwd.qq.com", "1001.qq.com", "qjnn.qq.com", "a.qq.com", "yrzx.qq.com", "xylz.qq.com", "dn2.qq.com", "qsmy.qq.com", "ty.qq.com", "miku.qq.com", "dn.qq.com", "ym.qq.com", "tlbb.qq.com", "xxsy.qq.com", "kof98ol.qq.com", "parent.qq.com", String.fromCharCode(116, 103, 108) + ".qq.com", "mdnf.qq.com", "mpt2.tgideas.qq.com", "htrj.qq.com", "films.qq.com", "bs.qq.com", "sy.qq.com", "n.qq.com", "nyzx.qq.com", "pao.qq.com", "war.qq.com", "kings.qq.com", "timi.qq.com", "ygmd.qq.com", "lmjx.qq.com", "test.ingame.qq.com", "game.qq.com", "ywlljx.qq.com", "tgc.qq.com", "srpg.qq.com", "cqtx.qq.com", "dm.qq.com", "tetris.qq.com", "fvb.qq.com", "shanhai.qq.com", "zhuimeng.qq.com", "3k.qq.com", "komori.qq.com", "qmqj2.qq.com", "h5.youkeying.qq.com", "dg.qq.com", "cfdg.qq.com", "vesports.qq.com", "vegame.qq.com", "ves.qq.com", "test.ves.qq.com", "h5.yky.qq.com", "love.qq.com", "aqtw.qq.com", "jcc.qq.com", "pre.ves.qq.com", "world.qq.com", "sjjq.qq.com", "eshub.woa.com", "poxiao.qq.com", "gamer.qq.com", "m.gamer.qq.com", "xxczyw.qq.com", "cot.qq.com", "cr.qq.com", "coc.qq.com", "dunk.qq.com", "value.qq.com", "wxq.qq.com", "hjdt.qq.com", "sea.qq.com"]
            , s = PTTRun.splitVirtualStr(PTTRun.virtualURL)[0] || location.hostname;
          if (-1 == i.indexOf(s))
              return !1;
          var a = t.searchObj.openid || PTTRun.getData("openid") || ""
            , c = t.searchObj.appid || PTTRun.getData("appid") || ""
            , u = t.searchObj.game_openid || ""
            , d = t.searchObj.game_appid || ""
            , l = "sessionStorage"in window && sessionStorage.__dmp_target_id || ""
            , p = "sessionStorage"in window && sessionStorage.__dmp_targettype || ""
            , f = "sessionStorage"in window && sessionStorage.__dmp_from || "";
          if (void 0 !== e && (l = void 0 !== e.targetid ? e.targetid : l,
          p = void 0 !== e.targettype ? e.targettype : p,
          f = void 0 !== e.from ? e.from : f),
          "undefined" != typeof setSite) {
              if (l = setSite.targetId ? setSite.targetId : l,
              setSite.targetType) {
                  p = -1 != ["news", "video", "moment", "other"].indexOf(setSite.targetType) ? setSite.targetType : "other"
              }
              if (setSite.from) {
                  f = -1 != ["v4", "ams", "tgl", "ingame", "other"].indexOf(setSite.from) ? setSite.from : "other"
              }
          }
          var m = t.searchObj.acctype || "";
          m = "wx" == (m = (m + "").toLocaleLowerCase()) ? 1 : "qq" == m ? 2 : m,
          m = isNaN(parseInt(m)) ? 0 : parseInt(m);
          var h = location.origin ? location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
          t.args = {
              game: t.args.game,
              acctype: m,
              platid: t.searchObj.platid || "",
              openid: a,
              game_openid: u,
              game_appid: d,
              reserved2: c,
              reserved3: e.eventCode || "content",
              partition: t.searchObj.partition || "",
              roleid: t.searchObj.roleid || "",
              pageid: h + location.pathname.replace(/\/\//, "/") + location.hash,
              business: "dmpnew",
              action: e.action || "",
              title: e.title || "",
              targetid: l,
              targettype: p,
              tag: e.tag || "",
              from: f,
              dt: Date.now(),
              staytime: e.staytime || "",
              path: e.path || "",
              recid: e.recid || "",
              channelid: e.channelid || "",
              top: e.top || "",
              fortest1: e.fortest1 || "",
              fortest2: e.fortest2 || "",
              fortest3: e.fortest3 || "",
              fortest4: e.fortest4 || "",
              fortest5: e.fortest5 || ""
          },
          e.sourceid || (t.args.sourceid = t._sourceIdHandler(e.hash)),
          "" != t.args.title && (t.args.title = t._titleHandler(e.title, e.targetid)),
          t.args.adtag = t.getUrlParam("adtag", t.args.searchUrl),
          __dmpQueue.push(t.args);
          var T = __dmpQueue[__dmpQueue.length - 1]
            , g = 0;
          return function i() {
              if ("pv" != T.action) {
                  var s = n;
                  s._ver,
                  s.rdm,
                  s.rurl,
                  s.rarg,
                  s.scr,
                  s.scl,
                  s.lang,
                  s.java,
                  s.pf,
                  s.tz,
                  s.flash,
                  s.ct,
                  s.ext,
                  s.hurlcn,
                  s.reserved1,
                  s.tt;
                  var a = _objectWithoutProperties(s, _excluded);
                  a.rand = Math.round(1e5 * Math.random()),
                  a.hottag = e.hottag || "",
                  T.rtype = "btn";
                  var c = o;
                  c.pttplat,
                  c.pttproject,
                  c.pttsitetype,
                  c.pttosact,
                  c.pttpagetype,
                  c.pttrefer;
                  var u = {};
                  for (var d in a)
                      u[d] = a[d];
                  for (var l in o)
                      u[l] = o[l];
                  for (var p in T)
                      u[p] = T[p];
                  return __dmpQueue.length > 1 && (__dmpQueue.length = __dmpQueue.length - 1),
                  "1" == PTTRun.getData("PTTdebug") && console.log(u),
                  u = t.stringify(u),
                  t.sendXHR(u, r)
              }
              if (!("undefined" != typeof PTTDate && PTTRun.getData("PTTDate") == PTTDate.getTime() && g < 5)) {
                  PTTRun.setData("PTTDate", PTTDate.getTime()),
                  t.init();
                  var f = n;
                  delete f.hotx,
                  delete f.hoty,
                  f.rand = Math.round(1e5 * Math.random()),
                  T.rtype = "pv";
                  var m = {};
                  for (var h in f)
                      m[h] = f[h];
                  for (var v in o)
                      m[v] = o[v];
                  for (var w in T)
                      m[w] = T[w];
                  return __dmpQueue.length = __dmpQueue.length - 1,
                  "1" == PTTRun.getData("PTTdebug") && console.log(m),
                  m = t.stringify(m),
                  t.sendXHR(m, r)
              }
              g++,
              window.setTimeout(i, 50)
          }()
      }
  }
  ,
  window.PTTSendReport = window.dmpReport = function(e, t) {
      return window.__PTTDmp || (new window.__SlugDmp({
          game: e.game,
          searchUrl: e.searchUrl
      }),
      PTTinitDmp(__PTTDmp)),
      window.__PTTDmp.report(e, t)
  }
}
)();
