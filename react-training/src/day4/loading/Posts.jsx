import React, { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    // set loading to true right before fetching data
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        // console.log("err", err)
        setErr(err);
      })
      .finally(() => {
        // after promise settles, set loading to false regardless of success or failure
        setLoading(false);
      });
  }, []);

  if (loading) return <div>...loading</div>;

  if (err) {
    return <div>{err}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      {/* {loading ? (
        <div>loading...</div>
      ) : ( */}
      <div>
        {posts.map((post) => {
          const { id, title, body } = post;
          return (
            <div key={id}>
              <h3>{title}</h3>
              <div>{body}</div>
            </div>
          );
        })}
      </div>
      {/* )} */}
    </div>
  );
}

// demonstrating infinite re-render

// export default function Posts() {
//   const [posts, setPosts] = useState([]);

//   //   without a dependency array
//   // 1. after component mounts and updates, callback of useEffect is called
//   // 2. api is fetched, setPosts is triggered
//   // 3. setPosts triggers re-render
//   // 4. re-render triggers useEffect
//   // 5. infinite re-render
//   //   useEffect(() => {
//   //     fetch("https://jsonplaceholder.typicode.com/posts")
//   //       .then((res) => res.json())
//   //       .then((data) => {
//   //         setPosts(data);
//   //       });
//   //   }, []);

//   console.log("posts");

//   return <div>Posts</div>;
// }
