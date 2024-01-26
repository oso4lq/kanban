//const token = 'asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k';
const API_URL_USER = 'https://wedev-api.sky.pro/api/user';
const API_URL = 'https://wedev-api.sky.pro/api/kanban';

// export async function login({ login, password }) {
//     const response = await fetch(API_URL_USER + '/login', {
//         method: 'POST',
//         body: JSON.stringify({
//             login,
//             password,
//         }),
//     })
//     const data = await response.json();
//     return data;
// }
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

// export async function register({ login, name, password }) {
//     const response = await fetch(API_URL_USER + '/login', {
//         method: 'POST',
//         body: JSON.stringify({
//             login,
//             name,
//             password,
//         })
//     })
//     const data = await response.json();
//     return data;
// }
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

// export async function getTasks({ token }) {
//     const response = await fetch(API_URL, {
//         method: 'GET',
//         headers: {
//             Authorization: `Bearer ${token}`,
//         }
//     });
//     const data = await response.json();
//     return data;
// }
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

export async function addTask({ token }) {
    return fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({
            title: "New task",
            topic: "",
            status: "Без статуса",
            description: "No description",
            date: "2024-01-07T16:26:18.179Z",
        }),
        headers: {
            Authorization: token,
        },
    }).then((response) => {
        if (response.status === 400) {
            alert('Something went wrong')
        } else {
            return response.json()
        }
    })
};