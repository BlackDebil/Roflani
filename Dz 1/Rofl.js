window.addEventListener('load', function () {
    let but1 = document.getElementById("but1");
    let but2 = document.getElementById("but2");
    but1.addEventListener('click', function (){
      window.location.href = "https://mangalib.me/bleach?section=chapters";
    });
    but2.addEventListener('click', function(){
		but1.style.display = "none";
		but2.style.display = "none";
	  let img = document.createElement("img")
	  img.src = "leus.jpg";
	  img.style.align = "center";
	  alert("ALARM! ALARM! CREATE LEUS!");
	  document.body.appendChild(img)
	  
function generateColor() { 
  document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
}
setInterval( generateColor(), 500);
	  
	  img.animate([
	  { transform: 'rotate(360deg)'}
	  ],{
		duration: 1000,
		iterations: Infinity
	  });
	  
    });
});

