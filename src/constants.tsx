export const NAVBARDATA = [
    {pagename:"About",isactive:true,id:1,path:"/about"},
    {pagename:"Resume",isactive:false,id:2,path:"/resume"},
    {pagename:"Projects",isactive:false,id:3,path:"/project"},
    {pagename:"Contacts",isactive:false,id:4,path:"/contact"}
]

export const RESUMEOBJECT ={
    "name":"Mohamed Ashik",
    "role":["frontened","ui","react js","developer"],
    "desc": "Passionate about building dynamic and engaging web interfaces. I specialize in turning concepts into pixel-perfect, responsive designs using modern frameworks like React and Next.js. With a focus on clean code, performance optimization, and seamless user experiences, I transform ideas into polished, user-friendly products that bring value to users.",
    "sub_desc":"A Frontend Developer who has built numerous dynamic and responsive web applications, focusing on delivering seamless user experiences.",
    "experience":[
        {
            company: "BROADBIL TECHNOLOGIES",
            role: "",
            duration: "August 2023 - Present",
            projects: [
              {
                name: "Mautourco",
                description: [
                  "Delivered responsive, cross-browser compatible product by gathering requirements from PM/PO team",
                  "Involved in Sprint Planning and provided proper estimates for the requirements",
                  "Implemented secure code with industry standards and handled PR approvals for front-end code base",
                  "Integrated Google Maps API and Google Analytics for live tracking of trucks and history of truck routes",
                  "Reduced page load time using caching concepts with react-query for optimal user performance"
                ],
                technologies: ["Typescript", "React.js", "Redux"]
              }
            ]
          },
        {
          company: "TATA ELXSI",
          role: "UI Developer",
          duration: "Jan 2023 - july 2023",
          projects: [
            {
              name: "Truckonnect",
              description: [
                "Delivered responsive, cross-browser compatible product by gathering requirements from PM/PO team",
                "Involved in Sprint Planning and provided proper estimates for the requirements",
                "Implemented secure code with industry standards and handled PR approvals for front-end code base",
                "Integrated Google Maps API and Google Analytics for live tracking of trucks and history of truck routes",
                "Reduced page load time using caching concepts with react-query for optimal user performance"
              ],
              technologies: ["Javascript", "React.js", "Redux", "Node.js"]
            }
          ]
        },
        {
          company: "HCL Technologies",
          role: "Senior Frontend Developer",
          duration: "June 2022 - Jan 2023",
          projects: [
            {
              name: "RM Banking Application - CITI Bank",
              description: [
                "Developed UI/UX layout by translating wireframes into high-quality and reusable markup",
                "Implemented custom business logic using Backbone and followed coding conventions",
                "Delivered responsive, cross-browser compatible web application for RM users",
                "Performed end-to-end unit testing for all modules before handing over to the testing team"
              ],
              technologies: ["Javascript", "React.js", "Redux", "Node.js"]
            }
          ]
        },
        {
          company: "Hogarth Worldwide",
          role: "Associate Frontend Developer",
          duration: "August 2021 - June 2022",
          projects: [
            {
              name: "BAYER",
              description: [
                "Developed UI/UX layout and migrated old web application to Angular",
                "Followed proper coding conventions and created reusable code for application-wide use",
                "Enhanced interfaces for better functionality and mentored junior developers"
              ],
              technologies: ["Angular", "Javascript"]
            }
          ]
        },
        {
          company: "GP Strategies India Pvt Ltd",
          role: "E-Learning Developer",
          duration: "July 2019 - July 2021",
          projects: [
            {
              name: "Ralph Lauren",
              description: [
                "Created web pages as per client’s design",
                "Developed audio synchronization with text and animation",
                "Developed click and drag-drop games",
                "Worked on animation interactions using jQuery without plugins",
                "Designed and developed UI for Mobile/iPad devices"
              ],
              technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
            },
            {
              name: "Rolls Royce",
              description: [
                "Developed e-learning project for employees to learn about company productivity, safety measures, and tools",
                "Created web pages as per client’s design",
                "Developed audio synchronization with text and animation",
                "Developed click and drag-drop games"
              ],
              technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
            }
          ]
        }
    ],
    "education":[
        {
          degree: "M.Sc. Computer Science",
          institution: "University of Madras",
          duration: "2019 - 2021"
        },
        {
          degree: "B.Sc. Computer Science",
          institution: "University of Madras",
          duration: "2016 - 2019"
        },
        {
          degree: "Higher Secondary Education",
          institution: "St. Sebastian Matriculation Higher Secondary School",
          duration: "2015 - 2016"
        }
    ],
    "skills":[
        { category: "Frontend", technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js", "Redux"] },
        { category: "Backend", technologies: ["Node.js", "PHP"] },
        { category: "Database", technologies: ["MongoDB"] }
    ],
    "certification": [
        {
          title: "Certified JavaScript Developer",
          organization: "XYZ Certification Institute",
          year: 2022
        },
        {
          title: "React Professional Certification",
          organization: "ABC Tech Academy",
          year: 2021
        },
        {
          title: "MongoDB Database Specialist",
          organization: "MongoDB University",
          year: 2023
        }
    ]
}

export const ICONDETAILS ={
    "color":"#F46C38",
    "color2":"#F46C38",
    "size":25
}

export const INPUTFIELDS = [
    { id: 1, label: 'Name', type: 'text', value: '' },
    { id: 2, label: 'Email', type: 'email', value: '' },
    { id: 3, label: 'Budget', type: 'text', value: '' },
    { id: 4, label: 'Message', type: 'textarea', value: '' },
];


export const PARAHEAD_STYLE1 ={color:"#fff"}
export const PARAHEAD_STYLE2 ={width:"fit-content",color:"#fff",background:"#F46C38",padding:"5px"}
export const PARATEXT_STYLE1 ={color:"#fff",fontWeight:"700",fontSize:"20px"}
export const PARATEXT_STYLE2 ={color:"#F46C38",fontWeight:"500",fontSize:"18px"}