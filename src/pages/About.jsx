import queryString from 'query-string';

export default function About(props) {
  console.log(props)
  const searchParams = props.location.search;
  console.log(searchParams);
  // const obj = new URLSearchParams(searchParams);
  // console.log(obj.get('name'));
  const query = queryString.parse(searchParams);
  console.log(query)
  return (
    <div>
      <h2>About 페이지 입니다.</h2>
      {query.name && <p>name은 {query.name} 입니다.</p>}
    </div>
  );
}


// URLSearchParams의 단점
// 1. URLSearchParams의 메서드를 다 기억하고 사용해야된다.
// 2. URLSearchParams가 브라우저의 내장객체이기 때문에 브라우저에 따라 지원하지 않는 경우도 있다.
// 이 단점을 보완하는 것이 npm i query-string


