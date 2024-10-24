import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Law Chatbot ',
        description: "Developed a sophisticated law chatbot using LangChain and Ollama that automates the creation of case briefings based on user prompts. Leveraged natural language processing (NLP) techniques to extract and summarize key legal information, ensuring comprehensive and accurate briefings. Designed and implemented the chatbot’s architecture, including prompt recognition, data retrieval, and summarization algorithms. Collaborated with legal experts to fine-tune the chatbot’s performance, resulting in a tool that efficiently aids legal research and case analysis.",
        tools : ['LangChain', 'Ollama','OpenAI API','AWS SES','AWS S3','Puppeteer','EC2','PM2','Nginx'],
        role: 'Data Scientist',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'RAG-Powered Chatbot with File and Web Content Analysis',
        description: 'Developed a RetrievalAugmented Generation (RAG) powered chatbot, incorporating a vector database to enhance semantic search capabilities and ensure precise, contextually relevant responses. Designed the system to allow user file uploads and the ability to scrape website URLs, enabling the chatbot to analyze documents and online content to generate informed answers based on both uploaded files and scraped web pages.',
        tools: ['Python', 'Langchain', 'Web Scrapping', 'Open AI API', 'Vector Database'],
        role: 'Data Scientist',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Data Analytics Chatbot',
        description: 'Developed a Streamlit application that facilitates conversion of CSV files into a structured SQLite database. The app automatically generates SQL queries to create tables and insert data from uploaded CSV files. Upon completion, it launches a chatbot interface enabling users to query the database intuitively. The chatbot interprets user questions to generate SQL queries, retrieving relevant data for visualizations like graphs, enhancing data exploration and analysis capabilities.',
        tools: ['Streamlit', 'SQLite', 'Python', 'Pandas', 'SQLAlchemy'],
        code: '',
        role: 'Data Scientist',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Job Recommendation System ',
        description: "The project is a content based job recommendation system using NLP techniques to provide personalised job recommendations based on user’s search queries. It searches a job postings database and ranks results according to relevance.",
        tools: ['Python', 'NLTK', 'Machine Learning', 'SQL', "Flask"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Data Scientist',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },