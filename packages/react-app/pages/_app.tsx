import type { AppProps } from "next/app";
import { WagmiProvider, createConfig, http } from "wagmi";
import { celo } from "wagmi/chains";
import Layout from "../components/Layout";
import "../styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const config = createConfig({
  chains: [celo],
  transports: {
    [celo.id]: http(),
  },
});

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
