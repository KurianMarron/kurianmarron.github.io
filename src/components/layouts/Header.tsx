import { FaXTwitter, FaBluesky, FaGithub } from 'react-icons/fa6';

// ヘッダー
function Header() {
  return (
    <header className="w-full border-b border-gray-300 **:text-gray-800">
      <div className="flex justify-center p-4">
        <div className="flex justify-between items-center container">
          <div className="text-2xl">Kurian's Portfolio</div>
          <div className="hidden md:flex gap-8">
            <a href="https://x.com/KurianMarron" target="_blank">
              <FaXTwitter size={24}/>
            </a>
            <a href="https://bsky.app/profile/kurianmarron.bsky.social" target="_blank">
              <FaBluesky size={24}/>
            </a>
            <a href="https://github.com/KurianMarron" target="_blank">
              <FaGithub size={24}/>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
