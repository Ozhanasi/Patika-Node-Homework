const Koa = require('koa');
const Router = require('koa-router');
const { listenerCount } = require('process');
const app = new Koa();
const router = new Router();

router.get('/' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>Index sayfasina hos geldiniz.</h1>'
});
router.get('/hakkimda' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>Hakkimda sayfasina hos geldiniz.</h1>'
});
router.get('/iletisim' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>Iletisim sayfasina hos geldiniz.</h1>'
});

app.use(router.routes());
const port =3000;

app.listen(port,()=>{
    console.log(`Sunucu port ${port} de başlatıldı.`);
});