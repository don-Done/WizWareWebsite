import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { Helmet } from 'react-helmet-async';
import { useAuthState } from 'react-firebase-hooks/auth';

interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: any; // You might want to refine this type based on what serverTimestamp returns
}

const Blog: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [user] = useAuthState(auth);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      const querySnapshot = await getDocs(collection(db, 'articles'));
      const articlesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setArticles(articlesData);
    };
    fetchArticles();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      await addDoc(collection(db, 'articles'), {
        title: title,
        content: content,
        author: user.email,
        createdAt: serverTimestamp(),
      });
      setTitle('');
      setContent('');
    }
  };

  return (
    <>
        <Helmet>
          <title>Blog - Grand Wizard Tournament</title>
          <meta name="description" content="Follow the development journey of Grand Wizard Tournament, an educational roguelike game. Stay updated with our latest news and articles." />
          <meta name="keywords" content="grand wizard tournament, game development, educational game, blog, roguelike" />
        </Helmet>

    <div className="grimoire-section py-5">
      <div className="container">
        <h1 className="text-center mb-4">Blog</h1>
        <p className="text-center mb-4">Follow our journey as we develop Grand Wizard Tournament. Stay tuned for updates!</p>
      
      {user ? (
        <form onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
          <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
          <button type="submit">Submit Article</button>
        </form>
      ) : (
        <p>Please log in to submit an article.</p>
      )}
        
        <div className="mt-4">
          {articles.map((article) => (
            <div key={article.id} className="mb-4 grimoire-card p-3">
              <h2 className="mb-2">{article.title}</h2>
              <p>{article.content}</p>
            </div>))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Blog;