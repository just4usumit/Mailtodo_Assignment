import Navbar from './Components/Navbar'
import Counter from './Components/Counter'

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container mt-4 text-center">
      <div className="mr-3 d-inline">
      <Counter type="DEL" count="30"  selected={true}/>
      </div>
      <div className="mr-3 d-inline">
      <Counter type="INT" count="310" selected={false}/>
      </div>
      <div className="mr-3 d-inline">
      <Counter type="OOD" count="196"  selected={false}/>
      </div>
      <div className="mr-3 d-inline">
      <Counter type="DEX" count="110"  selected={false}/>
      </div>
      <div className="mr-3 d-inline">
      <Counter type="NFI" count="100"  selected={false}/>
      </div>
      </div>
    </div>
   

  );
}

export default App;
