// Menambahkan event click pada setiap list pemagang
document.querySelectorAll('#listPemagang li').forEach(function(item) {
    item.addEventListener('click', function() {
        alert('Anda mengklik: ' + item.textContent);
    });
});
