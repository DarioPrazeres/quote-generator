import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            "X-Api-Key": "FIQRIsfzHVNK4mvojehZvw==zK4ipUOV41OZ6GcQ",
          },
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [url]);

  return [data];
};

export default useFetch;
