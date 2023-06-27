// function submit() {
//   class Mahasiswa {
//     constructor(this.nim, this.name, this.sex, this.year) {
//       this.this.nim = this.nim;
//       this.this.name = this.name;
//       this.this.sex = this.sex;
//       this.this.year = this.year;
//     }
//     getMahasiswaInfo(present_this.year) {
//       console.log(present_this.year, this.this.year);
//       let semester = (present_this.year - this.this.year) * 2;
//       let info =
//         "Nim anda: <b>" +
//         this.this.nim +
//         "</b>,<br>Nama anda: <b>" +
//         this.this.name +
//         "</b>,<br>Jenis Kelamin anda: <b>" +
//         this.this.sex +
//         "</b>,<br><br>Tahun Masuk Anda: " +
//         this.this.year +
//         ",<br>dan anda berarti sekarang<br>semester: <b>" +
//         semester +
//         "</b>";
//       return info;
//     }
//   }
//   var this.nim = document.getElementById("nim").value;
//   var this.name = document.getElementById("nama").value;
//   var this.sex = document.querySelector('input[this.name="jns_kelamin"]:checked').value;
//   var this.year = document.getElementById("tahun").value;
//   let numberValidated = /^[0-9]+$/;
//   let letterValidated = /^[a-zA-Z]+$/;
//   let date = new Date();
//   let tahun = date.getFullthis.year();
//   let windowPopUp = window.open("result.html", "", "width=640, height=480");
//   if (this.nim !== "" && this.name !== "" && this.sex !== "" && this.year !== "") {
//     if (this.nim.match(numberValidated)) {
//       if (this.name.match(letterValidated)) {
//         if (this.year.match(numberValidated) && this.year.length == 4 && this.year <= tahun) {
//           console.log(nim);
//           alert("Pengisian Berhasil!");
//           windowPopUp.addEventListener("load", function () {
//             // let myStudent = new Mahasiswa(this.nim, this.name, this.sex, this.year);
//             windowPopUp.postMessage(document.write(this), "*");
//           });
//         } else {
//           alert(
//             "Masukan tahun anda salah!\nFormat wajib 4 angka dan maksimal sampai tahun sekarang!"
//           );
//           tahun = "";
//           tahun.focus();
//           return false;
//         }
//       } else {
//         alert("Masukan nama anda salah!\nFormat wajib huruf!");
//         nama = "";
//         nama.focus();
//         return false;
//       }
//     } else {
//       alert("Masukan NIM anda salah!\nFormat wajib angka!");
//       nim = "";
//       nim.focus();
//       return false;
//     }
//   } else {
//     alert("Semua field wajib diisi!");
//     nim = "";
//     nama = "";
//     tahun = "";
//     return false;
//   }
// }

class Mahasiswa {
  constructor() {
    this.nim = "";
    this.name = "";
    this.sex = "";
    this.year = "";
  }

  getMahasiswaInfo() {
    let date = new Date();
    let tahun = date.getFullYear();

    let semester = (tahun - this.year) * 2;

    return semester;
  }

  submit() {
    this.nim = document.getElementById("nim").value;
    this.name = document.getElementById("nama").value;
    this.sex = document.querySelector(
      'input[name="jns_kelamin"]:checked'
    ).value;
    this.year = document.getElementById("tahun").value;

    let numberValidated = /^[0-9]+$/;
    let letterValidated = /^[a-zA-Z]+$/;

    let semester = this.getMahasiswaInfo();

    if (
      this.nim !== "" &&
      this.name !== "" &&
      this.sex !== "" &&
      this.year !== ""
    ) {
      if (this.nim.match(numberValidated)) {
        if (this.name.match(letterValidated)) {
          if (
            this.year.match(numberValidated) &&
            this.year.length == 4 &&
            this.year <= tahun
          ) {
            console.log(this);
            console.log(semester);
            const self = this;
            alert("Pengisian Berhasil!");

            let info =
              "Nim anda: <b>" +
              this.nim +
              "</b>,<br>Nama anda: <b>" +
              this.name +
              "</b>,<br>Jenis Kelamin anda: <b>" +
              this.sex +
              "</b>,<br><br>Tahun Masuk Anda: " +
              this.year +
              ",<br>dan anda berarti sekarang<br>semester: <b>" +
              semester +
              "</b>";

            let windowPopUp = window.open(
              "result.html",
              "",
              "width=640, height=480"
            );
            windowPopUp.addEventListener("load", function () {
              windowPopUp.postMessage(info, "*");
            });
          } else {
            alert(
              "Masukan tahun anda salah!\nFormat wajib 4 angka dan maksimal sampai tahun sekarang!"
            );
            this.year = "";
            // tahun.focus();
            return false;
          }
        } else {
          alert("Masukan nama anda salah!\nFormat wajib huruf!");
          // document.getElementById(nama).value = "";
          //   nama.focus();
          return false;
        }
      } else {
        alert("Masukan NIM anda salah!\nFormat wajib angka!");
        // this.nim = "";
        // nim.focus();
        return false;
      }
    } else {
      alert("Semua field wajib diisi!");
      //   this.nim = "";
      //   this.name = "";
      //   this.year = "";
      return false;
    }
  }
}

const myStudent = new Mahasiswa();
