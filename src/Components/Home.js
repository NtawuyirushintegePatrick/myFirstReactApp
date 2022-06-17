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
              {/* <img src="logoo.jpg"  className="logo"/> */}
            <div className="nav-bar">
                   <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="todoApp">TodoApp</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                    <li><a href="Login">Login</a></li>
                </ul>
            </div>
         </div>

         <body className="body">
         <div className="home">
             <div className="img-container">
                 <img src="fb.jpg" alt=" " className="img"/>
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
         </div>
             
         

        
            <div className="about" id="about">
            <h1 className="h1">About me</h1>
            <p className="p1">
            Innovative tech mind with 1 years of experience working as a computer programmer. 
               Capable of working with a variety of technology and software solutions,
                Valuable team member who has experience diagnosing problems and developing solutions.
                Talented leader with unique ideas and a history of successful contributions in the field.

            </p>
            </div>



            <div className="skill"  id="skills">

            <h1 className="h1">Skills</h1>
        
            <div className="skills">
            <div className="skills-img">
               <img src="skills.jpg" alt=" " className="sk-img"/>
            </div>
            <div className="project-details">
                <ul>
                  <li>
                    <h3>React js</h3>
                    <p className="percentage">50%</p>
                    <div className="pro-container">
                      <div className="progress progress-moved">
                        <div className="progress-bar">
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h3>JavaScripts</h3>
                    <p className="percentage">20%</p>
                    <div className="pro-container">
                      <div className="progress progress-moved">
                        <div className="progress-bar">
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h3>Python</h3>
                    <p className="percentage">10%</p>
                    <div className="pro-container">
                      <div className="progress progress-moved">
                        <div className="progress-bar">
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h3>WordPress</h3>
                    <p className="percentage">20%</p>
                    <div className="pro-container">
                      <div className="progress progress-moved">
                        <div className="progress-bar">
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>  
            </div>

            

        <div className="pro" id="projects">

        <div className="project">
        <h1 className="h1">Projects</h1>
        </div>
        <div className="container">
          <div className="card">
              <img src="p1.jpg" alt=""/> 
              <p>
                This Project was designed to assist the user to be 
                updated about blogs
              </p>
              <div className="bu">
              <button className="button"><p1>Read more</p1></button>
              </div>
          </div>
          <div className="card">
              <img src="p2.jpg" alt=""/>
              <p>
                This Project is strictly implemented in order to 
                assist user to schedule a time
            </p>
            <div className="bu" >
            <button className="button"><p1>Read more</p1></button>
            </div>
          </div>
          <div className="card">
              <img src="p3.jpg" alt=""/>
              <p>
                This Project has been designed for user testing
                fjdbgndfgdfgkdn
            </p>
            <div className="bu">
            <button className="button" ><p1>Read more</p1></button>
            </div>
          </div>
        </div>
        </div>
            
           



            


         


             {/* <div>
                 {InputData.map((i)=>(<Input  title={i.titl} dsc={i.description}/>))}
             </div> */}
        
             
           

         
            <div className="footer" id="contacts">
                <div className="card2">
                     <h3>Services</h3>
                     <div className="ser">
                        <ul className="li"><a href="#" className="linkser">Web Design</a></ul>
                        <ul className="li"><a href="#" className="linkser">Design with Figma</a></ul>
                        <ul className="li"><a href="#" className="linkser">Database</a></ul>
                    </div> 
                   <h>Social Media</h><br/><br/><br/><br/>
                   <div className="social">
                   <a href="https://web.facebook.com/profile.php?id=100008682602660" className="fa fa-facebook"></a>
                   <a href="#" className="fa fa-twitter"></a>
                   <a href="https://www.instagram.com/payzzo/" className="fa fa-instagram"></a>
                   <a href="#" className="fa fa-pinterest"></a>
                   <a href="https://github.com/Patrick-55" className="fa fa-github"></a>
                   </div>
                   
                </div>
                

               <div className="card2">
               <h3>Contacts</h3>
               <p>Kigali City</p>
               <p>Phone : +250728172130</p>
               <p>KG 147 St, Kigali, Rwanda</p>
               
               </div>
               <div className="card2">
               <p>Email me: </p> 
               <input type="text"  id="names" className="fullname" placeholder="Your full names"/>
               <input type="Email" id="mail" className="email" placeholder="Enter email..."/>
               <textarea id="comments" className="comment">Type your comment here.</textarea>
               <button id="button" className="sendbtn">Send</button>
               </div>

              </div>
        
            <div className="pfoot">
             <p className="pfooter">Patrick.co.ltd copyright</p>
            </div>


              
         </body>
        </>

    )
};
export default Home;
