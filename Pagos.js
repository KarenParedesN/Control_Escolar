 document.getElementById('pagoForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const monto = document.getElementById('monto').value;
      const metodo = document.getElementById('metodo').value;
      const referencia = document.getElementById('referencia').value;

      if (!nombre || !monto || !metodo || !referencia) {
        alert("Todos los campos son obligatorios.");
        return;
      }

      const mensaje = `Pago registrado correctamente:\nNombre: ${nombre}\nMonto: $${monto}\nMétodo: ${metodo}\nReferencia: ${referencia}`;
      document.getElementById('resultado').textContent = mensaje;
    });