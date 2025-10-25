function AddonCards() {
  const addons = [
    {
      title: 'Vanilla Extended',
      description: '[Achievements] Expands the vanilla experience with new gear, materials, and structures with being achievement-friendly!',
      link: 'https://www.curseforge.com/minecraft-bedrock/addons/vanilla-extended'
    },
    {
      title: 'Better NightVision',
      description: 'Toggle Night Vision Instantly, No Commands Needed! (Does not disable achievements) The Lightweight Night Vision Solution for Minecraft Bedrock (1.21+)',
      link: 'https://www.curseforge.com/minecraft-bedrock/addons/better-nightvision'
    },
    {
      title: 'Simple AutoSmelt',
      description: 'Instant Smelting Without Furnaces or Lag! Smelt ores automatically the moment they drop, no more waiting, no more fuel, and no command spam.',
      link: 'https://www.curseforge.com/minecraft-bedrock/addons/simple-autosmelt'
    }
  ]

  return (
    <div className="cards">
      {addons.map((addon, index) => (
        <div key={index} className="card">
          <h3>{addon.title}</h3>
          <p>{addon.description}</p>
          <a href={addon.link}>
            <button>View Add-On</button>
          </a>
        </div>
      ))}
    </div>
  )
}

export default AddonCards
