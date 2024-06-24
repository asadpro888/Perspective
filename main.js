const sizeInput = document.getElementById('input2');
const radiusInput = document.getElementById('input3');
const shadowInput = document.getElementById('input4');
const blurInput = document.getElementById('input5');
let main = document.querySelector('body');
const childElement = document.querySelector('.child');

if (sizeInput && childElement) {
  sizeInput.addEventListener('change', (event) => {
    const value = parseFloat(event.target.value);
    if (value > 40) { 
      childElement.style.transform = `rotateX(${value}90deg)`;
    } 
  });
}

if (radiusInput && childElement) {
  radiusInput.addEventListener('change', (event) => {
    const value = parseFloat(event.target.value);
    if (value >= 40) {
      childElement.style.transform = `rotateY(${value}90deg)`;
    }
  });
} 

if (shadowInput && childElement) {
    shadowInput.addEventListener('change', (event) => {
      const value = parseFloat(event.target.value);
      if (value >= 40) { 
        childElement.style.transform = `rotateZ(${value}90deg)`;
      }
    });
  }

  if (blurInput && childElement) {
    blurInput.addEventListener('change', (event) => {
      const value = parseFloat(event.target.value);
      if (value >= 40) { 
        childElement.style.parseFloat = `(${value})`;
      }
    });
}