//TYPING EFFECT
let i = 0,
    text;
text = 'Thanks for being here';

function typing() {

    if (i < text.length) {
        document.getElementById('greeting').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);

    }

}
typing();





//SMOOTH SCROLLING
function smoothScroll(section, duration) {
    let target = document.querySelector(section);
    let targetPosition = target.getBoundingClientRect().top;
    let positionY = window.pageYOffset;
    let distance = targetPosition - positionY;
    let startTime = null;
    // console.log('Position Y: '+ positionY);
    // console.log('Start Position: '+ positionY);
    // console.log('Target Position: '+targetPosition);
    // console.log(`Distance: ${targetPosition-positionY}`);
    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }
        console.log('Current time : ', startTime);

        let timeElapsed = currentTime - startTime;
        console.log('elapsed time : ', timeElapsed);
        let run = ease(timeElapsed, positionY, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    //http://gizma.com/easing/
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }



    requestAnimationFrame(animation);

}

let btn = document.querySelector('#learn-more');
btn.addEventListener('click', function () {
    smoothScroll('.section-1', 1000);
});
var dbgEnabled = Debug.debuggerEnabled;
console.log(dbgEnabled);

