import { Flag, BarChart3 } from "lucide-react";
import { useEffect, useState } from "react";

function TodayProgress() {
  const [allTask, setallTask] = useState([]);
  const [allCompletedTesk, setAllCompletedTesk] = useState([]);
  var totalTasks = allTask.length;
  var completedTasks = allCompletedTesk.length;
  var totalProgress = (completedTasks / totalTasks) * 100;
  async function allTastShow() {
    const userId = localStorage.getItem("userId");
    const response = await fetch("http://localhost:3000/api/progessAllTasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    const data = await response.json();
    if (data.ok) {
      setallTask(data.tasks);
    }
  }
  useEffect(() => {
    allTastShow();
    allShowCompletedTasks();
  }, []);

  async function allShowCompletedTasks() {
    const userId = localStorage.getItem("userId");
    const response = await fetch("http://localhost:3000/api/completedTasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    const data = await response.json();
    if (data.ok) {
      setAllCompletedTesk(data.tasks);
    }
  }

  return (
    <div className="flex gap-6 mt-8">
      {/* Stats Panel */}
      <div className="bg-white border border-slate-200 rounded-lg p-5 w-80">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <BarChart3 size={20} />
          Today's Progress
        </h3>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-slate-200 rounded-full h-3 mb-2">
            <div
              className="bg-green-500 h-3 rounded-full"
              style={{ width: `${totalProgress}%` }}
            ></div>
          </div>
          <p className="text-center text-slate-600 text-sm">
            {completedTasks} of {totalTasks} tasks completed (
            {totalProgress.toFixed()}%)
          </p>
        </div>

        {/* Quick Stats */}
        <div className="space-y-2">
          <p className="text-slate-600 text-sm">🔥 1 High Priority</p>
          <p className="text-slate-600 text-sm">⚡ 1 Medium Priority</p>
        </div>
      </div>

      {/* Priority Legend */}
      <div className="bg-white border border-slate-200 rounded-lg p-5 w-56">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Flag size={20} />
          Priority Guide
        </h3>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-slate-600 text-sm">High - Urgent tasks</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span className="text-slate-600 text-sm">Medium - Important</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <span className="text-slate-600 text-sm">
              Low - When time allows
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-slate-600 text-sm">Completed tasks</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodayProgress;
