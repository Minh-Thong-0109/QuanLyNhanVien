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

  this.kiemtraDinhDangSo = function (value, id, mess) {
    var letter = /^[0-9]$/;
    if (value.match(letter)) {
      getEle(id).innerHTML = "";
      getEle(id).style.display = "none";
      return true;
    }
    getEle(id).innerHTML = mess;
    getEle(id).style.display = "block";
    return false;
  };

  this.kiemtraDinhDangChu = function (value, id, mess) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      getEle(id).innerHTML = "";
      getEle(id).style.display = "none";
      return true;
    }
    getEle(id).innerHTML = mess;
    getEle(id).style.display = "block";
    return false;
  };

  this.kiemtraDinhDangEmail = function (value, id, mess) {
    var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(letter)) {
      getEle(id).innerHTML = "";
      getEle(id).style.display = "none";
      return true;
    }
    getEle(id).innerHTML = mess;
    getEle(id).style.display = "block";
    return false;
  };

  this.kiemtraDinhDangPass = function (value, id, mess) {
    var letter =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
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
    if (value.trim().length >= min && value.length <= max) {
      getEle(id).innerHTML = "";
      getEle(id).style.display = "none";
      return true;
    }
    getEle(id).innerHTML = mess;
    getEle(id).style.display = "block";
    return false;
  };
}
