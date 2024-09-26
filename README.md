🐰 SocialBunny is an social dapp 🫂 that empowers users to monetize 💰 their posts.

- Posts tokenization on mainnet is optional.
- Creators get royalties for sales of their tokenized posts
- First minters of a post get a share of those royalties.

# Technical details

⚙️ Built using Foundry, NextJS, RainbowKit, Wagmi, Viem, and Typescript,

🔗 To be deployed on EVM compatible chains

# About the platform

**Users**:

- Explore, watch, and listen to content.
- Follow other users, like, comment and share posts.
- Optionally mint posts to mainnet.

**Posts**:

- Can have text, image, audio and video.
- When minted to mainnet, resales pay royalties to the original posters.
- First minters of a post get a share the income from sales and royalties from resales.

**Platform owner**:

- Collects fees from mints.

# Features

## Posts

- **Media Player**: Posts with audio or video can be played without leaving the platoform. Users can control media playback from mobile notifications.
- **Royalties**: Users (and first minters) automatically receive a share of royalties on every resale, providing a continuous stream of income.
- **Incentivized Gasless Minting**: Users can mint their NFTs without paying upfront gas fees. Instead, the first minter covers the minting cost and earns a share of sales and royalties on future resales.

## Social

- Create NFT galleries, follow and message other users, like NFTs, comment on them, receive notifications on activity.
- Customize profile colors and appearance
- **Dashboards**: Measure engagement (views, likes, shares, being featured) and revenue with insights into sales and royalty earnings.

## Marketplace

- **Shopping cart**: To reduce gas fees and streamline the user experience, collectors can buy multiple NFTs in a single transaction.
- **Native and Stablecoin Payments**: Buyers can pay with the blockchain's native gas token or stablecoins like USDC.
- **Cross-Chain Transfers**: NFTs can be moved seamlessly across EVM-compatible chains using Chainlink's CCIP technology, expanding the marketplace's reach.

## Other features

- **Web2.5 Social Login**: Allow users to sign up with Twitter, Google, or Instagram. This process also auto-generates a wallet.
- **Multi-language support**
- **Accessibility support**: Text-to-speech and visual helpers to enable usage by visually and hearing impaired people
- **Educational Content**: The platform offers video tutorials and step-by-step guides to onboard users and users who may be unfamiliar with NFTs, Web3, or minting processes.

# Quickstart

## Prerequisites

