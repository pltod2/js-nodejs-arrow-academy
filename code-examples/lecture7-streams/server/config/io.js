module.exports = function(io) {
	io.on('connection', (socket) => {
		socket.on('stream', (image) => {
			socket.broadcast.emit('stream', image);
		})
	});
}