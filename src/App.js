import './App.css';
import Card from './card'
import CardSmall from './cardSmall';

function App() {
  return (
    <div className='AppHeader'>
      <div className='cardBox'>
        <CardSmall/>
        <Card />
      </div>
      <div className='cardBox'>
        <Card />
        <CardSmall/>
      </div>
    </div>
  );
}

export default App;
