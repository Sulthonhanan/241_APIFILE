const express = require('express');
const router = express.Router();
const multer = require('multer');   
const komikController = require('../controllers/komikController');
const upload = multer({ storage: multer.memoryStorage() }); 

router.get('/komiks', komikController.getAllKomiks);
router.get('/komiks/:id', komikController.getKomikById);
router.post('/komiks', upload.single('coverImage'), komikController.createKomik);
router.put('/komiks/:id', upload.single('coverImage'), komikController.updateKomik);
router.delete('/komiks/:id', komikController.deleteKomik);

module.exports = router;
