console.log("page loaded...");
let myvideo = document.querySelectorAll('#videoplay');

for ( var i = 0; 1 < myvideo.lenght; i++){
myvideo[i].addEventListener("mouseover", function ()  {this.play();
})
}
  document.querySelector("#videoplay").addEventListener("mouseover", function(){
  this.play()
})

  document.querySelector("#videoplay").addEventListener("mouseout", function(){
  this.pause()
})