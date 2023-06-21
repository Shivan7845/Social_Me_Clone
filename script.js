var full = document.querySelector(".full");
var menu = document.querySelector(".nav h3");
var flag = 0

menu.addEventListener("click", function(){
    if(flag==0){
        full.style.top = "0";
        menu.innerHTML= `<i class="ri-close-fill"></i>`
        flag = 1;
    }else{
        full.style.top ="-100%";
         menu.innerHTML = `<i class="ri-close-fill"></i>`
         flag= 0;
    }
})





gsap.from(".nav",{
    y : -100,
    opacity :0,
    duration:1,
})
gsap.from(".p1-center",{
    x:"50%",
    opacity:0,
    duration:1,
})
gsap.from(".content",{
    x : 200,
    opacity:0,
    duration :2,
    scrollTrigger:{
        scroller: "body",
        // markers : true,
        start :"80%",
        end : "30%",
        scrub : 4,
    }
})
gsap.from(".p3-top> h1", {
    x :200,
    opacity :0,
    duration:4,
    delay:2,
    scrollTrigger:{
        scroller: "body",
        start: "80%",
        end : '30%',
        scrub : 4,
    }
})
gsap.from(".p3-bottom >.img",{
    x:10,
    opacity:0,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger : ".p3-bottom >.img",
        scroller : "body",
        // markers : true,
        start : "top 50%",
        end : "bottom 80%",
        scrub : 4,

    }
})
gsap.from(".page4 h1", {
    x :200,
    opacity :0,
    duration:4,
    delay:1,
    scrollTrigger:{
        trigger : ".page4 h1",
        scroller : "body",
        // markers :true, 
        start : "top 80%",
        end : "bottom 10%",
        scrub : 4,
    }
})

gsap.from(".p4-img img", {
    y :100,
    opacity :0,
    duration:2,
    delay:1,
    stagger : 0.3,
    scrollTrigger:{
        trigger : ".p4-img img",
        scroller : "body",
        // markers :true, 
        start : "top 80%",
        end : "bottom 10%",
        scrub : 4,
    }
})
gsap.from(".p5-left img", {
    x :10,
    opacity :0,
    duration:2,
    delay:1,
    stagger : 0.3,
    scrollTrigger:{
        trigger : ".p5-left img",
        scroller : "body",
        // markers :true, 
        start : "top 80%",
        end : "bottom 10%",
        scrub : 4,
    }
})
gsap.from(".p5-right img", {
    x :100,
    opacity :0,
    duration:2,
    delay:1,
    stagger : 0.4,
    scrollTrigger:{
        trigger : ".p5-right img",
        scroller : "body",
        // markers :true, 
        start : "top 60%",
        end : "bottom 30%",
        scrub : 4,
    }
})
gsap.from(".p5-right h1", {
    x :10,
    opacity :0,
    duration:2,
    delay:1,
    stagger : 0.3,
    scrollTrigger:{
        trigger : ".p5-right h1",
        scroller : "body",
        // markers :true, 
        start : "top 80%",
        end : "bottom 10%",
        scrub : 4,
    }
})
gsap.from(".p5-right p", {
    x :300,
    opacity :0,
    duration:2,
    delay:1,
    stagger : 0.3,
    scrollTrigger:{
        trigger : ".p5-right p",
        scroller : "body",
        // markers :true, 
        start : "top 80%",
        end : "bottom 10%",
        scrub : 4,
    }
})
gsap.from(".page6 h2", {
    x :10,
    opacity :0,
    duration:2,
    delay:1,
    stagger : 0.3,
    scrollTrigger:{
        trigger : ".page6 h2",
        scroller : "body",
        // markers :true, 
        start : "top 80%",
        end : "bottom 10%",
        scrub : 4,
    }
})
gsap.from(".page6 h3", {
    x :-100,
    opacity :0,
    duration:2,
    delay:1,
    stagger : 0.3,
    scrollTrigger:{
        trigger : ".page6 h3",
        scroller : "body",
        // markers :true, 
        start : "top 80%",
        end : "bottom 10%",
        scrub : 4,
    }
})

