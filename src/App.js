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
        counter: 0,
    }
    onClickhandler() {
        this.setState({
            show: !this.state.show,
        })
    }
    componentDidMount() {
        this.setState({ counter: 0 })
        setInterval(() => this.setState({ counter: this.state.counter + 1 }), 1000)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p >It's been {this.state.counter} seconds since the component got mounted</p>
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
