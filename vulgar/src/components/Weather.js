import React from 'react';
import City from './City';

class Weather extends React.Component {
  constructor() {
    super();
    this.updateWeather = this.updateWeather.bind(this);
    this.updateCity = this.updateCity.bind(this);
    this.state = {
      temperature: 555,
      caption: 'Hot as FUCK up in this bitch',
      city: 'London',
      details: 0
    }
  }

  componentWillMount() {
    const endpoint = 'http://api.openweathermap.org/data/2.5/weather?q=sofia&APPID=69ab23910c547dc0a33092048136adde';
    fetch(endpoint).then(blob => blob.json().then(data => {
      this.setState({city: data.name,
                     temperature: data.main.temp,
                     details: data.clouds.all         
      });
    }));
  }

  componentWillUpdate() {
    console.log(this.state);
  }

  updateCity() {
    let city = this.currentCity.value;
    this.setState({ city });
  }

  updateWeather(e) {
    e.preventDefault();
    const {city} = this.state;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=69ab23910c547dc0a33092048136adde`)
          .then(blob => blob.json().then(data => {
            this.setState({
              city: data.name,
              temperature: data.main.temp,
              details: data.clouds.all
            });
          }));
  }

  render() {
    const { temperature, caption, city } = this.state;
    return (<div className='weather-wrap'>
          <form onSubmit={this.updateWeather}>
            <input onChange={this.updateCity} type="text" ref={(input => this.currentCity = input)}/>
            <button>get it!</button>
          </form>
          <City className='cold' temperature={temperature} caption={caption} city={city}/>
    </div>);
  }
}

export default Weather;