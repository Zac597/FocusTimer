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
  body.style.backgroundImage='url(../assets/imgs/tokyo.jpg)';
  sound.audioTokyo.play()
  sound.audioOp.pause()
  sound.audioNaruto.pause()
  sound.audioSao.pause()
}) 

Fire.addEventListener('click',() => {
  body.style.backgroundImage='url(../assets/imgs/onepiece.jpg)';
  sound.audioOp.play()
  sound.audioTokyo.pause()
  sound.audioNaruto.pause()
  sound.audioSao.pause()
}) 

Commerce.addEventListener('click',() => {
  body.style.backgroundImage='url(../assets/imgs/naruto.jpg)';
  sound.audioNaruto.play()
  sound.audioTokyo.pause()
  sound.audioOp.pause()
  sound.audioSao.pause()
}) 

Rain.addEventListener('click',() => {
  body.style.backgroundImage='url(../assets/imgs/sao.jpg)';
  sound.audioSao.play()
  sound.audioTokyo.pause()
  sound.audioNaruto.pause()
  sound.audioOp.pause()

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