export const getStarships = async () => {
  const res = await fetch("https://swapi.dev/api/starships");
  const starships = await res.json();
  return starships;
}