$(function () {
    var socket = io();
    socket.on('connect', function () {
        socket.on('data:user', function (data) {
            $('#view').append(
                '<div class="alert alert-success" role="alert">username: <strong>' + data.user + '</strong> email: <strong>' + data.email + '</strong></div>'
            );
        });

        socket.on('disconnect', function (data) {
            alert('Wrong password or server is down!');
        });

        socket.emit('user:login', location.search ? location.search.replace('?login=', '') : '');
    });
});