import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 40,
    longitude: -100,
    zoom: 3.5,
  });

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/dmitry19892021/cl9l0667r000k14ntahufewbu'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => {console.log(nextViewport);setViewport(nextViewport)}}
      >
    </ReactMapGL>
  );
}

export default Map;
