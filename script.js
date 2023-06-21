$(document).ready(function() {
    var languageSwitch = $("#languageSwitch");
    var language = "english";

    languageSwitch.change(function() {
        if (language === "english") {
            language = "serbian";
            $(".eng").hide();
            $(".srb").show();
          } else {
            language = "english";
            $(".srb").hide();
            $(".eng").show();
          }
    });
});

$(document).ready(function() {
    var themeToggle = $('#themeToggle');
    var body = $('body');
    var currentTheme = 'light-theme';
  
    themeToggle.click(function() {
      if (currentTheme === 'light-theme') {
        currentTheme = 'dark-theme';
        body.removeClass('light-theme').addClass('dark-theme');
      } else {
        currentTheme = 'light-theme';
        body.removeClass('dark-theme').addClass('light-theme');
      }
    });
  });