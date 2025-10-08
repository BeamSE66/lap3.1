import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
  const myProfile = {
    name: "นาย ณัฏธพงษ์ เรือนเทศ",
    studentId: "66543210011-3",
    major: "วิศวกรรมซอฟต์แวร์",
    year: 3,
    age: 21,
    gpa: 2.58,
    email: "nattapong_ru66@live.rmutl.ac.th",
    hobbies: [
      "เขียนโค้ด",
      "ฟังเพลง",
      "เล่นเกม",
      "อ่านหนังสือ",
      "ออกกำลังกาย"
    ],
    skills: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Python",
      "Git",
      "SQL"
    ],
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/BeamSE66" },
      { platform: "Instagram", url: "https://instagram.com/6_beammiu" }
    ]
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(45deg, #f0f2f5 0%, #e8eaf6 100%)',
      padding: '20px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{
          color: '#333',
          fontSize: '32px',
          margin: '20px 0'
        }}>
          🎓 Personal Profile Card
        </h1>
        <p style={{ color: '#666', fontSize: '16px' }}>
          Lab 3.1 - ทำความรู้จักกับ React.js และ JSX
        </p>
      </div>

      <ProfileCard profile={myProfile} />
    </div>
  );
}

export default App;
