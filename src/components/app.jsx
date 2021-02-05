import React, { Component } from 'react' ;
import Searchbar from './searchbar.jsx'
import Gif from './gif.jsx'
import GifList from './giflist.jsx'

class App extends Component {
    render() {
        const gifs = [
            { id: "xT9IgDEI1iZyb2wqo8"},
            { id: "1kymxb4RCuOwE"},
            { id: "1PMVNNKVIL8Ig"},
            { id: "HyDfNCZlTn5iU"},
            { id: "UPXI88yC63EPQf6yNy"},
            { id: "iiKJ9rBTfWC7u6fW43"},
            { id: "kEuEyZVmEEVPyrKhzr"}
        ];
        return (
            <div>
                <div className="left-scene">
                    <Searchbar />
                    <div className="selected-gif">
                        <Gif id="xT9IgDEI1iZyb2wqo8"/>
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs={gifs} />
                </div>
            </div>
        )
    }
}

export default App;