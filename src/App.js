import './App.css';
import Banner from '../src/container/banner/banner';
import SecondPart from '../src/container/secondPart/secondPart';
import ThirdPart from '../src/container/thirdPart/thirdPart';
import FourthPart from '../src/container/fourthPart/fourthPart';
import Footer from '../src/container/footer/footer';

function App() {
  return (
    <div className={'App'}>
      <Banner />
      <SecondPart />
      <ThirdPart />
      <FourthPart />
      <Footer />
    </div>
  );
}

export default App;
