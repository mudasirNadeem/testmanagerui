import "flowbite";
import { Search, Filter } from "lucide-react";
import TodayProgress from "./today-progress";
import TaskHeader from "./task-header";
import TaskList from "./task-list";
import InProgress from "./inprogress-task";
import Completed from "./completed";
import { useRef, useCallback, useState } from "react";

const TaskManagerAll = () => {
  const userId = localStorage.getItem("userId");
  if (!userId) {
    window.location.href = "/";
  }
  const taskListRef = useRef(null);
  const setAllTaskFun = useCallback(() => {
    if (taskListRef.current && taskListRef.current.allTaskShow) {
      taskListRef.current.allTaskShow();
    }
  }, []);

  var [searchText, setSearchText] = useState();
  function searchTasks(e) {
    setSearchText(e.target.value);
  }
  return (
    <div>
      <TaskHeader Task={setAllTaskFun} />
      <div className="max-w-7xl mx-auto p-10">
        <div className="bg-slate-50 px-5 py-4 rounded-t-xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h3 className="font-semibold text-slate-700 flex items-center gap-2">
                <Filter size={16} />
                Filter Tasks
              </h3>

              <ul
                className="flex flex-wrap -mb-px text-sm font-medium items-center text-center"
                id="default-styled-tab"
                data-tabs-toggle="#default-styled-tab-content"
                data-tabs-active-classes="!bg-blue-500 text-white"
                role="tablist"
              >
                <li className="me-2" role="presentation">
                  <button
                    className="bg-slate-200 px-4 py-1.5 rounded-full text-sm font-medium"
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
                    className="bg-slate-200 px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
                    id="dashboard-styled-tab"
                    data-tabs-target="#styled-dashboard"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="false"
                  >
                    In Progress
                  </button>
                </li>
                <li className="me-2" role="presentation">
                  <button
                    className="bg-slate-200 px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
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

            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={16}
              />
              <input
                type="text"
                placeholder="🔍 Search tasks..."
                id="search-bar"
                onInput={(e) => searchTasks(e)}
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
            <TaskList
              searchTasks={searchText}
              ref={taskListRef}
              setTaskFunction={setAllTaskFun}
            />
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
            <Completed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagerAll;
