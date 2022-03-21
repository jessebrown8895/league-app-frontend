
const Header = ({slogan, leagueName }) => {
  return (
    <div>
      <h1>{leagueName}</h1>
      <h2>{slogan}</h2>
    </div>
  );
};

export default Header