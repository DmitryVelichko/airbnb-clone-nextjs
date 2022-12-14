import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  // Transform the search results object into the {latitude: 52.516272, longitude: 13.377722} object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // The latitude and longitude of the center of locations coordinates
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/dmitry19892021/cl9l0667r000k14ntahufewbu'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => {
        console.log(nextViewport);
        setViewport(nextViewport);
      }}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className='cursor-pointer text-2xl animate-bounce'
              role='img'
              aria-label='push-pin'
            >
              📌
            </p>
          </Marker>

          {/*  Show popup if the marker is clicked on*/}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
              closeOnClick={true}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
