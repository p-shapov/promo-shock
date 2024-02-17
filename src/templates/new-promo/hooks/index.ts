import { useMutation } from "@tanstack/react-query";
import { erc20Abi } from "viem";
import { useReadContracts } from "wagmi";

import {
  useReadPromoFactoryGetPaymentTokenAddress,
  useReadPromoFactoryGetPromoCreationPrice,
  useWritePromoFactoryCreatePromo,
} from "@generated/wagmi";

import { ONCHAIN_VARS_STALE_TIME } from "@promo-shock/shared/constants";
import { pinFIleToIPFS, pinJSONToIPFS } from "@promo-shock/shared/utils/ipfs";

import type { Metadata } from "../types";

const useCreatePromo = () => {
  return useWritePromoFactoryCreatePromo();
};

const usePaymentInfo = () => {
  const creationPrice = useReadPromoFactoryGetPromoCreationPrice({
    query: {
      staleTime: ONCHAIN_VARS_STALE_TIME,
    },
  });
  const tokenAddress = useReadPromoFactoryGetPaymentTokenAddress({
    query: {
      staleTime: ONCHAIN_VARS_STALE_TIME,
    },
  });
  const tokenInfo = useReadContracts({
    query: {
      staleTime: ONCHAIN_VARS_STALE_TIME,
    },
    contracts: [
      {
        abi: erc20Abi,
        address: tokenAddress.data,
        functionName: "decimals",
      },
      {
        abi: erc20Abi,
        address: tokenAddress.data,
        functionName: "symbol",
      },
    ],
  });

  return [creationPrice, tokenInfo, tokenAddress] as const;
};

const useWriteMetadata = () => {
  return useMutation({
    mutationFn: async (metadata: Metadata) => {
      const imageCID = await pinFIleToIPFS(
        metadata.image,
        { cidVersion: 1 },
        { name: `promo-image.${metadata.image.type}` },
      );
      const metadataCID = await pinJSONToIPFS(
        {
          ...metadata,
          image: `https://ipfs.io/ipfs/${imageCID}`,
          external_link: process.env.NEXT_PUBLIC_METADATA_EXTERNAL_LINK,
        },
        { cidVersion: 1 },
        { name: "promo-metadata.json" },
      );

      return metadataCID;
    },
  });
};

export { useCreatePromo, useWriteMetadata, usePaymentInfo };