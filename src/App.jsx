import './App.scss';
import Header from './components/header/Header';
import Video from './components/video/Video';
import CommentsForm from './components/comments/CommentsForm';
import Comments from './components/comments/Comments';
import NextVideo from './components/video/nextvideo/NextVideo';

export default function App() {
  return (
    <>
      <Header />
      <Video />
      <CommentsForm />
      <Comments />
      <NextVideo/>
    </>
  );
}
