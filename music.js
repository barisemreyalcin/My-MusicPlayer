class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    // Her müzik bilgisi için ekstra metodlar:
    getName() {
        return this.title + " - " + this.singer; //Şarkı bilgisini getirecek
    }
}

const musicList = [
    new Music("California Love", "2Pac", "1.jpg", "1.mp3"),
    new Music("Where Is The Love", "Black Eyed Peas", "2.jpg", "2.mp3"),
    new Music("Redbone", "Childish Gambino", "3.jpg", "3.mp3"),
    new Music("The Blue Cafe", "Chris Rea", "4.jpg", "4.mp3"),
    new Music("Headlights", "Eminem", "5.jpg", "5.mp3"),
    new Music("Mockingbird", "Eminem", "6.jpg", "6.mp3"),
    new Music("Numb", "Linkin Park", "7.jpg", "7.mp3"),
    new Music("Smooth Criminal", "Michael Jackson", "8.jpg", "8.mp3"),
    new Music("Where Is My Mind", "Pixies", "9.jpg", "9.mp3"),
    new Music("Shape of My Heart", "Sting", "10.jpg", "10.mp3"),
]