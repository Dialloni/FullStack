import React, { useState } from 'react';

const ConditionRender = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            {isVisible ? (
                <div>Component is Visible</div>
            ) : (
                <div>Component is Hidden</div>
            )}
            <button onClick={toggleVisibility}>
                Toggle Visibility
            </button>
        </div>
    );
};

export default ConditionRender;