import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';
import moment from 'moment';

import RootResponse from './person';
import {Person} from './../model/person';


const response = {response: 'mutation worked'};

const SavePerson = new GraphQLObjectType(
    {
        name: 'Mutation',
        fields: {
            addPerson: {
                type: RootResponse,
                args: {
                    name: { type: new GraphQLNonNull(GraphQLString) },
                    email: { type: new GraphQLNonNull(GraphQLString) },
                    birthDate: { type: GraphQLString },
                    role: { type: GraphQLString },
                    sector: { type: GraphQLString },
                    phoneNumber: { type: GraphQLInt },
                    address: { type: GraphQLString },
                    cpf: { type: GraphQLInt }
                },
                resolve(parentValue, {name, email, birthDate, role, sector, phoneNumber, address, cpf}){
                    const newPerson = new Person({
                        name,
                        email,
                        birthDate: new Date(moment(birthDate, 'MM-DD-YYYY').format('YYYY-MM-DD')),
                        role,
                        sector,
                        phoneNumber,
                        address,
                        cpf
                    });
                    return newPerson.save()
                }
            }
        }
    }
)


module.exports =  SavePerson ;