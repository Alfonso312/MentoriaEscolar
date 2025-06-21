import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Mentores() {
  const mentores = [
    {
      id: 1,
      nombre: 'Dra. María González',
      especialidad: 'Matemáticas y Física',
      experiencia: '15 años',
      imagen: 'https://newtonendigital.com/wp-content/uploads/2025/03/Mariclet-Fernandez-Profesora-de-Fisica-y-Matematica.jpg',
      descripcion: 'Doctora en Física con amplia experiencia en enseñanza de ciencias exactas.',
    },
    {
      id: 2,
      nombre: 'Prof. Carlos Rodríguez',
      especialidad: 'Literatura y Redacción',
      experiencia: '12 años',
      imagen: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500',
      descripcion: 'Especialista en desarrollo de habilidades comunicativas y análisis literario.',
    },
    {
      id: 3,
      nombre: 'Lic. Ana Martínez',
      especialidad: 'Psicología Educativa',
      experiencia: '10 años',
      imagen: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500',
      descripcion: 'Experta en desarrollo personal y orientación vocacional.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nuestros Mentores
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Conoce a nuestro equipo de profesionales altamente calificados, comprometidos con tu éxito académico
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentores.map((mentor, index) => (
          <motion.div
            key={mentor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={mentor.imagen}
                alt={mentor.nombre}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {mentor.nombre}
              </h3>
              <div className="flex items-center text-indigo-600 mb-2">
                <span className="font-medium">{mentor.especialidad}</span>
                <span className="mx-2">•</span>
                <span>{mentor.experiencia} de experiencia</span>
              </div>
              <p className="text-gray-600 mb-4">{mentor.descripcion}</p>
              <Link 
                to={`/mentores/${mentor.id}`}
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors inline-block text-center"
              >
                Ver Perfil Completo
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sección de Proceso de Selección */}
      <div className="mt-20 bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Nuestro Proceso de Selección
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-indigo-600 font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2">Evaluación de Credenciales</h3>
            <p className="text-gray-600">
              Verificación exhaustiva de títulos y experiencia profesional
            </p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-indigo-600 font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2">Entrevista Personal</h3>
            <p className="text-gray-600">
              Evaluación de habilidades pedagógicas y metodología de enseñanza
            </p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-indigo-600 font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2">Capacitación Continua</h3>
            <p className="text-gray-600">
              Desarrollo profesional constante y actualización metodológica
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentores; 