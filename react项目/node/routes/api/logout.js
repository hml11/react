let express = require("express")
let router = express.Router()

router.put('/',(req,res,next)=>{
  req.session['mall_username'] = undefined;
  res.send({err:0,mess:'注销成功'})
})
module.exports = router;