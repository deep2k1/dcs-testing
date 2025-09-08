import serviceCad from "../assets/images/service/cad.jpg";
import serviceBim from "../assets/images/service/bim.jpg";
import serviceShop from "../assets/images/service/shop.jpg";
import service3d from "../assets/images/service/3d.jpg";

const servicesData = [
  {
    id: "cad_page",
    hero: {
      title: "CAD Services",
      para: "Comprehensive CAD drafting and modeling solutions tailored to your project needs.",
      desc: "We offer a wide range of CAD services to support your design and construction projects. Our team delivers accurate and detailed 2D drafting and detailing for better communication and visualization.",
    },
    introSection: {
      heading: "Precision CAD Solutions for Smarter Project Delivery",
      text: [
        "Our CAD services are designed to simplify your workflow and ensure accuracy at every stage. From concept to execution, we deliver drawings and models that reduce errors, save time, and help projects move forward seamlessly.",
        "We cover all aspects of CAD, from 2D drafting to advanced 3D modeling, ensuring precision and consistency across every project.",
      ],
      imageSlider: [
        "https://interscaleedu.com/en/blog/wp-content/uploads/2024/03/bim-scaler-what-is-architectural-drafting-1024x737.webp",
        "https://www.shutterstock.com/image-photo/architects-concept-engineer-architect-designer-600nw-2478691889.jpg",
      ],
    },
    servicesSection: {
      heading: "Our CAD Service Expertise.",
      description: [
        "Our Structural Modeling Services support a range of projects by ensuring accuracy, efficiency, and reliability in your designs.",
      ],
      servicesImage: serviceCad,
      servicesList: [
        {
          id: "two_d_drafting",
          title: "2D CAD Drafting",
          para: "We provide precise 2D CAD drafting services, turning your ideas into accurate technical drawings. Our drafts help architects, engineers, and designers visualize concepts clearly and streamline their projects.",
        },
        {
          id: "three_d_cad",
          title: "3D CAD Modeling",
          para: "We deliver detailed 3D CAD models that bring your concepts to life, ensuring accuracy and efficiency in design, visualization, and project execution.",
        },
        {
          id: "architectural_cad",
          title: "Architectural CAD Drafting",
          para: "Our architectural CAD drafting services provide clear, precise plans that help architects and builders translate ideas into build-ready designs.",
        },
        {
          id: "structural_cad",
          title: "Structural CAD Drafting",
          para: "We create accurate structural drafting drawings that ensure safety, reliability, and compliance in construction projects.",
        },
        {
          id: "mep_cad",
          title: "MEP CAD Drafting",
          para: "Our MEP CAD drafting services produce detailed layouts for mechanical, electrical, and plumbing systems, streamlining coordination and installation.",
        },
        {
          id: "pdf_to_cad",
          title: "PDF/Paper to CAD Conversion",
          para: "We convert PDFs or paper drawings into editable CAD files, ensuring precision, accuracy, and easy project updates.",
        },
        {
          id: "as_built",
          title: "As-Built Drawings",
          para: "Our as-built drawings capture the exact details of completed projects, providing accurate records for future maintenance or modifications.",
        },
        {
          id: "cad_documentation",
          title: "CAD Documentation",
          para: "We offer complete CAD documentation services to organize, standardize, and simplify technical data for seamless project execution.",
        },
      ],
    },
    footerSection: {
      heading: "Why Choose Draft CAD Solution?",
      description: [
        "High-accuracy 3D models built to international standards",
        "Enhanced visualization and project coordination",
        "Reduced design errors and rework",
        "Scalable modeling support with fast turnaround",
      ],
    },
  },
  {
    id: "bim_page",
    hero: {
      title: "BIM Services",
      para: "Smarter BIM solutions to optimize coordination, cost, and project delivery.",
      desc: "We provide a range of BIM services to improve accuracy and efficiency in construction. Our team delivers precise 3D models, ensuring better project coordination and minimizing errors from design to completion.",
    },
    introSection: {
      heading: "Smarter Models. Seamless Coordination. Stronger Delivery.",
      text: [
        "At Draft CAD Solution, our BIM services help architects, engineers, and contractors design and build smarter. From 3D models to clash detection and facility management, we deliver solutions that improve collaboration, reduce risks, and make construction more efficient.",
        "Our team focuses on delivering high-quality, precise MEP models that are ready for use in your design and construction processes.",
      ],
      imageSlider: [
        "https://interscaleedu.com/en/blog/wp-content/uploads/2024/03/bim-scaler-what-is-architectural-drafting-1024x737.webp",
        "https://www.shutterstock.com/image-photo/architects-concept-engineer-architect-designer-600nw-2478691889.jpg",
      ],
    },
    servicesSection: {
      heading: "Transform Your Projects with BIM Expertise",
      description: [
        "Our team specializes in end-to-end BIM support, ensuring accuracy at every stage—from design to construction and facility management. With advanced BIM tools and global project experience, we help you reduce errors, cut costs, and deliver projects on time.",
        "Our BIM Service Expertise.",
      ],
      servicesImage: serviceBim,
      servicesList: [
        {
          id: "architectural_bim",
          title: "Architectural BIM",
          para: "Our architectural BIM solutions deliver intelligent 3D models, enhancing collaboration, design accuracy, and project efficiency.",
        },
        {
          id: "revit_family_creation",
          title: "Revit Family Creation",
          para: "We create custom Revit families tailored to your project needs, ensuring flexibility and accuracy in BIM models.",
        },
        {
          id: "cad_to_bim",
          title: "CAD to BIM",
          para: "Our CAD-to-BIM service transforms 2D drawings into smart 3D models, improving visualization, coordination, and workflows.",
        },
        {
          id: "scan_to_bim",
          title: "Scan to BIM",
          para: "We convert laser scan data into precise BIM models, helping capture existing conditions for renovations or facility management.",
        },
        {
          id: "pdf_to_revit",
          title: "PDF to Revit",
          para: "Our PDF-to-Revit service converts static drawings into intelligent BIM models, ensuring better coordination and future updates.",
        },
        {
          id: "4d_bim",
          title: "4D BIM Services",
          para: "We integrate time with BIM models, enabling construction scheduling, sequencing, and improved project planning.",
        },
        {
          id: "5d_bim",
          title: "5D BIM Services",
          para: "Our 5D BIM solutions add cost data to BIM models, enhancing budgeting, forecasting, and project cost control.",
        },
        {
          id: "clash_detection",
          title: "Clash Detection",
          para: "We provide clash detection services to identify and resolve design conflicts early, reducing errors and costly rework.",
        },
        {
          id: "structural_bim_modeling_service",
          title: "Structural BIM Modeling Service",
          para: "Our structural BIM models ensure precise design, coordination, and analysis for reliable construction outcomes.",
        },
        {
          id: "bim_facility_management",
          title: "BIM Facility Management",
          para: "We deliver BIM solutions that support efficient facility management, maintenance, and lifecycle planning of buildings.",
        },
        {
          id: "bim_coordination",
          title: "BIM Coordination Services",
          para: "Our BIM coordination services align multidisciplinary models, ensuring seamless collaboration and reducing on-site conflicts.",
        },
        {
          id: "mep_bim",
          title: "MEP BIM Modeling Services",
          para: "We create detailed MEP BIM models that improve system design, integration, and project efficiency.",
        },
      ],
    },
    footerSection: {
      heading: "Why Choose Draft CAD Solution?",
      description: [
        "End-to-end BIM support under one roof",
        "Faster approvals with clash-free models",
        "Cost-effective outsourcing with global standards",
        "Experienced BIM professionals for all project types",
        "Tailored solutions for residential, commercial & industrial projects",
      ],
    },
  },
  {
    id: "shop_drawings",
    hero: {
      title: "Shop Drawings Services",
      para: "Precision-Driven Shop Drawings for Fabrication Excellence",
      desc: "Our Scan to BIM services convert point cloud data into accurate 3D models. This service is essential for renovation, retrofitting, and facility management projects, allowing you to capture the existing conditions and integrate them into BIM workflow.",
    },
    introSection: {
      heading: "Precision-Driven Shop Drawings for Fabrication Excellence",
      text: [
        "At Draft CAD Solution, we deliver highly accurate and detailed shop drawings that support architects, engineers, contractors, and fabricators across diverse projects. Our focus is on creating production-ready drawings that meet industry standards, minimize errors, and ensure smooth project execution from concept to completion.",
        "Our services ensure clear communication and reduce project delays.",
      ],
      imageSlider: [
        "https://interscaleedu.com/en/blog/wp-content/uploads/2024/03/bim-scaler-what-is-architectural-drafting-1024x737.webp",
        "https://www.shutterstock.com/image-photo/architects-concept-engineer-architect-designer-600nw-2478691889.jpg",
      ],
    },
    servicesSection: {
      heading: "Our Expertise",
      description: [
        "Our shop drawings ensure precision in fabrication and installation.",
      ],
      servicesImage: serviceShop,
      servicesList: [
        {
          id: "glazing_shop",
          title: "Glazing Shop Drawings",
          para: "Our glazing shop drawings ensure precision in fabrication and installation, supporting flawless execution.",
        },
        {
          id: "millwork_shop",
          title: "Millwork Shop Drawings",
          para: "We produce detailed millwork shop drawings for custom furniture, interiors, and fittings, ensuring accuracy in manufacturing.",
        },
        {
          id: "structural_steel",
          title: "Structural Steel Shop Drawings",
          para: "Our structural steel shop drawings provide fabrication-ready details that ensure accuracy and reduce project delays.",
        },
      ],
    },
    footerSection: {
      heading: "Why Choose Draft CAD Solution?",
      description: [
        "Precision-focused documentation tailored to client requirements",
        "Compliance with international drafting and detailing standards",
        "Reduced errors and rework through high-quality drawings",
        "Scalable services with quick turnaround time",
      ],
    },
  },
  {
    id: "3d_modeling",
    hero: {
      title: "3D Modeling Services",
      para: "Detailed 3D modeling services for visualization, design, and project execution.",
      desc: "We provide top-notch visualization services to help bring your designs to life. Our team creates realistic 3D renderings and animations that allow you to visualize projects before they are built.",
    },
    introSection: {
      heading: "Transform Your Designs into Intelligent 3D Models",
      text: [
        "At Draft CAD Solution, we provide precise and high-quality 3D Modeling Services that help architects, engineers, and contractors visualize and execute projects with confidence. Our models are developed with accuracy, ensuring they are production-ready and aligned with industry standards.",
        "From architectural designs to structural systems, our team delivers models that improve coordination, minimize errors, and enhance overall project delivery.",
      ],
      imageSlider: [
        "https://interscaleedu.com/en/blog/wp-content/uploads/2024/03/bim-scaler-what-is-architectural-drafting-1024x737.webp",
        "https://www.shutterstock.com/image-photo/architects-concept-engineer-architect-designer-600nw-2478691889.jpg",
      ],
    },
    servicesSection: {
      heading: "Our 3D Modeling Expertise",
      description: [
        "We deliver CAD and BIM-based 3D models for a variety of industries.",
      ],
      servicesImage: service3d,
      servicesList: [
        {
          id: "revit_modeling",
          title: "Revit Modeling Services",
          para: "We develop high-quality Revit models tailored to your project needs, supporting better visualization and collaboration.",
        },
        {
          id: "cad_modeling",
          title: "CAD Modeling Services",
          para: "Our CAD modeling services deliver accurate 2D and 3D designs that enhance planning and execution.",
        },
        {
          id: "sketchup_modeling",
          title: "SketchUp Modeling Services",
          para: "We create precise SketchUp models for easy visualization, design communication, and client presentations.",
        },
      ],
    },
    footerSection: {
      heading: "Why Choose Draft CAD Solution?",
      description: [
        "High-accuracy 3D models built to international standards",
        "Enhanced visualization and project coordination",
        "Reduced design errors and rework",
        "Scalable modeling support with fast turnaround",
      ],
    },
  },
];

export default servicesData;
