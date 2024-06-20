var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/uname', function (req, res, next) {
  const { exec } = require('child_process');
  exec('uname -a', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(stdout);
  });
}

);


module.exports = router;
