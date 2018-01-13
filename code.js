console.log("Hello Music");

// ---------------------------------------------------------------------------------
// Create a new instance of an audio object and adjust some of its properties
const audio = new Audio()
audio.src = 'media/pf.mp3'
audio.controls = true
audio.loop = true
audio.autoplay = false



// ---------------------------------------------------------------------------------
// Establish all variables that the analyser will use
let canvas, ctx, source, contex, analyser, fbc_array, bars, bar_x, var_width, ber_height




// ---------------------------------------------------------------------------------
// Initialize the MP3 player after the page loads all of the HTML elements.
window.addEventListener("load", initMp3Player, false)




// ---------------------------------------------------------------------------------
// Functions

function initMp3Player() {
  document.getElementById("audio_box").appendChild(audio)
  contex = new webkitAudioContext()  // AudioContext object instance
  analyser = context.createAnalyser()  // analyserNode Method.
  canvas = document.getElementById("equalizer")
  ctx = cnavas.getContext('2d')

  // Re-Route audio playback into the processing graph
  source = context.createMediaElementSource(audio)
  source.connect(analyser)
  analyser.connect(context.destination)
  frameLooper()
}
