(function() {
  model.fabulousSelectionClasses = function(type) {
    var path = type.replace("pa/units", "").replace(".json", "").replace(/[\/_]/g, " ")

    if (path.match('fabrication bot combat')
     || path.match('fabrication barge')) {
      path = path.replace(/fabrication/g, '')
    }
    if (path.match('support commander')) {
      path = path + ' fabrication'
    }
    return path
  }

  var hack = 'css:$parent.fabulousSelectionClasses(type)'

  var bind = $('.div_unit_selection').attr('data-bind')
  $('.div_unit_selection').attr('data-bind', [bind, hack].join(','))
})()
