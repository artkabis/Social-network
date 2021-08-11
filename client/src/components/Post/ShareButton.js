import React  from 'react';

import {
    FacebookShareButton,
    FacebookShareCount,
    TwitterShareButton,
    FacebookIcon,
    TwitterIcon
  } from "react-share";

  const sharingButtons =  ({ post }) => {
  let postContent="";
    const share = () => {
      try{
        postContent= post.message;
        console.log(postContent);
      }catch (err) {
        console.log('error share post >> ',err);
      }
    };
     return(
        <div className="containerShare" onClick={share}>
        <FacebookShareButton url={"https://artkabis.fr"} ><FacebookIcon size={32} round={true} /></FacebookShareButton>
        <FacebookShareCount url={"https://artkabis.fr"}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
        </FacebookShareCount>
        <TwitterShareButton url={"https://artkabis.fr"}><TwitterIcon size={32} round={true} /> </TwitterShareButton>

      </div>
        
    );
  };

  export default sharingButtons;