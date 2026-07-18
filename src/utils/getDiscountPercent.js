// utils/helper.js hoc's to practice
export const getDiscountPercent = (info) => {
  const header = info?.aggregatedDiscountInfoV3?.header || "";
  const match = header.match(/(\d+)%/); // pulls "50" out of "50% OFF"
  return match ? Number(match[1]) : 0;
};
