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
- `passwd fw`

## 안드 리눅스 anlinux 설치

- termux 설치
- `pkg install wget openssl-tool proot -y && hash -r && wget https://raw.githubusercontent.com/EXALAB/AnLinux-Resources/master/Scripts/Installer/Ubuntu/ubuntu.sh && bash ubuntu.sh`
- `wget https://raw.githubusercontent.com/EXALAB/AnLinux-Resources/master/Scripts/SSH/Apt/ssh-apt.sh && bash ssh-apt.sh`
