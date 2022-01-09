import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Links from './components/Links';
import NavLinks from './components/NavLinks';
import Login from './pages/Login';
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';


const isLogin = false;

function App() {
  return (
    <BrowserRouter>
      Links
      <Links />
      NavLink
      <NavLinks />
      <Switch>
        <Route path="/login" render={() => isLogin? <Redirect to='/' /> : <Login /> } />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} /> 
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
} 
// exact를 쓰면 각 페이지에 홈페이지라는 글씨가 안나온다.

// Switch 컴포넌트 (배치 순서가 중요)
// 여러 Route중 순서대로 먼저 맞는 하나만 보여준다.
// exact를 뺄수있는 로직을 만들수 있다.
// 가장 마지막에 어디 path에도 맞지 않으면 Not Found페이지를 만들 수 있다.

// NavLink 컴포넌트
// activeClassName, activeStyle 처럼 active 상태에 대한 스타일 지정이 가능합니다.
// Route 의 path 처럼 동작하기 때문에 exact 가 있습니다.

export default App;


