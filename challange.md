# Challenge

O objetivo é construir um front end em Next JS para consumir uma API já pronta.

- Link para instalar e rodar a API: https://github.com/techiediaries/fake-api-jwt-json-server.
- Você pode escolher qualquer versão do Next JS e usar outras libs que auxiliem no desenvolvimento.
- Pode ser utilizado qualquer lib de CSS para estilização (bootstrap, material ui, tailwind, bulma, etc.).

## Sobre o funcionamento da API:

1.Ela contém os endpoints relacionados a produtos: /products, /locations e /families;
2.Para buscar apenas um registro você deve passar: endpoint?id=;
3.Possui autenticação JWT nas rotas acima;
4.Para paginar e ordenar, é detalhado no repositório do Json Server: https://github.com/typicode/json-server

## Funcionalidades do front end:

1.Deve ter uma página de login para que o usuário possa entrar;
2.Deve apresentar mensagem de erro ao tentar acessar uma rota sem logar;
3.Caso o token expire, direcionar para tela de login informando que foi expirado;
4.Após logado, deve ser direcionado para a listagem de produtos, que será uma tabela mostrando os produtos cadastrados;
6.Você pode adicionar mais produtos alterando o arquivo database.json;
7.Para cada produto na listagem deve mostrar: id, nome, preço, quantidade, nome 8.da localidade e nome do tipo (família);
9.A listagem deve ser paginada e deve permitir navegar entre as páginas e mostrar o total de itens, por exemplo: 20 produtos encontrados;
10.Na listagem o usuário deve ser capaz de ordenar baseado no campo desejado, por exemplo: se clicou na coluna id, irá ordenar pelo id asc, se clicar novamente, ordenar desc. Se clicar no nome, ordenar asc, se clicar novamente, ordenar desc, etc.image.png
11.Para um usuário específico à sua escolha (outros usuários não devem acessar), deve permitir acessar uma rota com um relatório exibindo: quantidade, preço total dos produtos e quantidade total. Ao clicar para gerar o relatório, deve exibir em outra guia e em PDF. 

## Entrega:

- Você pode subir a aplicação em alguma nuvem de sua preferência: Vercel, Heroku, Railway, etc.
- Responder esse e-mail com o código fonte em .zip, junto com as instruções para instalar e rodar.
- O teste não tem um prazo pré-determinado para entrega.

> Quaisquer dúvidas sobre as funcionalidades, pode me chamar no Telegram: @algeujunior.

Obrigado e boa sorte!
