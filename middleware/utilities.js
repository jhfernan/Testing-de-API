const utilities = {
	error: (status, message) => {
		let err = new Error(message)
		err.status = status
		return err
	}


}

module.exports = utilities
