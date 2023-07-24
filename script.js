let displayValue = "0";
 
function appendToDisplay(value) {
  if (displayValue === "0") {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

function operate(operator) {

  displayValue += operator;
  updateDisplay();
}

function calculate() {
    try {
      
      if (displayValue.includes('/0')) {
        throw new Error("Error");
      }

      
      displayValue = eval(displayValue).toString();
      updateDisplay();
    } catch (error) {
      
      displayValue = "Error: " + error.message;
      updateDisplay();
    }
  }
  function deleteNumber() {
    
    displayValue = displayValue.slice(0, -1);
   
    if (displayValue === "") {
      displayValue = "0";
    }
    updateDisplay();
  }


function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}