const video = document.getElementById('video');
let pauseAllowed = true;

function initVideo() {
  // Увімкнути звук та програти відео
  video.muted = false;
  video.volume = 0.2;
  video.play();

  // Перехід у повноекранний режим
  enterFullscreen();

  // Сховати кнопку старту
  document.querySelector("button").style.display = "none";

  // Заборонити паузу (автовідновлення)
  video.addEventListener('pause', () => {
    if (!pauseAllowed) {
      video.play();
    }
  });

  // Блокуємо контекстне меню
  window.addEventListener("contextmenu", e => e.preventDefault());
}

// Функція для переходу в повноекранний режим
function enterFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.webkitRequestFullscreen) { 
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
}

// Обробка натискань клавіш
document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();

  if (key === "g") {
    e.preventDefault();
    pauseAllowed = true;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  } else if (key === " ") {
    e.preventDefault();
    video.volume = Math.min(1.0, video.volume + 0.1);
    console.log("Гучність:", video.volume.toFixed(2));
  }
});

// Обробка натискань на будь-яке місце на екрані
document.body.addEventListener('click', () => {
  enterFullscreen(); // Перехід в повноекранний режим при натисканні
});

// Функція для блокування виходу зі сторінки
window.addEventListener('beforeunload', function (e) {
  const message = "Ви дійсно хочете покинути сайт?";
  e.returnValue = message; // Стандартне попередження браузера
  return message;
});

function initVideo() {
    // Увімкнути звук та програти відео
    video.muted = false;
    video.volume = 0.2;
    video.play();
  
    // Перехід у повноекранний режим
    enterFullscreen();
  
    // Сховати кнопку старту
    document.querySelector("button").style.display = "none";
  
    // Заборонити паузу (автовідновлення)
    video.addEventListener('pause', () => {
      if (!pauseAllowed) {
        video.play();
      }
    });
  
    // Блокуємо контекстне меню
    window.addEventListener("contextmenu", e => e.preventDefault());
  
    // Додати попередження при спробі виходу
    window.addEventListener('beforeunload', function (e) {
      const message = "Ви дійсно хочете покинути сайт?";
      e.preventDefault();
      e.returnValue = message; // для більшості браузерів
      return message; // для сумісності зі старими
    });

    window.addEventListener("beforeunload", function(event) {
        // Перезавантаження сторінки
        window.location.reload();
        // Повідомлення для користувача (не завжди відображається у сучасних браузерах)
        event.preventDefault();
        event.returnValue = ""; // Деякі браузери вимагають цього для відображення діалогу
    });
    
  }
  