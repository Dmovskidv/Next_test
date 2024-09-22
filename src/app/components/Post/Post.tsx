import { IPost } from '@/types';
import styles from './Post.module.scss';

const Post = ({ post }: { post: IPost; }) => {
    return (
        <div className={styles.container}>
            {/* <div>{post.id}</div>
            <div>{post.userId}</div> */}
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default Post;