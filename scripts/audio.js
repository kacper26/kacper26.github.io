const buttonEl = document.querySelector('a');

// create our context 
let audioContext = new AudioContext();
//function wich is called when we click the button 
function laserate() {
    // creat an oscillator node 
    let osc = audioContext.createOscillator();
    // set type - can be sine, square, triangle...
    osc.type = 'traingle';

    // set frequency
    osc.frequency.value = 50;

    // up frequency over a second
    osc.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 1);

    // create gain node 
    let gain = audioContext.createGain();

    //gain by default is 1 - drop it to near mute after about a second 
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.9);

    // start oscilator
    osc.start();
    // stop it after a second
    osc.stop(audioContext.currentTime + 1);
    // connect our graph 
    osc.connect(gain).connect(audioContext.destination);


}

window.addEventListener('load', function() {

// outplay - state will be suspended by default, resume on click
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
// call our laser function
    laserate();


})