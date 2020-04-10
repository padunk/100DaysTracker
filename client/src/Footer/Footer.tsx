import React, { ReactElement } from "react";
import { ReactComponent as GithubLogo } from "../icons/svg/github.svg";
import { ReactComponent as CodepenLogo } from "../icons/svg/codepen.svg";
import { ReactComponent as TwitterLogo } from "../icons/svg/twitter.svg";
import Wrapper from "../components/Wrapper/Wrapper";
import Gap from "../components/Gap/Gap";

interface Props {}

function Footer({}: Props): ReactElement {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
      <Wrapper customClass="text-center">
        <h4>
          Made with{" "}
          <span role="img" aria-label="purple heart">
            💜
          </span>{" "}
          by{" "}
          <a href="http://linkedin.com/in/abrahamanakagung">
            Abraham Anak Agung
          </a>{" "}
          <span className="text-gray-600 block sm:inline">
            <span role="img" aria-label="copyright">
              <sup>©️</sup>
            </span>
            {year}
          </span>
        </h4>
      </Wrapper>
      <Gap className="h-4" />
      <Wrapper customClass="flex flex-wrap justify-around pb-4 mx-auto">
        <div className="opacity-50 hover-nav">
          <a
            href="http://github.com/padunk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo className="w-6 h-6" />
          </a>
        </div>
        <div className="opacity-50 hover-nav">
          <a
            href="http://codepen.io/padunk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodepenLogo className="w-6 h-6" />
          </a>
        </div>
        <div className="opacity-50 hover-nav">
          <a
            href="http://twitter.com/anakagungcorp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogo className="w-6 h-6" />
          </a>
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;
