import { Flag, BarChart3 } from 'lucide-react';
 function TodayProgress() {
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
                    <div className="bg-green-500 h-3 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <p className="text-center text-slate-600 text-sm">3 of 5 tasks completed (60%)</p>
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
                    <span className="text-slate-600 text-sm">Low - When time allows</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-slate-600 text-sm">Completed tasks</span>
                  </div>
                </div>
              </div>

            </div>
    )
 }
export default TodayProgress;
