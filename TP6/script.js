function formValidasi() {
  var nim = document.getElementById("nim").value;
  var nama = document.getElementById("nama").value;
  var jk = document.querySelector("input[name='jns_kelamin']:checked");
  var thMasuk = document.getElementById("thMasuk").value;
  var validasiAngka = /^[0-9]+$/;
  var validasiHuruf = /^[a-zA-Z ]+$/;

  if (nim == "" || !nim.match(validasiAngka)) {
    alert("NIM Tidak Boleh Kosong dan Harus Berupa Angka!");
    document.getElementById("nim").value = "";
    document.getElementById("nim").focus();
  } else if (nama == "" || !nama.match(validasiHuruf)) {
    alert("Nama Tidak Boleh Kosong dan Harus Berupa Huruf!");
    document.getElementById("nama").value = "";
  } else if (!jk) {
    alert("Jenis Kelamin Tidak Boleh Kosong!");
  } else if (thMasuk == "" || !thMasuk.match(validasiAngka)) {
    alert("Tahun Masuk Tidak Boleh Kosong dan Harus Berupa Angka!");
    document.getElementById("thMasuk").value = "";
  } else {
    console.log(nim + nama + jk.value + thMasuk);
    tampilkan(nim, nama, jk.value, thMasuk);
  }
}

function tampilkan(nim, nama, jk, thMasuk) {
  var popupWindow = window.open("popup.html", "", "width=640, height=480");
  
  popupWindow.addEventListener("load", function () {
    var thnSkrng = new Date();
    var tahun = thnSkrng.getFullYear();
    var semester = (tahun - thMasuk) * 2;

    var result =
      "Nim Anda : " +
      nim +
      ",<br> Nama Anda: " +
      nama +
      ",<br>Jenis Kelamin Anda: " +
      jk +
      ",<br><br> Tahun Masuk:" +
      thMasuk +
      "<br> dan Anda berarti sekarang semester: " +
      semester;

    popupWindow.postMessage(result, "*");
  });
}

//   if (document.forms["formDataMhs"]["nama"].value == "") {
//     alert("Nama Tidak Boleh Kosong!");
//     document.forms["formDataMhs"]["nama"].focus();
//     return false;
//   }
//   if (document.forms["formDataMhs"]["tahunMasuk"].value == "") {
//     alert("Tahun Masuk Tidak Boleh Kosong!");
//     document.forms["formDataMhs"]["tahunMasuk"].focus();
//     return false;
//   }

//   document.write("NIM Anda: " + nim.value);
//   document.write("Nama Anda: " + nama.value);
//   document.write("Jenis Kelamin Anda: " + jk.value);
//   document.write("Tahun Masuk Anda: " + thMasuk.value);
