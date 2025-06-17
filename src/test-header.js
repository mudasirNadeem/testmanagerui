import 'flowbite'; // Required for tabs, modals, etc.
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import AddTaskModal from './add-test-modal';

const TestHeader = ({ Task }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <header className="bg-slate-800 sticky top-0 z-20 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-slate-800 rounded-sm"></div>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Task Manager</h1>
            <p className="text-sm text-slate-300">Organize your daily tasks efficiently</p>
          </div>
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus size={16} />
          <span>Add Task</span>
        </button>
      </header>

      <AddTaskModal open={openModal} setTaskFunction={Task} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default TestHeader;