import React from "react";

function BotCard({ bot, handleAddViewBot = () => {}, children }) {
  return (
    <div
      className="flex flex-col m-2 mt-5 border-2 border-solid border-black bg-orange-100 p-0 clear-right"
      onClick={() => handleAddViewBot(bot)}
    >
      <img src={bot.avatar_url} alt={bot.name} />
      <p>{bot.name}</p>
      <p>{bot.bot_class}</p>
      <p>{bot.catchphrase}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {children}
    </div>
  );
}

export default BotCard;
