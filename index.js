var length = document.querySelectorAll(".drum").length;
for(var i = 0 ; i< length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
       makesound(this.innerHTML);
       btnanime(this.innerHTML);
    })
}
 document.addEventListener("keypress" ,function(event){
    makesound(event.key);
    btnanime(event.key);
 })
 function makesound(key)
 {
    switch(key
    ){
        case "w":
            var tom = new Audio('tom-1.mp3');
            tom.play();
            break;
        case "a":
            var tom = new Audio('tom-2.mp3');
            tom.play();
            break; 
        case "s":
            var tom = new Audio('tom-3.mp3');
            tom.play();
            break;     
        case "d":
            var tom = new Audio('tom-4.mp3');
            tom.play();
            break;
        case "j":
            var tom = new Audio('snare.mp3');
            tom.play();
            break;
        case "k":
            var tom = new Audio('crash.mp3');
            tom.play();
            break; 
        case "l":
            var tom = new Audio('kick-bass.mp3');
            tom.play();
            break;         
    }
 }
 function btnanime(btn){
    var activebutton= document.querySelector("."+btn);
    activebutton.classList.add("pressed");
     activebutton.classList.add("black");
    setTimeout(
        function(){
            activebutton.classList.remove("pressed")
        },100
    ) ;
     setTimeout(
        function(){
            activebutton.classList.remove("black")
        },100
    ) ;
 }
