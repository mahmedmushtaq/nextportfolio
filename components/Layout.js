import Link from "next/Link";
import Head from "next/head";
import Nprogress from "nprogress";
import Router from "next/router";


Router.onRouteChangeStart = uri =>{
    console.log(uri);
     Nprogress.start();
}

Router.onRouteChangeCompleted = ()=>Nprogress.done();
Router.onRouteChangeError = ()=>Nprogress.done();


export default props=>{
    return(
        <div className="root">
              

            <header>
             <Link href="/"><a>Home</a></Link>
             <Link href="/about" style="color:white;"><a>About</a></Link>
             <Link href="/hireme"><a>Hire Me</a></Link>
             <Link href="/blog"><a>Blog</a></Link>
             </header>

            <h1> {props.title}</h1>

             {props.children}


           <footer>
               &copy; {new Date().getFullYear()}
           </footer>

    <style jsx>{`
      .root{
          display:flex;
          justify-content:center;
          align-items:center;
         
          flex-direction:column;
      }

       
      header{
          width:100%;
          display:flex;
          justify-content:space-around;
          padding:1em;
           background-color:indigo;
          font-size:1.25rem;
         

      }
      

     a{
         text-decoration:none;
         color:white;
     }

    

    header a:hover{
        font-weight:bold;
        color:light-grey;

    }

      footer{
          padding:1em;

      }
    
    
    `}</style>

    <style global jsx>{`
       body{
           margin:0;
           padding:0;
           overflow-x:hidden;
           background:#f0f0f0;
       }
    `}</style>
        </div>
    )
}