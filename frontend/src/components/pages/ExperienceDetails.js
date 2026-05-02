import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../url";

export default function ExperienceDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${baseUrl}/trip/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!data) {
    return <>Loading...</>;
  }

  return (
    <div style={{ margin: "2%" }}>

      {/* Title */}
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8" style={{ textAlign: "center" }}>
          <h1>{data.tripName}</h1>
        </div>
        <div className="col-2"></div>
      </div>

      {/* Image */}
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8" style={{ textAlign: "center" }}>
          <img
            src={data.image || "https://via.placeholder.com/600x300"}
            alt="Trip"
            style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-2"></div>
      </div>

      <br />

      {/* Details Box */}
      <div className="container">
        <div className="row">
          <div className="col-3"></div>

          <div className="col-6 border bg-light p-3">

            {/* Hotel */}
            {data.nameOfHotels && (
              <div className="row">
                <div className="col-12">
                  <strong>Name of Hotel:</strong> {data.nameOfHotels}
                </div>
              </div>
            )}

            {/* Dates */}
            {(data.startDateOfJourney || data.endDateOfJourney) && (
              <div className="row">
                {data.startDateOfJourney && (
                  <div className="col-6">
                    <strong>Start Date:</strong> {data.startDateOfJourney}
                  </div>
                )}
                {data.endDateOfJourney && (
                  <div className="col-6">
                    <strong>End Date:</strong> {data.endDateOfJourney}
                  </div>
                )}
              </div>
            )}

            {/* Places */}
            {data.placesVisited && (
              <div className="row">
                <div className="col-12">
                  <strong>Places Visited:</strong> {data.placesVisited}
                </div>
              </div>
            )}

            {/* Cost */}
            {data.totalCost && (
              <div className="row">
                <div className="col-12">
                  <strong>Total Cost:</strong> ₹{data.totalCost}
                </div>
              </div>
            )}

            {/* Trip Type */}
            {data.tripType && (
              <div className="row">
                <div className="col-12">
                  <strong>Trip Type:</strong> {data.tripType}
                </div>
              </div>
            )}

            {/* Description */}
            {data.shortDescription && (
              <div className="row">
                <div className="col-12">
                  <strong>Description:</strong> {data.shortDescription}
                </div>
              </div>
            )}

          </div>

          <div className="col-3"></div>
        </div>
      </div>

      <br />

      {/* Experience */}
      {data.experience && (
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10" style={{ textAlign: "justify" }}>
            {data.experience}
          </div>
          <div className="col-1"></div>
        </div>
      )}

    </div>
  );
}
