import {useState} from "react"
import {useHistory} from "react-router-dom"



const PlayerForm = () => {
  const [playerInfo, setPlayer] = useState({
    name: "",
    email: "",
    password: ""
})

  const handleChange = (e) => {
    setPlayer({
      ...playerInfo,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    debugger
  }
  return (
    <>
      <h3>register for the league</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input onChange={handleChange} type="text" name="name" value={playerInfo.name} required /><br />

        <label htmlFor="email">Email</label>
        <input onChange={handleChange} type="text" name="email" value={playerInfo.email} required /><br />

        <label htmlFor="password">Password</label>
        <input onChange={handleChange} type="text" name="password" value={playerInfo.password} required /><br />
        <input type="submit" value="register" />
      </form>
    </>
  );
}

export default PlayerForm