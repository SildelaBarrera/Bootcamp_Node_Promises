const {Router} = require ("express")
const router = Router();
const usersCtrl = require("../controller/book.controller")

router.get("/", usersCtrl.getStart);

router.get("/book", usersCtrl.getBooks);
        
router.post("/book", usersCtrl.postBook);
        
router.put("/book", usersCtrl.putBook);
        
router.delete("/book", usersCtrl.deleteBook); 

module.exports = router;


