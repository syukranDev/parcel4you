
import { useState, useEffect } from "react"

const EstimatedRate =  () => {

    const [rates, setRates] = useState([])
    // const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      const fetchRates = async() => {
        const res = await fetch('/api/calculator')
        const data = await res.json()
        setRates(data)
        // setLoading(false)

        console.log(data)
      }
  
      fetchRates()
    }, [])


    // if (loading) { return <LoadingPage/>} //loading component not yet develop

    return (

        <div className="flex justify-center  md:mx-0 ">
            <div class="mt-6 w-3/4 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">

        
                <h1 className='text-left mt-6 text-4xl font-mono ml-4 mb-20'>Estimated Price by Courier</h1>

               

              
                {
                    rates.map( rate => (
                        <div className="flex flex-row justify-between text-sm mx-0 md:mx-32 mt-5">
                        <p className="text-left ">{rate.serviceName} </p>
                        <p>MYR {rate.price} <span className="invisible md:visible"> (includes service tax 6%)</span></p>
                        </div>
                        
                    ))
                }

            </div>
        </div>
    )
}

export default EstimatedRate