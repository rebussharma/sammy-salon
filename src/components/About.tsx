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
      image: `${process.env.PUBLIC_URL}/images/team/sammy.jpg`,
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
      image: `${process.env.PUBLIC_URL}/images/team/sushi.jpg`,
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
      image: `${process.env.PUBLIC_URL}/images/team/gigi.jpg`,
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
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.596.027.89.09V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 5 17.66a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
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