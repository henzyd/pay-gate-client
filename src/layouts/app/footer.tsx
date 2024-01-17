import { IconButton } from "@mui/material";
import { AiOutlineGithub } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full gap-12 bg-Secondary p-4 py-4">
      <IconButton aria-label="henzyd-github">
        <a href="https://github.com/henzyd" target="_blank" rel="noopener noreferrer">
          <AiOutlineGithub className="text-2xl" fill={"white"} />
        </a>
      </IconButton>
      <IconButton aria-label="henzyd-email">
        <a href="mailto:anachunauchechukwu@gmail.com">
          <TfiEmail className="text-2xl" fill={"white"} />
        </a>
      </IconButton>
      <IconButton aria-label="henzyd-linkedin">
        <a
          href="https://www.linkedin.com/in/uchechukwu-anachuna/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin fill={"#0076B2"} className={"text-2xl text-white"} />
        </a>
      </IconButton>
    </footer>
  );
}
