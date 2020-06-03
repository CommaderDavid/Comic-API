import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form.fill").submit(function (e) {
    e.preventDefault();

    let hero = $("#character").val();
    $(".results").show();
    $("#name").append(hero);

  });
});
