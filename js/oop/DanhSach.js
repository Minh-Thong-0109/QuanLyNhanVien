function removeAccents(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

function DanhSach() {
  this.arr = [];

  this.themNV = function (nhanVien) {
    this.arr.push(nhanVien);
  };

  this.xoaNV = function (taiKhoan) {
    for (var i = 0; i < this.arr.length; i++) {
      if (this.arr[i].taiKhoan == taiKhoan) {
        this.arr.splice(i, 1);
      }
    }
  };

  this.timViTriNV = function (taiKhoan) {
    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      if (this.arr[i].taiKhoan == taiKhoan) {
        index = i;
        break;
      }
    }
    return index;
  };

  this.layDuLieuNV = function (taiKhoan) {
    var index = this.timViTriNV(taiKhoan);
    if (index != -1) {
      var nhanVien = this.arr[index];
      return nhanVien;
    }
    return null;
  };

  this.timKiemNV = function (keyword) {
    var arrSearch = [];
    for (var i = 0; i < this.arr.length; i++) {
      var nhanVien = this.arr[i];
      if (removeAccents(nhanVien.xepLoai.toLowerCase()).indexOf(removeAccents(keyword.toLowerCase())) != -1) {
        arrSearch.push(nhanVien);
      }
    }
    return arrSearch;
  };

}
