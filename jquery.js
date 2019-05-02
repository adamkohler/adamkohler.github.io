$(function () {
  "use strict";

    var $workBox = $('#box');
    $workBox
      .find('.tt').hide();
    $workBox
      .find('.tt').on('mouseenter mouseleave', function () {

      })


    $("#box").onHover(function (){
      $(".tt").animate({font-size: "3em"});
    });

    $('#box').find(".tt").hide;

    //var workLinks = $('#box')
        //.hide();
});
