(function() {
  model.selectedCommanderClasses = function(type) {
    var path = type.replace("pa/units", "").replace(".json", "")
    var fab = type.match('fabrication') ? ' fabrication' : ''
    return path + fab
  }
  // either knockout or the dom remove the rest of the illegal characters
  //var hack = ',css:type.replace("pa/units", "").replace(".json", "")'
  var hack = ',css:$parent.selectedCommanderClasses(type)'

  var bind = $('.div_unit_selection').attr('data-bind')
  $('.div_unit_selection').attr('data-bind', bind + hack)
})()
