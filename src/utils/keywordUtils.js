export const formatKeyword = (keyword) => (
  keyword
    .split(' ')
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
);

export const groupKeywords = (keywords) => {
  const counts = {};

  keywords.forEach((keyword) => {
    const formattedKeyword = formatKeyword(keyword);

    if (counts[formattedKeyword]) {
      counts[formattedKeyword] += 1;
      return;
    }

    counts[formattedKeyword] = 1;
  });

  return Object.keys(counts);
};
