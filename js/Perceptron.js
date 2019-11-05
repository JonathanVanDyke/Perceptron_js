class Perceptron {
  constructor(numWeights, learningConst) {
    this.weights = new Array(numWeights);
    for (let i = 0; i < this.weights.length; i++) {
      // this.weights.push(Math.random(-1, 1))
    }
    this.learningConst = learningConst;
  }


  train(inputs, desired) {
    let guess = this.feedforward(inputs);

    let error = desired - guess;

    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += this.learningConst * error * inputs[i];
    }
  }

  feedforward(inputs) {
    let sum = 0;
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    return this.activate(sum);
  }

  activate(sum) {
    if (sum > 0) {
      return 1;
    } else {
      return -1;
    }
  }

  getWeights() {
    return this.weights;
  }

}