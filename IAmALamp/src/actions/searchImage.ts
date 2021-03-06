//@ts-ignore
import { UNSPLASH_KEY } from 'react-native-dotenv';

const PER_PAGE = 5;

interface SearchResult {
  results: [
    {
      urls: {
        regular: string;
      };
    },
  ];
}
export const search = (text: string, page: number) => {
  const key = UNSPLASH_KEY;

  return fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${text}&client_id=${key}&per_page=${PER_PAGE}`,
  )
    .then((res) => res.json())
    .then((response: SearchResult) =>
      response.results.map((result) => result.urls.regular),
    )
    .catch((err) => {
      throw err;
    });
};
