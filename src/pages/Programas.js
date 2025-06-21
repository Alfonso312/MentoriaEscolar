import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

function Programas() {
  const programas = [
    {
      id: 1,
      nombre: 'Programa Básico',
      descripcion: 'Ideal para estudiantes que buscan mejorar su rendimiento académico general',
      precio: '299',
      caracteristicas: [
        '2 sesiones semanales',
        'Material de estudio incluido',
        'Seguimiento mensual',
        'Acceso a plataforma online',
        'Reportes de progreso',
      ],
      destacado: false,
    },
    {
      id: 2,
      nombre: 'Programa Avanzado',
      descripcion: 'Programa completo con mentoría personalizada y preparación para exámenes',
      precio: '499',
      caracteristicas: [
        '4 sesiones semanales',
        'Material de estudio premium',
        'Seguimiento semanal',
        'Acceso completo a plataforma',
        'Reportes detallados',
        'Preparación para exámenes',
        'Sesiones de grupo',
      ],
      destacado: true,
    },
    {
      id: 3,
      nombre: 'Programa Elite',
      descripcion: 'Mentoría de alto rendimiento para estudiantes sobresalientes',
      precio: '799',
      caracteristicas: [
        'Sesiones ilimitadas',
        'Material exclusivo',
        'Seguimiento personalizado',
        'Acceso VIP a plataforma',
        'Reportes avanzados',
        'Preparación para olimpiadas',
        'Mentoría 1 a 1',
        'Consultas prioritarias',
      ],
      destacado: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nuestros Programas
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Programas diseñados para diferentes necesidades y objetivos académicos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programas.map((programa, index) => (
          <motion.div
            key={programa.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white rounded-xl shadow-lg overflow-hidden ${
              programa.destacado ? 'ring-2 ring-indigo-600' : ''
            }`}
          >
            {programa.destacado && (
              <div className="bg-indigo-600 text-white text-center py-2">
                Más Popular
              </div>
            )}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {programa.nombre}
              </h3>
              <p className="text-gray-600 mb-4">{programa.descripcion}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  S/{programa.precio}
                </span>
                <span className="text-gray-600">/mes</span>
              </div>
              <ul className="space-y-3 mb-6">
                {programa.caracteristicas.map((caracteristica, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{caracteristica}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  programa.destacado
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Comenzar Ahora
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sección de Garantía */}
      <div className="mt-20 bg-gray-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Garantía de Satisfacción
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Si no estás satisfecho con nuestro programa durante los primeros 15 días,
          te devolvemos tu dinero sin preguntas. Tu éxito es nuestra prioridad.
        </p>
      </div>
    </div>
  );
}

export default Programas; 