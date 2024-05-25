function Navbar(){
    return (
        <nav className='flex items-center max-w-full w-full h-16 p-2 pt-1 absolute z-10 backdrop-blur-sm' style={{background: "rgba(0, 0, 0, 0.5)"}}>
            <ul className="float-left w-3/4 flex justify-start items-center ml-16">
                <li className="p-2 hover:text-slate-500 cursor-pointer">
                    <a href="">Home</a>
                </li>
                <li className="p-2 mx-5 hover:text-slate-500 cursor-pointer">
                    <a href="">Novels</a>
                </li>
                <li className="p-2 hover:text-slate-500 cursor-pointer">
                    <a href="">Categories</a>
                </li>
            </ul>
            <div className="float-right w-1/4 flex items-center border-s max-w-52" style={{backgroundColor: "rgba(0, 0, 0, 0.1)"}}>
                <input className="text-slate-100 px-2 py-1.5 w-full bg-transparent border-none focus:outline-none" type="text" placeholder="Search"/>
            </div>
        </nav>
    )
}

export default Navbar