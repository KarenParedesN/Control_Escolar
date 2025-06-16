document.getElementById('cambioCarreraForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const matricula = document.getElementById('matricula').value;
      const actual = document.getElementById('carreraActual').value;
      const nueva = document.getElementById('nuevaCarrera').value;
      const motivo = document.getElementById('motivo').value;

      if (!nombre || !matricula || !actual || !nueva || !motivo) {
        alert("Por favor, complete todos los campos.");
        return;
      }

      if (actual === nueva) {
        alert("La nueva carrera no puede ser la misma que la actual.");
        return;
      }

      const mensaje = `Solicitud de cambio registrada:\nNombre: ${nombre}\nMatrícula: ${matricula}\nDe: ${actual}\nA: ${nueva}\nMotivo: ${motivo}`;
      document.getElementById('resultado').textContent = mensaje;
    });