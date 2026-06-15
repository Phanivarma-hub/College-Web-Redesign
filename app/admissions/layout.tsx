import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | Smt. B. Seetha Polytechnic",
  description: "Join Smt. B. Seetha Polytechnic (SBSP). Learn about our diploma programs, eligibility requirements, AP POLYCET admission basis, tuition fee structures, and scholarship options.",
};

export default function AdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
