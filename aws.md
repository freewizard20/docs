# aws

1. `aws --version`

### aws credentials

1. 사용자 > okjin > .aws > credentials
2. 아래 코드블럭 추가
```
[fw]
aws_access_key_id=sdsdasdasdsdsdsdsd
aws_secret_access_key=asasdsdsdsd
```
3. 사용시 \
`aws s3 ls --profile fw`

### S3 I/O

1. S3에 업로드 \
`aws s3 cp test.txt s3://jikguprice.com/test/txt --profile fw`
2. S3에 다운로드 \
`aws s3 cp s3://jikguprice.com/test/txt test.txt --profile fw`
3. S3 파일 검색 \
`aws s3 ls s3://fwcorp/.git/`
4. 폴더 싱크 \
`aws s3 sync . s3://fwcorp`

