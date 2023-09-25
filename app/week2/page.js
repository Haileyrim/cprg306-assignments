import ShoppingList from "./studentInfo";
import Link from 'next/link'

export default function Home() {
  return (
    <main className ="flex min-h-screen flex-col justify-between p-60">
      <h1 className ="text-4xl font-bold mb-5" >My Shopping List</h1>
      <ShoppingList />
        <div>
            <p>
                <Link href="https://github.com/Haileyrim">
                    https://github.com
                </Link>
            </p>
        </div>
    </main>
  )
}
