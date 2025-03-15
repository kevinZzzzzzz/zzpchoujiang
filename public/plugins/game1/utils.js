// +----------------------------------------------------------------------
// | 接口定义
// +----------------------------------------------------------------------
console.log("isDev", window.isDev);
const loginApi = window.isDev ? "/api/user/login" : "/user/login"; // 用户登录
const logoutApi = window.isDev ? "/api/user/logout" : "/user/logout"; // 退出登录
const bindAreaApi = window.isDev ? "/api/user/bindArea" : "/user/bindArea"; // 绑定大区
const getServerOptionsApi = window.isDev ? "/api/user/getServerOptions" : "/user/getServerOptions"; // 根据大区获取服务器下拉选项
const getNicknameByAreaApi = window.isDev ? "/api/user/getNicknameByArea" : "/user/getNicknameByArea"; // 根据大区和服务器获取角色昵称

const apiUrl = window.location.origin;
// 进入立即检测用户状态
// 如果没有登录就显示登录窗口，如果已登录但是没绑定大区，显示绑定大区窗口
// isLogin() ? isRole() || showRegionDialog() : showLoginDialog();
!isLogin() && showLoginDialog();

// +----------------------------------------------------------------------
// | 加载动画
// +----------------------------------------------------------------------

/**
 * 显示加载动画
 */
function showLoading() {
  return layer.load(2, {
    shade: [0.5, "#000"],
    shadeClose: false,
    mask: true,
    content: '<span class="loadtip">数据读取中</span>',
    success: function (layer) {
      layer.find(".layui-layer-content").css({
        width: "100px",
        "padding-top": "40px",
      });
      layer.find(".loadtip").css({
        color: "#fff",
        "font-size": "13px",
        "margin-left": "-18px",
      });
      layer.find("body").css({
        "pointer-events": "none",
      });
    },
  });
}

/**
 * 关闭加载动画
 */
function hideLoading(index) {
  layer.close(index);
}

// +----------------------------------------------------------------------
// | 文字上下无缝滚动(用于获奖名单)
// +----------------------------------------------------------------------

let slidesIndex = 0;
/**
 * 文字上下无缝滚动
 * @param element jq选择器语法
 * @param speed 滚动速度,值越大滚动速度越快
 */
function slides(element, speed = 2.5, clear = true, isStyle = true) {
  // 如果元素不存在，则直接退出方法
  if ($(element).length == 0) return false;
  let offset = 0;
  if (isStyle) {
    $(element).css("position", "absolute");
    $(element).parent().css({
      overflow: "hidden",
      position: "relative",
    });
  }
  if (clear && slidesIndex) clearInterval(slidesIndex);
  slidesIndex = setInterval(() => {
    const height = $(element).height();
    offset -= speed / 10;
    if (Math.abs(offset) >= height) {
      offset = $(element).parent().height();
    }
    $(element).css("top", offset + "px");
  }, 10);
}

// +----------------------------------------------------------------------
// | 封装网络请求
// +----------------------------------------------------------------------

function request(api, type = "get", data = {}, isShowLoading = true) {
  const index = isShowLoading ? showLoading() : "";
  return new Promise((resolve, reject) => {
    $.ajaxs({
      url: apiUrl + api,
      type,
      headers: {
        "Content-Type": "application/json",
      },
      data: data ? JSON.stringify(data) : null,
      success(res) {
        // 登录状态过期时刷新页面
        if (res.code == 403) {
          setTimeout(() => location.reload(), 5000);
        }
        resolve(res);
      },
      error(err) {
        const {responseJSON} = err
        if (responseJSON.code + '' == '401') {
          alert(responseJSON.msg, () => {
            sessionStorage.removeItem('isLogin')
            sessionStorage.removeItem('login')
            checkUserStatus()
          });
        }
      },
      complete() {
        isShowLoading ? hideLoading(index) : "";
      },
    });
  });
}

// +----------------------------------------------------------------------
// | 登录相关
// +----------------------------------------------------------------------

