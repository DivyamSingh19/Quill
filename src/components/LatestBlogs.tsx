import { useEffect, useState } from "react";
import service from "../appwrite/config";

interface Blog {
  $id: string;
  title: string;
  slug: string;
  content: string;
  featuredImage: string;
  status: boolean;
  userId: string;
}

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await service.getPosts([
          // Fetch only active posts and sort by latest
          Query.equal("status", true),
          Query.orderDesc("$createdAt"),
          Query.limit(6), // Get the latest 6 blogs
        ]);
        if (response) {
          setBlogs(response.documents);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center py-5 text-gray-600">Loading...</p>;

  return (
    <div className="absolute sm:top-500 md:top-450 left-0container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.$id} className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src={service.getFilePreview(blog.featuredImage)}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{blog.content.substring(0, 100)}...</p>
              <a href={`/blog/${blog.slug}`} className="text-blue-500 font-medium mt-3 inline-block">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
