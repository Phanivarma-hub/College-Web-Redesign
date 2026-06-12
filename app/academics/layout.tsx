import type { Metadata } from "next";
import "./academics-scroll.css";
import "./academics-carousel.css";

export const metadata: Metadata = {
  title: "Academics & Student Development | Seetha Polytechnic College",
  description: "Explore academic programs, curriculum details, SBTET AP diploma results, academic excellence toppers, and student development workshops or clubs at Seetha Polytechnic College.",
};

export default function AcademicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
