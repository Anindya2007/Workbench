import ResumePDF from '../../assets/Resume.pdf';

export default function Resume() {
    return (
        <embed
            src={ResumePDF}
            type="application/pdf"
            className="w-full h-full"
        />
    );
}