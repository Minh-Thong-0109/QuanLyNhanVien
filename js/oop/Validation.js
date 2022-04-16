function getEle(id) {
  return document.getElementById(id);
}

function Validation() {
  this.kiemtraRong = function (value, id, condition, mess) {
    if (value == condition) {
      getEle(id).innerHTML = mess;
      getEle(id).style.display = "block";
      return false;
    }
    getEle(id).innerHTML = "";
    getEle(id).style.display = "none";
    return true;
  };

  this.kiemtraDinhDang = function (value, format, id, mess) {
    var letter = "";
    if (format == "number") {
      letter = /^[0-9]+$/;
    } else if (format == "string") {
      letter =
        "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    } else if (format == "email") {
      letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    } else if (format == "password") {
      letter =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    }
    if (value.match(letter)) {
      getEle(id).innerHTML = "";
      getEle(id).style.display = "none";
      return true;
    }
    getEle(id).innerHTML = mess;
    getEle(id).style.display = "block";
    return false;
  };

  this.kiemtraDoDai = function (value, id, min, max, mess) {
    if (value.trim().length >= min && value.trim().length <= max) {
      getEle(id).innerHTML = "";
      getEle(id).style.display = "none";
      return true;
    }
    getEle(id).innerHTML = mess;
    getEle(id).style.display = "block";
    return false;
  };

  this.kiemtraGioiHan = function (value, id, min, max, mess) {
    if (value >= min && value <= max) {
      getEle(id).innerHTML = "";
      getEle(id).style.display = "none";
      return true;
    }
    getEle(id).innerHTML = mess;
    getEle(id).style.display = "block";
    return false;
  };

  this.kiemtraTrung = function (value, divId, mess, arr, statusCapNhat) {
    if (statusCapNhat == true) {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.display = "block";
      return true;
    }
    var status = false;
    for (var i = 0; i < arr.length; i++) {
      var nhanVien = arr[i];
      if (nhanVien.taiKhoan === value) {
        status = true;
        break;
      }
    }
    if (status) {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.display = "block";
      return false;
    }
  };
}
