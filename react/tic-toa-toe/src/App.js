import './App.css';
import HistoryPlay from './components/HistoryPlay.component';
import Headers from './components/Header.component';
import Board from './components/Broad.component';

function App() {
  return (
    <div>
      <Headers />
      <div className="content">
        <Board />
        <HistoryPlay />
      </div>
    </div>
  );
}

export default App;
