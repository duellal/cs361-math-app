'use client'

// General Imports
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

// Components
import Navigation from './__components/Navigation'
import Footer from './__components/Footer'

// Styling
import './globals.css'
import { Noto_Sans } from 'next/font/google'
import { CssBaseline } from '@mui/material'
import { useContext, useState } from 'react'
import UserContext from './_context/userContext'
import SolvedProblemsContext from './_context/solvedProblemsContext'

const notoSans = Noto_Sans({
    subsets: ['latin'], // choose subsets you need
    weight: ['400', '500', '700'], // optional weights
    display: 'swap', // avoids invisible text flash
    variable: '--font-noto-sans', // optional: sets a CSS variable
})

const mui_options = {
    enableCssLayer: true,
    key: 'css',
}

const metadata = {
    title: 'Math Practice App',
    description: 'Math app where anyone can practice their math skills!',
}

export default function RootLayout({ children }) {
    let [user, setUser] = useState(useContext(UserContext))
    let [solvedProblems, setSolvedProblems] = useState(
        useContext(SolvedProblemsContext),
    )
    console.log(
        '\nROOT LAYOUT\n\nAPP USER:\n',
        user,
        '\n\nSOLVED PROBLEMS:\n',
        solvedProblems,
    )

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/favicon/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/favicon/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/favicon/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/favicon/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/favicon/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/favicon/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/favicon/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/favicon/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/favicon/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/favicon/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicon/manifest.json" />

                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </head>

            <body>
                <UserContext value={{ user, setUser }}>
                    <AppRouterCacheProvider options={mui_options}>
                        <CssBaseline>
                            <Navigation />
                            <main>{children}</main>
                            <Footer />
                        </CssBaseline>
                    </AppRouterCacheProvider>
                </UserContext>
            </body>
        </html>
    )
}
