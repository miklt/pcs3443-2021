import Header from './Header'
import Footer from './Footer'
export default function Layout({ children, title }) {
  //console.log({title},"SDSD")
  const t = title
  return (
    <div className="flex flex-col justify-between h-screen max-w-sm mx-auto text-center">
      <Header title={t} />
      {children}
      <Footer />
    </div>
  )
}
