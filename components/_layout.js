import Head from 'next/head'
import Link from 'next/link'

export const siteTitle = "Titus's Website";

export default function _layout({ children, home }) {
    return (
        <div class="container">
            {/* Head */}
            <Head>
                {/* <link rel="icon" href=""/> */}
                <meta 
                    name="description"
                    content="My personal website to display and showcase learned skills and more!"
                />
                <meta name="og:title" content={siteTitle} />
            </Head>

            {/* Header */}
            <header>

            </header>

            {/* Body */}
            <main>
                {children}
            </main>

            {/* Footer */}
            <footer>
                
            </footer>
        </div>
    );
}