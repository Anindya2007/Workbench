import { useState, useEffect } from 'react';
import WidgetLayout from "../../ui/widgetLayout";

export default function Github() {
    const [activity, setActivity] = useState([]);

    return (<WidgetLayout>
        <p className="text-white">Github Widget</p>
    </WidgetLayout>)
}