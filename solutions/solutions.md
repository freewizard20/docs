# Solutions

## 채널/알림

- nodemailer : 서버단에서 smtp 없이 gmail 연동해서 메일 전송 가능. 보낸사람 주소 바꾸려면 smtp 설정 해야할 듯
- postfix : smtp 서버. 그렇게까지 복잡한건 아닌거같아서 메일서버 만들어도 될듯.

## 스토리지

- google drive api : 자체 동기화로 사용 가능할 듯.
- 내장 스토리지 [lowdb](https://github.com/typicode/lowdb/tree/master/examples) >> 브라우저 로컬스토리지/브라우저 db.json 파일에 빠른 저장.

## 서버관리

- pm2
- [node-cron](https://github.com/node-cron/node-cron)

## 서버리스

- serverless : 개발, 테스트, 디플로이 툴. 매우 빠르고 간편. 연동 리소스도 생성 가능.