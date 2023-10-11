document.getElementById('getMessage').addEventListener('click', function() {
  fetch('/message')
    .then(response => response.json())
    .then(data => {
        document.getElementById('serverMessage').textContent = data.message;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});