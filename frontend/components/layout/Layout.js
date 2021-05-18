import Header from './Header'
import Footer from './Footer'
export default function Layout({children,title}) {    
    //console.log({title},"SDSD")
    const t = title
    return (
    <div className="container max-w-sm mx-auto font-serif text-center">
      <Header title={t} />
      {children}
      <Footer />
    </div>
  )
}
