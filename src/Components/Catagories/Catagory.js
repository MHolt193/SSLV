import { useEffect, useState } from "react"
import apiKey from '../../key'

const Catagory = (props) => {
  const [apiResults, setReslts] = useState(null)
    useEffect(()=>{
        fetch(`https://api.watchmode.com/v1/list-titles/?apiKey=${apiKey}&source_ids=203,157,26`)
            .then(response => response.json)
            .then((json) => {
                setReslts(json);
            })
    },[])
    console.log(apiResults)
    return(
        <>

        </>
    )
}

export default Catagory