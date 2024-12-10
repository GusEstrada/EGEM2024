const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Contact = require('./contact'); // Modelo para contactos

const app = express();

// Configuración de middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/styles', express.static(path.join(__dirname, 'styles')));


// URI de conexión a MongoDB Atlas
const mongouri = 'mongodb+srv://GusEstrada:81233202@apiusuarios.zzlhn.mongodb.net/';

// Conexión a la base de datos
async function connectDB() {
    try {
        await mongoose.connect(mongouri);
        console.log('Conectado a la base de datos exitosamente!');
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err);
    }
}

connectDB();

// Ruta para manejar el formulario de "Contáctanos"
app.post('/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;

    const contact = new Contact({ name, email, phone, message });

    try {
        const savedContact = await contact.save();
        console.log('Nuevo contacto guardado:', savedContact);
        res.status(200).send('Mensaje enviado correctamente.');
    } catch (err) {
        console.error('Error al guardar el mensaje:', err);
        res.status(500).send('Error al enviar el mensaje, por favor intenta nuevamente.');
    }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;
