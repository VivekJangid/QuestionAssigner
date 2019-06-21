import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios, { post } from "axios";

export class Uploadzip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.fileUpload(this.state.file).then(response => {
      console.log(response.data);
    });
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }
  fileUpload(file) {
    const url = "http://localhost:8000/upload/";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return post(url, formData, config);
  }

  render() {
    return (
      <div className="container col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h1 className="text-center">Upload File</h1>
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group align-center">
              <span className="visible-sm visible-md visible-lg">
                <h4 className="form-group">Select File</h4>
                <br />
              </span>
              <div className="container col-md-6 m-auto">
                <input
                  className="form-group align-center "
                  type="file"
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary ">
                  Upload
                </button>
              </div>
            </div>
          </form>
          <span className="btn btn-light submit visible-sm visible-md visible-lg">
            <Link to="/login">GOTO Login</Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Uploadzip;
