class MusicPlayer {
    constructor(musicList) {
        this.musicList = musicList;
        this.index = 0;
        // Dışardan yani musicList'ten buraya şarkı getirecek 
    }

    getMusic() {
        return this.musicList[this.index];
    }

    next() {
        if(this.index + 1 < this.musicList.length) {
            this.index++;
        }else {
            this.index = 0;
        }
    }

    previous() {
        if(this.index != 0) {
            this.index--;
        }else {
            this.index = this.musicList.length - 1;
        }
    }
}