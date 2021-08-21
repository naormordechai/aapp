import express from 'express';
const app = express();
const router = express.Router();

router.get('/abcd', (request, response, next) => {
	response.write('Hello world!');
});

app.use(router);

app.listen(3002, () => console.log('App listing to port 3002'));
