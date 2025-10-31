import { FaXTwitter, FaBluesky, FaGithub } from 'react-icons/fa6';

// フッター
function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-gray-300 **:text-gray-500">
      <div className="flex justify-center p-8">
        <div className="flex flex-col gap-8 items-center container">
          <div className="flex gap-8">
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
          <div>© 2025 KurianMarron</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
