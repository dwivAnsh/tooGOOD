function locomotive(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

locomotive(); 

function videoconAnimation(){
var video = document.querySelector("#video-container")
var cur = document.querySelector("#play")

video.addEventListener("mouseenter", function(){
    gsap.to(cur,{
        opacity: 1,
        scale: 1
    })
})

video.addEventListener("mouseleave", function(){
    gsap.to(cur,{
        opacity: 0,
        scale: 0
    })
})

video.addEventListener("mousemove", function(dets){
    gsap.to(cur,{
        x : dets.x-video.getBoundingClientRect().x-45,
        y : dets.y-video.getBoundingClientRect().y-50
    })
})
}

videoconAnimation();

function page1LoadingAnimation(){
    gsap.from("#page1 h1",{
        y: 100,
        duration: 0.9,
        opacity: 0,
        stagger: 0.3,
        delay: 0.5
    })
    
    gsap.from("#page1 #video-container",{
        scale: 0.9,
        duration: 0.7,
        opacity: 0,
        delay: 1.3
    })   
}

page1LoadingAnimation();

function page2ImageHoverAnimation(){
    var centerBoxes = document.querySelectorAll("#box-detail")
    var topBoxes = document.querySelectorAll("#detailed-imagery-slide")
    
    centerBoxes.forEach(function(elem,index){
        elem.addEventListener("mouseenter",function(){
            gsap.to(topBoxes[index],{ //ek elem se ek centerbox par uss box se related topbox ke lie index
                top: "1%",
                duration: 0.5,
                ease: "power2.out"
            })
        })
    
        elem.addEventListener("mouseleave", function () {
            if (!topBoxes[index].matches(":hover")) {  // Agar top box pe hover hai toh hide mat karo
                gsap.to(topBoxes[index], {
                    top: "-82.5%",
                    duration: 0.5,
                    ease: "power2.out",
                });
            }
        });
    
        topBoxes[index].addEventListener("mouseleave", function () {
            if (!elem.matches(":hover")) {
                gsap.to(topBoxes[index], {
                    top: "-82.5%",
                    duration: 0.5,
                    ease: "power2.out",
                });
            }
        });
    })
    
}

page2ImageHoverAnimation();

function fourImagePage3(){
var page = document.querySelector("#page3")
var curr = document.querySelector("#cursorPage3")

page.addEventListener("mousemove",function(dets){
    gsap.to(curr,{
        left: dets.x-page.getBoundingClientRect().x,
        top: dets.y-page.getBoundingClientRect().y
    })
})

document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursorPage3", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursorPage3", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
});
}

fourImagePage3();

var buttons = document.querySelectorAll(".button")
var content = document.querySelector("#button-detail h3")

const changeCont = [
    "I love the way they operate; <br>donating is one thing but<br>employing and empowering<br>women is so important",
    "You are the most amazing <br>people.Keep doing what <br>you are doing. <3",
    "It was an absolute pleasure to<br>partner with Two Good Co <br>for the event. Your food was <br>absolutely delicious!",
    "My package just arrived and the<br>presentation is so beautiful...<br>elegant, magical and meaningful <br>at the same<br> time. Thank you so much;<br> will be back for more.",
    "The hampers we ordered<br>were lovely and the team<br>are wonderful to liaise<br>with."
]

buttons.forEach(function(dets,index){
    dets.addEventListener("click",function(){
        let radio = this.querySelector("input[type='radio']");
        if (radio) {
            radio.checked = true; 
        }

        // innerHTML se change kardia h3 ko html me
        content.innerHTML = changeCont[index];
    })
})