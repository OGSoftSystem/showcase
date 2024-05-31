import { FaXTwitter, FaPeopleGroup } from "react-icons/fa6";
import { FaHome, FaBook, FaBurn, FaBlog } from "react-icons/fa";
import { RiRoadMapLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { Newspaper, UserPlus, Users } from "lucide-react";

type Props = { label?: string; url: string; Icon?: any };
export const NAV_LINKS: Props[] = [
  {
    label: "Home",
    url: "/",
    Icon: FaHome,
  },
  {
    label: "Our-Story",
    url: "/our-story",
    Icon: FaBook,
  },
  {
    label: "RoadMap",
    url: "#road-map",
    Icon: RiRoadMapLine,
  },
  {
    label: "Burn",
    url: "/burn",
    Icon: FaBurn,
  },
  {
    label: "Blog",
    url: "/blog",
    Icon: FaBlog,
  },
  {
    label: "Community",
    url: "/community",
    Icon: FaPeopleGroup,
  },
  {
    label: "Twitter",
    url: "https://twitter.com",
    Icon: FaXTwitter,
  },
  {
    label: "Dashboard",
    url: "/admin",
    Icon: LuLayoutDashboard,
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
    title: "Twitter Launch ",
    location: "City1, State1",
    description: "Completed my degree in Computer Science",
    date: "2018",
    icon: "school",
    color: "blue",
  },
  {
    title: "100K+ Holders",
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
    title: "CoinGecko Listing",
    location: "City1, State1",
    description: "Completed my degree in Computer Science",
    date: "2020",
    icon: "school",
    color: "blue",
  },
  {
    title: "Slowed Mint Rate",
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
    date: "2020 - Now",
    icon: "school",
    color: "blue",
  },
];

export const timelineElements = elements.reverse();

export const FAQ: {
  question: string;
  answer: { main: string; points?: string[] };
}[] = [
  {
    question: "How do tokens work?",
    answer: {
      main: "This is a dummy text. Answers will be displayed here when available",
      // points: [
      //   "Goal Setting Tools: Set clear, achievable goals and track your progress with our intuitive interface.",
      //   "Automated Savings: Schedule automatic transfers from your checking account to your Every Penny account, making saving effortless",
      //   "Progress Visualization: Stay motivated with progress charts and celebratory milestones!",
      //   "Community Support: Connect with other savers, share tips, and celebrate each other's successes!",
      // ],
    },
  },
  {
    question: "What AI models are available?",
    answer: {
      main: "This is a dummy text. Answers will be displayed here when available",
      // points: [
      //   "Break Down Barriers: Small, consistent savings add up! Every Penny helps you conquer seemingly impossible goals.",
      //   "Stay Focused: Eliminate temptation by separating your spending and saving accounts.",
      //   "Progress Visualization: Stay motivated with progress charts and celebratory milestones!",
      //   "Empowerment Through Knowledge: Our financial resources and community forum equip you with the tools to manage your money with confidence.",
      // ],
    },
  },
  {
    question: "Where is my data stored?",
    answer: {
      main: "This is a dummy text. Answers will be displayed here when available",
      // points: [],
    },
  },
  {
    question: "What is a community? ",
    answer: {
      main: "This is a dummy text. Answers will be displayed here when available",
      // points: [
      //   "Non-Profit Focus: We're not driven by profit margins. We're driven by your success!",
      //   "Empowerment Over Selling: We don't push investment products or hidden fees. We focus on helping you save smart.",
      //   "Building Confidence: We believe financial literacy is key. We offer resources and support to help you understand your finances.",
      // ],
    },
  },
  {
    question: "What happens if I exceed my monthly limit? ",
    answer: {
      main: "This is a dummy text. Answers will be displayed here when available",
      // points: [
      //   "Non-Profit Focus: We're not driven by profit margins. We're driven by your success!",
      //   "Empowerment Over Selling: We don't push investment products or hidden fees. We focus on helping you save smart.",
      //   "Building Confidence: We believe financial literacy is key. We offer resources and support to help you understand your finances.",
      // ],
    },
  },
  {
    question: "When are my usage limits renewed? ",
    answer: {
      main: "This is a dummy text. Answers will be displayed here when available",
      // points: [
      //   "Non-Profit Focus: We're not driven by profit margins. We're driven by your success!",
      //   "Empowerment Over Selling: We don't push investment products or hidden fees. We focus on helping you save smart.",
      //   "Building Confidence: We believe financial literacy is key. We offer resources and support to help you understand your finances.",
      // ],
    },
  },
  {
    question: "Who can interact with my AI user? ",
    answer: {
      main: "This is a dummy text. Answers will be displayed here when available",
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
