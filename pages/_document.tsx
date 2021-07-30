import Document, {
    Html,
    Head,
    Main,
    NextScript
} from "next/document";

class MyDocument extends Document {

    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-146649922-1" />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'UA-146649922-1');
                            `
                        }}
                    />
                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        );
    }
}

export default MyDocument;