var container = document.querySelector('.container');
var line = document.querySelector('.line');
var toprod = document.getElementById('toprod');
var buttomrod = document.getElementById('buttomrod');
var ball = document.getElementById('ball');

var game = false;
document.addEventListener('keypress',function(event){
    var leftposition = buttomrod.getBoundingClientRect().x;
    if(event.keyCode == 97 && leftposition > 40){
        buttomrod.style.left = leftposition - 40 + 'px';
        toprod.style.left = buttomrod.style.left;
    }
    if(event.keyCode == 108 && leftposition < 900 ){
        buttomrod.style.left = leftposition + 40 + 'px';
        toprod.style.left = buttomrod.style.left;
    }
    
    if(event.keyCode == 32 && game == false){
        game == true;
        var ballRect = ball.getBoundingClientRect();
        var ballx = ballRect.x;
        var bally = ballRect.y;
        var ballspeedx = 2;
        var ballspeedy = 2;
        var ballwidth = ball.clientWidth;
        
        setInterval(function(){
            ballx = ballx + ballspeedx;
            ball.style.left = ballx + 'px';
            bally = bally + ballspeedy;
            ball.style.top = bally + 'px';

            var toprodx = toprod.getBoundingClientRect().x;
            var buttomrodx = buttomrod.getBoundingClientRect().x;
            var toprodwidth = toprod.clientWidth;
            var buttomrodwidth = buttomrod.clientWidth;

            if((ball.getBoundingClientRect().top > 474) || (ball.getBoundingClientRect().top < 35)){
                ballspeedy = -ballspeedy;
                if((ballx + ballwidth/2 < toprodx) || (ballx + ballwidth/2 > toprodx + toprodwidth)){
                    alert('game over');
                    game = false;
                    return;
                }
            }
            if((ball.getBoundingClientRect().x > 1083) || (ball.getBoundingClientRect().x < 0)){
                ballspeedx = -ballspeedx;
                
            }



        },10)
    }
})
 












// container.addEventListener('click',function(){

//     container.classList.add('animation');
//     /*
//     setTimeout(function(){
//         container.classList.remove('animation');
//     },500)
//     */

// })






/*
function slide(){
    container.classList.add('animation');
    container.classList.remove('animation');

}
*/
