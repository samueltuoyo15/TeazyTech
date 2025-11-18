import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Color from "@tiptap/extension-color";
import Blockquote from "@tiptap/extension-blockquote";

import { createLowlight, common } from "lowlight";

import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Code,
  List,
  ListOrdered,
  Link as LinkIcon,
  Image as ImgIcon,
  Quote,
} from "lucide-react";

// Create lowlight instance with common languages
const lowlight = createLowlight(common);

const RichTextEditor = ({ value, onChange, uploadImage }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Color,
      Image,
      Link,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Blockquote,
      Placeholder.configure({
        placeholder: "Write your post content here...",
      }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: { class: "prose max-w-full focus:outline-none p-2" },
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "", false);
    }
  }, [value, editor]);

  if (!editor) return null;

  const insertImageFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return; // exit early if no file selected

    if (typeof uploadImage !== "function") {
      console.warn("No uploadImage function provided"); // just warn, don’t block
      return;
    }

    try {
      const url = await uploadImage(file);
      if (url) editor.chain().focus().setImage({ src: url }).run();
    } catch (err) {
      console.error("Image upload failed:", err);
    } finally {
      e.target.value = ""; // reset input
    }
  };

  const setLink = () => {
    const url = prompt("Enter URL");
    if (url)
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
  };

  return (
    <div className="relative">
      <div className="mb-2 flex flex-wrap gap-2 bg-gray-100 p-2 rounded-md">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          title="Bold"
          className={
            editor.isActive("bold") ? "bg-gray-300 p-1 rounded" : "p-1 rounded"
          }
        >
          <Bold className="h-4 w-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title="Italic"
          className={
            editor.isActive("italic")
              ? "bg-gray-300 p-1 rounded"
              : "p-1 rounded"
          }
        >
          <Italic className="h-4 w-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          title="Underline"
          className={
            editor.isActive("underline")
              ? "bg-gray-300 p-1 rounded"
              : "p-1 rounded"
          }
        >
          <UnderlineIcon className="h-4 w-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          title="Strikethrough"
          className={
            editor.isActive("strike")
              ? "bg-gray-300 p-1 rounded"
              : "p-1 rounded"
          }
        >
          <Strikethrough className="h-4 w-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          title="Code"
          className={
            editor.isActive("code") ? "bg-gray-300 p-1 rounded" : "p-1 rounded"
          }
        >
          <Code className="h-4 w-4" />
        </button>
        <button onClick={setLink} title="Insert Link" className="p-1 rounded">
          <LinkIcon className="h-4 w-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          title="Blockquote"
          className={
            editor.isActive("blockquote")
              ? "bg-gray-300 p-1 rounded"
              : "p-1 rounded"
          }
        >
          <Quote className="h-4 w-4" />
        </button>
        <label className="p-1 rounded cursor-pointer" title="Upload Image">
          <ImgIcon className="h-4 w-4" />
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={insertImageFile}
          />
        </label>
      </div>

      <EditorContent
        editor={editor}
        className="border rounded-md min-h-[16rem] p-2"
      />
    </div>
  );
};

export default RichTextEditor;
