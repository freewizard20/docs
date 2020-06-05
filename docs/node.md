# node

## basic

- local binaries are in `./node_modules/.bin/eslint --init`
- check dependencies `npm info "eslint-config-airbnb" peerDependencies`
- install all dependencies `npx install-peerdeps --dev eslint-config-airbnb`

### upgrade npm modules

```
npm i -g npm-check-updates
ncu -u
npm install
```
