var audio = new Audio('sound_effects/main.mp3');
  audio.loop = true;
  audio.volume = 0.3;
  let audiobtn = document.querySelectorAll(".audiobtn")
  audiobtn.forEach((btn)=> {
    btn.addEventListener("click", ()=> {
      audio.play();
    })
  })
  let audioup = document.querySelector(".audioup")
  audioup.addEventListener("click", ()=> {
      audio.volume += 0.1;
  })
  let audiodw = document.querySelector(".audiodw")
  audiodw.addEventListener("click", ()=> {
    audio.volume -= 0.1;
  })
