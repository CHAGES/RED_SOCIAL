const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
 
app.get('/', (req, res) => {
    res.send('¡Bienvenido a tu red social temática!');
});
 
app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});