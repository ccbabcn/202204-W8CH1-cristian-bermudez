import { useEffect, useState } from "react";

interface IStarShip {
  starshipClass: string;
  total: number;
}

const Starships = (): JSX.Element => {
  const [startShips, setStarSgips] = useState<IStarShip[]>([]);
  const [totalShips, setTotalShips] = useState<number>(0);

  const getStarShips = async () => {
    const response = await fetch("https://swapi.dev/api/starships/");
    const startData = await response.json();

    const { count } = startData;
    const { results } = startData;

    setStarSgips(results);
    setTotalShips(count);
  };

  useEffect(() => {
    getStarShips();
  }, []);

  return (
    <div id="background-container">
      <header id="header-title">Star Wars Test</header>
      <main id="main-container">
        <h2>Starships:</h2>
        <p id="total-ships">Total ships: {totalShips}</p>
        <h2>Starships by class:</h2>
        {startShips.map((ship, index) => (
          <p key={index}>
            {ship.starshipClass} {ship.total}
          </p>
        ))}
      </main>
    </div>
  );
};

export default Starships;
