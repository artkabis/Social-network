import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import { likePost, unlikePost } from "../../actions/post.actions";
import {isEmpty } from "../Utils";



const LikeButton = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const uid = useContext(UidContext);
  const usersData = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();



  const like = () => {
    try{
    dispatch(likePost(post._id, uid))
    setLiked(true);
    }catch (err) {
      console.log('error like post >> ',err);
    }
  };

  const unlike = () => {
    try{
    dispatch(unlikePost(post._id, uid))
    setLiked(false);
    } catch (err) {
      console.log('error unlike post >> ',err);
    }
  };
  useEffect(() => {
    if (post.likers.includes(uid)) setLiked(true);
    else setLiked(false);
  }, [uid, post.likers, liked]);

  return (
    <div className="like-container">
      {uid === null && (
        <Popup
          trigger={<img src="./img/icons/heart.svg" alt="like" />}
          position={["bottom center", "bottom right", "bottom left"]}
          closeOnDocumentClick
        >
          <div>Connectez-vous pour aimer un post !</div>
        </Popup>
      )}
      {uid && liked === false && (
        <img title="Aimer" src="./img/icons/heart.svg" onClick={like} alt="like" />
      )}
      {uid && liked && (
        <img title="Ne plus aimer" src="./img/icons/heart-filled.svg" onClick={unlike} alt="unlike" />
      )}
      {uid && liked && (
        <div className="likersName-container">
          <div className="viewLikers">...</div>
          <div className="likeList">
            Dernier liker : 
            <div className="likeListPseudo">
              {
                
                !isEmpty(usersData[0]) && usersData
                .map((user) => {
                  //console.log('users >> ',user.likes);
                  if (user._id === post.posterId && post.likers.length){
                    //console.log("Likers pseudo >> ",user.pseudo, " ********************** usedata >>", usersData[0].likes);
                    usersData[0].likes.forEach(function(elem){
                        //console.log('forEach likes >>>>> ',elem);
                    })

                    return user.pseudo;
                  }else{
                    return null;//String(user.picture).split("./")[1].split("./")[0];//"./uploads/profil/random-user.png";
                  }
                })
                .join("")
              }
            </div>
          </div>
        </div>
        
      )}
      <span>{post.likers.length}</span>
    </div>
  );
};

export default LikeButton;
