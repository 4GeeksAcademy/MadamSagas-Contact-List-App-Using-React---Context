const Home = () => {
  const [items, setItems] = useState();
  let itemTocreate = {};
  // Funcion para crear un nuevo elemento
  const createItem = (data) => {
    fetch(`${BASE_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status == 404) {
          throw new Error("Error no se encontró el elemento");
        } else if (response.status === 500) {
          throw new Error("Error Ocurrio un error en el servidor");
        } else {
          throw new Error("Error al crear elemento");
        }
      })
      .then((data) => {
        console.log("Elemento creado: ", data);
        getAllItems();
        // guardarlo en un estado de react
        // puedo manipularlo
        // puedo mostrarlo al usuario
        // puedo usarlo mas adelante
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };
  const getAllItems = () => {
    fetch(`${BASE_URL}/items`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo obtener los elementos");
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
        console.log("Todos los elementos: ", data);
      })
      .catch((error) => console.log(error));
  };
  function updateItem(id, updatedItem) {
    fetch(`${BASE_URL}/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo actualizar el elemento");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Elemento actualizado: ", data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  function deleteItem(id) {
    fetch(`${BASE_URL}/items/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo eliminar el elemento");
        }
        getAllItems();
        console.log("Elemento eliminado con exito");
      })
      .catch((err) => console.log(err.message));
  }
  useEffect(() => {
    getAllItems();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputName1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                  aria-describedby="nameHelp"
                  onChange={(e) => {
                    itemTocreate.name = e.target.value;
                    console.log(e.target.value);
                    console.log(itemTocreate);
                  }}
                />
                <div id="nameHelp" className="form-text">
                  Write your name!.
                </div>
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  createItem(itemTocreate);
                }}
              >
                Create Item
              </button>
            </form>
          </div>
          <div className="col">
            {items &&
              items.map((item, index) => {
                return (
                  <div className="card mb-3">
                    <img
                      src={`https://picsum.photos/300/100?random=${index + 1}`}
                      className="card-img-top"
                      alt="image card"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">
                        El usuario {item.name} tiene el id {item._id}
                      </p>
                      <div className="d-flex justify-content-center">
                        {/* <button className="btn btn-primary me-2">
                        Obtener Items
                      </button> */}
                        <button className="btn btn-warning me-2">
                          Actualizar Item
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteItem(item._id);
                          }}
                        >
                          Borrar Item
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
