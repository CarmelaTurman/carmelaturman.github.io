document.addEventListener("DOMContentLoaded", () => {

  setInterval(() => {
    const sparkle = document.createElement("div")

    sparkle.style.position = "fixed"
    sparkle.style.width = sparkle.style.height = Math.random()*10+5+"px"
    sparkle.style.borderRadius = "50%"
    sparkle.style.left = Math.random()*100+"%"
    sparkle.style.top = Math.random()*100+"%"
    sparkle.style.background = `hsla(${Math.random()*360},100%,70%,0.8)`
    sparkle.style.pointerEvents = "none"
    sparkle.style.transition = "opacity 1.5s, transform 1.5s"

    document.body.appendChild(sparkle)

    requestAnimationFrame(()=>{
      sparkle.style.opacity="0"
      sparkle.style.transform="translateY(-30px)"
    })

    setTimeout(()=>sparkle.remove(),1500)
  },250)

})
