
 
 /**  *****************Beginning Of SCRIPT  FOR GALLERY SLIDER  *************  */
 
 /* Card Slider - Swiper */
 var cardSlider = new Swiper('.card-slider', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },

    pagination: {
       el: '.swiper-pagination',
    },

    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 5,
    spaceBetween: 10,
    breakpoints: {
        // when window is <= 767px
        767: {
            slidesPerView: 5
        },
        // when window is <= 991px
        991: {
            slidesPerView: 5,
            spaceBetween: 10
        }
    }
});
 /**  ***************** END OF  SCRIPT  FOR GALLERY SLIDER  *************  */







/**  ***************** Beginning of SCRIPT  FOR  SLIDE-IN ANIMATIONS  USING Observer Api   *************  */
 

    /** EX1 **/
    // This is the target element
    const targetElement1 = document.querySelector('.Ex1');

    // setup the intersection observer
    const observer1 = new IntersectionObserver((entries, observer) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               // add the css class that triggers the animation
               targetElement1.classList.add('animate__animated', 'animate__slideInDown');
               
               // stop observing once the animation is triggered
               observer1.unobserve(entry.target);
           }
       });
    }, { threshold: 0.5}); // adjust the threshhold as needed
    
    // start observing the target element
    observer1.observe(targetElement1);
     



    /** EX2 **/
    // This is the target element
    const targetElementP1 = document.querySelector('.Ex2');

    // setup the intersection observer
    const observer2 = new IntersectionObserver((entries, observer) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               // add the css class that triggers the animation
               targetElementP1.classList.add('animate__animated', 'animate__fadeInLeft');
               
               // stop observing once the animation is triggered
               observer2.unobserve(entry.target);
           }
       });
    }, { threshold: 0.5}); // adjust the threshhold as needed
    
    // start observing the target element
    observer2.observe(targetElementP1);


         /** EX3 **/
        // This is the target element
        const targetElementP2 = document.querySelector('.Ex3');

        // setup the intersection observer
        const observer3 = new IntersectionObserver((entries, observer) => {
           entries.forEach(entry => {
               if (entry.isIntersecting) {
                   // add the css class that triggers the animation
                   targetElementP2.classList.add('animate__animated', 'animate__fadeInRight');
                   
                   // stop observing once the animation is triggered
                   observer3.unobserve(entry.target);
               }
           });
        }, { threshold: 0.5}); // adjust the threshhold as needed
        
        // start observing the target element
        observer3.observe(targetElementP2);




    /* Traders img */
   // This is the target element
   const targetElementPast = document.querySelector('.traderImgAndName');

   // setup the intersection observer
   const observer4 = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // add the css class that triggers the animation
              targetElementPast.classList.add('animate__animated', 'animate__fadeInLeft');
              
              // stop observing once the animation is triggered
              observer4.unobserve(entry.target);
          }
      });
   }, { threshold: 0.5}); // adjust the threshhold as needed
   
   // start observing the target element
   observer4.observe(targetElementPast);




       /* About Us */
      // This is the target element
      const targetElement3 = document.querySelector('.Atext');

      // setup the intersection observer
      const observer5 = new IntersectionObserver((entries, observer) => {
         entries.forEach(entry => {
             if (entry.isIntersecting) {
                 // add the css class that triggers the animation
                 targetElement3.classList.add('animate__animated', 'animate__fadeInRight');
                 
                 // stop observing once the animation is triggered
                 observer5.unobserve(entry.target);
             }
         });
      }, { threshold: 0.5}); // adjust the threshhold as needed
      
      // start observing the target element
      observer5.observe(targetElement3);



          /* Item 1 */
         // This is the target element
         const targetElementItem1 = document.querySelector('.Gtxt1');

         // setup the intersection observer
         const observer6 = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // add the css class that triggers the animation
                    targetElementItem1.classList.add('animate__animated', 'animate__fadeInLeft');
                    
                    // stop observing once the animation is triggered
                    observer6.unobserve(entry.target);
                }
            });
         }, { threshold: 0.5}); // adjust the threshhold as needed
         
         // start observing the target element
         observer6.observe(targetElementItem1);



           /* Item 2 */
         // This is the target element
         const targetElementItem2 = document.querySelector('.Gtxt2');

         // setup the intersection observer
         const observer7 = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // add the css class that triggers the animation
                    targetElementItem2.classList.add('animate__animated', 'animate__fadeInRight');
                    
                    // stop observing once the animation is triggered
                    observer7.unobserve(entry.target);
                }
            });
         }, { threshold: 0.5}); // adjust the threshhold as needed
         
         // start observing the target element
         observer7.observe(targetElementItem2);
 

  

