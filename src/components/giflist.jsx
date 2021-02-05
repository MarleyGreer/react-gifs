import React, { Component } from 'react' ;
import Gif from './gif.jsx';

// REFACTORED

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map((gif) => {
      return <Gif key={gif.id} id={gif.id} />;
}) 
  }
  
  render() {
    
      return ( 
          <div className="gif-list">
           {this.renderList(this.props)}
          </div>)
  }
}

export default GifList;

// class GifList extends Component {
      
//     render() {
      
//         return ( 
//             <div className="gif-list">
//               {this.props.gifs.map((gif) => {
//                 return <Gif key={gif.id} id={gif.id} />;
//           })} 
//             {/* {this.renderList(this.props)} */}
//             </div>)
//     }
// }

// export default GifList;
