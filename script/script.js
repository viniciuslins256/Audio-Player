const song = document.querySelector('.song');
const fill = document.querySelector('.fill');
let time = document.querySelector(".first");
let pauseButton = document.querySelector(".pause")
let playButton = document.querySelector(".btn1")

function togglePlayPause(){
    if(song.paused){
        song.play();
        playButton.style.display = "none";
        pauseButton.style.display = "flex";
        
      } else{
        song.pause();
        pauseButton.style.display = "none";
        playButton.style.display = "flex";
      }
}

song.addEventListener('timeupdate', function(){
    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + '%';
    let currentTime = parseInt(song.currentTime);
    time.innerHTML = calculateTime(currentTime.toString());
  })

function calculateTime(number){
    let endTime = "";
    if(number < 10){
        endTime = "0:0" + number;
    }
    else if(10 <= number && number < 60){
        endTime = "0:" + number;
    }
    else{
        let minutes = Math.floor(number/60);
        let seconds = number%(minutes*60);
        if(seconds < 10){
            endTime = minutes + ":0" + seconds; 
        }
        else{
            endTime = minutes + ":" + seconds;
        }
    }
    return endTime;
}


function fastForward(){
    song.currentTime += 10;
}

function goBack(){
    song.currentTime -= 10;
}