import "../styles/main.scss";
import { useState } from "react";
import initialData from "./data.json";


function App() {
  const [contactos, setContacto] = useState(initialData);
  const [search, setSearch] = useState("");
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
      //Aquí uso un filter para poder usar el buscador y que me aparezca las coincidencias segun voy escribiendo
      .filter((contacto) => {
        return contacto.name.toLowerCase().includes(search.toLowerCase());
      }) //El uso del map en este caso es para poder buscar dentro la parte que me interese renderizar, nombre, apellidos etc
      .map((contacto) => {
        return (
          <ul className="tarjetas">
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
      
    <header><h1 className="agenda">Mi Agenda de Contactos</h1></header>    
       
      <input
        className="search"
        type="text"
        placeholder="Busca tu contacto"
        onChange={handleFilter}
      /> 
    
      
      <form action="" onClick={handleClick} className="form">
        <label htmlFor="name" className="add">
          Nuevo contacto
          <input
            type="text"
            placeholder="Nombre"
            className="input "
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
            placeholder="Email"
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
      <ul><li>{renderContactos()}</li></ul>
      
   

      
    </div>
  );
}

export default App;
