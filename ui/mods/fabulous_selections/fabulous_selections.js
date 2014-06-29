(function() {
  model.fabulousSelectionClasses = function(type) {
    var path = type.replace("pa/units", "").replace(".json", "").replace(/[\/_]/g, " ")
    console.log('before', path)
    if (path.match('fabrication bot combat')) {
      console.log('trigger')
      path = path.replace(/fabrication/g, '')
    }
    console.log('after', path)
    return path
  }

  var hack = 'css:$parent.fabulousSelectionClasses(type)'

  var bind = $('.div_unit_selection').attr('data-bind')
  $('.div_unit_selection').attr('data-bind', [bind, hack].join(','))
})()
