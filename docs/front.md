# front-end

## expo

- cli 설치 : `npm install expo-cli --global`
- 로그인 : `expo login`
- 프로젝트 생성
```
expo init myproject
cd myproject
```
- expo hot reload dev env 로딩 : `expo start`
- 같은 wifi에서 앱 실행시 hot reload.

### 빌드

- web build
```
npx expo-optimize
expo build:web
```
- test(host) web build in local
`npx serve web-build`

- app build : `expo publish`