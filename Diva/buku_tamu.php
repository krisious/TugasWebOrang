<html>

<head>
    <title>Buku Tamu</title>
    <script type="text/javascript">
        function kirim() {
            var nama = document.forms["myForm"]["nama"].value;
            var jk = document.forms["myForm"]["jk"].value;
            var prodi = document.forms["myForm"]["prodi"].value;
            var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
            var pesan = document.forms["myForm"]["pesan"].value;

            var validasiHuruf = /^[a-zA-Z]+$/;

            if (nama == "" || jk == "" || prodi == "" || checkboxes.length == 0 || pesan == "") {
                alert("Masukkan masih kosong!\nMohon isi terlebih dahulu.");
                return false;
            } else {
                if (nama.match(validasiHuruf)) {
                    alert("Pengisian berhasil!");
                } else {
                    alert("Masukkan nama Anda salah!\nFormat wajib huruf!");
                    document.forms["myForm"]["nama"].value = "";
                    return false;
                }
            }
        }
    </script>
</head>

<body>
    <h3>ISI BUKU TAMU</h3>
    <form action="proses_buku.php" method="POST" name="myForm" onsubmit="return kirim()" target="_blank">
        <table>
            <tr>
                <td>Nama</td>
                <td>:</td>
                <td><input type="text" name="nama" id="nama"></td>
            </tr>
            <tr>
                <td>Jenis Kelamin</td>
                <td>:</td>
                <td>
                    <input type="radio" name="jk" id="jk" value="Laki-Laki">Laki-Laki<br />
                    <input type="radio" name="jk" id="jk" value="Perempuan">Perempuan<br />
                </td>
            </tr>
            <tr>
                <td>Program Studi</td>
                <td>:</td>
                <td>
                    <select name="prodi">
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
                    <input type="checkbox" name="hobi[]" value="ngoding">Ngoding<br />
                    <input type="checkbox" name="hobi[]" value="medsos">Medsos<br />
                    <input type="checkbox" name="hobi[]" value="tidur">Tidur<br />
                </td>
            </tr>
            <tr>
                <td>Pesan</td>
                <td>:</td>
                <td>
                    <textarea name="pesan" row=5 cols=30 id="pesan"></textarea>
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