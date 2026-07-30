class cal {
  sum(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b))
      throw new Error('Input is not a number!');
    return a + b;
  }
}
export const calculator = new cal();
