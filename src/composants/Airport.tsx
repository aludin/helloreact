import React, { useEffect, useState } from "react";
import axios from "axios";

const axiosClient = axios.create();

type AirportResult = {
    airportName: string;
    countryName: string;
    countryCode: string;
    latitude: number;
    longitude: number;
}

const Airport = () => {
    const apiKey = "000ffa70-4f95-11ea-8966-43090514ab17";

    const [icaoCode, setIcaoCode] = useState<string>("LSGG");
    const [countryCode, setCountryCode] = useState<string>("CHE");

    const [airportName, setAirportName] = useState<string>("")
    const [countryName, setCountryName] = useState<string>("");

    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);

    const url =
        `https://applications.icao.int/dataservices/api/indicators-list?api_key=${apiKey}&state=${countryCode}&airports=${icaoCode}&format=json`

    useEffect(() => {
        axiosClient.get<Array<AirportResult>>(url).then((response) => {
            if (response.data && response.data.length > 0) {
                setAirportName(response.data[0].airportName);
                setCountryName(response.data[0].countryName);
                setLatitude(response.data[0].latitude);
                setLongitude(response.data[0].longitude);
            }
        }).catch((error) => {
            console.log("error: " + JSON.stringify(error))
        })


    }, [])





    return (
        <div style={{ display: "flex", height: "300px", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}><div style={{ marginRight: "10px" }}>Code icao</div><input value={icaoCode} /></div>
            <div style={{ display: "flex" }}><div style={{ marginRight: "10px" }}>Code pays</div><input value={countryCode} /></div>

            <div style={{ marginRight: "10px" }}>{`Country: ${countryName}`}</div>
            <div style={{ marginRight: "10px" }}>{`Airport: ${airportName}`}</div>
            <div style={{ marginRight: "10px" }}>{`Latitude: ${latitude}`}</div>
            <div style={{ marginRight: "10px" }}>{`Longitude: ${longitude}`}</div>
        </div>
    )
}

export default Airport;