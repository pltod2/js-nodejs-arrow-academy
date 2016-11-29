import $ from 'jquery';
import Stream from 'components/stream/module.js';
import Studio from 'components/studio/module.js';
import io from 'socket.io-client';

$(() => {
	let str = null;
	let socket = io();
	switch (window.location.pathname) {
		case '/studio':
			let src = new Studio('#view');
			str = new Stream('#view', false);
			str.toCanvas(src);

			str.toSocket(socket);
			break;
		default:
			str = new Stream('#view');
			
			str.fromSocket(socket);
			break;
	}
});