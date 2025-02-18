
import Login from './components/Login.jsx';
import Navbar from './components/Navbar';
import './App.css'
import Footer from './components/footer.jsx';
const App = () => {
  return (
    <div className="container">
    <Navbar />
    <Login />
    <Footer/>
  </div>

  );
};
export default App;