// Here's the initial data. Again: don't worry about persistence :)
data = [
  { name: "Mark-Paul Gosselaar", photo_url: "" },
  { name: "Delta Burke", photo_url: "img/avatars/delta.png" },
  { name: "Alf", photo_url: "img/avatars/alf.png" },
  { name: "Jaleel White", photo_url: "img/avatars/jaleel.png" },
  { name: "Ralph Macchio", photo_url: "img/avatars/ralph.png" },
  { name: "Candace Cameron", photo_url: "img/avatars/candace.png" },
  { name: "Patrick Duffy", photo_url: "img/avatars/pduff.png" },
  { name: "Arnold Schwartzengger", photo_url: "img/avatars/arnold.png" }
];

var $employeeList;

var insert = function(employee) {
  var $oldFirst = $employeeList.find('li:first-child');
  if ($oldFirst) {
    $oldFirst.addClass('head');
  }
  var $employee = $('<li class="faded"></li>');
  if (employee.photo_url === "") {
    employee.photo_url = "img/default.png";
  }
  $employee.append('<img src="' + employee.photo_url + '">');
  $employee.append(employee.name);
  $employee.append('<div class="close"></div>');
  $employeeList.prepend($employee);
  _.delay(function() {
    $employee.removeClass('faded');
    _.delay(function() {
      if ($oldFirst) {
        $oldFirst.removeClass('head');
      }
      $('form button').prop('disabled', false);
    }, 1000);
  }, 100);
};

$(document).ready(function() {
  $employeeList = $('#employee-list');
  $employeeList.on('click', '.close', function() {
    var $current = $(this).parent();
    var $sibling = $current.next();
    $current.addClass('faded');
    $sibling.addClass('head');
    _.delay(function(){
      $current.remove();
      _.delay(function() {
        $sibling.removeClass('head');
      }, 500);
    }, 250);
  });

  $('form').submit(function(e) {
    //$('form button').prop('disabled', true);
    var formData = $(this).serializeArray();
    var newEmployee = {};
    _.each(formData, function(input) {
      newEmployee[input.name] = input.value;
    });
    insert(newEmployee);
    e.preventDefault();
  });

  _.each(data, insert);
});