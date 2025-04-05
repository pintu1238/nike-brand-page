const Navigation=()=>{

   return ( <nav>
        
   {/* logo ke liye  */}
  
      <div className="logo">
      <img src="/images/brand_logo.png" alt="logo" />
      </div>



<ul>
  <li href="#">Menu</li>
  <li href="#">Location</li>
  <li href="#">About</li>
  <li href="#">Contact</li>
  
</ul>

{/* login button */}
<button>Login</button>

</nav>
   )

   
};

export default Navigation;