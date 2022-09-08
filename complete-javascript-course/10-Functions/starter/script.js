'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registNewAnswer: function () {
    const answer = prompt(`${this.question}\n
    0: Javascript
    1: Python
    2: Rust
    3: C++
    (Write option number)`);
    const numAnswer = Number(answer);
    this.answers[numAnswer]++;
    console.log(this.answers);
    this.displayResults(this.answers);
  },
  displayResults: function (type) {
    if (typeof type === 'array') {
      console.log(type);
    } else {
      console.log(`Poll results are ${type}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registNewAnswer.bind(poll));
