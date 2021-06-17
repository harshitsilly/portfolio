import React from 'react';
import Medixtor from 'react-medixtor';

export default class MyApp extends React.Component {
	onEdit(output) {
		console.log(output.source);
	}

	render() {
		return <Medixtor defaultValue="## Hi @SocialGouv!" onChange={this.onEdit.bind(this)} />;
	}
}
