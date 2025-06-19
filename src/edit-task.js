import React from 'react'

export default function EditTask({open , close , id}) {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-lg font-semibold text-gray-800">Edit Task</h3>
          <button
            className="text-gray-400 hover:text-gray-700"
             onClick={close}
          >
            ✕
          </button>
        </div>

        <form > 
            {/* onSubmit={addTests} */}
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Task Title
              </label>
              <input
                type="text"
                name="title"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter task title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Due Date
              </label>
              <input
                required
                name="dueDate"
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Priority
              </label>
              <select
                name="priority"
                required
                defaultValue="Low"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Low">Low Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="High">🔥 High Priority</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows="3"
                required
                name="discription"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter task description"
              ></textarea>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-end space-x-3 pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Edit Task
            </button>
            <button
              type="button"
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
                        onClick={close}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
