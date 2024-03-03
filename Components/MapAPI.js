import react, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
const MapAPI =()=>{
  const [data, setData] = useState([]);

  const getApiData = async () =>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }
  useEffect(()=>{
    getApiData();
  }, [])
  return(
    <View>
      <Text style={{fontSize: 30}}>Api Calling with Map function</Text>
      <ScrollView>
      {
        data.length ? data.map((item)=><View style={{borderColor: 'black', borderWidth: 3, margin: 3}}><Text style={{fontSize: 20, textAlign: 'center', color: 'red'}}>{item.id}</Text>
        <Text style={{fontSize: 20, textAlign:'center', color: 'green'}}>{item.title}</Text>
        </View>) : null
      }
      </ScrollView>
    </View>
  )
}
export default MapAPI;