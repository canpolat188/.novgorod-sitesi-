// menu.html dosyasını #menu-placeholder içine yükle
fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu-placeholder').innerHTML = data;
  });
