# Live coding project

This project is a monorepo powered Turborepo. which use yarn as packageManager.

---

## setup

`Initial configuration required to run this monorepo`

### Package manager

- yarn

### Node version

- 16.20.0
- You can use n or nvm to easily switch between version

---

## Apps and Packages

- `algo`: a folder that contains some algo test
- `iterative-list`: a react project build with CRA, to test junior/confirmed profile
- `my-feed`: a react project build with CRA, to test confirmed/senior profile
- `kit-ui`: a React component library shared by both `iterative-list` and `my-feed` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

---

## Commands

### Build

To build all project in apps, run the following command at the racine

```
yarn build
```

### Test

This command only launched test in the algo project

```
yarn test
```

# Start web project with watch on kit ui

## Commands

`With the package concurrently we can start all apps with the watch kit-ui in one commands.`
If you want to learn more about this package click in the [link](https://github.com/open-cli-tools/concurrently)

```
yarn start
```
