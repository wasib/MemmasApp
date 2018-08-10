import React from "react";
import { Link } from "react-router-dom";
import DisplayProduct from "./DisplayProduct";
import PRODUCTSINFO from "./ProductsInfo";
import "../styles/ProductView.css";

export class ProductView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      prev: null,
      next: null
    };
  }

  componentWillMount() {
    this.getData(this.props.match.params.id);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getData(this.props.match.params.id);
    }
  }

  getData(id) {
    let jsonObject = PRODUCTSINFO;

    let previousObject = null;

    let nextObject = null;

    let currentObject = null;

    for (var i = 0; i < jsonObject.length; i++) {
      if (id == jsonObject[i].id) {
        nextObject = jsonObject[(i + 1) % jsonObject.length];
        currentObject = jsonObject[i % jsonObject.length];

        if (i != 0) previousObject = jsonObject[(i - 1) % jsonObject.length];
        else previousObject = jsonObject[jsonObject.length - 1];
      }
    }
      this.setState({
        data: currentObject,
        prev: "/Product/" + previousObject.id,
        next: "/Product/" + nextObject.id
      });
  }

  render() {
    return (
      <div>
        <div className="product">
          <DisplayProduct data={this.state.data} />
        </div>
        <div className="prev-next">
          <div className="prev">
            <Link to={this.state.prev}>Previous Project</Link>
          </div>
          <div className="next">
            <Link to={this.state.next}>Next Project</Link>
          </div>
        </div>
      </div>
    );
  }
}
