import Link from "next/link";
import { fetchStudents } from "@/utils/api";
import { Student } from "@/interfaces";

export default async function StudentsGrid() {
  const students: Student[] = (await fetchStudents()) || [];
  students.sort((a, b) => a.studentName.localeCompare(b.studentName));

  return (
    <main className="m-app">
      <table className="m-app-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Average</th>
            <th>English</th>
            <th>Portuguese</th>
            <th>Japanese</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0
            ? students.map((s: Student) => {
                return (
                  <tr key={s.id}>
                    <td>{s.studentName}</td>
                    <td>{s.averageGrade.toFixed(1)}</td>
                    <td>{s.englishGrade}</td>
                    <td>{s.portugueseGrade}</td>
                    <td>{s.japaneseGrade}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
      {students.length === 0 ? (
        <p>
          No students found try{" "}
          <Link href="/student/register">register a student</Link>.
        </p>
      ) : null}
    </main>
  );
}
