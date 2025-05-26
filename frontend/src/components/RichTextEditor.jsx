import React, { useState, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = ({ value, onChange }) => {
  const [Quill, setQuill] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Dynamically import ReactQuill on client-side only
    import('react-quill').then((module) => {
      setQuill(() => module.default);
      setMounted(true);
    });
  }, []);

  if (!mounted) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-64 p-2 border rounded-md"
        placeholder="Loading editor..."
      />
    );
  }

  if (!Quill) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-64 p-2 border rounded-md"
      />
    );
  }

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  return (
    <Quill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
      className="h-64"
    />
  );
};

export default RichTextEditor; 