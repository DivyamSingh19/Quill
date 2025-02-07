 
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';
import conf from '../conf/conf';
import { useState } from 'react';
import { useEffect } from 'react';

export default function RTE({name, control, label, defaultValue =""}) {
  const [content, setContent] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem('draftContent');
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  const handleEditorChange = (content, editor) => {
    setContent(content);
    localStorage.setItem('draftContent', content);
  };
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        apiKey='k2d3535udweapopyvps5emepjsszkfjghwo413ky7gkqjt2q'
        initialValue={defaultValue}
        onChange={handleEditorChange}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}