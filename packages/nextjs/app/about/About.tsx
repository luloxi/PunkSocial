"use client";

import Image from "next/image";
import { NFTMetaData } from "~~/utils/simpleNFT/nftsMetadata";

export interface Post extends Partial<NFTMetaData> {
  postId?: number;
  uri: string;
  user: string;
  date?: string;
}

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse lg:p-14">
          <Image
            src="/socialmonetization.jpg"
            alt="Animation clicking a like button and increasing USDC balance"
            className="max-w-sm rounded-lg shadow-2xl border-2"
            width={500}
            height={500}
          />
          <div>
            <h1 className="text-6xl font-mono">What if you earned 💸 money from socializing?</h1>
            <p className="py-6">
              <div className="flex justify-center items-center gap-1 flex-wrap">
                <span className="text-xl text-center">
                  What if <span className="text-orange-600 font-bold">every like, comment, and share</span> changed the
                </span>
                <span className="text-xl text-blue-600 font-bold">USDC</span>
                <Image src="/usdc-logo.png" alt="USDC" width={20} height={20} />
                <span className="text-xl">balance of your life?</span>
              </div>
              <br />
              <div className="flex text-xl italic justify-center text-center">
                We&apos;re building a social protocol that transforms how you interact, earn, and connect!
              </div>
            </p>
            <div className="flex justify-around gap-3">
              <button className="w-1/3 h-16 text-xl btn btn-primary text-white bg-orange-600 border-0 hover:bg-orange-700">
                See some posts!
              </button>

              <button className="w-1/3 h-16 text-xl btn btn-primary text-white bg-blue-600 border-0 hover:bg-blue-700">
                Create a profile!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-2 bg-base-300">
        <h1 className="text-6xl font-mono text-center">Features! 🤘</h1>
      </div>
      <div className="hero bg-base-300 flex flex-wrap justify-around gap-3 lg:p-4">
        <div className="card lg:h-[500px] max-w-[600px] flex flex-col justify-between bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 flex-shrink-0">
            <Image src="/post-types.png" alt="Post types" className="" width={500} height={500} />
          </figure>
          <div className="card-body items-center text-center flex-grow overflow-hidden">
            <h2 className="card-title text-3xl font-mono">Several post types!</h2>
            <p>
              Posts can have text, image, audio, video, links and polls.
              <br /> And yeah, they&apos;re all NFTs! 🤯
            </p>
          </div>
        </div>
        <div className="card lg:h-[500px] max-w-[600px] flex flex-col justify-between rounded-none lg:rounded-xl bg-base-100 shadow-xl">
          <figure className=" h-[250px] mt-10 flex-shrink-0">
            <Image src="/socialmonetization.jpg" alt="Social monetization" className="" width={500} height={500} />
          </figure>
          <div className="card-body items-center text-center flex-grow overflow-hidden">
            <h2 className="card-title text-3xl font-mono">Social monetization!</h2>
            <p>
              When liking, commenting and sharing, you send USDC to the post creator. If you receive a lot of
              interactions, you&apos;ll receive a lot of USDC!
            </p>
          </div>
        </div>
        <div className="card lg:h-[500px] max-w-[600px] flex flex-col justify-between items-center bg-base-100 shadow-xl">
          <div className="lg:h-[300px] mt-10 w-full overflow-hidden flex justify-center items-center">
            <figure className="px-10 pt-10 flex-shrink-0">
              <Image src="/usdc-yield.jpg" alt="Revenue" className=" object-cover" width={500} height={500} />
            </figure>
          </div>
          <div className="card-body items-center text-center flex-grow overflow-hidden">
            <h2 className="card-title text-3xl font-mono">Earn USDC yield while using PunkSociety!</h2>
            <p>When bridged to our Avalanche L1, USDC gets invested and generates interest on the home blockchain. </p>
          </div>
        </div>

        <div className="card lg:h-[500px] max-w-[600px] flex flex-col justify-between bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 flex-shrink-0">
            <Image src="/usdc-flag.jpg" alt="USDC Flag" className="" width={500} height={500} />
          </figure>
          <div className="card-body items-center text-center flex-grow overflow-hidden">
            <h2 className="card-title text-3xl font-mono">USDC is the native gas here!</h2>
            <p>1 USD = 1 USDC = native gas! And that pays for transactions and interactions within PunkSociety L1.</p>
          </div>
        </div>

        <div className="card lg:h-[500px] max-w-[600px] flex flex-col justify-between items-center bg-base-100 shadow-xl">
          <div className="lg:h-[300px] mt-10 w-full overflow-hidden flex justify-center items-center">
            <figure className="px-10 pt-10 flex-shrink-0">
              <Image src="/revenue.jpg" alt="Revenue" className="object-cover" width={500} height={500} />
            </figure>
          </div>
          <div className="card-body items-center text-center flex-grow overflow-hidden">
            <h2 className="card-title text-3xl font-mono">Track your revenue!</h2>
            <p>Analyze your earnings and spendings in your revenue dashboard.</p>
          </div>
        </div>

        <div className="card lg:h-[500px] max-w-[600px] flex flex-col justify-between bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 flex-shrink-0">
            <Image src="/social-login.jpeg" alt="Notifications" className="" width={500} height={500} />
          </figure>
          <div className="card-body items-center text-center flex-grow overflow-hidden">
            <h2 className="card-title text-3xl font-mono">Social login!</h2>
            <p>Access with your wallet or your social accounts!</p>
          </div>
        </div>

        <div className="card lg:h-[500px] max-w-[600px] flex flex-col justify-between bg-base-100 shadow-xl">
          <div className="lg:h-[300px] mt-10 w-full overflow-hidden flex justify-center items-center">
            <figure className="px-10 pt-10 flex-shrink-0">
              <Image src="/customize-profile.jpg" alt="Notifications" className="rounded-xl" width={500} height={500} />
            </figure>
          </div>

          <div className="card-body items-center text-center flex-grow overflow-hidden">
            <h2 className="card-title text-3xl font-mono">Customize your profile!</h2>
            <p>Change colors, cover photo, create post collections, and so much more...</p>
          </div>
        </div>

        <div className="card lg:h-[500px] max-w-[600px] flex flex-col justify-between bg-base-100 shadow-xl">
          <div className="lg:h-[300px] mt-10 w-full overflow-hidden flex justify-center items-center">
            <figure className="px-10 pt-10 flex-shrink-0">
              <Image src="/messaging.jpg" alt="Messaging" width={500} height={500} />
            </figure>
          </div>
          <div className="card-body items-center text-center flex-grow overflow-hidden">
            <h2 className="card-title text-3xl font-mono">Message with others!</h2>
            <p>Encrypted direct messaging and group chats.</p>
          </div>
        </div>

        <div className="card lg:h-[500px] max-w-[600px] flex flex-col justify-between bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 flex-shrink-0">
            <Image src="/notifications.png" alt="Notifications" className="" width={500} height={500} />
          </figure>
          <div className="card-body items-center text-center flex-grow overflow-hidden">
            <h2 className="card-title text-3xl font-mono">Notifications!</h2>
            <p>Get them on our web, on your phone, on your mail...</p>
          </div>
        </div>

        <div className="card lg:h-[500px] max-w-[600px] flex flex-col justify-between bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 flex-shrink-0">
            <Image src="/accesibility.jpg" alt="Accesibility" className="" width={500} height={500} />
          </figure>
          <div className="card-body items-center text-center flex-grow overflow-hidden">
            <h2 className="card-title text-3xl font-mono">Accesibility!</h2>
            <p>PunkSociety can be used by people with visual or hearing impairments.</p>
          </div>
        </div>
      </div>

      <div className="w-full pt-2 bg-base-200">
        <h1 className="text-6xl font-mono text-center">Meet the team! 🤘</h1>
      </div>
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="flex flex-col items-center gap-3">
            <figure className="px-10 pt-10 flex-shrink-0">
              <Image src="/lulox.jpg" alt="Lulox" className="rounded-xl" width={300} height={300} />
            </figure>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl">Lulox</h2>
              <span className="italic">founder, builder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
