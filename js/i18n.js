(function() {
  $.i18n().locale = "de";

  function translate(locale) {
    $.i18n().destroy();
    $.i18n().locale = locale;
    $.i18n()
      .load("i18n/" + $.i18n().locale + ".json", $.i18n().locale)
      .done(function() {
        $("html").i18n();
      });
  }

  if (navigator.language.match("en")) {
    translate("en");
  }

  var linkElements = document.querySelectorAll("a[data-locale]");
  var linkItems = Array.prototype.slice.call(linkElements);

  linkItems.forEach(function(item) {
    item.onclick = function(event) {
      event.preventDefault();
      var locale = item.getAttribute("data-locale");
      translate(locale);
    };
  });
})();
