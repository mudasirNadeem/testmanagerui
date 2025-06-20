import { Edit, Trash2, Check } from "lucide-react";
import { useState } from "react";
import EditTask from "./edit-task";
const InProgress = () => {
  const [allInprogressTasks, setAllTask] = useState([]);
  const userId = localStorage.getItem("userId");
  async function allInprogressTasksFun() {
    const response = await fetch(
      "http://localhost:3000/api/showAllInprogressTasks",
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
    if(data.ok){
allInprogressTasksFun();
    }
  }

  var [editTask , setEditTask]= useState(false);


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
      allInprogressTasksFun();
    } else {
      console.error("Update failed:", data.error);
    }
  }
  useState(() => {
    allInprogressTasksFun();
  }, []);
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-800">Inprogress Tasks</h2>
        <span className="text-slate-600">
          {allInprogressTasks.length} remaining in progress tasks
        </span>
      </div>

      <div className="space-y-4">
        {allInprogressTasks.map((task, index) => (
          <div
            key={index}
            className="p-5 rounded-lg border-2 border-red-500 bg-red-50 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 rounded-full bg-red-500 mt-2"></div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-800 mb-1">
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
                  onClick={() => progressPositionFun(task.id, "completed")}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm transition-colors"
                >
                  <Check size={12} className="mr-1 inline" />
                  Done
                </button>
                <button onClick={() => setEditTask(true)} className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-lg text-sm transition-colors">
                  <Edit size={12} className="mr-1 inline" />
                  Edit
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
            <EditTask  open={editTask} close={() => setEditTask(false)} />
      
    </>
  );
};
export default InProgress;
