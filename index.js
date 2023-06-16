var debounceTimeout;

    function handleSliderChange() {


    
      var sliderValue = document.querySelector('.slider__input').value;

   
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(function() {
        
        var imageSize = sliderValue + 'px';
        document.querySelector('.slider__image').style.width = imageSize;
        document.querySelector('.slider__image').style.height = imageSize;
      }, 100); 
    }

    document.querySelector('.slider__input').addEventListener('input', handleSliderChange);
    
    var box = document.getElementById('box');

function handleMouseMove(event) {

  var x = event.clientX;
  var y = event.clientY;

  box.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
}

var debouncedMouseMove = _.debounce(handleMouseMove, 100);

document.addEventListener('mousemove', debouncedMouseMove);