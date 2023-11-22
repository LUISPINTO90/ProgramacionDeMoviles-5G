const LAST_FM_API_KEY = "f9a5a65b710a63438a50a93dd2208ec5";
const DEEZER_API_URL = "https://api.deezer.com";

const getLastFMArtists = () => {
  const LAST_FM_URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=${LAST_FM_API_KEY}&format=json`;

  return fetch(LAST_FM_URL)
    .then((response) => response.json())
    .then((data) => data.topartists.artist);
};

const getDeezerArtistInfo = (artistName) => {
  const DEEZER_SEARCH_URL = `${DEEZER_API_URL}/search?q='${artistName}'`;

  return fetch(DEEZER_SEARCH_URL)
    .then((response) => response.json())
    .then((data) => data.data[0].artist);
};

const getMusicData = async () => {
  try {
    const lastFMArtists = await getLastFMArtists();

    const artistsData = await Promise.all(
      lastFMArtists.map(async (artist) => {
        const deezerInfo = await getDeezerArtistInfo(artist.name);
        return {
          id: artist.mbid,
          name: artist.name,
          listeners: artist.listeners,
          mbid: artist.mbid,
          streamable: artist.streamable,
          image: deezerInfo.picture_medium,
        };
      })
    );

    return artistsData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { getMusicData };
