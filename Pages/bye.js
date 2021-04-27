import React from 'react';
import {View, Text} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {bye} from '../Graphql/gql';
export default function Bye() {
  const {data, loading, error} = useQuery(bye, {
    fetchPolicy: 'network-only',
  });
  if (loading) {
    return <Text>loading....</Text>;
  }
  if (data) {
    return <Text>{JSON.stringify(data.bye)}</Text>;
  }
  if (error) {
    return <Text>err</Text>;
  }
}
