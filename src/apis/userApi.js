const info = async () => {
  return await fetch('/api/profile').then((r) => r.json());
};

export const login = async (loginInfo) => {
  return await fetch('http://127.0.0.1:7000/api/v0/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginInfo),
  }).then((r) => r.json());
};

export const registerCustomer = async (signUp) => {
  return await fetch('http://127.0.0.1:7000/api/v0/auth/sign-up-customer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signUp),
  }).then((r) => r.json());
};

export const registerUser = async (signUp) => {
  return await fetch('http://127.0.0.1:7000/api/v0/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signUp),
  }).then((r) => r.json());
};

export const allUsers = async (signUp) => {
  return await fetch('http://127.0.0.1:7000/api/v0/auth/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json());
};

export default { info, login };
