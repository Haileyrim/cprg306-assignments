import Link from "next/link";

export default function Home() {
  const weekDemos = [2,3,4,5];
  const doneUpTo = 5;

  return (
    <main className="flex min-h-screen flex-col justify-between p-40">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
      </div>

        <div>
          <p>Name: Hailey Nam </p>
          <p>Course section: CPRG 306 B</p>
          <p> <Link href="https://github.com/Haileyrim">
              https://github.com</Link></p>      
        </div>

        <div className="text-lg">
          <ul>
            {weekDemos.map((week) =>
              week <= doneUpTo ? (
                <li key={week}>
                  <Link href={`/week${week}`}>Week {week} </Link>
                </li>
              ) : (
                <li key={week}>🚧 Week {week} </li>
              )
            )}
          </ul>
        </div>
      </main>
  );
}
