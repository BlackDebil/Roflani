window.addEventListener('load', function () {

    let but1 = document.getElementById("but1");
    let but2 = document.getElementById("but2");
    but1.addEventListener('click', function (){
      window.location.href = "https://www.youtube.com/watch?v=f709fmeZZ1A";
    });
    but2.addEventListener('click', function(){
      document.body.style.backgroundColor = "purple";
    });
});