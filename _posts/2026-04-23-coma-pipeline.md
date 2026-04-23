---
title: "COMA 학습 파이프라인 정리"
date: 2026-04-23
categories: ["AI", "강화학습"]
tags: ["COMA", "MARL", "UAV", "Pipeline"]
---

## 핵심 흐름

- `main`에서 설정 로드 후 mission factory 초기화
- episode loop에서 action 선택, transition 저장, critic/actor 업데이트 진행
- 학습 로그는 실험 ID 단위로 분리 저장

## 실무 메모

훈련 실패 케이스(보상 폭주, 탐험 부족)는 설정값과 함께 기록해야 재현/비교가 쉬워집니다.
