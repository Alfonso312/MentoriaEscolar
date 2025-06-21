import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const cursos = [
  {
    id: 1,
    titulo: 'Introducción a la Física Cuántica',
    mentor: 'Dra. María González',
    nivel: 'Básico',
    descripcion: 'Explora los fundamentos del mundo cuántico, desde la dualidad onda-partícula hasta el entrelazamiento.',
<<<<<<< HEAD
    imagen: 'https://i.ytimg.com/vi/tdc73DlmWKU/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDEKjqCO-yr6uTVipIL_971SU0tpA',
=======
    imagen: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a1c8?w=500',
>>>>>>> cae88bb497a7b593a6bc7f559e78c1468c3f3866
    color: 'blue',
  },
  {
    id: 2,
    titulo: 'Análisis de Obras Literarias Clásicas',
    mentor: 'Prof. Carlos Rodríguez',
    nivel: 'Intermedio',
    descripcion: 'Un viaje a través de las obras maestras de la literatura universal, analizando su contexto y legado.',
    imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500',
    color: 'green',
  },
  {
    id: 3,
    titulo: 'Programación en Python desde Cero',
<<<<<<< HEAD
    mentor: 'Ing. Anita Pérez',
=======
    mentor: 'Ing. Ana Pérez',
>>>>>>> cae88bb497a7b593a6bc7f559e78c1468c3f3866
    nivel: 'Básico',
    descripcion: 'Aprende a programar con Python, uno de los lenguajes más demandados en el mundo tech.',
    imagen: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500',
    color: 'yellow',
  },
  {
    id: 4,
    titulo: 'Cálculo Avanzado para Ingeniería',
    mentor: 'Dra. María González',
    nivel: 'Experto',
    descripcion: 'Domina los conceptos de cálculo diferencial e integral aplicados a problemas complejos de ingeniería.',
    imagen: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=500',
    color: 'red',
  },
  {
    id: 5,
    titulo: 'Redacción Creativa y Storytelling',
    mentor: 'Prof. Carlos Rodríguez',
    nivel: 'Básico',
    descripcion: 'Desarrolla tu capacidad para contar historias que cautiven y conecten con tu audiencia.',
    imagen: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500',
    color: 'purple',
  },
  {
    id: 6,
    titulo: 'Machine Learning Aplicado',
    mentor: 'Ing. Ana Pérez',
    nivel: 'Experto',
    descripcion: 'Implementa modelos de Machine Learning para resolver problemas reales con datos del mundo real.',
    imagen: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500',
    color: 'pink',
  },
];

const levelColors = {
  'Básico': 'bg-green-100 text-green-800',
  'Intermedio': 'bg-yellow-100 text-yellow-800',
  'Experto': 'bg-red-100 text-red-800',
};

function Cursos() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <AcademicCapIcon className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nuestros Cursos
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cursos especializados y diseñados por nuestros mentores para potenciar tus habilidades.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cursos.map((curso, index) => (
          <motion.div
            key={curso.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group"
          >
            <div className="relative">
              <img className="h-48 w-full object-cover" src={curso.imagen} alt={curso.titulo} />
              <div className={`absolute top-0 right-0 mt-2 mr-2 px-2 py-1 text-xs font-bold rounded-full ${levelColors[curso.nivel]}`}>
                {curso.nivel}
              </div>
            </div>
<<<<<<< HEAD

            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{curso.titulo}</h3>

=======
            
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{curso.titulo}</h3>
              
>>>>>>> cae88bb497a7b593a6bc7f559e78c1468c3f3866
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <UserCircleIcon className="h-5 w-5 mr-1.5" />
                <span>{curso.mentor}</span>
              </div>
<<<<<<< HEAD

              <p className="text-gray-600 mb-4 flex-grow">{curso.descripcion}</p>

=======
              
              <p className="text-gray-600 mb-4 flex-grow">{curso.descripcion}</p>
              
>>>>>>> cae88bb497a7b593a6bc7f559e78c1468c3f3866
              <button
                className={`mt-auto w-full py-2 px-4 rounded-lg font-semibold transition-colors bg-indigo-600 text-white hover:bg-indigo-700`}
              >
                Ver Detalles del Curso
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Cursos; 