# <img src="https://github.com/Marlinsk/simple-backend-node/blob/main/.github/key.png" width="56px" height="56px"> Projeto de autenticação de usuário com JWT e refresh token
Back-end de autenticação de usuário feito de uma forma simples, para desenolvimento de conhecimento prático de autenticação com jwt e refresh token.

## Descrição
Este projeto foi desenvolvido para servir como uma mini-referência das tecnologias implementadas ao logo de seu desenvolvimento. Boa parte delas foram implementadas no código de uma forma simples, podendo sofrer melhorias de contribuintes de toda a comunidade.

**Aviso:** Não use 100% da lógica deste projeto para utilizar em aplicações grandes, avalie se a lógica dentro deste projeto se enquadra dentro do que você procura resolver, e busque sempre melhorar e aprimorar tudo dentro do possível, não apenas cópie e cole.

## Configurando o projeto em sua máquina
Comando para clonar o projeto em sua máquina
```
git clone https://github.com/Marlinsk/simple-backend.git
```

Após clonar o projeto crie antes de instalar as dependências da aplicação, crie um arquivo **.env** fora da pasta src e insira as seguintes variáveis.
```
DATABASE_URL="file:./dev.db"
JWT_SECRET="sua chave"
```
**Obs.:** O valor da variável **JWT_SECRET** pode ser qualquer um, podendo ser um hash ou um conjunto de caracteres.

### Instalando as dependências da aplicação
Instalando as dependências com o comando **npm**
```
npm i
```

Instalando as dependências com **yarn**
```
yarn
```
