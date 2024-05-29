"use client";

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  //   InstapaperShareButton,
  //   FacebookIcon,
  //   TwitterIcon,
  //   InstapaperIcon,
  EmailIcon,
} from "react-share";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import { siteConfig } from "@/config/site";

const SocialShare = ({className, postId,title, body}:{className:string, postId:string, title:string, body:string}) => {
  const iconStyles = "size-8 rounded-full hover:animate-pulse";
  return (
    <>
      <div className={className}>
        <FacebookShareButton
          url={`${siteConfig.url}/blog/${postId}`}
          // quote="Check out this amazing content!"
          // hashtag="#react"
        >
          <FaFacebook className={iconStyles} />
        </FacebookShareButton>

        <TwitterShareButton
          url={`${siteConfig.url}/blog/${postId}`}
          title="Awesome article"
        >
          <FaXTwitter className={iconStyles} />
        </TwitterShareButton>

        <EmailShareButton
          url={`${siteConfig.url}/blog/${postId}`}
          subject={title}
          body={body}
        >
          <EmailIcon className={iconStyles} />
        </EmailShareButton>
      </div>
    </>
  );
};

export default SocialShare;
