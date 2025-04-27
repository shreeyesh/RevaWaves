import { Tag, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "10 Simple Ways to Make Your Home More Sustainable",
      excerpt: "Discover practical tips for reducing your environmental footprint and creating a more sustainable living space.",
      category: "Sustainability Tips",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Success Stories: Women Entrepreneurs Leading Change",
      excerpt: "Inspiring stories of women entrepreneurs who are making a difference in their communities through sustainable businesses.",
      category: "Women Entrepreneurship",
      date: "2024-01-20",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Understanding SDGs: Local Actions, Global Impact",
      excerpt: "Learn how local community initiatives contribute to achieving the UN Sustainable Development Goals.",
      category: "SDGs and Community Impact",
      date: "2024-01-25",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const categories = ["All", "Sustainability Tips", "Women Entrepreneurship", "SDGs and Community Impact"];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-4xl font-bold mb-6">Blog & Insights</h1> */}

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              index === 0
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      <div className="mb-12">
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <span className="text-green-400 text-sm font-medium mb-2 inline-block">
              {blogPosts[0].category}
            </span>
            <h2 className="text-2xl font-bold text-white mb-2">
              {blogPosts[0].title}
            </h2>
            <p className="text-gray-300 mb-4">{blogPosts[0].excerpt}</p>
            <button className="text-white flex items-center hover:text-green-400">
              Read More <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(1).map((post, index) => (
          <article key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-3">
                <Tag className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm text-green-600 font-medium">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                <span>{post.readTime}</span>
                <span className="mx-2">•</span>
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;