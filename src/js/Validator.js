import checkLuhn from './LuhnAlgorithm';

export default class Validator {
  constructor(container) {
    this.container = container;
    this.paymentSystem = null;
  }

  init() {
    this.checkPaymentSystem();
    this.creditCardValidator();
  }

  checkPaymentSystem() {
    const input = document.getElementById('card_number');
    const cards = [...document.querySelectorAll('.card')];

    input.addEventListener('input', () => {
      if (input.value[0] == 4) {
        cards.forEach((card) => {
          card.classList.remove('card_inactive');
          if (!card.classList.contains('visa')) {
            card.classList.add('card_inactive');
            this.paymentSystem = 'VISA';
          }
        });
      }

      if (input.value[0] == 2) {
        cards.forEach((card) => {
          card.classList.remove('card_inactive');
          if (!card.classList.contains('mir')) {
            card.classList.add('card_inactive');
            this.paymentSystem = 'MIR';
          }
        });
      }

      if (input.value[0] == 5) {
        cards.forEach((card) => {
          card.classList.remove('card_inactive');
          if (!card.classList.contains('master')) {
            card.classList.add('card_inactive');
            this.paymentSystem = 'MasterCard';
          }
        });
      }

      if (input.value[0] == 3) {
        cards.forEach((card) => {
          card.classList.remove('card_inactive');
          if (!card.classList.contains('amex')) {
            card.classList.add('card_inactive');
            this.paymentSystem = 'American Express';
          }
        });
      }
    });
  }

  creditCardValidator() {
    const input = document.getElementById('card_number');
    const btn = document.getElementById('submitform');

    input.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        const result = checkLuhn(input.value);
        if (result && input.value !== '') {
          alert(`The card is valid. The payment system is ${this.paymentSystem}`);
        } else {
          alert('The card is not valid!');
        }
      }
    });

    btn.addEventListener('click', () => {
      const result = checkLuhn(input.value);
      if (result && input.value !== '') {
        alert(`The card is valid. The payment system is ${this.paymentSystem}`);
      } else {
        alert('The card is not valid!');
      }
    });
  }
}
