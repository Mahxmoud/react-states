import React, { Component } from 'react'
import './App.css';
import Profilepic from './profilepic.jpg'

export default class app extends Component {
    state = {
        name: '',
        profission: '',
        bio: '',
        pic: {},
        show: false,
    }
    onClickhandler() {
        this.setState({
            name: 'Mahmoud Joma',
            profission: 'Web Development',
            bio: `Hi there, my name is Mahmoud and I'm 24 years old from Benghazi, Libya`,
            pic: { Profilepic },
            show: true,
        })
    }
    afterClickhandler() {
        this.setState({
            name: '',
            profission: '',
            bio: '',
            pic: {},
            show: false,
        })
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <button className='btn' onClick={() => this.state.show === false ? this.onClickhandler() : this.afterClickhandler()}>Show</button>
                    <img src={this.state.pic} alt='' />
                    <h1>{this.state.name}</h1>
                    <h4>{this.state.profission}</h4>
                    <p>{this.state.bio}</p>
                     
                </header>
            </div>
        )
    }
}
