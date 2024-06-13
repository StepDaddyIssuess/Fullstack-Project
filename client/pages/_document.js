
import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="description"
                        content="A site for demonstrating use of _document file" />
                    <meta http-equiv="Content-Type"
                        content="text/html;charset=UTF-8" />
                    <meta name="author"
                        content="GeeksForGeeks" />
                    <meta name="keywords"
                        content="NextJS,GFG,custom document next,custom app next" />
                    <link rel="shortcut icon"
                        href="favicon.ico"
                        type="image/x-icon" />
                    <link href=
                        "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                        rel="stylesheet" integrity=
                        "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                        crossorigin="anonymous" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>


                </body>
            </Html>
        )
    }
}