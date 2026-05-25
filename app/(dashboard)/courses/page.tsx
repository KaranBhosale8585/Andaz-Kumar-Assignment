import CourseCard from "@/components/dashboard/CourseCard";
import { getCourses } from "@/lib/getCourses";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <main className="p-4 md:p-6 lg:p-8">
      <header>
        <p className="text-sm text-zinc-500">Learning Paths</p>

        <h1 className="mt-2 text-4xl font-bold">Active Courses</h1>
      </header>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </section>
    </main>
  );
}
