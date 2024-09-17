import NavBar from "./components/NavBar";
const App = () => {
  const appdata = {
    Appname: "M-A-X",
    Appdata: "Data"
  }
  return(
    <>
      <div className="h-auto w-auto flex flex-col justify-center  items-center">
        <NavBar data={data} />
      </div>
        

      <div className="w-screen h-screen flex items-center justify-center bg-[#00246B]">
        <div className="h-[50%] w-[20%] flex flex-col items-center justify-center rounded-[30px] bg-[#CADCFC]">
          <div className="text-violet-900 text-4xl flex align-center justify-center font-extrabold " >Sign in</div>
          <form className="w-[100%] h-[75%] flex flex-col items-center justify-center gap-5">
            <input type="text" name="username" placeholder="Username " className="bg-white w-[80%] h-[15%] rounded-[5px]"></input>
            <input type="number" name="number" placeholder="Number" className="bg-white w-[80%] h-[15%] rounded-[5px]"></input>
            <input type="password" name="password" placeholder="Password" className="bg-white w-[80%] h-[15%] rounded-[5px]"></input>
            <button type="submit" className="w-[40%] bg-blue-600 text-white rounded-[20px] h-[20%] text-">Login</button> 
          </form>
        </div>
        
      </div>
    </>
  )
}

export default App;