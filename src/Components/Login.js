function Login(){
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

   <form action="/" >
          {/* <!-- <div class="bigcontainer"> --> */}
            <div className="imgcontainer">
              <img src="a.jpg" alt="Avatar" class="a"/>
            </div>
          
            <div className="container">
              <label for="uname"><p>Username</p></label>
              <input type="text" placeholder="Enter Username" name="username" id="username" required/>
          
              <label for="psw"><p>Password</p></label>
              <input type="password" placeholder="Enter Password" name="password" id="password" required/>
          
              <input type="button" className="loginBtn" value="Login"  id="submit" onClick="login()" />
              <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me</input>
              </label>
            </div>
          
            <div className="container" style="background-color:#f1f1f1">
              <button type="button" class="cancelbtn">Cancel</button>
              <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
          {/* <!-- </div>   --> */}
          </form>




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

   
   
   
   
   
   
   </>
    )
}
export default Login