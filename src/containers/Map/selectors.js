/**
 * Map Selectors
 * 
 * Selectors are used in containers to access and filter members of the state. This
 * is the only way that we should be retrieving data from the state.
 * 
 * NEVER mutate the state here, it could cause undesired consequences in other parts
 * of your project. If you need to filter data, always return a new object with the
 * data you need.
 * 
 * Look into reselect library if you want more selector functionality. It can be found
 * here: https://github.com/reduxjs/reselect
 */
export const markersSelector = (state) => state.map.markers;
