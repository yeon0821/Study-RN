# Moment

---

## 💡Moment.js란?

Moment.js는 JavaScript에서 가장 많이 사용되어 온 날짜 라이브러리입니다.

개발할 때 현재 날짜를 가져오거나, 특정 날짜의 년/월/일만을 가져오거나, 내가 원하는 날짜 포맷으로 형식을 변경해 주거나, 특정 날짜와 비교해 주는 등 날짜 관련해서 다양한 처리가 필요할 때 사용합니다.

### 🖥️ Moment.js 설치 & 사용 준비

터미널에 아래 npm/yarn 중 하나의 명령어를 입력해서 설치해줍니다.

```bash
npm install moment --save   # npm
yarn add moment             # Yarn
```

그리고 날짜 처리가 필요한 곳에서 import 또는 require 해서 라이브러리를 가져와서 사용할 수 있도록 해줍니다.

```jsx
import moment from "moment";
// or
const moment = require("moment");
```

## ⏰ Moment.js 사용 방법

Moment.js로 자주 사용하는 메서드는 다음과 같습니다.

1. **moment()** : 현재 날짜와 시간

```jsx
const today = moment();
```

2. **moment(지정 날짜)** : 지정 날짜와 시간

```jsx
const date = moment("2023-06-23");
```

3. **format()** : 날짜 형식 지정

```jsx
const date = moment("2023-06-23");

date.format("YYYY/MM/DD"); // 포맷의 형식은 더 다양함
```

4. **add()** : 날짜나 시간 더하기

```jsx
const date = moment("2023-06-23");

date.add(1, "years"); // 그 외 months, weeks, days, hours, minutes, seconds, milliseconds 가능
```

5. **subtract()** : 날짜나 시간 빼기

```jsx
const date = moment("2023-06-23");

date.subtract(1, "years"); // 그 외 months, weeks, days, hours, minutes, seconds, milliseconds 가능
```

6. **diff()** : 날짜나 시간 차이

```jsx
const today = moment().format();
const date = moment("2023-06-22").format();

today.diff(date);
today.diff(date, "years"); // 그 외 months, weeks, days, hours, minutes, seconds, milliseconds 가능
```

7. **fromNow()** : 현재 날짜와의 차이

```jsx
moment().fromNow();
moment("2023-06-22").fromNow();
```

8. **from()** : 지정 날짜와의 차이

```jsx
moment().from(moment());
moment("2023-06-22").from("2023-06-20");
```

9. **isSame()** : 날짜가 같은지 여부

```jsx
const date = moment("2023-06-22");

date.isSame("2023-06-20");
date.isSame("2023-06-22", "year"); // 그 외 month, day 가능
```

10. **isBefore(), isSameOrBefore()** : 날짜가 같거나 이전인지 여부

```jsx
const date = moment("2023-06-22");

date.isBefore("2023-06-23");
date.isSameOrBefore("2023-06-22", "year"); // 그 외 month, day 가능
```

11. **isAfter(), isSameOrAfter()** : 날짜가 같거나 이전인지 여부

```jsx
const date = moment("2023-06-22");

date.isAfter("2023-06-20");
date.isAfterOrBefore("2023-06-02", "year"); // 그 외 month, day 가능
```

12. **isBetween()** : 특정 기간 사이에 있는지 여부

```jsx
const date = moment("2023-06-22");

date.isBetween("2023-06-20", "2023-06-23");
```

### 📎 참고링크

Moment.js deprecated 관련 링크: [https://momentjs.com/docs/#/-project-status/](https://momentjs.com/docs/#/-project-status/)