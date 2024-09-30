import PropTypes from "prop-types";

function NavBar({ pokemonList, handleClick }) {
  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button onClick={() => handleClick(index)} key={index}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  pokemonList: PropTypes.shape(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default NavBar;
