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
                    birthDate: { type: GraphQLString },
                    role: { type: GraphQLString },
                    sector: { type: GraphQLString },
                    phoneNumber: { type: GraphQLInt },
                    address: { type: GraphQLString },
                    cpf: { type: GraphQLInt }
                },
                resolve(parentValue, {name, birthDate, role, sector, phoneNumber, address, cpf}){
                    console.log(name);
                    console.log(moment(birthDate, 'MM-DD-YYYY').format('YYYY-MM-DD'))
                    const newPerson = new Person({
                        name,
                        birthDate: new Date(moment(birthDate, 'MM-DD-YYYY').format('YYYY-MM-DD')),
                        role,
                        phoneNumber,
                        address,
                        cpf
                    });
                    newPerson.save().then((doc) => {
                        console.log(doc);
                        return (doc);
                    }, (e)=>{
                        return {error: 'Unable to save'};
                    });
                }
            }
        }
    }
)


module.exports =  SavePerson ;