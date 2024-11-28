import Logo from "../assets/vite.svg"

const Header = () => {
  return (
    <div className="w-full bg-[#433878] h-16 mb-10 flex items-center justify-around">
        <>
            <>
                <img src={Logo} alt="brand" />
            </>
            <div className="flex justify-center items-center text-white gap-4 font-medium">
                <h1 className="font-semibold font-mono text-xl">Logic Games 🧠</h1>
            </div>
        </>
    </div>
  )
}

export default Header