gsap.from(".page7 img", {
    x :10,
    opacity :0,
    duration:2,
    delay:1,
    stagger : 0.3,
    scrollTrigger:{
        trigger : ".page7 img",
        scroller : "body",
        // markers :true, 
        start : "top 80%",
        end : "bottom 10%",
        scrub : 4,
    }
})
gsap.from(".p7-top h1", {
    x :-10,
    opacity :0,
    duration:2,
    delay:1,
    stagger : 0.3,
    scrollTrigger:{
        trigger : ".p7-top h1",
        scroller : "body",
        // markers :true, 
        start : "top 80%",
        end : "bottom 10%",
        scrub : 4,
    }
})
gsap.from(".p7-bottom img", {
    x :10,
    opacity :0,
    duration:3,
    delay:0,
    stagger : 0.4,
    rotate: 360,
    scrollTrigger:{
        trigger : ".p7-bottom img",
        scroller : "body",
        // markers :true, 
        start : "top 80%",
        end : "top 20%",
        scrub :true,
    }
})
gsap.from(".p8-left img", {
    x :10,
    opacity :0,
    duration:2,
    delay:1,
    stagger : 0.3,
    scrollTrigger:{
        trigger : ".p8-left img",
        scroller : "body",
        // markers :true, 
        start : "top 80%",
        end : "bottom 10%",
        scrub : 4,
    }
})

gsap.from(".p8-left h1 , .p8-left h2", {
    x :-200,
    opacity :0,
    duration:2,
    delay:1,
    stagger : 0.3,
    scrollTrigger:{
        trigger : ".p8-left img",
        scroller : "body",
        // markers :true, 
        start : "top 80%",
        end : "bottom 10%",
        scrub : 4,
    }
})
gsap.from(".p8-left input", {
    x :10,
    opacity :0,
    duration:2,
    delay:1,
    stagger : 0.3,
    scrollTrigger:{
        trigger : ".p8-left input",
        scroller : "body",
        // markers :true, 
        start : "top 80%",
        end : "bottom 10%",
        scrub : 4,
    }
})
gsap.from(".p8-right img", {
    x :10,
    opacity :0,
    duration:2,
    delay:1,
    stagger : 0.3,
    scrollTrigger:{
        trigger : ".p8-left img",
        scroller : "body",
        // markers :true, 
        start : "top 80%",
        end : "bottom 10%",
        scrub : 4,
    }
})

gsap.from(".p9-top h1", {
    x :100,
    opacity :0,
    duration:2,
    delay:1,
    stagger : 0.3,
    scrollTrigger:{
        trigger : ".p9-top h1",
        scroller : "body",
        // markers :true, 
        start : "top 80%",
        end : "bottom 10%",
        scrub : 4,
    }
})
gsap.from(".p9-top ul", {
    x :20,
    opacity :0,
    duration:2,
    delay:1,
    stagger : 0.3,
    scrollTrigger:{
        trigger : ".p9-top ul",
        scroller : "body",
        // markers :true, 
        start : "top 80%",
        end : "bottom 10%",
        scrub : 4,
    }
})
gsap.from(".p9b img", {
    x : 100,
    opacity :0,
    duration:2,
    delay:1,
    stagger : 0.3,
    scrollTrigger:{
        trigger : ".p9b img",
        scroller : "body",
        // markers :true, 
        start : "top 80%",
        end : "bottom 60%",
        scrub : 4,
    }
})

gsap.from(".p9b h2", {
    x : 10,
    opacity :0,
    duration:2,
    delay:1,
    stagger : 0.3,
    scrollTrigger:{
        trigger : ".p9b h2",
        scroller : "body",
        // markers :true, 
        start : "top 80%",
        end : "bottom 60%",
        scrub : 4,
    }
})
gsap.from(".p9-bottom", {
    x : 100,
    opacity :0,
    duration:2,
    delay:1,
    stagger : 0.3,
    scrollTrigger: true
})
// =======================================================




