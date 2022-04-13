function getEle(id) {
  return document.getElementById(id);
}

var dsNV = new DanhSach();
var validation = new Validation();
getLocalStorage();
getEle("btnCapNhat").disabled = true;
getEle("btnThemNV").disabled = false;

function layThongtinNV() {
  var isValid = true;
  var _taiKhoan = getEle("tknv").value;
  var _tenNV = getEle("name").value;
  var _email = getEle("email").value;
  var _matKhau = getEle("password").value;
  var _ngayLam = getEle("datepicker").value;
  var _luongCB = getEle("luongCB").value * 1;
  var _chucVu = getEle("chucvu").value;
  var _gioLam = getEle("gioLam").value * 1;
  console.log(
    _taiKhoan,
    _tenNV,
    _email,
    _matKhau,
    _ngayLam,
    _luongCB,
    _chucVu,
    _gioLam
  );

  isValid &=
    validation.kiemtraRong(
      _taiKhoan,
      "tbTKNV",
      "",
      "Tài khoản không được để trống"
    ) &&
    validation.kiemtraDinhDangSo(
      _taiKhoan,
      "tbTKNV",
      "Tài khoản phải là một chuổi ký số"
    ) &&
    validation.kiemtraDoDai(
      _taiKhoan,
      "tbTKNV",
      4,
      6,
      "Tài khoản phải có độ dài từ 4 đến 6 ký tự"
    );

  isValid &=
    validation.kiemtraRong(
      _tenNV,
      "tbTen",
      "",
      "Tên nhân viên không được để trống"
    ) &&
    validation.kiemtraDinhDangChu(
      _tenNV,
      "tbTen",
      "Tên nhân viên phải là một chuổi ký tự chữ"
    );

  isValid &=
    validation.kiemtraRong(
      _email,
      "tbEmail",
      "",
      "Email không được để trống"
    ) &&
    validation.kiemtraDinhDangEmail(
      _email,
      "tbEmail",
      "Email không đúng định dạng"
    );

  isValid &=
    validation.kiemtraRong(
      _matKhau,
      "tbMatKhau",
      "",
      "Mật khẩu không được để trống"
    ) &&
    validation.kiemtraDinhDangPass(
      _matKhau,
      "tbMatKhau",
      "Mật khẩu phải là một chuổi ký tự bao gồm chữ Hoa, chữ thường, số và ký tự đặc biệt"
    ) &&
    validation.kiemtraDoDai(
      _matKhau,
      "tbMatKhau",
      6,
      10,
      "Mật khẩu phải có độ dài từ 6 đến 10 ký tự"
    );

  isValid &= validation.kiemtraRong(
    _ngayLam,
    "tbNgay",
    "",
    "Ngày làm không được để trống"
  );

  isValid &=
    validation.kiemtraRong(
      _luongCB,
      "tbLuongCB",
      0,
      "Lương cơ bản không được để trống"
    ) &&
    validation.kiemtraDinhDangSo(
      _luongCB,
      "tbLuongCB",
      "Lương cơ bản phải là một chuổi số"
    ) &&
    validation.kiemtraDoDai(
      _luongCB,
      "tbLuongCB",
      1000000,
      20000000,
      "Lương cơ bản phải nằm trong khoảng từ 1,000,000 đến 20,000,000"
    );

  isValid &= validation.kiemtraRong(
    _chucVu,
    "tbChucVu",
    "Chọn chức vụ",
    "Vui lòng chọn chức vụ phù hợp"
  );

  isValid &=
    validation.kiemtraDinhDangSo(
      _gioLam,
      "tbGiolam",
      "Giờ làm phải là một chuổi số"
    ) &&
    validation.kiemtraDoDai(
      _gioLam,
      "tbGiolam",
      80,
      200,
      "Giờ làm phải nằm trong khoảng từ 80 đến 200"
    );
  if (isValid) {
    var nhanVien = new NhanVien(
      _taiKhoan,
      _tenNV,
      _email,
      _matKhau,
      _ngayLam,
      _luongCB,
      _chucVu,
      _gioLam
    );
    nhanVien.tongLuong();
    nhanVien.xepLoai();
    return nhanVien;
  }
}

