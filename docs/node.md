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

## npm

1. `npm install --save --global webpack`
2. `npm install --save-dev webpack`
3. `npm install --save-dev webpack-dev-server@2.2.0` // 롤백 또는 구체적인 버전 설치
