class Song{
    constructor(private songName:string, private artistName:string){

    }

    playSong(){
        console.log('Now Playing: ' + this.songName + ' - ' + this.artistName)
    }
}

class Playlist{
    playlist: Song[] = [];
    constructor(playlist:Song[]){
        this.playlist = playlist;
    }
    addSong(song:Song){
        this.playlist.push(song);
    }
    getSong(num: number){
        return this.playlist[num];
    }
    randomSong(){
        let i: number = Math.floor(Math.random()*(this.playlist.length));
        return i;
    }

}

var initlist =[
    new Song('Song Example 1', 'Example Artist 1'),
    new Song('Song Example 2', 'Example Artist 2'),
    new Song('Song Example 3', 'Example Artist 3'),
    new Song('Song Example 4', 'Example Artist 4'),
    new Song('Song Example 5', 'Example Artist 5'),
    new Song('Song Example 6', 'Example Artist 6'),
    new Song('Song Example 7', 'Example Artist 7')
];

var playlist = new Playlist(initlist);
playlist.addSong(
    new Song('Song Example 8', 'Example Artist 8')
)
var curr: Song = playlist.getSong(0);
curr.playSong();
curr = playlist.getSong(playlist.randomSong());
curr.playSong();
