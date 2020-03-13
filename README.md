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

1. `npm install`

## VS code

1. night owl color theme