import React from 'react'

function TodoApp () {
  return (
    <>

<div className="header-container">
              <img src="logoR.png"  className="logo"/>
            <div className="nav-bar">
                   <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="About">About</a></li>
                    <li><a href="Skills">Skills</a></li>
                    <li><a href="Projects">Projects</a></li>
                    <li><a href="todoApp">TodoApp</a></li>
                    <li><a href="Login">Login</a></li>
                </ul>
            </div>
         </div>

         <body className="body">
         

         <div className="todo">
             
             
            </div>


         


             {/* <div>
                 {InputData.map((i)=>(<Input  title={i.titl} dsc={i.description}/>))}
             </div> */}
        
             
           

         
            <div className="footer">
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
}

export default TodoApp