- [Node (>= v18.17)](https://nodejs.org/en/download/package-manager)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/#windows-stable) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)
- [Foundry](https://book.getfoundry.sh/getting-started/installation)

## Instructions

To get started follow the steps below:

1. Open a terminal and run this commands to clone this repo and install dependencies:

```
git clone https://github.com/luloxi/SocialBunny.git
cd SocialBunny
yarn install
```

2. After everything is installed, run this command to start a local blockchain network:

```
yarn chain
```

This command starts a local Ethereum network using Foundry. The network runs on your local machine and can be used for testing and development.

3. Duplicate and rename `packages/foundry/.env.example` to `packages/foundry/.env` (you don't need to fill it out until deploying to a live network)

4. Open a second terminal, navigate to `SocialBunny` and run this command to deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/foundry/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/foundry/script/Deploy.s.sol` to deploy the contract to the network. You can also customize the deploy script.

5. Go to `packages/nextjs/scaffold.config.ts` and comment out `targetNetworks: [chains.sepolia]` and uncomment `targetNetworks: [chains.foundry]`

6. Open a third terminal, navigate to `SocialBunny` and run this command to start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page.

# Roadmap

- To see current development tasks and other info about the project, [see here](https://lulox.notion.site/SocialBunny-3458ad216e8c40a9b4489fe026146552?pvs=74)

## Phase 1 ✅

- **Integrate GraphQL to index NFTs** and save RPC calls (Reference: [Bootstrap a Full Stack Modern dapp using the Scaffold-ETH CLI and Subgraph Extension](https://siddhantk08.hashnode.dev/bootstrap-a-full-stack-modern-dapp-using-the-scaffold-eth-cli-and-subgraph-extension))

### NFT Creation

- ✅ **Add music to NFTs metadata** and **integrate with frontend** (Reference: [OpenSea metadata-standards](https://docs.opensea.io/docs/metadata-standards))
- ✅ **Create NFT factory and NFT contract**
- ✅ **Page for minting** that takes inputs for the metadata of the NFT (Reference: [scaffold-class](https://github.com/luloxi/scaffold-class))
- ✅ **Display NFT being built as a preview** before minting (display the NFT and the metadata)
- ✅ **Add an option to start a collection paying gas** on the Create page, with a toggle to switch between gasless and paying gas
- ✅ **Allow setting max tokenId and price**
- **Usage of ERC1155** instead of ERC721

### Marketplace

- ✅ **Page for interacting with the marketplace** buy and sell functions (Reference: [Simple Marketplace w/ Royalties)](https://app.buidlguidl.com/build/UxFNxy5XIMzz9mHKUxy5))
- ✅ Payment in native gas token **and USDC token**
- ✅ **Display created NFTs in the marketplace**
- **Display auction info and interactions**

### Social

- ✅ **Add a profile for the collector** with their NFTs and info about them
- ✅ **Add a way for users to register their info**
- **Add individual NFT pages** with more info about the NFT, if it's on sale, and the user and bigger images
- **Allow seeing other collectors profiles** and their NFTs

## Phase 2

### NFT Creation

- **Gasless minting function** for users to upload their metadata to IPFS and sign a EIP 712 message, and then wait for an investor (first minter) to pay for the contract creation transaction.
- **Implement a database to store the signatures** that allows first minters to start a collection (Reference: [grants.buidlguidl.com](https://github.com/BuidlGuidl/grants.buidlguidl.com))
- **Determine which Royalty standard to implement**, and start implementing it (References: [ERC-2981](https://eips.ethereum.org/EIPS/eip-2981) | [ERC-4910](https://eips.ethereum.org/EIPS/eip-4910) | [ERC-721C compared to ERC-2981 and ERC-4910](https://blog.xp.network/the-battle-for-nft-royalties-meet-the-erc-2981-erc-4920-and-erc-721c-b71d6ba28acf)
- **First minter gets a share of the royalties** of all the NFTs minted in that collection

### Marketplace

- **Add NFTs available for first minting** reading from the database with signatures collected through the gasless mint process

### Social

- **Add a way for users to register their info with a signature**
- Introduce **social features** (following users, liking NFTs, and commenting on NFTs)

## Phase 3

- **"Inspired by" feature for NFTs**, meaning that a new NFT can use other NFTs validated to be used as an inspiration for their creation (text, video, image, audio) and all featured NFTs show the pieces that were created in their page, and their users earn a percentage of the royalties.

## Phase 4

### Social

- **System to validate users and collectors (and maybe enable them to gasless mint and be able to disable them to prevent spam)**
- **Token gated content**: Holders of an user's NFTs get access to special content for holders
- **Feature for creating collections** of NFTs and displaying them in a gallery

## Phase 5

- **Music player as a PWA** that allows controlling the music from the notifications center on mobile devices (Reference: [React Player](https://www.npmjs.com/package/react-player))
- **Upload the NFT Metadata to Filecoin** instead of IPFS (Reference: [Filecoin NFT Storage](https://docs.filecoin.io/))

## Phase 6

- Add support for other languages (Spanish, etc)
- **Accessibility support**: Text-to-speech and visual helpers to enable usage by visually and hearing impaired people

### Marketplace

- **Shopping cart**: To reduce gas fees and the amount of transactions a user needs to make
- **Mixed pay**: Set a price in USD and pay in USDC or the equivalent amount of native gas token for the same amount of USD (Reference: [Easy2Pay](https://github.com/luloxi/Easy2Pay) | Maybe add crosschain payments with USDC CCTP)
- **Cross-chain NFTs** with Chainlink CCIP token transfer (Reference: [Chainlink CCIP Cross-chain Tokens](https://docs.chain.link/ccip/tutorials/cross-chain-tokens))

### Social

- Make Profile read all the NFTs owned by the user, and **not just the ones minted through the website**
- Option to customize profile appearance (colors, shape of profile picture, etc)
- **Profile creation with web2.5 login** (Twitter, Instagram, Google, etc). Linked wallet could be with account abstraction or creating a wallet from scratch, TBD
- **Notification system** for increasing engagement (customizable and ideally with email or mobile notifications)
- **Direct Messaging system** for users and collectors
- Ability to **make your own group/community**
- **Educational Content**: Make an interactive way to step-by-step user onboarding flow, and/or video material explaining the use of the platform, especially for users or collectors who may be unfamiliar with Web3 concepts, NFT minting, and/or royalties to improve user adoption.
