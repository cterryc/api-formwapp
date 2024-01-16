const emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/
const nameRegex = /^[A-Za-z0-9 ]+$/
const correoTemporalRegex = /@(mailinator\.com|example\.com|temp-mail\.org|glalen\.com|myinfoinc\.com|gufum\.com)/i

export const verifyRegister = (body) => {
  if (body.name === undefined && body.email === undefined && body.password === undefined) {
    return "'Completar!', 'Nombre, Correo Electronico y Contraseña.'"
  } else if (body.name === undefined && body.email === undefined) {
    return "'Completar!', 'Nombre y Correo Electronico'"
  } else if (body.email === undefined && body.password === undefined) {
    return "'Completar!', 'Email y Correo Electronico.'"
  } else if (body.name === undefined && body.password === undefined) {
    return "'Completar!', 'Nombre y Contraseña.'"
  } else if (body.name === undefined) {
    return "'Completar!', 'Nombre.'"
  } else if (body.email === undefined) {
    return "'Completar!', 'Correo.'"
  } else if (body.password === undefined) {
    return "'Completar!', 'Contraseña.'"
  } else if (body.name === '' && body.email === '' && body.password === '') {
    return "'Completar!', 'Nombre, Correo Electronico y Contraseña.'"
  } else if (body.name === '' && body.email === '') {
    return "'Completar!', 'Nombre y Correo Electronico'"
  } else if (body.email === '' && body.password === '') {
    return "'Completar!', 'Email y Correo Electronico.'"
  } else if (body.name === '' && body.password === '') {
    return "'Completar!', 'Nombre y Contraseña.'"
  } else if (body.name === '') {
    return "'Completar!', 'Nombre.'"
  } else if (body.email === '') {
    return "'Completar!', 'Correo.'"
  } else if (body.password === '') {
    return "'Completar!', 'Contraseña.'"
  } else if (body.name.length > 50) {
    return "'Nombre Invalido!', 'No sobrepasar los 50 caracteres.'"
  } else if (body.email.length > 50) {
    return "'Correo Invalido!', 'No sobrepasar los 50 caracteres.'"
  } else if (body.password.length > 50) {
    return "'Password Invalido!', 'No sobrepasar los 50 caracteres.'"
  } else if (!nameRegex.test(body.name)) {
    return "'Nombre Invalido!', 'Recuerda usar solo letras y espacios.'"
  } else if (!emailRegex.test(body.email)) {
    return "'Correo Invalido!', 'Recuerda que el correo solo puede tener: mayúsculas, minúsculas, números, puntos, guiones bajos (_) y guiones medios (-)'"
  } else if (!passwordRegex.test(body.password)) {
    return "'Contraseña Invalida!', 'Recuerda incluir: numeros, letras y almenos un caracter especial.'"
  } else if (correoTemporalRegex.test(body.email)) {
    return "'Correo temporal Invalido!', 'Usar Gmail, Outlook, Hotmail, Yahoo, etc.!"
  }

  return ''
}

export const verifyLogin = (body) => {
  if (body.email === undefined && body.password === undefined) {
    return "'Completar!', 'Email y Correo Electronico.'"
  } else if (body.email === undefined) {
    return "'Completar!', 'Correo.'"
  } else if (body.password === undefined) {
    return "'Completar!', 'Contraseña.'"
  } else if (body.email === '' && body.password === '') {
    return "'Completar!', 'Correo Electronico y Contraseña.'"
  } else if (body.email === '') {
    return "'Completar!', 'Electronico.'"
  } else if (body.password === '') {
    return "'Completar!', 'Contraseña.'"
  } else if (body.email.length > 50) {
    return "'Correo Invalido!', 'No sobrepasar los 50 caracteres.'"
  } else if (body.password.length > 50) {
    return "'Password Invalido!', 'No sobrepasar los 50 caracteres.'"
  } else if (!emailRegex.test(body.email)) {
    return "'Correo Invalido!', 'Recuerda que el correo solo puede tener: mayúsculas, minúsculas, números, puntos, guiones bajos (_) y guiones medios (-)'"
  } else if (!passwordRegex.test(body.password)) {
    return "'Contraseña Invalida!', 'Recuerda incluir: numeros, letras y almenos un caracter especial.'"
  } else {
    return ''
  }
}
