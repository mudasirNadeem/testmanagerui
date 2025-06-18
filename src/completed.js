import { Trash2 } from "lucide-react";
import { useState } from "react";
const Completed = () => {
  const [allCompletedTasks, setAllTask] = useState([]);
  const userId = localStorage.getItem("userId");
  async function allCompletedTasksFun() {
    const response = await fetch(
      "http://localhost:3000/api/showAllCompletedTasks",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      }
    );
    const data = await response.json();
    if (data.ok) {
      setAllTask(data.tasks);
    }
  }

  async function removeTaskItem(id) {
    const response = await fetch("http://localhost:3000/api/removeTaskItem", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: localStorage.getItem("userId"),
        deleteItemId: id,
      }),
    });
    const data = await response.json();
    if (data.ok) {
      allCompletedTasksFun();
    }
  }

  async function progressPositionFun(id, progress) {
    const response = await fetch(
      "http://localhost:3000/api/progressPositionItems",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
          id: id,
          progress: progress,
        }),
      }
    );
    var data = await response.json();
    if (data.ok) {
      allCompletedTasksFun();
    } else {
      console.error("Update failed:", data.error);
    }
  }
  useState(() => {
    progressPositionFun();
  }, []);
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-800">Completed Tasks</h2>
        <span className="text-slate-600">
          {allCompletedTasks.length} Completed Tasks
        </span>
      </div>

      <div className="space-y-4">
        {allCompletedTasks.map((task, index) => (
          <div
            key={index}
            className="p-5 rounded-lg border-2 border-red-500 bg-red-50 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 rounded-full bg-red-500 mt-2"></div>
              <div className="flex-1">
                <h3
                  className="text-lg font-bold text-slate-800 mb-1 search-items"
                  id={`task-title-${task.id}`}
                >
                  {task.taskTitle}
                </h3>
                <p className="text-slate-600 mb-2">{task.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-blue-500 font-medium">
                    {task.priority} Priority
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-blue-500">Due: {task.dueDate}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => progressPositionFun(task.id, "inprogress")}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg text-sm transition-colors"
                >
                  In Progress
                </button>
                <button
                  onClick={() => removeTaskItem(task.id)}
                  id={task.id}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors"
                >
                  <Trash2 size={12} className="mr-1 inline" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Completed;
