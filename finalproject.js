document.addEventListener('DOMContentLoaded', function() {

    var albumArtDiv = document.getElementById('album-art')

    // contructor function Jukebox object
    function Jukebox(songs, albums) {
        this.songList = songs // bring in the array of song objects from outside
        this.index = 0 // setting up first (default) value of index
        this.currentSong = this.songList[0] // setting up first (default) value of song
        
        this.prevFunc = function() {
            this.nextFunc(-1);
        };
        this.playFunc = function() {
         this.currentSong = this.songList[this.index];
            return this.currentSong.play();
        }
        this.pauseFunc = function() {
            return this.currentSong.pause()
        }
        this.stopFunc = function() {
            this.pauseFunc()
            // https://www.w3schools.com/tags/av_prop_currenttime.asp
            return this.currentSong.currentTime = 0 // currentTime is a built-in method
        }
        this.nextFunc = function() {
            this.stopFunc()
            this.index ++
            if (this.index === this.songList.length) {
                this.index = 0
            }
            return this.playFunc()
        }
        this.chooseSong = function(whichSong) {
            this.stopFunc()
            this.index = whichSong
            return this.playFunc()
        }
    } // end constructor function Jukebox object


    // create variables and build an new instance of the Jukebox object
    var songOne = new Audio('TLC - No Scrubs.mp3') // https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
    var songTwo = new Audio('Alanis Morissette - You Oughta Know (OFFICIAL VIDEO).mp3')
    var songThree = new Audio('Nirvana - Smells Like Teen Spirit.mp3')
    var songFour = new Audio('Lauryn Hill - Doo-Wop (That Thing) (Official Video).mp3')
    var songArray = [songOne, songTwo, songThree]
    var albumArray = ['TLC - No Scrubs.mp3', 'Nirvana - Smells Like Teen Spirit.mp3', 'Alanis Morissette - You Oughta Know (OFFICIAL VIDEO).mp3']

    var myJukebox = new Jukebox(songArray, albumArray)


    // event listeners for play, pause, stop, next
    var playButton = document.getElementById('playButt')
    var pauseButton = document.getElementById('pauseButt')
    var stopButton = document.getElementById('stopButt')
    var nextButton = document.getElementById('nextButt')

    playButton.addEventListener('click', function() {
        myJukebox.playFunc()
    })

    pauseButton.addEventListener('click', function() {
        myJukebox.pauseFunc()
    })

    stopButton.addEventListener('click', function() {
        myJukebox.stopFunc()
    })

    nextButton.addEventListener('click', function() {
        myJukebox.nextFunc()
    })


    // event listeners for specific song choices
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