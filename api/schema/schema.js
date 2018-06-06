/**
 * @author ritesh patel
 * @description GraphQL schema. Sets various GraphQLObjectType(s) and uses resolvers with local data to fulfill the results
 */
const graphql = require('graphql'),
    _ = require('lodash'),
    parksJson = require('../data/parks.json'),
    statesJson = require('../data/states.json'),
    centerJson = require('../data/visitorcenters.json'),
    { GraphQLObjectType, 
        GraphQLString, 
        GraphQLID, 
        GraphQLInt, 
        GraphQLBoolean, 
        GraphQLNonNull,
        GraphQLSchema,
        GraphQLList,
        GraphQLEnumType 
    } = graphql,
    ParkType = new GraphQLObjectType ({
        name: 'park',
        fields: () => ({
            id: { type: GraphQLString },
            states: { type: GraphQLString },
            latLong: { type: GraphQLString },
            parkCode: { type: GraphQLString },
            description: { type: GraphQLString },
            directionsInfo: { type: GraphQLString },
            fullName: { type: GraphQLString },
            url: { type: GraphQLString },
            weatherInfo: { type: GraphQLString },
            name: { type: GraphQLString },
            designation: { type: GraphQLString },
            directionsUrl: { type: GraphQLString }
        })
    }),
    VisitorCenter = new GraphQLObjectType ({
        name: 'visitorcenter',
        fields: () => ({
            latLong: { type: GraphQLString },
            description: { type: GraphQLString },
            parkCode: { type: GraphQLString },
            directionsInfo: { type: GraphQLString },
            directionsUrl: { type: GraphQLString },
            name: { type: GraphQLString }
        })
    }),
    StateType = new GraphQLObjectType({
        name: 'us_state',
        fields: () => ({
            name: { type: GraphQLString },
            abbreviation: { type: GraphQLString }
        })
    })
    RootQuery = new GraphQLObjectType ({
        name: 'RootQueryType',
        fields: {
            // get a specific park
            park: {
                type: ParkType,
                args: { parkCode: { type: GraphQLString } },
                /**
                 * resolves to a specific park with a park code
                 * @param {Object} parent - parent object
                 * @param {Object} args - arguments object
                 */
                resolve (parent, args) {
                    // find a specific park
                    return _.find(parksJson.data, { parkCode: args.parkCode });
                }
            },

            // get listing of parks by state
            state_parks: {
                type: new GraphQLList(ParkType),
                args: { states: { type: GraphQLString } },
                /**
                 * resolves to all parks for a given state
                 * @param {Object} parent - parent object
                 * @param {Object} args - arguments object
                 */                
                resolve(parent, args) {
                    // get parks for a given state
                    return _.filter(parksJson.data, (item) => {
                        let states = item.states,
                            arr = states.split(',');

                        return arr.indexOf(args.states) !== -1;
                    });
                }
            },
            us_states: {
                type: new GraphQLList(StateType),
                /**
                 * resolves to all us states (used in left menu)
                 * @param {Object} parent - parent object
                 * @param {Object} args - arguments object
                 */                
                resolve (parent, args) {
                    // get usa states
                    return statesJson;
                }
            },
            // get visitor centers for a given park
            visitorcenters: {
                type: new GraphQLList(VisitorCenter),
                args: { parkCode: { type: GraphQLString } },
                /**
                 * resolves to all visitor centers for a given park
                 * @param {Object} parent - parent object
                 * @param {Object} args - arguments object
                 */                
                resolve(parent, args) {
                    // get visitor centers
                    return _.filter(centerJson.data, (item) => {
                        let codes = item.parkCode,
                            arr = codes.split(',');

                        return arr.indexOf(args.parkCode) !== -1;
                    });
                }
            }
        }
    });

// export schema
module.exports = new GraphQLSchema({
    query: RootQuery
});