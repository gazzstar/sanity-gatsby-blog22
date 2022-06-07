export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "629f3da76fc4ba70cea0cc32",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-22-studio-4gxxb8jw",
                  apiId: "0ec82957-d9fe-4546-82d7-3a555f2bbcc6",
                },
                {
                  buildHookId: "629f3da76fc4ba70cea0cc33",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-22-web-yxeg5dyw",
                  apiId: "cafc53c6-b612-4d71-afe1-d158494b1901",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/gazzstar/sanity-gatsby-blog22",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-22-web-yxeg5dyw.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
