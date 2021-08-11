import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shareUser } from "../../actions/user.actions";
import { isEmpty } from "../Utils";

const SharePost = ({ idToFollow, type }) => {
  const userData = useSelector((state) => state.userReducer);
  const [isShare, setIsShare] = useState(false);
  const dispatch = useDispatch();

  const handleShare = () => {
    dispatch(shareUser(userData._id, idToFollow));
    setIsShare(true);
  };



  useEffect(() => {
    if (!isEmpty(userData.following)) {
      if (userData.following.includes(idToFollow)) {
        setIsShare(true);
      } else setIsShare(false);
    }
  }, [userData, idToFollow]);

  return (
    <>
      {isShare && !isEmpty(userData) && (
        <span onClick={handleShare}>
          {type === "suggestion" && <button className="unfollow-btn">Abonné</button>}
          {type === "card" && <img src="./img/icons/checked.svg" alt="checked"/>}
        </span>
      )}
      {isShare === false && !isEmpty(userData) && (
        <span onClick={handleShare}>
          {type === "suggestion" && <button className="follow-btn">Suivre</button>}
          {type === "card" && <img src="./img/icons/check.svg" alt="check"/>}
        </span>
      )}
    </>
  );
};

export default SharePost;