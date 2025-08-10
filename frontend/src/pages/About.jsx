import React from 'react'
import AboutView from '../components/views/aboutViews/AboutView.jsx'

function About() {


  return (
    <div style={{
      background: 'linear-gradient(to bottom, #ff9100, white, #9be8fc, white, #00ff4c)'
    }}>
      <AboutView
        title="The Mind Behind the Mission"
        quote="KartavyaFEED is not just a platform—it's a reflection of every student who dares to think deeper."
        isOdd={true} />
      
      <AboutView
        imgUrl="about_1.jpeg"
        title="Tools That Think Like Aspirants"
        subTitle="Summarizer, Questify, Answerly, Debate—each tool is built with UPSC logic in mind."
        content={[
          "🧠 Summarizer: Extracts key points from long editorials",
          "❓ Questify: Converts articles into MCQs",
          "🗣️ Debate: Helps students explore both sides of an issue",
          "📚 Answerly: Generates structured answers with citations"
        ]}
        isOdd={false} />

      <AboutView
        title="Why Generic AI Isn’t Enough"
        quote="Generic AI answers questions. KartavyaFEED asks the right ones."
        isOdd={true} />
     
      <AboutView
        imgUrl="about_2.jpeg"
        title="Building with Purpose"
        subTitle="Every pixel, every prompt, every API call is designed to serve a mission—not a market."
        content={[
          "🧩 Modular UI built with React and Tailwind",
          "🔐 Secure, accessible, and responsive by design",
          "🎨 Design tokens for scalable theming",
          "🧠 AI integrations that respect context and nuance"
        ]}
        isOdd={true} />
     
      <AboutView
        title="The Road Ahead"
        quote="KartavyaFEED will evolve into a civic companion—one that learns with you, not just answers you."
        isOdd={true} />
      

    </div>
  )
}

export default About



/* 
1. KartavyaFEED: More Than Just an AI Platform
2. Born from Need: A College Student’s Journey to UPSC Empowerment
3. Why Generic AI Isn’t Enough (And Why KartavyaFEED Is Different)
4. Tools That Think Like Aspirants: Summarizer, Questify, Answerly, Debate
5. Building with Purpose: The Tech, the Design, the Vision
6. The Mind Behind the Mission: Meet Moksh
7. The Road Ahead: What KartavyaFEED Is Becoming
*/




/*

# Map-Sample Code

import React from 'react';
import AboutView from '../components/views/aboutViews/AboutView.jsx';

function About() {
  const whatArray = [
    "🌱 Built to nurture civic curiosity and leadership in young minds",
    "🛠️ Empowers students with AI tools to simplify complex challenges",
    "💬 Encourages thoughtful dialogue and informed decision-making",
    "🌍 Connects learners to real-world issues and community impact",
    "🎯 Focused on purpose, not profit—free for verified students"
  ];

  const needArray = [
    "🌱 Will update later, Copilot—civic curiosity and leadership in young minds",
    "🛠️ Empowers students with AI tools to simplify complex challenges",
    "💬 Encourages thoughtful dialogue and informed decision-making",
    "🌍 Connects learners to real-world issues and community impact",
    "🎯 Focused on purpose, not profit—free for verified students"
  ];

  const sections = [
    {
      imgUrl: 'about_1.jpeg',
      title: "KartavyaFEED: More Than Just an AI Platform",
      subTitle: "KartavyaFEED is an AI-powered platform helping students lead, learn, and engage deeply with civic challenges.",
      content: whatArray,
      isOdd: true
    },
    {
      imgUrl: 'about_2.jpeg',
      title: "Born from Need: A College Student’s Journey to UPSC Empowerment",
      subTitle: "KartavyaFEED helps students and professionals to save time and focus more on building profound knowledge",
      content: needArray,
      isOdd: false
    }
    // You can add more sections here later!
  ];

  return (
    <>
      {sections.map((section, index) => (
        <AboutView
          key={index}
          imgUrl={section.imgUrl}
          title={section.title}
          subTitle={section.subTitle}
          content={section.content}
          isOdd={section.isOdd}
        />
      ))}
    </>
  );
}

export default About;

*/
