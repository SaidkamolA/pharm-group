// src/data/clients.js
const clientNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26,
  27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
];

export const clients = clientNumbers.map((number) => {
  const ext =
    [4, 5, 9, 12, 13, 14, 15, 17, 23, 24, 25, 27, 28, 31, 32, 33, 35, 36, 37, 39, 40, 42, 45, 46, 50].includes(
      number
    )
      ? "png"
      : [7, 11].includes(number)
        ? "gif"
        : "jpg";

  return {
    src: `/images/client${number}.${ext}`,
    alt: "Pharmaceutical client",
  };
});