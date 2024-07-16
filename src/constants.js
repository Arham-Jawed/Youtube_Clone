export const API_KEY = import.meta.env.VITE_API_KEY;

const valueConverter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};

export default valueConverter;

const titleCompacter = (title = "") => {
  if (title.length >= 50) {
    const newTitle = title.slice(0, 50);
    const updatedTitle = newTitle + "...";
    return updatedTitle;
  } else {
    return title;
  }
};

export { titleCompacter };
