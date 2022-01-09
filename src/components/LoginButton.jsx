import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

export default withRouter(function LoginButton(props) {
  console.log(props);
  function login() {
    setTimeout(() => {
      props.history.push('/')
    }, 1000);
  }
  return <button onClick={login}>로그인 하기</button>
});
// 빈객체가 나온다. 그래서 login.jsx 페이지에 props자체를 넣어주면 된다.
// 하지만 로그인 버튼이 3~4단계 밑에 있으면 계속 props를 내려줘야되기 때문에 react-router-dom에서 해결법을 두가지 제공해준다.
// 1번 해결 : withRouter
// 2번 해결 : Hook


