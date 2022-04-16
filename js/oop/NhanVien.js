function NhanVien (_taiKhoan, _tenNV, _email, _matKhau, _ngayLam, _luongCB, _chucVu, _gioLam) {
    this.taiKhoan = _taiKhoan;
    this.tenNV = _tenNV;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCB = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";

    this.tongLuong = function () {
        var heSo = 0;
        if (this.chucVu == "Nhân viên") {
            heSo = 1;
        }   else if (this.chucVu == "Trưởng phòng") {
            heSo = 2;
        }   else if (this.chucVu == "Sếp") {
            heSo = 3;
        }
        this.tongLuong = parseFloat(this.luongCB) * heSo;
    }

    this.xepLoai = function () {
        if (this.gioLam >= 192) {
            this.xepLoai = "Nhân viên Xuất sắc";
    } else if(this.gioLam >= 176) {
        this.xepLoai = "Nhân viên Giỏi";
    } else if(this.gioLam >= 160) {
        this.xepLoai = "Nhân viên Khá";
    } else{
        this.xepLoai = "Nhân viên Trung bình";
    }
}

}