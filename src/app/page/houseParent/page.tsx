import React from 'react';
import HouseParentCard from '../../component/HouseParentCard';

// Define the type for each profile
interface Profile {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
}

// Define the props for the ProfileSection component
interface ProfileSectionProps {
  title: string;  // Title is a string
  profiles: Profile[];  // profiles is an array of Profile objects
}

// Board director and house parents data
const boardDirector: Profile[] = [
  { id: '1', name: 'New Hope For Orphans', location: 'Phnom Penh', imageUrl: '/detail-image.png' },
  { id: '2', name: 'New Hope For Orphans', location: 'Phnom Penh', imageUrl: '/detail-image.png' },
  { id: '3', name: 'New Hope For Orphans', location: 'Phnom Penh', imageUrl: '/detail-image.png' },
  { id: '4', name: 'New Hope For Orphans', location: 'Phnom Penh', imageUrl: '/detail-image.png' },
  { id: '5', name: 'New Hope For Orphans', location: 'Phnom Penh', imageUrl: '/detail-image.png' },
  { id: '6', name: 'New Hope For Orphans', location: 'Phnom Penh', imageUrl: '/detail-image.png' },
];

const houseParents: Profile[] = [
  { id: '1', name: 'New Hope For Orphans', location: 'Phnom Penh', imageUrl:  '/detail-image.png' },
  { id: '2', name: 'New Hope For Orphans', location: 'Phnom Penh', imageUrl: '/detail-image.png' },
  { id: '3', name: 'New Hope For Orphans', location: 'Phnom Penh', imageUrl: '/detail-image.png' },
  { id: '4', name: 'New Hope For Orphans', location: 'Phnom Penh', imageUrl: '/detail-image.png' },
  { id: '5', name: 'New Hope For Orphans', location: 'Phnom Penh', imageUrl: '/detail-image.png' },
  { id: '6', name: 'New Hope For Orphans', location: 'Phnom Penh', imageUrl: '/detail-image.png' },
];


const ProfileSection: React.FC<ProfileSectionProps> = ({ title, profiles }) => (
  <>
    <h2 className="font-bold text-[40px] text-center text-green-600 mt-8 mb-6">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 px-0 max-w-5xl mx-auto">
      {profiles.map((parent) => (
        <HouseParentCard
          key={parent.id}
          id={parent.id}
          name={parent.name}
          location={parent.location}
          imageUrl={parent.imageUrl}
        />
      ))}
    </div>
  </>
);

export default function HouseParentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-left mb-8 px-4">
        <h1 className="font-bold text-[40px] text-center text-green-600 mb-4">House Parents Profile</h1>
        <p className="text-gray-700 mb-6">
          Each of our homes is located between one to ten hours' drive from Phnom Penh. Along the way, you'll witness breathtaking views of lush rice
          fields and peaceful countryside life, a reminder of Cambodia's natural beauty and resilience. At the heart of every home are our dedicated
          houseparents, many of whom are long-time pastors or have been Christians for over five years. They serve not only as caregivers but as
          spiritual mentors, guiding these children to discover hope, faith, and a future in Christ. Though these children have endured great loss and
          hardship, they are surrounded by unwavering love a love that reflects God's grace through the commitment of those who have dedicated
          their lives to serving Him. <span className="text-green-600"> "And now these three remain: faith, hope and love. But the greatest of
          these is love."</span>
        </p>
      </div>
      
    
      <ProfileSection title="N.H.C.H Board Directors" profiles={boardDirector} />
      <ProfileSection title="Our House Parents" profiles={houseParents} />
    </div>
  );
}
