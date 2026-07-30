class cal {
  // returns sum of the two provided inputs, inputs must be of type Number
  sum(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b))
      throw new Error('Input is not a number!');
    return a + b;
  }
  // returns the product of the two provided inputs, inputs must be of type Number
  multiply(a, b) {
    return a * b;
  }
}
export const calculator = new cal();
