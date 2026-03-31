export const siteConfig = {
  name: "Nandni Solanki",
  title: "Computer Graphics & VR/AR Developer",
  description: "Portfolio website of Nandni Solanki",
  accentColor: "#1B998B",
  social: {
    email: "nandnissolanki@gmail.com",
    linkedin: "https://www.linkedin.com/in/nandni-solanki/",
    github: "https://github.com/nsolankiweb",
  },
  aboutMe:
    "I'm a Computer Science graduate from Texas A&M University with a minor in Game Design and Development, specializing in computer graphics, VR/AR, and GPU programming. I enjoy building immersive experiences, and I bring care for performance and detail to full-stack web development. Currently, I'm a Graduate Intern at AGGIES Lab, contributing to AI-powered medical diagnostics research and mentoring student development teams.",
  skills: [
    "C++", "C#", "Python", "Java", "JavaScript", "HTML5", "CSS3",
    "Unity", "OpenGL", "OpenXR API", "CUDA", "Vuforia",
    "React.js", "Node.js", "Express.js", "Leaflet", "Chart.js",
    "Git", "Qt", "CMake", "OpenCV", "JavaFX", "PostgreSQL",
  ],
  projects: [
    {
      name: "TOIL – Texas Oil & Gas Well Dashboard",
      description:
        "Full-stack web application forecasting oil well production across Texas using machine learning and public Railroad Commission datasets. Features interactive Leaflet maps with hundreds of thousands of wells, advanced filtering, and Chart.js visualizations for 12–24 month production forecasts.",
      link: "https://github.com/AdarshVadlapatla/toil",
      skills: ["React", "Node.js", "Express.js", "PostgreSQL", "Leaflet", "Chart.js"],
    },
    {
      name: "Video Processing Suite",
      description:
        "CUDA-accelerated video editing application achieving 60–70x speedup over CPU processing for real-time HD video filter application. Features a Qt 6.8 desktop UI, batch processing with CUDA streams, and OpenCV integration for filters including Gaussian blur, edge detection, and Kuwahara smoothing.",
      link: "https://github.com/bshellenback/CUDA-Video-Processing-Suite",
      skills: ["C++", "CUDA", "Qt 6.8", "OpenCV 4.11", "CMake"],
    },
    {
      name: "Clockmaker's Dream",
      description:
        "VR puzzle game featuring time manipulation mechanics set in surreal clockwork environments across five challenge rooms. Built with OpenXR API — includes portal teleportation, physics-based clock assembly puzzles, haptic feedback, and a passthrough mixed-reality room.",
      link: "https://github.com/gcfidalgo/Clockmaker-s-Dream",
      skills: ["Unity", "C#", "OpenXR API"],
    },
    {
      name: "Boo-Bytes",
      description:
        "AR mobile game for Android using image recognition to create an interactive virus-hunting puzzle experience in physical environments. Selected for the SIGGRAPH 2025 Faculty Submitted Student Work Exhibit. Built with Vuforia for virtual object placement and persistence.",
      link: "https://github.com/nsolankiweb/Boo-Bytes",
      skills: ["Unity", "C#", "Vuforia"],
    },
    {
      name: "Dahlia Fields: Meet the Basement Dwellers",
      description:
        "Farming simulation game featuring a comprehensive UI system including HUD, drag-and-drop flower planting interface, seed store with inventory management, mailbox notifications, and an indoor/outdoor location system using trigger zones and state management.",
      link: "https://github.com/kaclark219/Dahlia-Fields",
      skills: ["Unity", "C#"],
    },
    {
      name: "Ray-Tracer",
      description:
        "Recursive ray tracing engine supporting spheres, planes, and OBJ mesh rendering. Features reflective surfaces, multi-point lighting with shadow casting, Phong illumination, and a bounding volume hierarchy (BVH) for optimized performance on complex scenes.",
      link: "https://github.com/nsolankiweb/Ray-Tracer",
      skills: ["C++", "OpenGL"],
    },
  ],
  experience: [
    {
      company: "AGGIES Lab",
      title: "Graduate Intern",
      dateRange: "Jan 2026 – Present",
      bullets: [
        "Conducting applied research in AI-powered stethoscope development, transitioning diagnostic models from traditional ML pipelines to self-training CNNs for improved acoustic signal classification.",
        "Assisting in the design and evaluation of model architectures suited for low-resource medical audio data.",
        "Serving as technical mentor for a student capstone team, guiding feature expansion and system refinement efforts.",
        "Facilitating cross-sector collaboration with the Texas District Attorney's office bridging AI research and real-world application.",
      ],
    },
  ],
  education: [
    {
      school: "Texas A&M University",
      degree: "B.A. Computer Science — Minor: Game Design and Development",
      dateRange: "2022 – December 2025",
      achievements: [
        "GPA: 3.705",
        "Minor in Game Design and Development",
        "CITI Program Human Research Certification, valid through September 2030",
      ],
    },
  ],
};