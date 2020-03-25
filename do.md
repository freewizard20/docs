# 하는법

## ip

- 내 ip : keys에서 `npm run ip`

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

## dell mobile connect 다운

- 공홈에서 드라이버 설치
- [여기](https://www.windowslatest.com/2018/01/15/install-dell-mobile-connect-app-windows-10/?linkId=64176106) 다운
- 스토어에서 업데이트 재설치.
- 끝

## xps 최적화

- dell mobile connect
- 공홈 드라이버 설치
- 드라이버 자동 업데이트 프로그램?
- dell power manager
- throttlestop
- opera browser
- 제어판 전원 옵션
- 오른쪽 아래 배터리 누르고 배터리 사용 앱 확인, 백그라운드 종료
- the best way to extend battery life : not using the laptop
- batteries are expendables. exchange battery in 18 months or so. totally affordable if needed.
- power manager : battery extender(brightness 35), quiet fan
- 윈도우 + r > msconfig 필요없는 서비스 사용해제

## throttlestop 사용법

- options에 들어가서, ac / battery / battery-performance / throttle 설정
- 오른쪽의 default profiles ac에 1, battery에 2, low 97 profile 2 설정
- Misc에 battery monitoring, ac-on, start minimize, minimize on close, nvidia gpu
- alarm에 dts 1, profile 4
- 메인화면에서, ac일때 sheed shift 0~32
- battery에서는 speed shift 255, disable turbo
- battery-perf는 ss 0
- throttle ss 64
- fivr 들어가서
- throttle일때 우측하단 turbo ratio limits > 29
- cpu core, cpu cache > unlock adjustable voltage > offset voltage -149.4mV
- ok - save voltages immediately 클릭
- apply - ok
- 자동실행 : 작업 스케쥴러 검색
- 기본 작업 만들기
- 트리거 : 로그온할때
- 동작 : 프로그램 시작
- 조건 : 박스 전부 해제. 잠깐 활성화해서 해제한다음 다시 해제
- 설정에서 요청시 작업이 실행되도록 허용 제외하고 전부 체크해제
- 재시작하고 작동확인.
- 
## medium

- twitter share dm
- delete app

## wsl2

- powershell 관리자
- `Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform`
- 재시작
- 공홈 가서 [다운](https://docs.microsoft.com/ko-kr/windows/wsl/wsl2-kernel)
- `wsl --set-version Ubuntu 2`
- `wsl --set-default-version 2`
- powershell에서 관리
- `wsl --shutdown ubuntu`
- VS code에서 wsl extension 다운로드
- 우분투에서 `code .` 하면 끝. 디폴트 설정되서 다음부터 코드 열때 우분투로 열림.
- 끝.
