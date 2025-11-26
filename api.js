// Buscando a API:

async function chamarApi() {
    
    try {
        const URL = await fetch('https://dummyjson.com/products');
        
        //fetch() → função usada para buscar dados de um servidor/API.
        //'https://dummyjson.com/products' → URL da API.
        //await → espera a resposta chegar(assíncrona).
        //URL → guarda o retorno da API(não é o JSON ainda).
        
        // Mostra o status da API
        console.log(URL);

        // Dentro do IF verifiva se o status for igual a 200 ok (http)

        if (URL.status === 200) {

            // O resltado da API vai converter para um objeto em json
            const obj = await URL.json();

            // Mostra o objeto que esta armazenado em json dentro de obj
            console.log(obj);
        }

    } catch (erro) {
        console.error('Erro:', erro);
    }
}

chamarApi();


