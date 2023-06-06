const BoatVideo = () => {
  return (
    <video className="h-100vh w-full object-cover" autoPlay muted loop>
        <source src="src/assets/boat-video.mp4" type="video/mp4"/>
    </video>
  )
}

export default BoatVideo
