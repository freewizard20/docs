# front-end

## expo

- cli 설치 : `npm install expo-cli --global`
- 로그인 : `expo login`
- 프로젝트 생성
```
expo init myproject
cd myproject
```
- expo hot reload dev env 로딩 : `expo start` 또는 `expo android`
- 같은 wifi에서 앱 실행시 hot reload.
- 안드 avd 있는 상태에서 a 누르면 안드에서 실행, 핫 리로드 가능

### 빌드

- web build
```
npx expo-optimize
expo build:web
```
- test(host) web build in local
`npx serve web-build`

- app build : `expo publish`

### avd

- sdk manager > android 9.0, sdk tools > android sdk command-line tools, android sdk platform tools, google play services
- avd manager > create virtual device with play store