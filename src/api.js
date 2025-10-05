export const getApiOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_APP_RAPIDAPI_KEY,
    "x-rapidapi-host": import.meta.env.VITE_X_RAPIDAPI_HOST,
  },
};

export const GEO_API_URL = import.meta.env.VITE_GEO_API_URL;

export const WETHER_API_URL = import.meta.env.VITE_WETHER_API_URL;

export const WETHER_API_KEY = import.meta.env.VITE_WETHER_API_KEY;
