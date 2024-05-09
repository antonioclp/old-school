import { Suspense } from "react";

// Components
import StudentsGrid from "@/components/studentsGrid";

// Styles
import "@/styles/pages/app.css";

/**
 * @Development branch!
 * Front-end @version 0.1
 */
export default function Home() {
  return (
    <main className="m-app">
      <Suspense fallback={<p>Loading...</p>}>
        <StudentsGrid />
      </Suspense>
    </main>
  );
}
