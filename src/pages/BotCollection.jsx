import React from "react";
import BotCard from "../components/BotCard";

function BotCollection({ bots, handleAddViewBot = () => {} }) {
  return (      
    <div className='flex flex-wrap' style={{width: 'fit-content'}}>
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} handleAddViewBot={handleAddViewBot} />
      ))}
    </div>
  );
}

export default BotCollection;
