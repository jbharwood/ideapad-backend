var express = require('express');
var router = express.Router();

const ideaController = require('../controllers').idea;
const contentController = require('../controllers').content;

var cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Idea Router */
router.get('/api/idea', ideaController.list);
router.get('/api/idea/:id', ideaController.getById);
router.post('/api/idea', ideaController.add);
router.put('/api/idea/:id', ideaController.update);
router.delete('/api/idea/:id', ideaController.delete);

/* Content Router */
router.get('/api/content', contentController.list);
router.get('/api/content/:id', contentController.getById);
router.post('/api/content', contentController.add);
router.put('/api/content/:id', contentController.update);
router.delete('/api/content/:id', contentController.delete);

/* Advance Router */
router.post('/api/idea/add_with_contents', ideaController.addWithContents);

module.exports = router;
