// Dots and Lines

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#6497b1',
    lineColor: '#6497b1'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/

// Change the background color

jQuery(function ($) {
    function changeColor(selector, colors, time) {
        /* Params:
         * selector: string,
         * colors: array of color strings,
         * every: integer (in mili-seconds)
         */
        var curCol = 0,
            timer = setInterval(function () {
                if (curCol === colors.length) curCol = 0;
                $(selector).css("background-color", colors[curCol]);
                curCol++;
            }, time);
    }
    $(window).load(function () {
        changeColor(".container", ["#011f4b", "#03396c", "#005b96"], 10000);
    });
});
