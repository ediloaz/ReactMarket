// Example returns: ₡1.000.000
export const formatCurrency = (amount, currencySymbol = "₡") => {
    return `${currencySymbol}${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

