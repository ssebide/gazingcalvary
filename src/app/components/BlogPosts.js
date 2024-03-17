import BlogCard from "./BlogCard";
import { getPosts } from "../../../../gazingcalvary/gazingnew/lib/client";

const BlogSection = async () => {
  const posts = await getPosts();
  return (
    <div id="sermons">
      <div
        className="flex flex-col lg:px-24 px-4 overflow-x-hidden overflow-y-hidden w-full"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div
          className="flex overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <ul className="flex flex-row space-x-8">
            {posts.map((post) => (
              <li key={post._id} className="flex-none">
                <div className="w-80"> 
                  <BlogCard postData={post} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;