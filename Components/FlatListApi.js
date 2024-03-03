/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import react, { useEffect, useState } from 'react'
import {View, Text, FlatList} from 'react-native'

const FlatListApi = () =>{
  const [data, setData] = useState([]);

  const getAPIData = async ()=>{
    const url = "https://jsonplaceholder.typicode.com/posts"
    let result = await fetch(url)
    result = await result.json()
    setData(result)
  }
  useEffect(()=>{
    getAPIData();
  },[])
  return(
    <View >
      {
        data.length ? <FlatList
        data={data}
        renderItem={({item})=><View style={{borderWidth: 2, borderColor: 'black', margin: 5}} >
          <Text style={{fontSize: 30, textAlign: 'center', color: 'red'}}>{item.id}</Text>
          <Text style={{fontSize: 30, textAlign: 'center', color: 'green'}}>{item.title}</Text>
          <Text style={{fontSize: 30, textAlign: 'center', color: 'purple'}}>{item.body}</Text>
          </View>}
        /> : null
      }
    </View>
  )
}
export default FlatListApi;