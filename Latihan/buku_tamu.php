<html>

<head>
    <title>Buku Tamu</title>
    <style type="text/css">
        body {
            background-color: cornsilk;
            align-items: center;
        }

        h3 {
            text-align: center;
            margin: 20px auto;
        }

        table {
            background-color: #ffffff;
            width: fit-content;
            padding: 25px;
            margin: auto;
            display: flexbox;
            border-radius: 10px;
            border: 3px solid coral;
        }

        tr {
            margin: 5px;
        }

        td {
            padding: 5px;
        }

        input[type="submit"] {
            background: #28d;
            border-color: transparent;
            color: #fff;
            cursor: pointer;
            padding: 5px;
            border-radius: 10px;
        }

        input[type="submit"]:hover {
            background: #17c;
        }
    </style>
    <script>
        function pelangi() {
            var nama = document.getElementById("nama").value;
            var jk = document.querySelector('input[name=jk]:checked');
            var prodi = document.getElementById("prodi").value;
            var hobi = [];
            var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
            console.log(nama, jk, prodi, hobi);
            var pesan = document.getElementById("pesan").value;

            for (var i = 0; i < checkboxes.length; i++) {
                hobi.push(checkboxes[i].value);
            }

            var validasiAngka = /^[0-9]+$/;
            var validasiHuruf = /^[a-zA-Z ]+$/;

            // validasi nama
            if (nama.trim() === "" || !nama.match(validasiHuruf)) {
                alert("Masukkan Nama Anda Salah!\nFormat wajib huruf!");
                return false;
            }

            // validasi jenis kelamin
            if (!jk) {
                alert("Masukkan jenis kelamin.\nTidak boleh kosong!");
                return false;
            }

            // validasi prodi
            if (prodi.trim() === "") {
                alert("Program Studi tidak boleh kosong!");
                return false;
            }

            // validasi hobi
            if (hobi.length === 0) {
                alert("Hobi tidak boleh kosong!");
                return false;
            }

            // validasi pesan
            if (pesan.trim() === "") {
                alert("Pesan tidak boleh kosong!");
                return false;
            }

            alert("Pengisian berhasil!");
            return true;
        }
    </script>
</head>

<body>
    <marquee>Pelangi Dwi Mawarni - 2110512028 - A</marquee>

    <h3>ISI BUKU TAMU</h3>
    <form action="proses_buku.php" method="POST" onsubmit="return pelangi()" target="_blank">
        <table>
            <tr>
                <td>Nama</td>
                <td>:</td>
                <td><input type="text" id="nama" name="nama"></td>
            </tr>
            <tr>
                <td>Jenis Kelamin</td>
                <td>:</td>
                <td>
                    <input type="radio" name="jk" value="Laki-laki">Laki-laki<br>
                    <input type="radio" name="jk" value="Perempuan">Perempuan<br>
                </td>
            </tr>
            <tr>
                <td>Program Studi</td>
                <td>:</td>
                <td>
                    <select name="prodi" id="prodi">
                        <option value="Informatika">Informatika</option>
                        <option value="SI">Sistem Informasi</option>
                        <option value="D3">D3 Sistem Informasi</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Hobi</td>
                <td>:</td>
                <td>
                    <input type="checkbox" name="hobi[]" value="ngoding">Ngoding<br>
                    <input type="checkbox" name="hobi[]" value="medsos">Medsos<br>
                    <input type="checkbox" name="hobi[]" value="tidur">Tidur<br>
                </td>
            </tr>
            <tr>
                <td>Pesan</td>
                <td>:</td>
            </tr>
            <tr>
                <td colspan=3>
                    <textarea name="pesan" id="pesan" cols="40" row="5"></textarea>
                </td>
            </tr>
            <tr>
                <td colspan=3 align="right">
                    <input type="submit" value="kirim">
                </td>
            </tr>
        </table>
    </form>
</body>

</html>