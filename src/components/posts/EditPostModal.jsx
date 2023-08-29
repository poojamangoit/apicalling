import React, { useState } from "react";

const EditPostModal = ({ post, onSave, onClose }) => {
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedBody, setEditedBody] = useState(post.body);


  const handleSave = () => {
    onSave(post.id, editedTitle, editedBody);
    onClose();
  };

  return (
    <>
    <div className="modal">
      <h2>Edit Post</h2>
      <label>Title:</label>
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <label>Body:</label>
      <textarea rows={5}
        value={editedBody}
        onChange={(e) => setEditedBody(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
    </>
  );
};

export default EditPostModal;
