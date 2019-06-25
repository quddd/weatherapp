import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.image_url && (
          <img src={this.props.image_url} alt="icon"></img>
        )}
        <p>{this.props.location}</p>
        {this.props.temp_c && this.props.temp_f && (
          <p>
            {this.props.temp_c} C / {this.props.temp_f} F
          </p>
        )}
        {this.props.date}
      </div>
    );
  }
}

export default Weather;
