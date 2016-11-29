module.exports = {
	db: {
		Users: {
			getById: (id, cb) => {
				setTimeout(() => {
					cb(null, {
						id,
						name: "Jane",
						surname: "Doe",
						accountId: 13245
					});
				}, 500);
			}
		},
		Accounts: {
			getById: (id, cb) => {
				setTimeout(() => {
					cb(null, [{
						id,
						balance: "12000",
						date: new Date()
					}]);
				}, 500);
			}
		}
	},
	dbPromise: {
		Users: {
			getById: (id) => {
				return new Promise(function (resolve, reject) {
					setTimeout(() => {
						resolve({
							id,
							name: "Jane",
							surname: "Doe",
							accountId: 13245
						});
					}, 500);
				});
			}
		},
		Accounts: {
			getById: (id) => {
				return new Promise(function (resolve, reject) {
					setTimeout(() => {
						resolve([{
							id,
							balance: "12000",
							date: new Date()
						}]);
					}, 500);
				});
			}
		}
	}
}