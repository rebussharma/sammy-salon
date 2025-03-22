import React from 'react';
import '../css/About.css';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  description: string;
  socialLinks: {
    instagram?: string;
    tiktok?: string;
  };
}

const About: React.FC = () => {
  // Team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Sammy Shrestha",
      position: "Founder",
      image: `${process.env.PUBLIC_URL}/images/team/johnathan.jpg`,
      description: "Sammy has over 10 years of experience in the beauty industry. Within each stroke of her brush and every gentle conversation, Sammy believes that that success isn't just measured in profits, but in the smiles of those she touched.",
      socialLinks: {
        instagram: "#",
        tiktok: "#"
      }
    },
    {
      id: 2,
      name: "Sushi",
      position: "Founder",
      image: `${process.env.PUBLIC_URL}/images/team/alexandra.jpg`,
      description: "Has X years of Experience on",
      socialLinks: {
        instagram: "#",
        tiktok: "#"
      }
    },
    {
      id: 3,
      name: "Gigi Shrestha",
      position: "Pawfessional Cuddler",
      image: `${process.env.PUBLIC_URL}/images/team/elisa.jpg`,
      description: "Gigi has a whopping 2 years of experience in cuddling, barking, zooming, eating and sleeping!",
      socialLinks: {
        instagram: "#",
        tiktok: "#"
      }
    }
  ];

  // Social media icon components
  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );

  const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
      <path d="M15 8a4 4 0 0 0 0 8 4 4 0 0 0 0-8z"/>
      <path d="M15 8a4 4 0 0 1 4 4"/>
      <line x1="15" y1="8" x2="15" y2="16"/>
      <line x1="9" y1="16" x2="9" y2="20"/>
    </svg>
  );

  return (
    <div className="about" id="about">
      <div className="about-container">
        <div className="about-title">
          <h2>Our Amazing Team</h2>
          <p>Meet the talented professionals behind our success</p>
        </div>
        
        <div className="team-members">
          {teamMembers.map((member) => (
            <div className="team-member" key={member.id}>
              <div className="member-avatar">
                <img src={member.image} alt={member.name} />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-position">{member.position}</p>
              <p className="member-description">{member.description}</p>
              <div className="social-links">
                {member.socialLinks.instagram && (
                  <a href={member.socialLinks.instagram} className="social-link instagram">
                    <InstagramIcon />
                  </a>
                )}
                {member.socialLinks.tiktok && (
                  <a href={member.socialLinks.tiktok} className="social-link tiktok">
                    <TikTokIcon />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;