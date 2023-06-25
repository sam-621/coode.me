import { PrismaClient } from '@prisma/client';

export const seedTopic = async (prisma: PrismaClient) => {
  // Always reset table to avoid duplicated records
  await prisma.topic.deleteMany();

  console.log('Creating Topics...');
  const result = await prisma.$transaction(topics.map(t => prisma.topic.create({ data: t })));

  console.log({
    result
  });
};

const topics = [
  {
    title: '#webdev',
    description: 'Because the internet...',
    color: '562765'
  },
  {
    title: '#javascript',
    description:
      "Once relegated to the browser as one of the 3 core technologies of the web, JavaScript can now be found almost anywhere you find code. JavaScript developers move fast and push software development forward; they can be as opinionated as the frameworks they use, so let's keep it clean here and make it a place to learn from each other!",
    color: 'f7df1e'
  },
  {
    title: '#beginners',
    description: '"A journey of a thousand miles begins with a single step." -Chinese Proverb',
    color: '008335'
  },
  {
    title: '#programming',
    description: 'The magic behind computers. 💻 🪄',
    color: '890606'
  },
  {
    title: '#tutorial',
    description:
      "Tutorial is a general purpose tag. We welcome all types of tutorial - code related or not! It's all about learning, and using tutorials to teach others!",
    color: 'feffa5'
  },
  {
    title: '#react',
    description:
      "Official tag for Facebook's React JavaScript library for building user interfaces",
    color: '222222'
  },
  {
    title: '#python',
    description: 'import antigravity',
    color: '1e38bb'
  },
  {
    title: '#devops',
    description:
      'Content centering around the shifting left of responsibility, deconstruction of responsibility silos, and the automation of repetitive work tasks.',
    color: '06b500'
  },
  {
    title: '#productivity',
    description:
      'Productivity includes tips on how to use tools and software, process optimization, useful references, experience, and mindstate optimization.',
    color: '2a0798'
  },
  {
    title: '#aws',
    description:
      'Amazon Web Services (AWS) is a collection of web-services for computing, storage, machine learning, security, and more There are over 150+ AWS service with new services being announced yearly.',
    color: '212b3a'
  },
  {
    title: '#discuss',
    description: 'Craft a prompt and start a conversation!',
    color: '1ad643'
  },
  {
    title: '#css',
    description:
      'Cascading Style Sheets (CSS) is a simple language for adding style (e.g., fonts, colors, spacing) to HTML documents. It describes how HTML elements should be displayed.',
    color: '2965f1'
  },
  {
    title: '#opensource',
    description:
      'May The Source Be With You! Articles about Open Source and Free Software as a philosophy, and its application to software development and project management.',
    color: '26be00'
  },
  {
    title: '#typescript',
    description: 'Optional static type-checking for JavaScript.',
    color: '234a84'
  },
  {
    title: '#node',
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    color: '3d8836'
  },
  {
    title: '#career',
    description:
      'This tag is for anything relating to careers! Job offers, workplace conflict, interviews, resumes, promotions, etc.',
    color: '2a2566'
  },
  {
    title: '#codenewbie',
    description: 'The most supportive community of programmers and people learning to code.',
    color: '8f13fc'
  },
  {
    title: '#api',
    description: 'Application Programming Interface',
    color: '9725ea'
  },
  {
    title: '#html',
    description:
      'Hypertext Markup Language — the standard markup language for documents designed to be displayed in a web browser.',
    color: 'f53900'
  },
  {
    title: '#news',
    description:
      'Expect to see announcements of new and updated products, services, and features for languages & frameworks. You also will find high-level news relevant to the tech and software development industry covered here.',
    color: '111111'
  },
  {
    title: '#testing',
    description: 'Find those bugs before your users do! 🐛',
    color: '019b65'
  },
  {
    title: '#ai',
    description:
      'Artificial intelligence leverages computers and machines to mimic the problem-solving and decision-making capabilities found in humans and in nature.',
    color: '2d2a2a'
  },
  {
    title: '#cloud',
    description: 'There is no cloud, only other peoples computers.',
    color: 'ff9900'
  },
  {
    title: '#java',
    description:
      'More than just a cup of coffee, Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
    color: '7e4810'
  },
  {
    title: '#security',
    description: 'Hopefully not just an afterthought!',
    color: '1bac80'
  },
  {
    title: '#github',
    description: '"Where the world builds software"',
    color: '000000'
  },
  {
    title: '#blockchain',
    description:
      'A decentralized, distributed, and oftentimes public, digital ledger consisting of records called blocks that are used to record transactions across many computers so that any involved block cannot be altered retroactively, without the alteration of all subsequent blocks.',
    color: '113a62'
  },
  {
    title: '#android',
    description: 'Brought to you by the good folks at Google...',
    color: '56a036'
  },
  {
    title: '#php',
    description: 'Home for all the PHP-related posts on Dev.to!',
    color: '23a1aa'
  },
  {
    title: '#database',
    description: 'Posts on building, using, and learning about databases.',
    color: 'ed1556'
  },
  {
    title: '#docker',
    description:
      'Stories about Docker as a technology (containers, CLI, Engine) or company (Docker Hub, Docker Swarm).',
    color: '73c7e6'
  },
  {
    title: '#kubernetes',
    description:
      'An open-source container orchestration system for automating software deployment, scaling, and management.',
    color: '326de6'
  },
  {
    title: '#development',
    description: '6513 posts published',
    color: '3b49df'
  },
  {
    title: '#learning',
    description: '“I have no special talent. I am only passionately curious.” - Albert Einstein',
    color: 'ff66ed'
  },
  {
    title: '#machinelearning',
    description:
      'A branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.',
    color: 'e5ffe3'
  },
  {
    title: '#frontend',
    description: `"If you're already a front-end developer, well, pretend you're also wearing a pirate hat." - Ethan Marcotte`,
    color: 'ff33e0'
  },
  {
    title: '#dotnet',
    description:
      '.NET is an open source developer platform, created by Microsoft, for building many types of applications. With .NET, you can use multiple languages, editors, and libraries to build for web, mobile, desktop, gaming, and IoT. Find more at https://dot.net',
    color: '512ad5'
  },
  {
    title: '#datascience',
    description: 'Data Science allows us to extract meaning from and interpret data.',
    color: '009999'
  },
  {
    title: '#go',
    description: 'A statically typed, compiled programming language designed at Google',
    color: '29beb0'
  },
  {
    title: '#csharp',
    description: 'Official tag for the C# programming language.',
    color: '07cd00'
  },
  {
    title: '#angular',
    description: "One of the world's most popular frontend JavaScript frameworks.",
    color: 'a9022a'
  },
  {
    title: '#ruby',
    description: 'This tag is for posts related to the Ruby language, including its libraries.',
    color: 'cc342d'
  },
  {
    title: '#mobile',
    description: 'iOS, Android, and any other types of mobile development... all are welcome!',
    color: 'a3fc55'
  },
  {
    title: '#nextjs',
    description:
      'Next.js gives you hybrid static and server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
    color: '000000'
  },
  {
    title: '#git',
    description:
      'Software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.',
    color: 'f54d27'
  },
  {
    title: '#vue',
    description: 'Official tag for the Vue.js JavaScript Framework',
    color: '41b883'
  },
  {
    title: '#coding',
    description: 'while (!(succeed = try()))',
    color: 'af27f2'
  },
  {
    title: '#serverless',
    description: 'All computing — without servers!',
    color: '1c1c1c'
  },
  {
    title: '#laravel',
    description: 'A PHP web application framework with expressive, elegant syntax.',
    color: 'dc2d17'
  },
  {
    title: '#azure',
    description: 'The dev.to tag for Microsoft Azure, the Cloud Computing Platform.',
    color: '007fff'
  },
  {
    title: '#softwareengineering',
    description: '2872 posts published',
    color: '3b49df'
  },
  {
    title: '#rails',
    description: 'Ruby on Rails is a popular web framework that happens to power dev.to ❤️',
    color: 'cc0000'
  },
  {
    title: '#linux',
    description: 'What are clouds made of? Linux servers, mostly.',
    color: '000000'
  },
  {
    title: '#architecture',
    description: 'The fundamental structures of a software system.',
    color: 'ebdf37'
  },
  {
    title: '#showdev',
    description: "Show off what you've built!",
    color: '091b47'
  },
  {
    title: '#postgres',
    description:
      'Posts on tips and tricks, using and learning about PostgreSQL for database development and analysis.',
    color: 'ed1556'
  },
  {
    title: '#sql',
    description:
      'Posts on tips and tricks, using and learning about SQL for database development and analysis.',
    color: 'ed1556'
  },
  {
    title: '#design',
    description: 'More than just making things look nice...',
    color: '06ff6a'
  },
  {
    title: '#web3',
    description:
      'Web3 refers to the next generation of the internet that leverages blockchain technology to enable decentralized and trustless systems for financial transactions, data storage, and other applications.',
    color: '00ffdc'
  },
  {
    title: '#rust',
    description:
      'This tag is for posts related to the Rust programming language, including its libraries.',
    color: 'd4a174'
  },
  {
    title: '#web',
    description: '4054 posts published',
    color: '3b49df'
  },
  {
    title: '#wordpress',
    description: 'the world’s most popular website builder',
    color: '108ec2'
  },
  {
    title: '#gamedev',
    description: '👾 👾 👾',
    color: '6a009f'
  },
  {
    title: '#chatgpt',
    description:
      'GPT models are capable of natural language processing tasks such as text generation, summarization, and analysis. ChatGPT interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer follow-up questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.',
    color: '767676'
  },
  {
    title: '#algorithms',
    description:
      "Heap, Binary Tree, Data Structure it doesn't matter. This tag should be used for anything Algorithm & Data Structure focused.",
    color: '008000'
  },
  {
    title: '#codepen',
    description: 'A social development environment for front-end designers and developers.',
    color: 'ad20a3'
  },
  {
    title: '#automation',
    description: '3234 posts published',
    color: '3b49df'
  },
  {
    title: '#cpp',
    description: 'Official tag for the C++ programming language.',
    color: '014784'
  },
  {
    title: '#archlinux',
    description: 'A lightweight and flexible Linux distribution that tries to Keep It Simple.',
    color: '0099bd'
  },
  {
    title: '#flutter',
    description:
      'An open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.',
    color: '56c5f6'
  },
  {
    title: '#community',
    description: '3685 posts published',
    color: 'f79600'
  },
  {
    title: '#ios',
    description:
      "This tag is for anything related to Apple's iOS devices, operating system, and development environment. Development, usage, apps, tips, requests for help: if it's related to iOS it's welcome here!",
    color: '0c76e2'
  },
  {
    title: '#devjournal',
    description: 'Dear Diary...',
    color: '820000'
  },
  {
    title: '#startup',
    description:
      'A company or project undertaken by an entrepreneur to seek, develop, and validate a scalable business model.',
    color: 'e6fffb'
  },
  {
    title: '#vscode',
    description: "Official tag for Visual Studio Code, Microsoft's open-source editor",
    color: '3ca5ea'
  },
  {
    title: '#watercooler',
    description: 'Light, and off-topic conversation.',
    color: 'd0ecff'
  },
  {
    title: '#writing',
    description: '"Writing is the best way to talk without being interrupted." - Jules Renard',
    color: '8bebff'
  },
  {
    title: '#computerscience',
    description:
      'This tag is for sharing and asking questions about anything related to computer science, including data structures, algorithms, research, and white papers! 🤓',
    color: 'd98cd9'
  },
  {
    title: '#cybersecurity',
    description: 'Articles related to cybersecurity and much more',
    color: 'e3ff00'
  },
  {
    title: '#interview',
    description: '4054 posts published',
    color: '3b49df'
  },
  {
    title: '#reactnative',
    description:
      'An open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications.',
    color: '1ddbe7'
  },
  {
    title: '#actionshackathon21',
    description:
      'This tag is for submissions and content related to the DEV x GitHub Actions Hackathon 2021. Details on contest rules, key dates, and more below. .',
    color: '5931c9'
  },
  {
    title: '#performance',
    description: 'Tag for content related to software performance.',
    color: 'ffa364'
  },
  {
    title: '#cryptocurrency',
    description: '3762 posts published',
    color: '3b49df'
  },
  {
    title: '#backend',
    description: '1987 posts published',
    color: '3b49df'
  },
  {
    title: '#google',
    description: '3885 posts published',
    color: '3b49df'
  },
  {
    title: '#mongodb',
    description: 'A popular NoSQL database',
    color: '7bcc7c'
  },
  {
    title: '#help',
    description:
      "A place to ask questions and provide answers. We're here to work things out together.",
    color: 'ff3232'
  },
  {
    title: '#tailwindcss',
    description: 'A utility-first CSS framework',
    color: '000000'
  },
  {
    title: '#kotlin',
    description:
      'a cross-platform, statically typed, general-purpose programming language with type inference',
    color: '1b1865'
  },
  {
    title: '#microservices',
    description:
      'An architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs',
    color: '000000'
  },
  {
    title: '#developer',
    description: '3005 posts published',
    color: '3b49df'
  },
  {
    title: '#data',
    description: '1654 posts published',
    color: '3b49df'
  },
  {
    title: '#graphql',
    description: 'GraphQL is a query language and execution engine for client‐server applications',
    color: '171e26'
  },
  {
    title: '#100daysofcode',
    description:
      'The 100 Days of Code is a coding challenge created by Alexander Kallaway to encourage people to learn new coding skills.',
    color: '004d4d'
  },
  {
    title: '#bash',
    description: 'Bourne Again Shell',
    color: '943d3b'
  },
  {
    title: '#swift',
    description: 'a programming language created by Apple for building iOS and Mac apps',
    color: 'ea4e28'
  },
  {
    title: '#tooling',
    description:
      'Working with a new tool you want to share? Created a new workflow for a task? Found some great configurations? Share them with the community!',
    color: 'c1d82f'
  },
  {
    title: '#code',
    description: '2880 posts published',
    color: '3b49df'
  },
  {
    title: '#spanish',
    description: 'La etiqueta oficial para post en español.',
    color: 'fcb318'
  }
];
