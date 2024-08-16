export const PokemonCards = ({ pokemonData }) => {
  // Create a unique ID for each modal using pokemonData.id
  const modalId = `modal-${pokemonData.id}`;
  const modalLabelId = `modal-label-${pokemonData.id}`;

  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="pokemon-image"
        />
      </figure>
      <h1 className="pokemon-name">{pokemonData.name}</h1>

      <button
        type="button"
        className="pokemon-button"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
      >
        View Specs
      </button>

      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby={modalLabelId}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="pokemon-modal-name" id={modalLabelId}>
                {pokemonData.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="pokemon-info pokemon-highlight">
                <p>
                  {pokemonData.types
                    .map((curType) => curType.type.name)
                    .join(", ")}
                </p>
              </div>
              <div className="grid-three-cols">
                <p className="pokemon-info">
                  <span>Height:</span> {pokemonData.height}
                </p>
                <p className="pokemon-info">
                  <span>Weight:</span> {pokemonData.weight}
                </p>
                <p className="pokemon-info">
                  <span>Speed:</span> {pokemonData.stats[5].base_stat}
                </p>
              </div>
              <div className="grid-three-cols">
                <div className="pokemon-info">
                  <span>Experience:</span>
                  <p>{pokemonData.base_experience}</p>
                </div>
                <div className="pokemon-info">
                  <span>Attack:</span>
                  <p>{pokemonData.stats[1].base_stat}</p>
                </div>
                <div className="pokemon-info">
                  <span>Abilities:</span>
                  <p>
                    {pokemonData.abilities
                      .map((abilityInfo) => abilityInfo.ability.name)
                      .slice(0, 1)
                      .join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
