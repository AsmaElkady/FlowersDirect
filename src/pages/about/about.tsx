
import { Helmet } from "react-helmet";

export default function About(){
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About Us</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <h1>About Us</h1>
      </>
    );
}