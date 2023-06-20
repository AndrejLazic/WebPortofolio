$(document).ready(function() {
    var languageSwitch = $('#languageSwitch');
    var language = 'english';

    languageSwitch.change(function() {
        if (language === 'english') {
            language = 'serbian';
            $(".eng").hide();
            $(".srb").show();
          } else {
            language = 'english';
            $(".srb").hide();
            $(".eng").show();
          }
    });
});