const token = 'asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k';
const API_URL_USER = 'https://wedev-api.sky.pro/api/user';
const API_URL = 'https://wedev-api.sky.pro/api/kanban';

export async function login({ login, password }) {
    const response = await fetch(API_URL_USER + '/login', {
        method: 'POST',
        body: JSON.stringify({
            login,
            password,
        })
    })
    const data = await response.json();
    return data;
}

export async function register({ login, name, password }) {
    const response = await fetch(API_URL_USER + '/login', {
        method: 'POST',
        body: JSON.stringify({
            login,
            name,
            password,
        })
    })
    const data = await response.json();
    return data;
}

export async function getTasks({ token }) {
    const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    const data = await response.json();
    return data;
}