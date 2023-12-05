import { IFaqs } from "@/types"
import { ether, bsc, polygon, avalanche, fantom, solana } from "@/assets"

const faqs: IFaqs[] = [
    { 
        id: 0, 
        question: "What is Wormhole Connect?", 
        answer: 'Wormhole Connect is an open source frontend SDK that lets Web3 developers embed asset bridging directly into their apps or websites.' ,
        itemNo: "item-1"
    },
    { 
        id: 1, 
        question: "What types of assets does Connect support?", 
        answer: 'Initially, Connect will only support bridging wrapped assets. This means that any native token bridged through Connect and the underlying Wormhole Token Bridge will be received as a Wormhole-wrapped token on the destination chain. In some cases, Wormhole minted tokens are the canonical representation on the chain (e.g. WETH on Solana is a Wormhole minted token, seehttps://github.com/wormhole-foundation/wormhole-token-list) and in other cases Wormhole minted tokens can be swapped on the destination chain’s DEX(s) for whatever assets you need (e.g. USDCeth bridged from Ethereum to Avalanche can be swapped for native USDC on Trader Joe).',
        itemNo: "item-2" 
    },
    { 
        id: 2, 
        question: "Will Connect support native asset bridging?", 
        answer: 'Yes, Connect will soon surface multiple Wormhole-powered services (e.g. cross chain asset swaps) that enable other forms of bridging more suitable for certain use cases. Check https://wormhole.com/connect for updates on Connect support.',
        itemNo: "item-3" 
    },
    { 
        id: 3, 
        question: "What chains and assets does Connect support?", 
        answer: 'Initially, Connect supports wrapped asset bridging of ETH, WETH, USDC, MATIC, WMATIC, BNB, WBNB, AVAX, WAVAX, FTM, WFTM, CELO, GLMR, WGLRM, AND SOL across Ethereum, Polygon, BSC, Avalanche, Celo, Moonbeam, Base, Solana and Sui. Connect will support other Wormhole-connected chains and assets in the future, see the full list of Connect supported chains on the GitHub repository and Wormhole supported chains at https://wormhole.com/network.',
        itemNo: "item-4" 
    },
    { 
        id: 4, 
        question: "Contact", 
        answer: "If you have any further questions or require troubleshooting, please reach out to Wormhole's community managers on Discord.",
        itemNo: "item-5" 
    },
]

const networks = [
    { id: 0, logo: ether, name: 'Ethereum', chainId: 0 },
    { id: 1, logo: bsc, name: 'BSC', chainId: 0 },
    { id: 2, logo: polygon, name: 'Polygon', chainId: 0 },
    { id: 3, logo: avalanche, name: 'Avalanche', chainId: 0 },
    { id: 4, logo: fantom, name: 'Fantom', chainId: 0 },
    { id: 5, logo: solana, name: 'Solana', chainId: 0 },
]

export { faqs, networks }