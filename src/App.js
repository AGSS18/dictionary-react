import './App.css';
import './index.css';
import CardLarge from './components/ui/CardLarge';
import CardSmall from './components/ui/CardSmall';
import Search from './components/Search';

function App() {
  return (
    <div className="App container">
      <Search defaultWord="code"/>
      <CardSmall>
        Grammar
      </CardSmall>
      <CardSmall>
        Examples
      </CardSmall>
      <CardLarge>
        Images
      </CardLarge>
      <CardSmall>
        Pronunciation
      </CardSmall>
      <CardSmall>
        Related words
      </CardSmall>
    </div>
  );
}

export default App;
