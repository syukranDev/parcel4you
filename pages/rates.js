
import { getSession, useSession, signOut } from "next-auth/react"
import NavbarUser from "@/components/NavbarUser"
import Link from "next/link"
import EstimatedRate from "@/components/EstimatedRate"

export default () => {
  const { data: session } = useSession()

  function handleSignout(){
    signOut()
  }

  return (
      <>
        {session ? loggedInUser({session, handleSignout}) : undefined}
      </>
  )
}

function loggedInUser({session, handleSignout}) {
  return (
    <>
      <NavbarUser loggedUserDetails={[session.user.name, session.user.email]}  handleSignout={handleSignout}/>
      <section className='container mx-auto py-5'>
        <main className="container mx-auto text-center py-2">

                {/* <h3 className='text-4xl font-bold text-white'>Authorize User Homepage</h3> */}

                <div className="flex flex-row justify-center my-4">
                  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Rates
                  </button>
                  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Weight
                  </button>
                  <button type="button" class=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    TBA
                  </button>
                </div>

                <div className="flex justify-center mx-8 md:mx-0 ">
                  <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                      <form class="" action="#">
                          <h5 class="text-xl font-medium text-gray-900 font-mono mb-2">Parcel Rates Calculator</h5>

                          <hr></hr>

                          <p className="text-sm text-center my-4">Sender</p>
                          <div className="flex flex-row justify-between mb-2 ">
                              <label for="email" class=" text-sm font-medium text-gray-900 my-2 ">Postcode</label>
                              <input type="email" name="email" id="email" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Sender's Postcode" required></input>
                          </div>
                          <div className="flex flex-row justify-between mb-2 ">
                              <label for="email" class="text-sm font-medium text-gray-900 my-2 mr-6">State</label>
                              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a state</option>
                                <option value="US">Penang</option>
                                <option value="US">Selangor</option>
                                <option value="US">United States</option>
                              </select>
                          </div>
                          <div className="flex flex-row justify-between mb-2 ">
                              <label for="email" class="text-sm font-medium text-gray-900 my-2 mr-6">Country</label>
                              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected value ="MY">Malaysia</option>
                              </select>
                          </div>
                          {/* =========================================================== */}
                          <hr></hr>
                          <p className="text-center text-sm my-4">Receiver</p>
                          <div className="flex flex-row justify-between mb-2 ">
                              <label for="email" class=" text-sm font-medium text-gray-900 my-2 ">Postcode</label>
                              <input type="email" name="email" id="email" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Receiver's Postcode" required></input>
                          </div>
                          <div className="flex flex-row  justify-between mb-2">
                              <label for="email" class="text-sm font-medium text-gray-900 my-2 mr-6">State</label>
                              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a state</option>
                                <option value="US">Penang</option>
                                <option value="US">Selangor</option>
                                <option value="US">United States</option>
                              </select>
                          </div>
                          <div className="flex flex-row justify-between mb-2">
                              <label for="email" class="text-sm font-medium text-gray-900 my-2 mr-6">Country</label>
                              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected value ="MY">Malaysia</option>
                              </select>
                          </div>

                          <hr></hr>
                          <p className="text-center text-sm my-4">Parcel Dimension</p>
                          <div class="grid md:grid-cols-3 md:gap-6">
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Height</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Width</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_company" class="border peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Length</label>
                            </div>
                          </div>

                          <hr className="my-4"></hr>
                          <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Calculate</button>
                      </form>
                  </div>
                </div>

                {/* <div className='details'>
                  <h5>{session.user.name}</h5>
                  <h5>{session.user.email}</h5>
                </div> */}

                <EstimatedRate/>
        </main>
      </section>
    </>
   
  )
}

export async function getServerSideProps({ req }){
  const session = await getSession({ req })

  if(!session){
      return {
          redirect : {
              destination : "/login",
              permanent: false
          }
      }
  }
  // authorize user return session
  return {
      props: { session }
  }
}