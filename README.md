# 100DaysTracker App

## Installation
You need to install [SQLite](https://www.sqlite.org/index.html) for database.
<br>
Then on each `server` and `client` directory:
```bash
yarn install
```

#### Create database:
```bash
cd server/database
node createDatabase
```

#### Start the server (port 5000)
```bash
cd server
yarn start
```

#### Start the client (port 3000)
```bash
cd client
yarn start
```