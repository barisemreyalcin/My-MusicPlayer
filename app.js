const container = document.querySelector(".container")
const image = document.querySelector("#music-img")
const title = document.querySelector("#music-details .title")
const singer = document.querySelector("#music-details .singer")
const previous = document.querySelector("#controls #previous")
const play = document.querySelector("#controls #play")
const next = document.querySelector("#controls #next")

const player = new MusicPlayer(musicList);

window.addEventListener("load", () => {
    let music = player.getMusic();
    displayMusic(music);
});

function displayMusic(music) {
    title.innerText = music.getName();
    singer.innerText = music.singer;
    image.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
}

play.addEventListener("click", () => {
    audio.play();
})