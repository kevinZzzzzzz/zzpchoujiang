var hexcase = 0;
var b64pad = "";
var chrsz = 8;
var g_ams_atm_aid = 0;
function hex_md5(A) {
    return binl2hex(core_md5(str2binl(A), A.length * chrsz))
}
function b64_md5(A) {
    return binl2b64(core_md5(str2binl(A), A.length * chrsz))
}
function hex_hmac_md5(A, B) {
    return binl2hex(core_hmac_md5(A, B))
}
function b64_hmac_md5(A, B) {
    return binl2b64(core_hmac_md5(A, B))
}
function calcMD5(A) {
    return binl2hex(core_md5(str2binl(A), A.length * chrsz))
}
function core_md5(I, G) {
    I[G >> 5] |= 128 << ((G) % 32);
    I[(((G + 64) >>> 9) << 4) + 14] = G;
    var H = 1732584193;
    var F = -271733879;
    var J = -1732584194;
    var K = 271733878;
    for (var C = 0; C < I.length; C += 16) {
        var D = H;
        var E = F;
        var A = J;
        var B = K;
        H = md5_ff(H, F, J, K, I[C + 0], 7, -680876936);
        K = md5_ff(K, H, F, J, I[C + 1], 12, -389564586);
        J = md5_ff(J, K, H, F, I[C + 2], 17, 606105819);
        F = md5_ff(F, J, K, H, I[C + 3], 22, -1044525330);
        H = md5_ff(H, F, J, K, I[C + 4], 7, -176418897);
        K = md5_ff(K, H, F, J, I[C + 5], 12, 1200080426);
        J = md5_ff(J, K, H, F, I[C + 6], 17, -1473231341);
        F = md5_ff(F, J, K, H, I[C + 7], 22, -45705983);
        H = md5_ff(H, F, J, K, I[C + 8], 7, 1770035416);
        K = md5_ff(K, H, F, J, I[C + 9], 12, -1958414417);
        J = md5_ff(J, K, H, F, I[C + 10], 17, -42063);
        F = md5_ff(F, J, K, H, I[C + 11], 22, -1990404162);
        H = md5_ff(H, F, J, K, I[C + 12], 7, 1804603682);
        K = md5_ff(K, H, F, J, I[C + 13], 12, -40341101);
        J = md5_ff(J, K, H, F, I[C + 14], 17, -1502002290);
        F = md5_ff(F, J, K, H, I[C + 15], 22, 1236535329);
        H = md5_gg(H, F, J, K, I[C + 1], 5, -165796510);
        K = md5_gg(K, H, F, J, I[C + 6], 9, -1069501632);
        J = md5_gg(J, K, H, F, I[C + 11], 14, 643717713);
        F = md5_gg(F, J, K, H, I[C + 0], 20, -373897302);
        H = md5_gg(H, F, J, K, I[C + 5], 5, -701558691);
        K = md5_gg(K, H, F, J, I[C + 10], 9, 38016083);
        J = md5_gg(J, K, H, F, I[C + 15], 14, -660478335);
        F = md5_gg(F, J, K, H, I[C + 4], 20, -405537848);
        H = md5_gg(H, F, J, K, I[C + 9], 5, 568446438);
        K = md5_gg(K, H, F, J, I[C + 14], 9, -1019803690);
        J = md5_gg(J, K, H, F, I[C + 3], 14, -187363961);
        F = md5_gg(F, J, K, H, I[C + 8], 20, 1163531501);
        H = md5_gg(H, F, J, K, I[C + 13], 5, -1444681467);
        K = md5_gg(K, H, F, J, I[C + 2], 9, -51403784);
        J = md5_gg(J, K, H, F, I[C + 7], 14, 1735328473);
        F = md5_gg(F, J, K, H, I[C + 12], 20, -1926607734);
        H = md5_hh(H, F, J, K, I[C + 5], 4, -378558);
        K = md5_hh(K, H, F, J, I[C + 8], 11, -2022574463);
        J = md5_hh(J, K, H, F, I[C + 11], 16, 1839030562);
        F = md5_hh(F, J, K, H, I[C + 14], 23, -35309556);
        H = md5_hh(H, F, J, K, I[C + 1], 4, -1530992060);
        K = md5_hh(K, H, F, J, I[C + 4], 11, 1272893353);
        J = md5_hh(J, K, H, F, I[C + 7], 16, -155497632);
        F = md5_hh(F, J, K, H, I[C + 10], 23, -1094730640);
        H = md5_hh(H, F, J, K, I[C + 13], 4, 681279174);
        K = md5_hh(K, H, F, J, I[C + 0], 11, -358537222);
        J = md5_hh(J, K, H, F, I[C + 3], 16, -722521979);
        F = md5_hh(F, J, K, H, I[C + 6], 23, 76029189);
        H = md5_hh(H, F, J, K, I[C + 9], 4, -640364487);
        K = md5_hh(K, H, F, J, I[C + 12], 11, -421815835);
        J = md5_hh(J, K, H, F, I[C + 15], 16, 530742520);
        F = md5_hh(F, J, K, H, I[C + 2], 23, -995338651);
        H = md5_ii(H, F, J, K, I[C + 0], 6, -198630844);
        K = md5_ii(K, H, F, J, I[C + 7], 10, 1126891415);
        J = md5_ii(J, K, H, F, I[C + 14], 15, -1416354905);
        F = md5_ii(F, J, K, H, I[C + 5], 21, -57434055);
        H = md5_ii(H, F, J, K, I[C + 12], 6, 1700485571);
        K = md5_ii(K, H, F, J, I[C + 3], 10, -1894986606);
        J = md5_ii(J, K, H, F, I[C + 10], 15, -1051523);
        F = md5_ii(F, J, K, H, I[C + 1], 21, -2054922799);
        H = md5_ii(H, F, J, K, I[C + 8], 6, 1873313359);
        K = md5_ii(K, H, F, J, I[C + 15], 10, -30611744);
        J = md5_ii(J, K, H, F, I[C + 6], 15, -1560198380);
        F = md5_ii(F, J, K, H, I[C + 13], 21, 1309151649);
        H = md5_ii(H, F, J, K, I[C + 4], 6, -145523070);
        K = md5_ii(K, H, F, J, I[C + 11], 10, -1120210379);
        J = md5_ii(J, K, H, F, I[C + 2], 15, 718787259);
        F = md5_ii(F, J, K, H, I[C + 9], 21, -343485551);
        H = safe_add(H, D);
        F = safe_add(F, E);
        J = safe_add(J, A);
        K = safe_add(K, B)
    }
    return Array(H, F, J, K)
}
function md5_cmn(B, F, C, D, A, E) {
    return safe_add(bit_rol(safe_add(safe_add(F, B), safe_add(D, E)), A), C)
}
function md5_ff(F, C, D, A, E, B, G) {
    return md5_cmn((C & D) | ((~C) & A), F, C, E, B, G)
}
function md5_gg(F, C, D, A, E, B, G) {
    return md5_cmn((C & A) | (D & (~A)), F, C, E, B, G)
}
function md5_hh(F, C, D, A, E, B, G) {
    return md5_cmn(C ^ D ^ A, F, C, E, B, G)
}
function md5_ii(F, C, D, A, E, B, G) {
    return md5_cmn(D ^ (C | (~A)), F, C, E, B, G)
}
function core_hmac_md5(B, G) {
    var F = str2binl(B);
    if (F.length > 16) {
        F = core_md5(F, B.length * chrsz)
    }
    var A = Array(16)
      , D = Array(16);
    for (var C = 0; C < 16; C++) {
        A[C] = F[C] ^ 909522486;
        D[C] = F[C] ^ 1549556828
    }
    var E = core_md5(A.concat(str2binl(G)), 512 + G.length * chrsz);
    return core_md5(D.concat(E), 512 + 128)
}
function safe_add(B, C) {
    var A = (B & 65535) + (C & 65535);
    var D = (B >> 16) + (C >> 16) + (A >> 16);
    return (D << 16) | (A & 65535)
}
function bit_rol(B, A) {
    return (B << A) | (B >>> (32 - A))
}
function str2binl(B) {
    var C = Array();
    var D = (1 << chrsz) - 1;
    for (var A = 0; A < B.length * chrsz; A += chrsz) {
        C[A >> 5] |= (B.charCodeAt(A / chrsz) & D) << (A % 32)
    }
    return C
}
function binl2hex(C) {
    var A = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var D = "";
    for (var B = 0; B < C.length * 4; B++) {
        D += A.charAt((C[B >> 2] >> ((B % 4) * 8 + 4)) & 15) + A.charAt((C[B >> 2] >> ((B % 4) * 8)) & 15)
    }
    return D
}
function binl2b64(B) {
    var C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var D = "";
    for (var A = 0; A < B.length * 4; A += 3) {
        var E = (((B[A >> 2] >> 8 * (A % 4)) & 255) << 16) | (((B[A + 1 >> 2] >> 8 * ((A + 1) % 4)) & 255) << 8) | ((B[A + 2 >> 2] >> 8 * ((A + 2) % 4)) & 255);
        for (var F = 0; F < 4; F++) {
            if (A * 8 + F * 6 > B.length * 32) {
                D += b64pad
            } else {
                D += C.charAt((E >> 6 * (3 - F)) & 63)
            }
        }
    }
    return D
}
function getUrlPara_ATM(C, E) {
    if (typeof (E) == "undefined") {
        E = document.location.href
    }
    var B = new RegExp(C + "=[^&]*","igm");
    var A = E.match(B);
    if (!A) {
        return ""
    }
    var D = A[0];
    from = D.indexOf("=");
    var F = D.substr(from + 1, D.length);
    F = repalceAll_ATM(F, "<", "");
    F = repalceAll_ATM(F, ">", "");
    F = repalceAll_ATM(F, '"', "");
    F = repalceAll_ATM(F, "'", "");
    F = repalceAll_ATM(F, "script", "");
    return F
}
function repalceAll_ATM(C, D, B) {
    var A = new RegExp("&gt;","g");
    C = C.replace(A, ">");
    A = new RegExp("&lt;","g");
    C = C.replace(A, "<");
    A = new RegExp("%3E","g");
    C = C.replace(A, ">");
    A = new RegExp("%3C","g");
    C = C.replace(A, "<");
    A = new RegExp("%28","g");
    C = C.replace(A, "(");
    A = new RegExp("%29","g");
    C = C.replace(A, ")");
    while (C.indexOf(D) !== -1) {
        C = C.replace(D, B)
    }
    return C
}
_ATM_GA = false;
var url_ATM = document.location.href;
var aryUrl = url_ATM.split("?");
var sUrlPath = aryUrl[0];
var wc_ATM = hex_md5(sUrlPath + "wahing");
var sCurUser_atm = getCookie_ATM("p_uin");
if (sCurUser_atm == "" || sCurUser_atm == null) {
    sCurUser_atm = getUrlPara_ATM("openid")
}
if (sCurUser_atm == "" || sCurUser_atm == null) {
    sCurUser_atm = getCookie_ATM("ptui_loginuin")
}
if (sCurUser_atm == "" || sCurUser_atm == null) {
    sCurUser_atm = getCookie_ATM("uin_cookie")
}
if (sCurUser_atm == null) {
    sCurUser_atm = ""
}
if (getCookie_ATM(wc_ATM)) {
    if (getCookie_ATM(wc_ATM) == "1" && sCurUser_atm) {
        setCookie_ATM(wc_ATM, sCurUser_atm, 45)
    } else {
        var _ATM_GA = true
    }
} else {
    var v = sCurUser_atm;
    if (v == "") {
        v = 1
    }
    setCookie_ATM(wc_ATM, v, 45)
}
if (!sCurUser_atm && !getCookie_ATM("ref_ATM") && document.referrer != "") {
    ref_ATM = document.referrer;
    setCookie_ATM("ref_ATM", ref_ATM, 100)
}
urlParameters_ATM = (function(C) {
    var B = C.length;
    for (var A = 0; A < B; A++) {
        me = !!document.querySelector ? C[A].src : C[A].getAttribute("src", 4);
        if (me.substr(me.lastIndexOf("/")).indexOf("/reporting") !== -1) {
            break
        }
    }
    return me.split("?")[1]
}
)(document.getElementsByTagName("script"))/*
 * ��ȡurl����ֵ����
 */
