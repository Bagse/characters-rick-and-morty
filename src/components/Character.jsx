export function Character({ character }) {
  // Se obtiene la imagen, nombre, estatus, especie y locación de cada personaje
  return (
    <div className="bg-dark text-center m-4">
      <h3 className="text-warning">{character.name}</h3>
      <img
        className="img-fluid rounded-pill object-fit-cover"
        src={character.image}
        alt={character.name}
      />
      <h4>
        {character.status} - {character.species}
      </h4>
      <h5 className="text-secondary">Last known location:</h5>
      <h4>{character.location.name}</h4>
    </div>
  );
}
