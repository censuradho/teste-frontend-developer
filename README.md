# Desafio Técnico - Next + JSON Server

O objetivo é construir um front end em Next JS para consumir uma API já pronta.

## Sumário
- [Sobre o desafio](#sobre-o-desafio)
  - [Funcionamento da API](#funcionamento-da-api)
  - [Funcionalidades do front-end](#funcionalidades-do-front-end)
- [Instalação](#instalacao)
  - [Requisitos](#requisitos)
  - [Preparando o ambiente](#preparando-o-ambiente)
- [Adicionando dados ao servidor](#adicionando-dados-ao-servidor)
  - [products](#products)
  - [locations](#locations)
  - [family](#family)
  - [transactions](#transactions)
 
## Sobre o desafio

### Funcionamento da API:

- Ela contém os endpoints relacionados a produtos;
  - /products
  - /locations 
  - /family
  - /transactions
- Para buscar apenas um registro você deve passar: endpoint?id=;
- Possui autenticação JWT nas rotas acima;
- Para paginar e ordenar, é detalhado no repositório do Json Server: https://github.com/typicode/json-server

### Funcionalidades do front-end:

- Deve ter uma página de login para que o usuário possa entrar;
- Deve apresentar mensagem de erro ao tentar acessar uma rota sem logar;
- Caso o token expire, direcionar para tela de login informando que foi expirado;
- Após logado, deve ser direcionado para a listagem de produtos, que será uma tabela mostrando os produtos cadastrados;
- Você pode adicionar mais produtos alterando o arquivo database.json;
- Para cada produto na listagem deve mostrar: id, nome, preço, quantidade, nome da localidade e nome do tipo (família);
- A listagem deve ser paginada e deve permitir navegar entre as páginas e mostrar o total de itens, por exemplo: 20 produtos encontrados;
- Na listagem o usuário deve ser capaz de ordenar baseado no campo desejado, por exemplo: se clicou na coluna id, irá ordenar pelo id asc, se clicar novamente, ordenar desc. Se clicar no nome, ordenar asc, se clicar novamente, ordenar desc, etc.
- Para um usuário específico à sua escolha (outros usuários não devem acessar), deve permitir acessar uma rota com um relatório exibindo: quantidade, preço total dos produtos e quantidade total. Ao clicar para gerar o relatório, deve exibir em outra guia e em PDF. 


## Instalação

### Requisitos
- [Node.js](https://nodejs.org/en/)

### Preparando o ambiente

O projeto é organizado em 2 partes:

- **web**: aplicação front-end
- **server**: servidor json-server


Primeiro clone ou faça download do projeto
```
git clone o https://github.com/censuradho/teste-frontend-developer.git
```

Depois disso, instale as dependências executando o seguinte comando na raiz do projeto

```
npm install
```

ou

```
yarn
```

#### web

Da pasta web, do projeto 

##### Variáveis de ambiente

crie um arquivo Chamado `.env.local` com o seguinte conteúdo:

```.env
NEXT_PUBLIC_BACKEND_URL=http://localhost:3333
```

##### Rodar o ambiente dev

Rode o seguinte comando

```
npm run dev
```
ou
```
yarn dev
```
#### server

##### Rodar o ambiente dev

Da pasta server, do projeto rode o seguinte comando

```
npm run start-auth
```
ou
```
yarn start-auth
```

## Adicionando dados ao servidor

O arquivo [database.json](https://github.com/censuradho/teste-frontend-developer/blob/main/server/database.json) existe as entidades

### products

```
{
    "id": number,
    "familyId": number,
    "transactionsId": number,
    "locationsId": number,
    "name": string,
    "cost": number,
    "quantity": number
}
```

### locations

```
{
    "id": number,
    "name": string
}
```
### family
```
{
    "id": number,
    "name": string
}
```

### transactions

```
{
    "id": number,
    "cost": number,
    "quantity": number,
    "productsId": number
}
```
