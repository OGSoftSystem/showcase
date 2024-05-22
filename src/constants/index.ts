import { IconBaseProps } from "react-icons";
import { FaXTwitter, FaPeopleGroup } from "react-icons/fa6";

type Props = { label?: string; url: string; Icon?: any };
export const NAV_LINKS: Props[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Our Story",
    url: "/our-story",
  },
  {
    label: "RoadMap",
    url: "#road-map",
  },
  {
    label: "Burn",
    url: "/burn",
  },
  {
    label: "Community",
    url: "/community",
    Icon: FaPeopleGroup,
  },
  {
    label: "X",
    url: "https://twitter.com",
    Icon: FaXTwitter,
  },
];

export const NOTES = [
  {
    title: "Real Innovation",
    text: "Embark on innovation with our pioneering crypto project, shaping the future of stablecoins on PulseChain. Powered by blockchain, we are redefining finance and beyond. Join the revolution!",
  },
  {
    title: "No Admin Keys",
    text: "Aligned with Pulsechain's visionary founder, Richard Heart, our innovative stablecoin champions TRUE permissionless decentralization. The only other stablecoin to pDAI with no admin keys.",
  },
  {
    title: "Pegging To $1",
    text: "Join us as we follow in the footsteps of pDAI's exponential growth (5000x in year 1), paving the way to stability with $pLUSD. Using innovative methods like algorithms and dynamic collateral, we're set to peg to $1.",
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
