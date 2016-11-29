import $ from 'jquery';
import tpl from './index.html';

class Studio {
	constructor(sel) {
		this._render(sel);
		return this._init();
	}

	_render(sel){
		$(sel).append(tpl);
	}

	_init() {
		this.video = $('#studio #video');

		navigator.getUserMedia = (navigator.getUserMedia || 
			navigator.webkitGetUserMedia ||
			navigator.mozGetUserMedia ||
			navigator.msgGetUserMedia);

		if(navigator.getUserMedia) {
			navigator.getUserMedia({video: true}, this._loadCam.bind(this), this._loadFail);
		}

		return this.video[0];
	}

	_loadCam(stream) {
		this.video.attr('src', window.URL.createObjectURL(stream));
	}

	_loadFail() {
		alert('The camera is not connected!');
	}
}

export default Studio;