export default function() {

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")
  const audioForest = new Audio ("../assets/sounds/Floresta.wav?raw=true")
  const audioChuva = new Audio ("../assets/sounds/Chuva.wav?raw=true")
  const audioCommerce = new Audio("../assets/sounds/Cafeteria.wav?raw=true")
  const audioFogo = new Audio ("../assets/sounds/Lareira.wav?raw=true")
  const audioTokyo = new Audio ("../assets/sounds/unravel.mp3")
  const audioNaruto = new Audio ("../assets/sounds/sadness-naruto.mp3")
  const audioSao = new Audio ("../assets/sounds/crossing-field.mp3")
  const audioOp = new Audio ("../assets/sounds/binks-sake.mp3")

  bgAudio.loop = true
  audioForest.loop = true
  audioChuva.loop = true
  audioCommerce.loop = true
  audioFogo.loop = true



  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

    return {
      pressButton,
      timeEnd,
      bgAudio,
      audioForest,
      audioChuva,
      audioCommerce,
      audioFogo,
      audioOp,
      audioNaruto,
      audioSao,
      audioTokyo
    }
}