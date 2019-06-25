import React from "react";
import Title from "./components/Title";
import MyForm from "./components/MyForm";
import Weather from "./components/Weather";

class App extends React.Component {
  state = {
    location: undefined,
    temp_c: undefined,
    temp_f: undefined,
    date: undefined,
    image: undefined
  };
  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    const api_call = await fetch(
      "http://api.apixu.com/v1/current.json?key=1961a89eb54a4e89a0e225502190906&q=" +
        city
    );
    const response = await api_call.json();
    console.log(response);
    this.setState({
      location: response.location.name,
      temp_c: response.current.temp_c,
      temp_f: response.current.temp_f,
      date: response.location.localtime,
      image: response.current.condition.icon
    });
  };
  render() {
    return (
      <div>
        <Title />
        <MyForm getWeather={this.getWeather} />
        <Weather
          location={this.state.location}
          temp_c={this.state.temp_c}
          temp_f={this.state.temp_f}
          date={this.state.date}
          image_url={this.state.image}
        />
      </div>
    );
  }
}

export default App;
