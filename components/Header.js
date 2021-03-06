import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href={"/second"}>
      <a style={linkStyle}>Second Page</a>
    </Link>
    <Link href={"/third"}>
      <a style={linkStyle}>ROI</a>
    </Link>
  </div>
);

export default Header;
