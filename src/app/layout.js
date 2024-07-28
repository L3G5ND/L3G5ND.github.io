import Header from "@/components/Header"
import './globals.css'
import './default.css'

export const metadata = {
    title: 'L3G5ND\'s Portfolio',
}

export default function RootLayout({children}) {
    return (
        <html>
            <body>
                <Header/>
                {children}
            </body>
        </html>
    )
}
