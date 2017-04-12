import React from 'react';
import City from './City';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      temperature: 555,
      caption: 'Hot as FUCK up in this bitch',
      city: 'London'
    }
  }

  componentWillMount() {
    const endpoint = 'http://api.openweathermap.org/data/2.5/weather?q=miami&APPID=69ab23910c547dc0a33092048136adde';
    fetch(endpoint).then(blob => blob.json().then(data => {
      this.setState({city: data.name,
                     temperature: data.main.temp,         
      });
    }));
  }

  render() {
    const { temperature, caption, city } = this.state;
    return (<div className='weather-wrap'>
          <City className='cold' temperature={temperature} caption={caption} city={city}/>
    </div>);
  }
}

export default Weather;