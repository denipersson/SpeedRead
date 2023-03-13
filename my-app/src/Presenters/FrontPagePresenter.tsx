import FrontPageView from "../Views/FrontPageView";

export default function FrontPagePresenter(){

    function processText(text:string){
        const words = text.split(' ');
        const boldWords = words.map(word => {
            const first30Percent = Math.ceil(word.length * 0.5);
            const boldedText = `<strong>${word.slice(0, first30Percent)}</strong>${word.slice(first30Percent)}`;
            return boldedText;
        });
        return boldWords.join(' ');
    }

    return (
        <FrontPageView processText = {processText}></FrontPageView>
    )
}