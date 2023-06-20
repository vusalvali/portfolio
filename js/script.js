// Clock 
// const body = document.querySelector('body', startTime())
// body.addEventListener('onload', )
// function startTime() {
//     const today = new Date();
//     let h = today.getHours();
//     let m = today.getMinutes();
//     let s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.querySelector('.clockLine').innerHTML =  h + ":" + m + ":" + s;
//     // document.querySelector('.clockLine').style.color = 'white'
//     setTimeout(startTime, 1000);
//   }
  
//   function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
//   }


function startTime(){
    const date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;
    document.querySelector(".clockLine").innerText = time;
    // document.querySelector("body").textContent = time;
    
    setTimeout(startTime, 1000);
    
}

startTime();

// Hover Display Section Names
// function showSectionNames() {
//     const screenWidth = window.innerWidth;
  
//     if (screenWidth <= 600) {
//       const sectionNames = document.querySelectorAll('.dnone span');
//       sectionNames.forEach((span) => {
//         span.style.display = 'none';
//       });
//     }
//   }
  
//   showSectionNames();
  
//   window.addEventListener('resize', showSectionNames);

// function addEventListenersIfOver600px() {
//     const screenWidth = window.innerWidth || document.documentElement.clientWidth;

//     if (screenWidth >= 600) {
//       const homeIcon = document.querySelector('.home-img');
//       homeIcon.addEventListener("mouseenter", (e) => {
//         document.querySelector('.home-outside').style.display = "block";
//       });
//       homeIcon.addEventListener("mouseleave", (e) => {
//         document.querySelector('.home-outside').style.display = "none";
//       });
  
//       const aboutIcon = document.querySelector('.about-img');
//       aboutIcon.addEventListener("mouseenter", (e) => {
//         document.querySelector('.about-outside').style.display = "block";
//       });
//       aboutIcon.addEventListener("mouseleave", (e) => {
//         document.querySelector('.about-outside').style.display = "none";
//       });
  
//       // Add event listeners for other icons...
  
//       const contactIconAbout = document.querySelector('.contact-img');
//       contactIconAbout.addEventListener("mouseenter", (e) => {
//         document.querySelector('.contact-outside-about').style.display = "block";
//       });
//       contactIconAbout.addEventListener("mouseleave", (e) => {
//         document.querySelector('.contact-outside-about').style.display = "none";
//       });
//     }
//   }
  
//   addEventListenersIfOver600px();
  
//   window.addEventListener('resize', addEventListenersIfOver600px);
  






// function addEventListenersIfOver600px() {
//     const mediaQuery = window.matchMedia("(min-width: 600px)");
  
//     const homeIcon = document.querySelector('.home-img');
//     const aboutIcon = document.querySelector('.about-img');
//     // Add event listeners for other icons...
  
//     function handleMouseEnter(e) {
//       document.querySelector(`.${e.target.dataset.outside}`).style.display = "block";
//     }
  
//     function handleMouseLeave(e) {
//       document.querySelector(`.${e.target.dataset.outside}`).style.display = "none";
//     }
  
//     if (mediaQuery.matches) {
//       homeIcon.addEventListener("mouseenter", handleMouseEnter);
//       homeIcon.addEventListener("mouseleave", handleMouseLeave);
  
//       aboutIcon.addEventListener("mouseenter", handleMouseEnter);
//       aboutIcon.addEventListener("mouseleave", handleMouseLeave);
  
//       // Add event listeners for other icons...
//     }
  
//     function handleMediaQueryChange(e) {
//       if (e.matches) {
//         homeIcon.addEventListener("mouseenter", handleMouseEnter);
//         homeIcon.addEventListener("mouseleave", handleMouseLeave);
  
//         aboutIcon.addEventListener("mouseenter", handleMouseEnter);
//         aboutIcon.addEventListener("mouseleave", handleMouseLeave);
  
//         // Add event listeners for other icons...
//       } else {
//         homeIcon.removeEventListener("mouseenter", handleMouseEnter);
//         homeIcon.removeEventListener("mouseleave", handleMouseLeave);
  
//         aboutIcon.removeEventListener("mouseenter", handleMouseEnter);
//         aboutIcon.removeEventListener("mouseleave", handleMouseLeave);
  
//         // Remove event listeners for other icons...
//       }
//     }
  
//     mediaQuery.addEventListener("change", handleMediaQueryChange);
//   }
  
//   addEventListenersIfOver600px();
  







