import Link from "next/link"
export default function AuthLayout({children}) {
  return (
    <>
    <nav>
        <h1>WelpDesk</h1>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
    </nav>
    {children}
    </>
  )
}
