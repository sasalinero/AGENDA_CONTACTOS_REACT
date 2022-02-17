import "../styles/main.scss";
import { useState } from "react";
import initialData from "./data.json";

function App() {
  const [contactos, setContacto] = useState(initialData);
  const [search, setSearch] = useState("");
  //const [newContact, setContact] = useState("");
  const [newName, setName] = useState("");
  const [newApellido, setApellido] = useState("");
  const [newTelefono, setTelefono] = useState("");
  const [newEmail, setEmail] = useState("");

  const handleChangeName = (ev) => {
    setName(ev.target.value);
  };
  const handleChangeApellido = (ev) => {
    setApellido(ev.target.value);
  };
  const handleChangeTelefono = (ev) => {
    setTelefono(ev.target.value);
  };
  const handleChangeEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    const newContact = {
      name: newName,
      lastname: newApellido,
      phone: newTelefono,
      email: newEmail,
    };

    setContacto([...initialData, newContact]);
  };

  const handleFilter = (ev) => {
    setSearch(ev.target.value);
  };

  const renderContactos = () => {
    return contactos

      .filter((contacto) => {
        return contacto.name.toLowerCase().includes(search.toLowerCase());
      })
      .map((contacto) => {
        return (
          <ul>
            <li className="tarjetaColor">
              <p>Nombre: {contacto.name}</p>

              <p>Apellido:{contacto.lastname}</p>

              <p>Teléfono:{contacto.phone}</p>

              <p>Email:{contacto.email}</p>
            </li>
          </ul>
        );
      });
  };

  return (
    <div className="cuadricula">
      <h1 className="agenda">Mi Agenda de Contactos</h1>
      <input
        className="search"
        type="text"
        placeholder="Filtrar contactos por nombre"
        onChange={handleFilter}
      />
      <ul>{renderContactos()}</ul>

      <form action="" onClick={handleClick}>
        <label htmlFor="name" className="add">
          Añade un nuevo contacto
          <input
            type="text"
            placeholder="Nombre"
            className="input"
            id="name"
            onChange={handleChangeName}
          />
          <input
            type="text"
            placeholder="Apellido"
            className="input"
            id="apellido"
            onChange={handleChangeApellido}
          />
          <input
            type="text"
            placeholder="Teléfono"
            className="input"
            id="telefono"
            onChange={handleChangeTelefono}
          />
          <input
            type="email"
            placeholder="email"
            className="input"
            id="email"
            onChange={handleChangeEmail}
          />
        </label>
        <input
          type="submit"
          className="button"
          value="Añadir"
          onClick={handleClick}
        />
      </form>
    </div>
  );
}

export default App;
