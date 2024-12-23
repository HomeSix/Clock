import Clock from './components/Clock';
import StopWatch from './components/StopWatch';

function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <StopWatch />
      <Clock className='underline'/>
    </div>
  );
}

export default App;