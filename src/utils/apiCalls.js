import axios from "axios";

const getComics = async () => {
  const getInfo = async () => {
    const comicsData = await axios({
      method: "GET",
      url: `https://comicvine.gamespot.com/api/issues/?api_key=${process.env.REACT_APP_COMICVINE_API_KEY}&format=json`,
    }).catch((err) => {
      console.error("There is a problem with the API", err);
      return err;
    });
    return comicsData;
  };
  let result = await getInfo();
  return result.data.results;
};

const getSingleComic = async (id) => {
  const getInfo = async () => {
    const comicData = await axios({
      method: "GET",
      url: `https://comicvine.gamespot.com/api/issue/${id}/?api_key=${process.env.REACT_APP_COMICVINE_API_KEY}&format=json`,
    }).catch((err) => {
      console.error("There is a problem with the API", err);
      return err;
    });
    return comicData;
  };
  let result = await getInfo();
  return result.data.results;
};

const getSingleComicDetail = async (url) => {
  const getInfo = async () => {
    const comicData = await axios({
      method: "GET",
      url: `${url}/?api_key=${process.env.REACT_APP_COMICVINE_API_KEY}`,
    }).catch((err) => {
      console.error("There is a problem with the API", err);
      return err;
    });
    return comicData;
  };
  let result = await getInfo();
  return result.data;
};

export { getComics, getSingleComic, getSingleComicDetail };
