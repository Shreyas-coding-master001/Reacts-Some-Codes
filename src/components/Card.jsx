import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Heart,
  Sword,
  Shield,
  Zap,
  Wind,
  Gauge
} from "lucide-react";

const getStatIcon = (name) => {
  switch (name) {
    case "hp":
      return <Heart className="text-red-500 w-5 h-5" />;
    case "attack":
      return <Sword className="text-orange-500 w-5 h-5" />;
    case "defense":
      return <Shield className="text-blue-500 w-5 h-5" />;
    case "special-attack":
      return <Zap className="text-yellow-500 w-5 h-5" />;
    case "special-defense":
      return <Shield className="text-purple-500 w-5 h-5" />;
    case "speed":
      return <Wind className="text-green-500 w-5 h-5" />;
    default:
      return <Gauge className="w-5 h-5" />;
  }
};

const Card = ({ pokemon }) => {
  const [statsData, setStatsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getStats() {
      try {
        const statsURI = pokemon?.stats[0]?.stat?.url;

        if (!statsURI) return;

        const response = await axios.get(statsURI);
        setStatsData(response.data);
      } catch (error) {
        console.error("Cannot fetch stats!!", error);
      } finally {
        setLoading(false);
      }
    }

    getStats();
  }, [pokemon]);

  return (
    <div className="pb-5 rounded-2xl bg-zinc-800 w-80 shadow-xl 
                    hover:scale-105 transition-all duration-300 
                    relative overflow-hidden">

      <div className="p-3 w-full h-56 bg-white">
        <div
          className="bg-center bg-contain bg-no-repeat h-full w-full"
          style={{
            backgroundImage: `url(${pokemon?.sprites?.front_shiny})`,
          }}
        />
      </div>

      <div className="flex flex-col items-center gap-2 mt-3 p-3">
        <h3 className="text-white font-bold uppercase text-2xl">
          {pokemon?.name}
        </h3>

        <div className="flex gap-2 flex-wrap justify-center">
          {pokemon?.types?.map((type, idx) => (
            <p
              key={idx}
              className="bg-zinc-700 text-white font-extrabold px-3 py-1 rounded-full text-sm capitalize"
            >
              {type.type.name}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-5 bg-zinc-900 p-4 rounded-xl mx-3 text-white">

        {loading ? (
          <p className="text-center text-gray-400">Loading stats...</p>
        ) : statsData ? (
          <>
            <div className="flex items-center gap-2 mb-2">
              {getStatIcon(statsData.name)}
              <h4 className="font-bold capitalize">
                {statsData.name}
              </h4>
            </div>

            <div className="text-sm space-y-1 text-gray-300">
              <p>
                Game Index: {statsData.game_index}
              </p>
              <p>
                Characteristics: {statsData.characteristics.length}
              </p>
              <p>
                Items Affecting: {statsData.affecting_items.length}
              </p>
            </div>
          </>
        ) : (
          <p className="text-red-400 text-center">
            Failed to load stats
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
