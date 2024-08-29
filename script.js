function validateLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    const popupIcon = document.getElementById('popupIcon');

    if (username === "admin" && password === "admin123") {
        popupIcon.className = "fas fa-check-circle";
        popupIcon.style.color = "green";
        popupMessage.textContent = "Benar!";
        popup.style.display = "flex";
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Halaman berikutnya
        }, 2000);
    } else {
        popupIcon.className = "fas fa-times-circle";
        popupIcon.style.color = "red";
        popupMessage.textContent = "salah! Coba lagi.";
        popup.style.display = "flex";
    }
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');

    setTimeout(function() {
        loader.classList.add('hidden');
        content.style.display = 'block';
    }, 2000);
});

function toggleIcons() {
    const icons = document.getElementById('social-icons');
    icons.classList.toggle('active');
}


particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 100, // Jumlah partikel
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff" // Warna bintik-bintik putih
      },
      "shape": {
        "type": "circle", // Bentuk partikel
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.6, // Transparansi partikel
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3, // Ukuran partikel
        "random": true,
        "anim": {
          "enable": true,
          "speed": 4,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false // Menonaktifkan garis penghubung antar partikel
      },
      "move": {
        "enable": true,
        "speed": 2, // Kecepatan gerakan partikel
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false // Nonaktifkan interaksi saat hover
        },
        "onclick": {
          "enable": false // Nonaktifkan interaksi saat klik
        },
        "resize": true
      }
    },
    "retina_detect": true
  });
  