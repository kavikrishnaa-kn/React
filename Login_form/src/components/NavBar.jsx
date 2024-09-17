const NavBar = ({ appname }) => {
    console.log(appname)
    return (
        <div className="w-[100%] h-3/5 bg-cyan-500 text-orange-800 flex justify-center align-center">
            {appname}
        </div>

    )
}
export default NavBar;