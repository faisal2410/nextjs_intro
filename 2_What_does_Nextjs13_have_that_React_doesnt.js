/*
What does Nextjs13 have that React doesn't ?
In simple words
1.Nextjs13 simplifies the development process.
2.On top of that it optimizes your web apps
3.It does that through it's primary features.
Let's explore them one by one
👌1. Rendering : It all begins with the rendering process. The primary distinction 
between reactjs and nextjs lies on how they rendering. You already know reactjs
renders user interface on the client side while nextjs performs server side rendering.
However nextjs offers flexibility in rendering options. You can choose to render the 
ui on the client side or the server side according to your needs. Offcourse, the main 
question is what is client side and server side rendering and which one is better?

✔Client-side rendering or browser rendering happens client's device or browser.
When a user request a webpage, the server sends a basic html document and  javascript
code, the browser then download and executes the javascript code which leads rendering
the components and finally display the websites.

✔On the other hand, Server-side rendering involves rendering the webpage on the server
before transmitting it to the client's device. When a user request the page, server
processes the request and render the components on the server side. Then server sends 
back fully rendered html to the client browser enabling immediate display.

2. SEO(Search Engine Optimization): Search engine crawlers face difficulties indexing pages dynamically rendered
on the client side. As a result SEO performance of such pages may suffer. As search engine may not fully
comprehend their content and ranked them appropriately. By utilizing Nextjs13 this issue is resolved
by sending pre-rendered code directly to the client. This enables 
✔ Easy crawling
✔ Indexing by search engine 
leading to improved SEO.
Now you, might wonder, why I should prioritize SEO? SEO is crucial for optimizing a website visibility
and ranking in search engine results.By focusing on SEO you can achieve several benefits, including
✔ Increased organic traffic 
✔ Enhanced user experience
✔ Credibility and trustworthiness
✔ Competitive advantage 
due to higher search results rankings.
Prioritizing SEO can greatly impact the success of your website and its online presence. 

3. Routing : Second great Nextjs13 feature is Routing. How do we create different page routes in react?
We have to install an additional package called React-Router-Dom and then create routes in one of the files.
That's pretty simple, right?
Then how do we creates routes in Nextjs13?
Nextjs13 uses a file-based routing system which means that routing is handled by the file system.Each folder in the app directory becomes a route and the folder name becomes the route path. For example, if you have a folder name about in the app directory, you can access that page http://localhost:3000/about. Isn't that so easy?
No need for external packages or complex configurations.
You can create files for the route you want and immediately open them in your application.
Off course, we will explore this in much more detail in later on, once we dive into our own Nextjs13 application.

4. Fullstack: Another huge Nextjs13 feature is it's flexibility to create Fullstack applications.From Nextjs9 developers introduced a new feature called APIRoutes enabling the serverless functions to handle API requests to
handle API requests. Serverless APIs in Nextjs are a way of creating API endpoints without a need for a traditional server.It allows us to build deploy APIs
✔ Without managing server infrastructure
✔ Worrying about scaling their server as traffic increases
With this feature, we can create API endpoints by simply creating a file called route.js in a specific folder with in the app directory.This file in any segment of the app directly corresponds to that route API endpoint.
Once again,We're going to dive deeper into that, once we move to our real project.
One of the vice president of developer experience at Vercel Lee Robinson mention his blog post that moving from 
a typical React, express, webpack backend to Nextjs13 resulted in removing 20000+ lines of code and 30+ dependencies.While improving HMR(Hot module reloading) from 1.3seconds to 131 milliseconds which is 10x less.
Off course, I'm going to show you how to utilize Nextjs13 fullstack capabilities.

5. Automatic Code Splitting: Code Splitting is a technique that breaks large bundles of javascript code into smaller,more manageable chunks that can be loaded as needed.That's the keyword here,"When needed". This reduces the initial load time of a website and optimizes the user experience while browsing. 
While we can achieve code splitting in react, the process is manual. We have to lots of configurations as your application grows.For example, we need to use lazy function from react to dynamically import the component only once needed.We also use the suspense component to show a fallback ui when the component is being loaded.
But in Nextjs13, this process is entirely automatic. No need for any code. It uses automatic code splitting by default to split pages into separate chunks. When a user navigates to another page, only the code required for that page is loaded, resulting in faster subsequent page navigation.
So, what's the takeaway?
Frontend development has gone through various advancements in areas like
✔ Linting
✔ Formatting
✔ Compiling
✔ Bundling 
✔ Minifying
✔ Deploying and many more.
However,to avoid the time spent configuring these tools, Developers felt a need for a framework that would take care of most of the process automatically. Leaving them to concentrate on the actual code. 
Thats where Nextjs13 comes in.
✔ Automating most of the remaining processes
✔ and letting us focus on building the essential business logic of the application.

6. Features : Nextjs13 manages a variety of features such as
✔ Routing 
✔ Code Splitting
✔ Search engine optimization
✔ Rendering automatically
This automation saves a considerable amount of time, reducing the effort required to build a react app from the ground up.
👌To put it simply, Nextjs13 is an extension of React that streamline the development process by automating several functions allowing developers to focus on what they do best "Writing React Code". 

In the end, Its all React.


*/ 