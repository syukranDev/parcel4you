import { ContactDrawer } from "@/components/ContactDrawer"
import { DownloadSection } from "@/components/DownloadSection"
import { ReviewSection } from "@/components/ReviewSection"
import { ServiceProvider } from "@/components/ServiceProvider"
import Image from "next/image"

const landing = () => {
  return (
      <section className='container mx-auto py-20'>
        <h3 className='text-white text-xl font-semibold mb-10 text-center md:text-9xl '>parcel4you</h3>
        {/* <p className='text-gray-300 text-xl text-center'> 
            Your one-stop-shop for parcel delivery fees comparisons.
        </p> */}
        
    </section>
  )
}

export default landing