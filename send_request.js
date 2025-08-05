    document.getElementById('callbackForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let form = this;
    let formData = new FormData(form);
        console.log(formData)
    fetch('send.php', {
    method: 'POST',
    body: formData
})
    .then(res => res.text())
    .then(data => {
    document.getElementById('formMessage').innerText = data;
    form.reset();
})
    .catch(() => {
    document.getElementById('formMessage').innerText = 'Ошибка при отправке!';
});
});
