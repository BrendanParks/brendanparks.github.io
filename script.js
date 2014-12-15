var audio = new Audio();
audio.src = "res/brendanparks_musicsample.mp3";
audio.autoplay = false;
audio.controls = true;
audio.style.width="100%";

document.getElementById("audiomp3").appendChild(audio);

var audioContext = new webkitAudioContext();
var analyser = context.createAnalyser();
analyser.fftSize = 2048;
var bufLen = analyser.fftSize;
var dataArray = new Uint8Array(bufLen);

// Wait for window.onload to fire. See crbug.com/112368
window.addEventListener('load', function(e) {
  // Our <audio> element will be the audio source.
  var source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);
    
  var loopframe = function() {
      window.webkitRequestAnimationFrame(loopframe);
      analyser.getByteTimeDomainData(dataArray);
      

    
  
  };

  // ...call requestAnimationFrame() and render the analyser's output to canvas.
}, false);