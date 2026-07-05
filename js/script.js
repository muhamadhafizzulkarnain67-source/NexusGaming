console.log("Nexus Gaming Lounge");
const tombolBooking = document.querySelectorAll(".booking-btn");

if (tombolBooking.length > 0) {
    tombolBooking.forEach(function(btn){

        btn.addEventListener("click", function(){

            alert("Terima kasih! Silakan lanjut ke halaman Pembayaran.");

            window.location.href = "bayar.html";

        });

    });
}
const konfirmasi = document.getElementById("konfirmasi");

if(konfirmasi){

    konfirmasi.addEventListener("click",function(){

        alert("Pembayaran berhasil dikonfirmasi!");

    });

}
const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Pesan berhasil dikirim!");

});

}