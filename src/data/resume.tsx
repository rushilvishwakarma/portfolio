import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine, Smile, Globe } from "lucide-react";

export const DATA = {
  name: "Rushil Vishwakarma",
  initials: "RV",
  url: "https://rushilvishwakarma.github.io",
  location: "Navi Mumbai, India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Fanatical open sourcerer and Tech Enthusiast passionate about Operating Systems, Music Production, 3D Modeling, Web Development, Product photography. I love building things and helping people.",
  summary:
    "I’m currently studying Artificial Intelligence and Machine Learning where I’m delving into cutting-edge technologies and innovative solutions. Alongside my academic pursuits, I moderate the Evolution X Custom ROM community, ensuring smooth interactions and providing technical support to users. In addition to my studies and community involvement, I’m passionate about web development. I’m currently working on a learning platform project for previous years’ question papers, focusing on clean and minimal UI design to enhance user experience. I also have a deep love for nature and animals, which influences my approach to both my professional work and personal life.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "TailwindCSS",
    "Next.js",
    "Typescript",
    "Javacript",
    "Node.js",
    "Python",
    "C",
    "Java",
    "VueJS",
    "VitePress",
    "VuePress",
    "Photoshop",
    "Premier Pro",
    "Blender",
    "Figma",
    "Android Custom ROM",
    "Hackintoshing",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://github.com/rushilvishwakarma/", icon: Smile, label: "GitHub Personal" },
    
  ],
  contact: {
    email: "rushil.edu@gmail.com",
    //tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hyperglass/",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rushil-vishwakarma",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
  ],
  education: [
    {
      school: "Jaipuriar School",
      href: "https://jaipuriarschool.org/",
      degree: "Grade 11 & 12",
      logoUrl: "/jps.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "Ramrao Adik Institute of Technology",
      href: "https://dypatil.edu/",
      degree: "2nd Year (ongoing)",
      logoUrl: "/rait.png",
      start: "2023",
      end: "Present",
    },

  ],
  projects: [
        {
      title: "The Wall",
      href: "https://wall-rait.vercel.app/",
      dates: "August 2024",
      active: true,
      description:
        "The Wall is the official literary platform of RAIT, showcasing student creativity through blogs, reviews, digital magazines, and memorable moments from campus life. It serves as a space for expression, reflection, and storytelling, all presented in a clean, accessible design.",
      technologies: [
        "React",
        "Next.js",
        "Zustand",
        "Sanity CMS",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://wall-rait.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: {
        src: "https://cdn.sanity.io/images/e71ra3i6/production/3436944d31f4928a5a4a550dee4cda79cbd4d40b-1280x720.png",
        width: 800,
        height: 800,
      },
      video: "",
    },
    {
      title: "Morphous",
      href: "https://hyperglass.github.io/morphous/",
      dates: "March 2022 - June 2022",
      active: true,
      description:
        "Created open-source documentation and a template for Custom ROM installation and fixes, designed to help anyone get started and improve their journey with Custom ROMs from scratch.",
      technologies: [
        "Javascript",
        "VueJS",
        "TailwindCSS",
        "Vitepress",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://hyperglass.github.io/morphous/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Index Source",
          href: "https://github.com/hyperglass/morphous",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: {
        src: "/morphous.png",
        width: 800,
        height: 800,
      },
      video: "",
    },
    {
      title: "Lurnit [Frontend]",
      href: "https://lurnit.netlify.app/",
      dates: "April 2024 - June 2024",
      active: true,
      description:
        "A learning platform designed to help students access previous years' question papers with a clean and minimal UI. The platform allows users to upload their own question papers.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Next.js",
        "SQLite",
        "PocketBase",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://https://lurnit.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: {
        src: "/lurnit.png",
        width: 800,
        height: 800,
      },
      video: "",
    },
  ],
  hackathons: [

    {
      title: "Logical Game in Python",
      dates: "November, 2022",
      location: "High School Mini Project",
      description:
        "Developed a 50-page code for a Python Game which accepted responses and gave appropriate predefined feedback based on the input without using any online references, in a Duo team.",
      image:
        "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png",
      links: [
          {
            title: "Partner Duo (Ruhan Dave's LinkedIn)",
            icon: <Icons.linkedin className="h-4 w-4" />,
            href: "https://www.linkedin.com/in/ruhan-dave/",
          },
        ],
    },
    {
      title: "Personal Hackintosh Speedrun & Multibooting",
      dates: "May 2023",
      location: "OpenCore, Grub2Win",
      description:
        "Created a valid config.plist file under 7 Minutes which was used to Install MacOS on a particular X86-based PC. Successfully Quadruple-booted a laptop with Windows 11, MacOS, Linux & chromeOS.",
      image:
        "https://dortania.github.io/OpenCore-Install-Guide/dortania-logo-clear.png",
      links: [
        {
          title: "GitHub Pages (Dortania)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://dortania.github.io/",
        },
      ],
    },
    {
      title: "Custom ROM Exploration & Moderation",
      dates: "September, 2022",
      location: "Evolution X",
      description:
        "Learned a lot about Custom ROM Installation & Debugging. Currently Moderating for Evolution X community.",
      image:
        "https://gitlab.com/uploads/-/system/group/avatar/5443113/50197624.png",
      links: [
        {
          title: "Discord (Evolution X)",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              style={{
                fill: 'currentColor',
              }}
            >
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
          ),
          href: "https://discord.com/invite/evolution-x",
        },
      ],
    },
    {
      title: "Custom ROM Documentation Live Demo",
      dates: "March, 2022",
      location: "Evolution X",
      description:
        "Created a documentation about Custom ROM Installation & Fixes.",
      image:
        "https://i.ibb.co/rkHDpYN/morphous-logo-prototype-dark.png",
      links: [
      ],
    },
    {
      title: "Tangerine - Local file conversion tool",
      dates: "January, 2023",
      location: "Mini Project",
      description:
        "A tool for converting local files between different formats with a Beautiful UI.",
      image:
        "https://tangerine-convert.vercel.app/orange-slice-white.svg",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://tangerine-convert.vercel.app/",
        },
      ],
    },
    {
      title: "Blaze Convert - Rag Based File & Unit Conversion Teaching Ai Assistant",
      dates: "January, 2023",
      location: "Mini Project",
      description:
        "A tool for converting local files between different formats.",
      image:
        "https://blaze-convert.vercel.app/flame.svg",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://blaze-convert.vercel.app/",
        },
      ],
    },
    {
      title: "The Wall RAIT",
      dates: "August, 2024",
      location: "Web Development & Design",
      description:
        "Developed the official Live Demo, using technologies like Next.js, Tailwind CSS, Cloudinary, Zustand & Sanity CMS. Designed social media creatives and digital artwork, boosting online presence and community engagement.",
      image:
        "https://wall-rait.vercel.app/Wall_Logo.png",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://the-wall-rait.vercel.app/",
        },
      ],
    },
    {
      title: "Google Developers Group RAIT",
      dates: "October, 2024",
      location: "Web Development Co-Head",
      description:
        "Designed and Developed the official Live Demo for GDG Hacktoberfest ‘24 & conducted Workshops.",
      image:
        "https://pbs.twimg.com/profile_images/1111678689228582913/t2k7QK3r_400x400.png",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://gdg-hacktoberfest.vercel.app/",
        },
      ],
    },
        {
      title: "Traversal Playground - Algorithm Visualizer",
      dates: "May, 2025",
      location: "Web Development Co-Head",
      description:
        "State-of-the-art Algorithm visualizer made using ReactFlow, Zustand & ECMAScript.",
      image:
        "",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://traversalplayground.vercel.app/",
        },
      ],
    },
  ],
} as const;
