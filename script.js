var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px", // Corrected typo here
    scrollTrigger: {
        trigger: "#nav", // The element that triggers the animation
        scroller: "body", // The container that scrolls
        // markers: true, // Uncomment to debug the trigger points
        start: "top -10%", // Animation starts when the top of #nav is 10% above the viewport
        end: "top -11%", // Animation ends when the top of #nav is 11% above the viewport
        scrub: 1, // Smoothly animates as you scroll
    },
}); 


gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 0,
    },
});


document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 30 + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #ff6f61";
        crsr.style.backgroundColor = "#ff6f61";
    });
});

gsap.from("#about-us img, #about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    },
});

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});

// If you want smooth scrolling instead of a sudden jump
// document.querySelectorAll("#nav h4").forEach((item) => {
//     item.addEventListener("click", function () {
//         let targetId = this.innerText.toLowerCase().replace(" ", "-");
//         let targetElement = document.getElementById(targetId);
//         if (targetElement) {
//             window.scrollTo({
//                 top: targetElement.offsetTop,
//                 behavior: "smooth",
//             });
//         }
//     });
// });
