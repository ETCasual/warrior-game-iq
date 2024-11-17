import { qData } from "@/data";
import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useFirestore, useFirestoreDocData } from "reactfire";

const PanelPage = () => {
  const staticData = qData;

  const [currentQ, setCurrentQ] = useState("q1");

  const firestore = useFirestore();
  const currentQRef = doc(firestore, "iq", "current");
  const gameRef = doc(firestore, "iq", currentQ);

  const updateCurrentQ = async (q: string) => {
    await updateDoc(currentQRef, {
      current: q,
    });
  };

  const { status: currentQStatus, data: currentQData } =
    useFirestoreDocData(currentQRef);

  useEffect(() => {
    if (currentQStatus !== "success") return;
    setCurrentQ(String(currentQData.current));
  }, [currentQData, currentQStatus]);

  const openAnswer = async () => {
    await updateDoc(gameRef, {
      touched: true,
    });
  };

  const reset = async () => {
    await updateDoc(gameRef, {
      touched: false,
    });
  };

  return currentQStatus === "success" ? (
    <main className="flex min-h-screen flex-col gap-3 bg-[url('/BG_BLANK.jpg')] bg-cover bg-center bg-no-repeat px-5 py-10">
      <div className="grid max-h-[450px] w-full grid-cols-3 flex-col gap-2 overflow-y-auto rounded-lg bg-red-300/70 p-2">
        {Object.keys(staticData).map((s) => (
          <button
            onClick={async () => {
              await reset().then(() => updateCurrentQ(s));
            }}
            key={s}
            className="w-full rounded-lg bg-white py-2 text-center font-[Arial] text-2xl uppercase shadow-lg"
          >
            {s}
          </button>
        ))}
      </div>
      <div className="flex w-full flex-row items-center gap-2">
        <button
          className={`w-full rounded-lg bg-white py-2 text-center font-[Arial] text-2xl uppercase shadow-lg`}
          onClick={openAnswer}
        >
          Reveal
        </button>

        <button
          onClick={() => reset()}
          className={`w-full rounded-lg bg-white py-2 text-center font-[Arial] text-2xl uppercase shadow-lg`}
        >
          Hide
        </button>
      </div>
    </main>
  ) : null;
};

export default PanelPage;
