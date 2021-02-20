import React from 'react';
import { Text, View, Button } from 'react-native';

const List = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> ini List </Text>

      {/* melakukan navigasi dengan onpress */}
      <Button
        title={"ke halaman Home"}
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default List