# keys

## github
1. `git remote set-url origin https://github.com/fwcorp/tradewise`

### git 계정변경

1. `git config --global user.name fwcorp`
2. `git config --global user.email gseongkyu79@gmail.com`
3. `ssh-keygen -t rsa -b 4096 -C gseongkyu79@gmail.com`
4. `clip < ~/.ssh/id_rsa.pub`
5. github settings > SSH 설정
6. 사용자 계정 > 자격 증명 관리 > Windows 자격 증명 > github 토큰 삭제
7. 이제 푸쉬하면 계정 변경 팝업 뜸. 끝!

## npm

1. `npm install --save --global`

## VS code

1. night owl color theme
2. close all tabs : ctrl + k + w

## Windows

1. 모든 창 최소화/원래대로 Win + D
2. 파일 탐색기 Win + E
3. 창 이동/정리 : Win + 방향키

## gatsby

1. `npm install -g gatsby-cli`
2. `gatsby new blog`
3. `npm install gh-pages --save-dev`
4. gatsby-config.js 에서
```
module.exports = {
  pathPrefix: "/reponame",
}
```
5. deploy.js를 만들어서
```
var fs = require('fs');
fs.writeFile('public/CNAME', "traderfw.com", function(err) {});
```
6. package.json에서
```
{
  "scripts": {
    "deploy": "gatsby build --prefix-paths && node deploy && gh-pages -d public"
  }
}
```
7. 리포 빈거 파서, 이미 git 설정 다 되있는 blog 폴더와 remote만 연결하고 push한다.
8. gh-pages 브랜치를 만든다.
9. `npm run deploy` >> gh-pages 내용이 지워지면서 디플로이 내용이 들어간다.
10. **주의** : gh-pages로 checkout 하지 말것. diff가 너무 심해서 못 돌아오고 에러나서 결국 로컬 싹 지우고 다시 깔아야한다.

## pip

1. `pip install request`