module.exports = (req, res) => {

	if (req.params.id == undefined) return res.status(400).send("Not All Parameters Provided.")
	
	User.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (data) {
	
		if (data == null) return res.status(404).send("Not Found.")
		
        res.set('Content-Type', 'text/html');

		return res.send(data.status)
	
	}).catch(function (error) {
	
		console.log(error);
		return res.status(500).send("Internal Server Error.")
	
	})

}