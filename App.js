/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	Image,
	View,
	ScrollView
} from 'react-native';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
	'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
	'Shake or press menu button for dev menu',
});

class Greeting extends Component {
	render() {
		return (
			<Text style={styles[this.props.styleKey || 'red']}>Hello {this.props.name}!</Text>
		);
	}
}

class Blink extends Component {
	constructor(props) {
		super(props);
		this.state = {isShowingText: true}

		setInterval(() => {
			this.setState(previousState => {
				return { isShowingText: !previousState.isShowingText };
			})
		}, 1000)
	}

	render() {
		let display = this.state.isShowingText ? this.props.text : ' ';
		return (
			<Text>{display}</Text>
		)
	}
}

export default class App extends Component<{}> {
	render() {
		let pic = {
			uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
		};
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<Text style={styles.welcome}>
					Welcome to React Native!!!
				</Text>
				<Text style={styles.instructions}>
					To get started, edit App.js
				</Text>
				<Text style={styles.instructions}>
					{instructions}
				</Text>
				<View>
					<Blink text='I love to blink' />
					<Blink text='Yes blinking is so great' />
					<Blink text='Why did they ever take this out of HTML' />
					<Blink text='Look at me look at me look at me' />
				</View>
				<Image source={pic} style={{width: 193, height: 110}}/>
				<Greeting name='Rexxar' styleKey='bigblue' />
				<Greeting name='Jaina' styleKey='red' />
				<Greeting name='Valeera' />
				<View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
					<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
					<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
					<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
				</View>
				{/*
				<View>
					<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
					<View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
					<View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
				</View>

				<View style={{flex: 1}}>
					<View style={{flex: 1, backgroundColor: 'powderblue'}} />
					<View style={{flex: 2, backgroundColor: 'skyblue'}} />
					<View style={{flex: 3, backgroundColor: 'steelblue'}} />
				</View>
				*/}
			</ScrollView>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	bigblue: {
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 30,
	},
	red: {
		color: 'red',
	},
});
