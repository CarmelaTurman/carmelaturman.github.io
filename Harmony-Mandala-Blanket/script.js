const svgNS="http://www.w3.org/2000/svg";
const ringsGroup=document.getElementById("ringsGroup");
const speedInput=document.getElementById("speed");
const scaleInput=document.getElementById("scale");
const togglePulse=document.getElementById("togglePulse");

// build rainbow rings
function build(){
  ringsGroup.innerHTML="";
  for(let i=0;i<7;i++){
    let r=100 - i*12;
    let ring=document.createElementNS(svgNS,"circle");
    ring.setAttribute("r",r);
    ring.setAttribute("class","ring");
    ringsGroup.appendChild(ring);
  }
}
build();

let rot=0;
function animate(){
  rot += +speedInput.value;
  ringsGroup.style.transform=`rotate(${rot}deg) scale(${scaleInput.value})`;
  requestAnimationFrame(animate);
}
animate();

// pulse toggle
togglePulse.onclick=()=>{
  ringsGroup.classList.toggle("pulse");
};

// glitter generator
function glitter(){
  const area=document.querySelector(".glitter-area");
  for(let i=0;i<40;i++){
    let g=document.createElement("div");
    g.className="glitter";
    g.style.left=Math.random()*100+"%";
    g.style.animationDelay=Math.random()*4+"s";
    area.appendChild(g);
  }
}
glitter();
