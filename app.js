vid = document.getElementById("bgVid");
// scroll to top on window load
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
async function playVid() {

    await sleep(1000);
    vid.addEventListener("ended", function () {
        //do next
    });
}
window.onmessage = function (e) {
    vata =window.atob(e.data);
    vjata = JSON.parse(vata);
    if(vjata.event == "goto"){
        window.location.href = vjata.data;
    }

}
function proShow(){
    location.href='https://forms.gle/qf1zR2VFD1ff5dqy6'
}



var MEN = false;

async function MENU(){
    if(MEN){
        elem("menuWindow").style.width = "0vw";
        MEN = false;
        document.body.style.overflowY = "scroll"

    }else{
        document.body.style.overflowY = "hidden"
        elem("menuWindow").style.width = "100vw";

        MEN = true;

    }
}


async function skip(){
    elem('bgVid').style.opacity = 0;
    elem('title').style.display = "flex";
    elem("Boogie").style.opacity = 0;
    elem('skipbt').style.opacity = 0;
    await sleep(400);
    elem('bgVid').style.opacity = 0;
    await sleep(500);
    await this.setTimeout(() => {
        elem('Boogie').style.display = "none";
    },400)
    elem('bgVid').style.display = "none";
    elem('skipbt').style.display = "none";
    elem("hBG").style.opacity = 1;
    document.body.style.overflowY = "scroll"
    elem("menu").style.display  = "block";
    await sleep(100);
    elem("menu").style.opacity = 1;

}

elem('skipbt').addEventListener('click', async function () {
    skip();
});

// skip();
async function bis(){
    await backspace(0);
            _isAnimRunning = true;
            await sleep(500);
            await typeIn("> Tell me about Aswin Thulasi R in a professional way");
            await sleep(1000)
            await backspace(0,true);
            elem("rw").style.opacity = 0;
            await this.setTimeout(() => {
                elem('rw').style.display = "none";
            },400)
            elem("rw2").style.display = "flex";
            elem("rw2").style.opacity = 1;
            await sleep(500);
            elem("sliderMatte").style.width = "12%"
            await sleep(200);
            elem("sliderMatte").style.width = "48%"
            await sleep(200);
            elem("sliderMatte").style.width = "90%"
            await sleep(300);
            elem("sliderMatte").style.width = "100%"
            elem("rw2").style.opacity = 0;
            elem('bgVid').style.opacity = 1;
            elem('bgVid').style.display = "block";
            await this.setTimeout(() => {
                elem('rw2').style.display = "none";
            },400)
            elem('bgVid').play();
            
            elem('bgVid').addEventListener("ended",async function(){

                // elem('bgVid').style.opacity = 0;
                

                elem('title').style.display = "flex";
                await sleep(400);
                elem('bgVid').style.opacity = 0;
            await sleep(500);
            elem('bgVid').style.display = "none";

            }
            )
            elem('skipbt').style.opacity = 0;
            await sleep(3500);
            elem("hBG").style.opacity = 1;
            elem('skipbt').style.display = "none";

            elem("Boogie").style.opacity=0;
            await sleep(200);
            elem("Boogie").style.display="none";
            document.body.style.overflow = "scroll"
            elem("menu").style.display  = "block";
            await sleep(100);
            elem("menu").style.opacity = 1;
}

async function jizz(){
    if(_isAnimRunning){}else{
        _isAnimRunning = true;
        bis();
    }
}

window.addEventListener('keydown', async function (e) {
    if (e.key == " ") {
        if (_isAnimRunning) {
            // _isAnimRunning = false;
        }else{
           bis()
        }
    }
});

async function backspace(n = 8,f = false) {
    var mig = elem("miggity");
    var pig = elem("thempiIsgay")
    var jig = mig.innerHTML.split("");
    var vig = pig.innerHTML.split("");
    len = jig.length - n
    lens = vig.length - n

    for (var i = 0; i < len; i++) {
        // console.log(jig);
        if(f){
            await sleep(3)
            jig.pop();
            
        }else{
        await sleep(50);
        jig.pop();
        
        }
        mig.innerHTML = jig.join("");

    }
    for(var i=0;i<lens;i++){
        if(f){
            await sleep(3);
            vig.pop();
        }else{
            await sleep(50);
            vig.pop();
        }
        pig.innerHTML = vig.join("")

    }
}

async function typeIn(text) {
    var mig = elem("miggity");
    var pig = elem("thempiIsgay");
    var jig = mig.innerHTML.split("");
    var vig = pig.innerHTML.split("");
    for (var i = 0; i < text.length; i++) {
        await sleep(25);
        jig.push(text[i]);
        vig.push(text[i]);
        mig.innerHTML = jig.join("");
        pig.innerHTML = vig.join("");
    }
}


var _isAnimRunning = false;







// buttons

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button, index) => {
        button.style.animationDelay = `${0.5 + index * 0.2}s`;
    });
});
