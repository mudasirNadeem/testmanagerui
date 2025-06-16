import 'flowbite'; // ✅ this is required for tabs to work
import { Search, Filter } from "lucide-react";
import TodayProgress from "./today-progress";
import TestHeader from "./test-header";
import TestList from "./tesk-list";
import InProgress from './inprogress-test';
const TaskManagerAll = () => {
        const userId = localStorage.getItem("userId");
  if (!userId) {
   window.location.href = '/';
  }

  return (
    <div className="">
      <TestHeader />
      {/* Main Container */}
      <div className="max-w-7xl mx-auto p-10">
        <div className="bg-slate-50 px-5 py-4 rounded-t-xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h3 className="font-semibold text-slate-700 flex items-center gap-2">
                <Filter size={16} />
                Filter Tasks
              </h3>

              <div className="">
                <ul
                  className="flex flex-wrap -mb-px text-sm font-medium items-center text-center"
                  id="default-styled-tab"
                  data-tabs-toggle="#default-styled-tab-content"
                  data-tabs-active-classes="!bg-blue-500 text-white"
                  role="tablist"
                >
                  <li className="me-2" role="presentation">
                    <button
                     className="bg-slate-200  px-4 py-1.5 rounded-full text-sm font-medium"
                      id="profile-styled-tab"
                      data-tabs-target="#styled-profile"
                      type="button"
                      role="tab"
                      aria-controls="styled-profile"
                      aria-selected="false"
                    >
                      All
                    </button>
                  </li>
                  <li className="me-2" role="presentation">
                    <button
                      className="bg-slate-200  px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
                      id="dashboard-styled-tab"
                      data-tabs-target="#styled-dashboard"
                      type="button"
                      role="tab"
                      aria-controls="dashboard"
                       aria-selected="false"
                      defaultChecked = "true"
                    >
                      In Progress
                    </button>
                  </li>
                  <li className="me-2" role="presentation">
                    <button
                      className="bg-slate-200  px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
                      id="settings-styled-tab"
                      data-tabs-target="#styled-settings"
                      type="button"
                      role="tab"
                      aria-controls="settings"
                      aria-selected="false"
                    >
                      Completed
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={16}
              />
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
            aria-labelledby="profile-styled-tab"
          >
            <TestList />
            <TodayProgress />
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="styled-dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
           <InProgress />
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="styled-settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong className="font-medium text-gray-800 dark:text-white">
                Settings tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="styled-contacts"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong className="font-medium text-gray-800 dark:text-white">
                Contacts tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagerAll;
