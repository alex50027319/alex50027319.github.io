# alex50027319.github.io

GitHub Pages + Jekyll 기반 개인 블로그/포트폴리오 사이트입니다.

## 주요 메뉴

- `Project`
- `Blog` (카테고리/태그 자동 분류)
- `About Me`
- `기타 정보`

## 블로그 자동 분류 방식

- 포스트는 `_posts/YYYY-MM-DD-title.md` 형식으로 추가합니다.
- Front Matter의 `categories`와 `tags`를 기준으로 `/blog/`, `/tags/` 페이지에 자동 반영됩니다.

```yaml
---
title: "예시 포스트"
date: 2026-04-23
categories: ["AI", "강화학습"]
tags: ["COMA", "MARL", "UAV"]
---
```

## 카테고리 체계

- DevOps
  - cloud, build, cicd, monitoring
- AI
  - 딥러닝, 강화학습, AI agent
- 논문
  - 관련연구, 이론학습, 구현
- 자격증
  - 리눅스, ADP, SQLP, AWS, 네트워크

## 로컬 실행(선택)

Ruby/Jekyll 환경이 있으면 아래로 로컬 실행할 수 있습니다.

```powershell
bundle install
bundle exec jekyll serve
```

브라우저에서 `http://localhost:4000` 접속
