import { FaXTwitter } from "react-icons/fa6";
import { FaHome, FaBook, FaBurn, FaBlog } from "react-icons/fa";
import { RiRoadMapLine } from "react-icons/ri";
import { Newspaper, Users } from "lucide-react";

type Props = { label?: string; url: string; Icon?: any };
export const NAV_LINKS: Props[] = [
  {
    label: "Home",
    url: "/",
    Icon: FaHome,
  },
  {
    label: "Our Story",
    url: "/our-story",
    Icon: FaBook,
  },
  {
    label: "RoadMap",
    url: "/?#road-map",
    Icon: RiRoadMapLine,
  },
  {
    label: "Burn",
    url: "/burn",
    Icon: FaBurn,
  },
  // {
  //   label: "Blog",
  //   url: "/blog",
  //   Icon: FaBlog,
  // },
  // {

  {
    label: "Twitter",
    url: "https://x.com/pulseliquity",
    Icon: FaXTwitter,
  },
];

export const NOTES = [
  {
    title: "Real Innovation",
    text: "Embark on innovation with our pioneering crypto project, shaping the future of stablecoins on PulseChain. Powered by blockchain, we are redefining finance and beyond. Join the revolution!",
    btnText: "Explore",
  },
  {
    title: "No Admin Keys",
    text: "Aligned with Pulsechain's visionary founder, Richard Heart, our innovative stablecoin champions TRUE permissionless decentralization. The only other stablecoin to pDAI with no admin keys.",
    btnText: "Try",
  },
  {
    title: "Pegging To $1",
    text: "Join us as we follow in the footsteps of pDAI's exponential growth (5000x in year 1), paving the way to stability with $pLUSD. Using innovative methods like algorithms and dynamic collateral, we're set to peg to $1.",
    btnText: "Explore",
  },
];

const elements = [
  {
    title: "Slowed Mint Rate",
    location: "City1, State1",
    description: "Completed my degree in Computer Science",
    date: "2022 - Now",
    icon: "school",
    color: "blue",
  },
  {
    title: "Twitter Launch",
    location: "City1, State1",
    description: "Completed my degree in Computer Science",
    date: "2020",
    icon: "school",
    color: "blue",
  },
  {
    title: "CoinGecko Listing",
    location: "City1, State1",
    description: "Completed my degree in Computer Science",
    date: "2020",
    icon: "school",
    color: "blue",
  },
  {
    title: "Dex Listings",
    location: "City1, State1",
    description: "Completed my degree in Computer Science",
    date: "2020",
    icon: "school",
    color: "blue",
  },

  {
    title: "95-99% Supply Burn",
    location: "City1, State1",
    description: "Completed my degree in Computer Science",
    date: "2020",
    icon: "school",
    color: "blue",
  },
  {
    title: "Peggening",
    location: "City1, State1",
    description: "Completed my degree in Computer Science",
    date: "2020",
    icon: "school",
    color: "blue",
  },
];

export const timelineElements = elements;

