const myText = new SplitType('.my-text');
gsap.registerPlugin(ScrollTrigger);

gsap.to('.char', {
    y: 0,
    stagger: 0.1,
    dealy: 0.2,
    duration: .1,
    onComplete: activateScrollTrigger()
})


function activateScrollTrigger(){
  gsap.to('.char', {
    yPercent: -100,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.my-content',
      start: 'top top',
      end: `+=${document.querySelector('.my-content').offSetHeight * 0.25}`,
      scrub: 1,
     
    }
  })
}

gsap.to(".button-border", {
  rotation: 360,
  duration: 10,
  ease: "none",
  repeat: -1,
  transformOrigin: "center center"
});


  


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-section",
        pin: true,
        start: "top top",
        end: "+=100%",
        scrub: 1,
      }
    });

  
    gsap.set([".card-1", ".card-2"], {
      x: 0,
      y: 0
    });
    
    gsap.set(".center-text", {
      opacity: 0
    });

    // Animation timeline
    tl.to(".card-1", {
      x: "-400px",
      ease: "power1.inOut",
      duration: 1
    }, 0);

    tl.to(".card-2", {
      x: "400px",
      ease: "power1.inOut",
      duration: 1
    }, 0);

    tl.to(".center-text", {
      opacity: 1,
      duration: 0.5
    }, 0.3);