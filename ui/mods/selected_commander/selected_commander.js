(function() {
  // either knockout or the dom remove the rest of the illegal characters
  var hack = ',css:type.replace("pa/units", "").replace(".json", "")'

  var bind = $('.div_unit_selection').attr('data-bind')
  $('.div_unit_selection').attr('data-bind', bind + hack)
})()
