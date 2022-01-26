import express from 'express';

const app = express()
const port = 1337

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
});

app.get('/api/todos', ( request, response ) => {
	response.json([
		{id: "test", name: "example"},
		{id: "Pokemon", name: "Snorlax" },
		{id: "Cat", name: "Feed me!" },
	]);
});




