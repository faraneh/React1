import './App.css';
import Banner from '../src/container/banner/banner';
import SecondPart from '../src/container/secondPart/secondPart';
import ThirdPart from '../src/container/thirdPart/thirdPart';

function App() {
  return (
    <div className={'App'}>
      <Banner />
      <SecondPart />
      <ThirdPart />
      <p>Contact us</p>
      <p>footer</p>
    </div>
  );
}

export default App;
