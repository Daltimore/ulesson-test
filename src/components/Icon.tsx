import { ReactComponent as Home } from "../assets/icons/home.svg";
import { ReactComponent as LiveClasses } from "../assets/icons/live-classes.svg";
import { ReactComponent as Homework } from "../assets/icons/homework.svg";
import { ReactComponent as VideoLibrary } from "../assets/icons/video.svg";
import { ReactComponent as MockExam } from "../assets/icons/mock.svg";
import { ReactComponent as Multiplayer } from "../assets/icons/multiplayer.svg";
import { ReactComponent as PracticeExam } from "../assets/icons/practice.svg";
import { ReactComponent as Notification } from "../assets/icons/bell.svg";
import { ReactComponent as Report } from "../assets/icons/report.svg";
import { ReactComponent as LearningPlan } from "../assets/icons/cart.svg";
import { ReactComponent as Subscriptions } from "../assets/icons/card.svg";
import { ReactComponent as Biology } from "../assets/icons/biology.svg";
import { ReactComponent as lesson1 } from "../assets/images/lesson-one.svg";
import { ReactComponent as lesson2 } from "../assets/images/lesson-two.svg";
import { ReactComponent as lesson3 } from "../assets/images/lesson-three.svg";
import { ReactComponent as lesson4 } from "../assets/images/lesson-four.svg";
import { ReactComponent as lesson5 } from "../assets/images/lesson-five.svg";


type IconComponentProps = { name: string };
type IconTypes = { [name: string]: ReactSVGComponent };

const iconTypes: IconTypes = {
   dashboard: Home,
   liveClasses: LiveClasses,
   homework: Homework,
   video: VideoLibrary,
   mock: MockExam,
   multiplayer: Multiplayer,
   practice: PracticeExam,
   notifications: Notification,
   report: Report,
   cart: LearningPlan,
   subscriptions: Subscriptions,
   biology: Biology,
   lesson1: lesson1,
   lesson2: lesson2,
   lesson3: lesson3,
   lesson4: lesson4,
   lesson5: lesson5,
};

const IconComponent = ({ name, ...props }: IconComponentProps) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;