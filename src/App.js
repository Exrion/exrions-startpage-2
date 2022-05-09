import './App.css';
import Moment from 'react-moment';
import 'moment-timezone';
import background from './data/backgrounds/mountain.jpg';

function App() {
  const curDate = new Date();
  return (
    <div class="font-poppins flex justify-center items-center h-screen bg-no-repeat bg-cover bg-center text-white-500" style={{ backgroundImage: `url(${background})` }}>
      <div class="shadow-xl flex justify-center items-center grid-flow-col h-2/4 w-6/12 p-4">
        {/* Weclome Pane (Left) */}
        <div class="col-span-1 backdrop-blur-3xl bg-gray-600/70 rounded-l-md h-full w-1/3 p-4 flex flex-col">
          <h3 class="text-white-100">
            <Moment format="dddd" locale="sg" tz="Asia/Singapore">
              {curDate}
            </Moment>
          </h3>
          <p class="flex-1">
            <Moment format="Do MMMM YYYY" locale="sg" tz="Asia/Singapore">
              {curDate}
            </Moment>
          </p>
        </div>

        {/* Content (Right) */}
        <div class="col-span-2 rounded-r-md grow bg-gray-600 h-full w-2/3 p-4 flex flex-col">
          <h5>Your favourite sites</h5>
          <p class="flex-1">
            Lorem Ipsum
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;