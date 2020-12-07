import React, { Component } from 'react'
import './App.css';
import Profilepic from './profilepic.jpg'

export default class app extends Component {
    state = {
        name: 'Mahmoud Joma',
        profission: 'Web Development',
        bio: `Hi there, my name is Mahmoud and I'm 24 years old from Benghazi, Libya`,
        pic: Profilepic,
        show: false,
    }
    onClickhandler() {
        this.setState({
            show: !this.state.show,
        })
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <button className='btn' onClick={() => this.onClickhandler()}>show</button>
                    {this.state.show === true ? <div><img src={this.state.pic} alt='' />
                        <h1>{this.state.name}</h1>
                        <h4>{this.state.profission}</h4>
                        <p>{this.state.bio}</p></div> : <div></div>}
                </header>
            </div>
        )
    }
}
