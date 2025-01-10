import React, { useState, useEffect } from 'react';
import Header from '../Header';
function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [noteImage, setNoteImage] = useState(null);

  // Load blogs from localStorage when the component mounts
  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, []);

  // Save new note and update display
  const handleSubmit = () => {
    const newNote = { text: noteText, imgSrc: null };

    if (noteImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        newNote.imgSrc = event.target.result;
        saveNote(newNote);
      };
      reader.readAsDataURL(noteImage);
    } else {
      saveNote(newNote);
    }
  };

  const saveNote = (note) => {
    const updatedBlogs = [...blogs, note];
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    setNoteText('');
    setNoteImage(null);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-gray-900 text-white overflow-auto">
        <Header/>
      <h1 className="text-3xl font-bold my-4">Blog Notes</h1>
      <div className="flex flex-col items-center w-full max-w-md p-4">
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Write your note here..."
          className="w-full bg-gray-800 text-white p-2 rounded-lg mb-4 resize-none"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setNoteImage(e.target.files[0])}
          className="mb-4 text-white"
        />
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
      <div className="w-full max-w-xl">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 my-4 rounded-lg shadow-lg text-left"
          >
            <p className="mb-4">{blog.text}</p>
            {blog.imgSrc && (
              <img
                src={blog.imgSrc}
                alt="Note visual"
                className="w-full rounded-lg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
