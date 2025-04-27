export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  sdgGoals: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Bamboo Cutlery Set",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1584346133934-a3afd2a99c59",
    category: "Kitchen",
    sdgGoals: ["Responsible Consumption", "Climate Action"],
    description: "Sustainable bamboo cutlery set with carrying case"
  },
  {
    id: "2",
    title: "Recycled Paper Journal",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1589495374906-b7f5ca5de879",
    category: "Stationery",
    sdgGoals: ["Responsible Consumption", "Life on Land"],
    description: "Handmade journal from 100% recycled paper"
  },
  {
    id: "3",
    title: "Organic Cotton Tote",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363",
    category: "Bags",
    sdgGoals: ["Sustainable Communities", "Responsible Consumption"],
    description: "Organic cotton tote bag with artistic prints"
  },
  {
    id: "4",
    title: "Beeswax Food Wraps",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1589365278144-06e43136a68f",
    category: "Kitchen",
    sdgGoals: ["Zero Waste", "Climate Action"],
    description: "Reusable beeswax food wraps, set of 3"
  },
  {
    id: "5",
    title: "Handwoven Basket",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1587304791558-ab1c56e55759",
    category: "Home",
    sdgGoals: ["Decent Work", "Responsible Consumption"],
    description: "Traditional handwoven basket by local artisans"
  },
  {
    id: "6",
    title: "Plant Growing Kit",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1534710961216-75c88202f43e",
    category: "Garden",
    sdgGoals: ["Life on Land", "Climate Action"],
    description: "Complete kit for growing your own herbs"
  }
];