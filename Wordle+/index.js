const http = require("http");

const SECRET = "NUKES"; // You can set any word as the secret answer

function myFunction(req, res)
{
	//console.log({ req }); // You can uncomment this to see the request object
	const request_url = req.url;
	const GUESS = String(request_url).substring(request_url.indexOf('=') + 1); // Write logic to parse the word which the user guessed from the URL string
	let feedback = ""; // Write logic to compare the word with the secret, and generate the feedback string
	for (let i = 0; i < 5; i++)
	{
		if (GUESS[i] == SECRET[i])
		{
			feedback += "g";
		}
		else if (SECRET.includes(GUESS[i]))
		{
			feedback += "y";
		}
		else
		{
			feedback += "b";
		}
	}
	res.write(feedback);
	res.end();
}

http.createServer(myFunction).listen(8080);
