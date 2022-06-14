
//import Input from "./Input"
function Home() {

//     const InputData=[{
//         titl:"hllo",
//         description:"sajlkttgtd"
//     },
//     {
//         titl:"hllo",
//         description:"sajlkttgtd"
//     },
//     {
//         titl:"hllo",
//         description:"sajlkttgtd"
//     }
// ]
    return(
        <>
        <div className="header-container">
            <div className="nav-bar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="About">About</a></li>
                    <li><a href="Skills">Skills</a></li>
                    <li><a href="Projects">Projects</a></li>
                    <li><a href="Login">Login</a></li>
                </ul>
            </div>
        </div>

        <div className="home">
             <div className="img-container">
                 <img src="fb.jpg" alt="" class="img"/>
             </div>
             <div className="ds">
                 <h1 className="h1">I'm software Developer</h1><br/><br/>
                 <p className="p1">
                     Hi, My name is Ntawuyirushintege Patrick am software 
                     Developer ,i have studied software Engineering and 
                     i have graduated in University of Rwanda <br/><br/>

                     
                    <button className="btn"><a href="NTAWUYIRUSHINTEGE Patrick  CV.pdf"></a>My CV</button>
                    <button className="btn"><a href="mailto:ntawuyirushintegepatrick@gmail.com"></a>Hire me</button>
                 </p>

             </div>
             {/* <div>
                 {InputData.map((i)=>(<Input  title={i.titl} dsc={i.description}/>))}
             </div> */}
        
        </div>
        </>
    )
}
export default Home
