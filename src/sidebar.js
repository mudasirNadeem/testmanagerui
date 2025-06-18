import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-50 p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="flex items-center p-2 rounded hover:bg-gray-200">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/kanban" className="flex items-center p-2 rounded hover:bg-gray-200">
              Kanban
            </Link>
          </li>
          <li>
            <Link to="/inbox" className="flex items-center p-2 rounded hover:bg-gray-200">
              Inbox
            </Link>
          </li>
          <li>
            <Link to="/users" className="flex items-center p-2 rounded hover:bg-gray-200">
              Users
            </Link>
          </li>
          <li>
            <Link to="/products" className="flex items-center p-2 rounded hover:bg-gray-200">
              Products
            </Link>
          </li>
          <li>
            <Link to="/signin" className="flex items-center p-2 rounded hover:bg-gray-200">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/signup" className="flex items-center p-2 rounded hover:bg-gray-200">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
