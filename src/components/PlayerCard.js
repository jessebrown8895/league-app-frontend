

const PlayerCard = ({player}) => {
  return (
    <div>
     <h1>id:{player.id} name: {player.name}</h1> <h1>email:{player.email}</h1>
    </div>
  );
}

export default PlayerCard