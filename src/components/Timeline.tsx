import { motion } from 'framer-motion';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "2021",
    title: "Foundation",
    description: "Reva Waves was founded with a vision to empower women through sustainable practices."
  },
  {
    year: "2022",
    title: "First Training Program",
    description: "Launched our first women's skill development program with 20 participants."
  },
  {
    year: "2022",
    title: "Gujarat Changemakers Award",
    description: "Recognized for our impact in sustainable development and women empowerment."
  },
  {
    year: "2023",
    title: "ISTD Award",
    description: "Received award for excellence in training and development initiatives."
  },
  {
    year: "2023",
    title: "50+ Women Empowered",
    description: "Reached milestone of training and employing over 50 women artisans."
  },
  {
    year: "2024",
    title: "Expansion",
    description: "Expanded operations to multiple districts and launched new product lines."
  }
];

const Timeline = () => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
      
      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <span className="text-green-600 font-bold">{milestone.year}</span>
                <h3 className="text-xl font-semibold mt-2">{milestone.title}</h3>
                <p className="text-gray-600 mt-2">{milestone.description}</p>
              </div>
            </div>
            
            <div className="w-4 h-4 bg-green-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;