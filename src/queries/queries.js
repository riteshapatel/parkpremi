/**
 * @author ritesh patel 
 * @description GraphQL queries
 */
import gql from 'graphql-tag';

// get parks for a given state
const getParksQuery = gql`
query($state_id: String){
    state_parks(states:$state_id) {
        name
        description
        latLong
        id
        designation
        directionsUrl
    }
}
`
// get all US states (used for left navigation)
const getStatesQuery = gql`
{
    us_states {
        name
        abbreviation
    }
}
`
// export queries
export {
    getParksQuery,
    getStatesQuery
};