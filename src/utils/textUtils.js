export const getNumText = (count, wordCases) => {
  const mod100 = Math.abs(count) % 100;
  const mod10 = mod100 % 10;

  if (mod100 > 10 && mod100 < 20) {
    return wordCases[2];
  }

  if (mod10 > 1 && mod10 < 5) {
    return wordCases[1];
  }

  if (mod10 === 1) {
    return wordCases[0];
  }

  return wordCases[2];
};