export const FAQ: {
  question: string;
  answer: { main: string; points?: string[] };
}[] = [
  {
    question: "What is pLUSD?",
    answer: {
      main: "pLUSD is a stablecoin on the PulseChain network, designed to reach and maintain $1 parity. It is a fork of the original LUSD on ETH, optimized for PulseChain’s enhanced performance.",
      // points: [
      //   "Goal Setting Tools: Set clear, achievable goals and track your progress with our intuitive interface.",
      //   "Automated Savings: Schedule automatic transfers from your checking account to your Every Penny account, making saving effortless",
      //   "Progress Visualization: Stay motivated with progress charts and celebratory milestones!",
      //   "Community Support: Connect with other savers, share tips, and celebrate each other's successes!",
      // ],
    },
  },
  {
    question: "How does pLUSD maintain its $1 value?",
    answer: {
      main: "While pLUSD is designed to reach $1 parity, it has not yet achieved this goal. The protocol focuses on buying and burning tokens via our GIFF collaboration and will use a rebalancer protocol to maintain stability at $1.",
      // points: [
      //   "Break Down Barriers: Small, consistent savings add up! Every Penny helps you conquer seemingly impossible goals.",
      //   "Stay Focused: Eliminate temptation by separating your spending and saving accounts.",
      //   "Progress Visualization: Stay motivated with progress charts and celebratory milestones!",
      //   "Empowerment Through Knowledge: Our financial resources and community forum equip you with the tools to manage your money with confidence.",
      // ],
    },
  },
  {
    question: "How much of pLUSD supply will we be burning?",
    answer: {
      main: "95-99% if all available supply.",
      // points: [],
    },
  },
  {
    question: "How can I acquire pLUSD?",
    answer: {
      main: `
      You can buy pLUSD via pulsex.com, piteas.io or 9inch.io.
      `,
      // points: [
      //   "Non-Profit Focus: We're not driven by profit margins. We're driven by your success!",
      //   "Empowerment Over Selling: We don't push investment products or hidden fees. We focus on helping you save smart.",
      //   "Building Confidence: We believe financial literacy is key. We offer resources and support to help you understand your finances.",
      // ],
    },
  },
  {
    question: "Is pLUSD secure?",
    answer: {
      main: "Yes, pLUSD is built on the robust infrastructure of PulseChain and follows the same security protocols as the original LUSD, which is part of an immutable contract.",
      // points: [
      //   "Non-Profit Focus: We're not driven by profit margins. We're driven by your success!",
      //   "Empowerment Over Selling: We don't push investment products or hidden fees. We focus on helping you save smart.",
      //   "Building Confidence: We believe financial literacy is key. We offer resources and support to help you understand your finances.",
      // ],
    },
  },
  {
    question: "Who is behind pLUSD?",
    answer: {
      main: "The original LUSD team on ETH invented it and Richard Heart copied all smart contacts from Ethereum to PulseChain. It is now a community takeover on PulseChain.",
      // points: [
      //   "Non-Profit Focus: We're not driven by profit margins. We're driven by your success!",
      //   "Empowerment Over Selling: We don't push investment products or hidden fees. We focus on helping you save smart.",
      //   "Building Confidence: We believe financial literacy is key. We offer resources and support to help you understand your finances.",
      // ],
    },
  },
];

export const DASHBOARD_LINKS = [
  {
    title: "Users",
    description: "View all users, create, update and delete.",
    Icon: Users,
    href: "/admin/users",
  },
  {
    title: "Posts",
    description: "View all posts, create, update and delete",
    Icon: Newspaper,
    href: "/admin/posts",
  },
];

export const DUMMY_POSTS = [
  {
    imageUrl: "/assets/images/post.png",
    title: "The need for a title",
    subtitle: "Post subtitle",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.",
    date: Date.now(),
    category: "Crypto",
    postId: "1",
    author: "Mela",
  },
  {
    imageUrl: "/assets/images/post.png",
    title: "Amazing things are happening.",
    subtitle: "This is a Post subtitle",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.",
    date: Date.now(),
    category: "Banking",
    postId: "2",
    author: "Mela",
  },
  {
    imageUrl: "/assets/images/post.png",
    title: "Keep it coming.",
    subtitle: "Post subtitle",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.",
    date: Date.now(),
    category: "Investment",
    postId: "3",
    author: "Mela",
  },
  {
    imageUrl: "/assets/images/post.png",
    title: "Keep it coming.",
    subtitle: "Post subtitle",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus dignissimos sapiente expedita, beatae natus fugiat ratione. Voluptatum quo perferendis harum accusamus? Odio enim incidunt hic voluptatum maxime, accusamus eaque quod laborum similique dignissimos! Voluptates itaque reprehenderit et nobis, rerum quisquam dolorem earum beatae consequatur aspernatur nihil labore, laudantium commodi.",
    date: Date.now(),
    category: "Investment",
    postId: "4",
    author: "Mela",
  },
];

export const burnVideoLink =
  "https://www.youtube.com/embed/PxWh__9ttN4?si=I4ySVBvZ0QYieG2d";
