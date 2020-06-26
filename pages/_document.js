import Document, {Head,Main,NextScript} from "next/document";

class MyDocument extends Document{
    render(){
    return(
        <html>
             <Head>
             <meta name="description" content="Simple Next.js  portfolio app"/>
             <meta charSet="utf-8"/>
             <meta name="viewport" content="width=device-width"/>
             <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js"/>
             </Head>
             <body>
                 <Main/>
                 <NextScript/>
             </body>

   

        </html>
    )
    }
}

export default MyDocument;