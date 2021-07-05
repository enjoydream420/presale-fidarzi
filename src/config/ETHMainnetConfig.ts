import { publicCOnfig } from './public';
import { ChainState } from '@/store/lib/ChainState';
import { TokenState } from '@/store/lib/TokenState';
import { RPC_URLS } from '../lib/web3-react';

export const ETHMainnetConfig = new ChainState({
  name: 'ETH',
  chainId: 1,
  networkKey: 'eth',
  rpcUrl: RPC_URLS[1],
  logoUrl: '/images/eth.svg',
  explorerURL: 'https://etherscan.io',
  explorerName: 'EtherScan',
  Coin: new TokenState({
    symbol: 'ETH',
    decimals: 18
  }),
  info: {
    blockPerSeconds: 13,
    multicallAddr: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    theme: {
      bgGradient: 'linear(to-r, #84ABF5, #CFC6F9)'
    }
  }
});
