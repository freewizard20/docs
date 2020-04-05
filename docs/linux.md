# linux

# 명령어

- top : 성능 모니터링
- ssh 232.12.232.232 -l username -p port : 포트 해당 유저네임으로 연결

## nvm설치

- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
- 터미널 재시작
- `nvm install node`

## pm2

- `pm2 start server.js update.js`
- `pm2 start server.js --name server0`
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
- termux에서 pkg install git nodejs 로 퍼페티어 제외한 모듈로 api콜 가능함. 그 이상은 실험해 보거나, anlinux 써야 할듯. anlinux는 가능한가? arm64 호환성을 알아봐야겠다.

## termux ssh

- 8022 포트임
- `pkg install -y openssh`
- `sshd`

## termux multi screen

- `vim ~/.termux/termux.properties`
- add
```
shortcut.create-session = ctrl + t
shortcut.next-session = ctrl + 1
shortcut.previous-session = ctrl + 2
```
- `termux-reload-settings`

## tmux

- 진입 : `tmux`
- `ctrl+b %` : 화면 좌우로 두개
- " : 화면 위아래로 두개
- c : 새 창
- n : 다음창
- p : 이전창
- exit : 해당창 종료
