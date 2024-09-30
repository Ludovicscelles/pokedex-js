import PropTypes from "prop-types";

function NavBar({ pokemonList, handleClick, pokemonIndex }) {
  if (pokemonIndex === 3) {
    alert(`pika pikachu !!!`);
  }
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
  pokemonIndex: PropTypes.number.isRequired,
  pokemonList: PropTypes.shape(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default NavBar;
