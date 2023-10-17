gsap.registerPlugin(ScrollTrigger);

// NAVBAR SECTION
// TopBar

ScrollTrigger.create({
    trigger: "#carousel-section",
    toggleClass: {
        targets: "#navbarTop",
        className: "navbarTop-active",
    }
})

//BottomBar

ScrollTrigger.create({
    trigger: "#carousel-section",
    toggleClass: {
        targets: "#navbarBottom", 
        className: "navbarBottom-active",
    }
})

ScrollTrigger.create({
    trigger: "#carousel-section",
    toggleClass: {
        targets: "#navbarBottom a",
        className: ".navbarBottom a",
    }
})

// PRODUCTS SESSION

for(n=1;n<=4;n++){
    if(n%2 == 0){
        gsap.to(`#item-${n}`, {x: 300, duration: 0, opacity: 0.3,})
    } else {
        gsap.to(`#item-${n}`, {x: -300, duration: 0, opacity: 0.3,})
    }

    gsap.to(`#item-${n}`, {x: 0, duration: 1, opacity: 1,
        scrollTrigger: {
            trigger: `#item-${n}`,
            start: "top 80%",
            end: "center 20%",
            toggleActions: "play reverse play reverse",
        }
    })
}

// video youtube

for(i=0;i<=6;i++){

    if(i%2 == 0){
        gsap.to(`#video${i}`, {x: 300, duration: 0, opacity: 0.3,})
    } else {
        gsap.to(`#video${i}`, {x: -300, duration: 0, opacity: 0.3,})
    }

    gsap.to(`#video${i}`, {x: 0, duration: 1, opacity: 1,
        scrollTrigger: {
            trigger: `#video${i}`,
            start: "top 80%",
            end: "center 20%",
            toggleActions: "play reverse play reverse",
        }
    })
}
