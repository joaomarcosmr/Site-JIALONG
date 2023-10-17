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
