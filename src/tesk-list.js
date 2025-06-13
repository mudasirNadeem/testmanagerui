import { Edit, Trash2, Check, Loader } from 'lucide-react';
const TestList = () => {
  return (
        <><div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800">Today's Tasks</h2>
          <span className="text-slate-600">5 tasks remaining</span>
      </div><div className="space-y-4">
              {/* Task Item 1 - High Priority */}
              <div className="p-5 rounded-lg border-2 border-red-500 bg-red-50 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                      <div className="w-4 h-4 rounded-full bg-red-500 mt-1"></div>
                      <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-800 mb-1">Complete project proposal</h3>
                          <p className="text-slate-600 mb-2">Finalize the quarterly project proposal for client review</p>
                          <div className="flex items-center gap-2 text-sm">
                              <span className="text-red-500 font-medium">🔥 High Priority</span>
                              <span className="text-slate-400">•</span>
                              <span className="text-red-500">Due: Today</span>
                          </div>
                      </div>

                      <div className="flex gap-2">
                          <button className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-lg text-sm transition-colors">
                              <Edit size={12} className="mr-1 inline" />
                              Edit
                          </button>
                          <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm transition-colors">
                              <Check size={12} className="mr-1 inline" />
                              Done
                          </button>
                          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg text-sm transition-colors flex items-center gap-1">
      In Progress
    </button>
                              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors">
                              <Trash2 size={12} className="mr-1 inline" />
                              Delete
                          </button>
                      </div>
                  </div>
              </div>


          </div>
          </>
  );
};

export default TestList;