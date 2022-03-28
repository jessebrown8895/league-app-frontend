import PlayerCard from './PlayerCard'

const PlayerList = ({players, handleDeletePlayer}) => {

  return (
    <div>{players.map(player => <PlayerCard player={player} handleDeletePlayer={handleDeletePlayer} key={player.id}/>)}</div>
  )
}

export default PlayerList