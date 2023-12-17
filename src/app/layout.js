import Header from "@/components/Header"
import Footer from "@/components/Footer"
import styles from "./style.module.css"
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
