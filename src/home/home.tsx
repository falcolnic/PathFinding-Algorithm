import { useState } from 'react';

const Home = () => {
    const [title] = useState<string>('Welcome to My Website!');
    const [line, setLine] = useState<string>('Hello world!');

    interface TextInputChangeEvent {
        target: { value: string };
    }

    const onTextInputChanged = (element: TextInputChangeEvent) => {
        setLine(element.target.value);
    };

    return (
        <div>
            <div>{title}</div>
            <div>The following line can be changed: </div>
            <p>{line}</p>
            <input
                type='text'
                value={line}
                onChange={onTextInputChanged}
            />
        </div>
    );
};

export default Home;