import PlayerCard from './PlayerCard'

const PlayerList = ({players}) => {

  return (
    <div>{players.map(player => <PlayerCard player={player} key={player.id}/>)}</div>
  )
}

export default PlayerList