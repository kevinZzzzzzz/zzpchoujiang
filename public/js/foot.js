(function() {
  function e(e) {
      return document.getElementById(e)
  }
  function t(e) {
      return "outerHTML"in document.body || "outerHTML"in document.documentElement ? e.outerHTML : document.createElement("DIV").appendChild(e.cloneNode(!0)).parentNode.innerHTML
  }
  function o(e, t) {
      if (e.length > 0) {
          var o = document.createElement("script");
          o.setAttribute("src", e),
          document.body.appendChild(o);
          var n = navigator.userAgent
            , i = n.toLowerCase().indexOf("trident") > -1;
          -1 != n.indexOf("MSIE") ? o.onreadystatechange = function() {
              if (this.readyState && "loading" == this.readyState)
                  return console.log(this.readyState),
                  void 0;
              t && t()
          }
          : i ? o.onreadystatechange = function() {
              if (console.log(o),
              this.readyState && "loading" == this.readyState)
                  return console.log(this.readyState),
                  void 0;
              t && t()
          }
          : (o.onload = function() {
              t && t()
          }
          ,
          o.onerror = function() {
              console.log("\u4f60\u7684AMS\u914d\u7f6e\u6709\u95ee\u9898\uff0c\u5bfc\u81f4\u7248\u53f7\u62c9\u53d6\u5931\u8d25"),
              t && t()
          }
          )
      } else
          t && t()
  }
  function n() {
      var e = "//game.qq.com/contract.shtml"
        , t = ["up.qq.com"]
        , o = ["yxsm.qq.com", "xiangqi.qq.com", "wuziqi.qq.com", "mj.qq.com", "ttjq.qq.com", "tball.qq.com", "majiang.qq.com", "hlddz.qq.com", "poker.qq.com", "hlsj.qq.com", "txwq.qq.com"];
      return -1 != t.join(",").indexOf(location.hostname) && (e = "//www.qq.com/contract.shtml"),
      -1 != o.join(",").indexOf(location.hostname) && (e = "//huanle.qq.com/cp/a20170209notice/"),
      e
  }
  function s() {
      var e = []
        , t = !1;
      if ("undefined" != typeof v4Data)
          if (0 === v4Data.status) {
              var o = v4Data.data.items;
              if (o.length > 0) {
                  for (var n = 0, i = 0; n < o.length; n++)
                      -1 !== location.hostname.indexOf(o[n].sTitle) ? "qq.com" === o[n].sTitle || ".qq.com" === o[n].sTitle ? console.warn("\u60a8\u5728v4\u7684\u57df\u540d\u4e0d\u80fd\u5199:qq.com\uff0c\u800c\u8981\u586b\u5199\u5177\u4f53\u7684\u4e1a\u52a1\u57df\u540d\u5982\uff1apvp.qq.com") : t = !0 : (e.push({
                          sTitle: "",
                          sRedirectAddress: ""
                      }),
                      e[i].sTitle = o[n].sTitle,
                      e[i].sRedirectAddress = o[n].sRedirectURL,
                      i++);
                  t || (e = [],
                  console.warn("\u8bf7\u5230v4\u91cc\u5f55\u5165\u6e38\u620f\u4e1a\u52a1\u57df\u540d,\u4e5f\u53ef\u80fd\u60a8\u5f53\u524d\u6240\u5728\u7684\u57df\u540d\u4e0d\u5339\u914dv4\u5f55\u5165\u7684\u57df\u540d\u3002\u5e2e\u52a9\u6587\u6863\u53c2\u9605:https://tgideas.qq.com/foot/"))
              } else
                  console.warn("\u8bf7\u5230v4\u7cfb\u7edf\u5f55\u5165\u7248\u53f7\u4fe1\u606f\uff0c\u5e2e\u52a9\u6587\u6863\u53c2\u9605:https://tgideas.qq.com/foot/")
          } else
              console.warn("foot\u7ec4\u4ef6\u63d0\u793a\uff1a\u8bf7\u786e\u8ba4\u60a8\u7684v4\u5c5e\u6027\u503c\u662f\u5426\u6709\u8bef,\u53c2\u8003v4\u63a5\u53e3\u8fd4\u56de\u7684\u9519\u8bef\u4fe1\u606f:" + v4Data.msg);
      return a(e)
  }
  function a(e) {
      var t = []
        , o = "";
      if (void 0 !== e) {
          for (var n = 0, i = e.length; n < i; n++)
              "" != decodeURIComponent(e[n].sRedirectAddress) ? t.unshift('<a rel="noopener" href="javascript:;"><img src="//game.gtimg.cn/images/js/2018foot/logo/icplogo.png" width="13" height="15" alt="' + decodeURIComponent(e[n].sTitle) + '">' + decodeURIComponent(e[n].sTitle) + "</a>") : -1 != e[n].sTitle.indexOf(12318) ? o = decodeURIComponent(e[n].sTitle) : t.push(decodeURIComponent(e[n].sTitle));
          "" != o && t.push(o)
      }
      return t
  }
  function r() {
      return "undefined" != typeof newsIndexData ? a(newsIndexData) : (console.log("foot\u7ec4\u4ef6\u63d0\u793a\u60a8\uff1a\u60a8\u8f93\u5165\u7684ams\u5c5e\u6027\u503c\u6709\u8bef\uff0c\u8bf7\u786e\u8ba4\uff01"),
      "")
  }
  function p(o, a) {
      var p = e("gfooter").getAttribute("age") || ""
        , c = "0" == e("gfooter").getAttribute("ieg-logo") ? 0 : 1
        , h = e("gfooter").getAttribute("hide-copyright") || 0
        , g = e("gfooter").getAttribute("rate-text") || ""
        , m = o ? r() : s()
        , d = document.getElementsByClassName("foot_left", "gfooter")
        , u = [];
      if (d.length > 0)
          for (i = 0,
          l = d.length; i < l; i++)
              u.push(t(d[i]));
      var f = document.getElementsByClassName("foot_top", "gfooter")
        , b = [];
      if (f.length > 0)
          for (i = 0,
          l = f.length; i < l; i++)
              b.push(t(f[i]));
      var k = document.getElementsByClassName("foot_bottom", "gfooter")
        , v = [];
      if (k.length > 0)
          for (i = 0,
          l = k.length; i < l; i++)
              v.push(t(k[i]));
      var q = document.getElementsByClassName("right_top", "gfooter")
        , y = [];
      if (q.length > 0) {
          for (y.push("<li>"),
          i = 0,
          l = q.length; i < l; i++)
              y.push(t(q[i]));
          y.push("</li>")
      }
      var w = document.getElementsByClassName("right_bottom", "gfooter")
        , x = [];
      if (w.length > 0) {
          for (x.push("<li>"),
          i = 0,
          l = w.length; i < l; i++)
              x.push(t(w[i]));
          x.push("</li>")
      }
      var T = []
        , A = [];
      if (T = document.getElementsByClassName("copyright_txt", "gfooter"),
      T.length > 0)
          for (i = 0,
          l = T.length; i < l; i++)
              T[i].innerHTML == "COPYRIGHT \xa9 1998 - " + _ + " TENCENT. ALL RIGHTS RESERVED." ? console.log("COPYRIGHT \xa9 1998 - " + _ + " TENCENT. ALL RIGHTS RESERVED.") : A.push(t(T[i]));
      var j = {}
        , E = function(e) {
          return void 0 === e
      };
      if (j = {
          ieglink: {
              link: "https://ieg.tencent.com/2023/index.html",
              text: "\u817e\u8baf\u4e92\u52a8\u5a31\u4e50"
          },
          service: {
              link: "",
              text: "\u670d\u52a1\u6761\u6b3e"
          },
          private: {
              link: "//game.qq.com/privacy_guide.shtml?ADTAG=gamepcbottom",
              text: "\u9690\u79c1\u4fdd\u62a4\u6307\u5f15"
          },
          children: {
              link: "//game.qq.com/privacy_guide_children.shtml?ADTAG=gamepcbottom",
              text: "\u513f\u7ae5\u9690\u79c1\u4fdd\u62a4\u6307\u5f15"
          },
          career: {
              link: "https://careers.tencent.com/",
              text: "\u817e\u8baf\u6e38\u620f\u62db\u8058"
          },
          custom: {
              link: "//kf.qq.com/",
              text: "\u817e\u8baf\u6e38\u620f\u5ba2\u670d"
          },
          gamelist: {
              link: "//game.qq.com/web201910/introduce.html?ADTAG=gamepcbottom",
              text: "\u6e38\u620f\u5217\u8868"
          },
          cm: {
              link: "https://www.tencent.com/zh-cn/partnership.html",
              text: "\u5e7f\u544a\u670d\u52a1\u53ca\u5546\u52a1\u5408\u4f5c"
          }
      },
      E(a) ? linksObjectAddon = j : linksObjectAddon = a,
      linksObjectAddon.clear)
          j = {},
          console.log("\u94fe\u63a5\u5b8c\u5168\u81ea\u5b9a\u4e49\u6a21\u5f0f");
      else
          for (var O in linksObjectAddon)
              E(j[O]) ? (E(linksObjectAddon[O].link) || E(linksObjectAddon[O].text)) && delete linksObjectAddon[O] : 0 === Object.keys(linksObjectAddon[O]).length || (E(linksObjectAddon[O].link) || E(linksObjectAddon[O].text)) && (E(linksObjectAddon[O].link) ? linksObjectAddon[O].link = j[O].link : E(linksObjectAddon[O].text) && (linksObjectAddon[O].text = j[O].text));
      j = Object.assign(j, linksObjectAddon);
      var R = [];
      R.push('.foot{background:#fff;color:#000;font:12px/20px "\u5fae\u8f6f\u96c5\u9ed1","\u5b8b\u4f53";min-width:1050px;margin:0 auto;text-align:left;}'),
      R.push(".foot_dark{background:#000;color:#494949}"),
      R.push(".foot_dark a{color:#494949}"),
      R.push(".foot_cpright{padding:15px 20px}"),
      R.push('.foot_cpright:after{content:"\x10";display:block;height:0;line-height:0;visibility:hidden;clear:both}'),
      R.push(".f_line{margin:0 2px}"),
      R.push(".foot_lefts{float:left;display:inline}"),
      R.push(".foot_ieg_logo{float:left;width:180px;height:35px;text-indent:-999em;overflow:hidden;margin:10px 0 0 10px;background:url(//game.gtimg.cn/images/js/2018foot/logo/foot-light.png)}"),
      R.push(".foot_dark .foot_ieg_logo{background:url(//game.gtimg.cn/images/js/2018foot/logo/foot-dark.png)}"),
      R.push(".foot_left{float:left;text-indent:-999em;overflow:hidden;margin:10px 0 0 10px;width:85px;height:35px;}"),
      R.push(".foot_links{display:inline;float:right;width:682px;list-style: none;}"),
      R.push(".foot_links li{line-height:20px;overflow:hidden;}"),
      R.push(".copyright_zh a{padding-right:10px}"),
      R.push(".foot_links .link_map{font-size:0;}"),
      R.push(".foot_links .link_map .f_line:last-child{display:none}"),
      R.push(".foot_links .copyright_txt{font-size:10px;}"),
      R.push(".foot_links .link_map span,.foot_links .link_map a{font-size:12px;color:#494949}"),
      R.push(".foot_links li img{vertical-align:middle;margin-right:3px;display:inline;}"),
      R.push(".foot_ratetext_inner {text-align: center;padding: 15px 20px 0;margin: 0}"),
      R.push(".foot_ratetext + .foot_cpright {padding: 0 20px 15px;}");
      var C = []
        , N = "1" == e("gfooter").getAttribute("dark") ? "foot foot_dark" : "foot";
      for (var L in C.push('<div class="' + N + '">'),
      C.push(b.join("")),
      "" != g && (C.push('<div class="foot_ratetext">'),
      C.push('<p class="foot_ratetext_inner">'),
      C.push(g),
      C.push("</p>"),
      C.push("</div>")),
      C.push('<div class="foot_cpright">'),
      C.push('<div class="foot_lefts">'),
      c && C.push('<a target="_blank" rel="noopener" href="https://ieg.tencent.com/2023/index.html" title="\u817e\u8baf\u4e92\u52a8\u5a31\u4e50" class="foot_ieg_logo">\u817e\u8baf\u4e92\u52a8\u5a31\u4e50</a>'),
      C.push(u.join("")),
      C.push("</div>"),
      C.push('<ul class="foot_links">'),
      C.push(y.join("")),
      C.push('<li class="link_map">'),
      j)
          0 === Object.keys(j[L]).length || ("service" === L ? location.href && (j[L].link ? (C.push('<a target="_blank" rel="noopener" href="' + j[L].link + '">\u670d\u52a1\u6761\u6b3e</a>'),
          C.push('<span class="f_line">|</span>')) : (C.push('<a target="_blank" rel="noopener" href="' + n() + '">\u670d\u52a1\u6761\u6b3e</a>'),
          C.push('<span class="f_line">|</span>'))) : (C.push('<a target="_blank" rel="noopener" href="' + j[L].link + '">' + j[L].text + "</a>"),
          C.push('<span class="f_line">|</span>')));
      if (C.push("</li>"),
      h || C.push('<li class="copyright_zh"><a target="_blank" rel="noopener" href="//www.tencent.com/law/mo_law.shtml?/law/copyright.htm">\u817e\u8baf\u516c\u53f8\u7248\u6743\u6240\u6709</a><a target="_blank" rel="noopener" href="//game.qq.com/self-discipline_pact.shtml">\u7f51\u7edc\u6e38\u620f\u884c\u4e1a\u9632\u6c89\u8ff7\u81ea\u5f8b\u516c\u7ea6</a></li>'),
      C.push('<li class="copyright_en">'),
      h || C.push('<p class="copyright_txt">COPYRIGHT &copy; 1998 - ' + _ + " TENCENT. ALL RIGHTS RESERVED.</p>"),
      C.push(A.join("")),
      C.push("</li>"),
      "0" == p ? C.push('<li class="limit_age">\u672c\u7f51\u7edc\u6e38\u620f\u9002\u5408\u5168\u5e74\u9f84\u7684\u7528\u6237\u4f7f\u7528\uff1b\u4e3a\u4e86\u60a8\u7684\u5065\u5eb7\uff0c\u8bf7\u5408\u7406\u63a7\u5236\u6e38\u620f\u65f6\u95f4\u3002</li>') : "" != p && C.push('<li class="limit_age">\u672c\u7f51\u7edc\u6e38\u620f\u9002\u5408' + p + "+\u5c81\u7684\u7528\u6237\u4f7f\u7528\uff1b\u4e3a\u4e86\u60a8\u7684\u5065\u5eb7\uff0c\u8bf7\u5408\u7406\u63a7\u5236\u6e38\u620f\u65f6\u95f4\u3002</li>"),
      C.push('<li class="copyright_public">'),
      C.push('<a target="_blank" rel="noopener" href="//szcert.ebs.org.cn/6917b6fe-b844-4e12-97c5-85b8d1df30ed" title="\u6df1\u5733\u5e02\u5e02\u573a\u76d1\u7763\u7ba1\u7406\u5c40\u4f01\u4e1a\u4e3b\u4f53\u8eab\u4efd\u516c\u793a"><img src="//game.gtimg.cn/images/js/2018foot/logo/gswj.png" width="15" height="15" alt="\u6df1\u5733\u5e02\u5e02\u573a\u76d1\u7763\u7ba1\u7406\u5c40\u4f01\u4e1a\u4e3b\u4f53\u8eab\u4efd\u516c\u793a">\u5de5\u5546\u7f51\u76d1\u7535\u5b50\u6807\u8bc6 </a>'),
      C.push('<span class="f_line">|</span><a target="_blank" rel="noopener" href="//www.qq.com/culture.shtml">\u7ca4\u7f51\u6587[2023]2882-203\u53f7</a>'),
      C.push('<span class="f_line">|</span><a target="_blank" rel="noopener" href="//game.qq.com/culture2.htm">\uff08\u7f72\uff09\u7f51\u51fa\u8bc1\uff08\u7ca4\uff09\u5b57\u7b2c054\u53f7</a>'),
      C.push("</li>"),
      m.length > 0 && (C.push('<li class="copyright_private">'),
      C.push(m.join('<span class="f_line">|</span>')),
      C.push("</li>")),
      C.push(x.join("")),
      C.push("</ul>"),
      C.push("</div>"),
      C.push(v.join("")),
      C.push("</div>"),
      "createStyleSheet"in document) {
          var D = document.createStyleSheet();
          D.cssText = R.join("")
      } else {
          var S = document.createElement("style");
          S.innerHTML = R.join(""),
          document.getElementsByTagName("head")[0].appendChild(S)
      }
      e("gfooter").innerHTML = C.join("")
  }
  function c(t) {
      var o = e("afooter");
      if (o)
          if ("script" == o.tagName.toLocaleLowerCase()) {
              var n = document.createElement("div");
              n.id = "afooter",
              n.innerHTML = t,
              o.parentNode.insertBefore(n, o),
              o.removeAttribute("id")
          } else
              o.innerHTML = t;
      else {
          n = document.createElement("div");
          n.id = "afooter",
          n.innerHTML = t,
          document.getElementsByTagName("body")[0].appendChild(n)
      }
  }
  function h() {
      var e = [];
      e.push('<div id="footer_ieg">'),
      e.push('<div class="wrap_ieg">'),
      e.push("<p>"),
      e.push('<a href="https://ieg.tencent.com/2023/index.html" target="_blank" rel="noopener">\u817e\u8baf\u4e92\u52a8\u5a31\u4e50</a>'),
      e.push('&nbsp;|&nbsp;<a href="' + n() + '" target="_blank" rel="noopener">\u670d\u52a1\u6761\u6b3e</a>'),
      e.push('&nbsp;|&nbsp;<a href="//game.qq.com/privacy_guide.shtml?ADTAG=gamepcbottom" target="_blank" rel="noopener">\u9690\u79c1\u4fdd\u62a4\u6307\u5f15</a>'),
      e.push('&nbsp;|&nbsp;<a href="//game.qq.com/privacy_guide_children.shtml?ADTAG=gamepcbottom" target="_blank" rel="noopener">\u513f\u7ae5\u9690\u79c1\u4fdd\u62a4\u6307\u5f15</a>'),
      e.push('&nbsp;|&nbsp;<a href="https://careers.tencent.com/" target="_blank" rel="noopener">\u817e\u8baf\u6e38\u620f\u62db\u8058</a>'),
      e.push('&nbsp;|&nbsp;<a href="//kf.qq.com/" target="_blank" rel="noopener">\u817e\u8baf\u6e38\u620f\u5ba2\u670d</a>'),
      e.push('&nbsp;|&nbsp;<a href="//game.qq.com/web201910/introduce.html?ADTAG=gamepcbottom" target="_blank" rel="noopener">\u6e38\u620f\u5217\u8868</a>'),
      e.push('&nbsp;|&nbsp;<a href="https://jiazhang.qq.com/jz/home.html?ADTAG=gamepcbottom" target="_blank" rel="noopener">\u6210\u957f\u5b88\u62a4\u5e73\u53f0</a>'),
      e.push('&nbsp;|&nbsp;<a href="https://www.tencent.com/zh-cn/partnership.html" target="_blank" rel="noopener">\u5e7f\u544a\u670d\u52a1\u53ca\u5546\u52a1\u5408\u4f5c</a>'),
      e.push("</p>"),
      e.push('<p class="e copyright_en">COPYRIGHT &copy; 1998 \u2013 ' + _ + " TENCENT. ALL RIGHTS RESERVED.</p>"),
      e.push('<p class="copyright_zh"><a href="//www.tencent.com/law/mo_law.shtml?/law/copyright.htm" target="_blank" rel="noopener">\u817e\u8baf\u516c\u53f8 \u7248\u6743\u6240\u6709</a></p>'),
      e.push("</div>"),
      e.push("</div>"),
      c(e.join(""))
  }
  function g() {
      var t = "" == location.pathname.split("/m/")[0] ? 1 : 0
        , o = [];
      o.push('<footer class="foot">'),
      o.push('<p class="copyright_en">COPYRIGHT &copy; 1998 - ' + _ + " TENCENT.ALL RIGHTS RESERVED.</p>"),
      o.push('<p class="copyright_zh">\u817e\u8baf\u516c\u53f8 \u7248\u6743\u6240\u6709</p>'),
      (t || e("afooter") && 1 == e("afooter").getAttribute("isOs")) && (o.push('<p class="copyright_public">'),
      o.push('<a target="_blank" rel="noopener" href="//www.qq.com/culture.shtml" style="display:inline">\u7ca4\u7f51\u6587[2023]2882-203\u53f7</a>'),
      o.push('<span style="margin:0 2px;display:inline;">|</span><a style="display:inline" target="_blank" rel="noopener" href="//game.qq.com/culture2.htm">\uff08\u7f72\uff09\u7f51\u51fa\u8bc1\uff08\u7ca4\uff09\u5b57\u7b2c054\u53f7</a>'),
      o.push("</p>")),
      o.push("</footer>"),
      c(o.join(""))
  }
  function m(t) {
      var n = navigator.userAgent;
      if (-1 != n.indexOf("iPhone") || -1 != n.indexOf("iPad") || -1 != n.indexOf("iPod") || -1 != n.indexOf("Android"))
          g();
      else if (e("gfooter")) {
          var i = ""
            , s = !0
            , a = ""
            , l = e("gfooter").getAttribute("v4")
            , r = ""
            , c = e("gfooter").getAttribute("whitelist");
          if (c) {
              try {
                  r = new Function("return " + c + "['hostname']")()
              } catch (e) {
                  console.error("\u60a8\u586b\u5199\u7684whitelist\u7f3a\u5c11hostname\u503c\uff0c\u6216\u8005\u8bf7\u627eyamiediewei\u4e3a\u60a8\u6dfb\u52a0\u65b0\u7684whitelist")
              }
              try {
                  a = new Function("return " + c + "['" + location.hostname + "']")()
              } catch (e) {
                  console.error("\u60a8\u586b\u5199\u7684whitelist\u503c\u6709\u8bef\uff0c\u6216\u8005\u8bf7\u627eyamiediewei\u4e3a\u60a8\u6dfb\u52a0\u65b0\u7684whitelist")
              }
          } else
              r = location.hostname,
              a = e("gfooter").getAttribute("ams");
          if (a && "" != a)
              s = !0,
              i = location.protocol + "//" + r + (location.port ? ":" + location.port : "") + "/webplat/info/news_version3/" + a + "/index.js";
          else if (l && "" != l) {
              s = !1;
              var m = l.split("/");
              if (m.length < 2)
                  console.warn("foot\u7ec4\u4ef6\u63d0\u9192\u60a8\uff1a\u4f60\u7684v4\u5c5e\u6027\u503c:" + l + ";\u914d\u7f6e\u6709\u8bef,\u6b63\u786e\u503c\u7ed3\u6784\u5e94\u8be5\u662f:'\u4e1a\u52a1id/\u6807\u7b7eid'");
              else {
                  var d = m[2] ? m[2] : "web_pc";
                  i = location.protocol + "//apps.game.qq.com/cmc/cross?serviceId=" + m[0] + "&tagids=" + m[1] + "&typeids=1&r1=v4Data&source=" + d
              }
          } else
              c ? console.error("\u60a8\u586b\u5199\u7684whitelist\u503c\u6709\u8bef\uff0c\u83b7\u53d6\u4e0d\u5230\u767d\u540d\u5355\u7684\u503c\uff0c\u8bf7\u627eyamiediewei\u4e3a\u60a8\u6dfb\u52a0\u65b0\u7684whitelist") : console.warn("AMS\u6216\u8005v4\u5c5e\u6027\u672a\u8bbe\u7f6e\uff0c\u4e0d\u80fd\u6b63\u5e38\u663e\u793a\u7248\u6743\u4fe1\u606f");
          o(i, function() {
              p(s, t)
          })
      } else
          h()
  }
  function d(e) {
      this.init()
  }
  var u, f = new Date, _ = f.getFullYear();
  jgyx = {
      hostname: "jgyx.qq.com",
      "naonao.qq.com": "30911/35194/35195/37306/m18350"
  },
  "getElementsByClassName"in document || (document.getElementsByClassName = function(t, o) {
      for (var n = [], i = o ? e(o).getElementsByTagName("*") : document.getElementsByTagName("*"), s = 0, a = i.length; s < a; s++)
          -1 != i[s].className.indexOf(t) && n.push(i[s]);
      return n
  }
  ),
  d.prototype.init = function() {
      this.initDom()
  }
  ,
  d.prototype.initDom = function(e) {
      m(e)
  }
  ,
  d.prototype.addLinks = function(e) {
      setTimeout(function() {
          m(e)
      }, 1e3)
  }
  ,
  o("//game.gtimg.cn/images/js/eas/eas.js"),
  window.console = window.console || (u = {},
  u.log = u.warn = u.debug = u.info = u.error = u.time = u.dir = u.profile = u.clear = u.exception = u.trace = u.assert = function() {}
  ,
  u),
  console.log("\u60a8\u73b0\u5728\u6b63\u5728\u4f7f\u7528\u4e92\u5a31\u901a\u7528foot\u7ec4\u4ef6,\u6587\u6863\u8bf7\u53c2\u9605:https://tgideas.qq.com/foot/"),
  window.GameFooter = d
}
)();
var GameFooter = new window.GameFooter;
