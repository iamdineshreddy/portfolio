export interface Education {
  level: string;
  program: string;
  institution: string;
  period: string;
  scoreLabel: string;
  score: string;
}

export const education: Education[] = [
  {
    level: "B.Tech",
    program: "Computer Science and Engineering (Data Science)",
    institution: "Sphoorthy Engineering College",
    period: "2023–2027",
    scoreLabel: "CGPA",
    score: "8.32",
  },
  {
    level: "Intermediate",
    program: "MPC",
    institution: "Narayana Junior College",
    period: "2021–2023",
    scoreLabel: "Score",
    score: "9.5",
  },
  {
    level: "SSC",
    program: "Shree Bhavishya The Montessori School",
    institution: "Shree Bhavishya The Montessori School",
    period: "2020",
    scoreLabel: "Score",
    score: "8.3",
  },
];