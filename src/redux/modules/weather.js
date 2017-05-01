const GETWEATHER = 'redux-example/weather/GETWEATHER';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case GETWEATHER:
      const {count} = state;
      console.log('reached here');
      return {
        count: count + 1
      };
    default:
      return state;
  }
}

export function getWeather() {
  return {
    types: [GETWEATHER]
  };
}
