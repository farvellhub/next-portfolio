import { useRouter } from "next/router";
import { useEffect } from "react";

import NProgress from "nprogress";


const useEventRouter = (): void => {
    const router = useRouter();
    
    useEffect(() => {
        const start = () => {
            NProgress.start();
        };

        const stop = () => {
            NProgress.done();
        };

        router.events.on( "routeChangeStart", start );
        router.events.on( "routeChangeComplete", stop );
        router.events.on( "routeChangeError", stop );
        
        return () => {
            router.events.off( "routeChangeStart", start );
            router.events.off( "routeChangeComplete", stop );
            router.events.off( "routeChangeError", stop );
        };
    }, [ router ]);
};

export default useEventRouter;