
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from being submitted
  
    // Get input values
    var nama = document.getElementById("nama").value;
    var jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
    var tanggalLahir = document.getElementById("tanggalLahir").value;
    var agama = document.getElementById("agama").value;
    var alamat = document.getElementById("alamat").value;
    var asalSekolah = document.getElementById("asal-sekolah").value;
    var noHP = document.getElementById("no-hp").value;
    var email = document.getElementById("email").value;
    var namaAyah = document.getElementById("nama-ayah").value;
    var namaIbu = document.getElementById("nama-ibu").value;
    var alamatOrangTua = document.getElementById("alamat").value;
    var rataNilai = document.getElementById("rata-nilai").value;
  
    // Create text content
    var fileContent = "Data Siswa:\n" +
                      "Nama Lengkap: " + nama + "\n" +
                      "Jenis Kelamin: " + jenisKelamin + "\n" +
                      "Tanggal Lahir: " + tanggalLahir + "\n" +
                      "Agama: " + agama + "\n" +
                      "Alamat: " + alamat + "\n" +
                      "Asal Sekolah: " + asalSekolah + "\n" +
                      "Nomor HP: " + noHP + "\n" +
                      "Email: " + email + "\n\n" +
                      "Data Orang Tua:\n" +
                      "Nama Ayah: " + namaAyah + "\n" +
                      "Nama Ibu: " + namaIbu + "\n" +
                      "Alamat Orang Tua: " + alamatOrangTua + "\n\n" +
                      "Rata-Rata Nilai: " + rataNilai;
  
    // Create a temporary element to trigger the file download
    var element = document.createElement("a");
    var file = new Blob([fileContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "jawaban_Formulir.txt";
    element.style.display = "none";
    document.body.appendChild(element);
  
    // Trigger the download
    element.click();
  
    // Clean up
    document.body.removeChild(element);
  });
  