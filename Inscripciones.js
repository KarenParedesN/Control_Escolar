document.getElementById('inscripcionForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const carrera = document.getElementById('carrera').value;
      const turno = document.getElementById('turno').value;

      if (!nombre || !correo || !carrera || !turno) {
        alert("Por favor, complete todos los campos.");
        return;
      }

      const mensaje = `Inscripción completada:\nNombre: ${nombre}\nCorreo: ${correo}\nCarrera: ${carrera}\nTurno: ${turno}`;
      document.getElementById('resultado').textContent = mensaje;
    });