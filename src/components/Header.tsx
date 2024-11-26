import Logo from "../assets/vite.svg"

const Header = () => {
  return (
    <div className="w-full bg-purple-500 h-16 mb-10 flex items-center justify-around">
        <>
            <>
                <img src={Logo} alt="brand" />
            </>
            <div className="flex justify-center items-center text-white gap-4 font-medium">
                <a href="#" className="hover:text-black">Home</a>
                <a href="#" className="hover:text-black">About</a>
                <a href="#" className="hover:text-black">Contact</a>
            </div>
        </>
    </div>
  )
}

export default Header