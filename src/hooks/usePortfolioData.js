import { useState, useEffect } from 'react';
import { mydatabase } from '../firebase/config';
import { collection,getDocs } from 'firebase/firestore';

const usePortfolioData = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const value = collection(mydatabase,"portfolioData")

  useEffect(() => {
    const getData = async () => {
      const dbval = await getDocs(value);
      const data = dbval.docs.map((doc) => doc.data());
      setPortfolioData(data);
    };

    getData();
  }, []);

  return portfolioData;
};

export default usePortfolioData;
