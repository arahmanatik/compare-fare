function openTabs() {
  var arrivalDestination = document
    .getElementById("arrivalDestination")
    .value.toUpperCase();
  var arrivalDate = document.getElementById("arrivalDate").value;

  var url1 = `https://gozayaan.com/flight/list?adult=1&child=0&child_age=&infant=0&cabin_class=Economy&trips=DAC,${arrivalDestination},${arrivalDate}`;
  var url2 = `https://flightexpert.com/flight/search?tripType=O&paxType=ADT-1_CHD-0_KID-0_INF-0&cabinClass=economy&itinerary=DAC-${arrivalDestination}-${arrivalDate.replace(
    /-/g,
    "%2F"
  )}`;
  var url3 = `https://sharetrip.net/flight-search?adult=1&child=0&child2To5Count=0&child6To12Count=0&class=Economy&depart=${arrivalDate}&destination=${arrivalDestination}&destinationAirport=United%20Arab%20Emirates%2C%20DXB%20International%20Airport%20%28SHJ%29&destinationCity=${arrivalDestination}&infant=0&origin=DAC&originAirport=Bangladesh%2C%20Hazrat%20Shahajalal%20International%20Airport&originCity=Dhaka&tripType=OneWay`;

  var tab1 = window.open(url1, "_blank");

  setTimeout(function () {
    var tab2 = window.open(url2, "_blank");
  }, 1000);

  setTimeout(function () {
    var tab3 = window.open(url3, "_blank");
  }, 2000);
}
