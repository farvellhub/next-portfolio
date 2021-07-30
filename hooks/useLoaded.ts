import { useState, useEffect } from "react";

const useLoaded = (): boolean => {
    const [ loaded, setLoaded ] = useState( false );
    
    useEffect(() => {
        setTimeout(() => {
            setLoaded( true );
        }, 2000 );
    }, []);

    return loaded;
};

export default useLoaded;