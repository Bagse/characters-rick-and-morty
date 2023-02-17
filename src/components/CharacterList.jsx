import { useEffect, useState } from "react";
import { Character } from "./Character";

// Esta función renderiza dos botones, uno para ir a la página anterior y otro para ir a la siguiente página.
function NavPage(props) {
  return (
    <div className="d-flex justify-content-between align-items-center p-4">
      <button
        className="btn btn-info btn-sm"
        onClick={() => props.setPage(props.page - 1)}
        disabled={props.page === 1}
      >
        Prev Page {props.page - 1}
      </button>

      <p>Page: {props.page}</p>
      <button
        className="btn btn-info btn-sm"
        onClick={() => props.setPage(props.page + 1)}
      >
        Next Page {props.page + 1}
      </button>
    </div>
  );
}

// Esta función muestra los personajes de Rick y Morty desde una API
export function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  // Se muestra un spinner para indicar que la página se está cargando. Si es falsa, se muestra la lista de personajes.
  return (
    <div className="container">
      {loading ? (
        <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      ) : (
        // Cada personaje ocupará 4 columnas de ancho en una pantalla media
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}

      {/* Se muestra los botones de navegación de la página. */}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}
