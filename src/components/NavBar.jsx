import PropTypes from "prop-types";

function NavBar({ pokemonIndex, pokemonList, handlePrevious, handleNext }) {
  return (
    <>
      {pokemonIndex > 0 ? (
        <button onClick={handlePrevious}>Précédent</button>
      ) : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleNext}>Suivant</button>
      ) : null}
      ;
    </>
  );
}

NavBar.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrevious: PropTypes.func.isRequired,
  pokemonIndex: PropTypes.number.isRequired,
  pokemonList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    length: PropTypes.number.isRequired,
  }).isRequired,
};

export default NavBar;
