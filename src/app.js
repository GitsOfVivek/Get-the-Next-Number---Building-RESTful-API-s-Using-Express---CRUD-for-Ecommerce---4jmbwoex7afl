const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }
app.get('/api/get-next-num', (req, res) => {
	const { num } = req.body;
	if (typeof num !== 'number') {
		return res.status(200).json({
			status: 'success',
			message: 'Invalid data',
		});
	}
	res.status(200).json({
		status: 'success',
		message: num + 1,
	});
});

module.exports = app;
