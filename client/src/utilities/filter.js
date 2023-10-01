export const alphabeticFilter = (input) => {
  return input.replace(/[^A-Za-z]/g, "");
};

export const numericFilter = (input) => {
  return input.replace(/[^0-9]/g, "");
};
