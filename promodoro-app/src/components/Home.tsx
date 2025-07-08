import { Button } from "../UI/button"

const Home = () => {
    const handleClick = () => {
        console.log("send to login");
        window.location.href = "/login"; // Redirect to login page
    }
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <Button className="mb-4" onClick={handleClick}>
          login
        </Button>
    </div>
    </>
  )
}

export default Home