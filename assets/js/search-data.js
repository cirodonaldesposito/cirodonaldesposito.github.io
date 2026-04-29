// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-supervision",
          title: "supervision",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/supervision/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-honoured-to-receive-the-best-reviewer-award-2025-from-industry-and-innovation-journal",
          title: 'Honoured to receive the Best Reviewer Award 2025 from Industry and Innovation journal...',
          description: "",
          section: "News",},{id: "news-excited-to-share-that-my-paper-when-machines-meet-emotions-understanding-the-affective-side-of-ai-adoption-got-accepted-to-ipdmc-2026",
          title: 'Excited to share that my paper “When Machines Meet Emotions: Understanding the Affective...',
          description: "",
          section: "News",},{id: "news-happy-to-share-that-my-paper-competitor-similarity-scientific-orientation-and-alliance-partner-selection-a-choice-based-conjoint-experiment-got-accepted-to-euram-2026",
          title: 'Happy to share that my paper “Competitor Similarity, Scientific Orientation and Alliance Partner...',
          description: "",
          section: "News",},{id: "projects-innovation-amp-entrepreneurship",
          title: 'Innovation &amp;amp; Entrepreneurship',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-entrepreneurial-finance-amp-signaling",
          title: 'Entrepreneurial Finance &amp;amp; Signaling',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-geopolitics-amp-innovation",
          title: 'Geopolitics &amp;amp; Innovation',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-geopolitics-amp-innovation",
          title: 'Geopolitics &amp;amp; Innovation',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-geopolitics-amp-innovation",
          title: 'Geopolitics &amp;amp; Innovation',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "teachings-cases-in-entrepreneurship",
          title: 'Cases in Entrepreneurship',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/cases-in-entrepreneurship-2020/";
            },},{id: "teachings-data-driven-business-creation",
          title: 'Data-Driven Business Creation',
          description: "This course takes students step by step through the early stages of creating a data-driven business using the Lean Startup Framework.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-driven-business-creation-2026/";
            },},{id: "teachings-data-entrepreneurship-in-action",
          title: 'Data Entrepreneurship in Action',
          description: "This course guides students through the end-to-end process of launching a new data-driven venture, from team formation and idea generation to securing funding and pitching to investors.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-entrepreneurship-in-action-2025/";
            },},{id: "teachings-digital-business-models",
          title: 'Digital Business Models',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/digital-business-models-2023/";
            },},{id: "teachings-digital-business-models",
          title: 'Digital Business Models',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/digital-business-models-2024/";
            },},{id: "teachings-digital-innovation-and-entrepreneurship",
          title: 'Digital Innovation and Entrepreneurship',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/digital-innovation-and-entrepreneurship-2022/";
            },},{id: "teachings-digital-innovation-and-entrepreneurship",
          title: 'Digital Innovation and Entrepreneurship',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/digital-innovation-and-entrepreneurship-2023/";
            },},{id: "teachings-entrepreneurship-in-science-and-technology",
          title: 'Entrepreneurship in Science and Technology',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/entrepreneurship-in-science-and-technology-2022/";
            },},{id: "teachings-entrepreneurship-in-science-and-technology",
          title: 'Entrepreneurship in Science and Technology',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/entrepreneurship-in-science-and-technology-2023/";
            },},{id: "teachings-innovation-management",
          title: 'Innovation Management',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/innovation-management-2020/";
            },},{id: "teachings-innovation-management",
          title: 'Innovation Management',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/innovation-management-2021/";
            },},{id: "teachings-innovation-management",
          title: 'Innovation Management',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/innovation-management-2022/";
            },},{id: "teachings-innovation-management",
          title: 'Innovation Management',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/innovation-management-2023/";
            },},{id: "teachings-innovation-management",
          title: 'Innovation Management',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/innovation-management-2024/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/cirodonaldesposito", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Ciro-Esposito-9", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/cirodonaldesposito", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=adCva_UAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-6444-7894", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63.%64.%65%73%70%6F%73%69%74%6F@%74%69%6C%62%75%72%67%75%6E%69%76%65%72%73%69%74%79.%65%64%75", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
