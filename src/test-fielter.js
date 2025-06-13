import { Search, Filter } from 'lucide-react';
import InProgress from './inprogress-test';
import AllTestManager from './dashboard';
import 'flowbite'; 
import TodayProgress from './today-progress';
import TestList from './tesk-list';

const TestFielter = () => {
  return(
    <>
          <div className="bg-slate-50 px-5 py-4 rounded-t-xl">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <h3 className="font-semibold text-slate-700 flex items-center gap-2">
                  <Filter size={16} />
                  Filter Tasks
                </h3>
                

<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
      <li class="me-2" role="presentation">
  <button
    class="inline-block p-4 border-b-2 rounded-t-lg"
    id="profile-styled-tab"
    data-tabs-target="#styled-profile"
    type="button"
    role="tab"
    aria-controls="styled-profile"
    aria-selected="false"
  >
    Profile
  </button>
</li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-styled-tab" data-tabs-target="#styled-contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
        </li>
    </ul>
</div>


                {/* <div className="flex gap-2">
                  <ul id="default-styled-tab" className='flex'>
<li role="presentation" className='me-2'>
               
                  <button id="all-tab" data-tabs-target="#all" className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                    All
                  </button>
                  </li>
<li role="presentation" className='me-2'>

                  <button className="bg-slate-200 text-slate-600 hover:bg-slate-300 px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
                    Pending
                  </button>
                  </li>
<li role="presentation" className='me-2'>

                  <button id="inprogress-tab" data-tabs-target="#inprogress" className="bg-slate-200 text-slate-600 hover:bg-slate-300 px-5 py-1.5 rounded-full text-sm font-medium transition-colors">
                    In Progress
                  </button>
                  </li>
<li role="presentation" className='me-2'>

                  <button className="bg-slate-200 text-slate-600 hover:bg-slate-300 px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
                    Completed
                  </button>
                  </li>
                     </ul>
                </div> */}
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="text"
                  placeholder="🔍 Search tasks..."
                  className="pl-10 pr-4 py-2 border border-slate-300 rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-56"
                />
              </div>
            </div>
          </div>
<div id="default-styled-tab-content">
<div
  className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
  id="styled-profile"
  role="tabpanel"
  aria-labelledby="profile-styled-tab" // ✅ Must match tab button ID
>
  <TestList />
  <TodayProgress />

</div>
    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">
        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-contacts" role="tabpanel" aria-labelledby="contacts-tab">
        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
</div>
</>
  )
}


export default  TestFielter