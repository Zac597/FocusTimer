import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import {
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay,
  Forest,
  Rain,
  Commerce,
  Fire,
  body,
  moreMinutes,
  anyLess
} from "./elements.js"


const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

buttonPlay.addEventListener('click', () => {
  controls.play()
  timer.coutdown()
  sound.pressButton()
})


buttonPause.addEventListener('click', () => {
  controls.pause()
  timer.hold()
  sound.pressButton()
})

buttonStop.addEventListener('click', () => {
  controls.reset()
  timer.reset()
  sound.pressButton()
})

buttonSoundOn.addEventListener('click', () => {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  sound.audioForest.stop()
  sound.audioChuva.stop()
  sound.audioCommerce.stop()
  sound.audioFogo.stop()
})

buttonSoundOff.addEventListener('click', () => {
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
})

buttonSet.addEventListener('click', () =>{
  let newMinutes = controls.getMinutes()

  if (!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})

moreMinutes.addEventListener('click', () => {
  let newMinutes = controls.moreMinutes()

  if (!newMinutes) {
    timer.moreMinutes()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})

anyLess.addEventListener('click', () => {
  
})

// Fundos

Forest.addEventListener('click',() => {
  body.style.backgroundColor='#016D55';
  sound.audioForest.play()
  sound.audioFogo.pause()
  sound.audioCommerce.pause()
  sound.audioChuva.pause()
}) 

Fire.addEventListener('click',() => {
  body.style.backgroundColor='#F4A84D';
  sound.audioFogo.play()
  sound.audioForest.pause()
  sound.audioCommerce.pause()
  sound.audioChuva.pause()
}) 

Commerce.addEventListener('click',() => {
  body.style.backgroundColor='#CEC1B0';
  sound.audioCommerce.play()
  sound.audioForest.pause()
  sound.audioFogo.pause()
  sound.audioChuva.pause()
}) 

Rain.addEventListener('click',() => {
  body.style.backgroundColor='#C6D7DA';
  sound.audioChuva.play()
  sound.audioForest.pause()
  sound.audioCommerce.pause()
  sound.audioFogo.pause()

}) 

moreMinutes.addEventListener('click', () => {
  controls.reset()
  timer.moreMinutes()
  sound.pressButton()
})

anyLess.addEventListener('click', () => {
  controls.reset()
  timer.anyLess()
  sound.pressButton()
})