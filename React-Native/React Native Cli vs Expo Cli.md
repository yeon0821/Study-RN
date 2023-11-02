![post-thumbnail](https://velog.velcdn.com/images/eunnbi/post/9029d4cd-389a-44be-adfb-d66bcf3fdef7/image.png)

> React Native 개발 방법에는 크게 Expo CLI 방식과 React Native CLI 방식이 있다.

# Expo CLI

`Expo`를 사용하면 RN 개발을 쉽게 할 수 있다.

- 기본적 설정이 다 구성되어 있으며, `native` 파일을 숨기고 자동으로 관리를 해준다.
- 애뮬레이터가 따로 필요하지 않고, Anroid 및 iOS 용 `expo` 앱을 다운로드 한 다음 휴대폰에서 프로젝트를 실행하기만 하면 된다.
- 코드를 변경하고 저장하면 다시 빌드가 되어 expo 앱에 바로 변경사항이 반영이 된다.
- react native에서 제공하지 않는 `Component`와 `API`를 제공하고 있고 이를 쉽게 이용할 수 있다.
- 간단하고 편리하지만, `native` 파일에 접근할 수 없어 복잡하고 섬세하게 제어할 수 없다.
- React Native를 처음 시작하는 개발자에게 편리하다.

> 👉 Expo를 사용한 RN 프로젝트 시작하기
>
> 1. `npm install -g expo-cli`
> 2. `expo init <Project name>`
> 3. `expo login`
> 4. `yarn start or npm start or expo start`

# React Native CLI

expo와 같은 툴을 사용하지 않고 React Native만을 이용해서 개발하는 방법이다.

- `native` 파일을 직접 제어할 수 있어 복잡하고 섬세한 기능 개발이 가능하다.
- 하지만 `Expo CLI`와 달리 기본적 설정이 되어 있지 않다.
- `android studio`와 `xcode`를 다 설치하여 빌드해야 한다.
- React Natvie를 많이 사용해본 사람에게 적합하다.

> 👉 React Native CLI를 사용한 RN 프로젝트 시작하기
>
> - `npx react-native init <Project name>`
> - `npx react-native start` => run on all platforms
> - `npx react-native run-android` => run on android
> - `npx react-natove run-ios` => run on ios