import React, { useState, useEffect } from "react";
import "./style.css";
import EditPostModal from "./EditPostModal";

const Posts = () => {
  let [posts, setPosts] = useState([]);
  let [editModalOpen, setEditModalOpen] = useState(false);
  let [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
   
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleEdit = (postId) => {
    const postToEdit = posts.find((post) => post.id === postId);
    
    setEditingPost(postToEdit);
    setEditModalOpen(true);
    
  };
  const handleSaveEdit = (postId, editedTitle, editedBody) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, title: editedTitle, body: editedBody };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleEditModalClose = () => {
    setEditingPost(null);
    setEditModalOpen(false);
  };

  const handleDelete = (postId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmed) {
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);
    }
  };
  return (
    <>
      <div className="post-container">
        <table className="post-title">
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Body</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="post-body">
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td className="action-buttons">
                  <button
                    className="action-button edit"
                    onClick={() => handleEdit(post.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="action-button delete"
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
      {editModalOpen && editingPost && (
        <EditPostModal
          post={editingPost}
          onSave={handleSaveEdit}
          onClose={handleEditModalClose}
        />
      )}
      </div>
    </>
  );
};

export default Posts;
