// Portfolio Configuration File
// Edit this file to update your portfolio information easily

const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Nevil Patel",
    title: "Cybersecurity Professional",
    email: "nevilpatel6625@gmail.com",
    phone: "+1 (XXX) XXX-XXXX",
    location: "Canada",
    tagline: "Passionate about securing digital landscapes through ethical hacking, penetration testing, and innovative security solutions."
  },

  // Social Media Links
  social: {
    github: "https://github.com/nevil6625",
    linkedin: "https://www.linkedin.com/in/nevil-patel-659a751ba/",
    medium: "https://medium.com/@nevilpatel6625"
  },

  // About Section
  about: {
    description1: "With a strong foundation in computer science and specialized training in cybersecurity, I bring a comprehensive understanding of both offensive and defensive security practices.",
    description2: "My expertise spans penetration testing, vulnerability assessment, incident response, and security architecture design. I'm constantly learning and adapting to new threats and technologies in this rapidly evolving field.",
    stats: [
      { number: "50+", label: "CTF Challenges" },
      { number: "15+", label: "Security Projects" }
    ]
  },

  // Skills Section
  skills: [
    {
      category: "Penetration Testing",
      icon: "bug", // Available: bug, network, shield, code, checkcircle
      skills: [
        "Metasploit Framework",
        "Burp Suite Professional",
        "Nmap & Nessus",
        "OWASP Testing Guide"
      ]
    },
    {
      category: "Network Security",
      icon: "network",
      skills: [
        "Wireshark Analysis",
        "Firewall Configuration",
        "IDS/IPS Management",
        "Network Forensics"
      ]
    },
    {
      category: "Blue Teaming",
      icon: "shield",
      skills: [
        "SIEM Management",
        "Incident Response",
        "Threat Hunting",
        "Security Monitoring"
      ]
    }
  ],

  // Projects Section
  projects: [
    {
      title: "Ensemble Defense System (EDS)",
      description: "Hybrid based IDS (Suricata, Zeek & Stratosphere Linux IPS) with SIEM (ELK Stack) to enhance threat detection",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Ensemble Defense System architecture",
      technologies: ["Suricata", "Zeek", "ELK Stack", "IDS", "SIEM"],
      link: "#"
    },
    {
      title: "Home Lab",
      description: "Simulated a multi-layer security environment with 10+ VMs replicating Active Directory, SIEM, Firewall, and IDS, enabling practical testing of attacks and defenses.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Cybersecurity home lab setup",
      technologies: ["Snort", "pfSense", "Wireshark", "Splunk", "FlareVM", "REMnux"],
      link: "#"
    }
  ],

  // Certifications Section
  certifications: [
    {
      title: "Security+",
      organization: "CompTIA",
      status: "Completed",
      icon: "award"
    },
    {
      title: "Informatics and Security",
      organization: "Bachelor's Degree",
      status: "August 2024",
      icon: "graduationcap"
    },
    {
      title: "SC-200",
      organization: "Microsoft",
      status: "Pursuing",
      icon: "shield"
    },
    {
      title: "AI Governance",
      organization: "Securiti",
      status: "Certified",
      icon: "checkcircle"
    }
  ],

  // Blog Section
  blog: {
    description: "I regularly write about cybersecurity topics, penetration testing techniques, and security best practices on Medium.",
    buttonText: "Visit My Medium Blog"
  }
};

// Instructions for adding new items:

/* 
ADDING A NEW PROJECT:
Copy this template and add it to the projects array:

{
  title: "Your Project Name",
  description: "Description of what your project does and technologies used",
  image: "https://your-image-url.com/image.jpg",
  alt: "Description of the image for accessibility",
  technologies: ["Tech1", "Tech2", "Tech3", "Tech4"],
  link: "https://github.com/yourusername/project-repo"
}

ADDING A NEW SKILL CATEGORY:
Copy this template and add it to the skills array:

{
  category: "Your Skill Category",
  icon: "shield", // Choose from: bug, network, shield, code, checkcircle
  skills: [
    "Skill 1",
    "Skill 2", 
    "Skill 3",
    "Skill 4"
  ]
}

ADDING A NEW CERTIFICATION:
Copy this template and add it to the certifications array:

{
  title: "Certification Name",
  organization: "Issuing Organization",
  status: "Completed/In Progress/Pursuing", 
  icon: "award" // Choose from: award, graduationcap, shield, code, checkcircle
}

UPDATING SOCIAL LINKS:
Simply modify the URLs in the social object above.

UPDATING PERSONAL INFO:
Modify the values in the personal object above.
*/