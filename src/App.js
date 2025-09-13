import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaUser, FaGraduationCap, FaLightbulb, FaTrophy, FaBriefcase } from 'react-icons/fa';
import './App.css';

function App() {
  const resumeData = {
    name: 'HITESH GOUR',
    title: 'ELK DEVELOPER',
      contact: {
      location: 'Bhopal, M.P, India',
      phone: '+919584673606',
      email: 'hiteshgour1213@gmail.com',
      linkedin: 'https://www.linkedin.com/in/hitesh-gour-601274170/'
    },
    profile: [
      '<b>Results-driven</b> ELK Developer with 6 years of overall IT experience, including 4.5 years of hands-on expertise in Implementing, and managing Elasticsearch, Logstash, and Kibana (ELK) solutions.',
      '<b>Skilled</b> in data ingestion, pipeline design, query optimization, and building interactive dashboards for real-time monitoring and analytics.',
      '<b>Proven ability</b> to troubleshoot issues, fine-tune performance, and implement scalable, efficient solutions aligned with business objectives.',
      '<b>Adept</b> at collaborating with cross-functional teams to enhance system visibility and drive data-driven decisions.'
    ],
    education: [
      'MCA, RGVP University - June 2019',
      'BCA, BU University - June 2017'
    ],
    skills: [
      'Elasticsearch', 'Logstash', 'Kibana', 'Zabbix', 'Kafka', 'Redis', 'Grafana', 'Linux', 'Prometheus', 'Ansible', 'Dynatrace', 'Python', 'Jira', 'Django', 'Docker', 'Git', 'Data Ingestion', 'Query Optimization', 'Log Analysis'
    ],
    certifications: ['Red Hat Certified System Administrator (RHCSA)'],
    experience: [
      {
        title: 'ELK Developer | Progressive Infovision, Noida (Client: Bharti Airtel)',
        period: 'AUG 2023 - Present',
        details: [
          'Optimized ELK pipeline performance by managing Elasticsearch clusters, automating index lifecycle via ILM policies, and customizing Logstash configurations with grok patterns and filters for enhanced log parsing and enrichment.',
          'Implemented and managed ELK Beats (Filebeat, Metricbeat, Heartbeat) to streamline log and metric collection, improving system monitoring efficiency by 30%.',
          'Enhanced system observability by configuring and managing Zabbix with customized alerts and triggers, leveraging various data sources to proactively detect and resolve issues.',
          'Built and managed Elasticsearch clusters, designed hot/warm architecture, configured ILM policies for index management, and optimized shard and replica settings to improve cluster performance and storage efficiency.',
          'Developed real-time dashboards and visual analytics using Kibana and Grafana, empowering stakeholders with actionable insights for operational and business decisions.',
          'Automated alerting and data ingestion by integrating Elasticsearch REST APIs with Python, enabling custom notifications and dynamic population of Elasticsearch indices.',
          'Created and maintained Grafana dashboards to visualize key application and infrastructure metrics, improving system transparency and SLA tracking.',
          'Implemented real-time data streaming pipelines using Kafka, Filebeat, and Logstash; configured Kafka topics for reliable and scalable log processing.',
          'Mentored junior team members on ELK architecture, log management best practices, and monitoring strategies, fostering team growth and knowledge sharing.',
          'Configured and integrated Dynatrace APM for advanced trace and root cause analysis of application failures, utilizing Open Telemetry (OTel) Collector to enhance observability and accelerate issue resolution.'
        ]
      },
      {
        title: 'Sr. Python Developer | Learniphy Technology, Ahmedabad',
        period: 'JAN 2023 - JUL 2023',
        details: [
          'Developed a WordPress-based web application for Shivalik, ensuring responsiveness.',
          'Designed and maintained Django REST APIs for seamless edX platform integration.',
          'Managed application logs efficiently using the ELK Stack for better monitoring.',
          'Handled translation files for Django applications, enabling multi-language support.'
        ]
      },
      {
        title: 'Python Developer | WeWin Ltd., Bhopal',
        period: 'AUG 2022 – JAN 2023',
        details: [
          'Developed and maintained REST APIs for efficient system integration.',
          'Configured Zabbix for alerting and server monitoring.',
          'Setup Elastic Cluster for log management.',
          'Enhanced communication and collaboration skills in team projects.'
        ]
      },
      {
        title: 'Web Developer | DeeyaSolutions, Bhopal',
        period: 'APR 2020 – SEP 2022',
        details: [
          'Collaborated effectively in team projects, demonstrating strong teamwork.',
          'Managed time efficiently to meet project deadlines.',
          'Skilled in both independent and collaborative work environments.'
        ]
      }
    ],
    awards: ['Awarded as “Supertech Award” of FY 2024/25 at Bharti Airtel by Wipro/Progressive Infovision.']
  };

  // Removed truncation to show full job descriptions
  // const truncateText = (text, maxLength = 120) => {
  //   if (text.length <= maxLength) return text;
  //   return text.slice(0, maxLength) + '...';
  // };

  return (
    <div className="App">
      <div className="resume">
        <header>
          <h1>{resumeData.name}</h1>
          <h2>{resumeData.title}</h2>
        </header>
        <div className="resume-body">
          <div className="left-column">
            <section>
              <h3><FaPhone /> CONTACT</h3>
              <p><FaMapMarkerAlt /> {resumeData.contact.location}</p>
              <p><FaPhone /> {resumeData.contact.phone}</p>
              <p><FaEnvelope /> {resumeData.contact.email}</p>
              <p><FaLinkedin /> <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </section>
            <section>
              <h3><FaGraduationCap /> EDUCATION</h3>
              <ul>
                {resumeData.education.map((edu, index) => <li key={index}>{edu}</li>)}
              </ul>
            </section>
            <section>
              <h3><FaLightbulb /> KEY SKILLS</h3>
              <div className="skills-grid">
                {resumeData.skills.map((skill, index) => <span key={index} className="skill-tag">{skill}</span>)}
              </div>
            </section>
            <section>
              <h3><FaTrophy /> CERTIFICATIONS</h3>
              <ul>
                {resumeData.certifications.map((cert, index) => <li key={index}>{cert}</li>)}
              </ul>
            </section>
          </div>
          <div className="right-column">
            <section>
              <h3><FaUser /> PROFILE</h3>
              <p dangerouslySetInnerHTML={{ __html: resumeData.profile.join(' ') }} />
            </section>
            <section>
              <h3><FaBriefcase /> EXPERIENCE</h3>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <h4>{exp.title}</h4>
                  <p className="period">{exp.period}</p>
                  <ul>
                    {exp.details.map((detail, i) => <li key={i}>{detail}</li>)}
                  </ul>
                </div>
              ))}
            </section>
            <section>
              <h3><FaTrophy /> AWARD & RECOGNITION</h3>
              <ul>
                {resumeData.awards.map((award, index) => <li key={index}>{award}</li>)}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
