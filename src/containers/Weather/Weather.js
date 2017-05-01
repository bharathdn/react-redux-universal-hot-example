import React, {Component} from 'react';

export default class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zipcode: '94041',
      weatherData: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const zipCode = this.state.zipcode;
    if (zipCode.length === 5) {
      if (!isNaN(zipCode)) {
        // this.props.actions.getWeather(zipCode);
      }
    }
  }

  render() {
    return (
      <div>
        <input type="text"
               defaultValue={this.state.zipcode}
               value={this.state.zipcode} />
        <input type="submit"
               onClick={this.handleSubmit} />
      </div>
    );
  }
}
