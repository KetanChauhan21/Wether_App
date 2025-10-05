import { useState } from "react";
import { WETHER_API_KEY, WETHER_API_URL } from "./api";
import "./App.css";
import CurrentWether from "./Components/Current-Wether/CurrentWether";
import Search from "./Components/Search/Search";
import Forcast from "./Components/Forcast/Forcast";

function App() {
  const [CurrentWetherInfo, setCurrentWether] = useState(null);
  const [ForCastInfo, setForCast] = useState(null);

  const heandleOnSearchChange = (searchdata) => {
    const [lat, lon] = searchdata.value.split("");
    const CurrentWetherFetch = fetch(
      `${WETHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WETHER_API_KEY}&units=metric`
    );
    const ForCastFetch = fetch(
      `${WETHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WETHER_API_KEY}&units=metric`
    );

    Promise.all([CurrentWetherFetch, ForCastFetch])
      .then(async (response) => {
        const WetherResponse = await response[0].json();
        const ForCastResponse = await response[1].json();
        setCurrentWether({ city: searchdata.label, ...WetherResponse });
        setForCast({ city: searchdata.label, ...ForCastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log([CurrentWetherInfo, ForCastInfo]);

  return (
    <>
      <Search onSearchChange={heandleOnSearchChange} />
      {CurrentWetherInfo && <CurrentWether data={CurrentWetherInfo} />}
      {ForCastInfo && <Forcast data={ForCastInfo} />}
    </>
  );
}

export default App;
