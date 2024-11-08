const email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
const username = /[\w\W]{3,}/;

const validation_login_username = {
  username: `required|string|regex:${username}`,
}
const validation_login_email = {
  email: [`required`, `regex:${email}`]
}

export {validation_login_email, validation_login_username}
