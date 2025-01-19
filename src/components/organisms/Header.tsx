import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ/サイト名 */}
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Todo App</h1>
          </Link>

          {/* ナビゲーション */}
          <nav className="flex items-center space-x-4">
            <Link
              to="/todo"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm"
            >
              Todo一覧
            </Link>
            <Link
              to="/profile"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm"
            >
              プロフィール
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
              ログアウト
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
