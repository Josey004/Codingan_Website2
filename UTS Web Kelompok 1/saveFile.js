document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman langsung
  
    // Mendapatkan nilai jawaban dari input
    var nama = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var judul = document.getElementById('judul').value;
    var pesan = document.getElementById('pesan').value;
    
    var fileContent = "Nama: " + nama + "\n" +
                      "Email: " + email + "\n" +
                      "Judul: " + judul + "\n" +
                      "Pesan: " + pesan; // Menggabungkan jawaban dengan teks tambahan yang diinginkan
  
    var element = document.createElement("a"); // Membuat elemen link
    var file = new Blob([fileContent], {type: 'text/plain'}); // Membuat objek Blob
  
    element.href = URL.createObjectURL(file); // Menetapkan tautan URL ke elemen link
    element.download = "saran.txt"; // Menetapkan nama file yang akan diunduh
  
    element.style.display = "none"; // Menyembunyikan elemen link
    document.body.appendChild(element); // Menambahkan elemen link ke body
  
    element.click(); // Mengklik elemen link secara otomatis
  
    document.body.removeChild(element); // Menghapus elemen link setelah file diunduh
  });
