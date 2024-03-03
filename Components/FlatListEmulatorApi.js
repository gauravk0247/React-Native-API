import react, { useEffect, useState } from 'react'
import {View, Text, FlatList} from 'react-native'
const FlatListEmulatorApi = ()=>{
  const [data, setData] = useState([]);
  const getAPIData = async () =>{
    const url = "http://192.168.0.119:3000/users"
    let result = await fetch(url);
    result = await result.json();
    setData(result)
  }
  useEffect(()=>{
    getAPIData();
  })
  return(
    <View>
      <Text>Api Data</Text>
      {
        data.length ? <FlatList 
        data={data}
        renderItem={({item})=><View>
          <Text style={{fontSize: 30}}>{item.id}</Text>
          <Text style={{fontSize: 30}}>{item.name}</Text>
          <Text style={{fontSize: 30}}>{item.age}</Text>
          <Text style={{fontSize: 30}}>{item.email}</Text>
          </View>}
        /> : null
      }
    </View>
  )
}
export default FlatListEmulatorApi;