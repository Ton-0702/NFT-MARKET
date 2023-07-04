const ValidateSignUp = () => {
  console.log("kasdasd");
  var id_Username = document.getElementById("username");
  //   console.log(id_Username.value);
  var id_EmailAddress = document.getElementById("email_address");
  var id_Password = document.getElementById("password");
  var id_ConfirmPassword = document.getElementById("confirm_password");

  // Thiết lập các biến thông báo lỗi mặc định
  var usernameError = "";
  var emailError = "";
  var passwordError = "";
  var confirmError = "";
  if (id_Username.value == "" || id_Username.value == null) {
    usernameError = "Tên người dùng không được để trống";
    // id_Username.style.display.
    // alert("Tên người dùng không được để trống");
  }
  if (id_EmailAddress.value == "" || id_EmailAddress.value == null) {
    emailError = "Email không được để trống";
  } else {
    // Kiểm tra định dạng email hợp lệ
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(id_EmailAddress.value)) {
      emailError = "Email không hợp lệ";
    }
  }

  if (id_Password.value == "" || id_Password.value == null) {
    passwordError = "Mật khẩu không được để trống";
  }

  if (id_ConfirmPassword.value == "" || id_ConfirmPassword.value == null) {
    confirmError = "Xác nhận mật khẩu không được để trống";
  } else if (id_Password.value != id_ConfirmPassword.value) {
    confirmError = "Mật khẩu xác nhận không khớp";
  }

  // Hiển thị thông báo lỗi nếu có
  if (usernameError || emailError || passwordError || confirmError) {
    alert(`${usernameError}\n${emailError}\n${passwordError}\n${confirmError}`);
  }
};

export default ValidateSignUp;
