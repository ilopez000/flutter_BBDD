const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Archivo de credenciales

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Carga los datos del JSON
const ventasData = require('./datos_ejemplo.json');

// Itera sobre cada registro e inserta en la colección "ventas"
ventasData.forEach(async (registro) => {
  try {
    await db.collection('ventas').add(registro);
    console.log('Registro importado:', registro);
  } catch (error) {
    console.error('Error importando registro:', error);
  }
});
