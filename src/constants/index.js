import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "work",
      title: "Clientes",
    },
    {
      id: "contact",
      title: "Contato",
    },
    {
      id: "budget",
      title: "Orçamento",
      link: "https://wa.me/5516994580303?text=Olá%20Wave%20Software%20Company,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20prestados."
    },
  ];
  
  const services = [
    {
      title: "E-commerce e Landing Pages",
      icon: creator,
    },
    {
      title: "Aplicações Mobile",
      icon: mobile,
    },
    {
      title: "Aplicações Web",
      icon: web,
    },
    {
      title: "Tecnologias 3D",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Desenvolvimento de Software Sob Medida",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Nós criamos soluções de software sob medida para atender às necessidades específicas do seu negócio. Nosso time de desenvolvedores talentosos utiliza as mais recentes tecnologias para construir sistemas eficientes e robustos que alavancam sua produtividade e eficiência operacional.", 
         ],
    },
    {
      title: "Soluções Personalizadas de TI",
      company_name: "",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Nossa expertise em TI nos permite oferecer soluções personalizadas que se alinham perfeitamente com seus objetivos de negócio. Compreendemos que cada empresa é única, por isso trabalhamos de perto com você para entender seus desafios e fornecer soluções que se adequam perfeitamente às suas necessidades." 
        ],
    },
    {
      title: "Consultoria em TI",
      company_name: "",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Oferecemos consultoria especializada em TI para ajudar sua empresa a navegar pelo cenário tecnológico em constante evolução. Nossos consultores têm uma vasta experiência na indústria e estão prontos para aconselhá-lo sobre como melhor utilizar a tecnologia para atingir seus objetivos de negócio." 
        ],
    },
    {
      title: "Suporte Técnico e Manutenção",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
      "Nós fornecemos suporte técnico e serviços de manutenção para garantir que seus sistemas estejam sempre operando com máximo desempenho. Nossa equipe de suporte está sempre pronta para resolver quaisquer problemas que possam surgir, minimizando o tempo de inatividade e garantindo a continuidade dos negócios." 
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Aluguel de carros",
      description:
        "Plataforma baseada na Web que permite aos usuários pesquisar, reservar e gerenciar aluguel de carros de vários fornecedores, fornecendo uma solução conveniente e eficiente para as necessidades de transporte.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Buscador de empregos",
      description:
        "Uma plataforma de busca de empregos que permite aos usuários pesquisar e candidatar-se a empregos, e aos empregadores postar vagas e gerenciar candidaturas.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-native",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Guia de viagens",
      description:
        "Uma plataforma de busca de empregos que permite aos usuários pesquisar e candidatar-se a empregos, e aos empregadores postar vagas e gerenciar candidaturas.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };