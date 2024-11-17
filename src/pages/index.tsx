/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { qData, type Question } from "@/data";
import { doc } from "firebase/firestore";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useFirestore, useFirestoreDocData } from "reactfire";

export default function Home() {
  const db = useFirestore();

  const staticData = qData;

  const [currentQ, setCurrentQ] = useState<Question>("q1");
  const currentWord = staticData[currentQ].question;
  const currentAnswers = staticData[currentQ].answers;

  const dbRef = doc(db, "iq", currentQ);

  const currentQuestionFirebaseRef = doc(db, "iq", "current");

  const { status: currentQFirebaseStatus, data: currentQFirebaseData } =
    useFirestoreDocData(currentQuestionFirebaseRef);
  const { status, data } = useFirestoreDocData(dbRef);

  useEffect(() => {
    if (currentQFirebaseStatus !== "success") return;
    setCurrentQ(currentQFirebaseData.current as Question);
  }, [currentQFirebaseData, currentQFirebaseStatus]);

  return (
    <>
      <Head>
        <title>Warrior Nation 2024</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[url('/BG_BLANK.jpg')] bg-cover bg-center bg-no-repeat p-14">
        {status === "success" && (
          <div className="flex h-full w-full flex-grow flex-col items-center justify-between rounded-lg p-12">
            <div className="stack relative -mt-12 w-full font-ocean text-xl leading-[1.1] text-white [--stacks:3]">
              <span className="absolute top-0 w-full text-center text-[70px] uppercase tracking-widest [--index:1]">
                {currentWord}
              </span>
              <span className="absolute top-0 w-full text-center text-[70px] uppercase tracking-widest [--index:2]">
                {currentWord}
              </span>
              <span className="absolute top-0 w-full text-center text-[70px] uppercase tracking-widest [--index:3]">
                {currentWord}
              </span>
            </div>

            <div
              className={`flex max-h-[420px] w-full flex-grow flex-col gap-4`}
            >
              {Object.entries(currentAnswers).map(([k, v]) => {
                return (
                  <div
                    key={k}
                    className={`flex h-full w-full text-[55px] transition-colors duration-300 ${!data.touched ? "bg-white/20" : v?.correct ? "bg-green-400/30" : "bg-red-400/30"} flex-row items-center justify-center gap-4 rounded-xl border-2 border-gray-500 text-center font-ocean text-white`}
                  >
                    {v?.word}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
