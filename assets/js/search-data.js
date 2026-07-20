// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-phd-research",
          title: "PhD Research",
          description: "Doctoral research in geometric algebra.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-multivector",
          title: "MultiVector",
          description: "Interactive visual environment for geometric algebra constructions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/software/multivector/";
          },
        },{id: "nav-github-repositories",
          title: "GitHub Repositories",
          description: "Projects and contributions available on GitHub.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching activities of Enzo Harquin.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-our-preprint-generalize-cross-ratios-in-n-dimensional-plane-based-geometric-algebra-is-now-available-on-hal-and-arxiv",
          title: 'Our preprint Generalize cross-ratios in n-dimensional Plane-Based Geometric Algebra is now available on...',
          description: "",
          section: "News",},{id: "news-presented-projective-geometric-algebra-powers-up-bézier-curves-at-wscg-2026",
          title: 'Presented Projective Geometric Algebra powers up Bézier Curves at WSCG 2026.',
          description: "",
          section: "News",},{id: "news-received-the-best-presentation-award-at-engage-2026-for-my-presentation-on-conic-conformal-geometric-algebra",
          title: 'Received the Best Presentation Award at ENGAGE 2026 for my presentation on Conic...',
          description: "",
          section: "News",},{id: "news-upcoming-at-agacse-2026-presentations-on-generalized-cross-ratios-and-homographies-in-plane-based-geometric-algebra",
          title: 'Upcoming at AGACSE 2026: presentations on generalized cross-ratios and homographies in Plane-Based Geometric...',
          description: "",
          section: "News",},{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/eharquin", "_blank");
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
