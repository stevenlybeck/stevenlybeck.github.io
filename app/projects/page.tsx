import Image from 'next/image'

export default function Projects() {
  return (
    <div>
      <h1>Software Engineering Projects</h1>
      <div>
        <h2>3D Robot Arm Visualization</h2>
        <Image src="/placeholder-robot-arm.jpg" alt="Placeholder for Robot Arm Visualization" width={400} height={300} />
        <p>A 3D visualization of a robot arm to visualize data streaming into a management platform for fleets of robotics.</p>
      </div>
      <div>
        <h2>WebRTC Bridge for Robot Control</h2>
        <Image src="/placeholder-webrtc.jpg" alt="Placeholder for WebRTC Bridge" width={400} height={300} />
        <p>A WebRTC bridge for direct control of mobile robots from a web browser.</p>
      </div>
      <div>
        <h2>NextJS-based UX Development Framework</h2>
        <Image src="/placeholder-nextjs.jpg" alt="Placeholder for NextJS Framework" width={400} height={300} />
        <p>A NextJS-based framework supporting UX development for hundreds of engineers.</p>
      </div>
    </div>
  )
}