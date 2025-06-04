import React from 'react'
import styles from "./singlePage.module.css";
import Menu from '../components/menu/Menu';
import Comments from '../components/comments/Comments';

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
                 <Image src="" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.userTextConatiner}>
              <span className={styles.userName}>Harsh Sharma</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
              <div className={styles.description}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum esse? Atque corporis ipsa nihil laboriosam at facere ipsum sequi ullam. Aliquam, qui sint iure quos dolor aliquid quas molestias suscipit dignissimos, commodi, ullam voluptatibus autem recusandae? Fuga, soluta commodi?</p>
                    <h2>Lorem ipsum dolor sit.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum esse? Atque corporis ipsa nihil laboriosam at facere ipsum sequi ullam. Aliquam, qui sint iure quos dolor aliquid quas molestias suscipit dignissimos, commodi, ullam voluptatibus autem recusandae? Fuga, soluta commodi?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum esse? Atque corporis ipsa nihil laboriosam at facere ipsum sequi ullam. Aliquam, qui sint iure quos dolor aliquid quas molestias suscipit dignissimos, commodi, ullam voluptatibus autem recusandae? Fuga, soluta commodi?</p>
              </div>
        </div>
        <div className={styles.comment}>
          <Comments/>
        </div>
        </div>
        <Menu/>
      </div>
    </div>
  )
}

export default SinglePage;