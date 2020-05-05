# server

## ssh
- `ssh-copy-id example_user@203.0.113.23`

## 성능

- 집컴 : 77ms
- 1코어서버 : 153ms
- 핸드폰 : 539ms, 프로세스 종료해도 프로세스 남아있음.
- 재시작시 : 211ms - 성능저하의 원인은? 앱도 그런가? 우분투도 그런가? termux 문제인가?


## 명령어

- top : 성능 모니터링
- ssh 232.12.232.232 -l username -p port : 포트 해당 유저네임으로 연결
- ip주소 : `ip addr`
- sudo apt-get install -y htop : 성능 모니터링(더좋음)
- 프로세스 죽이기 : `kill 333`(프로세스넘버 : htop에서있음)
- iftop : `sudo apt install -y iftop` `sudo iftop`
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
- left and right arrot : move cursor to left/right pane.
- ctrl b 화살표 연속 : 

## vim

- v + 커서로 선택
- y로 복사
- p로 페이스트

## nginix proxy

- 직접 포트 규칙을 설정해도 되지만 플랫폼마다 다르므로.. 최적화 서버는 포트를 여는 방식으로 node server 구동하자.
- sudo apt-get install -y nginix
- cd /etc/nginx/sites-available
- sudo mv default default.bak
- sudo vim default
- 이거 추가
```
server {
  listen 80;
  server_name YOUR_SERVERS_IP_ADDRESS;

  location / {
    proxy_pass "http://127.0.0.1:8080"; <<<<<<<<<<<< 여기 포트로 보내주는거임!! EXPRESS 설정 필요
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_cache_bypass $http_upgrade;
  }
}
```
- sudo service nginx restart

## [artillery](https://artillery.io/docs/cli-reference/)

- `npm install -g artillery`
- `artillery quick --duration 10 --rate 30 -n 20 http://34.73.22.232`
- make json file
```
{
  "config": {
    "target": "http://localhost:3000",
    "phases": [
      {"duration": 60, "arrivalRate": 100}
    ],
    "defaults": {
      "headers": {
        "User-Agent": "Artillery"
      }
    },
    "payload": {
      "path": "./data.csv",
      "fields": ["id", "password"]
    }
  },
  "scenarios": [
    {
      "name": "Joining user",
      "flow": [
        { "get": { "url": "/" } },
        {"post":
          {
            "url": "/users",
            "json": {"id": "{{id}}", "password": "{{password}}" },
            "capture": {"json": "$.id", "as": "username"}
          }
        },
        {"get":
          {
            "url": "/users/{{username}}",
            "match": {"json": "$.id", "value": "{{username}}"}
          }
        }
      ]
    }
  ]
}
```
- `artillery run -o log.json jikguprice.json`
- `artillery report log.json`
