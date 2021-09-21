const API_KEY = '08a50f06463d75112b944d1b097b0ce3';
const API_BASE = 'https://api.themoviedb.org/3';

export default {
  getHomeList: async () => {
    return [
      {
        slung: 'originals',
        title: 'Originais da Netflix',
        items: [],
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: [],
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: [],
      },
    ];
  },
};
