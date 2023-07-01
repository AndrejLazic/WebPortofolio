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
/*
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrolled = window.scrollY > 0;
  header.classList.toggle('scrolled', scrolled);
});
*/


