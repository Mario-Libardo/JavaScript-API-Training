async function apiUser() {
    try {
        const URL = await fetch(`https://dummyjson.com/users`);
        console.log(URL);
        if (URL.status === 200) {
            const obj = await URL.json();
            console.log(obj);
            const lista = obj.users;

            const container = document.getElementById('usuarios');
            container.innerHTML = '';


            lista.forEach(prod => {
                const card = document.createElement('div');
                card.className = 'card';


                card.innerHTML = `
                    <img src="${prod.image}" alt="${prod.firstName}">
                    <h2>${prod.firstName}</h2>
                    <p><strong>Idade:</strong> ${prod.age}</p>
                    <p><strong>Genero:</strong> ${prod.gender}</p>
                    <p class="Aniversario"><strong>Aniversario: </strong>${prod.birthDate}</p>
                    `;

                container.appendChild(card);

            });

        }
    } catch (erro) {
        console.log(erro);
        console.error("ERRO:");
    }
}

apiUser();
