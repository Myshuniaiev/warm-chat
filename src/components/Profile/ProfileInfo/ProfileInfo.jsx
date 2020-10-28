import React from "react";
import css from "./ProfileInfo.module.css";
import profile_bg from "../../../img/profile_bg.jpg";
import Preloader from "../../common/preloader/preloader";
import userDefault from "../../../img/user-default.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={css.profile}>
      <div className={css.main}>
        <img src={profile_bg} className={css.profile_bg} />
        <img src={props.profile.photos.small != null ? props.profile.photos.large : userDefault} className={css.profile_pic} />
        <div className={css.aboutUser}>
          <div className={css.about}>
            <div className={css.name}>{props.profile.fullName}</div>
            <div className={css.aboutMe}>{props.profile.aboutMe}</div>
          </div>
          <div className={css.jobInfo}>
            <div className={css.line} />
            <div className={css.jobStatus}>
              <text className={css.jobSet}>Job status:</text>
              {props.profile.lookingForAJob ? (
                <text className={css.aboutStatus}>Looking for a job</text>
              ) : (
                <text className={css.aboutStatus}>Dont need a job</text>
              )}
            </div>
            <div className={css.jobComment}>
              <text className={css.jobSet}>Comment:</text>
              <text className={css.aboutStatus}>
                "{props.profile.lookingForAJobDescription}"
              </text>
            </div>
          </div>
        </div>
      </div>
      <div className={css.information}>
        <div className={css.description}></div>
      </div>
    </div>
  );
};

export default ProfileInfo;
