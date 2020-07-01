const btn = document.getElementById('btn')
btn.onclick = drawCanvas

function drawCanvas () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const maxWidth = 300

  ctx.moveTo(0, 0)
  ctx.lineTo(maxWidth, maxWidth)
  ctx.stroke()

  ctx.moveTo(0, maxWidth)
  ctx.lineTo(maxWidth, 0)
  ctx.stroke()  
}