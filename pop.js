document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
    alert("Terimakasih Masukan Anda Akan Kami Tinjau!");
    this.reset(); 
  });