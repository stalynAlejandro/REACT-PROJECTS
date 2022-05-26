// Suspense y React Lazy nos va a permitir cargar solo cuando lo necesitamos
// Vamos a separar la parte de React que solo se va a cargar cuando sea visible.
// No solo nos vamos a evitar la llamada al Back, sino que también nos vamos a evitar
// cargar el javascript.

import React, { useEffect, useState } from "react";

import Category from "components/Category";
import getTrendingTerms from "services/getTrendingTermsService";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category name="Trends" options={trends} />;
}
