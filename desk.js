document.querySelectorAll(".btnDetail, .figure").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    let parent = e.target.parentNode.parentNode;

    let gambar = parent.querySelector(".figure").src;
    let harga = parent.querySelector(".harga").innerHTML;
    let judul = parent.querySelector(".card-text").innerHTML;
    let deskripsi = parent.querySelector(".content") ? parent.querySelector(".content").innerHTML : "<i>tidak ada informasi yang tersedia</i>";

    let tombolModal = document.querySelector(".btnModal");
    tombolModal.click();

    document.querySelector(".modalTitle").innerHTML = judul;
    let image = document.createElement("img");
    image.src = gambar;
    image.classList.add("w-100");
    document.querySelector(".modalImage").innerHTML = "";
    document.querySelector(".modalImage").appendChild(image);
    document.querySelector(".modalDeskripsi").innerHTML = deskripsi;
    document.querySelector(".modalHarga").innerHTML = harga;

    const noHp = "6282172656995";
    let pesan = `https://api.whatsapp.com/send?phone=${noHp}&text=Hallo, Saya tertarik dengan Jasa dan Produk anda dengan merek ${judul} ,harga${harga} beserta foto ini ${gambar} `;

    document.querySelector(".btnBeli").href = pesan;

    const noHp1 = "6285365876593";
    let pesan1 = `https://api.whatsapp.com/send?phone=${noHp1}&text=Hallo, Saya tertarik dengan Jasa dan Produk anda dengan merek ${judul} ,harga${harga} beserta foto ini ${gambar} `;

    document.querySelector(".btnBelii").href = pesan1;

    document.querySelectorAll(".btnInstagram").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        const instagramUsername = "username_instagram";
        let instagramLink = `https://www.instagram.com/advertisingpekanbaru/${instagramUsername}/`;
        window.location.href = instagramLink;
      });
    });

    // document.querySelectorAll(".btnFacebook").forEach((item) => {
    //   item.addEventListener("click", (e) => {
    //     e.preventDefault();

    //     const facebookUsername = "username_facebook";
    //     let facebookLink = `https://www.facebook.com/${facebookUsername}/`;

    //     // Redirect ke halaman Facebook
    //     window.location.href = facebookLink;
    //   });
    // });
  });
});

document.querySelectorAll(".btnWhatsApp").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    const phoneNumber = "6285365876593";

    const message = encodeURIComponent("Halo, saya tertarik dengan produk Anda.");

    let whatsappLink = `https://wa.me/${phoneNumber}/?text=${message}`;

    window.open(whatsappLink, "_blank");
  });
});

document.querySelectorAll(".btnWhatsApps").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    const phoneNumber = "6285365876593";

    const message = encodeURIComponent("Halo, saya tertarik dengan produk Anda.");

    let whatsappLink = `https://wa.me/${phoneNumber}/?text=${message}`;

    window.open(whatsappLink, "_blank");
  });
});

// Menangkap elemen form pencarian
var searchForm = document.getElementById("searchForm");

var searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var searchInput = document.getElementById("searchInput");
  var searchValue = searchInput.value.trim().toLowerCase();
  var matchingIds = [];
  var allIds = document.querySelectorAll("[id]");

  allIds.forEach(function (element) {
    var id = element.id.toLowerCase();
    if (id.startsWith(searchValue)) {
      matchingIds.push(element.id);
    }
  });

  if (matchingIds.length > 0) {
    var targetId = matchingIds[0];
    var targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  } //else {
  //   alert("No matching ID found!"); // Munculkan peringatan jika tidak ada ID yang cocok
  // }
});

/* Testimoni */
