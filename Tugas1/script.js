function kirimInput() {
  var nama = document.getElementById("nama");
  var nim = document.getElementById("nim");
  var kelamin = document.querySelector("input[name='jeniskelamin']:checked");
  var tahun = document.getElementById("tahun");

  var validasiHuruf = /^[a-zA-Z ]+$/;
  var validasiAngka = /^[0-9]+$/;

  //   if (nama.value == "" || !nama.value.match(validasiHuruf)) {
  //     alert("Nama Tidak Boleh Kosong dan Harus Berupa Huruf!");
  //     nama.value = "";
  //   } else if (nim.value == "" || !nim.value.match(validasiAngka)) {
  //     alert("NIM Tidak Boleh Kosong dan Harus Berupa Angka!");
  //     nim.value = "";
  //   } else if (!kelamin) {
  //     alert("Jenis kelamin tidak boleh kosong");
  //   } else if (tahun.value == "" || !tahun.value.match(validasiAngka)) {
  //     alert("Tahun Masuk Tidak Boleh Kosong dan Harus Berupa Angka!");
  //     tahun.value = "";
  //   } else {
  //     print(nama.value, nim.value, kelamin.value, tahun.value);
  //     console.log(nama.value, nim.value, kelamin.value, tahun.value);
  //   }

  if (nama.value.match(validasiHuruf)) {
    if (nim.value.match(validasiAngka)) {
      if (!kelamin) {
        alert("Anda Harus memilih jenis kelamin");
      } else {
        if (tahun.value.match(validasiAngka)) {
          print(nama.value, nim.value, kelamin.value, tahun.value);
        } else {
          alert("Masukkan Tahun Anda Salah!\nFormat wajib Angka!");
          tahun.value = "";
          tahun.focus();
          return false;
        }
      }
    } else {
      alert("Masukkan Nim Anda Salah!\nFormat wajib Angka!");
      nim.value = "";
      nim.focus();
      return false;
    }
  } else {
    alert("Masukkan nama Anda Salah!\nFormat wajib Huruf!");
    nama.value = "";
    nama.focus();
    return false;
  }
}

function print(nama, nim, kelamin, tahun_masuk) {
  var popupWindow = window.open("tugas1_2.html", "", "width=640, height=480");

  popupWindow.addEventListener("load", function () {
    var thnSkrng = new Date();
    var tahun = thnSkrng.getFullYear();
    var semester = (tahun - tahun_masuk) * 2;

    var hasil =
      "Nama Anda: <b>" +
      nama +
      "</b>" +
      "<br>NIM anda: <b>" +
      nim +
      "</b>," +
      "<br>Jenis Kelamin anda: <b>" +
      kelamin +
      "</b>" +
      "<br>tahun masuk anda: <b>" +
      tahun_masuk +
      "</b>" +
      "<br>dan anda berarti sekarang" +
      "<br>semester: <b>" +
      semester +
      "</b>";

    popupWindow.postMessage(hasil, "*");
  });
}
