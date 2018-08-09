import React from "react";
import {Link} from 'react-router-dom'
import "../styles/ProductView.css";

export class ProductView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    };
  }

  componentWillMount() {
    this.setState({
      id: this.props.match.params.id
    });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps){
    if(this.props.match.params.id!==prevProps.match.params.id){
        this.setState({
            id: this.props.match.params.id
          });
    }
  }
  
  render() {
    return (
      <div>
      <Link to='/Product/234'>sd</Link>
        <h2>Id: {this.state.id}</h2>
      </div>
    );
  }
}
