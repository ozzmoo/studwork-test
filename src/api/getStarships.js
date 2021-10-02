export const getStarships = async (url = "https://swapi.dev/api/starships") => {
  const res = await fetch(url);
  const starships = await res.json();
  return starships;
}