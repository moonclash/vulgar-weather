import React from 'react';
import City from './City';
import myData from './../captions.json';
import { getRandomInt, celsiusConverter, classRenderer } from '../helpers';

class Weather extends React.Component {
  constructor() {
    super();
    this.updateWeather = this.updateWeather.bind(this);
    this.updateCity = this.updateCity.bind(this);
    this.state = {
      temperature: 555,
      caption: 'Type in a location. Bitch',
      city: 'London',
      status: 'normal'
    }
  }

  componentWillMount() {
    const endpoint = 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=69ab23910c547dc0a33092048136adde';
    fetch(endpoint).then(blob => blob.json().then(data => {
      this.setState({city: data.name,
                     temperature: celsiusConverter(data.main.temp),
                     status: classRenderer(data.main.temp),                         
      });
    }));
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
            const { temp } = data.main;
            const captions = myData[classRenderer(temp)];
            const arrLength = captions.length - 1;
            this.setState({
              city: data.name,
              temperature: celsiusConverter(temp),
              status: classRenderer(temp),
              caption: captions[getRandomInt(0,arrLength)]
            });
          }));
  }

  render() {
    const { temperature, caption, city, status } = this.state;
    return (<div className='weather-wrap'>
          <form onSubmit={this.updateWeather}>
            <input onChange={this.updateCity} type="text" ref={(input => this.currentCity = input)}/>
            <button>get it!</button>
          </form>
          <City weatherClass={status} className='cold' temperature={temperature} caption={caption} city={city}/>
    </div>);
  }
}

export default Weather;