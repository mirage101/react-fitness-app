export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fitnessCalcOptions = {
  method: "GET", 
  headers: {
    'X-RapidAPI-Key': '1b6e07c6e9msh2fa491c3ed9d522p128df7jsnb61ce24236d8',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
