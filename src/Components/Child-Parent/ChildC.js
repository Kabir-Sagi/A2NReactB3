import React, { Component } from "react";

class ChildC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }
  getDataFromText = () => {
    this.props.updateState(this.state.text);
  };

  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header bg-warning text-white text-center">
                <p className="h4">Child Component</p>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter Text"
                    className="form-control"
                    onChange={(event) => {
                      this.setState({
                        text: event.target.value,
                      });
                    }}
                  />
                  <button
                    className="btn btn-primary mt-2 px-5"
                    onClick={this.getDataFromText}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    );
  }
}
export default ChildC;