// 显示登录窗口
function showLoginDialog() {
  $(".y-dialog").height($("body").height());
  $(".login-dialog").show();
}
// 隐藏登录窗口
function hideLoginDialog() {
  $(".login-dialog").hide();
  $(".y-login-account").val("");
  $(".y-login-password").val("");
  hideLoginErrorTips();
}
// 显示登录窗口错误信息
function showLoginErrorTips(msg) {
  $(".y-login-error").css("visibility", "visible");
  $(".y-login-error-message").text(msg);
}
// 隐藏登录窗口错误信息
function hideLoginErrorTips() {
  $(".y-login-error").css("visibility", "hidden");
}
// 账号或密码的值发生变化时隐藏错误提示
$(".y-login-account,.y-login-password").on("input", function () {
  hideLoginErrorTips();
});
/**
 * 获取绑定大区状态 true|false 已绑定|未绑定
 */
function isRole() {
  // return parseInt($("input[name='is_role']").val()) > 0;
  return true
}
/**
 * 获取登录状态 true|false 已登录|未登录
 */
function isLogin() {
    const roleMap = {
        0: '管理员',
        1: '普通用户',
        2: '普通会员',
        3: '超级会员',
    }
  if (+sessionStorage.getItem("isLogin")) {
    const loginInfo = JSON.parse(sessionStorage.getItem("login"));
    loginInfo.qqGameName && $('#userinfo').text(`${loginInfo.qq ? loginInfo.qq : ''} ${loginInfo.qqGameArea ? loginInfo.qqGameArea : ''} ${loginInfo.qqGameName}`)
    // loginInfo.qqGameArea && $('#area_info').text(loginInfo.qqGameArea)
    if (loginInfo.qqGameArea) {
        // loginInfo.qqGameArea && $('#area_info').text(loginInfo.qqGameArea)
        $('#spanNotBind').hide()
    }
    //  else {
    //     $('#spanNotBind').show()
    // }
    // $('#role_info').text(roleMap[loginInfo.type])

    $('#spanBind').show();
    $('#unlogin').hide();
    $('#logined').show();
    return true
  }
  $('#unlogin').show();
  $('#logined').hide();
  return false;
}

/**
 * 第一步: 检测是否登录，未登录会显示登录窗口
 * 第二步: 检测是否绑定大区，没有绑定大区会提示绑定
 *
 * @return true|false 已登录|未登录
 * @return true|false 已登录|未登录
 */
function checkUserStatus() {
  // 使用示例
  // 检测用户状态
  // if (!checkUserStatus()) return false;

  // 如果未登录，显示登录窗口
  if (!isLogin()) {
    showLoginDialog();
    return false;
  }
  // 如果没有绑定大区，提示用户绑定
  // if (!isRole()) {
  //   alert("亲亲，请先绑定大区再来操作嗷~");
  //   return false;
  // }
  // 检测通过
  return true;
}

// 发送登录请求
function login() {
  const account = $(".y-login-account").val();
  const password = $(".y-login-password").val();
  if (account === "") {
    return showLoginErrorTips("你还没有输入账号！");
  }
  if (password === "") {
    return showLoginErrorTips("你还没有输入密码！");
  }
  request(loginApi, "post", {
    mobileNumber: account,
    password,
    loginType: 1,
  }).then((res) => {
    if (+res.code == 200) {
      $("input[name='is_login']").val(1);
      sessionStorage.setItem("login", JSON.stringify(res.data));
      sessionStorage.setItem("isLogin", 1)
      location.reload()
    } else {
      return showLoginErrorTips(res.msg);
      // return showLoginErrorTips('登录失败，账号或密码错误！');
    }
  });
}
// 退出登录
function logout() {
  request(logoutApi,'post', null).then((res) => {
    if (res.code == 200) {
      alert("退出成功，将在2秒后自动刷新页面");
      sessionStorage.setItem("login", null);
      sessionStorage.setItem("isLogin", null)
      setTimeout(() => location.reload(), 2000);
    }
  });
}

// +----------------------------------------------------------------------
// | 绑定大区
// +----------------------------------------------------------------------

