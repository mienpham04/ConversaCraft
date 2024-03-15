import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] bg-green-300 overflow-hidden rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
      <Sidebar />

      <MessageContainer />
    </div>
  )
}

export default Home