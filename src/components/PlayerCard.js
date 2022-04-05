

const PlayerCard = ({player, handleDeletePlayer}) => {
  const handleDeleteClick = (e) => {
    e.preventDefault()
    fetch(`http://localhost:9292/users/${player.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => handleDeletePlayer(player));
  }
  console.log(player)
  return (
    <div>
      <h1>
      name: {player.name}
      </h1>
      <h1>email: {player.email} </h1>
      <h1>sport: {player.sport}</h1>
      <h1>skill level:{player.level}</h1>
      <button onClick={handleDeleteClick}>X</button>

    </div>
  );
}

export default PlayerCard