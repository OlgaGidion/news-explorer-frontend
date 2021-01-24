export const getToday = () => new Date();

export const getWeekAgo = () => new Date(getToday().getTime() - 1000 * 60 * 60 * 24 * 7);
