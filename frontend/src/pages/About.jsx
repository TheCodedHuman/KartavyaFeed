import React from 'react'
import AboutView from '../components/views/aboutViews/AboutView.jsx'

function About() {

  // content list declaration (just to clean mess)
  const whatArray = ["🌱 Built to nurture civic curiosity and leadership in young minds", "🛠️ Empowers students with AI tools to simplify complex challenges", "💬 Encourages thoughtful dialogue and informed decision-making", "🌍 Connects learners to real-world issues and community impact", "🎯 Focused on purpose, not profit—free for verified students"]
  const needArray = ["🌱will update later copilot, civic curiosity and leadership in young minds", "🛠️ Empowers students with AI tools to simplify complex challenges", "💬 Encourages thoughtful dialogue and informed decision-making", "🌍 Connects learners to real-world issues and community impact", "🎯 Focused on purpose, not profit—free for verified students"]

  // props declaration
  const whatIsFeed = { 
      imgUrl: 'about_1.jpeg', 
    title: "KartavyaFEED: More Than Just an AI Platform", 
      subTitle: "KartavyaFEED is an AI-powered platform helping students lead, learn, and engage deeply with civic challenges.", 
      content: whatArray,
      isOdd: true }

  const needOfFeed = { 
      imgUrl: 'about_2.jpeg', 
      title: "Born from Need: A College Student’s Journey to UPSC Empowerment", 
      subTitle: "KartavyaFEED helps students and professionals to save time and focus more on building profound knowledge", 
      content: whatArray,
      isOdd: false }


  return (
    <>
      <AboutView 
        imgUrl={whatIsFeed.imgUrl} 
        title={whatIsFeed.title} 
        subTitle={whatIsFeed.subTitle} 
        content={whatIsFeed.content} 
        isOdd={whatIsFeed.isOdd} />

      <AboutView 
        imgUrl={needOfFeed.imgUrl} 
        title={needOfFeed.title} 
        subTitle={needOfFeed.subTitle} 
        content={needOfFeed.content} 
        isOdd={needOfFeed.isOdd} />
    </>
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