import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "THIS IS MY REACT APP"
        }
    }

    changeLabel = (selectedSection) => {
        this.setState({
            message: "...AND I ENJOY IT A LOT!"
        })
    }

    render() {
        return <div>
                  {this.state.message}
                  <button onClick={this.changeLabel}>Change Message</button>
                </div>;
    }
}
