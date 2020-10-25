let song =["Goku Black's Theme.mp3","Blue Vegito Theme.mp3","Ultra Instinct Theme.mp3","DBZ-Android 18 Theme.mp3","Dragonball Z (O Theme).mp3"]
let poster = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
let title = document.getElementById("title");
let fillB = document.getElementById("fill");
let sing = new Audio();
let currentS=  0;  // that is pointing to the current song
window.onload = plays ;

function plays(){
    sing.src = song[currentS]; 
    title.textContent = song[currentS];
    sing.play(); //play the song
}
function playOrP(){
    if(sing.paused){
        sing.play();
        $("#play img").attr("src","Pause.png");
    }else{
        sing.pause();
        $("#play img").attr("src","Play.png");
    }
}
sing.addEventListener('timeupdate', function(){
    let position = sing.currentTime / sing.duration;
    fillB.style.width = position * 100 + '%';
})
 function next(){
     currentS++;
     if(currentS > song.length -1){
         currentS=0;
     }
     plays();
     $("#play img").attr("src","Pause.png");
     $("#image img").attr("src",poster[currentS]);
     $("#bg img").attr("src",poster[currentS]);

 };
 function pre(){
    currentS--;
    if(currentS < 0){
        currentS=song.length -1;
    }
    plays();
    $("#play img").attr("src","Pause.png");
    $("#image img").attr("src",poster[currentS]);
    $("#bg img").attr("src",poster[currentS]);

};