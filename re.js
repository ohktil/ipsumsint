class Mark {
  static circle() {
    return Math.PI * 2;
  }
}

const CIRCLE = Mark.circle(); // Assigns the result of Mark.circle() to CIRCLE
console.log(CIRCLE); // Output: 6.283185307179586
