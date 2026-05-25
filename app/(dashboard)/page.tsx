import DashboardGrid from "@/components/layout/DashboardGrid";
import { getCourses } from "@/lib/getCourses";

export default async function HomePage() {
  const courses = await getCourses();

  return (
    <main className="p-4 md:p-6 lg:p-8">
      <DashboardGrid courses={courses} />
    </main>
  );
}
