import { lazy, Suspense, useState } from "react";
import { Button } from "react-bootstrap";
const LazyLoadChild = lazy(() => import("./LazyLoadChildComponent"));

function LazyLoadParent() {
    const [isLoad, SetIsLoad] = useState(false);
    return (
        <div>
            <Button
                type="button"
                className="w-full mb-2"
                variant="primary"
                onClick={() => SetIsLoad(true)}
            >
                Load Users Data
            </Button>
            
            {/* 2. Wrap the component in Suspense and provide a fallback UI */}

            {
                isLoad
                ?
                <Suspense fallback={<div>loading...</div>}>
                    <LazyLoadChild />
                </Suspense>
                :
                null
            }
        </div>
    );
}

export default LazyLoadParent;