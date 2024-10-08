- 이전 요구 사항
  - 라우터를 직접 구현해봐요.
    - 라우터를 직접 구현해보며 SPA가 어떻게 구현되는지 이해해요.
    - 라우팅을 구현하기 위해 사용되는 기술들에 대한 이해
      - URL 구조
      - History 객체를 기반으로 어떻게 브라우저에서 상태를 관리하는지
  - Vainilla Scripts로 SPA 라우터를 직접 구현해봐요.
    - 라우터를 직접 사용해보며 DX를 보기 (내가 작성한 라우터를 내가 직접 쓰는데, 쓰기 편한가?)
- [ ] **JSX 지원 및 트랜스파일링**
  - **목표**: JSX 문법을 바닐라 자바스크립트로 변환.
  - **방법**: Babel 설정을 통해 JSX를 `createElement`로 트랜스파일.
  - **추가**: Vite 개발 서버 설정 및 Babel 플러그인 사용.
- [ ] **Virtual DOM 구현**
  - **목표**: JSX 트랜스파일 후 생성된 Virtual DOM을 객체로 표현.
  - **방법**: `createElement` 함수로 태그, 속성, 자식을 객체화하여 Virtual DOM 트리 생성.
- [ ] **렌더링 함수 작성**
  - **목표**: Virtual DOM을 실제 DOM으로 렌더링.
  - **방법**: `render` 함수로 Virtual DOM을 실제 DOM에 삽입.
- [ ] **상태 관리 (`useState`)**
  - **목표**: React의 `useState`처럼 상태 변경 시 컴포넌트를 다시 렌더링.
  - **방법**: 상태 변경 시 `rerender` 호출하여 Virtual DOM을 업데이트.
- [ ] **Virtual DOM 비교 및 업데이트 (diffing)**
  - **목표**: 상태 변경 시 최소한의 DOM 업데이트.
  - **방법**: 이전과 새로운 Virtual DOM을 비교하여 변경된 부분만 실제 DOM에 반영.
