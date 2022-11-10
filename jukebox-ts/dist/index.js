"use strict";
class Song {
    constructor(songName, artistName) {
        this.songName = songName;
        this.artistName = artistName;
    }
    playSong() {
        console.log('Now Playing: ' + this.songName + ' - ' + this.artistName);
    }
}
class Playlist {
    constructor(playlist) {
        this.playlist = [];
        this.playlist = playlist;
    }
    addSong(song) {
        this.playlist.push(song);
    }
    getSong(num) {
        return this.playlist[num];
    }
    randomSong() {
        let i = Math.floor(Math.random() * (this.playlist.length));
        return i;
    }
}
var initlist = [
    new Song('Song Example 1', 'Example Artist 1'),
    new Song('Song Example 2', 'Example Artist 2'),
    new Song('Song Example 3', 'Example Artist 3'),
    new Song('Song Example 4', 'Example Artist 4'),
    new Song('Song Example 5', 'Example Artist 5'),
    new Song('Song Example 6', 'Example Artist 6'),
    new Song('Song Example 7', 'Example Artist 7')
];
var playlist = new Playlist(initlist);
playlist.addSong(new Song('Song Example 8', 'Example Artist 8'));
var curr = playlist.getSong(0);
curr.playSong();
curr = playlist.getSong(playlist.randomSong());
curr.playSong();
//# sourceMappingURL=index.js.map