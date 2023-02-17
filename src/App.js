import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        firstName={"Jay"} 
        lastName={"Hudson"} 
        age={24} 
        hairColor={"Burnt Sienna"}
        />
      <PersonCard 
        firstName={"Oliver"} 
        lastName={"Twist"} 
        age={55} 
        hairColor={"Red"}
        />
      <PersonCard 
        firstName={"Prince"} 
        lastName={"Harry"} 
        age={42} 
        hairColor={"Blonde"}
        />
      <PersonCard 
        firstName={"Harry"} 
        lastName={"Potter"} 
        age={37} 
        hairColor={"Black"}
        />
    </div>
  );
}

export default App;
