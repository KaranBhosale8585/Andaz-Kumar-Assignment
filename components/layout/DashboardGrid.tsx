import HeroTile from "@/components/dashboard/HeroTile";
import CourseCard from "@/components/dashboard/CourseCard";
import ActivityTile from "@/components/dashboard/ActivityTile";

export default function DashboardGrid({ courses }: any) {
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-4
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      <HeroTile courses={courses} />

      {courses.map((course: any, index: number) => (
        <CourseCard key={course.id} course={course} index={index} />
      ))}

      <ActivityTile />
    </section>
  );
}
