import { IPost } from '@/types';
import Post from '../components/Post/Post';
import styles from './page.module.scss';

const fetchPosts = async (): Promise<IPost[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    return data.json();
};

const PostsPage = async () => {
    const posts = await fetchPosts();
    console.log('posts', posts);
    
    return (
        <div className={styles.container}>
            <div className={styles.content}>{posts.map(post => <Post key={post.id} post={post} />)}</div>
        </div>
    );
};

export default PostsPage;