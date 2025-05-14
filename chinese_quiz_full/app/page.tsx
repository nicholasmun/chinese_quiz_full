import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const questions = [
  {
    id: 1,
    audio: "/audio/1.mp3",
    text: "Nǐ hǎo! Qǐng jiǎndān de zuò zìwǒ jièshào! (Name, age, nationality, where do you live)",
    answerPlaceholder: "Type your self-introduction here..."
  },
  {
    id: 2,
    audio: "/audio/2.mp3",
    text: "Nǐ yǒu shé me àihào? (What are your hobbies? At least 2)",
    answerPlaceholder: "E.g., wǒ xǐhuān tī zúqiú hé kàn shū"
  },
  {
    id: 3,
    audio: "/audio/3.mp3",
    text: "Nǐ de fángjiān dà ma? Fángjiān li yǒu shé me? (Is your room big? What is in your room?)",
    answerPlaceholder: "Describe your room here..."
  },
  {
    id: 4,
    audio: "/audio/4.mp3",
    text: "Nǐ zǎoshang yībān huì chī zǎofàn ma? (Do you usually eat breakfast?)",
    answerPlaceholder: "Shì de, wǒ chī miànbāo hé hē niúnǎi."
  },
  {
    id: 5,
    audio: "/audio/5.mp3",
    text: "Nǐ huì shuō shénme yǔyán? (What languages can you speak?)",
    answerPlaceholder: "E.g., wǒ huì shuō yīngyǔ hé hànyǔ."
  },
  {
    id: 6,
    audio: "/audio/6.mp3",
    text: "Nǐ de bān li yǒu jǐ gè nánshēng hé nǚshēng? (How many boys and girls in your class?)",
    answerPlaceholder: "E.g., 10 gè nánshēng, 15 gè nǚshēng."
  },
  {
    id: 7,
    audio: "/audio/7.mp3",
    text: "Nǐ de xuéxiào dà bù dà? Xuéxiào li yǒu shé me? (Is your school big? What’s in it?)",
    answerPlaceholder: "Wǒ de xuéxiào hěn dà, yǒu túshūguǎn, jiàoshì hé cāntīng."
  },
  {
    id: 8,
    audio: "/audio/8.mp3",
    text: "Nǐ de jiàoshì zài jǐ lóu? (Which floor is your classroom on?)",
    answerPlaceholder: "Wǒ de jiàoshì zài sān lóu."
  },
  {
    id: 9,
    audio: "/audio/9.mp3",
    text: "Hòutiān jǐ hào? Xīngqí jǐ? (What’s the date and weekday the day after tomorrow?)",
    answerPlaceholder: "E.g., Hòutiān shì xīngqísì, shíyī hào."
  },
  {
    id: 10,
    audio: "/audio/10.mp3",
    text: "Nǐ qùguò zhōngguó ma? Zěnme qù? (Have you been to China? How?)",
    answerPlaceholder: "Wǒ qùguò, wǒ zuò fēijī qù."
  },
  {
    id: 11,
    audio: "/audio/11.mp3",
    text: "Nǐ jīntiān chuān shénme yīfú? (What are you wearing today?)",
    answerPlaceholder: "Wǒ chuān bái sè de chènshān hé lán kùzi."
  },
  {
    id: 12,
    audio: "/audio/12.mp3",
    text: "Qǐngwèn, xiànzài jǐ diǎnle? (What time is it now?)",
    answerPlaceholder: "E.g., xiànzài shì shí'èr diǎn bàn."
  },
  {
    id: 13,
    audio: "/audio/13.mp3",
    text: "Nǐ māmā huì kāichē ma? (Can your mom drive?)",
    answerPlaceholder: "Shì de, wǒ māmā huì kāichē."
  },
  {
    id: 14,
    audio: "/audio/14.mp3",
    text: "Nǐ měi gè xīngqíliù zuò shénme? (What do you do every Saturday?)",
    answerPlaceholder: "Wǒ qù shāngdiàn hé kàn diànyǐng."
  },
  {
    id: 15,
    audio: "/audio/15.mp3",
    text: "Nǐ xǐhuān yǎng chǒngwù ma? Yǎng shénme chǒngwù? (Do you like pets? What kind?)",
    answerPlaceholder: "Wǒ xǐhuān yǎng gǒu."
  }
];

export default function ChineseQuiz() {
  const [answers, setAnswers] = useState({});

  const handleChange = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="p-4 space-y-6 max-w-3xl mx-auto">
      {questions.map(q => (
        <Card key={q.id} className="bg-white shadow-md">
          <CardContent className="space-y-2 p-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <audio controls src={q.audio} className="w-full md:w-40" />
              <p className="text-base md:text-lg font-medium">{q.text}</p>
            </div>
            <Input
              placeholder={q.answerPlaceholder}
              value={answers[q.id] || ""}
              onChange={(e) => handleChange(q.id, e.target.value)}
            />
          </CardContent>
        </Card>
      ))}
      <Button className="mt-4 w-full md:w-auto">Submit</Button>
    </div>
  );
}
