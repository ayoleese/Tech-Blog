const express= require('express');
const path = require('path');
const route = require('./controllers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3002;
 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(route);

app.listen(PORT, () => {
  console.log('Server listening to: http://localhost:' + PORT);
});