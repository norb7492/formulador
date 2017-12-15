import graphql from 'graphql';
import {GraphQLSchema} from 'graphql';

import RootQuery from './root_query_type';


module.exports = new GraphQLSchema({
  query: RootQuery
});
