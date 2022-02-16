export type TQuote = {
  quote: string;
  author: {
    name: string;
    avatar?: string;
    businessUnit?: string;
    location?: string;
  };
};

export type TSubtitleColor = "red" | "green" | "white";

export type TClassNameProp = { className?: string };
