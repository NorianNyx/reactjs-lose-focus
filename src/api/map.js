// Uncomment to include Axios
// import axios from 'axios'

/**
 * Map Api
 * 
 * This is where our ajax calls take place. We can
 * use Axios to make these calls.
 * 
 * Documentation for axios can be found here:
 * https://github.com/axios/axios
 */

class MapApi {
    //----Constructor----//
    /*  constructor(baseExternalApiUrl) {
            this.baseExternalApiUrl = baseExternalApiUrl
        } */

    //----Methods----//
    static getLocations(city) {
        //  Example Api call using Axios
        /*  return axios.get(this.baseExternalApiUrl + '/getLocations', {
                params: {
                    city: city
                }
            }).then((response) => {
                // Return resolved promise with response
                return new Promise((resolve) => {
                    resolve(response)
                })
            }).catch((err) => {
                // Do something with error
                console.error(err)
            }) */

        return new Promise((resolve) => {
            let locations = [];

            switch (city) {
                case 'Phoenix':
                    locations = [
                        { lat: 33.488069, lng: -112.072972 },
                        { lat: 33.4926138, lng: -112.07525759999999 },
                        { lat: 33.4465079, lng: -112.0974721 }
                    ];
                    break;
                case 'Tucson':
                    locations = [
                        { lat: 32.178732, lng: -110.93040589999998 },
                        { lat: 32.1632503, lng: -110.97104150000001 }
                    ];
                    break;
                default:
                    break;
            }

            resolve(locations);
        });
    }
}

export default MapApi;