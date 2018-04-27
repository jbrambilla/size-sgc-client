const api = "http://localhost:60528/api"

let token = localStorage.getItem('token')

const headers = {
  'Accept': 'application/json',
  'Authorization': `Bearer ${token}`
}

export const getAllCategories = () =>
  fetch(`${api}/category`, { headers })
    .then(res => res.json())

export const getAllDemands = () =>
  fetch(`${api}/demand/all`, { headers })
    .then(res => res.json())

export const getDemandById = (demandId) =>
  fetch(`${api}/demand/${demandId}`, { headers })
    .then(res => res.json())

export const createDemand = (demand) =>{
  return fetch(`${api}/demand`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(demand)
  }).then(res => res.json())
}

export const updateDemand = (demandId, demand) =>
  fetch(`${api}/demand/${demandId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(demand)
  }).then(res => res.json())

export const removeDemand = (demandId) =>
  fetch(`${api}/demand/${demandId}`, {
    method: 'DELETE',
    headers: {
      ...headers
    }
}).then(res => res.json())

export const registerUser = (user) =>{
  return fetch(`${api}/users`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json())
}

export const login = (credentials) =>{
  return fetch(`${api}/users/login`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(res => res.json())
}
