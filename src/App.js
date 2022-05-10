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
          <h5 class="text-center">Your favourite sites</h5>
          {/* Tabs and Routes */}
          <div class="w-full h-full flex-1">
            <div class="pb-2">
              <ul class="flex flex-wrap -mb-px text-sm font-normal text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li class="mr-2" role="presentation">
                  <button class="inline-block p-2 rounded-t-lg border-b-2 border-transparent outline-none hover:text-white-800 hover:bg-white-100/10 text-white-400 active:bg-white-100/10" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Profile</button>
                </li>
                <li class="mr-2" role="presentation">
                  <button class="inline-block p-2 rounded-t-lg border-b-2 border-transparent outline-none hover:text-white-800 hover:bg-white-100/10 text-white-400" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
                </li>
                <li class="mr-2" role="presentation">
                  <button class="inline-block p-2 rounded-t-lg border-b-2 border-transparent outline-none hover:text-white-800 hover:bg-white-100/10 text-white-400" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
                </li>
                <li role="presentation">
                  <button class="inline-block p-2 rounded-t-lg border-b-2 border-transparent outline-none hover:text-white-800 hover:bg-white-100/10 text-white-400" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
                </li>
              </ul>
            </div>
            <div id="myTabContent">
              <div class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
              </div>
              <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
              </div>
              <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
              </div>
              <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;