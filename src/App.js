import Header from './Header'
import './App.scss';
import MainVisual from './MainVisual';
import MainContents from './MainContents';
import Footer from './Footer';

function App() {
  return (
    <div id="mainSec">
      <Header />
      <MainVisual />
      <MainContents />
      <Footer />
    </div>
  );
}

export default App;
