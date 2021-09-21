const API_KEY = '08a50f06463d75112b944d1b097b0ce3';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slung: 'originals',
        title: 'Originais da Netflix',
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await basicFetch(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: [],
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: [],
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: [],
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: [],
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: [],
      },
    ];
  },
};
