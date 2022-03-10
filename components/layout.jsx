import HeadMeta from "./headMeta"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ children }){
    return(
        <>
        <HeadMeta />
        <Header />
        <main>{children}</main>
        <Footer />
        </>
    )
}