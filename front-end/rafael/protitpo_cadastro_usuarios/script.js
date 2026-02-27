const d = document;

const API_URL = 'https://69a0dc432e82ee536f9fb4e1.mockapi.io/users';

const userNameInput = d.querySelector('#register-name-input');
const userEmailInput = d.querySelector('#register-email-input');
const userRoleInput = d.querySelector('#register-role-input');

let users = getUsers();

// previne que a pagina recarregue com o submit
addEventListener('submit', (e) => { e.preventDefault() });

// adicionar usuario no array
d.querySelector('#user-register')
    .addEventListener('submit', (e) => {
        submitUser();
        renderUserCards();
    });

async function renderUserCards() {

    let userCardsHTML = ``;

    //checa se o indice 0 existe
    if (users[0]) {
        users.forEach((user) => {
            const cardHTML = `
                <div class="user-card" id="user-card-${user.id}">
                    <span class="bold">Nome:</span> <span> ${user.name} </span>
                    <span class="bold">E-mail:</span> <span> ${user.email} </span>
                    <span class="bold">Função:</span> <span> ${user.role} </span>
                    <span class="bold">ID:</span> <span> ${user.id} </span>
                </div>
            `;
            userCardsHTML += cardHTML;
        });
        d.querySelector('.user-cards').innerHTML = userCardsHTML;
    } else {
        users = await getUsers();
        renderUserCards();
    };

};

function submitUser() {
    const name = userNameInput.value;
    const email = userEmailInput.value;
    const role = userRoleInput.value;

    saveUser({
        name,
        email,
        role
    });

    userNameInput.value = '';
    userEmailInput.value = '';
    userRoleInput.value = '';
};

async function getUsers() {
    const response = await fetch(API_URL);
    return response.json();
}

async function saveUser(user) {
    await fetch(API_URL, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    });
};

renderUserCards();