function NhanVien(so, ten, email, matKhau, ngay, luongCB, chucVu, gio) {
    //thuộc tính
    this.soTK = so;
    this.tenNV = ten;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngay;
    this.luongCB = luongCB;
    this.chucVuNV = chucVu;
    this.tongLuong = 0;
    this.gioLam = gio;
    this.xepLoai = "";
    //phương thức
    this.tinhLuong = function () {
      this.tongLuong = 0;
      if (this.chucVuNV == "Sếp") {
        this.tongLuong = this.luongCB * 3;
      } else if (this.chucVuNV == "Trưởng phòng") {
        this.tongLuong = this.luongCB * 2;
      } else {
        this.tongLuong = this.luongCB;
      }
    };
    this.xepLoai = function () {
      if (this.gioLam >= 192) {
        this.xepLoai = "Xuất sắc";
      } else if (176<= this.gioLam && this.gioLam < 192) {
        this.xepLoai = "Giỏi";
      } else if (160<= this.gioLam && this.gioLam < 176) {
        this.xepLoai = "Khá";
      } else {
        this.xepLoai = "Trung bình";
      }
    };
  }
  