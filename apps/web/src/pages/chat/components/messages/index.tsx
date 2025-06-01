import { MdEmojiEmotions } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
import { AiFillAudio } from 'react-icons/ai';

export default function MessagesPage() {
  return (
    <main className="flex-1 flex flex-col bg-customDarkGreen">
      <header className="p-6 bg-customLightGreen flex items-center">
        <img
          src="./foto-perfil.png"
          alt="Chat Profile"
          className="absolute w-14 h-14 rounded-full object-cover mr-3"
        />
        <h2 className="text-lg font-semibold ml-20">Juliana Castelo</h2>
      </header>

      <div className="flex-1 p-4 overflow-y-auto bg-[url('/wallpaper.png')] bg-cover bg-center">
        <div className="mb-2 flex justify-start relative">
          <div className="bg-customMessageReceived p-3 rounded inline-block relative">
            Message from contact
            <span className="absolute bottom-0 right-2 text-gray-400 text-xxs">
              23:59
            </span>
          </div>
        </div>
        <div className="mb-2 flex justify-end relative">
          <div className="bg-customMessageSend p-3 rounded inline-block text-gray-100 relative">
            My message
          </div>
        </div>
      </div>

      <footer className="p-4 bg-customLightGreen border-t border-customGrey flex items-center">
        <div className="flex items-center">
          <MdEmojiEmotions
            style={{
              color: '#62717a',
              fontSize: '25px',
              marginRight: '20px',
            }}
          />
          <FaPlus style={{ color: '#62717a', fontSize: '25px' }} />
        </div>
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 mx-4 p-2 border border-customGrey bg-customLighterGreen text-gray-100 rounded"
          style={{ outline: 'none' }}
        />
        <AiFillAudio style={{ color: '#62717a', fontSize: '25px' }} />
      </footer>
    </main>
  );
}
