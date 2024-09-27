type LayoutProps={
  children:React.ReactNode
}
const Layout = ({children}:LayoutProps) => {
  return (
    <div className="layout-parent">{children}</div>
  )
}

export default Layout