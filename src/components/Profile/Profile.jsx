import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import css from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div className={css.wrapper}>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        className={css.profile}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatusThunkCreator}
      />
      <PostsContainer />
    </div>
  );
}

export default Profile;
