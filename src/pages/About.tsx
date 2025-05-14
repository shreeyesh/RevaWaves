import { Icon } from '@iconify/react';
import Timeline from '../components/Timeline';
import PhotoGallery from '../components/PhotoGallery';

const About = () => {
  const sdgGoals = [
    {
      number: 5,
      title: "Gender Equality",
      icon: "mdi:gender-male-female",
      color: "rgb(255, 58, 33)"
    },
    {
      number: 8,
      title: "Decent Work and Economic Growth",
      icon: "mdi:chart-line-variant",
      color: "rgb(162, 25, 66)"
    },
    {
      number: 12,
      title: "Responsible Consumption and Production",
      icon: "mdi:recycle",
      color: "rgb(191, 139, 46)"
    },
    {
      number: 13,
      title: "Climate Action",
      icon: "mdi:earth",
      color: "rgb(48, 116, 60)"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">About Reva Waves</h1>
      
      {/* Story Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <div className="prose max-w-none text-lg">
          <p className="mb-4">
            The journey of Reva Waves began with Vedant Makwana's vision to revolutionize sustainable living. 
            Starting from humble beginnings, we've grown into a movement that champions eco-conscious choices 
            and sustainable practices in everyday life.
          </p>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Our Journey</h2>
        <Timeline />
      </section>

      {/* Photo Gallery Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Moments That Define Us</h2>
        <PhotoGallery />
      </section>

      {/* Vision & Mission Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Vision, Mission & Core Values</h2>
        <div className="grid gap-6">
          <div>
            <h3 className="text-xl font-medium mb-2">Vision</h3>
            <p className="text-lg">
              To create a world where sustainable living is accessible, appealing, and natural for everyone.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Mission</h3>
            <p className="text-lg">
              To provide innovative, eco-friendly solutions that make sustainable living easy and enjoyable 
              while creating positive environmental and social impact.
            </p>
          </div>
        </div>
      </section>

      {/* SDG Alignment Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">SDG Alignment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sdgGoals.map((goal) => (
            <div 
              key={goal.number}
              className="flex items-center gap-4 p-4 rounded-lg shadow-md"
              style={{ backgroundColor: `${goal.color}15` }}
            >
              <Icon 
                icon={goal.icon} 
                className="text-4xl"
                style={{ color: goal.color }}
              />
              <div>
                <h3 className="font-medium">SDG {goal.number}</h3>
                <p>{goal.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ESG Commitment Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">ESG Commitment</h2>
        <div className="grid gap-6">
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="text-xl font-medium mb-2 text-green-700">Environmental</h3>
            <p className="text-lg">
              We are committed to minimizing our environmental footprint through sustainable practices, 
              responsible sourcing, and waste reduction.
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-medium mb-2 text-blue-700">Social</h3>
            <p className="text-lg">
              We prioritize fair labor practices, community engagement, and social responsibility 
              throughout our operations.
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="text-xl font-medium mb-2 text-purple-700">Governance</h3>
            <p className="text-lg">
              We maintain high standards of transparency, ethics, and accountability in all our 
              business practices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;