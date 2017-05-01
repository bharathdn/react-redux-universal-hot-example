export default function getWeather(req) {
  console.log("weather action called");
  const user = {
    name: req.body.zipcode
  };

}
