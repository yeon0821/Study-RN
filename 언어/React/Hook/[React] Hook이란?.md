# [React] Hook

---

## 💿 등장배경

### 1) Class 컴포넌트 vs Function 컴포넌트

리액트의 컴포넌트는 클래스형과 함수형으로 나눠진다. hook이 나오기 전 까지는 상태값(state)에 접근, 생명주기 기능(lifecycle features)을 사용하기 위해 class형 컴포넌트 선언을 해줘야 했다. 함수형 컴포넌트는 한번 호출되고 메모리상에서 사라져 상태값 접근과 라이프사이클 구현이 불가능했다. 그러나 class형 컴포넌트를 사용하다보니 아래와 같은 문제점들이 발생했다

### 2) Class형 컴포넌트의 문제점

- 컴포넌트간에 로직의 재사용이 불가능하다
    - render props나 HOC(High order component, 고차 컴포넌트)와 같은 패턴을 통해 문제를 해결할 수 있지만 이러한 패턴은 코드의 추적을 어렵게 만든다
    - 계속해서 이런 코드를 사용하게 되다보면 많은 레이어들로 둘러쌓인 wrpper hell을 겪게 된다
- 코드가 복잡해진다

이러하듯 class컴포넌트가 지닌 단점에도 불구하고 상태값 접근과 생명주기 관리 때문에 class형 컴포넌트를 사용해야됐다

### 💿 Hook의 등장!

- 리액트 hook은 React 16.8버전에 새로 추가된 기능으로, 함수형 컴포넌트에서 react state와 생명주기 기능(lifecycle features)을 "연동(hook into)할 수 있게 해준다. useState를 예시로 들면 class를 사용하지 않고도 상태를 가질 수 있게 된 것이다.
    - Hook은 Class 안에서는 동작하지 않는다.
- 이전에 리액트가 겪던 문제들을 해결해주며 클래스형 컴포넌트를 사용하지 않고도 함수형 컴포넌트에서 상태값 접근과 자식 요소에 접근이 가능해졌다
- 리액트는 useState, useEffect 같은 내장 Hook을 몇 가지 제공한다
- 또한 props, state, context, refs 그리고 lifecycle과 같은 리액트 개념에 좀 더 직관적인 API를 제공한다. 또한 이 개념들을 엮기 위해 새로운 방법을 제공한다
    - 컴포넌트 간에 상태 관련 로직을 재사용하기 위해 hook을 직접 만드는 것도 가능하다
    
    ### 💿 Class / Function 코드비교
    
    ### 클래스형
    
    ```jsx
    import React, { Component } from 'react';
    
    class Example extends Component {
      state = {
        count: 0,
      };
    
    setCount(num) {
      this.setState({
        count: num,
      });
    }
    render() {
      const { count } = this.state;
      return (
        <div>
         <div>
          <p>You clicked {count} times</p>
          <button
           onClick={() => {
            this.setCount(count + 1);
         }}
        >
           Click Me!
         </button>
        </div>
       </div>
      );
     )
    }
    
    export default Example;
    ```
    
    ### 함수형
    
    ```jsx
    import React, { useState } from 'react';
    
    function Example() {
      const [count, setCount] = useState(0);
    
      return (
        <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
           Click Me!
           </button>
          </div>
      );
    }
    
    export default Example;
    ```
    
    - this와 render없이도 상태값 접근이 가능해졌다!
    
    ### 여러 state 변수 사용하기
    
    - 하나의 컴포넌트 내에서 state hook을 여러 개 사용할 수도 있다
    
    ```jsx
    import React, { useState } from 'react';
    
    funtion App() {
      const [name, setName] = ('');
      const [age, setAge] = (35);
      const [coffee, setCoffee] = ('Latte');
    }
    
    export default App;
    ```
    
    구조분해할당 포스팅 보러가기 => [구조분해 할당](https://velog.io/@niboo/React-%EA%B5%AC%EC%A1%B0-%EB%B6%84%ED%95%B4-%ED%95%A0%EB%8B%B9feat.-useState)
    
    ## Hook의 장점
    
    - 컴포넌트로부터 상태 관련 로직을 추상화할 수 있다
        - 이를 이용해 독립적인 재사용이 가능하다
        - 코드의 재사용은 가독성을 높이고 유지보수를 용이하게 한다
    - 훅은 계층의 변화 없이 상태 관련 로직을 재사용할 수 있다
    - 생명주기 메서드를 기반으로 쪼개는 것 보다는 훅을 통해 작은 함수의 묶음으로 컴포넌트를 나누는 방법을 사용할 수 있다
    
    ## Hook의 규칙
    
    ### 1) 최상위 에서만 훅을 호출해야 한다. 훅을 호출하는 순서는 항상 같아야 한다
    
    - 반복문, 조건문, 중첩된 함수 내에서 Hook을 사용하면 안된다.
    - 왜 훅의 호출 순서가 같아야 하는 걸까?
        - 리액트가 상태값을 구분할 수 있는 유일한 정보는 훅이 사용된 순서이기 때문이다. 리액트가 훅이 호출된 순서에 의존한다는 것이다.
        - 예시로 반복문 안에서 훅을 호출했을 때 반복문이 true라면 괜찮겠지만 값이 false라면 건너뛰게 된다. 이렇게 하면 실행순서가 바뀔 수 있어 오류를 일으킨다
        - 조건문 혹은 반복문을 사용하고 싶을때는 useEffect안에 넣어 사용하면 된다.
    
    ### 2) React 함수 컴포넌트 내에서만 Hook을 호출해야 한다
    
    - 일반 JS함수에서는 훅을 호출하면 안된다
    - 직접 작성한 custom hook에서는 사용이 가능하다
    
    *참고문서 및 출처:*
    
    [React 공식문서](https://ko.reactjs.org/docs/hooks-intro.html)