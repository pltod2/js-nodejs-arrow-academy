import $ from 'jquery';
import tpl from './index.html';

class Stream {
	constructor(sel, visible) {
		this._render(sel);
		this._init(visible);
	}

	_render(sel) {
		$(sel).append(tpl);
	}

	_init(visible) {
		this.canvas = $('#stream #watch');

		if(visible === false) {
			this.canvas.hide();
		}

		this.canvas = this.canvas[0];
		this.context = this.canvas.getContext('2d');

		this.canvas.width = 800;
		this.canvas.height = 600;

		this.context.width = this.canvas.width;
		this.context.height = this.canvas.height;
	}

	_viewVideo(video) {
		this.context.drawImage(video, 0, 0, this.context.width, this.context.height);
		this.out && this.out.emit('stream', this.canvas.toDataURL('image.webp'));
	}

	toCanvas(src) {
		setInterval(() => {
			this._viewVideo.call(this, src);
		}, 500);

		return this;
	}

	toSocket(socket) {
		this.out = socket;

		return this;
	}

	fromSocket(socket) {
		socket.on('stream', (strDataURI) => {
			var img = new Image;
			img.onload = () => {
				this._viewVideo.call(this, img);
			};
			img.src = strDataURI;
		});
	}
}

export default Stream;