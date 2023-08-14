function submitForm(event) {
  event.preventDefault();

  // Obtener los valores de los campos
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;
  const country = document.getElementById('country').value;

  // Validar los campos
  let errorMessage = "";
  if (!name) {
    errorMessage += "Por favor, ingresa tu nombre.\n";
  }

  if (!email) {
    errorMessage += "Por favor, ingresa tu correo electrónico.\n";
  }

  if (!age) {
    errorMessage += "Por favor, ingresa tu edad.\n";
  } else if (age < 18) {
    errorMessage += "Debes ser mayor de 18 años para enviar el formulario.\n";
  }

  if (!country) {
    errorMessage += "Por favor, selecciona tu país.\n";
  }
  

  // Mostrar errores o mensaje de confirmación
  if (errorMessage) {
    alert(errorMessage);
  } else {
    alert("Formulario enviado correctamente.\n\nNombre: " + name + "\nCorreo electrónico: " + email + "\nEdad: " + age + "\nLocalidad: " + country);
  }
}

// Ejemplo de uso
const formElement = document.getElementById('myForm');
formElement.addEventListener('submit', submitForm);
