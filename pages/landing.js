import { DownloadSection } from "@/components/DownloadSection"
import { ReviewSection } from "@/components/ReviewSection"

const landing = () => {
  return (
    <section className='container mx-auto py-20'>
        <h3 className='text-white text-9xl font-semibold mb-10 text-center'>parcel4you</h3>
        <p className='text-gray-300 text-xl text-center'> 
            Your one-stop-shop for parcel delivery fees comparisons.
        </p>
        <ReviewSection/>
        <DownloadSection/>
    </section>
  )
}

export default landing