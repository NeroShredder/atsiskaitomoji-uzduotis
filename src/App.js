import React, { Component } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';







class App extends Component {
  constructor (props) {
      super(props);
      this.state = {
          items: [],
          isLoaded: false,
      }
  }

  componentDidMount() {

      fetch('https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places/kaunas/forecasts/long-term')
      .then(res =>res.json())
      .then (json => {
          this.setState({
              isLoaded: true,
              items: json,
          })

      });

  }

  render() {

      var { isLoaded, items } = this.state;
      if (!isLoaded) {
          return <div>Kraunasi...</div>;
      }
      // Pasileidzia, tik tada, kai json is api uzkrautas, bet ismeta klaida "items.map is not a function"
      else {
      return (
          <div className="App">
              Duomenys ikelti
              <Header/>
              <Nav/>
              <Main/>
              <Footer/>
              
              <ul>
                {items.map(item => (
                  <li key={item.forecastTimestamps}>
                    Data ir laikas: {item.forecastTimeUtc} | Oro temperatura: {item.airTemperature} | Prognoze: {item.conditionCode}
                  </li>
                ))};
              </ul>
          </div>

          
      );
      }
  }
}




export default App;
