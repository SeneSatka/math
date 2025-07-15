export const drawCoordinates = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    let pad = 10;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 0.5;
    ctx.stroke();
    ctx.closePath();
    let step = 20;
    for (let x = width / 2 + step; x < width - pad; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, height / 2 - 3);
        ctx.lineTo(x, height / 2 + 3);
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "#fff";
        ctx.font = "7px Arial";
        const text = String(Math.round((x - width / 2) / step));
        ctx.fillText(text, x - ctx.measureText(text).width / 2, height / 2 + 10);
    }
    for (let x = width / 2 - step; x >= pad; x -= step) {
        ctx.beginPath();
        ctx.moveTo(x, height / 2 - 3);
        ctx.lineTo(x, height / 2 + 3);
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "#fff";
        ctx.font = "7px Arial";
        const text = String(Math.round((x - width / 2) / step));
        ctx.fillText(text, x - ctx.measureText(text).width / 2, height / 2 + 10);
    }
    for (let y = height / 2 + step; y < height - pad; y += step) {
        ctx.beginPath();
        ctx.moveTo(width / 2 - 3, y);
        ctx.lineTo(width / 2 + 3, y);
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "#fff";
        ctx.font = "7px Arial";
        const text = String(Math.round((height / 2 - y) / step));
        ctx.fillText(text, width / 2 + 10, y + 3);
    }
    for (let y = height / 2 - step; y >= pad; y -= step) {
        ctx.beginPath();
        ctx.moveTo(width / 2 - 3, y);
        ctx.lineTo(width / 2 + 3, y);
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "#fff";
        ctx.font = "7px Arial";
        const text = String(Math.round((height / 2 - y) / step));
        ctx.fillText(text, width / 2 + 10, y + 3);
    }
    ctx.fillStyle = "#fff";
    ctx.font = "8px Arial";
    ctx.fillText("O", width / 2 + 5, height / 2 + 10);
}