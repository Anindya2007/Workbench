const express=require('express');
const app=express();
const port=3000;

app.get('/github/activity',(req,res)=>{
    async function fetchGithubActivity() {
        const response = await fetch('https://github-contributions.vercel.app/api/v1/Anindya2007');
        const data = await response.json();

        const today=new Date();

        const activity=data.contributions.filter((day)=>{
            return new Date(day.date)<=today;
        });

        res.json(activity.slice(0,22));
    };

    fetchGithubActivity().catch(error => {
        console.error('Error fetching GitHub activity:', error);
        res.status(500).json({ error: 'Failed to fetch GitHub activity' });
    });
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});