'use client'
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import TrendList from '@/components/TrendList';
import Market from '@/components/market';
import Instruction from '@/components/Instruction'
import About from '@/components/About'
import App from '@/components/App'

export default function Home() {
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setFilteredCoins(data);
    });
    tableData().then((data) => {
      setFilteredData(data);
    });
  }, []);

  return (
    <>
      <Hero />
      <TrendList filteredCoins={filteredCoins} />
      <Market filteredData={filteredData} />
      <Instruction/>
      <About/>
      <App/>
    </>
  );
}

export async function fetchData() {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Csolana%2Cbinancecoin&per_page=4&sparkline=false');
  const filteredCoins = await res.json();
  return filteredCoins;
}

export async function tableData() {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1&sparkline=false');
  const filteredData = await res.json();
  return filteredData;
}