function lamTrong() {
  getEle("tknv").value = "";
  getEle("tknv").disabled = false;
  getEle("tbTKNV").style.display = "none";
  getEle("name").value = "";
  getEle("tbTen").style.display = "none";
  getEle("email").value = "";
  getEle("tbEmail").style.display = "none";
  getEle("password").value = "";
  getEle("tbMatKhau").style.display = "none";
  getEle("datepicker").value = "";
  getEle("tbNgay").style.display = "none";
  getEle("luongCB").value = "";
  getEle("tbLuongCB").style.display = "none";
  getEle("chucvu").value = "Chọn chức vụ";
  getEle("tbChucVu").style.display = "none";
  getEle("gioLam").value = "";
  getEle("tbGiolam").style.display = "none";
}

function taoBang(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var nv = arr[i];
    content += `<tr>
    <td>${nv.taiKhoan}</td>
    <td>${nv.tenNV}</td>
    <td>${nv.email}</td>
    <td>${nv.ngayLam}</td>
    <td>${nv.chucVu}</td>
    <td>${nv.tongLuong}</td>
    <td>${nv.xepLoai}</td>
    <td><button class="btn btn-danger" style="margin-bottom: 5px" onclick="xoaNV('${nv.taiKhoan}')">Xóa</button>
    <button class="btn btn-success" data-toggle="modal"
    data-target="#myModal" style="margin-top: 5px" onclick="suaNV('${nv.taiKhoan}')">Sửa</button></td>
    </tr>`;
  }
  getEle("tableDanhSach").innerHTML = content;
}

function setLocalStorage() {
  localStorage.setItem("DSNV", JSON.stringify(dsNV.arr));
}

function getLocalStorage() {
  var arr = JSON.parse(localStorage.getItem("DSNV"));
  if (arr == null) {
    dsNV.arr = [];
  } else {
    dsNV.arr = arr;
    taoBang(dsNV.arr);
  }
}

getEle("btnThemNV").onclick = function () {
  getEle("btnCapNhat").disabled = true;
  getEle("btnThemNV").disabled = false;
  var nhanVien = layThongtinNV();
  if (nhanVien != null) {
    dsNV.themNV(nhanVien);
    taoBang(dsNV.arr);
    setLocalStorage();
    lamTrong();
  }
};

getEle("btnDong").onclick = function () {
  lamTrong();
  getEle("btnCapNhat").disabled = true;
  getEle("btnThemNV").disabled = false;
};

function xoaNV(taiKhoan) {
  dsNV.xoaNV(taiKhoan);
  taoBang(dsNV.arr);
  setLocalStorage();
}

function suaNV(taiKhoan) {
  getEle("btnCapNhat").disabled = false;
  getEle("btnThemNV").disabled = true;
  var nhanVien = dsNV.layDuLieuNV(taiKhoan);
  var index = dsNV.arr.indexOf(nhanVien);
  getEle("tknv").value = nhanVien.taiKhoan;
  getEle("tknv").disabled = true;
  getEle("name").value = nhanVien.tenNV;
  getEle("email").value = nhanVien.email;
  getEle("password").value = nhanVien.matKhau;
  getEle("datepicker").value = nhanVien.ngayLam;
  getEle("luongCB").value = nhanVien.luongCB;
  getEle("chucvu").value = nhanVien.chucVu;
  getEle("gioLam").value = nhanVien.gioLam;
  getEle("btnCapNhat").onclick = function () {
    var nhanVien = layThongtinNV();
    dsNV.arr.fill(nhanVien, index, index + 1);
    taoBang(dsNV.arr);
    setLocalStorage();
    lamTrong();
  };
}

getEle("searchName").onkeyup = function () {
  var keyword = getEle("searchName").value;
  var arrSearch = dsNV.timKiemNV(keyword);
  taoBang(arrSearch);
};
