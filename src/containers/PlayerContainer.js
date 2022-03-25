import {useState, useEffect} from "react"
import PlayerList from "../components/PlayerList";

const PlayerContainer = () => {

  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then(resp => resp.json())
    .then(data => setPlayers(data))
  }, [])
  
  return (
    <div><PlayerList players={players} /></div>
  )
}

export default PlayerContainer