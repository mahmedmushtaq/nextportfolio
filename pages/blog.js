import Layout from "../components/Layout";
import Link from "next/Link";

export default props =>{
    return(
        <Layout>
            <Link as="/hello-world" href="/post?title=hello-world">
                <a>Visit  Post</a>
            </Link>
        </Layout>
    )
}