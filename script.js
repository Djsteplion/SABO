
 
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
 

  

           /* Item 3 */
         // This is the target element
         const targetElementItem3 = document.querySelector('.item3');

         // setup the intersection observer
         const observer8 = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // add the css class that triggers the animation
                    targetElementItem3.classList.add('animate__animated', 'animate__rollIn');
                    
                    // stop observing once the animation is triggered
                    observer8.unobserve(entry.target);
                }
            });
         }, { threshold: 0.5}); // adjust the threshhold as needed
         
         // start observing the target element
         observer8.observe(targetElementItem3);



           /* Item 4 */
         // This is the target element
         const targetElementItem4 = document.querySelector('.item4');

         // setup the intersection observer
         const observer9 = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // add the css class that triggers the animation
                    targetElementItem4.classList.add('animate__animated', 'animate__rollIn');
                    
                    // stop observing once the animation is triggered
                    observer9.unobserve(entry.target);
                }
            });
         }, { threshold: 0.5}); // adjust the threshhold as needed
         
         // start observing the target element
         observer9.observe(targetElementItem4);

/**************************** END Of SCRIPT FOR About Us Div  *****************************************/







/**************************** Beginning Of SCRIPT FOR "How to get involved" Div ******************************/
 
// This is the target element
 const targetElementA = document.querySelector('.getIn');

 // setup the intersection observer
 const observer10 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // add the css class that triggers the animation
            targetElementA.classList.add('animate__animated', 'animate__flipInY');
            
            // stop observing once the animation is triggered
            observer10.unobserve(entry.target);
        }
    });
 }, { threshold: 0.5}); // adjust the threshhold as needed
 
 // start observing the target element
 observer10.observe(targetElementA);



 // This is the target element
 const targetElementB = document.querySelector('.ourNeeds');

 // setup the intersection observer
 const observer11 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // add the css class that triggers the animation
            targetElementB.classList.add('animate__animated', 'animate__flipInX');
            
            // stop observing once the animation is triggered
            observer11.unobserve(entry.target);
        }
    });
 }, { threshold: 0.5}); // adjust the threshhold as needed
 
 // start observing the target element
 observer11.observe(targetElementB);

/**************************** END Of SCRIPT FOR "How to get involved" Div ******************************/






/**************************** Beginning Of SCRIPT FOR "GIVE" Div ******************************/

 // This is the target element
 const targetElementGive = document.querySelector('.GIVE');

 // setup the intersection observer
 const observer12 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // add the css class that triggers the animation
            targetElementGive.classList.add('animate__animated', 'animate__rotateIn');
            
            // stop observing once the animation is triggered
            observer12.unobserve(entry.target);
        }
    });
 }, { threshold: 0.5}); // adjust the threshhold as needed
 
 // start observing the target element
 observer12.observe(targetElementGive);

/**************************** END Of SCRIPT FOR "GIVE" Div ******************************/








/**************************** Beginning Of SCRIPT FOR "contact Us" Div ******************************/

 // This is the target element
 const targetElementContact = document.querySelector('.contact');

 // setup the intersection observer
 const observer13 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // add the css class that triggers the animation
            targetElementContact.classList.add('animate__animated', 'animate__slideInDown');
            
            // stop observing once the animation is triggered
            observer13.unobserve(entry.target);
        }
    });
 }, { threshold: 0.5}); // adjust the threshhold as needed
 
 // start observing the target element
 observer13.observe(targetElementContact);

 /**************************** END Of SCRIPT FOR "contact Us" Div ******************************/





/** Begininng Of script for menu **/

function openNav(){
   document.getElementById("sidenav").style.width="100%";
   document.getElementById("face").style.color="white";
}

function closeNav(){
   document.getElementById("sidenav").style.width="0";
   document.getElementById("face").style.color="transparent";
}

/** End Of script for menu */
