# Node.js and Express

| Folder | What it covers |
|---|---|
| `express-basics` | A minimal Express server with two routes (`/Wikrama` and `/About`) |
| `rest-api-jwt` | REST API with JWT authentication: register, login, and book CRUD with search and sort. The `/book` routes are protected by a JWT middleware. Uses MySQL through `mysql2`. |
| `userinfo-api` | CRUD API for user information on MySQL, with controllers and a shared `ApiResponse` helper |

## Running the examples

Requirements: Node.js and MySQL.

**express-basics**

```bash
cd node-express/express-basics
npm install
node server.js
```

**rest-api-jwt**

```bash
cd node-express/rest-api-jwt
npm install
cp .env.example .env
```

Set `JWT_SECRET` in `.env` to a long random string. The API expects a MySQL database named `db_express`; its schema is not included in this repository. Then start the server:

```bash
npm run dev
```

**userinfo-api**

Create a MySQL database named `js_Userinfo`, import `js_userinfo.sql`, and check the credentials in `config/database.js`.

```bash
cd node-express/userinfo-api
npm install
npm run dev
```

## Notes

- The JWT secret is read from an environment variable. Never hard-code secrets in source code.
- The `/author` routes in these projects are placeholders that only return text.
