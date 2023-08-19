// This code will format val like "2092.89M" to "$20,92.89M"
const formatAsUSD = (amount: string): string => {
  // Remove non-numeric characters and convert to number
  const numericValue = parseFloat(amount.replace(/[^\d.]/g, ''));

  // Extract the suffix like K,M,B in end
  const suffix = amount.replace(/[^a-zA-Z]/g, '');

  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericValue);

  return `${formattedValue}${suffix}`;
};

export default formatAsUSD;
