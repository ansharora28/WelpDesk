import Link from "next/link"
export default function NotFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">Whoopsie Daisies!</h2>
        <p className="text-xl">We couldn't find the page you were looking for.</p>
        <p>Go back to <Link href="/">Dashboard</Link></p>
    </main>
  )
}
