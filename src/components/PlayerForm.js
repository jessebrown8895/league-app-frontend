import {useState} from "react"
import {useHistory} from "react-router-dom"



const PlayerForm = () => {
  const history = useHistory()
  const [playerInfo, setPlayer] = useState({
    name: "",
    email: "",
    nickname: "",
    level: "",
    sport: ""

})
  
  const handleChange = (e) => {
    setPlayer({
      ...playerInfo,
      [e.target.name]: e.target.value
    })
  }

 
  const handleSubmit = e => {
    e.preventDefault()
    if (
      [playerInfo.name, playerInfo.email, playerInfo.nickname, playerInfo.sport, playerInfo.level].some(
        (value) => value.trim() === "")) {
      alert("You must fill in all the information please!");
    }

    const newPlayer = {
      name: playerInfo.name,
      email: playerInfo.email,
      nickname: playerInfo.nickname,
      level: playerInfo.level,
      sport: playerInfo.sport
    }
    
      fetch("http://localhost:9292/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlayer),
      }).then(() => history.push("/players"));

  }
  return (
    <>
      <h3>register for the league</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={playerInfo.name}
          required
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          type="text"
          name="email"
          value={playerInfo.email}
          required
        />
        <br />

        <label htmlFor="nickname">nickname:</label>
        <input
          onChange={handleChange}
          type="text"
          name="nickname"
          value={playerInfo.nickname}
          required
        />
        <br />
        <label html="sport">Choose your sport!</label>
        <select type="text" name="sport" value={playerInfo.sport} onChange={handleChange}>
          <option>Choose your sport</option>
          <option value="Kickball">Kickball</option>
          <option value="Basketball">Basketball</option>
          <option value="Volleyball">Volleyball</option>
        </select>
        <br />

        <label htmlFor="level">Skill level:</label>
        <select
          type="text"
          name="level"
          value={playerInfo.level}
          onChange={handleChange}
        >
          <option>Choose your level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <br />
        <input type="submit" value="register" />
      </form>
    </>
  );
}

export default PlayerForm