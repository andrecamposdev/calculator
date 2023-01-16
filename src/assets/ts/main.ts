class Calculator {
  display: HTMLTextAreaElement = document.querySelector('.display');

  init = () => {
    this.clickCapture();
    this.enterCapture();
    console.log();
  };

  enterCapture = () => {
    document.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
        this.doMath();
      }
    });
  };

  clickCapture = () => {
    document.addEventListener('click', e => {
      const el = e.target as Element;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.doMath();
    });
  };

  doMath = () => {
    try {
      const math = eval(this.display.value);
      if (!math) {
        alert('invalid math');
        return;
      }
      this.display.value = math;
    } catch (e) {
      alert('invalid math');
      return;
    }
  };

  addNumDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus();
  };
  clear = () => (this.display.value = '');
  del = () => (this.display.value = this.display.value.slice(0, -1));
}

const calculator = new Calculator();
calculator.init();
