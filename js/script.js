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

gsap.to("#flexoprinter", {x: -300, duration: 0, opacity: 0.3,})

gsap.to("#flexoprinter", {x: 0, duration: 1, opacity: 1,
    scrollTrigger: {
        trigger: "#flexoprinter",
        start: "top 80%",
        end: "center 20%",
        toggleActions: "play reverse play reverse",
    }
})

gsap.to("#corrugadora", {x: 300, duration: 0, opacity: 0.3,})
gsap.to("#corrugadora", {x: 0, duration: 1, opacity: 1,
    scrollTrigger: {
        trigger: "#corrugadora",
        start: "top 80%",
        end: "center 20%",
        toggleActions: "play reverse play reverse",
    }
})

gsap.to("#dobradora", {x: -300, duration: 0, opacity: 0.3,})
gsap.to("#dobradora", {x: 0, duration: 1, opacity: 1,
    scrollTrigger: {
        trigger: "#dobradora",
        start: "top 80%",
        end: "center 20%",
        toggleActions: "play reverse play reverse",
    }
})

gsap.to("#prototipos", {x: 300, duration: 0, opacity: 0.3,})
gsap.to("#prototipos", {x: 0, duration: 1, opacity: 1,
    scrollTrigger: {
        trigger: "#prototipos",
        start: "top 80%",
        end: "center 20%",
        toggleActions: "play reverse play reverse",
    }
})

// video youtube

gsap.to("#video1", {x: 300, duration: 0, opacity: 0.3,})
gsap.to("#video1", {x: 0, duration: 1, opacity: 1,
    scrollTrigger: {
        trigger: "#video1",
        start: "top 80%",
        end: "center 20%",
        toggleActions: "play reverse play reverse",
    }
})

gsap.to("#video2", {x: -300, duration: 0, opacity: 0.3,})
gsap.to("#video2", {x: 0, duration: 1, opacity: 1,
    scrollTrigger: {
        trigger: "#video2",
        start: "top 80%",
        end: "center 20%",
        toggleActions: "play reverse play reverse",
    }
})

gsap.to("#video3", {x: 300, duration: 0, opacity: 0.3,})
gsap.to("#video3", {x: 0, duration: 1, opacity: 1,
    scrollTrigger: {
        trigger: "#video3",
        start: "top 80%",
        end: "center 20%",
        toggleActions: "play reverse play reverse",
    }
})

gsap.to("#video4", {x: -300, duration: 0, opacity: 0.3,})
gsap.to("#video4", {x: 0, duration: 1, opacity: 1,
    scrollTrigger: {
        trigger: "#video4",
        start: "top 80%",
        end: "center 20%",
        toggleActions: "play reverse play reverse",
    }
})

gsap.to("#video5", {x: 300, duration: 0, opacity: 0.3,})
gsap.to("#video5", {x: 0, duration: 1, opacity: 1,
    scrollTrigger: {
        trigger: "#video5",
        start: "top 80%",
        end: "center 20%",
        toggleActions: "play reverse play reverse",
    }
})

gsap.to("#video6", {x: -300, duration: 0, opacity: 0.3,})
gsap.to("#video6", {x: 0, duration: 1, opacity: 1,
    scrollTrigger: {
        trigger: "#video6",
        start: "top 80%",
        end: "center 20%",
        toggleActions: "play reverse play reverse",
    }
})