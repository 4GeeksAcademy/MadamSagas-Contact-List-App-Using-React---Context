const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      contacts: []
    },
    actions: {
		AddNewAgendaContact: function (name, phone, email, address) {
        fetch(
          `https://playground.4geeks.com/contact/agendas/MadamSagas/contacts`,
		  
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              phone: phone,
              email: email,
              address: address,
            }),
          }
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else if (response.staus == 404) {
              throw new Error("error no se creo el contacto");
            } else if (response.status === 500) {
              throw new Error("Ocurrio un error en el servidor");
            } else {
              throw new Error("error al cargar elemnto");
            }
          })
          .then((data) => {
            console.log("elemonto creado con exito: ", data);
    
            getActions().GetAgendaContacts();
          })
          .catch((error) => {
            console.log(error)
          });
      },

      GetAgendaContacts: function () {
        fetch(
          `https://playground.4geeks.com/contact/agendas/MadamSagas/contacts`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                "No se pudieron obtener los contactos de la agenda"
              );
            }
            return response.json();
          })
          .then((data) => {
            setStore({contacts: data.contacts});
            console.log("Todos los Elemento: ", data);
          })
          .catch((error) => console.log(error));
      },

      createAgenda: function () {
        fetch(
          `https://playground.4geeks.com/contact/agendas/MadamSagas`,
          {method: "POST"}
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                "No se pudieron obtener los contactos de la agenda"
              );
            }
            return response.json();
          })
          .then((data) => {
            
            console.log(data);
          })
          .catch((error) => console.log(error));
      },

      DeleteAgentaContact: function(id) {
        fetch(
          `https://playground.4geeks.com/contact/agendas/MadamSagas/contacts/${id}`,
          {
            method: "DELETE",
          }
        ).then((response) => {
          if (!response.ok) {
            throw new Error("No se pudo eliminar en contacto");
          }
          getActions().GetAgendaContacts();
        });
      },

      UpdateContactAgenta: function (
        id, UpdateContactAgenta) {
        fetch(
          `https://playground.4geeks.com/contact/agendas/MadamSagas/contacts/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(UpdateContactAgenta),
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("No se pudo actualizar el elemento");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Contacto actualizado: ", data);
          })

          .catch((error) => {
            console.log(error.message);
          });
          
      },
    },
  };
};

export default getState;
