import { useState } from 'react';
import Button from './Button';
import axios from 'axios';

const InputList = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost/api/v1/posts', {
        title,
        content,
      });
      console.log(response.data);
      setTitle(title);
      setContent(content);
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <div className="flex flex-col justify-center w-full h-[350px] gap-[20px] rounded-[10px] bg-gray-200">
      <span className="font-bold text-[20px] mx-[40px]">게시글 작성하기</span>
      <div className="flex justify-center gap-[30px]">
        <span className="font-bold">제목</span>
        <input
          className="pl-[10px] w-[300px] h-[60px] rounded-[10px]"
          type="text"
          placeholder="텍스트를 입력하세요"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="flex justify-center gap-[30px]">
        <span className="font-bold">내용</span>
        <input
          className="pl-[10px] w-[300px] h-[120px] rounded-[10px]"
          type="text"
          placeholder="텍스트를 입력하세요"
          value={content}
          onChange={handleContentChange}
        />
      </div>
      <div className="flex justify-end pr-[70px]">
        <Button onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default InputList;
