import {NavLink} from "react-router-dom"

const style = {
  width: "60%",
  margin: "5% 0 1%",
  padding: "1em",
  textDecoration: "none",
  color: "black",
  backgroundColor: "rgb(255, 120, 44",
  fontWeight: "bold",
  verticalAlign: "center",
};

const Navbar = () => {
  return (
    <div>
    <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: "red",
        }}
        exact
        style={style}
        to="/"
    >Home</NavLink>

    <NavLink
        activeStyle={{
            fontWeight: "bolder",
            color: "red"
        }}
        exact
        style={style}
        to="/players"
    >Players</NavLink>

    <NavLink
        activeStyle={{
            fontWeight: "bolder",
            color: "red"
        }}
        exact
        style={style}
        to="/player/new"
    >New Player</NavLink>
      
   

     
    </div>
  );
};

export default Navbar;