;
GetParameters_ATM = function(C) {
    if (urlParameters_ATM) {
        var E = urlParameters_ATM.split("&"), A = 0, B = E.length, D;
        for (var A = 0; A < B; A++) {
            D = E[A].split("=");
            if (C === D[0]) {
                return D[1]
            }
        }
    }
    return null
}
;
if (typeof _ATM_GA != "undefined") {
    (function() {
        var G = getCookie_ATM("ref_ATM");
        var H = document.location.host;
        if (getCookie_ATM("ref_ATM") != "" && sCurUser_atm) {
            setCookie_ATM("ref_ATM", "", 0)
        }
        if (G == "") {
            G = document.referrer
        }
        var C = document.location.href.split("/")[document.location.href.split("/").length - 2];
        var A = GetParameters_ATM("action");
        var D = getUrlPara_ATM("ADTAG");
        var J = "";
        if (window.ATM_Config && window.ATM_Config.sChannel) {
            J = "&cl=" + window.ATM_Config.sChannel
        }
        var E = "";
        if (window.ATM_Config && window.ATM_Config.type) {
            E = "&source=" + window.ATM_Config.type
        }
        var O = "url=" + encodeURIComponent(url_ATM) + "&domain=" + H + "&referrer=" + escape(G) + "&name=" + C + "&aid=" + A + "&tag=" + D + "&tu=" + sCurUser_atm + J + E;
        var L = getUrlPara_ATM("atm_cl");
        var F = getUrlPara_ATM("atm_pos");
        var N = getUrlPara_ATM("tas_code");
        var I = getUrlPara_ATM("e_code");
        var K = getUrlPara_ATM("g_code");
        var B = getUrlPara_ATM("appid");
        if (L == "null") {
            L = ""
        }
        if (F == "null") {
            F = ""
        }
        if (I == "null" || I == "") {
            I = N
        }
        if (I == "null" || I == "") {
            I = "0"
        }
        if (K == "null" || K == "") {
            K = "0"
        }
        var M = "";
        if (B != "null" && B != "") {
            if (/^wx/ig.test(B)) {
                M = "&wxappid=" + B
            } else {
                M = "&qqappid=" + B
            }
        }
        O += "&atm_cl=" + L + "&atm_pos=" + F + "&e_code=" + I + "&g_code=" + K + M
    }
    )()
}
function setCookie_ATM(A, C, D) {
    var B = new Date();
    B.setTime(B.getTime() + D * 1000);
    document.cookie = A + "=" + C + "; expires=" + B.toGMTString() + "; path=/;"
}
function getCookie_ATM(B) {
    var A;
    A = B + "=";
    offset = document.cookie.indexOf(A);
    if (offset != -1) {
        offset += A.length;
        end = document.cookie.indexOf(";", offset);
        if (end == -1) {
            end = document.cookie.length
        }
        return document.cookie.substring(offset, end)
    } else {
        return ""
    }
}
function atm_rec(M) {
    var K = M.sys;
    var Q = M.cl;
    var P = M.pos;
    var A = M.dtype;
    var E = getCookie_ATM("ref_ATM");
    if (E == "") {
        E = document.referrer
    }
    var O = document.location.host;
    var G = GetParameters_ATM("action");
    var J = getUrlPara_ATM("ADTAG");
    var D = getUrlPara_ATM("openid");
    if (D == null) {
        D = ""
    }
    if (Q == "") {
        if (window.ATM_Config && window.ATM_Config.sChannel) {
            Q = "&cl=" + window.ATM_Config.sChannel
        }
    } else {
        Q = "&cl=" + Q
    }
    var F = getUrlPara_ATM("atm_cl");
    var H = getUrlPara_ATM("atm_pos");
    var N = getUrlPara_ATM("tas_code");
    var L = getUrlPara_ATM("e_code");
    var B = getUrlPara_ATM("g_code");
    if (L == "null" || L == "") {
        L = N
    }
    if (L == "null" || L == "") {
        L = "0"
    }
    if (B == "null" || B == "") {
        B = "0"
    }
    var I = "url=" + encodeURIComponent(url_ATM) + "&domain=" + O + "&referrer=" + E + "&aid=" + G + "&tag=" + J + "&tu=" + D + Q + "&dt=" + A + "&sys=" + K + "&pos=" + P + "&atm_cl=" + F + "&atm_pos=" + H + "&e_code=" + L + "&g_code=" + B;
    var C = new Image();
    C.onload = function() {
        C = null
    }
    ;
    C.onerror = function() {
        C = null
    }
    ;
    if ((G != "" && G != null) || Q != "") {
        C.src = location.protocol + "//apps.game.qq.com/atm/r.php?" + I + "&t=" + (new Date()).getTime()
    }
}
(function(A) {
    var D = [];
    function B() {
        return new Date().toString("yyyy-MM-dd hh:mm:ss")
    }
    function E(H, G) {
        var F = new XMLHttpRequest();
        if ("withCredentials"in F) {
            F.open(H, G, true)
        } else {
            if (typeof XDomainRequest != "undefined") {
                F = new XDomainRequest();
                F.open(H, G)
            } else {
                F = null
            }
        }
        return F
    }
    var C = {
        ua: (A.navigator && navigator.userAgent) || "",
        url: location.protocol + "//apps.game.qq.com/atm/atm_report.php?tms=config&mod=restClient&act=ajax_request",
        level: 1,
        onerrorIsDefined: false,
        browserInfo: null,
        getBrowserInfo: function() {
            if (!C.browserInfo) {
                if (/webkit/.test(this.ua)) {
                    return C.browserInfo = {
                        type: "webkit",
                        version: /webkit[\/ ]([\w.]+)/.exec(this.ua)
                    }
                } else {
                    if (/opera/.test(this.ua)) {
                        return C.browserInfo = {
                            type: "opera",
                            version: /version/.test(this.ua) ? /version[\/ ]([\w.]+)/ : /opera[\/ ]([\w.]+)/
                        }
                    } else {
                        if (/msie/.test(this.ua)) {
                            return C.browserInfo = {
                                type: "msie",
                                version: /msie ([\w.]+)/.exec(this.ua)
                            }
                        } else {
                            if (/Mozilla/.test(this.ua) && !/compatible/.test(this.ua)) {
                                return C.browserInfo = {
                                    type: "ff",
                                    version: /rv:([\w.]+)/.exec(this.ua)
                                }
                            } else {
                                return C.browserInfo = {
                                    type: "no records",
                                    version: this.ua
                                }
                            }
                        }
                    }
                }
            } else {
                return C.browserInfo
            }
        },
        reportErrors: function(F) {
            return;
            if (D.length > 0) {
                var G = E("POST", C.url);
                G.onload = function(H) {}
                ;
                G.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                G.withCredentials = true;
                G.send(F);
                D = []
            }
        },
        logError: function(F, N, K, L) {
            if (typeof F !== "undefined") {
                if (!N) {
                    N = location.href
                }
                var P = window["ams_actdesc"];
                if (window["ams_actdesc"]) {
                    var M = P.iActivityId
                } else {
                    var M = "2696"
                }
                var J = "browserType:" + this.getBrowserInfo().type + ",version:" + this.getBrowserInfo().version + ",time:" + B() + ",line:" + K + ",url:" + N;
                var O = "166";
                var G = F.split(":")[0]
                  , H = null;
                switch (G) {
                case "ReferenceError":
                    H = "10010";
                    break;
                case "SyntaxError":
                    H = "10020";
                    break;
                case "EvalError":
                    H = "10030";
                    break;
                case "RangeError":
                    H = "10040";
                    break;
                case "TypeError":
                    H = "10050";
                    break;
                case "URIError":
                    H = "10060";
                    break;
                default:
                    H = "10000"
                }
                var I = "env=release&data[0][t]=1&data[0][v]=@@|1|2|" + O + "|" + M + "|" + 10000 + "|" + F + "|11111|" + J
            }
        },
        init: function() {
            if (typeof window.onerror == "function") {
                C.onerrorIsDefined = true
            }
            window.onerror = function(H, F, J, I, G) {
                C.logError(H, F, J, I)
            }
        }
    };
    C.init();
    A["amsAtmReport"] = C
}
)(window);
function IsPC() {
    var A = navigator.userAgent;
    var C = new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod");
    var D = true;
    for (var B = 0; B < C.length; B++) {
        if (A.indexOf(C[B]) > 0) {
            D = false;
            break
        }
    }
    return D
}
var FBrowser_atm = new Object();
FBrowser_atm.isIE = ((navigator.userAgent.indexOf("MSIE") == -1) ? false : true);
FBrowser_atm.isIE7 = ((FBrowser_atm.isIE && window.XMLHttpRequest) ? true : false);
FBrowser_atm.isIE6 = ((FBrowser_atm.isIE && !window.XMLHttpRequest && window.ActiveXObject) ? true : false);
FBrowser_atm.isFirefox = ((navigator.userAgent.indexOf("Firefox") == -1) ? false : true);
FBrowser_atm.isOpera = ((navigator.userAgent.indexOf("Opera") == -1) ? false : true);
function FloadJS_atm(C, A, F) {
    if (!IsPC()) {
        return
    }
    var D = location.hostname;
    if (D == "pao.qq.com" || D == "feiji.qq.com" || D == "peng.qq.com" || D == "ttfc.qq.com" || D == "ttxd.qq.com" || D == "qhero.qq.com" || D == "poker.qq.com" || D == "ltzj.qq.com" || D == "cc.qq.com" || D == "ccs.qq.com" || D == "da.qq.com" || D == "hero.qq.com" || D == "pong.qq.com" || D == "mzj.qq.com") {
        return
    }
    D = document.location.host;
    if (D == "pao.qq.com" || D == "feiji.qq.com" || D == "peng.qq.com" || D == "ttfc.qq.com" || D == "ttxd.qq.com" || D == "qhero.qq.com" || D == "poker.qq.com" || D == "ltzj.qq.com" || D == "cc.qq.com" || D == "ccs.qq.com" || D == "da.qq.com" || D == "hero.qq.com" || D == "pong.qq.com" || D == "mzj.qq.com") {
        return
    }
    var B = document.getElementsByTagName("HEAD").item(0);
    var E = document.createElement("script");
    E.type = "text/javascript";
    E.onerror = function() {
        if ("function" == typeof (F)) {
            F()
        }
        E = null
    }
    ;
    if (FBrowser_atm.isIE) {
        E.onreadystatechange = function() {
            if (this.readyState.toLowerCase() != "complete" && this.readyState.toLowerCase() != "loaded") {
                return
            }
            if (this.$funExeced != true && "function" == typeof (A)) {
                this.$funExeced = true;
                B.removeChild(E);
                A()
            }
            E = null
        }
    } else {
        E.onload = function() {
            if ("function" == typeof (A)) {
                A();
                B.removeChild(E)
            }
            E = null
        }
    }
    E.src = C;
    B.appendChild(E);
    if (GetParameters_ATM("action") == "14350") {}
}
function FloadJS_eas(C, A, E) {
    var B = document.getElementsByTagName("HEAD").item(0);
    var D = document.createElement("script");
    D.type = "text/javascript";
    D.onerror = function() {
        if ("function" == typeof (E)) {
            E()
        }
        D = null
    }
    ;
    if (FBrowser_atm.isIE) {
        D.onreadystatechange = function() {
            if (this.readyState.toLowerCase() != "complete" && this.readyState.toLowerCase() != "loaded") {
                return
            }
            if (this.$funExeced != true && "function" == typeof (A)) {
                this.$funExeced = true;
                B.removeChild(D);
                A()
            }
            D = null
        }
    } else {
        D.onload = function() {
            if ("function" == typeof (A)) {
                A();
                B.removeChild(D)
            }
            D = null
        }
    }
    D.src = C;
    B.appendChild(D);
    if (GetParameters_ATM("action") == "14350") {}
}
FloadJS_atm(location.protocol + "//ossweb-img.qq.com/images/clientpop/js/gpmtips.js", f_atm_tmp, f_atm_tmp);
function f_atm_tmp() {}
FloadJS_eas(location.protocol + "//ossweb-img.qq.com/images/js/eas/eas.js", f_atm_tmp, f_atm_tmp);
function isMQQBrowser() {
    if (isWxApp()) {
        return false
    } else {
        return /MQQBrowser/ig.test(navigator.userAgent)
    }
}
function isWxApp() {
    return /MicroMessenger/ig.test(navigator.userAgent)
}
function isQQApp() {
    var E = navigator.userAgent;
    var D = new RegExp("(iPad|iPhone|iPod).*? (IPad)?QQ\\/([\\d\\.]+)");
    var C = new RegExp("\\bV1_AND_SQI?_([\\d\\.]+)(.*? QQ\\/([\\d\\.]+))?","ig");
    var A = D.test(E);
    var B = C.test(E);
    if (A || B) {
        return true
    } else {
        return false
    }
}
;/*  |xGv00|e0716bfd3bfe26920af548114814d676 */
