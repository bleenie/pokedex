import { useEffect } from "react";
import { PieChart, Pie } from "recharts";

const BattleStats = ({ pokemon }) => {
  console.log(pokemon?.stats);
  // const hp = pokemon.stats[0].base_stat;
  // const atk = pokemon.stats[1].base_stat;
  // const def = pokemon.stats[2].base_stat;
  // const spatk = pokemon.stats[3].base_stat;
  // const spdef = pokemon.stats[4].base_stat;
  // const spd = pokemon.stats[5].base_stat;

  let hp;
  let atk;
  let def;
  let spatk;
  let spdef;
  let spd;

  useEffect(() => {
    if (!pokemon) return null;
    hp = pokemon.stats[0].base_stat;
    atk = pokemon.stats[1].base_stat;
    def = pokemon.stats[2].base_stat;
    spatk = pokemon.stats[3].base_stat;
    spdef = pokemon.stats[4].base_stat;
    spd = pokemon.stats[5].base_stat;
  });

  const data = [
    { name: "HP", stat: hp, fill: "#69DC12" },
    { name: "ATK", stat: atk, fill: "#EFCC18" },
    { name: "DEF", stat: def, fill: "#E86412" },
    { name: "SP ATK", stat: spatk, fill: "#14C3F1" },
    { name: "SP DEF", stat: spdef, fill: "#4A6ADF" },
    { name: "SPD", stat: spd, fill: "#D51DAD" },
  ];

  return (
    <>
      <p>Battle stats</p>
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="stat" outerRadius={90} innerRadius={50} />
      </PieChart>
    </>
  );
};

export default BattleStats;
