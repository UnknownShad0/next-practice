import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="text-center text-gray-500 py-4 border-t mt-auto">
      © {new Date().getFullYear()} MyAdmin. All rights reserved.
    </footer>
  );
};

export default Footer;
