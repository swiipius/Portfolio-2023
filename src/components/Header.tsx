import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center z-30">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        {/* Social icons */}
        <SocialIcon
          url="https://github.com/swiipius"
          fgColor="grey"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/pierresim"
          fgColor="grey"
          bgColor="transparent"
          target="_blank"
        />
      </motion.div>

      <Link href='#contact'>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="grey"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Contactez moi
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;