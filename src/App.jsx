import './App.css';
import AudioControls from './components/AudioControls/AudioControls';
import { Flex } from 'antd';

function App() {
  return (
    <div className="App">
      <Flex justify='center' align='center'>
        <AudioControls />
      </Flex>
    </div>
  );
}

export default App;
