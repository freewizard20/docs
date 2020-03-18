# 하는법

## 조립컴 세팅하는법

- 메인보드마다 윈10 부팅디스크 종류가 달라서 다시 인코딩 해야한다.
- ssd는 파워랑 데이터 둘다 연결해야 한다.
- 윈10 라이선스 없어도 일단 잘 돌아가는 듯.

## 배터리 설정 관리

- 환경변수 검색해서 나오는 창의 시각적 효과 전부 끄면 1시간정도 늘어남.
- 배터리 사용량 분석에서 많이 쓰는 것들 백그라운드 실행 삭제.
- 엣지 브라우저가 15 ~ 20%정도 효율이 좋음. 브라우저로 거의 다 하니까 유용할 듯

## 안드로이드 키 설정하는 법

- build > generate signatured bundle/apk > 새 키 생성(할필요 없음)
- `keytool -export -rfc -keystore fwcorp.jks -alias key0 -file upload_certificate.pem`
- keytool 없으면 안드 스튜디오에 있는 jdk에 있으니 환경변수 등록
- 안드 스튜디오 설치하면 자바 있음. zip 파일 생성은
- 플레이스토어에서 java keystore 이용 해서 pepk도구 다운로드
- 같은 디렉토리에 놓고 
- `java -jar pepk.jar --keystore=C:\fwcorp.jks --alias=key0 --output=C:\output.zip --encryptionkey=eb10fe8f7c7c9df715022017b00c6471f8ba8170b13049a11e6c09ffe3056a104a3bbe4ac5a955f4ba4fe93fc8cef27558a3eb9d2a529a2092761fb833b656cd48b9de6a --include-cert`

## marketing

- 직접 그 분야의 인플루언서가 된다
- 인플루언서에게 홍보를 부탁한다(제휴는 비쌀테니 어필 제안으로)
- 해당 분야의 광고를 한다
- 