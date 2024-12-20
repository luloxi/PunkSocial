import React, { useState } from "react";
import Image from "next/image";
import { Balance } from "./Balance";
import { QRCodeSVG } from "qrcode.react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Address as AddressType } from "viem";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";

type AddressQRCodeModalProps = {
  address: AddressType;
  modalId: string;
};

export const AddressQRCodeModal = ({ address, modalId }: AddressQRCodeModalProps) => {
  const [copied, setCopied] = useState(false);

  const { address: connectedAddress } = useAccount();

  const { data: usdcBalance } = useScaffoldReadContract({
    contractName: "MockUSDC",
    functionName: "balanceOf",
    args: [connectedAddress],
    watch: true,
  });

  const formattedUsdcBalance = usdcBalance ? (Number(usdcBalance.toString()) / 1e6).toFixed(2) : "0.00";

  const handleCopy = () => {
    setCopied(true);
    notification.success("Address copied to clipboard");
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <>
      <div>
        <input type="checkbox" id={`${modalId}`} className="modal-toggle" />
        <label htmlFor={`${modalId}`} className="modal cursor-pointer">
          <label className="modal-box relative">
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="text-xl font-bold ">Receive USDC to this address</h2>

              <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
                <QRCodeSVG value={address} size={256} />
              </div>
              <div className="break-words whitespace-pre-wrap text-center w-full">{address}</div>

              <CopyToClipboard text={address} onCopy={handleCopy}>
                <button className="btn btn-primary text-white border-0 bg-green-600 hover:bg-green-500 active:bg-green-500 mt-4">
                  {copied ? "Copied!" : "Copy Address"}
                </button>
              </CopyToClipboard>

              <div className="flex flex-row justify-around gap-3 items-center mt-4">
                <div className="flex flex-row justify-center items-center px-2 gap-2 rounded-lg bg-yellow-500 text-black text-xl">
                  <span className="font-bold">Balance: </span>
                  <span className="flex items-center justify-center gap-1 text-blue-600 font-bold">
                    <Image src="/usdc-logo.png" alt="USDC" width={20} height={20} className="inline-block" />
                    {formattedUsdcBalance}
                  </span>
                  <Balance address={address} />{" "}
                </div>
                <div> </div>
              </div>
              <label
                htmlFor={`${modalId}`}
                className="btn text-xl rounded-full text-white bg-red-600 border-0 hover:bg-red-500 btn-ghost btn-sm btn-circle absolute right-3 top-3"
              >
                ✕
              </label>
            </div>
          </label>
        </label>
      </div>
    </>
  );
};
