const formatAsUSD = (amount: number): string => {
  const UsDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return UsDollar.format(amount);
};

export default formatAsUSD;
