
import { getSession, useSession, signOut } from "next-auth/react"
import NavbarUser from "@/components/NavbarUser"
import Link from "next/link"

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
      <NavbarUser loggedUsername={session.user.name} handleSignout={handleSignout}/>
      <section className='container mx-auto py-10'>
        <main className="container mx-auto text-center py-2">
                <h3 className='text-white text-4xl font-semibold mb-10 text-center md:text-9xl '>parcel4you</h3>

                <h3 className='text-4xl font-bold'>Authorize User Homepage</h3>

                <div className='details'>
                  <h5>{session.user.name}</h5>
                  <h5>{session.user.email}</h5>
                </div>

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
              premanent: false
          }
      }
  }
  // authorize user return session
  return {
      props: { session }
  }
}