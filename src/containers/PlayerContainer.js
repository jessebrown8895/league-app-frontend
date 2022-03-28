import {useState, useEffect} from "react"
import PlayerForm from "../components/PlayerForm";
import PlayerList from "../components/PlayerList";

const PlayerContainer = () => {

  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then(resp => resp.json())
    .then(data => setPlayers(data))
  }, [])

  const handleDeletePlayer = (deletedPlayer) => {
   const allPlayers = players.filter(player => player !== deletedPlayer)
   setPlayers(allPlayers)
  }
  return (
    <div><PlayerList players={players} handleDeletePlayer={handleDeletePlayer} />
   </div>
  )
}

export default PlayerContainer