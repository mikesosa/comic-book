const dateFormatter = (data) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date(data).toLocaleString("en-US", options);
  return date;
};

export { dateFormatter };
