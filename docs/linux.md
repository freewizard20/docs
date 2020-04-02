# linux

## nvm설치

- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
- 터미널 재시작
- `nvm install node`

## pm2

- `pm2 start server.js update.js`
- `pm2 list`
- `pm2 monit`
- `pm2 logs`
- `pm2 flush` : 로그삭제
- `pm2 restart 0` : 프로세스 0번 재시작
- `pm2 stop all` : 전체 정지
- `pm2 stop 0`
- `pm2 delete all` : 전체 삭제

## 비밀번호 변경

- `su`
- `passwd fw`ls
