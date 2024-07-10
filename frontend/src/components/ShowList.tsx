import axios from 'axios';
import { useState } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
}

const ShowList = () => {
  const [post, setPost] = useState<Post | null>(null);
  const fetchPost = async () => {
    try {
      const response = await axios.get('http://localhost/api/v1/posts');
      if (response.data.length > 0) {
        setPost(response.data[0]);
      }
      console.log(response.data);
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <div className="flex flex-col justify-center w-full h-[350px] gap-[20px] rounded-[10px] bg-gray-200">
      <span className="flex justify-center font-bold text-[20px] mx-[40px] hover:text-blue-400" onClick={fetchPost}>
        게시글 확인하기
      </span>
      {post && (
        <div className="flex flex-col justify-center gap-[30px]">
          <div className="flex justify-center gap-[30px]">
            <span className="font-bold">제목</span>
            <span className="pl-[10px] w-[300px] h-[60px] bg-white rounded-[10px]">{post.title}</span>
          </div>
          <div className="flex justify-center gap-[30px]">
            <span className="font-bold">내용</span>
            <span className="pl-[10px] w-[300px] h-[60px] bg-white rounded-[10px]">{post.content}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowList;
