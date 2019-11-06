class Perceptron {
  constructor(numWeights, learningConst) {
    this.weights = [];
    let arr = [-1, 1];
    for (let i = 0; i < numWeights; i++) {
      // debugger
      let idx = Math.floor(Math.random() * 2);
      this.weights.push(arr[idx]);
    }
    this.learningConst = learningConst;
  }


  train(inputs, desired) {
    let guess = this.feedforward(inputs);

    let error = desired - guess;

    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += this.learningConst * error * inputs[i];
    }
    debugger
  }

  feedforward(inputs) {
    let sum = 0;
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    // only getting -1 or undefined.... FIX
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