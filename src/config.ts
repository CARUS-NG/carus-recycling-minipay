import { http, createConfig } from "wagmi";
import { celoAlfajores } from "wagmi/chains";

export const config = createConfig({
  chains: [celoAlfajores],
  transports: {
    [celoAlfajores.id]: http(),
  },
});
