export type Id = string | number;

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

export type TJobPosition = {
  id: Id;
  title: string;
  location: string;
  URL: string;
  country?: string;
};

export type TVacancyByCountry = {
  country: string;
  vacancies: number;
  URL: string;
};

export type TRegionalVacancies = {
//   id: Id;
  name: string;
  employeesNumber: number;
  officesNumber: number;
  teritorries: TVacancyByCountry[];
};
