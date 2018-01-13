console.log("Hello Music");

// ---------------------------------------------------------------------------------
// Create a new instance of an audio object and adjust some of its properties
const audio = new Audio()
audio.crossOrigin = 'anonymous'
audio.src = 'media/pf.mp3'
audio.controls = true
audio.loop = true
audio.autoplay = false
// audio.crossOrigin = "anonymous"



// ---------------------------------------------------------------------------------
// Establish all variables that the analyser will use
let canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, var_width, ber_height




// ---------------------------------------------------------------------------------
// Initialize the MP3 player after the page loads all of the HTML elements.
window.addEventListener("load", initMp3Player, false)




// ---------------------------------------------------------------------------------
// Functions

function initMp3Player() {
  document.getElementById("audio_box").appendChild(audio)
  // context = new webkitAudioContext()  // AudioContext object instance
  context = new AudioContext()  // AudioContext object instance
  analyser = context.createAnalyser()  // analyserNode Method.
  canvas = document.getElementById("analyzer_render")
  ctx = canvas.getContext('2d')

  // Re-Route audio playback into the processing graph
  source = context.createMediaElementSource(audio)
  source.connect(analyser)
  analyser.connect(context.destination)
  frameLooper()
}



  //  This frameLooper() function animates any style of graphics you wish to the audio frequency
  //  looping all the default frame rate that the browser provides(aprox 60 FPS)
function frameLooper(){
  // window.webkitRequestAnimationFrame(frameLooper)
  window.requestAnimationFrame(frameLooper)
	fbc_array = new Uint8Array(analyser.frequencyBinCount)
	analyser.getByteFrequencyData(fbc_array)
	ctx.clearRect(0, 0, canvas.width, canvas.height) // Clear the canvas
	ctx.fillStyle = '#00CCFF' // Color of the bars
	bars = 100;

  for (var i = 0; i < bars; i++) {
		bar_x = i * 3
		bar_width = 2
		bar_height = -(fbc_array[i] / 2)
		//  fillRect( x, y, width, height ) // Explanation of the parameters below
		ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
	}

}
