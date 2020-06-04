import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { CharacterApperence } from './apperence.js';

$(document).ready(function() {
  $("form.fill").submit(function (e) {
    e.preventDefault();

    let hero = $("#character").val();
    $(".results").show();
    $("#name").append(hero);

    (async () => {
      let characterSelect = new CharacterApperence();
      const response = await characterSelect.getApperenceByCharacter(hero);
      getElements(response);
    })();

    function getElements(response) {
     if (response) {
       $("#number").text('Has been in ${respons.main.}.')
     } else {
       $("#number").text('There has been a error handling your request.')
     }
   }
  });
});
