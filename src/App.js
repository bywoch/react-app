//import logo from './logo.svg';
import './App.css';

/* 정리정돈의 핵심은 서로 연관된 것을 모은다 (그루핑) 그리고 이름 붙이다. */
/* React 에서 사용자 정의 태그를 만들땐 반드시 대문자로 시작한다 */
/* React 에서 사용자 정의라는 태그를 쓰지 않고 "컴퍼넌트"라는 단어를 쓴다 */
/* 각각의 코드가 이름을 가지고 있기에 어떠한 취지의 코드인지도 금방 파악 가능 */
/* 이렇게 컴퍼넌트 기술을 만드는 React 덕분에 여러 태그들을 하나의 독립 된 부품을 만들수 있고 그 부품들을 이용하면 더 적은 복잡도로 소프트웨어를 만들수 있게 된다 동시에 컴퍼넌트를 공유가 가능하다 / 생산성을 획기적을 끌어올린다 */

function Header(props) {
  console.log('props', props, props.title)
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>
  /* 중괄호 사이에 있는 문자는 일반적인 문자열이 아니라 표현식으로 취급 되기 때문에 해석되어 반영이 된다 */
}


function Nav() {
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
      <Article title="Hi" body="Hello, React"></Article>
    </div>
  );
}

export default App;
