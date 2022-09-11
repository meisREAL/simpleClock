import React, { Component } from "react";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     root.render(element);
// }
//=================================================================
// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}</h2>
//         </div>
//     );
// }

// function tick() {
//     root.render(<Clock date={new Date()} />);
// }
//================================================================
// setInterval(tick, 1000)
//==============================================================

// class Clock extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>
//                     It is {this.props.date.toLocaleTimeString()}
//                 </h2>
//             </div>
//         );
//     }
// }

// function tick() {
//     root.render(<Clock date={new Date()} />);
// }
// setInterval(tick, 1000);


//=================================================================

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }
    componentDidMount() {
        this.timeID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timeID);
    }
    tick() {
        this.setState({
            date: new Date(),
        });
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>
                    It is {this.state.date.toLocaleTimeString()}
                </h2>
            </div>
        );
    }
}

root.render(<Clock />);

