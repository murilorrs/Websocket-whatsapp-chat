type LoginPageProps = {
  tempName: string;
  setTempName: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setShowLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginPage({
  tempName,
  setTempName,
  setName,
  setShowLoginPage,
}: LoginPageProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Qual seu nome?</h2>
        <input
          type="text"
          className="border rounded px-3 py-2 w-full mb-4"
          placeholder="Digite seu nome"
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded w-full"
          onClick={() => {
            if (tempName.trim() !== '') {
              setName(tempName);
              setShowLoginPage(false);
            }
          }}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
