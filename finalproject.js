document.addEventListener('DOMContentLoaded', function() {

    var albumArtDiv = document.getElementById('album-art')

    // contructor function Jukebox object
    function Jukebox(songs) {
        this.songList = songs // bring in the array of song objects from outside
        this.index = 0 // setting up first (default) value of index
        this.currentSong = this.songList[0] // setting up first (default) value of song
        
        this.prevFunc = function() {
            this.nextFunc(-1);
        };
        this.playFunc = function() {
            console.log('Now playing: ' + this.index);
            this.currentSong = this.songList[this.index];
            this.currentSong.play();
        }
        this.pauseFunc = function() {
             this.currentSong.pause();
        }
        this.stopFunc = function() {
            this.pauseFunc();
            // https://www.w3schools.com/tags/av_prop_currenttime.asp
            this.currentSong.currentTime = 0; // currentTime is a built-in method
        }
        this.nextFunc = function(opt_val) {
            this.stopFunc();
            if (opt_val) {
                this.index += opt_val;
            } else {
                this.index++;
            }
            if (this.index === this.songList.length) {
                this.index = 0;
            }
            if (this.index < 0) {
                this.index  = this.songList.length -1;
            }
            this.playFunc();
        }
        // this.chooseSong = function(whichSong) {
        //     this.stopFunc();
        //     this.index = whichSong;
        //     this.playFunc();
        // }
    } // end constructor function Jukebox object


    // create variables and build an new instance of the Jukebox object
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
    var songArray = [new Audio('TLC - No Scrubs.mp3'),
                     new Audio('Alanis Morissette - You Oughta Know (OFFICIAL VIDEO).mp3'),
                     new Audio('Nirvana - Smells Like Teen Spirit.mp3'),
                     new Audio('Lauryn Hill - Doo-Wop (That Thing) (Official Video).mp3')];
    
    var myJukebox = new Jukebox(songArray);


    // event listeners for play, pause, stop, next
    var prevButton = document.getElementById('prevButt');
    var playButton = document.getElementById('playButt');
    var pauseButton = document.getElementById('pauseButt');
    var stopButton = document.getElementById('stopButt');
    var nextButton = document.getElementById('nextButt');

    prevButton.addEventListener('click', function() {
        myJukebox.prevFunc()
    })

    playButton.addEventListener('click', function() {
        myJukebox.playFunc();
    });

    pauseButton.addEventListener('click', function() {
        myJukebox.pauseFunc();
    });

    stopButton.addEventListener('click', function() {
        myJukebox.stopFunc();
    });

    nextButton.addEventListener('click', function() {
        myJukebox.nextFunc();
    });

}) // end DOMContentLoaded event listener