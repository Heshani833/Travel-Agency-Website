import React, { Suspense } from "react";
import "../Style/Home.css";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ParticleSphere } from "@/components/ui/cosmos-3d-orbit-gallery";

const Home = () => {
  const unsplashImages = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=compress&cs=tinysrgb&w=600",
    // Duplicated to create 24 images
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <>
      <div className="HomeImg">
        <div className="HomeCanvas">
          <Canvas camera={{ position: [-10, 1.5, 10], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.2} />
            <Suspense fallback={null}>
              <ParticleSphere images={unsplashImages} />
            </Suspense>
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          </Canvas>
        </div>

        <div className="Home-text">
          <h1>Discover The World</h1>
          <p>
            Explore the world with us adventure, comfort, and unforgettable
            memories!
          </p>
          <br></br>
          <a href="/Home">Your Plan</a>
        </div>
      </div>

      <Destination />
      <Trip />
      <Footer />
    </>
  );
};

export default Home;
