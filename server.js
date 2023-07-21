const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const AppRoutes = require('./routes/AppRoutes');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', exphbs.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.use(AppRoutes.appRoutes);
app.listen(port, () => console.log(`server is up on ${port}`));