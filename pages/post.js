import Layout from "../components/Layout";
import {withRouter}from "next/router";
const page =  props=>{
    console.log(props);
    return(
        <Layout>
            Post
        </Layout>
    )
}

export default withRouter(page);