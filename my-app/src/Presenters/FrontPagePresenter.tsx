import FrontPageView from "../Views/FrontPageView";
import { createWorker } from 'tesseract.js';
import DOMPurify from 'dompurify';

export default function FrontPagePresenter() {

    async function extractImageText(imageUrl: string) {
        const worker = await createWorker();
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(imageUrl);
        await worker.terminate();
        let processedText:string = processText(text);
        return processedText;
    }

  function processText(text: string) {
    text = DOMPurify.sanitize(text);
    const words = text.split(' ');
    const boldWords = words.map((word) => {
      const amountToBolden = Math.ceil(word.length * 0.5);
      const boldedText = `<strong>${word.slice(0, amountToBolden)}</strong>${word.slice(amountToBolden)}`;
      return boldedText;
    });
    return boldWords.join(' ');
  }

  return (
    <FrontPageView
      processText={processText}
      extractImageText={extractImageText}
    />
  );
}