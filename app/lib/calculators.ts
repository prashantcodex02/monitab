import raw from "../data/calculators.json";
export type Calculator={slug:string;title:string;category:string;description:string;keywords:string};
export const calculators=raw as Calculator[];
export const getCalculator=(slug:string)=>calculators.find(c=>c.slug===slug);
export const categoryLabel=(c:string)=>({investment:"Investing",india:"India Finance",loans:"Loans & Mortgages",usa:"US Finance",retirement:"Retirement",global:"Money Tools",business:"Business"}[c]||c);
