import React from "react";
import BotCard from "../components/BotCard";

function BotArmy({ army, removeFromArmy }) {
  return (
    <div className="flex flex-wrap" style={{ width: "fit-content" }}>
      {army.map((bot) => (
        <BotCard key={bot.id} bot={bot}>
          <p>
            <button onClick={() => removeFromArmy(bot)}>Remove</button>
          </p>
        </BotCard>
      ))}
    </div>
  );
}

export default BotArmy;
