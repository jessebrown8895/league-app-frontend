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
  
  return (
    <div><PlayerList players={players} />
    <PlayerForm /></div>
  )
}

export default PlayerContainer