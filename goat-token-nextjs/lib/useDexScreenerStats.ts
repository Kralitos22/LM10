'use client';   

import { useState, useEffect } from 'react';

interface TokenStats {
  marketCap: number;
  liquidity: number;
  volume24h: number;
  price: number;
}

export const useDexScreenerStats = (
  pairAddress: string,
  chainId: string = 'solana'
): TokenStats => {
  const [stats, setStats] = useState<TokenStats>({
    marketCap: 0,
    liquidity: 0,
    volume24h: 0,
    price: 0,
  });

  useEffect(() => {
    if (!pairAddress) return;

    const fetchStats = async () => {
      try {
        const res = await fetch(
          `https://api.dexscreener.com/latest/dex/pairs/${chainId}/${pairAddress}`
        );

        if (!res.ok) throw new Error('Gagal mengambil data dari DexScreener');

        const data = await res.json();
        const pair = data.pairs?.[0];
        if (!pair) return;

        setStats({
          marketCap: pair.fdv ?? pair.marketCap ?? 0,
          liquidity: pair.liquidity?.usd ?? 0,
          volume24h: pair.volume?.h24 ?? 0,
          price: parseFloat(pair.priceUsd) || 0,
        });
      } catch (error) {
        console.error('DexScreener error:', error);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 12000);

    return () => clearInterval(interval);
  }, [pairAddress, chainId]);

  return stats;
};
