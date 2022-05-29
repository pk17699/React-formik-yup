import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import NewTask from './Components/NewTask/newTask';

function App() {
  return (
    <div>
      <Header heading="Task manager"/>
      <NewTask />
      <Footer/>
    </div>
  );
}

export default App;
