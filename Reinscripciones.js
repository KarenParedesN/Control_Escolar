 document.getElementById('formulario').addEventListener('submit', function(e) {
      e.preventDefault(); // Evita que la página se recargue

      const nombre = document.getElementById('nombre').value;
      const matricula = document.getElementById('matricula').value;
      const semestre = document.getElementById('semestre').value;

      if (!nombre || !matricula || !semestre) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      // Simulación del proceso de reinscripción
      const mensaje = `Reinscripción completada para: ${nombre}, Matrícula: ${matricula}, Semestre: ${semestre}°`;
      document.getElementById('resultado').textContent = mensaje;

      // Aquí podrías enviar los datos a un servidor si fuera necesario
    });