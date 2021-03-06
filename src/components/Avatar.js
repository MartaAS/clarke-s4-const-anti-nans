import React, { Component } from 'react';
import background1 from '../images/background1.jpeg';


class Avatar extends Component {
	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleImageChange = this.handleImageChange.bind(this);

		this.state = {
			file: '',
			imagePreviewUrl: ''
		};

	}
	handleSubmit(e) {
		e.preventDefault();
		console.log('handle uploading-', this.state.file);
	}

	handleImageChange(e) {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				file: file,
				imagePreviewUrl: reader.result
			});
		}

		reader.readAsDataURL(file)
	}

	render() {
		let {imagePreviewUrl} = this.state;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = (<img src={imagePreviewUrl} />);
		} else {
			$imagePreview = (<img src='../images/background1.jpeg' />);
		}

		return (
			<div className="prev-info-personaldates">
				<form className="input-form" onSubmit={(e)=>this.handleSubmit(e)}>
					<input className="picture"
						type="file"
						onChange={(e)=>this.handleImageChange(e)} />
				</form>
				<div className="prev-photo">
					{this.state.imagePreviewUrl}
					
				</div>
			</div>
		);
	}
}


export default Avatar;
