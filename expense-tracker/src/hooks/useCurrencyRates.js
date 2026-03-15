import { useEffect, useState } from "react";

export default function useCurrencyRates(base = "USD") {

  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchRates() {

      try {

        const res = await fetch(
          `https://api.frankfurter.app/latest?from=${base}`
        );

        const data = await res.json();

        setRates(data.rates);
        setLoading(false);

      } catch (err) {

        setError("Failed to fetch exchange rates");
        setLoading(false);

      }

    }

    fetchRates();

  }, [base]);

  return { rates, loading, error };
}