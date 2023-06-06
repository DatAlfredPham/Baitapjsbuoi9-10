function getELE(id) {
    return document.getElementById(id);
  }
  
  function Validation() {
    this.checkEmpty = function (value, spanID, message) {
      if (value === "") {
        getELE(spanID).innerHTML = message;
        getELE(spanID).style.display = "block";
        return false;
      }
      getELE(spanID).innerHTML = "";
      getELE(spanID).style.display = "none";
      return true;
    };
    this.checkID = function (value, spanID, message, mangNV) {
      var isExist = mangNV.some(function (nv, index) {
        return nv.soTK === value;
      });
  
      if (isExist) {
        getELE(spanID).innerHTML = message;
        getELE(spanID).style.display = "block";
        return false;
      }
      getELE(spanID).innerHTML = "";
      getELE(spanID).style.display = "none";
      return true;
    };
    this.checkName = function (value, spanID, message) {
      var pattern =
        /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
  
      if (value.match(pattern)) {
        getELE(spanID).innerHTML = "";
        getELE(spanID).style.display = "none";
        return true;
      }
      getELE(spanID).innerHTML = message;
      getELE(spanID).style.display = "block";
      return false;
    };
    this.checkEmail = function (value, spanID, message) {
      var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
      if (value.match(pattern)) {
        getELE(spanID).innerHTML = "";
        getELE(spanID).style.display = "none";
        return true;
      }
      getELE(spanID).innerHTML = message;
      getELE(spanID).style.display = "block";
      return false;
    };
    this.checkPass = function (value, spanID, message) {
      var pattern =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
  
      if (value.match(pattern)) {
        getELE(spanID).innerHTML = "";
        getELE(spanID).style.display = "none";
        return true;
      }
      getELE(spanID).innerHTML = message;
      getELE(spanID).style.display = "block";
      return false;
    };
    this.checkDay = function (value, spanID, message) {
      var pattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
  
      if (value.match(pattern)) {
        getELE(spanID).innerHTML = "";
        getELE(spanID).style.display = "none";
        return true;
      }
      getELE(spanID).innerHTML = message;
      getELE(spanID).style.display = "block";
      return false;
    };
    this.checkLuong = function (value, spanID, message) {
      if (value < 1e6 || value > 20e6) {
        getELE(spanID).innerHTML = message;
        getELE(spanID).style.display = "block";
        return false;
      }
      getELE(spanID).innerHTML = "";
      getELE(spanID).style.display = "none";
      return true;
    };
  
    this.checkChucVu = function (value, spanID, message) {
      if (value == "Chọn chức vụ") {
        getELE(spanID).innerHTML = message;
        getELE(spanID).style.display = "block";
        return false;
      }
      getELE(spanID).innerHTML = "";
      getELE(spanID).style.display = "none";
      return true;
    };
    this.checkTime = function (value, spanID, message) {
      if (value < 80 || value > 200) {
        getELE(spanID).innerHTML = message;
        getELE(spanID).style.display = "block";
        return false;
      }
      getELE(spanID).innerHTML = "";
      getELE(spanID).style.display = "none";
      return true;
    };
  }
  