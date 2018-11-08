import interact from 'interactjs'
import {questions} from './questions.js'

$(function() {

  $('#introductionModal').modal('show');

  var nextQuestionId = 0;
  var currentQuestion = null;
  var currentDay = 0;

  function nextQuestion(questions) {
    
    currentQuestion = questions[nextQuestionId];

    jQuery('#question').text(currentQuestion.question);

    nextQuestionId = Math.floor(Math.random() * questions.length);
    currentDay++;
  }
  nextQuestion(questions);

  var progresses = {
    techdebt: 50,
    devhappiness: 50,
    features: 50,
    money: 50

  }
  
  function gameOver() {
    if(progresses.techdebt < 1) {
      $('#endingModalBody').text('Technical debt has grown over time, preventing any meaninful progress onwards');
      $('#answer').hide();
      $('#endingModal').modal('show');
    } else if(progresses.devhappiness < 1) {
      $('#endingModalBody').text('Your developers has grown angry over time. You are left without any team');
      $('#answer').hide();
      $('#endingModal').modal('show');
    } else if(progresses.features < 1) {
      $('#endingModalBody').text('You no longer have relevant features. Your competition has outgrown you.');
      $('#answer').hide();
      $('#endingModal').modal('show');
    } else if (progresses.money < 1) {
      $('#endingModalBody').text('Your team is out of funding.');
      $('#answer').hide();
      $('#endingModal').modal('show');
    }
  }
  function updateProgress(values) {
    progresses.techdebt = progresses.techdebt + values[0];
    progresses.devhappiness = progresses.devhappiness + values[1];
    progresses.features = progresses.features + values[2];
    progresses.money = progresses.money + values[3];
    gameOver()
    $('#indicator-techdebt').css('width', progresses.techdebt + '%');
    $('#indicator-devhappiness').css('width', progresses.devhappiness + '%');
    $('#indicator-features').css('width', progresses.features + '%');
    $('#indicator-money').css('width', progresses.money + '%');
    $('#indicator-days').text("You have kept the business running for " + currentDay + " days");
  }


  // enable draggables to be dropped into this
  interact('.dropzone').dropzone({
      // only accept elements matching this CSS selector
      accept: '#answer',
      // Require a 75% element overlap for a drop to be possible
      overlap: 0.75,
    
      // listen for drop related events:
    
      ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active');
      },
      ondragenter: function (event) {
        var draggableElement = event.relatedTarget,
            dropzoneElement = event.target;
    
        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target');
        draggableElement.classList.add('can-drop');

        var zoneId = dropzoneElement.getAttribute('id');

        switch (zoneId) {
          case 'left':
            draggableElement.textContent = currentQuestion.answers[0].answer;
            break;
          case 'right':
            draggableElement.textContent = currentQuestion.answers[1].answer;
            break;
          default:
            draggableElement.textContent = '';
            break;
        }
      },
      ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('can-drop');
        event.relatedTarget.textContent = '';
      },
      ondrop: function (event) {
        event.relatedTarget.textContent = '';
        
        var dropCenter = $(window).width()/2 - $(event.dragEvent.target).width()/2 - 20;
        
        event.dragEvent.target.style.webkitTransform =
        event.dragEvent.target.style.transform =
          'translate('+dropCenter+'px, 0px)';
        
        event.dragEvent.target.setAttribute('data-x', dropCenter);
        event.dragEvent.target.setAttribute('data-y', 0);

        if(nextQuestionId < questions.length) {
          nextQuestion(questions);
        } else {
          // $('#answer').hide();
          // $('#endingModal').modal('show');
        }

        // Update progressbars
        var dropzoneElement = event.target;
        var zoneId = dropzoneElement.getAttribute('id');

        switch (zoneId) {
          case 'left':
            updateProgress(currentQuestion.answers[0].ratings);
            break;
          case 'right':
            updateProgress(currentQuestion.answers[1].ratings);
            break;
          default:
            draggableElement.textContent = '';
            break;
        }


      },
      ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
      }
    });
    
    interact('.drag-drop')
      .draggable({
        inertia: true,
        restrict: {
          restriction: "parent",
          endOnly: true,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        autoScroll: true,
        // dragMoveListener from the dragging demo above
        onmove: dragMoveListener,
      });

      function dragMoveListener (event) {
          var target = event.target,
              // keep the dragged position in the data-x/data-y attributes
              x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
              y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
      
          // translate the element
          target.style.webkitTransform =
          target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';
      
          // update the posiion attributes
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
        }
      
        // this is used later in the resizing and gesture demos
        window.dragMoveListener = dragMoveListener;

});