export const formatcUsd = (balance: number | undefined) => {
  if (balance) {
    return balance.toLocaleString(undefined, { minimumFractionDigits: 3 });
  }
  return 0;
};
