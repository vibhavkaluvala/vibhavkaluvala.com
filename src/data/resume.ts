export type Experience = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  summary: string;
  logo?: string; // filename under /public/logos
  bullets?: string[];
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  repo?: string; // GitHub URL
};

export const experiences: Experience[] = [
  {
    company: "GE Appliances",
    role: "Incoming Software Engineer Intern",
    location: "Louisville, KY",
    start: "January 2026",
    end: "May 2026",
    summary:
      "Joining the Digital Supply Chain team to build backend and cloud features that improve reliability and throughput for internal logistics tools.",
    logo: "ge-appliances.png",
  },
  {
    company: "Connected Energy",
    role: "Software Development Engineer Intern",
    location: "Columbus, OH",
    start: "June 2025",
    end: "September 2025",
    summary:
      "Delivered Java/Spring Boot microservices for a DERMS platform and automated infra with Docker + AWS CloudFormation—cut setup time by ~35% and scaled event‑driven services to handle heavy concurrent load.",
    logo: "connected-energy.png",
  },
  {
    company: "The Ohio State University, Moritz College of Law",
    role: "AI Research Intern",
    location: "Columbus, OH",
    start: "May 2025",
    end: "August 2025",
    summary:
      "Built scraping + ETL pipelines for AI policy research and an NLP tagging workflow with ~98% accuracy, speeding up analysis and improving query performance by ~40%.",
    logo: "osu-law.png",
  },
  {
    company: "Beats by Dre",
    role: "Data Science Extern",
    location: "Culver City, CA (Remote)",
    start: "April 2025",
    end: "June 2025",
    summary:
      "Automated product‑review ingestion and ran sentiment/feature analysis in Python to surface statistically significant insights for marketing.",
    logo: "beats-by-dre.png",
  },
  {
    company: "iD Tech Camps",
    role: "Machine Learning/CS Instructor",
    location: "Campbell, CA (Remote)",
    start: "January 2025",
    end: "April 2025",
    summary:
      "Led 1‑on‑1 ML/Python/CS tutoring for 100+ students using Jupyter and OpenCV; created custom learning frameworks and improved project completion by ~25% through structured feedback and hands‑on guidance.",
    logo: "id-tech-camps.png",
  },
  {
    company: "Jazz Solutions Inc.",
    role: "Software Engineer Intern",
    location: "Ashburn, VA (Remote)",
    start: "August 2024",
    end: "December 2024",
    summary:
      "Shipped React/Node dashboards used by education analysts; modularized legacy code and added cached REST APIs to serve 10k+ records—reducing manual work and improving maintainability.",
    logo: "jazz-solutions.png",
  },
];

export const projects: Project[] = [
  {
    name: "FoodChain",
    description:
      "Full‑stack app to find nearby food pantries with real‑time search and interactive maps; geospatial queries in MongoDB improved speed by ~45% and accuracy by ~95%.",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Leaflet"],
    repo: "https://github.com/vibhavkaluvala/FoodChain",
  },
  {
    name: "Stock Price Prediction Tool",
    description:
      "Regression‑based ML model on historical data with technical indicators (MA10/MA50), achieving ~97% accuracy across 10k+ data points.",
    tags: ["Python", "Pandas", "Scikit‑Learn", "yFinance", "Matplotlib"],
    repo: "https://github.com/vibhavkaluvala/StockPredictorML",
  },
  {
    name: "Task Management App",
    description:
      "Scalable backend processing 500+ req/s with a drag‑and‑drop Kanban UI; React + Tailwind frontend on a Node/Mongo stack reduced perceived load time by ~25%.",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    repo: "https://github.com/vibhavkaluvala/TaskManager",
  },
  {
    name: "Doodle Jump (C++)",
    description:
      "Team-built replica of Doodle Jump using the OSU Proteus library and C++; implemented core gameplay, physics, and build tooling.",
    tags: ["C++", "Proteus", "Game"],
    repo: "https://github.com/vibhavkaluvala/Doodle-Jump--",
  },
];
