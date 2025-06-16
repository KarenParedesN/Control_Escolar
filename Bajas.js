 document.getElementById('bajaForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const matricula = document.getElementById('matricula').value;
      const tipoBaja = document.getElementById('tipoBaja').value;
      const motivo = document.getElementById('motivo').value;

      if (!nombre || !matricula || !tipoBaja || !motivo) {
        alert("Todos los campos son obligatorios.");
        return;
      }

      const mensaje = `Solicitud de BAJA registrada:\nNombre: ${nombre}\nMatrícula: ${matricula}\nTipo: ${tipoBaja}\nMotivo: ${motivo}`;
      document.getElementById('resultado').textContent = mensaje;
    });