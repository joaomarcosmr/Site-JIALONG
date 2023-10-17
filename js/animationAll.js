gsap.registerPlugin(ScrollTrigger);

    // PRODUCTS SESSION
    for(n=1;n<=4;n++){
        console.log('to aqui')
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
    for(i=1;i<=6;i++){
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
