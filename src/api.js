//const token = 'asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k';
const API_URL_USER = 'https://wedev-api.sky.pro/api/user';
const API_URL = 'https://wedev-api.sky.pro/api/kanban';

export async function login({ login, password }) {
    return fetch(API_URL_USER + '/login', {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            alert("Incorrect login or password");
            throw new Error("Incorrect login or password");
        }
        return response.json();
    });
}

export async function register({ login, name, password }) {
    return fetch(API_URL_USER + '/login', {
        method: "POST",
        body: JSON.stringify({
            login,
            name,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            alert("This username is already taken");
            throw new Error("This username is already taken");
        }
        return response.json();
    });
}

export async function getTasks({ token }) {
    return fetch(API_URL, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            if (response.status === 401) {
                alert("No authorisation");
                throw new Error("No authorisation");
            }
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            alert('No internet connection. Try again later.')
            console.warn(error)
        });
}

export async function addTask({ token, title, topic, status, description, date }) {
    return fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({
            title,
            topic,
            status,
            description,
            date,
        }),
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        if (response.status === 400) {
            alert('Something went wrong');
            throw new Error("Something went wrong");
        } else {
            return response.json()
        }
    })
}

export async function deleteTask({ id, token }) {

    console.log('deleteTask id: ' + id);
    console.log('deleteTask token: ' + token);

    return fetch(API_URL + `/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        if (response.status !== 201) {
            alert('Something went wrong');
            throw new Error("Something went wrong");
        } else {
            return response.json()
        }
    })
}

export async function editTask({ id, token, title, topic, status, description, date }) {

    console.log('editTask id: ' + id);
    console.log('editTask token: ' + token);

    return fetch(API_URL + `/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            topic,
            status,
            description,
            date,
        }),
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        if (response.status !== 201) {
            alert('Something went wrong');
            throw new Error("Something went wrong");
        } else {
            return response.json()
        }
    })
}