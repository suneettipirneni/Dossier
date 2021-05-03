import React, { useRef, useEffect } from 'react';

type AnimatedHueProps = {
    className?: string
    width?: number,
    height?: number,
    style?: React.CSSProperties,
    children?: JSX.Element,
}

/**
 * A component which displays an animated gradient backgound, code originally sourced from: https://www.html5canvastutorials.com/advanced/html5-canvas-animated-gradient-background/
 */
function AnimatedHue({ className, width = 32, height = 32, style = {}, children = <> </> }: AnimatedHueProps): JSX.Element {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const $ = canvasRef.current?.getContext('2d');

        if ($ == null) {
            return;
        }

        const col = function(x: number, y: number, r: number, g: number, b: number) {
            $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            $.fillRect(x, y, 1,1);
        }
        const R = function(x: number, y: number, t: number) {
            return(Math.floor(150 + 64 * Math.cos( (x * x - y * y) / 300 + t)) );
        }

        const G = function(x: number, y: number, t: number) {
            return(Math.floor(150 + 64 * Math.sin( (x * x * Math.cos(t / 4) + y *y * Math.sin(t / 3)) / 300)));
        }

        const B = function(x: number, y: number, t: number) {
            return(Math.floor(150 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 50) * (x - 50) + (y - 50) * (y - 50)) / 1100)));
        }

        let t = 0;

        const run = function() {
            for(let x = 0; x <= 35; x++) {
                for(let y = 0; y <= 35; y++) {
                    col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
                }
            }
            t = t + 0.01;
            window.requestAnimationFrame(run);
        }

        run();
    }, [])

    return (
        <div style={style} className={className}>
            <div style={{position: 'relative', display: 'flex', width: '100%'}}>
                <div style={{ zIndex: 1, position: 'absolute', width: '100%', height: '100%'}}>
                    <div className={className}>
                        {children}
                    </div>
                </div>
                <canvas style={{position: 'relative', zIndex: -1, display: 'block', height: '100vh', width: '100vw'}} ref={canvasRef} height={height} width={width} />
            </div>
        </div>
    );
}

export default AnimatedHue;