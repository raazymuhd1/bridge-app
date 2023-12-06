import type { StaticImageData } from "next/image";

export interface IFaqs {
    id: number;
    question: string;
    answer: string;
    itemNo: string;
}

export interface INetwork {
    id: number;
    name: string;
    chainId: number;
    logo: StaticImageData;
}

