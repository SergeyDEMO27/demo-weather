import { ISuggest } from "../models/ISuggest";

interface suggestionsInterface {
  suggestions: Array<{
    locationId: string;
    address: {
      city: string;
      county: string;
      country: string;
    };
  }>;
}

export const suggestParser = ({
  suggestions,
}: suggestionsInterface): Array<ISuggest> => {
  return suggestions.reduce<ISuggest[]>((acc, { locationId, address }) => {
    acc = [
      ...acc,
      {
        id: address.city,
        city: address.city,
        county: address.county,
        country: address.country,
      },
    ];
    return acc;
  }, []);
};
