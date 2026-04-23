# alex50027319.github.io

GitHub Pages 기반 개인 블로그/포트폴리오 사이트입니다.

## 로컬 수정

- `index.html`: 구조/문구
- `style.css`: 디자인
- `script.js`: 포스트 목록 데이터 및 상호작용

## 배포 방법

1. GitHub에서 새 public 저장소 생성:
   - 이름: `alex50027319.github.io`
2. 아래 명령으로 연결 후 푸시:

```powershell
git init
git add .
git commit -m "Initialize GitHub Pages blog"
git branch -M main
git remote add origin https://github.com/alex50027319/alex50027319.github.io.git
git push -u origin main
```

3. 접속:
   - <https://alex50027319.github.io>

## 커스텀 도메인(선택)

- 도메인을 사용할 경우 루트에 `CNAME` 파일을 추가하고 DNS를 연결하세요.
