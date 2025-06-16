document.getElementById('evaluacionForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const profesor = document.getElementById('nombreProfesor').value;
      const materia = document.getElementById('materia').value;
      const claridad = parseInt(document.getElementById('claridad').value);
      const puntualidad = parseInt(document.getElementById('puntualidad').value);
      const trato = parseInt(document.getElementById('trato').value);
      const comentarios = document.getElementById('comentarios').value;

      if (!profesor || !materia || isNaN(claridad) || isNaN(puntualidad) || isNaN(trato)) {
        alert("Por favor completa todos los campos obligatorios.");
        return;
      }

      const promedio = ((claridad + puntualidad + trato) / 3).toFixed(2);

      const mensaje = `Evaluación de: ${profesor}\nMateria: ${materia}\nPromedio de calificación: ${promedio}\nComentarios: ${comentarios || "Ninguno"}`;
      document.getElementById('resultado').textContent = mensaje;
    });