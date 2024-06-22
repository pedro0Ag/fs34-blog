
function Header({children}) {
  return (
    <header className="bg-blue-800">
      <nav className="mx-auto flex items-center p-6 shadow-md">
      {children}
      </nav>
    </header>
  )
}

function HeaderLink({href, title, children}) {
  return (
    <a href={href} className="font-semibold leading-6 ml-5 text-white">{title}{children}</a>
   )
}

function App() {
   return (
    <>
    <Header>
      <HeaderLink href="https://company" title="Company"/>
        <HeaderLink href="https://marketplace" title="marketplace"/>
        <HeaderLink href="https://marketplace">lojão</HeaderLink>
    </Header>
    </>
      
  )
}

export default App