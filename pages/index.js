import { ContactDrawer } from "@/components/ContactDrawer"
import { DownloadSection } from "@/components/DownloadSection"
import Footer from "@/components/FooterSection"
import Navbar from "@/components/Navbar"
import { ReviewSection } from "@/components/ReviewSection"
import { ServiceProvider } from "@/components/ServiceProvider"
import Image from "next/image"

const landing = () => {
  return (
    <>
        <Navbar/>
        <section className='container mx-auto py-20'>
            <h3 className='text-white text-xl font-semibold mb-10 text-center md:text-9xl '>parcel4you</h3>
            {/* <p className='text-gray-300 text-xl text-center'> 
                Your one-stop-shop for parcel delivery fees comparisons.
            </p> */}
            <blockquote class="text-xl text-center italic font-semibold text-white">
                {/* <svg aria-hidden="true" class="w-10 h-10 text-white" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg> */}
                <p>Your one-stop-place for parcel delivery fees comparisons</p>
            </blockquote>
            <ContactDrawer/>
            <ReviewSection/>
            <ServiceProvider/>
            <DownloadSection/>
        </section>
        <Footer/>

    </>
  )
}

export default landing