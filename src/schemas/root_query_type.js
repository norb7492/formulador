import { GraphQLObjectType, GraphQLString } from 'graphql';

const response = {response: 'graphql is working'};

const RootResponse = new GraphQLObjectType({
    name: 'RootResponse',
    fields: () => ({
        response: { type: GraphQLString },
    })
});


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
        response: {
            type: RootResponse,
            resolve(parentValue, args){
                return response;
            }
        }
  })
});

module.exports = RootQuery;
