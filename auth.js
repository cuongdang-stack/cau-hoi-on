(function () {
  // ĐỔI MẬT KHẨU Ở ĐÂY
  const PASSWORD = "nhomCBGS2026";

  // Nếu đã đăng nhập trong phiên này rồi thì cho qua
  if (sessionStorage.getItem("authed") === "1") return;

  const input = prompt("Nhập mật khẩu để vào ứng dụng:");
  if (input === PASSWORD) {
    sessionStorage.setItem("authed", "1");
  } else {
    document.body.innerHTML =
      '<div style="text-align:center;padding:80px;font:16px system-ui;color:#991b1b"><h2>❌ Sai mật khẩu</h2><p>Vui lòng tải lại trang và thử lại.</p></div>';
    throw new Error("Sai mat khau");
  }
})();
