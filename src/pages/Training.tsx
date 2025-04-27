import { Calendar, Users, BookOpen, ArrowRight } from 'lucide-react';

interface TrainingProgram {
  title: string;
  description: string;
  icon: JSX.Element;
}

const Training = () => {
  const programs: TrainingProgram[] = [
    {
      title: "SHG Formation Training",
      description: "Learn how to form and manage Self Help Groups effectively. Our comprehensive program covers group dynamics, financial management, and leadership skills.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Women's Entrepreneurship Training",
      description: "Empowering women with business skills, financial literacy, and market understanding to build successful enterprises.",
      icon: <BookOpen className="w-6 h-6" />,
    },
  ];

  const upcomingWorkshops = [
    {
      date: "2024-02-15",
      title: "Digital Marketing for Small Businesses",
      spots: 20,
    },
    {
      date: "2024-02-28",
      title: "Financial Management Workshop",
      spots: 15,
    },
    {
      date: "2024-03-10",
      title: "Sustainable Business Practices",
      spots: 25,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Training & Development Programs</h1>
      
      {/* Core Programs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Core Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {program.icon}
                <h3 className="text-xl font-semibold ml-3">{program.title}</h3>
              </div>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Upcoming Workshops</h2>
        <div className="space-y-4">
          {upcomingWorkshops.map((workshop, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-green-600 mr-3" />
                <div>
                  <h3 className="font-medium">{workshop.title}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(workshop.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                {workshop.spots} spots available
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Join Us in Building Communities</h2>
        <p className="text-gray-600 mb-6">
          Be part of our mission to empower communities through education and skill development.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium flex items-center mx-auto hover:bg-green-700 transition-colors">
          Register for Training
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </section>
    </div>
  );
};

export default Training;