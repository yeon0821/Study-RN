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

## 1. Expo로 개발한 앱들

![img](https://velog.velcdn.com/images%2Feassy%2Fpost%2Fc7bdd9e6-0ea4-4a40-adb9-c1537f4dba3b%2F1_3o8TOSojT64ChGpjop0USA.png)

→ 먼저 작은 규모의 앱에 적합하다는 것에서, 그 규모가 어느정도 인지 확인해보기 위해 실제 Expo CLI로 구축되어 출시된 앱들을 찾아보았다.

> 1. [Discord](https://apps.apple.com/us/app/discord-chat-talk-hangout/id985746746) - 게이머 및 커뮤니티를 위한 채팅 및 음성 앱
> 2. [Skyscanner](https://apps.apple.com/us/app/skyscanner-travel-deals/id415458524) - 사용자가 항공편, 호텔 및 렌터카를 찾을 수 있도록 도와주는 여행 앱
> 3. [Chowbus](https://apps.apple.com/us/app/chowbus-asian-food-delivery/id1053160529) - 아시아 요리 전문 식품 배달 앱.
> 4. [Coinbase](https://apps.apple.com/us/app/coinbase-buy-bitcoin-ether/id886427730)-암호화 환전 및 지갑.
> 5. [Swish](https://apps.apple.com/us/app/swish-payments/id563204724) -스웨덴 사용자를위한 모바일 결제 앱.

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