const d = document;

const users = [
    {
        id: 1,
        name: 'Bruno Barreto Guimaraes da Silva',
        email: 'fulano@gmail.com',
        role: 'saboneteiro',
    },
    {
        id: 2,
        name: 'Ciclano',
        email: 'ciclano@gmail.com',
        role: 'sorveteiro',
    }
];

const userNameInput = d.querySelector('#register-name-input');
const userEmailInput = d.querySelector('#register-email-input');
const userRoleInput = d.querySelector('#register-role-input');

// previne que a pagina recarregue com o submit
addEventListener('submit', (e) => { e.preventDefault() });

// adicionar usuario no array
d.querySelector('#user-register')
    .addEventListener('submit', (e) => {

        const name = userNameInput.value;
        const email = userEmailInput.value;
        const role = userRoleInput.value;

        users.push(
            {
                // pega o atributo id do ultimo objeto do array e adiciona 1
                id: users.at(-1).id + 1,
                name,
                email,
                role
            }
        );

        userNameInput.value = '';
        userEmailInput.value = '';
        userRoleInput.value = '';

        renderUserCards();

        console.log(users);
    });

function renderUserCards() {

    let userCardsHTML = ``;

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

};

renderUserCards();