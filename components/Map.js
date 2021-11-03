import ReactMapGL from 'react-map-gl';
import  getCenter  from 'geolib/es/getCenter';
import {useState} from 'react'


function Map({searchResults}) {
    
    const coordinates = searchResults.map((result) =>({
        latitude: result.lat, 
        longitude: result.long
    }));

    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude :center.longitude,
        zoom: 11
    });

    
    return (
        <ReactMapGL
        mapState='mapbox://styles/petrsasha/ckvjirqyikaao14o8z35u45z2'
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            
        </ReactMapGL>
    )
}

export default Map