const homeOutside = document.querySelector('.home-outside').classList.add('hidden');
const aboutOutside = document.querySelector('.about-outside').classList.add('hidden');
const portOutside = document.querySelector('.port-outside').classList.add('hidden');
const contactOutside = document.querySelector('.contact-outside').classList.add('hidden');




    const homeIcon = document.querySelector('.home-img')
  homeIcon.addEventListener("mouseenter", (e) => {
      document.querySelector('.home-outside').style.display = "block";
  })
  homeIcon.addEventListener("mouseleave", (e) => {
      document.querySelector('.home-outside').style.display = "none";
  })
  
  const aboutIcon = document.querySelector('.about-img')
  aboutIcon.addEventListener("mouseenter", (e) => {
      document.querySelector('.about-outside').style.display = "block";
  })
  aboutIcon.addEventListener("mouseleave", (e) => {
      document.querySelector('.about-outside').style.display = "none";
  })
  
  const portIcon = document.querySelector('.port-img')
  portIcon.addEventListener("mouseenter", (e) => {
      document.querySelector('.port-outside').style.display = "block";
  })
  portIcon.addEventListener("mouseleave", (e) => {
      document.querySelector('.port-outside').style.display = "none";
  })
  
  const contactIcon = document.querySelector('.contact-img')
  contactIcon.addEventListener("mouseenter", (e) => {
      document.querySelector('.contact-outside').style.display = "block";
  })
  contactIcon.addEventListener("mouseleave", (e) => {
      document.querySelector('.contact-outside').style.display = "none";
  })
  


// function handleScreenSize() {
//   if (window.screenX >= 600) {
//     const homeIconAbout = document.querySelector('.home-img');
//     homeIconAbout.addEventListener("mouseenter", (e) => {
//       document.querySelector('.home-outside-about').style.display = "block";
//     });
//     homeIconAbout.addEventListener("mouseleave", (e) => {
//       document.querySelector('.home-outside-about').style.display = "none";
//     });

//     const aboutIconAbout = document.querySelector('.about-img');
//     aboutIconAbout.addEventListener("mouseenter", (e) => {
//       document.querySelector('.about-outside-about').style.display = "block";
//     });
//     aboutIconAbout.addEventListener("mouseleave", (e) => {
//       document.querySelector('.about-outside-about').style.display = "none";
//     });

//     const portIconAbout = document.querySelector('.port-img');
//     portIconAbout.addEventListener("mouseenter", (e) => {
//       document.querySelector('.port-outside-about').style.display = "block";
//     });
//     portIconAbout.addEventListener("mouseleave", (e) => {
//       document.querySelector('.port-outside-about').style.display = "none";
//     });

//     const contactIconAbout = document.querySelector('.contact-img');
//     contactIconAbout.addEventListener("mouseenter", (e) => {
//       document.querySelector('.contact-outside-about').style.display = "block";
//     });
//     contactIconAbout.addEventListener("mouseleave", (e) => {
//       document.querySelector('.contact-outside-about').style.display = "none";
//     });
//   } else {
//     // Remove event listeners if the screen width is less than 800
//     const homeIconAbout = document.querySelector('.home-img');
//     homeIconAbout.removeEventListener("mouseenter", (e) => {
//       document.querySelector('.home-outside-about').style.display = "block";
//     });
//     homeIconAbout.removeEventListener("mouseleave", (e) => {
//       document.querySelector('.home-outside-about').style.display = "none";
//     });

//     const aboutIconAbout = document.querySelector('.about-img');
//     aboutIconAbout.removeEventListener("mouseenter", (e) => {
//       document.querySelector('.about-outside-about').style.display = "block";
//     });
//     aboutIconAbout.removeEventListener("mouseleave", (e) => {
//       document.querySelector('.about-outside-about').style.display = "none";
//     });

//     const portIconAbout = document.querySelector('.port-img');
//     portIconAbout.removeEventListener("mouseenter", (e) => {
//       document.querySelector('.port-outside-about').style.display = "block";
//     });
//     portIconAbout.removeEventListener("mouseleave", (e) => {
//       document.querySelector('.port-outside-about').style.display = "none";
//     });

//     const contactIconAbout = document.querySelector('.contact-img');
//     contactIconAbout.removeEventListener("mouseenter", (e) => {
//       document.querySelector('.contact-outside-about').style.display = "block";
//     });
//     contactIconAbout.removeEventListener("mouseleave", (e) => {
//       document.querySelector('.contact-outside-about').style.display = "none";
//     });
//   }
// }

// // Call the function initially
// handleScreenSize();

// // Add event listener for resize event
// window.addEventListener('resize', handleScreenSize());









