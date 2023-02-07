const { marked } = require("marked");
import Notfound from "components/notfound";
import { useEffect, useState } from "react";
const axios = require("axios");

export default function PostDetail({ id }) {
  const [post, setPost] = useState({});

  async function data() {
    const res = await axios.get(`/api/post/${id}`);

    if (res.status == 200) {
      setPost(res.data);
      handleMd(res.data.expand);
    } else {
      const ok = (document.getElementById("response-ok").style.display =
        "none");
      const err = (document.getElementById("response-error").style.display =
        "flex");
    }
  }

  const handleMd = (mydata) => {
    if (mydata != null) {
      const expandMd = document.getElementById("expand");
      expandMd.innerHTML = marked.parse(mydata);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="container-v space">
      <div id="response-ok" className="card">
        {post.title != undefined ? (
          <div>
            <div className="card-header">
              <h2>{post.title}</h2>
            </div>
            <div className="card-date">
              {new Date(post.createdAt).toLocaleDateString()}
            </div>
            {post.image != undefined && (
              <div>
                <img className="card-img" src={`${post.image}`} />
              </div>
            )}
            <div className="card-description">{post.description}</div>
            <div className="card-links">
              {post.github != undefined && post.github != "" && (
                <a className="card-link" target="_blank" href={post.github}>
                  {"-"} Github
                </a>
              )}
              {post.website != undefined && post.website != "" && (
                <a className="card-link" target="_blank" href={post.website}>
                  {"-"} Website{" "}
                </a>
              )}
            </div>
          </div>
        ) : (
          <Notfound status="loading" />
        )}
        <div className="md card-expand" id="expand"></div>
      </div>

      <div id="response-error">
        <Notfound type="Projects" status="error" />
      </div>
    </div>
  );
}

export async function getServerSideProps({ query: { id } }) {
  return {
    props: { id },
  };
}
