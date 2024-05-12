function myFunction() {
    // Находим контейнер с сообщением
    var x = document.getElementById("snackbar");
  
    // Добавляем контейнеру класс "show"
    x.className = "show";
  
    // Через 3 секунды удаляем класс "show" у контейнера с сообщением
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  function myNo() {
    // Находим контейнер с сообщением
    var x = document.getElementById("no");
  
    // Добавляем контейнеру класс "show"
    x.className = "show";
  
    // Через 3 секунды удаляем класс "show" у контейнера с сообщением
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }