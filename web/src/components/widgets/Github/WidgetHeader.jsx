import GithubIcon from '../../../assets/Github.png';

export default function WidgetHeader() {
    return (
        <div className='flex items-center justify-between'>
            <p className='text-indigo-200'>
                <img src={GithubIcon} className='h-5 w-5 rounded-xl border border-indigo-100/50 inline mr-2'/>
                GitHubActivity</p>
            <p className='text-indigo-200'>Last 60 days</p>
        </div>
    );
}