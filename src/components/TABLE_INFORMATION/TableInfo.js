import React from "react";

import "./TableInfo.css";

const TableInfo = ({ flightData }) => {
  return (
    <div className="table">
      <p className="text-xl font-medium pb-5">{flightData.message}</p>
      <table className="table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-1">FLIGHT</th>
            <th className="px-6 py-1">AIRCRAFT</th>
            <th className="px-6 py-1">CLASS</th>
            <th className="px-6 py-1">FARE</th>
            <th className="px-6 py-1">ROUTE</th>
            <th className="px-6 py-1">DEPARTURE</th>
            <th className="px-6 py-1">ARRIVAL</th>
            <th className="px-6 py-1">DURATION</th>
            <th className="px-6 py-1">PRICE</th>
          </tr>
        </thead>
        <tbody>
          {flightData.flightOffer.map((flight, index) => {
            return flight.itineraries.map((itinerary, index) => {
              // Access the segments
              const firstSegment = itinerary.segments[0];
              const secondSegment = itinerary.segments[1];
              const firstRoute = itinerary.segments[0].departure.iataCode;
              const firstArrivalRoute = itinerary.segments[0].arrival.iataCode;
              const secondRoute = itinerary.segments[1].departure.iataCode;
              const secondArrivalRoute = itinerary.segments[1].arrival.iataCode;
              const firstDeparture = itinerary.segments[0].departure.at;
              const secondDeparture = itinerary.segments[1].departure.at;
              const firstArrival = itinerary.segments[0].arrival.at;
              const secondArrival = itinerary.segments[1].arrival.at;
              const firstClass = flight.class[0][0];
              const secondClass = flight.class[0][1];
              const firstFairBasics = flight.fareBasis[0][0];
              const secondFairBasics = flight.fareBasis[0][1];
              return (
                <React.Fragment key={index}>
                  <tr className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    <td className="px-6 py-4">
                      {firstSegment.marketingCarrier} {firstSegment.aircraft}
                    </td>
                    <td className="px-6 py-4">{firstSegment.flightNumber}</td>
                    <td className="px-6 py-4">{firstClass}</td>
                    <td className="px-6 py-4">{firstFairBasics}</td>
                    <td className="px-6 py-4">
                      {firstRoute} - {firstArrivalRoute}
                    </td>
                    <td className="px-6 py-4">{firstDeparture}</td>
                    <td className="px-6 py-4">{firstArrival}</td>
                    <td className="px-6 py-4">{itinerary.duration}</td>
                    <td className="px-6 py-4">{flight.price}</td>
                  </tr>
                  <tr className="border-b-4 border-red-100 {index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}">
                    <td className="px-6 py-4">
                      {secondSegment.marketingCarrier} {secondSegment.aircraft}
                    </td>
                    <td className="px-6 py-4">{secondSegment.flightNumber}</td>
                    <td className="px-6 py-4">{secondClass}</td>
                    <td className="px-6 py-4">{secondFairBasics}</td>
                    <td className="px-6 py-4">
                      {secondRoute} - {secondArrivalRoute}
                    </td>
                    <td className="px-6 py-4">{secondDeparture}</td>
                    <td className="px-6 py-4">{secondArrival}</td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4">
                      <button className="button">Select</button>
                    </td>
                  </tr>
                </React.Fragment>
              );
            });
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableInfo;
