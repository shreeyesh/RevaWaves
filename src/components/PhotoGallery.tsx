import { motion } from 'framer-motion';

const photos = [
  {
    url: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5",
    caption: "First Training Workshop"
  },
  {
    url: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98",
    caption: "Gujarat Changemakers Award Ceremony"
  },
  {
    url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    caption: "Community Outreach Program"
  },
  {
    url: "https://images.unsplash.com/photo-1489674267075-cee793167910",
    caption: "Product Launch Event"
  },
  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    caption: "ISTD Award Recognition"
  },
  {
    url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca",
    caption: "Women Empowerment Initiative"
  }
];

const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map((photo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 rounded-lg flex items-end">
            <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {photo.caption}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PhotoGallery;