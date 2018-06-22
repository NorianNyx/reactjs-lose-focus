/**
 * Map Constants
 * 
 * Always keep a central location for our constants.
 * We use them in reducers, actions and sagas. So to keep
 * things clean and to avoid weird typos, we define them
 * here and import them where we need them.
 * 
 * To avoid two actions accidentally having the same type name,
 * prefix our type with 'projectname/ContainerName/TYPE_NAME
 * 
 * Example: export const MY_TYPE = 'myproject/MyContainer/MY_TYPE
 */

export const FETCH_LOCATIONS_REQUEST = 'google-maps-react-demo/Map/FETCH_LOCATIONS_REQUEST'
export const FETCH_LOCATIONS_SUCCESS = 'google-maps-react-demo/Map/FETCH_LOCATIONS_SUCCESS'
