// Importar Función
const moduloSuma = require('../source/suma.js')

// Declaración Función Prueba
const funcionPrueba = () => {
  const resultado = moduloSuma(2, 5)
  expect(resultado).toBe(7)
}

// Ejecución Prueba
it('Debería retornar el valor correcto de la suma', funcionPrueba)