import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, isAuthenticated, logout, canManageStudents } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const getRoleDisplayName = (role) => {
    switch (role) {
      case 'ADMIN': return 'Administrador';
      case 'MENTOR': return 'Mentor';
      case 'USER': return 'Estudiante';
      default: return role;
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Mentoría Escolar
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Inicio
            </Link>
            <Link to="/mentores" className="text-gray-700 hover:text-blue-600 transition-colors">
              Mentores
            </Link>
            <Link to="/programas" className="text-gray-700 hover:text-blue-600 transition-colors">
              Programas
            </Link>
            <Link to="/cursos" className="text-gray-700 hover:text-blue-600 transition-colors">
              Cursos
            </Link>
            <Link to="/contacto" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contacto
            </Link>
            <Link to="/comunidad" className="text-gray-700 hover:text-blue-600 transition-colors">
              Comunidad
            </Link>
            {canManageStudents() && (
              <Link to="/estudiantes" className="text-gray-700 hover:text-blue-600 transition-colors">
                Estudiantes
              </Link>
            )}
            {isAuthenticated() ? (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {user?.username?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium">{user?.username}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <div className="font-medium">{user?.username}</div>
                      <div className="text-gray-500">{getRoleDisplayName(user?.role)}</div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/register" 
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Registrarse
                </Link>
                <Link 
                  to="/login" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Iniciar Sesión
                </Link>
              </div>
            )}
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700 hover:text-blue-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 