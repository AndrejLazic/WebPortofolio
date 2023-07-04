$(document).ready(function() {
  var typed = new Typed(".typingEng", {
    strings:["Frontend Developer","Web Developer","Software Developer"],
    typeSpeed:100,
    loop:true,
  });
});

$(document).ready(function() {
  var typed = new Typed(".typingSrb", {
    strings:["Frontend Developer","Web Developer","Software Developer"],
    typeSpeed:100,
    loop:true,
  });
});

$(document).ready(function() {
  var languageSwitch = $("#languageSwitch");
  var language = "english";

  languageSwitch.change(function() {
    if (language === "english") {
        language = "serbian";
        $(".eng").fadeOut(300, function() {
            $(".srb").fadeIn(300);
        });
    } else {
        language = "english";
        $(".srb").fadeOut(300, function() {
            $(".eng").fadeIn(300);
        });
    }
  });
});

$(document).ready(function() {
  var themeToggle = $('#themeToggle');
  var body = $('body');
  var currentTheme = 'light-theme';
  body.addClass('light-theme');

  themeToggle.click(function() {
    if (currentTheme === 'light-theme') {
      currentTheme = 'dark-theme';
      body.removeClass('light-theme').addClass('dark-theme');
      $('#themeToggle').removeClass('bxs-moon').addClass('bxs-sun');;
    }else {
      currentTheme = 'light-theme';
      body.removeClass('dark-theme').addClass('light-theme');
      $('#themeToggle').removeClass('bxs-sun').addClass('bxs-moon');
    }
  });
});

$(document).ready(function() {
  const swiperProjects = new Swiper('.projects__container', {
    slidesPerView: 2,
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(document).ready(function() {
  const contactForm = document.getElementById('formEng');

  const sendEmail = (e) =>{
      e.preventDefault()

      //serviceID - templateID - #form - publicKey
      emailjs.sendForm('service_9tis45v', 'template_acyoze5', '#formEng', '0MyMuLS2qPS9lp3Ep')
      .then(()=>{
          alert("Message sent successfully");
      },() =>{
          alert("Message not sent (service error)");
      })
  }
  contactForm.addEventListener('submit', sendEmail);
});

$(document).ready(function() {
  const contactFormSrb = document.getElementById('formSrb');

  const sendEmailSrb = (e) =>{
      e.preventDefault()

      //serviceID - templateID - #form - publicKey
      emailjs.sendForm('service_9tis45v', 'template_acyoze5', '#formSrb', '0MyMuLS2qPS9lp3Ep')
      .then(()=>{
          alert("Uspešno poslat email");
      },() =>{
          alert("Email nije poslat (service error)");
      })
  }
  contactFormSrb.addEventListener('submit', sendEmailSrb);
});

$(document).ready(function() {
    ScrollReveal().reveal('.home-left', { delay: 200, origin: 'top',  distance: '100px', duration: 2000, reset: true});
    ScrollReveal().reveal('.home-right', { delay: 200, origin: 'bottom',  distance: '100px', duration: 2000, reset: true});
    ScrollReveal().reveal('.about-content', { delay: 200, origin: 'left',  distance: '100px', duration: 2000, reset: true});
    ScrollReveal().reveal('.about-image', { delay: 200, origin: 'top',  distance: '100px', duration: 2000, reset: true});
    ScrollReveal().reveal('.about-age', { delay: 200, origin: 'bottom',  distance: '100px', duration: 2000, reset: true});
    ScrollReveal().reveal('.skill-layout', { delay: 200, origin: 'left',  distance: '100px', duration: 2000, reset: true});
    ScrollReveal().reveal('.skill-text', { delay: 200, origin: 'right',  distance: '100px', duration: 2000, reset: true});
    ScrollReveal().reveal('.container', { delay: 200, origin: 'right',  distance: '100px', duration: 2000, reset: true});
    ScrollReveal().reveal('.naslov', { delay: 200, origin: 'top',  distance: '100px', duration: 2000, reset: true});
    ScrollReveal().reveal('.form', { delay: 200, origin: 'bottom',  distance: '100px', duration: 2000, reset: true});
    //ScrollReveal().reveal('.footer', { delay: 200, origin: 'bottom',  distance: '100px', duration: 2000, reset: true});
  
});

function updateSlidesPerView() {
    if (window.matchMedia('(max-width: 1024px)').matches) {
        swiperProjects.params.slidesPerView = 1;
    } else {
        swiperProjects.params.slidesPerView = 2;
    }
    swiperProjects.update();
}
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
});

