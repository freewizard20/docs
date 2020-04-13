# keys

## github
1. `git remote set-url origin https://github.com/fwcorp/tradewise`
2. remote 주소 확인 `git config --get remote.origin.url`
3. pull remote branch
```
git update remote
git branch -r
git checkout -t origin/gh-pages
```
4. .gitignore 특정 파일만 살리고 폴더 제외
```
google/data/*
!google/data/dummy.html
```
5. 머지컨플릭 : 파일 가서 삭제하고 더할꺼 다 한 다음에 add 후에 `git commit` 하면 머지와 커밋이 동시에 일어남. 후에 `git push origin master`

### git 계정변경

1. `git config --global user.name fwcorp`
2. `git config --global user.email gseongkyu79@gmail.com`
3. `ssh-keygen -t rsa -b 4096 -C gseongkyu79@gmail.com`
4. `cat < ~/.ssh/id_rsa.pub`
5. github settings > SSH 설정
6. 사용자 계정 > 자격 증명 관리 > Windows 자격 증명 > github 토큰 삭제
7. 이제 푸쉬하면 계정 변경 팝업 뜸. 끝!

## github linux에서 로그인없이 pull/push 자동화하는법

- `git remote set-url origin git@github.com:fwcorp/keys.git`
- ssh 키를 생성해야 한다. `ssh-keygen -t rsa -C gseongkyu79@gmail.com`
- 비번은 아무거나
- `cat ~/.ssh/id_rsa.pub` 에서 나온 내용을 github settings > security > ssh > 새로운 ssh 키에 입력해 준다.
- `git config --global user.name fwcorp`
- `git config --global user.email gseongkyu79@gmail.com`
- 커맨드라인으로 `git push origin master` 한번 한다음에 호스트 연결 질문시 `yes` 정확히 타이핑
- vs code 에서 푸쉬 되는지 확인. 될꺼임.
- 끝!

- wsl 네임서버 설정이 불가할 시 : `Temporary failure`
- `sudo vim /etc/resolv.conf`
```
nameserver 58.227.193.227
nameserver 221.143.20.131
```

## git 머지컨플릭

- vscode 브랜치쪽에서 아래 + 눌러주면 커밋된다.

## npm

1. `npm install --save --global webpack`
2. `npm install --save-dev webpack`
3. `npm install --save-dev webpack-dev-server@2.2.0` // 롤백 또는 구체적인 버전 설치

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

## linux

1. 버전확인 `lsb_release -a`
