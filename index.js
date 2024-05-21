const drums = document.querySelectorAll(".drum");

const musics = {
  w: "crash",
  a: "kick-bass",
  s: "snare",
  d: "tom-1",
  j: "tom-2",
  k: "tom-3",
  l: "tom-4",
};

drums.forEach((drum) => {
  drum.addEventListener("click", () => {
    for (item in musics) {
      if (drum.classList[0] == item) {
        let music = new Audio(`./sounds/${musics[item]}.mp3`);
        music.play();
      }
    }
  });
});


document.addEventListener('keydown', (e) => {
   for(item in musics) {
    if(item ==  e.key) {
        let music = new Audio(`./sounds/${musics[item]}.mp3`);
        music.play();
    }
   }
})