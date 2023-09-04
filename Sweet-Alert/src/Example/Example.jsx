import React from 'react';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlockExample() {
  const buttonContainerStyle = {
    width: '50%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  // Función para mostrar la alerta de confirmación para editar
  const handleEditClick = async () => {
    const result = await Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: "Don't save",
      customClass: {
        confirmButton: 'btn btn-success', // Estilo para el botón "Save"
        denyButton: 'btn btn-info', // Estilo para el botón "Don't save"
      },
    });

  };

  // Función para mostrar la alerta de confirmación para eliminar
  const handleDeleteClick = async () => {
    const productName = "el producto"; // Cambia esto según tu lógica
    const confirmation = await Swal.fire({
      title: `¿Estás seguro de eliminar ${productName}?`,
      text: "Esta acción no se puede deshacer.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#aa8caf',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sí, Eliminarlo',
    });

  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div style={buttonContainerStyle}>
        <Button
          variant="danger"
          size="lg"
          block
          onClick={handleDeleteClick} // Para el botón "Delete"
        >
          Delete
        </Button>
        <Button
          variant="primary"
          size="lg"
          block
          onClick={handleEditClick} // Para el botón "Edit"
        >
          Edit
        </Button>
      </div>
    </div>
  );
}

export default BlockExample;
