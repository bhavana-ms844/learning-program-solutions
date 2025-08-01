# CricketApp

This is a simple React application that demonstrates ES6 features like arrow functions, destructuring, array methods, and conditional rendering through cricket team components.

## Features

- Displays a list of 11 players with names and scores using `map()`.
- Filters players with scores below 70 using ES6 `arrow functions`.
- Uses `destructuring` to split players into Odd and Even teams.
- Merges T20 and Ranji Trophy players using the `spread operator`.
- Conditional rendering using a `flag` variable.

## Project Structure

```
cricketapp/
├── src/
│   ├── components/
│   │   ├── ListofPlayers.js
│   │   └── IndianPlayers.js
│   └── App.js
```

## How to Run

1. Extract the zip file.
2. Open terminal and navigate to the project folder.

```bash
cd cricketapp
npm install
npm start
```

3. The app will run on `http://localhost:3000`.

## Toggle Views

- In `App.js`, change `const flag = true` to `false` to switch between components.

## Prerequisites

- Node.js
- npm
- VS Code (recommended)
