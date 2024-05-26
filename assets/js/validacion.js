document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;
    let messages = [];

    const nombre = document.getElementById('NombreUsuario').value.trim();
    const apellido = document.getElementById('ApellidoUsuario').value.trim();
    const email = document.getElementById('EmailUsuario').value.trim();
    const password = document.getElementById('ContraseñaUsuario').value;
    const phone = document.getElementById('PhoneUsuario').value.trim();
    const pais = document.getElementById('PaisUsuario').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    const terms = document.getElementById('terms').checked;

    if (nombre === '') {
      isValid = false;
      messages.push('El nombre es requerido.');
    }

    if (apellido === '') {
      isValid = false;
      messages.push('El apellido es requerido.');
    }

    if (!validateEmail(email)) {
      isValid = false;
      messages.push('Ingrese un correo electrónico válido en el formato nombre@ejemplo.com');
    }

    if (password.length < 8) {
      isValid = false;
      messages.push('La contraseña debe tener al menos 8 caracteres.');
    }

    if (!validatePhoneNumber(phone)) {
      isValid = false;
      messages.push('Por favor, ingresa un número de teléfono válido.');
    }

    if (pais === '') {
      isValid = false;
      messages.push('Debe seleccionar un país.');
    }

    if (service === '') {
      isValid = false;
      messages.push('Debe seleccionar un servicio.');
    }

    if (message === '') {
      isValid = false;
      messages.push('El mensaje es requerido.');
    }

    if (!terms) {
      isValid = false;
      messages.push('Debe aceptar los términos y condiciones.');
    }

    if (isValid) {
      form.submit();
    } else {
      alert(messages.join('\n'));
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    return phoneRegex.test(phoneNumber);
  }
});
