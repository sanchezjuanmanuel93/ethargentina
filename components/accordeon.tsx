'use client'

import { useState } from "react";

interface Props {
  title: string;
  content: string;
}

export default function Accordion(props: Props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
      className="accordeon-content"
      onClick={toggle}
    >
      <div className={isShowing ? 'accordeon actived' : 'accordeon'}>
        <p className="title">{props.title}</p>
        <span>+</span>
      </div>
      <div
        className="content"
        style={{ display: isShowing ? "block" : "none" }}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
      <style jsx>{`
      * {
        font-family: 'futura-book-bt';
      }

      .accordeon-content {
        display: flex;
        width: 80%;
        flex-direction: column;
      }

      .accordeon {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        align-content: flex-start;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        text-align: center;
        color: #0B1628;
      }

      .accordeon > * {
        margin: 10px;
      }

      .title {
        font-size: 16px;
        padding: 5px;
        text-align: left;
      }

      .content {
        padding: 15px 30px;
        color: #0B1628;
        font-size: 16px;
      }

      .actived {
        border-radius: 53.5px;
        background-color: #0B1628;
        color: #B4F4FE;
      }

      `}</style>
    </div>
  );
}
