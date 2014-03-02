(function() {
  model.fabulousSelectionClasses = function(type) {
    // either knockout or the dom remove the rest of the illegal characters
    var path = type.replace("pa/units", "").replace(".json", "")
    var fab = type.match('fabrication') ? ' fabrication' : ''
    return path + fab
  }

  var hack = 'css:$parent.fabulousSelectionClasses(type)'

  var bind = $('.div_unit_selection').attr('data-bind')
  $('.div_unit_selection').attr('data-bind', [bind, hack].join(','))
})()
