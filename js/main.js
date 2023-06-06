const dsnv = new DanhSachNhanVien();
const validation = new Validation();

function setLocalStorage() {
  localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}
function getLocalStorage() {
  var dataLocal = JSON.parse(localStorage.getItem("DSNV"));
  if (dataLocal !== null) {
    hienThiTable(dataLocal);
    dsnv.mangNV = dataLocal;
  }
}
getLocalStorage();

function themNhanVien() {
  var so = getELE("tknv").value;
  var ten = getELE("name").value;
  var email = getELE("email").value;
  var matKhau = getELE("password").value;
  var ngay = getELE("datepicker").value;
  var luongCB = getELE("luongCB").value;
  var chucVu = getELE("chucvu").value;
  var gio = getELE("gioLam").value;

  var isValid = true;

  isValid &=
    validation.checkEmpty(so, "tbTKNV", "Tài khoản không được để trống") &&
    validation.checkID(so, "tbTKNV", "Tài khoản không được trùng", dsnv.mangNV);

  isValid &=
    validation.checkEmpty(ten, "tbTen", "Tên không được để trống") &&
    validation.checkName(ten, "tbTen", "Tên chỉ được chứa ký tự chữ");

  isValid &=
    validation.checkEmpty(email, "tbEmail", "Email không được để trống") &&
    validation.checkEmail(email, "tbEmail", "Email chưa đúng định dạng");

  isValid &=
    validation.checkEmpty(
      matKhau,
      "tbMatKhau",
      "Mật khẩu không được để trống"
    ) && validation.checkPass(matKhau, "tbMatKhau", "Hãy nhập lại mật khẩu");

  isValid &=
    validation.checkEmpty(ngay, "tbNgay", "Ngày làm không được để trống") &&
    validation.checkDay(ngay, "tbNgay", "Ngày làm chưa đúng định dạng");

  isValid &=
    validation.checkEmpty(luongCB, "tbLuongCB", "Lương không được để trống") &&
    validation.checkLuong(luongCB, "tbLuongCB", "Hãy nhập lại lương");

  isValid &= validation.checkChucVu(chucVu, "tbChucVu", "Chức vụ không hợp lệ");

  isValid &=
    validation.checkEmpty(gio, "tbGiolam", "Giờ làm không được để trống") &&
    validation.checkTime(gio, "tbGiolam", "Hãy nhập lại giờ làm");

  if (isValid) {
    var nv = new NhanVien(so, ten, email, matKhau, ngay, luongCB, chucVu, gio);
    nv.tinhLuong();
    nv.xepLoai();
    dsnv.themNV(nv);

    setLocalStorage();
    hienThiTable(dsnv.mangNV);
  }
}
getELE("btnThemNV").onclick = themNhanVien;

function hienThiTable(mang) {
  var content = "";
  mang.map(function (nv, index) {
    var trNV = `<tr>
      <td>${nv.soTK}</td>
      <td>${nv.tenNV}</td>
      <td>${nv.email}</td>
      <td>${nv.ngayLam}</td>
      <td>${nv.chucVuNV}</td>  
      <td>${nv.tongLuong}</td>
      <td>${nv.xepLoai}</td>
      <td>
        <button class= "btn btn-info" onclick = "xoaNhanVien('${nv.soTK}')">Xoá</button>

        <button class= "btn btn-dark mt-2" onclick= "xemThongTin('${nv.soTK}')" data-toggle="modal"  data-target="#myModal">Xem</button>
      </td>
      </tr>`;
    content += trNV;
  });

  getELE("tableDanhSach").innerHTML = content;
}

function xoaNhanVien(ma) {
  dsnv.xoaNV(ma);
  hienThiTable(dsnv.mangNV);
  setLocalStorage();
}

function getELE(id) {
  return document.getElementById(id);
}

function capNhatNV() {
  var so = getELE("tknv").value;
  var ten = getELE("name").value;
  var email = getELE("email").value;
  var matKhau = getELE("password").value;
  var ngay = getELE("datepicker").value;
  var luongCB = getELE("luongCB").value;
  var chucVu = getELE("chucvu").value;
  var gio = getELE("gioLam").value;

  var isValid = true;

  isValid &=
    validation.checkEmpty(so, "tbTKNV", "Tài khoản không được để trống") &&
    validation.checkID(so, "tbTKNV", "Tài khoản không được trùng", dsnv.mangNV);

  isValid &=
    validation.checkEmpty(ten, "tbTen", "Tên không được để trống") &&
    validation.checkName(ten, "tbTen", "Tên chỉ được chứa ký tự chữ");

  isValid &=
    validation.checkEmpty(email, "tbEmail", "Email không được để trống") &&
    validation.checkEmail(email, "tbEmail", "Email chưa đúng định dạng");

  isValid &=
    validation.checkEmpty(
      matKhau,
      "tbMatKhau",
      "Mật khẩu không được để trống"
    ) && validation.checkPass(matKhau, "tbMatKhau", "Hãy nhập lại mật khẩu");

  isValid &=
    validation.checkEmpty(ngay, "tbNgay", "Ngày làm không được để trống") &&
    validation.checkDay(ngay, "tbNgay", "Ngày làm chưa đúng định dạng");

  isValid &=
    validation.checkEmpty(luongCB, "tbLuongCB", "Lương không được để trống") &&
    validation.checkLuong(luongCB, "tbLuongCB", "Hãy nhập lại lương");

  isValid &= validation.checkChucVu(chucVu, "tbChucVu", "Chức vụ không hợp lệ");

  isValid &=
    validation.checkEmpty(gio, "tbGiolam", "Giờ làm không được để trống") &&
    validation.checkTime(gio, "tbGiolam", "Hãy nhập lại giờ làm");

  if (isValid) {
    var nv = new NhanVien(so, ten, email, matKhau, ngay, luongCB, chucVu, gio);
    nv.tinhLuong();
    nv.xepLoai();

    var result = dsnv.capNhat(nv);
    if (result) {
      setLocalStorage();
      hienThiTable(dsnv.mangNV);
      resetForm();
    } else {
      alert("Cập nhật không thành công!");
    }
  }
}
getELE("btnCapNhat").onclick = capNhatNV;
