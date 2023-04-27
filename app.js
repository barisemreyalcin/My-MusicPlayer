const container = document.querySelector(".container");
const image = document.querySelector("#music-img");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const previous = document.querySelector("#controls #previous");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");
const current = document.querySelector("#current-time");
const duration = document.querySelector("#duration-time");
const progressBar = document.querySelector("#progress-bar");

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

previous.addEventListener("click", () => { previousMusic(); });

next.addEventListener("click", () => { nextMusic(); });

const previousMusic = () => {
    player.previous();
    let music = player.getMusic();
    displayMusic(music)
    playMusic();
}

const nextMusic = () => {
    player.next();
    let music = player.getMusic();
    displayMusic(music)
    playMusic();
}

const pauseMusic = () => {
    container.classList.remove("playing");
    play.classList = "fa-solid fa-play";
    audio.pause();
}

const playMusic = () => {
    container.classList.add("playing");
    play.classList = "fa-solid fa-pause";
    audio.play();
}

const calculateDuration = (totalSecond) => {
    const minute = Math.floor(totalSecond / 60);
    const second = Math.floor(totalSecond % 60);
    const adjustedSecond = second < 10 ? `0${second}` : `${second}`;
    const result = `${minute}:${adjustedSecond}`;
    return result;
}

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = calculateDuration(audio.duration); // Saniyeyi dakikaya çevirecek method tanımlıyorum
    progressBar.max = Math.floor(audio.duration);
})

audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime);
    current.textContent = calculateDuration(progressBar.value);
})

// Progress Bar üzerinde konumlanma

progressBar.addEventListener("input", () => {
    current.textContent = calculateDuration(progressBar.value);
    audio.currentTime = progressBar.value;
})