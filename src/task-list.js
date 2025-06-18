import { Edit, Trash2, Check } from "lucide-react";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

const TaskList = forwardRef((props, ref) => {
  const [allTask, setallTask] = useState([]);
  const userId = localStorage.getItem("userId");
  useImperativeHandle(ref, () => ({
    allTaskShow,
  }));

  async function allTaskShow() {
    const response = await fetch("http://localhost:3000/api/showAllTasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    const data = await response.json();
    if (data.ok) {
      setallTask(data.tasks);
    }
  }

  async function removeTeskItem(id) {
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
      allTaskShow();
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
      allTaskShow();
    } else {
      console.error("Update failed:", data.error);
    }
  }
  useEffect(() => {
    allTaskShow();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-800">Today's Tasks</h2>
        <span className="text-slate-600">{allTask.length} tasks remaining</span>
      </div>

      <div className="space-y-4">
        {allTask.map((task, index) => (
          <div
            key={index}
            className="p-5 rounded-lg border-2 border-red-500 bg-red-50 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 rounded-full bg-red-500 mt-2"></div>
              <div className="flex-1">
                <h3
                  className="text-lg font-bold text-slate-800 mb-1"
                  id={`task-id-${task.id}`}
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
                  onClick={() => progressPositionFun(task.id, "completed")}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm transition-colors"
                >
                  <Check size={12} className="mr-1 inline" />
                  Done
                </button>
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-lg text-sm transition-colors">
                  <Edit size={12} className="mr-1 inline" />
                  Edit
                </button>
                <button
                  onClick={() => removeTeskItem(task.id)}
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
});

export default TaskList;
