document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'dashboard.html';
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'login.html';
});

function addData(sectionId) {
    const section = document.getElementById(sectionId);
    const newData = document.createElement('p');
    newData.textContent = `Data baru di ${sectionId}`;
    section.appendChild(newData);
}
