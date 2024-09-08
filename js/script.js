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