import useCurrencyRates from "../hooks/useCurrencyRates";

function CurrencyConverter({
  expenses,
  selectedCurrency,
  setSelectedCurrency
}) {

  const { rates, loading, error } = useCurrencyRates("USD");

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  if (loading) return <p>Loading rates...</p>;

  if (error) return <p>{error}</p>;

  const converted =
    selectedCurrency === "USD"
      ? total
      : total * rates[selectedCurrency];

  return (
    <div>

      <h3>Currency Conversion</h3>

      <select
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
      >

        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="INR">INR</option>

      </select>

      <p>
        Converted Total: {selectedCurrency} {converted.toFixed(2)}
      </p>

    </div>
  );
}

export default CurrencyConverter;