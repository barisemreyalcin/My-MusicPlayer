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

    const isMusicPlay = container.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();
})

previous.addEventListener("click", () => {
    previousMusic();
})

next.addEventListener("click", () => {
    nextMusic();
})

function previousMusic() {
    player.previous();
    let music = player.getMusic();
    displayMusic(music)
    playMusic();
}

function nextMusic() {
    player.next();
    let music = player.getMusic();
    displayMusic(music)
    playMusic();
}

function pauseMusic() {
    container.classList.remove("playing");
    play.classList = "fa-solid fa-play";
    audio.pause();
}

function playMusic() {
    container.classList.add("playing");
    play.classList = "fa-solid fa-pause";
    audio.play();
}