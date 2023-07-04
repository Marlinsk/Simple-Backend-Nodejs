# <img src="https://github.com/Marlinsk/simple-backend-node/blob/main/.github/key.png" width="48px" height="48px"> Aplicação back-end de autenticação de usuário
Back-end de autenticação de usuário feito de uma forma simples, para desenolvimento de conhecimento prático de autenticação com JWT.

## Descrição
Este projeto foi desenvolvido para servir como uma mini-referência das tecnologias implementadas ao logo de seu desenvolvimento. Boa parte delas foram implementadas no código de uma forma simples, podendo sofrer melhorias de contribuintes de toda a comunidade.

**Aviso:** Não use 100% da lógica deste projeto para utilizar em aplicações grandes, avalie se a lógica dentro deste projeto se enquadra dentro do que você procura resolver, e busque sempre melhorar e aprimorar tudo dentro do possível, não apenas cópie e cole.

## Configurando o projeto em sua máquina
Comando para clonar o projeto em sua máquina.
```
git clone https://github.com/Marlinsk/simple-backend.git
```

Após clonar o projeto crie antes de instalar as dependências da aplicação, crie um arquivo **.env** fora da pasta **src** e insira as seguintes variáveis.
```
DATABASE_URL="file:./dev.db"
JWT_SECRET="sua chave"
```
**Obs.:** O valor da variável **JWT_SECRET** pode ser qualquer um, podendo ser um hash ou um conjunto de caracteres.

## Instalando as dependências da aplicação
Instalando as dependências com o comando **npm.**
```
npm i
```

Instalando as dependências com **yarn.**
```
yarn
```

## 🚀 Pondo a aplicação para rodar
Para executar a aplicação em modo **dev** localmente utilizando o comando **npm** rode o seguinte comando.
```
npm run dev
```
Se quiser rodar utilizando o **yarn.**
```
yarn dev
```
> Se estiver tudo ok aparecerá a seguinte mensagem no terminal: Server starting 🚀 http://localhost:5500.

## 🏦 Acessando o editor do banco de dados
Para acessar o banco de dados pode ser acessado por qualquer gerenciador. O prisma torna a tarefa de acessar o banco de dados para modificar seus dados um coisa simples, basta digitar o seguinte comando do **npm** para poder acessá-lo via web.
```
npx prisma studio
```
Para acessar o prisma studio utilizando o **yarn** basta digitar no terminal.
```
yarn prisma studio
```

 
