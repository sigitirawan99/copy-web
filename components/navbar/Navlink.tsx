import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import {
  FaCubes,
  FaCloud,
  FaShieldAlt,
  FaRegFileAlt,
  FaBullhorn,
  FaComments,
} from "react-icons/fa";

const Navlink = () => {
  return (
    <NavigationMenu viewport={false} className="list-none flex gap-4">
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/">Hosting</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/about">Server</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/products">Domain</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="cursor-pointer">
          SSL
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-white border-gray-300">
          <ul className="grid w-[220px] border-none gap-5">
            <li>
              <NavigationMenuLink asChild>
                <Link href="#">SSL Digicert</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="#">SSL Sectigo</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="#">SSL Geotrust</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="#">SSL Thawte</Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="cursor-pointer">
          Services
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-white border-gray-300">
          <ul className="grid w-[300px] border-none gap-5">
            <li>
              <NavigationMenuLink asChild>
                <Link href="#" className="flex-row items-center gap-1">
                  <FaCubes /> Dewacloud paaS
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="#" className="flex-row items-center gap-1">
                  <FaCloud />
                  DewaVPS Cloud Server
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="#" className="flex-row items-center gap-1">
                  <FaShieldAlt />
                  Dewaguard Cyber Security
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="#" className="flex-row items-center gap-1">
                  <FaRegFileAlt />
                  Dewaweb SiteProtect (Prewiew Launch)
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="#" className="flex-row items-center gap-1">
                  <FaBullhorn /> Server CBT (E-Learning)
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="#" className="flex-row items-center gap-1">
                  <FaComments /> Dewatalks
                </Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="cursor-pointer">
          Promo
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-white border-gray-300">
          <ul className="grid w-[220px] border-none gap-5">
            <li>
              <NavigationMenuLink asChild>
                <Link href="#">#SAHABATONLINE</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="#">Migrasi Ke Dewaweb</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="#">Gratis Premium Addons</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="#">#BEBASMALWARE</Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
};

export default Navlink;
