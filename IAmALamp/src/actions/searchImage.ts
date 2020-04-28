const PER_PAGE = 5;
const client_id = '';

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
  return fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${text}&client_id=${client_id}&per_page=${PER_PAGE}`,
  )
    .then((res) => res.json())
    .then((response: SearchResult) =>
      response.results.map((result) => result.urls.regular),
    )
    .catch((err) => {
      throw err;
    });
};
