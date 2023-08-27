import Header from './components/header/Header';
import PasswordGenerator from './components/passwordGenerator/PasswordGenerator';
import Directives from './components/directives/Directives'
import Footer from './components/footer/Footer' 

const App = () => {
  return (
    <div>
      <Header/>
      <PasswordGenerator/>
      <Directives/>
      <Footer/>
    </div>
  );
}

export default App;