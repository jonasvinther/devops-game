import interact from 'interactjs'
import {questions} from './questions.js'

$(function() {

  
  console.log(questions);

  var currentQuestionId = 0;
  var currentQuestion = null;

  function nextQuestion(questions) {
    currentQuestion = questions[currentQuestionId];

    jQuery('#question').text(currentQuestion.question);

    currentQuestionId++;
  }
  nextQuestion(questions);

  var progresses = {
    nature: 50,
    human: 50,
    strength: 50,
    money: 50

  }
  function updateProgress(values) {

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
        
        var dropCenter = $(window).width()/2 - $(event.dragEvent.target).width()/2;
        
        event.dragEvent.target.style.webkitTransform =
        event.dragEvent.target.style.transform =
          'translate('+dropCenter+'px, 0px)';
        
        event.dragEvent.target.setAttribute('data-x', dropCenter);
        event.dragEvent.target.setAttribute('data-y', 0);
        nextQuestion(questions);
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