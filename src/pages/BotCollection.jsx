import React from "react";
import BotCard from "../components/BotCard";

function BotCollection({ bots, handleAddViewBot = () => {} }) {
  return (
    <>
      <h1 className="text-3xl font-bold italic underline">BotCollection</h1>
      
      <div className='flex flex-wrap' style={{width: 'fit-content'}}>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleAddViewBot={handleAddViewBot} />
        ))}
      </div>
    </>
  );
}

export default BotCollection;
