export type EducationItem = {
  title: string;
  institution: string;
  meta: string;
  date: string;
  category?: "academic" | "course";
  document?: string;
};
