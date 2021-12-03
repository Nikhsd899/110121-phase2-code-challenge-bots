import React from "react";
import BotsPage from "./BotsPage";

import React , { useEffect, useState } from "react";
import SushiContainer from './SushiContainer';
import React, { useEffect, useState } from "react";
import BotsPage from "./BotsPage";

const api_url = "http://localhost:8002/bots";

function App() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch(api_url)
    .then(r => r.json())
    .then(data => setBots(data))
  }, []);

  function releaseBot(bot) {
    setBots(bots.filter(b => b.id !== bot.id))
  
}

  return (
    <div className="App">
      <BotsPage bots={bots} releaseBot={releaseBot}/>
    </div>
  );
}

export default App;
