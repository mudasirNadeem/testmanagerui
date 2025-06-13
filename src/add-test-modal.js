// AddTaskModal.jsx
import { Modal } from 'flowbite-react';

export default function AddTaskModal({ open, onClose }) {
  return (
    <Modal>
      <Modal.Header>Add New Task</Modal.Header>
      <Modal.Body>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter task title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter task description"
              rows={3}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={onClose}
        >
          Add Task
        </button>
        <button
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          onClick={onClose}
        >
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
}