// 显示绑定大区窗口
function showRegionDialog() {
  $(".region-dialog").show();
}
// 隐藏绑定大区窗口
function hideRegionDialog() {
  // 隐藏窗口
  $(".region-dialog").hide();
  // 清空数据
  $(".y-region-prov").val("");
  $(".y-region-area").val("");
  $(".y-region-nickname").val("");
  $(".y-region-agree input").prop("checked", false);
}
// 显示绑定大区错误信息
function showRegionErrorTips(msg) {
  $(".y-region-error").css("visibility", "visible").text(msg);
}
// 隐藏绑定大区错误信息
function hideRegionErrorTips() {
  $(".y-region-error").css("visibility", "hidden");
}

// 监听绑定大区弹窗中的复选框(是否同意按钮)
$(".y-region-agree input").change(function () {
  const checked = $(this).prop("checked");
  // 取消选择大区、选择服务器、角色昵称的禁用
  $(".y-region-prov").prop("disabled", !checked);
  $(".y-region-area").prop("disabled", !checked);
  $(".y-region-nickname").prop("disabled", !checked);
  // 错误信息显示控制
  checked ? hideRegionErrorTips() : showRegionErrorTips("请勾选上方授权信息");
});
// 监听选择大区改变事件
$(".y-region-prov").change(function () {
  // 隐藏错误信息标签
  hideRegionErrorTips();
  // 将角色昵称、选择服务器清空
  $(".y-region-nickname").val("");
  $(".y-region-area").html('<option value="">请选择服务器</option>');
  // 发送接口请求
  const pid = $(this).val();
  request(getServerOptionsApi, "get", { pid }, false).then((res) => {
    if (res.code != 200) return false;
    let options = "";
    res.data.forEach((item) => {
      options += `<option value="${item.id}">${item.name}</option>`;
    });
    $(".y-region-area").append(options);
  });
});
// 监听选择服务器改变事件
$(".y-region-area").change(function () {
  // 隐藏错误信息标签、将选择服务器清空
  hideRegionErrorTips();
  $(".y-region-nickname").val("");
  // 请求参数
  const data = {
    pid: $(".y-region-prov").val(),
    aid: $(".y-region-area").val(),
  };
  // 根据大区和服务器获取角色昵称
  request(getNicknameByAreaApi, "get", data, false).then((res) => {
    if (res.code == 200) $(".y-region-nickname").val(res.data.name);
  });
});
// 监听角色昵称输入框，当值发生变化时隐藏错误提示
$(".y-region-nickname").on("change", function () {
  hideRegionErrorTips();
});
// 发送绑定大区请求
function bindRegion() {
  if (!$(".y-region-agree input").prop("checked")) {
    return showRegionErrorTips("请勾选上方授权信息");
  }
  if (!$(".y-region-prov").val()) {
    return showRegionErrorTips("请选择大区");
  }
  if (!$(".y-region-area").val()) {
    return showRegionErrorTips("请选择服务器");
  }
  if (!$(".y-region-nickname").val()) {
    return showRegionErrorTips("请输入角色昵称");
  }
  hideRegionErrorTips();
  // 请求参数
  const data = {
    pid: $(".y-region-prov").val(),
    aid: $(".y-region-area").val(),
    nickname: $(".y-region-nickname").val(),
  };
  // 发送绑定大区请求
  request(bindAreaApi, "post", data).then((res) => {
    if (res.code == 200) {
      hideRegionDialog();
      alert("绑定成功，将在 2 秒后自动刷新页面");
      setTimeout(() => location.reload(), 2000);
    } else {
      alert(res.msg);
    }
  });
}

// +----------------------------------------------------------------------
// | 检测设备
// +----------------------------------------------------------------------

/**
 * 检测当前是否环境是否为移动端
 * @returns true|false 移动端|网页端
 */
function isMobile() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }
  // var sUserAgent = navigator.userAgent.toLowerCase();
  // var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  // var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  // var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  // var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  // var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  // var bIsAndroid = sUserAgent.match(/android/i) == "android";
  // var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  // var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  // return bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM;
}
