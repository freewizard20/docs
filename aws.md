# aws

## aws-cli

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
`aws s3 sync . s3://fwcorp --delete`
5. 버킷 생성(한국지역 안됨) \
`aws s3api create-bucket --bucket test-bucket-989282 --region us-east-1`

### S3 정적 웹 호스팅

1. 버킷 생성
2. 퍼블릭 권한 부여
3. 정책
```
{
   "Version":"2012-10-17",
   "Statement":[{
 	"Sid":"PublicReadForGetBucketObjects",
         "Effect":"Allow",
 	  "Principal": "*",
       "Action":["s3:GetObject"],
       "Resource":["arn:aws:s3:::example-bucket/*"
       ]
     }
   ]
 }
 ```
 4. 호스팅 ON
 5. cloudflare 도메인 연결, CNAME에 @, 엔드포인트 이렇게 flattening 연결
 6. SSL/TLS > Edge Certificates > Always Use HTTPS