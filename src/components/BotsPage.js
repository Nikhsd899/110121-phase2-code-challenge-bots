
import React, {useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({ bots, releaseBot }) {
  const [enlistedBots, setEnlistedBots] = useState([])

  function enlistBot(bot) {
    setEnlistedBots(bots.map(b => b.id === bot.id ? {...b, enlisted: true} : b));
    console.log("Enlisted Bots", enlistedBots.filter(b => b.enlisted));
  }

  function dischargeBot(bot) {
    setEnlistedBots(enlistedBots.map(b => b.id === bot.id ? {...b, enlisted: false} : b))
  }

  return (
    <div>
      <YourBotArmy enlistedBots={bots.filter(b => b.enlisted)} 
                   dischargeBot={dischargeBot} 
                   releaseBot={releaseBot}/>   
      <BotCollection bots={bots} 
                    enlistBot={enlistBot} 
                    releaseBot={releaseBot}/>
    </div>
  )
}

export default BotsPage;
