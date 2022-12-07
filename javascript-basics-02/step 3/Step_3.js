var displayText = document.getElementById('name1');
    displayText.onkeyup = function() {
      document.getElementById('displayBox').innerHTML = name1.value;
    }