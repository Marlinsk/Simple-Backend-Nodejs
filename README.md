# <img src="https://github.com/Marlinsk/node-authentication-backend/blob/main/.github/key.png" width="48px" height="48px"> Node Authentication Backend Application
A user authentication backend developed in a straightforward manner to gain practical knowledge of JWT-based authentication.

## Description
This project was developed to serve as a mini-reference for the technologies implemented throughout its development. Many of them were implemented in a simple way in the code and can be improved by contributors from the community.

**Note:** Do not use 100% of the logic from this project for larger applications. Evaluate whether the logic within this project aligns with what you seek to address, and always strive to improve and enhance everything within your reach, rather than simply copying and pasting.

## Setting up the Project on Your Machine
Command to clone the project to your machine.
```
git clone https://github.com/Marlinsk/node-authentication-backend.git
```

After cloning the project, before installing the application's dependencies, create a **.env** file outside the **src folder** and add the **following variables**.
```
DATABASE_URL="file:./dev.db"
JWT_SECRET="your key"
```
**Note:** The value of the **JWT_SECRET** variable can be any, whether it's a hash or a set of characters.

## Installing Application Dependencies
Install the dependencies using the **npm** command.
```
npm i
```

## 🚀 Running the Application
To run the application locally in **dev** mode using the **npm** command, execute the following command.
```
npm run dev
```

> If everything is fine, you will see the following message in the terminal: Server starting 🚀 http://localhost:5500.

## 🚏 Application's HTTP Routes
Description of the functionality of each HTTP route in the backend.

**GET** List: 

List all user accounts.

> / 

**GET** Get by ID:

Retrieve a user from the database using their ID. To make the request, include the user's ID in the URL of the request.

> /:id

**POST** Create User:

Create a user account.

> /

To create a user using Postman or another HTTP request tool, copy the example below and make the request to create the user.

**Example request body:**
```
{
    "name": "Andre Haskell",
    "username": "haskell",
    "email": "andhaskell@gmail.com",
    "password": "095wtjih0-o0r8tg9ubgj"
}
```

**PUT** Edit User:

Edit user account details.

> /:id

To edit a user using Postman or another HTTP request tool, include the ID in the request body along with the modified data.

**Example request body:**
```
{
    "id": "consulte no banco",
    "name": "Andre Haskell",
    "username": "haskell",
    "email": "andhaskell@gmail.com",
    "password": "095wtjih0-o0r8tg9ubgj"
}
```

**DELETE** Delete a User:

Delete a user record from the database. To make the request, include the user's ID in the request URL.

> /:id

**POST** Login:

Perform user login by passing the email and password in the request body.

> /login

**Example request body:**
```
{
    "email": "andhaskell@gmail.com",
    "password": "095wtjih0-o0r8tg9ubgj"
}
```

## 🏦 Accessing the Database Editor
The database can be accessed using any database management tool. Prisma makes the task of accessing the database to modify its data simple. Just type the following **npm** command to access it via the web.
```
npx prisma studio
```
