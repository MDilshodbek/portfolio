import { useOutlet, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Contact = () => {
  const hasChild = useOutlet();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (hasChild) return <Outlet />;

  const onNavigate = (id) => {
    navigate(`/contact/${id}`);
  };

  return (
    <div>
      {data.map((blog) => (
        <div
          key={blog.id}
          className="border p-4 my-4 w-[400px m-auto] hover:bg-gray-300 cursor-pointer"
          onClick={() => onNavigate(blog.id)}
        >
          <h2>{blog.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Contact;
