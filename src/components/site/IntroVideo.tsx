import introVideo from "@/assets/logovid.mp4";
import "../../styles.css";

interface IntroVideoProps {
  onFinish: () => void;
}

export default function IntroVideo({ onFinish }: IntroVideoProps) {
  return (
    <div className="intro-container">
      <video autoPlay muted playsInline preload="auto" className="intro-video" onEnded={onFinish}>
        <source src={introVideo} type="video/mp4" />
      </video>
    </div>
  );
}
