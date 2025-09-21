import { Blog } from "@/types";

export const blogs: Blog[] = [
  {
    title: "Getting Started with Next.js 14",
    excerpt: "Learn about the new features and improvements in Next.js 14.",
    date: "2024-03-15",
    readTime: "5 min read",
    slug: "getting-started-with-nextjs-14",
    content: `
Next.js 14 introduces exciting improvements that make building modern web apps even easier.
Some of the highlights include:

- **App Router Enhancements**: More flexibility with layouts and nested routing.
- **Server Actions**: Simplified way to handle server-side logic directly in your components.
- **Performance Boosts**: Faster builds and page loads with the latest React optimizations.

If you’re just starting with Next.js, begin by creating a new project with \`npx create-next-app@latest\` and exploring the new App Router features.`,
  },

  {
    title: "Mastering TypeScript for React",
    excerpt:
      "A comprehensive guide to using TypeScript with React applications.",
    date: "2024-03-10",
    readTime: "8 min read",
    slug: "mastering-typescript-for-react",
    content: `
Using TypeScript with React helps catch errors early and improves developer productivity.
Here are some key benefits:

- **Strong Typing**: Define props and state clearly.
- **Better Autocomplete**: Get IntelliSense support in your editor.
- **Refactoring Confidence**: Easily update large codebases without breaking things.

Start small by typing your component props, then move on to hooks and custom types for complex apps.`,
  },
  {
    title: "Building Responsive Layouts with Tailwind CSS",
    excerpt:
      "Tips and tricks for creating responsive designs using Tailwind CSS.",
    date: "2024-03-05",
    readTime: "6 min read",
    slug: "building-responsive-layouts-with-tailwind-css",
    content: `
Tailwind CSS makes it super simple to create responsive designs.
You can use breakpoint prefixes like \`sm:\`, \`md:\`, and \`lg:\` to adjust layouts.

For example:
\`<div class="grid grid-cols-1 md:grid-cols-3">...</div>\`

This will show 1 column on mobile and 3 columns on medium screens and above.
Experiment with spacing, typography, and utilities to quickly build adaptive layouts.`,
  },

  {
    title: "Understanding React Hooks",
    excerpt: "A deep dive into React Hooks and how to use them effectively.",
    date: "2024-03-01",
    readTime: "7 min read",
    slug: "understanding-react-hooks",
    content: `
    React Hooks allow you to use state and lifecycle features without writing classes.
    The most common hooks are:
    
    - \`useState\`: Manage local component state.
    - \`useEffect\`: Run side effects like data fetching.
    - \`useContext\`: Share state across components without prop drilling.
    
    Mastering hooks will help you write cleaner and more reusable components.`,
  },

  {
    title: "Deploying Next.js Applications on Vercel",
    excerpt:
      "Step-by-step guide to deploying your Next.js applications on Vercel.",
    date: "2024-02-25",
    readTime: "4 min read",
    slug: "deploying-nextjs-applications-on-vercel",
    content: `
    Vercel is the easiest way to deploy Next.js apps since it’s built by the same team.
    To deploy:
    
    1. Push your Next.js project to GitHub.
    2. Connect your GitHub repo to Vercel.
    3. Vercel automatically builds and deploys your app.
    
    Every push to \`main\` or \`master\` will trigger a new deployment. Simple and powerful!`,
  },
  {
    title: "Building a RESTful API with Node.js and Express",
    excerpt: "Learn how to create a RESTful API using Node.js and Express.",
    date: "2024-02-20",
    readTime: "10 min read",
    slug: "building-a-restful-api-with-nodejs-and-express",
    content: `
Express is a popular framework for building APIs with Node.js.
Here’s a simple example:

\`\`\`js
import express from "express";
const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
\`\`\`

From here, you can add routes for CRUD operations, connect to a database, and secure your API with middleware.`,
  },
];
